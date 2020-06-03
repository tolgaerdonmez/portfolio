import React from "react";
import "../sass/ProjectPage.scss";
import { Link } from "gatsby";

import ReactMarkdown from "react-markdown/with-html";
import Layout from "../components/Layout";

function ProjectPage({ pageContext }) {
  return (
    <Layout>
      <div className="project-page">
        <Link to="/projects">Return to Projects</Link>
        <ReactMarkdown source={pageContext.data} escapeHtml={false} />
      </div>
    </Layout>
  );
}

export default ProjectPage;
