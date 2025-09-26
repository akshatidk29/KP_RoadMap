import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-600">Kamand Prompt</span>
        </h2>
        <p className="mx-auto text-gray-600 text-lg">
          Explore curated roadmaps in Artificial Intelligence, Machine Learning,
          and Heuristics. Your journey into cutting-edge computing starts here —
          powered by the Programming Club, IIT Mandi.
        </p>
      </section>

      <section className="mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">About Us</h3>
        <p className="text-gray-600 leading-relaxed">
          Kamand Prompt is an initiative by the Programming Club, IIT Mandi, to
          guide students and enthusiasts through the ever-evolving world of
          computing. Our goal is to create structured, easy-to-follow roadmaps
          that help learners build strong foundations and progress into advanced
          topics at their own pace.
        </p>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Featured Roadmaps
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: "heuristics", title: "Heuristics & Optimization" },
              { slug: "ml", title: "Machine Learning" },
              { slug: "ai", title: "Artificial Intelligence" },
            ].map((rm) => (
              <Link
                key={rm.slug}
                to={`/roadmaps/${rm.slug}`}
                className="block border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-blue-600 mb-2">
                  {rm.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  Explore the step-by-step roadmap for {rm.title}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Ready to start your journey?
        </h3>
        <p className="text-gray-600 mb-6">
          Check out our detailed roadmaps and begin learning today.
        </p>
        <Link
          to="/roadmaps"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Roadmaps
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
