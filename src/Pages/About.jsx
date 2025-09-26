import React from "react";

const About = () => {
  return (
    <div className="space-y-16">
      <section className="mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          <strong>Kamand Prompt</strong> is the Programming Club of IIT Mandi.  
          We believe in building a strong community of learners and problem solvers
          by sharing knowledge, collaborating on projects, and guiding peers in
          their journey through computing and technology.
        </p>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Vision & Mission
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The roadmap project is our initiative to simplify complex fields like
            <span className="font-medium"> Heuristics, Artificial Intelligence, </span>
            and <span className="font-medium">Machine Learning</span> into clear,
            structured learning paths.  
            Instead of scattered tutorials and resources, we aim to give you a
            guided flow of topics, making it easier to start and grow.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower students and enthusiasts to not just learn,
            but to create impactful projects and research through these domains.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          What You’ll Find Here
        </h3>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            {
              title: "Structured Roadmaps",
              desc: "Step-by-step guidance through AI, ML, and Heuristics topics.",
            },
            {
              title: "Curated Resources",
              desc: "Books, tutorials, and projects handpicked for effective learning.",
            },
            {
              title: "Community Driven",
              desc: "Made by students, for students — contributions are always welcome.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h4 className="font-semibold text-blue-600 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-center py-12">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Want to be part of this?
        </h3>
        <p className="text-gray-600 mb-6">
          Join the Programming Club, contribute to our roadmaps, or start your own project.
        </p>
        <a
          href="mailto:club@iitmandi.ac.in"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
