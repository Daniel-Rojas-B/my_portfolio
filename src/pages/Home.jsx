import React from 'react';
import { render } from "react-dom";
import { motion, useTime, useTransform } from "framer-motion";
import soccer from '../assets/images/soccer.png';
import finance from '../assets/images/finance.png';
import breakfast from '../assets/images/breakfast.png';
const Home = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (

    <div>
      <h1>Welcome to My Portfolio</h1>
      <div className='main'>
        <div className='left-main'>
            <h1>Engineer</h1>
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
            <img className="responsive-img" src={soccer} alt="" />
            <h4>Python Numpy</h4>
            <h5>Side Project</h5>
          </div>
          <div className='latest-work-box'>
            <img className="responsive-img" src={finance} alt="" />
            <h4>Python Numpy</h4>
            <h5>Side Project</h5>
          </div>
          <div className='latest-work-box'>
            <img className="responsive-img" src={breakfast} alt="" />
            <h4>Python Numpy</h4>
            <h5>Side Project</h5>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;