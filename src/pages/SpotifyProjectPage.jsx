import React, { useState, useEffect } from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import SpotifyLandingpage from "../assets/screenshots/SpotifyProject-Landingpage.webp";
import SpotifyResultpage from "../assets/screenshots/SpotifyProject-Resultpage.webp";

function SpotifyProjectPage() {
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
          <h1 className="title">Spotify Project</h1>
        </div>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            Create a playlist based on your fav artist and mood.
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
            3rd project during Ironhack and developed together with{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anna-hartkopf/"
              className="bodyLink"
            >
              Anna Hartkopf
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cami-albuq/"
              className="bodyLink"
            >
              Cami Albuquerque
            </a>
            .<br /> The task was to interacting with a web API by using REST
            principles. I restructured the project in TypeScript to challenge
            myself further and to stay up to date with the most in-demand
            programming languages.
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={SpotifyLandingpage}
            alt="Landingpage of the spotify project"
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
            I integrated the Spotify for Developers Web API, allowing to create
            a playlist based on a seed artist and the choosen mood (Spotify's
            own danceability metric) and to save to the own Spotify account.
            <br /> <br />
            Technologies used: TypeScript, React, Axios, React Router, React
            Context, Spotify Developer API
          </p>
        )}
      </div>
      <div className="imageWrapper">
        {isImageLoaded ? (
          <div className="skeleton"></div>
        ) : (
          <img
            src={SpotifyResultpage}
            alt="Resultpage of the spotify project"
          />
        )}
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        {isTextLoaded ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </>
        ) : (
          <p className="body">
            My first group project was educational on every level. We learned
            how to integrate an API using AXIOS and how to communicate and work
            dynamically as a team. This included organizing the project and
            managing GitHub (git pull, git rebase, resolving merge conflicts,
            etc.). <br />
            Thank you both for the great experience, I couldn't have wished for
            a better team!
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
              href="https://arale-spotify-project.netlify.app"
              target="_blank"
            >
              Spotify Project
            </a>
            {""}{" "}
            <span className="hint">
              (Saving the created playlist to the Spotify account only works for
              registered beta testers)
            </span>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/spotify-project"
            >
              Spotify Project Frontend
            </a>{" "}
            <span className="hint">(GitHub)</span>
            <br />→{" "}
            <a
              className="bodyLink"
              href="https://arale-spotify-project-old.netlify.app"
              target="_blank"
            >
              Version One - Playlist Creator
            </a>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/justArale/playlist-creator"
            >
              Version One - Playlist Creator Frontend
            </a>{" "}
            <span className="hint">(GitHub)</span>
            <br />→{" "}
            <a
              className="bodyLink"
              target="_blank"
              href="https://github.com/annagy07/playlist-creator-backend"
            >
              Version One - Playlist Creator Backend
            </a>{" "}
            <span className="hint">(GitHub)</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SpotifyProjectPage;
