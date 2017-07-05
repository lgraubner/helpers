import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: {
    include: ['src/**/*.js'],
    exclude: ['src/__tests__/**'],
  },
  useStrict: false,
  sourceMap: true,
  plugins: [
    multiEntry(),
    babel({
      presets: [['es2015', { modules: false }], 'stage-0'],
      babelrc: false,
    }),
  ],
  targets: [
    { dest: pkg.main, format: 'umd', moduleName: pkg.name },
    { dest: pkg.module, format: 'es' },
  ],
};
