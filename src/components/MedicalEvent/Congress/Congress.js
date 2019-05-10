import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import CardCoungre from "../../Card/CardCoungre";

import pic from "../../../theme/pic.jpeg";

type Props = {
  portfolio: Array,
  height: Number
};

class Congress extends PureComponent<State, Props> {
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
      fontSize: "16px",
      cursor: "pointer"
    };
    return (
      <div style={{ height: "1400px" }}>
        <CardCoungre />
        <CardCoungre />
        <CardCoungre />
        <CardCoungre />
        <CardCoungre />
        <CardCoungre />
      </div>
    );
  }
}

export default compose(withRouter)(Congress);
