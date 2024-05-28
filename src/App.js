import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';

const App = () => {
  // State to track the total price of items added to the cart
  const [totalPrice, setTotalPrice] = useState(0);
  // State to control visibility of the total price
  const [isTotalVisible, setIsTotalVisible] = useState(false);

  // Function to add a product's price to the total price
  const addPrice = (price) => {
    // Update the total price
    setTotalPrice(prevTotal => prevTotal + price);
    // Make the total price visible
    setIsTotalVisible(true);
  };

  return (
    <div>
      {/* Render the navigation bar */}
      <Navigation />
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the page */}
        <Route path="/" element={<Home />} />   
             
        <Route path="/products" element={<Products totalPrice={totalPrice} isTotalVisible={isTotalVisible} addPrice={addPrice} />} />
       
        <Route path="/about" element={<About totalPrice={totalPrice} isTotalVisible={isTotalVisible} addPrice={addPrice} />} />
       
        <Route path="/contact" element={<Contact totalPrice={totalPrice} isTotalVisible={isTotalVisible} />} />
      </Routes>
    </div>
  );
};

export default App;
