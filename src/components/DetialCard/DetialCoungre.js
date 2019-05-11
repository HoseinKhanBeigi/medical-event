import React, { PureComponent } from "react";
import { Icon } from "antd";
import pic from "../../theme/pic.jpeg";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number,
  history: Object
};

class DetialCoungre extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
    });
  }

  handleClickSummery = () => {
    const { history } = this.props;
    history.push(`${12}/summery`);
  };

  handleClickMap = () => {
    const { history } = this.props;
    history.push(`${12}/map`);
  };

  render() {
    // console.log(this.props.match);
    const value =
      "با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور";

    var res = value.substring(0, 120);

    return (
      <div style={{ marginTop: "3px" }}>
        <img src={pic} style={{ width: "100%" }} />
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "90%",
              height: "40px",
              boxShadow: `rgb(232, 232, 232) -2px -3px 8px`,
              margin: "10px",
              justifyContent: "flex-end",
              display: "flex",
              borderRadius: "6px",
              alignItems: "center"
            }}
          >
            <div
              style={{ marginRight: "10px" }}
              className="card-content"
              onClick={() => this.handleClickMap()}
            >
              {"ایاب و ذهاب"}
            </div>

            <Icon type="smile" style={{ marginRight: "12px" }} />
          </div>
          <div
            style={{
              width: "90%",
              height: "40px",
              boxShadow: `rgb(232, 232, 232) -2px -3px 8px`,
              margin: "10px",
              justifyContent: "flex-end",
              display: "flex",
              borderRadius: "6px",
              alignItems: "center"
            }}
          >
            <div
              style={{ marginRight: "10px" }}
              className="card-content"
              onClick={() => this.handleClickSummery()}
            >
              {"خلاصه"}
            </div>
            <Icon type="smile" style={{ marginRight: "12px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(DetialCoungre);
