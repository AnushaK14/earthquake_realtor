
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Profile from './Profile';
import Home from './Home';
class App extends Component {
  render() {
    const { data } = this.props;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={'/'} className="nav-link">
                    <img
                      style={{ width: "25%", height: "50%" }}
                      src={data.site.logoImage}
                      alt="Main Logo"
                    ></img>
                  </Link>
                </li>
                <li style={{ position: "absolute", right: "46%",  marginTop: "1%" }}>
                  <h4>Earthquake Zen Garden</h4>
                </li>
                <li style={{ position: "absolute", right: "2%" , textDecorationLine: 'underline', marginTop: "1%"}}>
                  <Link to={'/profile'}>Welcome {data.profile.firstName}</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route exact path="/" component={() => (<Redirect to='/home' />)} />
            <Route path='/home' render={() => <Home data={data.data} />} />
            <Route path='/profile' render={() => <Profile profile={data.profile} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;