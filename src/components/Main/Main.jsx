import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Page404 from '../Page404/Page404';

const BlogRedirect = () => {
  useEffect(() => {
    window.location.replace('https://nunulong.github.io/ting-blog/');
  }, []);
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <p>Redirecting to blog...</p>
    </div>
  );
};

const Main = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolios" element={<Home />} />
        <Route path="/portfolios/projects" element={<Projects />} />
        <Route path="/portfolios/skills" element={<Skills />} />
        <Route path="/portfolios/about" element={<About />} />
        <Route path="/portfolios/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogRedirect />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};

export default Main;
