var webpack = require('webpack');
var path = require('path');

const MATCH_ALL_NON_RELATIVE_IMPORTS = /^(\w|@).*$/i;

module.exports = [
  {
    output: {
      filename: 'index.js',
      library: '******/{{moduleName}}',
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, 'lib'),
    },
    entry: './src/core/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                minimize: true,
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    externals: [MATCH_ALL_NON_RELATIVE_IMPORTS],
  },
];
