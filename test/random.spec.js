import fs from 'fs';
import { describe, it, expect } from 'vitest';
import RandomGenerator from '../src/random-points';

describe('Generates random points:', () => {
  it('It generates 1 random point', () => {
    const points = RandomGenerator.random(1);
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(1);
  });
  it('It generates 10 random points', () => {
    const points = RandomGenerator.random();
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(10);
  });
  it('It generates 1 random point within bbox [0,0,0,0]', () => {
    const points = RandomGenerator.random(1, {
      bbox: [0, 0, 0, 0],
    });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(1);
    expect(points.features[0].geometry.coordinates[0]).toBe(0);
    expect(points.features[0].geometry.coordinates[1]).toBe(0);
  });
  it('It generates 1 random point within bbox [6,45,11,48]', () => {
    const points = RandomGenerator.random(1, {
      bbox: [6, 45, 11, 48],
    });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(1);
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(6);
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(45);
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(48);
  });
  it('It generates 1 random point within input GeoJSON (with unkink)', () => {
    const features = JSON.parse(
      fs.readFileSync('./resources/switzerland.geojson', 'utf8')
    );
    const points = RandomGenerator.random(1, { features });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(1);
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(6);
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(45);
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(48);
  });
  it('It generates 2 random points within input GeoJSON, without unkink', () => {
    const features = JSON.parse(
      fs.readFileSync('./resources/switzerland.geojson', 'utf8')
    );
    const points = RandomGenerator.random(2, { features, unkink: false });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(2);
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(6);
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(45);
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(48);
    expect(points.features[1].geometry.coordinates[0]).toBeGreaterThanOrEqual(6);
    expect(points.features[1].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[1].geometry.coordinates[1]).toBeGreaterThanOrEqual(45);
    expect(points.features[1].geometry.coordinates[1]).toBeLessThan(48);
  });
});
