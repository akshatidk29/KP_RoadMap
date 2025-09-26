import { useState } from 'react';
import { 
  Brain, 
  Clock, 
  Users, 
  BookOpen, 
  Code, 
  Database, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  Circle,
  ExternalLink,
  Play,
  FileText,
  Github
} from 'lucide-react';

const ML_Roadmap = () => {
  const [completedItems, setCompletedItems] = useState(new Set());

  const toggleComplete = (id) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedItems(newCompleted);
  };

  const prerequisites = [
    {
      title: "Mathematical Foundation",
      items: [
        "Linear Algebra (Vectors, Matrices, Eigenvalues)",
        "Calculus (Derivatives, Chain Rule, Partial Derivatives)",
        "Statistics & Probability (Distributions, Bayes Theorem)",
        "Discrete Mathematics (Set Theory, Logic)"
      ]
    },
    {
      title: "Programming Skills",
      items: [
        "Python Programming (Data Structures, OOP)",
        "NumPy and Pandas for Data Manipulation",
        "Matplotlib/Seaborn for Data Visualization",
        "Jupyter Notebooks"
      ]
    },
    {
      title: "Optional but Helpful",
      items: [
        "Basic understanding of algorithms",
        "SQL for database queries",
        "Git version control",
        "Command line basics"
      ]
    }
  ];

  const roadmapSections = [
    {
      id: 1,
      title: "Foundation & Mathematics",
      duration: "4-6 weeks",
      description: "Build the mathematical foundation required for ML",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      topics: [
        {
          id: "math-1",
          title: "Linear Algebra Essentials",
          resources: [
            { type: "video", name: "3Blue1Brown Linear Algebra Series", url: "#" },
            { type: "book", name: "Linear Algebra and Its Applications - Strang", url: "#" },
            { type: "practice", name: "Khan Academy Linear Algebra", url: "#" }
          ],
          projects: ["Implement matrix operations from scratch"]
        },
        {
          id: "math-2",
          title: "Statistics & Probability",
          resources: [
            { type: "video", name: "StatQuest Statistics Fundamentals", url: "#" },
            { type: "book", name: "Think Stats - Allen Downey", url: "#" },
            { type: "course", name: "Khan Academy Statistics", url: "#" }
          ],
          projects: ["Statistical analysis of a dataset"]
        },
        {
          id: "math-3",
          title: "Calculus for ML",
          resources: [
            { type: "video", name: "3Blue1Brown Calculus Series", url: "#" },
            { type: "course", name: "MIT Single Variable Calculus", url: "#" },
            { type: "practice", name: "Derivative and gradient calculations", url: "#" }
          ],
          projects: ["Implement gradient descent from scratch"]
        }
      ]
    },
    {
      id: 2,
      title: "Python & Data Science Tools",
      duration: "3-4 weeks",
      description: "Master the tools of the trade",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      topics: [
        {
          id: "python-1",
          title: "Python for Data Science",
          resources: [
            { type: "course", name: "Python Data Science Handbook", url: "#" },
            { type: "video", name: "Corey Schafer Python Tutorials", url: "#" },
            { type: "practice", name: "HackerRank Python Domain", url: "#" }
          ],
          projects: ["Data cleaning and analysis project"]
        },
        {
          id: "python-2",
          title: "NumPy & Pandas Mastery",
          resources: [
            { type: "course", name: "Pandas Official Documentation", url: "#" },
            { type: "video", name: "Data School Pandas Tutorials", url: "#" },
            { type: "practice", name: "100 Pandas Puzzles", url: "#" }
          ],
          projects: ["Comprehensive EDA on real dataset"]
        },
        {
          id: "python-3",
          title: "Data Visualization",
          resources: [
            { type: "course", name: "Matplotlib & Seaborn Tutorial", url: "#" },
            { type: "book", name: "Fundamentals of Data Visualization", url: "#" },
            { type: "practice", name: "Plotly Interactive Visualizations", url: "#" }
          ],
          projects: ["Interactive dashboard creation"]
        }
      ]
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      duration: "6-8 weeks",
      description: "Core ML concepts and algorithms",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      topics: [
        {
          id: "ml-1",
          title: "Introduction to Machine Learning",
          resources: [
            { type: "course", name: "Andrew Ng's ML Course (Coursera)", url: "#" },
            { type: "book", name: "Hands-On Machine Learning - Aurélien Géron", url: "#" },
            { type: "video", name: "StatQuest ML Fundamentals", url: "#" }
          ],
          projects: ["Simple prediction model"]
        },
        {
          id: "ml-2",
          title: "Supervised Learning Algorithms",
          resources: [
            { type: "course", name: "Scikit-learn Documentation", url: "#" },
            { type: "book", name: "The Elements of Statistical Learning", url: "#" },
            { type: "practice", name: "Kaggle Learn Intro to ML", url: "#" }
          ],
          projects: ["Classification and regression projects"]
        },
        {
          id: "ml-3",
          title: "Model Evaluation & Validation",
          resources: [
            { type: "video", name: "Cross-validation explained", url: "#" },
            { type: "course", name: "Model Selection and Evaluation", url: "#" },
            { type: "practice", name: "Bias-Variance Tradeoff Analysis", url: "#" }
          ],
          projects: ["Model comparison and selection"]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Machine Learning",
      duration: "8-10 weeks",
      description: "Advanced algorithms and techniques",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      topics: [
        {
          id: "advanced-1",
          title: "Ensemble Methods",
          resources: [
            { type: "course", name: "Random Forest and Boosting", url: "#" },
            { type: "book", name: "Ensemble Methods in Data Mining", url: "#" },
            { type: "practice", name: "XGBoost and LightGBM", url: "#" }
          ],
          projects: ["Kaggle competition with ensemble methods"]
        },
        {
          id: "advanced-2",
          title: "Unsupervised Learning",
          resources: [
            { type: "course", name: "Clustering and Dimensionality Reduction", url: "#" },
            { type: "video", name: "PCA and t-SNE Explained", url: "#" },
            { type: "practice", name: "Anomaly Detection Projects", url: "#" }
          ],
          projects: ["Customer segmentation analysis"]
        },
        {
          id: "advanced-3",
          title: "Feature Engineering",
          resources: [
            { type: "book", name: "Feature Engineering for Machine Learning", url: "#" },
            { type: "course", name: "Advanced Feature Engineering", url: "#" },
            { type: "practice", name: "Feature Selection Techniques", url: "#" }
          ],
          projects: ["Feature engineering pipeline"]
        }
      ]
    },
    {
      id: 5,
      title: "Deep Learning",
      duration: "10-12 weeks",
      description: "Neural networks and deep learning",
      icon: <Database className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      topics: [
        {
          id: "dl-1",
          title: "Neural Network Fundamentals",
          resources: [
            { type: "course", name: "Deep Learning Specialization (Coursera)", url: "#" },
            { type: "book", name: "Deep Learning - Ian Goodfellow", url: "#" },
            { type: "video", name: "3Blue1Brown Neural Networks", url: "#" }
          ],
          projects: ["Build neural network from scratch"]
        },
        {
          id: "dl-2",
          title: "TensorFlow/PyTorch",
          resources: [
            { type: "course", name: "TensorFlow Developer Certificate", url: "#" },
            { type: "course", name: "PyTorch Tutorials", url: "#" },
            { type: "practice", name: "Fast.ai Practical Deep Learning", url: "#" }
          ],
          projects: ["Image classification with CNNs"]
        },
        {
          id: "dl-3",
          title: "Advanced Deep Learning",
          resources: [
            { type: "course", name: "CS231n: CNNs for Visual Recognition", url: "#" },
            { type: "course", name: "CS224n: NLP with Deep Learning", url: "#" },
            { type: "book", name: "Generative Deep Learning", url: "#" }
          ],
          projects: ["GAN or VAE implementation"]
        }
      ]
    },
    {
      id: 6,
      title: "Specialized Domains",
      duration: "6-8 weeks each",
      description: "Choose your specialization",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      topics: [
        {
          id: "spec-1",
          title: "Computer Vision",
          resources: [
            { type: "course", name: "CS231n Stanford Course", url: "#" },
            { type: "book", name: "Computer Vision: Algorithms and Applications", url: "#" },
            { type: "practice", name: "OpenCV Python Tutorials", url: "#" }
          ],
          projects: ["Object detection system"]
        },
        {
          id: "spec-2",
          title: "Natural Language Processing",
          resources: [
            { type: "course", name: "CS224n Stanford NLP", url: "#" },
            { type: "book", name: "Speech and Language Processing", url: "#" },
            { type: "practice", name: "Hugging Face Transformers", url: "#" }
          ],
          projects: ["Sentiment analysis or chatbot"]
        },
        {
          id: "spec-3",
          title: "Reinforcement Learning",
          resources: [
            { type: "book", name: "Reinforcement Learning: An Introduction", url: "#" },
            { type: "course", name: "David Silver's RL Course", url: "#" },
            { type: "practice", name: "OpenAI Gym Environments", url: "#" }
          ],
          projects: ["Game-playing AI agent"]
        }
      ]
    },
    {
      id: 7,
      title: "MLOps & Production",
      duration: "4-6 weeks",
      description: "Deploy and maintain ML systems",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      topics: [
        {
          id: "mlops-1",
          title: "Model Deployment",
          resources: [
            { type: "course", name: "MLOps Specialization", url: "#" },
            { type: "practice", name: "Docker for ML", url: "#" },
            { type: "course", name: "Flask/FastAPI for ML APIs", url: "#" }
          ],
          projects: ["Deploy model as REST API"]
        },
        {
          id: "mlops-2",
          title: "ML Pipeline & Automation",
          resources: [
            { type: "course", name: "Apache Airflow Tutorial", url: "#" },
            { type: "practice", name: "MLflow for Experiment Tracking", url: "#" },
            { type: "course", name: "CI/CD for Machine Learning", url: "#" }
          ],
          projects: ["End-to-end ML pipeline"]
        },
        {
          id: "mlops-3",
          title: "Monitoring & Maintenance",
          resources: [
            { type: "course", name: "Model Monitoring Best Practices", url: "#" },
            { type: "practice", name: "Data Drift Detection", url: "#" },
            { type: "course", name: "A/B Testing for ML", url: "#" }
          ],
          projects: ["Model monitoring dashboard"]
        }
      ]
    }
  ];

  const resources = [
    {
      category: "Books",
      items: [
        "Hands-On Machine Learning by Aurélien Géron",
        "The Elements of Statistical Learning by Hastie, Tibshirani, and Friedman",
        "Pattern Recognition and Machine Learning by Christopher Bishop",
        "Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        "Python Machine Learning by Sebastian Raschka"
      ]
    },
    {
      category: "Online Courses",
      items: [
        "Machine Learning Course by Andrew Ng (Coursera)",
        "Deep Learning Specialization (Coursera)",
        "CS229 Machine Learning (Stanford)",
        "Fast.ai Practical Deep Learning for Coders",
        "MIT 6.034 Introduction to Artificial Intelligence"
      ]
    },
    {
      category: "Practice Platforms",
      items: [
        "Kaggle Competitions and Datasets",
        "Google Colab for experimentation",
        "Papers With Code for latest research",
        "GitHub for version control and portfolios",
        "Towards Data Science (Medium) for articles"
      ]
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'book': return <BookOpen className="w-4 h-4" />;
      case 'course': return <FileText className="w-4 h-4" />;
      case 'practice': return <Code className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Machine Learning Roadmap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive guide to master machine learning from fundamentals to advanced topics. 
              This roadmap will take you from beginner to professional level with hands-on projects.
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Prerequisites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prerequisites.map((prereq, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{prereq.title}</h3>
              <ul className="space-y-2">
                {prereq.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Learning Path</h2>
        <div className="space-y-12">
          {roadmapSections.map((section, sectionIndex) => (
            <div key={section.id} className="relative">
              {/* Timeline connector */}
              {sectionIndex !== roadmapSections.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gray-700"></div>
              )}
              
              <div className="flex">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-white font-bold text-lg z-10`}>
                  {section.icon}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {section.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{section.description}</p>
                    
                    {/* Topics */}
                    <div className="space-y-6">
                      {section.topics.map((topic) => (
                        <div key={topic.id} className="border-l-2 border-gray-700 pl-6">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold">{topic.title}</h4>
                            <button
                              onClick={() => toggleComplete(topic.id)}
                              className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                              {completedItems.has(topic.id) ? (
                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                              ) : (
                                <Circle className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                          
                          {/* Resources */}
                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-gray-400 mb-2">Resources:</h5>
                            <div className="flex flex-wrap gap-2">
                              {topic.resources.map((resource, i) => (
                                <a
                                  key={i}
                                  href={resource.url}
                                  className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-sm transition-colors"
                                >
                                  {getIcon(resource.type)}
                                  <span>{resource.name}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                          
                          {/* Projects */}
                          <div>
                            <h5 className="text-sm font-medium text-gray-400 mb-2">Projects:</h5>
                            <ul className="space-y-1">
                              {topic.projects.map((project, i) => (
                                <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                                  <Code className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                                  <span>{project}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resourceCategory, index) => (
              <div key={index} className="bg-gray-900 border border-gray-600 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {resourceCategory.category}
                </h3>
                <ul className="space-y-3">
                  {resourceCategory.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                      <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ML_Roadmap;