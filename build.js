const glob = require('globby');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');

const build = async () => {
  const files = await glob('./src/**/index.js');

  files.forEach(async file => {
    const bundle = await rollup({
      input: file,
      plugins: [resolve(), babel()]
    });

    bundle.write({
      file: file.replace('./src', 'dist'),
      format: 'cjs'
    });
  });
};

build();
