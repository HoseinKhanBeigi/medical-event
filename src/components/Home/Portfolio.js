import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

type Props = {
  portfolio: Array,
  handlePush: Function
};

export default class Portfolio extends PureComponent<State, Props> {
  state = { load: false };

  handleRedirect = () => {};

  render() {
    const { portfolio, handlePush } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {portfolio.map((el, i) => {
          console.log(i);
          return (
            <div className="tooltip" key={i}>
              <div
                style={{
                  width: `${10}%`,
                  backgroundColor: "white",
                  margin: "10px",
                  padding: "20px"
                }}
                className="grid__item2"
                onClick={i => handlePush(el)}
              >
                <div className="revealer revealer--right revealer--hideX" />
              </div>

              <span className="tooltiptext">Tooltip text</span>
            </div>
          );
        })}
      </div>
    );
  }
}
