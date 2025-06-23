"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    default: ()=>random_points,
    random: ()=>random
});
const external_turf_cjs_namespaceObject = require("./turf.cjs");
var external_turf_cjs_default = /*#__PURE__*/ __webpack_require__.n(external_turf_cjs_namespaceObject);
const DEFAULT_NUMBER = 10;
const randomPoints = (n, bbox)=>{
    const count = n || DEFAULT_NUMBER;
    return external_turf_cjs_default().randomPoint(count, {
        bbox
    });
};
const randomPointsFromGeoJSON = (input, { features, unkink })=>{
    let fc;
    fc = unkink ? external_turf_cjs_default().unkinkPolygon(features) : features;
    const ori = input || DEFAULT_NUMBER;
    const randomFeatures = [];
    const bbox = external_turf_cjs_default().bbox(fc);
    let n = ori;
    let flag = false;
    let joker = 0;
    while(!flag){
        const thePoints = external_turf_cjs_default().randomPoint(n, {
            bbox
        });
        joker += 1;
        const ptsWithin = external_turf_cjs_default().pointsWithinPolygon(thePoints, fc);
        for(let i = 0; i < ptsWithin.features.length; i += 1){
            const feature = ptsWithin.features[i];
            if (void 0 !== feature && 'Point' === feature.geometry.type) randomFeatures.push(feature);
        }
        if (randomFeatures.length < ori) n = ori - randomFeatures.length;
        else flag = true;
        if (joker > 10000 * ori) throw new Error('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
    }
    return external_turf_cjs_default().featureCollection(randomFeatures);
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
        unkink: params.unkink
    }) : randomPoints(n, params.bbox);
    return points;
}
const random_points = {
    random
};
exports["default"] = __webpack_exports__["default"];
exports.random = __webpack_exports__.random;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default",
    "random"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=random-points.cjs.map