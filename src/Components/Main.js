import React from "react";
import { Switch, Route } from "react-router-dom";
import Hibou from "./Hibou";
import Home from "./Home";
import Panda from "./Panda";
import "../App.css";

class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <h1>My website</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hibou" component={Hibou} />
          <Route path="/panda" component={Panda} />
        </Switch>
      </main>
    );
  }
}

export default Main;
