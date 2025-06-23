import unkinkPolygon from '@turf/unkink-polygon';
import {randomPoint} from '@turf/random';
import {bbox} from '@turf/bbox';
import pointsWithinPolygon from '@turf/points-within-polygon';
import {featureCollection} from '@turf/helpers';

/**
 * turf wrapper
 */
const turf = {
  randomPoint,
  unkinkPolygon,
  bbox,
  pointsWithinPolygon,
  featureCollection,
};

export default turf;
