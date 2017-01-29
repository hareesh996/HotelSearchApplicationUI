var webpack = require('webpack');
require('dotenv').load()

module.exports = {
  entry: [
    process.env.DEV_HOST_URL,
    'webpack/hot/only-dev-server',
    './src/app/index.jsx'
  ],
  devtool: "source-map",
  output: {
    path: __dirname + '/build',
    publicPath: "http://localhost:8080/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {compact: true} 
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.jpg$/,
        loader: "url-loader",
        query: { mimetype: "image/jpg" }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(
      {
        "global.GENTLY": false,
        "process.env": {
          'API_URL': JSON.stringify(process.env.API_URL)
        }
      }
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
