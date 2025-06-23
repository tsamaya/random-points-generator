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
    default: ()=>turf
});
const unkink_polygon_namespaceObject = require("@turf/unkink-polygon");
var unkink_polygon_default = /*#__PURE__*/ __webpack_require__.n(unkink_polygon_namespaceObject);
const random_namespaceObject = require("@turf/random");
const bbox_namespaceObject = require("@turf/bbox");
const points_within_polygon_namespaceObject = require("@turf/points-within-polygon");
var points_within_polygon_default = /*#__PURE__*/ __webpack_require__.n(points_within_polygon_namespaceObject);
const helpers_namespaceObject = require("@turf/helpers");
const turf_turf = {
    randomPoint: random_namespaceObject.randomPoint,
    unkinkPolygon: unkink_polygon_default(),
    bbox: bbox_namespaceObject.bbox,
    pointsWithinPolygon: points_within_polygon_default(),
    featureCollection: helpers_namespaceObject.featureCollection
};
const turf = turf_turf;
exports["default"] = __webpack_exports__["default"];
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=turf.cjs.map