const turf = require('./turf');

const DEFAULT_NUMBER = 10;

const randomPoints = (n, bbox) => {
  const count = n || DEFAULT_NUMBER;
  return turf.randomPoint(count, {
    bbox,
  });
};

const randomPointsFromGeoJSON = (input, geojson) => {
  const fc = turf.unkinkPolygon(geojson);

  const ori = input || DEFAULT_NUMBER;
  const features = [];
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
      features.push(ptsWithin.features[i]);
    }
    if (features.length < ori) {
      n = ori - features.length;
    } else {
      flag = true;
    }
    if (joker > ori * 100) {
      throw new Error(
        'Your are not lucky. Ending without reaching expected number of Points with input polygon(s)'
      );
    }
  }
  return turf.featureCollection(features);
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
  if (params === undefined) {
    params = {};
  }

  if (params.features !== undefined) {
    points = randomPointsFromGeoJSON(number, params.features);
  } else {
    points = randomPoints(number, params.bbox);
  }

  return points;
};
