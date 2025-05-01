import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "LANGUAGES & TOOLS: C, C++, HTML, CSS, JavaScript",
    "FRAMEWORKS & LIBRARIES: React, React Native, Redux, Tailwind CSS",
    "UI DESIGN TOOLS: Tailwind CSS",
    "MOBILE APP DEVELOPMENT: React Native with Expo"

  ];

  const backendSkills = [
    "LANGUAGES: Python, JavaScript",
    "FRAMEWORKS: Node.js, Express, Django",
    "DATABASE MANAGEMENT: MongoDB, PostgreSQL (basic), Firebase",
    "APIs: REST APIs (development and consumption)",
    "AUTHENTICATION & SECURITY: JWT, Firebase Authentication"];

    const moreSkills = [
      "VERSION CONTROL: Git, GitHub",
      "CLOUD SERVICES/ DEPLOYMENT TOOLS: Google Cloud Platform (GCP), Firebase, Netlify, EAS for React Native",
      "CONTAINERIZATION & ORCHESTRATION: Docker, Kubernetes",
      "API TESTING: Postman",
      "PROJECT MANAGEMENT: Agile methodologies",
      "Data Science",
      "Machine Learning"
  
    ];

    const softSkills = [
      "Communication Skills",
      "Team Collaboration",
      "Problem Solving",
      "Time Management & Multitasking",
      "Adaptability & Flexibility",
      "Learning Agility",
      "Customer service"
  
    ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            With a strong academic background in computer science, I’m highly adaptable and quick to learn new skills and technologies. I am always looking to expand my knowledge and improve my skills. My self-learning mindset, adaptability and flexibility allows me to tackle new technologies and complex challenges with ease. I am committed to not just solving problems, but also evolving with the industry to deliver efficient and cutting-edge solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend </h3>(Frontline of User Happiness)
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend </h3>(Logic Behind the Scenes)
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools of the Trade</h3>
                <div className="flex flex-wrap gap-2">
                  {moreSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Beyond the Code...</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>

                  <strong> MASTERS IN ADVANCED COMPUTER SCIENCE </strong> - Oxford Brookes University
                  (2022-2023)
                  <ul>
                    <li><strong>Relevant Coursework: </strong><span className="text-sm italic"> Web Development, Cloud
                    Computing, Secure System Architecture, Data science and Machine Learning, Networking </span></li>

                    <li><strong>Dissertation:</strong> <span className="text-sm italic">Disease detection using speech articulation: Exploring Machine Learning Approaches for Early Diagnosis</span></li>
                
                
                  </ul>
                  </li>
                  <br></br>
                  <li>

                  <strong> BACHELORS IN INFORMATION TECHNOLOGY </strong> - Kurukshetra University, India
                  (2017-2020)
                  <ul>
                    <li><strong>Relevant Coursework: </strong><span className="text-sm italic"> Programming Languages (C, C++), Digital Electronics, Analog Electronics, Microprocessor Architecture and Programming, Microcontrollers, Operating System, Telecommunication and Networking fundamentals</span></li>

                    
                
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎒 Adventures in adulting...  <span className="text-xs text-gray-400">(PART-TIME) <span>  Multithreading between dreams in tech and the reality of paying bills🙂.</span></span> </h3>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    📎✏️Sales Assistant, Ryman(2024 - Present){" "}
                  </h4>
                  <span className="text-sm italic">
                  Printer whisperer, courier queen, and tech-savvy multitasker—mastering binds, fixes, and customer chaos with a smile.
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    🛒Sales Assistant, TK Maxx (2022-2024){" "}
                  </h4>
                  <span className="text-sm italic">
                  Master of missing tags, fast hands, and cool nerves - twice crowned Assistant of the Month.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
