/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: { main: "./src/main.tsx" },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
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
