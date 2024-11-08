// src/components/Home.js
import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';
import Phrase from './Phrase';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Countdown />
      <Phrase />
    </div>
  );
};

export default Home;
