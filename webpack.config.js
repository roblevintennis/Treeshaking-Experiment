const webpack = require("webpack");

module.exports = {
  entry: "./entry.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false}]
            ]
          }
				}]
			}
		]
  }
};
