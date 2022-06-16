// craco.config.js
module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('babel-plugin-module-resolver', {
          "root": ["."],
          "extensions": [".js", ".jsx"],
          "alias": {
            "@components": "./src/components"
          }
        })
      ],
    },
  },
}