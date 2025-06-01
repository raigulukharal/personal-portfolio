import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://gulfam-portfolio.up.railway.app/send/mail',
        { name, email, message },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-indigo-500 to-pink-500">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 py-16 bg-gray-900 shadow-lg">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          Let's Contact Me
        </h1>
        <p className="text-white text-lg mb-8 leading-relaxed">
          Whenever someone reaches out to me, I genuinely feel delighted. 
          Your message brightens my day and makes me feel appreciated. 
          Let's connect and create something amazing together!
        </p>
        <p className="text-xl mb-6 text-white font-bold">Let's stay in touch! Feel free to reach out via my social media.</p>

        <div className="flex space-x-6 mx-10">
          <a href="https://www.linkedin.com/in/rai-gulfam-559b0a338/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-indigo-600 hover:text-indigo-800 text-5xl transition duration-300" />
          </a>
          <a href="https://github.com/raigulukharal" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-500 hover:text-black text-5xl transition duration-300" />
          </a>
          <a href="https://wa.me/923021199258" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-600 hover:text-green-700 text-5xl transition duration-300" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full lg:w-1/2 bg-gray-900 p-10 flex items-center justify-center">
        <form onSubmit={sendMail} className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-6">Contact Form</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 flex justify-center items-center"
          >
            {loading ? <ClipLoader color="white" size={20} /> : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
