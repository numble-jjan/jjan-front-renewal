import React from "react";
import GlobalStyle from "../src/styles/GlobalStyle";

export const decorators = [
  Story => {
    return React.createElement(React.Fragment, {
      children: [React.createElement(GlobalStyle), React.createElement(Story)],
    });
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
