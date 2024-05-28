import React from 'react';
import './App.css';
import TotalPrice from './TotalPrice';

const Contact = ({ totalPrice, isTotalVisible }) => {
  return (
    <div className="container page-content">
      {isTotalVisible && <TotalPrice totalPrice={totalPrice} />}
      <h2 className="page-header">Contact Page</h2>
      <p>Get in touch with us!</p>
    </div>
  );
};

export default Contact;
