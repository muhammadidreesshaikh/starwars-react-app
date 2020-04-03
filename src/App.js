import React from 'react';
import './App.css';

import Header from './layout/Header';

import Slider from './layout/Slider';
import Films from './components/Films';
import People from './components/People';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';

import Footer from './layout/Footer';



function App() {
  return (
    <div>
      <Header />

      <Slider />
      <Films />
      <People />
      <Planets />
      <Spaceships />
      <Species />
      <Vehicles />
     

      <Footer />
    </div>
  );
}

export default App;
