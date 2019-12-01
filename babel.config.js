module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // [
    //   "import",
    //   { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    // ]
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }]
  ]
};
