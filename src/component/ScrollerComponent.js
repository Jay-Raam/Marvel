import React, { useEffect } from "react";
import "./styles/ScrollerComponent.css";

const ScrollerComponent = ({ speed }) => {
  useEffect(() => {
    // Check if reduced motion is enabled
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  const heroes = [
    "America",
    "Thor",
    "Deadpool",
    "Iron Man",
    "Knull",
    "Doctor Strange",
    "Hulk",
    "Black Panther",
    "Wanda",
    "Loki",
    "Thanos",
  ];

  return (
    <div className="scrollered-01">
      <div className={`scroller ${speed}`}>
        <ul className="tag-list scroller__inner">
          {heroes.map((hero, index) => (
            <li key={index}>{hero}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollerComponent;
