(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define("geotools", [], factory);
    else if ('object' == typeof exports) exports["geotools"] = factory();
    else root["geotools"] = factory();
})(this, ()=>(()=>{
        var __webpack_modules__ = {
            "./node_modules/.pnpm/rbush@3.0.1/node_modules/rbush/rbush.min.js": function(module1) {
                !function(t, i) {
                    module1.exports = i();
                }(0, function() {
                    "use strict";
                    function t(t, r, e, a, h) {
                        !function t(n, r, e, a, h) {
                            for(; a > e;){
                                if (a - e > 600) {
                                    var o = a - e + 1, s = r - e + 1, l = Math.log(o), f = .5 * Math.exp(2 * l / 3), u = .5 * Math.sqrt(l * f * (o - f) / o) * (s - o / 2 < 0 ? -1 : 1), m = Math.max(e, Math.floor(r - s * f / o + u)), c = Math.min(a, Math.floor(r + (o - s) * f / o + u));
                                    t(n, r, m, c, h);
                                }
                                var p = n[r], d = e, x = a;
                                for(i(n, e, r), h(n[a], p) > 0 && i(n, e, a); d < x;){
                                    for(i(n, d, x), d++, x--; h(n[d], p) < 0;)d++;
                                    for(; h(n[x], p) > 0;)x--;
                                }
                                0 === h(n[e], p) ? i(n, e, x) : i(n, ++x, a), x <= r && (e = x + 1), r <= x && (a = x - 1);
                            }
                        }(t, r, e || 0, a || t.length - 1, h || n);
                    }
                    function i(t, i, n) {
                        var r = t[i];
                        t[i] = t[n], t[n] = r;
                    }
                    function n(t, i) {
                        return t < i ? -1 : t > i ? 1 : 0;
                    }
                    var r = function(t) {
                        void 0 === t && (t = 9), this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear();
                    };
                    function e(t, i, n) {
                        if (!n) return i.indexOf(t);
                        for(var r = 0; r < i.length; r++)if (n(t, i[r])) return r;
                        return -1;
                    }
                    function a(t, i) {
                        h(t, 0, t.children.length, i, t);
                    }
                    function h(t, i, n, r, e) {
                        e || (e = p(null)), e.minX = 1 / 0, e.minY = 1 / 0, e.maxX = -1 / 0, e.maxY = -1 / 0;
                        for(var a = i; a < n; a++){
                            var h = t.children[a];
                            o(e, t.leaf ? r(h) : h);
                        }
                        return e;
                    }
                    function o(t, i) {
                        return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t;
                    }
                    function s(t, i) {
                        return t.minX - i.minX;
                    }
                    function l(t, i) {
                        return t.minY - i.minY;
                    }
                    function f(t) {
                        return (t.maxX - t.minX) * (t.maxY - t.minY);
                    }
                    function u(t) {
                        return t.maxX - t.minX + (t.maxY - t.minY);
                    }
                    function m(t, i) {
                        return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
                    }
                    function c(t, i) {
                        return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
                    }
                    function p(t) {
                        return {
                            children: t,
                            height: 1,
                            leaf: !0,
                            minX: 1 / 0,
                            minY: 1 / 0,
                            maxX: -1 / 0,
                            maxY: -1 / 0
                        };
                    }
                    function d(i, n, r, e, a) {
                        for(var h = [
                            n,
                            r
                        ]; h.length;)if (!((r = h.pop()) - (n = h.pop()) <= e)) {
                            var o = n + Math.ceil((r - n) / e / 2) * e;
                            t(i, o, n, r, a), h.push(n, o, o, r);
                        }
                    }
                    return r.prototype.all = function() {
                        return this._all(this.data, []);
                    }, r.prototype.search = function(t) {
                        var i = this.data, n = [];
                        if (!c(t, i)) return n;
                        for(var r = this.toBBox, e = []; i;){
                            for(var a = 0; a < i.children.length; a++){
                                var h = i.children[a], o = i.leaf ? r(h) : h;
                                c(t, o) && (i.leaf ? n.push(h) : m(t, o) ? this._all(h, n) : e.push(h));
                            }
                            i = e.pop();
                        }
                        return n;
                    }, r.prototype.collides = function(t) {
                        var i = this.data;
                        if (!c(t, i)) return !1;
                        for(var n = []; i;){
                            for(var r = 0; r < i.children.length; r++){
                                var e = i.children[r], a = i.leaf ? this.toBBox(e) : e;
                                if (c(t, a)) {
                                    if (i.leaf || m(t, a)) return !0;
                                    n.push(e);
                                }
                            }
                            i = n.pop();
                        }
                        return !1;
                    }, r.prototype.load = function(t) {
                        if (!t || !t.length) return this;
                        if (t.length < this._minEntries) {
                            for(var i = 0; i < t.length; i++)this.insert(t[i]);
                            return this;
                        }
                        var n = this._build(t.slice(), 0, t.length - 1, 0);
                        if (this.data.children.length) if (this.data.height === n.height) this._splitRoot(this.data, n);
                        else {
                            if (this.data.height < n.height) {
                                var r = this.data;
                                this.data = n, n = r;
                            }
                            this._insert(n, this.data.height - n.height - 1, !0);
                        }
                        else this.data = n;
                        return this;
                    }, r.prototype.insert = function(t) {
                        return t && this._insert(t, this.data.height - 1), this;
                    }, r.prototype.clear = function() {
                        return this.data = p([]), this;
                    }, r.prototype.remove = function(t, i) {
                        if (!t) return this;
                        for(var n, r, a, h = this.data, o = this.toBBox(t), s = [], l = []; h || s.length;){
                            if (h || (h = s.pop(), r = s[s.length - 1], n = l.pop(), a = !0), h.leaf) {
                                var f = e(t, h.children, i);
                                if (-1 !== f) return h.children.splice(f, 1), s.push(h), this._condense(s), this;
                            }
                            a || h.leaf || !m(h, o) ? r ? (n++, h = r.children[n], a = !1) : h = null : (s.push(h), l.push(n), n = 0, r = h, h = h.children[0]);
                        }
                        return this;
                    }, r.prototype.toBBox = function(t) {
                        return t;
                    }, r.prototype.compareMinX = function(t, i) {
                        return t.minX - i.minX;
                    }, r.prototype.compareMinY = function(t, i) {
                        return t.minY - i.minY;
                    }, r.prototype.toJSON = function() {
                        return this.data;
                    }, r.prototype.fromJSON = function(t) {
                        return this.data = t, this;
                    }, r.prototype._all = function(t, i) {
                        for(var n = []; t;)t.leaf ? i.push.apply(i, t.children) : n.push.apply(n, t.children), t = n.pop();
                        return i;
                    }, r.prototype._build = function(t, i, n, r) {
                        var e, h = n - i + 1, o = this._maxEntries;
                        if (h <= o) return a(e = p(t.slice(i, n + 1)), this.toBBox), e;
                        r || (r = Math.ceil(Math.log(h) / Math.log(o)), o = Math.ceil(h / Math.pow(o, r - 1))), (e = p([])).leaf = !1, e.height = r;
                        var s = Math.ceil(h / o), l = s * Math.ceil(Math.sqrt(o));
                        d(t, i, n, l, this.compareMinX);
                        for(var f = i; f <= n; f += l){
                            var u = Math.min(f + l - 1, n);
                            d(t, f, u, s, this.compareMinY);
                            for(var m = f; m <= u; m += s){
                                var c = Math.min(m + s - 1, u);
                                e.children.push(this._build(t, m, c, r - 1));
                            }
                        }
                        return a(e, this.toBBox), e;
                    }, r.prototype._chooseSubtree = function(t, i, n, r) {
                        for(; r.push(i), !i.leaf && r.length - 1 !== n;){
                            for(var e = 1 / 0, a = 1 / 0, h = void 0, o = 0; o < i.children.length; o++){
                                var s = i.children[o], l = f(s), u = (m = t, c = s, (Math.max(c.maxX, m.maxX) - Math.min(c.minX, m.minX)) * (Math.max(c.maxY, m.maxY) - Math.min(c.minY, m.minY)) - l);
                                u < a ? (a = u, e = l < e ? l : e, h = s) : u === a && l < e && (e = l, h = s);
                            }
                            i = h || i.children[0];
                        }
                        var m, c;
                        return i;
                    }, r.prototype._insert = function(t, i, n) {
                        var r = n ? t : this.toBBox(t), e = [], a = this._chooseSubtree(r, this.data, i, e);
                        for(a.children.push(t), o(a, r); i >= 0 && e[i].children.length > this._maxEntries;)this._split(e, i), i--;
                        this._adjustParentBBoxes(r, e, i);
                    }, r.prototype._split = function(t, i) {
                        var n = t[i], r = n.children.length, e = this._minEntries;
                        this._chooseSplitAxis(n, e, r);
                        var h = this._chooseSplitIndex(n, e, r), o = p(n.children.splice(h, n.children.length - h));
                        o.height = n.height, o.leaf = n.leaf, a(n, this.toBBox), a(o, this.toBBox), i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
                    }, r.prototype._splitRoot = function(t, i) {
                        this.data = p([
                            t,
                            i
                        ]), this.data.height = t.height + 1, this.data.leaf = !1, a(this.data, this.toBBox);
                    }, r.prototype._chooseSplitIndex = function(t, i, n) {
                        for(var r, e, a, o, s, l, u, m = 1 / 0, c = 1 / 0, p = i; p <= n - i; p++){
                            var d = h(t, 0, p, this.toBBox), x = h(t, p, n, this.toBBox), v = (e = d, a = x, o = void 0, s = void 0, l = void 0, u = void 0, o = Math.max(e.minX, a.minX), s = Math.max(e.minY, a.minY), l = Math.min(e.maxX, a.maxX), u = Math.min(e.maxY, a.maxY), Math.max(0, l - o) * Math.max(0, u - s)), M = f(d) + f(x);
                            v < m ? (m = v, r = p, c = M < c ? M : c) : v === m && M < c && (c = M, r = p);
                        }
                        return r || n - i;
                    }, r.prototype._chooseSplitAxis = function(t, i, n) {
                        var r = t.leaf ? this.compareMinX : s, e = t.leaf ? this.compareMinY : l;
                        this._allDistMargin(t, i, n, r) < this._allDistMargin(t, i, n, e) && t.children.sort(r);
                    }, r.prototype._allDistMargin = function(t, i, n, r) {
                        t.children.sort(r);
                        for(var e = this.toBBox, a = h(t, 0, i, e), s = h(t, n - i, n, e), l = u(a) + u(s), f = i; f < n - i; f++){
                            var m = t.children[f];
                            o(a, t.leaf ? e(m) : m), l += u(a);
                        }
                        for(var c = n - i - 1; c >= i; c--){
                            var p = t.children[c];
                            o(s, t.leaf ? e(p) : p), l += u(s);
                        }
                        return l;
                    }, r.prototype._adjustParentBBoxes = function(t, i, n) {
                        for(var r = n; r >= 0; r--)o(i[r], t);
                    }, r.prototype._condense = function(t) {
                        for(var i = t.length - 1, n = void 0; i >= 0; i--)0 === t[i].children.length ? i > 0 ? (n = t[i - 1].children).splice(n.indexOf(t[i]), 1) : this.clear() : a(t[i], this.toBBox);
                    }, r;
                });
            }
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            var module1 = __webpack_module_cache__[moduleId] = {
                exports: {}
            };
            __webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            return module1.exports;
        }
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
        (()=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
                default: ()=>random_points,
                random: ()=>random
            });
            var earthRadius = 63710088e-1;
            function esm_feature(geom, properties, options = {}) {
                const feat = {
                    type: "Feature"
                };
                if (0 === options.id || options.id) feat.id = options.id;
                if (options.bbox) feat.bbox = options.bbox;
                feat.properties = properties || {};
                feat.geometry = geom;
                return feat;
            }
            function esm_point(coordinates, properties, options = {}) {
                if (!coordinates) throw new Error("coordinates is required");
                if (!Array.isArray(coordinates)) throw new Error("coordinates must be an Array");
                if (coordinates.length < 2) throw new Error("coordinates must be at least 2 numbers long");
                if (!esm_isNumber(coordinates[0]) || !esm_isNumber(coordinates[1])) throw new Error("coordinates must contain numbers");
                const geom = {
                    type: "Point",
                    coordinates
                };
                return esm_feature(geom, properties, options);
            }
            function esm_polygon(coordinates, properties, options = {}) {
                for (const ring of coordinates){
                    if (ring.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
                    if (ring[ring.length - 1].length !== ring[0].length) throw new Error("First and last Position are not equivalent.");
                    for(let j = 0; j < ring[ring.length - 1].length; j++)if (ring[ring.length - 1][j] !== ring[0][j]) throw new Error("First and last Position are not equivalent.");
                }
                const geom = {
                    type: "Polygon",
                    coordinates
                };
                return esm_feature(geom, properties, options);
            }
            function esm_featureCollection(features, options = {}) {
                const fc = {
                    type: "FeatureCollection"
                };
                if (options.id) fc.id = options.id;
                if (options.bbox) fc.bbox = options.bbox;
                fc.features = features;
                return fc;
            }
            function multiPoint(coordinates, properties, options = {}) {
                const geom = {
                    type: "MultiPoint",
                    coordinates
                };
                return esm_feature(geom, properties, options);
            }
            function esm_isNumber(num) {
                return !isNaN(num) && null !== num && !Array.isArray(num);
            }
            function validateBBox(bbox) {
                if (!bbox) throw new Error("bbox is required");
                if (!Array.isArray(bbox)) throw new Error("bbox must be an Array");
                if (4 !== bbox.length && 6 !== bbox.length) throw new Error("bbox must be an Array of 4 or 6 numbers");
                bbox.forEach((num)=>{
                    if (!esm_isNumber(num)) throw new Error("bbox must only contain numbers");
                });
            }
            function coordEach(geojson, callback, excludeWrapCoord) {
                if (null === geojson) return;
                var j, k, l, geometry, stopG, coords, geometryMaybeCollection, wrapShrink = 0, coordIndex = 0, isGeometryCollection, type = geojson.type, isFeatureCollection = "FeatureCollection" === type, isFeature = "Feature" === type, stop = isFeatureCollection ? geojson.features.length : 1;
                for(var featureIndex = 0; featureIndex < stop; featureIndex++){
                    geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
                    isGeometryCollection = geometryMaybeCollection ? "GeometryCollection" === geometryMaybeCollection.type : false;
                    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
                    for(var geomIndex = 0; geomIndex < stopG; geomIndex++){
                        var multiFeatureIndex = 0;
                        var geometryIndex = 0;
                        geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
                        if (null !== geometry) {
                            coords = geometry.coordinates;
                            var geomType = geometry.type;
                            wrapShrink = excludeWrapCoord && ("Polygon" === geomType || "MultiPolygon" === geomType) ? 1 : 0;
                            switch(geomType){
                                case null:
                                    break;
                                case "Point":
                                    if (false === callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex)) return false;
                                    coordIndex++;
                                    multiFeatureIndex++;
                                    break;
                                case "LineString":
                                case "MultiPoint":
                                    for(j = 0; j < coords.length; j++){
                                        if (false === callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex)) return false;
                                        coordIndex++;
                                        if ("MultiPoint" === geomType) multiFeatureIndex++;
                                    }
                                    if ("LineString" === geomType) multiFeatureIndex++;
                                    break;
                                case "Polygon":
                                case "MultiLineString":
                                    for(j = 0; j < coords.length; j++){
                                        for(k = 0; k < coords[j].length - wrapShrink; k++){
                                            if (false === callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex)) return false;
                                            coordIndex++;
                                        }
                                        if ("MultiLineString" === geomType) multiFeatureIndex++;
                                        if ("Polygon" === geomType) geometryIndex++;
                                    }
                                    if ("Polygon" === geomType) multiFeatureIndex++;
                                    break;
                                case "MultiPolygon":
                                    for(j = 0; j < coords.length; j++){
                                        geometryIndex = 0;
                                        for(k = 0; k < coords[j].length; k++){
                                            for(l = 0; l < coords[j][k].length - wrapShrink; l++){
                                                if (false === callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex)) return false;
                                                coordIndex++;
                                            }
                                            geometryIndex++;
                                        }
                                        multiFeatureIndex++;
                                    }
                                    break;
                                case "GeometryCollection":
                                    for(j = 0; j < geometry.geometries.length; j++)if (false === coordEach(geometry.geometries[j], callback, excludeWrapCoord)) return false;
                                    break;
                                default:
                                    throw new Error("Unknown Geometry Type");
                            }
                        }
                    }
                }
            }
            function featureEach(geojson, callback) {
                if ("Feature" === geojson.type) callback(geojson, 0);
                else if ("FeatureCollection" === geojson.type) for(var i = 0; i < geojson.features.length && false !== callback(geojson.features[i], i); i++);
            }
            function geomEach(geojson, callback) {
                var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = "FeatureCollection" === geojson.type, isFeature = "Feature" === geojson.type, stop = isFeatureCollection ? geojson.features.length : 1;
                for(i = 0; i < stop; i++){
                    geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
                    featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {};
                    featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : void 0;
                    featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : void 0;
                    isGeometryCollection = geometryMaybeCollection ? "GeometryCollection" === geometryMaybeCollection.type : false;
                    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
                    for(g = 0; g < stopG; g++){
                        geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
                        if (null === geometry) {
                            if (false === callback(null, featureIndex, featureProperties, featureBBox, featureId)) return false;
                            continue;
                        }
                        switch(geometry.type){
                            case "Point":
                            case "LineString":
                            case "MultiPoint":
                            case "Polygon":
                            case "MultiLineString":
                            case "MultiPolygon":
                                if (false === callback(geometry, featureIndex, featureProperties, featureBBox, featureId)) return false;
                                break;
                            case "GeometryCollection":
                                for(j = 0; j < geometry.geometries.length; j++)if (false === callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId)) return false;
                                break;
                            default:
                                throw new Error("Unknown Geometry Type");
                        }
                    }
                    featureIndex++;
                }
            }
            function geomReduce(geojson, callback, initialValue) {
                var previousValue = initialValue;
                geomEach(geojson, function(currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
                    previousValue = 0 === featureIndex && void 0 === initialValue ? currentGeometry : callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
                });
                return previousValue;
            }
            function flattenEach(geojson, callback) {
                geomEach(geojson, function(geometry, featureIndex, properties, bbox, id) {
                    var type = null === geometry ? null : geometry.type;
                    switch(type){
                        case null:
                        case "Point":
                        case "LineString":
                        case "Polygon":
                            if (false === callback(esm_feature(geometry, properties, {
                                bbox,
                                id
                            }), featureIndex, 0)) return false;
                            return;
                    }
                    var geomType;
                    switch(type){
                        case "MultiPoint":
                            geomType = "Point";
                            break;
                        case "MultiLineString":
                            geomType = "LineString";
                            break;
                        case "MultiPolygon":
                            geomType = "Polygon";
                            break;
                    }
                    for(var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++){
                        var coordinate = geometry.coordinates[multiFeatureIndex];
                        var geom = {
                            type: geomType,
                            coordinates: coordinate
                        };
                        if (false === callback(esm_feature(geom, properties), featureIndex, multiFeatureIndex)) return false;
                    }
                });
            }
            var rbush_min = __webpack_require__("./node_modules/.pnpm/rbush@3.0.1/node_modules/rbush/rbush.min.js");
            function esm_area(geojson) {
                return geomReduce(geojson, (value, geom)=>value + calculateArea(geom), 0);
            }
            function calculateArea(geom) {
                let total = 0;
                let i;
                switch(geom.type){
                    case "Polygon":
                        return polygonArea(geom.coordinates);
                    case "MultiPolygon":
                        for(i = 0; i < geom.coordinates.length; i++)total += polygonArea(geom.coordinates[i]);
                        return total;
                    case "Point":
                    case "MultiPoint":
                    case "LineString":
                    case "MultiLineString":
                        break;
                }
                return 0;
            }
            function polygonArea(coords) {
                let total = 0;
                if (coords && coords.length > 0) {
                    total += Math.abs(ringArea(coords[0]));
                    for(let i = 1; i < coords.length; i++)total -= Math.abs(ringArea(coords[i]));
                }
                return total;
            }
            var FACTOR = earthRadius * earthRadius / 2;
            var PI_OVER_180 = Math.PI / 180;
            function ringArea(coords) {
                const coordsLength = coords.length - 1;
                if (coordsLength <= 2) return 0;
                let total = 0;
                let i = 0;
                while(i < coordsLength){
                    const lower = coords[i];
                    const middle = coords[i + 1 === coordsLength ? 0 : i + 1];
                    const upper = coords[i + 2 >= coordsLength ? (i + 2) % coordsLength : i + 2];
                    const lowerX = lower[0] * PI_OVER_180;
                    const middleY = middle[1] * PI_OVER_180;
                    const upperX = upper[0] * PI_OVER_180;
                    total += (upperX - lowerX) * Math.sin(middleY);
                    i++;
                }
                return total * FACTOR;
            }
            const epsilon = 1.1102230246251565e-16;
            const util_splitter = 134217729;
            const util_resulterrbound = (3 + 8 * epsilon) * epsilon;
            function util_sum(elen, e, flen, f, h) {
                let Q, Qnew, hh, bvirt;
                let enow = e[0];
                let fnow = f[0];
                let eindex = 0;
                let findex = 0;
                if (fnow > enow === fnow > -enow) {
                    Q = enow;
                    enow = e[++eindex];
                } else {
                    Q = fnow;
                    fnow = f[++findex];
                }
                let hindex = 0;
                if (eindex < elen && findex < flen) {
                    if (fnow > enow === fnow > -enow) {
                        Qnew = enow + Q;
                        hh = Q - (Qnew - enow);
                        enow = e[++eindex];
                    } else {
                        Qnew = fnow + Q;
                        hh = Q - (Qnew - fnow);
                        fnow = f[++findex];
                    }
                    Q = Qnew;
                    if (0 !== hh) h[hindex++] = hh;
                    while(eindex < elen && findex < flen){
                        if (fnow > enow === fnow > -enow) {
                            Qnew = Q + enow;
                            bvirt = Qnew - Q;
                            hh = Q - (Qnew - bvirt) + (enow - bvirt);
                            enow = e[++eindex];
                        } else {
                            Qnew = Q + fnow;
                            bvirt = Qnew - Q;
                            hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                            fnow = f[++findex];
                        }
                        Q = Qnew;
                        if (0 !== hh) h[hindex++] = hh;
                    }
                }
                while(eindex < elen){
                    Qnew = Q + enow;
                    bvirt = Qnew - Q;
                    hh = Q - (Qnew - bvirt) + (enow - bvirt);
                    enow = e[++eindex];
                    Q = Qnew;
                    if (0 !== hh) h[hindex++] = hh;
                }
                while(findex < flen){
                    Qnew = Q + fnow;
                    bvirt = Qnew - Q;
                    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                    fnow = f[++findex];
                    Q = Qnew;
                    if (0 !== hh) h[hindex++] = hh;
                }
                if (0 !== Q || 0 === hindex) h[hindex++] = Q;
                return hindex;
            }
            function util_estimate(elen, e) {
                let Q = e[0];
                for(let i = 1; i < elen; i++)Q += e[i];
                return Q;
            }
            function vec(n) {
                return new Float64Array(n);
            }
            const ccwerrboundA = (3 + 16 * epsilon) * epsilon;
            const ccwerrboundB = (2 + 12 * epsilon) * epsilon;
            const ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;
            const B = vec(4);
            const C1 = vec(8);
            const C2 = vec(12);
            const D = vec(16);
            const orient2d_u = vec(4);
            function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
                let acxtail, acytail, bcxtail, bcytail;
                let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
                const acx = ax - cx;
                const bcx = bx - cx;
                const acy = ay - cy;
                const bcy = by - cy;
                s1 = acx * bcy;
                c = util_splitter * acx;
                ahi = c - (c - acx);
                alo = acx - ahi;
                c = util_splitter * bcy;
                bhi = c - (c - bcy);
                blo = bcy - bhi;
                s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
                t1 = acy * bcx;
                c = util_splitter * acy;
                ahi = c - (c - acy);
                alo = acy - ahi;
                c = util_splitter * bcx;
                bhi = c - (c - bcx);
                blo = bcx - bhi;
                t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
                _i = s0 - t0;
                bvirt = s0 - _i;
                B[0] = s0 - (_i + bvirt) + (bvirt - t0);
                _j = s1 + _i;
                bvirt = _j - s1;
                _0 = s1 - (_j - bvirt) + (_i - bvirt);
                _i = _0 - t1;
                bvirt = _0 - _i;
                B[1] = _0 - (_i + bvirt) + (bvirt - t1);
                u3 = _j + _i;
                bvirt = u3 - _j;
                B[2] = _j - (u3 - bvirt) + (_i - bvirt);
                B[3] = u3;
                let det = util_estimate(4, B);
                let errbound = ccwerrboundB * detsum;
                if (det >= errbound || -det >= errbound) return det;
                bvirt = ax - acx;
                acxtail = ax - (acx + bvirt) + (bvirt - cx);
                bvirt = bx - bcx;
                bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
                bvirt = ay - acy;
                acytail = ay - (acy + bvirt) + (bvirt - cy);
                bvirt = by - bcy;
                bcytail = by - (bcy + bvirt) + (bvirt - cy);
                if (0 === acxtail && 0 === acytail && 0 === bcxtail && 0 === bcytail) return det;
                errbound = ccwerrboundC * detsum + util_resulterrbound * Math.abs(det);
                det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
                if (det >= errbound || -det >= errbound) return det;
                s1 = acxtail * bcy;
                c = util_splitter * acxtail;
                ahi = c - (c - acxtail);
                alo = acxtail - ahi;
                c = util_splitter * bcy;
                bhi = c - (c - bcy);
                blo = bcy - bhi;
                s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
                t1 = acytail * bcx;
                c = util_splitter * acytail;
                ahi = c - (c - acytail);
                alo = acytail - ahi;
                c = util_splitter * bcx;
                bhi = c - (c - bcx);
                blo = bcx - bhi;
                t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
                _i = s0 - t0;
                bvirt = s0 - _i;
                orient2d_u[0] = s0 - (_i + bvirt) + (bvirt - t0);
                _j = s1 + _i;
                bvirt = _j - s1;
                _0 = s1 - (_j - bvirt) + (_i - bvirt);
                _i = _0 - t1;
                bvirt = _0 - _i;
                orient2d_u[1] = _0 - (_i + bvirt) + (bvirt - t1);
                u3 = _j + _i;
                bvirt = u3 - _j;
                orient2d_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
                orient2d_u[3] = u3;
                const C1len = util_sum(4, B, 4, orient2d_u, C1);
                s1 = acx * bcytail;
                c = util_splitter * acx;
                ahi = c - (c - acx);
                alo = acx - ahi;
                c = util_splitter * bcytail;
                bhi = c - (c - bcytail);
                blo = bcytail - bhi;
                s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
                t1 = acy * bcxtail;
                c = util_splitter * acy;
                ahi = c - (c - acy);
                alo = acy - ahi;
                c = util_splitter * bcxtail;
                bhi = c - (c - bcxtail);
                blo = bcxtail - bhi;
                t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
                _i = s0 - t0;
                bvirt = s0 - _i;
                orient2d_u[0] = s0 - (_i + bvirt) + (bvirt - t0);
                _j = s1 + _i;
                bvirt = _j - s1;
                _0 = s1 - (_j - bvirt) + (_i - bvirt);
                _i = _0 - t1;
                bvirt = _0 - _i;
                orient2d_u[1] = _0 - (_i + bvirt) + (bvirt - t1);
                u3 = _j + _i;
                bvirt = u3 - _j;
                orient2d_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
                orient2d_u[3] = u3;
                const C2len = util_sum(C1len, C1, 4, orient2d_u, C2);
                s1 = acxtail * bcytail;
                c = util_splitter * acxtail;
                ahi = c - (c - acxtail);
                alo = acxtail - ahi;
                c = util_splitter * bcytail;
                bhi = c - (c - bcytail);
                blo = bcytail - bhi;
                s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
                t1 = acytail * bcxtail;
                c = util_splitter * acytail;
                ahi = c - (c - acytail);
                alo = acytail - ahi;
                c = util_splitter * bcxtail;
                bhi = c - (c - bcxtail);
                blo = bcxtail - bhi;
                t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
                _i = s0 - t0;
                bvirt = s0 - _i;
                orient2d_u[0] = s0 - (_i + bvirt) + (bvirt - t0);
                _j = s1 + _i;
                bvirt = _j - s1;
                _0 = s1 - (_j - bvirt) + (_i - bvirt);
                _i = _0 - t1;
                bvirt = _0 - _i;
                orient2d_u[1] = _0 - (_i + bvirt) + (bvirt - t1);
                u3 = _j + _i;
                bvirt = u3 - _j;
                orient2d_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
                orient2d_u[3] = u3;
                const Dlen = util_sum(C2len, C2, 4, orient2d_u, D);
                return D[Dlen - 1];
            }
            function orient2d(ax, ay, bx, by, cx, cy) {
                const detleft = (ay - cy) * (bx - cx);
                const detright = (ax - cx) * (by - cy);
                const det = detleft - detright;
                const detsum = Math.abs(detleft + detright);
                if (Math.abs(det) >= ccwerrboundA * detsum) return det;
                return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
            }
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(8);
            vec(8);
            vec(8);
            vec(4);
            vec(8);
            vec(8);
            vec(8);
            vec(12);
            vec(192);
            vec(192);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(8);
            vec(4);
            vec(4);
            vec(4);
            vec(8);
            vec(16);
            vec(16);
            vec(16);
            vec(32);
            vec(32);
            vec(48);
            vec(64);
            vec(1152);
            vec(1152);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(4);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(24);
            vec(1152);
            vec(1152);
            vec(1152);
            vec(1152);
            vec(1152);
            vec(2304);
            vec(2304);
            vec(3456);
            vec(5760);
            vec(8);
            vec(8);
            vec(8);
            vec(16);
            vec(24);
            vec(48);
            vec(48);
            vec(96);
            vec(192);
            vec(384);
            vec(384);
            vec(384);
            vec(768);
            vec(96);
            vec(96);
            vec(96);
            vec(1152);
            function pointInPolygon(p, polygon) {
                var i;
                var ii;
                var k = 0;
                var f;
                var u1;
                var v1;
                var u2;
                var v2;
                var currentP;
                var nextP;
                var x = p[0];
                var y = p[1];
                var numContours = polygon.length;
                for(i = 0; i < numContours; i++){
                    ii = 0;
                    var contour = polygon[i];
                    var contourLen = contour.length - 1;
                    currentP = contour[0];
                    if (currentP[0] !== contour[contourLen][0] && currentP[1] !== contour[contourLen][1]) throw new Error('First and last coordinates in a ring must be the same');
                    u1 = currentP[0] - x;
                    v1 = currentP[1] - y;
                    for(ii; ii < contourLen; ii++){
                        nextP = contour[ii + 1];
                        u2 = nextP[0] - x;
                        v2 = nextP[1] - y;
                        if (0 === v1 && 0 === v2) {
                            if (u2 <= 0 && u1 >= 0 || u1 <= 0 && u2 >= 0) return 0;
                        } else if (v2 >= 0 && v1 <= 0 || v2 <= 0 && v1 >= 0) {
                            f = orient2d(u1, u2, v1, v2, 0, 0);
                            if (0 === f) return 0;
                            if (f > 0 && v2 > 0 && v1 <= 0 || f < 0 && v2 <= 0 && v1 > 0) k++;
                        }
                        currentP = nextP;
                        v1 = v2;
                        u1 = u2;
                    }
                }
                if (k % 2 === 0) return false;
                return true;
            }
            function getCoord(coord) {
                if (!coord) throw new Error("coord is required");
                if (!Array.isArray(coord)) {
                    if ("Feature" === coord.type && null !== coord.geometry && "Point" === coord.geometry.type) return [
                        ...coord.geometry.coordinates
                    ];
                    if ("Point" === coord.type) return [
                        ...coord.coordinates
                    ];
                }
                if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) return [
                    ...coord
                ];
                throw new Error("coord must be GeoJSON Point or an Array of numbers");
            }
            function getGeom(geojson) {
                if ("Feature" === geojson.type) return geojson.geometry;
                return geojson;
            }
            function booleanPointInPolygon(point, polygon, options = {}) {
                if (!point) throw new Error("point is required");
                if (!polygon) throw new Error("polygon is required");
                const pt = getCoord(point);
                const geom = getGeom(polygon);
                const type = geom.type;
                const bbox = polygon.bbox;
                let polys = geom.coordinates;
                if (bbox && false === inBBox(pt, bbox)) return false;
                if ("Polygon" === type) polys = [
                    polys
                ];
                let result = false;
                for(var i = 0; i < polys.length; ++i){
                    const polyResult = pointInPolygon(pt, polys[i]);
                    if (0 === polyResult) return !options.ignoreBoundary;
                    if (polyResult) result = true;
                }
                return result;
            }
            function inBBox(pt, bbox) {
                return bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1];
            }
            function geojsonPolygonSelfIntersections(feature, filterFn, useSpatialIndex) {
                if ("Polygon" !== feature.geometry.type) throw new Error("The input feature must be a Polygon");
                if (void 0 === useSpatialIndex) useSpatialIndex = 1;
                var coord = feature.geometry.coordinates;
                var output = [];
                var seen = {};
                if (useSpatialIndex) {
                    var allEdgesAsRbushTreeItems = [];
                    for(var ring0 = 0; ring0 < coord.length; ring0++)for(var edge0 = 0; edge0 < coord[ring0].length - 1; edge0++)allEdgesAsRbushTreeItems.push(rbushTreeItem(ring0, edge0));
                    var tree = new rbush_min();
                    tree.load(allEdgesAsRbushTreeItems);
                }
                for(var ringA = 0; ringA < coord.length; ringA++)for(var edgeA = 0; edgeA < coord[ringA].length - 1; edgeA++)if (useSpatialIndex) {
                    var bboxOverlaps = tree.search(rbushTreeItem(ringA, edgeA));
                    bboxOverlaps.forEach(function(bboxIsect) {
                        var ring12 = bboxIsect.ring;
                        var edge12 = bboxIsect.edge;
                        ifIsectAddToOutput(ringA, edgeA, ring12, edge12);
                    });
                } else for(var ring1 = 0; ring1 < coord.length; ring1++)for(var edge1 = 0; edge1 < coord[ring1].length - 1; edge1++)ifIsectAddToOutput(ringA, edgeA, ring1, edge1);
                if (!filterFn) output = {
                    type: "Feature",
                    geometry: {
                        type: "MultiPoint",
                        coordinates: output
                    }
                };
                return output;
                function ifIsectAddToOutput(ring02, edge02, ring12, edge12) {
                    var start0 = coord[ring02][edge02];
                    var end0 = coord[ring02][edge02 + 1];
                    var start1 = coord[ring12][edge12];
                    var end1 = coord[ring12][edge12 + 1];
                    var isect = intersect(start0, end0, start1, end1);
                    if (null === isect) return;
                    var frac0;
                    var frac1;
                    frac0 = end0[0] !== start0[0] ? (isect[0] - start0[0]) / (end0[0] - start0[0]) : (isect[1] - start0[1]) / (end0[1] - start0[1]);
                    frac1 = end1[0] !== start1[0] ? (isect[0] - start1[0]) / (end1[0] - start1[0]) : (isect[1] - start1[1]) / (end1[1] - start1[1]);
                    if (frac0 >= 1 || frac0 <= 0 || frac1 >= 1 || frac1 <= 0) return;
                    var key = isect;
                    var unique = !seen[key];
                    if (unique) seen[key] = true;
                    if (filterFn) output.push(filterFn(isect, ring02, edge02, start0, end0, frac0, ring12, edge12, start1, end1, frac1, unique));
                    else output.push(isect);
                }
                function rbushTreeItem(ring, edge) {
                    var start = coord[ring][edge];
                    var end = coord[ring][edge + 1];
                    var minX;
                    var maxX;
                    var minY;
                    var maxY;
                    if (start[0] < end[0]) {
                        minX = start[0];
                        maxX = end[0];
                    } else {
                        minX = end[0];
                        maxX = start[0];
                    }
                    if (start[1] < end[1]) {
                        minY = start[1];
                        maxY = end[1];
                    } else {
                        minY = end[1];
                        maxY = start[1];
                    }
                    return {
                        minX,
                        minY,
                        maxX,
                        maxY,
                        ring,
                        edge
                    };
                }
            }
            function intersect(start0, end0, start1, end1) {
                if (equalArrays(start0, start1) || equalArrays(start0, end1) || equalArrays(end0, start1) || equalArrays(end1, start1)) return null;
                var x0 = start0[0], y0 = start0[1], x1 = end0[0], y1 = end0[1], x2 = start1[0], y2 = start1[1], x3 = end1[0], y3 = end1[1];
                var denom = (x0 - x1) * (y2 - y3) - (y0 - y1) * (x2 - x3);
                if (0 === denom) return null;
                var x4 = ((x0 * y1 - y0 * x1) * (x2 - x3) - (x0 - x1) * (x2 * y3 - y2 * x3)) / denom;
                var y4 = ((x0 * y1 - y0 * x1) * (y2 - y3) - (y0 - y1) * (x2 * y3 - y2 * x3)) / denom;
                return [
                    x4,
                    y4
                ];
            }
            function equalArrays(array1, array2) {
                if (!array1 || !array2) return false;
                if (array1.length !== array2.length) return false;
                for(var i = 0, l = array1.length; i < l; i++)if (array1[i] instanceof Array && array2[i] instanceof Array) {
                    if (!equalArrays(array1[i], array2[i])) return false;
                } else if (array1[i] !== array2[i]) return false;
                return true;
            }
            function simplepolygon(feature) {
                if ("Feature" != feature.type) throw new Error("The input must a geojson object of type Feature");
                if (void 0 === feature.geometry || null == feature.geometry) throw new Error("The input must a geojson object with a non-empty geometry");
                if ("Polygon" != feature.geometry.type) throw new Error("The input must be a geojson Polygon");
                var numRings = feature.geometry.coordinates.length;
                var vertices = [];
                for(var i = 0; i < numRings; i++){
                    var ring = feature.geometry.coordinates[i];
                    if (!equalArrays2(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
                    for(var j = 0; j < ring.length - 1; j++)vertices.push(ring[j]);
                }
                if (!isUnique(vertices)) throw new Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");
                var numvertices = vertices.length;
                var selfIsectsData = geojsonPolygonSelfIntersections(feature, function(isect, ring0, edge0, start0, end0, frac0, ring1, edge1, start1, end1, frac1, unique) {
                    return [
                        isect,
                        ring0,
                        edge0,
                        start0,
                        end0,
                        frac0,
                        ring1,
                        edge1,
                        start1,
                        end1,
                        frac1,
                        unique
                    ];
                });
                var numSelfIsect = selfIsectsData.length;
                if (0 == numSelfIsect) {
                    var outputFeatureArray = [];
                    for(var i = 0; i < numRings; i++)outputFeatureArray.push(esm_polygon([
                        feature.geometry.coordinates[i]
                    ], {
                        parent: -1,
                        winding: windingOfRing(feature.geometry.coordinates[i])
                    }));
                    var output = esm_featureCollection(outputFeatureArray);
                    determineParents();
                    setNetWinding();
                    return output;
                }
                var pseudoVtxListByRingAndEdge = [];
                var isectList = [];
                for(var i = 0; i < numRings; i++){
                    pseudoVtxListByRingAndEdge.push([]);
                    for(var j = 0; j < feature.geometry.coordinates[i].length - 1; j++){
                        pseudoVtxListByRingAndEdge[i].push([
                            new PseudoVtx(feature.geometry.coordinates[i][modulo(j + 1, feature.geometry.coordinates[i].length - 1)], 1, [
                                i,
                                j
                            ], [
                                i,
                                modulo(j + 1, feature.geometry.coordinates[i].length - 1)
                            ], void 0)
                        ]);
                        isectList.push(new Isect(feature.geometry.coordinates[i][j], [
                            i,
                            modulo(j - 1, feature.geometry.coordinates[i].length - 1)
                        ], [
                            i,
                            j
                        ], void 0, void 0, false, true));
                    }
                }
                for(var i = 0; i < numSelfIsect; i++){
                    pseudoVtxListByRingAndEdge[selfIsectsData[i][1]][selfIsectsData[i][2]].push(new PseudoVtx(selfIsectsData[i][0], selfIsectsData[i][5], [
                        selfIsectsData[i][1],
                        selfIsectsData[i][2]
                    ], [
                        selfIsectsData[i][6],
                        selfIsectsData[i][7]
                    ], void 0));
                    if (selfIsectsData[i][11]) isectList.push(new Isect(selfIsectsData[i][0], [
                        selfIsectsData[i][1],
                        selfIsectsData[i][2]
                    ], [
                        selfIsectsData[i][6],
                        selfIsectsData[i][7]
                    ], void 0, void 0, true, true));
                }
                var numIsect = isectList.length;
                for(var i = 0; i < pseudoVtxListByRingAndEdge.length; i++)for(var j = 0; j < pseudoVtxListByRingAndEdge[i].length; j++)pseudoVtxListByRingAndEdge[i][j].sort(function(a, b) {
                    return a.param < b.param ? -1 : 1;
                });
                var allIsectsAsIsectRbushTreeItem = [];
                for(var i = 0; i < numIsect; i++)allIsectsAsIsectRbushTreeItem.push({
                    minX: isectList[i].coord[0],
                    minY: isectList[i].coord[1],
                    maxX: isectList[i].coord[0],
                    maxY: isectList[i].coord[1],
                    index: i
                });
                var isectRbushTree = new rbush_min();
                isectRbushTree.load(allIsectsAsIsectRbushTreeItem);
                for(var i = 0; i < pseudoVtxListByRingAndEdge.length; i++)for(var j = 0; j < pseudoVtxListByRingAndEdge[i].length; j++)for(var k = 0; k < pseudoVtxListByRingAndEdge[i][j].length; k++){
                    var coordToFind;
                    coordToFind = k == pseudoVtxListByRingAndEdge[i][j].length - 1 ? pseudoVtxListByRingAndEdge[i][modulo(j + 1, feature.geometry.coordinates[i].length - 1)][0].coord : pseudoVtxListByRingAndEdge[i][j][k + 1].coord;
                    var IsectRbushTreeItemFound = isectRbushTree.search({
                        minX: coordToFind[0],
                        minY: coordToFind[1],
                        maxX: coordToFind[0],
                        maxY: coordToFind[1]
                    })[0];
                    pseudoVtxListByRingAndEdge[i][j][k].nxtIsectAlongEdgeIn = IsectRbushTreeItemFound.index;
                }
                for(var i = 0; i < pseudoVtxListByRingAndEdge.length; i++)for(var j = 0; j < pseudoVtxListByRingAndEdge[i].length; j++)for(var k = 0; k < pseudoVtxListByRingAndEdge[i][j].length; k++){
                    var coordToFind = pseudoVtxListByRingAndEdge[i][j][k].coord;
                    var IsectRbushTreeItemFound = isectRbushTree.search({
                        minX: coordToFind[0],
                        minY: coordToFind[1],
                        maxX: coordToFind[0],
                        maxY: coordToFind[1]
                    })[0];
                    var l = IsectRbushTreeItemFound.index;
                    if (l < numvertices) isectList[l].nxtIsectAlongRingAndEdge2 = pseudoVtxListByRingAndEdge[i][j][k].nxtIsectAlongEdgeIn;
                    else if (equalArrays2(isectList[l].ringAndEdge1, pseudoVtxListByRingAndEdge[i][j][k].ringAndEdgeIn)) isectList[l].nxtIsectAlongRingAndEdge1 = pseudoVtxListByRingAndEdge[i][j][k].nxtIsectAlongEdgeIn;
                    else isectList[l].nxtIsectAlongRingAndEdge2 = pseudoVtxListByRingAndEdge[i][j][k].nxtIsectAlongEdgeIn;
                }
                var queue = [];
                var i = 0;
                for(var j = 0; j < numRings; j++){
                    var leftIsect = i;
                    for(var k = 0; k < feature.geometry.coordinates[j].length - 1; k++){
                        if (isectList[i].coord[0] < isectList[leftIsect].coord[0]) leftIsect = i;
                        i++;
                    }
                    var isectAfterLeftIsect = isectList[leftIsect].nxtIsectAlongRingAndEdge2;
                    for(var k = 0; k < isectList.length; k++)if (isectList[k].nxtIsectAlongRingAndEdge1 == leftIsect || isectList[k].nxtIsectAlongRingAndEdge2 == leftIsect) {
                        var isectBeforeLeftIsect = k;
                        break;
                    }
                    var windingAtIsect = isConvex([
                        isectList[isectBeforeLeftIsect].coord,
                        isectList[leftIsect].coord,
                        isectList[isectAfterLeftIsect].coord
                    ], true) ? 1 : -1;
                    queue.push({
                        isect: leftIsect,
                        parent: -1,
                        winding: windingAtIsect
                    });
                }
                queue.sort(function(a, b) {
                    return isectList[a.isect].coord > isectList[b.isect].coord ? -1 : 1;
                });
                var outputFeatureArray = [];
                while(queue.length > 0){
                    var popped = queue.pop();
                    var startIsect = popped.isect;
                    var currentOutputRingParent = popped.parent;
                    var currentOutputRingWinding = popped.winding;
                    var currentOutputRing = outputFeatureArray.length;
                    var currentOutputRingCoords = [
                        isectList[startIsect].coord
                    ];
                    var currentIsect = startIsect;
                    if (isectList[startIsect].ringAndEdge1Walkable) {
                        var walkingRingAndEdge = isectList[startIsect].ringAndEdge1;
                        var nxtIsect = isectList[startIsect].nxtIsectAlongRingAndEdge1;
                    } else {
                        var walkingRingAndEdge = isectList[startIsect].ringAndEdge2;
                        var nxtIsect = isectList[startIsect].nxtIsectAlongRingAndEdge2;
                    }
                    while(!equalArrays2(isectList[startIsect].coord, isectList[nxtIsect].coord)){
                        currentOutputRingCoords.push(isectList[nxtIsect].coord);
                        var nxtIsectInQueue = void 0;
                        for(var i = 0; i < queue.length; i++)if (queue[i].isect == nxtIsect) {
                            nxtIsectInQueue = i;
                            break;
                        }
                        if (void 0 != nxtIsectInQueue) queue.splice(nxtIsectInQueue, 1);
                        if (equalArrays2(walkingRingAndEdge, isectList[nxtIsect].ringAndEdge1)) {
                            walkingRingAndEdge = isectList[nxtIsect].ringAndEdge2;
                            isectList[nxtIsect].ringAndEdge2Walkable = false;
                            if (isectList[nxtIsect].ringAndEdge1Walkable) {
                                var pushing = {
                                    isect: nxtIsect
                                };
                                if (isConvex([
                                    isectList[currentIsect].coord,
                                    isectList[nxtIsect].coord,
                                    isectList[isectList[nxtIsect].nxtIsectAlongRingAndEdge2].coord
                                ], 1 == currentOutputRingWinding)) {
                                    pushing.parent = currentOutputRingParent;
                                    pushing.winding = -currentOutputRingWinding;
                                } else {
                                    pushing.parent = currentOutputRing;
                                    pushing.winding = currentOutputRingWinding;
                                }
                                queue.push(pushing);
                            }
                            currentIsect = nxtIsect;
                            nxtIsect = isectList[nxtIsect].nxtIsectAlongRingAndEdge2;
                        } else {
                            walkingRingAndEdge = isectList[nxtIsect].ringAndEdge1;
                            isectList[nxtIsect].ringAndEdge1Walkable = false;
                            if (isectList[nxtIsect].ringAndEdge2Walkable) {
                                var pushing = {
                                    isect: nxtIsect
                                };
                                if (isConvex([
                                    isectList[currentIsect].coord,
                                    isectList[nxtIsect].coord,
                                    isectList[isectList[nxtIsect].nxtIsectAlongRingAndEdge1].coord
                                ], 1 == currentOutputRingWinding)) {
                                    pushing.parent = currentOutputRingParent;
                                    pushing.winding = -currentOutputRingWinding;
                                } else {
                                    pushing.parent = currentOutputRing;
                                    pushing.winding = currentOutputRingWinding;
                                }
                                queue.push(pushing);
                            }
                            currentIsect = nxtIsect;
                            nxtIsect = isectList[nxtIsect].nxtIsectAlongRingAndEdge1;
                        }
                    }
                    currentOutputRingCoords.push(isectList[nxtIsect].coord);
                    outputFeatureArray.push(esm_polygon([
                        currentOutputRingCoords
                    ], {
                        index: currentOutputRing,
                        parent: currentOutputRingParent,
                        winding: currentOutputRingWinding,
                        netWinding: void 0
                    }));
                }
                var output = esm_featureCollection(outputFeatureArray);
                determineParents();
                setNetWinding();
                function determineParents() {
                    var featuresWithoutParent = [];
                    for(var i2 = 0; i2 < output.features.length; i2++)if (-1 == output.features[i2].properties.parent) featuresWithoutParent.push(i2);
                    if (featuresWithoutParent.length > 1) for(var i2 = 0; i2 < featuresWithoutParent.length; i2++){
                        var parent = -1;
                        var parentArea = 1 / 0;
                        for(var j2 = 0; j2 < output.features.length; j2++)if (featuresWithoutParent[i2] != j2) {
                            if (booleanPointInPolygon(output.features[featuresWithoutParent[i2]].geometry.coordinates[0][0], output.features[j2], {
                                ignoreBoundary: true
                            })) {
                                if (esm_area(output.features[j2]) < parentArea) parent = j2;
                            }
                        }
                        output.features[featuresWithoutParent[i2]].properties.parent = parent;
                    }
                }
                function setNetWinding() {
                    for(var i2 = 0; i2 < output.features.length; i2++)if (-1 == output.features[i2].properties.parent) {
                        var netWinding = output.features[i2].properties.winding;
                        output.features[i2].properties.netWinding = netWinding;
                        setNetWindingOfChildren(i2, netWinding);
                    }
                }
                function setNetWindingOfChildren(parent, ParentNetWinding) {
                    for(var i2 = 0; i2 < output.features.length; i2++)if (output.features[i2].properties.parent == parent) {
                        var netWinding = ParentNetWinding + output.features[i2].properties.winding;
                        output.features[i2].properties.netWinding = netWinding;
                        setNetWindingOfChildren(i2, netWinding);
                    }
                }
                return output;
            }
            var PseudoVtx = function(coord, param, ringAndEdgeIn, ringAndEdgeOut, nxtIsectAlongEdgeIn) {
                this.coord = coord;
                this.param = param;
                this.ringAndEdgeIn = ringAndEdgeIn;
                this.ringAndEdgeOut = ringAndEdgeOut;
                this.nxtIsectAlongEdgeIn = nxtIsectAlongEdgeIn;
            };
            var Isect = function(coord, ringAndEdge1, ringAndEdge2, nxtIsectAlongRingAndEdge1, nxtIsectAlongRingAndEdge2, ringAndEdge1Walkable, ringAndEdge2Walkable) {
                this.coord = coord;
                this.ringAndEdge1 = ringAndEdge1;
                this.ringAndEdge2 = ringAndEdge2;
                this.nxtIsectAlongRingAndEdge1 = nxtIsectAlongRingAndEdge1;
                this.nxtIsectAlongRingAndEdge2 = nxtIsectAlongRingAndEdge2;
                this.ringAndEdge1Walkable = ringAndEdge1Walkable;
                this.ringAndEdge2Walkable = ringAndEdge2Walkable;
            };
            function isConvex(pts, righthanded) {
                if (void 0 === righthanded) righthanded = true;
                if (3 != pts.length) throw new Error("This function requires an array of three points [x,y]");
                var d = (pts[1][0] - pts[0][0]) * (pts[2][1] - pts[0][1]) - (pts[1][1] - pts[0][1]) * (pts[2][0] - pts[0][0]);
                return d >= 0 == righthanded;
            }
            function windingOfRing(ring) {
                var leftVtx = 0;
                for(var i = 0; i < ring.length - 1; i++)if (ring[i][0] < ring[leftVtx][0]) leftVtx = i;
                if (isConvex([
                    ring[modulo(leftVtx - 1, ring.length - 1)],
                    ring[leftVtx],
                    ring[modulo(leftVtx + 1, ring.length - 1)]
                ], true)) var winding = 1;
                else var winding = -1;
                return winding;
            }
            function equalArrays2(array1, array2) {
                if (!array1 || !array2) return false;
                if (array1.length != array2.length) return false;
                for(var i = 0, l = array1.length; i < l; i++)if (array1[i] instanceof Array && array2[i] instanceof Array) {
                    if (!equalArrays2(array1[i], array2[i])) return false;
                } else if (array1[i] != array2[i]) return false;
                return true;
            }
            function modulo(n, m) {
                return (n % m + m) % m;
            }
            function isUnique(array) {
                var u = {};
                var isUnique2 = 1;
                for(var i = 0, l = array.length; i < l; ++i){
                    if (Object.prototype.hasOwnProperty.call(u, array[i])) {
                        isUnique2 = 0;
                        break;
                    }
                    u[array[i]] = 1;
                }
                return isUnique2;
            }
            function unkinkPolygon(geojson) {
                var features = [];
                flattenEach(geojson, function(feature) {
                    if ("Polygon" !== feature.geometry.type) return;
                    featureEach(simplepolygon(feature), function(poly) {
                        features.push(esm_polygon(poly.geometry.coordinates, feature.properties));
                    });
                });
                return esm_featureCollection(features);
            }
            var turf_unkink_polygon_default = unkinkPolygon;
            function randomPositionUnchecked(bbox) {
                if (Array.isArray(bbox)) return coordInBBox(bbox);
                if (bbox && bbox.bbox) return coordInBBox(bbox.bbox);
                return [
                    lon(),
                    lat()
                ];
            }
            function checkBBox(bbox) {
                if (null == bbox) return;
                if (Array.isArray(bbox)) validateBBox(bbox);
                else if (null != bbox.bbox) validateBBox(bbox.bbox);
            }
            function randomPoint(count, options = {}) {
                checkBBox(options.bbox);
                if (null == count) count = 1;
                const features = [];
                for(let i = 0; i < count; i++)features.push(esm_point(randomPositionUnchecked(options.bbox)));
                return esm_featureCollection(features);
            }
            function rnd() {
                return Math.random() - 0.5;
            }
            function lon() {
                return 360 * rnd();
            }
            function lat() {
                return 180 * rnd();
            }
            function coordInBBox(bbox) {
                return [
                    Math.random() * (bbox[2] - bbox[0]) + bbox[0],
                    Math.random() * (bbox[3] - bbox[1]) + bbox[1]
                ];
            }
            function esm_bbox(geojson, options = {}) {
                if (null != geojson.bbox && true !== options.recompute) return geojson.bbox;
                const result = [
                    1 / 0,
                    1 / 0,
                    -1 / 0,
                    -1 / 0
                ];
                coordEach(geojson, (coord)=>{
                    if (result[0] > coord[0]) result[0] = coord[0];
                    if (result[1] > coord[1]) result[1] = coord[1];
                    if (result[2] < coord[0]) result[2] = coord[0];
                    if (result[3] < coord[1]) result[3] = coord[1];
                });
                return result;
            }
            function pointsWithinPolygon(points, polygons) {
                const results = [];
                featureEach(points, function(point) {
                    let contained = false;
                    if ("Point" === point.geometry.type) {
                        geomEach(polygons, function(polygon) {
                            if (booleanPointInPolygon(point, polygon)) contained = true;
                        });
                        if (contained) results.push(point);
                    } else if ("MultiPoint" === point.geometry.type) {
                        var pointsWithin = [];
                        geomEach(polygons, function(polygon) {
                            coordEach(point, function(pointCoord) {
                                if (booleanPointInPolygon(pointCoord, polygon)) {
                                    contained = true;
                                    pointsWithin.push(pointCoord);
                                }
                            });
                        });
                        if (contained) results.push(multiPoint(pointsWithin, point.properties));
                    } else throw new Error("Input geometry must be a Point or MultiPoint");
                });
                return esm_featureCollection(results);
            }
            var turf_points_within_polygon_default = pointsWithinPolygon;
            const turf = {
                randomPoint: randomPoint,
                unkinkPolygon: turf_unkink_polygon_default,
                bbox: esm_bbox,
                pointsWithinPolygon: turf_points_within_polygon_default,
                featureCollection: esm_featureCollection
            };
            const src_turf = turf;
            const DEFAULT_NUMBER = 10;
            const randomPoints = (n, bbox)=>{
                const count = n || DEFAULT_NUMBER;
                return src_turf.randomPoint(count, {
                    bbox
                });
            };
            const randomPointsFromGeoJSON = (input, { features, unkink })=>{
                let fc;
                fc = unkink ? src_turf.unkinkPolygon(features) : features;
                const ori = input || DEFAULT_NUMBER;
                const randomFeatures = [];
                const bbox = src_turf.bbox(fc);
                let n = ori;
                let flag = false;
                let joker = 0;
                while(!flag){
                    const thePoints = src_turf.randomPoint(n, {
                        bbox
                    });
                    joker += 1;
                    const ptsWithin = src_turf.pointsWithinPolygon(thePoints, fc);
                    for(let i = 0; i < ptsWithin.features.length; i += 1){
                        const feature = ptsWithin.features[i];
                        if (void 0 !== feature && 'Point' === feature.geometry.type) randomFeatures.push(feature);
                    }
                    if (randomFeatures.length < ori) n = ori - randomFeatures.length;
                    else flag = true;
                    if (joker > 10000 * ori) throw new Error('Your are not lucky. Ending without reaching expected number of Points with input polygon(s)');
                }
                return src_turf.featureCollection(randomFeatures);
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
        })();
        return __webpack_exports__;
    })());

//# sourceMappingURL=random-points.umd.js.map