/* @flow */

import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addTodo } from "../../redux/actions";

import Skilll from "./Skilll";
import Portfolio from "./Portfolio";

type Props = {
  history: Object,
  addTodo: Function,
  todos: Number
};

type State = {
  data: Array<String>,
  onMous: Boolean,
  value: String
};

class Home extends PureComponent<State, Props> {
  state = {
    data: "Home",
    hidden: true,
    opacityValue: 1,
    valueOpacity: 0,
    timer: 500,
    node: 0,
    widthBody: 0,
    heighBody: 0,
    portfolio: [1, 2, 4, 5],
    skills: [
      { name: "javascript/html/css/sass", num: 95 },
      { name: "react/vue/angular", num: 90 },
      { name: "nodejs", num: 50 },
      { name: "webpack", num: 70 },
      { name: "mongoDB", num: 40 },
      { name: "python/ruby", num: 30 },
      { name: "webSocket/RabbitMQ", num: 50 },
      { name: "GraphQL/Apollo", num: 50 },
      { name: "jest", num: 50 }
    ]
  };
  _isMounted = false;

  componentDidMount() {
    console.log(document.documentElement.clientWidth);
    this.setState({
      widthBody: window.innerWidth,
      heighBody: window.innerHeight
    });

    this._isMounted = true;
    const { todos } = this.props;
    if (todos > 1) {
      this.setState({ node: 1, valueOpacity: 1, opacityValue: 0 });
      this.handleOpenSync();
    }
  }
  componentDidUpdate() {
    // this.setState({ widthBody: window.innerWidth });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handlePush = i => {
    const { history } = this.props;

    this.props.addTodo();

    if (i === "horizontal" || i === "vertical") {
      console.log(i, "i");
      history.push(`product/${i}`);
    } else {
      history.push(`/${i}`);
    }
  };

  handlePicesOpen = el =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            el.classList.remove("revealer--right"),
            el.classList.remove("revealer--hideX"),
            el.classList.add("revealer--left"),
            el.classList.add("revealer--showX")
          ),

        this.props.todos > 1 ? 0 : 500
      );
    });

  handleOpen = async () => {
    const newElementAll = document.querySelectorAll(".revealer");
    for (let i = 0; i < newElementAll.length; i++) {
      await this.handlePicesOpen(newElementAll[i]);
    }
  };

  handleOpenSync = () => {
    this.setState({ node: 1, opacityValue: 0 });
    this.handleOpen().then(() => {
      this.setState({ valueOpacity: 1 });
    });
  };

  render() {
    const {
      data,
      valueOpacity,
      node,
      opacityValue,
      widthBody,
      heighBody
    } = this.state;

    return (
      <div
        style={{
          backgroundColor: "rgb(37, 37, 37)",
          width: `${widthBody}px`,
          height: `${heighBody}px`
        }}
      >
        <button
          onClick={() => {
            this.handleOpenSync();
          }}
          style={{
            position: "absolute",
            left: `${0}px`,
            top: "25%",
            transform: `translateX(${widthBody / 2 - 375}px)`,
            backgroundColor: "transparent",
            border: "none",
            fontSize: "300px",
            zIndex: "99999",
            fontFamily: "monospace",
            opacity: `${opacityValue}`,
            transition: "opacity 0.6s, -webkit-transform 0.6s ease"
          }}
        >
          open
        </button>
        <main className="maino" style={{ opacity: `${node}` }}>
          <div
            className="grid grid--layout-1 bodyHome"
            style={{ backgroundColor: "rgb(37, 37, 37)" }}
          >
            <div className="grid__item" style={{ display: "none" }}>
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <h3
                  className="grim__item-title"
                  style={{
                    textAlign: "center",
                    fontFamily: "monospace",
                    fontSize: "20px",
                    lineHeight: "2em"
                  }}
                >
                  hossein khan beigi
                </h3>
              </div>
            </div>
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <span
                  className="grim__item-desc"
                  style={{
                    textAlign: "center",
                    fontFamily: "unset",
                    display: "flex",
                    fontSize: "15px",
                    lineHeight: "22px",
                    flexDirection: "column",
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  <span> Address: tehran - iran</span>
                  <span> Phone: +9809383345749</span>
                  <span> E-mail: hoseinkhanbeigi@gmail.com</span>
                  <span> github: github.com/HoseinKhanBeigi</span>
                </span>
              </div>
            </div>

            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <span
                  className="grim__item-desc"
                  style={{
                    fontFamily: "unset",
                    lineHeight: "28px",
                    fontSize: "15px",
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  javascript engineer specialist with 4+ experience at 2
                  company.profetional experience in developing compelex Element
                  in any web & webApp based on js-css-html with along tech like
                  react-redux Vue-VueX angular. seeking to further career by
                  growing with passion for the learning new things. in currently
                  i fucusing in my homeWork implimenting and create any
                  Component with js/css/html based on react-redux or any SPA
                </span>
              </div>
            </div>
            <Skilll skills={this.state.skills} valueOpacity={valueOpacity} />
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <h3
                  className="grim__item-title"
                  style={{
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  hossein khan beigi
                </h3>
              </div>
            </div>
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <span
                  className="grim__item-desc"
                  style={{
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  javascript developer at datisParse datisPars.com TA/TD is the
                  admin panel for managing, querying and visualizing the data
                  for a network security device used in Germany. The project was
                  built Polymer.js and D3.js. I was mainly responsible for
                  rewriting the modules in a high-performance manner and
                  creating and implementing the charts.
                </span>
              </div>
            </div>
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <span
                  className="grim__item-desc"
                  style={{
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  react developer at RoundTableApp roundtableapps.com develop
                  functionality for make features and improve bugs and convert
                  wireFrame to html/css/js with along dependencies. implement
                  projects with react-redux
                </span>
              </div>
            </div>
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <h3
                  className="grim__item-title"
                  style={{
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  Experience
                </h3>
                <span className="grim__item-desc" />
              </div>
            </div>
            <div className="grid__item">
              <div className="revealer revealer--right revealer--hideX" />
              <div
                className="grim__item-inner"
                style={{ opacity: 1, transform: `translateY(${0}%)` }}
              >
                <h3
                  className="grim__item-title"
                  style={{
                    opacity: `${valueOpacity}`,
                    transition: "opacity 0.6s, -webkit-transform 0.6s ease"
                  }}
                >
                  portfolio
                </h3>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  {["horizontal", "vertical", "clipPath", "chatbot"].map(
                    (el, i) => {
                      return (
                        <div className="tooltip" key={i}>
                          <div
                            style={{
                              width: `${10}%`,
                              backgroundColor: "white",
                              margin: "10px",
                              padding: "20px"
                            }}
                            className="grid__item2"
                            onClick={() => this.handlePush(el)}
                          >
                            <div className="revealer revealer--right revealer--hideX" />
                          </div>

                          <span className="tooltiptext">{el}</span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
