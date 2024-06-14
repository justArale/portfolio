import React from "react";
import GamePage from "./GamePage";
import RecipeBookPage from "./RecipeBookPage";
import SpotifyProjectPage from "./SpotifyProjectPage";
import PollZonePage from "./PollZonePage";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />

      <PollZonePage />
      <SpotifyProjectPage />
      <RecipeBookPage />
      <GamePage />
    </div>
  );
}

export default HomePage;
