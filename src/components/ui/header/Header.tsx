import "./header.scss";
import { Icon } from "@iconify/react";
import brandLogo from "../../../assets/svgs/paylesa-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <header className="header-main">
      <div className="header-topBar">
        <span>
          Looking for the perfect Easter gift? Discover <strong>Phones</strong>, <strong>Laptops</strong>, <strong>Smart watches</strong>, and <strong>Monitor</strong>
        </span>
        <Link to={"#"}> Check it Out</Link>
      </div>
      <nav className="header-mainNav">
        <div className="header-mainNav__inner">
          <div className="header-mainNav__innerBlockOne">
            <Link to={"/"} className="header-logo header-mainNav__home">
              <img src={brandLogo} alt="Brand Logo" />
            </Link>
            <Link to="#" className="header-mainNav__innerBlockOne__link">About us</Link>
            <Link to="#" className="header-mainNav__innerBlockOne__link">Trade-in</Link>
          </div>
          <div className="header-mainNav__innerBlockTwo">
            <div className="header-inputBar">
              <input type="text" placeholder="Search for items and brands"/>
              <Icon icon="bx:search-alt-2" />
            </div>
            <div className="accountButton__block">
              <button type="button" className={`header-mainNav__innerBlockTwo__button ${showAccountMenu ? "activeButton" : ""}`} onClick={() => setShowAccountMenu(prev=>!prev)}>
                <Icon icon="fa6-regular:user" />
                <span>Account</span>
              </button>
              <div className={`accountMenu ${showAccountMenu ? "menu-active" : ""}`}>
                <div className="accountMenu__topItem">
                  <Link to="/">
                  <Icon icon="tabler:login-2" />
                    <span className="fw-6">Sign In</span>
                  </Link>
                  <div>
                    <span>New here?</span>
                    <Link to="/#" className="fw-6 link-hover">Register now</Link>
                  </div>
                </div>
                <ul className="accountMenu__list">
                  <li className="link-hover">
                    <Icon icon="fa6-regular:user" />
                    <Link to="/#">My Account</Link>
                  </li>
                  <li className="link-hover">
                  <Icon icon="gravity-ui:box" />
                    <Link to="/#">My Orders</Link>
                  </li>
                  <li className="link-hover">
                  <Icon icon="tabler:bell" />
                    <Link to="/#">Buy Alerts</Link>
                  </li>
                  <li className="accountMenu__logout link-hover">
                  <Icon icon="gravity-ui:power" />
                    <button type="button" className="link-hover">Log out</button>
                  </li>
                </ul>
              </div>
            </div>
            <Link to={"/#"} className="header-mainNav__innerBlockTwo__link">
            <Icon icon="tdesign:chat-bubble-help" />
              <span>Help</span>
            </Link>
            <Link to={"/#"} className="header-mainNav__innerBlockTwo__link">
            <Icon icon="heroicons-outline:heart" />
              <span>Wish list</span>
            </Link>
            <Link to={"/#"} className="header-mainNav__innerBlockTwo__link">
              <Icon icon="ri:shopping-cart-line" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="header-bottomNav">
          <ul className="header-bottomNav__list">
            <li>
              <button type="button" className="allItem__toggleBtn">
                <Icon icon="ci:hamburger-md" />
                <span>All items</span>
              </button>
            </li>
           <li>
           <Link to={"/#"}>
           <Icon icon="ic:round-devices-other" />
            <span>
            Pre-owned Devices
            </span>
            </Link>
           </li>
           <li>
           <Link to={"/#"}>
           <Icon icon="mingcute:watch-line" />
           <span>
           Smart watches
           </span>
            </Link>
           </li>
           <li>
           <Link to={"/#"}>
           <Icon icon="fluent:phone-32-regular" />
           <span>
           Smartphones
           </span>
            </Link>
           </li>
           <li>
           
           <Link to={"/#"}>
           <Icon icon="fluent:phone-32-regular" />
          <span> iPhones</span>
            </Link>
           </li>
           <li>
           <Link to={"/#"}>
           <Icon icon="fluent:phone-32-regular" />
           Samsung phones
            </Link>
           </li>
           <li>
           <Link to={"/#"}>
           <Icon icon="fluent:laptop-16-regular" />
          <span>
          Windows Laptops
          </span>
            </Link>
           </li>

           <li>
            <Link to={"/#"}>
            <Icon icon="fluent:laptop-16-regular" />
              <span>MacBook</span>
            </Link>
           </li>
           <li>
            <Link to={"/#"}>
            <Icon icon="material-symbols:earbuds-battery-outline" />
              <span>Accessories</span>
              </Link>
           </li>
          </ul>
      </nav>
    </header>
  )
}
export default Header
