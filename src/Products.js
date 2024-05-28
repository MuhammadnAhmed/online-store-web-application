import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
import TotalPrice from './TotalPrice.js';

// Example product array 
const productsData = [
    { 
      id: 1, 
      name: 'Wireless Earbuds', 
      description: 'Experience high-quality sound with our latest wireless earbuds. Enjoy freedom of movement without sacrificing audio quality.', 
      price: 69.99, 
      image: 'https://m.media-amazon.com/images/I/71W73DIJLUL._AC_UF1000,1000_QL80_.jpg', 
      colors: ['Black', 'White', 'Blue'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 2, 
      name: 'Smartwatch', 
      description: 'Stay connected and track your fitness goals with our sleek smartwatch. Receive notifications, monitor your heart rate, and more.', 
      price: 149.99, 
      image: 'https://image.smythstoys.com/original/desktop/222426.jpg', 
      colors: ['Black', 'Silver', 'Rose Gold'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 3, 
      name: 'Portable Bluetooth Speaker', 
      description: 'Take your music anywhere with our portable Bluetooth speaker. Enjoy crisp, clear sound and long battery life on the go.', 
      price: 49.99, 
      image: 'https://image.smythstoys.com/original/desktop/212788.jpg', 
      colors: ['Black', 'Red', 'Blue'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 4, 
      name: 'Wireless Charging Pad', 
      description: 'Charge your devices effortlessly with our wireless charging pad. Simply place your device on the pad and enjoy fast, convenient charging.', 
      price: 29.99, 
      image: 'https://m.media-amazon.com/images/I/6114qzNg-3L.jpg', 
      colors: ['Black', 'White', 'Gray'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 5, 
      name: 'Gaming Mouse', 
      description: 'Enhance your gaming experience with our advanced gaming mouse. Featuring customizable buttons, ergonomic design, and precise tracking.', 
      price: 79.99, 
      image: 'https://m.media-amazon.com/images/I/61Mk3YqYHpL._AC_UF1000,1000_QL80_.jpg', 
      colors: ['Black', 'Red', 'Green'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 6, 
      name: 'Fitness Tracker', 
      description: 'Achieve your fitness goals with our smart fitness tracker. Monitor your activity, track your workouts, and stay motivated to stay healthy.', 
      price: 89.99, 
      image: 'https://www.themanual.com/wp-content/uploads/sites/9/2022/02/fitbit-charge-fitness-band-featured-image.jpg?p=1', 
      colors: ['Black', 'Blue', 'Purple'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 7, 
      name: 'HD Webcam', 
      description: 'Upgrade your video calls with our high-definition webcam. Enjoy crystal-clear video and audio for professional-quality communication.', 
      price: 59.99, 
      image: 'https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png?v=1', 
      colors: ['Black', 'Silver', 'White'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 8, 
      name: 'Bluetooth Headphones', 
      description: 'Immerse yourself in your favorite music with our Bluetooth headphones. Experience superior sound quality and comfort for hours of listening pleasure.', 
      price: 99.99, 
      image: 'https://www.hifiheadphones.co.uk/cdn/shop/products/soundmagic-p23bt-2021-frontal-main-1000x1000_1200x.jpg?v=1715174758', 
      colors: ['Black', 'Blue', 'Gray'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 9, 
      name: 'Wireless Keyboard', 
      description: 'Increase your productivity with our wireless keyboard. Enjoy the freedom to type from anywhere with reliable wireless connectivity.', 
      price: 79.99, 
      image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9145030-NA-K63-Wireless-NA-01.png', 
      colors: ['Black', 'White', 'Silver'], 
      selectedColor: 'Select Color' 
    },
    { 
      id: 10, 
      name: 'External Hard Drive', 
      description: 'Backup and store your important files with our external hard drive. With high capacity and fast transfer speeds, it\'s perfect for storing photos, videos, and more.', 
      price: 129.99, 
      image: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/externalhardrives-2048px-09422.jpg', 
      colors: ['Black', 'Silver', 'Red'], 
      selectedColor: 'Select Color' 
    },
];

const Products = ({ totalPrice, isTotalVisible, addPrice }) => {
  // Initialize state to store product data
  const [products, setProducts] = useState(productsData);

  // Handle color selection for a product
  const handleColorSelect = (productId, color) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, selectedColor: color } : product
      )
    );
  };

  // Handle 'Buy Now' button click to add the product price to the total
  const handleBuyNow = (price) => {
    addPrice(price);
  };

  return (
    <div className="container page-content" >
      {/* Display total price if it's visible */}
      {isTotalVisible && <TotalPrice totalPrice={totalPrice} />}
      <Container className="products-page">
        <h2 className="text-center my-4">Products</h2>
        <Row className="justify-content-center mt-4">
          {/* Render each product as a card */}
          {products.map((product) => (
            <Col key={product.id} md={4} lg={3} className="mb-4">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={product.image} className="card-img-top" />
                </div>
                <Card.Body>
                  <Card.Title className="product-title">{product.name}</Card.Title>
                  <Card.Text className="product-description">{product.description}</Card.Text>
                  <Card.Text className="product-price"><strong>Price: ${product.price}</strong></Card.Text>
                  <Button variant="primary" className="buy-button" onClick={() => handleBuyNow(product.price)}>Buy Now</Button>
                  <Row className="justify-content-center mt-2">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id={`dropdown-basic-${product.id}`}>
                        {product.selectedColor}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* Render color options for the product */}
                        {product.colors.map((color, index) => (
                          <Dropdown.Item key={index} onClick={() => handleColorSelect(product.id, color)}>{color}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
