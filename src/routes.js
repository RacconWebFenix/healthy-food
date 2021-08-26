import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
     
        <Home />
        <Recipes />
     
    </BrowserRouter>
  );
};

export default Routes;
