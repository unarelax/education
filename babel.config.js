module.exports = {
  presets: [
    "@babel/preset-env"
    // '@vue/cli-plugin-babel/preset',
    // ["env", { "modules": false }]
  ],
  
  plugins: [
    // element官方教程
    [
      "component",
      {
        libraryName: "element-ui", 
        styleLibraryName: "theme-chalk"    
      }
    ]
  ]
}
