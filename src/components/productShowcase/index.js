import React, { useEffect, useRef } from "react";
import "./productShowCase.css";

function ProductShowCase() {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("scale-in-bottom");
          }, 500);
          observer.unobserve(entry.target);
        }
      });
    });

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  }, []);

  return (
    <div className="product-showcase">
      <div ref={showcaseRef} className="showcase-wrapper">
        <img
          className="showcase-ui showcase-mockup-1"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
          alt="left1"
        />
        <img
          className="showcase-ui showcase-mockup-2"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
          alt="left2"
        />
        <img
          className="showcase-ui showcase-mockup-3"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
          alt="center"
        />
        <img
          className="showcase-ui showcase-mockup-4"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
          alt="right 2"
        />
        <img
          className="showcase-ui showcase-mockup-5"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
          alt="right1"
        />
      </div>
    </div>
  );
}

export default ProductShowCase;
