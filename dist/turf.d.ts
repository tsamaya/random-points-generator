import unkinkPolygon from '@turf/unkink-polygon';
import { randomPoint } from '@turf/random';
import { bbox } from '@turf/bbox';
import { buffer } from '@turf/buffer';
import pointsWithinPolygon from '@turf/points-within-polygon';
import { featureCollection } from '@turf/helpers';
/**
 * turf wrapper
 */
declare const turf: {
    buffer: typeof buffer;
    randomPoint: typeof randomPoint;
    unkinkPolygon: typeof unkinkPolygon;
    bbox: typeof bbox;
    pointsWithinPolygon: typeof pointsWithinPolygon;
    featureCollection: typeof featureCollection;
};
export default turf;
//# sourceMappingURL=turf.d.ts.map