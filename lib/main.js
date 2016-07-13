'use strict';
var yargs = require('yargs');
var RandomGenerator = require('./RandomGenerator');

var options = {};

var argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 [options]')
  .help('h')
  .alias('help', 'h')
  .alias('output', 'o')
  .alias('input', 'i')
  .alias('format', 'f')
  .alias('number', 'n')
  .default('number', 10)
  .default('format', 'csv')
  .default('output', 'out')
  .example('$0', 'Generates 10 random coordinates, saved in csv formant in file `out`')
  .example('$0 -f geojson', 'Generates 10 random coordinates, saved in geojson format in file `out`')
  .example('$0 -f both', 'Generates 10 random coordinates, saved in both csv and geojson format in files `out.csv` and `out.geojson`')
  .example('$0 -n 1000 --xmin=-180 --xmax=180 --ymin=-55 --ymax=83', 'Generates 1000 random coordinates with bounding box')
  .example('$0 -i world_countries.geojson', 'Generates 10 random coordiantes with polygons from file world_countries.geojson')
  .argv;

console.log('runing with', require('util').inspect(argv, { depth: null }));

options.number = argv.n;
options.format = argv.f;
options.output = argv.o;
if(argv.xmin !== undefined && argv.ymin !== undefined && argv.xmax !== undefined && argv.ymax !== undefined) {
  options.bbox = [argv.xmin, argv.ymin, argv.xmax, argv.ymax];
}
// else {
//   options.bbox = [];
// }
options.input = argv.i;

var generator = new RandomGenerator(options);
generator.run();
