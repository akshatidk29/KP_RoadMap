import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RoadmapPage = () => {
  const { slug } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import(`../Data/${slug}.json`)
      .then((module) => setRoadmap(module.default))
      .catch(() =>
        setError(`No roadmap found for "${slug}". Please check back later.`)
      );
  }, [slug]);

  if (error) {
    return (
      <div className="text-center mt-16 text-red-600 font-semibold">{error}</div>
    );
  }

  if (!roadmap) {
    return (
      <div className="text-center mt-16 text-gray-600 font-medium">
        Loading roadmap...
      </div>
    );
  }

  return (
    <div className="mx-auto px-6 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{roadmap.title}</h1>
        <p className="text-gray-600">{roadmap.description}</p>
      </div>

      {roadmap.stages.map((stage, idx) => (
        <div key={idx} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{stage.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stage.topics.map((topic, tIdx) => (
              <div
                key={tIdx}
                className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{topic.name}</h3>
                <p className="text-gray-700 mb-3">{topic.description}</p>

                {topic.resources && (
                  <ul className="list-disc list-inside space-y-1">
                    {topic.resources.map((r, rIdx) => (
                      <li key={rIdx}>
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          {r.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-12">
        <Link
          to="/roadmaps"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back to Roadmaps
        </Link>
      </div>
    </div>
  );
};

export default RoadmapPage;
