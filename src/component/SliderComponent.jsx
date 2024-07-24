import React, { useState, useEffect } from "react";
import Image0001 from "./image/slider/deadpool.png";
import Image0002 from "./image/slider/America.png";
import Image0003 from "./image/slider/Thor.png";
import Image0004 from "./image/slider/Hulk.png";
import "./styles/styles.css";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define your images array
  const images = [Image0001, Image0002, Image0003, Image0004];

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default SliderComponent;
