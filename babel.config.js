const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        firefox: "74",
        chrome: "80"
      }
    }
  ]
];

const plugins = ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-optional-chaining"];
  
module.exports = { 
  presets, 
  plugins 
};