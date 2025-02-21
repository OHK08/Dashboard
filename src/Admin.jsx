import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Statistics from './dashboard/Statistics';
import MyCards from './cards/MyCards';
import BoldText from './assets/BoldText';

export default function Admin() {
  const [cardVisiblity, setCardVisible] = useState(true);
  const cardToggle = () => {
    setCardVisible(cardVisiblity => !cardVisiblity);
    console.log(cardVisiblity);
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <>
      <div
        className="d-flex justify-content-between w-100 d-lg-none d-md-none"
        id="statistics-section" >
        {/* Navbar Hamburger */}
        <button
          className="btn m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuOffcanvas"
          id="button-box"
        >
          {isDarkMode ? (
            <img src="src/assets/svg/menu.svg" alt="Menu" />
          ) : (
            <img src="src/assets/svg/menuB.svg" alt="Menu" />
          )}
        </button>

        <BoldText text={"DASHBOARD"} style={{ fontSize: '20px', marginTop: '10px' }} />

        {/* Wallet Hamburger */}
        <button
          className="btn m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#walletOffcanvas"
          id="button-box"
        >
          {isDarkMode ? (
            <img src="src/assets/svg/leftArrowW.svg" alt="Menu" />
          ) : (
            <img src="src/assets/svg/leftArrow.svg" alt="Menu" />
          )}
        </button>
      </div>

      <div className="offcanvas offcanvas-start" id="menuOffcanvas">
        <div className="offcanvas-body" id="navbar-section">
          <button type="button" data-bs-dismiss="offcanvas"
            id="button-box1"
            className={isDarkMode ? "btn-close btn-close-white" : "btn-close"}
          ></button>
          <Navbar />
        </div>
      </div>

      <div className="offcanvas offcanvas-end " id="walletOffcanvas">
        <div className="offcanvas-body" id="card-section">
          <button type="button"
            className={isDarkMode ? "btn-close btn-close-white" : "btn-close"}
            id="button-box1"
            data-bs-dismiss="offcanvas"></button>
          <MyCards cardToggle={cardToggle} />
        </div>
      </div>

      <div className="row">
        <div className={"col-lg-2 col-md-3 d-none d-md-block"} id="navbar-section">
          <Navbar />
        </div>
        <div className={cardVisiblity ? 'd-none col-lg-3 d-lg-block' : 'd-none'} id="card-section">
          <MyCards cardToggle={cardToggle} isDarkMode={isDarkMode} />
        </div>
        <div className={cardVisiblity ? 'col-12 col-sm-12 col-md-9 col-lg-7' : 'col-12 col-sm-12 col-md-9 col-lg-10'} id="statistics-section">
          <Statistics cardToggle={cardToggle} cardVisiblity={cardVisiblity} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </>
  );
}