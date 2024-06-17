import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import PollZoneHomepage from "../assets/screenshots/PollZone-Homepage.png";
import PollZoneVote from "../assets/screenshots/PollZone-Vote.png";

function PollZonePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isTextLoaded, setIsTextLoaded] = useState(true);

  useEffect(() => {
    setIsImageLoaded(false);
    setIsTextLoaded(false);
  }, [isImageLoaded, isTextLoaded]);

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
          <p className="body">
            Simple polls making to engage with your community.
          </p>
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
            Final project for Ironhack. Together with Anna Hartkopf. A project
            that comprehensively implements the full-stack MERN (MongoDB,
            Express, React, Node.js) stack, showcasing the integration of each
            technology to build a modern web application, including user
            authentication with login and signup functionality with React
            Context.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={PollZoneHomepage} alt="PollZoneHomepage" />
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
            I focused on the backend and the database because of their
            importance in ensuring smooth functionality, while Anna concentrated
            on building the frontend. I also assisted with the design and the
            overlays, and implemented the image upload feature with Cloudinary.
            Additionally, I built the poll detail page using multiple
            conditional renderings.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={PollZoneVote} alt="PollZoneVote" />
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
            Yeah, it was incredibly impressive to realize, while building, how
            everything works together seamlessly. It also highlighted how much I
            have already learned and can implement. <br />
            Many thanks to everyone who supported me during the course.
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
