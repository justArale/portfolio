import React from "react";
import GamePage from "./GamePage";
import RecipeBookPage from "./RecipeBookPage";
import SpotifyProjectPage from "./SpotifyProjectPage";
import Navbar from "../components/Navbar";
import "../components/Homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepageContent">
        <p className="label">Selected Projects</p>

        <Link to="/pollZone" className="noUnderline">
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
        <SpotifyProjectPage />
        <RecipeBookPage />
        <GamePage />
      </div>
    </div>
  );
}

export default HomePage;
