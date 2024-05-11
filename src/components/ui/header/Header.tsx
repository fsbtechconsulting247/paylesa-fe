import { Link } from "react-router-dom";
import "./header.scss";
import { Icon } from "@iconify/react";
import brandLogo from "../../../assets/svgs/paylesa-logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-topBar"></div>
      <nav className="header-mainNav">
        <div>
          <div className="header-logo">
            <img src={brandLogo} alt="Brand Logo"/>
          </div>
            <button>Brand new</button>
            <button>Pre-owned</button>
        </div>
        <div>
         <div className="header-inputBar">
            <input type="text" />
           <Icon icon="prime:search" />
         </div>
        </div>
      <Link to={"/"}>Come</Link>
      </nav>
    </header>
  )
}
export default Header
