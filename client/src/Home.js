import React, { useEffect, useState } from "react";
import "./App.css";
import BottomContainer from "./components/BottomContainer";
import MidContainer from "./components/MidContainer";
import TopContainer from "./components/TopContainer";

function Home() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/product`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();

        setProduct(res[0]);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <TopContainer />
      <MidContainer product={product} />
      <div className="bottom-container">
        <BottomContainer
          description={product.description}
          benefits={product.benefits}
          details={product.details}
          moreDetails={product.moreDetails}
        />
      </div>
    </div>
  );
}

export default Home;
