import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full my-16">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://new-media.dhakatribune.com/en/uploads/2022/09/20/img20220620180448.jpeg"
          className="w-full h-[400px]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://dainikpriyobangladesh.com/wp-content/uploads/2022/02/FB_IMG_1631692393382.jpg"
          className="w-full h-[400px]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://gccc.edu.bd/wp-content/uploads/2022/10/about_us-pic-1.jpg"
          className="w-full h-[400px]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
