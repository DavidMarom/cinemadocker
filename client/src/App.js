import React from "react";
import { connect } from "react-redux";

import { NavBar } from "./cmps/NavBar.jsx";
import { Explore } from './pages/Explore';
import { Shows } from './pages/Shows';
import { Movies } from './pages/Movies';
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

const _App = () => {
  return (
    <div className="App">
      <div className="outter-container">
        <div className="inner-container">
          <NavBar />
        
          <Switch>
            <Route exact component={Explore} path={"/"} />
            <Route exact component={Shows} path={"/shows"} />
            <Route exact component={Movies} path={"/movies"} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export const App = connect(null, null)(withRouter(_App));