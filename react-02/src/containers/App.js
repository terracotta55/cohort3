import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/Logo";
import HomeApp from "../components/home/Home";
import GameApp from "../components/game/Game";
import AccountApp from "../components/account/Account";
import CityApp from "../components/city/City";
import LinkedListApp from "../components/linkedlist/LinkedList";
import StackApp from "../components/stack/Stack";
import ThemeApp from "../components/themecontext/ThemeChooser";
import homeLogo from "./svg_images/001-home.svg";
import gameLogo from "./svg_images/002-game.svg";
import accountLogo from "./svg_images/003-account.svg";
import cityLogo from "./svg_images/004-city.svg";
import linkedListLogo from "./svg_images/005-link.svg";
import stackLogo from "./svg_images/006-stack.svg";
import themeLogo from "./svg_images/007-theme.svg";

import {
  ThemeContext,
  ThemeProvider
} from "../components/themecontext/ThemeContext.js";

/*
To use context themes effectively, put all child components in the
app-header class so you can pass on the themes to them effortlessly.
Here, I had to make do with access to only the menu items :)
*/

class ThemeHeader extends React.Component {
  static contextType = ThemeContext;
  constructor() {
    super();
    this.texts = [
      "Home",
      "Game",
      "Accounts",
      "Cities",
      "LinkedLists",
      "Stacks",
      "Themes"
    ];
  }
  render() {
    return this.texts.map(text => {
      return (
        <Fragment>
          <div
            key={text}
            className={
              this.context.fontColor === "Blue" ? "header-blue" : "header-red"
            }
          >
            {text}
          </div>
        </Fragment>
      );
    });
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: homeLogo
    };
    this.icons = [
      homeLogo,
      gameLogo,
      accountLogo,
      cityLogo,
      linkedListLogo,
      stackLogo,
      themeLogo
    ];
  }

  onSelect = e => {
    this.setState({
      selected: e.target.name
    });
  };

  renderIcons = () => {
    return this.icons.map(icon => {
      return (
        <Logo key={icon} name={icon} image={icon} onClick={this.onSelect} />
      );
    });
  };

  showPage = () => {
    if (this.state.selected === homeLogo) return <HomeApp />;
    if (this.state.selected === gameLogo) return <GameApp />;
    if (this.state.selected === accountLogo) return <AccountApp />;
    if (this.state.selected === cityLogo) return <CityApp />;
    if (this.state.selected === linkedListLogo) return <LinkedListApp />;
    if (this.state.selected === stackLogo) return <StackApp />;
    if (this.state.selected === themeLogo) return <ThemeApp />;
  };
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeProvider>
        <div>
          <nav>
            <header className="images-header">{this.renderIcons()}</header>
          </nav>
          <div id="menuContainer">
            <ThemeHeader />
          </div>
          {this.showPage()}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
