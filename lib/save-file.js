'use strict';

var _ = require('lodash');
var fs = require('fs');

module.exports = function(points) {
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
