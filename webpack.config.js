const MyPlugin = require("./plugins.js");
module.exports = {
  context: __dirname,
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
