type BufferOptions = {
    units?: 'miles' | 'kilometers' | 'degrees' | 'radians';
    steps?: number;
};
type BufferType = {
    radius: number;
    options?: BufferOptions;
};
/**
 * Creates random points and returns it as a GeoJSON FeatureCollection
 * @param  {Number} number of points to generate
 * @param  {Object} options for random [bbox|features|unkink|buffer]
 * @returns {GeoJSON.FeatureCollection} random points
 */
export declare function random(n: number, options: {
    bbox?: GeoJSON.BBox;
    features?: GeoJSON.FeatureCollection;
    unkink?: boolean;
    buffer?: BufferType;
}): GeoJSON.FeatureCollection;
export declare const RandomGenerator: {
    random: typeof random;
};
declare const _default: {
    random: typeof random;
};
export default _default;
//# sourceMappingURL=random-points.d.ts.map