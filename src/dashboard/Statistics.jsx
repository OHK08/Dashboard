import React from 'react'
import Box from './Box'
import BoldText from '../assets/BoldText'
import SmallText from '../assets/SmallText'
import Search from './Search'
import MyButton from './MyButton'

export default function Statistics({ cardToggle, cardVisiblity, isDarkMode, setIsDarkMode }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1">
            <button type="button" className={cardVisiblity ? 'd-none' : 'btn'} onClick={cardToggle} id={"button-box1"}>
              <img src="src/assets/svg/rightArrowB.svg" id="svg-icon" />
            </button>
          </div>
          <div className="col-5 col-sm-6 col-md-6 col-lg-6">
            <Search id={"button-box"}/>
          </div>
          <div className="col-2 col-sm-1 col-md-1 col-lg-1">
            <MyButton img={"src/assets/svg/bell.svg"} id="button-box1" id1={"svg-icon"} />
          </div>
          <div className="col-2 col-sm-1 col-md-1 col-lg-1">
            <MyButton img={"src/assets/svg/settingsLine.svg"} id="button-box1" id1={"svg-icon"} />
          </div>
          <div className="col-2 col-sm-1 col-md-1 col-lg-1">
            <button type="button" onClick={() => setIsDarkMode(!isDarkMode)} className='btn' id="button-box1">
              <img
                src={isDarkMode ? "src/assets/svg/circleGray.svg" : "src/assets/svg/circleBlack.svg"}
              />
            </button>
          </div>
          <div className="col-2 col-sm-1 col-md-1 col-lg-1 d-none d-md-block d-lg-none">
            {/* Wallet Hamburger */}
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#walletOffcanvas"
              id="button-box1"
            >
              <img src="src/assets/svg/menuB.svg" alt="Wallet" />
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/analytics2.svg"} text={"Income"} num1={"$68.657"} num2={".00"} id={"svg-icon"} />
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/analytics2.svg"} text={"Complete"} num1={"$18.657"} num2={".00"} id={"svg-icon"} />
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/analytics2.svg"} text={"Payment"} num1={"$10.000"} num2={".00"} id={"svg-icon"} />
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/analytics2.svg"} text={"Reviews"} num1={"$6.667"} num2={".00"} id={"svg-icon"} />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div id="chartContainer1" className="ad_pics2 mt-2" />
            {/* <Chart1/> */}
          </div>
        </div>
        <BoldText text={"Total Activity"} />
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/circleBlack.svg"} text={"Total Income"} num1={"$18.667"} num2={".00"} />
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-12">
                <Box name="box" img={"src/assets/svg/circleGray.svg"} text={"Income"} num1={"$18.667"} num2={".00"} />
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-9 col-lg-9">
            <div id="chartContainer2" className="ad_pics2 mt-2" />
          </div>
        </div>
        <BoldText text={"Recent Transfer"} />
        <div className="row justify-content-between">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1">
            <img src="src/assets/svg/moneyTransfer.svg" id={"svg-icon"} />
          </div>
          <div className="col-4 col-sm-3 col-md-4 col-lg-4">
            <BoldText text={"Make points on the places"} style={{ fontSize: '15px', display: 'block' }} />
            <SmallText num={"Antonia Petlena"} />
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-4">
            <SmallText num={"Payment for the design"} />
          </div>
          <div className="col-3 col-sm-3 col-md-4 col-lg-3">
            <img src="src/assets/svg/greenTick.svg" />
            <BoldText text={"Complete"} style={{ fontSize: '15px' }} /> <br />
            <SmallText num={"12:34"} />
          </div>
        </div>
      </div>
    </>
  );
}
