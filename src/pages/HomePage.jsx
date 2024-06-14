import React from "react";
import GamePage from "./GamePage";
import RecipeBookPage from "./RecipeBookPage";
import SpotifyProjectPage from "./SpotifyProjectPage";
import PollZonePage from "./PollZonePage";
import Navbar from "../components/Navbar";
import "../components/Homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <p className="label">Selected Projects</p>
      <PollZonePage />
      <SpotifyProjectPage />
      <RecipeBookPage />
      <GamePage />
    </div>
  );
}

export default HomePage;
