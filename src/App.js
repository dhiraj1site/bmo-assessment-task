import "@babel/polyfill";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Header from './components/Header';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import {HEADER_LABEL} from './constants';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header label={HEADER_LABEL} />
        <Navigation />
        <Search />
        <Aside />
     </div>
    );
  }
}

export default hot(module)(App);
