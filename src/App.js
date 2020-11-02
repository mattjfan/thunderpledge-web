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

export default function App() {
  return (
    <Router>
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
          <Route path="/pledge/:id/:slug" component={Pledge} />
          <Route path="/thank-you/:id" component={Confirmation} />
        </Switch>
      {/* </div> */}
    </Router>
  );
}