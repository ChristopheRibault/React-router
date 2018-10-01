import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Accueil </NavLink>
                <NavLink to="/history"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}> Histoire </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/History" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default Routing;
