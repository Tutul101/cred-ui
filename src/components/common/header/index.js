import React, { useState } from "react";

import "./header.css";
// Done till 1.21.48
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div classNam="mobile-menu-wrapper">
        <div className={`only-mobile mobile-menu ${showMenu ? `overlay` : ``}`}>
          <div className="mobile-nav-bar">
            <div className="mobile-nav-item">credit score check</div>
            <div className="mobile-nav-item">credit card bill payment</div>
          </div>
        </div>
        <div className="flex max-width header">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            className="header-logo"
          />
          <div className="only-mobile mobile-menu-button-wrapper">
            <button
              className={`hamburger hamburger--spin ${
                showMenu ? `is-active` : ``
              }`}
              type="button"
              onClick={toggleMobileMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div className="non-mobile flex">
            <div className="header-nav-item">credit score check</div>
            <div className="header-nav-item">credit card bill payment</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
