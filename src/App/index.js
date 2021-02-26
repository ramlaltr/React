import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";
import "./Style/common.css";
import Login from "./Login";
import UserDetails from "./UserDetails";
import logout from "./logout";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/userDetails" component={UserDetails} />
            <Route exact path="/logout" component={logout} />
          </Switch>
        </Grid>
      </div>
    );
  }
}
