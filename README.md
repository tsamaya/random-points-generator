# random-points-generator

Generates random points. default output is geojson

## Usage

  $ npm install random-points-generator


### API

### From the command line
- clone or fork the repo
- `cd random-points-generator`
- run `npm install`
- run `node generator --help` to get options

```bash
node  generator --help
Usage: generator [options]

Options:
  --help, -h    Show help                                              [boolean]
  --number, -n                                                     [default: 10]

Examples:
  node generator                            Generates 10 random coordinates,
                                            saved in csv formant in file `out`

  node generator > f.geojson                Generates 10 random coordinates,
                                            saved in geojson format in file `out`

  node generator -n 1000 --xmin=-180        Generates 1000 random coordinates
  --xmax=180 --ymin=-55 --ymax=83           with bounding box

  node generator -i world_countries.geojson Generates 10 random coordiantes within
                                            polygons from file
                                            world_countries.geojson
```

## Licensing
Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
