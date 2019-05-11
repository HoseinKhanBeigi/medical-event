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
  state = { height: 0, anim_right: undefined };

  componentDidMount() {}

  handleAnimation = value => {
    console.log(value);
    this.setState({
      anim_right: value
    });
  };

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
    let val = 100;
    if (this.state.anim_right === "left") {
      val = 0;
    } else if (this.state.anim_right === "right") {
      val = 100;
    }
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
          <button
            className="font-name"
            style={styleButton}
            onClick={() => this.handleAnimation("left")}
          >
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>پروفایل</div>
          </button>
          <button
            onClick={() => this.handleAnimation("right")}
            className="font-name"
            style={styleButton}
          >
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>کنگره</div>
          </button>
        </div>
        <div
          style={{
            transform: `translateX(${val}%)`,
            transition: `0.3s ease-in-out`,
            background: `red`,
            width: `50%`,
            height: "2px",
            position: "absolute",
            marginTop: "36px"
          }}
        />
        {this.state.anim_right === "right" && (
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
        )}
      </div>
    );
  }
}
export default compose(withRouter)(Profile);
