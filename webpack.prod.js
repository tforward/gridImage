const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/scripts/script.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
