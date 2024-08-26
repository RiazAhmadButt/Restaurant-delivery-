import React from 'react';
import './ItemCards.css';
import productImage from '../../images/image 10.png'; 
import product2 from '../../images/image 10 (1).png';
import product3 from '../../images/image 11.png';
import product4 from '../../images/image 12.png';
import product5 from '../../images/image 13 (1).png';
import product6 from '../../images/image 13.png';
import product7 from '../../images/image 14.png';
import product8 from '../../images/image 15.png';
import product9 from '../../images/image 16.png';


const cardData = [
  {
    image: productImage, 
    caption: 'Benediction',
    rating: '4.5 (100+)',
    catagory: 'pasta'
  },
  {
    image: product2,
    caption: 'DELISH PIZZA BAR - Cantt',
    rating: '4.8 (150+)',
    catagory: 'pizza'
  },
  {
    image: product3,
    caption: 'Feeha',
    rating: '4.7 (120+)',
    catagory: 'pizza'
  },
  {
    image: product4,
    caption: 'Product 4',
    rating: '4.9 (180+)',
  },
  {
    image: product5,
    caption: 'Product 5',
    rating: '4.6 (90+)',
    catagory: 'pizza'
  },
  {
    image: product6,
    caption: 'Product 6',
    rating: '4.8 (300+)',
    catagory: 'pizza'
  },
  {
    image: product7,
    caption: 'Product 6',
    rating: '4.8 (300+)',
    catagory: 'pizza'
  },
  {
    image: product8,
    caption: 'Product 6',
    rating: '4.8 (300+)',
    catagory: 'pizza'
  },
  {
    image: product9,
    caption: 'Product 6',
    rating: '4.8 (300+)',
    catagory: 'pizza'
  }
  
];

const ItemCards = () => {
  return (
    <div className="container cards-wrapper">
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img src={card.image} alt={card.caption} className="product-image" />
              <div className="like-icon">
                <img src={require('../../images/greenLike.png')} alt="Like" />
              </div>
            </div>
            <div className="card-details">
                <div>
                <p className="product-caption">{card.caption}</p>
                <p className="product-catagory">{card.catagory}</p>
                </div>
              
              <p className="product-rating">{card.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
