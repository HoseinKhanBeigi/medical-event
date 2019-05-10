import React, { PureComponent } from "react";
import { Icon } from "antd";
import pic from "../../theme/pic.jpeg";

type Props = {
  portfolio: Array,
  height: Number
};

export default class CardNews extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
    });
  }

  render() {
    const value =
      "با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور";

    var res = value.substring(0, 120);

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            margin: "20px"
          }}
        >
          <div>
            <img src={pic} width="80vm" height="80vm" />
          </div>
          <div style={{ marginRight: "12px" }}>
            <div
              style={{
                lineHeight: "30px",
                fontSize: "12px",
                fontWeight: "bold",
                direction: "rtl"
              }}
              className="card-title"
            >
              فلات قار تغییرات پیشین در سطح دریا فلات قاره
            </div>
            <div
              style={{
                textAlign: "justify",
                lineHeight: "24px",
                direction: "rtl",
                fontSize: "10px"
              }}
              className="card-content"
            >
              {value.length > 120 ? `${res}...` : value}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
