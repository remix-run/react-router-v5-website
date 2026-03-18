const loose = true;

module.exports = api => ({
  presets: [
    [
      "@babel/preset-env",
      {
        loose,
        ...(api.env("test") ? { targets: { node: "current" } } : {})
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "dev-expression",
    ["@babel/plugin-proposal-class-properties", { loose }]
  ]
});
