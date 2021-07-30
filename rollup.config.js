import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: ["./src/index.js"],
    output: [
      {
        file: "./dist/toolso.js",
        format: "umd",
        name: "toolso",
      },
      {
        dir: "./dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), babel(), terser()],
    external: ["fs"],
  },
];
