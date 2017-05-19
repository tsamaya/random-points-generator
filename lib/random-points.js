'use strict';

var turf = require('@turf/turf');
var fs = require('fs');

/**
 * Creates random points and returns it as a FeatureCollecion
 * @param  {Number} number of points to generate
 * @param  {Object} options for random [bbox|input]
 * @return FeatureCollection generated random points
 */
module.exports = function(number, options) {
  var DEFAULT_NUMBER = 10;
  var points;

  if(options === undefined) {
    options = {};
  }

  if(options.input !== undefined) {
    points = _fromGeoJSONFile(number, options.input);
  } else {
    points = _random(number, options.bbox);
  }
  return points;

  function _random(number, bbox) {
    var count = number || DEFAULT_NUMBER;
    return turf.random('points', count, {
      bbox: bbox
    });
  }

  function _fromGeoJSONFile(number, filename) {

    var fc = JSON.parse(fs.readFileSync(filename, 'utf8'));

    var numberOri = number || DEFAULT_NUMBER;
    number = numberOri;
    var flag = false;
    var features = [];
    var joker = 0;
    var bbox = turf.bbox(fc);

    while(!flag) {

      var randomPoints = _random(number, bbox);

      joker++;
      var ptsWithin = turf.within(randomPoints, fc);
      for(var i = 0; i < ptsWithin.features.length; i++) {
        features.push(ptsWithin.features[i]);
      }
      if(features.length < numberOri) {
        number = numberOri - features.length;
      } else {
        flag = true;
      }
      if(joker > numberOri * 100) {
        console.log('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
        flag = true;
      }
    }
    return turf.featureCollection(features);

  }
};
