const MyPlugin = require("./plugins.js");
module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  plugins: [new MyPlugin()],
};
