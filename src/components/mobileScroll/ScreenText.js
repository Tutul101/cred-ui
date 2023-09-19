import React, { useState, useRef, useEffect } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showAnimation, setShowAnimtion] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0] && e[0].isIntersecting) {
      setShowAnimtion(true);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      className={showAnimation ? `screen-text text-visible` : `screen-text`}
      ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="only-mobile mobile-mockup-wrapper">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img src={screen.mobile_img} className="mobile-screen-img" />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
