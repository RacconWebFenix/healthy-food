import React from "react";
import "./recipes.css";
import recImg1 from "../images/comida_1.svg";
import recImg2 from "../images/comida_2.svg";
import recImg3 from "../images/comida_3.svg";
import recImg4 from "../images/comida_4.svg";

export default function Recipes() {
  return (
    <div className="containerRecipes" id="healthyRecipes">
      <h1>Our Best Recipes</h1>
      <div className="decRecipe">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </div>

      <div className="cardsRecipes">
        <div className="cardRecipeContainer">
          <img src={recImg1} alt="Imagem Brocolis" />
          <div className="innerCardRecipe">
            <h2>Broccoli Salad with Bacon</h2>
            <button>See Recipie</button>
          </div>
        </div>
        <div className="cardRecipeContainer">
          <img src={recImg2} alt="Imagem Brocolis" />
          <div className="innerCardRecipe">
            <h2>Classic Beef Burgers</h2>
            <button>See Recipie</button>
          </div>
        </div>
        <div className="cardRecipeContainer">
          <img src={recImg3} alt="Imagem Brocolis" />
          <div className="innerCardRecipe">
            <h2>Classic Potato Salad</h2>
            <button>See Recipie</button>
          </div>
        </div>
        <div className="cardRecipeContainer">
          <img src={recImg4} alt="Imagem Brocolis" />
          <div className="innerCardRecipe">
            <h2>Cherry Cobbler on the Grill</h2>
            <button>See Recipie</button>
          </div>
        </div>
      </div>
    </div>
  );
}
