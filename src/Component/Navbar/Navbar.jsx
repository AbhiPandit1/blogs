import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [logo, setLogo] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  function logoToggle() {
    setLogo(!logo);
  }

  function categoryToggle(category) {
    setActiveCategory(activeCategory === category ? null : category);
  }

  const navbarLinks = {
    About: {
      link1: 'AboutUs',
      link2: 'OurStory',
      link3: 'MeetTheTeam',
      link4: 'MissionVision',
    },
    Categories: {
      link1: 'TechInsights',
      link2: 'Lifestyle',
      link3: 'Travel',
      link4: 'Culinary',
    },
    Resources: {
      link1: 'Tutorials',
      link2: 'Resources',
      link3: 'Freebies',
      link4: 'Ebooks',
    },
    Subscribe: {
      link1: 'Newsletter',
      link2: 'Subscribe',
      link3: 'JoinUs',
      link4: 'Updates',
    },
    Search: {
      link1: 'Search',
      link2: 'Explore',
      link3: 'Find',
      link4: 'LookUp',
    },
  };

  return (
    <motion.div
      className="main"
      layout
      animate={{
        opacity: 1, // Final opacity
      }}
      initial={{
        opacity: 0, // Initial opacity
      }}
      transition={{
        opacity: { ease: 'linear', duration: 2 }, // Transition for opacity
        layout: { duration: 0.3 }, // Transition for layout
      }}
    >
      <div className="logo" onClick={logoToggle}>
        {logo ? (
          <GiHamburgerMenu style={{ fontSize: '2em' }} />
        ) : (
          <RxCross2 style={{ fontSize: '2em' }} />
        )}
      </div>
      <motion.div className="header">
        {Object.keys(navbarLinks).map((category, index) => (
          <div
            key={index}
            className="sub-header"
            onClick={() => categoryToggle(category)}
          >
            <h4>{category}</h4>
            

            {Object.keys(navbarLinks[category]).map((link, linkIndex) => (
              <motion.a
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                key={linkIndex}
                href={`/${category}/${link}`}
                style={{
                  display: activeCategory === category ? 'block' : 'none',
                }}
              >
                {navbarLinks[category][link]}
              </motion.a>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
