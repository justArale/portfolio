import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboardpage from "./pages/Dashboardpage";
import GamePage from "./pages/GamePage";
import RecipeBookPage from "./pages/RecipeBookPage";
import SpotifyProjectPage from "./pages/SpotifyProjectPage";
import PollZonePage from "./pages/PollZonePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboardpage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="recipe-book" element={<RecipeBookPage />} />
      <Route path="spotify-project" element={<SpotifyProjectPage />} />
      <Route path="pollZone" element={<PollZonePage />} />
    </Routes>
  );
}

export default App;
