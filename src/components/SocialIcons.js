import React from "react";
import "../sass/SocialIcons.scss";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/tolgaerdonmez"
        target="_blank"
        rel="noreferrer"
      >
        <box-icon name="github" type="logo" size="50px"></box-icon>
      </a>
      <a
        href="https://twitter.com/tolgaerdonmez"
        target="_blank"
        rel="noreferrer"
      >
        <box-icon name="twitter" type="logo" size="50px"></box-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmet-tolga-erd%C3%B6nmez-83a462175/"
        target="_blank"
        rel="noreferrer"
      >
        <box-icon name="linkedin" type="logo" size="50px"></box-icon>
      </a>
    </div>
  );
}

export default SocialIcons;
