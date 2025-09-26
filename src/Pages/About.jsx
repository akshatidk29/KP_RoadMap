import React from "react";

const About = () => {
  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Kamand Prompt
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          <strong className="text-white">Kamand Prompt</strong> is the 
          Programming Club of IIT Mandi, building a community of learners 
          and problem-solvers through knowledge sharing and collaboration.
        </p>
      </section>

      <section className="bg-gray-950 py-16">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <h3 className="text-3xl font-bold mb-8 text-white">
            Our Vision & Values
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We simplify complex domains like{" "}
            <span className="text-blue-400 font-medium">Heuristics</span>,{" "}
            <span className="text-blue-400 font-medium">AI</span>, and{" "}
            <span className="text-blue-400 font-medium">Machine Learning</span>{" "}
            into structured, easy-to-follow learning paths.  
            Our goal is to empower learners to build skills and create impact.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Structured Roadmaps",
              desc: "Step-by-step learning paths for AI, ML, and Heuristics.",
            },
            {
              title: "Curated Resources",
              desc: "Handpicked tutorials, projects, and references.",
            },
            {
              title: "Community Driven",
              desc: "Collaborate, contribute, and grow with fellow learners.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-700 shadow hover:shadow-lg hover:border-blue-400 transition"
            >
              <h4 className="text-2xl font-semibold text-blue-400 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
