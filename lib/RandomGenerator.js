'use strict';

var turf = require('turf');
var _ = require('lodash');
var fs = require('fs');

function RandomGenerator(options) {
  this.options = options;
}

module.exports = RandomGenerator;

RandomGenerator.prototype.run = function() {
  var points;

  if(this.options.input !== undefined) {
    points = this._fromGeoJSONFile();
  } else {
    points = this._random(this.options.number, this.options.bbox);
  }
  this._saveFile(points);

};

RandomGenerator.prototype._random = function(number, bbox) {
  //console.log(bbox);
  return turf.random('points', number, {bbox: bbox});

};

RandomGenerator.prototype._fromGeoJSONFile = function() {
  if(this.options.bbox !== undefined) {
    console.warn('using bounding box from input file features');
  }

  var fc = JSON.parse(fs.readFileSync(this.options.input, 'utf8'));

  var number = this.options.number;
  var flag = false;
  var features = [];
  var joker = 0;
  var bbox = turf.extent(fc);
  while(!flag) {

    var randomPoints = this._random(number, bbox);
    joker++;
    var ptsWithin = turf.within(randomPoints, fc);
    for(var i = 0; i < ptsWithin.features.length; i++) {
      features.push(ptsWithin.features[i]);
    }
    if(features.length < this.options.number) {
      number = this.options.number - features.length;
    } else {
      flag = true;
    }
    if(joker > this.options.number * 100) {
      console.log('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
      flag = true;
    }
  }
  return turf.featurecollection(features);

};

RandomGenerator.prototype._saveFile = function(points) {
  var GEOJSON = 'geojson';
  var BOTH = 'both';
  // Save
  // console.dir(points, {
  //   depth: null
  // });
  var filename;
  if(GEOJSON === this.options.format || BOTH === this.options.format) {
    //console.log(JSON.stringify(points));
    filename = this.options.output;
    if(BOTH === this.options.format) {
      filename = filename + '.geojson';
    }
    fs.writeFile(filename, JSON.stringify(points, null, 2), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("GEOJSON saved to " + filename);
      }
    });
  }

  if(GEOJSON !== this.options.format) {
    filename = this.options.output;
    if(BOTH === this.options.format) {
      filename = filename + '.csv';
    }
    var buffer = '';
    _.forEach(points.features, function(value) {
      buffer = buffer + value.geometry.coordinates[1] + ',' + value.geometry.coordinates[0] + '\n';
    });
    fs.writeFile(filename, buffer, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("CSV saved to " + filename);
      }
    });
  }

};
