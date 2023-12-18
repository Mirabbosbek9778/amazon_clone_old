import React from "react";
import { dataCards } from "../../mock/dataCards";
import Carusel from "../../components/carusel/Carusel";
import { Card, CarouselCategory, CarouselProduct } from "../../components";

const Home = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carusel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {dataCards.map((item, i) => (
            <Card key={i} {...item} />
          ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
