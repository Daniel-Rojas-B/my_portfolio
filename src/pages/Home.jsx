import React from 'react';
import { render } from "react-dom";
import { motion, useTime, useTransform } from "framer-motion";
import python_project from '../assets/images/python-project.png';
import finance from '../assets/images/finance.png';
import breakfast from '../assets/images/breakfast.png';
import face_layout from '../assets/images/face_layout.png';
const Home = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (

    <div>
      
      <div className='main'>
        <div className='left-main'>
          <h1>Engineer</h1>
        </div>
        <div>
          <img className="responsive-face" src={face_layout} alt="" />
        </div>
        <div className='right-main'>
          <h1>Coder</h1>
        </div>
      </div>
      {/* <div className="example-container">
        <motion.div style={{ rotate }}>
          
        </motion.div>
      </div> */}
      <div className='latest-work'>
        <div className="latest-work-title">

          <div class="line-with-text"><span>Some of my Latest Work</span></div>

        </div>
        <div className="latest-work-container">
          <div className='latest-work-box'>
            <img className="responsive-img" src={python_project} alt="" />
            <h4>Microsoft Stock Behavior</h4>
            <h5>Data Science Project</h5>
          </div>
          <div className='latest-work-box'>
            <img className="responsive-img" src={finance} alt="" />
            <h4>Morning Empire</h4>
            <h5>E-commerce Website</h5>
          </div>
          <div className='latest-work-box'>
            <img className="responsive-img" src={breakfast} alt="" />
            <h4>Seasonal and Holiday Crafts</h4>
            <h5>Mobile App</h5>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;