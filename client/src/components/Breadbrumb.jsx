import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Breadbrumb() {
  return (
    <div className="breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Furniture</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Storage</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Breadbrumb;
