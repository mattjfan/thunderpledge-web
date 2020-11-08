import './App.css';
import Pledge from './components/Pledge';
import Confirmation from './components/Confirmation'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Menu from './components/Menu';
import Homepage from './components/Homepage';
import FileNotFound from './components/FileNotFound';

export default function App() {
  return (
    <Router>
      <Menu />
      {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/pledge/:id/:slug" component={Pledge} />
          <Route exact path="/thank-you/:id" component={Confirmation} />
          {/* <Route exact path="/page-not-found" component={} /> */}
          <Route exact path="/" component={Homepage} />
          <Route path="/" component={FileNotFound} />
        </Switch>
    </Router>
  );
}