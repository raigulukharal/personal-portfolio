import React from "react";

const clients = [
  {
    name: "Ayesha Khan",
    role: "Startup Founder",
    img: "/assets/clientt1.webp",
    rating: 5,
    feedback:
      "Gulfam delivered exactly what I had in mind. Professional, timely, and super talented!",
  },
  {
    name: "Bilal Ahmed",
    role: "Project Manager",
    img: "/assets/client2.jfif",
    rating: 4,
    feedback:
      "Really impressed with the UI/UX and overall functionality. Great work!",
  },
  {
    name: "Sarah Malik",
    role: "Creative Director",
    img: "/assets/client3.jfif",
    rating: 5,
    feedback:
      "Working with Gulfam was smooth and inspiring. He brought fresh ideas and delivered quality code.",
  },
  {
    name: "Zain Raza",
    role: "Tech Consultant",
    img: "/assets/client4.jfif",
    rating: 5,
    feedback:
      "From backend to frontend – handled everything like a pro. Highly recommended!",
  },
];

const Client = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        What <span className="text-pink-500">Clients Rates </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg text-center"
          >
            <img
              src={client.img}
              alt={client.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-pink-500"
            />
            <h3 className="text-lg font-semibold">{client.name}</h3>
            <p className="text-sm text-pink-400 mb-2">{client.role}</p>
            <p className="text-sm text-gray-300 mb-3">"{client.feedback}"</p>
            <div className="text-yellow-400 text-lg">
              {"★".repeat(client.rating)}{"☆".repeat(5 - client.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;