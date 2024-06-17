import React from "react";
import "../components/Projects.css";
import { Link } from "react-router-dom";
import GameHomepage from "../assets/screenshots/Game-Homepage.png";
import GameEndscreen from "../assets/screenshots/Game-Endscreen.png";

function GamePage() {
  return (
    <div className="projectDetail">
      <Link to="/" className="noUnderline">
        <p className="bodyLink ">← All projects</p>
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
          The game is built with vanilla HTML, CSS, and JavaScript, with a focus
          on using classes and object-oriented programming (OOP).
        </p>
      </div>
      <div className="imageWrapper">
        <img src={GameHomepage} alt="GameHomepage" />
      </div>
      <div className="homepageContent">
        <p className="label">Technical this and that</p>
        <p className="body">
          For the highscore I used local storage and a conditional rendering.
          This project also marked the beginning of my journey with Figma, where
          the exact design was created and implemented by me accordingly. All
          images (aliens, explosions, spaceship and projectiles) were created in
          Figma and exported to the code.
        </p>
      </div>
      <div className="imageWrapper">
        <img src={GameEndscreen} alt="GameEndscreen" />
      </div>
      <div className="homepageContent">
        <p className="label">Conclusion</p>
        <p className="body">
          Yes totally fun I would say. Thanks to all the peeps and aliens
          helping.
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
