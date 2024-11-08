// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Countdown from './components/Countdown';
import CeremonyParty from './components/CeremonyParty';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import Gifts from './components/Gifts'
import Party from './components/Party';
import Thanks from './components/Thanks';
import '/src/styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Countdown />
      <CeremonyParty />
      <RSVPForm />
      <Gallery />
      <Gifts/>
      <Party/>
      <Thanks/>
    </div>
  );
};

export default App;
