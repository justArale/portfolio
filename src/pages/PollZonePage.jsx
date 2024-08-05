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
            PollZone is a React-based web application for creating and
            participating in polls, developed over two weeks as the final
            project for the Ironhack Bootcamp. Collaboratively built with{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anna-hartkopf/"
              className="bodyLink"
            >
              Anna Hartkopf
            </a>
            , the project aimed to implement the full MERN stack (MongoDB,
            Express, React, Node.js) with a CRUD-API and user authentication.
            After fulfilling initial requirements, features like image uploads
            via Cloudinary and notifications with Toastify were added.
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
            PollZone's system architecture featured separate deployed
            repositories for the frontend and backend. The technology stack
            included the MERN stack, React Context/Routes, bcryptjs, MongoDB
            Atlas, Cloudinary, Toastify, and CSS3 with Figma. Backend
            development involved setting up models, database integration, and
            creating authentication functions and routes, tested via Postman.
            Frontend development began with Anna and later i assisted with the
            design and build the multiple conditional rendering logic. Key
            features included user roles for signup and login, and Cloudinary
            for image uploads. Testing was conducted primarily with Postman,
            focusing on backend routes and conditional query.
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
            PollZone, a project that won the hackshow, successfully implemented
            user roles, conditional rendering based on user ID and role, and
            features to manage poll end-dates and times. Future enhancements
            include email verification and notifications for new polls from
            favorite creators. The project highlighted the importance of
            adaptable working structures, clear code organization, and
            comprehensive documentation, with plans for ongoing maintenance and
            updates.
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
