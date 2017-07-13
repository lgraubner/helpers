import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: 'src/index.js',
  useStrict: false,
  sourceMap: false,
  plugins: [
    resolve(),
    babel({
      presets: [['es2015', { modules: false }], 'stage-3'],
      babelrc: false,
    }),
  ],
  targets: [
    { dest: pkg.main, format: 'umd', moduleName: 'helpers' },
    { dest: pkg.module, format: 'es' },
  ],
};
