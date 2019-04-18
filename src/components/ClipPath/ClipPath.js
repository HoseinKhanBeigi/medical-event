/* @flow */

import React, { PureComponent } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import logo3 from "../../theme/pic3.jpg";
import logo4 from "../../theme/pic4.jpg";

type State = {
  data: Array<String>,
  onMous: Boolean,
  pageYOffset: number,
  position: string,
  imgHeight: number | string,
  widthImages: number | string
};

class ClipPath extends PureComponent<State> {
  state = {
    pageYOffset: 571,
    imgHeight: "auto",
    newHeightForcenter: null,
    heightForParent: null,
    heightBody: null,
    heightCaption: null
  };

  componentDidMount() {
    const initSizeHeightCaption = document
      .querySelector(".sizeH")
      .getBoundingClientRect();

    const resHeight = document.querySelector(".img").getBoundingClientRect();

    const initImg = resHeight.height === 0 ? 696 : resHeight.height;

    // get the height of the body. if it doesn't work or does wrong work you should used window.innerHeight
    const initHeight = window.innerHeight;

    const newHeightForCenterinit = (initHeight - Math.round(initImg)) / 2;

    this.setState({
      newHeightForcenter: newHeightForCenterinit,
      heightForParent: initImg,
      heightBody: initHeight,
      heightCaption: initHeight - initSizeHeightCaption.height - 10
    });

    this.handleResizing();
    this.handleScrolling();
  }

  handleScrolling = () => {
    document.addEventListener("scroll", () => {
      if (this.props.history.location.pathname === "/clipPath") {
        const heightScroll = window.innerHeight / 4;
        const sectionContent3 = document.querySelector(".pad-bottom");
        const ressectionContent3 = sectionContent3.getBoundingClientRect();

        this.setState({
          pageYOffset:
            ressectionContent3.bottom - ressectionContent3.height / 2.3
        });

        if (Math.round(this.state.pageYOffset) < Math.round(heightScroll)) {
          document.querySelector(".caption").classList.add("show");
        } else {
          document.querySelector(".caption").classList.remove("show");
        }
      }
    });
  };

  handleResizing = () => {
    window.addEventListener("resize", () => {
      if (this.props.history.location.pathname === "/clipPath") {
        const sizeHeightCaption = document
          .querySelector(".sizeH")
          .getBoundingClientRect();
        const Img = document.querySelector(".img").getBoundingClientRect();

        const height = window.innerHeight;
        const newHeightForCenter = (height - Img.height) / 2;

        this.setState({
          newHeightForcenter: newHeightForCenter,
          heightForParent: Img.height,
          heightBody: height,
          heightCaption: height - sizeHeightCaption.height - 10
        });
      }
    });
  };

  render() {
    const {
      pageYOffset,
      imgHeight,
      newHeightForcenter,
      heightForParent,
      heightBody,
      heightCaption
    } = this.state;

    const translateY = heightBody / 2;

    const range = imgHeight === "auto" ? "" : "px";

    return (
      <div className="resize">
        <section className="section">
          <div className="sticky-wrapper">
            <div className="section-content" />
            <div
              className="image-wrapper"
              style={{
                height: `${heightForParent}px`,
                top: `${newHeightForcenter}px`
              }}
            >
              <img
                src={logo4}
                className="img img1 bg-image-overview-processor"
                style={{
                  height: `${imgHeight}${range}`,
                  left: "50%",
                  transform: `translate3d(-50%, 0px, 0px)`,
                  top: "0px"
                }}
              />

              <div
                className="wipe wipe2"
                style={{
                  height: `${heightBody}px`,
                  position: "absolute",
                  width: "100%",
                  top: "50%",
                  transform: `translateY(-${translateY}px)`,
                  paddingBottom: "240px",
                  clipPath: `inset(${pageYOffset}px 0px 0px)`
                }}
              >
                <img
                  src={logo3}
                  className="img img2 bg-image-overview-processor"
                  style={{
                    height: `${imgHeight}${range}`,
                    left: "50%",
                    transform: `translate3d(-50%, 0px, 0px)`,
                    top: `${newHeightForcenter}px`
                  }}
                />
                <div
                  className="caption section-content sizeH"
                  style={{ top: `${heightCaption}px` }}
                >
                  <h4 className="caption-heading">
                    Particle simulation? Elementary.
                  </h4>
                  <p className="copy large-6 medium-9 small-12">
                    Billowing smoke. Torrential rain. A wheat field in the wind.
                    With up to 18 cores and Hyper-Threading, iMac Pro lets you
                    build and render particle systems of all kinds — static or
                    animated, 2D or 3D — with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content pad-bottom no-pad-top">
              <ul className="spec-list">
                <li className="spec">Radeon Pro Vega </li>
                <li className="spec">Up to 11 teraflopss</li>
                <li className="spec">Up to 22 teraflops half precision</li>
                <li className="spec">8GB or 16GB High Bandwidth Memory</li>
                <li className="spec last">400GB/s memory bandwidth</li>
              </ul>
            </div>
          </div>
          <div style={{ height: 966 }} />
        </section>
      </div>
    );
  }
}

export default compose(withRouter)(ClipPath);
