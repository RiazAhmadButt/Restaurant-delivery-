import React, { useState } from "react";
import image20 from "../../images/image 20.png";
import plus from "../../images/Vector.png";
import SelectItem from '../../pages/SelectItem/SelectItem'; 
import "./RestaurantsProducts.css";

const RestaurantsProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const products = [
    {
      title: "Loaded Fries",
      price: 900,
      description:
        "Our top running spicy yet so saucy loaded fries that are just too hard to resist!",
      imageSrc: image20,
    },
    {
      dishes: "Appetizers",
      title: "Creamy Pasta",
      price: 750,
      description:
        "Rich and creamy pasta with a blend of Italian herbs and Parmesan cheese.",
      imageSrc: image20,
    },
    {
      dishes: "Pastas",
      title: "Creamy Pasta",
      price: 750,
      description:
        "Rich and creamy pasta with a blend of Italian herbs and Parmesan cheese.",
      imageSrc: image20,
    },
    {
      title: "Creamy Pasta",
      price: 750,
      description:
        "Rich and creamy pasta with a blend of Italian herbs and Parmesan cheese.",
      imageSrc: image20,
    },
    {
      dishes: "Cheesy Delights",
      title: "Creamy Pasta",
      price: 750,
      description:
        "Rich and creamy pasta with a blend of Italian herbs and Parmesan cheese.",
      imageSrc: image20,
    },
    {
      title: "Creamy Pasta",
      price: 750,
      description:
        "Rich and creamy pasta with a blend of Italian herbs and Parmesan cheese.",
      imageSrc: image20,
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedProduct(null); 
  };

  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <div>
            <p className="dishes">{item.dishes}</p>
          </div>
          <div
            className="product-card"
            onClick={() => handleProductClick(item)}
          >
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">Rs. {item.price}</p>
              <p className="product-description">{item.description}</p>
            </div>
            <div className="product-image-container">
              <div className="product-image">
                <img src={item.imageSrc} alt={item.title} />
                <div className="favorite-icon">
                  <img src={plus} alt="Plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Conditionally render the modal */}
      {showModal && (
        <SelectItem
          product={selectedProduct} 
          showModal={showModal} 
          onClose={handleCloseModal} // Function to close modal
        />
      )}
    </>
  );
};

export default RestaurantsProducts;
