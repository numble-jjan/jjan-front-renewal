import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

import ModalRoot from "./@components/Molecule/Modal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      {/* <Router /> */}
      <ModalRoot />
    </RecoilRoot>
  </React.StrictMode>,
);
