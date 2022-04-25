import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import autoprefixer from "autoprefixer";
import ttypescript from "ttypescript";
import tsPlugin from "rollup-plugin-typescript2";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			postcss({
				minimize: true,
				extract: true,
				use: ["sass"],
				plugins: [autoprefixer],
			}),
			resolve(),
			commonjs(),
			tsPlugin({
				typescript: ttypescript,
			}),
			getBabelOutputPlugin({
				presets: ["@babel/preset-env"],
			}),
			terser(),
			copy({
				targets: [
					{
						src: "src/styles/globals.css",
						dest: "dist",
					},
					{ src: "src/styles/functions.scss", dest: "dist/styles" },
					{ src: "src/styles/variables.scss", dest: "dist/styles" },
					{ src: "src/styles/mixins.scss", dest: "dist/styles" },
				],
			}),
		],
	},
];
