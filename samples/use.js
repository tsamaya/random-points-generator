/* eslint-disable */
const fs = require('fs');
const RandomGenerator = require('..');

const OUTFILE = 'out.csv';

const features = JSON.parse(fs.readFileSync('./map.geojson', 'utf8'));

const collection = RandomGenerator.random(10000, { features });
console.log(JSON.stringify(collection));

fs.writeFile(OUTFILE, `id,address`, { flag: 'w' }, (err) => {
  if (err) console.error('error writing line', err);
});

for (let index = 0; index < collection.features.length; index++) {
  const element = collection.features[index];
  const content = `${index},"${element.geometry.coordinates[1]},${element.geometry.coordinates[0]}"\n`;
  fs.writeFile(OUTFILE, content, { flag: 'a' }, (err) => {
    if (err) console.error('error writing line', err);
  });
}
