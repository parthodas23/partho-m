import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

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
            Get In Touch
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
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Mobile View (Same as Screenshot) */}
        <div className="w-full max-w-md bg-white/10 p-4 rounded-lg shadow-lg md:hidden block">
          <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">
            Get In Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Name..."
              onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
            />
            <input
              type="email"
              name="reply_to"
              required
              value={formData.reply_to}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Email..."
              onChange={(e) => setFormData({ ...formData, reply_to: e.target.value })}
            />
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white"
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
