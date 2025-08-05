import unkink_polygon from "@turf/unkink-polygon";
import { randomPoint } from "@turf/random";
import { bbox } from "@turf/bbox";
import { buffer } from "@turf/buffer";
import points_within_polygon from "@turf/points-within-polygon";
import { featureCollection } from "@turf/helpers";
const turf = {
    buffer: buffer,
    randomPoint: randomPoint,
    unkinkPolygon: unkink_polygon,
    bbox: bbox,
    pointsWithinPolygon: points_within_polygon,
    featureCollection: featureCollection
};
const src_turf = turf;
export { src_turf as default };

//# sourceMappingURL=turf.js.map