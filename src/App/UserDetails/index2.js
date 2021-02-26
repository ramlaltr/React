import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
// import DataGrid from "./Datagrid";
import {
  //getPeople,
  updateRow,
  clearUserDetailStore,
  getHomeWorld
} from "./Actions";
// import ModalDialog from "../Modal";
import _ from "lodash";

const columns = [
  { key: "id", name: "id", editable: true },
  { key: "name", name: "Name", editable: true },
  { key: "height", name: "Height", editable: true }
];

@connect(
  (state) => ({
    isRequesting: state.loginReducer.isRequesting,
    user: state.loginReducer.user,
    peopleList: state.userDetailsReducer.peopleList,
    resultsList: state.userDetailsReducer.resultsList,
    row: state.userDetailsReducer.row,
    results: state.userDetailsReducer.results,
    homeWorldData: state.userDetailsReducer.homeWorldData
  }),
  (dispatch) => ({
    // getPeople: bindActionCreators(getPeople, dispatch),
    updateRow: bindActionCreators(updateRow, dispatch),
    //getHomeWorld: bindActionCreators(getHomeWorld, dispatch),
    clearUserDetailStore: bindActionCreators(clearUserDetailStore, dispatch)
  })
)
export default class UserDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false,
      resultsList: props.resultsList,
      currentTheme: {}
    };
    columns[0].formatter = this.moreDetailsFormatter;
    this.close = this.close.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    //this.props.getPeople();
  }

  componentWillReceiveProps(nextprops) {
    if (
      !_.isEmpty(nextprops.resultsList) &&
      !_.isEqual(this.props.resultsList, nextprops.resultsList)
    ) {
      this.setState({ resultsList: nextprops.resultsList });
    }
  }

  onMoreDetailsClick = (data) => {
    this.setState({ showModal: true, selectedData: data });
    const clickedRow = _.find(this.props.peopleList.results, { id: data });
    this.props.updateRow(clickedRow);
  };
  moreDetailsFormatter = ({ value }) => {
    let theme;
    if (!_.isEmpty(this.props.user))
      theme = this.props.user.currentTheme.linkTheme;
    return (
      <div>
        {value}
        <a
          href="#0"
          className="p10"
          style={{ ...theme }}
          onClick={() => this.onMoreDetailsClick(value)}
        >
          More Details
        </a>
      </div>
    );
  };

  close() {
    this.setState({ showModal: false });
  }
  logout() {
    this.props.history.push("/logout");
    this.props.clearUserDetailStore();
  }
  render() {
    const {
      user,
      peopleList,
      resultsList,
      row,
      getHomeWorld,
      homeWorldData,
      updateRow
    } = this.props;
    const { showModal } = this.state;
    let theme;
    if (!_.isEmpty(user)) theme = user.currentTheme;
    return (
      <div className="col-md-12 fadeInDown" style={{ ...theme }}>
        <Row>
          <Button className="logoutbtn" bsSize="large" onClick={this.logout}>
            Logout
          </Button>
        </Row>
        <div>
          <Row>
            <Col xs={4}> container </Col>
            <Col xs={4}> container 2 </Col>
            <Col xs={4}> container 3 </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {" "}
              <div> container Main </div>
            </Col>
          </Row>
        </div>
        {showModal && (
          <ModalDialog
            list={peopleList.results}
            arrList={resultsList}
            row={row}
            getHomeWorld={getHomeWorld}
            homeWorldData={homeWorldData}
            user={user}
            close={this.close}
          />
        )}
      </div>
    );
  }
}
