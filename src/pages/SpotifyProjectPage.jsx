import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import SpotifyHomepage from "../assets/screenshots/Spotify-Homepage.png";
import SpotifyResult from "../assets/screenshots/Spotify-Result.jpg";

function SpotifyProjectPage() {
  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
      </Link>
      <div className="intro">
        <div className="">
          <h1 className="title">Spotify Project</h1>
        </div>
        <p className="body">
          Create a playlist based on your fav artist and mood.
        </p>
      </div>
      <div className="homepageContent">
        <p className="label">Scope</p>
        <p className="body">
          3rd project during Ironhack. Together with{" "}
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
          principles.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={SpotifyHomepage} alt="SpotifyHomepage" />
      </div>
      <div className="homepageContent">
        <p className="label">Technical this and that</p>
        <p className="body">
          We utilized a React frontend application with a JSON file serving as
          the backend, and integrated the Spotify for Developers Web API,
          allowing us to add the created playlist (based on related artists and
          Spotify's own danceability metric) to the own Spotify account. <br />
          Additionally, Cami designed the interface using Tailwind CSS.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={SpotifyResult} alt="SpotifyResult" />
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        <p className="body">
          My first group project was educational on every level. We learned how
          to integrate an API using AXIOS and how to communicate and work
          dynamically as a team. This included organizing the project and
          managing GitHub (git pull, git rebase, resolving merge conflicts,
          etc.). <br />
          Thank you both for the great experience, I couldn't have wished for a
          better team!
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
            Playlist Creator
          </a>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/justArale/playlist-creator"
          >
            Playlist Creator Frontend
          </a>{" "}
          <span className="hint">(GitHub)</span>
          <br />→{" "}
          <a
            className="bodyLink"
            target="_blank"
            href="https://github.com/annagy07/playlist-creator-backend"
          >
            Playlist Creator Backend
          </a>{" "}
          <span className="hint">(GitHub)</span>
        </p>
      </div>
    </div>
  );
}

export default SpotifyProjectPage;
