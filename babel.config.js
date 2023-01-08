const isDev = process.env.BABEL_ENV !== 'build';
const target = process.env.BABEL_TARGET;

module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      'next/babel',
    ],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          fileName: false,
          displayName: isDev,
          preprocess: false,
          pure: true,
          ssr: true,
          minify: !isDev,
        },
      ],
    ],
  };
};
