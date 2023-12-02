import React from 'react';
import './Articles.css';
import { motion } from 'framer-motion';

const Articles = () => {
  const Articles = [
    {
      heading: 'Tech Article',
      type: 'tech',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Abhishek',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'food',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Emma',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'lifestyle',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'John',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'culinary',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Sophia',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'culinary',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Sophia',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'food',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Abhishek',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'lifestyle',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Emma',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'culinary',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'John',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'tech',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Sophia',
      PublishDate: Date.now(),
    },
    {
      heading: 'Tech Article',
      type: 'food',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgSrc:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M7tyyHTjceZyTlT91zTS1A.png',
      author: 'Michael',
      PublishDate: Date.now(),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      
    >
      <div className="left-side">
        {Articles.map((article, index) => (
          <div className="box" variants={item}>
            <div className="heading">
              <div className="header">
                <p>{article.heading}</p>
              </div>
              <div className="type">
                <p>{article.type}</p>
              </div>
            </div>

            <div key={index} className="image-des">
              <div className="des">
                <p>{article.description}</p>
              </div>
              <img className="image" src={article.imgSrc} alt="" />
            </div>
            <div className="sub-category">
              <div>
                {' '}
                <h3>{article.author}</h3>
              </div>

              <div>
                <h5>{article.PublishDate}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Articles;
