import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
