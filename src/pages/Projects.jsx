import React from 'react';

const Projects = () => {
  return (
    <div>
      <div>
        <h1>Projects</h1>
        <hr />
      </div>
      <div className='projects-container'>
        <ul>
          <li> <span className='bold-text'>Personal Portfolio Website (2024):</span> Created a dynamic and responsive portfolio website using JavaScript and React, showcasing proficiency in frontend development and modern web technologies. Leveraged React's component-based architecture to build reusable UI elements, ensuring scalability and maintainability of the website. Implemented smooth navigation and interactive user interfaces to highlight projects, skills, and achievements effectively. Deployed the website using GitHub Pages, demonstrating expertise in version control and collaborative development using Git.</li>
          <br />
          <li> <span className='bold-text'>Microsoft Stock Behavior (2024):</span> Utilized Python programming along with libraries such as pandas, NumPy, and Matplotlib to perform comprehensive data analysis and visualization. Processed large datasets efficiently using pandas for data manipulation and cleaning, leveraging NumPy for numerical computations and statistical analysis. Developed insightful visualizations and graphical representations using Matplotlib. Implemented various data transformation techniques and statistical models to extract meaningful insights, demonstrating strong analytical and problem-solving skills.</li>
          <br />
          <li> <span className='bold-text'>Morning Empire (2024):</span> Designed and implemented a dynamic eCommerce website from scratch using Java and the Spring framework, incorporating robust backend functionalities and seamless frontend experiences. Integrated Spring MVC for handling user requests and responses, ensuring efficient communication between server-side logic and client-side interactions. Utilized Bootstrap framework for responsive and mobile-first frontend design, enhancing user interface (UI) and user experience (UX). Implemented features such as product catalog management, user authentication, shopping cart functionality, and secure payment gateways, adhering to industry best practices and security standards. Successfully deployed the application, achieving scalability and performance optimizations through Java-based technologies and Spring ecosystem tools.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;