import CompendiumApp from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArcanaPage from "./pages/MyArcanaPage";
import PersonaPage from "./pages/MyPersonaPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompendiumApp />} />
        <Route path="/arcana" element={<ArcanaPage />} />
        <Route path="/persona" element={<PersonaPage />} />
      </Routes>
    </Router>
  );
}
