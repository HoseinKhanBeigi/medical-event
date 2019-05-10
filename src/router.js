import {
  BaseRoute,
  News,
  Congress,
  DetialCoungre,
  SummenryImformation
} from "./components";

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
        exact: true,
        component: Congress
      },
      {
        path: "/congress/:id",
        exact: true,
        component: DetialCoungre,
        isExact: true
      },
      {
        path: "/congress/:id/summery",
        exact: true,
        component: SummenryImformation,
        isExact: true
      }
    ]
  }
];
