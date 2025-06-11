import { esmConfig, cjsConfig } from './esbuild.config.js';
import esbuild from 'esbuild';

async function build() {
  await esbuild.build(esmConfig);
  await esbuild.build(cjsConfig);
  console.log('Build completed!');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});