import React from "react";

const skills = [
  { name: "HTML 5", icon: "html5.png" },
  { name: "CSS 3", icon: "css3.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "Tailwind CSS", icon: "tailwind.png" },
  { name: "React JS", icon: "react.png" },
  { name: "Redux", icon: "redux.png" },
  { name: "Material UI", icon: "materialui.png" },
  { name: "Node JS", icon: "nodejs.png" },
  { name: "Express JS", icon: "express.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "Git", icon: "git.png" },
  { name: "GitHub", icon: "github.png" },
];

const tools = [
  { name: "VS Code", icon: "vscode.png" },
  { name: "ChatGPT", icon: "chatgpt.png" },
  { name: "Chrome", icon: "chrome.png" },
  { name: "MongoDB Compass", icon: "compass.png" },
  { name: "Thunder", icon: "thunder.jfif" },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <h2 className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
          <img src={`/assets/${skill.icon}`} alt={skill.name} className="w-14 h-14 transition-transform group-hover:scale-110" />

            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-5xl font-semibold text-center my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tools and Software</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
           <img src={`/assets/${tool.icon}`} alt={tool.name} className="w-14 h-14 transition-transform group-hover:scale-110" />

            <span className="mt-2 text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
