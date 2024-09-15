import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';  // Projeleri de eklemek istersen burada olacak
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;