const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getPlugins = () => [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
  ];

  return {
    mode: isProd ? 'production' : isDev && 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: path.resolve(__dirname, '/'),
      filename: '[name].js',
    },
    plugins: getPlugins(),
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    devtool: 'source-map',
  };
};
