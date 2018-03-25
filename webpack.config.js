const path = require('path');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    library: 'geotools',
    libraryTarget: 'umd',
    filename: 'random-points.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
