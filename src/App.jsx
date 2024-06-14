import { Routes, Route } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage";
import RecipeBookPage from "./pages/RecipeBookPage";
import SpotifyProjectPage from "./pages/SpotifyProjectPage";
import PollZonePage from "./pages/PollZonePage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="recipe-book" element={<RecipeBookPage />} />
        <Route path="spotify-project" element={<SpotifyProjectPage />} />
        <Route path="pollZone" element={<PollZonePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
