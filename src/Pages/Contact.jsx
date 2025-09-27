import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Kamand Prompt
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          Have questions, ideas, or just want to connect with{" "}
          <strong className="text-white">Kamand Prompt</strong>?
          Here’s how you can reach us.
        </p>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
          <div className="space-y-6 text-lg text-gray-400">
            <p>
              <span className="text-white font-medium">KP Room:</span>{" "}
              A19, North Campus, IIT Mandi
            </p>
            <p>
              <span className="text-white font-medium">Email:</span>{" "}
              kamandprompt@iitmandi.ac.in
            </p>
            <p>
              <span className="text-white font-medium">Website:</span>{" "}
              www.kamandprompt.in
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="mt-16 max-w-7xl mx-auto">
        <img
          src="/IIT.png" // <-- replace with your image path
          alt="Contact Kamand Prompt"
          className="w-full h-96 object-cover rounded-2xl"
        />
      </section>
    </div>
  );
};

export default Contact;
