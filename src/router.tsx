import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import SignupCompletion from "./pages/SignupCompletion";
import Splash from "./pages/Splash";

const authRoutes = createRoutesFromElements(
  <Route path="auth">
    <Route path="signin" />
    <Route path="signup" />
    <Route path="signup-complete" element={<SignupCompletion />} />
    <Route path="signout-complete" />
  </Route>,
);
const settingRoutes = createRoutesFromElements(
  <Route path="setting">
    <Route path="profile" />
    <Route path="location">
      <Route path="search" />
    </Route>
    <Route path="keyword">
      <Route path="alcohol" />
      <Route path="mood" />
    </Route>
  </Route>,
);
const profileRoutes = createRoutesFromElements(
  <Route path="profile">
    <Route path=":username" />
  </Route>,
);
const postRoutes = createRoutesFromElements(
  <Route path="post">
    <Route path="ventout" />
    <Route path="soolmate" />
    <Route path=":postId" />
    <Route path="write" />
    <Route path="edit">
      <Route path=":postId" />
    </Route>
  </Route>,
);
const activityRoutes = createRoutesFromElements(
  <Route path="activity">
    <Route path="post">
      <Route path=":username" />
    </Route>
    <Route path="comment">
      <Route path=":username" />
    </Route>
  </Route>,
);
const commentRoutes = createRoutesFromElements(
  <Route path="comment">
    <Route path="edit">
      <Route path=":commentId" />
    </Route>
  </Route>,
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="splash" element={<Splash />} />
      <Route path="landing" element={<Landing />} />
      {profileRoutes}
      {authRoutes}
      {settingRoutes}
      {postRoutes}
      {activityRoutes}
      {commentRoutes}
    </>,
  ),
);
