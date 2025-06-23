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
var __webpack_exports__ = {};
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/ __webpack_require__.n(external_fs_namespaceObject);
const external_util_namespaceObject = require("util");
var external_util_default = /*#__PURE__*/ __webpack_require__.n(external_util_namespaceObject);
const external_yargs_namespaceObject = require("yargs");
var external_yargs_default = /*#__PURE__*/ __webpack_require__.n(external_yargs_namespaceObject);
const external_index_cjs_namespaceObject = require("./index.cjs");
const options = {
    number: 10
};
const argv = external_yargs_default()(process.argv.slice(2)).usage('Usage: $0 [options]').help('h').alias('help', 'h').alias('input', 'i').alias('number', 'n').alias('format', 'f').alias('export', 'e').alias('verbose', 'v').default('number', 10).default('verbose', false).example('$0', 'Generates 10 random coordinates, output to console in GeoJSON format').example('$0 -n 1000 --xmin=-2 --xmax=4 --ymin=-45 --ymax=50', 'Generates 1000 random coordinates with thsese bounding box').example('$0 -i world_countries.geojson', 'Generates 10 random coordiantes within polygons from file world_countries.geojson').parseSync();
options.number = argv.number;
options.format = argv.format;
options.export = argv.export;
options.verbose = argv.verbose;
if (options.verbose) console.log('Runing random-points-generator with', external_util_default().inspect(argv, {
    depth: null
}));
if (void 0 !== argv.xmin && void 0 !== argv.ymin && void 0 !== argv.xmax && void 0 !== argv.ymax) options.bbox = [
    argv.xmin,
    argv.ymin,
    argv.xmax,
    argv.ymax
];
if (argv.i) {
    if (options.verbose) console.log(`file ${argv.i}`);
    options.features = JSON.parse(external_fs_default().readFileSync(argv.i, 'utf8'));
}
const points = external_index_cjs_namespaceObject.RandomGenerator.random(options.number, options);
console.log(JSON.stringify(points));
for(var __webpack_i__ in __webpack_exports__)exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=cli.cjs.map