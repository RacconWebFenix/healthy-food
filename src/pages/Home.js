import React from "react";
import "./home.css";
import backImgHome from "../images/Illustration.svg";
import Header from "../components/Header/Header";
import Recipes from "./Recipes";
import Services from "./Services";
import Blog from "./Blog";
import Join from "./Join";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="containerHome">
        <section className="leftContainer">
          <h1>Ready for Trying a new recipe?</h1>
          <div className="question">
            <input type="text" placeholder="Search healthy recipes" />
            <button className="search">
              <FaSearch />
            </button>
          </div>
        </section>
        <section className="rigthContainer">
          <img src={backImgHome} alt="Ilustration Healthy" />
        </section>
      </div>
      <div id="Recipes">
        <Recipes />
      </div>
      <div>
        <Services />
      </div>
      <div className="Blog">
        <Blog />
      </div>
      <div className="Join">
        <Join />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
