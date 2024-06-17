import React from "react";
import Navbar from "../components/Navbar";
import "../components/Homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const jump = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="homepageContent">
        <p className="label">Selected Projects</p>
        <div className="projectOverview">
          <Link to="/pollZone" className="noUnderline" onClick={() => jump()}>
            <div className="pollzoneFiller projectBox">
              <div className="header">
                <div className="iconWrapper">
                  <p className="bodyLarge">💬</p>
                </div>
                <h1 className="bodyLarge">PollZone</h1>
              </div>
              <p className="body pollzone">
                Simple polls making to engage with your community.
              </p>
            </div>
          </Link>
          <Link
            to="/spotify-project"
            className="noUnderline"
            onClick={() => jump()}
          >
            <div className="spotifyFiller projectBox">
              <div className="header">
                <div className="iconWrapper">
                  <p className="bodyLarge">🎧</p>
                </div>
                <h1 className="bodyLarge">Spotify Project</h1>
              </div>
              <p className="body spotify">
                Create a playlist based on your fav artist and mood.
              </p>
            </div>
          </Link>
          <Link
            to="/recipe-book"
            className="noUnderline"
            onClick={() => jump()}
          >
            <div className="recipebookFiller projectBox">
              <div className="header">
                <div className="iconWrapper">
                  <p className="bodyLarge">📖</p>
                </div>
                <h1 className="bodyLarge">Recipe Book</h1>
              </div>
              <p className="body recipebook">
                My very personal collection of favourite recipes.
              </p>
            </div>
          </Link>
          <Link to="/game" className="noUnderline" onClick={() => jump()}>
            <div className="gameFiller projectBox">
              <div className="header">
                <div className="iconWrapper">
                  <p className="bodyLarge">🕹️</p>
                </div>
                <h1 className="bodyLarge">Alien Invasion</h1>
              </div>
              <p className="body game">
                A small browser game for desktop and also first project.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
