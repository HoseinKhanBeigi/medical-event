import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import CardNews from "../../Card/CardNews";
import pic from "../../../theme/pic.jpeg";

type Props = {
  portfolio: Array,
  height: Number
};

class Profile extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {}

  render() {
    const styleButton = {
      backgroundColor: "#6152af",
      border: "none",
      color: "rgb(138, 138, 138)",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      cursor: "pointer"
    };
    return (
      <div>
        <div
          style={{
            justifyContent: "space-around",
            display: "flex",
            // alignContent: "flex-end",
            padding: "10px",
            boxShadow: "rgb(101, 59, 218) -2px -3px 8px",
            width: "100%",
            position: "fixed",
            backgroundColor: "#6152af"
          }}
          className="navbar"
        >
          <button className="font-name" style={styleButton}>
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>پروفایل</div>
          </button>
          <button className="font-name" style={styleButton}>
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>کنگره</div>
          </button>
        </div>
        <div
          style={{
            direction: "rtl",
            marginTop: "40px",
            position: "absolute",
            width: "100%"
          }}
        >
          <div
            style={{
              height: "57px",
              borderBottom: "1px solid",
              margin: "12px",
              color: "#a2a2a2"
            }}
          >
            {"Email"}
            <div>{"hsoein@gmail.com"}</div>
          </div>
          <div
            style={{
              height: "57px",
              borderBottom: "1px solid",
              margin: "12px",
              color: "#a2a2a2"
            }}
          >
            {"Email"}
            <div>{"hsoein@gmail.com"}</div>
          </div>
          <div
            style={{
              height: "57px",
              borderBottom: "1px solid",
              margin: "12px",
              color: "#a2a2a2"
            }}
          >
            {"Email"}
            <div>{"hsoein@gmail.com"}</div>
          </div>
          <div
            style={{
              height: "57px",
              borderBottom: "1px solid",
              margin: "12px",
              color: "#a2a2a2"
            }}
          >
            {"Email"}
            <div>{"hsoein@gmail.com"}</div>
          </div>
          <div
            style={{
              height: "57px",
              borderBottom: "1px solid",
              margin: "12px",
              color: "#a2a2a2"
            }}
          >
            {"Email"}
            <div>{"hsoein@gmail.com"}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default compose(withRouter)(Profile);
