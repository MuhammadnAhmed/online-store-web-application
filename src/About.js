import React from 'react';
import TotalPrice from './TotalPrice';
import Figure from 'react-bootstrap/Figure';

import './About.css'; 

const About = ({ totalPrice, isTotalVisible }) => {
  return (
    <div className="container page-content">
      {/* Display the total price component if isTotalVisible is true */}
      {isTotalVisible && <TotalPrice totalPrice={totalPrice} />}
      <h2 className="page-header">About Our Store</h2>
      <div className="store-description">
        <div className="logo-container"> 
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="Store Logo"
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716768000&semt=sph"
            />
            <Figure.Caption>
              Welcome to our online store, where you can discover a wide range of electronic products to suit your needs. From sleek smartwatches that keep you connected to advanced gaming mice for the avid gamer, we have something for everyone. Dive into our collection of tablets, perfect for work or play, and explore our selection of headphones and speakers for an immersive audio experience. At our store, we are committed to providing high-quality products at competitive prices, along with exceptional customer service. Start browsing now and find the perfect tech companion for you!
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div className="store-images row justify-content-between">
        {/* First store image */}
        <div className="col-6">
          <img src="https://worldarchitecture.org/imgcache/bin-11323728f08a2b8785c9a54aa7c8bb12.jpg" alt="Image 1" className="img-fluid img-large" /> {/* Make the image larger */}
        </div>
        {/* Second store image */}
        <div className="col-6">
          <img src="https://i.pinimg.com/736x/4d/9e/9f/4d9e9fca85d642b396a449e7221fcbac.jpg" alt="Image 2" className="img-fluid img-large" /> {/* Make the image larger */}
        </div>
      </div>
      <div className="contact-info bg-light p-3 mt-4">
        <h3>Contact Us</h3>
        <p>If you have any questions or inquiries, feel free to contact us:</p>
        {/* Contact information */}
        <p>Email: info@online_store.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main Street, Leicester, United Kingdom</p>
      </div>
    </div>
  );
};

export default About;
