import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 md:border-4 border-blue-500 shadow-lg transition-all duration-300">
            <img
              src="/public/IMG-20240713-WA00021.jpg"
              alt="Partha Das"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left z-10 px-2 sm:px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight md:leading-normal">
              Hi, I'm Partha Das
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
              I’m a Web Developer who turns ideas into interactive web
              experiences. Specializes in real-time apps, video streaming, and
              scalable solutions. Constantly experimenting and learning new
              technologies.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/public/CV Resume.pdf"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Resume
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/Parthodasm23"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-x-twitter text-4xl"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/parthodas23"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-github text-4xl"></i>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/partho-das-998646342/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-linkedin text-4xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
