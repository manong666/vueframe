module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // viewportWidth: 750,
      viewportWidth: 375,
      minPixelValue: 1
    }
  }
};
