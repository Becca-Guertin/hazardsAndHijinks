import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Ampersands from "./components/Ampersands";
import Banners from "./components/Banners";
import GreyScales from "./components/GreyScales";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
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
          <Route path="/ampersands" exact={true} component={Ampersands}></Route>
          <Route path="/banners" exact={true} component={Banners}></Route>
          <Route path="/greyscales" exact={true} component={GreyScales}></Route>
          <Route path="/" exact={true} component={Landing}></Route>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
