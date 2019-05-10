import React, { PureComponent } from "react";
import { Icon } from "antd";
import pic from "../../theme/pic.jpeg";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

type Props = {
  portfolio: Array,
  height: Number
};

class SummenryImformation extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const heightResize = window.innerHeight;
    });
  }

  render() {
    // console.log(this.props.match);
    const value =
      "با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور با توجه به شرایط فعلی رانش قاره‌ای، نیم‌کره شمالی اکنون به طور";

    return (
      <div style={{ marginTop: "3px" }}>
        <img src={pic} style={{ width: "100%" }} />
      </div>
    );
  }
}

export default compose(withRouter)(SummenryImformation);
