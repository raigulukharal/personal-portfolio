import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true); // default black mode

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000000" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  return (
    <>
      <Router>
        <ToastContainer />

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(prev => !prev)}
          style={{
            position: 'fixed',
            top: '15px',
            right: '15px',
            zIndex: 9999,
            padding: '10px',
            borderRadius: '50%',
            background: darkMode ? '#ffffff' : '#000000',
            color: darkMode ? '#000000' : '#ffffff',
            border: 'none',
            cursor: 'pointer'
          }}
          title="Toggle Dark/Light Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Navbar */}
        <Navbar />

        {/* Hero & All Sections */}
        <main>
          <section id="hero">
            <Hero />
          </section>

          <section id="about" className="pt-20">
            <About />
          </section>

          <section id="skills" className="pt-20">
            <Skills />
          </section>

          <section id="projects" className="pt-20">
            <Projects />
          </section>

          <section id="client" className="pt-20">
            <Client />
          </section>

          <section id="contact" className="pt-20">
            <Contact />
          </section>

          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;