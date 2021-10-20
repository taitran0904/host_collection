import React from "react";
import uniqid from "uniqid";
import * as myPageConstants from "./constants/ui/myPage";

import NotFoundPage from "./containers/NotFoundPage";
import Homepage from "./containers/Homepage";
import AuthPage from "./containers/AuthPage";
import RegisterPage from "./containers/RegisterPage";
import MyPage from "./containers/MyPage";

import MemberSettings from "./containers/MyPage/MemberSettings";
import MemberTop from "./containers/MyPage/MemberTop";

import HostTop from "./containers/MyPage/HostTop";
import HostProfile from "./containers/MyPage/HostProfile";

import ListShop from "./containers/ListShop";

import ActiveCodePage from "./containers/ActiveCode";
import EditPage from "./containers/MyPage/EditPage";
import ShopItem from "./components/ShopItem";

export const routes = [
  {
    id: uniqid(),
    path: "/",
    exact: true,
    main: ({ history }) => <Homepage history={history} />,
    private: false,
  },
  {
    id: uniqid(),
    path: "/login",
    exact: false,
    main: ({ history }) => <AuthPage history={history} />,
    private: false,
  },
  {
    id: uniqid(),
    path: "/register",
    exact: false,
    main: ({ history }) => <RegisterPage history={history} />,
    private: false,
  },
  {
    id: uniqid(),
    path: "/member/email_verification/:token_active",
    exact: false,
    main: ({ history, match }) => (
      <ActiveCodePage history={history} match={match} />
    ),
    private: false,
  },
  {
    id: uniqid(),
    path: "/my-page",
    exact: false,
    main: ({ history }) => <MyPage history={history} />,
    private: true,
  },

  {
    id: uniqid(),
    name: "",
    path: "/edit-profile",
    exact: true,
    main: () => <EditPage />,
  },
  {
    id: uniqid(),
    name: "",
    path: "/list-shop",
    exact: true,
    main: () => <ListShop />,
  },
  {
    id: uniqid(),
    name: "",
    path: "/list-item",
    exact: false,
    main: () => <ShopItem />,
  },

  {
    id: uniqid(),
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
    private: false,
  },
];

export const myPageMemberRoutes = [
  {
    id: uniqid(),
    path: "/my-page",
    exact: true,
    main: () => <MemberTop />,
  },
  {
    id: uniqid(),
    path: "/my-page/member/settings",
    exact: false,
    main: () => <MemberSettings />,
  },
];

export const myPageHostRoutes = [
  {
    id: uniqid(),
    name: myPageConstants.TOP,
    path: "/my-page",
    exact: true,
    main: () => <HostTop />,
  },
  {
    id: uniqid(),
    name: myPageConstants.PROFILE,
    path: "/my-page/host/profile",
    exact: false,
    main: () => <HostProfile />,
  },
];

export const myListShop = [
  {
    id: uniqid(),
    name: myPageConstants.PROFILE,
    path: "/my-page/host/list",
    exact: false,
    main: () => <ListShop />,
  },
];
