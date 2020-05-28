import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from './pages/login/login'
import Admin from "./pages/admin/admin";
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <App>
                <Route path="/login" component={Login}></Route>
                <Route path="/admin" component={Admin}></Route>
                
            </App>
        </Switch>
      </HashRouter>
    );
  }
}
 