import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Game from "../components/tictac/Game";
import Navigation from "../components/navigation/Navigation";
import City from "../components/city/City";
import State from "../components/state/State";
import Redux from "../components/redux/Redux";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/tictac" component={Game} />
            <Route path="/city" component={City} />
            <Route path="/state" component={State} />
            <Route path="/redux" component={Redux} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
