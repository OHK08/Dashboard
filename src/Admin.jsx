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
      <div className="d-flex justify-content-between w-100 d-lg-none d-md-none">
        {/* Navbar Hamburger */}
        <button
          className="btn btn-dark m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuOffcanvas"
        >
          <img src="src/assets/svg/menu.svg" alt="Menu" />
        </button>

        <BoldText text={"DASHBOARD"} style={{ fontSize: '20px', marginTop: '10px' }} />

        {/* Wallet Hamburger */}
        <button
          className="btn btn-dark m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#walletOffcanvas"
        >
          <img src="src/assets/svg/leftArrowW.svg" alt='Wallet' />
        </button>
      </div>

      <div className="offcanvas offcanvas-start bg-dark" id="menuOffcanvas">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        <div className="offcanvas-body">
          <Navbar />
        </div>
      </div>

      <div className="offcanvas offcanvas-end bg-light" id="walletOffcanvas">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        <div className="offcanvas-body">
          <MyCards cardToggle={cardToggle}/>
        </div>
      </div>

      <div className="row">
        <div className={"col-lg-2 col-md-3 d-none d-md-block"} id="navbar-section">
          <Navbar />
        </div>
        <div className={cardVisiblity ? 'd-none col-lg-3 d-lg-block' : 'd-none'} id="card-section">
          <MyCards cardToggle={cardToggle} isDarkMode={isDarkMode}/>
        </div>
        <div className={cardVisiblity ? 'col-12 col-sm-12 col-md-9 col-lg-7' : 'col-12 col-sm-12 col-md-9 col-lg-10'} id="statistics-section">
          <Statistics cardToggle={cardToggle} cardVisiblity={cardVisiblity} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>
      </div>
    </>
  );
}