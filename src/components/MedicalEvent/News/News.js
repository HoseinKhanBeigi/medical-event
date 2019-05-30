import React, { PureComponent } from "react";
import { Icon } from "antd";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CardNews from "../../Card/CardNews";
import pic from "../../../theme/pic.jpeg";
import { List, List2 } from "../../../redux/actions";

type Props = {
  portfolio: Array,
  height: Number,
  List: Function,
  Posts: Array,
  List2: Function
};

class News extends PureComponent<State, Props> {
  state = { height: 0 };

  componentDidMount() {
    this.props.List2();
  }

  render() {
    console.log(this.props.Posts.list, "psot");
    return (
      <div style={{ height: "1400px" }}>
        <div style={{ marginTop: "50px" }}>
          <img src={pic} style={{ width: "100%" }} onClick={this.handleLog} />
        </div>
        {this.props.Posts.list.map((e, i) => (
          <div key={i}>
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ Posts }) => ({ Posts });

const mapDispatchToProps = dispatch => ({
  // List: () => dispatch(List()),
  List2: () => dispatch(List2())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(News);
