import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import JavaScript from './container/Javascript/JavaScript';
import CSS from './container/CSS/CSS';
import Blog from './container/Blog/Blog';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import "./components/Header/Header.scss";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="main-wrapper">
            <Sidebar></Sidebar>
            <div>
              <Switch>
                <Route exact={true} path="/" component={JavaScript}></Route>
                <Route path="/javascript" component={JavaScript}></Route>
                <Route path="/css">
                  <CSS />
                </Route> 
                <Route path="/blogs">
                  <Blog />
                </Route>
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  );
}