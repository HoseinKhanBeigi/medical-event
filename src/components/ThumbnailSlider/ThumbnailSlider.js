import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import ThumbnailSlider from "thumbnail-slide-react";
import { connect } from "react-redux";
import { Icon } from "antd";

import logo1 from "../../theme/pic1.jpeg";
import logo2 from "../../theme/pic2.jpeg";

type Props = {
  todos: Number,
  addTodo: Function
};

type State = {
  subString: string
};

class AppThumbnailSlider extends Component {
  state = {
    images: [
      logo1,
      logo2,
      logo1,
      logo2,
      logo1,
      logo1,
      logo2,
      logo1,
      logo2,
      logo2,
      logo1,
      logo2
    ],
    subString: undefined
  };

  componentDidMount() {
    console.log(this.props.match.params.string);

    const subStringres = this.props.match.params.string;
    this.setState({
      subString: subStringres
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main className="mainOne">
          <div className="standard-product-page-main">
            <div className="standard-product-container">
              <ThumbnailSlider
                images={this.state.images}
                direction={`${this.props.match.params.string}`}
                isTouch="true"
                numberOfThumpImage={5}
                gapBetweenThumbnail={30}
                previousIcon={<Icon type="left" className="arrow" />}
                nextIcon={<Icon type="right" className="arrow" />}
                zoomInIcon={<Icon type="zoom-in" className="arrow" />}
                zoomOutIcon={<Icon type="zoom-out" className="arrow" />}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AppThumbnailSlider);
