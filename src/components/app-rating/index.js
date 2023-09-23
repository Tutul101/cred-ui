import React from "react";

import "./appRating.css";
import Button from "../common/button";

const getIOSPrefix = () => {
  return (
    <img
      className="app-rating-icon"
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      className="app-rating-icon"
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
    />
  );
};

function AppRating() {
  return (
    <div className="max-width flex app-rating">
      <div className="app-rating-block flex flex-col">
        <div className="flex app-rating-wrapper">
          <div className="app-rating-value">4.8</div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <img
          className="app-rating-stars"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
        />
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getIOSPrefix()}
          />
        </div>
      </div>

      <div className="app-rating-block flex flex-col">
        <div className="flex app-rating-wrapper">
          <div className="app-rating-value">
            <div>4.7</div>
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <img
          className="app-rating-stars"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
        />
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getAndroidPrefix()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
}

export default AppRating;
