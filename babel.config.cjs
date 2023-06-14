module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'not dead', 'ie >= 11'],
          node: 'current',
        },
      },
    ],
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
