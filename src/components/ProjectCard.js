import React from "react";
import { Link } from "gatsby";

function ProjectCard(props) {
  console.log(props.hasReadme);
  return (
    <div className="project-card">
      <div className="project-card-body">
        <h4>
          {props.name && props.hasReadme ? (
            <Link to={"/projects/" + props.name}>{props.description}</Link>
          ) : (
            props.description
          )}
        </h4>
        {props.languages && props.languages.edges.length ? (
          <h5>
            Main Dev Language:{" "}
            <span style={{ color: props.languages.edges[0].node.color }}>
              {props.languages.edges[0].node.name}
            </span>
          </h5>
        ) : null}
        {props.extraBody ? (
          <div className="project-card-extra-body">{props.extraBody}</div>
        ) : null}
      </div>
      <div className="project-card-footer">
        {props.url ? (
          <a href={props.url} target="_blank" rel="noreferrer">
            See on github
            <i className="bx bxl-github"></i>
          </a>
        ) : null}
        {props.extraFooter || null}
      </div>
    </div>
  );
}

export default ProjectCard;
