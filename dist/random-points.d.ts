/**
 * Creates random points and returns it as a FeatureCollection
 * @param  {Number} number of points to generate
 * @param  {Object} options for random [bbox|input]
 * @return FeatureCollection generated random points
 */
export declare function random(n: number, options: {
    bbox?: GeoJSON.BBox;
    features?: GeoJSON.FeatureCollection;
    unkink?: boolean;
}): GeoJSON.FeatureCollection;
declare const _default: {
    random: typeof random;
};
export default _default;
//# sourceMappingURL=random-points.d.ts.map