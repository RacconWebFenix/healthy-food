import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
const [nav, setNav] = useState('nav')
const [mobileMenu, setMobileMenu] = useState("mobileMenu");

const handleMobileMenu = () => {
  if(nav === 'nav'){
    setNav(nav.replace(nav, "nav active"))
  } else {
    setNav(nav.replace(nav, "nav"))
  }
  if (mobileMenu === "mobileMenu") {
    setMobileMenu(mobileMenu.replace(mobileMenu, "mobileMenu active"));
  } else {
    setMobileMenu(mobileMenu.replace(mobileMenu, "mobileMenu"));
  }
}

const HandleNavLinks = () => {
  const navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`);
  });
};

  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"logo"}>
          <Link to="/">Healthy Food</Link>
        </div>
        <div className={mobileMenu} onClick={handleMobileMenu} onPointerUp={HandleNavLinks}> 
            <div className={"line1"}></div>
            <div className={"line2"}></div>
            <div className={"line3"}></div>
        </div>
        <ul className={nav}>
          <li className="nav-links" >
            <Link to="#Recipes">Healthy Recipies</Link>
          </li>
          <li className="nav-links">
            <Link  to="#blog">Blog</Link>
          </li>
          <li className="nav-links">
            <Link  to="#join">Join</Link>
          </li>
          <li className="nav-links">
            <button className={"btnRegister"}><Link  to="/register">Register</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
}
