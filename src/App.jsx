import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Ampersands from "./components/Ampersands";
import Banners from "./components/Banners";
import Landing from "./components/Landing";
import "./App.css";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/Ampersands" exact={true} component={Ampersands}></Route>
          <Route path="/Banners" exact={true} component={Banners}></Route>
          <Route path="/" exact={true} component={Landing}></Route>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
