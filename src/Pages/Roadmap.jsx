import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Roadmap = () => {
    const { type } = useParams();
    const [roadmapData, setRoadmapData] = useState(null);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        import(`../Data/${type}.json`)
            .then((data) => setRoadmapData(data.default))
            .catch(() => setRoadmapData(null));
    }, [type]);

    const toggleExpand = (key) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    if (!roadmapData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-950 text-gray-300">
                <p className="text-lg">Roadmap not found.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 text-gray-300 min-h-screen">
            {/* Header */}
            <section className="text-center py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    {roadmapData.title}
                </h1>
                <p className="max-w-3xl mx-auto text-gray-400 text-lg">
                    {roadmapData.description}
                </p>
            </section>

            {/* Sections */}
            <div className="max-w-6xl mx-auto px-6 space-y-24">
                {roadmapData.sections.map((section, idx) => {
                    const hasImage = section.image && section.image.trim() !== "";

                    return (
                        <div
                            key={idx}
                            className={`flex flex-col ${hasImage ? "md:flex-row items-center gap-12" : ""
                                } ${section.imagePosition === "right" && hasImage ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Image */}
                            {hasImage && (
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full md:w-1/2 h-auto rounded-2xl shadow-lg object-cover"
                                />
                            )}

                            {/* Content */}
                            <div className={`w-full ${hasImage ? "md:w-1/2" : ""}`}>
                                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                                    {section.section}
                                </h2>
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-gray-400 mb-6">{section.content}</p>

                                {/* Subsections */}
                                {section.subsections && (
                                    <div className="space-y-6">
                                        {section.subsections.map((sub, subIdx) => {
                                            const key = `${idx}-${subIdx}`;

                                            return (
                                                <div key={subIdx} className="border-l-2 border-blue-500 pl-4">
                                                    {/* Subsection title */}
                                                    <button
                                                        onClick={() => toggleExpand(key)}
                                                        className="relative group text-left text-white font-medium text-lg flex items-center gap-2"
                                                    >
                                                        <span className={`transform transition-transform duration-200 ${expanded[key] ? 'rotate-90' : ''}`}>
                                                            ▶
                                                        </span>
                                                        {sub.title}
                                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
                                                    </button>

                                                    {/* Expanded content */}
                                                    {expanded[key] && (
                                                        <div className="mt-4 ml-6 space-y-4 animate-fadeIn">
                                                            {/* Points */}
                                                            {sub.points && sub.points.length > 0 && (
                                                                <div>
                                                                    <h4 className="text-white font-medium mb-2">Key Topics:</h4>
                                                                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                                                                        {sub.points.map((point, j) => (
                                                                            <li key={j}>{point}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}

                                                            {/* Details */}
                                                            {sub.details && (
                                                                <div>
                                                                    <h4 className="text-white font-medium mb-2">Details:</h4>
                                                                    <p className="text-gray-400 text-sm leading-relaxed">{sub.details}</p>
                                                                </div>
                                                            )}

                                                            {/* Resources */}
                                                            {sub.resources && sub.resources.length > 0 && (
                                                                <div>
                                                                    <h4 className="text-white font-medium mb-3">Recommended Resources:</h4>
                                                                    <div className="space-y-3">
                                                                        {sub.resources.map((resource, k) => (
                                                                            <div key={k} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                                                                <div className="flex items-start justify-between gap-3">
                                                                                    <div className="flex-1">
                                                                                        <h5 className="text-blue-300 font-medium text-sm mb-1">
                                                                                            {resource.title}
                                                                                        </h5>
                                                                                        <p className="text-gray-400 text-xs leading-relaxed mb-2">
                                                                                            {resource.description}
                                                                                        </p>
                                                                                    </div>
                                                                                    <a
                                                                                        href={resource.link}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 whitespace-nowrap"
                                                                                    >
                                                                                        Link Here
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* REMEMBER Section */}
            <div className="w-full text-center py-12 border-b border-gray-700">
                <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">REMEMBER</h2>
                <p
                    className="text-2xl text-white font-semibold font-serif italic"
                    style={{
                        letterSpacing: "1px",
                        fontFamily: "'Playfair Display', serif"
                    }}
                >
                    Attention Is All You Need !!!
                </p>
            </div>
        </div>
    );
};

export default Roadmap;