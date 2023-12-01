import React, { useState } from 'react';
import './Landing.css';
import { motion, useTime, useTransform } from 'framer-motion';

const Landing = () => {
  const [move, setMove] = useState(true);

  function moveToggle() {
    setMove(!move);
  }
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: move });

  return (
    <div className="landing-main">
      <div className="landing-left">
        <h1 className="welcome-note">
          "Glad you're <br /> here!"
        </h1>
        <p>Unleash Your Curiosity Here.</p>
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
        <motion.div style={{ rotate }} onMouseEnter={moveToggle}>
          <img
            decoding="async"
            src="https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-500w.jpg"
            width="488"
            height="300"
            loading="eager"
            alt=""
            srcset="
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-100w.jpg 100w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-300w.jpg 300w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-500w.jpg 500w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-750w.jpg 750w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-1000w.jpg 1000w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-1500w.jpg 1500w,
          https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-2500w.jpg 2500w"
            sizes="(min-width: 1024px) 66.5vw, (min-width: 768px) 65vw, 100vw"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
