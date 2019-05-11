import React from "react";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderCoungre from "../Header/HeaderCoungre";
import HeaderProfile from "../Header/HeaderProfile";

type Props = { route: Object, history: Object };

const BaseRouter = ({ route, history }: Props) => {
  let header;
  console.log(history.location.pathname);
  if (history.location.pathname === "/profile") {
    header = <HeaderProfile />;
    console.log("header");
  }
  if (
    history.location.pathname.substr(9) !== "" ||
    history.location.pathname.substr(9)
  ) {
    header = <HeaderCoungre />;
    console.log("header2");
  }
  if (
    (history.location.pathname.substr(9) === "" ||
      !history.location.pathname.substr(9)) &&
    history.location.pathname !== "/profile"
  ) {
    header = <Header />;
    console.log("header3");
  }

  return (
    <div style={{}}>
      {header}
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
