const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: false,
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
		plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
		fallback: {
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"),
			path: require.resolve("path-browserify"),
		},
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: "process/browser",
			Buffer: ["buffer", "Buffer"],
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								["@babel/preset-react", { runtime: "automatic" }],
								"@babel/preset-typescript",
							],
							plugins: ["istanbul"],
						},
					},
				],
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
