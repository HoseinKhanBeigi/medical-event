import React, { PureComponent } from "react";
import { Icon } from "antd";

type Props = {
  portfolio: Array,
  height: Number
};

export default class Header extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    const heightWindow = window.innerHeight;
    const navbar = document.querySelector(".navbar").getBoundingClientRect()
      .height;
    this.setState({
      height: heightWindow - navbar
    });

    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
      this.setState({
        height: heightResize - navbar
      });
    });
  }

  render() {
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
          justifyContent: "space-between",
          display: "flex",
          // padding: "10px",
          boxShadow: "#eaeaea 0px 8px 6px -6px",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          top: 0
        }}
        className="navbar"
      >
        <div>
          <button style={styleButton}>
            <div>
              <Icon type="smile" />
            </div>
          </button>
          <button style={styleButton}>
            <div>
              <Icon type="smile" />
            </div>
          </button>
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#4d52a2",
            marginRight: "17px"
          }}
          className="font-name"
        >
          اخبار و اطلاعیه
        </div>
      </div>
    );
  }
}
