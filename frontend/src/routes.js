import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Cakes from "./Components/Pages/Cakes";
import Cupcakes from "./Components/Pages/Cupcakes";
import About from "./Components/Pages/About";

export default (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cakes' component={Cakes} />
      <Route path='/cupcakes' component={Cupcakes} />
      <Route path='/about' component={About} />
    </Switch>
  </HashRouter>
);
