import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodCards from './components/FoodCards';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FoodCards />
      <Food />
      <Category />
    </div>
  );
}



export default App;
