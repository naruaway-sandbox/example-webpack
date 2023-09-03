import { fileURLToPath } from "node:url";
import * as path from "node:path";
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: { main: "./src/ui/main.tsx" },
  output: {
    path: path.join(SCRIPT_DIR, "dist-webpack"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensionAlias: {
      ".js": [".ts", ".tsx", ".js"],
    },
  },
};
