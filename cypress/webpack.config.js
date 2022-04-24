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
		],
	},
};
