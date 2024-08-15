import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import ImageGallery from "react-image-gallery";
import AddToCart from "./AddToCart";
import Breadbrumb from "./Breadbrumb";
import PriceReview from "./PriceReview";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];
function MidContainer({ product }) {
  return (
    <div className="mid-container">
      {/* {console.log(product.sizes)} */}
      <Container className="hero-container">
        <Row>
          <Col sm={6} className="slider-image">
            {product.images ? (
              <ImageGallery items={product.images} />
            ) : (
              <h5>No Images</h5>
            )}
          </Col>
          <Col sm={6} className="product-details">
            <Breadbrumb />
            <div className="product-name">
              <h3>{product.productName}</h3>
              <p>{product.shortDescription}</p>
            </div>
            <PriceReview
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              recommendations={product.recommendations}
            />
            <AddToCart
              price={product.price}
              colors={product.colors}
              sizes={product.sizes}
              product={product}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MidContainer;
