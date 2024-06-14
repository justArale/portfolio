import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";

function PollZonePage() {
  return (
    <div className="projectDetail">
      <Link to="/">
        <p className="bodyLink">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">PollZone</h1>
        </div>
        <p className="body">
          Simple polls making to engage with your community.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        <p className="body">
          Final project for iron hack. together with anna furiosa. a project
          that did technical this and that.
        </p>
      </div>
      <div>
        <p>here comes a screenshot</p>
      </div>
      <div className="homepageContent">
        <p className="label">Technical bla bla</p>
        <p className="body">
          so we used this and that. I focused on that because of ... and anna
          did this. we did it like this, but would now do it actually like that.
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
            href="https://pollzone.netlify.app"
            target="_blank"
          >
            PollZone
          </a>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/pollzone-client"
          >
            PollZone Frontend
          </a>{" "}
          <span className="hint">(GitHub)</span>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/pollzone-server"
          >
            PollZone Backend
          </a>{" "}
          <span className="hint">(GitHub)</span>
        </p>
      </div>
    </div>
  );
}

export default PollZonePage;
