import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from "redux";
import pic from "../../theme/pic.jpeg";
import { withRouter } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number,
  history: Object,
  match: Object
};

class HeaderProfile extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {}

  handleClick = () => {
    // const { history } = this.props;
    // if (this.props.history.location.pathname === "/congress/12") {
    //   history.push(`/congress`);
    // } else {
    //   history.push(`/congress/${12}`);
    // }
  };

  render() {
    const styleButton = {
      marginTop: "12px",
      fontSize: "17px"
    };
    return (
      <div
        style={{
          background: "#844aeccf",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse"
        }}
      >
        <div
          style={{
            direction: "rtl"
          }}
        >
          <div style={styleButton} onClick={() => this.handleClick()}>
            <Icon
              type="setting"
              style={{ marginRight: "12px", color: "white" }}
            />
          </div>
          <div
            style={{
              marginTop: "12px",
              fontSize: "20px",
              color: "white",
              marginRight: "12px"
            }}
            className="card-content"
          >
            {"hosein khan beigi"}
          </div>
          <div
            style={{
              marginTop: "12px",
              fontSize: "17px",
              color: "#49d8cd",
              marginRight: "12px"
            }}
            className="card-content"
          >
            {"09383345749"}
          </div>
          <div style={{ height: "32px" }} />
        </div>
        <div style={{ marginLeft: "11px" }}>
          <div style={{ display: "flex", margin: "12px" }}>
            <div style={{ color: "white", marginRight: "11px" }}>
              <Icon type="mail" />
            </div>
            <div style={{ color: "white", marginLeft: "11px" }}>
              <Icon type="mail" />
            </div>
          </div>
          <div>
            <img
              src={pic}
              width="80vm"
              height="80vm"
              style={{ borderRadius: "50px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default compose(withRouter)(HeaderProfile);
