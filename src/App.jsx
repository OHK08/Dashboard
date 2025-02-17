import React from 'react';
import Navbar from './navbar/Navbar';
import Wallet from './Wallet';
import Statistics from './dashboard/Statistics';
import Menu from './Menu';
import Dashboard from './Dashboard';
import MyCards from './cards/MyCards';
import BoldText from './assets/BoldText';


export default function App() {
  // const [cardVisible, setCardVisiblity] = useState(true);
  // const cardToggle = () => {
  //   setCardVisiblity(seen => !seen)
  // }

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
          <Menu Content={<Navbar />} />
        </div>
      </div>

      <div className="offcanvas offcanvas-end bg-light" id="walletOffcanvas">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        <div className="offcanvas-body">
          <Wallet Content={<MyCards />} />
        </div>
      </div>

      <div className="row">
        {/* Visible on md+ screens */}
        <div className="col-lg-2 col-md-3 d-none d-md-block bg-dark text-white">
          <Menu Content={<Navbar />} />
        </div>
        <div className="col-lg-3 d-none d-lg-block wallet bg-light">
          <Wallet Content={<MyCards/>}/>
          {/* <Button onClick={cardToggle} img={"src/assets/svg/leftArrow.svg"} /> */}
          {/* <div className={cardVisible ? '' : 'd-none'}>
            <Wallet Content={<MyCards />} />
          </div> */}
        </div>
        {/* Main Dashboard (Visible on All Screens) */}
        <div className="col-12 col-sm-12 col-md-9 col-lg-7 bg-white">
          <Dashboard Content={<Statistics />} />
        </div>
      </div>
    </>
  );
}
