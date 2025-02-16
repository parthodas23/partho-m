import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

const serviceID = "service_z3jy3k9";
const templateID = "template_5i3i0dt";
const publicKey = "7g5y94oRt9_CZ-erI";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    to_name: "Partha", // Set a default recipient name
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({
          from_name: "",
          reply_to: "",
          message: "",
          to_name: "Partha",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8"
    >
      <RevealOnScroll>
        {/* Desktop View */}
        <div className="hidden md:block px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Let's Build Something Amazing
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Name..."
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="reply_to"
                required
                value={formData.reply_to}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Email..."
                onChange={(e) =>
                  setFormData({ ...formData, reply_to: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="text-sm md:text-base lg:text-lg">
                Send Message
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Mobile View (Same as Screenshot) */}
        <div className="w-full max-w-md bg-white/10 p-4 rounded-lg shadow-lg md:hidden block">
          <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">
          Let's Build Something Amazing
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Name..."
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
            />
            <input
              type="email"
              name="reply_to"
              required
              value={formData.reply_to}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Email..."
              onChange={(e) =>
                setFormData({ ...formData, reply_to: e.target.value })
              }
            />
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="text-sm md:text-base lg:text-lg">
                Send Message
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
