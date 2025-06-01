import React from "react";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix clone with user authentication, trending shows, and trailer playback using TMDB API and Firebase.",
    image: "/assets/netflix-clone.avif",
  },
  {
    title: "Instagram Clone",
    description:
      "Built a social media platform inspired by Instagram. Features include post uploads, likes, comments, and real-time updates.",
    image: "/assets/instagram.jfif",
  },
  {
    title: "E-Commerce Website",
    description:
      "Fully functional shopping site with product listings, cart system, and payment integration. Built with MERN stack.",
    image: "/assets/ecommerce.jfif",
  },
  {
    title: "Real-time Chat App",
    description:
      "A sleek messaging platform with real-time chat, typing indicators, and group support using Socket.IO and Node.js.",
    image: "/assets/chatmessage.png",
  },
  {
    title: "DeepSeek Clone",
    description:
      "AI assistant web app inspired by DeepSeek, using OpenAI integration to handle Q&A, summaries, and code generation.",
    image: "/assets/deepseek.png",
  },
  {
    title: "Tech Blog Platform",
    description:
      "A dynamic blogging platform where users can publish articles, interact with others, and manage their content.",
    image: "/assets/blog.jfif",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-pink-500">Projects</span>
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;