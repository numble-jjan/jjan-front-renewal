const path = require("path");
const tsconfigPaths = require("vite-tsconfig-paths").default;
const svgrPlugin = require("vite-plugin-svgr");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, {
    configType
  }) {
    config.plugins = [...config.plugins, svgrPlugin({}), tsconfigPaths({
      projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")]
    })];
    return config;
  },
  docs: {
    autodocs: true
  }
};