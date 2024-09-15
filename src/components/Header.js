import React from 'react';
import './Header.css'; // Eğer özel stiller kullanacaksan

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <h1 className="float-start">Tarık Sureyya Kum</h1>
        <nav>
          <ul className="nav float-end">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
