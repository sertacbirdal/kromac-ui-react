const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  entry: {
    "Avatar": "./src/components/lib/Avatar/Avatar.js",
    "Banner": "./src/components/lib/Banner/Banner.js",
    "Button": "./src/components/lib/Button/Button.js",
    "Card": "./src/components/lib/Card/Card.js",
    "Gallery": "./src/components/lib/Gallery/Gallery.js",
    "Menu": "./src/components/lib/Menu/Menu.js",
    "Panel": "./src/components/lib/Panel/Panel.js",
    "Skeleton": "./src/components/lib/Skeleton/Skeleton.js",
    "Slider": "./src/components/lib/Slider/Slider.js",
    "Spinner": "./src/components/lib/Spinner/Spinner.js",
    "TextAnimation": "./src/components/lib/TextAnimation/TextAnimation.js",
    "Toast": "./src/components/lib/Toast/Toast.js",
    "Toggle": "./src/components/lib/Toggle/Toggle.js",
    "index": "./src/components/lib/index.js",
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: "/"
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }

        ]
      },
      {
        test: /\.svg$/,
        use: [
          "file-loader"
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  performance: { hints: false }
};