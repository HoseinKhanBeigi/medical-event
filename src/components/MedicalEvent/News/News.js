import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CardNews from "../../Card/CardNews";
import pic from "../../../theme/pic.jpeg";
import { List } from "../../../redux/actions";

type Props = {
  portfolio: Array,
  height: Number,
  List: Function,
  Posts: Array
};

class News extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    this.props.List();
  }

  render() {
    console.log(this.props.Posts);
    return (
      <div style={{ height: "1400px" }}>
        <div style={{ marginTop: "50px" }}>
          <img src={pic} style={{ width: "100%" }} />
        </div>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    );
  }
}

const mapStateToProps = ({ Posts }) => ({ Posts });

const mapDispatchToProps = dispatch => ({
  List: () => dispatch(List())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(News);
