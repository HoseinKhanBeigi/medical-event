import { BaseRoute, News } from "./components";

export default [
  {
    component: BaseRoute,
    routes: [
      {
        path: "/",
        exact: true,
        component: News
      },
      {
        path: "/news",
        exact: true,
        component: News
      },
      {
        path: "/profile",
        exact: true
        // component: Medical
      },
      {
        path: "/congress",
        exact: true
        // component: Medical
      }
    ]
  }
];
