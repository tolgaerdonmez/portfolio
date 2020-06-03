const PATH = require(`path`);
const { getReadme } = require("./config/github");

module.exports.onCreateNode = async ({ node, actions }) => {
  if (node.internal.type === "GithubData") {
    const { createNodeField } = actions;

    const repoNames = node.data.user.repositories.nodes.map(({ name }) => name);
    const pages = [];
    for (let i = 0; i < repoNames.length; i++) {
      const repo = repoNames[i];
      try {
        const { data } = await getReadme(repo);
        pages.push({ name: repo, path: "/projects/" + repo, data });
      } catch {
        pages.push({ name: repo, path: "/projects/" + repo, data: null });
      }
    }
    createNodeField({
      node,
      name: `projectPages`,
      value: pages,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      githubData {
        fields {
          projectPages {
            name
            data
            path
          }
        }
      }
    }
  `);
  result.data.githubData.fields.projectPages.forEach(({ name, path, data }) => {
    if (!data) return;
    console.log("path", path);
    createPage({
      path: path,
      component: PATH.resolve(`./src/templates/ProjectPage.js`),
      context: {
        name,
        data,
      },
    });
  });
};
