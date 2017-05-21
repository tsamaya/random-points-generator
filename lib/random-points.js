const turf = require('@turf/turf');
const fs = require('fs');

/**
 * Creates random points and returns it as a FeatureCollecion
 * @param  {Number} number of points to generate
 * @param  {Object} options for random [bbox|input]
 * @return FeatureCollection generated random points
 */
module.exports = function random(number, options) {
  const DEFAULT_NUMBER = 10;
  let points;
  let params = options;
  if (params === undefined) {
    params = {};
  }

  function randomPoints(n, bbox) {
    const count = n || DEFAULT_NUMBER;
    return turf.random('points', count, {
      bbox,
    });
  }

  function fromGeoJSONFile(input, filename) {
    const fc = JSON.parse(fs.readFileSync(filename, 'utf8'));

    const ori = input || DEFAULT_NUMBER;
    const features = [];
    const bbox = turf.bbox(fc);
    let n = ori;
    let flag = false;
    let joker = 0;

    while (!flag) {
      const thePoints = randomPoints(n, bbox);

      joker += 1;
      const ptsWithin = turf.within(thePoints, fc);
      for (let i = 0; i < ptsWithin.features.length; i += 1) {
        features.push(ptsWithin.features[i]);
      }
      if (features.length < ori) {
        n = ori - features.length;
      } else {
        flag = true;
      }
      if (joker > ori * 100) {
        throw new Error('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
      }
    }
    return turf.featureCollection(features);
  }

  if (params.input !== undefined) {
    points = fromGeoJSONFile(number, params.input);
  } else {
    points = randomPoints(number, params.bbox);
  }

  return points;
};
