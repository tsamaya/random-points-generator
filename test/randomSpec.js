const fs = require('fs');
const { expect } = require('chai');
const RandomGenerator = require('../index');

describe('Generates random points:', () => {
  it('It generates 1 random point', () => {
    const points = RandomGenerator.random(1);
    expect(points).to.be.a('object');
    expect(points.features).to.be.a('array');
    expect(points.features.length).to.equal(1);
  });
  it('It generates 10 random points', () => {
    const points = RandomGenerator.random();
    expect(points).to.be.a('object');
    expect(points.features).to.be.a('array');
    expect(points.features.length).to.equal(10);
  });
  it('It generates 1 random point within bbox [0,0,0,0]', () => {
    const points = RandomGenerator.random(1, {
      bbox: [0, 0, 0, 0],
    });
    expect(points).to.be.a('object');
    expect(points.features).to.be.a('array');
    expect(points.features.length).to.equal(1);
    expect(points.features[0].geometry.coordinates[0]).to.equal(0);
    expect(points.features[0].geometry.coordinates[1]).to.equal(0);
  });
  it('It generates 1 random point within bbox [6,45,11,48]', () => {
    const points = RandomGenerator.random(1, {
      bbox: [6, 45, 11, 48],
    });
    expect(points).to.be.a('object');
    expect(points.features).to.be.a('array');
    expect(points.features.length).to.equal(1);
    expect(points.features[0].geometry.coordinates[0]).to.be.at.least(6);
    expect(points.features[0].geometry.coordinates[0]).to.be.at.below(11);
    expect(points.features[0].geometry.coordinates[1]).to.be.at.least(11);
    expect(points.features[0].geometry.coordinates[1]).to.be.at.below(48);
  });
  it('It generates 1 random point within input GeoJSON file', () => {
    const features = JSON.parse(
      fs.readFileSync('./resources/switzerland.geojson', 'utf8')
    );
    const points = RandomGenerator.random(1, { features });
    expect(points).to.be.a('object');
    expect(points.features).to.be.a('array');
    expect(points.features.length).to.equal(1);
    expect(points.features[0].geometry.coordinates[0]).to.be.at.least(6);
    expect(points.features[0].geometry.coordinates[0]).to.be.at.below(11);
    expect(points.features[0].geometry.coordinates[1]).to.be.at.least(11);
    expect(points.features[0].geometry.coordinates[1]).to.be.at.below(48);
  });
});
