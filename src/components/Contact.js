// src/Contact.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <div className="row">
          {/* Sol Taraf: İletişim Formu */}
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h3 className="card-title">Contact Information</h3>
              <ul className="list-unstyled">
                <li><strong>Name:</strong> Tarık Süreyya Kum</li>
                <li><strong>Email:</strong> tariksureyyakum@gmail.com</li>
                <li><strong>Phone:</strong> +90 543 911 3538</li>
              </ul>
            </div>
          </div>
          {/* Sağ Taraf: Harita veya Boş Alan */}
          <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h3 className="card-title">Location</h3>
            <iframe
              title="Kayseri Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12448.798238873833!2d35.51227269900934!3d38.73618259813799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b12ff799265df%3A0x3fa541160c1dc08c!2sErciyesevler%2C%20Kocasinan%2FKayseri!5e0!3m2!1str!2str!4v1726412387785!5m2!1str!2str"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
