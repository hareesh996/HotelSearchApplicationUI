var webpack = require('webpack');
require('dotenv').load();
const path = require('path');
module.exports = {
  context: path.join(__dirname, './client'),
  entry: [
    process.env.DEV_HOST_URL,
    'webpack/hot/only-dev-server',
    'index.js'
  ],
  devtool: "source-map",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: "http://localhost:8080/",
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { compact: true }
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
      },
      {
          test : /\.json$/,
          loader : "json-loader",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root :  [
        path.resolve('./src/app')
    ]
  },
  node :{
      console : true,
      fs: 'empty'
  }
  ,
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
          'API_URL': JSON.stringify(process.env.API_URL),
          'DESTINATION_URL': JSON.stringify(process.env.DESTINATION_URL),
          'ENTRY_URL': JSON.stringify(process.env.SOURCE_URL)
        }
      }
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
