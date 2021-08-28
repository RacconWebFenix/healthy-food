import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Sevices from "./pages/Services";
import Blog from "./pages/Blog"
import Join from "./pages/Join"
import Footer from "./pages/Footer"



const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
     
        <Home />
        <Recipes />
        <Sevices />
        <Blog />
        <Join />
        <Footer />
    </BrowserRouter>
  );
};

export default Routes;
