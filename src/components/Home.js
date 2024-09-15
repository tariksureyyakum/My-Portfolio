import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const Home = () => {
  return (
    <section className="container my-5">
      <h1 className="display-3">Welcome to My Portfolio</h1>
      <p className="lead">
        Hi, I'm Tarık Sureyya Kum. A passionate software developer with expertise in web technologies. Explore my work and feel free to contact me!
      </p>
      {/* Sol Taraf: İletişim Formu  <div className="cta-buttons"> 
        <a href="#about" className="btn btn-info">Learn More About Me</a>
        <a href="#projects" className="btn btn-success">View My Projects</a>
      </div> */}
    </section>
  );
};

export default Home;
