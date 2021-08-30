import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [nav, setNav] = useState("nav");
  const [mobileMenu, setMobileMenu] = useState("mobileMenu");

  const menuItens = document.querySelectorAll('.nav-links a[href^="#"]');

  const teste = window.document.querySelector('body')

  teste.style.animation = "blurMode 0.5s ease forwards"
 
  useEffect(() => {
    if (teste.current) {
       const handler = (event) => {
         console.log(`We've been blurred`);
       }
       // notice that i get a reference to the element here, so i can safely use it in the clean function
       const element = teste.current
       element.addEventListener('blur', handler);
       // this is a clean function that will be called to clear the side effects you just introduced
       return () => element.removeEventListener('blur', handler);
  
    }
  
  
  }, [])

  menuItens.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  function scrollToIdOnClick(e) {
    e.preventDefault()
    const element = e.target;
    const id = element.getAttribute("href");
    const to = document.querySelector(id).offsetTop;
    window.scroll({
      top: to,
      behavior: "smooth"
    })
  }

  const handleMobileMenu = () => {
    if (nav === "nav") {
      setNav(nav.replace(nav, "nav active"));
    } else {
      setNav(nav.replace(nav, "nav"));
    }
    if (mobileMenu === "mobileMenu") {
      setMobileMenu(mobileMenu.replace(mobileMenu, "mobileMenu active"));
    } else {
      setMobileMenu(mobileMenu.replace(mobileMenu, "mobileMenu"));
    }
  };

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
        <div
          className={mobileMenu}
          onClick={handleMobileMenu}
          onPointerUp={HandleNavLinks}
        >
          <div className={"line1"}></div>
          <div className={"line2"}></div>
          <div className={"line3"}></div>
        </div>
        <ul className={nav}>
          <li className="nav-links">
            <a href="#healthyRecipes">Healthy Recipes</a>
          </li>
          <li className="nav-links">
            <a href="#blog">Blog</a>
          </li>
          <li className="nav-links">
            <a href="#join">Join</a>
          </li>
          <li className="nav-links">
            <button className={"btnRegister"}>
              <Link to="/register">Register</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
