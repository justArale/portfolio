import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import SewDBLandingpage from "../assets/screenshots/SewDB-Landingpage.webp";
import SewDBDetailpage from "../assets/screenshots/SewDB-Detailpage.webp";

function SewDBPage() {
  const [isHomepageImageLoaded, setIsHomepageImageLoaded] = useState(false);
  const [isVoteImageLoaded, setIsVoteImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">SewDB</h1>
        </div>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            Full-stack Webapp to browse and like favorite patterns.
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
            SewDB is designed as a full-fledged web application for that
            displays my personal sewing pattern collections. The project focuses
            on core features such as user verification, role-based access and
            backend-based login. It is intentionally designed to cover essential
            CRUD operations and content protection while leaving room for
            modular expansion through features such as filtering, searching,
            image carousel and liking.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isHomepageImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={SewDBLandingpage}
            alt="Screenshot of SewDB Landingpage"
            width="1096"
            height="779"
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
            - The frontend is developed with React, Vite, and TypeScript, with
            routing handled by React Router.
            <br />- The backend follows a serverless architecture with the HONC
            stack, consisting of Hono, Neon, Drizzle ORM, and Cloudflare Workers
            and is deployed via Wrangler.
            <br />- User authentication is managed with secure HTTP-only cookies
            and JWTs.
            <br />- Email verification is integrated into the signup process
            using Resend and a generated verification token.
            <br />- Images are stored and served using Cloudinary and displayed
            with a carousel.
            <br />- Styling is done with SASS, and API interactions are handled
            via Axios.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isVoteImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img src={SewDBDetailpage} alt="Patterndetailpage" />
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
            SewDB is an ongoing personal project aimed at deepening my
            understanding of modern web technologies. Through it, I've gained
            hands-on experience with Cloudflare, PostgreSQL, verification flows
            and image carousel. Currently, I'm working on implementing advanced
            filtering and a dynamic search feature powered by API calls. The
            project continues to grow as a space for experimentation and
            learning.
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
              href="https://sewdb.arale.space"
              target="_blank"
            >
              SewDB
            </a>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/SewDB"
            >
              SewDB
            </a>{" "}
            <span className="hint">(GitHub)</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SewDBPage;
