import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import _ from "lodash";

const columns = [
  { key: "id", name: "id", editable: true },
  { key: "name", name: "Name", editable: true },
  { key: "height", name: "Height", editable: true }
];

@connect((state) => ({ user: state.loginReducer.user }), (dispatch) => ({}))
export default class UserDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      apple: 10,
      orange: 10,
      grapes: 10,
      basket: []
    };
  }
  componentDidMount() {
    //this.props.getPeople();
  }
  handleClick = (fruitType, actionType) => {
    let { basket } = this.state;
    let newValue;
    if (actionType === "add") {
      newValue = this.state[fruitType] > 1 ? this.state[fruitType] - 1 : 0;
      basket.push(fruitType);
    } else {
      //newValue = this.state[fruitType] <= 9 ? this.state[fruitType] + 1 : 10;
      newValue = this.state[fruitType] + 1;
      if (fruitType === basket[basket.length - 1]) basket.pop();
      else alert("Invalid remove action");
    }
    this.setState({ [fruitType]: newValue, basket });
  };

  logout = () => {
    this.props.history.push("/logout");
  };
  render() {
    const { apple, orange, grapes, basket } = this.state;
    return (
      <div className="col-md-12 fadeInDown">
        <Row>
          <button className="logoutbtn" bsSize="large" onClick={this.logout}>
            Logout
          </button>
        </Row>
        <div>
          <Row>
            <Col xs={4}>
              <div className="apple">
                {" "}
                <div className="center">Apple</div>
                <div className="center">{apple}</div>
                {this.props.user.permission === "all" && (
                  <div className="center">
                    <button className="button"
                      disabled={apple === 0}
                      onClick={(e) => this.handleClick("apple", "add")}
                    >
                      +
                    </button>
                    <button className="button"
                      disabled={apple === 10}
                      onClick={(e) => this.handleClick("apple", "remove")}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={4}>
              <div className="orange">
                {" "}
                <div className="center">Orange</div>
                <div className="center">{orange}</div>
                {this.props.user.permission === "all" && (
                  <div className="center">
                    <button className="button"
                      disabled={orange === 0}
                      onClick={(e) => this.handleClick("orange", "add")}
                    >
                      +
                    </button>
                    <button className="button"
                      disabled={orange === 10}
                      onClick={(e) => this.handleClick("orange", "remove")}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={4}>
              <div className="grapes">
                {" "}
                <div className="center">Grapes</div>
                <div className="center">{grapes}</div>
                {this.props.user.permission === "all" && (
                  <div className="center">
                    <button className="button"
                      disabled={grapes === 0}
                      onClick={(e) => this.handleClick("grapes", "add")}
                    >
                      +
                    </button>
                    <button className="button"
                      disabled={grapes === 10}
                      onClick={(e) => this.handleClick("grapes", "remove")}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="center">
                <div>Basket Stack</div>
                <div className="basketContainer center">
                  {basket.map((item, index) => (
                    <div className={item} key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
