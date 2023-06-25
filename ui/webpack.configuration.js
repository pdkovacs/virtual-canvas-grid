const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
