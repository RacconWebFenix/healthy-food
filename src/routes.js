import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Sevices from "./pages/Services";


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
     
        <Home />
        <Recipes />
        <Sevices />
     
    </BrowserRouter>
  );
};

export default Routes;
