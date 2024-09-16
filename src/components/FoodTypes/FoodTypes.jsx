import React, { useRef, useState } from "react";
import "./FoodTypes.css";

import topeatImg from "../../images/topeat.png";
import mexicanImg from "../../images/mexican.png";
import sushiImg from "../../images/sushi.png";
import friesImg from "../../images/fries.png";
import pizzaImg from "../../images/pizza.png";
import burgerImg from "../../images/burger.png";
import pastaImg from "../../images/pasta.png";

// Define card data array with image and caption for each card
const cardData = [
  { imgSrc: topeatImg, caption: "Top Eats" },
  { imgSrc: mexicanImg, caption: "Mexican" },
  { imgSrc: sushiImg, caption: "Sushi" },
  { imgSrc: friesImg, caption: "Fries" },
  { imgSrc: pizzaImg, caption: "Pizza" },
  { imgSrc: burgerImg, caption: "Burger" },
  { imgSrc: pastaImg, caption: "Pasta" },
];

const FoodTypes = ({ onSelectCategory }) => {
  // State to manage active card index
  const [activeIndex, setActiveIndex] = useState(0);

  // Reference to the container for scrolling
  const containerRef = useRef(null);

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index);
    onSelectCategory(cardData[index].caption.toLowerCase());
  };

  // Scroll left and right functions
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-container">
      {/* Left scroll button */}
      <button className="scroll-button left" onClick={scrollLeft}>
        {"<"}
      </button>

      <div className="container food-container card-row" ref={containerRef}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card-wrapper ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`card ${activeIndex === index ? "active-card" : ""}`}
            >
              <div className="card-image-container">
                <img
                  src={card.imgSrc}
                  alt={card.caption}
                  className="card-image"
                />
              </div>
            </div>
            <p className="type-card-caption">{card.caption}</p>
          </div>
        ))}
      </div>

      {/* Right scroll button */}
      <button className="scroll-button right" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default FoodTypes;
