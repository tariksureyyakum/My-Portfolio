import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="container my-5">
      <h2 className="display-4 text-center mb-4">About Me</h2>

      {/* İlk kart: Kısa Tanıtım */}
      <div className="card mb-4">
        <div className="card-body">
          <p className="lead">
            Hello, I'm Tarık Sureyya Kum. I graduated from Dokuz Eylul University, Department of Management Information Systems in 2023.
          </p>
        </div>
      </div>

      {/* İkinci kart: Github Bilgisi */}
      <div className="card mb-4 custom-border">
        <div className="card-body">
          <p>
            I am sharing my Github profile with you. I have 4 different projects on Github, but if you wish, I can share them and explain them to you.
          </p>
        </div>
      </div>

      {/* Üçüncü kart: MyResume Projesi */}
      <div className="card mb-4 custom-border2">
        <div className="card-body">
        <strong>My Resume</strong>
          <p>
            I created a single-page website using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      {/* Dördüncü kart: Mini Projeler */}
      <div className="card mb-4 custom-border3">
        <div className="card-body">
        <strong>8 mini-projects</strong>
          <p>
            My second project consists of 8 mini-projects. These projects were also written based on HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      {/* Beşinci kart: Spor Salonu Karar Destek Sistemi */}
      <div className="card mb-4 custom-border4">
        <div className="card-body">
        <strong>Decision Support Systemse</strong>
          <p>
            I wrote a system that facilitates decision-making for gym owners on a gym campus using Decision Support Systems. I used HTML, CSS, JavaScript, PHP, and MySQL in this project.
          </p>
        </div>
      </div>

      {/* Altıncı kart: Aday Takip Sistemi */}
      <div className="card mb-4 custom-border5">
        <div className="card-body">
        <strong>Candidate Tracking System</strong>
          <p>
            I used HTML, CSS, JavaScript, PHP, and MySQL in this project. The purpose of this system is to eliminate the lack of communication between employers and candidates. <br/>
            We, candidates, wait a long time to get a positive response after applying, and we never get a negative response. To eliminate this lack of communication, I developed a system that companies can use to speed up the pre-approval process. <br/>
            After candidates upload certain personal information to this site, they select the departments they want to apply to. Then, 20-question exams specific to the selected departments are displayed on the candidates' homepage. <br/>
            I added parameters according to their exam scores. If the candidate successfully passes their exam, the company automatically sends an email. This shortens the waiting time for candidates. <br/>
            On the other hand, it prevents companies from being indecisive without knowing whether there is a need among hundreds of resumes. <br/>
            It also makes it easier for companies to choose from candidates who pass the exam. Appointments are arranged for candidates who pass the exam on a rotational basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
