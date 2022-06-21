// craco.config.js
module.exports = {
  style: {
    postcssOptions: {
      plugins: ['tailwindcss', 'autoprefixer'],
    },
  },
  babel: {
    presets: [],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx'],
          alias: {
            '@components': './src/components',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  },
};
