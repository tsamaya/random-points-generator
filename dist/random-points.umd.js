(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define("geotools", [], factory);
    else if ('object' == typeof exports) exports["geotools"] = factory();
    else root["geotools"] = factory();
})(this, ()=>(()=>{
        var __webpack_modules__ = {
            "./node_modules/.pnpm/@turf+jsts@2.7.2/node_modules/@turf/jsts/dist/jsts.min.js": function(module1) {
                !function(t, e) {
                    module1.exports = e();
                }(0, function() {
                    "use strict";
                    function t(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for(var n = 0, i = Array(e); n < e; n++)i[n] = t[n];
                        return i;
                    }
                    function e(t, e, n) {
                        return e = u(e), function(t, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            }(t);
                        }(t, h() ? Reflect.construct(e, n || [], u(t).constructor) : e.apply(t, n));
                    }
                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }
                    function i(t, e, n) {
                        if (h()) return Reflect.construct.apply(null, arguments);
                        var i = [
                            null
                        ];
                        i.push.apply(i, e);
                        var r = new (t.bind.apply(t, i));
                        return n && c(r, n.prototype), r;
                    }
                    function r(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, v(i.key), i);
                        }
                    }
                    function s(t, e, n) {
                        return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t;
                    }
                    function a(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = y(t)) || e) {
                                n && (t = n);
                                var i = 0, r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        };
                                    },
                                    e: function(t) {
                                        throw t;
                                    },
                                    f: r
                                };
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var s, a = !0, o = !1;
                        return {
                            s: function() {
                                n = n.call(t);
                            },
                            n: function() {
                                var t = n.next();
                                return a = t.done, t;
                            },
                            e: function(t) {
                                o = !0, s = t;
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return();
                                } finally{
                                    if (o) throw s;
                                }
                            }
                        };
                    }
                    function o() {
                        return o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                            var i = function(t, e) {
                                for(; !({}).hasOwnProperty.call(t, e) && null !== (t = u(t)););
                                return t;
                            }(t, e);
                            if (i) {
                                var r = Object.getOwnPropertyDescriptor(i, e);
                                return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value;
                            }
                        }, o.apply(null, arguments);
                    }
                    function u(t) {
                        return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t);
                        }, u(t);
                    }
                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && c(t, e);
                    }
                    function h() {
                        try {
                            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                        } catch (t) {}
                        return (h = function() {
                            return !!t;
                        })();
                    }
                    function c(t, e) {
                        return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                            return t.__proto__ = e, t;
                        }, c(t, e);
                    }
                    function f(t, e, n, i) {
                        var r = o(u(1 & i ? t.prototype : t), e, n);
                        return 2 & i && "function" == typeof r ? function(t) {
                            return r.apply(n, t);
                        } : r;
                    }
                    function g(e) {
                        return function(e) {
                            if (Array.isArray(e)) return t(e);
                        }(e) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                        }(e) || y(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function v(t) {
                        var e = function(t, e) {
                            if ("object" != typeof t || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(t, e);
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(t);
                        }(t, "string");
                        return "symbol" == typeof e ? e : e + "";
                    }
                    function y(e, n) {
                        if (e) {
                            if ("string" == typeof e) return t(e, n);
                            var i = ({}).toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0;
                        }
                    }
                    function d(t) {
                        var e = "function" == typeof Map ? new Map : void 0;
                        return d = function(t) {
                            if (null === t || !function(t) {
                                try {
                                    return -1 !== Function.toString.call(t).indexOf("[native code]");
                                } catch (e) {
                                    return "function" == typeof t;
                                }
                            }(t)) return t;
                            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return i(t, arguments, u(this).constructor);
                            }
                            return n.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), c(n, t);
                        }, d(t);
                    }
                    var _ = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getEndCapStyle",
                                value: function() {
                                    return this._endCapStyle;
                                }
                            },
                            {
                                key: "isSingleSided",
                                value: function() {
                                    return this._isSingleSided;
                                }
                            },
                            {
                                key: "setQuadrantSegments",
                                value: function(e) {
                                    this._quadrantSegments = e, 0 === this._quadrantSegments && (this._joinStyle = t.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = t.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), e <= 0 && (this._quadrantSegments = 1), this._joinStyle !== t.JOIN_ROUND && (this._quadrantSegments = t.DEFAULT_QUADRANT_SEGMENTS);
                                }
                            },
                            {
                                key: "getJoinStyle",
                                value: function() {
                                    return this._joinStyle;
                                }
                            },
                            {
                                key: "setJoinStyle",
                                value: function(t) {
                                    this._joinStyle = t;
                                }
                            },
                            {
                                key: "setSimplifyFactor",
                                value: function(t) {
                                    this._simplifyFactor = t < 0 ? 0 : t;
                                }
                            },
                            {
                                key: "getSimplifyFactor",
                                value: function() {
                                    return this._simplifyFactor;
                                }
                            },
                            {
                                key: "getQuadrantSegments",
                                value: function() {
                                    return this._quadrantSegments;
                                }
                            },
                            {
                                key: "setEndCapStyle",
                                value: function(t) {
                                    this._endCapStyle = t;
                                }
                            },
                            {
                                key: "getMitreLimit",
                                value: function() {
                                    return this._mitreLimit;
                                }
                            },
                            {
                                key: "setMitreLimit",
                                value: function(t) {
                                    this._mitreLimit = t;
                                }
                            },
                            {
                                key: "setSingleSided",
                                value: function(t) {
                                    this._isSingleSided = t;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._quadrantSegments = t.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = t.CAP_ROUND, this._joinStyle = t.JOIN_ROUND, this._mitreLimit = t.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = t.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        this.setQuadrantSegments(e);
                                    } else if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        this.setQuadrantSegments(n), this.setEndCapStyle(i);
                                    } else if (4 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2], o = arguments[3];
                                        this.setQuadrantSegments(r), this.setEndCapStyle(s), this.setJoinStyle(a), this.setMitreLimit(o);
                                    }
                                }
                            },
                            {
                                key: "bufferDistanceError",
                                value: function(t) {
                                    var e = Math.PI / 2 / t;
                                    return 1 - Math.cos(e / 2);
                                }
                            }
                        ]);
                    }();
                    _.CAP_ROUND = 1, _.CAP_FLAT = 2, _.CAP_SQUARE = 3, _.JOIN_ROUND = 1, _.JOIN_MITRE = 2, _.JOIN_BEVEL = 3, _.DEFAULT_QUADRANT_SEGMENTS = 8, _.DEFAULT_MITRE_LIMIT = 5, _.DEFAULT_SIMPLIFY_FACTOR = .01;
                    var p = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                Exception: i
                            })[0], r;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "toString",
                                value: function() {
                                    return this.message;
                                }
                            }
                        ]);
                    }(d(Error)), m = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                IllegalArgumentException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), k = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "filter",
                                value: function(t) {}
                            }
                        ]);
                    }();
                    function x() {}
                    function I() {}
                    function E() {}
                    var N, T, S, L, C, R, w, O, b = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "equalsWithTolerance",
                                value: function(t, e, n) {
                                    return Math.abs(t - e) <= n;
                                }
                            }
                        ]);
                    }(), M = function() {
                        return s(function t(e, i) {
                            n(this, t), this.low = i || 0, this.high = e || 0;
                        }, null, [
                            {
                                key: "toBinaryString",
                                value: function(t) {
                                    var e, n = "";
                                    for(e = 2147483648; e > 0; e >>>= 1)n += (t.high & e) === e ? "1" : "0";
                                    for(e = 2147483648; e > 0; e >>>= 1)n += (t.low & e) === e ? "1" : "0";
                                    return n;
                                }
                            }
                        ]);
                    }();
                    function A() {}
                    function P() {}
                    A.NaN = NaN, A.isNaN = function(t) {
                        return Number.isNaN(t);
                    }, A.isInfinite = function(t) {
                        return !Number.isFinite(t);
                    }, A.MAX_VALUE = Number.MAX_VALUE, A.POSITIVE_INFINITY = 1 / 0, A.NEGATIVE_INFINITY = -1 / 0, "function" == typeof Float64Array && "function" == typeof Int32Array ? (R = 2146435072, w = new Float64Array(1), O = new Int32Array(w.buffer), A.doubleToLongBits = function(t) {
                        w[0] = t;
                        var e = 0 | O[0], n = 0 | O[1];
                        return (n & R) === R && 1048575 & n && 0 !== e && (e = 0, n = 2146959360), new M(n, e);
                    }, A.longBitsToDouble = function(t) {
                        return O[0] = t.low, O[1] = t.high, w[0];
                    }) : (N = 1023, T = Math.log2, S = Math.floor, L = Math.pow, C = function() {
                        for(var t = 53; t > 0; t--){
                            var e = L(2, t) - 1;
                            if (S(T(e)) + 1 === t) return e;
                        }
                        return 0;
                    }(), A.doubleToLongBits = function(t) {
                        var e, n, i, r, s, a, o, u, l;
                        if (t < 0 || 1 / t === -1 / 0 ? (a = -2147483648, t = -t) : a = 0, 0 === t) return new M(u = a, l = 0);
                        if (t === 1 / 0) return new M(u = 2146435072 | a, l = 0);
                        if (t != t) return new M(u = 2146959360, l = 0);
                        if (r = 0, l = 0, (e = S(t)) > 1) if (e <= C) (r = S(T(e))) <= 20 ? (l = 0, u = e << 20 - r & 1048575) : (l = e % (n = L(2, i = r - 20)) << 32 - i, u = e / n & 1048575);
                        else for(i = e, l = 0; 0 !== (i = S(n = i / 2));)r++, l >>>= 1, l |= (1 & u) << 31, u >>>= 1, n !== i && (u |= 524288);
                        if (o = r + N, s = 0 === e, e = t - e, r < 52 && 0 !== e) for(i = 0;;){
                            if ((n = 2 * e) >= 1 ? (e = n - 1, s ? (o--, s = !1) : (i <<= 1, i |= 1, r++)) : (e = n, s ? 0 == --o && (r++, s = !1) : (i <<= 1, r++)), 20 === r) u |= i, i = 0;
                            else if (52 === r) {
                                l |= i;
                                break;
                            }
                            if (1 === n) {
                                r < 20 ? u |= i << 20 - r : r < 52 && (l |= i << 52 - r);
                                break;
                            }
                        }
                        return u |= o << 20, new M(u |= a, l);
                    }, A.longBitsToDouble = function(t) {
                        var e, n, i, r, s = t.high, a = t.low, o = -2147483648 & s ? -1 : 1;
                        for(i = ((2146435072 & s) >> 20) - N, r = 0, n = 524288, e = 1; e <= 20; e++)s & n && (r += L(2, -e)), n >>>= 1;
                        for(n = -2147483648, e = 21; e <= 52; e++)a & n && (r += L(2, -e)), n >>>= 1;
                        if (-1023 === i) {
                            if (0 === r) return 0 * o;
                            i = -1022;
                        } else {
                            if (1024 === i) return 0 === r ? o / 0 : NaN;
                            r += 1;
                        }
                        return o * r * L(2, i);
                    });
                    var D = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                RuntimeException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), F = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, null, [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (0 === arguments.length) D.constructor_.call(this);
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        D.constructor_.call(this, t);
                                    }
                                }
                            }
                        ]);
                    }(D), G = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "shouldNeverReachHere",
                                value: function() {
                                    if (0 === arguments.length) t.shouldNeverReachHere(null);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        throw new F("Should never reach here" + (null !== e ? ": " + e : ""));
                                    }
                                }
                            },
                            {
                                key: "isTrue",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var e = arguments[0];
                                        t.isTrue(e, null);
                                    } else if (2 === arguments.length) {
                                        var n = arguments[1];
                                        if (!arguments[0]) throw null === n ? new F : new F(n);
                                    }
                                }
                            },
                            {
                                key: "equals",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        t.equals(e, n, null);
                                    } else if (3 === arguments.length) {
                                        var i = arguments[0], r = arguments[1], s = arguments[2];
                                        if (!r.equals(i)) throw new F("Expected " + i + " but encountered " + r + (null !== s ? ": " + s : ""));
                                    }
                                }
                            }
                        ]);
                    }(), q = new ArrayBuffer(8), Y = new Float64Array(q), z = new Int32Array(q), X = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getM",
                                value: function() {
                                    return A.NaN;
                                }
                            },
                            {
                                key: "setOrdinate",
                                value: function(e, n) {
                                    switch(e){
                                        case t.X:
                                            this.x = n;
                                            break;
                                        case t.Y:
                                            this.y = n;
                                            break;
                                        case t.Z:
                                            this.setZ(n);
                                            break;
                                        default:
                                            throw new m("Invalid ordinate index: " + e);
                                    }
                                }
                            },
                            {
                                key: "equals2D",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.x === t.x && this.y === t.y;
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        return !!b.equalsWithTolerance(this.x, e.x, n) && !!b.equalsWithTolerance(this.y, e.y, n);
                                    }
                                }
                            },
                            {
                                key: "setM",
                                value: function(e) {
                                    throw new m("Invalid ordinate index: " + t.M);
                                }
                            },
                            {
                                key: "getZ",
                                value: function() {
                                    return this.z;
                                }
                            },
                            {
                                key: "getOrdinate",
                                value: function(e) {
                                    switch(e){
                                        case t.X:
                                            return this.x;
                                        case t.Y:
                                            return this.y;
                                        case t.Z:
                                            return this.getZ();
                                    }
                                    throw new m("Invalid ordinate index: " + e);
                                }
                            },
                            {
                                key: "equals3D",
                                value: function(t) {
                                    return this.x === t.x && this.y === t.y && (this.getZ() === t.getZ() || A.isNaN(this.getZ()) && A.isNaN(t.getZ()));
                                }
                            },
                            {
                                key: "equals",
                                value: function(e) {
                                    return e instanceof t && this.equals2D(e);
                                }
                            },
                            {
                                key: "equalInZ",
                                value: function(t, e) {
                                    return b.equalsWithTolerance(this.getZ(), t.getZ(), e);
                                }
                            },
                            {
                                key: "setX",
                                value: function(t) {
                                    this.x = t;
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
                                }
                            },
                            {
                                key: "getX",
                                value: function() {
                                    return this.x;
                                }
                            },
                            {
                                key: "setZ",
                                value: function(t) {
                                    this.z = t;
                                }
                            },
                            {
                                key: "clone",
                                value: function() {
                                    try {
                                        return null;
                                    } catch (t) {
                                        if (t instanceof CloneNotSupportedException) return G.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
                                        throw t;
                                    }
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    return new t(this);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
                                }
                            },
                            {
                                key: "distance3D",
                                value: function(t) {
                                    var e = this.x - t.x, n = this.y - t.y, i = this.getZ() - t.getZ();
                                    return Math.sqrt(e * e + n * n + i * i);
                                }
                            },
                            {
                                key: "getY",
                                value: function() {
                                    return this.y;
                                }
                            },
                            {
                                key: "setY",
                                value: function(t) {
                                    this.y = t;
                                }
                            },
                            {
                                key: "distance",
                                value: function(t) {
                                    var e = this.x - t.x, n = this.y - t.y;
                                    return Math.sqrt(e * e + n * n);
                                }
                            },
                            {
                                key: "hashCode",
                                value: function() {
                                    var e = 17;
                                    return 37 * (e = 37 * e + t.hashCode(this.x)) + t.hashCode(this.y);
                                }
                            },
                            {
                                key: "setCoordinate",
                                value: function(t) {
                                    this.x = t.x, this.y = t.y, this.z = t.getZ();
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x,
                                        I,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.x = null, this.y = null, this.z = null, 0 === arguments.length) t.constructor_.call(this, 0, 0);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        t.constructor_.call(this, e.x, e.y, e.getZ());
                                    } else if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        t.constructor_.call(this, n, i, t.NULL_ORDINATE);
                                    } else if (3 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2];
                                        this.x = r, this.y = s, this.z = a;
                                    }
                                }
                            },
                            {
                                key: "hashCode",
                                value: function(t) {
                                    return Y[0] = t, z[0] ^ z[1];
                                }
                            }
                        ]);
                    }(), B = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "compare",
                                value: function(e, n) {
                                    var i = t.compare(e.x, n.x);
                                    if (0 !== i) return i;
                                    var r = t.compare(e.y, n.y);
                                    return 0 !== r ? r : this._dimensionsToTest <= 2 ? 0 : t.compare(e.getZ(), n.getZ());
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        P
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._dimensionsToTest = 2, 0 === arguments.length) t.constructor_.call(this, 2);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        if (2 !== e && 3 !== e) throw new m("only 2 or 3 dimensions may be specified");
                                        this._dimensionsToTest = e;
                                    }
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    return t < e ? -1 : t > e ? 1 : A.isNaN(t) ? A.isNaN(e) ? 0 : -1 : A.isNaN(e) ? 1 : 0;
                                }
                            }
                        ]);
                    }();
                    X.DimensionalComparator = B, X.NULL_ORDINATE = A.NaN, X.X = 0, X.Y = 1, X.Z = 2, X.M = 3;
                    var U = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getArea",
                                value: function() {
                                    return this.getWidth() * this.getHeight();
                                }
                            },
                            {
                                key: "equals",
                                value: function(e) {
                                    if (!(e instanceof t)) return !1;
                                    var n = e;
                                    return this.isNull() ? n.isNull() : this._maxx === n.getMaxX() && this._maxy === n.getMaxY() && this._minx === n.getMinX() && this._miny === n.getMinY();
                                }
                            },
                            {
                                key: "intersection",
                                value: function(e) {
                                    if (this.isNull() || e.isNull() || !this.intersects(e)) return new t;
                                    var n = this._minx > e._minx ? this._minx : e._minx, i = this._miny > e._miny ? this._miny : e._miny;
                                    return new t(n, this._maxx < e._maxx ? this._maxx : e._maxx, i, this._maxy < e._maxy ? this._maxy : e._maxy);
                                }
                            },
                            {
                                key: "isNull",
                                value: function() {
                                    return this._maxx < this._minx;
                                }
                            },
                            {
                                key: "getMaxX",
                                value: function() {
                                    return this._maxx;
                                }
                            },
                            {
                                key: "covers",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            return this.covers(e.x, e.y);
                                        }
                                        if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            return !this.isNull() && !n.isNull() && n.getMinX() >= this._minx && n.getMaxX() <= this._maxx && n.getMinY() >= this._miny && n.getMaxY() <= this._maxy;
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        return !this.isNull() && i >= this._minx && i <= this._maxx && r >= this._miny && r <= this._maxy;
                                    }
                                }
                            },
                            {
                                key: "intersects",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof t) {
                                            var e = arguments[0];
                                            return !this.isNull() && !e.isNull() && !(e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny);
                                        }
                                        if (arguments[0] instanceof X) {
                                            var n = arguments[0];
                                            return this.intersects(n.x, n.y);
                                        }
                                    } else if (2 === arguments.length) {
                                        if (arguments[0] instanceof X && arguments[1] instanceof X) {
                                            var i = arguments[0], r = arguments[1];
                                            return !this.isNull() && !((i.x < r.x ? i.x : r.x) > this._maxx) && !((i.x > r.x ? i.x : r.x) < this._minx) && !((i.y < r.y ? i.y : r.y) > this._maxy) && !((i.y > r.y ? i.y : r.y) < this._miny);
                                        }
                                        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                            var s = arguments[0], a = arguments[1];
                                            return !this.isNull() && !(s > this._maxx || s < this._minx || a > this._maxy || a < this._miny);
                                        }
                                    }
                                }
                            },
                            {
                                key: "getMinY",
                                value: function() {
                                    return this._miny;
                                }
                            },
                            {
                                key: "getDiameter",
                                value: function() {
                                    if (this.isNull()) return 0;
                                    var t = this.getWidth(), e = this.getHeight();
                                    return Math.sqrt(t * t + e * e);
                                }
                            },
                            {
                                key: "getMinX",
                                value: function() {
                                    return this._minx;
                                }
                            },
                            {
                                key: "expandToInclude",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            this.expandToInclude(e.x, e.y);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            if (n.isNull()) return null;
                                            this.isNull() ? (this._minx = n.getMinX(), this._maxx = n.getMaxX(), this._miny = n.getMinY(), this._maxy = n.getMaxY()) : (n._minx < this._minx && (this._minx = n._minx), n._maxx > this._maxx && (this._maxx = n._maxx), n._miny < this._miny && (this._miny = n._miny), n._maxy > this._maxy && (this._maxy = n._maxy));
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this.isNull() ? (this._minx = i, this._maxx = i, this._miny = r, this._maxy = r) : (i < this._minx && (this._minx = i), i > this._maxx && (this._maxx = i), r < this._miny && (this._miny = r), r > this._maxy && (this._maxy = r));
                                    }
                                }
                            },
                            {
                                key: "minExtent",
                                value: function() {
                                    if (this.isNull()) return 0;
                                    var t = this.getWidth(), e = this.getHeight();
                                    return t < e ? t : e;
                                }
                            },
                            {
                                key: "getWidth",
                                value: function() {
                                    return this.isNull() ? 0 : this._maxx - this._minx;
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
                                }
                            },
                            {
                                key: "translate",
                                value: function(t, e) {
                                    if (this.isNull()) return null;
                                    this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    return new t(this);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
                                }
                            },
                            {
                                key: "setToNull",
                                value: function() {
                                    this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
                                }
                            },
                            {
                                key: "disjoint",
                                value: function(t) {
                                    return !(!this.isNull() && !t.isNull()) || t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny;
                                }
                            },
                            {
                                key: "getHeight",
                                value: function() {
                                    return this.isNull() ? 0 : this._maxy - this._miny;
                                }
                            },
                            {
                                key: "maxExtent",
                                value: function() {
                                    if (this.isNull()) return 0;
                                    var t = this.getWidth(), e = this.getHeight();
                                    return t > e ? t : e;
                                }
                            },
                            {
                                key: "expandBy",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.expandBy(t, t);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        if (this.isNull()) return null;
                                        this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
                                    }
                                }
                            },
                            {
                                key: "contains",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof t) {
                                            var e = arguments[0];
                                            return this.covers(e);
                                        }
                                        if (arguments[0] instanceof X) {
                                            var n = arguments[0];
                                            return this.covers(n);
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        return this.covers(i, r);
                                    }
                                }
                            },
                            {
                                key: "centre",
                                value: function() {
                                    return this.isNull() ? null : new X((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
                                }
                            },
                            {
                                key: "init",
                                value: function() {
                                    if (0 === arguments.length) this.setToNull();
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            this.init(e.x, e.x, e.y, e.y);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            this._minx = n._minx, this._maxx = n._maxx, this._miny = n._miny, this._maxy = n._maxy;
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this.init(i.x, r.x, i.y, r.y);
                                    } else if (4 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2], u = arguments[3];
                                        s < a ? (this._minx = s, this._maxx = a) : (this._minx = a, this._maxx = s), o < u ? (this._miny = o, this._maxy = u) : (this._miny = u, this._maxy = o);
                                    }
                                }
                            },
                            {
                                key: "getMaxY",
                                value: function() {
                                    return this._maxy;
                                }
                            },
                            {
                                key: "distance",
                                value: function(t) {
                                    if (this.intersects(t)) return 0;
                                    var e = 0;
                                    this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
                                    var n = 0;
                                    return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n);
                                }
                            },
                            {
                                key: "hashCode",
                                value: function() {
                                    var t = 17;
                                    return 37 * (t = 37 * (t = 37 * (t = 37 * t + X.hashCode(this._minx)) + X.hashCode(this._maxx)) + X.hashCode(this._miny)) + X.hashCode(this._maxy);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, 0 === arguments.length) this.init();
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            this.init(e.x, e.x, e.y, e.y);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            this.init(n);
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this.init(i.x, r.x, i.y, r.y);
                                    } else if (4 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2], u = arguments[3];
                                        this.init(s, a, o, u);
                                    }
                                }
                            },
                            {
                                key: "intersects",
                                value: function() {
                                    if (3 === arguments.length) {
                                        var t = arguments[0], e = arguments[1], n = arguments[2];
                                        return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
                                    }
                                    if (4 === arguments.length) {
                                        var i = arguments[0], r = arguments[1], s = arguments[2], a = arguments[3], o = Math.min(s.x, a.x), u = Math.max(s.x, a.x), l = Math.min(i.x, r.x), h = Math.max(i.x, r.x);
                                        return !(l > u) && !(h < o) && (o = Math.min(s.y, a.y), u = Math.max(s.y, a.y), l = Math.min(i.y, r.y), h = Math.max(i.y, r.y), !(l > u) && !(h < o));
                                    }
                                }
                            }
                        ]);
                    }(), V = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "isGeometryCollection",
                                value: function() {
                                    return this.getTypeCode() === t.TYPECODE_GEOMETRYCOLLECTION;
                                }
                            },
                            {
                                key: "getFactory",
                                value: function() {
                                    return this._factory;
                                }
                            },
                            {
                                key: "getGeometryN",
                                value: function(t) {
                                    return this;
                                }
                            },
                            {
                                key: "getArea",
                                value: function() {
                                    return 0;
                                }
                            },
                            {
                                key: "isRectangle",
                                value: function() {
                                    return !1;
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function(t) {
                                    return this === t || this.equalsExact(t, 0);
                                }
                            },
                            {
                                key: "geometryChanged",
                                value: function() {
                                    this.apply(t.geometryChangedFilter);
                                }
                            },
                            {
                                key: "geometryChangedAction",
                                value: function() {
                                    this._envelope = null;
                                }
                            },
                            {
                                key: "equalsNorm",
                                value: function(t) {
                                    return null !== t && this.norm().equalsExact(t.norm());
                                }
                            },
                            {
                                key: "getLength",
                                value: function() {
                                    return 0;
                                }
                            },
                            {
                                key: "getNumGeometries",
                                value: function() {
                                    return 1;
                                }
                            },
                            {
                                key: "compareTo",
                                value: function() {
                                    var t;
                                    if (1 === arguments.length) {
                                        var e = arguments[0];
                                        return t = e, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(e);
                                    }
                                    if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        return t = n, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(n, i);
                                    }
                                }
                            },
                            {
                                key: "getUserData",
                                value: function() {
                                    return this._userData;
                                }
                            },
                            {
                                key: "getSRID",
                                value: function() {
                                    return this._SRID;
                                }
                            },
                            {
                                key: "getEnvelope",
                                value: function() {
                                    return this.getFactory().toGeometry(this.getEnvelopeInternal());
                                }
                            },
                            {
                                key: "checkNotGeometryCollection",
                                value: function(e) {
                                    if (e.getTypeCode() === t.TYPECODE_GEOMETRYCOLLECTION) throw new m("This method does not support GeometryCollection arguments");
                                }
                            },
                            {
                                key: "equal",
                                value: function(t, e, n) {
                                    return 0 === n ? t.equals(e) : t.distance(e) <= n;
                                }
                            },
                            {
                                key: "norm",
                                value: function() {
                                    var t = this.copy();
                                    return t.normalize(), t;
                                }
                            },
                            {
                                key: "reverse",
                                value: function() {
                                    var t = this.reverseInternal();
                                    return null != this.envelope && (t.envelope = this.envelope.copy()), t.setSRID(this.getSRID()), t;
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    var t = this.copyInternal();
                                    return t.envelope = null == this._envelope ? null : this._envelope.copy(), t._SRID = this._SRID, t._userData = this._userData, t;
                                }
                            },
                            {
                                key: "getPrecisionModel",
                                value: function() {
                                    return this._factory.getPrecisionModel();
                                }
                            },
                            {
                                key: "getEnvelopeInternal",
                                value: function() {
                                    return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()), new U(this._envelope);
                                }
                            },
                            {
                                key: "setSRID",
                                value: function(t) {
                                    this._SRID = t;
                                }
                            },
                            {
                                key: "setUserData",
                                value: function(t) {
                                    this._userData = t;
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    for(var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext();){
                                        var r = n.next(), s = i.next(), a = r.compareTo(s);
                                        if (0 !== a) return a;
                                    }
                                    return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
                                }
                            },
                            {
                                key: "hashCode",
                                value: function() {
                                    return this.getEnvelopeInternal().hashCode();
                                }
                            },
                            {
                                key: "isEquivalentClass",
                                value: function(t) {
                                    return this.getClass() === t.getClass();
                                }
                            },
                            {
                                key: "isGeometryCollectionOrDerived",
                                value: function() {
                                    return this.getTypeCode() === t.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === t.TYPECODE_MULTIPOINT || this.getTypeCode() === t.TYPECODE_MULTILINESTRING || this.getTypeCode() === t.TYPECODE_MULTIPOLYGON;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        I,
                                        x,
                                        E
                                    ];
                                }
                            },
                            {
                                key: "getClass",
                                value: function() {
                                    return t;
                                }
                            }
                        ], [
                            {
                                key: "hasNonEmptyElements",
                                value: function(t) {
                                    for(var e = 0; e < t.length; e++)if (!t[e].isEmpty()) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "hasNullElements",
                                value: function(t) {
                                    for(var e = 0; e < t.length; e++)if (null === t[e]) return !0;
                                    return !1;
                                }
                            }
                        ]);
                    }();
                    V.constructor_ = function(t) {
                        t && (this._envelope = null, this._userData = null, this._factory = t, this._SRID = t.getSRID());
                    }, V.TYPECODE_POINT = 0, V.TYPECODE_MULTIPOINT = 1, V.TYPECODE_LINESTRING = 2, V.TYPECODE_LINEARRING = 3, V.TYPECODE_MULTILINESTRING = 4, V.TYPECODE_POLYGON = 5, V.TYPECODE_MULTIPOLYGON = 6, V.TYPECODE_GEOMETRYCOLLECTION = 7, V.TYPENAME_POINT = "Point", V.TYPENAME_MULTIPOINT = "MultiPoint", V.TYPENAME_LINESTRING = "LineString", V.TYPENAME_LINEARRING = "LinearRing", V.TYPENAME_MULTILINESTRING = "MultiLineString", V.TYPENAME_POLYGON = "Polygon", V.TYPENAME_MULTIPOLYGON = "MultiPolygon", V.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", V.geometryChangedFilter = {
                        get interfaces_ () {
                            return [
                                k
                            ];
                        },
                        filter: function(t) {
                            t.geometryChangedAction();
                        }
                    };
                    var H = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "toLocationSymbol",
                                value: function(e) {
                                    switch(e){
                                        case t.EXTERIOR:
                                            return "e";
                                        case t.BOUNDARY:
                                            return "b";
                                        case t.INTERIOR:
                                            return "i";
                                        case t.NONE:
                                            return "-";
                                    }
                                    throw new m("Unknown location value: " + e);
                                }
                            }
                        ]);
                    }();
                    H.INTERIOR = 0, H.BOUNDARY = 1, H.EXTERIOR = 2, H.NONE = -1;
                    var Z = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "add",
                                value: function() {}
                            },
                            {
                                key: "addAll",
                                value: function() {}
                            },
                            {
                                key: "isEmpty",
                                value: function() {}
                            },
                            {
                                key: "iterator",
                                value: function() {}
                            },
                            {
                                key: "size",
                                value: function() {}
                            },
                            {
                                key: "toArray",
                                value: function() {}
                            },
                            {
                                key: "remove",
                                value: function() {}
                            }
                        ]);
                    }(), j = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                NoSuchElementException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), W = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                UnsupportedOperationException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), K = function(t) {
                        function i() {
                            return n(this, i), e(this, i, arguments);
                        }
                        return l(i, t), s(i, [
                            {
                                key: "contains",
                                value: function() {}
                            }
                        ]);
                    }(Z), J = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i)).map = new Map, t instanceof Z && r.addAll(t), r;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "contains",
                                value: function(t) {
                                    var e = t.hashCode ? t.hashCode() : t;
                                    return !!this.map.has(e);
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    var e = t.hashCode ? t.hashCode() : t;
                                    return !this.map.has(e) && !!this.map.set(e, t);
                                }
                            },
                            {
                                key: "addAll",
                                value: function(t) {
                                    var e, n = a(t);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var i = e.value;
                                            this.add(i);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    throw new W;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.map.size;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this.map.size;
                                }
                            },
                            {
                                key: "toArray",
                                value: function() {
                                    return Array.from(this.map.values());
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return new Q(this.map);
                                }
                            },
                            {
                                key: Symbol.iterator,
                                value: function() {
                                    return this.map;
                                }
                            }
                        ]);
                    }(K), Q = function() {
                        return s(function t(e) {
                            n(this, t), this.iterator = e.values();
                            var i = this.iterator.next(), r = i.done, s = i.value;
                            this.done = r, this.value = s;
                        }, [
                            {
                                key: "next",
                                value: function() {
                                    if (this.done) throw new j;
                                    var t = this.value, e = this.iterator.next(), n = e.done, i = e.value;
                                    return this.done = n, this.value = i, t;
                                }
                            },
                            {
                                key: "hasNext",
                                value: function() {
                                    return !this.done;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    throw new W;
                                }
                            }
                        ]);
                    }(), $ = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "opposite",
                                value: function(e) {
                                    return e === t.LEFT ? t.RIGHT : e === t.RIGHT ? t.LEFT : e;
                                }
                            }
                        ]);
                    }();
                    $.ON = 0, $.LEFT = 1, $.RIGHT = 2;
                    var tt = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                EmptyStackException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), et = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i, [
                                t
                            ])).name = Object.keys({
                                IndexOutOfBoundsException: i
                            })[0], r;
                        }
                        return l(i, t), s(i);
                    }(p), nt = function(t) {
                        function i() {
                            return n(this, i), e(this, i, arguments);
                        }
                        return l(i, t), s(i, [
                            {
                                key: "get",
                                value: function() {}
                            },
                            {
                                key: "set",
                                value: function() {}
                            },
                            {
                                key: "isEmpty",
                                value: function() {}
                            }
                        ]);
                    }(Z), it = function(t) {
                        function i() {
                            var t;
                            return n(this, i), (t = e(this, i)).array = [], t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "add",
                                value: function(t) {
                                    return this.array.push(t), !0;
                                }
                            },
                            {
                                key: "get",
                                value: function(t) {
                                    if (t < 0 || t >= this.size()) throw new et;
                                    return this.array[t];
                                }
                            },
                            {
                                key: "push",
                                value: function(t) {
                                    return this.array.push(t), t;
                                }
                            },
                            {
                                key: "pop",
                                value: function() {
                                    if (0 === this.array.length) throw new tt;
                                    return this.array.pop();
                                }
                            },
                            {
                                key: "peek",
                                value: function() {
                                    if (0 === this.array.length) throw new tt;
                                    return this.array[this.array.length - 1];
                                }
                            },
                            {
                                key: "empty",
                                value: function() {
                                    return 0 === this.array.length;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return this.empty();
                                }
                            },
                            {
                                key: "search",
                                value: function(t) {
                                    return this.array.indexOf(t);
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.array.length;
                                }
                            },
                            {
                                key: "toArray",
                                value: function() {
                                    return this.array.slice();
                                }
                            }
                        ]);
                    }(nt);
                    function rt(t, e) {
                        return t.interfaces_ && t.interfaces_.indexOf(e) > -1;
                    }
                    var st = function() {
                        return s(function t(e) {
                            n(this, t), this.str = e;
                        }, [
                            {
                                key: "append",
                                value: function(t) {
                                    this.str += t;
                                }
                            },
                            {
                                key: "setCharAt",
                                value: function(t, e) {
                                    this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this.str;
                                }
                            }
                        ]);
                    }(), at = function() {
                        function t(e) {
                            n(this, t), this.value = e;
                        }
                        return s(t, [
                            {
                                key: "intValue",
                                value: function() {
                                    return this.value;
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    return this.value < t ? -1 : this.value > t ? 1 : 0;
                                }
                            }
                        ], [
                            {
                                key: "compare",
                                value: function(t, e) {
                                    return t < e ? -1 : t > e ? 1 : 0;
                                }
                            },
                            {
                                key: "isNan",
                                value: function(t) {
                                    return Number.isNaN(t);
                                }
                            },
                            {
                                key: "valueOf",
                                value: function(e) {
                                    return new t(e);
                                }
                            }
                        ]);
                    }(), ot = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "isWhitespace",
                                value: function(t) {
                                    return t <= 32 && t >= 0 || 127 === t;
                                }
                            },
                            {
                                key: "toUpperCase",
                                value: function(t) {
                                    return t.toUpperCase();
                                }
                            }
                        ]);
                    }(), ut = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "le",
                                value: function(t) {
                                    return this._hi < t._hi || this._hi === t._hi && this._lo <= t._lo;
                                }
                            },
                            {
                                key: "extractSignificantDigits",
                                value: function(e, n) {
                                    var i = this.abs(), r = t.magnitude(i._hi), s = t.TEN.pow(r);
                                    (i = i.divide(s)).gt(t.TEN) ? (i = i.divide(t.TEN), r += 1) : i.lt(t.ONE) && (i = i.multiply(t.TEN), r -= 1);
                                    for(var a = r + 1, o = new st, u = t.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++){
                                        e && l === a && o.append(".");
                                        var h = Math.trunc(i._hi);
                                        if (h < 0) break;
                                        var c = !1, f = 0;
                                        h > 9 ? (c = !0, f = "9") : f = "0" + h, o.append(f), i = i.subtract(t.valueOf(h)).multiply(t.TEN), c && i.selfAdd(t.TEN);
                                        var g = !0, v = t.magnitude(i._hi);
                                        if (v < 0 && Math.abs(v) >= u - l && (g = !1), !g) break;
                                    }
                                    return n[0] = r, o.toString();
                                }
                            },
                            {
                                key: "sqr",
                                value: function() {
                                    return this.multiply(this);
                                }
                            },
                            {
                                key: "doubleValue",
                                value: function() {
                                    return this._hi + this._lo;
                                }
                            },
                            {
                                key: "subtract",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return this.add(e.negate());
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var n = arguments[0];
                                        return this.add(-n);
                                    }
                                }
                            },
                            {
                                key: "equals",
                                value: function() {
                                    if (1 === arguments.length && arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return this._hi === e._hi && this._lo === e._lo;
                                    }
                                }
                            },
                            {
                                key: "isZero",
                                value: function() {
                                    return 0 === this._hi && 0 === this._lo;
                                }
                            },
                            {
                                key: "selfSubtract",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return this.isNaN() ? this : this.selfAdd(-e._hi, -e._lo);
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var n = arguments[0];
                                        return this.isNaN() ? this : this.selfAdd(-n, 0);
                                    }
                                }
                            },
                            {
                                key: "getSpecialNumberString",
                                value: function() {
                                    return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
                                }
                            },
                            {
                                key: "min",
                                value: function(t) {
                                    return this.le(t) ? this : t;
                                }
                            },
                            {
                                key: "selfDivide",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof t) {
                                            var e = arguments[0];
                                            return this.selfDivide(e._hi, e._lo);
                                        }
                                        if ("number" == typeof arguments[0]) {
                                            var n = arguments[0];
                                            return this.selfDivide(n, 0);
                                        }
                                    } else if (2 === arguments.length) {
                                        var i, r, s, a, o = arguments[0], u = arguments[1], l = null, h = null, c = null, f = null;
                                        return s = this._hi / o, f = (l = (c = t.SPLIT * s) - (l = c - s)) * (h = (f = t.SPLIT * o) - (h = f - o)) - (a = s * o) + l * (r = o - h) + (i = s - l) * h + i * r, f = s + (c = (this._hi - a - f + this._lo - s * u) / o), this._hi = f, this._lo = s - f + c, this;
                                    }
                                }
                            },
                            {
                                key: "dump",
                                value: function() {
                                    return "DD<" + this._hi + ", " + this._lo + ">";
                                }
                            },
                            {
                                key: "divide",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e, n, i, r, s = arguments[0], a = null, o = null, u = null, l = null;
                                        return e = (i = this._hi / s._hi) - (a = (u = t.SPLIT * i) - (a = u - i)), l = a * (o = (l = t.SPLIT * s._hi) - (o = l - s._hi)) - (r = i * s._hi) + a * (n = s._hi - o) + e * o + e * n, new t(l = i + (u = (this._hi - r - l + this._lo - i * s._lo) / s._hi), i - l + u);
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var h = arguments[0];
                                        return A.isNaN(h) ? t.createNaN() : t.copy(this).selfDivide(h, 0);
                                    }
                                }
                            },
                            {
                                key: "ge",
                                value: function(t) {
                                    return this._hi > t._hi || this._hi === t._hi && this._lo >= t._lo;
                                }
                            },
                            {
                                key: "pow",
                                value: function(e) {
                                    if (0 === e) return t.valueOf(1);
                                    var n = new t(this), i = t.valueOf(1), r = Math.abs(e);
                                    if (r > 1) for(; r > 0;)r % 2 == 1 && i.selfMultiply(n), (r /= 2) > 0 && (n = n.sqr());
                                    else i = n;
                                    return e < 0 ? i.reciprocal() : i;
                                }
                            },
                            {
                                key: "ceil",
                                value: function() {
                                    if (this.isNaN()) return t.NaN;
                                    var e = Math.ceil(this._hi), n = 0;
                                    return e === this._hi && (n = Math.ceil(this._lo)), new t(e, n);
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
                                }
                            },
                            {
                                key: "rint",
                                value: function() {
                                    return this.isNaN() ? this : this.add(.5).floor();
                                }
                            },
                            {
                                key: "setValue",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return this.init(e), this;
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var n = arguments[0];
                                        return this.init(n), this;
                                    }
                                }
                            },
                            {
                                key: "max",
                                value: function(t) {
                                    return this.ge(t) ? this : t;
                                }
                            },
                            {
                                key: "sqrt",
                                value: function() {
                                    if (this.isZero()) return t.valueOf(0);
                                    if (this.isNegative()) return t.NaN;
                                    var e = 1 / Math.sqrt(this._hi), n = this._hi * e, i = t.valueOf(n), r = this.subtract(i.sqr())._hi * (.5 * e);
                                    return i.add(r);
                                }
                            },
                            {
                                key: "selfAdd",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof t) {
                                            var e = arguments[0];
                                            return this.selfAdd(e._hi, e._lo);
                                        }
                                        if ("number" == typeof arguments[0]) {
                                            var n, i, r, s, a, o = arguments[0], u = null;
                                            return u = (r = this._hi + o) - (s = r - this._hi), i = (a = (u = o - s + (this._hi - u)) + this._lo) + (r - (n = r + a)), this._hi = n + i, this._lo = i + (n - this._hi), this;
                                        }
                                    } else if (2 === arguments.length) {
                                        var l, h, c, f, g = arguments[0], v = arguments[1], y = null, d = null, _ = null;
                                        c = this._hi + g, h = this._lo + v, d = c - (_ = c - this._hi), y = h - (f = h - this._lo);
                                        var p = (l = c + (_ = (d = g - _ + (this._hi - d)) + h)) + (_ = (y = v - f + (this._lo - y)) + (_ + (c - l))), m = _ + (l - p);
                                        return this._hi = p, this._lo = m, this;
                                    }
                                }
                            },
                            {
                                key: "selfMultiply",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof t) {
                                            var e = arguments[0];
                                            return this.selfMultiply(e._hi, e._lo);
                                        }
                                        if ("number" == typeof arguments[0]) {
                                            var n = arguments[0];
                                            return this.selfMultiply(n, 0);
                                        }
                                    } else if (2 === arguments.length) {
                                        var i, r, s = arguments[0], a = arguments[1], o = null, u = null, l = null, h = null;
                                        o = (l = t.SPLIT * this._hi) - this._hi, h = t.SPLIT * s, o = l - o, i = this._hi - o, u = h - s;
                                        var c = (l = this._hi * s) + (h = o * (u = h - u) - l + o * (r = s - u) + i * u + i * r + (this._hi * a + this._lo * s)), f = h + (o = l - c);
                                        return this._hi = c, this._lo = f, this;
                                    }
                                }
                            },
                            {
                                key: "selfSqr",
                                value: function() {
                                    return this.selfMultiply(this);
                                }
                            },
                            {
                                key: "floor",
                                value: function() {
                                    if (this.isNaN()) return t.NaN;
                                    var e = Math.floor(this._hi), n = 0;
                                    return e === this._hi && (n = Math.floor(this._lo)), new t(e, n);
                                }
                            },
                            {
                                key: "negate",
                                value: function() {
                                    return this.isNaN() ? this : new t(-this._hi, -this._lo);
                                }
                            },
                            {
                                key: "clone",
                                value: function() {
                                    try {
                                        return null;
                                    } catch (t) {
                                        if (t instanceof CloneNotSupportedException) return null;
                                        throw t;
                                    }
                                }
                            },
                            {
                                key: "multiply",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return e.isNaN() ? t.createNaN() : t.copy(this).selfMultiply(e);
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var n = arguments[0];
                                        return A.isNaN(n) ? t.createNaN() : t.copy(this).selfMultiply(n, 0);
                                    }
                                }
                            },
                            {
                                key: "isNaN",
                                value: function() {
                                    return A.isNaN(this._hi);
                                }
                            },
                            {
                                key: "intValue",
                                value: function() {
                                    return Math.trunc(this._hi);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var e = t.magnitude(this._hi);
                                    return e >= -3 && e <= 20 ? this.toStandardNotation() : this.toSciNotation();
                                }
                            },
                            {
                                key: "toStandardNotation",
                                value: function() {
                                    var e = this.getSpecialNumberString();
                                    if (null !== e) return e;
                                    var n = new Array(1).fill(null), i = this.extractSignificantDigits(!0, n), r = n[0] + 1, s = i;
                                    if ("." === i.charAt(0)) s = "0" + i;
                                    else if (r < 0) s = "0." + t.stringOfChar("0", -r) + i;
                                    else if (-1 === i.indexOf(".")) {
                                        var a = r - i.length;
                                        s = i + t.stringOfChar("0", a) + ".0";
                                    }
                                    return this.isNegative() ? "-" + s : s;
                                }
                            },
                            {
                                key: "reciprocal",
                                value: function() {
                                    var e, n, i, r, s = null, a = null, o = null, u = null;
                                    e = (i = 1 / this._hi) - (s = (o = t.SPLIT * i) - (s = o - i)), a = (u = t.SPLIT * this._hi) - this._hi;
                                    var l = i + (o = (1 - (r = i * this._hi) - (u = s * (a = u - a) - r + s * (n = this._hi - a) + e * a + e * n) - i * this._lo) / this._hi);
                                    return new t(l, i - l + o);
                                }
                            },
                            {
                                key: "toSciNotation",
                                value: function() {
                                    if (this.isZero()) return t.SCI_NOT_ZERO;
                                    var e = this.getSpecialNumberString();
                                    if (null !== e) return e;
                                    var n = new Array(1).fill(null), i = this.extractSignificantDigits(!1, n), r = t.SCI_NOT_EXPONENT_CHAR + n[0];
                                    if ("0" === i.charAt(0)) throw new IllegalStateException("Found leading zero: " + i);
                                    var s = "";
                                    i.length > 1 && (s = i.substring(1));
                                    var a = i.charAt(0) + "." + s;
                                    return this.isNegative() ? "-" + a + r : a + r;
                                }
                            },
                            {
                                key: "abs",
                                value: function() {
                                    return this.isNaN() ? t.NaN : this.isNegative() ? this.negate() : new t(this);
                                }
                            },
                            {
                                key: "isPositive",
                                value: function() {
                                    return this._hi > 0 || 0 === this._hi && this._lo > 0;
                                }
                            },
                            {
                                key: "lt",
                                value: function(t) {
                                    return this._hi < t._hi || this._hi === t._hi && this._lo < t._lo;
                                }
                            },
                            {
                                key: "add",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return t.copy(this).selfAdd(e);
                                    }
                                    if ("number" == typeof arguments[0]) {
                                        var n = arguments[0];
                                        return t.copy(this).selfAdd(n);
                                    }
                                }
                            },
                            {
                                key: "init",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if ("number" == typeof arguments[0]) {
                                            var e = arguments[0];
                                            this._hi = e, this._lo = 0;
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            this._hi = n._hi, this._lo = n._lo;
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this._hi = i, this._lo = r;
                                    }
                                }
                            },
                            {
                                key: "gt",
                                value: function(t) {
                                    return this._hi > t._hi || this._hi === t._hi && this._lo > t._lo;
                                }
                            },
                            {
                                key: "isNegative",
                                value: function() {
                                    return this._hi < 0 || 0 === this._hi && this._lo < 0;
                                }
                            },
                            {
                                key: "trunc",
                                value: function() {
                                    return this.isNaN() ? t.NaN : this.isPositive() ? this.floor() : this.ceil();
                                }
                            },
                            {
                                key: "signum",
                                value: function() {
                                    return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        E,
                                        x,
                                        I
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._hi = 0, this._lo = 0, 0 === arguments.length) this.init(0);
                                    else if (1 === arguments.length) {
                                        if ("number" == typeof arguments[0]) {
                                            var e = arguments[0];
                                            this.init(e);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            this.init(n);
                                        } else if ("string" == typeof arguments[0]) {
                                            var i = arguments[0];
                                            t.constructor_.call(this, t.parse(i));
                                        }
                                    } else if (2 === arguments.length) {
                                        var r = arguments[0], s = arguments[1];
                                        this.init(r, s);
                                    }
                                }
                            },
                            {
                                key: "determinant",
                                value: function() {
                                    if ("number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                        var e = arguments[0], n = arguments[1], i = arguments[2], r = arguments[3];
                                        return t.determinant(t.valueOf(e), t.valueOf(n), t.valueOf(i), t.valueOf(r));
                                    }
                                    if (arguments[3] instanceof t && arguments[2] instanceof t && arguments[0] instanceof t && arguments[1] instanceof t) {
                                        var s = arguments[1], a = arguments[2], o = arguments[3];
                                        return arguments[0].multiply(o).selfSubtract(s.multiply(a));
                                    }
                                }
                            },
                            {
                                key: "sqr",
                                value: function(e) {
                                    return t.valueOf(e).selfMultiply(e);
                                }
                            },
                            {
                                key: "valueOf",
                                value: function() {
                                    if ("string" == typeof arguments[0]) {
                                        var e = arguments[0];
                                        return t.parse(e);
                                    }
                                    if ("number" == typeof arguments[0]) return new t(arguments[0]);
                                }
                            },
                            {
                                key: "sqrt",
                                value: function(e) {
                                    return t.valueOf(e).sqrt();
                                }
                            },
                            {
                                key: "parse",
                                value: function(e) {
                                    for(var n = 0, i = e.length; ot.isWhitespace(e.charAt(n));)n++;
                                    var r = !1;
                                    if (n < i) {
                                        var s = e.charAt(n);
                                        "-" !== s && "+" !== s || (n++, "-" === s && (r = !0));
                                    }
                                    for(var a = new t, o = 0, u = 0, l = 0, h = !1; !(n >= i);){
                                        var c = e.charAt(n);
                                        if (n++, ot.isDigit(c)) {
                                            var f = c - 0;
                                            a.selfMultiply(t.TEN), a.selfAdd(f), o++;
                                        } else {
                                            if ("." !== c) {
                                                if ("e" === c || "E" === c) {
                                                    var g = e.substring(n);
                                                    try {
                                                        l = at.parseInt(g);
                                                    } catch (t) {
                                                        throw t instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + g + " in string " + e) : t;
                                                    }
                                                    break;
                                                }
                                                throw new NumberFormatException("Unexpected character '" + c + "' at position " + n + " in string " + e);
                                            }
                                            u = o, h = !0;
                                        }
                                    }
                                    var v = a;
                                    h || (u = o);
                                    var y = o - u - l;
                                    if (0 === y) v = a;
                                    else if (y > 0) {
                                        var d = t.TEN.pow(y);
                                        v = a.divide(d);
                                    } else if (y < 0) {
                                        var _ = t.TEN.pow(-y);
                                        v = a.multiply(_);
                                    }
                                    return r ? v.negate() : v;
                                }
                            },
                            {
                                key: "createNaN",
                                value: function() {
                                    return new t(A.NaN, A.NaN);
                                }
                            },
                            {
                                key: "copy",
                                value: function(e) {
                                    return new t(e);
                                }
                            },
                            {
                                key: "magnitude",
                                value: function(t) {
                                    var e = Math.abs(t), n = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(n));
                                    return 10 * Math.pow(10, i) <= e && (i += 1), i;
                                }
                            },
                            {
                                key: "stringOfChar",
                                value: function(t, e) {
                                    for(var n = new st, i = 0; i < e; i++)n.append(t);
                                    return n.toString();
                                }
                            }
                        ]);
                    }();
                    ut.PI = new ut(3.141592653589793, 12246467991473532e-32), ut.TWO_PI = new ut(6.283185307179586, 24492935982947064e-32), ut.PI_2 = new ut(1.5707963267948966, 6123233995736766e-32), ut.E = new ut(2.718281828459045, 14456468917292502e-32), ut.NaN = new ut(A.NaN, A.NaN), ut.EPS = 123259516440783e-46, ut.SPLIT = 134217729, ut.MAX_PRINT_DIGITS = 32, ut.TEN = ut.valueOf(10), ut.ONE = ut.valueOf(1), ut.SCI_NOT_EXPONENT_CHAR = "E", ut.SCI_NOT_ZERO = "0.0E0";
                    var lt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "orientationIndex",
                                value: function(e, n, i) {
                                    var r = t.orientationIndexFilter(e, n, i);
                                    if (r <= 1) return r;
                                    var s = ut.valueOf(n.x).selfAdd(-e.x), a = ut.valueOf(n.y).selfAdd(-e.y), o = ut.valueOf(i.x).selfAdd(-n.x), u = ut.valueOf(i.y).selfAdd(-n.y);
                                    return s.selfMultiply(u).selfSubtract(a.selfMultiply(o)).signum();
                                }
                            },
                            {
                                key: "signOfDet2x2",
                                value: function() {
                                    if (arguments[3] instanceof ut && arguments[2] instanceof ut && arguments[0] instanceof ut && arguments[1] instanceof ut) {
                                        var t = arguments[1], e = arguments[2], n = arguments[3];
                                        return arguments[0].multiply(n).selfSubtract(t.multiply(e)).signum();
                                    }
                                    if ("number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                        var i = arguments[0], r = arguments[1], s = arguments[2], a = arguments[3], o = ut.valueOf(i), u = ut.valueOf(r), l = ut.valueOf(s), h = ut.valueOf(a);
                                        return o.multiply(h).selfSubtract(u.multiply(l)).signum();
                                    }
                                }
                            },
                            {
                                key: "intersection",
                                value: function(t, e, n, i) {
                                    var r = new ut(t.y).selfSubtract(e.y), s = new ut(e.x).selfSubtract(t.x), a = new ut(t.x).selfMultiply(e.y).selfSubtract(new ut(e.x).selfMultiply(t.y)), o = new ut(n.y).selfSubtract(i.y), u = new ut(i.x).selfSubtract(n.x), l = new ut(n.x).selfMultiply(i.y).selfSubtract(new ut(i.x).selfMultiply(n.y)), h = s.multiply(l).selfSubtract(u.multiply(a)), c = o.multiply(a).selfSubtract(r.multiply(l)), f = r.multiply(u).selfSubtract(o.multiply(s)), g = h.selfDivide(f).doubleValue(), v = c.selfDivide(f).doubleValue();
                                    return A.isNaN(g) || A.isInfinite(g) || A.isNaN(v) || A.isInfinite(v) ? null : new X(g, v);
                                }
                            },
                            {
                                key: "orientationIndexFilter",
                                value: function(e, n, i) {
                                    var r = null, s = (e.x - i.x) * (n.y - i.y), a = (e.y - i.y) * (n.x - i.x), o = s - a;
                                    if (s > 0) {
                                        if (a <= 0) return t.signum(o);
                                        r = s + a;
                                    } else {
                                        if (!(s < 0)) return t.signum(o);
                                        if (a >= 0) return t.signum(o);
                                        r = -s - a;
                                    }
                                    var u = t.DP_SAFE_EPSILON * r;
                                    return o >= u || -o >= u ? t.signum(o) : 2;
                                }
                            },
                            {
                                key: "signum",
                                value: function(t) {
                                    return t > 0 ? 1 : t < 0 ? -1 : 0;
                                }
                            }
                        ]);
                    }();
                    lt.DP_SAFE_EPSILON = 1e-15;
                    var ht = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "getM",
                                value: function(t) {
                                    if (this.hasM()) {
                                        var e = this.getDimension() - this.getMeasures();
                                        return this.getOrdinate(t, e);
                                    }
                                    return A.NaN;
                                }
                            },
                            {
                                key: "setOrdinate",
                                value: function(t, e, n) {}
                            },
                            {
                                key: "getZ",
                                value: function(t) {
                                    return this.hasZ() ? this.getOrdinate(t, 2) : A.NaN;
                                }
                            },
                            {
                                key: "size",
                                value: function() {}
                            },
                            {
                                key: "getOrdinate",
                                value: function(t, e) {}
                            },
                            {
                                key: "getCoordinate",
                                value: function() {}
                            },
                            {
                                key: "getCoordinateCopy",
                                value: function(t) {}
                            },
                            {
                                key: "createCoordinate",
                                value: function() {}
                            },
                            {
                                key: "getDimension",
                                value: function() {}
                            },
                            {
                                key: "hasM",
                                value: function() {
                                    return this.getMeasures() > 0;
                                }
                            },
                            {
                                key: "getX",
                                value: function(t) {}
                            },
                            {
                                key: "hasZ",
                                value: function() {
                                    return this.getDimension() - this.getMeasures() > 2;
                                }
                            },
                            {
                                key: "getMeasures",
                                value: function() {
                                    return 0;
                                }
                            },
                            {
                                key: "expandEnvelope",
                                value: function(t) {}
                            },
                            {
                                key: "copy",
                                value: function() {}
                            },
                            {
                                key: "getY",
                                value: function(t) {}
                            },
                            {
                                key: "toCoordinateArray",
                                value: function() {}
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        I
                                    ];
                                }
                            }
                        ]);
                    }();
                    ht.X = 0, ht.Y = 1, ht.Z = 2, ht.M = 3;
                    var ct = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "index",
                                value: function(t, e, n) {
                                    return lt.orientationIndex(t, e, n);
                                }
                            },
                            {
                                key: "isCCW",
                                value: function() {
                                    if (arguments[0] instanceof Array) {
                                        var e = arguments[0], n = e.length - 1;
                                        if (n < 3) throw new m("Ring has fewer than 4 points, so orientation cannot be determined");
                                        for(var i = e[0], r = 0, s = 1; s <= n; s++){
                                            var a = e[s];
                                            a.y > i.y && (i = a, r = s);
                                        }
                                        var o = r;
                                        do (o -= 1) < 0 && (o = n);
                                        while (e[o].equals2D(i) && o !== r);
                                        var u = r;
                                        do u = (u + 1) % n;
                                        while (e[u].equals2D(i) && u !== r);
                                        var l = e[o], h = e[u];
                                        if (l.equals2D(i) || h.equals2D(i) || l.equals2D(h)) return !1;
                                        var c = t.index(l, i, h);
                                        return 0 === c ? l.x > h.x : c > 0;
                                    }
                                    if (rt(arguments[0], ht)) {
                                        var f = arguments[0], g = f.size() - 1;
                                        if (g < 3) throw new m("Ring has fewer than 4 points, so orientation cannot be determined");
                                        for(var v = f.getCoordinate(0), y = 0, d = 1; d <= g; d++){
                                            var _ = f.getCoordinate(d);
                                            _.y > v.y && (v = _, y = d);
                                        }
                                        var p = null, k = y;
                                        do (k -= 1) < 0 && (k = g), p = f.getCoordinate(k);
                                        while (p.equals2D(v) && k !== y);
                                        var x = null, I = y;
                                        do I = (I + 1) % g, x = f.getCoordinate(I);
                                        while (x.equals2D(v) && I !== y);
                                        if (p.equals2D(v) || x.equals2D(v) || p.equals2D(x)) return !1;
                                        var E = t.index(p, v, x);
                                        return 0 === E ? p.x > x.x : E > 0;
                                    }
                                }
                            }
                        ]);
                    }();
                    ct.CLOCKWISE = -1, ct.RIGHT = ct.CLOCKWISE, ct.COUNTERCLOCKWISE = 1, ct.LEFT = ct.COUNTERCLOCKWISE, ct.COLLINEAR = 0, ct.STRAIGHT = ct.COLLINEAR;
                    var ft = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this._minCoord;
                                }
                            },
                            {
                                key: "getRightmostSide",
                                value: function(t, e) {
                                    var n = this.getRightmostSideOfSegment(t, e);
                                    return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
                                }
                            },
                            {
                                key: "findRightmostEdgeAtVertex",
                                value: function() {
                                    var t = this._minDe.getEdge().getCoordinates();
                                    G.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
                                    var e = t[this._minIndex - 1], n = t[this._minIndex + 1], i = ct.index(this._minCoord, n, e), r = !1;
                                    (e.y < this._minCoord.y && n.y < this._minCoord.y && i === ct.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && i === ct.CLOCKWISE) && (r = !0), r && (this._minIndex = this._minIndex - 1);
                                }
                            },
                            {
                                key: "getRightmostSideOfSegment",
                                value: function(t, e) {
                                    var n = t.getEdge().getCoordinates();
                                    if (e < 0 || e + 1 >= n.length) return -1;
                                    if (n[e].y === n[e + 1].y) return -1;
                                    var i = $.LEFT;
                                    return n[e].y < n[e + 1].y && (i = $.RIGHT), i;
                                }
                            },
                            {
                                key: "getEdge",
                                value: function() {
                                    return this._orientedDe;
                                }
                            },
                            {
                                key: "checkForRightmostCoordinate",
                                value: function(t) {
                                    for(var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++)(null === this._minCoord || e[n].x > this._minCoord.x) && (this._minDe = t, this._minIndex = n, this._minCoord = e[n]);
                                }
                            },
                            {
                                key: "findRightmostEdgeAtNode",
                                value: function() {
                                    var t = this._minDe.getNode().getEdges();
                                    this._minDe = t.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
                                }
                            },
                            {
                                key: "findEdge",
                                value: function(t) {
                                    for(var e = t.iterator(); e.hasNext();){
                                        var n = e.next();
                                        n.isForward() && this.checkForRightmostCoordinate(n);
                                    }
                                    G.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === $.LEFT && (this._orientedDe = this._minDe.getSym());
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
                                }
                            }
                        ]);
                    }(), gt = function(t) {
                        function i(t, r) {
                            var s;
                            return n(this, i), (s = e(this, i, [
                                r ? t + " [ " + r + " ]" : t
                            ])).pt = r ? new X(r) : void 0, s.name = Object.keys({
                                TopologyException: i
                            })[0], s;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this.pt;
                                }
                            }
                        ]);
                    }(D), vt = function() {
                        return s(function t() {
                            n(this, t), this.array = [];
                        }, [
                            {
                                key: "addLast",
                                value: function(t) {
                                    this.array.push(t);
                                }
                            },
                            {
                                key: "removeFirst",
                                value: function() {
                                    return this.array.shift();
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this.array.length;
                                }
                            }
                        ]);
                    }(), yt = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i)).array = [], t instanceof Z && r.addAll(t), r;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        nt,
                                        Z
                                    ];
                                }
                            },
                            {
                                key: "ensureCapacity",
                                value: function() {}
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    return 1 === arguments.length ? this.array.push(t) : this.array.splice(arguments[0], 0, arguments[1]), !0;
                                }
                            },
                            {
                                key: "clear",
                                value: function() {
                                    this.array = [];
                                }
                            },
                            {
                                key: "addAll",
                                value: function(t) {
                                    var e, n = a(t);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var i = e.value;
                                            this.array.push(i);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                            },
                            {
                                key: "set",
                                value: function(t, e) {
                                    var n = this.array[t];
                                    return this.array[t] = e, n;
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return new dt(this);
                                }
                            },
                            {
                                key: "get",
                                value: function(t) {
                                    if (t < 0 || t >= this.size()) throw new et;
                                    return this.array[t];
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this.array.length;
                                }
                            },
                            {
                                key: "sort",
                                value: function(t) {
                                    t ? this.array.sort(function(e, n) {
                                        return t.compare(e, n);
                                    }) : this.array.sort();
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.array.length;
                                }
                            },
                            {
                                key: "toArray",
                                value: function() {
                                    return this.array.slice();
                                }
                            },
                            {
                                key: "remove",
                                value: function(t) {
                                    for(var e = 0, n = this.array.length; e < n; e++)if (this.array[e] === t) return !!this.array.splice(e, 1);
                                    return !1;
                                }
                            },
                            {
                                key: Symbol.iterator,
                                value: function() {
                                    return this.array.values();
                                }
                            }
                        ]);
                    }(nt), dt = function() {
                        return s(function t(e) {
                            n(this, t), this.arrayList = e, this.position = 0;
                        }, [
                            {
                                key: "next",
                                value: function() {
                                    if (this.position === this.arrayList.size()) throw new j;
                                    return this.arrayList.get(this.position++);
                                }
                            },
                            {
                                key: "hasNext",
                                value: function() {
                                    return this.position < this.arrayList.size();
                                }
                            },
                            {
                                key: "set",
                                value: function(t) {
                                    return this.arrayList.set(this.position - 1, t);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    this.arrayList.remove(this.arrayList.get(this.position));
                                }
                            }
                        ]);
                    }(), _t = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "clearVisitedEdges",
                                value: function() {
                                    for(var t = this._dirEdgeList.iterator(); t.hasNext();)t.next().setVisited(!1);
                                }
                            },
                            {
                                key: "getRightmostCoordinate",
                                value: function() {
                                    return this._rightMostCoord;
                                }
                            },
                            {
                                key: "computeNodeDepth",
                                value: function(t) {
                                    for(var e = null, n = t.getEdges().iterator(); n.hasNext();){
                                        var i = n.next();
                                        if (i.isVisited() || i.getSym().isVisited()) {
                                            e = i;
                                            break;
                                        }
                                    }
                                    if (null === e) throw new gt("unable to find edge to compute depths at " + t.getCoordinate());
                                    t.getEdges().computeDepths(e);
                                    for(var r = t.getEdges().iterator(); r.hasNext();){
                                        var s = r.next();
                                        s.setVisited(!0), this.copySymDepths(s);
                                    }
                                }
                            },
                            {
                                key: "computeDepth",
                                value: function(t) {
                                    this.clearVisitedEdges();
                                    var e = this._finder.getEdge();
                                    e.getNode(), e.getLabel(), e.setEdgeDepths($.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
                                }
                            },
                            {
                                key: "create",
                                value: function(t) {
                                    this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
                                }
                            },
                            {
                                key: "findResultEdges",
                                value: function() {
                                    for(var t = this._dirEdgeList.iterator(); t.hasNext();){
                                        var e = t.next();
                                        e.getDepth($.RIGHT) >= 1 && e.getDepth($.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
                                    }
                                }
                            },
                            {
                                key: "computeDepths",
                                value: function(t) {
                                    var e = new J, n = new vt, i = t.getNode();
                                    for(n.addLast(i), e.add(i), t.setVisited(!0); !n.isEmpty();){
                                        var r = n.removeFirst();
                                        e.add(r), this.computeNodeDepth(r);
                                        for(var s = r.getEdges().iterator(); s.hasNext();){
                                            var a = s.next().getSym();
                                            if (!a.isVisited()) {
                                                var o = a.getNode();
                                                e.contains(o) || (n.addLast(o), e.add(o));
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
                                }
                            },
                            {
                                key: "getEnvelope",
                                value: function() {
                                    if (null === this._env) {
                                        for(var t = new U, e = this._dirEdgeList.iterator(); e.hasNext();)for(var n = e.next().getEdge().getCoordinates(), i = 0; i < n.length - 1; i++)t.expandToInclude(n[i]);
                                        this._env = t;
                                    }
                                    return this._env;
                                }
                            },
                            {
                                key: "addReachable",
                                value: function(t) {
                                    var e = new it;
                                    for(e.add(t); !e.empty();){
                                        var n = e.pop();
                                        this.add(n, e);
                                    }
                                }
                            },
                            {
                                key: "copySymDepths",
                                value: function(t) {
                                    var e = t.getSym();
                                    e.setDepth($.LEFT, t.getDepth($.RIGHT)), e.setDepth($.RIGHT, t.getDepth($.LEFT));
                                }
                            },
                            {
                                key: "add",
                                value: function(t, e) {
                                    t.setVisited(!0), this._nodes.add(t);
                                    for(var n = t.getEdges().iterator(); n.hasNext();){
                                        var i = n.next();
                                        this._dirEdgeList.add(i);
                                        var r = i.getSym().getNode();
                                        r.isVisited() || e.push(r);
                                    }
                                }
                            },
                            {
                                key: "getNodes",
                                value: function() {
                                    return this._nodes;
                                }
                            },
                            {
                                key: "getDirectedEdges",
                                value: function() {
                                    return this._dirEdgeList;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._finder = null, this._dirEdgeList = new yt, this._nodes = new yt, this._rightMostCoord = null, this._env = null, this._finder = new ft;
                                }
                            }
                        ]);
                    }(), pt = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "intersection",
                                value: function(t, e, n, i) {
                                    var r = t.x < e.x ? t.x : e.x, s = t.y < e.y ? t.y : e.y, a = t.x > e.x ? t.x : e.x, o = t.y > e.y ? t.y : e.y, u = n.x < i.x ? n.x : i.x, l = n.y < i.y ? n.y : i.y, h = n.x > i.x ? n.x : i.x, c = n.y > i.y ? n.y : i.y, f = ((r > u ? r : u) + (a < h ? a : h)) / 2, g = ((s > l ? s : l) + (o < c ? o : c)) / 2, v = t.x - f, y = t.y - g, d = e.x - f, _ = e.y - g, p = n.x - f, m = n.y - g, k = i.x - f, x = i.y - g, I = y - _, E = d - v, N = v * _ - d * y, T = m - x, S = k - p, L = p * x - k * m, C = I * S - T * E, R = (E * L - S * N) / C, w = (T * N - I * L) / C;
                                    return A.isNaN(R) || A.isInfinite(R) || A.isNaN(w) || A.isInfinite(w) ? null : new X(R + f, w + g);
                                }
                            }
                        ]);
                    }(), mt = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "arraycopy",
                                value: function(t, e, n, i, r) {
                                    for(var s = 0, a = e; a < e + r; a++)n[i + s] = t[a], s++;
                                }
                            },
                            {
                                key: "getProperty",
                                value: function(t) {
                                    return ({
                                        "line.separator": "\n"
                                    })[t];
                                }
                            }
                        ]);
                    }(), kt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "log10",
                                value: function(e) {
                                    var n = Math.log(e);
                                    return A.isInfinite(n) || A.isNaN(n) ? n : n / t.LOG_10;
                                }
                            },
                            {
                                key: "min",
                                value: function(t, e, n, i) {
                                    var r = t;
                                    return e < r && (r = e), n < r && (r = n), i < r && (r = i), r;
                                }
                            },
                            {
                                key: "clamp",
                                value: function() {
                                    if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                        var t = arguments[0], e = arguments[1], n = arguments[2];
                                        return t < e ? e : t > n ? n : t;
                                    }
                                    if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                                        var i = arguments[0], r = arguments[1], s = arguments[2];
                                        return i < r ? r : i > s ? s : i;
                                    }
                                }
                            },
                            {
                                key: "wrap",
                                value: function(t, e) {
                                    return t < 0 ? e - -t % e : t % e;
                                }
                            },
                            {
                                key: "max",
                                value: function() {
                                    if (3 === arguments.length) {
                                        var t = arguments[1], e = arguments[2], n = arguments[0];
                                        return t > n && (n = t), e > n && (n = e), n;
                                    }
                                    if (4 === arguments.length) {
                                        var i = arguments[1], r = arguments[2], s = arguments[3], a = arguments[0];
                                        return i > a && (a = i), r > a && (a = r), s > a && (a = s), a;
                                    }
                                }
                            },
                            {
                                key: "average",
                                value: function(t, e) {
                                    return (t + e) / 2;
                                }
                            }
                        ]);
                    }();
                    kt.LOG_10 = Math.log(10);
                    var xt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "segmentToSegment",
                                value: function(e, n, i, r) {
                                    if (e.equals(n)) return t.pointToSegment(e, i, r);
                                    if (i.equals(r)) return t.pointToSegment(r, e, n);
                                    var s = !1;
                                    if (U.intersects(e, n, i, r)) {
                                        var a = (n.x - e.x) * (r.y - i.y) - (n.y - e.y) * (r.x - i.x);
                                        if (0 === a) s = !0;
                                        else {
                                            var o = (e.y - i.y) * (r.x - i.x) - (e.x - i.x) * (r.y - i.y), u = ((e.y - i.y) * (n.x - e.x) - (e.x - i.x) * (n.y - e.y)) / a, l = o / a;
                                            (l < 0 || l > 1 || u < 0 || u > 1) && (s = !0);
                                        }
                                    } else s = !0;
                                    return s ? kt.min(t.pointToSegment(e, i, r), t.pointToSegment(n, i, r), t.pointToSegment(i, e, n), t.pointToSegment(r, e, n)) : 0;
                                }
                            },
                            {
                                key: "pointToSegment",
                                value: function(t, e, n) {
                                    if (e.x === n.x && e.y === n.y) return t.distance(e);
                                    var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), r = ((t.x - e.x) * (n.x - e.x) + (t.y - e.y) * (n.y - e.y)) / i;
                                    if (r <= 0) return t.distance(e);
                                    if (r >= 1) return t.distance(n);
                                    var s = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
                                    return Math.abs(s) * Math.sqrt(i);
                                }
                            },
                            {
                                key: "pointToLinePerpendicular",
                                value: function(t, e, n) {
                                    var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), r = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
                                    return Math.abs(r) * Math.sqrt(i);
                                }
                            },
                            {
                                key: "pointToSegmentString",
                                value: function(e, n) {
                                    if (0 === n.length) throw new m("Line array must contain at least one vertex");
                                    for(var i = e.distance(n[0]), r = 0; r < n.length - 1; r++){
                                        var s = t.pointToSegment(e, n[r], n[r + 1]);
                                        s < i && (i = s);
                                    }
                                    return i;
                                }
                            }
                        ]);
                    }(), It = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "create",
                                value: function() {
                                    if (1 === arguments.length) arguments[0] instanceof Array || rt(arguments[0], ht);
                                    else if (2 === arguments.length) ;
                                    else if (3 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        return this.create(t, e);
                                    }
                                }
                            }
                        ]);
                    }(), Et = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "filter",
                                value: function(t) {}
                            }
                        ]);
                    }(), Nt = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "ofLine",
                                value: function(t) {
                                    var e = t.size();
                                    if (e <= 1) return 0;
                                    var n = 0, i = new X;
                                    t.getCoordinate(0, i);
                                    for(var r = i.x, s = i.y, a = 1; a < e; a++){
                                        t.getCoordinate(a, i);
                                        var o = i.x, u = i.y, l = o - r, h = u - s;
                                        n += Math.sqrt(l * l + h * h), r = o, s = u;
                                    }
                                    return n;
                                }
                            }
                        ]);
                    }(), Tt = s(function t() {
                        n(this, t);
                    }), St = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "copyCoord",
                                value: function(t, e, n, i) {
                                    for(var r = Math.min(t.getDimension(), n.getDimension()), s = 0; s < r; s++)n.setOrdinate(i, s, t.getOrdinate(e, s));
                                }
                            },
                            {
                                key: "isRing",
                                value: function(t) {
                                    var e = t.size();
                                    return 0 === e || !(e <= 3) && t.getOrdinate(0, ht.X) === t.getOrdinate(e - 1, ht.X) && t.getOrdinate(0, ht.Y) === t.getOrdinate(e - 1, ht.Y);
                                }
                            },
                            {
                                key: "scroll",
                                value: function() {
                                    if (2 === arguments.length) {
                                        if (rt(arguments[0], ht) && Number.isInteger(arguments[1])) {
                                            var e = arguments[0], n = arguments[1];
                                            t.scroll(e, n, t.isRing(e));
                                        } else if (rt(arguments[0], ht) && arguments[1] instanceof X) {
                                            var i = arguments[0], r = arguments[1], s = t.indexOf(r, i);
                                            if (s <= 0) return null;
                                            t.scroll(i, s);
                                        }
                                    } else if (3 === arguments.length) {
                                        var a = arguments[0], o = arguments[1], u = arguments[2];
                                        if (o <= 0) return null;
                                        for(var l = a.copy(), h = u ? a.size() - 1 : a.size(), c = 0; c < h; c++)for(var f = 0; f < a.getDimension(); f++)a.setOrdinate(c, f, l.getOrdinate((o + c) % h, f));
                                        if (u) for(var g = 0; g < a.getDimension(); g++)a.setOrdinate(h, g, a.getOrdinate(0, g));
                                    }
                                }
                            },
                            {
                                key: "isEqual",
                                value: function(t, e) {
                                    var n = t.size();
                                    if (n !== e.size()) return !1;
                                    for(var i = Math.min(t.getDimension(), e.getDimension()), r = 0; r < n; r++)for(var s = 0; s < i; s++){
                                        var a = t.getOrdinate(r, s), o = e.getOrdinate(r, s);
                                        if (t.getOrdinate(r, s) !== e.getOrdinate(r, s) && (!A.isNaN(a) || !A.isNaN(o))) return !1;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "minCoordinateIndex",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var e = arguments[0];
                                        return t.minCoordinateIndex(e, 0, e.size() - 1);
                                    }
                                    if (3 === arguments.length) {
                                        for(var n = arguments[0], i = arguments[2], r = -1, s = null, a = arguments[1]; a <= i; a++){
                                            var o = n.getCoordinate(a);
                                            (null === s || s.compareTo(o) > 0) && (s = o, r = a);
                                        }
                                        return r;
                                    }
                                }
                            },
                            {
                                key: "extend",
                                value: function(e, n, i) {
                                    var r = e.create(i, n.getDimension()), s = n.size();
                                    if (t.copy(n, 0, r, 0, s), s > 0) for(var a = s; a < i; a++)t.copy(n, s - 1, r, a, 1);
                                    return r;
                                }
                            },
                            {
                                key: "reverse",
                                value: function(e) {
                                    for(var n = e.size() - 1, i = Math.trunc(n / 2), r = 0; r <= i; r++)t.swap(e, r, n - r);
                                }
                            },
                            {
                                key: "swap",
                                value: function(t, e, n) {
                                    if (e === n) return null;
                                    for(var i = 0; i < t.getDimension(); i++){
                                        var r = t.getOrdinate(e, i);
                                        t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, r);
                                    }
                                }
                            },
                            {
                                key: "copy",
                                value: function(e, n, i, r, s) {
                                    for(var a = 0; a < s; a++)t.copyCoord(e, n + a, i, r + a);
                                }
                            },
                            {
                                key: "ensureValidRing",
                                value: function(e, n) {
                                    var i = n.size();
                                    return 0 === i ? n : i <= 3 ? t.createClosedRing(e, n, 4) : n.getOrdinate(0, ht.X) === n.getOrdinate(i - 1, ht.X) && n.getOrdinate(0, ht.Y) === n.getOrdinate(i - 1, ht.Y) ? n : t.createClosedRing(e, n, i + 1);
                                }
                            },
                            {
                                key: "indexOf",
                                value: function(t, e) {
                                    for(var n = 0; n < e.size(); n++)if (t.x === e.getOrdinate(n, ht.X) && t.y === e.getOrdinate(n, ht.Y)) return n;
                                    return -1;
                                }
                            },
                            {
                                key: "createClosedRing",
                                value: function(e, n, i) {
                                    var r = e.create(i, n.getDimension()), s = n.size();
                                    t.copy(n, 0, r, 0, s);
                                    for(var a = s; a < i; a++)t.copy(n, 0, r, a, 1);
                                    return r;
                                }
                            },
                            {
                                key: "minCoordinate",
                                value: function(t) {
                                    for(var e = null, n = 0; n < t.size(); n++){
                                        var i = t.getCoordinate(n);
                                        (null === e || e.compareTo(i) > 0) && (e = i);
                                    }
                                    return e;
                                }
                            }
                        ]);
                    }(), Lt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "toDimensionSymbol",
                                value: function(e) {
                                    switch(e){
                                        case t.FALSE:
                                            return t.SYM_FALSE;
                                        case t.TRUE:
                                            return t.SYM_TRUE;
                                        case t.DONTCARE:
                                            return t.SYM_DONTCARE;
                                        case t.P:
                                            return t.SYM_P;
                                        case t.L:
                                            return t.SYM_L;
                                        case t.A:
                                            return t.SYM_A;
                                    }
                                    throw new m("Unknown dimension value: " + e);
                                }
                            },
                            {
                                key: "toDimensionValue",
                                value: function(e) {
                                    switch(ot.toUpperCase(e)){
                                        case t.SYM_FALSE:
                                            return t.FALSE;
                                        case t.SYM_TRUE:
                                            return t.TRUE;
                                        case t.SYM_DONTCARE:
                                            return t.DONTCARE;
                                        case t.SYM_P:
                                            return t.P;
                                        case t.SYM_L:
                                            return t.L;
                                        case t.SYM_A:
                                            return t.A;
                                    }
                                    throw new m("Unknown dimension symbol: " + e);
                                }
                            }
                        ]);
                    }();
                    Lt.P = 0, Lt.L = 1, Lt.A = 2, Lt.FALSE = -1, Lt.TRUE = -2, Lt.DONTCARE = -3, Lt.SYM_FALSE = "F", Lt.SYM_TRUE = "T", Lt.SYM_DONTCARE = "*", Lt.SYM_P = "0", Lt.SYM_L = "1", Lt.SYM_A = "2";
                    var Ct = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "filter",
                                value: function(t) {}
                            }
                        ]);
                    }(), Rt = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "filter",
                                value: function(t, e) {}
                            },
                            {
                                key: "isDone",
                                value: function() {}
                            },
                            {
                                key: "isGeometryChanged",
                                value: function() {}
                            }
                        ]);
                    }(), wt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "computeEnvelopeInternal",
                                value: function() {
                                    return this.isEmpty() ? new U : this._points.expandEnvelope(new U);
                                }
                            },
                            {
                                key: "isRing",
                                value: function() {
                                    return this.isClosed() && this.isSimple();
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this._points.toCoordinateArray();
                                }
                            },
                            {
                                key: "copyInternal",
                                value: function() {
                                    return new i(this._points.copy(), this._factory);
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        if (!this.isEquivalentClass(t)) return !1;
                                        var n = t;
                                        if (this._points.size() !== n._points.size()) return !1;
                                        for(var r = 0; r < this._points.size(); r++)if (!this.equal(this._points.getCoordinate(r), n._points.getCoordinate(r), e)) return !1;
                                        return !0;
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {
                                    for(var t = 0; t < Math.trunc(this._points.size() / 2); t++){
                                        var e = this._points.size() - 1 - t;
                                        if (!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))) {
                                            if (this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e)) > 0) {
                                                var n = this._points.copy();
                                                St.reverse(n), this._points = n;
                                            }
                                            return null;
                                        }
                                    }
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this.isEmpty() ? null : this._points.getCoordinate(0);
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return this.isClosed() ? Lt.FALSE : 0;
                                }
                            },
                            {
                                key: "isClosed",
                                value: function() {
                                    return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
                                }
                            },
                            {
                                key: "reverseInternal",
                                value: function() {
                                    var t = this._points.copy();
                                    return St.reverse(t), this.getFactory().createLineString(t);
                                }
                            },
                            {
                                key: "getEndPoint",
                                value: function() {
                                    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_LINESTRING;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 1;
                                }
                            },
                            {
                                key: "getLength",
                                value: function() {
                                    return Nt.ofLine(this._points);
                                }
                            },
                            {
                                key: "getNumPoints",
                                value: function() {
                                    return this._points.size();
                                }
                            },
                            {
                                key: "compareToSameClass",
                                value: function() {
                                    if (1 === arguments.length) {
                                        for(var t = arguments[0], e = 0, n = 0; e < this._points.size() && n < t._points.size();){
                                            var i = this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));
                                            if (0 !== i) return i;
                                            e++, n++;
                                        }
                                        return e < this._points.size() ? 1 : n < t._points.size() ? -1 : 0;
                                    }
                                    if (2 === arguments.length) {
                                        var r = arguments[0];
                                        return arguments[1].compare(this._points, r._points);
                                    }
                                }
                            },
                            {
                                key: "apply",
                                value: function() {
                                    if (rt(arguments[0], Et)) for(var t = arguments[0], e = 0; e < this._points.size(); e++)t.filter(this._points.getCoordinate(e));
                                    else if (rt(arguments[0], Rt)) {
                                        var n = arguments[0];
                                        if (0 === this._points.size()) return null;
                                        for(var i = 0; i < this._points.size() && (n.filter(this._points, i), !n.isDone()); i++);
                                        n.isGeometryChanged() && this.geometryChanged();
                                    } else if (rt(arguments[0], Ct)) arguments[0].filter(this);
                                    else if (rt(arguments[0], k)) arguments[0].filter(this);
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    throw new W;
                                }
                            },
                            {
                                key: "isEquivalentClass",
                                value: function(t) {
                                    return t instanceof i;
                                }
                            },
                            {
                                key: "getCoordinateN",
                                value: function(t) {
                                    return this._points.getCoordinate(t);
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_LINESTRING;
                                }
                            },
                            {
                                key: "getCoordinateSequence",
                                value: function() {
                                    return this._points;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this._points.size();
                                }
                            },
                            {
                                key: "init",
                                value: function(t) {
                                    if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size()) throw new m("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
                                    this._points = t;
                                }
                            },
                            {
                                key: "isCoordinate",
                                value: function(t) {
                                    for(var e = 0; e < this._points.size(); e++)if (this._points.getCoordinate(e).equals(t)) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "getStartPoint",
                                value: function() {
                                    return this.isEmpty() ? null : this.getPointN(0);
                                }
                            },
                            {
                                key: "getPointN",
                                value: function(t) {
                                    return this.getFactory().createPoint(this._points.getCoordinate(t));
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Tt
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._points = null, 0 === arguments.length) ;
                                    else if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        V.constructor_.call(this, e), this.init(t);
                                    }
                                }
                            }
                        ]);
                    }(V), Ot = s(function t() {
                        n(this, t);
                    }), bt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "computeEnvelopeInternal",
                                value: function() {
                                    if (this.isEmpty()) return new U;
                                    var t = new U;
                                    return t.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), t;
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this.isEmpty() ? [] : [
                                        this.getCoordinate()
                                    ];
                                }
                            },
                            {
                                key: "copyInternal",
                                value: function() {
                                    return new i(this._coordinates.copy(), this._factory);
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        return !!this.isEquivalentClass(t) && (!(!this.isEmpty() || !t.isEmpty()) || this.isEmpty() === t.isEmpty() && this.equal(t.getCoordinate(), this.getCoordinate(), e));
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {}
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null;
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return Lt.FALSE;
                                }
                            },
                            {
                                key: "reverseInternal",
                                value: function() {
                                    return this.getFactory().createPoint(this._coordinates.copy());
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_POINT;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 0;
                                }
                            },
                            {
                                key: "getNumPoints",
                                value: function() {
                                    return this.isEmpty() ? 0 : 1;
                                }
                            },
                            {
                                key: "getX",
                                value: function() {
                                    if (null === this.getCoordinate()) throw new IllegalStateException("getX called on empty Point");
                                    return this.getCoordinate().x;
                                }
                            },
                            {
                                key: "compareToSameClass",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.getCoordinate().compareTo(t.getCoordinate());
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0];
                                        return arguments[1].compare(this._coordinates, e._coordinates);
                                    }
                                }
                            },
                            {
                                key: "apply",
                                value: function() {
                                    if (rt(arguments[0], Et)) {
                                        var t = arguments[0];
                                        if (this.isEmpty()) return null;
                                        t.filter(this.getCoordinate());
                                    } else if (rt(arguments[0], Rt)) {
                                        var e = arguments[0];
                                        if (this.isEmpty()) return null;
                                        e.filter(this._coordinates, 0), e.isGeometryChanged() && this.geometryChanged();
                                    } else if (rt(arguments[0], Ct)) arguments[0].filter(this);
                                    else if (rt(arguments[0], k)) arguments[0].filter(this);
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    return this.getFactory().createGeometryCollection();
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_POINT;
                                }
                            },
                            {
                                key: "getCoordinateSequence",
                                value: function() {
                                    return this._coordinates;
                                }
                            },
                            {
                                key: "getY",
                                value: function() {
                                    if (null === this.getCoordinate()) throw new IllegalStateException("getY called on empty Point");
                                    return this.getCoordinate().y;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this._coordinates.size();
                                }
                            },
                            {
                                key: "init",
                                value: function(t) {
                                    null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), G.isTrue(t.size() <= 1), this._coordinates = t;
                                }
                            },
                            {
                                key: "isSimple",
                                value: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Ot
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._coordinates = null;
                                    var t = arguments[0], e = arguments[1];
                                    V.constructor_.call(this, e), this.init(t);
                                }
                            }
                        ]);
                    }(V), Mt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "ofRing",
                                value: function() {
                                    if (arguments[0] instanceof Array) {
                                        var e = arguments[0];
                                        return Math.abs(t.ofRingSigned(e));
                                    }
                                    if (rt(arguments[0], ht)) {
                                        var n = arguments[0];
                                        return Math.abs(t.ofRingSigned(n));
                                    }
                                }
                            },
                            {
                                key: "ofRingSigned",
                                value: function() {
                                    if (arguments[0] instanceof Array) {
                                        var t = arguments[0];
                                        if (t.length < 3) return 0;
                                        for(var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++){
                                            var r = t[i].x - n, s = t[i + 1].y;
                                            e += r * (t[i - 1].y - s);
                                        }
                                        return e / 2;
                                    }
                                    if (rt(arguments[0], ht)) {
                                        var a = arguments[0], o = a.size();
                                        if (o < 3) return 0;
                                        var u = new X, l = new X, h = new X;
                                        a.getCoordinate(0, l), a.getCoordinate(1, h);
                                        var c = l.x;
                                        h.x -= c;
                                        for(var f = 0, g = 1; g < o - 1; g++)u.y = l.y, l.x = h.x, l.y = h.y, a.getCoordinate(g + 1, h), h.x -= c, f += l.x * (u.y - h.y);
                                        return f / 2;
                                    }
                                }
                            }
                        ]);
                    }(), At = function() {
                        return s(function t() {
                            n(this, t);
                        }, null, [
                            {
                                key: "sort",
                                value: function() {
                                    var t = arguments, e = arguments[0];
                                    if (1 === arguments.length) e.sort(function(t, e) {
                                        return t.compareTo(e);
                                    });
                                    else if (2 === arguments.length) e.sort(function(e, n) {
                                        return t[1].compare(e, n);
                                    });
                                    else if (3 === arguments.length) {
                                        var n = e.slice(arguments[1], arguments[2]);
                                        n.sort();
                                        var i = e.slice(0, arguments[1]).concat(n, e.slice(arguments[2], e.length));
                                        e.splice(0, e.length);
                                        var r, s = a(i);
                                        try {
                                            for(s.s(); !(r = s.n()).done;){
                                                var o = r.value;
                                                e.push(o);
                                            }
                                        } catch (t) {
                                            s.e(t);
                                        } finally{
                                            s.f();
                                        }
                                    } else if (4 === arguments.length) {
                                        var u = e.slice(arguments[1], arguments[2]);
                                        u.sort(function(e, n) {
                                            return t[3].compare(e, n);
                                        });
                                        var l = e.slice(0, arguments[1]).concat(u, e.slice(arguments[2], e.length));
                                        e.splice(0, e.length);
                                        var h, c = a(l);
                                        try {
                                            for(c.s(); !(h = c.n()).done;){
                                                var f = h.value;
                                                e.push(f);
                                            }
                                        } catch (t) {
                                            c.e(t);
                                        } finally{
                                            c.f();
                                        }
                                    }
                                }
                            },
                            {
                                key: "asList",
                                value: function(t) {
                                    var e, n = new yt, i = a(t);
                                    try {
                                        for(i.s(); !(e = i.n()).done;){
                                            var r = e.value;
                                            n.add(r);
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "copyOf",
                                value: function(t, e) {
                                    return t.slice(0, e);
                                }
                            }
                        ]);
                    }(), Pt = s(function t() {
                        n(this, t);
                    }), Dt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "computeEnvelopeInternal",
                                value: function() {
                                    return this._shell.getEnvelopeInternal();
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    if (this.isEmpty()) return [];
                                    for(var t = new Array(this.getNumPoints()).fill(null), e = -1, n = this._shell.getCoordinates(), i = 0; i < n.length; i++)t[++e] = n[i];
                                    for(var r = 0; r < this._holes.length; r++)for(var s = this._holes[r].getCoordinates(), a = 0; a < s.length; a++)t[++e] = s[a];
                                    return t;
                                }
                            },
                            {
                                key: "getArea",
                                value: function() {
                                    var t = 0;
                                    t += Mt.ofRing(this._shell.getCoordinateSequence());
                                    for(var e = 0; e < this._holes.length; e++)t -= Mt.ofRing(this._holes[e].getCoordinateSequence());
                                    return t;
                                }
                            },
                            {
                                key: "copyInternal",
                                value: function() {
                                    for(var t = this._shell.copy(), e = new Array(this._holes.length).fill(null), n = 0; n < this._holes.length; n++)e[n] = this._holes[n].copy();
                                    return new i(t, e, this._factory);
                                }
                            },
                            {
                                key: "isRectangle",
                                value: function() {
                                    if (0 !== this.getNumInteriorRing()) return !1;
                                    if (null === this._shell) return !1;
                                    if (5 !== this._shell.getNumPoints()) return !1;
                                    for(var t = this._shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; n < 5; n++){
                                        var i = t.getX(n);
                                        if (i !== e.getMinX() && i !== e.getMaxX()) return !1;
                                        var r = t.getY(n);
                                        if (r !== e.getMinY() && r !== e.getMaxY()) return !1;
                                    }
                                    for(var s = t.getX(0), a = t.getY(0), o = 1; o <= 4; o++){
                                        var u = t.getX(o), l = t.getY(o);
                                        if (u !== s === (l !== a)) return !1;
                                        s = u, a = l;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        if (!this.isEquivalentClass(t)) return !1;
                                        var n = t, r = this._shell, s = n._shell;
                                        if (!r.equalsExact(s, e)) return !1;
                                        if (this._holes.length !== n._holes.length) return !1;
                                        for(var a = 0; a < this._holes.length; a++)if (!this._holes[a].equalsExact(n._holes[a], e)) return !1;
                                        return !0;
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {
                                    if (0 === arguments.length) {
                                        this._shell = this.normalized(this._shell, !0);
                                        for(var t = 0; t < this._holes.length; t++)this._holes[t] = this.normalized(this._holes[t], !1);
                                        At.sort(this._holes);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        if (e.isEmpty()) return null;
                                        var i = e.getCoordinateSequence(), r = St.minCoordinateIndex(i, 0, i.size() - 2);
                                        St.scroll(i, r, !0), ct.isCCW(i) === n && St.reverse(i);
                                    }
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this._shell.getCoordinate();
                                }
                            },
                            {
                                key: "getNumInteriorRing",
                                value: function() {
                                    return this._holes.length;
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return 1;
                                }
                            },
                            {
                                key: "reverseInternal",
                                value: function() {
                                    for(var t = this.getExteriorRing().reverse(), e = new Array(this.getNumInteriorRing()).fill(null), n = 0; n < e.length; n++)e[n] = this.getInteriorRingN(n).reverse();
                                    return this.getFactory().createPolygon(t, e);
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_POLYGON;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 2;
                                }
                            },
                            {
                                key: "getLength",
                                value: function() {
                                    var t = 0;
                                    t += this._shell.getLength();
                                    for(var e = 0; e < this._holes.length; e++)t += this._holes[e].getLength();
                                    return t;
                                }
                            },
                            {
                                key: "getNumPoints",
                                value: function() {
                                    for(var t = this._shell.getNumPoints(), e = 0; e < this._holes.length; e++)t += this._holes[e].getNumPoints();
                                    return t;
                                }
                            },
                            {
                                key: "convexHull",
                                value: function() {
                                    return this.getExteriorRing().convexHull();
                                }
                            },
                            {
                                key: "normalized",
                                value: function(t, e) {
                                    var n = t.copy();
                                    return this.normalize(n, e), n;
                                }
                            },
                            {
                                key: "compareToSameClass",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0], e = this._shell, n = t._shell;
                                        return e.compareToSameClass(n);
                                    }
                                    if (2 === arguments.length) {
                                        var i = arguments[1], r = arguments[0], s = this._shell, a = r._shell, o = s.compareToSameClass(a, i);
                                        if (0 !== o) return o;
                                        for(var u = this.getNumInteriorRing(), l = r.getNumInteriorRing(), h = 0; h < u && h < l;){
                                            var c = this.getInteriorRingN(h), f = r.getInteriorRingN(h), g = c.compareToSameClass(f, i);
                                            if (0 !== g) return g;
                                            h++;
                                        }
                                        return h < u ? 1 : h < l ? -1 : 0;
                                    }
                                }
                            },
                            {
                                key: "apply",
                                value: function() {
                                    if (rt(arguments[0], Et)) {
                                        var t = arguments[0];
                                        this._shell.apply(t);
                                        for(var e = 0; e < this._holes.length; e++)this._holes[e].apply(t);
                                    } else if (rt(arguments[0], Rt)) {
                                        var n = arguments[0];
                                        if (this._shell.apply(n), !n.isDone()) for(var i = 0; i < this._holes.length && (this._holes[i].apply(n), !n.isDone()); i++);
                                        n.isGeometryChanged() && this.geometryChanged();
                                    } else if (rt(arguments[0], Ct)) arguments[0].filter(this);
                                    else if (rt(arguments[0], k)) {
                                        var r = arguments[0];
                                        r.filter(this), this._shell.apply(r);
                                        for(var s = 0; s < this._holes.length; s++)this._holes[s].apply(r);
                                    }
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    if (this.isEmpty()) return this.getFactory().createMultiLineString();
                                    var t = new Array(this._holes.length + 1).fill(null);
                                    t[0] = this._shell;
                                    for(var e = 0; e < this._holes.length; e++)t[e + 1] = this._holes[e];
                                    return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t);
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_POLYGON;
                                }
                            },
                            {
                                key: "getExteriorRing",
                                value: function() {
                                    return this._shell;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return this._shell.isEmpty();
                                }
                            },
                            {
                                key: "getInteriorRingN",
                                value: function(t) {
                                    return this._holes[t];
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Pt
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._shell = null, this._holes = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    if (V.constructor_.call(this, n), null === t && (t = this.getFactory().createLinearRing()), null === e && (e = []), V.hasNullElements(e)) throw new m("holes must not contain null elements");
                                    if (t.isEmpty() && V.hasNonEmptyElements(e)) throw new m("shell is empty but holes are not");
                                    this._shell = t, this._holes = e;
                                }
                            }
                        ]);
                    }(V), Ft = function(t) {
                        function i() {
                            return n(this, i), e(this, i, arguments);
                        }
                        return l(i, t), s(i);
                    }(K), Gt = function(t) {
                        function i(t) {
                            var r;
                            return n(this, i), (r = e(this, i)).array = [], t instanceof Z && r.addAll(t), r;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "contains",
                                value: function(t) {
                                    var e, n = a(this.array);
                                    try {
                                        for(n.s(); !(e = n.n()).done;)if (0 === e.value.compareTo(t)) return !0;
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                    return !1;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    if (this.contains(t)) return !1;
                                    for(var e = 0, n = this.array.length; e < n; e++)if (1 === this.array[e].compareTo(t)) return !!this.array.splice(e, 0, t);
                                    return this.array.push(t), !0;
                                }
                            },
                            {
                                key: "addAll",
                                value: function(t) {
                                    var e, n = a(t);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var i = e.value;
                                            this.add(i);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    throw new W;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.array.length;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this.array.length;
                                }
                            },
                            {
                                key: "toArray",
                                value: function() {
                                    return this.array.slice();
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return new qt(this.array);
                                }
                            }
                        ]);
                    }(Ft), qt = function() {
                        return s(function t(e) {
                            n(this, t), this.array = e, this.position = 0;
                        }, [
                            {
                                key: "next",
                                value: function() {
                                    if (this.position === this.array.length) throw new j;
                                    return this.array[this.position++];
                                }
                            },
                            {
                                key: "hasNext",
                                value: function() {
                                    return this.position < this.array.length;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    throw new W;
                                }
                            }
                        ]);
                    }(), Yt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "computeEnvelopeInternal",
                                value: function() {
                                    for(var t = new U, e = 0; e < this._geometries.length; e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());
                                    return t;
                                }
                            },
                            {
                                key: "getGeometryN",
                                value: function(t) {
                                    return this._geometries[t];
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    for(var t = new Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this._geometries.length; n++)for(var i = this._geometries[n].getCoordinates(), r = 0; r < i.length; r++)t[++e] = i[r];
                                    return t;
                                }
                            },
                            {
                                key: "getArea",
                                value: function() {
                                    for(var t = 0, e = 0; e < this._geometries.length; e++)t += this._geometries[e].getArea();
                                    return t;
                                }
                            },
                            {
                                key: "copyInternal",
                                value: function() {
                                    for(var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)t[e] = this._geometries[e].copy();
                                    return new i(t, this._factory);
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        if (!this.isEquivalentClass(t)) return !1;
                                        var n = t;
                                        if (this._geometries.length !== n._geometries.length) return !1;
                                        for(var r = 0; r < this._geometries.length; r++)if (!this._geometries[r].equalsExact(n._geometries[r], e)) return !1;
                                        return !0;
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {
                                    for(var t = 0; t < this._geometries.length; t++)this._geometries[t].normalize();
                                    At.sort(this._geometries);
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    for(var t = Lt.FALSE, e = 0; e < this._geometries.length; e++)t = Math.max(t, this._geometries[e].getBoundaryDimension());
                                    return t;
                                }
                            },
                            {
                                key: "reverseInternal",
                                value: function() {
                                    for(var t = this._geometries.length, e = new yt(t), n = 0; n < t; n++)e.add(this._geometries[n].reverse());
                                    return this.getFactory().buildGeometry(e);
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_GEOMETRYCOLLECTION;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    for(var t = Lt.FALSE, e = 0; e < this._geometries.length; e++)t = Math.max(t, this._geometries[e].getDimension());
                                    return t;
                                }
                            },
                            {
                                key: "getLength",
                                value: function() {
                                    for(var t = 0, e = 0; e < this._geometries.length; e++)t += this._geometries[e].getLength();
                                    return t;
                                }
                            },
                            {
                                key: "getNumPoints",
                                value: function() {
                                    for(var t = 0, e = 0; e < this._geometries.length; e++)t += this._geometries[e].getNumPoints();
                                    return t;
                                }
                            },
                            {
                                key: "getNumGeometries",
                                value: function() {
                                    return this._geometries.length;
                                }
                            },
                            {
                                key: "compareToSameClass",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0], e = new Gt(At.asList(this._geometries)), n = new Gt(At.asList(t._geometries));
                                        return this.compare(e, n);
                                    }
                                    if (2 === arguments.length) {
                                        for(var i = arguments[1], r = arguments[0], s = this.getNumGeometries(), a = r.getNumGeometries(), o = 0; o < s && o < a;){
                                            var u = this.getGeometryN(o), l = r.getGeometryN(o), h = u.compareToSameClass(l, i);
                                            if (0 !== h) return h;
                                            o++;
                                        }
                                        return o < s ? 1 : o < a ? -1 : 0;
                                    }
                                }
                            },
                            {
                                key: "apply",
                                value: function() {
                                    if (rt(arguments[0], Et)) for(var t = arguments[0], e = 0; e < this._geometries.length; e++)this._geometries[e].apply(t);
                                    else if (rt(arguments[0], Rt)) {
                                        var n = arguments[0];
                                        if (0 === this._geometries.length) return null;
                                        for(var i = 0; i < this._geometries.length && (this._geometries[i].apply(n), !n.isDone()); i++);
                                        n.isGeometryChanged() && this.geometryChanged();
                                    } else if (rt(arguments[0], Ct)) {
                                        var r = arguments[0];
                                        r.filter(this);
                                        for(var s = 0; s < this._geometries.length; s++)this._geometries[s].apply(r);
                                    } else if (rt(arguments[0], k)) {
                                        var a = arguments[0];
                                        a.filter(this);
                                        for(var o = 0; o < this._geometries.length; o++)this._geometries[o].apply(a);
                                    }
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    return V.checkNotGeometryCollection(this), G.shouldNeverReachHere(), null;
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_GEOMETRYCOLLECTION;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    for(var t = 0; t < this._geometries.length; t++)if (!this._geometries[t].isEmpty()) return !1;
                                    return !0;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._geometries = null, 0 === arguments.length) ;
                                    else if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        if (V.constructor_.call(this, e), null === t && (t = []), V.hasNullElements(t)) throw new m("geometries must not contain null elements");
                                        this._geometries = t;
                                    }
                                }
                            }
                        ]);
                    }(V), zt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "copyInternal",
                                value: function() {
                                    for(var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)t[e] = this._geometries[e].copy();
                                    return new i(t, this._factory);
                                }
                            },
                            {
                                key: "isValid",
                                value: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        return !!this.isEquivalentClass(t) && f(i, "equalsExact", this, 1).call(this, t, e);
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    if (1 === arguments.length && Number.isInteger(arguments[0])) {
                                        var t = arguments[0];
                                        return this._geometries[t].getCoordinate();
                                    }
                                    return f(i, "getCoordinate", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return Lt.FALSE;
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_MULTIPOINT;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 0;
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    return this.getFactory().createGeometryCollection();
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_MULTIPOINT;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Ot
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    Yt.constructor_.call(this, t, e);
                                }
                            }
                        ]);
                    }(Yt), Xt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "copyInternal",
                                value: function() {
                                    return new i(this._points.copy(), this._factory);
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return Lt.FALSE;
                                }
                            },
                            {
                                key: "isClosed",
                                value: function() {
                                    return !!this.isEmpty() || f(i, "isClosed", this, 1).call(this);
                                }
                            },
                            {
                                key: "reverseInternal",
                                value: function() {
                                    var t = this._points.copy();
                                    return St.reverse(t), this.getFactory().createLinearRing(t);
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_LINEARRING;
                                }
                            },
                            {
                                key: "validateConstruction",
                                value: function() {
                                    if (!this.isEmpty() && !f(i, "isClosed", this, 1).call(this)) throw new m("Points of LinearRing do not form a closed linestring");
                                    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < i.MINIMUM_VALID_SIZE) throw new m("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_LINEARRING;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    wt.constructor_.call(this, t, e), this.validateConstruction();
                                }
                            }
                        ]);
                    }(wt);
                    Xt.MINIMUM_VALID_SIZE = 4;
                    var Bt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "setOrdinate",
                                value: function(t, e) {
                                    switch(t){
                                        case i.X:
                                            this.x = e;
                                            break;
                                        case i.Y:
                                            this.y = e;
                                            break;
                                        default:
                                            throw new m("Invalid ordinate index: " + t);
                                    }
                                }
                            },
                            {
                                key: "getZ",
                                value: function() {
                                    return X.NULL_ORDINATE;
                                }
                            },
                            {
                                key: "getOrdinate",
                                value: function(t) {
                                    switch(t){
                                        case i.X:
                                            return this.x;
                                        case i.Y:
                                            return this.y;
                                    }
                                    throw new m("Invalid ordinate index: " + t);
                                }
                            },
                            {
                                key: "setZ",
                                value: function(t) {
                                    throw new m("CoordinateXY dimension 2 does not support z-ordinate");
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    return new i(this);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "(" + this.x + ", " + this.y + ")";
                                }
                            },
                            {
                                key: "setCoordinate",
                                value: function(t) {
                                    this.x = t.x, this.y = t.y, this.z = t.getZ();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (0 === arguments.length) X.constructor_.call(this);
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof i) {
                                            var t = arguments[0];
                                            X.constructor_.call(this, t.x, t.y);
                                        } else if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            X.constructor_.call(this, e.x, e.y);
                                        }
                                    } else if (2 === arguments.length) {
                                        var n = arguments[0], r = arguments[1];
                                        X.constructor_.call(this, n, r, X.NULL_ORDINATE);
                                    }
                                }
                            }
                        ]);
                    }(X);
                    Bt.X = 0, Bt.Y = 1, Bt.Z = -1, Bt.M = -1;
                    var Ut = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getM",
                                value: function() {
                                    return this._m;
                                }
                            },
                            {
                                key: "setOrdinate",
                                value: function(t, e) {
                                    switch(t){
                                        case i.X:
                                            this.x = e;
                                            break;
                                        case i.Y:
                                            this.y = e;
                                            break;
                                        case i.M:
                                            this._m = e;
                                            break;
                                        default:
                                            throw new m("Invalid ordinate index: " + t);
                                    }
                                }
                            },
                            {
                                key: "setM",
                                value: function(t) {
                                    this._m = t;
                                }
                            },
                            {
                                key: "getZ",
                                value: function() {
                                    return X.NULL_ORDINATE;
                                }
                            },
                            {
                                key: "getOrdinate",
                                value: function(t) {
                                    switch(t){
                                        case i.X:
                                            return this.x;
                                        case i.Y:
                                            return this.y;
                                        case i.M:
                                            return this._m;
                                    }
                                    throw new m("Invalid ordinate index: " + t);
                                }
                            },
                            {
                                key: "setZ",
                                value: function(t) {
                                    throw new m("CoordinateXY dimension 2 does not support z-ordinate");
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    return new i(this);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
                                }
                            },
                            {
                                key: "setCoordinate",
                                value: function(t) {
                                    this.x = t.x, this.y = t.y, this.z = t.getZ(), this._m = t.getM();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._m = null, 0 === arguments.length) X.constructor_.call(this), this._m = 0;
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof i) {
                                            var t = arguments[0];
                                            X.constructor_.call(this, t.x, t.y), this._m = t._m;
                                        } else if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            X.constructor_.call(this, e.x, e.y), this._m = this.getM();
                                        }
                                    } else if (3 === arguments.length) {
                                        var n = arguments[0], r = arguments[1], s = arguments[2];
                                        X.constructor_.call(this, n, r, X.NULL_ORDINATE), this._m = s;
                                    }
                                }
                            }
                        ]);
                    }(X);
                    Ut.X = 0, Ut.Y = 1, Ut.Z = -1, Ut.M = 2;
                    var Vt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getM",
                                value: function() {
                                    return this._m;
                                }
                            },
                            {
                                key: "setOrdinate",
                                value: function(t, e) {
                                    switch(t){
                                        case X.X:
                                            this.x = e;
                                            break;
                                        case X.Y:
                                            this.y = e;
                                            break;
                                        case X.Z:
                                            this.z = e;
                                            break;
                                        case X.M:
                                            this._m = e;
                                            break;
                                        default:
                                            throw new m("Invalid ordinate index: " + t);
                                    }
                                }
                            },
                            {
                                key: "setM",
                                value: function(t) {
                                    this._m = t;
                                }
                            },
                            {
                                key: "getOrdinate",
                                value: function(t) {
                                    switch(t){
                                        case X.X:
                                            return this.x;
                                        case X.Y:
                                            return this.y;
                                        case X.Z:
                                            return this.getZ();
                                        case X.M:
                                            return this.getM();
                                    }
                                    throw new m("Invalid ordinate index: " + t);
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    return new i(this);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
                                }
                            },
                            {
                                key: "setCoordinate",
                                value: function(t) {
                                    this.x = t.x, this.y = t.y, this.z = t.getZ(), this._m = t.getM();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._m = null, 0 === arguments.length) X.constructor_.call(this), this._m = 0;
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof i) {
                                            var t = arguments[0];
                                            X.constructor_.call(this, t), this._m = t._m;
                                        } else if (arguments[0] instanceof X) {
                                            var e = arguments[0];
                                            X.constructor_.call(this, e), this._m = this.getM();
                                        }
                                    } else if (4 === arguments.length) {
                                        var n = arguments[0], r = arguments[1], s = arguments[2], a = arguments[3];
                                        X.constructor_.call(this, n, r, s), this._m = a;
                                    }
                                }
                            }
                        ]);
                    }(X), Ht = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "measures",
                                value: function(t) {
                                    return t instanceof Bt ? 0 : t instanceof Ut || t instanceof Vt ? 1 : 0;
                                }
                            },
                            {
                                key: "dimension",
                                value: function(t) {
                                    return t instanceof Bt ? 2 : t instanceof Ut ? 3 : t instanceof Vt ? 4 : 3;
                                }
                            },
                            {
                                key: "create",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var e = arguments[0];
                                        return t.create(e, 0);
                                    }
                                    if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        return 2 === n ? new Bt : 3 === n && 0 === i ? new X : 3 === n && 1 === i ? new Ut : 4 === n && 1 === i ? new Vt : new X;
                                    }
                                }
                            }
                        ]);
                    }(), Zt = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getCoordinate",
                                value: function(t) {
                                    return this.get(t);
                                }
                            },
                            {
                                key: "addAll",
                                value: function() {
                                    if (2 === arguments.length && "boolean" == typeof arguments[1] && rt(arguments[0], Z)) {
                                        for(var t = arguments[1], e = !1, n = arguments[0].iterator(); n.hasNext();)this.add(n.next(), t), e = !0;
                                        return e;
                                    }
                                    return f(i, "addAll", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "clone",
                                value: function() {
                                    for(var t = f(i, "clone", this, 1).call(this), e = 0; e < this.size(); e++)t.add(e, this.get(e).clone());
                                    return t;
                                }
                            },
                            {
                                key: "toCoordinateArray",
                                value: function() {
                                    if (0 === arguments.length) return this.toArray(i.coordArrayType);
                                    if (1 === arguments.length) {
                                        if (arguments[0]) return this.toArray(i.coordArrayType);
                                        for(var t = this.size(), e = new Array(t).fill(null), n = 0; n < t; n++)e[n] = this.get(t - n - 1);
                                        return e;
                                    }
                                }
                            },
                            {
                                key: "add",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return f(i, "add", this, 1).call(this, t);
                                    }
                                    if (2 === arguments.length) {
                                        if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                                            var e = arguments[0], n = arguments[1];
                                            return this.add(e, n, !0), !0;
                                        }
                                        if (arguments[0] instanceof X && "boolean" == typeof arguments[1]) {
                                            var r = arguments[0];
                                            if (!arguments[1] && this.size() >= 1) {
                                                if (this.get(this.size() - 1).equals2D(r)) return null;
                                            }
                                            f(i, "add", this, 1).call(this, r);
                                        } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
                                            var s = arguments[0], a = arguments[1];
                                            return this.add(s, a), !0;
                                        }
                                    } else if (3 === arguments.length) {
                                        if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                                            var o = arguments[0], u = arguments[1];
                                            if (arguments[2]) for(var l = 0; l < o.length; l++)this.add(o[l], u);
                                            else for(var h = o.length - 1; h >= 0; h--)this.add(o[h], u);
                                            return !0;
                                        }
                                        if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof X) {
                                            var c = arguments[0], g = arguments[1];
                                            if (!arguments[2]) {
                                                var v = this.size();
                                                if (v > 0) {
                                                    if (c > 0) {
                                                        if (this.get(c - 1).equals2D(g)) return null;
                                                    }
                                                    if (c < v) {
                                                        if (this.get(c).equals2D(g)) return null;
                                                    }
                                                }
                                            }
                                            f(i, "add", this, 1).call(this, c, g);
                                        }
                                    } else if (4 === arguments.length) {
                                        var y = arguments[0], d = arguments[1], _ = arguments[2], p = arguments[3], m = 1;
                                        _ > p && (m = -1);
                                        for(var k = _; k !== p; k += m)this.add(y[k], d);
                                        return !0;
                                    }
                                }
                            },
                            {
                                key: "closeRing",
                                value: function() {
                                    if (this.size() > 0) {
                                        var t = this.get(0).copy();
                                        this.add(t, !1);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.ensureCapacity(t.length), this.add(t, !0);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this.ensureCapacity(e.length), this.add(e, n);
                                    }
                                }
                            }
                        ]);
                    }(yt);
                    Zt.coordArrayType = new Array(0).fill(null);
                    var jt = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "isRing",
                                value: function(t) {
                                    return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
                                }
                            },
                            {
                                key: "ptNotInList",
                                value: function(e, n) {
                                    for(var i = 0; i < e.length; i++){
                                        var r = e[i];
                                        if (t.indexOf(r, n) < 0) return r;
                                    }
                                    return null;
                                }
                            },
                            {
                                key: "scroll",
                                value: function(e, n) {
                                    var i = t.indexOf(n, e);
                                    if (i < 0) return null;
                                    var r = new Array(e.length).fill(null);
                                    mt.arraycopy(e, i, r, 0, e.length - i), mt.arraycopy(e, 0, r, e.length - i, i), mt.arraycopy(r, 0, e, 0, e.length);
                                }
                            },
                            {
                                key: "equals",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        if (t === e) return !0;
                                        if (null === t || null === e) return !1;
                                        if (t.length !== e.length) return !1;
                                        for(var n = 0; n < t.length; n++)if (!t[n].equals(e[n])) return !1;
                                        return !0;
                                    }
                                    if (3 === arguments.length) {
                                        var i = arguments[0], r = arguments[1], s = arguments[2];
                                        if (i === r) return !0;
                                        if (null === i || null === r) return !1;
                                        if (i.length !== r.length) return !1;
                                        for(var a = 0; a < i.length; a++)if (0 !== s.compare(i[a], r[a])) return !1;
                                        return !0;
                                    }
                                }
                            },
                            {
                                key: "intersection",
                                value: function(t, e) {
                                    for(var n = new Zt, i = 0; i < t.length; i++)e.intersects(t[i]) && n.add(t[i], !0);
                                    return n.toCoordinateArray();
                                }
                            },
                            {
                                key: "measures",
                                value: function(t) {
                                    if (null === t || 0 === t.length) return 0;
                                    var e, n = 0, i = a(t);
                                    try {
                                        for(i.s(); !(e = i.n()).done;){
                                            var r = e.value;
                                            n = Math.max(n, Ht.measures(r));
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "hasRepeatedPoints",
                                value: function(t) {
                                    for(var e = 1; e < t.length; e++)if (t[e - 1].equals(t[e])) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "removeRepeatedPoints",
                                value: function(e) {
                                    return t.hasRepeatedPoints(e) ? new Zt(e, !1).toCoordinateArray() : e;
                                }
                            },
                            {
                                key: "reverse",
                                value: function(t) {
                                    for(var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++){
                                        var r = t[i];
                                        t[i] = t[e - i], t[e - i] = r;
                                    }
                                }
                            },
                            {
                                key: "removeNull",
                                value: function(t) {
                                    for(var e = 0, n = 0; n < t.length; n++)null !== t[n] && e++;
                                    var i = new Array(e).fill(null);
                                    if (0 === e) return i;
                                    for(var r = 0, s = 0; s < t.length; s++)null !== t[s] && (i[r++] = t[s]);
                                    return i;
                                }
                            },
                            {
                                key: "copyDeep",
                                value: function() {
                                    if (1 === arguments.length) {
                                        for(var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)e[n] = t[n].copy();
                                        return e;
                                    }
                                    if (5 === arguments.length) for(var i = arguments[0], r = arguments[1], s = arguments[2], a = arguments[3], o = arguments[4], u = 0; u < o; u++)s[a + u] = i[r + u].copy();
                                }
                            },
                            {
                                key: "isEqualReversed",
                                value: function(t, e) {
                                    for(var n = 0; n < t.length; n++){
                                        var i = t[n], r = e[t.length - n - 1];
                                        if (0 !== i.compareTo(r)) return !1;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "envelope",
                                value: function(t) {
                                    for(var e = new U, n = 0; n < t.length; n++)e.expandToInclude(t[n]);
                                    return e;
                                }
                            },
                            {
                                key: "toCoordinateArray",
                                value: function(e) {
                                    return e.toArray(t.coordArrayType);
                                }
                            },
                            {
                                key: "dimension",
                                value: function(t) {
                                    if (null === t || 0 === t.length) return 3;
                                    var e, n = 0, i = a(t);
                                    try {
                                        for(i.s(); !(e = i.n()).done;){
                                            var r = e.value;
                                            n = Math.max(n, Ht.dimension(r));
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "atLeastNCoordinatesOrNothing",
                                value: function(t, e) {
                                    return e.length >= t ? e : [];
                                }
                            },
                            {
                                key: "indexOf",
                                value: function(t, e) {
                                    for(var n = 0; n < e.length; n++)if (t.equals(e[n])) return n;
                                    return -1;
                                }
                            },
                            {
                                key: "increasingDirection",
                                value: function(t) {
                                    for(var e = 0; e < Math.trunc(t.length / 2); e++){
                                        var n = t.length - 1 - e, i = t[e].compareTo(t[n]);
                                        if (0 !== i) return i;
                                    }
                                    return 1;
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    for(var n = 0; n < t.length && n < e.length;){
                                        var i = t[n].compareTo(e[n]);
                                        if (0 !== i) return i;
                                        n++;
                                    }
                                    return n < e.length ? -1 : n < t.length ? 1 : 0;
                                }
                            },
                            {
                                key: "minCoordinate",
                                value: function(t) {
                                    for(var e = null, n = 0; n < t.length; n++)(null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
                                    return e;
                                }
                            },
                            {
                                key: "extract",
                                value: function(t, e, n) {
                                    e = kt.clamp(e, 0, t.length);
                                    var i = (n = kt.clamp(n, -1, t.length)) - e + 1;
                                    n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);
                                    var r = new Array(i).fill(null);
                                    if (0 === i) return r;
                                    for(var s = 0, a = e; a <= n; a++)r[s++] = t[a];
                                    return r;
                                }
                            }
                        ]);
                    }(), Wt = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "compare",
                                value: function(t, e) {
                                    var n = t, i = e;
                                    return jt.compare(n, i);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        P
                                    ];
                                }
                            }
                        ]);
                    }(), Kt = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "compare",
                                value: function(t, e) {
                                    var n = t, i = e;
                                    if (n.length < i.length) return -1;
                                    if (n.length > i.length) return 1;
                                    if (0 === n.length) return 0;
                                    var r = jt.compare(n, i);
                                    return jt.isEqualReversed(n, i) ? 0 : r;
                                }
                            },
                            {
                                key: "OLDcompare",
                                value: function(t, e) {
                                    var n = t, i = e;
                                    if (n.length < i.length) return -1;
                                    if (n.length > i.length) return 1;
                                    if (0 === n.length) return 0;
                                    for(var r = jt.increasingDirection(n), s = jt.increasingDirection(i), a = r > 0 ? 0 : n.length - 1, o = s > 0 ? 0 : n.length - 1, u = 0; u < n.length; u++){
                                        var l = n[a].compareTo(i[o]);
                                        if (0 !== l) return l;
                                        a += r, o += s;
                                    }
                                    return 0;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        P
                                    ];
                                }
                            }
                        ]);
                    }();
                    jt.ForwardComparator = Wt, jt.BidirectionalComparator = Kt, jt.coordArrayType = new Array(0).fill(null);
                    var Jt = function() {
                        return s(function t(e) {
                            n(this, t), this.str = e;
                        }, [
                            {
                                key: "append",
                                value: function(t) {
                                    this.str += t;
                                }
                            },
                            {
                                key: "setCharAt",
                                value: function(t, e) {
                                    this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this.str;
                                }
                            }
                        ]);
                    }(), Qt = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getM",
                                value: function(t) {
                                    return this.hasM() ? this._coordinates[t].getM() : A.NaN;
                                }
                            },
                            {
                                key: "setOrdinate",
                                value: function(t, e, n) {
                                    switch(e){
                                        case ht.X:
                                            this._coordinates[t].x = n;
                                            break;
                                        case ht.Y:
                                            this._coordinates[t].y = n;
                                            break;
                                        default:
                                            this._coordinates[t].setOrdinate(e, n);
                                    }
                                }
                            },
                            {
                                key: "getZ",
                                value: function(t) {
                                    return this.hasZ() ? this._coordinates[t].getZ() : A.NaN;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this._coordinates.length;
                                }
                            },
                            {
                                key: "getOrdinate",
                                value: function(t, e) {
                                    switch(e){
                                        case ht.X:
                                            return this._coordinates[t].x;
                                        case ht.Y:
                                            return this._coordinates[t].y;
                                        default:
                                            return this._coordinates[t].getOrdinate(e);
                                    }
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this._coordinates[t];
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0];
                                        arguments[1].setCoordinate(this._coordinates[e]);
                                    }
                                }
                            },
                            {
                                key: "getCoordinateCopy",
                                value: function(t) {
                                    var e = this.createCoordinate();
                                    return e.setCoordinate(this._coordinates[t]), e;
                                }
                            },
                            {
                                key: "createCoordinate",
                                value: function() {
                                    return Ht.create(this.getDimension(), this.getMeasures());
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return this._dimension;
                                }
                            },
                            {
                                key: "getX",
                                value: function(t) {
                                    return this._coordinates[t].x;
                                }
                            },
                            {
                                key: "getMeasures",
                                value: function() {
                                    return this._measures;
                                }
                            },
                            {
                                key: "expandEnvelope",
                                value: function(t) {
                                    for(var e = 0; e < this._coordinates.length; e++)t.expandToInclude(this._coordinates[e]);
                                    return t;
                                }
                            },
                            {
                                key: "copy",
                                value: function() {
                                    for(var e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++){
                                        var i = this.createCoordinate();
                                        i.setCoordinate(this._coordinates[n]), e[n] = i;
                                    }
                                    return new t(e, this._dimension, this._measures);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    if (this._coordinates.length > 0) {
                                        var t = new Jt(17 * this._coordinates.length);
                                        t.append("("), t.append(this._coordinates[0]);
                                        for(var e = 1; e < this._coordinates.length; e++)t.append(", "), t.append(this._coordinates[e]);
                                        return t.append(")"), t.toString();
                                    }
                                    return "()";
                                }
                            },
                            {
                                key: "getY",
                                value: function(t) {
                                    return this._coordinates[t].y;
                                }
                            },
                            {
                                key: "toCoordinateArray",
                                value: function() {
                                    return this._coordinates;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        ht,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._dimension = 3, this._measures = 0, this._coordinates = null, 1 === arguments.length) {
                                        if (arguments[0] instanceof Array) {
                                            var e = arguments[0];
                                            t.constructor_.call(this, e, jt.dimension(e), jt.measures(e));
                                        } else if (Number.isInteger(arguments[0])) {
                                            var n = arguments[0];
                                            this._coordinates = new Array(n).fill(null);
                                            for(var i = 0; i < n; i++)this._coordinates[i] = new X;
                                        } else if (rt(arguments[0], ht)) {
                                            var r = arguments[0];
                                            if (null === r) return this._coordinates = new Array(0).fill(null), null;
                                            this._dimension = r.getDimension(), this._measures = r.getMeasures(), this._coordinates = new Array(r.size()).fill(null);
                                            for(var s = 0; s < this._coordinates.length; s++)this._coordinates[s] = r.getCoordinateCopy(s);
                                        }
                                    } else if (2 === arguments.length) {
                                        if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
                                            var a = arguments[0], o = arguments[1];
                                            t.constructor_.call(this, a, o, jt.measures(a));
                                        } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                                            var u = arguments[0], l = arguments[1];
                                            this._coordinates = new Array(u).fill(null), this._dimension = l;
                                            for(var h = 0; h < u; h++)this._coordinates[h] = Ht.create(l);
                                        }
                                    } else if (3 === arguments.length) {
                                        if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
                                            var c = arguments[0], f = arguments[1], g = arguments[2];
                                            this._dimension = f, this._measures = g, this._coordinates = null === c ? new Array(0).fill(null) : c;
                                        } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                                            var v = arguments[0], y = arguments[1], d = arguments[2];
                                            this._coordinates = new Array(v).fill(null), this._dimension = y, this._measures = d;
                                            for(var _ = 0; _ < v; _++)this._coordinates[_] = this.createCoordinate();
                                        }
                                    }
                                }
                            }
                        ]);
                    }(), $t = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, [
                            {
                                key: "readResolve",
                                value: function() {
                                    return t.instance();
                                }
                            },
                            {
                                key: "create",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof Array) return new Qt(arguments[0]);
                                        if (rt(arguments[0], ht)) return new Qt(arguments[0]);
                                    } else {
                                        if (2 === arguments.length) {
                                            var t = arguments[1];
                                            return t > 3 && (t = 3), t < 2 && (t = 2), new Qt(arguments[0], t);
                                        }
                                        if (3 === arguments.length) {
                                            var e = arguments[2], n = arguments[1] - e;
                                            return e > 1 && (e = 1), n > 3 && (n = 3), n < 2 && (n = 2), new Qt(arguments[0], n + e, e);
                                        }
                                    }
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        It,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "instance",
                                value: function() {
                                    return t.instanceObject;
                                }
                            }
                        ]);
                    }();
                    $t.instanceObject = new $t;
                    var te = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "copyInternal",
                                value: function() {
                                    for(var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)t[e] = this._geometries[e].copy();
                                    return new i(t, this._factory);
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        return !!this.isEquivalentClass(t) && f(i, "equalsExact", this, 1).call(this, t, e);
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return 1;
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_MULTIPOLYGON;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 2;
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    if (this.isEmpty()) return this.getFactory().createMultiLineString();
                                    for(var t = new yt, e = 0; e < this._geometries.length; e++)for(var n = this._geometries[e].getBoundary(), i = 0; i < n.getNumGeometries(); i++)t.add(n.getGeometryN(i));
                                    var r = new Array(t.size()).fill(null);
                                    return this.getFactory().createMultiLineString(t.toArray(r));
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_MULTIPOLYGON;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Pt
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    Yt.constructor_.call(this, t, e);
                                }
                            }
                        ]);
                    }(Yt), ee = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "get",
                                value: function() {}
                            },
                            {
                                key: "put",
                                value: function() {}
                            },
                            {
                                key: "size",
                                value: function() {}
                            },
                            {
                                key: "values",
                                value: function() {}
                            },
                            {
                                key: "entrySet",
                                value: function() {}
                            }
                        ]);
                    }(), ne = function(t) {
                        function i() {
                            var t;
                            return n(this, i), (t = e(this, i)).map = new Map, t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "get",
                                value: function(t) {
                                    return this.map.get(t) || null;
                                }
                            },
                            {
                                key: "put",
                                value: function(t, e) {
                                    return this.map.set(t, e), e;
                                }
                            },
                            {
                                key: "values",
                                value: function() {
                                    for(var t = new yt, e = this.map.values(), n = e.next(); !n.done;)t.add(n.value), n = e.next();
                                    return t;
                                }
                            },
                            {
                                key: "entrySet",
                                value: function() {
                                    var t = new J;
                                    return this.map.entries().forEach(function(e) {
                                        return t.add(e);
                                    }), t;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.map.size();
                                }
                            }
                        ]);
                    }(ee), ie = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "equals",
                                value: function(e) {
                                    if (!(e instanceof t)) return !1;
                                    var n = e;
                                    return this._modelType === n._modelType && this._scale === n._scale;
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t, n = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
                                    return at.compare(n, i);
                                }
                            },
                            {
                                key: "getScale",
                                value: function() {
                                    return this._scale;
                                }
                            },
                            {
                                key: "isFloating",
                                value: function() {
                                    return this._modelType === t.FLOATING || this._modelType === t.FLOATING_SINGLE;
                                }
                            },
                            {
                                key: "getType",
                                value: function() {
                                    return this._modelType;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var e = "UNKNOWN";
                                    return this._modelType === t.FLOATING ? e = "Floating" : this._modelType === t.FLOATING_SINGLE ? e = "Floating-Single" : this._modelType === t.FIXED && (e = "Fixed (Scale=" + this.getScale() + ")"), e;
                                }
                            },
                            {
                                key: "makePrecise",
                                value: function() {
                                    if ("number" == typeof arguments[0]) {
                                        var e = arguments[0];
                                        return A.isNaN(e) || this._modelType === t.FLOATING_SINGLE ? e : this._modelType === t.FIXED ? Math.round(e * this._scale) / this._scale : e;
                                    }
                                    if (arguments[0] instanceof X) {
                                        var n = arguments[0];
                                        if (this._modelType === t.FLOATING) return null;
                                        n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
                                    }
                                }
                            },
                            {
                                key: "getMaximumSignificantDigits",
                                value: function() {
                                    var e = 16;
                                    return this._modelType === t.FLOATING ? e = 16 : this._modelType === t.FLOATING_SINGLE ? e = 6 : this._modelType === t.FIXED && (e = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), e;
                                }
                            },
                            {
                                key: "setScale",
                                value: function(t) {
                                    this._scale = Math.abs(t);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        E,
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._modelType = null, this._scale = null, 0 === arguments.length) this._modelType = t.FLOATING;
                                    else if (1 === arguments.length) {
                                        if (arguments[0] instanceof re) {
                                            var e = arguments[0];
                                            this._modelType = e, e === t.FIXED && this.setScale(1);
                                        } else if ("number" == typeof arguments[0]) {
                                            var n = arguments[0];
                                            this._modelType = t.FIXED, this.setScale(n);
                                        } else if (arguments[0] instanceof t) {
                                            var i = arguments[0];
                                            this._modelType = i._modelType, this._scale = i._scale;
                                        }
                                    }
                                }
                            },
                            {
                                key: "mostPrecise",
                                value: function(t, e) {
                                    return t.compareTo(e) >= 0 ? t : e;
                                }
                            }
                        ]);
                    }(), re = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "readResolve",
                                value: function() {
                                    return t.nameToTypeMap.get(this._name);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this._name;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._name = null;
                                    var e = arguments[0];
                                    this._name = e, t.nameToTypeMap.put(e, this);
                                }
                            }
                        ]);
                    }();
                    re.nameToTypeMap = new ne, ie.Type = re, ie.FIXED = new re("FIXED"), ie.FLOATING = new re("FLOATING"), ie.FLOATING_SINGLE = new re("FLOATING SINGLE"), ie.maximumPreciseValue = 9007199254740992;
                    var se = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "copyInternal",
                                value: function() {
                                    for(var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)t[e] = this._geometries[e].copy();
                                    return new i(t, this._factory);
                                }
                            },
                            {
                                key: "equalsExact",
                                value: function() {
                                    if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
                                        var t = arguments[0], e = arguments[1];
                                        return !!this.isEquivalentClass(t) && f(i, "equalsExact", this, 1).call(this, t, e);
                                    }
                                    return f(i, "equalsExact", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "getBoundaryDimension",
                                value: function() {
                                    return this.isClosed() ? Lt.FALSE : 0;
                                }
                            },
                            {
                                key: "isClosed",
                                value: function() {
                                    if (this.isEmpty()) return !1;
                                    for(var t = 0; t < this._geometries.length; t++)if (!this._geometries[t].isClosed()) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "getTypeCode",
                                value: function() {
                                    return V.TYPECODE_MULTILINESTRING;
                                }
                            },
                            {
                                key: "getDimension",
                                value: function() {
                                    return 1;
                                }
                            },
                            {
                                key: "getBoundary",
                                value: function() {
                                    throw new W;
                                }
                            },
                            {
                                key: "getGeometryType",
                                value: function() {
                                    return V.TYPENAME_MULTILINESTRING;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Tt
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    Yt.constructor_.call(this, t, e);
                                }
                            }
                        ]);
                    }(Yt), ae = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "createEmpty",
                                value: function(t) {
                                    switch(t){
                                        case -1:
                                            return this.createGeometryCollection();
                                        case 0:
                                            return this.createPoint();
                                        case 1:
                                            return this.createLineString();
                                        case 2:
                                            return this.createPolygon();
                                        default:
                                            throw new m("Invalid dimension: " + t);
                                    }
                                }
                            },
                            {
                                key: "toGeometry",
                                value: function(t) {
                                    return t.isNull() ? this.createPoint() : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new X(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([
                                        new X(t.getMinX(), t.getMinY()),
                                        new X(t.getMaxX(), t.getMaxY())
                                    ]) : this.createPolygon(this.createLinearRing([
                                        new X(t.getMinX(), t.getMinY()),
                                        new X(t.getMinX(), t.getMaxY()),
                                        new X(t.getMaxX(), t.getMaxY()),
                                        new X(t.getMaxX(), t.getMinY()),
                                        new X(t.getMinX(), t.getMinY())
                                    ]), null);
                                }
                            },
                            {
                                key: "createLineString",
                                value: function() {
                                    if (0 === arguments.length) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof Array) {
                                            var t = arguments[0];
                                            return this.createLineString(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
                                        }
                                        if (rt(arguments[0], ht)) return new wt(arguments[0], this);
                                    }
                                }
                            },
                            {
                                key: "createMultiLineString",
                                value: function() {
                                    return 0 === arguments.length ? new se(null, this) : 1 === arguments.length ? new se(arguments[0], this) : void 0;
                                }
                            },
                            {
                                key: "buildGeometry",
                                value: function(e) {
                                    for(var n = null, i = !1, r = !1, s = e.iterator(); s.hasNext();){
                                        var a = s.next(), o = a.getTypeCode();
                                        null === n && (n = o), o !== n && (i = !0), a instanceof Yt && (r = !0);
                                    }
                                    if (null === n) return this.createGeometryCollection();
                                    if (i || r) return this.createGeometryCollection(t.toGeometryArray(e));
                                    var u = e.iterator().next();
                                    if (e.size() > 1) {
                                        if (u instanceof Dt) return this.createMultiPolygon(t.toPolygonArray(e));
                                        if (u instanceof wt) return this.createMultiLineString(t.toLineStringArray(e));
                                        if (u instanceof bt) return this.createMultiPoint(t.toPointArray(e));
                                        G.shouldNeverReachHere("Unhandled geometry type: " + u.getGeometryType());
                                    }
                                    return u;
                                }
                            },
                            {
                                key: "createMultiPointFromCoords",
                                value: function(t) {
                                    return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
                                }
                            },
                            {
                                key: "createPoint",
                                value: function() {
                                    if (0 === arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof X) {
                                            var t = arguments[0];
                                            return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([
                                                t
                                            ]) : null);
                                        }
                                        if (rt(arguments[0], ht)) return new bt(arguments[0], this);
                                    }
                                }
                            },
                            {
                                key: "getCoordinateSequenceFactory",
                                value: function() {
                                    return this._coordinateSequenceFactory;
                                }
                            },
                            {
                                key: "createPolygon",
                                value: function() {
                                    if (0 === arguments.length) return this.createPolygon(null, null);
                                    if (1 === arguments.length) {
                                        if (rt(arguments[0], ht)) {
                                            var t = arguments[0];
                                            return this.createPolygon(this.createLinearRing(t));
                                        }
                                        if (arguments[0] instanceof Array) {
                                            var e = arguments[0];
                                            return this.createPolygon(this.createLinearRing(e));
                                        }
                                        if (arguments[0] instanceof Xt) {
                                            var n = arguments[0];
                                            return this.createPolygon(n, null);
                                        }
                                    } else if (2 === arguments.length) return new Dt(arguments[0], arguments[1], this);
                                }
                            },
                            {
                                key: "getSRID",
                                value: function() {
                                    return this._SRID;
                                }
                            },
                            {
                                key: "createGeometryCollection",
                                value: function() {
                                    return 0 === arguments.length ? new Yt(null, this) : 1 === arguments.length ? new Yt(arguments[0], this) : void 0;
                                }
                            },
                            {
                                key: "getPrecisionModel",
                                value: function() {
                                    return this._precisionModel;
                                }
                            },
                            {
                                key: "createLinearRing",
                                value: function() {
                                    if (0 === arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof Array) {
                                            var t = arguments[0];
                                            return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
                                        }
                                        if (rt(arguments[0], ht)) return new Xt(arguments[0], this);
                                    }
                                }
                            },
                            {
                                key: "createMultiPolygon",
                                value: function() {
                                    return 0 === arguments.length ? new te(null, this) : 1 === arguments.length ? new te(arguments[0], this) : void 0;
                                }
                            },
                            {
                                key: "createMultiPoint",
                                value: function() {
                                    if (0 === arguments.length) return new zt(null, this);
                                    if (1 === arguments.length) {
                                        if (arguments[0] instanceof Array) return new zt(arguments[0], this);
                                        if (rt(arguments[0], ht)) {
                                            var t = arguments[0];
                                            if (null === t) return this.createMultiPoint(new Array(0).fill(null));
                                            for(var e = new Array(t.size()).fill(null), n = 0; n < t.size(); n++){
                                                var i = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
                                                St.copy(t, n, i, 0, 1), e[n] = this.createPoint(i);
                                            }
                                            return this.createMultiPoint(e);
                                        }
                                    }
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, 0 === arguments.length) t.constructor_.call(this, new ie, 0);
                                    else if (1 === arguments.length) {
                                        if (rt(arguments[0], It)) {
                                            var e = arguments[0];
                                            t.constructor_.call(this, new ie, 0, e);
                                        } else if (arguments[0] instanceof ie) {
                                            var n = arguments[0];
                                            t.constructor_.call(this, n, 0, t.getDefaultCoordinateSequenceFactory());
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        t.constructor_.call(this, i, r, t.getDefaultCoordinateSequenceFactory());
                                    } else if (3 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2];
                                        this._precisionModel = s, this._coordinateSequenceFactory = o, this._SRID = a;
                                    }
                                }
                            },
                            {
                                key: "toMultiPolygonArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toGeometryArray",
                                value: function(t) {
                                    if (null === t) return null;
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "getDefaultCoordinateSequenceFactory",
                                value: function() {
                                    return $t.instance();
                                }
                            },
                            {
                                key: "toMultiLineStringArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toLineStringArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toMultiPointArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toLinearRingArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toPointArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "toPolygonArray",
                                value: function(t) {
                                    var e = new Array(t.size()).fill(null);
                                    return t.toArray(e);
                                }
                            },
                            {
                                key: "createPointFromInternalCoord",
                                value: function(t, e) {
                                    return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
                                }
                            }
                        ]);
                    }(), oe = "XY", ue = "XYZ", le = "XYM", he = "XYZM", ce = {
                        POINT: "Point",
                        LINE_STRING: "LineString",
                        LINEAR_RING: "LinearRing",
                        POLYGON: "Polygon",
                        MULTI_POINT: "MultiPoint",
                        MULTI_LINE_STRING: "MultiLineString",
                        MULTI_POLYGON: "MultiPolygon",
                        GEOMETRY_COLLECTION: "GeometryCollection",
                        CIRCLE: "Circle"
                    }, fe = "EMPTY", ge = 1, ve = 2, ye = 3, de = 4, _e = 5, pe = 6;
                    for(var me in ce)ce[me].toUpperCase();
                    var ke = function() {
                        return s(function t(e) {
                            n(this, t), this.wkt = e, this.index_ = -1;
                        }, [
                            {
                                key: "isAlpha_",
                                value: function(t) {
                                    return t >= "a" && t <= "z" || t >= "A" && t <= "Z";
                                }
                            },
                            {
                                key: "isNumeric_",
                                value: function(t, e) {
                                    return t >= "0" && t <= "9" || "." == t && !(void 0 !== e && e);
                                }
                            },
                            {
                                key: "isWhiteSpace_",
                                value: function(t) {
                                    return " " == t || "\t" == t || "\r" == t || "\n" == t;
                                }
                            },
                            {
                                key: "nextChar_",
                                value: function() {
                                    return this.wkt.charAt(++this.index_);
                                }
                            },
                            {
                                key: "nextToken",
                                value: function() {
                                    var t, e = this.nextChar_(), n = this.index_, i = e;
                                    if ("(" == e) t = ve;
                                    else if ("," == e) t = _e;
                                    else if (")" == e) t = ye;
                                    else if (this.isNumeric_(e) || "-" == e) t = de, i = this.readNumber_();
                                    else if (this.isAlpha_(e)) t = ge, i = this.readText_();
                                    else {
                                        if (this.isWhiteSpace_(e)) return this.nextToken();
                                        if ("" !== e) throw new Error("Unexpected character: " + e);
                                        t = pe;
                                    }
                                    return {
                                        position: n,
                                        value: i,
                                        type: t
                                    };
                                }
                            },
                            {
                                key: "readNumber_",
                                value: function() {
                                    var t, e = this.index_, n = !1, i = !1;
                                    do "." == t ? n = !0 : "e" != t && "E" != t || (i = !0), t = this.nextChar_();
                                    while (this.isNumeric_(t, n) || !i && ("e" == t || "E" == t) || i && ("-" == t || "+" == t));
                                    return parseFloat(this.wkt.substring(e, this.index_--));
                                }
                            },
                            {
                                key: "readText_",
                                value: function() {
                                    var t, e = this.index_;
                                    do t = this.nextChar_();
                                    while (this.isAlpha_(t));
                                    return this.wkt.substring(e, this.index_--).toUpperCase();
                                }
                            }
                        ]);
                    }(), xe = function() {
                        return s(function t(e, i) {
                            n(this, t), this.lexer_ = e, this.token_, this.layout_ = oe, this.factory = i;
                        }, [
                            {
                                key: "consume_",
                                value: function() {
                                    this.token_ = this.lexer_.nextToken();
                                }
                            },
                            {
                                key: "isTokenType",
                                value: function(t) {
                                    return this.token_.type == t;
                                }
                            },
                            {
                                key: "match",
                                value: function(t) {
                                    var e = this.isTokenType(t);
                                    return e && this.consume_(), e;
                                }
                            },
                            {
                                key: "parse",
                                value: function() {
                                    return this.consume_(), this.parseGeometry_();
                                }
                            },
                            {
                                key: "parseGeometryLayout_",
                                value: function() {
                                    var t = oe, e = this.token_;
                                    if (this.isTokenType(ge)) {
                                        var n = e.value;
                                        "Z" === n ? t = ue : "M" === n ? t = le : "ZM" === n && (t = he), t !== oe && this.consume_();
                                    }
                                    return t;
                                }
                            },
                            {
                                key: "parseGeometryCollectionText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = [];
                                        do t.push(this.parseGeometry_());
                                        while (this.match(_e));
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parsePointText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = this.parsePoint_();
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return null;
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parseLineStringText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = this.parsePointList_();
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parsePolygonText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = this.parseLineStringTextList_();
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parseMultiPointText_",
                                value: function() {
                                    var t;
                                    if (this.match(ve)) {
                                        if (t = this.token_.type == ve ? this.parsePointTextList_() : this.parsePointList_(), this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parseMultiLineStringText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = this.parseLineStringTextList_();
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parseMultiPolygonText_",
                                value: function() {
                                    if (this.match(ve)) {
                                        var t = this.parsePolygonTextList_();
                                        if (this.match(ye)) return t;
                                    } else if (this.isEmptyGeometry_()) return [];
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parsePoint_",
                                value: function() {
                                    for(var t = [], e = this.layout_.length, n = 0; n < e; ++n){
                                        var i = this.token_;
                                        if (!this.match(de)) break;
                                        t.push(i.value);
                                    }
                                    if (t.length == e) return t;
                                    throw new Error(this.formatErrorMessage_());
                                }
                            },
                            {
                                key: "parsePointList_",
                                value: function() {
                                    for(var t = [
                                        this.parsePoint_()
                                    ]; this.match(_e);)t.push(this.parsePoint_());
                                    return t;
                                }
                            },
                            {
                                key: "parsePointTextList_",
                                value: function() {
                                    for(var t = [
                                        this.parsePointText_()
                                    ]; this.match(_e);)t.push(this.parsePointText_());
                                    return t;
                                }
                            },
                            {
                                key: "parseLineStringTextList_",
                                value: function() {
                                    for(var t = [
                                        this.parseLineStringText_()
                                    ]; this.match(_e);)t.push(this.parseLineStringText_());
                                    return t;
                                }
                            },
                            {
                                key: "parsePolygonTextList_",
                                value: function() {
                                    for(var t = [
                                        this.parsePolygonText_()
                                    ]; this.match(_e);)t.push(this.parsePolygonText_());
                                    return t;
                                }
                            },
                            {
                                key: "isEmptyGeometry_",
                                value: function() {
                                    var t = this.isTokenType(ge) && this.token_.value == fe;
                                    return t && this.consume_(), t;
                                }
                            },
                            {
                                key: "formatErrorMessage_",
                                value: function() {
                                    return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
                                }
                            },
                            {
                                key: "parseGeometry_",
                                value: function() {
                                    var t = this.factory, e = function(t) {
                                        return i(X, g(t));
                                    }, n = function(n) {
                                        var i = n.map(function(n) {
                                            return t.createLinearRing(n.map(e));
                                        });
                                        return i.length > 1 ? t.createPolygon(i[0], i.slice(1)) : t.createPolygon(i[0]);
                                    }, r = this.token_;
                                    if (this.match(ge)) {
                                        var s = r.value;
                                        if (this.layout_ = this.parseGeometryLayout_(), "GEOMETRYCOLLECTION" == s) {
                                            var a = this.parseGeometryCollectionText_();
                                            return t.createGeometryCollection(a);
                                        }
                                        switch(s){
                                            case "POINT":
                                                var o = this.parsePointText_();
                                                return o ? t.createPoint(i(X, g(o))) : t.createPoint();
                                            case "LINESTRING":
                                                var u = this.parseLineStringText_().map(e);
                                                return t.createLineString(u);
                                            case "LINEARRING":
                                                var l = this.parseLineStringText_().map(e);
                                                return t.createLinearRing(l);
                                            case "POLYGON":
                                                var h = this.parsePolygonText_();
                                                return h && 0 !== h.length ? n(h) : t.createPolygon();
                                            case "MULTIPOINT":
                                                var c = this.parseMultiPointText_();
                                                if (!c || 0 === c.length) return t.createMultiPoint();
                                                var f = c.map(e).map(function(e) {
                                                    return t.createPoint(e);
                                                });
                                                return t.createMultiPoint(f);
                                            case "MULTILINESTRING":
                                                var v = this.parseMultiLineStringText_().map(function(n) {
                                                    return t.createLineString(n.map(e));
                                                });
                                                return t.createMultiLineString(v);
                                            case "MULTIPOLYGON":
                                                var y = this.parseMultiPolygonText_();
                                                if (!y || 0 === y.length) return t.createMultiPolygon();
                                                var d = y.map(n);
                                                return t.createMultiPolygon(d);
                                            default:
                                                throw new Error("Invalid geometry type: " + s);
                                        }
                                    }
                                    throw new Error(this.formatErrorMessage_());
                                }
                            }
                        ]);
                    }();
                    function Ie(t) {
                        if (t.isEmpty()) return "";
                        var e = t.getCoordinate(), n = [
                            e.x,
                            e.y
                        ];
                        return void 0 === e.z || Number.isNaN(e.z) || n.push(e.z), void 0 === e.m || Number.isNaN(e.m) || n.push(e.m), n.join(" ");
                    }
                    function Ee(t) {
                        for(var e = t.getCoordinates().map(function(t) {
                            var e = [
                                t.x,
                                t.y
                            ];
                            return void 0 === t.z || Number.isNaN(t.z) || e.push(t.z), void 0 === t.m || Number.isNaN(t.m) || e.push(t.m), e;
                        }), n = [], i = 0, r = e.length; i < r; ++i)n.push(e[i].join(" "));
                        return n.join(", ");
                    }
                    function Ne(t) {
                        var e = [];
                        e.push("(" + Ee(t.getExteriorRing()) + ")");
                        for(var n = 0, i = t.getNumInteriorRing(); n < i; ++n)e.push("(" + Ee(t.getInteriorRingN(n)) + ")");
                        return e.join(", ");
                    }
                    var Te = {
                        Point: Ie,
                        LineString: Ee,
                        LinearRing: Ee,
                        Polygon: Ne,
                        MultiPoint: function(t) {
                            for(var e = [], n = 0, i = t.getNumGeometries(); n < i; ++n)e.push("(" + Ie(t.getGeometryN(n)) + ")");
                            return e.join(", ");
                        },
                        MultiLineString: function(t) {
                            for(var e = [], n = 0, i = t.getNumGeometries(); n < i; ++n)e.push("(" + Ee(t.getGeometryN(n)) + ")");
                            return e.join(", ");
                        },
                        MultiPolygon: function(t) {
                            for(var e = [], n = 0, i = t.getNumGeometries(); n < i; ++n)e.push("(" + Ne(t.getGeometryN(n)) + ")");
                            return e.join(", ");
                        },
                        GeometryCollection: function(t) {
                            for(var e = [], n = 0, i = t.getNumGeometries(); n < i; ++n)e.push(Se(t.getGeometryN(n)));
                            return e.join(", ");
                        }
                    };
                    function Se(t) {
                        var e = t.getGeometryType(), n = Te[e];
                        e = e.toUpperCase();
                        var i = function(t) {
                            var e = "";
                            if (t.isEmpty()) return e;
                            var n = t.getCoordinate();
                            return void 0 === n.z || Number.isNaN(n.z) || (e += "Z"), void 0 === n.m || Number.isNaN(n.m) || (e += "M"), e;
                        }(t);
                        return i.length > 0 && (e += " " + i), t.isEmpty() ? e + " " + fe : e + " (" + n(t) + ")";
                    }
                    var Le = function() {
                        return s(function t(e) {
                            n(this, t), this.geometryFactory = e || new ae, this.precisionModel = this.geometryFactory.getPrecisionModel();
                        }, [
                            {
                                key: "read",
                                value: function(t) {
                                    var e = new ke(t);
                                    return new xe(e, this.geometryFactory).parse();
                                }
                            },
                            {
                                key: "write",
                                value: function(t) {
                                    return Se(t);
                                }
                            }
                        ]);
                    }(), Ce = function() {
                        return s(function t(e) {
                            n(this, t), this.parser = new Le(e);
                        }, [
                            {
                                key: "write",
                                value: function(t) {
                                    return this.parser.write(t);
                                }
                            }
                        ], [
                            {
                                key: "toLineString",
                                value: function(t, e) {
                                    if (2 !== arguments.length) throw new Error("Not implemented");
                                    return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
                                }
                            }
                        ]);
                    }(), Re = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getIndexAlongSegment",
                                value: function(t, e) {
                                    return this.computeIntLineIndex(), this._intLineIndex[t][e];
                                }
                            },
                            {
                                key: "getTopologySummary",
                                value: function() {
                                    var t = new Jt;
                                    return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
                                }
                            },
                            {
                                key: "computeIntersection",
                                value: function(t, e, n, i) {
                                    this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, n, i);
                                }
                            },
                            {
                                key: "getIntersectionNum",
                                value: function() {
                                    return this._result;
                                }
                            },
                            {
                                key: "computeIntLineIndex",
                                value: function() {
                                    if (0 === arguments.length) null === this._intLineIndex && (this._intLineIndex = Array(2).fill().map(function() {
                                        return Array(2);
                                    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1) ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
                                    }
                                }
                            },
                            {
                                key: "isProper",
                                value: function() {
                                    return this.hasIntersection() && this._isProper;
                                }
                            },
                            {
                                key: "setPrecisionModel",
                                value: function(t) {
                                    this._precisionModel = t;
                                }
                            },
                            {
                                key: "isInteriorIntersection",
                                value: function() {
                                    if (0 === arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
                                    if (1 === arguments.length) {
                                        for(var t = arguments[0], e = 0; e < this._result; e++)if (!this._intPt[e].equals2D(this._inputLines[t][0]) && !this._intPt[e].equals2D(this._inputLines[t][1])) return !0;
                                        return !1;
                                    }
                                }
                            },
                            {
                                key: "getIntersection",
                                value: function(t) {
                                    return this._intPt[t];
                                }
                            },
                            {
                                key: "isEndPoint",
                                value: function() {
                                    return this.hasIntersection() && !this._isProper;
                                }
                            },
                            {
                                key: "hasIntersection",
                                value: function() {
                                    return this._result !== t.NO_INTERSECTION;
                                }
                            },
                            {
                                key: "getEdgeDistance",
                                value: function(e, n) {
                                    return t.computeEdgeDistance(this._intPt[n], this._inputLines[e][0], this._inputLines[e][1]);
                                }
                            },
                            {
                                key: "isCollinear",
                                value: function() {
                                    return this._result === t.COLLINEAR_INTERSECTION;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return Ce.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ce.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
                                }
                            },
                            {
                                key: "getEndpoint",
                                value: function(t, e) {
                                    return this._inputLines[t][e];
                                }
                            },
                            {
                                key: "isIntersection",
                                value: function(t) {
                                    for(var e = 0; e < this._result; e++)if (this._intPt[e].equals2D(t)) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "getIntersectionAlongSegment",
                                value: function(t, e) {
                                    return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._result = null, this._inputLines = Array(2).fill().map(function() {
                                        return Array(2);
                                    }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new X, this._intPt[1] = new X, this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
                                }
                            },
                            {
                                key: "computeEdgeDistance",
                                value: function(t, e, n) {
                                    var i = Math.abs(n.x - e.x), r = Math.abs(n.y - e.y), s = -1;
                                    if (t.equals(e)) s = 0;
                                    else if (t.equals(n)) s = i > r ? i : r;
                                    else {
                                        var a = Math.abs(t.x - e.x), o = Math.abs(t.y - e.y);
                                        0 !== (s = i > r ? a : o) || t.equals(e) || (s = Math.max(a, o));
                                    }
                                    return G.isTrue(!(0 === s && !t.equals(e)), "Bad distance calculation"), s;
                                }
                            },
                            {
                                key: "nonRobustComputeEdgeDistance",
                                value: function(t, e, n) {
                                    var i = t.x - e.x, r = t.y - e.y, s = Math.sqrt(i * i + r * r);
                                    return G.isTrue(!(0 === s && !t.equals(e)), "Invalid distance calculation"), s;
                                }
                            }
                        ]);
                    }();
                    Re.DONT_INTERSECT = 0, Re.DO_INTERSECT = 1, Re.COLLINEAR = 2, Re.NO_INTERSECTION = 0, Re.POINT_INTERSECTION = 1, Re.COLLINEAR_INTERSECTION = 2;
                    var we = function(t) {
                        function i() {
                            return n(this, i), e(this, i);
                        }
                        return l(i, t), s(i, [
                            {
                                key: "isInSegmentEnvelopes",
                                value: function(t) {
                                    var e = new U(this._inputLines[0][0], this._inputLines[0][1]), n = new U(this._inputLines[1][0], this._inputLines[1][1]);
                                    return e.contains(t) && n.contains(t);
                                }
                            },
                            {
                                key: "computeIntersection",
                                value: function() {
                                    if (3 !== arguments.length) return f(i, "computeIntersection", this, 1).apply(this, arguments);
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    if (this._isProper = !1, U.intersects(e, n, t) && 0 === ct.index(e, n, t) && 0 === ct.index(n, e, t)) return this._isProper = !0, (t.equals(e) || t.equals(n)) && (this._isProper = !1), this._result = Re.POINT_INTERSECTION, null;
                                    this._result = Re.NO_INTERSECTION;
                                }
                            },
                            {
                                key: "intersection",
                                value: function(t, e, n, r) {
                                    var s = this.intersectionSafe(t, e, n, r);
                                    return this.isInSegmentEnvelopes(s) || (s = new X(i.nearestEndpoint(t, e, n, r))), null !== this._precisionModel && this._precisionModel.makePrecise(s), s;
                                }
                            },
                            {
                                key: "checkDD",
                                value: function(t, e, n, i, r) {
                                    var s = lt.intersection(t, e, n, i), a = this.isInSegmentEnvelopes(s);
                                    mt.out.println("DD in env = " + a + "  --------------------- " + s), r.distance(s) > 1e-4 && mt.out.println("Distance = " + r.distance(s));
                                }
                            },
                            {
                                key: "intersectionSafe",
                                value: function(t, e, n, r) {
                                    var s = pt.intersection(t, e, n, r);
                                    return null === s && (s = i.nearestEndpoint(t, e, n, r)), s;
                                }
                            },
                            {
                                key: "computeCollinearIntersection",
                                value: function(t, e, n, i) {
                                    var r = U.intersects(t, e, n), s = U.intersects(t, e, i), a = U.intersects(n, i, t), o = U.intersects(n, i, e);
                                    return r && s ? (this._intPt[0] = n, this._intPt[1] = i, Re.COLLINEAR_INTERSECTION) : a && o ? (this._intPt[0] = t, this._intPt[1] = e, Re.COLLINEAR_INTERSECTION) : r && a ? (this._intPt[0] = n, this._intPt[1] = t, !n.equals(t) || s || o ? Re.COLLINEAR_INTERSECTION : Re.POINT_INTERSECTION) : r && o ? (this._intPt[0] = n, this._intPt[1] = e, !n.equals(e) || s || a ? Re.COLLINEAR_INTERSECTION : Re.POINT_INTERSECTION) : s && a ? (this._intPt[0] = i, this._intPt[1] = t, !i.equals(t) || r || o ? Re.COLLINEAR_INTERSECTION : Re.POINT_INTERSECTION) : s && o ? (this._intPt[0] = i, this._intPt[1] = e, !i.equals(e) || r || a ? Re.COLLINEAR_INTERSECTION : Re.POINT_INTERSECTION) : Re.NO_INTERSECTION;
                                }
                            },
                            {
                                key: "computeIntersect",
                                value: function(t, e, n, i) {
                                    if (this._isProper = !1, !U.intersects(t, e, n, i)) return Re.NO_INTERSECTION;
                                    var r = ct.index(t, e, n), s = ct.index(t, e, i);
                                    if (r > 0 && s > 0 || r < 0 && s < 0) return Re.NO_INTERSECTION;
                                    var a = ct.index(n, i, t), o = ct.index(n, i, e);
                                    return a > 0 && o > 0 || a < 0 && o < 0 ? Re.NO_INTERSECTION : 0 === r && 0 === s && 0 === a && 0 === o ? this.computeCollinearIntersection(t, e, n, i) : (0 === r || 0 === s || 0 === a || 0 === o ? (this._isProper = !1, t.equals2D(n) || t.equals2D(i) ? this._intPt[0] = t : e.equals2D(n) || e.equals2D(i) ? this._intPt[0] = e : 0 === r ? this._intPt[0] = new X(n) : 0 === s ? this._intPt[0] = new X(i) : 0 === a ? this._intPt[0] = new X(t) : 0 === o && (this._intPt[0] = new X(e))) : (this._isProper = !0, this._intPt[0] = this.intersection(t, e, n, i)), Re.POINT_INTERSECTION);
                                }
                            }
                        ], [
                            {
                                key: "nearestEndpoint",
                                value: function(t, e, n, i) {
                                    var r = t, s = xt.pointToSegment(t, n, i), a = xt.pointToSegment(e, n, i);
                                    return a < s && (s = a, r = e), (a = xt.pointToSegment(n, t, e)) < s && (s = a, r = n), (a = xt.pointToSegment(i, t, e)) < s && (s = a, r = i), r;
                                }
                            }
                        ]);
                    }(Re), Oe = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "countSegment",
                                value: function(t, e) {
                                    if (t.x < this._p.x && e.x < this._p.x) return null;
                                    if (this._p.x === e.x && this._p.y === e.y) return this._isPointOnSegment = !0, null;
                                    if (t.y === this._p.y && e.y === this._p.y) {
                                        var n = t.x, i = e.x;
                                        return n > i && (n = e.x, i = t.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
                                    }
                                    if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
                                        var r = ct.index(t, e, this._p);
                                        if (r === ct.COLLINEAR) return this._isPointOnSegment = !0, null;
                                        e.y < t.y && (r = -r), r === ct.LEFT && this._crossingCount++;
                                    }
                                }
                            },
                            {
                                key: "isPointInPolygon",
                                value: function() {
                                    return this.getLocation() !== H.EXTERIOR;
                                }
                            },
                            {
                                key: "getLocation",
                                value: function() {
                                    return this._isPointOnSegment ? H.BOUNDARY : this._crossingCount % 2 == 1 ? H.INTERIOR : H.EXTERIOR;
                                }
                            },
                            {
                                key: "isOnSegment",
                                value: function() {
                                    return this._isPointOnSegment;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
                                    var t = arguments[0];
                                    this._p = t;
                                }
                            },
                            {
                                key: "locatePointInRing",
                                value: function() {
                                    if (arguments[0] instanceof X && rt(arguments[1], ht)) {
                                        for(var e = arguments[1], n = new t(arguments[0]), i = new X, r = new X, s = 1; s < e.size() && (e.getCoordinate(s, i), e.getCoordinate(s - 1, r), n.countSegment(i, r), !n.isOnSegment()); s++);
                                        return n.getLocation();
                                    }
                                    if (arguments[0] instanceof X && arguments[1] instanceof Array) {
                                        for(var a = arguments[1], o = new t(arguments[0]), u = 1; u < a.length; u++){
                                            var l = a[u], h = a[u - 1];
                                            if (o.countSegment(l, h), o.isOnSegment()) break;
                                        }
                                        return o.getLocation();
                                    }
                                }
                            }
                        ]);
                    }(), be = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "isOnLine",
                                value: function() {
                                    if (arguments[0] instanceof X && rt(arguments[1], ht)) {
                                        for(var t = arguments[0], e = arguments[1], n = new we, i = new X, r = new X, s = e.size(), a = 1; a < s; a++)if (e.getCoordinate(a - 1, i), e.getCoordinate(a, r), n.computeIntersection(t, i, r), n.hasIntersection()) return !0;
                                        return !1;
                                    }
                                    if (arguments[0] instanceof X && arguments[1] instanceof Array) {
                                        for(var o = arguments[0], u = arguments[1], l = new we, h = 1; h < u.length; h++){
                                            var c = u[h - 1], f = u[h];
                                            if (l.computeIntersection(o, c, f), l.hasIntersection()) return !0;
                                        }
                                        return !1;
                                    }
                                }
                            },
                            {
                                key: "locateInRing",
                                value: function(t, e) {
                                    return Oe.locatePointInRing(t, e);
                                }
                            },
                            {
                                key: "isInRing",
                                value: function(e, n) {
                                    return t.locateInRing(e, n) !== H.EXTERIOR;
                                }
                            }
                        ]);
                    }(), Me = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "setAllLocations",
                                value: function(t) {
                                    for(var e = 0; e < this.location.length; e++)this.location[e] = t;
                                }
                            },
                            {
                                key: "isNull",
                                value: function() {
                                    for(var t = 0; t < this.location.length; t++)if (this.location[t] !== H.NONE) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "setAllLocationsIfNull",
                                value: function(t) {
                                    for(var e = 0; e < this.location.length; e++)this.location[e] === H.NONE && (this.location[e] = t);
                                }
                            },
                            {
                                key: "isLine",
                                value: function() {
                                    return 1 === this.location.length;
                                }
                            },
                            {
                                key: "merge",
                                value: function(t) {
                                    if (t.location.length > this.location.length) {
                                        var e = new Array(3).fill(null);
                                        e[$.ON] = this.location[$.ON], e[$.LEFT] = H.NONE, e[$.RIGHT] = H.NONE, this.location = e;
                                    }
                                    for(var n = 0; n < this.location.length; n++)this.location[n] === H.NONE && n < t.location.length && (this.location[n] = t.location[n]);
                                }
                            },
                            {
                                key: "getLocations",
                                value: function() {
                                    return this.location;
                                }
                            },
                            {
                                key: "flip",
                                value: function() {
                                    if (this.location.length <= 1) return null;
                                    var t = this.location[$.LEFT];
                                    this.location[$.LEFT] = this.location[$.RIGHT], this.location[$.RIGHT] = t;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var t = new st;
                                    return this.location.length > 1 && t.append(H.toLocationSymbol(this.location[$.LEFT])), t.append(H.toLocationSymbol(this.location[$.ON])), this.location.length > 1 && t.append(H.toLocationSymbol(this.location[$.RIGHT])), t.toString();
                                }
                            },
                            {
                                key: "setLocations",
                                value: function(t, e, n) {
                                    this.location[$.ON] = t, this.location[$.LEFT] = e, this.location[$.RIGHT] = n;
                                }
                            },
                            {
                                key: "get",
                                value: function(t) {
                                    return t < this.location.length ? this.location[t] : H.NONE;
                                }
                            },
                            {
                                key: "isArea",
                                value: function() {
                                    return this.location.length > 1;
                                }
                            },
                            {
                                key: "isAnyNull",
                                value: function() {
                                    for(var t = 0; t < this.location.length; t++)if (this.location[t] === H.NONE) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "setLocation",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.setLocation($.ON, t);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this.location[e] = n;
                                    }
                                }
                            },
                            {
                                key: "init",
                                value: function(t) {
                                    this.location = new Array(t).fill(null), this.setAllLocations(H.NONE);
                                }
                            },
                            {
                                key: "isEqualOnSide",
                                value: function(t, e) {
                                    return this.location[e] === t.location[e];
                                }
                            },
                            {
                                key: "allPositionsEqual",
                                value: function(t) {
                                    for(var e = 0; e < this.location.length; e++)if (this.location[e] !== t) return !1;
                                    return !0;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.location = null, 1 === arguments.length) {
                                        if (arguments[0] instanceof Array) {
                                            var e = arguments[0];
                                            this.init(e.length);
                                        } else if (Number.isInteger(arguments[0])) {
                                            var n = arguments[0];
                                            this.init(1), this.location[$.ON] = n;
                                        } else if (arguments[0] instanceof t) {
                                            var i = arguments[0];
                                            if (this.init(i.location.length), null !== i) for(var r = 0; r < this.location.length; r++)this.location[r] = i.location[r];
                                        }
                                    } else if (3 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2];
                                        this.init(3), this.location[$.ON] = s, this.location[$.LEFT] = a, this.location[$.RIGHT] = o;
                                    }
                                }
                            }
                        ]);
                    }(), Ae = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getGeometryCount",
                                value: function() {
                                    var t = 0;
                                    return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
                                }
                            },
                            {
                                key: "setAllLocations",
                                value: function(t, e) {
                                    this.elt[t].setAllLocations(e);
                                }
                            },
                            {
                                key: "isNull",
                                value: function(t) {
                                    return this.elt[t].isNull();
                                }
                            },
                            {
                                key: "setAllLocationsIfNull",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this.elt[e].setAllLocationsIfNull(n);
                                    }
                                }
                            },
                            {
                                key: "isLine",
                                value: function(t) {
                                    return this.elt[t].isLine();
                                }
                            },
                            {
                                key: "merge",
                                value: function(t) {
                                    for(var e = 0; e < 2; e++)null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new Me(t.elt[e]) : this.elt[e].merge(t.elt[e]);
                                }
                            },
                            {
                                key: "flip",
                                value: function() {
                                    this.elt[0].flip(), this.elt[1].flip();
                                }
                            },
                            {
                                key: "getLocation",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.elt[t].get($.ON);
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        return this.elt[e].get(n);
                                    }
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var t = new st;
                                    return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
                                }
                            },
                            {
                                key: "isArea",
                                value: function() {
                                    if (0 === arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.elt[t].isArea();
                                    }
                                }
                            },
                            {
                                key: "isAnyNull",
                                value: function(t) {
                                    return this.elt[t].isAnyNull();
                                }
                            },
                            {
                                key: "setLocation",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        this.elt[t].setLocation($.ON, e);
                                    } else if (3 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = arguments[2];
                                        this.elt[n].setLocation(i, r);
                                    }
                                }
                            },
                            {
                                key: "isEqualOnSide",
                                value: function(t, e) {
                                    return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
                                }
                            },
                            {
                                key: "allPositionsEqual",
                                value: function(t, e) {
                                    return this.elt[t].allPositionsEqual(e);
                                }
                            },
                            {
                                key: "toLine",
                                value: function(t) {
                                    this.elt[t].isArea() && (this.elt[t] = new Me(this.elt[t].location[0]));
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
                                        if (Number.isInteger(arguments[0])) {
                                            var e = arguments[0];
                                            this.elt[0] = new Me(e), this.elt[1] = new Me(e);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            this.elt[0] = new Me(n.elt[0]), this.elt[1] = new Me(n.elt[1]);
                                        }
                                    } else if (2 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this.elt[0] = new Me(H.NONE), this.elt[1] = new Me(H.NONE), this.elt[i].setLocation(r);
                                    } else if (3 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2];
                                        this.elt[0] = new Me(s, a, o), this.elt[1] = new Me(s, a, o);
                                    } else if (4 === arguments.length) {
                                        var u = arguments[0], l = arguments[1], h = arguments[2], c = arguments[3];
                                        this.elt[0] = new Me(H.NONE, H.NONE, H.NONE), this.elt[1] = new Me(H.NONE, H.NONE, H.NONE), this.elt[u].setLocations(l, h, c);
                                    }
                                }
                            },
                            {
                                key: "toLineLabel",
                                value: function(e) {
                                    for(var n = new t(H.NONE), i = 0; i < 2; i++)n.setLocation(i, e.getLocation(i));
                                    return n;
                                }
                            }
                        ]);
                    }(), Pe = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "computeRing",
                                value: function() {
                                    if (null !== this._ring) return null;
                                    for(var t = new Array(this._pts.size()).fill(null), e = 0; e < this._pts.size(); e++)t[e] = this._pts.get(e);
                                    this._ring = this._geometryFactory.createLinearRing(t), this._isHole = ct.isCCW(this._ring.getCoordinates());
                                }
                            },
                            {
                                key: "isIsolated",
                                value: function() {
                                    return 1 === this._label.getGeometryCount();
                                }
                            },
                            {
                                key: "computePoints",
                                value: function(t) {
                                    this._startDe = t;
                                    var e = t, n = !0;
                                    do {
                                        if (null === e) throw new gt("Found null DirectedEdge");
                                        if (e.getEdgeRing() === this) throw new gt("Directed Edge visited twice during ring-building at " + e.getCoordinate());
                                        this._edges.add(e);
                                        var i = e.getLabel();
                                        G.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
                                    }while (e !== this._startDe);
                                }
                            },
                            {
                                key: "getLinearRing",
                                value: function() {
                                    return this._ring;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function(t) {
                                    return this._pts.get(t);
                                }
                            },
                            {
                                key: "computeMaxNodeDegree",
                                value: function() {
                                    this._maxNodeDegree = 0;
                                    var t = this._startDe;
                                    do {
                                        var e = t.getNode().getEdges().getOutgoingDegree(this);
                                        e > this._maxNodeDegree && (this._maxNodeDegree = e), t = this.getNext(t);
                                    }while (t !== this._startDe);
                                    this._maxNodeDegree *= 2;
                                }
                            },
                            {
                                key: "addPoints",
                                value: function(t, e, n) {
                                    var i = t.getCoordinates();
                                    if (e) {
                                        var r = 1;
                                        n && (r = 0);
                                        for(var s = r; s < i.length; s++)this._pts.add(i[s]);
                                    } else {
                                        var a = i.length - 2;
                                        n && (a = i.length - 1);
                                        for(var o = a; o >= 0; o--)this._pts.add(i[o]);
                                    }
                                }
                            },
                            {
                                key: "isHole",
                                value: function() {
                                    return this._isHole;
                                }
                            },
                            {
                                key: "setInResult",
                                value: function() {
                                    var t = this._startDe;
                                    do t.getEdge().setInResult(!0), t = t.getNext();
                                    while (t !== this._startDe);
                                }
                            },
                            {
                                key: "containsPoint",
                                value: function(t) {
                                    var e = this.getLinearRing();
                                    if (!e.getEnvelopeInternal().contains(t)) return !1;
                                    if (!be.isInRing(t, e.getCoordinates())) return !1;
                                    for(var n = this._holes.iterator(); n.hasNext();)if (n.next().containsPoint(t)) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "addHole",
                                value: function(t) {
                                    this._holes.add(t);
                                }
                            },
                            {
                                key: "isShell",
                                value: function() {
                                    return null === this._shell;
                                }
                            },
                            {
                                key: "getLabel",
                                value: function() {
                                    return this._label;
                                }
                            },
                            {
                                key: "getEdges",
                                value: function() {
                                    return this._edges;
                                }
                            },
                            {
                                key: "getMaxNodeDegree",
                                value: function() {
                                    return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
                                }
                            },
                            {
                                key: "getShell",
                                value: function() {
                                    return this._shell;
                                }
                            },
                            {
                                key: "mergeLabel",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.mergeLabel(t, 0), this.mergeLabel(t, 1);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[1], n = arguments[0].getLocation(e, $.RIGHT);
                                        if (n === H.NONE) return null;
                                        if (this._label.getLocation(e) === H.NONE) return this._label.setLocation(e, n), null;
                                    }
                                }
                            },
                            {
                                key: "setShell",
                                value: function(t) {
                                    this._shell = t, null !== t && t.addHole(this);
                                }
                            },
                            {
                                key: "toPolygon",
                                value: function(t) {
                                    for(var e = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++)e[n] = this._holes.get(n).getLinearRing();
                                    return t.createPolygon(this.getLinearRing(), e);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new yt, this._pts = new yt, this._label = new Ae(H.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new yt, this._geometryFactory = null, 0 === arguments.length) ;
                                    else if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        this._geometryFactory = e, this.computePoints(t), this.computeRing();
                                    }
                                }
                            }
                        ]);
                    }(), De = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "setEdgeRing",
                                value: function(t, e) {
                                    t.setMinEdgeRing(e);
                                }
                            },
                            {
                                key: "getNext",
                                value: function(t) {
                                    return t.getNextMin();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    Pe.constructor_.call(this, t, e);
                                }
                            }
                        ]);
                    }(Pe), Fe = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "buildMinimalRings",
                                value: function() {
                                    var t = new yt, e = this._startDe;
                                    do {
                                        if (null === e.getMinEdgeRing()) {
                                            var n = new De(e, this._geometryFactory);
                                            t.add(n);
                                        }
                                        e = e.getNext();
                                    }while (e !== this._startDe);
                                    return t;
                                }
                            },
                            {
                                key: "setEdgeRing",
                                value: function(t, e) {
                                    t.setEdgeRing(e);
                                }
                            },
                            {
                                key: "linkDirectedEdgesForMinimalEdgeRings",
                                value: function() {
                                    var t = this._startDe;
                                    do t.getNode().getEdges().linkMinimalDirectedEdges(this), t = t.getNext();
                                    while (t !== this._startDe);
                                }
                            },
                            {
                                key: "getNext",
                                value: function(t) {
                                    return t.getNext();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0], e = arguments[1];
                                    Pe.constructor_.call(this, t, e);
                                }
                            }
                        ]);
                    }(Pe), Ge = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "setVisited",
                                value: function(t) {
                                    this._isVisited = t;
                                }
                            },
                            {
                                key: "setInResult",
                                value: function(t) {
                                    this._isInResult = t;
                                }
                            },
                            {
                                key: "isCovered",
                                value: function() {
                                    return this._isCovered;
                                }
                            },
                            {
                                key: "isCoveredSet",
                                value: function() {
                                    return this._isCoveredSet;
                                }
                            },
                            {
                                key: "setLabel",
                                value: function(t) {
                                    this._label = t;
                                }
                            },
                            {
                                key: "getLabel",
                                value: function() {
                                    return this._label;
                                }
                            },
                            {
                                key: "setCovered",
                                value: function(t) {
                                    this._isCovered = t, this._isCoveredSet = !0;
                                }
                            },
                            {
                                key: "updateIM",
                                value: function(t) {
                                    G.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
                                }
                            },
                            {
                                key: "isInResult",
                                value: function() {
                                    return this._isInResult;
                                }
                            },
                            {
                                key: "isVisited",
                                value: function() {
                                    return this._isVisited;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this._label = t;
                                    }
                                }
                            }
                        ]);
                    }(), qe = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "isIncidentEdgeInResult",
                                value: function() {
                                    for(var t = this.getEdges().getEdges().iterator(); t.hasNext();)if (t.next().getEdge().isInResult()) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: "isIsolated",
                                value: function() {
                                    return 1 === this._label.getGeometryCount();
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this._coord;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    t.println("node " + this._coord + " lbl: " + this._label);
                                }
                            },
                            {
                                key: "computeIM",
                                value: function(t) {}
                            },
                            {
                                key: "computeMergedLocation",
                                value: function(t, e) {
                                    var n = H.NONE;
                                    if (n = this._label.getLocation(e), !t.isNull(e)) {
                                        var i = t.getLocation(e);
                                        n !== H.BOUNDARY && (n = i);
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "setLabel",
                                value: function() {
                                    if (2 !== arguments.length || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return f(i, "setLabel", this, 1).apply(this, arguments);
                                    var t = arguments[0], e = arguments[1];
                                    null === this._label ? this._label = new Ae(t, e) : this._label.setLocation(t, e);
                                }
                            },
                            {
                                key: "getEdges",
                                value: function() {
                                    return this._edges;
                                }
                            },
                            {
                                key: "mergeLabel",
                                value: function() {
                                    if (arguments[0] instanceof i) {
                                        var t = arguments[0];
                                        this.mergeLabel(t._label);
                                    } else if (arguments[0] instanceof Ae) for(var e = arguments[0], n = 0; n < 2; n++){
                                        var r = this.computeMergedLocation(e, n);
                                        this._label.getLocation(n) === H.NONE && this._label.setLocation(n, r);
                                    }
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    this._edges.insert(t), t.setNode(this);
                                }
                            },
                            {
                                key: "setLabelBoundary",
                                value: function(t) {
                                    if (null === this._label) return null;
                                    var e = H.NONE;
                                    null !== this._label && (e = this._label.getLocation(t));
                                    var n = null;
                                    switch(e){
                                        case H.BOUNDARY:
                                            n = H.INTERIOR;
                                            break;
                                        case H.INTERIOR:
                                        default:
                                            n = H.BOUNDARY;
                                    }
                                    this._label.setLocation(t, n);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._coord = null, this._edges = null;
                                    var t = arguments[0], e = arguments[1];
                                    this._coord = t, this._edges = e, this._label = new Ae(0, H.NONE);
                                }
                            }
                        ]);
                    }(Ge), Ye = function(t) {
                        function i() {
                            return n(this, i), e(this, i, arguments);
                        }
                        return l(i, t), s(i);
                    }(ee);
                    function ze(t) {
                        return null == t ? 0 : t.color;
                    }
                    function Xe(t) {
                        return null == t ? null : t.parent;
                    }
                    function Be(t, e) {
                        null !== t && (t.color = e);
                    }
                    function Ue(t) {
                        return null == t ? null : t.left;
                    }
                    function Ve(t) {
                        return null == t ? null : t.right;
                    }
                    var He = function(t) {
                        function i() {
                            var t;
                            return n(this, i), (t = e(this, i)).root_ = null, t.size_ = 0, t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "get",
                                value: function(t) {
                                    for(var e = this.root_; null !== e;){
                                        var n = t.compareTo(e.key);
                                        if (n < 0) e = e.left;
                                        else {
                                            if (!(n > 0)) return e.value;
                                            e = e.right;
                                        }
                                    }
                                    return null;
                                }
                            },
                            {
                                key: "put",
                                value: function(t, e) {
                                    if (null === this.root_) return this.root_ = {
                                        key: t,
                                        value: e,
                                        left: null,
                                        right: null,
                                        parent: null,
                                        color: 0,
                                        getValue: function() {
                                            return this.value;
                                        },
                                        getKey: function() {
                                            return this.key;
                                        }
                                    }, this.size_ = 1, null;
                                    var n, i, r = this.root_;
                                    do if (n = r, (i = t.compareTo(r.key)) < 0) r = r.left;
                                    else {
                                        if (!(i > 0)) {
                                            var s = r.value;
                                            return r.value = e, s;
                                        }
                                        r = r.right;
                                    }
                                    while (null !== r);
                                    var a = {
                                        key: t,
                                        left: null,
                                        right: null,
                                        value: e,
                                        parent: n,
                                        color: 0,
                                        getValue: function() {
                                            return this.value;
                                        },
                                        getKey: function() {
                                            return this.key;
                                        }
                                    };
                                    return i < 0 ? n.left = a : n.right = a, this.fixAfterInsertion(a), this.size_++, null;
                                }
                            },
                            {
                                key: "fixAfterInsertion",
                                value: function(t) {
                                    var e;
                                    for(t.color = 1; null != t && t !== this.root_ && 1 === t.parent.color;)Xe(t) === Ue(Xe(Xe(t))) ? 1 === ze(e = Ve(Xe(Xe(t)))) ? (Be(Xe(t), 0), Be(e, 0), Be(Xe(Xe(t)), 1), t = Xe(Xe(t))) : (t === Ve(Xe(t)) && (t = Xe(t), this.rotateLeft(t)), Be(Xe(t), 0), Be(Xe(Xe(t)), 1), this.rotateRight(Xe(Xe(t)))) : 1 === ze(e = Ue(Xe(Xe(t)))) ? (Be(Xe(t), 0), Be(e, 0), Be(Xe(Xe(t)), 1), t = Xe(Xe(t))) : (t === Ue(Xe(t)) && (t = Xe(t), this.rotateRight(t)), Be(Xe(t), 0), Be(Xe(Xe(t)), 1), this.rotateLeft(Xe(Xe(t))));
                                    this.root_.color = 0;
                                }
                            },
                            {
                                key: "values",
                                value: function() {
                                    var t = new yt, e = this.getFirstEntry();
                                    if (null !== e) for(t.add(e.value); null !== (e = i.successor(e));)t.add(e.value);
                                    return t;
                                }
                            },
                            {
                                key: "entrySet",
                                value: function() {
                                    var t = new J, e = this.getFirstEntry();
                                    if (null !== e) for(t.add(e); null !== (e = i.successor(e));)t.add(e);
                                    return t;
                                }
                            },
                            {
                                key: "rotateLeft",
                                value: function(t) {
                                    if (null != t) {
                                        var e = t.right;
                                        t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.left === t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e;
                                    }
                                }
                            },
                            {
                                key: "rotateRight",
                                value: function(t) {
                                    if (null != t) {
                                        var e = t.left;
                                        t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.right === t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e;
                                    }
                                }
                            },
                            {
                                key: "getFirstEntry",
                                value: function() {
                                    var t = this.root_;
                                    if (null != t) for(; null != t.left;)t = t.left;
                                    return t;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this.size_;
                                }
                            },
                            {
                                key: "containsKey",
                                value: function(t) {
                                    for(var e = this.root_; null !== e;){
                                        var n = t.compareTo(e.key);
                                        if (n < 0) e = e.left;
                                        else {
                                            if (!(n > 0)) return !0;
                                            e = e.right;
                                        }
                                    }
                                    return !1;
                                }
                            }
                        ], [
                            {
                                key: "successor",
                                value: function(t) {
                                    var e;
                                    if (null === t) return null;
                                    if (null !== t.right) {
                                        for(e = t.right; null !== e.left;)e = e.left;
                                        return e;
                                    }
                                    e = t.parent;
                                    for(var n = t; null !== e && n === e.right;)n = e, e = e.parent;
                                    return e;
                                }
                            }
                        ]);
                    }(Ye), Ze = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "find",
                                value: function(t) {
                                    return this.nodeMap.get(t);
                                }
                            },
                            {
                                key: "addNode",
                                value: function() {
                                    if (arguments[0] instanceof X) {
                                        var t = arguments[0], e = this.nodeMap.get(t);
                                        return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
                                    }
                                    if (arguments[0] instanceof qe) {
                                        var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
                                        return null === i ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
                                    }
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    for(var e = this.iterator(); e.hasNext();)e.next().print(t);
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return this.nodeMap.values().iterator();
                                }
                            },
                            {
                                key: "values",
                                value: function() {
                                    return this.nodeMap.values();
                                }
                            },
                            {
                                key: "getBoundaryNodes",
                                value: function(t) {
                                    for(var e = new yt, n = this.iterator(); n.hasNext();){
                                        var i = n.next();
                                        i.getLabel().getLocation(t) === H.BOUNDARY && e.add(i);
                                    }
                                    return e;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    var e = t.getCoordinate();
                                    this.addNode(e).add(t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this.nodeMap = new He, this.nodeFact = null;
                                    var t = arguments[0];
                                    this.nodeFact = t;
                                }
                            }
                        ]);
                    }(), je = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "isNorthern",
                                value: function(e) {
                                    return e === t.NE || e === t.NW;
                                }
                            },
                            {
                                key: "isOpposite",
                                value: function(t, e) {
                                    return t !== e && 2 === (t - e + 4) % 4;
                                }
                            },
                            {
                                key: "commonHalfPlane",
                                value: function(t, e) {
                                    if (t === e) return t;
                                    if (2 === (t - e + 4) % 4) return -1;
                                    var n = t < e ? t : e;
                                    return 0 === n && 3 === (t > e ? t : e) ? 3 : n;
                                }
                            },
                            {
                                key: "isInHalfPlane",
                                value: function(e, n) {
                                    return n === t.SE ? e === t.SE || e === t.SW : e === n || e === n + 1;
                                }
                            },
                            {
                                key: "quadrant",
                                value: function() {
                                    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                        var e = arguments[0], n = arguments[1];
                                        if (0 === e && 0 === n) throw new m("Cannot compute the quadrant for point ( " + e + ", " + n + " )");
                                        return e >= 0 ? n >= 0 ? t.NE : t.SE : n >= 0 ? t.NW : t.SW;
                                    }
                                    if (arguments[0] instanceof X && arguments[1] instanceof X) {
                                        var i = arguments[0], r = arguments[1];
                                        if (r.x === i.x && r.y === i.y) throw new m("Cannot compute the quadrant for two identical points " + i);
                                        return r.x >= i.x ? r.y >= i.y ? t.NE : t.SE : r.y >= i.y ? t.NW : t.SW;
                                    }
                                }
                            }
                        ]);
                    }();
                    je.NE = 0, je.NW = 1, je.SW = 2, je.SE = 3;
                    var We = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "compareDirection",
                                value: function(t) {
                                    return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : ct.index(t._p0, t._p1, this._p1);
                                }
                            },
                            {
                                key: "getDy",
                                value: function() {
                                    return this._dy;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this._p0;
                                }
                            },
                            {
                                key: "setNode",
                                value: function(t) {
                                    this._node = t;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), r = n.substring(i + 1);
                                    t.print("  " + r + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this.compareDirection(e);
                                }
                            },
                            {
                                key: "getDirectedCoordinate",
                                value: function() {
                                    return this._p1;
                                }
                            },
                            {
                                key: "getDx",
                                value: function() {
                                    return this._dx;
                                }
                            },
                            {
                                key: "getLabel",
                                value: function() {
                                    return this._label;
                                }
                            },
                            {
                                key: "getEdge",
                                value: function() {
                                    return this._edge;
                                }
                            },
                            {
                                key: "getQuadrant",
                                value: function() {
                                    return this._quadrant;
                                }
                            },
                            {
                                key: "getNode",
                                value: function() {
                                    return this._node;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf(".");
                                    return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
                                }
                            },
                            {
                                key: "computeLabel",
                                value: function(t) {}
                            },
                            {
                                key: "init",
                                value: function(t, e) {
                                    this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = je.quadrant(this._dx, this._dy), G.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found");
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, 1 === arguments.length) {
                                        var e = arguments[0];
                                        this._edge = e;
                                    } else if (3 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = arguments[2];
                                        t.constructor_.call(this, n, i, r, null);
                                    } else if (4 === arguments.length) {
                                        var s = arguments[0], a = arguments[1], o = arguments[2], u = arguments[3];
                                        t.constructor_.call(this, s), this.init(a, o), this._label = u;
                                    }
                                }
                            }
                        ]);
                    }(), Ke = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getNextMin",
                                value: function() {
                                    return this._nextMin;
                                }
                            },
                            {
                                key: "getDepth",
                                value: function(t) {
                                    return this._depth[t];
                                }
                            },
                            {
                                key: "setVisited",
                                value: function(t) {
                                    this._isVisited = t;
                                }
                            },
                            {
                                key: "computeDirectedLabel",
                                value: function() {
                                    this._label = new Ae(this._edge.getLabel()), this._isForward || this._label.flip();
                                }
                            },
                            {
                                key: "getNext",
                                value: function() {
                                    return this._next;
                                }
                            },
                            {
                                key: "setDepth",
                                value: function(t, e) {
                                    if (-999 !== this._depth[t] && this._depth[t] !== e) throw new gt("assigned depths do not match", this.getCoordinate());
                                    this._depth[t] = e;
                                }
                            },
                            {
                                key: "isInteriorAreaEdge",
                                value: function() {
                                    for(var t = !0, e = 0; e < 2; e++)this._label.isArea(e) && this._label.getLocation(e, $.LEFT) === H.INTERIOR && this._label.getLocation(e, $.RIGHT) === H.INTERIOR || (t = !1);
                                    return t;
                                }
                            },
                            {
                                key: "setNextMin",
                                value: function(t) {
                                    this._nextMin = t;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    f(i, "print", this, 1).call(this, t), t.print(" " + this._depth[$.LEFT] + "/" + this._depth[$.RIGHT]), t.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t.print(" inResult");
                                }
                            },
                            {
                                key: "setMinEdgeRing",
                                value: function(t) {
                                    this._minEdgeRing = t;
                                }
                            },
                            {
                                key: "isLineEdge",
                                value: function() {
                                    var t = this._label.isLine(0) || this._label.isLine(1), e = !this._label.isArea(0) || this._label.allPositionsEqual(0, H.EXTERIOR), n = !this._label.isArea(1) || this._label.allPositionsEqual(1, H.EXTERIOR);
                                    return t && e && n;
                                }
                            },
                            {
                                key: "setEdgeRing",
                                value: function(t) {
                                    this._edgeRing = t;
                                }
                            },
                            {
                                key: "getMinEdgeRing",
                                value: function() {
                                    return this._minEdgeRing;
                                }
                            },
                            {
                                key: "getDepthDelta",
                                value: function() {
                                    var t = this._edge.getDepthDelta();
                                    return this._isForward || (t = -t), t;
                                }
                            },
                            {
                                key: "setInResult",
                                value: function(t) {
                                    this._isInResult = t;
                                }
                            },
                            {
                                key: "getSym",
                                value: function() {
                                    return this._sym;
                                }
                            },
                            {
                                key: "isForward",
                                value: function() {
                                    return this._isForward;
                                }
                            },
                            {
                                key: "getEdge",
                                value: function() {
                                    return this._edge;
                                }
                            },
                            {
                                key: "printEdge",
                                value: function(t) {
                                    this.print(t), t.print(" "), this._isForward ? this._edge.print(t) : this._edge.printReverse(t);
                                }
                            },
                            {
                                key: "setSym",
                                value: function(t) {
                                    this._sym = t;
                                }
                            },
                            {
                                key: "setVisitedEdge",
                                value: function(t) {
                                    this.setVisited(t), this._sym.setVisited(t);
                                }
                            },
                            {
                                key: "setEdgeDepths",
                                value: function(t, e) {
                                    var n = this.getEdge().getDepthDelta();
                                    this._isForward || (n = -n);
                                    var i = 1;
                                    t === $.LEFT && (i = -1);
                                    var r = $.opposite(t), s = e + n * i;
                                    this.setDepth(t, e), this.setDepth(r, s);
                                }
                            },
                            {
                                key: "getEdgeRing",
                                value: function() {
                                    return this._edgeRing;
                                }
                            },
                            {
                                key: "isInResult",
                                value: function() {
                                    return this._isInResult;
                                }
                            },
                            {
                                key: "setNext",
                                value: function(t) {
                                    this._next = t;
                                }
                            },
                            {
                                key: "isVisited",
                                value: function() {
                                    return this._isVisited;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [
                                        0,
                                        -999,
                                        -999
                                    ];
                                    var t = arguments[0], e = arguments[1];
                                    if (We.constructor_.call(this, t), this._isForward = e, e) this.init(t.getCoordinate(0), t.getCoordinate(1));
                                    else {
                                        var n = t.getNumPoints() - 1;
                                        this.init(t.getCoordinate(n), t.getCoordinate(n - 1));
                                    }
                                    this.computeDirectedLabel();
                                }
                            },
                            {
                                key: "depthFactor",
                                value: function(t, e) {
                                    return t === H.EXTERIOR && e === H.INTERIOR ? 1 : t === H.INTERIOR && e === H.EXTERIOR ? -1 : 0;
                                }
                            }
                        ]);
                    }(We), Je = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "createNode",
                                value: function(t) {
                                    return new qe(t, null);
                                }
                            }
                        ]);
                    }(), Qe = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "printEdges",
                                value: function(t) {
                                    t.println("Edges:");
                                    for(var e = 0; e < this._edges.size(); e++){
                                        t.println("edge " + e + ":");
                                        var n = this._edges.get(e);
                                        n.print(t), n.eiList.print(t);
                                    }
                                }
                            },
                            {
                                key: "find",
                                value: function(t) {
                                    return this._nodes.find(t);
                                }
                            },
                            {
                                key: "addNode",
                                value: function() {
                                    if (arguments[0] instanceof qe) {
                                        var t = arguments[0];
                                        return this._nodes.addNode(t);
                                    }
                                    if (arguments[0] instanceof X) {
                                        var e = arguments[0];
                                        return this._nodes.addNode(e);
                                    }
                                }
                            },
                            {
                                key: "getNodeIterator",
                                value: function() {
                                    return this._nodes.iterator();
                                }
                            },
                            {
                                key: "linkResultDirectedEdges",
                                value: function() {
                                    for(var t = this._nodes.iterator(); t.hasNext();)t.next().getEdges().linkResultDirectedEdges();
                                }
                            },
                            {
                                key: "debugPrintln",
                                value: function(t) {
                                    mt.out.println(t);
                                }
                            },
                            {
                                key: "isBoundaryNode",
                                value: function(t, e) {
                                    var n = this._nodes.find(e);
                                    if (null === n) return !1;
                                    var i = n.getLabel();
                                    return null !== i && i.getLocation(t) === H.BOUNDARY;
                                }
                            },
                            {
                                key: "linkAllDirectedEdges",
                                value: function() {
                                    for(var t = this._nodes.iterator(); t.hasNext();)t.next().getEdges().linkAllDirectedEdges();
                                }
                            },
                            {
                                key: "matchInSameDirection",
                                value: function(t, e, n, i) {
                                    return !!t.equals(n) && ct.index(t, e, i) === ct.COLLINEAR && je.quadrant(t, e) === je.quadrant(n, i);
                                }
                            },
                            {
                                key: "getEdgeEnds",
                                value: function() {
                                    return this._edgeEndList;
                                }
                            },
                            {
                                key: "debugPrint",
                                value: function(t) {
                                    mt.out.print(t);
                                }
                            },
                            {
                                key: "getEdgeIterator",
                                value: function() {
                                    return this._edges.iterator();
                                }
                            },
                            {
                                key: "findEdgeInSameDirection",
                                value: function(t, e) {
                                    for(var n = 0; n < this._edges.size(); n++){
                                        var i = this._edges.get(n), r = i.getCoordinates();
                                        if (this.matchInSameDirection(t, e, r[0], r[1])) return i;
                                        if (this.matchInSameDirection(t, e, r[r.length - 1], r[r.length - 2])) return i;
                                    }
                                    return null;
                                }
                            },
                            {
                                key: "insertEdge",
                                value: function(t) {
                                    this._edges.add(t);
                                }
                            },
                            {
                                key: "findEdgeEnd",
                                value: function(t) {
                                    for(var e = this.getEdgeEnds().iterator(); e.hasNext();){
                                        var n = e.next();
                                        if (n.getEdge() === t) return n;
                                    }
                                    return null;
                                }
                            },
                            {
                                key: "addEdges",
                                value: function(t) {
                                    for(var e = t.iterator(); e.hasNext();){
                                        var n = e.next();
                                        this._edges.add(n);
                                        var i = new Ke(n, !0), r = new Ke(n, !1);
                                        i.setSym(r), r.setSym(i), this.add(i), this.add(r);
                                    }
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    this._nodes.add(t), this._edgeEndList.add(t);
                                }
                            },
                            {
                                key: "getNodes",
                                value: function() {
                                    return this._nodes.values();
                                }
                            },
                            {
                                key: "findEdge",
                                value: function(t, e) {
                                    for(var n = 0; n < this._edges.size(); n++){
                                        var i = this._edges.get(n), r = i.getCoordinates();
                                        if (t.equals(r[0]) && e.equals(r[1])) return i;
                                    }
                                    return null;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._edges = new yt, this._nodes = null, this._edgeEndList = new yt, 0 === arguments.length) this._nodes = new Ze(new Je);
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this._nodes = new Ze(t);
                                    }
                                }
                            },
                            {
                                key: "linkResultDirectedEdges",
                                value: function(t) {
                                    for(var e = t.iterator(); e.hasNext();)e.next().getEdges().linkResultDirectedEdges();
                                }
                            }
                        ]);
                    }(), $e = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "sortShellsAndHoles",
                                value: function(t, e, n) {
                                    for(var i = t.iterator(); i.hasNext();){
                                        var r = i.next();
                                        r.isHole() ? n.add(r) : e.add(r);
                                    }
                                }
                            },
                            {
                                key: "computePolygons",
                                value: function(t) {
                                    for(var e = new yt, n = t.iterator(); n.hasNext();){
                                        var i = n.next().toPolygon(this._geometryFactory);
                                        e.add(i);
                                    }
                                    return e;
                                }
                            },
                            {
                                key: "placeFreeHoles",
                                value: function(e, n) {
                                    for(var i = n.iterator(); i.hasNext();){
                                        var r = i.next();
                                        if (null === r.getShell()) {
                                            var s = t.findEdgeRingContaining(r, e);
                                            if (null === s) throw new gt("unable to assign hole to a shell", r.getCoordinate(0));
                                            r.setShell(s);
                                        }
                                    }
                                }
                            },
                            {
                                key: "buildMinimalEdgeRings",
                                value: function(t, e, n) {
                                    for(var i = new yt, r = t.iterator(); r.hasNext();){
                                        var s = r.next();
                                        if (s.getMaxNodeDegree() > 2) {
                                            s.linkDirectedEdgesForMinimalEdgeRings();
                                            var a = s.buildMinimalRings(), o = this.findShell(a);
                                            null !== o ? (this.placePolygonHoles(o, a), e.add(o)) : n.addAll(a);
                                        } else i.add(s);
                                    }
                                    return i;
                                }
                            },
                            {
                                key: "buildMaximalEdgeRings",
                                value: function(t) {
                                    for(var e = new yt, n = t.iterator(); n.hasNext();){
                                        var i = n.next();
                                        if (i.isInResult() && i.getLabel().isArea() && null === i.getEdgeRing()) {
                                            var r = new Fe(i, this._geometryFactory);
                                            e.add(r), r.setInResult();
                                        }
                                    }
                                    return e;
                                }
                            },
                            {
                                key: "placePolygonHoles",
                                value: function(t, e) {
                                    for(var n = e.iterator(); n.hasNext();){
                                        var i = n.next();
                                        i.isHole() && i.setShell(t);
                                    }
                                }
                            },
                            {
                                key: "getPolygons",
                                value: function() {
                                    return this.computePolygons(this._shellList);
                                }
                            },
                            {
                                key: "findShell",
                                value: function(t) {
                                    for(var e = 0, n = null, i = t.iterator(); i.hasNext();){
                                        var r = i.next();
                                        r.isHole() || (n = r, e++);
                                    }
                                    return G.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
                                }
                            },
                            {
                                key: "add",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.add(t.getEdgeEnds(), t.getNodes());
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        Qe.linkResultDirectedEdges(n);
                                        var i = this.buildMaximalEdgeRings(e), r = new yt, s = this.buildMinimalEdgeRings(i, this._shellList, r);
                                        this.sortShellsAndHoles(s, this._shellList, r), this.placeFreeHoles(this._shellList, r);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._geometryFactory = null, this._shellList = new yt;
                                    var t = arguments[0];
                                    this._geometryFactory = t;
                                }
                            },
                            {
                                key: "findEdgeRingContaining",
                                value: function(t, e) {
                                    for(var n = t.getLinearRing(), i = n.getEnvelopeInternal(), r = n.getCoordinateN(0), s = null, a = null, o = e.iterator(); o.hasNext();){
                                        var u = o.next(), l = u.getLinearRing(), h = l.getEnvelopeInternal();
                                        if (!h.equals(i) && h.contains(i)) {
                                            r = jt.ptNotInList(n.getCoordinates(), l.getCoordinates());
                                            var c = !1;
                                            be.isInRing(r, l.getCoordinates()) && (c = !0), c && (null === s || a.contains(h)) && (a = (s = u).getLinearRing().getEnvelopeInternal());
                                        }
                                    }
                                    return s;
                                }
                            }
                        ]);
                    }(), tn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "getBounds",
                                value: function() {}
                            }
                        ]);
                    }(), en = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getItem",
                                value: function() {
                                    return this._item;
                                }
                            },
                            {
                                key: "getBounds",
                                value: function() {
                                    return this._bounds;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        tn,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._bounds = null, this._item = null;
                                    var t = arguments[0], e = arguments[1];
                                    this._bounds = t, this._item = e;
                                }
                            }
                        ]);
                    }(), nn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "poll",
                                value: function() {
                                    if (this.isEmpty()) return null;
                                    var t = this._items.get(1);
                                    return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this._size;
                                }
                            },
                            {
                                key: "reorder",
                                value: function(t) {
                                    for(var e = null, n = this._items.get(t); 2 * t <= this._size && ((e = 2 * t) !== this._size && this._items.get(e + 1).compareTo(this._items.get(e)) < 0 && e++, this._items.get(e).compareTo(n) < 0); t = e)this._items.set(t, this._items.get(e));
                                    this._items.set(t, n);
                                }
                            },
                            {
                                key: "clear",
                                value: function() {
                                    this._size = 0, this._items.clear();
                                }
                            },
                            {
                                key: "peek",
                                value: function() {
                                    return this.isEmpty() ? null : this._items.get(1);
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return 0 === this._size;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    this._items.add(null), this._size += 1;
                                    var e = this._size;
                                    for(this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(e / 2))) < 0; e /= 2)this._items.set(e, this._items.get(Math.trunc(e / 2)));
                                    this._items.set(e, t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._size = null, this._items = null, this._size = 0, this._items = new yt, this._items.add(null);
                                }
                            }
                        ]);
                    }(), rn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "insert",
                                value: function(t, e) {}
                            },
                            {
                                key: "remove",
                                value: function(t, e) {}
                            },
                            {
                                key: "query",
                                value: function() {}
                            }
                        ]);
                    }(), sn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getLevel",
                                value: function() {
                                    return this._level;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this._childBoundables.size();
                                }
                            },
                            {
                                key: "getChildBoundables",
                                value: function() {
                                    return this._childBoundables;
                                }
                            },
                            {
                                key: "addChildBoundable",
                                value: function(t) {
                                    G.isTrue(null === this._bounds), this._childBoundables.add(t);
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return this._childBoundables.isEmpty();
                                }
                            },
                            {
                                key: "getBounds",
                                value: function() {
                                    return null === this._bounds && (this._bounds = this.computeBounds()), this._bounds;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        tn,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._childBoundables = new yt, this._bounds = null, this._level = null, 0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this._level = t;
                                    }
                                }
                            }
                        ]);
                    }(), an = {
                        reverseOrder: function() {
                            return {
                                compare: function(t, e) {
                                    return e.compareTo(t);
                                }
                            };
                        },
                        min: function(t) {
                            return an.sort(t), t.get(0);
                        },
                        sort: function(t, e) {
                            var n = t.toArray();
                            e ? At.sort(n, e) : At.sort(n);
                            for(var i = t.iterator(), r = 0, s = n.length; r < s; r++)i.next(), i.set(n[r]);
                        },
                        singletonList: function(t) {
                            var e = new yt;
                            return e.add(t), e;
                        }
                    }, on = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "maxDistance",
                                value: function(e, n, i, r, s, a, o, u) {
                                    var l = t.distance(e, n, s, a);
                                    return l = Math.max(l, t.distance(e, n, o, u)), l = Math.max(l, t.distance(i, r, s, a)), l = Math.max(l, t.distance(i, r, o, u));
                                }
                            },
                            {
                                key: "distance",
                                value: function(t, e, n, i) {
                                    var r = n - t, s = i - e;
                                    return Math.sqrt(r * r + s * s);
                                }
                            },
                            {
                                key: "maximumDistance",
                                value: function(e, n) {
                                    var i = Math.min(e.getMinX(), n.getMinX()), r = Math.min(e.getMinY(), n.getMinY()), s = Math.max(e.getMaxX(), n.getMaxX()), a = Math.max(e.getMaxY(), n.getMaxY());
                                    return t.distance(i, r, s, a);
                                }
                            },
                            {
                                key: "minMaxDistance",
                                value: function(e, n) {
                                    var i = e.getMinX(), r = e.getMinY(), s = e.getMaxX(), a = e.getMaxY(), o = n.getMinX(), u = n.getMinY(), l = n.getMaxX(), h = n.getMaxY(), c = t.maxDistance(i, r, i, a, o, u, o, h);
                                    return c = Math.min(c, t.maxDistance(i, r, i, a, o, u, l, u)), c = Math.min(c, t.maxDistance(i, r, i, a, l, h, o, h)), c = Math.min(c, t.maxDistance(i, r, i, a, l, h, l, u)), c = Math.min(c, t.maxDistance(i, r, s, r, o, u, o, h)), c = Math.min(c, t.maxDistance(i, r, s, r, o, u, l, u)), c = Math.min(c, t.maxDistance(i, r, s, r, l, h, o, h)), c = Math.min(c, t.maxDistance(i, r, s, r, l, h, l, u)), c = Math.min(c, t.maxDistance(s, a, i, a, o, u, o, h)), c = Math.min(c, t.maxDistance(s, a, i, a, o, u, l, u)), c = Math.min(c, t.maxDistance(s, a, i, a, l, h, o, h)), c = Math.min(c, t.maxDistance(s, a, i, a, l, h, l, u)), c = Math.min(c, t.maxDistance(s, a, s, r, o, u, o, h)), c = Math.min(c, t.maxDistance(s, a, s, r, o, u, l, u)), c = Math.min(c, t.maxDistance(s, a, s, r, l, h, o, h)), c = Math.min(c, t.maxDistance(s, a, s, r, l, h, l, u));
                                }
                            }
                        ]);
                    }(), un = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "maximumDistance",
                                value: function() {
                                    return on.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
                                }
                            },
                            {
                                key: "expandToQueue",
                                value: function(e, n) {
                                    var i = t.isComposite(this._boundable1), r = t.isComposite(this._boundable2);
                                    if (i && r) return t.area(this._boundable1) > t.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, e, n), null) : (this.expand(this._boundable2, this._boundable1, !0, e, n), null);
                                    if (i) return this.expand(this._boundable1, this._boundable2, !1, e, n), null;
                                    if (r) return this.expand(this._boundable2, this._boundable1, !0, e, n), null;
                                    throw new m("neither boundable is composite");
                                }
                            },
                            {
                                key: "isLeaves",
                                value: function() {
                                    return !(t.isComposite(this._boundable1) || t.isComposite(this._boundable2));
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
                                }
                            },
                            {
                                key: "expand",
                                value: function(e, n, i, r, s) {
                                    for(var a = e.getChildBoundables().iterator(); a.hasNext();){
                                        var o = a.next(), u = null;
                                        (u = i ? new t(n, o, this._itemDistance) : new t(o, n, this._itemDistance)).getDistance() < s && r.add(u);
                                    }
                                }
                            },
                            {
                                key: "getBoundable",
                                value: function(t) {
                                    return 0 === t ? this._boundable1 : this._boundable2;
                                }
                            },
                            {
                                key: "getDistance",
                                value: function() {
                                    return this._distance;
                                }
                            },
                            {
                                key: "distance",
                                value: function() {
                                    return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
                                }
                            },
                            {
                                key: "area",
                                value: function(t) {
                                    return t.getBounds().getArea();
                                }
                            },
                            {
                                key: "isComposite",
                                value: function(t) {
                                    return t instanceof sn;
                                }
                            }
                        ]);
                    }(), ln = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "visitItem",
                                value: function(t) {}
                            }
                        ]);
                    }(), hn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "queryInternal",
                                value: function() {
                                    if (rt(arguments[2], ln) && arguments[0] instanceof Object && arguments[1] instanceof sn) for(var t = arguments[0], e = arguments[2], n = arguments[1].getChildBoundables(), i = 0; i < n.size(); i++){
                                        var r = n.get(i);
                                        this.getIntersectsOp().intersects(r.getBounds(), t) && (r instanceof sn ? this.queryInternal(t, r, e) : r instanceof en ? e.visitItem(r.getItem()) : G.shouldNeverReachHere());
                                    }
                                    else if (rt(arguments[2], nt) && arguments[0] instanceof Object && arguments[1] instanceof sn) for(var s = arguments[0], a = arguments[2], o = arguments[1].getChildBoundables(), u = 0; u < o.size(); u++){
                                        var l = o.get(u);
                                        this.getIntersectsOp().intersects(l.getBounds(), s) && (l instanceof sn ? this.queryInternal(s, l, a) : l instanceof en ? a.add(l.getItem()) : G.shouldNeverReachHere());
                                    }
                                }
                            },
                            {
                                key: "getNodeCapacity",
                                value: function() {
                                    return this._nodeCapacity;
                                }
                            },
                            {
                                key: "lastNode",
                                value: function(t) {
                                    return t.get(t.size() - 1);
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
                                    if (1 === arguments.length) {
                                        for(var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();){
                                            var n = e.next();
                                            n instanceof sn ? t += this.size(n) : n instanceof en && (t += 1);
                                        }
                                        return t;
                                    }
                                }
                            },
                            {
                                key: "removeItem",
                                value: function(t, e) {
                                    for(var n = null, i = t.getChildBoundables().iterator(); i.hasNext();){
                                        var r = i.next();
                                        r instanceof en && r.getItem() === e && (n = r);
                                    }
                                    return null !== n && (t.getChildBoundables().remove(n), !0);
                                }
                            },
                            {
                                key: "itemsTree",
                                value: function() {
                                    if (0 === arguments.length) {
                                        this.build();
                                        var t = this.itemsTree(this._root);
                                        return null === t ? new yt : t;
                                    }
                                    if (1 === arguments.length) {
                                        for(var e = arguments[0], n = new yt, i = e.getChildBoundables().iterator(); i.hasNext();){
                                            var r = i.next();
                                            if (r instanceof sn) {
                                                var s = this.itemsTree(r);
                                                null !== s && n.add(s);
                                            } else r instanceof en ? n.add(r.getItem()) : G.shouldNeverReachHere();
                                        }
                                        return n.size() <= 0 ? null : n;
                                    }
                                }
                            },
                            {
                                key: "insert",
                                value: function(t, e) {
                                    G.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new en(t, e));
                                }
                            },
                            {
                                key: "boundablesAtLevel",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0], e = new yt;
                                        return this.boundablesAtLevel(t, this._root, e), e;
                                    }
                                    if (3 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = arguments[2];
                                        if (G.isTrue(n > -2), i.getLevel() === n) return r.add(i), null;
                                        for(var s = i.getChildBoundables().iterator(); s.hasNext();){
                                            var a = s.next();
                                            a instanceof sn ? this.boundablesAtLevel(n, a, r) : (G.isTrue(a instanceof en), -1 === n && r.add(a));
                                        }
                                        return null;
                                    }
                                }
                            },
                            {
                                key: "query",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.build();
                                        var e = new yt;
                                        return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.queryInternal(t, this._root, e), e;
                                    }
                                    if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        if (this.build(), this.isEmpty()) return null;
                                        this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.queryInternal(n, this._root, i);
                                    }
                                }
                            },
                            {
                                key: "build",
                                value: function() {
                                    if (this._built) return null;
                                    this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
                                }
                            },
                            {
                                key: "getRoot",
                                value: function() {
                                    return this.build(), this._root;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, e);
                                    }
                                    if (3 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = arguments[2], s = this.removeItem(i, r);
                                        if (s) return !0;
                                        for(var a = null, o = i.getChildBoundables().iterator(); o.hasNext();){
                                            var u = o.next();
                                            if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof sn && (s = this.remove(n, u, r))) {
                                                a = u;
                                                break;
                                            }
                                        }
                                        return null !== a && a.getChildBoundables().isEmpty() && i.getChildBoundables().remove(a), s;
                                    }
                                }
                            },
                            {
                                key: "createHigherLevels",
                                value: function(t, e) {
                                    G.isTrue(!t.isEmpty());
                                    var n = this.createParentBoundables(t, e + 1);
                                    return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1);
                                }
                            },
                            {
                                key: "depth",
                                value: function() {
                                    if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
                                    if (1 === arguments.length) {
                                        for(var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();){
                                            var n = e.next();
                                            if (n instanceof sn) {
                                                var i = this.depth(n);
                                                i > t && (t = i);
                                            }
                                        }
                                        return t + 1;
                                    }
                                }
                            },
                            {
                                key: "createParentBoundables",
                                value: function(t, e) {
                                    G.isTrue(!t.isEmpty());
                                    var n = new yt;
                                    n.add(this.createNode(e));
                                    var i = new yt(t);
                                    an.sort(i, this.getComparator());
                                    for(var r = i.iterator(); r.hasNext();){
                                        var s = r.next();
                                        this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(s);
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "isEmpty",
                                value: function() {
                                    return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._root = null, this._built = !1, this._itemBoundables = new yt, this._nodeCapacity = null, 0 === arguments.length) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        G.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
                                    }
                                }
                            },
                            {
                                key: "compareDoubles",
                                value: function(t, e) {
                                    return t > e ? 1 : t < e ? -1 : 0;
                                }
                            }
                        ]);
                    }();
                    hn.IntersectsOp = function() {}, hn.DEFAULT_NODE_CAPACITY = 10;
                    var cn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "distance",
                                value: function(t, e) {}
                            }
                        ]);
                    }(), fn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "createParentBoundablesFromVerticalSlices",
                                value: function(t, e) {
                                    G.isTrue(t.length > 0);
                                    for(var n = new yt, i = 0; i < t.length; i++)n.addAll(this.createParentBoundablesFromVerticalSlice(t[i], e));
                                    return n;
                                }
                            },
                            {
                                key: "nearestNeighbourK",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        return this.nearestNeighbourK(t, A.POSITIVE_INFINITY, e);
                                    }
                                    if (3 === arguments.length) {
                                        var n = arguments[0], r = arguments[2], s = arguments[1], a = new nn;
                                        a.add(n);
                                        for(var o = new nn; !a.isEmpty() && s >= 0;){
                                            var u = a.poll(), l = u.getDistance();
                                            if (l >= s) break;
                                            if (u.isLeaves()) if (o.size() < r) o.add(u);
                                            else o.peek().getDistance() > l && (o.poll(), o.add(u)), s = o.peek().getDistance();
                                            else u.expandToQueue(a, s);
                                        }
                                        return i.getItems(o);
                                    }
                                }
                            },
                            {
                                key: "createNode",
                                value: function(t) {
                                    return new gn(t);
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return 0 === arguments.length ? f(i, "size", this, 1).call(this) : f(i, "size", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "insert",
                                value: function() {
                                    if (!(2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof U)) return f(i, "insert", this, 1).apply(this, arguments);
                                    var t = arguments[0], e = arguments[1];
                                    if (t.isNull()) return null;
                                    f(i, "insert", this, 1).call(this, t, e);
                                }
                            },
                            {
                                key: "getIntersectsOp",
                                value: function() {
                                    return i.intersectsOp;
                                }
                            },
                            {
                                key: "verticalSlices",
                                value: function(t, e) {
                                    for(var n = Math.trunc(Math.ceil(t.size() / e)), i = new Array(e).fill(null), r = t.iterator(), s = 0; s < e; s++){
                                        i[s] = new yt;
                                        for(var a = 0; r.hasNext() && a < n;){
                                            var o = r.next();
                                            i[s].add(o), a++;
                                        }
                                    }
                                    return i;
                                }
                            },
                            {
                                key: "query",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return f(i, "query", this, 1).call(this, t);
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        f(i, "query", this, 1).call(this, e, n);
                                    }
                                }
                            },
                            {
                                key: "getComparator",
                                value: function() {
                                    return i.yComparator;
                                }
                            },
                            {
                                key: "createParentBoundablesFromVerticalSlice",
                                value: function(t, e) {
                                    return f(i, "createParentBoundables", this, 1).call(this, t, e);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    if (2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof U) {
                                        var t = arguments[0], e = arguments[1];
                                        return f(i, "remove", this, 1).call(this, t, e);
                                    }
                                    return f(i, "remove", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "depth",
                                value: function() {
                                    return 0 === arguments.length ? f(i, "depth", this, 1).call(this) : f(i, "depth", this, 1).apply(this, arguments);
                                }
                            },
                            {
                                key: "createParentBoundables",
                                value: function(t, e) {
                                    G.isTrue(!t.isEmpty());
                                    var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())), r = new yt(t);
                                    an.sort(r, i.xComparator);
                                    var s = this.verticalSlices(r, Math.trunc(Math.ceil(Math.sqrt(n))));
                                    return this.createParentBoundablesFromVerticalSlices(s, e);
                                }
                            },
                            {
                                key: "nearestNeighbour",
                                value: function() {
                                    if (1 === arguments.length) {
                                        if (rt(arguments[0], cn)) {
                                            var t = arguments[0];
                                            if (this.isEmpty()) return null;
                                            var e = new un(this.getRoot(), this.getRoot(), t);
                                            return this.nearestNeighbour(e);
                                        }
                                        if (arguments[0] instanceof un) {
                                            var n = arguments[0], i = A.POSITIVE_INFINITY, r = null, s = new nn;
                                            for(s.add(n); !s.isEmpty() && i > 0;){
                                                var a = s.poll(), o = a.getDistance();
                                                if (o >= i) break;
                                                a.isLeaves() ? (i = o, r = a) : a.expandToQueue(s, i);
                                            }
                                            return null === r ? null : [
                                                r.getBoundable(0).getItem(),
                                                r.getBoundable(1).getItem()
                                            ];
                                        }
                                    } else {
                                        if (2 === arguments.length) {
                                            var u = arguments[0], l = arguments[1];
                                            if (this.isEmpty() || u.isEmpty()) return null;
                                            var h = new un(this.getRoot(), u.getRoot(), l);
                                            return this.nearestNeighbour(h);
                                        }
                                        if (3 === arguments.length) {
                                            var c = arguments[2], f = new en(arguments[0], arguments[1]), g = new un(this.getRoot(), f, c);
                                            return this.nearestNeighbour(g)[0];
                                        }
                                        if (4 === arguments.length) {
                                            var v = arguments[2], y = arguments[3], d = new en(arguments[0], arguments[1]), _ = new un(this.getRoot(), d, v);
                                            return this.nearestNeighbourK(_, y);
                                        }
                                    }
                                }
                            },
                            {
                                key: "isWithinDistance",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1], n = A.POSITIVE_INFINITY, i = new nn;
                                        for(i.add(t); !i.isEmpty();){
                                            var r = i.poll(), s = r.getDistance();
                                            if (s > e) break;
                                            if (r.maximumDistance() <= e) return !0;
                                            if (r.isLeaves()) {
                                                if ((n = s) <= e) return !0;
                                            } else r.expandToQueue(i, n);
                                        }
                                        return !1;
                                    }
                                    if (3 === arguments.length) {
                                        var a = arguments[0], o = arguments[1], u = arguments[2], l = new un(this.getRoot(), a.getRoot(), o);
                                        return this.isWithinDistance(l, u);
                                    }
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        rn,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (0 === arguments.length) i.constructor_.call(this, i.DEFAULT_NODE_CAPACITY);
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        hn.constructor_.call(this, t);
                                    }
                                }
                            },
                            {
                                key: "centreX",
                                value: function(t) {
                                    return i.avg(t.getMinX(), t.getMaxX());
                                }
                            },
                            {
                                key: "avg",
                                value: function(t, e) {
                                    return (t + e) / 2;
                                }
                            },
                            {
                                key: "getItems",
                                value: function(t) {
                                    for(var e = new Array(t.size()).fill(null), n = 0; !t.isEmpty();){
                                        var i = t.poll();
                                        e[n] = i.getBoundable(0).getItem(), n++;
                                    }
                                    return e;
                                }
                            },
                            {
                                key: "centreY",
                                value: function(t) {
                                    return i.avg(t.getMinY(), t.getMaxY());
                                }
                            }
                        ]);
                    }(hn), gn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "computeBounds",
                                value: function() {
                                    for(var t = null, e = this.getChildBoundables().iterator(); e.hasNext();){
                                        var n = e.next();
                                        null === t ? t = new U(n.getBounds()) : t.expandToInclude(n.getBounds());
                                    }
                                    return t;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    var t = arguments[0];
                                    sn.constructor_.call(this, t);
                                }
                            }
                        ]);
                    }(sn);
                    fn.STRtreeNode = gn, fn.xComparator = new (function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        P
                                    ];
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    return hn.compareDoubles(fn.centreX(t.getBounds()), fn.centreX(e.getBounds()));
                                }
                            }
                        ]);
                    }()), fn.yComparator = new (function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        P
                                    ];
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    return hn.compareDoubles(fn.centreY(t.getBounds()), fn.centreY(e.getBounds()));
                                }
                            }
                        ]);
                    }()), fn.intersectsOp = new (function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        IntersectsOp
                                    ];
                                }
                            },
                            {
                                key: "intersects",
                                value: function(t, e) {
                                    return t.intersects(e);
                                }
                            }
                        ]);
                    }()), fn.DEFAULT_NODE_CAPACITY = 10;
                    var vn = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "relativeSign",
                                value: function(t, e) {
                                    return t < e ? -1 : t > e ? 1 : 0;
                                }
                            },
                            {
                                key: "compare",
                                value: function(e, n, i) {
                                    if (n.equals2D(i)) return 0;
                                    var r = t.relativeSign(n.x, i.x), s = t.relativeSign(n.y, i.y);
                                    switch(e){
                                        case 0:
                                            return t.compareValue(r, s);
                                        case 1:
                                            return t.compareValue(s, r);
                                        case 2:
                                            return t.compareValue(s, -r);
                                        case 3:
                                            return t.compareValue(-r, s);
                                        case 4:
                                            return t.compareValue(-r, -s);
                                        case 5:
                                            return t.compareValue(-s, -r);
                                        case 6:
                                            return t.compareValue(-s, r);
                                        case 7:
                                            return t.compareValue(r, -s);
                                    }
                                    return G.shouldNeverReachHere("invalid octant value"), 0;
                                }
                            },
                            {
                                key: "compareValue",
                                value: function(t, e) {
                                    return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
                                }
                            }
                        ]);
                    }(), yn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this.coord;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : this._isInterior ? e._isInterior ? vn.compare(this._segmentOctant, this.coord, e.coord) : 1 : -1;
                                }
                            },
                            {
                                key: "isEndPoint",
                                value: function(t) {
                                    return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this.segmentIndex + ":" + this.coord.toString();
                                }
                            },
                            {
                                key: "isInterior",
                                value: function() {
                                    return this._isInterior;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
                                    this._segString = t, this.coord = new X(e), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
                                }
                            }
                        ]);
                    }(), dn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "hasNext",
                                value: function() {}
                            },
                            {
                                key: "next",
                                value: function() {}
                            },
                            {
                                key: "remove",
                                value: function() {}
                            }
                        ]);
                    }(), _n = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getSplitCoordinates",
                                value: function() {
                                    var t = new Zt;
                                    this.addEndpoints();
                                    for(var e = this.iterator(), n = e.next(); e.hasNext();){
                                        var i = e.next();
                                        this.addEdgeCoordinates(n, i, t), n = i;
                                    }
                                    return t.toCoordinateArray();
                                }
                            },
                            {
                                key: "addCollapsedNodes",
                                value: function() {
                                    var t = new yt;
                                    this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);
                                    for(var e = t.iterator(); e.hasNext();){
                                        var n = e.next().intValue();
                                        this.add(this._edge.getCoordinate(n), n);
                                    }
                                }
                            },
                            {
                                key: "createSplitEdgePts",
                                value: function(t, e) {
                                    var n = e.segmentIndex - t.segmentIndex + 2;
                                    if (2 === n) return [
                                        new X(t.coord),
                                        new X(e.coord)
                                    ];
                                    var i = this._edge.getCoordinate(e.segmentIndex), r = e.isInterior() || !e.coord.equals2D(i);
                                    r || n--;
                                    var s = new Array(n).fill(null), a = 0;
                                    s[a++] = new X(t.coord);
                                    for(var o = t.segmentIndex + 1; o <= e.segmentIndex; o++)s[a++] = this._edge.getCoordinate(o);
                                    return r && (s[a] = new X(e.coord)), s;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    t.println("Intersections:");
                                    for(var e = this.iterator(); e.hasNext();)e.next().print(t);
                                }
                            },
                            {
                                key: "findCollapsesFromExistingVertices",
                                value: function(t) {
                                    for(var e = 0; e < this._edge.size() - 2; e++){
                                        var n = this._edge.getCoordinate(e);
                                        this._edge.getCoordinate(e + 1);
                                        var i = this._edge.getCoordinate(e + 2);
                                        n.equals2D(i) && t.add(at.valueOf(e + 1));
                                    }
                                }
                            },
                            {
                                key: "addEdgeCoordinates",
                                value: function(t, e, n) {
                                    var i = this.createSplitEdgePts(t, e);
                                    n.add(i, !1);
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return this._nodeMap.values().iterator();
                                }
                            },
                            {
                                key: "addSplitEdges",
                                value: function(t) {
                                    this.addEndpoints(), this.addCollapsedNodes();
                                    for(var e = this.iterator(), n = e.next(); e.hasNext();){
                                        var i = e.next(), r = this.createSplitEdge(n, i);
                                        t.add(r), n = i;
                                    }
                                }
                            },
                            {
                                key: "findCollapseIndex",
                                value: function(t, e, n) {
                                    if (!t.coord.equals2D(e.coord)) return !1;
                                    var i = e.segmentIndex - t.segmentIndex;
                                    return e.isInterior() || i--, 1 === i && (n[0] = t.segmentIndex + 1, !0);
                                }
                            },
                            {
                                key: "findCollapsesFromInsertedNodes",
                                value: function(t) {
                                    for(var e = new Array(1).fill(null), n = this.iterator(), i = n.next(); n.hasNext();){
                                        var r = n.next();
                                        this.findCollapseIndex(i, r, e) && t.add(at.valueOf(e[0])), i = r;
                                    }
                                }
                            },
                            {
                                key: "getEdge",
                                value: function() {
                                    return this._edge;
                                }
                            },
                            {
                                key: "addEndpoints",
                                value: function() {
                                    var t = this._edge.size() - 1;
                                    this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
                                }
                            },
                            {
                                key: "createSplitEdge",
                                value: function(t, e) {
                                    var n = this.createSplitEdgePts(t, e);
                                    return new xn(n, this._edge.getData());
                                }
                            },
                            {
                                key: "add",
                                value: function(t, e) {
                                    var n = new yn(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(n);
                                    return null !== i ? (G.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
                                }
                            },
                            {
                                key: "checkSplitEdgesCorrectness",
                                value: function(t) {
                                    var e = this._edge.getCoordinates(), n = t.get(0).getCoordinate(0);
                                    if (!n.equals2D(e[0])) throw new D("bad split edge start point at " + n);
                                    var i = t.get(t.size() - 1).getCoordinates(), r = i[i.length - 1];
                                    if (!r.equals2D(e[e.length - 1])) throw new D("bad split edge end point at " + r);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._nodeMap = new He, this._edge = null;
                                    var t = arguments[0];
                                    this._edge = t;
                                }
                            }
                        ]);
                    }(), pn = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "octant",
                                value: function() {
                                    if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                        var e = arguments[0], n = arguments[1];
                                        if (0 === e && 0 === n) throw new m("Cannot compute the octant for point ( " + e + ", " + n + " )");
                                        var i = Math.abs(e), r = Math.abs(n);
                                        return e >= 0 ? n >= 0 ? i >= r ? 0 : 1 : i >= r ? 7 : 6 : n >= 0 ? i >= r ? 3 : 2 : i >= r ? 4 : 5;
                                    }
                                    if (arguments[0] instanceof X && arguments[1] instanceof X) {
                                        var s = arguments[0], a = arguments[1], o = a.x - s.x, u = a.y - s.y;
                                        if (0 === o && 0 === u) throw new m("Cannot compute the octant for two identical points " + s);
                                        return t.octant(o, u);
                                    }
                                }
                            }
                        ]);
                    }(), mn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "getCoordinates",
                                value: function() {}
                            },
                            {
                                key: "size",
                                value: function() {}
                            },
                            {
                                key: "getCoordinate",
                                value: function(t) {}
                            },
                            {
                                key: "isClosed",
                                value: function() {}
                            },
                            {
                                key: "setData",
                                value: function(t) {}
                            },
                            {
                                key: "getData",
                                value: function() {}
                            }
                        ]);
                    }(), kn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "addIntersection",
                                value: function(t, e) {}
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        mn
                                    ];
                                }
                            }
                        ]);
                    }(), xn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this._pts;
                                }
                            },
                            {
                                key: "size",
                                value: function() {
                                    return this._pts.length;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function(t) {
                                    return this._pts[t];
                                }
                            },
                            {
                                key: "isClosed",
                                value: function() {
                                    return this._pts[0].equals(this._pts[this._pts.length - 1]);
                                }
                            },
                            {
                                key: "getSegmentOctant",
                                value: function(t) {
                                    return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
                                }
                            },
                            {
                                key: "setData",
                                value: function(t) {
                                    this._data = t;
                                }
                            },
                            {
                                key: "safeOctant",
                                value: function(t, e) {
                                    return t.equals2D(e) ? 0 : pn.octant(t, e);
                                }
                            },
                            {
                                key: "getData",
                                value: function() {
                                    return this._data;
                                }
                            },
                            {
                                key: "addIntersection",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        this.addIntersectionNode(t, e);
                                    } else if (4 === arguments.length) {
                                        var n = arguments[1], i = arguments[3], r = new X(arguments[0].getIntersection(i));
                                        this.addIntersection(r, n);
                                    }
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return Ce.toLineString(new Qt(this._pts));
                                }
                            },
                            {
                                key: "getNodeList",
                                value: function() {
                                    return this._nodeList;
                                }
                            },
                            {
                                key: "addIntersectionNode",
                                value: function(t, e) {
                                    var n = e, i = n + 1;
                                    if (i < this._pts.length) {
                                        var r = this._pts[i];
                                        t.equals2D(r) && (n = i);
                                    }
                                    return this._nodeList.add(t, n);
                                }
                            },
                            {
                                key: "addIntersections",
                                value: function(t, e, n) {
                                    for(var i = 0; i < t.getIntersectionNum(); i++)this.addIntersection(t, e, n, i);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        kn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._nodeList = new _n(this), this._pts = null, this._data = null;
                                    var t = arguments[0], e = arguments[1];
                                    this._pts = t, this._data = e;
                                }
                            },
                            {
                                key: "getNodedSubstrings",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var e = arguments[0], n = new yt;
                                        return t.getNodedSubstrings(e, n), n;
                                    }
                                    if (2 === arguments.length) for(var i = arguments[1], r = arguments[0].iterator(); r.hasNext();)r.next().getNodeList().addSplitEdges(i);
                                }
                            }
                        ]);
                    }(), In = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "minX",
                                value: function() {
                                    return Math.min(this.p0.x, this.p1.x);
                                }
                            },
                            {
                                key: "orientationIndex",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0], n = ct.index(this.p0, this.p1, e.p0), i = ct.index(this.p0, this.p1, e.p1);
                                        return n >= 0 && i >= 0 || n <= 0 && i <= 0 ? Math.max(n, i) : 0;
                                    }
                                    if (arguments[0] instanceof X) {
                                        var r = arguments[0];
                                        return ct.index(this.p0, this.p1, r);
                                    }
                                }
                            },
                            {
                                key: "toGeometry",
                                value: function(t) {
                                    return t.createLineString([
                                        this.p0,
                                        this.p1
                                    ]);
                                }
                            },
                            {
                                key: "isVertical",
                                value: function() {
                                    return this.p0.x === this.p1.x;
                                }
                            },
                            {
                                key: "equals",
                                value: function(e) {
                                    if (!(e instanceof t)) return !1;
                                    var n = e;
                                    return this.p0.equals(n.p0) && this.p1.equals(n.p1);
                                }
                            },
                            {
                                key: "intersection",
                                value: function(t) {
                                    var e = new we;
                                    return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
                                }
                            },
                            {
                                key: "project",
                                value: function() {
                                    if (arguments[0] instanceof X) {
                                        var e = arguments[0];
                                        if (e.equals(this.p0) || e.equals(this.p1)) return new X(e);
                                        var n = this.projectionFactor(e), i = new X;
                                        return i.x = this.p0.x + n * (this.p1.x - this.p0.x), i.y = this.p0.y + n * (this.p1.y - this.p0.y), i;
                                    }
                                    if (arguments[0] instanceof t) {
                                        var r = arguments[0], s = this.projectionFactor(r.p0), a = this.projectionFactor(r.p1);
                                        if (s >= 1 && a >= 1) return null;
                                        if (s <= 0 && a <= 0) return null;
                                        var o = this.project(r.p0);
                                        s < 0 && (o = this.p0), s > 1 && (o = this.p1);
                                        var u = this.project(r.p1);
                                        return a < 0 && (u = this.p0), a > 1 && (u = this.p1), new t(o, u);
                                    }
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {
                                    this.p1.compareTo(this.p0) < 0 && this.reverse();
                                }
                            },
                            {
                                key: "angle",
                                value: function() {
                                    return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function(t) {
                                    return 0 === t ? this.p0 : this.p1;
                                }
                            },
                            {
                                key: "distancePerpendicular",
                                value: function(t) {
                                    return xt.pointToLinePerpendicular(t, this.p0, this.p1);
                                }
                            },
                            {
                                key: "minY",
                                value: function() {
                                    return Math.min(this.p0.y, this.p1.y);
                                }
                            },
                            {
                                key: "midPoint",
                                value: function() {
                                    return t.midPoint(this.p0, this.p1);
                                }
                            },
                            {
                                key: "projectionFactor",
                                value: function(t) {
                                    if (t.equals(this.p0)) return 0;
                                    if (t.equals(this.p1)) return 1;
                                    var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = e * e + n * n;
                                    return i <= 0 ? A.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
                                }
                            },
                            {
                                key: "closestPoints",
                                value: function(t) {
                                    var e = this.intersection(t);
                                    if (null !== e) return [
                                        e,
                                        e
                                    ];
                                    var n = new Array(2).fill(null), i = A.MAX_VALUE, r = null, s = this.closestPoint(t.p0);
                                    i = s.distance(t.p0), n[0] = s, n[1] = t.p0;
                                    var a = this.closestPoint(t.p1);
                                    (r = a.distance(t.p1)) < i && (i = r, n[0] = a, n[1] = t.p1);
                                    var o = t.closestPoint(this.p0);
                                    (r = o.distance(this.p0)) < i && (i = r, n[0] = this.p0, n[1] = o);
                                    var u = t.closestPoint(this.p1);
                                    return (r = u.distance(this.p1)) < i && (i = r, n[0] = this.p1, n[1] = u), n;
                                }
                            },
                            {
                                key: "closestPoint",
                                value: function(t) {
                                    var e = this.projectionFactor(t);
                                    return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1;
                                }
                            },
                            {
                                key: "maxX",
                                value: function() {
                                    return Math.max(this.p0.x, this.p1.x);
                                }
                            },
                            {
                                key: "getLength",
                                value: function() {
                                    return this.p0.distance(this.p1);
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t, n = this.p0.compareTo(e.p0);
                                    return 0 !== n ? n : this.p1.compareTo(e.p1);
                                }
                            },
                            {
                                key: "reverse",
                                value: function() {
                                    var t = this.p0;
                                    this.p0 = this.p1, this.p1 = t;
                                }
                            },
                            {
                                key: "equalsTopo",
                                value: function(t) {
                                    return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
                                }
                            },
                            {
                                key: "lineIntersection",
                                value: function(t) {
                                    return pt.intersection(this.p0, this.p1, t.p0, t.p1);
                                }
                            },
                            {
                                key: "maxY",
                                value: function() {
                                    return Math.max(this.p0.y, this.p1.y);
                                }
                            },
                            {
                                key: "pointAlongOffset",
                                value: function(t, e) {
                                    var n = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), r = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(r * r + s * s), o = 0, u = 0;
                                    if (0 !== e) {
                                        if (a <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
                                        o = e * r / a, u = e * s / a;
                                    }
                                    return new X(n - u, i + o);
                                }
                            },
                            {
                                key: "setCoordinates",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.setCoordinates(t.p0, t.p1);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
                                    }
                                }
                            },
                            {
                                key: "segmentFraction",
                                value: function(t) {
                                    var e = this.projectionFactor(t);
                                    return e < 0 ? e = 0 : (e > 1 || A.isNaN(e)) && (e = 1), e;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
                                }
                            },
                            {
                                key: "isHorizontal",
                                value: function() {
                                    return this.p0.y === this.p1.y;
                                }
                            },
                            {
                                key: "reflect",
                                value: function(t) {
                                    var e = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), r = e * e + n * n, s = e * e - n * n, a = t.getX(), o = t.getY();
                                    return new X((-s * a - 2 * e * n * o - 2 * e * i) / r, (s * o - 2 * e * n * a - 2 * n * i) / r);
                                }
                            },
                            {
                                key: "distance",
                                value: function() {
                                    if (arguments[0] instanceof t) {
                                        var e = arguments[0];
                                        return xt.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
                                    }
                                    if (arguments[0] instanceof X) {
                                        var n = arguments[0];
                                        return xt.pointToSegment(n, this.p0, this.p1);
                                    }
                                }
                            },
                            {
                                key: "pointAlong",
                                value: function(t) {
                                    var e = new X;
                                    return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
                                }
                            },
                            {
                                key: "hashCode",
                                value: function() {
                                    var t = A.doubleToLongBits(this.p0.x);
                                    t ^= 31 * A.doubleToLongBits(this.p0.y);
                                    var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = A.doubleToLongBits(this.p1.x);
                                    return n ^= 31 * A.doubleToLongBits(this.p1.y), Math.trunc(n) ^ Math.trunc(n >> 32) ^ e;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x,
                                        E
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.p0 = null, this.p1 = null, 0 === arguments.length) t.constructor_.call(this, new X, new X);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        t.constructor_.call(this, e.p0, e.p1);
                                    } else if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1];
                                        this.p0 = n, this.p1 = i;
                                    } else if (4 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2], o = arguments[3];
                                        t.constructor_.call(this, new X(r, s), new X(a, o));
                                    }
                                }
                            },
                            {
                                key: "midPoint",
                                value: function(t, e) {
                                    return new X((t.x + e.x) / 2, (t.y + e.y) / 2);
                                }
                            }
                        ]);
                    }(), En = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "overlap",
                                value: function() {
                                    if (2 === arguments.length) ;
                                    else if (4 === arguments.length) {
                                        var t = arguments[1], e = arguments[2], n = arguments[3];
                                        arguments[0].getLineSegment(t, this._overlapSeg1), e.getLineSegment(n, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._overlapSeg1 = new In, this._overlapSeg2 = new In;
                                }
                            }
                        ]);
                    }(), Nn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getLineSegment",
                                value: function(t, e) {
                                    e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
                                }
                            },
                            {
                                key: "computeSelect",
                                value: function(t, e, n, i) {
                                    var r = this._pts[e], s = this._pts[n];
                                    if (n - e == 1) return i.select(this, e), null;
                                    if (!t.intersects(r, s)) return null;
                                    var a = Math.trunc((e + n) / 2);
                                    e < a && this.computeSelect(t, e, a, i), a < n && this.computeSelect(t, a, n, i);
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    for(var t = new Array(this._end - this._start + 1).fill(null), e = 0, n = this._start; n <= this._end; n++)t[e++] = this._pts[n];
                                    return t;
                                }
                            },
                            {
                                key: "computeOverlaps",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var t = arguments[0], e = arguments[1];
                                        this.computeOverlaps(this._start, this._end, t, t._start, t._end, e);
                                    } else if (6 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = arguments[2], s = arguments[3], a = arguments[4], o = arguments[5];
                                        if (i - n == 1 && a - s == 1) return o.overlap(this, n, r, s), null;
                                        if (!this.overlaps(n, i, r, s, a)) return null;
                                        var u = Math.trunc((n + i) / 2), l = Math.trunc((s + a) / 2);
                                        n < u && (s < l && this.computeOverlaps(n, u, r, s, l, o), l < a && this.computeOverlaps(n, u, r, l, a, o)), u < i && (s < l && this.computeOverlaps(u, i, r, s, l, o), l < a && this.computeOverlaps(u, i, r, l, a, o));
                                    }
                                }
                            },
                            {
                                key: "setId",
                                value: function(t) {
                                    this._id = t;
                                }
                            },
                            {
                                key: "select",
                                value: function(t, e) {
                                    this.computeSelect(t, this._start, this._end, e);
                                }
                            },
                            {
                                key: "getEnvelope",
                                value: function() {
                                    if (null === this._env) {
                                        var t = this._pts[this._start], e = this._pts[this._end];
                                        this._env = new U(t, e);
                                    }
                                    return this._env;
                                }
                            },
                            {
                                key: "overlaps",
                                value: function(t, e, n, i, r) {
                                    return U.intersects(this._pts[t], this._pts[e], n._pts[i], n._pts[r]);
                                }
                            },
                            {
                                key: "getEndIndex",
                                value: function() {
                                    return this._end;
                                }
                            },
                            {
                                key: "getStartIndex",
                                value: function() {
                                    return this._start;
                                }
                            },
                            {
                                key: "getContext",
                                value: function() {
                                    return this._context;
                                }
                            },
                            {
                                key: "getId",
                                value: function() {
                                    return this._id;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
                                    this._pts = t, this._start = e, this._end = n, this._context = i;
                                }
                            }
                        ]);
                    }(), Tn = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "findChainEnd",
                                value: function(t, e) {
                                    for(var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);)n++;
                                    if (n >= t.length - 1) return t.length - 1;
                                    for(var i = je.quadrant(t[n], t[n + 1]), r = e + 1; r < t.length;){
                                        if (!t[r - 1].equals2D(t[r])) {
                                            if (je.quadrant(t[r - 1], t[r]) !== i) break;
                                        }
                                        r++;
                                    }
                                    return r - 1;
                                }
                            },
                            {
                                key: "getChains",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var e = arguments[0];
                                        return t.getChains(e, null);
                                    }
                                    if (2 === arguments.length) {
                                        var n = arguments[0], i = arguments[1], r = new yt, s = 0;
                                        do {
                                            var a = t.findChainEnd(n, s), o = new Nn(n, s, a, i);
                                            r.add(o), s = a;
                                        }while (s < n.length - 1);
                                        return r;
                                    }
                                }
                            }
                        ]);
                    }(), Sn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "computeNodes",
                                value: function(t) {}
                            },
                            {
                                key: "getNodedSubstrings",
                                value: function() {}
                            }
                        ]);
                    }(), Ln = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "setSegmentIntersector",
                                value: function(t) {
                                    this._segInt = t;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Sn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._segInt = null, 0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        this.setSegmentIntersector(t);
                                    }
                                }
                            }
                        ]);
                    }(), Cn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getMonotoneChains",
                                value: function() {
                                    return this._monoChains;
                                }
                            },
                            {
                                key: "getNodedSubstrings",
                                value: function() {
                                    return xn.getNodedSubstrings(this._nodedSegStrings);
                                }
                            },
                            {
                                key: "getIndex",
                                value: function() {
                                    return this._index;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    for(var e = Tn.getChains(t.getCoordinates(), t).iterator(); e.hasNext();){
                                        var n = e.next();
                                        n.setId(this._idCounter++), this._index.insert(n.getEnvelope(), n), this._monoChains.add(n);
                                    }
                                }
                            },
                            {
                                key: "computeNodes",
                                value: function(t) {
                                    this._nodedSegStrings = t;
                                    for(var e = t.iterator(); e.hasNext();)this.add(e.next());
                                    this.intersectChains();
                                }
                            },
                            {
                                key: "intersectChains",
                                value: function() {
                                    for(var t = new Rn(this._segInt), e = this._monoChains.iterator(); e.hasNext();)for(var n = e.next(), i = this._index.query(n.getEnvelope()).iterator(); i.hasNext();){
                                        var r = i.next();
                                        if (r.getId() > n.getId() && (n.computeOverlaps(r, t), this._nOverlaps++), this._segInt.isDone()) return null;
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._monoChains = new yt, this._index = new fn, this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, 0 === arguments.length) ;
                                    else if (1 === arguments.length) {
                                        var t = arguments[0];
                                        Ln.constructor_.call(this, t);
                                    }
                                }
                            }
                        ]);
                    }(Ln), Rn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "overlap",
                                value: function() {
                                    if (4 !== arguments.length) return f(i, "overlap", this, 1).apply(this, arguments);
                                    var t = arguments[1], e = arguments[2], n = arguments[3], r = arguments[0].getContext(), s = e.getContext();
                                    this._si.processIntersections(r, t, s, n);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._si = null;
                                    var t = arguments[0];
                                    this._si = t;
                                }
                            }
                        ]);
                    }(En);
                    Cn.SegmentOverlapAction = Rn;
                    var wn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "isDeletable",
                                value: function(t, e, n, i) {
                                    var r = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[n];
                                    return !!this.isConcave(r, s, a) && !!this.isShallow(r, s, a, i) && this.isShallowSampled(r, s, t, n, i);
                                }
                            },
                            {
                                key: "deleteShallowConcavities",
                                value: function() {
                                    for(var e = 1, n = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(n), r = !1; i < this._inputLine.length;){
                                        var s = !1;
                                        this.isDeletable(e, n, i, this._distanceTol) && (this._isDeleted[n] = t.DELETE, s = !0, r = !0), e = s ? i : n, n = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(n);
                                    }
                                    return r;
                                }
                            },
                            {
                                key: "isShallowConcavity",
                                value: function(t, e, n, i) {
                                    return ct.index(t, e, n) === this._angleOrientation && xt.pointToSegment(e, t, n) < i;
                                }
                            },
                            {
                                key: "isShallowSampled",
                                value: function(e, n, i, r, s) {
                                    var a = Math.trunc((r - i) / t.NUM_PTS_TO_CHECK);
                                    a <= 0 && (a = 1);
                                    for(var o = i; o < r; o += a)if (!this.isShallow(e, n, this._inputLine[o], s)) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "isConcave",
                                value: function(t, e, n) {
                                    var i = ct.index(t, e, n) === this._angleOrientation;
                                    return i;
                                }
                            },
                            {
                                key: "simplify",
                                value: function(t) {
                                    this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = ct.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
                                    var e = !1;
                                    do e = this.deleteShallowConcavities();
                                    while (e);
                                    return this.collapseLine();
                                }
                            },
                            {
                                key: "findNextNonDeletedIndex",
                                value: function(e) {
                                    for(var n = e + 1; n < this._inputLine.length && this._isDeleted[n] === t.DELETE;)n++;
                                    return n;
                                }
                            },
                            {
                                key: "isShallow",
                                value: function(t, e, n, i) {
                                    return xt.pointToSegment(e, t, n) < i;
                                }
                            },
                            {
                                key: "collapseLine",
                                value: function() {
                                    for(var e = new Zt, n = 0; n < this._inputLine.length; n++)this._isDeleted[n] !== t.DELETE && e.add(this._inputLine[n]);
                                    return e.toCoordinateArray();
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = ct.COUNTERCLOCKWISE;
                                    var t = arguments[0];
                                    this._inputLine = t;
                                }
                            },
                            {
                                key: "simplify",
                                value: function(e, n) {
                                    return new t(e).simplify(n);
                                }
                            }
                        ]);
                    }();
                    wn.INIT = 0, wn.DELETE = 1, wn.KEEP = 1, wn.NUM_PTS_TO_CHECK = 10;
                    var On = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this._ptList.toArray(t.COORDINATE_ARRAY_TYPE);
                                }
                            },
                            {
                                key: "setPrecisionModel",
                                value: function(t) {
                                    this._precisionModel = t;
                                }
                            },
                            {
                                key: "addPt",
                                value: function(t) {
                                    var e = new X(t);
                                    if (this._precisionModel.makePrecise(e), this.isRedundant(e)) return null;
                                    this._ptList.add(e);
                                }
                            },
                            {
                                key: "reverse",
                                value: function() {}
                            },
                            {
                                key: "addPts",
                                value: function(t, e) {
                                    if (e) for(var n = 0; n < t.length; n++)this.addPt(t[n]);
                                    else for(var i = t.length - 1; i >= 0; i--)this.addPt(t[i]);
                                }
                            },
                            {
                                key: "isRedundant",
                                value: function(t) {
                                    if (this._ptList.size() < 1) return !1;
                                    var e = this._ptList.get(this._ptList.size() - 1);
                                    return t.distance(e) < this._minimimVertexDistance;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return (new ae).createLineString(this.getCoordinates()).toString();
                                }
                            },
                            {
                                key: "closeRing",
                                value: function() {
                                    if (this._ptList.size() < 1) return null;
                                    var t = new X(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
                                    if (t.equals(e)) return null;
                                    this._ptList.add(t);
                                }
                            },
                            {
                                key: "setMinimumVertexDistance",
                                value: function(t) {
                                    this._minimimVertexDistance = t;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new yt;
                                }
                            }
                        ]);
                    }();
                    On.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
                    var bn = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, null, [
                            {
                                key: "toDegrees",
                                value: function(t) {
                                    return 180 * t / Math.PI;
                                }
                            },
                            {
                                key: "normalize",
                                value: function(e) {
                                    for(; e > Math.PI;)e -= t.PI_TIMES_2;
                                    for(; e <= -Math.PI;)e += t.PI_TIMES_2;
                                    return e;
                                }
                            },
                            {
                                key: "angle",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return Math.atan2(t.y, t.x);
                                    }
                                    if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1], i = n.x - e.x, r = n.y - e.y;
                                        return Math.atan2(r, i);
                                    }
                                }
                            },
                            {
                                key: "isAcute",
                                value: function(t, e, n) {
                                    var i = t.x - e.x, r = t.y - e.y;
                                    return i * (n.x - e.x) + r * (n.y - e.y) > 0;
                                }
                            },
                            {
                                key: "isObtuse",
                                value: function(t, e, n) {
                                    var i = t.x - e.x, r = t.y - e.y;
                                    return i * (n.x - e.x) + r * (n.y - e.y) < 0;
                                }
                            },
                            {
                                key: "interiorAngle",
                                value: function(e, n, i) {
                                    var r = t.angle(n, e), s = t.angle(n, i);
                                    return Math.abs(s - r);
                                }
                            },
                            {
                                key: "normalizePositive",
                                value: function(e) {
                                    if (e < 0) {
                                        for(; e < 0;)e += t.PI_TIMES_2;
                                        e >= t.PI_TIMES_2 && (e = 0);
                                    } else {
                                        for(; e >= t.PI_TIMES_2;)e -= t.PI_TIMES_2;
                                        e < 0 && (e = 0);
                                    }
                                    return e;
                                }
                            },
                            {
                                key: "angleBetween",
                                value: function(e, n, i) {
                                    var r = t.angle(n, e), s = t.angle(n, i);
                                    return t.diff(r, s);
                                }
                            },
                            {
                                key: "diff",
                                value: function(t, e) {
                                    var n = null;
                                    return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n;
                                }
                            },
                            {
                                key: "toRadians",
                                value: function(t) {
                                    return t * Math.PI / 180;
                                }
                            },
                            {
                                key: "getTurn",
                                value: function(e, n) {
                                    var i = Math.sin(n - e);
                                    return i > 0 ? t.COUNTERCLOCKWISE : i < 0 ? t.CLOCKWISE : t.NONE;
                                }
                            },
                            {
                                key: "angleBetweenOriented",
                                value: function(e, n, i) {
                                    var r = t.angle(n, e), s = t.angle(n, i) - r;
                                    return s <= -Math.PI ? s + t.PI_TIMES_2 : s > Math.PI ? s - t.PI_TIMES_2 : s;
                                }
                            }
                        ]);
                    }();
                    bn.PI_TIMES_2 = 2 * Math.PI, bn.PI_OVER_2 = Math.PI / 2, bn.PI_OVER_4 = Math.PI / 4, bn.COUNTERCLOCKWISE = ct.COUNTERCLOCKWISE, bn.CLOCKWISE = ct.CLOCKWISE, bn.NONE = ct.COLLINEAR;
                    var Mn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "addNextSegment",
                                value: function(t, e) {
                                    if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
                                    var n = ct.index(this._s0, this._s1, this._s2), i = n === ct.CLOCKWISE && this._side === $.LEFT || n === ct.COUNTERCLOCKWISE && this._side === $.RIGHT;
                                    0 === n ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
                                }
                            },
                            {
                                key: "addLineEndCap",
                                value: function(t, e) {
                                    var n = new In(t, e), i = new In;
                                    this.computeOffsetSegment(n, $.LEFT, this._distance, i);
                                    var r = new In;
                                    this.computeOffsetSegment(n, $.RIGHT, this._distance, r);
                                    var s = e.x - t.x, a = e.y - t.y, o = Math.atan2(a, s);
                                    switch(this._bufParams.getEndCapStyle()){
                                        case _.CAP_ROUND:
                                            this._segList.addPt(i.p1), this.addDirectedFillet(e, o + Math.PI / 2, o - Math.PI / 2, ct.CLOCKWISE, this._distance), this._segList.addPt(r.p1);
                                            break;
                                        case _.CAP_FLAT:
                                            this._segList.addPt(i.p1), this._segList.addPt(r.p1);
                                            break;
                                        case _.CAP_SQUARE:
                                            var u = new X;
                                            u.x = Math.abs(this._distance) * Math.cos(o), u.y = Math.abs(this._distance) * Math.sin(o);
                                            var l = new X(i.p1.x + u.x, i.p1.y + u.y), h = new X(r.p1.x + u.x, r.p1.y + u.y);
                                            this._segList.addPt(l), this._segList.addPt(h);
                                    }
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this._segList.getCoordinates();
                                }
                            },
                            {
                                key: "addMitreJoin",
                                value: function(t, e, n, i) {
                                    var r = pt.intersection(e.p0, e.p1, n.p0, n.p1);
                                    if (null !== r && (i <= 0 ? 1 : r.distance(t) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(r), null;
                                    this.addLimitedMitreJoin(e, n, i, this._bufParams.getMitreLimit());
                                }
                            },
                            {
                                key: "addOutsideTurn",
                                value: function(e, n) {
                                    if (this._offset0.p1.distance(this._offset1.p0) < this._distance * t.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
                                    this._bufParams.getJoinStyle() === _.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === _.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (n && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
                                }
                            },
                            {
                                key: "createSquare",
                                value: function(t) {
                                    this._segList.addPt(new X(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new X(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new X(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new X(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
                                }
                            },
                            {
                                key: "addSegments",
                                value: function(t, e) {
                                    this._segList.addPts(t, e);
                                }
                            },
                            {
                                key: "addFirstSegment",
                                value: function() {
                                    this._segList.addPt(this._offset1.p0);
                                }
                            },
                            {
                                key: "addCornerFillet",
                                value: function(t, e, n, i, r) {
                                    var s = e.x - t.x, a = e.y - t.y, o = Math.atan2(a, s), u = n.x - t.x, l = n.y - t.y, h = Math.atan2(l, u);
                                    i === ct.CLOCKWISE ? o <= h && (o += 2 * Math.PI) : o >= h && (o -= 2 * Math.PI), this._segList.addPt(e), this.addDirectedFillet(t, o, h, i, r), this._segList.addPt(n);
                                }
                            },
                            {
                                key: "addLastSegment",
                                value: function() {
                                    this._segList.addPt(this._offset1.p1);
                                }
                            },
                            {
                                key: "initSideSegments",
                                value: function(t, e, n) {
                                    this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
                                }
                            },
                            {
                                key: "addLimitedMitreJoin",
                                value: function(t, e, n, i) {
                                    var r = this._seg0.p1, s = bn.angle(r, this._seg0.p0), a = bn.angleBetweenOriented(this._seg0.p0, r, this._seg1.p1) / 2, o = bn.normalize(s + a), u = bn.normalize(o + Math.PI), l = i * n, h = n - l * Math.abs(Math.sin(a)), c = r.x + l * Math.cos(u), f = r.y + l * Math.sin(u), g = new X(c, f), v = new In(r, g), y = v.pointAlongOffset(1, h), d = v.pointAlongOffset(1, -h);
                                    this._side === $.LEFT ? (this._segList.addPt(y), this._segList.addPt(d)) : (this._segList.addPt(d), this._segList.addPt(y));
                                }
                            },
                            {
                                key: "addDirectedFillet",
                                value: function(t, e, n, i, r) {
                                    var s = i === ct.CLOCKWISE ? -1 : 1, a = Math.abs(e - n), o = Math.trunc(a / this._filletAngleQuantum + .5);
                                    if (o < 1) return null;
                                    for(var u = a / o, l = new X, h = 0; h < o; h++){
                                        var c = e + s * h * u;
                                        l.x = t.x + r * Math.cos(c), l.y = t.y + r * Math.sin(c), this._segList.addPt(l);
                                    }
                                }
                            },
                            {
                                key: "computeOffsetSegment",
                                value: function(t, e, n, i) {
                                    var r = e === $.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, o = Math.sqrt(s * s + a * a), u = r * n * s / o, l = r * n * a / o;
                                    i.p0.x = t.p0.x - l, i.p0.y = t.p0.y + u, i.p1.x = t.p1.x - l, i.p1.y = t.p1.y + u;
                                }
                            },
                            {
                                key: "addInsideTurn",
                                value: function(e, n) {
                                    if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
                                    else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * t.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
                                    else {
                                        if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
                                            var i = new X((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
                                            this._segList.addPt(i);
                                            var r = new X((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
                                            this._segList.addPt(r);
                                        } else this._segList.addPt(this._s1);
                                        this._segList.addPt(this._offset1.p0);
                                    }
                                }
                            },
                            {
                                key: "createCircle",
                                value: function(t) {
                                    var e = new X(t.x + this._distance, t.y);
                                    this._segList.addPt(e), this.addDirectedFillet(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
                                }
                            },
                            {
                                key: "addBevelJoin",
                                value: function(t, e) {
                                    this._segList.addPt(t.p1), this._segList.addPt(e.p0);
                                }
                            },
                            {
                                key: "init",
                                value: function(e) {
                                    this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new On, this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * t.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
                                }
                            },
                            {
                                key: "addCollinear",
                                value: function(t) {
                                    this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === _.JOIN_BEVEL || this._bufParams.getJoinStyle() === _.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, ct.CLOCKWISE, this._distance));
                                }
                            },
                            {
                                key: "closeRing",
                                value: function() {
                                    this._segList.closeRing();
                                }
                            },
                            {
                                key: "hasNarrowConcaveAngle",
                                value: function() {
                                    return this._hasNarrowConcaveAngle;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new In, this._seg1 = new In, this._offset0 = new In, this._offset1 = new In, this._side = 0, this._hasNarrowConcaveAngle = !1;
                                    var e = arguments[0], n = arguments[1], i = arguments[2];
                                    this._precisionModel = e, this._bufParams = n, this._li = new we, this._filletAngleQuantum = Math.PI / 2 / n.getQuadrantSegments(), n.getQuadrantSegments() >= 8 && n.getJoinStyle() === _.JOIN_ROUND && (this._closingSegLengthFactor = t.MAX_CLOSING_SEG_LEN_FACTOR), this.init(i);
                                }
                            }
                        ]);
                    }();
                    Mn.OFFSET_SEGMENT_SEPARATION_FACTOR = .001, Mn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001, Mn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Mn.MAX_CLOSING_SEG_LEN_FACTOR = 80;
                    var An = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getOffsetCurve",
                                value: function(t, e) {
                                    if (this._distance = e, 0 === e) return null;
                                    var n = e < 0, i = Math.abs(e), r = this.getSegGen(i);
                                    t.length <= 1 ? this.computePointCurve(t[0], r) : this.computeOffsetCurve(t, n, r);
                                    var s = r.getCoordinates();
                                    return n && jt.reverse(s), s;
                                }
                            },
                            {
                                key: "computeSingleSidedBufferCurve",
                                value: function(t, e, n) {
                                    var i = this.simplifyTolerance(this._distance);
                                    if (e) {
                                        n.addSegments(t, !0);
                                        var r = wn.simplify(t, -i), s = r.length - 1;
                                        n.initSideSegments(r[s], r[s - 1], $.LEFT), n.addFirstSegment();
                                        for(var a = s - 2; a >= 0; a--)n.addNextSegment(r[a], !0);
                                    } else {
                                        n.addSegments(t, !1);
                                        var o = wn.simplify(t, i), u = o.length - 1;
                                        n.initSideSegments(o[0], o[1], $.LEFT), n.addFirstSegment();
                                        for(var l = 2; l <= u; l++)n.addNextSegment(o[l], !0);
                                    }
                                    n.addLastSegment(), n.closeRing();
                                }
                            },
                            {
                                key: "computeRingBufferCurve",
                                value: function(t, e, n) {
                                    var i = this.simplifyTolerance(this._distance);
                                    e === $.RIGHT && (i = -i);
                                    var r = wn.simplify(t, i), s = r.length - 1;
                                    n.initSideSegments(r[s - 1], r[0], e);
                                    for(var a = 1; a <= s; a++){
                                        var o = 1 !== a;
                                        n.addNextSegment(r[a], o);
                                    }
                                    n.closeRing();
                                }
                            },
                            {
                                key: "computeLineBufferCurve",
                                value: function(t, e) {
                                    var n = this.simplifyTolerance(this._distance), i = wn.simplify(t, n), r = i.length - 1;
                                    e.initSideSegments(i[0], i[1], $.LEFT);
                                    for(var s = 2; s <= r; s++)e.addNextSegment(i[s], !0);
                                    e.addLastSegment(), e.addLineEndCap(i[r - 1], i[r]);
                                    var a = wn.simplify(t, -n), o = a.length - 1;
                                    e.initSideSegments(a[o], a[o - 1], $.LEFT);
                                    for(var u = o - 2; u >= 0; u--)e.addNextSegment(a[u], !0);
                                    e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
                                }
                            },
                            {
                                key: "computePointCurve",
                                value: function(t, e) {
                                    switch(this._bufParams.getEndCapStyle()){
                                        case _.CAP_ROUND:
                                            e.createCircle(t);
                                            break;
                                        case _.CAP_SQUARE:
                                            e.createSquare(t);
                                    }
                                }
                            },
                            {
                                key: "getLineCurve",
                                value: function(t, e) {
                                    if (this._distance = e, this.isLineOffsetEmpty(e)) return null;
                                    var n = Math.abs(e), i = this.getSegGen(n);
                                    if (t.length <= 1) this.computePointCurve(t[0], i);
                                    else if (this._bufParams.isSingleSided()) {
                                        var r = e < 0;
                                        this.computeSingleSidedBufferCurve(t, r, i);
                                    } else this.computeLineBufferCurve(t, i);
                                    return i.getCoordinates();
                                }
                            },
                            {
                                key: "getBufferParameters",
                                value: function() {
                                    return this._bufParams;
                                }
                            },
                            {
                                key: "simplifyTolerance",
                                value: function(t) {
                                    return t * this._bufParams.getSimplifyFactor();
                                }
                            },
                            {
                                key: "getRingCurve",
                                value: function(e, n, i) {
                                    if (this._distance = i, e.length <= 2) return this.getLineCurve(e, i);
                                    if (0 === i) return t.copyCoordinates(e);
                                    var r = this.getSegGen(i);
                                    return this.computeRingBufferCurve(e, n, r), r.getCoordinates();
                                }
                            },
                            {
                                key: "computeOffsetCurve",
                                value: function(t, e, n) {
                                    var i = this.simplifyTolerance(this._distance);
                                    if (e) {
                                        var r = wn.simplify(t, -i), s = r.length - 1;
                                        n.initSideSegments(r[s], r[s - 1], $.LEFT), n.addFirstSegment();
                                        for(var a = s - 2; a >= 0; a--)n.addNextSegment(r[a], !0);
                                    } else {
                                        var o = wn.simplify(t, i), u = o.length - 1;
                                        n.initSideSegments(o[0], o[1], $.LEFT), n.addFirstSegment();
                                        for(var l = 2; l <= u; l++)n.addNextSegment(o[l], !0);
                                    }
                                    n.addLastSegment();
                                }
                            },
                            {
                                key: "isLineOffsetEmpty",
                                value: function(t) {
                                    return 0 === t || t < 0 && !this._bufParams.isSingleSided();
                                }
                            },
                            {
                                key: "getSegGen",
                                value: function(t) {
                                    return new Mn(this._precisionModel, this._bufParams, t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._distance = 0, this._precisionModel = null, this._bufParams = null;
                                    var t = arguments[0], e = arguments[1];
                                    this._precisionModel = t, this._bufParams = e;
                                }
                            },
                            {
                                key: "copyCoordinates",
                                value: function(t) {
                                    for(var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)e[n] = new X(t[n]);
                                    return e;
                                }
                            }
                        ]);
                    }(), Pn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "findStabbedSegments",
                                value: function() {
                                    if (1 === arguments.length) {
                                        for(var t = arguments[0], e = new yt, n = this._subgraphs.iterator(); n.hasNext();){
                                            var i = n.next(), r = i.getEnvelope();
                                            t.y < r.getMinY() || t.y > r.getMaxY() || this.findStabbedSegments(t, i.getDirectedEdges(), e);
                                        }
                                        return e;
                                    }
                                    if (3 === arguments.length) {
                                        if (rt(arguments[2], nt) && arguments[0] instanceof X && arguments[1] instanceof Ke) {
                                            for(var s = arguments[0], a = arguments[1], o = arguments[2], u = a.getEdge().getCoordinates(), l = 0; l < u.length - 1; l++)if (this._seg.p0 = u[l], this._seg.p1 = u[l + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < s.x || this._seg.isHorizontal() || s.y < this._seg.p0.y || s.y > this._seg.p1.y || ct.index(this._seg.p0, this._seg.p1, s) === ct.RIGHT)) {
                                                var h = a.getDepth($.LEFT);
                                                this._seg.p0.equals(u[l]) || (h = a.getDepth($.RIGHT));
                                                var c = new Dn(this._seg, h);
                                                o.add(c);
                                            }
                                        } else if (rt(arguments[2], nt) && arguments[0] instanceof X && rt(arguments[1], nt)) for(var f = arguments[0], g = arguments[2], v = arguments[1].iterator(); v.hasNext();){
                                            var y = v.next();
                                            y.isForward() && this.findStabbedSegments(f, y, g);
                                        }
                                    }
                                }
                            },
                            {
                                key: "getDepth",
                                value: function(t) {
                                    var e = this.findStabbedSegments(t);
                                    return 0 === e.size() ? 0 : an.min(e)._leftDepth;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._subgraphs = null, this._seg = new In;
                                    var t = arguments[0];
                                    this._subgraphs = t;
                                }
                            }
                        ]);
                    }(), Dn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    if (this._upwardSeg.minX() >= e._upwardSeg.maxX()) return 1;
                                    if (this._upwardSeg.maxX() <= e._upwardSeg.minX()) return -1;
                                    var n = this._upwardSeg.orientationIndex(e._upwardSeg);
                                    return 0 !== n || 0 !== (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg)) ? n : this._upwardSeg.compareTo(e._upwardSeg);
                                }
                            },
                            {
                                key: "compareX",
                                value: function(t, e) {
                                    var n = t.p0.compareTo(e.p0);
                                    return 0 !== n ? n : t.p1.compareTo(e.p1);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this._upwardSeg.toString();
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._upwardSeg = null, this._leftDepth = null;
                                    var t = arguments[0], e = arguments[1];
                                    this._upwardSeg = new In(t), this._leftDepth = e;
                                }
                            }
                        ]);
                    }();
                    Pn.DepthSegment = Dn;
                    var Fn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, null, [
                            {
                                key: "constructor_",
                                value: function() {
                                    p.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
                                }
                            }
                        ]);
                    }(p), Gn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getY",
                                value: function() {
                                    var t = this.y / this.w;
                                    if (A.isNaN(t) || A.isInfinite(t)) throw new Fn;
                                    return t;
                                }
                            },
                            {
                                key: "getX",
                                value: function() {
                                    var t = this.x / this.w;
                                    if (A.isNaN(t) || A.isInfinite(t)) throw new Fn;
                                    return t;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    var t = new X;
                                    return t.x = this.getX(), t.y = this.getY(), t;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.x = null, this.y = null, this.w = null, 0 === arguments.length) this.x = 0, this.y = 0, this.w = 1;
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        this.x = e.x, this.y = e.y, this.w = 1;
                                    } else if (2 === arguments.length) {
                                        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                                            var n = arguments[0], i = arguments[1];
                                            this.x = n, this.y = i, this.w = 1;
                                        } else if (arguments[0] instanceof t && arguments[1] instanceof t) {
                                            var r = arguments[0], s = arguments[1];
                                            this.x = r.y * s.w - s.y * r.w, this.y = s.x * r.w - r.x * s.w, this.w = r.x * s.y - s.x * r.y;
                                        } else if (arguments[0] instanceof X && arguments[1] instanceof X) {
                                            var a = arguments[0], o = arguments[1];
                                            this.x = a.y - o.y, this.y = o.x - a.x, this.w = a.x * o.y - o.x * a.y;
                                        }
                                    } else if (3 === arguments.length) {
                                        var u = arguments[0], l = arguments[1], h = arguments[2];
                                        this.x = u, this.y = l, this.w = h;
                                    } else if (4 === arguments.length) {
                                        var c = arguments[0], f = arguments[1], g = arguments[2], v = arguments[3], y = c.y - f.y, d = f.x - c.x, _ = c.x * f.y - f.x * c.y, p = g.y - v.y, m = v.x - g.x, k = g.x * v.y - v.x * g.y;
                                        this.x = d * k - m * _, this.y = p * _ - y * k, this.w = y * m - p * d;
                                    }
                                }
                            }
                        ]);
                    }(), qn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "area",
                                value: function() {
                                    return t.area(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "signedArea",
                                value: function() {
                                    return t.signedArea(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "interpolateZ",
                                value: function(e) {
                                    if (null === e) throw new m("Supplied point is null.");
                                    return t.interpolateZ(e, this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "longestSideLength",
                                value: function() {
                                    return t.longestSideLength(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "isAcute",
                                value: function() {
                                    return t.isAcute(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "circumcentre",
                                value: function() {
                                    return t.circumcentre(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "area3D",
                                value: function() {
                                    return t.area3D(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "centroid",
                                value: function() {
                                    return t.centroid(this.p0, this.p1, this.p2);
                                }
                            },
                            {
                                key: "inCentre",
                                value: function() {
                                    return t.inCentre(this.p0, this.p1, this.p2);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this.p0 = null, this.p1 = null, this.p2 = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    this.p0 = t, this.p1 = e, this.p2 = n;
                                }
                            },
                            {
                                key: "area",
                                value: function(t, e, n) {
                                    return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
                                }
                            },
                            {
                                key: "signedArea",
                                value: function(t, e, n) {
                                    return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
                                }
                            },
                            {
                                key: "det",
                                value: function(t, e, n, i) {
                                    return t * i - e * n;
                                }
                            },
                            {
                                key: "interpolateZ",
                                value: function(t, e, n, i) {
                                    var r = e.x, s = e.y, a = n.x - r, o = i.x - r, u = n.y - s, l = i.y - s, h = a * l - o * u, c = t.x - r, f = t.y - s, g = (l * c - o * f) / h, v = (-u * c + a * f) / h;
                                    return e.getZ() + g * (n.getZ() - e.getZ()) + v * (i.getZ() - e.getZ());
                                }
                            },
                            {
                                key: "longestSideLength",
                                value: function(t, e, n) {
                                    var i = t.distance(e), r = e.distance(n), s = n.distance(t), a = i;
                                    return r > a && (a = r), s > a && (a = s), a;
                                }
                            },
                            {
                                key: "circumcentreDD",
                                value: function(t, e, n) {
                                    var i = ut.valueOf(t.x).subtract(n.x), r = ut.valueOf(t.y).subtract(n.y), s = ut.valueOf(e.x).subtract(n.x), a = ut.valueOf(e.y).subtract(n.y), o = ut.determinant(i, r, s, a).multiply(2), u = i.sqr().add(r.sqr()), l = s.sqr().add(a.sqr()), h = ut.determinant(r, u, a, l), c = ut.determinant(i, u, s, l), f = ut.valueOf(n.x).subtract(h.divide(o)).doubleValue(), g = ut.valueOf(n.y).add(c.divide(o)).doubleValue();
                                    return new X(f, g);
                                }
                            },
                            {
                                key: "isAcute",
                                value: function(t, e, n) {
                                    return !!bn.isAcute(t, e, n) && !!bn.isAcute(e, n, t) && !!bn.isAcute(n, t, e);
                                }
                            },
                            {
                                key: "circumcentre",
                                value: function(e, n, i) {
                                    var r = i.x, s = i.y, a = e.x - r, o = e.y - s, u = n.x - r, l = n.y - s, h = 2 * t.det(a, o, u, l), c = t.det(o, a * a + o * o, l, u * u + l * l), f = t.det(a, a * a + o * o, u, u * u + l * l);
                                    return new X(r - c / h, s + f / h);
                                }
                            },
                            {
                                key: "perpendicularBisector",
                                value: function(t, e) {
                                    var n = e.x - t.x, i = e.y - t.y, r = new Gn(t.x + n / 2, t.y + i / 2, 1), s = new Gn(t.x - i + n / 2, t.y + n + i / 2, 1);
                                    return new Gn(r, s);
                                }
                            },
                            {
                                key: "angleBisector",
                                value: function(t, e, n) {
                                    var i = e.distance(t), r = i / (i + e.distance(n)), s = n.x - t.x, a = n.y - t.y;
                                    return new X(t.x + r * s, t.y + r * a);
                                }
                            },
                            {
                                key: "area3D",
                                value: function(t, e, n) {
                                    var i = e.x - t.x, r = e.y - t.y, s = e.getZ() - t.getZ(), a = n.x - t.x, o = n.y - t.y, u = n.getZ() - t.getZ(), l = r * u - s * o, h = s * a - i * u, c = i * o - r * a, f = l * l + h * h + c * c, g = Math.sqrt(f) / 2;
                                    return g;
                                }
                            },
                            {
                                key: "centroid",
                                value: function(t, e, n) {
                                    var i = (t.x + e.x + n.x) / 3, r = (t.y + e.y + n.y) / 3;
                                    return new X(i, r);
                                }
                            },
                            {
                                key: "inCentre",
                                value: function(t, e, n) {
                                    var i = e.distance(n), r = t.distance(n), s = t.distance(e), a = i + r + s, o = (i * t.x + r * e.x + s * n.x) / a, u = (i * t.y + r * e.y + s * n.y) / a;
                                    return new X(o, u);
                                }
                            }
                        ]);
                    }(), Yn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "addRingSide",
                                value: function(t, e, n, i, r) {
                                    if (0 === e && t.length < Xt.MINIMUM_VALID_SIZE) return null;
                                    var s = i, a = r;
                                    t.length >= Xt.MINIMUM_VALID_SIZE && ct.isCCW(t) && (s = r, a = i, n = $.opposite(n));
                                    var o = this._curveBuilder.getRingCurve(t, n, e);
                                    this.addCurve(o, s, a);
                                }
                            },
                            {
                                key: "addRingBothSides",
                                value: function(t, e) {
                                    this.addRingSide(t, e, $.LEFT, H.EXTERIOR, H.INTERIOR), this.addRingSide(t, e, $.RIGHT, H.INTERIOR, H.EXTERIOR);
                                }
                            },
                            {
                                key: "addPoint",
                                value: function(t) {
                                    if (this._distance <= 0) return null;
                                    var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
                                    this.addCurve(n, H.EXTERIOR, H.INTERIOR);
                                }
                            },
                            {
                                key: "addPolygon",
                                value: function(t) {
                                    var e = this._distance, n = $.LEFT;
                                    this._distance < 0 && (e = -this._distance, n = $.RIGHT);
                                    var i = t.getExteriorRing(), r = jt.removeRepeatedPoints(i.getCoordinates());
                                    if (this._distance < 0 && this.isErodedCompletely(i, this._distance)) return null;
                                    if (this._distance <= 0 && r.length < 3) return null;
                                    this.addRingSide(r, e, n, H.EXTERIOR, H.INTERIOR);
                                    for(var s = 0; s < t.getNumInteriorRing(); s++){
                                        var a = t.getInteriorRingN(s), o = jt.removeRepeatedPoints(a.getCoordinates());
                                        this._distance > 0 && this.isErodedCompletely(a, -this._distance) || this.addRingSide(o, e, $.opposite(n), H.INTERIOR, H.EXTERIOR);
                                    }
                                }
                            },
                            {
                                key: "isTriangleErodedCompletely",
                                value: function(t, e) {
                                    var n = new qn(t[0], t[1], t[2]), i = n.inCentre();
                                    return xt.pointToSegment(i, n.p0, n.p1) < Math.abs(e);
                                }
                            },
                            {
                                key: "addLineString",
                                value: function(t) {
                                    if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
                                    var e = jt.removeRepeatedPoints(t.getCoordinates());
                                    if (jt.isRing(e) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(e, this._distance);
                                    else {
                                        var n = this._curveBuilder.getLineCurve(e, this._distance);
                                        this.addCurve(n, H.EXTERIOR, H.INTERIOR);
                                    }
                                }
                            },
                            {
                                key: "addCurve",
                                value: function(t, e, n) {
                                    if (null === t || t.length < 2) return null;
                                    var i = new xn(t, new Ae(0, H.BOUNDARY, e, n));
                                    this._curveList.add(i);
                                }
                            },
                            {
                                key: "getCurves",
                                value: function() {
                                    return this.add(this._inputGeom), this._curveList;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    if (t.isEmpty()) return null;
                                    if (t instanceof Dt) this.addPolygon(t);
                                    else if (t instanceof wt) this.addLineString(t);
                                    else if (t instanceof bt) this.addPoint(t);
                                    else if (t instanceof zt) this.addCollection(t);
                                    else if (t instanceof se) this.addCollection(t);
                                    else if (t instanceof te) this.addCollection(t);
                                    else {
                                        if (!(t instanceof Yt)) throw new W(t.getGeometryType());
                                        this.addCollection(t);
                                    }
                                }
                            },
                            {
                                key: "isErodedCompletely",
                                value: function(t, e) {
                                    var n = t.getCoordinates();
                                    if (n.length < 4) return e < 0;
                                    if (4 === n.length) return this.isTriangleErodedCompletely(n, e);
                                    var i = t.getEnvelopeInternal(), r = Math.min(i.getHeight(), i.getWidth());
                                    return e < 0 && 2 * Math.abs(e) > r;
                                }
                            },
                            {
                                key: "addCollection",
                                value: function(t) {
                                    for(var e = 0; e < t.getNumGeometries(); e++){
                                        var n = t.getGeometryN(e);
                                        this.add(n);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new yt;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    this._inputGeom = t, this._distance = e, this._curveBuilder = n;
                                }
                            }
                        ]);
                    }(), zn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "locate",
                                value: function(t) {}
                            }
                        ]);
                    }(), Xn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "next",
                                value: function() {
                                    if (this._atStart) return this._atStart = !1, t.isAtomic(this._parent) && this._index++, this._parent;
                                    if (null !== this._subcollectionIterator) {
                                        if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
                                        this._subcollectionIterator = null;
                                    }
                                    if (this._index >= this._max) throw new j;
                                    var e = this._parent.getGeometryN(this._index++);
                                    return e instanceof Yt ? (this._subcollectionIterator = new t(e), this._subcollectionIterator.next()) : e;
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    throw new W(this.getClass().getName());
                                }
                            },
                            {
                                key: "hasNext",
                                value: function() {
                                    if (this._atStart) return !0;
                                    if (null !== this._subcollectionIterator) {
                                        if (this._subcollectionIterator.hasNext()) return !0;
                                        this._subcollectionIterator = null;
                                    }
                                    return !(this._index >= this._max);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        dn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
                                    var t = arguments[0];
                                    this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
                                }
                            },
                            {
                                key: "isAtomic",
                                value: function(t) {
                                    return !(t instanceof Yt);
                                }
                            }
                        ]);
                    }(), Bn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "locate",
                                value: function(e) {
                                    return t.locate(e, this._geom);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        zn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._geom = null;
                                    var t = arguments[0];
                                    this._geom = t;
                                }
                            },
                            {
                                key: "locatePointInPolygon",
                                value: function(e, n) {
                                    if (n.isEmpty()) return H.EXTERIOR;
                                    var i = n.getExteriorRing(), r = t.locatePointInRing(e, i);
                                    if (r !== H.INTERIOR) return r;
                                    for(var s = 0; s < n.getNumInteriorRing(); s++){
                                        var a = n.getInteriorRingN(s), o = t.locatePointInRing(e, a);
                                        if (o === H.BOUNDARY) return H.BOUNDARY;
                                        if (o === H.INTERIOR) return H.EXTERIOR;
                                    }
                                    return H.INTERIOR;
                                }
                            },
                            {
                                key: "locatePointInRing",
                                value: function(t, e) {
                                    return e.getEnvelopeInternal().intersects(t) ? be.locateInRing(t, e.getCoordinates()) : H.EXTERIOR;
                                }
                            },
                            {
                                key: "containsPointInPolygon",
                                value: function(e, n) {
                                    return H.EXTERIOR !== t.locatePointInPolygon(e, n);
                                }
                            },
                            {
                                key: "locateInGeometry",
                                value: function(e, n) {
                                    if (n instanceof Dt) return t.locatePointInPolygon(e, n);
                                    if (n instanceof Yt) for(var i = new Xn(n); i.hasNext();){
                                        var r = i.next();
                                        if (r !== n) {
                                            var s = t.locateInGeometry(e, r);
                                            if (s !== H.EXTERIOR) return s;
                                        }
                                    }
                                    return H.EXTERIOR;
                                }
                            },
                            {
                                key: "isContained",
                                value: function(e, n) {
                                    return H.EXTERIOR !== t.locate(e, n);
                                }
                            },
                            {
                                key: "locate",
                                value: function(e, n) {
                                    return n.isEmpty() ? H.EXTERIOR : n.getEnvelopeInternal().intersects(e) ? t.locateInGeometry(e, n) : H.EXTERIOR;
                                }
                            }
                        ]);
                    }(), Un = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getNextCW",
                                value: function(t) {
                                    this.getEdges();
                                    var e = this._edgeList.indexOf(t), n = e - 1;
                                    return 0 === e && (n = this._edgeList.size() - 1), this._edgeList.get(n);
                                }
                            },
                            {
                                key: "propagateSideLabels",
                                value: function(t) {
                                    for(var e = H.NONE, n = this.iterator(); n.hasNext();){
                                        var i = n.next().getLabel();
                                        i.isArea(t) && i.getLocation(t, $.LEFT) !== H.NONE && (e = i.getLocation(t, $.LEFT));
                                    }
                                    if (e === H.NONE) return null;
                                    for(var r = e, s = this.iterator(); s.hasNext();){
                                        var a = s.next(), o = a.getLabel();
                                        if (o.getLocation(t, $.ON) === H.NONE && o.setLocation(t, $.ON, r), o.isArea(t)) {
                                            var u = o.getLocation(t, $.LEFT), l = o.getLocation(t, $.RIGHT);
                                            if (l !== H.NONE) {
                                                if (l !== r) throw new gt("side location conflict", a.getCoordinate());
                                                u === H.NONE && G.shouldNeverReachHere("found single null side (at " + a.getCoordinate() + ")"), r = u;
                                            } else G.isTrue(o.getLocation(t, $.LEFT) === H.NONE, "found single null side"), o.setLocation(t, $.RIGHT, r), o.setLocation(t, $.LEFT, r);
                                        }
                                    }
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    var t = this.iterator();
                                    return t.hasNext() ? t.next().getCoordinate() : null;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    mt.out.println("EdgeEndStar:   " + this.getCoordinate());
                                    for(var e = this.iterator(); e.hasNext();)e.next().print(t);
                                }
                            },
                            {
                                key: "isAreaLabelsConsistent",
                                value: function(t) {
                                    return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
                                }
                            },
                            {
                                key: "checkAreaLabelsConsistent",
                                value: function(t) {
                                    var e = this.getEdges();
                                    if (e.size() <= 0) return !0;
                                    var n = e.size() - 1, i = e.get(n).getLabel().getLocation(t, $.LEFT);
                                    G.isTrue(i !== H.NONE, "Found unlabelled area edge");
                                    for(var r = i, s = this.iterator(); s.hasNext();){
                                        var a = s.next().getLabel();
                                        G.isTrue(a.isArea(t), "Found non-area edge");
                                        var o = a.getLocation(t, $.LEFT), u = a.getLocation(t, $.RIGHT);
                                        if (o === u) return !1;
                                        if (u !== r) return !1;
                                        r = o;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "findIndex",
                                value: function(t) {
                                    this.iterator();
                                    for(var e = 0; e < this._edgeList.size(); e++)if (this._edgeList.get(e) === t) return e;
                                    return -1;
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return this.getEdges().iterator();
                                }
                            },
                            {
                                key: "getEdges",
                                value: function() {
                                    return null === this._edgeList && (this._edgeList = new yt(this._edgeMap.values())), this._edgeList;
                                }
                            },
                            {
                                key: "getLocation",
                                value: function(t, e, n) {
                                    return this._ptInAreaLocation[t] === H.NONE && (this._ptInAreaLocation[t] = Bn.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var t = new st;
                                    t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");
                                    for(var e = this.iterator(); e.hasNext();){
                                        var n = e.next();
                                        t.append(n), t.append("\n");
                                    }
                                    return t.toString();
                                }
                            },
                            {
                                key: "computeEdgeEndLabels",
                                value: function(t) {
                                    for(var e = this.iterator(); e.hasNext();)e.next().computeLabel(t);
                                }
                            },
                            {
                                key: "computeLabelling",
                                value: function(t) {
                                    this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
                                    for(var e = [
                                        !1,
                                        !1
                                    ], n = this.iterator(); n.hasNext();)for(var i = n.next().getLabel(), r = 0; r < 2; r++)i.isLine(r) && i.getLocation(r) === H.BOUNDARY && (e[r] = !0);
                                    for(var s = this.iterator(); s.hasNext();)for(var a = s.next(), o = a.getLabel(), u = 0; u < 2; u++)if (o.isAnyNull(u)) {
                                        var l = H.NONE;
                                        if (e[u]) l = H.EXTERIOR;
                                        else {
                                            var h = a.getCoordinate();
                                            l = this.getLocation(u, h, t);
                                        }
                                        o.setAllLocationsIfNull(u, l);
                                    }
                                }
                            },
                            {
                                key: "getDegree",
                                value: function() {
                                    return this._edgeMap.size();
                                }
                            },
                            {
                                key: "insertEdgeEnd",
                                value: function(t, e) {
                                    this._edgeMap.put(t, e), this._edgeList = null;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._edgeMap = new He, this._edgeList = null, this._ptInAreaLocation = [
                                        H.NONE,
                                        H.NONE
                                    ];
                                }
                            }
                        ]);
                    }(), Vn = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "linkResultDirectedEdges",
                                value: function() {
                                    this.getResultAreaEdges();
                                    for(var t = null, e = null, n = this._SCANNING_FOR_INCOMING, i = 0; i < this._resultAreaEdgeList.size(); i++){
                                        var r = this._resultAreaEdgeList.get(i), s = r.getSym();
                                        if (r.getLabel().isArea()) switch(null === t && r.isInResult() && (t = r), n){
                                            case this._SCANNING_FOR_INCOMING:
                                                if (!s.isInResult()) continue;
                                                e = s, n = this._LINKING_TO_OUTGOING;
                                                break;
                                            case this._LINKING_TO_OUTGOING:
                                                if (!r.isInResult()) continue;
                                                e.setNext(r), n = this._SCANNING_FOR_INCOMING;
                                        }
                                    }
                                    if (n === this._LINKING_TO_OUTGOING) {
                                        if (null === t) throw new gt("no outgoing dirEdge found", this.getCoordinate());
                                        G.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t);
                                    }
                                }
                            },
                            {
                                key: "insert",
                                value: function(t) {
                                    var e = t;
                                    this.insertEdgeEnd(e, e);
                                }
                            },
                            {
                                key: "getRightmostEdge",
                                value: function() {
                                    var t = this.getEdges(), e = t.size();
                                    if (e < 1) return null;
                                    var n = t.get(0);
                                    if (1 === e) return n;
                                    var i = t.get(e - 1), r = n.getQuadrant(), s = i.getQuadrant();
                                    return je.isNorthern(r) && je.isNorthern(s) ? n : je.isNorthern(r) || je.isNorthern(s) ? 0 !== n.getDy() ? n : 0 !== i.getDy() ? i : (G.shouldNeverReachHere("found two horizontal edges incident on node"), null) : i;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    mt.out.println("DirectedEdgeStar: " + this.getCoordinate());
                                    for(var e = this.iterator(); e.hasNext();){
                                        var n = e.next();
                                        t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println();
                                    }
                                }
                            },
                            {
                                key: "getResultAreaEdges",
                                value: function() {
                                    if (null !== this._resultAreaEdgeList) return this._resultAreaEdgeList;
                                    this._resultAreaEdgeList = new yt;
                                    for(var t = this.iterator(); t.hasNext();){
                                        var e = t.next();
                                        (e.isInResult() || e.getSym().isInResult()) && this._resultAreaEdgeList.add(e);
                                    }
                                    return this._resultAreaEdgeList;
                                }
                            },
                            {
                                key: "updateLabelling",
                                value: function(t) {
                                    for(var e = this.iterator(); e.hasNext();){
                                        var n = e.next().getLabel();
                                        n.setAllLocationsIfNull(0, t.getLocation(0)), n.setAllLocationsIfNull(1, t.getLocation(1));
                                    }
                                }
                            },
                            {
                                key: "linkAllDirectedEdges",
                                value: function() {
                                    this.getEdges();
                                    for(var t = null, e = null, n = this._edgeList.size() - 1; n >= 0; n--){
                                        var i = this._edgeList.get(n), r = i.getSym();
                                        null === e && (e = r), null !== t && r.setNext(t), t = i;
                                    }
                                    e.setNext(t);
                                }
                            },
                            {
                                key: "computeDepths",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0], e = this.findIndex(t), n = t.getDepth($.LEFT), i = t.getDepth($.RIGHT), r = this.computeDepths(e + 1, this._edgeList.size(), n);
                                        if (this.computeDepths(0, e, r) !== i) throw new gt("depth mismatch at " + t.getCoordinate());
                                    } else if (3 === arguments.length) {
                                        for(var s = arguments[1], a = arguments[2], o = arguments[0]; o < s; o++){
                                            var u = this._edgeList.get(o);
                                            u.setEdgeDepths($.RIGHT, a), a = u.getDepth($.LEFT);
                                        }
                                        return a;
                                    }
                                }
                            },
                            {
                                key: "mergeSymLabels",
                                value: function() {
                                    for(var t = this.iterator(); t.hasNext();){
                                        var e = t.next();
                                        e.getLabel().merge(e.getSym().getLabel());
                                    }
                                }
                            },
                            {
                                key: "linkMinimalDirectedEdges",
                                value: function(t) {
                                    for(var e = null, n = null, i = this._SCANNING_FOR_INCOMING, r = this._resultAreaEdgeList.size() - 1; r >= 0; r--){
                                        var s = this._resultAreaEdgeList.get(r), a = s.getSym();
                                        switch(null === e && s.getEdgeRing() === t && (e = s), i){
                                            case this._SCANNING_FOR_INCOMING:
                                                if (a.getEdgeRing() !== t) continue;
                                                n = a, i = this._LINKING_TO_OUTGOING;
                                                break;
                                            case this._LINKING_TO_OUTGOING:
                                                if (s.getEdgeRing() !== t) continue;
                                                n.setNextMin(s), i = this._SCANNING_FOR_INCOMING;
                                        }
                                    }
                                    i === this._LINKING_TO_OUTGOING && (G.isTrue(null !== e, "found null for first outgoing dirEdge"), G.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e));
                                }
                            },
                            {
                                key: "getOutgoingDegree",
                                value: function() {
                                    if (0 === arguments.length) {
                                        for(var t = 0, e = this.iterator(); e.hasNext();)e.next().isInResult() && t++;
                                        return t;
                                    }
                                    if (1 === arguments.length) {
                                        for(var n = arguments[0], i = 0, r = this.iterator(); r.hasNext();)r.next().getEdgeRing() === n && i++;
                                        return i;
                                    }
                                }
                            },
                            {
                                key: "getLabel",
                                value: function() {
                                    return this._label;
                                }
                            },
                            {
                                key: "findCoveredLineEdges",
                                value: function() {
                                    for(var t = H.NONE, e = this.iterator(); e.hasNext();){
                                        var n = e.next(), i = n.getSym();
                                        if (!n.isLineEdge()) {
                                            if (n.isInResult()) {
                                                t = H.INTERIOR;
                                                break;
                                            }
                                            if (i.isInResult()) {
                                                t = H.EXTERIOR;
                                                break;
                                            }
                                        }
                                    }
                                    if (t === H.NONE) return null;
                                    for(var r = t, s = this.iterator(); s.hasNext();){
                                        var a = s.next(), o = a.getSym();
                                        a.isLineEdge() ? a.getEdge().setCovered(r === H.INTERIOR) : (a.isInResult() && (r = H.EXTERIOR), o.isInResult() && (r = H.INTERIOR));
                                    }
                                }
                            },
                            {
                                key: "computeLabelling",
                                value: function(t) {
                                    f(i, "computeLabelling", this, 1).call(this, t), this._label = new Ae(H.NONE);
                                    for(var e = this.iterator(); e.hasNext();)for(var n = e.next().getEdge().getLabel(), r = 0; r < 2; r++){
                                        var s = n.getLocation(r);
                                        s !== H.INTERIOR && s !== H.BOUNDARY || this._label.setLocation(r, H.INTERIOR);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
                                }
                            }
                        ]);
                    }(Un), Hn = function(t) {
                        function i() {
                            return n(this, i), e(this, i);
                        }
                        return l(i, t), s(i, [
                            {
                                key: "createNode",
                                value: function(t) {
                                    return new qe(t, new Vn);
                                }
                            }
                        ]);
                    }(Je), Zn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "compareTo",
                                value: function(e) {
                                    var n = e;
                                    return t.compareOriented(this._pts, this._orientation, n._pts, n._orientation);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._pts = null, this._orientation = null;
                                    var e = arguments[0];
                                    this._pts = e, this._orientation = t.orientation(e);
                                }
                            },
                            {
                                key: "orientation",
                                value: function(t) {
                                    return 1 === jt.increasingDirection(t);
                                }
                            },
                            {
                                key: "compareOriented",
                                value: function(t, e, n, i) {
                                    for(var r = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, o = i ? n.length : -1, u = e ? 0 : t.length - 1, l = i ? 0 : n.length - 1;;){
                                        var h = t[u].compareTo(n[l]);
                                        if (0 !== h) return h;
                                        var c = (u += r) === a, f = (l += s) === o;
                                        if (c && !f) return -1;
                                        if (!c && f) return 1;
                                        if (c && f) return 0;
                                    }
                                }
                            }
                        ]);
                    }(), jn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "print",
                                value: function(t) {
                                    t.print("MULTILINESTRING ( ");
                                    for(var e = 0; e < this._edges.size(); e++){
                                        var n = this._edges.get(e);
                                        e > 0 && t.print(","), t.print("(");
                                        for(var i = n.getCoordinates(), r = 0; r < i.length; r++)r > 0 && t.print(","), t.print(i[r].x + " " + i[r].y);
                                        t.println(")");
                                    }
                                    t.print(")  ");
                                }
                            },
                            {
                                key: "addAll",
                                value: function(t) {
                                    for(var e = t.iterator(); e.hasNext();)this.add(e.next());
                                }
                            },
                            {
                                key: "findEdgeIndex",
                                value: function(t) {
                                    for(var e = 0; e < this._edges.size(); e++)if (this._edges.get(e).equals(t)) return e;
                                    return -1;
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return this._edges.iterator();
                                }
                            },
                            {
                                key: "getEdges",
                                value: function() {
                                    return this._edges;
                                }
                            },
                            {
                                key: "get",
                                value: function(t) {
                                    return this._edges.get(t);
                                }
                            },
                            {
                                key: "findEqualEdge",
                                value: function(t) {
                                    var e = new Zn(t.getCoordinates());
                                    return this._ocaMap.get(e);
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    this._edges.add(t);
                                    var e = new Zn(t.getCoordinates());
                                    this._ocaMap.put(e, t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._edges = new yt, this._ocaMap = new He;
                                }
                            }
                        ]);
                    }(), Wn = function() {
                        return s(function t() {
                            n(this, t);
                        }, [
                            {
                                key: "processIntersections",
                                value: function(t, e, n, i) {}
                            },
                            {
                                key: "isDone",
                                value: function() {}
                            }
                        ]);
                    }(), Kn = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "isTrivialIntersection",
                                value: function(e, n, i, r) {
                                    if (e === i && 1 === this._li.getIntersectionNum()) {
                                        if (t.isAdjacentSegments(n, r)) return !0;
                                        if (e.isClosed()) {
                                            var s = e.size() - 1;
                                            if (0 === n && r === s || 0 === r && n === s) return !0;
                                        }
                                    }
                                    return !1;
                                }
                            },
                            {
                                key: "getProperIntersectionPoint",
                                value: function() {
                                    return this._properIntersectionPoint;
                                }
                            },
                            {
                                key: "hasProperInteriorIntersection",
                                value: function() {
                                    return this._hasProperInterior;
                                }
                            },
                            {
                                key: "getLineIntersector",
                                value: function() {
                                    return this._li;
                                }
                            },
                            {
                                key: "hasProperIntersection",
                                value: function() {
                                    return this._hasProper;
                                }
                            },
                            {
                                key: "processIntersections",
                                value: function(t, e, n, i) {
                                    if (t === n && e === i) return null;
                                    this.numTests++;
                                    var r = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], o = n.getCoordinates()[i + 1];
                                    this._li.computeIntersection(r, s, a, o), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
                                }
                            },
                            {
                                key: "hasIntersection",
                                value: function() {
                                    return this._hasIntersection;
                                }
                            },
                            {
                                key: "isDone",
                                value: function() {
                                    return !1;
                                }
                            },
                            {
                                key: "hasInteriorIntersection",
                                value: function() {
                                    return this._hasInterior;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Wn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
                                    var t = arguments[0];
                                    this._li = t;
                                }
                            },
                            {
                                key: "isAdjacentSegments",
                                value: function(t, e) {
                                    return 1 === Math.abs(t - e);
                                }
                            }
                        ]);
                    }(), Jn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getSegmentIndex",
                                value: function() {
                                    return this.segmentIndex;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this.coord;
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
                                }
                            },
                            {
                                key: "compareTo",
                                value: function(t) {
                                    var e = t;
                                    return this.compare(e.segmentIndex, e.dist);
                                }
                            },
                            {
                                key: "isEndPoint",
                                value: function(t) {
                                    return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
                                }
                            },
                            {
                                key: "getDistance",
                                value: function() {
                                    return this.dist;
                                }
                            },
                            {
                                key: "compare",
                                value: function(t, e) {
                                    return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        x
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this.coord = null, this.segmentIndex = null, this.dist = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    this.coord = new X(t), this.segmentIndex = e, this.dist = n;
                                }
                            }
                        ]);
                    }(), Qn = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "print",
                                value: function(t) {
                                    t.println("Intersections:");
                                    for(var e = this.iterator(); e.hasNext();)e.next().print(t);
                                }
                            },
                            {
                                key: "iterator",
                                value: function() {
                                    return this._nodeMap.values().iterator();
                                }
                            },
                            {
                                key: "addSplitEdges",
                                value: function(t) {
                                    this.addEndpoints();
                                    for(var e = this.iterator(), n = e.next(); e.hasNext();){
                                        var i = e.next(), r = this.createSplitEdge(n, i);
                                        t.add(r), n = i;
                                    }
                                }
                            },
                            {
                                key: "addEndpoints",
                                value: function() {
                                    var t = this.edge.pts.length - 1;
                                    this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
                                }
                            },
                            {
                                key: "createSplitEdge",
                                value: function(t, e) {
                                    var n = e.segmentIndex - t.segmentIndex + 2, i = this.edge.pts[e.segmentIndex], r = e.dist > 0 || !e.coord.equals2D(i);
                                    r || n--;
                                    var s = new Array(n).fill(null), a = 0;
                                    s[a++] = new X(t.coord);
                                    for(var o = t.segmentIndex + 1; o <= e.segmentIndex; o++)s[a++] = this.edge.pts[o];
                                    return r && (s[a] = e.coord), new ri(s, new Ae(this.edge._label));
                                }
                            },
                            {
                                key: "add",
                                value: function(t, e, n) {
                                    var i = new Jn(t, e, n), r = this._nodeMap.get(i);
                                    return null !== r ? r : (this._nodeMap.put(i, i), i);
                                }
                            },
                            {
                                key: "isIntersection",
                                value: function(t) {
                                    for(var e = this.iterator(); e.hasNext();)if (e.next().coord.equals(t)) return !0;
                                    return !1;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._nodeMap = new He, this.edge = null;
                                    var t = arguments[0];
                                    this.edge = t;
                                }
                            }
                        ]);
                    }(), $n = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "isIntersects",
                                value: function() {
                                    return !this.isDisjoint();
                                }
                            },
                            {
                                key: "isCovers",
                                value: function() {
                                    return (t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) || t.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || t.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || t.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY])) && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE;
                                }
                            },
                            {
                                key: "isCoveredBy",
                                value: function() {
                                    return (t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) || t.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || t.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || t.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY])) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE;
                                }
                            },
                            {
                                key: "set",
                                value: function() {
                                    if (1 === arguments.length) for(var t = arguments[0], e = 0; e < t.length; e++){
                                        var n = Math.trunc(e / 3), i = e % 3;
                                        this._matrix[n][i] = Lt.toDimensionValue(t.charAt(e));
                                    }
                                    else if (3 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2];
                                        this._matrix[r][s] = a;
                                    }
                                }
                            },
                            {
                                key: "isContains",
                                value: function() {
                                    return t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE;
                                }
                            },
                            {
                                key: "setAtLeast",
                                value: function() {
                                    if (1 === arguments.length) for(var t = arguments[0], e = 0; e < t.length; e++){
                                        var n = Math.trunc(e / 3), i = e % 3;
                                        this.setAtLeast(n, i, Lt.toDimensionValue(t.charAt(e)));
                                    }
                                    else if (3 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2];
                                        this._matrix[r][s] < a && (this._matrix[r][s] = a);
                                    }
                                }
                            },
                            {
                                key: "setAtLeastIfValid",
                                value: function(t, e, n) {
                                    t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
                                }
                            },
                            {
                                key: "isWithin",
                                value: function() {
                                    return t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE;
                                }
                            },
                            {
                                key: "isTouches",
                                value: function(e, n) {
                                    return e > n ? this.isTouches(n, e) : (e === Lt.A && n === Lt.A || e === Lt.L && n === Lt.L || e === Lt.L && n === Lt.A || e === Lt.P && n === Lt.A || e === Lt.P && n === Lt.L) && this._matrix[H.INTERIOR][H.INTERIOR] === Lt.FALSE && (t.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || t.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || t.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY]));
                                }
                            },
                            {
                                key: "isOverlaps",
                                value: function(e, n) {
                                    return e === Lt.P && n === Lt.P || e === Lt.A && n === Lt.A ? t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && t.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) && t.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]) : e === Lt.L && n === Lt.L && 1 === this._matrix[H.INTERIOR][H.INTERIOR] && t.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) && t.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]);
                                }
                            },
                            {
                                key: "isEquals",
                                value: function(e, n) {
                                    return e === n && t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    for(var t = new Jt("123456789"), e = 0; e < 3; e++)for(var n = 0; n < 3; n++)t.setCharAt(3 * e + n, Lt.toDimensionSymbol(this._matrix[e][n]));
                                    return t.toString();
                                }
                            },
                            {
                                key: "setAll",
                                value: function(t) {
                                    for(var e = 0; e < 3; e++)for(var n = 0; n < 3; n++)this._matrix[e][n] = t;
                                }
                            },
                            {
                                key: "get",
                                value: function(t, e) {
                                    return this._matrix[t][e];
                                }
                            },
                            {
                                key: "transpose",
                                value: function() {
                                    var t = this._matrix[1][0];
                                    return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = t, t = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = t, t = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = t, this;
                                }
                            },
                            {
                                key: "matches",
                                value: function(e) {
                                    if (9 !== e.length) throw new m("Should be length 9: " + e);
                                    for(var n = 0; n < 3; n++)for(var i = 0; i < 3; i++)if (!t.matches(this._matrix[n][i], e.charAt(3 * n + i))) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    for(var e = 0; e < 3; e++)for(var n = 0; n < 3; n++)this.setAtLeast(e, n, t.get(e, n));
                                }
                            },
                            {
                                key: "isDisjoint",
                                value: function() {
                                    return this._matrix[H.INTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.INTERIOR][H.BOUNDARY] === Lt.FALSE && this._matrix[H.BOUNDARY][H.INTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.BOUNDARY] === Lt.FALSE;
                                }
                            },
                            {
                                key: "isCrosses",
                                value: function(e, n) {
                                    return e === Lt.P && n === Lt.L || e === Lt.P && n === Lt.A || e === Lt.L && n === Lt.A ? t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && t.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) : e === Lt.L && n === Lt.P || e === Lt.A && n === Lt.P || e === Lt.A && n === Lt.L ? t.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && t.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]) : e === Lt.L && n === Lt.L && 0 === this._matrix[H.INTERIOR][H.INTERIOR];
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        I
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._matrix = null, 0 === arguments.length) this._matrix = Array(3).fill().map(function() {
                                        return Array(3);
                                    }), this.setAll(Lt.FALSE);
                                    else if (1 === arguments.length) {
                                        if ("string" == typeof arguments[0]) {
                                            var e = arguments[0];
                                            t.constructor_.call(this), this.set(e);
                                        } else if (arguments[0] instanceof t) {
                                            var n = arguments[0];
                                            t.constructor_.call(this), this._matrix[H.INTERIOR][H.INTERIOR] = n._matrix[H.INTERIOR][H.INTERIOR], this._matrix[H.INTERIOR][H.BOUNDARY] = n._matrix[H.INTERIOR][H.BOUNDARY], this._matrix[H.INTERIOR][H.EXTERIOR] = n._matrix[H.INTERIOR][H.EXTERIOR], this._matrix[H.BOUNDARY][H.INTERIOR] = n._matrix[H.BOUNDARY][H.INTERIOR], this._matrix[H.BOUNDARY][H.BOUNDARY] = n._matrix[H.BOUNDARY][H.BOUNDARY], this._matrix[H.BOUNDARY][H.EXTERIOR] = n._matrix[H.BOUNDARY][H.EXTERIOR], this._matrix[H.EXTERIOR][H.INTERIOR] = n._matrix[H.EXTERIOR][H.INTERIOR], this._matrix[H.EXTERIOR][H.BOUNDARY] = n._matrix[H.EXTERIOR][H.BOUNDARY], this._matrix[H.EXTERIOR][H.EXTERIOR] = n._matrix[H.EXTERIOR][H.EXTERIOR];
                                        }
                                    }
                                }
                            },
                            {
                                key: "matches",
                                value: function() {
                                    if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
                                        var e = arguments[0], n = arguments[1];
                                        return n === Lt.SYM_DONTCARE || n === Lt.SYM_TRUE && (e >= 0 || e === Lt.TRUE) || n === Lt.SYM_FALSE && e === Lt.FALSE || n === Lt.SYM_P && e === Lt.P || n === Lt.SYM_L && e === Lt.L || n === Lt.SYM_A && e === Lt.A;
                                    }
                                    if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
                                        var i = arguments[1];
                                        return new t(arguments[0]).matches(i);
                                    }
                                }
                            },
                            {
                                key: "isTrue",
                                value: function(t) {
                                    return t >= 0 || t === Lt.TRUE;
                                }
                            }
                        ]);
                    }(), ti = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "size",
                                value: function() {
                                    return this._size;
                                }
                            },
                            {
                                key: "addAll",
                                value: function(t) {
                                    return null === t || 0 === t.length ? null : (this.ensureCapacity(this._size + t.length), mt.arraycopy(t, 0, this._data, this._size, t.length), void (this._size += t.length));
                                }
                            },
                            {
                                key: "ensureCapacity",
                                value: function(t) {
                                    if (t <= this._data.length) return null;
                                    var e = Math.max(t, 2 * this._data.length);
                                    this._data = At.copyOf(this._data, e);
                                }
                            },
                            {
                                key: "toArray",
                                value: function() {
                                    var t = new Array(this._size).fill(null);
                                    return mt.arraycopy(this._data, 0, t, 0, this._size), t;
                                }
                            },
                            {
                                key: "add",
                                value: function(t) {
                                    this.ensureCapacity(this._size + 1), this._data[this._size] = t, ++this._size;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._data = null, this._size = 0, 0 === arguments.length) t.constructor_.call(this, 10);
                                    else if (1 === arguments.length) {
                                        var e = arguments[0];
                                        this._data = new Array(e).fill(null);
                                    }
                                }
                            }
                        ]);
                    }(), ei = function() {
                        function t() {
                            n(this, t);
                        }
                        return s(t, [
                            {
                                key: "getChainStartIndices",
                                value: function(t) {
                                    var e = 0, n = new ti(Math.trunc(t.length / 2));
                                    n.add(e);
                                    do {
                                        var i = this.findChainEnd(t, e);
                                        n.add(i), e = i;
                                    }while (e < t.length - 1);
                                    return n.toArray();
                                }
                            },
                            {
                                key: "findChainEnd",
                                value: function(t, e) {
                                    for(var n = je.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length;){
                                        if (je.quadrant(t[i - 1], t[i]) !== n) break;
                                        i++;
                                    }
                                    return i - 1;
                                }
                            },
                            {
                                key: "OLDgetChainStartIndices",
                                value: function(e) {
                                    var n = 0, i = new yt;
                                    i.add(n);
                                    do {
                                        var r = this.findChainEnd(e, n);
                                        i.add(r), n = r;
                                    }while (n < e.length - 1);
                                    return t.toIntArray(i);
                                }
                            }
                        ], [
                            {
                                key: "toIntArray",
                                value: function(t) {
                                    for(var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)e[n] = t.get(n).intValue();
                                    return e;
                                }
                            }
                        ]);
                    }(), ni = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this.pts;
                                }
                            },
                            {
                                key: "getMaxX",
                                value: function(t) {
                                    var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
                                    return e > n ? e : n;
                                }
                            },
                            {
                                key: "getMinX",
                                value: function(t) {
                                    var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
                                    return e < n ? e : n;
                                }
                            },
                            {
                                key: "computeIntersectsForChain",
                                value: function() {
                                    if (4 === arguments.length) {
                                        var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
                                        this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
                                    } else if (6 === arguments.length) {
                                        var r = arguments[0], s = arguments[1], a = arguments[2], o = arguments[3], u = arguments[4], l = arguments[5];
                                        if (s - r == 1 && u - o == 1) return l.addIntersections(this.e, r, a.e, o), null;
                                        if (!this.overlaps(r, s, a, o, u)) return null;
                                        var h = Math.trunc((r + s) / 2), c = Math.trunc((o + u) / 2);
                                        r < h && (o < c && this.computeIntersectsForChain(r, h, a, o, c, l), c < u && this.computeIntersectsForChain(r, h, a, c, u, l)), h < s && (o < c && this.computeIntersectsForChain(h, s, a, o, c, l), c < u && this.computeIntersectsForChain(h, s, a, c, u, l));
                                    }
                                }
                            },
                            {
                                key: "overlaps",
                                value: function(t, e, n, i, r) {
                                    return U.intersects(this.pts[t], this.pts[e], n.pts[i], n.pts[r]);
                                }
                            },
                            {
                                key: "getStartIndexes",
                                value: function() {
                                    return this.startIndex;
                                }
                            },
                            {
                                key: "computeIntersects",
                                value: function(t, e) {
                                    for(var n = 0; n < this.startIndex.length - 1; n++)for(var i = 0; i < t.startIndex.length - 1; i++)this.computeIntersectsForChain(n, t, i, e);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this.e = null, this.pts = null, this.startIndex = null;
                                    var t = arguments[0];
                                    this.e = t, this.pts = t.getCoordinates();
                                    var e = new ei;
                                    this.startIndex = e.getChainStartIndices(this.pts);
                                }
                            }
                        ]);
                    }(), ii = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "getDepth",
                                value: function(t, e) {
                                    return this._depth[t][e];
                                }
                            },
                            {
                                key: "setDepth",
                                value: function(t, e, n) {
                                    this._depth[t][e] = n;
                                }
                            },
                            {
                                key: "isNull",
                                value: function() {
                                    if (0 === arguments.length) {
                                        for(var e = 0; e < 2; e++)for(var n = 0; n < 3; n++)if (this._depth[e][n] !== t.NULL_VALUE) return !1;
                                        return !0;
                                    }
                                    if (1 === arguments.length) {
                                        var i = arguments[0];
                                        return this._depth[i][1] === t.NULL_VALUE;
                                    }
                                    if (2 === arguments.length) {
                                        var r = arguments[0], s = arguments[1];
                                        return this._depth[r][s] === t.NULL_VALUE;
                                    }
                                }
                            },
                            {
                                key: "normalize",
                                value: function() {
                                    for(var t = 0; t < 2; t++)if (!this.isNull(t)) {
                                        var e = this._depth[t][1];
                                        this._depth[t][2] < e && (e = this._depth[t][2]), e < 0 && (e = 0);
                                        for(var n = 1; n < 3; n++){
                                            var i = 0;
                                            this._depth[t][n] > e && (i = 1), this._depth[t][n] = i;
                                        }
                                    }
                                }
                            },
                            {
                                key: "getDelta",
                                value: function(t) {
                                    return this._depth[t][$.RIGHT] - this._depth[t][$.LEFT];
                                }
                            },
                            {
                                key: "getLocation",
                                value: function(t, e) {
                                    return this._depth[t][e] <= 0 ? H.EXTERIOR : H.INTERIOR;
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
                                }
                            },
                            {
                                key: "add",
                                value: function() {
                                    if (1 === arguments.length) for(var e = arguments[0], n = 0; n < 2; n++)for(var i = 1; i < 3; i++){
                                        var r = e.getLocation(n, i);
                                        r !== H.EXTERIOR && r !== H.INTERIOR || (this.isNull(n, i) ? this._depth[n][i] = t.depthAtLocation(r) : this._depth[n][i] += t.depthAtLocation(r));
                                    }
                                    else if (3 === arguments.length) {
                                        var s = arguments[0], a = arguments[1];
                                        arguments[2] === H.INTERIOR && this._depth[s][a]++;
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._depth = Array(2).fill().map(function() {
                                        return Array(3);
                                    });
                                    for(var e = 0; e < 2; e++)for(var n = 0; n < 3; n++)this._depth[e][n] = t.NULL_VALUE;
                                }
                            },
                            {
                                key: "depthAtLocation",
                                value: function(e) {
                                    return e === H.EXTERIOR ? 0 : e === H.INTERIOR ? 1 : t.NULL_VALUE;
                                }
                            }
                        ]);
                    }();
                    ii.NULL_VALUE = -1;
                    var ri = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "getDepth",
                                value: function() {
                                    return this._depth;
                                }
                            },
                            {
                                key: "getCollapsedEdge",
                                value: function() {
                                    var t = new Array(2).fill(null);
                                    return t[0] = this.pts[0], t[1] = this.pts[1], new i(t, Ae.toLineLabel(this._label));
                                }
                            },
                            {
                                key: "isIsolated",
                                value: function() {
                                    return this._isIsolated;
                                }
                            },
                            {
                                key: "getCoordinates",
                                value: function() {
                                    return this.pts;
                                }
                            },
                            {
                                key: "setIsolated",
                                value: function(t) {
                                    this._isIsolated = t;
                                }
                            },
                            {
                                key: "setName",
                                value: function(t) {
                                    this._name = t;
                                }
                            },
                            {
                                key: "equals",
                                value: function(t) {
                                    if (!(t instanceof i)) return !1;
                                    var e = t;
                                    if (this.pts.length !== e.pts.length) return !1;
                                    for(var n = !0, r = !0, s = this.pts.length, a = 0; a < this.pts.length; a++)if (this.pts[a].equals2D(e.pts[a]) || (n = !1), this.pts[a].equals2D(e.pts[--s]) || (r = !1), !n && !r) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    if (0 === arguments.length) return this.pts.length > 0 ? this.pts[0] : null;
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.pts[t];
                                    }
                                }
                            },
                            {
                                key: "print",
                                value: function(t) {
                                    t.print("edge " + this._name + ": "), t.print("LINESTRING (");
                                    for(var e = 0; e < this.pts.length; e++)e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y);
                                    t.print(")  " + this._label + " " + this._depthDelta);
                                }
                            },
                            {
                                key: "computeIM",
                                value: function(t) {
                                    i.updateIM(this._label, t);
                                }
                            },
                            {
                                key: "isCollapsed",
                                value: function() {
                                    return !!this._label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2]);
                                }
                            },
                            {
                                key: "isClosed",
                                value: function() {
                                    return this.pts[0].equals(this.pts[this.pts.length - 1]);
                                }
                            },
                            {
                                key: "getMaximumSegmentIndex",
                                value: function() {
                                    return this.pts.length - 1;
                                }
                            },
                            {
                                key: "getDepthDelta",
                                value: function() {
                                    return this._depthDelta;
                                }
                            },
                            {
                                key: "getNumPoints",
                                value: function() {
                                    return this.pts.length;
                                }
                            },
                            {
                                key: "printReverse",
                                value: function(t) {
                                    t.print("edge " + this._name + ": ");
                                    for(var e = this.pts.length - 1; e >= 0; e--)t.print(this.pts[e] + " ");
                                    t.println("");
                                }
                            },
                            {
                                key: "getMonotoneChainEdge",
                                value: function() {
                                    return null === this._mce && (this._mce = new ni(this)), this._mce;
                                }
                            },
                            {
                                key: "getEnvelope",
                                value: function() {
                                    if (null === this._env) {
                                        this._env = new U;
                                        for(var t = 0; t < this.pts.length; t++)this._env.expandToInclude(this.pts[t]);
                                    }
                                    return this._env;
                                }
                            },
                            {
                                key: "addIntersection",
                                value: function(t, e, n, i) {
                                    var r = new X(t.getIntersection(i)), s = e, a = t.getEdgeDistance(n, i), o = s + 1;
                                    if (o < this.pts.length) {
                                        var u = this.pts[o];
                                        r.equals2D(u) && (s = o, a = 0);
                                    }
                                    this.eiList.add(r, s, a);
                                }
                            },
                            {
                                key: "toString",
                                value: function() {
                                    var t = new Jt;
                                    t.append("edge " + this._name + ": "), t.append("LINESTRING (");
                                    for(var e = 0; e < this.pts.length; e++)e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y);
                                    return t.append(")  " + this._label + " " + this._depthDelta), t.toString();
                                }
                            },
                            {
                                key: "isPointwiseEqual",
                                value: function(t) {
                                    if (this.pts.length !== t.pts.length) return !1;
                                    for(var e = 0; e < this.pts.length; e++)if (!this.pts[e].equals2D(t.pts[e])) return !1;
                                    return !0;
                                }
                            },
                            {
                                key: "setDepthDelta",
                                value: function(t) {
                                    this._depthDelta = t;
                                }
                            },
                            {
                                key: "getEdgeIntersectionList",
                                value: function() {
                                    return this.eiList;
                                }
                            },
                            {
                                key: "addIntersections",
                                value: function(t, e, n) {
                                    for(var i = 0; i < t.getIntersectionNum(); i++)this.addIntersection(t, e, n, i);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this.pts = null, this._env = null, this.eiList = new Qn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new ii, this._depthDelta = 0, 1 === arguments.length) {
                                        var t = arguments[0];
                                        i.constructor_.call(this, t, null);
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this.pts = e, this._label = n;
                                    }
                                }
                            },
                            {
                                key: "updateIM",
                                value: function() {
                                    if (!(2 === arguments.length && arguments[1] instanceof $n && arguments[0] instanceof Ae)) return f(i, "updateIM", this).apply(this, arguments);
                                    var t = arguments[0], e = arguments[1];
                                    e.setAtLeastIfValid(t.getLocation(0, $.ON), t.getLocation(1, $.ON), 1), t.isArea() && (e.setAtLeastIfValid(t.getLocation(0, $.LEFT), t.getLocation(1, $.LEFT), 2), e.setAtLeastIfValid(t.getLocation(0, $.RIGHT), t.getLocation(1, $.RIGHT), 2));
                                }
                            }
                        ]);
                    }(Ge), si = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "setWorkingPrecisionModel",
                                value: function(t) {
                                    this._workingPrecisionModel = t;
                                }
                            },
                            {
                                key: "insertUniqueEdge",
                                value: function(e) {
                                    var n = this._edgeList.findEqualEdge(e);
                                    if (null !== n) {
                                        var i = n.getLabel(), r = e.getLabel();
                                        n.isPointwiseEqual(e) || (r = new Ae(e.getLabel())).flip(), i.merge(r);
                                        var s = t.depthDelta(r), a = n.getDepthDelta() + s;
                                        n.setDepthDelta(a);
                                    } else this._edgeList.add(e), e.setDepthDelta(t.depthDelta(e.getLabel()));
                                }
                            },
                            {
                                key: "buildSubgraphs",
                                value: function(t, e) {
                                    for(var n = new yt, i = t.iterator(); i.hasNext();){
                                        var r = i.next(), s = r.getRightmostCoordinate(), a = new Pn(n).getDepth(s);
                                        r.computeDepth(a), r.findResultEdges(), n.add(r), e.add(r.getDirectedEdges(), r.getNodes());
                                    }
                                }
                            },
                            {
                                key: "createSubgraphs",
                                value: function(t) {
                                    for(var e = new yt, n = t.getNodes().iterator(); n.hasNext();){
                                        var i = n.next();
                                        if (!i.isVisited()) {
                                            var r = new _t;
                                            r.create(i), e.add(r);
                                        }
                                    }
                                    return an.sort(e, an.reverseOrder()), e;
                                }
                            },
                            {
                                key: "createEmptyResultGeometry",
                                value: function() {
                                    return this._geomFact.createPolygon();
                                }
                            },
                            {
                                key: "getNoder",
                                value: function(t) {
                                    if (null !== this._workingNoder) return this._workingNoder;
                                    var e = new Cn, n = new we;
                                    return n.setPrecisionModel(t), e.setSegmentIntersector(new Kn(n)), e;
                                }
                            },
                            {
                                key: "buffer",
                                value: function(t, e) {
                                    var n = this._workingPrecisionModel;
                                    null === n && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
                                    var i = new An(n, this._bufParams), r = new Yn(t, e, i).getCurves();
                                    if (r.size() <= 0) return this.createEmptyResultGeometry();
                                    this.computeNodedEdges(r, n), this._graph = new Qe(new Hn), this._graph.addEdges(this._edgeList.getEdges());
                                    var s = this.createSubgraphs(this._graph), a = new $e(this._geomFact);
                                    this.buildSubgraphs(s, a);
                                    var o = a.getPolygons();
                                    return o.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(o);
                                }
                            },
                            {
                                key: "computeNodedEdges",
                                value: function(t, e) {
                                    var n = this.getNoder(e);
                                    n.computeNodes(t);
                                    for(var i = n.getNodedSubstrings().iterator(); i.hasNext();){
                                        var r = i.next(), s = r.getCoordinates();
                                        if (2 !== s.length || !s[0].equals2D(s[1])) {
                                            var a = r.getData(), o = new ri(r.getCoordinates(), new Ae(a));
                                            this.insertUniqueEdge(o);
                                        }
                                    }
                                }
                            },
                            {
                                key: "setNoder",
                                value: function(t) {
                                    this._workingNoder = t;
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new jn;
                                    var t = arguments[0];
                                    this._bufParams = t;
                                }
                            },
                            {
                                key: "depthDelta",
                                value: function(t) {
                                    var e = t.getLocation(0, $.LEFT), n = t.getLocation(0, $.RIGHT);
                                    return e === H.INTERIOR && n === H.EXTERIOR ? 1 : e === H.EXTERIOR && n === H.INTERIOR ? -1 : 0;
                                }
                            },
                            {
                                key: "convertSegStrings",
                                value: function(t) {
                                    for(var e = new ae, n = new yt; t.hasNext();){
                                        var i = t.next(), r = e.createLineString(i.getCoordinates());
                                        n.add(r);
                                    }
                                    return e.buildGeometry(n);
                                }
                            }
                        ]);
                    }(), ai = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "rescale",
                                value: function() {
                                    if (rt(arguments[0], Z)) for(var t = arguments[0].iterator(); t.hasNext();){
                                        var e = t.next();
                                        this.rescale(e.getCoordinates());
                                    }
                                    else if (arguments[0] instanceof Array) {
                                        for(var n = arguments[0], i = 0; i < n.length; i++)n[i].x = n[i].x / this._scaleFactor + this._offsetX, n[i].y = n[i].y / this._scaleFactor + this._offsetY;
                                        2 === n.length && n[0].equals2D(n[1]) && mt.out.println(n);
                                    }
                                }
                            },
                            {
                                key: "scale",
                                value: function() {
                                    if (rt(arguments[0], Z)) {
                                        for(var t = arguments[0], e = new yt(t.size()), n = t.iterator(); n.hasNext();){
                                            var i = n.next();
                                            e.add(new xn(this.scale(i.getCoordinates()), i.getData()));
                                        }
                                        return e;
                                    }
                                    if (arguments[0] instanceof Array) {
                                        for(var r = arguments[0], s = new Array(r.length).fill(null), a = 0; a < r.length; a++)s[a] = new X(Math.round((r[a].x - this._offsetX) * this._scaleFactor), Math.round((r[a].y - this._offsetY) * this._scaleFactor), r[a].getZ());
                                        return jt.removeRepeatedPoints(s);
                                    }
                                }
                            },
                            {
                                key: "isIntegerPrecision",
                                value: function() {
                                    return 1 === this._scaleFactor;
                                }
                            },
                            {
                                key: "getNodedSubstrings",
                                value: function() {
                                    var t = this._noder.getNodedSubstrings();
                                    return this._isScaled && this.rescale(t), t;
                                }
                            },
                            {
                                key: "computeNodes",
                                value: function(t) {
                                    var e = t;
                                    this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Sn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, 2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        t.constructor_.call(this, e, n, 0, 0);
                                    } else if (4 === arguments.length) {
                                        var i = arguments[0], r = arguments[1];
                                        this._noder = i, this._scaleFactor = r, this._isScaled = !this.isIntegerPrecision();
                                    }
                                }
                            }
                        ]);
                    }(), oi = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "checkEndPtVertexIntersections",
                                value: function() {
                                    if (0 === arguments.length) for(var t = this._segStrings.iterator(); t.hasNext();){
                                        var e = t.next().getCoordinates();
                                        this.checkEndPtVertexIntersections(e[0], this._segStrings), this.checkEndPtVertexIntersections(e[e.length - 1], this._segStrings);
                                    }
                                    else if (2 === arguments.length) {
                                        for(var n = arguments[0], i = arguments[1].iterator(); i.hasNext();)for(var r = i.next().getCoordinates(), s = 1; s < r.length - 1; s++)if (r[s].equals(n)) throw new D("found endpt/interior pt intersection at index " + s + " :pt " + n);
                                    }
                                }
                            },
                            {
                                key: "checkInteriorIntersections",
                                value: function() {
                                    if (0 === arguments.length) for(var t = this._segStrings.iterator(); t.hasNext();)for(var e = t.next(), n = this._segStrings.iterator(); n.hasNext();){
                                        var i = n.next();
                                        this.checkInteriorIntersections(e, i);
                                    }
                                    else if (2 === arguments.length) for(var r = arguments[0], s = arguments[1], a = r.getCoordinates(), o = s.getCoordinates(), u = 0; u < a.length - 1; u++)for(var l = 0; l < o.length - 1; l++)this.checkInteriorIntersections(r, u, s, l);
                                    else if (4 === arguments.length) {
                                        var h = arguments[0], c = arguments[1], f = arguments[2], g = arguments[3];
                                        if (h === f && c === g) return null;
                                        var v = h.getCoordinates()[c], y = h.getCoordinates()[c + 1], d = f.getCoordinates()[g], _ = f.getCoordinates()[g + 1];
                                        if (this._li.computeIntersection(v, y, d, _), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, v, y) || this.hasInteriorIntersection(this._li, d, _))) throw new D("found non-noded intersection at " + v + "-" + y + " and " + d + "-" + _);
                                    }
                                }
                            },
                            {
                                key: "checkValid",
                                value: function() {
                                    this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
                                }
                            },
                            {
                                key: "checkCollapses",
                                value: function() {
                                    if (0 === arguments.length) for(var t = this._segStrings.iterator(); t.hasNext();){
                                        var e = t.next();
                                        this.checkCollapses(e);
                                    }
                                    else if (1 === arguments.length) for(var n = arguments[0].getCoordinates(), i = 0; i < n.length - 2; i++)this.checkCollapse(n[i], n[i + 1], n[i + 2]);
                                }
                            },
                            {
                                key: "hasInteriorIntersection",
                                value: function(t, e, n) {
                                    for(var i = 0; i < t.getIntersectionNum(); i++){
                                        var r = t.getIntersection(i);
                                        if (!r.equals(e) && !r.equals(n)) return !0;
                                    }
                                    return !1;
                                }
                            },
                            {
                                key: "checkCollapse",
                                value: function(e, n, i) {
                                    if (e.equals(i)) throw new D("found non-noded collapse at " + t.fact.createLineString([
                                        e,
                                        n,
                                        i
                                    ]));
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._li = new we, this._segStrings = null;
                                    var t = arguments[0];
                                    this._segStrings = t;
                                }
                            }
                        ]);
                    }();
                    oi.fact = new ae;
                    var ui = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "intersectsScaled",
                                value: function(t, e) {
                                    var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), r = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < n || this._minx > i || this._maxy < r || this._miny > s;
                                    if (a) return !1;
                                    var o = this.intersectsToleranceSquare(t, e);
                                    return G.isTrue(!(a && o), "Found bad envelope test"), o;
                                }
                            },
                            {
                                key: "initCorners",
                                value: function(t) {
                                    var e = .5;
                                    this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new X(this._maxx, this._maxy), this._corner[1] = new X(this._minx, this._maxy), this._corner[2] = new X(this._minx, this._miny), this._corner[3] = new X(this._maxx, this._miny);
                                }
                            },
                            {
                                key: "intersects",
                                value: function(t, e) {
                                    return 1 === this._scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
                                }
                            },
                            {
                                key: "scale",
                                value: function(t) {
                                    return Math.round(t * this._scaleFactor);
                                }
                            },
                            {
                                key: "getCoordinate",
                                value: function() {
                                    return this._originalPt;
                                }
                            },
                            {
                                key: "copyScaled",
                                value: function(t, e) {
                                    e.x = this.scale(t.x), e.y = this.scale(t.y);
                                }
                            },
                            {
                                key: "getSafeEnvelope",
                                value: function() {
                                    if (null === this._safeEnv) {
                                        var e = t.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
                                        this._safeEnv = new U(this._originalPt.x - e, this._originalPt.x + e, this._originalPt.y - e, this._originalPt.y + e);
                                    }
                                    return this._safeEnv;
                                }
                            },
                            {
                                key: "intersectsPixelClosure",
                                value: function(t, e) {
                                    return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
                                }
                            },
                            {
                                key: "intersectsToleranceSquare",
                                value: function(t, e) {
                                    var n = !1, i = !1;
                                    return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !i) || !!t.equals(this._pt) || !!e.equals(this._pt))));
                                }
                            },
                            {
                                key: "addSnappedNode",
                                value: function(t, e) {
                                    var n = t.getCoordinate(e), i = t.getCoordinate(e + 1);
                                    return !!this.intersects(n, i) && (t.addIntersection(this.getCoordinate(), e), !0);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0) throw new m("Scale factor must be non-zero");
                                    1 !== e && (this._pt = new X(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new X, this._p1Scaled = new X), this.initCorners(this._pt);
                                }
                            }
                        ]);
                    }();
                    ui.SAFE_ENV_EXPANSION_FACTOR = .75;
                    var li = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "select",
                                value: function() {
                                    if (1 === arguments.length) ;
                                    else if (2 === arguments.length) {
                                        var t = arguments[1];
                                        arguments[0].getLineSegment(t, this.selectedSegment), this.select(this.selectedSegment);
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this.selectedSegment = new In;
                                }
                            }
                        ]);
                    }(), hi = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "snap",
                                value: function() {
                                    if (1 === arguments.length) {
                                        var t = arguments[0];
                                        return this.snap(t, null, -1);
                                    }
                                    if (3 === arguments.length) {
                                        var e = arguments[0], i = arguments[1], r = arguments[2], a = e.getSafeEnvelope(), o = new ci(e, i, r);
                                        return this._index.query(a, new (function() {
                                            return s(function t() {
                                                n(this, t);
                                            }, [
                                                {
                                                    key: "interfaces_",
                                                    get: function() {
                                                        return [
                                                            ln
                                                        ];
                                                    }
                                                },
                                                {
                                                    key: "visitItem",
                                                    value: function(t) {
                                                        t.select(a, o);
                                                    }
                                                }
                                            ]);
                                        }())), o.isNodeAdded();
                                    }
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._index = null;
                                    var t = arguments[0];
                                    this._index = t;
                                }
                            }
                        ]);
                    }(), ci = function(t) {
                        function i() {
                            var t;
                            return n(this, i), t = e(this, i), i.constructor_.apply(t, arguments), t;
                        }
                        return l(i, t), s(i, [
                            {
                                key: "isNodeAdded",
                                value: function() {
                                    return this._isNodeAdded;
                                }
                            },
                            {
                                key: "select",
                                value: function() {
                                    if (!(2 === arguments.length && Number.isInteger(arguments[1]) && arguments[0] instanceof Nn)) return f(i, "select", this, 1).apply(this, arguments);
                                    var t = arguments[1], e = arguments[0].getContext();
                                    if (this._parentEdge === e && (t === this._hotPixelVertexIndex || t + 1 === this._hotPixelVertexIndex)) return null;
                                    this._isNodeAdded |= this._hotPixel.addSnappedNode(e, t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
                                    var t = arguments[0], e = arguments[1], n = arguments[2];
                                    this._hotPixel = t, this._parentEdge = e, this._hotPixelVertexIndex = n;
                                }
                            }
                        ]);
                    }(li);
                    hi.HotPixelSnapAction = ci;
                    var fi = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "processIntersections",
                                value: function(t, e, n, i) {
                                    if (t === n && e === i) return null;
                                    var r = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], o = n.getCoordinates()[i + 1];
                                    if (this._li.computeIntersection(r, s, a, o), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
                                        for(var u = 0; u < this._li.getIntersectionNum(); u++)this._interiorIntersections.add(this._li.getIntersection(u));
                                        t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1);
                                    }
                                }
                            },
                            {
                                key: "isDone",
                                value: function() {
                                    return !1;
                                }
                            },
                            {
                                key: "getInteriorIntersections",
                                value: function() {
                                    return this._interiorIntersections;
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Wn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._li = null, this._interiorIntersections = null;
                                    var t = arguments[0];
                                    this._li = t, this._interiorIntersections = new yt;
                                }
                            }
                        ]);
                    }(), gi = function() {
                        return s(function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }, [
                            {
                                key: "checkCorrectness",
                                value: function(t) {
                                    var e = xn.getNodedSubstrings(t), n = new oi(e);
                                    try {
                                        n.checkValid();
                                    } catch (t) {
                                        if (!(t instanceof p)) throw t;
                                        t.printStackTrace();
                                    }
                                }
                            },
                            {
                                key: "getNodedSubstrings",
                                value: function() {
                                    return xn.getNodedSubstrings(this._nodedSegStrings);
                                }
                            },
                            {
                                key: "snapRound",
                                value: function(t, e) {
                                    var n = this.findInteriorIntersections(t, e);
                                    this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
                                }
                            },
                            {
                                key: "findInteriorIntersections",
                                value: function(t, e) {
                                    var n = new fi(e);
                                    return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
                                }
                            },
                            {
                                key: "computeVertexSnaps",
                                value: function() {
                                    if (rt(arguments[0], Z)) for(var t = arguments[0].iterator(); t.hasNext();){
                                        var e = t.next();
                                        this.computeVertexSnaps(e);
                                    }
                                    else if (arguments[0] instanceof xn) for(var n = arguments[0], i = n.getCoordinates(), r = 0; r < i.length; r++){
                                        var s = new ui(i[r], this._scaleFactor, this._li);
                                        this._pointSnapper.snap(s, n, r) && n.addIntersection(i[r], r);
                                    }
                                }
                            },
                            {
                                key: "computeNodes",
                                value: function(t) {
                                    this._nodedSegStrings = t, this._noder = new Cn, this._pointSnapper = new hi(this._noder.getIndex()), this.snapRound(t, this._li);
                                }
                            },
                            {
                                key: "computeIntersectionSnaps",
                                value: function(t) {
                                    for(var e = t.iterator(); e.hasNext();){
                                        var n = e.next(), i = new ui(n, this._scaleFactor, this._li);
                                        this._pointSnapper.snap(i);
                                    }
                                }
                            },
                            {
                                key: "interfaces_",
                                get: function() {
                                    return [
                                        Sn
                                    ];
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
                                    var t = arguments[0];
                                    this._pm = t, this._li = new we, this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
                                }
                            }
                        ]);
                    }(), vi = function() {
                        function t() {
                            n(this, t), t.constructor_.apply(this, arguments);
                        }
                        return s(t, [
                            {
                                key: "bufferFixedPrecision",
                                value: function(t) {
                                    var e = new ai(new gi(new ie(1)), t.getScale()), n = new si(this._bufParams);
                                    n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
                                }
                            },
                            {
                                key: "bufferReducedPrecision",
                                value: function() {
                                    if (0 === arguments.length) {
                                        for(var e = t.MAX_PRECISION_DIGITS; e >= 0; e--){
                                            try {
                                                this.bufferReducedPrecision(e);
                                            } catch (t) {
                                                if (!(t instanceof gt)) throw t;
                                                this._saveException = t;
                                            }
                                            if (null !== this._resultGeometry) return null;
                                        }
                                        throw this._saveException;
                                    }
                                    if (1 === arguments.length) {
                                        var n = arguments[0], i = t.precisionScaleFactor(this._argGeom, this._distance, n), r = new ie(i);
                                        this.bufferFixedPrecision(r);
                                    }
                                }
                            },
                            {
                                key: "computeGeometry",
                                value: function() {
                                    if (this.bufferOriginalPrecision(), null !== this._resultGeometry) return null;
                                    var t = this._argGeom.getFactory().getPrecisionModel();
                                    t.getType() === ie.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
                                }
                            },
                            {
                                key: "setQuadrantSegments",
                                value: function(t) {
                                    this._bufParams.setQuadrantSegments(t);
                                }
                            },
                            {
                                key: "bufferOriginalPrecision",
                                value: function() {
                                    try {
                                        var t = new si(this._bufParams);
                                        this._resultGeometry = t.buffer(this._argGeom, this._distance);
                                    } catch (t) {
                                        if (!(t instanceof D)) throw t;
                                        this._saveException = t;
                                    }
                                }
                            },
                            {
                                key: "getResultGeometry",
                                value: function(t) {
                                    return this._distance = t, this.computeGeometry(), this._resultGeometry;
                                }
                            },
                            {
                                key: "setEndCapStyle",
                                value: function(t) {
                                    this._bufParams.setEndCapStyle(t);
                                }
                            }
                        ], [
                            {
                                key: "constructor_",
                                value: function() {
                                    if (this._argGeom = null, this._distance = null, this._bufParams = new _, this._resultGeometry = null, this._saveException = null, 1 === arguments.length) {
                                        var t = arguments[0];
                                        this._argGeom = t;
                                    } else if (2 === arguments.length) {
                                        var e = arguments[0], n = arguments[1];
                                        this._argGeom = e, this._bufParams = n;
                                    }
                                }
                            },
                            {
                                key: "bufferOp",
                                value: function() {
                                    if (2 === arguments.length) {
                                        var e = arguments[1];
                                        return new t(arguments[0]).getResultGeometry(e);
                                    }
                                    if (3 === arguments.length) {
                                        if (Number.isInteger(arguments[2]) && arguments[0] instanceof V && "number" == typeof arguments[1]) {
                                            var n = arguments[1], i = arguments[2], r = new t(arguments[0]);
                                            return r.setQuadrantSegments(i), r.getResultGeometry(n);
                                        }
                                        if (arguments[2] instanceof _ && arguments[0] instanceof V && "number" == typeof arguments[1]) {
                                            var s = arguments[1];
                                            return new t(arguments[0], arguments[2]).getResultGeometry(s);
                                        }
                                    } else if (4 === arguments.length) {
                                        var a = arguments[1], o = arguments[2], u = arguments[3], l = new t(arguments[0]);
                                        return l.setQuadrantSegments(o), l.setEndCapStyle(u), l.getResultGeometry(a);
                                    }
                                }
                            },
                            {
                                key: "precisionScaleFactor",
                                value: function(t, e, n) {
                                    var i = t.getEnvelopeInternal(), r = kt.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (e > 0 ? e : 0), s = n - Math.trunc(Math.log(r) / Math.log(10) + 1);
                                    return Math.pow(10, s);
                                }
                            }
                        ]);
                    }();
                    vi.CAP_ROUND = _.CAP_ROUND, vi.CAP_BUTT = _.CAP_FLAT, vi.CAP_FLAT = _.CAP_FLAT, vi.CAP_SQUARE = _.CAP_SQUARE, vi.MAX_PRECISION_DIGITS = 12;
                    var yi = [
                        "Point",
                        "MultiPoint",
                        "LineString",
                        "MultiLineString",
                        "Polygon",
                        "MultiPolygon"
                    ], di = function() {
                        return s(function t(e) {
                            n(this, t), this.geometryFactory = e || new ae;
                        }, [
                            {
                                key: "read",
                                value: function(t) {
                                    var e, n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
                                    if (!_i[n]) throw new Error("Unknown GeoJSON type: " + e.type);
                                    return -1 !== yi.indexOf(n) ? _i[n].call(this, e.coordinates) : "GeometryCollection" === n ? _i[n].call(this, e.geometries) : _i[n].call(this, e);
                                }
                            },
                            {
                                key: "write",
                                value: function(t) {
                                    var e = t.getGeometryType();
                                    if (!pi[e]) throw new Error("Geometry is not supported");
                                    return pi[e].call(this, t);
                                }
                            }
                        ]);
                    }(), _i = {
                        Feature: function(t) {
                            var e = {};
                            for(var n in t)e[n] = t[n];
                            if (t.geometry) {
                                var i = t.geometry.type;
                                if (!_i[i]) throw new Error("Unknown GeoJSON type: " + t.type);
                                e.geometry = this.read(t.geometry);
                            }
                            return t.bbox && (e.bbox = _i.bbox.call(this, t.bbox)), e;
                        },
                        FeatureCollection: function(t) {
                            var e = {};
                            if (t.features) {
                                e.features = [];
                                for(var n = 0; n < t.features.length; ++n)e.features.push(this.read(t.features[n]));
                            }
                            return t.bbox && (e.bbox = this.parse.bbox.call(this, t.bbox)), e;
                        },
                        coordinates: function(t) {
                            for(var e = [], n = 0; n < t.length; ++n){
                                var r = t[n];
                                e.push(i(X, g(r)));
                            }
                            return e;
                        },
                        bbox: function(t) {
                            return this.geometryFactory.createLinearRing([
                                new X(t[0], t[1]),
                                new X(t[2], t[1]),
                                new X(t[2], t[3]),
                                new X(t[0], t[3]),
                                new X(t[0], t[1])
                            ]);
                        },
                        Point: function(t) {
                            var e = i(X, g(t));
                            return this.geometryFactory.createPoint(e);
                        },
                        MultiPoint: function(t) {
                            for(var e = [], n = 0; n < t.length; ++n)e.push(_i.Point.call(this, t[n]));
                            return this.geometryFactory.createMultiPoint(e);
                        },
                        LineString: function(t) {
                            var e = _i.coordinates.call(this, t);
                            return this.geometryFactory.createLineString(e);
                        },
                        MultiLineString: function(t) {
                            for(var e = [], n = 0; n < t.length; ++n)e.push(_i.LineString.call(this, t[n]));
                            return this.geometryFactory.createMultiLineString(e);
                        },
                        Polygon: function(t) {
                            for(var e = _i.coordinates.call(this, t[0]), n = this.geometryFactory.createLinearRing(e), i = [], r = 1; r < t.length; ++r){
                                var s = t[r], a = _i.coordinates.call(this, s), o = this.geometryFactory.createLinearRing(a);
                                i.push(o);
                            }
                            return this.geometryFactory.createPolygon(n, i);
                        },
                        MultiPolygon: function(t) {
                            for(var e = [], n = 0; n < t.length; ++n){
                                var i = t[n];
                                e.push(_i.Polygon.call(this, i));
                            }
                            return this.geometryFactory.createMultiPolygon(e);
                        },
                        GeometryCollection: function(t) {
                            for(var e = [], n = 0; n < t.length; ++n){
                                var i = t[n];
                                e.push(this.read(i));
                            }
                            return this.geometryFactory.createGeometryCollection(e);
                        }
                    }, pi = {
                        coordinate: function(t) {
                            var e = [
                                t.x,
                                t.y
                            ];
                            return t.z && e.push(t.z), t.m && e.push(t.m), e;
                        },
                        Point: function(t) {
                            return {
                                type: "Point",
                                coordinates: pi.coordinate.call(this, t.getCoordinate())
                            };
                        },
                        MultiPoint: function(t) {
                            for(var e = [], n = 0; n < t._geometries.length; ++n){
                                var i = t._geometries[n], r = pi.Point.call(this, i);
                                e.push(r.coordinates);
                            }
                            return {
                                type: "MultiPoint",
                                coordinates: e
                            };
                        },
                        LineString: function(t) {
                            for(var e = [], n = t.getCoordinates(), i = 0; i < n.length; ++i){
                                var r = n[i];
                                e.push(pi.coordinate.call(this, r));
                            }
                            return {
                                type: "LineString",
                                coordinates: e
                            };
                        },
                        MultiLineString: function(t) {
                            for(var e = [], n = 0; n < t._geometries.length; ++n){
                                var i = t._geometries[n], r = pi.LineString.call(this, i);
                                e.push(r.coordinates);
                            }
                            return {
                                type: "MultiLineString",
                                coordinates: e
                            };
                        },
                        Polygon: function(t) {
                            var e = [], n = pi.LineString.call(this, t._shell);
                            e.push(n.coordinates);
                            for(var i = 0; i < t._holes.length; ++i){
                                var r = t._holes[i], s = pi.LineString.call(this, r);
                                e.push(s.coordinates);
                            }
                            return {
                                type: "Polygon",
                                coordinates: e
                            };
                        },
                        MultiPolygon: function(t) {
                            for(var e = [], n = 0; n < t._geometries.length; ++n){
                                var i = t._geometries[n], r = pi.Polygon.call(this, i);
                                e.push(r.coordinates);
                            }
                            return {
                                type: "MultiPolygon",
                                coordinates: e
                            };
                        },
                        GeometryCollection: function(t) {
                            for(var e = [], n = 0; n < t._geometries.length; ++n){
                                var i = t._geometries[n], r = i.getGeometryType();
                                e.push(pi[r].call(this, i));
                            }
                            return {
                                type: "GeometryCollection",
                                geometries: e
                            };
                        }
                    };
                    return {
                        BufferOp: vi,
                        GeoJSONReader: function() {
                            return s(function t(e) {
                                n(this, t), this.parser = new di(e || new ae);
                            }, [
                                {
                                    key: "read",
                                    value: function(t) {
                                        return this.parser.read(t);
                                    }
                                }
                            ]);
                        }(),
                        GeoJSONWriter: function() {
                            return s(function t() {
                                n(this, t), this.parser = new di(this.geometryFactory);
                            }, [
                                {
                                    key: "write",
                                    value: function(t) {
                                        return this.parser.write(t);
                                    }
                                }
                            ]);
                        }()
                    };
                });
            },
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
                random: ()=>random,
                default: ()=>random_points,
                RandomGenerator: ()=>RandomGenerator
            });
            var earthRadius = 63710088e-1;
            var factors = {
                centimeters: 100 * earthRadius,
                centimetres: 100 * earthRadius,
                degrees: 360 / (2 * Math.PI),
                feet: 3.28084 * earthRadius,
                inches: 39.37 * earthRadius,
                kilometers: earthRadius / 1e3,
                kilometres: earthRadius / 1e3,
                meters: earthRadius,
                metres: earthRadius,
                miles: earthRadius / 1609.344,
                millimeters: 1e3 * earthRadius,
                millimetres: 1e3 * earthRadius,
                nauticalmiles: earthRadius / 1852,
                radians: 1,
                yards: 1.0936 * earthRadius
            };
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
            function radiansToLength(radians, units = "kilometers") {
                const factor = factors[units];
                if (!factor) throw new Error(units + " units is invalid");
                return radians * factor;
            }
            function lengthToRadians(distance, units = "kilometers") {
                const factor = factors[units];
                if (!factor) throw new Error(units + " units is invalid");
                return distance / factor;
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
            const util_epsilon = 1.1102230246251565e-16;
            const util_splitter = 134217729;
            const util_resulterrbound = (3 + 8 * util_epsilon) * util_epsilon;
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
            const ccwerrboundA = (3 + 16 * util_epsilon) * util_epsilon;
            const ccwerrboundB = (2 + 12 * util_epsilon) * util_epsilon;
            const ccwerrboundC = (9 + 64 * util_epsilon) * util_epsilon * util_epsilon;
            const orient2d_B = vec(4);
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
                orient2d_B[0] = s0 - (_i + bvirt) + (bvirt - t0);
                _j = s1 + _i;
                bvirt = _j - s1;
                _0 = s1 - (_j - bvirt) + (_i - bvirt);
                _i = _0 - t1;
                bvirt = _0 - _i;
                orient2d_B[1] = _0 - (_i + bvirt) + (bvirt - t1);
                u3 = _j + _i;
                bvirt = u3 - _j;
                orient2d_B[2] = _j - (u3 - bvirt) + (_i - bvirt);
                orient2d_B[3] = u3;
                let det = util_estimate(4, orient2d_B);
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
                const C1len = util_sum(4, orient2d_B, 4, orient2d_u, C1);
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
                    var isect = esm_intersect(start0, end0, start1, end1);
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
            function esm_intersect(start0, end0, start1, end1) {
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
            function esm_center(geojson, options = {}) {
                const ext = esm_bbox(geojson);
                const x = (ext[0] + ext[2]) / 2;
                const y = (ext[1] + ext[3]) / 2;
                return esm_point([
                    x,
                    y
                ], options.properties, options);
            }
            var jsts_min = __webpack_require__("./node_modules/.pnpm/@turf+jsts@2.7.2/node_modules/@turf/jsts/dist/jsts.min.js");
            function src_adder() {
                return new Adder;
            }
            function Adder() {
                this.reset();
            }
            Adder.prototype = {
                constructor: Adder,
                reset: function() {
                    this.s = this.t = 0;
                },
                add: function(y) {
                    add(temp, y, this.t);
                    add(this, temp.s, this.s);
                    if (this.s) this.t += temp.t;
                    else this.s = temp.t;
                },
                valueOf: function() {
                    return this.s;
                }
            };
            var temp = new Adder;
            function add(adder, a, b) {
                var x = adder.s = a + b, bv = x - a, av = x - bv;
                adder.t = a - av + (b - bv);
            }
            src_adder();
            src_adder();
            src_adder();
            var math_epsilon = 1e-6;
            var math_pi = Math.PI;
            var math_halfPi = math_pi / 2;
            var math_quarterPi = math_pi / 4;
            var math_tau = 2 * math_pi;
            var math_degrees = 180 / math_pi;
            var math_radians = math_pi / 180;
            var math_abs = Math.abs;
            var math_atan = Math.atan;
            var math_atan2 = Math.atan2;
            var math_cos = Math.cos;
            var exp = Math.exp;
            var math_log = Math.log;
            var math_sin = Math.sin;
            var math_sqrt = Math.sqrt;
            var math_tan = Math.tan;
            function acos(x) {
                return x > 1 ? 0 : x < -1 ? math_pi : Math.acos(x);
            }
            function math_asin(x) {
                return x > 1 ? math_halfPi : x < -1 ? -math_halfPi : Math.asin(x);
            }
            function cartesian_spherical(cartesian) {
                return [
                    math_atan2(cartesian[1], cartesian[0]),
                    math_asin(cartesian[2])
                ];
            }
            function cartesian_cartesian(spherical) {
                var lambda = spherical[0], phi = spherical[1], cosPhi = math_cos(phi);
                return [
                    cosPhi * math_cos(lambda),
                    cosPhi * math_sin(lambda),
                    math_sin(phi)
                ];
            }
            function cartesianDot(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
            }
            function cartesian_cartesianCross(a, b) {
                return [
                    a[1] * b[2] - a[2] * b[1],
                    a[2] * b[0] - a[0] * b[2],
                    a[0] * b[1] - a[1] * b[0]
                ];
            }
            function cartesianAddInPlace(a, b) {
                a[0] += b[0], a[1] += b[1], a[2] += b[2];
            }
            function cartesianScale(vector, k) {
                return [
                    vector[0] * k,
                    vector[1] * k,
                    vector[2] * k
                ];
            }
            function cartesian_cartesianNormalizeInPlace(d) {
                var l = math_sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
                d[0] /= l, d[1] /= l, d[2] /= l;
            }
            function src_compose(a, b) {
                function compose(x, y) {
                    return x = a(x, y), b(x[0], x[1]);
                }
                if (a.invert && b.invert) compose.invert = function(x, y) {
                    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
                };
                return compose;
            }
            function rotationIdentity(lambda, phi) {
                return [
                    lambda > math_pi ? lambda - math_tau : lambda < -math_pi ? lambda + math_tau : lambda,
                    phi
                ];
            }
            rotationIdentity.invert = rotationIdentity;
            function rotation_rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
                return (deltaLambda %= math_tau) ? deltaPhi || deltaGamma ? src_compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
            }
            function forwardRotationLambda(deltaLambda) {
                return function(lambda, phi) {
                    return lambda += deltaLambda, [
                        lambda > math_pi ? lambda - math_tau : lambda < -math_pi ? lambda + math_tau : lambda,
                        phi
                    ];
                };
            }
            function rotationLambda(deltaLambda) {
                var rotation = forwardRotationLambda(deltaLambda);
                rotation.invert = forwardRotationLambda(-deltaLambda);
                return rotation;
            }
            function rotationPhiGamma(deltaPhi, deltaGamma) {
                var cosDeltaPhi = math_cos(deltaPhi), sinDeltaPhi = math_sin(deltaPhi), cosDeltaGamma = math_cos(deltaGamma), sinDeltaGamma = math_sin(deltaGamma);
                function rotation(lambda, phi) {
                    var cosPhi = math_cos(phi), x = math_cos(lambda) * cosPhi, y = math_sin(lambda) * cosPhi, z = math_sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
                    return [
                        math_atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
                        math_asin(k * cosDeltaGamma + y * sinDeltaGamma)
                    ];
                }
                rotation.invert = function(lambda, phi) {
                    var cosPhi = math_cos(phi), x = math_cos(lambda) * cosPhi, y = math_sin(lambda) * cosPhi, z = math_sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
                    return [
                        math_atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
                        math_asin(k * cosDeltaPhi - x * sinDeltaPhi)
                    ];
                };
                return rotation;
            }
            function circleStream(stream, radius, delta, direction, t0, t1) {
                if (!delta) return;
                var cosRadius = math_cos(radius), sinRadius = math_sin(radius), step = direction * delta;
                if (null == t0) {
                    t0 = radius + direction * math_tau;
                    t1 = radius - step / 2;
                } else {
                    t0 = circleRadius(cosRadius, t0);
                    t1 = circleRadius(cosRadius, t1);
                    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * math_tau;
                }
                for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
                    point = cartesian_spherical([
                        cosRadius,
                        -sinRadius * math_cos(t),
                        -sinRadius * math_sin(t)
                    ]);
                    stream.point(point[0], point[1]);
                }
            }
            function circleRadius(cosRadius, point) {
                point = cartesian_cartesian(point), point[0] -= cosRadius;
                cartesian_cartesianNormalizeInPlace(point);
                var radius = acos(-point[1]);
                return ((-point[2] < 0 ? -radius : radius) + math_tau - math_epsilon) % math_tau;
            }
            function noop_noop() {}
            function clip_buffer() {
                var lines = [], line;
                return {
                    point: function(x, y) {
                        line.push([
                            x,
                            y
                        ]);
                    },
                    lineStart: function() {
                        lines.push(line = []);
                    },
                    lineEnd: noop_noop,
                    rejoin: function() {
                        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
                    },
                    result: function() {
                        var result = lines;
                        lines = [];
                        line = null;
                        return result;
                    }
                };
            }
            function clip_line(a, b, x0, y0, x1, y1) {
                var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
                r = x0 - ax;
                if (!dx && r > 0) return;
                r /= dx;
                if (dx < 0) {
                    if (r < t0) return;
                    if (r < t1) t1 = r;
                } else if (dx > 0) {
                    if (r > t1) return;
                    if (r > t0) t0 = r;
                }
                r = x1 - ax;
                if (!dx && r < 0) return;
                r /= dx;
                if (dx < 0) {
                    if (r > t1) return;
                    if (r > t0) t0 = r;
                } else if (dx > 0) {
                    if (r < t0) return;
                    if (r < t1) t1 = r;
                }
                r = y0 - ay;
                if (!dy && r > 0) return;
                r /= dy;
                if (dy < 0) {
                    if (r < t0) return;
                    if (r < t1) t1 = r;
                } else if (dy > 0) {
                    if (r > t1) return;
                    if (r > t0) t0 = r;
                }
                r = y1 - ay;
                if (!dy && r < 0) return;
                r /= dy;
                if (dy < 0) {
                    if (r > t1) return;
                    if (r > t0) t0 = r;
                } else if (dy > 0) {
                    if (r < t0) return;
                    if (r < t1) t1 = r;
                }
                if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
                if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
                return true;
            }
            function pointEqual(a, b) {
                return math_abs(a[0] - b[0]) < math_epsilon && math_abs(a[1] - b[1]) < math_epsilon;
            }
            function Intersection(point, points, other, entry) {
                this.x = point;
                this.z = points;
                this.o = other;
                this.e = entry;
                this.v = false;
                this.n = this.p = null;
            }
            function clip_polygon(segments, compareIntersection, startInside, interpolate, stream) {
                var subject = [], clip = [], i, n;
                segments.forEach(function(segment) {
                    if ((n = segment.length - 1) <= 0) return;
                    var n, p0 = segment[0], p1 = segment[n], x;
                    if (pointEqual(p0, p1)) {
                        stream.lineStart();
                        for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                        stream.lineEnd();
                        return;
                    }
                    subject.push(x = new Intersection(p0, segment, null, true));
                    clip.push(x.o = new Intersection(p0, null, x, false));
                    subject.push(x = new Intersection(p1, segment, null, false));
                    clip.push(x.o = new Intersection(p1, null, x, true));
                });
                if (!subject.length) return;
                clip.sort(compareIntersection);
                polygon_link(subject);
                polygon_link(clip);
                for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
                var start = subject[0], points, point;
                while(1){
                    var current = start, isSubject = true;
                    while(current.v)if ((current = current.n) === start) return;
                    points = current.z;
                    stream.lineStart();
                    do {
                        current.v = current.o.v = true;
                        if (current.e) {
                            if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                            else interpolate(current.x, current.n.x, 1, stream);
                            current = current.n;
                        } else {
                            if (isSubject) {
                                points = current.p.z;
                                for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                            } else interpolate(current.x, current.p.x, -1, stream);
                            current = current.p;
                        }
                        current = current.o;
                        points = current.z;
                        isSubject = !isSubject;
                    }while (!current.v);
                    stream.lineEnd();
                }
            }
            function polygon_link(array) {
                if (!(n = array.length)) return;
                var n, i = 0, a = array[0], b;
                while(++i < n){
                    a.n = b = array[i];
                    b.p = a;
                    a = b;
                }
                a.n = b = array[0];
                b.p = a;
            }
            function src_ascending(a, b) {
                return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
            }
            function bisector(compare) {
                if (1 === compare.length) compare = ascendingComparator(compare);
                return {
                    left: function(a, x, lo, hi) {
                        if (null == lo) lo = 0;
                        if (null == hi) hi = a.length;
                        while(lo < hi){
                            var mid = lo + hi >>> 1;
                            if (compare(a[mid], x) < 0) lo = mid + 1;
                            else hi = mid;
                        }
                        return lo;
                    },
                    right: function(a, x, lo, hi) {
                        if (null == lo) lo = 0;
                        if (null == hi) hi = a.length;
                        while(lo < hi){
                            var mid = lo + hi >>> 1;
                            if (compare(a[mid], x) > 0) hi = mid;
                            else lo = mid + 1;
                        }
                        return lo;
                    }
                };
            }
            function ascendingComparator(f) {
                return function(d, x) {
                    return src_ascending(f(d), x);
                };
            }
            var ascendingBisect = bisector(src_ascending);
            ascendingBisect.right;
            ascendingBisect.left;
            var array_array = Array.prototype;
            array_array.slice;
            array_array.map;
            function merge(arrays) {
                var n = arrays.length, m, i = -1, j = 0, merged, array;
                while(++i < n)j += arrays[i].length;
                merged = new Array(j);
                while(--n >= 0){
                    array = arrays[n];
                    m = array.length;
                    while(--m >= 0)merged[--j] = array[m];
                }
                return merged;
            }
            var clipMax = 1e9, clipMin = -clipMax;
            function extent_clipExtent(x0, y0, x1, y1) {
                function visible(x, y) {
                    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
                }
                function interpolate(from, to, direction, stream) {
                    var a = 0, a1 = 0;
                    if (null == from || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(0 === a || 3 === a ? x0 : x1, a > 1 ? y1 : y0);
                    while ((a = (a + direction + 4) % 4) !== a1);
                    else stream.point(to[0], to[1]);
                }
                function corner(p, direction) {
                    return math_abs(p[0] - x0) < math_epsilon ? direction > 0 ? 0 : 3 : math_abs(p[0] - x1) < math_epsilon ? direction > 0 ? 2 : 1 : math_abs(p[1] - y0) < math_epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
                }
                function compareIntersection(a, b) {
                    return comparePoint(a.x, b.x);
                }
                function comparePoint(a, b) {
                    var ca = corner(a, 1), cb = corner(b, 1);
                    return ca !== cb ? ca - cb : 0 === ca ? b[1] - a[1] : 1 === ca ? a[0] - b[0] : 2 === ca ? a[1] - b[1] : b[0] - a[0];
                }
                return function(stream) {
                    var activeStream = stream, bufferStream = clip_buffer(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
                    var clipStream = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: polygonStart,
                        polygonEnd: polygonEnd
                    };
                    function point(x, y) {
                        if (visible(x, y)) activeStream.point(x, y);
                    }
                    function polygonInside() {
                        var winding = 0;
                        for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                            if (a1 <= y1) {
                                if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                            } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
                        }
                        return winding;
                    }
                    function polygonStart() {
                        activeStream = bufferStream, segments = [], polygon = [], clean = true;
                    }
                    function polygonEnd() {
                        var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = merge(segments)).length;
                        if (cleanInside || visible) {
                            stream.polygonStart();
                            if (cleanInside) {
                                stream.lineStart();
                                interpolate(null, null, 1, stream);
                                stream.lineEnd();
                            }
                            if (visible) clip_polygon(segments, compareIntersection, startInside, interpolate, stream);
                            stream.polygonEnd();
                        }
                        activeStream = stream, segments = polygon = ring = null;
                    }
                    function lineStart() {
                        clipStream.point = linePoint;
                        if (polygon) polygon.push(ring = []);
                        first = true;
                        v_ = false;
                        x_ = y_ = NaN;
                    }
                    function lineEnd() {
                        if (segments) {
                            linePoint(x__, y__);
                            if (v__ && v_) bufferStream.rejoin();
                            segments.push(bufferStream.result());
                        }
                        clipStream.point = point;
                        if (v_) activeStream.lineEnd();
                    }
                    function linePoint(x, y) {
                        var v = visible(x, y);
                        if (polygon) ring.push([
                            x,
                            y
                        ]);
                        if (first) {
                            x__ = x, y__ = y, v__ = v;
                            first = false;
                            if (v) {
                                activeStream.lineStart();
                                activeStream.point(x, y);
                            }
                        } else if (v && v_) activeStream.point(x, y);
                        else {
                            var a = [
                                x_ = Math.max(clipMin, Math.min(clipMax, x_)),
                                y_ = Math.max(clipMin, Math.min(clipMax, y_))
                            ], b = [
                                x = Math.max(clipMin, Math.min(clipMax, x)),
                                y = Math.max(clipMin, Math.min(clipMax, y))
                            ];
                            if (clip_line(a, b, x0, y0, x1, y1)) {
                                if (!v_) {
                                    activeStream.lineStart();
                                    activeStream.point(a[0], a[1]);
                                }
                                activeStream.point(b[0], b[1]);
                                if (!v) activeStream.lineEnd();
                                clean = false;
                            } else if (v) {
                                activeStream.lineStart();
                                activeStream.point(x, y);
                                clean = false;
                            }
                        }
                        x_ = x, y_ = y, v_ = v;
                    }
                    return clipStream;
                };
            }
            var polygonContains_sum = src_adder();
            function src_polygonContains(polygon, point) {
                var lambda = point[0], phi = point[1], normal = [
                    math_sin(lambda),
                    -math_cos(lambda),
                    0
                ], angle = 0, winding = 0;
                polygonContains_sum.reset();
                for(var i = 0, n = polygon.length; i < n; ++i)if (m = (ring = polygon[i]).length) {
                    var ring, m, point0 = ring[m - 1], lambda0 = point0[0], phi0 = point0[1] / 2 + math_quarterPi, sinPhi0 = math_sin(phi0), cosPhi0 = math_cos(phi0);
                    for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
                        var point1 = ring[j], lambda1 = point1[0], phi1 = point1[1] / 2 + math_quarterPi, sinPhi1 = math_sin(phi1), cosPhi1 = math_cos(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > math_pi, k = sinPhi0 * sinPhi1;
                        polygonContains_sum.add(math_atan2(k * sign * math_sin(absDelta), cosPhi0 * cosPhi1 + k * math_cos(absDelta)));
                        angle += antimeridian ? delta + sign * math_tau : delta;
                        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                            var arc = cartesian_cartesianCross(cartesian_cartesian(point0), cartesian_cartesian(point1));
                            cartesian_cartesianNormalizeInPlace(arc);
                            var intersection = cartesian_cartesianCross(normal, arc);
                            cartesian_cartesianNormalizeInPlace(intersection);
                            var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * math_asin(intersection[2]);
                            if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
                        }
                    }
                }
                return (angle < -math_epsilon || angle < math_epsilon && polygonContains_sum < -math_epsilon) ^ 1 & winding;
            }
            src_adder();
            src_adder(), src_adder();
            function context_PathContext(context) {
                this._context = context;
            }
            context_PathContext.prototype = {
                _radius: 4.5,
                pointRadius: function(_) {
                    return this._radius = _, this;
                },
                polygonStart: function() {
                    this._line = 0;
                },
                polygonEnd: function() {
                    this._line = NaN;
                },
                lineStart: function() {
                    this._point = 0;
                },
                lineEnd: function() {
                    if (0 === this._line) this._context.closePath();
                    this._point = NaN;
                },
                point: function(x, y) {
                    switch(this._point){
                        case 0:
                            this._context.moveTo(x, y);
                            this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(x, y);
                            break;
                        default:
                            this._context.moveTo(x + this._radius, y);
                            this._context.arc(x, y, this._radius, 0, math_tau);
                            break;
                    }
                },
                result: noop_noop
            };
            src_adder();
            function string_PathString() {
                this._string = [];
            }
            string_PathString.prototype = {
                _radius: 4.5,
                _circle: string_circle(4.5),
                pointRadius: function(_) {
                    if ((_ *= 1) !== this._radius) this._radius = _, this._circle = null;
                    return this;
                },
                polygonStart: function() {
                    this._line = 0;
                },
                polygonEnd: function() {
                    this._line = NaN;
                },
                lineStart: function() {
                    this._point = 0;
                },
                lineEnd: function() {
                    if (0 === this._line) this._string.push("Z");
                    this._point = NaN;
                },
                point: function(x, y) {
                    switch(this._point){
                        case 0:
                            this._string.push("M", x, ",", y);
                            this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", x, ",", y);
                            break;
                        default:
                            if (null == this._circle) this._circle = string_circle(this._radius);
                            this._string.push("M", x, ",", y, this._circle);
                            break;
                    }
                },
                result: function() {
                    if (!this._string.length) return null;
                    var result = this._string.join("");
                    this._string = [];
                    return result;
                }
            };
            function string_circle(radius) {
                return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
            }
            function src_clip(pointVisible, clipLine, interpolate, start) {
                return function(rotate, sink) {
                    var line = clipLine(sink), rotatedStart = rotate.invert(start[0], start[1]), ringBuffer = clip_buffer(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
                    var clip = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            clip.point = pointRing;
                            clip.lineStart = ringStart;
                            clip.lineEnd = ringEnd;
                            segments = [];
                            polygon = [];
                        },
                        polygonEnd: function() {
                            clip.point = point;
                            clip.lineStart = lineStart;
                            clip.lineEnd = lineEnd;
                            segments = merge(segments);
                            var startInside = src_polygonContains(polygon, rotatedStart);
                            if (segments.length) {
                                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                                clip_polygon(segments, clip_compareIntersection, startInside, interpolate, sink);
                            } else if (startInside) {
                                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                                sink.lineStart();
                                interpolate(null, null, 1, sink);
                                sink.lineEnd();
                            }
                            if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                            segments = polygon = null;
                        },
                        sphere: function() {
                            sink.polygonStart();
                            sink.lineStart();
                            interpolate(null, null, 1, sink);
                            sink.lineEnd();
                            sink.polygonEnd();
                        }
                    };
                    function point(lambda, phi) {
                        var point = rotate(lambda, phi);
                        if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
                    }
                    function pointLine(lambda, phi) {
                        var point = rotate(lambda, phi);
                        line.point(point[0], point[1]);
                    }
                    function lineStart() {
                        clip.point = pointLine;
                        line.lineStart();
                    }
                    function lineEnd() {
                        clip.point = point;
                        line.lineEnd();
                    }
                    function pointRing(lambda, phi) {
                        ring.push([
                            lambda,
                            phi
                        ]);
                        var point = rotate(lambda, phi);
                        ringSink.point(point[0], point[1]);
                    }
                    function ringStart() {
                        ringSink.lineStart();
                        ring = [];
                    }
                    function ringEnd() {
                        pointRing(ring[0][0], ring[0][1]);
                        ringSink.lineEnd();
                        var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
                        ring.pop();
                        polygon.push(ring);
                        ring = null;
                        if (!n) return;
                        if (1 & clean) {
                            segment = ringSegments[0];
                            if ((m = segment.length - 1) > 0) {
                                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                                sink.lineStart();
                                for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                                sink.lineEnd();
                            }
                            return;
                        }
                        if (n > 1 && 2 & clean) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                        segments.push(ringSegments.filter(validSegment));
                    }
                    return clip;
                };
            }
            function validSegment(segment) {
                return segment.length > 1;
            }
            function clip_compareIntersection(a, b) {
                return ((a = a.x)[0] < 0 ? a[1] - math_halfPi - math_epsilon : math_halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - math_halfPi - math_epsilon : math_halfPi - b[1]);
            }
            const clip_antimeridian = src_clip(function() {
                return true;
            }, clipAntimeridianLine, clipAntimeridianInterpolate, [
                -math_pi,
                -math_halfPi
            ]);
            function clipAntimeridianLine(stream) {
                var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
                return {
                    lineStart: function() {
                        stream.lineStart();
                        clean = 1;
                    },
                    point: function(lambda1, phi1) {
                        var sign1 = lambda1 > 0 ? math_pi : -math_pi, delta = math_abs(lambda1 - lambda0);
                        if (math_abs(delta - math_pi) < math_epsilon) {
                            stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? math_halfPi : -math_halfPi);
                            stream.point(sign0, phi0);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(sign1, phi0);
                            stream.point(lambda1, phi0);
                            clean = 0;
                        } else if (sign0 !== sign1 && delta >= math_pi) {
                            if (math_abs(lambda0 - sign0) < math_epsilon) lambda0 -= sign0 * math_epsilon;
                            if (math_abs(lambda1 - sign1) < math_epsilon) lambda1 -= sign1 * math_epsilon;
                            phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                            stream.point(sign0, phi0);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(sign1, phi0);
                            clean = 0;
                        }
                        stream.point(lambda0 = lambda1, phi0 = phi1);
                        sign0 = sign1;
                    },
                    lineEnd: function() {
                        stream.lineEnd();
                        lambda0 = phi0 = NaN;
                    },
                    clean: function() {
                        return 2 - clean;
                    }
                };
            }
            function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
                var cosPhi0, cosPhi1, sinLambda0Lambda1 = math_sin(lambda0 - lambda1);
                return math_abs(sinLambda0Lambda1) > math_epsilon ? math_atan((math_sin(phi0) * (cosPhi1 = math_cos(phi1)) * math_sin(lambda1) - math_sin(phi1) * (cosPhi0 = math_cos(phi0)) * math_sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
            }
            function clipAntimeridianInterpolate(from, to, direction, stream) {
                var phi;
                if (null == from) {
                    phi = direction * math_halfPi;
                    stream.point(-math_pi, phi);
                    stream.point(0, phi);
                    stream.point(math_pi, phi);
                    stream.point(math_pi, 0);
                    stream.point(math_pi, -phi);
                    stream.point(0, -phi);
                    stream.point(-math_pi, -phi);
                    stream.point(-math_pi, 0);
                    stream.point(-math_pi, phi);
                } else if (math_abs(from[0] - to[0]) > math_epsilon) {
                    var lambda = from[0] < to[0] ? math_pi : -math_pi;
                    phi = direction * lambda / 2;
                    stream.point(-lambda, phi);
                    stream.point(0, phi);
                    stream.point(lambda, phi);
                } else stream.point(to[0], to[1]);
            }
            function clip_circle(radius, delta) {
                var cr = math_cos(radius), smallRadius = cr > 0, notHemisphere = math_abs(cr) > math_epsilon;
                function interpolate(from, to, direction, stream) {
                    circleStream(stream, radius, delta, direction, from, to);
                }
                function visible(lambda, phi) {
                    return math_cos(lambda) * math_cos(phi) > cr;
                }
                function clipLine(stream) {
                    var point0, c0, v0, v00, clean;
                    return {
                        lineStart: function() {
                            v00 = v0 = false;
                            clean = 1;
                        },
                        point: function(lambda, phi) {
                            var point1 = [
                                lambda,
                                phi
                            ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? math_pi : -math_pi), phi) : 0;
                            if (!point0 && (v00 = v0 = v)) stream.lineStart();
                            if (v !== v0) {
                                point2 = intersect(point0, point1);
                                if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
                                    point1[0] += math_epsilon;
                                    point1[1] += math_epsilon;
                                    v = visible(point1[0], point1[1]);
                                }
                            }
                            if (v !== v0) {
                                clean = 0;
                                if (v) {
                                    stream.lineStart();
                                    point2 = intersect(point1, point0);
                                    stream.point(point2[0], point2[1]);
                                } else {
                                    point2 = intersect(point0, point1);
                                    stream.point(point2[0], point2[1]);
                                    stream.lineEnd();
                                }
                                point0 = point2;
                            } else if (notHemisphere && point0 && smallRadius ^ v) {
                                var t;
                                if (!(c & c0) && (t = intersect(point1, point0, true))) {
                                    clean = 0;
                                    if (smallRadius) {
                                        stream.lineStart();
                                        stream.point(t[0][0], t[0][1]);
                                        stream.point(t[1][0], t[1][1]);
                                        stream.lineEnd();
                                    } else {
                                        stream.point(t[1][0], t[1][1]);
                                        stream.lineEnd();
                                        stream.lineStart();
                                        stream.point(t[0][0], t[0][1]);
                                    }
                                }
                            }
                            if (v && (!point0 || !pointEqual(point0, point1))) stream.point(point1[0], point1[1]);
                            point0 = point1, v0 = v, c0 = c;
                        },
                        lineEnd: function() {
                            if (v0) stream.lineEnd();
                            point0 = null;
                        },
                        clean: function() {
                            return clean | (v00 && v0) << 1;
                        }
                    };
                }
                function intersect(a, b, two) {
                    var pa = cartesian_cartesian(a), pb = cartesian_cartesian(b);
                    var n1 = [
                        1,
                        0,
                        0
                    ], n2 = cartesian_cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
                    if (!determinant) return !two && a;
                    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesian_cartesianCross(n1, n2), A = cartesianScale(n1, c1), B = cartesianScale(n2, c2);
                    cartesianAddInPlace(A, B);
                    var u = n1xn2, w = cartesianDot(A, u), uu = cartesianDot(u, u), t2 = w * w - uu * (cartesianDot(A, A) - 1);
                    if (t2 < 0) return;
                    var t = math_sqrt(t2), q = cartesianScale(u, (-w - t) / uu);
                    cartesianAddInPlace(q, A);
                    q = cartesian_spherical(q);
                    if (!two) return q;
                    var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
                    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
                    var delta = lambda1 - lambda0, polar = math_abs(delta - math_pi) < math_epsilon, meridian = polar || delta < math_epsilon;
                    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
                    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (math_abs(q[0] - lambda0) < math_epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > math_pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
                        var q1 = cartesianScale(u, (-w + t) / uu);
                        cartesianAddInPlace(q1, A);
                        return [
                            q,
                            cartesian_spherical(q1)
                        ];
                    }
                }
                function code(lambda, phi) {
                    var r = smallRadius ? radius : math_pi - radius, code = 0;
                    if (lambda < -r) code |= 1;
                    else if (lambda > r) code |= 2;
                    if (phi < -r) code |= 4;
                    else if (phi > r) code |= 8;
                    return code;
                }
                return src_clip(visible, clipLine, interpolate, smallRadius ? [
                    0,
                    -radius
                ] : [
                    -math_pi,
                    radius - math_pi
                ]);
            }
            function src_identity(x) {
                return x;
            }
            function transform_transformer(methods) {
                return function(stream) {
                    var s = new TransformStream;
                    for(var key in methods)s[key] = methods[key];
                    s.stream = stream;
                    return s;
                };
            }
            function TransformStream() {}
            TransformStream.prototype = {
                constructor: TransformStream,
                point: function(x, y) {
                    this.stream.point(x, y);
                },
                sphere: function() {
                    this.stream.sphere();
                },
                lineStart: function() {
                    this.stream.lineStart();
                },
                lineEnd: function() {
                    this.stream.lineEnd();
                },
                polygonStart: function() {
                    this.stream.polygonStart();
                },
                polygonEnd: function() {
                    this.stream.polygonEnd();
                }
            };
            function streamGeometry(geometry, stream) {
                if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
            }
            var streamObjectType = {
                Feature: function(object, stream) {
                    streamGeometry(object.geometry, stream);
                },
                FeatureCollection: function(object, stream) {
                    var features = object.features, i = -1, n = features.length;
                    while(++i < n)streamGeometry(features[i].geometry, stream);
                }
            };
            var streamGeometryType = {
                Sphere: function(object, stream) {
                    stream.sphere();
                },
                Point: function(object, stream) {
                    object = object.coordinates;
                    stream.point(object[0], object[1], object[2]);
                },
                MultiPoint: function(object, stream) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length;
                    while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
                },
                LineString: function(object, stream) {
                    streamLine(object.coordinates, stream, 0);
                },
                MultiLineString: function(object, stream) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length;
                    while(++i < n)streamLine(coordinates[i], stream, 0);
                },
                Polygon: function(object, stream) {
                    streamPolygon(object.coordinates, stream);
                },
                MultiPolygon: function(object, stream) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length;
                    while(++i < n)streamPolygon(coordinates[i], stream);
                },
                GeometryCollection: function(object, stream) {
                    var geometries = object.geometries, i = -1, n = geometries.length;
                    while(++i < n)streamGeometry(geometries[i], stream);
                }
            };
            function streamLine(coordinates, stream, closed) {
                var i = -1, n = coordinates.length - closed, coordinate;
                stream.lineStart();
                while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
                stream.lineEnd();
            }
            function streamPolygon(coordinates, stream) {
                var i = -1, n = coordinates.length;
                stream.polygonStart();
                while(++i < n)streamLine(coordinates[i], stream, 1);
                stream.polygonEnd();
            }
            function src_stream(object, stream) {
                if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
                else streamGeometry(object, stream);
            }
            var bounds_x0 = 1 / 0, bounds_y0 = bounds_x0, bounds_x1 = -bounds_x0, bounds_y1 = bounds_x1;
            var bounds_boundsStream = {
                point: bounds_boundsPoint,
                lineStart: noop_noop,
                lineEnd: noop_noop,
                polygonStart: noop_noop,
                polygonEnd: noop_noop,
                result: function() {
                    var bounds = [
                        [
                            bounds_x0,
                            bounds_y0
                        ],
                        [
                            bounds_x1,
                            bounds_y1
                        ]
                    ];
                    bounds_x1 = bounds_y1 = -(bounds_y0 = bounds_x0 = 1 / 0);
                    return bounds;
                }
            };
            function bounds_boundsPoint(x, y) {
                if (x < bounds_x0) bounds_x0 = x;
                if (x > bounds_x1) bounds_x1 = x;
                if (y < bounds_y0) bounds_y0 = y;
                if (y > bounds_y1) bounds_y1 = y;
            }
            const path_bounds = bounds_boundsStream;
            function fit_fitExtent(projection, extent, object) {
                var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], clip = projection.clipExtent && projection.clipExtent();
                projection.scale(150).translate([
                    0,
                    0
                ]);
                if (null != clip) projection.clipExtent(null);
                src_stream(object, projection.stream(path_bounds));
                var b = path_bounds.result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
                if (null != clip) projection.clipExtent(clip);
                return projection.scale(150 * k).translate([
                    x,
                    y
                ]);
            }
            function fit_fitSize(projection, size, object) {
                return fit_fitExtent(projection, [
                    [
                        0,
                        0
                    ],
                    size
                ], object);
            }
            var maxDepth = 16, cosMinDistance = math_cos(30 * math_radians);
            function projection_resample(project, delta2) {
                return +delta2 ? resample(project, delta2) : resampleNone(project);
            }
            function resampleNone(project) {
                return transform_transformer({
                    point: function(x, y) {
                        x = project(x, y);
                        this.stream.point(x[0], x[1]);
                    }
                });
            }
            function resample(project, delta2) {
                function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
                    var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
                    if (d2 > 4 * delta2 && depth--) {
                        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = math_sqrt(a * a + b * b + c * c), phi2 = math_asin(c /= m), lambda2 = math_abs(math_abs(c) - 1) < math_epsilon || math_abs(lambda0 - lambda1) < math_epsilon ? (lambda0 + lambda1) / 2 : math_atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
                        if (dz * dz / d2 > delta2 || math_abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                            stream.point(x2, y2);
                            resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
                        }
                    }
                }
                return function(stream) {
                    var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0;
                    var resampleStream = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            stream.polygonStart();
                            resampleStream.lineStart = ringStart;
                        },
                        polygonEnd: function() {
                            stream.polygonEnd();
                            resampleStream.lineStart = lineStart;
                        }
                    };
                    function point(x, y) {
                        x = project(x, y);
                        stream.point(x[0], x[1]);
                    }
                    function lineStart() {
                        x0 = NaN;
                        resampleStream.point = linePoint;
                        stream.lineStart();
                    }
                    function linePoint(lambda, phi) {
                        var c = cartesian_cartesian([
                            lambda,
                            phi
                        ]), p = project(lambda, phi);
                        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
                        stream.point(x0, y0);
                    }
                    function lineEnd() {
                        resampleStream.point = point;
                        stream.lineEnd();
                    }
                    function ringStart() {
                        lineStart();
                        resampleStream.point = ringPoint;
                        resampleStream.lineEnd = ringEnd;
                    }
                    function ringPoint(lambda, phi) {
                        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
                        resampleStream.point = linePoint;
                    }
                    function ringEnd() {
                        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
                        resampleStream.lineEnd = lineEnd;
                        lineEnd();
                    }
                    return resampleStream;
                };
            }
            var transformRadians = transform_transformer({
                point: function(x, y) {
                    this.stream.point(x * math_radians, y * math_radians);
                }
            });
            function projection_projection(project) {
                return projection_projectionMutator(function() {
                    return project;
                })();
            }
            function projection_projectionMutator(projectAt) {
                var project, k = 150, x = 480, y = 250, dx, dy, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, theta = null, preclip = clip_antimeridian, x0 = null, y0, x1, y1, postclip = src_identity, delta2 = 0.5, projectResample = projection_resample(projectTransform, delta2), cache, cacheStream;
                function projection(point) {
                    point = projectRotate(point[0] * math_radians, point[1] * math_radians);
                    return [
                        point[0] * k + dx,
                        dy - point[1] * k
                    ];
                }
                function invert(point) {
                    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
                    return point && [
                        point[0] * math_degrees,
                        point[1] * math_degrees
                    ];
                }
                function projectTransform(x, y) {
                    return x = project(x, y), [
                        x[0] * k + dx,
                        dy - x[1] * k
                    ];
                }
                projection.stream = function(stream) {
                    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
                };
                projection.clipAngle = function(_) {
                    return arguments.length ? (preclip = +_ ? clip_circle(theta = _ * math_radians, 6 * math_radians) : (theta = null, clip_antimeridian), reset()) : theta * math_degrees;
                };
                projection.clipExtent = function(_) {
                    return arguments.length ? (postclip = null == _ ? (x0 = y0 = x1 = y1 = null, src_identity) : extent_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : null == x0 ? null : [
                        [
                            x0,
                            y0
                        ],
                        [
                            x1,
                            y1
                        ]
                    ];
                };
                projection.scale = function(_) {
                    return arguments.length ? (k = +_, recenter()) : k;
                };
                projection.translate = function(_) {
                    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
                        x,
                        y
                    ];
                };
                projection.center = function(_) {
                    return arguments.length ? (lambda = _[0] % 360 * math_radians, phi = _[1] % 360 * math_radians, recenter()) : [
                        lambda * math_degrees,
                        phi * math_degrees
                    ];
                };
                projection.rotate = function(_) {
                    return arguments.length ? (deltaLambda = _[0] % 360 * math_radians, deltaPhi = _[1] % 360 * math_radians, deltaGamma = _.length > 2 ? _[2] % 360 * math_radians : 0, recenter()) : [
                        deltaLambda * math_degrees,
                        deltaPhi * math_degrees,
                        deltaGamma * math_degrees
                    ];
                };
                projection.precision = function(_) {
                    return arguments.length ? (projectResample = projection_resample(projectTransform, delta2 = _ * _), reset()) : math_sqrt(delta2);
                };
                projection.fitExtent = function(extent, object) {
                    return fit_fitExtent(projection, extent, object);
                };
                projection.fitSize = function(size, object) {
                    return fit_fitSize(projection, size, object);
                };
                function recenter() {
                    projectRotate = src_compose(rotate = rotation_rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
                    var center = project(lambda, phi);
                    dx = x - center[0] * k;
                    dy = y + center[1] * k;
                    return reset();
                }
                function reset() {
                    cache = cacheStream = null;
                    return projection;
                }
                return function() {
                    project = projectAt.apply(this, arguments);
                    projection.invert = project.invert && invert;
                    return recenter();
                };
            }
            function azimuthalRaw(scale) {
                return function(x, y) {
                    var cx = math_cos(x), cy = math_cos(y), k = scale(cx * cy);
                    return [
                        k * cy * math_sin(x),
                        k * math_sin(y)
                    ];
                };
            }
            function azimuthalInvert(angle) {
                return function(x, y) {
                    var z = math_sqrt(x * x + y * y), c = angle(z), sc = math_sin(c), cc = math_cos(c);
                    return [
                        math_atan2(x * sc, z * cc),
                        math_asin(z && y * sc / z)
                    ];
                };
            }
            var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
                return math_sqrt(2 / (1 + cxcy));
            });
            azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
                return 2 * math_asin(z / 2);
            });
            var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
                return (c = acos(c)) && c / math_sin(c);
            });
            azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
                return z;
            });
            function azimuthalEquidistant() {
                return projection_projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(179.999);
            }
            function mercator_mercatorRaw(lambda, phi) {
                return [
                    lambda,
                    math_log(math_tan((math_halfPi + phi) / 2))
                ];
            }
            mercator_mercatorRaw.invert = function(x, y) {
                return [
                    x,
                    2 * math_atan(exp(y)) - math_halfPi
                ];
            };
            function equirectangular_equirectangularRaw(lambda, phi) {
                return [
                    lambda,
                    phi
                ];
            }
            equirectangular_equirectangularRaw.invert = equirectangular_equirectangularRaw;
            function gnomonicRaw(x, y) {
                var cy = math_cos(y), k = math_cos(x) * cy;
                return [
                    cy * math_sin(x) / k,
                    math_sin(y) / k
                ];
            }
            gnomonicRaw.invert = azimuthalInvert(math_atan);
            function naturalEarth1Raw(lambda, phi) {
                var phi2 = phi * phi, phi4 = phi2 * phi2;
                return [
                    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
                    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
                ];
            }
            naturalEarth1Raw.invert = function(x, y) {
                var phi = y, i = 25, delta;
                do {
                    var phi2 = phi * phi, phi4 = phi2 * phi2;
                    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.045255 + phi4 * (-0.311325 + 0.259866 * phi2 - 0.005916 * 11 * phi4)));
                }while (math_abs(delta) > math_epsilon && --i > 0);
                return [
                    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
                    phi
                ];
            };
            function orthographicRaw(x, y) {
                return [
                    math_cos(y) * math_sin(x),
                    math_sin(y)
                ];
            }
            orthographicRaw.invert = azimuthalInvert(math_asin);
            function stereographicRaw(x, y) {
                var cy = math_cos(y), k = 1 + math_cos(x) * cy;
                return [
                    cy * math_sin(x) / k,
                    math_sin(y) / k
                ];
            }
            stereographicRaw.invert = azimuthalInvert(function(z) {
                return 2 * math_atan(z);
            });
            function transverseMercatorRaw(lambda, phi) {
                return [
                    math_log(math_tan((math_halfPi + phi) / 2)),
                    -lambda
                ];
            }
            transverseMercatorRaw.invert = function(x, y) {
                return [
                    -y,
                    2 * math_atan(exp(x)) - math_halfPi
                ];
            };
            var { BufferOp, GeoJSONReader, GeoJSONWriter } = jsts_min;
            function esm_buffer(geojson, radius, options) {
                options = options || {};
                var units = options.units || "kilometers";
                var steps = options.steps || 8;
                if (!geojson) throw new Error("geojson is required");
                if ("object" != typeof options) throw new Error("options must be an object");
                if ("number" != typeof steps) throw new Error("steps must be an number");
                if (void 0 === radius) throw new Error("radius is required");
                if (steps <= 0) throw new Error("steps must be greater than 0");
                var results = [];
                switch(geojson.type){
                    case "GeometryCollection":
                        geomEach(geojson, function(geometry) {
                            var buffered = bufferFeature(geometry, radius, units, steps);
                            if (buffered) results.push(buffered);
                        });
                        return esm_featureCollection(results);
                    case "FeatureCollection":
                        featureEach(geojson, function(feature2) {
                            var multiBuffered = bufferFeature(feature2, radius, units, steps);
                            if (multiBuffered) featureEach(multiBuffered, function(buffered) {
                                if (buffered) results.push(buffered);
                            });
                        });
                        return esm_featureCollection(results);
                }
                return bufferFeature(geojson, radius, units, steps);
            }
            function bufferFeature(geojson, radius, units, steps) {
                var properties = geojson.properties || {};
                var geometry = "Feature" === geojson.type ? geojson.geometry : geojson;
                if ("GeometryCollection" === geometry.type) {
                    var results = [];
                    geomEach(geojson, function(geometry2) {
                        var buffered2 = bufferFeature(geometry2, radius, units, steps);
                        if (buffered2) results.push(buffered2);
                    });
                    return esm_featureCollection(results);
                }
                var projection = defineProjection(geometry);
                var projected = {
                    type: geometry.type,
                    coordinates: projectCoords(geometry.coordinates, projection)
                };
                var reader = new GeoJSONReader();
                var geom = reader.read(projected);
                var distance = radiansToLength(lengthToRadians(radius, units), "meters");
                var buffered = BufferOp.bufferOp(geom, distance, steps);
                var writer = new GeoJSONWriter();
                buffered = writer.write(buffered);
                if (coordsIsNaN(buffered.coordinates)) return;
                var result = {
                    type: buffered.type,
                    coordinates: unprojectCoords(buffered.coordinates, projection)
                };
                return esm_feature(result, properties);
            }
            function coordsIsNaN(coords) {
                if (Array.isArray(coords[0])) return coordsIsNaN(coords[0]);
                return isNaN(coords[0]);
            }
            function projectCoords(coords, proj) {
                if ("object" != typeof coords[0]) return proj(coords);
                return coords.map(function(coord) {
                    return projectCoords(coord, proj);
                });
            }
            function unprojectCoords(coords, proj) {
                if ("object" != typeof coords[0]) return proj.invert(coords);
                return coords.map(function(coord) {
                    return unprojectCoords(coord, proj);
                });
            }
            function defineProjection(geojson) {
                var coords = esm_center(geojson).geometry.coordinates;
                var rotation = [
                    -coords[0],
                    -coords[1]
                ];
                return azimuthalEquidistant().rotate(rotation).scale(earthRadius);
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
                buffer: esm_buffer,
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
            const randomPointsFromGeoJSON = (input, { features, unkink, buffer })=>{
                if (void 0 === features || 0 === features.features.length) throw new Error('No features provided to generate random points');
                let fc;
                fc = unkink ? src_turf.unkinkPolygon(features) : features;
                if (buffer) {
                    fc = src_turf.buffer(fc, buffer.radius, buffer.options);
                    if (!fc) throw new Error('Buffer operation failed, check your buffer parameters');
                }
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
                    for(let i = 0; i < ptsWithin.features.length; i++){
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
        })();
        return __webpack_exports__;
    })());

//# sourceMappingURL=random-points.umd.js.map