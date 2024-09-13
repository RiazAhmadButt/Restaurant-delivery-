import React from "react";
import { useLocation } from "react-router-dom";
import image20 from "../../images/image 20.png";
import likeBtn from "../../images/LikeRed.png";
import "./SelectProduct.css";

const SelectProduct = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div className="header-page">
      <div className="product-container">
        <div className="image-wrapper">
          <div className="image-content">
          <img src={product.image} alt={product.caption} />
          </div>
        </div>
        <div className="info-wrapper">
          <p className="select-title">Pasta . Pizza . Fast food . Wrap & rolls</p>
          <p className="selectItem">{product.caption}</p>
          <p className="selectItemprice">Rs. 9.99 service fee</p>
        </div>
      </div>
      <div className="favourites-button-container">
      <div className="favourites-icon">
        <img src={likeBtn} alt="Like Icon" />
      </div>
      <div className="favourites-text">
        Add to favourites
      </div>
    </div>
    </div>
  );
};

export default SelectProduct;
