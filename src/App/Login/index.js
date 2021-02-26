import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { validateUser, clearHomeStore } from "./Action";

@connect(
  (state) => ({
    isRequesting: state.loginReducer.isRequesting,
    user: state.loginReducer.user,
    error: state.loginReducer.exception.message
  }),
  (dispatch) => ({
    validateUser: bindActionCreators(validateUser, dispatch)
  })
)
export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.validateUser(username, password, this.props.history.push);
      //this.props.history.push("/userDetails");
    }
  }
  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3 wrapper fadeInDown">
        <h2 className="fadeIn first">Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label className="fadeIn second" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
