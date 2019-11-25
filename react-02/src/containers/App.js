import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Game from "../components/tictac/Game";
import Navigation from "../components/navigation/Navigation";
import City from "../components/city/City";
import Account from "../components/account/Account";
import Hooks from "../components/hooks/Hooks";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/game" component={Game} />
            <Route path="/account" component={Account} />
            <Route path="/city" component={City} />
            <Route path="/hooks" component={Hooks} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
