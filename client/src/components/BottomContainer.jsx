import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";

function BottomContainer({ description, benefits, details, moreDetails }) {
  return (
    <Container>
      <Row>
        <div className="description-header-1">
          <h4>Description</h4>
        </div>
        <div className="description-header-2">
          <h3>Product Description</h3>
        </div>
        <p>{description}</p>
        <h3>Benefits</h3>
        <ul className="benifits-list">
          {benefits?.map((item, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon icon={faCircleCheck} className="pe-2" />
                {item}
              </li>
            );
          })}
          {/* {console.log(benefits)} */}
        </ul>
        <h3>Product Details</h3>
        <ul className="benifits-list">
          {details?.map((item, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon icon={faCircleCheck} className="pe-2" />
                {item}
              </li>
            );
          })}
        </ul>
        <h3>More Details</h3>
        <ul className="benifits-list">
          {moreDetails?.map((item, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon icon={faCircleCheck} className="pe-2" />
                {item}
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default BottomContainer;
