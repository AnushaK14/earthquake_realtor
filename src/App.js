import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Details from "./Details";
import Profile from "./Profile"
import { data } from "./Data"
class App extends Component {
  render() {
    // console.log("Data is :" + data.profile.firstName)
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to={'/details'} className="nav-link">Details</Link>
                </li>
                <li>
                  <Link to={'/profile'} className="nav-link">Profile</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/details' component={Details} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;