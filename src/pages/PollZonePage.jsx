import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import PollZoneHomepage from "../assets/screenshots/PollZone-Homepage.png";
import PollZoneVote from "../assets/screenshots/PollZone-Vote.png";

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
          Final project for Ironhack. Together with Anna Hartkopf. A project
          that comprehensively implements the full-stack MERN (MongoDB, Express,
          React, Node.js) stack, showcasing the integration of each technology
          to build a modern web application, including user authentication with
          login and signup functionality.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={PollZoneHomepage} alt="PollZoneHomepage" />
      </div>
      <div className="homepageContent">
        <p className="label">Technical this that</p>
        <p className="body">
          I focused on the backend and the database because of their importance
          in ensuring smooth functionality, while Anna concentrated on building
          the frontend. I also assisted with the design and the overlays, and
          implemented the image upload feature with Cloudinary. Additionally, I
          built the poll detail page using multiple conditional renderings.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={PollZoneVote} alt="PollZoneVote" />
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        <p className="body">
          Yeah, it was incredibly impressive to realize, while building, how
          everything works together seamlessly. It also highlighted how much I
          have already learned and can implement.
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
