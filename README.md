# random-points-generator

Generates _n_ random points.
Filters : points can be generated inside a geojson polygon from an input file or bounding boxes.

## Usage

```sh
$ npm install random-points-generator
```

### API

```javascript
var RandomGenerator = require('random-points-generator');
var points = RandomGenerator.random(3);
console.log(JSON.stringify(points));;
```
should output something like :

```javascript
{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[126.41316810428155,-47.548372609587574]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[97.69989737806617,-47.200575920302434]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[24.264802630637277,72.69680002654108]},"properties":{}}]}
```

### function random (number, options)

 | Name      | Description                  | Type    | Default   |
 | ----------| ---------------------------- | ------- | --------- |
 | `number`  | number of points to generate | Integer | 10        |
 | `options` | random options               | Object  | undefined |

>`options`

| `Options` | Description                  |
| ----------| ---------------------------- |
| `bbox`    | Array<number> extent in [ minX, minY, maxX, maxY ] order which means (souhtwest lng, lat northeast lng,lat) |
| `input`   | path to geojson input file |

### From the command line

- clone or fork the repo
- `cd random-points-generator`
- run `npm install`
- run `node generator --help` to get options

```bash
node  random-points-generator --help
Usage: random-points-generator [options]

Options:
  --help, -h     Show help                                             [boolean]
  --number, -n                                                     [default: 10]
  --verbose, -v                                                 [default: false]

Examples:
  random-points-generator                   Generates 10 random coordinates,
                                            output to console in GeoJSON format

  random-points-generator -n 1000           Generates 1000 random coordinates
  --xmin=-2 --xmax=4 --ymin=-45 --ymax=50   with thsese bounding box

  random-points-generator -i                Generates 10 random coordiantes
  world_countries.geojson                   within polygons from file
                                            world_countries.geojson
```

## Resources

_resources_ folder contains Large Scale Data from [Natural Earth](http://www.naturalearthdata.com/)

## Converting to csv

CSV files are not dead. So if needed here is a simple example to generate csv files.

```sh
$ npm install random-points-generator
$ npm install geojson2csv

$ node_modules/.bin/random-points-generator > points.geojson

$ node
```

```javascript
var geojson2csv = require('geojson2csv');
geojson2csv('points.geojson','points.csv', function(err){
  if(err) throw err
});
```

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's <LICENSE> file.
