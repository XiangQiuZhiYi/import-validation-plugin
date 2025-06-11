const external = [
  '@vue/compiler-sfc',
  '@babel/parser',
  '@babel/traverse', 
  '@babel/types',
  'chalk',
  'vite',
  'webpack'
];

const baseConfig = {
  entryPoints: ['src/index.js'],
  platform: 'node',
  bundle: true,
  external,
  outdir: 'dist'
};

const esmConfig = {
  ...baseConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' }
};

const cjsConfig = {
  ...baseConfig,
  format: 'cjs',
  outExtension: { '.js': '.cjs' }
};

export { esmConfig, cjsConfig };