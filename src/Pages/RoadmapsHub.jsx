import { Link } from 'react-router-dom';

const RoadmapsHub = () => {
  const roadmaps = [
    {
      id: 'ml-roadmap',
      title: 'Machine Learning Roadmap',
      description:
        'A structured path to master Machine Learning, from the fundamentals of Python and statistics to advanced concepts like deep learning.',
      image: 'ML.png',
      link: '/roadmaps/ml-roadmap',
    },
    {
      id: 'heuristics-roadmap',
      title: 'Heuristics & Optimization Roadmap',
      description:
        'Learn problem-solving strategies and optimization techniques to efficiently tackle complex computational challenges, including search algorithms, metaheuristics, and real-world applications.',
      image: 'Heuristics.png',
      link: '/roadmaps/heuristics-roadmap',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {roadmaps.map((rm) => (
          <div
            key={rm.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16"
          >
            <div className="flex-shrink-0 w-3/4 md:w-1/2 ">
              <img
                src={rm.image}
                alt={rm.title}
                className="rounded-2xl shadow-xl object-cover w-full h-3/4 border-2 border-white"
              />
            </div>

            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                {rm.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {rm.description}
              </p>
              <Link
                to={rm.link}
                className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-3xl hover:bg-blue-500 transition-colors shadow-md"
              >
                Explore Roadmap
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapsHub;
