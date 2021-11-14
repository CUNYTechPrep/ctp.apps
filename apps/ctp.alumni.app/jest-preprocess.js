const babelOptions = {
  presets: ['babel-preset-gatsby'],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('babel-jest').default.createTransformer(babelOptions);
