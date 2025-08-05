import unkinkPolygon from '@turf/unkink-polygon';
import { randomPoint } from '@turf/random';
import { bbox } from '@turf/bbox';
import { buffer } from '@turf/buffer';
import pointsWithinPolygon from '@turf/points-within-polygon';
import { featureCollection } from '@turf/helpers';

/**
 * turf wrapper
 */
const turf = {
  buffer,
  randomPoint,
  unkinkPolygon,
  bbox,
  pointsWithinPolygon,
  featureCollection,
};

export default turf;
