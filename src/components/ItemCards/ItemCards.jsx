import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ItemCards.css";
import productImage from "../../images/image 10.png";
import product4 from "../../images/pizza2.png";
import product5 from "../../images/pizza1.jpeg";
import product6 from "../../images/Making-Waves-Indian-Restaurants-London-Dining-FT-MAG0723-21e40f8b4d234a99bb53edb6608acfab.jpg";
import product7 from "../../images/fries.png";
import product8 from "../../images/fries1.jpeg";
import product9 from "../../images/images (1).jpeg";
import greenLike from "../../images/greenLike.png";

// Define your card data
const cardData = [
  {
    image: productImage,
    caption: "epicurious",
    rating: "4.5 (100+)",
    catagory: "pasta",
  },
  { image: product4, caption: "Renchers", rating: "4.9 (180+)", catagory: "pizza" }, // Added category
  {
    image: product5,
    caption: "cheezious",
    rating: "4.6 (90+)",
    catagory: "pizza",
  },
  {
    image: product6,
    caption: "Indian Restaurant",
    rating: "4.8 (300+)",
    catagory: "mexican",
  },
  {
    image: product7,
    caption: "Renchers",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product8,
    caption: "cheezious",
    rating: "4.8 (300+)",
    catagory: "fries",
  },
  {
    image: product9,
    caption: "Italian Restaurant",
    rating: "4.8 (300+)",
    catagory: "burger",
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

  // Filter data based on the selected category
  const filteredData = selectedCategory
    ? cardData.filter((card) => card.catagory === selectedCategory)
    : cardData;

  // Use filteredData in handleCardClick to pass the correct product
  const handleCardClick = (index) => {
    const product = filteredData[index]; // Use filteredData
    navigate(`/all-restaurants/${index}`, {
      state: { product, selectedCategory },
    });
  };

  return (
    <div className="container items-cards-container">
      <div className="items-cards-container">
        {filteredData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)} // Passing filtered index
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
