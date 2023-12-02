import React, { useState } from 'react';
import './Landing.css';
import { motion, useTime, useTransform } from 'framer-motion';

const Landing = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 50], [0, 1], { clamp: false });

  return (
    <div className="landing-main">
      <div className="landing-left">
        <h1 className="welcome-note">
          "Glad you're <br /> here!"
        </h1>
        <p className='para'>Unleash Your Curiosity Here.</p>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Join Us
        </motion.button>
      </div>
      <div className="landing-right">
        <motion.div style={{ rotate }}>
          <img className='landing-img'
            src="https://media.istockphoto.com/id/543190650/photo/irobot-touch.jpg?s=1024x1024&w=is&k=20&c=9Qr5RamL2GyaWheOwwr5iRq2DXqkrCeEV_3PJaE1d6s="
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
