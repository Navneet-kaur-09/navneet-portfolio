import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Restaurant Waiter Microservice </h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed and implemented a distributed microservice architecture deployed on Google Cloud Platform</li>
                <li>Developed RESTful APIs for seamless inter-service communication with proper error handling</li>
                <li> Implemented database schema optimization for efficient query performance</li>
                <li>Created containerized deployment with scalability considerations</li>
                <li>Collaborated in an agile team of 4 developers, using Git for version control and code reviews</li>
              </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Django", "REST framework", "SQLite", "GCP", "Microservices Architecture"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Navneet-kaur-09/Restaurant-Waiter-Microservice" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Product Store App </h3>
              <p className="text-gray-400 mb-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built a full-stack application with complete CRUD functionality and responsive design</li>
                  <li>Implemented RESTful API endpoints with proper error handling and authentication</li>
                  <li>Designed relational database schema with optimized queries for data retrieval</li>
                  <li>Developed responsive UI optimized for both desktop and mobile devices</li>
                  
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MERN Stack", "REST API"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Navneet-kaur-09/My-Product-store" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Firebase Chat App</h3>
              <p className="text-gray-400 mb-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed a real-time messaging application with user authentication and database integration</li>
                <li>Implemented state management using Redux for predictable state changes</li>
                <li>Created reusable UI components with comprehensive unit testing</li>
                <li>Designed and implemented distributed database architecture for message storage</li>
                <li>Optimized application performance through code splitting and lazy loading</li>
              </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Firebase", "Expo", "JavaScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Navneet-kaur-09/firebase-chat" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Video Sharing App</h3>
              <p className="text-gray-400 mb-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Built a video sharing application with focus on scalable architecture and performance</li>
                <li>Implemented efficient data storage and retrieval mechanisms for video content</li>
                <li>Designed authentication system with role-based access control</li>
                <li>Created responsive UI with smooth animations for enhanced user experience</li>
                <li>Applied optimization techniques for handling large video files and streaming</li>
              </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Node.js,", "Appwrite", "NativeWind", "Expo"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Navneet-kaur-09/video_sharing_app" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
