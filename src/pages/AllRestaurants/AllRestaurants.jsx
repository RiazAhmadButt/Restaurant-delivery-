import React from "react";
import fire from "../../images/image 19.png";
import "./AllRestaurants.css";
import RestaurantsProducts from "../../components/RestaurantsProducts/RestaurantsProducts";
import PickupAndDelivery from "../../components/PickUpDelivery/PickupAndDelivery";
import SelectProduct from "../../components/SelectProduct/SelectProduct";

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
