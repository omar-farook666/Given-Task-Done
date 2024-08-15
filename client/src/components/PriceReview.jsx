import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PriceReview({ recommendations, price, rating, reviews }) {
  return (
    <div className="price-review">
      <div className="price">
        <h1>${price}</h1>
      </div>
      <div>
        <div className="rating-recommend">
          <div className="rating rounded">
            <FontAwesomeIcon icon={faStar} />
            {rating} Rating
          </div>
          <div className="recommend rounded">
            <FontAwesomeIcon icon={faMessage} />
            {reviews} Reviews
          </div>
        </div>
        <div style={{ paddingLeft: "15px", color: "#B9BBBF" }}>
          <p>{recommendations}% recommendations</p>
        </div>
      </div>
    </div>
  );
}

export default PriceReview;
