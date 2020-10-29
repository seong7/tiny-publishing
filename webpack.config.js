const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // define entry file and output
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // for react-router-dom
    publicPath: '/',
  },
  // define babel loader
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  devServer: {
    // for react-router-dom
    historyApiFallback: true,
    // 정적 파일 경로 설정
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    // 번들된 코드가 실제로 어디 있는지 서버에게 알려주는 거임
    publicPath: '/',
    // devserver 에서만 핫로딩 가능하게
    hotOnly: true,
  },
};
