import fs from 'node:fs';
import { describe, it, expect } from 'vitest';

import RandomGenerator from '../src/random-points';
import turf from '../src/turf';

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
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6
    );
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45
    );
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
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6
    );
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45
    );
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
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6
    );
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45
    );
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(48);
    expect(points.features[1].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6
    );
    expect(points.features[1].geometry.coordinates[0]).toBeLessThan(11);
    expect(points.features[1].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45
    );
    expect(points.features[1].geometry.coordinates[1]).toBeLessThan(48);
  });
  it('It generates 2 random points within rectangle GeoJSON, without unkink', () => {
    const features = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [
              [
                [6.839116004546696, 45.84781909710421],
                [6.839116004546696, 45.82303997492647],
                [6.902759193390011, 45.82303997492647],
                [6.902759193390011, 45.84781909710421],
                [6.839116004546696, 45.84781909710421],
              ],
            ],
            type: 'Polygon',
          },
        },
      ],
    };

    const points = RandomGenerator.random(2, { features, unkink: false });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(2);
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6.839116004546696
    );
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(
      6.902759193390011
    );
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45.82303997492647
    );
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(
      45.84781909710421
    );
    expect(points.features[1].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      6.839116004546696
    );
    expect(points.features[1].geometry.coordinates[0]).toBeLessThan(
      6.902759193390011
    );
    expect(points.features[1].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      45.82303997492647
    );
    expect(points.features[1].geometry.coordinates[1]).toBeLessThan(
      45.84781909710421
    );
  });
  it('It generates 2 random points within rectangle GeoJSON, with a buffer, without unkink', () => {
    const xmin = 6.839116004546696;
    const ymin = 45.82303997492647;
    const xmax = 6.902759193390011;
    const ymax = 45.84781909710421;
    const featuresIn = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [
              [
                [xmin, ymax],
                [xmin, ymin],
                [xmax, ymin],
                [xmax, ymax],
                [xmin, ymax],
              ],
            ],
            type: 'Polygon',
          },
        },
      ],
    };

    const features = turf.buffer(featuresIn, 1, {
      units: 'kilometers',
    });

    const points = RandomGenerator.random(2, {
      features,
      unkink: false,
      buffer: { radius: -1, options: { units: 'kilometers' } },
    });
    expect(points).toBeTypeOf('object');
    expect(points.features).toBeInstanceOf(Array);
    expect(points.features.length).toBe(2);
    expect(points.features[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      xmin
    );
    expect(points.features[0].geometry.coordinates[0]).toBeLessThan(xmax);
    expect(points.features[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      ymin
    );
    expect(points.features[0].geometry.coordinates[1]).toBeLessThan(ymax);
    expect(points.features[1].geometry.coordinates[0]).toBeGreaterThanOrEqual(
      xmin
    );
    expect(points.features[1].geometry.coordinates[0]).toBeLessThan(xmax);
    expect(points.features[1].geometry.coordinates[1]).toBeGreaterThanOrEqual(
      ymin
    );
    expect(points.features[1].geometry.coordinates[1]).toBeLessThan(ymax);
  });
});
