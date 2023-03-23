import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

import ModalRoot from "./@components/Molecule/Modal";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
      <ModalRoot />
    </RecoilRoot>
  </React.StrictMode>,
);
