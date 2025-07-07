import { useState } from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";

const NavBar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mopile-App")}
          className={menu === "Mopile-App" ? "active" : ""}
        >
          Mopile-App
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />

          <div className="dot"></div>
        </div>

        <button onClick={() => setShowlogin(true)}> sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
