import React from "react";

// import MenuItem from "../components/MenuItem";
import BannerImage from "../assets/background/menu.jpg";
import "../styles/Menu.css";
import Carousel from "../components/CarouselComp";

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        <Carousel />
      </div>
    </div>
  );
}

export default Menu;
