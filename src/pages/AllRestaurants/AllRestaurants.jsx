import React from "react";
import fire from "../../images/image 19.png";
import "./AllRestaurants.css";
import RestaurantsProducts from "../../components/RestaurantsProducts/RestaurantsProducts";
import PickupAndDelivery from "../../components/PickUpDelivery/PickupAndDelivery";
import SelectProduct from "../../components/SelectProduct/SelectProduct";
import AvailableDeals from "../../components/AvailableDeals/AvailableDeals";
import MenuContainerSlider from "../../components/MenuContainerSlider/MenuContainerSlider";

const AllRestaurants = () => {
  return (
    <>
      <div className="container">
        <div className="button-group">
          <button className="allresturant">All restaurants</button>
          <span>&gt;</span>
          <button className="benediction">Benediction</button>
        </div>

        <div>
          <SelectProduct />
        </div>
      </div>
      <hr />
      <div className="container">
        <div>
          <p className="availableDealText">Available deals</p>
        </div>
        <div>
          <AvailableDeals />
        </div>
        <div className="seach-parent">
          <div className="search-bar-container">
            <div className="search-icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 11.5L16 16"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="6.5"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search in menu"
              className="search-input"
            />
          </div>
          <MenuContainerSlider />
        </div>
      </div>

      <div className="returantContainer">
        <div className="container">
          <div>
            <div className="d-flex align-items-center">
              <img src={fire} alt="Fire" />
              <span className="popularText">Popular</span>
            </div>
            <div>
              <p className="mostOrderedright">Most ordered right now</p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <RestaurantsProducts />
              </div>
              <div className="col-lg-6 col-md-12">
                <PickupAndDelivery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRestaurants;
