const unkinkPolygon = require('@turf/unkink-polygon');
const random = require('@turf/random');
const bbox = require('@turf/bbox');
const pointsWithinPolygon = require('@turf/points-within-polygon');
const helpers = require('@turf/helpers');

module.exports = {
  randomPoint: random.randomPoint,
  unkinkPolygon,
  bbox: bbox.default,
  pointsWithinPolygon,
  featureCollection: helpers.featureCollection,
};
