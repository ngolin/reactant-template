const { addWebpackResolve, override } = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  })
);