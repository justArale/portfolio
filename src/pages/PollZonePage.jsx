import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import PollZoneHomepage from "../assets/screenshots/PollZone-Homepage.png";
import PollZoneVote from "../assets/screenshots/PollZone-Vote.png";

function PollZonePage() {
  const [isHomepageImageLoaded, setIsHomepageImageLoaded] = useState(false);
  const [isVoteImageLoaded, setIsVoteImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  // const handleHomepageImageLoaded = () => {
  //   setIsHomepageImageLoaded(true);
  // };

  // const handleVoteImageLoaded = () => {
  //   setIsVoteImageLoaded(true);
  // };

  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">PollZone</h1>
        </div>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">React based Webapp for voting and polls</p>
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            Final project for Ironhack and developed together with{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anna-hartkopf/"
              className="bodyLink"
            >
              Anna Hartkopf
            </a>
            . A project that implements the full-stack MERN (MongoDB, Express,
            React, Node.js) stack, showcasing the integration of each technology
            to build a modern web application, including user authentication
            with login and signup functionality with React Context.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isHomepageImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={PollZoneHomepage}
            alt="Screenshot of PollZone Homepage"
            width="1096"
            height="779"
            // onLoad={handleHomepageImageLoaded}
          />
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Technical this and that</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            I developed the backend and database, testing routes with Postman,
            while my teammate built the frontend. I also assisted with design
            and overlays, implemented image upload with Cloudinary, and created
            the poll detail page using multiple conditional renderings.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isVoteImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={PollZoneVote}
            alt="PollZoneVote"
            // onLoad={handleVoteImageLoaded}
          />
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            Waht i learned. what was good . what was bad. what
          </p>
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Links</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default PollZonePage;
