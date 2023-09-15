import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/corousel/data";
import CarouselItem from "../../components/corousel/CarouselItem";
import ProductCarousel from "../../components/corousel/Carousel";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData.map((item) => {
    <div key={item.id}>
      <CarouselItem
        url={item.imageurl}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    </div>;
  });
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest products"} btnText={"Shop Now"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
    </>
  );
};

export default Home;