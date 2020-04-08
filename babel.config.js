const plugins = [
  [
    "import",
    {
      libraryName: "ant-design-vue",
      customName: name => {
        if (name === "TimePicker") {
          return "ant-design-vue/lib/custom-time-picker";
        }
        return `ant-design-vue/lib/${name}`;
      }
    }
  ],
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-nullish-coalescing-operator"
];

if (process.env.NODE_ENV === "production") {
  plugins.push(["transform-remove-console", { exclude: ["error", "warn"] }]);
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins
};
