import React from "react";
import { graphql } from "gatsby";
import "../sass/ProjectPage.scss";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Typewriter from "../components/Typewriter";

function ProjectsPage({ data }) {
  const repositories = data.githubData.data.user.repositories.nodes;
  return (
    <Layout>
      <h1>
        <Typewriter text="My Projects" onlyText cursorVariant="dark" />
      </h1>
      <div className="projects-grid">
        <ProjectCard
          description={"Tweet Story"}
          extraBody={
            <>
              <p>A mobile app that reads your tweets for you</p>
              <p>
                It's far more better than a screen reader, helpful for blind
                people
              </p>
            </>
          }
          extraFooter={
            <a href="https://tweetstory.app" target="_blank" rel="noreferrer">
              Visit app website
              <i className="bx bxs-right-arrow"></i>
            </a>
          }
        />
        {repositories.map((repo, key) => (
          <ProjectCard key={key} {...repo} />
        ))}
      </div>
    </Layout>
  );
}
export const githubQuery = graphql`
  query {
    githubData {
      data {
        user {
          repositories {
            nodes {
              name
              description
              url
              languages {
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
      }
    }
  }
`;

export default ProjectsPage;
