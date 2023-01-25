const turf = require('./turf');

const DEFAULT_NUMBER = 10;

const randomPoints = (n, bbox) => {
  const count = n || DEFAULT_NUMBER;
  return turf.randomPoint(count, {
    bbox,
  });
};

const randomPointsFromGeoJSON = (input, { features, unkink }) => {
  let fc;
  if (unkink) {
    fc = turf.unkinkPolygon(features);
  } else {
    fc = features;
  }

  const ori = input || DEFAULT_NUMBER;
  const randomFeatures = [];
  const bbox = turf.bbox(fc);
  let n = ori;
  let flag = false;
  let joker = 0;

  while (!flag) {
    const thePoints = turf.randomPoint(n, {
      bbox,
    });
    joker += 1;
    const ptsWithin = turf.pointsWithinPolygon(thePoints, fc);
    for (let i = 0; i < ptsWithin.features.length; i += 1) {
      randomFeatures.push(ptsWithin.features[i]);
    }
    if (randomFeatures.length < ori) {
      n = ori - randomFeatures.length;
    } else {
      flag = true;
    }
    if (joker > ori * 10000) {
      throw new Error(
        'Your are not lucky. Ending without reaching expected number of Points with input polygon(s)'
      );
    }
  }
  return turf.featureCollection(randomFeatures);
};

/**
 * Creates random points and returns it as a FeatureCollecion
 * @param  {Number} number of points to generate
 * @param  {Object} options for random [bbox|input]
 * @return FeatureCollection generated random points
 */
module.exports = (number, options) => {
  let points;
  let params = options;
  if (typeof params === 'undefined') {
    params = { unkink: true };
  }
  if (typeof params.unkink === 'undefined') {
    params.unkink = true;
  }

  // console.debug('params', params);
  if (typeof params.features !== 'undefined') {
    points = randomPointsFromGeoJSON(number, params);
  } else {
    points = randomPoints(number, params.bbox);
  }

  return points;
};
