import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
};

export default Routes;
