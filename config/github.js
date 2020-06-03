const axios = require("axios").default;

const username = process.env.GITHUB_USERNAME;

const getReadme = repo =>
  axios.get(
    `https://raw.githubusercontent.com/${username}/${repo}/master/README.md`
  );

module.exports = {
  apiToken: process.env.GITHUB_API_TOKEN,
  getReadme,
  username,
  query: `
  query ($number_of_repos: Int!, $username:String!) {
      user(login: $username) {
        repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: CREATED_AT, direction:DESC } ) {
          nodes {
            name
            description
            url
            languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
  }`,
  variables: {
    number_of_repos: 100,
    username,
  },
};
