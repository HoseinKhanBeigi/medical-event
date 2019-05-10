import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number,
  history: Object,
  match: Object
};

class HeaderCoungre extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {}

  handleClick = () => {
    const { history } = this.props;
    if (this.props.history.location.pathname === "/congress/12") {
      history.push(`/congress`);
    } else {
      history.push(`/congress/${12}`);
    }
  };

  render() {
    console.log(this.props.history.location.pathname === "/congress/12");
    const styleButton = {
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      color: "#6b428e",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "26px",
      cursor: "pointer"
    };
    return (
      <div
        style={{
          background: "#844aeccf",
          width: "100%",
          direction: "rtl"
        }}
      >
        <button
          style={{ marginTop: "34px", fontSize: "17px" }}
          onClick={() => this.handleClick()}
        >
          <Icon
            type="arrow-right"
            style={{ marginRight: "12px", color: "white" }}
          />
        </button>
        <div
          style={{
            marginTop: "34px",
            fontSize: "27px",
            color: "white",
            marginRight: "12px"
          }}
          className="card-content"
        >
          {" به شرایط فعلی رانش قاره‌ای،"}
        </div>
        <div
          style={{
            marginTop: "34px",
            fontSize: "17px",
            color: "#49d8cd",
            marginRight: "12px"
          }}
          className="card-content"
        >
          {"کنکره فعلی"}
        </div>
        <div style={{ height: "12px" }} />
      </div>
    );
  }
}
export default compose(withRouter)(HeaderCoungre);
