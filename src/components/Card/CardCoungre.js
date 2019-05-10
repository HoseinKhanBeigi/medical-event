import React, { PureComponent } from "react";
import { Icon } from "antd";
import pic from "../../theme/pic.jpeg";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number,
  match: Object
};

class CardCoungre extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
    });
  }

  handleClick = () => {
    const { history } = this.props;
    history.push(`/congress/${12}`);
  };

  render() {
    const value =
      "با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور";

    var res = value.substring(0, 120);

    return (
      <div style={{}}>
        <div
          style={{
            boxShadow: `rgb(247, 247, 247) 0px 0px 4px 3px`
          }}
          onClick={() => this.handleClick()}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              direction: "rtl",
              margin: "12px"
            }}
            className="card-title"
          >
            فلات قار تغییرات پیشین در سطح دریا فلات قاره
          </div>
          <div>
            <div
              style={{
                direction: "rtl",
                marginRight: "16px"
              }}
            >
              محل برگزار:<span>asdas</span>
            </div>
            <div
              style={{
                direction: "rtl",
                marginRight: "16px"
              }}
            >
              محل برگزار:<span>asdas</span>
            </div>
            <div
              style={{
                direction: "rtl",
                marginRight: "16px"
              }}
            >
              محل برگزار:<span>asdas</span>
            </div>
            <div
              style={{
                direction: "rtl",
                marginRight: "16px",
                marginTop: "12px"
              }}
            >
              {" "}
              کنکره فعلی
            </div>
            <div style={{ height: "12px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(CardCoungre);
