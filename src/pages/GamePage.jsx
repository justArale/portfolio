import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";

function GamePage() {
  return (
    <div className="projectDetail">
      <Link to="/">
        <p className="bodyLink">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">Alien Invasion</h1>
        </div>
        <p className="body">
          A small browser game for desktop and also first project.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        <p className="body">
          First project for iron hack. together with anna furiosa and cami
          abuqu. a project that did technical this and that.
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
            href="https://arale.uber.space/alien-invasion/"
            target="_blank"
          >
            Alien Invasion
          </a>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/alien-invasion"
          >
            Alien Invasion Frontend
          </a>{" "}
          <span className="hint">(GitHub)</span>
          <br />→ <span className="hint">(No Backend)</span>
        </p>
      </div>
    </div>
  );
}

export default GamePage;
