import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";

function RecipeBookPage() {
  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">Recipe Book</h1>
        </div>
        <p className="body">
          My very personal collection of favourite recipes.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        <p className="body">
          2nd project for iron hack. together with anna furiosa and cami abuqu.
          a project that did technical this and that.
        </p>
      </div>
      <div>
        <p>here comes a screenshot</p>
      </div>
      <div className="homepageContent">
        <p className="label">Technical bla bla</p>
        <p className="body">
          so we used this and that. I focused on that because of ...and did
          this. I did it like this, but would now do it actually like that.
        </p>
      </div>
      <div>
        <p>here comes a screenshot</p>
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        <p className="body">
          yeah was great. would say a bit. thanks to all the peeps and aliens
          helping
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Links</p>
        <p className="body">
          →{" "}
          <a
            className="bodyLink"
            href="https://arale-spotify-project.netlify.app"
            target="_blank"
          >
            Recipe Book
          </a>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/recipe-book-app"
          >
            Recipe Book Frontend
          </a>{" "}
          <span className="hint">(GitHub)</span>
          <br />→ <span className="hint">(No Backend)</span>
        </p>
      </div>
    </div>
  );
}

export default RecipeBookPage;
