import React from "react";
import { Button } from "react-bootstrap";

export default class logout extends React.Component {
  onLogin = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        You have been logged out successfully!!!
        <Button bsStyle="primary" bsSize="large" onClick={this.onLogin}>
          Click Here to Login Again
        </Button>
      </div>
    );
  }
}
