import React, { PureComponent } from "react";

type Props = {
  images: Array,
  skills: Array<String>,
  valueOpacity: number
};

export default class Skilll extends PureComponent<State, Props> {
  state = {};

  render() {
    const { skills, valueOpacity } = this.props;
    return (
      <div className="grid__item">
        <div className="revealer revealer--right revealer--hideX" />
        {skills.map((el, i) => (
          <div key={i}>
            <span
              style={{
                fontFamily: "unset",
                fontSize: "15px",
                opacity: `${valueOpacity}`
              }}
            >
              {el.name}
            </span>
            <div
              className="grid__item1"
              style={{
                marginBottom: "12px",
                marginTop: "6px",
                width: `${el.num}%`
              }}
            >
              <div className="revealer revealer--right revealer--hideX" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
