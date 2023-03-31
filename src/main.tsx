import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

import ModalRoot from "./@components/Molecule/Modal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
      <ModalRoot />
    </RecoilRoot>
  </React.StrictMode>,
);
