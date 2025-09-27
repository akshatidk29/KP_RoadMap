import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Roadmap from "./Pages/Roadmap";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RoadmapsHub from "./Pages/RoadmapsHub";

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmaps" element={<RoadmapsHub />} />
          <Route path="/roadmaps/:type" element={<Roadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />

    </div>
  );
}
