import turf from "./turf.js";
const DEFAULT_NUMBER = 10;
const randomPoints = (n, bbox)=>{
    const count = n || DEFAULT_NUMBER;
    return turf.randomPoint(count, {
        bbox
    });
};
const randomPointsFromGeoJSON = (input, { features, unkink, buffer })=>{
    if (void 0 === features || 0 === features.features.length) throw new Error('No features provided to generate random points');
    let fc;
    fc = unkink ? turf.unkinkPolygon(features) : features;
    if (buffer) {
        fc = turf.buffer(fc, buffer.radius, buffer.options);
        if (!fc) throw new Error('Buffer operation failed, check your buffer parameters');
    }
    const ori = input || DEFAULT_NUMBER;
    const randomFeatures = [];
    const bbox = turf.bbox(fc);
    let n = ori;
    let flag = false;
    let joker = 0;
    while(!flag){
        const thePoints = turf.randomPoint(n, {
            bbox
        });
        joker += 1;
        const ptsWithin = turf.pointsWithinPolygon(thePoints, fc);
        for(let i = 0; i < ptsWithin.features.length; i++){
            const feature = ptsWithin.features[i];
            if (void 0 !== feature && 'Point' === feature.geometry.type) randomFeatures.push(feature);
        }
        if (randomFeatures.length < ori) n = ori - randomFeatures.length;
        else flag = true;
        if (joker > 10000 * ori) throw new Error('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
    }
    return turf.featureCollection(randomFeatures);
};
function random(n, options) {
    let points;
    let params = {
        ...options
    };
    if (void 0 === params) params = {
        unkink: true
    };
    if (void 0 === params.unkink) params.unkink = true;
    points = void 0 !== params.features ? randomPointsFromGeoJSON(n, {
        features: params.features,
        unkink: params.unkink,
        buffer: params.buffer
    }) : randomPoints(n, params.bbox);
    return points;
}
const RandomGenerator = {
    random
};
const random_points = {
    random
};
export { RandomGenerator, random_points as default, random };

//# sourceMappingURL=random-points.js.map