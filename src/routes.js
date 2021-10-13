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

import ShopManagement from "./containers/MyPage/ShopManagement";
import ShopCreateManager from "./containers/MyPage/ShopCreateManager";
import ShopCreateShopItem from "./containers/MyPage/ShopCreateShopItem";

import BirthdayPage from "./containers/BirthdayPage";
import BirthdayDetailPage from "./containers/BirthdayDetailPage";
import BirthdayCardPage from "./containers/BirthdayCardPage";

import ActiveCodePage from "./containers/ActiveCode";
import ActiveStatus from "./containers/ActiveStatus";
import ResendCodePage from "./containers/ResendCode";

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
    path: "/member/resend-code",
    exact: false,
    main: ({ history, match }) => (
      <ResendCodePage history={history} match={match} />
    ),
    private: false,
  },
  {
    id: uniqid(),
    path: "/member/active-status",
    exact: false,
    main: ({ history, match }) => (
      <ActiveStatus history={history} match={match} />
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
    path: "/birthday",
    exact: true,
    main: ({ history, match }) => (
      <BirthdayPage history={history} match={match} />
    ),
    private: false,
  },
  {
    id: uniqid(),
    path: "/birthday/:id",
    exact: true,
    main: ({ history, match, location }) => (
      <BirthdayDetailPage history={history} match={match} location={location} />
    ),
    private: false,
  },
  {
    id: uniqid(),
    path: "/birthday-card/:id",
    exact: true,
    main: ({ history, match, location }) => (
      <BirthdayCardPage history={history} match={match} location={location} />
    ),
    private: true,
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

export const myPageShopRoutes = [
  {
    id: uniqid(),
    name: myPageConstants.SHOP_MANAGEMENT,
    path: "/my-page/shop-management",
    exact: false,
    main: () => <ShopManagement />,
  },
  {
    id: uniqid(),
    name: myPageConstants.SHOP_MANAGEMENT,
    path: "/my-page/create-new-manager",
    exact: false,
    main: ({ history }) => <ShopCreateManager history={history} />,
  },
  {
    id: uniqid(),
    name: myPageConstants.SHOP_MANAGEMENT,
    path: "/my-page/create-new-shop",
    exact: false,
    main: ({ history }) => <ShopCreateShopItem history={history} />,
  },
  {
    id: uniqid(),
    name: myPageConstants.SHOP_MANAGEMENT,
    path: "/my-page/edit-shop/:id",
    exact: false,
    main: ({ history, match }) => (
      <ShopCreateShopItem history={history} match={match} />
    ),
  },
];
