import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ItemCards.css";
import productImage from "../../images/image 10.png";
import product2 from "../../images/image 31.png";
import product3 from "../../images/image 11.png";
import product4 from "../../images/image 12.png";
import product5 from "../../images/image 13 (1).png";
import product6 from "../../images/image 13.png";
import product7 from "../../images/image 14.png";
import product8 from "../../images/image 15.png";
import product9 from "../../images/image 16.png";
import greenLike from "../../images/greenLike.png";
import product10 from "../../images/pizza.png";
import product11 from "../../images/pizza1.jpeg";
import product12 from "../../images/pizza2.png";
import product13 from "../../images/pizzaa.jpg";
import product14 from "../../images/burger.jpg";
import product15 from "../../images/burger.png";
import product16 from "../../images/fries1.jpeg";
import product17 from "../../images/fries2.jpeg";
import product18 from "../../images/fries3.jpeg";
import product19 from "../../images/fries4.jpeg";
import product20 from "../../images/pasta.png";


const cardData = [
  {
    image: productImage,
    caption: "Benediction",
    rating: "4.5 (100+)",
    catagory: "pasta",
  },
  {
    image: product2,
    caption: "DELISH PIZZA BAR - Cantt",
    rating: "4.8 (150+)",
    catagory: "pizza",
  },
  {
    image: product3,
    caption: "Feeha",
    rating: "4.7 (120+)",
    catagory: "pizza",
  },
  { image: product4, caption: "Product 4", rating: "4.9 (180+)" },
  {
    image: product5,
    caption: "Product 5",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product6,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "mexican",
  },
  {
    image: product7,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "sushi",
  },
  {
    image: product8,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product9,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "burger",
  },
  {
    image: product10,
    caption: "Product 5",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product11,
    caption: "Product 5",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product12,
    caption: "Product 5",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product13,
    caption: "Product 5",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product14,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "burger",
  },
  {
    image: product15,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "burger",
  },
  {
    image: product16,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "burger",
  },
  {
    image: product17,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product18,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product19,
    caption: "Product 6",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product20,
    caption: "Benediction",
    rating: "4.5 (100+)",
    catagory: "pasta",
  },
];

const ItemCards = ({ selectedCategory }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleSelectItem = (index, event) => {
    event.stopPropagation();
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleCardClick = (index) => {
    const product = cardData[index];
    navigate(`/all-restaurants/${index}`, { state: { product } });
  };
  const filteredData = selectedCategory
    ? cardData.filter((card) => card.catagory === selectedCategory)
    : cardData;

  return (
    <div className="container items-cards-container">
      <div className="items-cards-container">
        {filteredData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="item-product-card"
          >
            <div className="image-container">
              <img
                src={card.image}
                alt={card.caption}
                className="product-image"
              />
              <div
                className="like-icon"
                onClick={(event) => handleSelectItem(index, event)}
              >
                {selectedItems.includes(index) ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      color: "green",
                      borderRadius: "50%",
                      padding: "10px",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <img
                    src={greenLike}
                    alt="Like"
                    style={{
                      cursor: "pointer",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                )}
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
