import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import RoadmapsHub from "./Pages/RoadmapsHub";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ML_RoadMap from "./Pages/Roadmaps/ML_RoadMap";
import Contact from "./Pages/Contact";
import Heuristics_Roadmap from "./Pages/Roadmaps/Heuristics_Roadmap";

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmaps" element={<RoadmapsHub />} />
          <Route path="/roadmaps/ml-roadmap" element={<ML_RoadMap />} />
          <Route path="/roadmaps/heuristics-roadmap" element={<Heuristics_Roadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />

    </div>
  );
}
