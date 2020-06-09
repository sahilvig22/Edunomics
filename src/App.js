import React from 'react';
import { Switch, Route } from "react-router-dom"; //Router is the alias name for Browser Router
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Default from "./components/Default";
import Trial from "./components/Trial";
import SignUpPage from "./components/SignUpPage";
import Platform from "./components/Platform";
import Sessions from "./components/Sessions";
import Downloads from "./components/Downloads";
import Settings from "./components/Settings";
import About from "./components/About";










function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Desktop */}
        <Route path="/signuppage" component={SignUpPage} />
        <Route path="/sessions" component={Sessions} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/platform" component={Platform} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />



        <Route path="/trial" component={Trial} />

        <Route component={Default} />



      </Switch>
      {/* <Home /> */}
    </React.Fragment>


  );
}

export default App;
