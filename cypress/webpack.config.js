const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: false,
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
		plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
