'use strict';
var yargs = require('yargs');
var util = require('util');
var RandomGenerator = require('../index');

var options = {};

var argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 [options]')
  .help('h')
  .alias('help', 'h')
  .alias('input', 'i')
  .alias('number', 'n')
  .alias('verbose', 'v')
  .default('number', 10)
  .default('verbose', false)
  .example('$0', 'Generates 10 random coordinates, output to console in GeoJSON format')
  .example('$0 -n 1000 --xmin=-2 --xmax=4 --ymin=-45 --ymax=50', 'Generates 1000 random coordinates with thsese bounding box')
  .example('$0 -i world_countries.geojson', 'Generates 10 random coordiantes within polygons from file world_countries.geojson')
  .argv;

console.log('runing with', util.inspect(argv, { depth: null }));

options.number = argv.n;
options.format = argv.f;
options.export = argv.e;
options.verbose = argv.v;

if(argv.xmin !== undefined && argv.ymin !== undefined && argv.xmax !== undefined && argv.ymax !== undefined) {
  options.bbox = [argv.xmin, argv.ymin, argv.xmax, argv.ymax];
}
options.input = argv.i;

var points = RandomGenerator.random(options.number, options);

console.log(JSON.stringify(points));
