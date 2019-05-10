import React from "react";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = { route: Object };

const BaseRouter = ({ route }: Props) => (
  <div style={{}}>
    <Header />
    {renderRoutes(route.routes)}
    <Footer />
  </div>
);

export default hot(module)(BaseRouter);
