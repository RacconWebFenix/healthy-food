import React from "react";
import "./home.css";
import backImgHome from '../images/Illustration.svg'
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="containerHome">
      <section className="leftContainer">
        <h1>Ready for Trying a new recipe?</h1>
        <div className="question">
          <input type="text" placeholder="Search healthy recipes"/>
          <button className="search">
            <FaSearch />
          </button>
        </div>
      </section>
      <section className="rigthContainer">
        <img src={backImgHome} alt="Ilustration Healthy" />
      </section>
    </div>
  );
}
