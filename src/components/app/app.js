import React from "react";
import {withBookstoreService} from "../hoc";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

const App = ({ bookstoreService }) => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default withBookstoreService()(App);
