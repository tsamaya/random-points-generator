import { defineConfig } from '@rslib/core';
// import { pluginUmd } from "@rsbuild/plugin-umd";

export default defineConfig({
  source: {
    entry: {
      index: ['src/**'],
    },
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es2022',
      bundle: false,
      dts: true,
    },
    {
      format: 'cjs',
      syntax: 'es2022',
      bundle: false,
      dts: true,
    },
  ],
  output: {
    target: 'node',
    cleanDistPath: false,
    sourceMap: true,
  },
});
