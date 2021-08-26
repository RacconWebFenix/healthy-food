import React from "react";
import "./services.css";
import backImgService from "../images/bloco_services.svg";

export default function Services() {
  return (
    <div className="containerServices">
      <section className="leftContainerService">
        <img src={backImgService} alt="Services" />
      </section>
      <section className="rigthContainerService">
        <h1>The best services ready To serve you</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button className="knowMore">Know More</button>
      </section>
    </div>
  );
}
