import React, { PureComponent } from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number
};

export default class Footer extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    const heightWindow = window.innerHeight;
    const navbar = document.querySelector(".navbar").getBoundingClientRect()
      .height;
    this.setState({
      height: navbar
    });

    window.addEventListener("resize", () => {
      const navbar = document.querySelector(".navbar").getBoundingClientRect()
        .height;
      this.setState({
        height: navbar
      });
    });
  }

  render() {
    const styleButton = {
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      color: "rgb(138, 138, 138)",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      cursor: "pointer"
    };
    return (
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          // alignContent: "flex-end",
          padding: "10px",
          boxShadow: "rgb(232, 232, 232) -2px -3px 8px",
          width: "100%",
          top: `calc((100% - ${60}px)`,
          position: "fixed",
          backgroundColor: "white"
        }}
        className="navbar"
      >
        <button className="font-name" style={styleButton}>
          <Link
            to="/profile"
            style={{
              outline: "none",
              textDecoration: "none",
              color: "#525252"
            }}
          >
            <div style={{ fontSize: "20px" }}>
              <Icon type="smile" />
            </div>
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>پروفایل</div>
          </Link>
        </button>
        <button className="font-name" style={styleButton}>
          <Link
            to="/news"
            style={{
              outline: "none",
              textDecoration: "none",
              color: "#525252"
            }}
          >
            <div style={{ fontSize: "20px" }}>
              <Icon type="smile" />
            </div>
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>
              اخبارواطلاعیه
            </div>
          </Link>
        </button>
        <button className="font-name" style={styleButton}>
          <Link
            to="/congress"
            style={{
              outline: "none",
              textDecoration: "none",
              color: "#525252"
            }}
          >
            <div style={{ fontSize: "20px" }}>
              <Icon type="smile" />
            </div>
            <div style={{ fontSize: "11px", marginTop: "-4px" }}>کنگره</div>
          </Link>
        </button>
      </div>
    );
  }
}
