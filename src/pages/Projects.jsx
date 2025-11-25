import React, { useState } from 'react';

import smarthomeImg from '../assets/smarthome.png';
import ecofarmImg from '../assets/ecofarm.png';
import eduquestImg from '../assets/eduquest.png';
import medibotImg from '../assets/medibot.png';

const projectsData = [
  { 
    id: 1, 
    title: "SmartHome AI", 
    country: "Україна", 
    img: smarthomeImg,
    features: ["IoT", "Voice Control", "Energy Saving"] 
  },
  { 
    id: 2, 
    title: "EcoFarm Monitoring", 
    country: "Україна", 
    img: ecofarmImg, 
    features: ["Drones", "Soil Analytics", "Yield Forecast"] 
  },
  { 
    id: 3, 
    title: "EduQuest VR", 
    country: "США", 
    img: eduquestImg, 
    features: ["VR", "Gamification", "Interactive Lessons"] 
  },
  { 
    id: 4, 
    title: "MediBot Assistant",
    country: "Німеччина", 
    img: medibotImg, 
    features: ["AI Diagnosis", "24/7 Support", "Health Tracking"] 
  }
];

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setSlideIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));

  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom:'20px'}}>ПРОЄКТИ TECH START-UP</h1>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <img src={projectsData[slideIndex].img} alt="Project" className="carousel-image" />
          <div className="carousel-caption">{projectsData[slideIndex].title}</div>
          <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
          <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      <div className="projects-grid">
        {projectsData.map(p => (
          <article key={p.id} className="project-card">
            <h2>{p.title}</h2>
            <img src={p.img} alt={p.title} className="project-img" />
            <p><strong>Країна:</strong> {p.country}</p>
            <ul>
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;