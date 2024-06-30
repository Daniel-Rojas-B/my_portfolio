import React from 'react';
import LinkedIn_Picture from '../assets/images/LinkedIn_Picture.jpg';
const About = () => {
  return (
    <div className="about-me">
      <div className="main-container">
        <div className='left-container'>
          <img class="LinkedIn" src={LinkedIn_Picture} alt="LinkedIn" />
        </div>
        <div className="right-container">
          <h1>About Me</h1>
          <p>
          Hello! I'm Daniel, a software-focused engineer with a strong track record in delivering innovative solutions in dynamic environments, shaped by six years of military experience that honed my discipline and perseverance. With a strong background in science and tech, I strive to create impactful and innovative solutions. I'm always eager to learn new technologies and improve my skills. Let's work together to create something amazing!
          </p>
        </div>

      </div>

      <div class="line-with-text"><span>Skills</span></div>

      <div className="main-container">
        <div className="language-container">
          <h3>Python</h3>
          <ul className="checkmark-list">
            <li>Flask</li>
            <li>Django</li>
            <li>NumPy</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="language-container">
          <h3>JavaScript</h3>
          <ul className="checkmark-list">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>npm</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="language-container">
          <h3>Java</h3>
          <ul className="checkmark-list">
            <li>STS</li>
            <li>Spring Boot</li>
            <li>Bootstrap</li>
            <li>MySQL</li>            
          </ul>
        </div>
        <div className="language-container">
          <h3>C#</h3>
          <ul className="checkmark-list">
            <li>ASP.NET MVC</li>
            <li>Github Actions</li>
            <li>Postman</li>
                       
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;