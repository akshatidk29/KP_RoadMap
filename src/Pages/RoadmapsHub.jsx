import React from "react";
import { Link } from "react-router-dom";

const RoadmapsHub = () => {
  const roadmaps = [
    { slug: "heuristics", title: "Heuristics & Optimization", desc: "Step-by-step roadmap to master heuristics and optimization algorithms." },
    { slug: "ml", title: "Machine Learning", desc: "Learn core ML concepts, supervised/unsupervised learning, and more." },
  ];

  return (
    <div className="mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Roadmaps</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roadmaps.map((rm) => (
          <Link
            key={rm.slug}
            to={`/roadmaps/${rm.slug}`}
            className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{rm.title}</h3>
            <p className="text-gray-600 text-sm">{rm.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoadmapsHub;
