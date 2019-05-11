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

class SummenryImformation extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
    });
  }

  render() {
    console.log(this.props.match.url.substr(13));
    const value =
      "با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای";

    return (
      <div style={{ marginTop: "3px" }}>
        <img src={pic} style={{ width: "100%" }} />
        {this.props.match.url.substr(13) === "summery" && (
          <div
            className="card-content"
            style={{
              margin: "12px",
              direction: "rtl",
              textAlign: "justify",
              lineHeight: "28px",
              color: "#949494",
              fontSize: "13px"
            }}
          >
            {value}
          </div>
        )}
      </div>
    );
  }
}

export default compose(withRouter)(SummenryImformation);
