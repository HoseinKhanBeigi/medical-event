import {
  Home,
  AppThumbnailSlider,
  ClipPath,
  CartImage,
  ChatBots
} from "./components";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/product/:string",
    exact: true,
    component: AppThumbnailSlider
  },
  {
    path: "/clipPath",
    exact: true,
    component: ClipPath
  },
  {
    path: "/images",
    exact: true,
    component: CartImage
  },
  {
    path: "/chatbot",
    exact: true,
    component: ChatBots
  }
];

export default routes;
