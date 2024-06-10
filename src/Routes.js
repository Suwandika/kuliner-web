import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DetailDrink from "./components/screens/DetailDrink"; // Import halaman detail minuman
import Drink from "./Drink";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/screens/drink" component={Drink} />
        <Route exact path="/screens/detailDrink" component={DetailDrink} />
      </Switch>
    </Router>
  );
};

export default Routes;
