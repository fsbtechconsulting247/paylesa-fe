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
              <button type="button" className="header-mainNav__innerBlockTwo__button">
                <Icon icon="fa6-regular:user" />
                <span>Account</span>
              </button>
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
      </nav>
    </header>
  )
}
export default Header
