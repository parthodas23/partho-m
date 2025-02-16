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
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Video Streaming App</h3>
              <p className="text-gray-400 mb-4">
                Integrated Socket.io for real-time communication and
                peer-to-peer video calls
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express.js",
                  "WebRTC",
                  "EJS",
                  "Material UI",
                  "Socket.io",
                  "PeerJS",
                ].map((tech, key) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://video-streaming-app-lezy.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Second Project */}
            <div
              className="
    glass p-6 rounded-xl border border-white/10 
    hover:-translate-y-1 hover:border-blue-500/30
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
    transition-all
  "
            >
              <h3 className="text-xl font-bold mb-2">Google Gmail Clone </h3>
              <p className="text-gray-400 mb-4">
                Implemented authentication, email storage, and a responsive UI
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Firebase", "Material UI"].map((tech) => (
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
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://clone-90105.web.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Third Project - Centered */}
            <div
              className="
    glass p-6 rounded-xl border border-white/10 
    hover:-translate-y-1 hover:border-blue-500/30
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
    transition-all md:col-span-2 flex flex-col items-center text-center
  "
            >
              <h3 className="text-xl font-bold mb-2">Working and Exploring</h3>
              <p className="text-gray-400 mb-4">
                A foundational exploration of neural networks alongside an
                independent deep dive into JavaScript, demonstrating a
                commitment to expanding knowledge and problem-solving skills.
              </p>
              <ul className="list-disc list-inside">
                <li>Exploring Neural Networks (Basic)</li>
                <li>JavaScript Research (Self-Initiated)</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
