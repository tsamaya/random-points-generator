import turf from './turf';

const DEFAULT_NUMBER = 10;

const randomPoints = (n: number, bbox?: GeoJSON.BBox) => {
  const count = n || DEFAULT_NUMBER;
  return turf.randomPoint(count, {
    bbox,
  });
};

const randomPointsFromGeoJSON = (
  input: number,
  { features, unkink }: { features: GeoJSON.FeatureCollection; unkink: boolean }
) => {
  let fc;
  if (unkink) {
    // @ts-expect-error TODO: fix this
    fc = turf.unkinkPolygon(features);
  } else {
    fc = features;
  }

  const ori = input || DEFAULT_NUMBER;
  const randomFeatures: GeoJSON.Feature<
    GeoJSON.Point,
    GeoJSON.GeoJsonProperties
  >[] = [];
  const bbox = turf.bbox(fc);
  let n = ori;
  let flag = false;
  let joker = 0;

  while (!flag) {
    const thePoints = turf.randomPoint(n, {
      bbox,
    });
    joker += 1;
    // @ts-expect-error TODO: fix this
    const ptsWithin = turf.pointsWithinPolygon(thePoints, fc);
    for (let i = 0; i < ptsWithin.features.length; i += 1) {
      const feature = ptsWithin.features[i];
      if (feature !== undefined && feature.geometry.type === 'Point') {
        randomFeatures.push(
          feature as GeoJSON.Feature<GeoJSON.Point, GeoJSON.GeoJsonProperties>
        );
      }
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
export function random(
  n: number,
  options: {
    bbox?: GeoJSON.BBox;
    features?: GeoJSON.FeatureCollection;
    unkink?: boolean;
  }
): GeoJSON.FeatureCollection {
  let points;
  let params = { ...options };
  if (typeof params === 'undefined') {
    params = { unkink: true };
  }
  if (typeof params.unkink === 'undefined') {
    params.unkink = true;
  }

  // console.debug('params', params);
  if (typeof params.features !== 'undefined') {
    points = randomPointsFromGeoJSON(n, {
      features: params.features,
      unkink: params.unkink,
    });
  } else {
    points = randomPoints(n, params.bbox);
  }

  return points as GeoJSON.FeatureCollection<
    GeoJSON.Geometry,
    GeoJSON.GeoJsonProperties
  >;
}

export default { random };
