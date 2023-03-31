import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import SignupCompletion from "./pages/SignupCompletion";
import Splash from "./pages/Splash";

const authRoutes = () => (
  <Route path="auth">
    <Route path="signin" />
    <Route path="signup" />
    <Route path="signup-complete" element={<SignupCompletion />} />
    <Route path="signout-complete" />
  </Route>
);
const settingRoutes = () => (
  <Route path="setting">
    <Route path="profile" />
    <Route path="nickname" />
    <Route path="location">
      <Route path="search" />
    </Route>
    <Route path="keyword">
      <Route path="alcohol" />
      <Route path="mood" />
    </Route>
  </Route>
);
const profileRoutes = () => (
  <Route path="profile">
    <Route path=":username" />
  </Route>
);
const postRoutes = () => (
  <Route path="post">
    <Route path="ventout" />
    <Route path="soolmate" />
    <Route path=":postId" />
    <Route path="write" />
    <Route path="edit">
      <Route path=":postId" />
    </Route>
  </Route>
);
const activityRoutes = () => (
  <Route path="activity">
    <Route path="post">
      <Route path=":username" />
    </Route>
    <Route path="comment">
      <Route path=":username" />
    </Route>
  </Route>
);
2;
const commentRoutes = () => (
  <Route path="comment">
    <Route path="edit">
      <Route path=":commentId" />
    </Route>
  </Route>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="splash" element={<Splash />} />
      <Route path="landing" element={<Landing />} />
      {authRoutes()}
      {profileRoutes()}
      {settingRoutes()}
      {postRoutes()}
      {activityRoutes()}
      {commentRoutes()}
    </Route>,
  ),
);
