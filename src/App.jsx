import { Routes, Route } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage";
import BentoBookPage from "./pages/BentoBookPage";
import SpotifyProjectPage from "./pages/SpotifyProjectPage";
import PollZonePage from "./pages/PollZonePage";
import SewDBPage from "./pages/SewDBPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/bento-book" element={<BentoBookPage />} />
        <Route path="/spotify-project" element={<SpotifyProjectPage />} />
        <Route path="/pollZone" element={<PollZonePage />} />
        <Route path="/sewdb" element={<SewDBPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
