import React from "react";
import "./join.css";
import backImgJoin from "../images/bloco_final_image.svg";

export default function Join() {
  return (
    <div className="containerJoin">
      <section className="leftContainerJoin">
        <h1>Join our membership to get special offer</h1>
        <div className="questionJoin">
          <input type="text" placeholder="Enter your email address" />
          <button className="search">Join</button>
        </div>
      </section>
      <section className="rigthContainerJoin">
        <img src={backImgJoin} alt="Ilustration Healthy" />
      </section>
    </div>
  );
}
