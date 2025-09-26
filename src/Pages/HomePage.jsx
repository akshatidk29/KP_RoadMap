import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const features = [
    {
      title: "Structured Learning",
      description: "Follow curated paths from fundamentals to advanced topics in AI, ML, and Heuristics.",
    },
    {
      title: "Hands-on Projects",
      description: "Gain real-world experience by building projects as you learn each roadmap.",
    },
    {
      title: "Expert Guidance",
      description: "Learn from community contributors, IIT Mandi experts, and experienced mentors.",
    },
    {
      title: "Cutting-edge Topics",
      description: "Stay ahead with the latest developments in AI, Machine Learning, and Optimization.",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen text-gray-300">
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Kamand Prompt
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed">
          Explore curated roadmaps in{" "}
          <span className="text-white font-medium">Artificial Intelligence</span>,{" "}
          <span className="text-white font-medium">Machine Learning</span>, and{" "}
          <span className="text-white font-medium">Heuristics</span>.
          Your journey into cutting-edge computing starts here — powered by the
          Programming Club, IIT Mandi.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Why Learn with Kamand Prompt?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center space-y-4"
              >

                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-16 pb-16 flex justify-center">
        <img
          src="/IIT.png" // replace with your actual image path
          alt="Illustration"
          className="w-1/2 h-auto object-cover rounded-2xl"
        />
      </section>
    </div>
  );
};

export default HomePage;
