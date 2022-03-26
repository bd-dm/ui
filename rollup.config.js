import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import autoprefixer from "autoprefixer";
import ttypescript from "ttypescript";
import tsPlugin from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			postcss({
				minimize: true,
				use: ["sass"],
				plugins: [autoprefixer],
			}),
			resolve(),
			commonjs(),
			tsPlugin({
				typescript: ttypescript,
			}),
			terser(),
			copy({
				targets: [
					{ src: "src/styles/globals.css", dest: "dist", rename: "index.css" },
				],
			}),
		],
	},
];
