# random-points-generator

Generates _n_ random points based on @turf/random.

The value added regarding @turf/random is the filter. Indeed, here points can be generated inside a GeoJSON polygon.

And it comes with :

- a command line tool,
- a browser library

[![Build Status](https://travis-ci.org/tsamaya/random-points-generator.svg?branch=master)](https://travis-ci.org/tsamaya/random-points-generator)
[![codecov](https://codecov.io/gh/tsamaya/random-points-generator/branch/master/graph/badge.svg)](https://codecov.io/gh/tsamaya/random-points-generator)
[![Maintainability](https://api.codeclimate.com/v1/badges/d34f510268c181e7c6f6/maintainability)](https://codeclimate.com/github/tsamaya/random-points-generator/maintainability)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Prerequisites

- node

## Usage

### node

```sh
$ npm i random-points-generator
```

or

```sh
yarn add random-points-generator
```

### browser

```html
<script src="https://unpkg.com/random-points-generator"></script>

<script>
  const fc = geotools.random(5);
</script>
```

## API

#### function random (number, options)

| Name      | Description                  | Type    | Default   |
| --------- | ---------------------------- | ------- | --------- |
| `number`  | number of points to generate | Integer | 10        |
| `options` | random options               | Object  | undefined |

returns a [FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3)

> `options`

| `Options`  | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `bbox`     | Array<number> extent in [ minX, minY, maxX, maxY ] order which means (souhtwest lng, lat northeast lng,lat) |
| `features` | GeoJSON polygons as features or a FeatureCollection                                                         |

### Example

```javascript
const RandomGenerator = require('random-points-generator');
const points = RandomGenerator.random(3);
console.log(JSON.stringify(points));
```

will output something like :

```javascript
{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[126.41316810428155,-47.548372609587574]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[97.69989737806617,-47.200575920302434]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[24.264802630637277,72.69680002654108]},"properties":{}}]}
```

### From the command line

- clone or fork the repo
- `cd random-points-generator`
- run `npm install`
- run `./bin/random-points-generator --help` to get options

```bash
Usage: bin/random-points-generator [options]

Options:
  --help, -h     Show help                                             [boolean]
  --number, -n                                                     [default: 10]
  --verbose, -v                                                 [default: false]

Examples:
  bin/random-points-generator               Generates 10 random coordinates,
                                            output to console in GeoJSON format
  bin/random-points-generator -n 1000       Generates 1000 random coordinates
  --xmin=-2 --xmax=4 --ymin=-45 --ymax=50   with thsese bounding box
  bin/random-points-generator -i            Generates 10 random coordiantes
  world_countries.geojson                   within polygons from file
                                            world_countries.geojson
```

## Converting to csv

CSV files are not dead. So if needed here is a simple example to generate csv files.

```sh
$ npm install random-points-generator
$ npm install geojson2csv

$ ./node_modules/.bin/random-points-generator > points.geojson

$ node
```

```javascript
const geojson2csv = require('geojson2csv');

geojson2csv('points.geojson', 'points.csv', err => {
  if (err) throw err;
});
```

:warning: csv inverts latitude and longitude regarding the column headers [check issue](https://github.com/morganherlocker/geojson2csv/issues/4).

## Revision History

| Version  | Date       | Description                       |
| -------- | ---------- | --------------------------------- |
| `v1.7.4` | 09/12/2019 | Upgrade deps packages             |
| `v1.7.3` | 09/12/2019 | Upgrade deps packages             |
| `v1.7.2` | 16/08/2019 | Upgrade deps packages             |
| `v1.7.1` | 16/08/2019 | Build removes node 6              |
| `v1.7.0` | 14/08/2019 | Build / test on node 10           |
| `v1.6.1` | 10/12/2018 | Missing Built Files               |
| `v1.6.0` | 10/12/2018 | Upgrade deps packages             |
| `v1.5.2` | 01/05/2018 | fixes unnecessary verbose message |
| `v1.5.0` | 25/03/2018 | add a browser package             |
| `v1.4.0` | 20/02/2018 | Use single turf modules           |
| `v1.3.0` | 07/11/2017 | Unkink input polygons             |
| `v1.2.0` | 21/05/2017 | Rewrite with es6 notation         |
| `v1.1.0` | 25/04/2017 | Split command line and lib        |
| `v1.0.0` | 03/10/2016 | Creation : a tool command line    |

## Resources

_resources_ folder contains Large Scale Data from [Natural Earth](http://www.naturalearthdata.com/)

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
