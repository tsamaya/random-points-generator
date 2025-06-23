import unkink_polygon from "@turf/unkink-polygon";
import { randomPoint } from "@turf/random";
import { bbox } from "@turf/bbox";
import points_within_polygon from "@turf/points-within-polygon";
import { featureCollection } from "@turf/helpers";
const turf_turf = {
    randomPoint: randomPoint,
    unkinkPolygon: unkink_polygon,
    bbox: bbox,
    pointsWithinPolygon: points_within_polygon,
    featureCollection: featureCollection
};
const turf = turf_turf;
export { turf as default };

//# sourceMappingURL=turf.js.map