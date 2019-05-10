import React from "react";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderCoungre from "../Header/HeaderCoungre";

type Props = { route: Object, history: Object };

const BaseRouter = ({ route, history }: Props) => {
  return (
    <div style={{}}>
      {history.location.pathname.substr(9) !== "" ||
      history.location.pathname.substr(9) ? (
        <HeaderCoungre />
      ) : (
        <Header />
      )}
      {renderRoutes(route.routes)}
      {history.location.pathname.substr(9) !== "" ||
      history.location.pathname.substr(9) ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default hot(module)(BaseRouter);
