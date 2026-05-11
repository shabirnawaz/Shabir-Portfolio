import React, { useState } from "react";
import HeroBackground from "../components/HeroBackground";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent! (Check console)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 py-20 px-4">
      {/* Background Animation */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl w-full">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Get in <span className="text-blue-500 text-4xl md:text-6xl">Touch</span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg md:text-xl">
          Have a project, idea or just want to say hi? I’m always open to
          discussing new opportunities, collaborations, or just networking.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-6 border border-gray-800"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-br from-blue-600 to-purple-700 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Info */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400 text-sm md:text-base">
          <p>
            Email:{" "}
            <a
              href="mailto:hello@shabir.dev"
              className="underline text-blue-500"
            >
              shabir.afridi428@gmail.com
            </a>
          </p>
          <p>Phone:+923320559914</p>
          <p>Location: Rawalpindi, Pakistan</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
