var webpack = require('webpack');

var config = {
  entry: {
    'aria-toggle': './src/bundle.js'
  },

  output: {
    path: './dist',
    filename: '[name].js'
  },

  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  // for production, use actual source maps
  config.devtool = 'source-map';

  var uglify = new webpack.optimize.UglifyJsPlugin({
    compress: true
  });

  config.plugins.push(uglify);
}

module.exports = config;
