import { defineConfig } from '@rslib/core';
import { pluginUmd } from '@rsbuild/plugin-umd';

export default defineConfig({
  source: {
    entry: {
      index: 'src/random-points.ts', // or your main browser entry
    },
  },
  lib: [
    {
      format: 'umd',
      syntax: 'es2022',
      bundle: true,
      dts: false,
    },
  ],
  output: {
    target: 'web',
    filename: { js: 'random-points.umd.js' },
    cleanDistPath: false,
    sourceMap: true,
  },
  plugins: [
    pluginUmd({
      name: 'geotools', // global namespace
    }),
  ],
});
