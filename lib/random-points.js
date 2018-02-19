const turfUnkinkPolygon = require('@turf/unkink-polygon');
const turfRandom = require('@turf/random');
const turfBbox = require('@turf/bbox');
const turfWithinPolygon = require('@turf/points-within-polygon');
const turfHelpers = require('@turf/helpers');
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
    return turfRandom.randomPoint(count, {
      bbox,
    });
  }

  function fromGeoJSONFile(input, filename) {
    const kinked = JSON.parse(fs.readFileSync(filename, 'utf8'));
    // const fc = turf.unkinkPolygon(kinked);
    const fc = turfUnkinkPolygon(kinked);

    const ori = input || DEFAULT_NUMBER;
    const features = [];
    // const bbox = turf.bbox(fc);
    const bbox = turfBbox(kinked);
    let n = ori;
    let flag = false;
    let joker = 0;

    while (!flag) {
      const thePoints = turfRandom.randomPoint(n, {
        bbox,
      });

      joker += 1;
      // const ptsWithin = turf.within(thePoints, fc);
      const ptsWithin = turfWithinPolygon(thePoints, fc);
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
    // return turf.featureCollection(features);
    return turfHelpers.featureCollection(features);
  }

  if (params.input !== undefined) {
    points = fromGeoJSONFile(number, params.input);
  } else {
    points = randomPoints(number, params.bbox);
  }

  return points;
};
