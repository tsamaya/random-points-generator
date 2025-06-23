/* eslint no-console: "off" */

import fs from 'fs';
import util from 'util';
import yargs from 'yargs';

import { RandomGenerator } from './index';

interface ArgvOptions {
  number: number;
  format?: 'geojson' | 'csv';
  export?: 'console' | 'file';
  verbose?: boolean;
  xmin?: number;
  ymin?: number;
  xmax?: number;
  ymax?: number;
  i?: string;
  [key: string]: unknown;
}

export type Options = {
  number: number;
  verbose?: boolean;
  bbox?: [number, number, number, number];
  features?: GeoJSON.FeatureCollection;
  format?: 'geojson' | 'csv';
  export?: 'console' | 'file';
};
const options: Options = {
  number: 10,
};

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 [options]')
  .help('h')
  .alias('help', 'h')
  .alias('input', 'i')
  .alias('number', 'n')
  .alias('format', 'f')
  .alias('export', 'e')
  .alias('verbose', 'v')
  .default('number', 10)
  .default('verbose', false)
  .example(
    '$0',
    'Generates 10 random coordinates, output to console in GeoJSON format'
  )
  .example(
    '$0 -n 1000 --xmin=-2 --xmax=4 --ymin=-45 --ymax=50',
    'Generates 1000 random coordinates with these bounding box'
  )
  .example(
    '$0 -i world_countries.geojson',
    'Generates 10 random coordinates within polygons from file world_countries.geojson'
  )
  .parseSync() as ArgvOptions;

options.number = argv.number;
options.format = argv.format;
options.export = argv.export;
options.verbose = argv.verbose;

if (options.verbose) {
  console.log(
    'Running random-points-generator with',
    util.inspect(argv, {
      depth: null,
    })
  );
}
if (
  argv.xmin !== undefined &&
  argv.ymin !== undefined &&
  argv.xmax !== undefined &&
  argv.ymax !== undefined
) {
  options.bbox = [argv.xmin, argv.ymin, argv.xmax, argv.ymax];
}

if (argv.i) {
  if (options.verbose) {
    console.log(`file ${argv.i}`);
  }
  options.features = JSON.parse(
    fs.readFileSync(argv.i, 'utf8')
  ) as GeoJSON.FeatureCollection;
}

const points = RandomGenerator.random(options.number, options);

console.log(JSON.stringify(points));
