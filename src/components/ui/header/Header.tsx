import "./header.scss";
import { Icon } from "@iconify/react";
import brandLogo from "../../../assets/svgs/paylesa-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div>
            <Link to={"/"} className="header-logo">
              <img src={brandLogo} alt="Brand Logo" />
            </Link>
            <button type="button">Brand new</button>
            <button type="button">Pre-owned</button>
          </div>
          <div>
            <div className="header-inputBar">
              <input type="text" placeholder="Search for items and brands"/>
              <Icon icon="iconoir:search" />
            </div>
            <div className="accountButton__block">
              <button type="button" className="headerMain__item">
                <Icon icon="fa6-regular:user" />
                <span>Account</span>
              </button>
            </div>
            <Link to={"/#"} className="headerMain__item">
            <Icon icon="tdesign:chat-bubble-help" />
              <span>Help</span>
            </Link>
            <Link to={"/#"} className="headerMain__item">
            <Icon icon="heroicons-outline:heart" />
              <span>Wish list</span>
            </Link>
            <Link to={"/#"} className="headerMain__item">
              <Icon icon="ri:shopping-cart-line" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
