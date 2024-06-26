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
            Hello! I'm Daniel, a passionate engineer. I specialize in software development. With a strong background in science and tech, I strive to create impactful and innovative solutions.
            I'm always eager to learn new technologies and improve my skills. Let's work together to create something amazing!
          </p>
        </div>

      </div>
      <div className="main-container">
        <div className="language-container">
          <h1>Python</h1>
          <ul>
            <li>Flask</li>
            <li>Django</li>
            <li>NumPy</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="language-container">
          <h1>JavaScript</h1>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>npm</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="language-container">
          <h1>Java</h1>
          <ul>
            <li>STS</li>
            <li>Spring Boot</li>
            <li>Bootstrap</li>
            <li>MySQL</li>            
          </ul>
        </div>
        <div className="language-container">
          <h1>C#</h1>
          <ul>
            <li>ASP.NET Core</li>
            <li>Spring Boot</li>
            <li>Bootstrap</li>
                       
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;