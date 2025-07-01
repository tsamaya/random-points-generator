import fs from "fs";
import util from "util";
import yargs from "yargs";
import { RandomGenerator } from "./index.js";
const options = {
    number: 10
};
const argv = yargs(process.argv.slice(2)).usage("Usage: random-points-generator [options]").help('h').alias('help', 'h').alias('input', 'i').alias('number', 'n').alias('format', 'f').alias('export', 'e').alias('verbose', 'v').default('number', 10).default('verbose', false).example('random-points-generator', 'Generates 10 random coordinates, output to console in GeoJSON format').example('random-points-generator -n 1000 --xmin=-2 --xmax=4 --ymin=-45 --ymax=50', 'Generates 1000 random coordinates with these bounding box').example('random-points-generator -i world_countries.geojson', 'Generates 10 random coordinates within polygons from file world_countries.geojson').parseSync();
options.number = argv.number;
options.format = argv.format;
options.export = argv.export;
options.verbose = argv.verbose;
if (options.verbose) console.log('Running random-points-generator with', util.inspect(argv, {
    depth: null
}));
if (void 0 !== argv.xmin && void 0 !== argv.ymin && void 0 !== argv.xmax && void 0 !== argv.ymax) options.bbox = [
    argv.xmin,
    argv.ymin,
    argv.xmax,
    argv.ymax
];
if (argv.i) {
    if (options.verbose) console.log(`file ${argv.i}`);
    options.features = JSON.parse(fs.readFileSync(argv.i, 'utf8'));
}
const points = RandomGenerator.random(options.number, options);
console.log(JSON.stringify(points));

//# sourceMappingURL=cli.js.map