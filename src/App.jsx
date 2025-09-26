import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import RoadmapsHub from "./Pages/RoadmapsHub";
import RoadmapPage from "./Pages/RoadmapPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmaps" element={<RoadmapsHub />} />
          <Route path="/roadmaps/:slug" element={<RoadmapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />

    </div>
  );
}
