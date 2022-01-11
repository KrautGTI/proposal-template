(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [898], {
        78840: function(t, e, i) {
            "use strict";
            var o, s, r;
            s = "undefined" !== typeof window ? window : this, r = function(t) {
                function e(t, e, i, o) {
                    t.hasOwnProperty(e) || (t[e] = o.apply(null, i))
                }
                var i = {};
                return e(i, "Core/Globals.js", [], (function() {
                    var e, i = "undefined" !== typeof t ? t : "undefined" !== typeof window ? window : {};
                    return function(t) {
                        t.SVG_NS = "http://www.w3.org/2000/svg", t.product = "Highcharts", t.version = "9.2.2", t.win = i, t.doc = t.win.document, t.svg = t.doc && t.doc.createElementNS && !!t.doc.createElementNS(t.SVG_NS, "svg").createSVGRect, t.userAgent = t.win.navigator && t.win.navigator.userAgent || "", t.isChrome = -1 !== t.userAgent.indexOf("Chrome"), t.isFirefox = -1 !== t.userAgent.indexOf("Firefox"), t.isMS = /(edge|msie|trident)/i.test(t.userAgent) && !t.win.opera, t.isSafari = !t.isChrome && -1 !== t.userAgent.indexOf("Safari"), t.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(t.userAgent), t.isWebKit = -1 !== t.userAgent.indexOf("AppleWebKit"), t.deg2rad = 2 * Math.PI / 360, t.hasBidiBug = t.isFirefox && 4 > parseInt(t.userAgent.split("Firefox/")[1], 10), t.hasTouch = !!t.win.TouchEvent, t.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], t.noop = function() {}, t.supportsPassiveEvents = function() {
                            var e = !1;
                            if (!t.isMS) {
                                var i = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        e = !0
                                    }
                                });
                                t.win.addEventListener && t.win.removeEventListener && (t.win.addEventListener("testPassive", t.noop, i), t.win.removeEventListener("testPassive", t.noop, i))
                            }
                            return e
                        }(), t.charts = [], t.dateFormats = {}, t.seriesTypes = {}, t.symbolSizes = {}, t.chartCount = 0
                    }(e || (e = {})), e
                })), e(i, "Core/Utilities.js", [i["Core/Globals.js"]], (function(t) {
                    function e(i, o, s, r) {
                        var n = o ? "Highcharts error" : "Highcharts warning";
                        32 === i && (i = n + ": Deprecated member");
                        var a = h(i),
                            l = a ? n + " #" + i + ": www.highcharts.com/errors/" + i + "/" : i.toString();
                        if ("undefined" !== typeof r) {
                            var c = "";
                            a && (l += "?"), m(r, (function(t, e) {
                                c += "\n - " + e + ": " + t, a && (l += encodeURI(e) + "=" + encodeURI(t))
                            })), l += c
                        }
                        v(t, "displayError", {
                            chart: s,
                            code: i,
                            message: l,
                            params: r
                        }, (function() {
                            if (o) throw Error(l);
                            S.console && -1 === e.messages.indexOf(l) && console.warn(l)
                        })), e.messages.push(l)
                    }

                    function i(t, e) {
                        return parseInt(t, e || 10)
                    }

                    function o(t) {
                        return "string" === typeof t
                    }

                    function s(t) {
                        return "[object Array]" === (t = Object.prototype.toString.call(t)) || "[object Array Iterator]" === t
                    }

                    function r(t, e) {
                        return !!t && "object" === typeof t && (!e || !s(t))
                    }

                    function n(t) {
                        return r(t) && "number" === typeof t.nodeType
                    }

                    function a(t) {
                        var e = t && t.constructor;
                        return !(!r(t, !0) || n(t) || !e || !e.name || "Object" === e.name)
                    }

                    function h(t) {
                        return "number" === typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                    }

                    function l(t) {
                        return "undefined" !== typeof t && null !== t
                    }

                    function c(t, e, i) {
                        var s;
                        return o(e) ? l(i) ? t.setAttribute(e, i) : t && t.getAttribute && ((s = t.getAttribute(e)) || "class" !== e || (s = t.getAttribute(e + "Name"))) : m(e, (function(e, i) {
                            t.setAttribute(i, e)
                        })), s
                    }

                    function d(t, e) {
                        var i;
                        for (i in t || (t = {}), e) t[i] = e[i];
                        return t
                    }

                    function p() {
                        for (var t = arguments, e = t.length, i = 0; i < e; i++) {
                            var o = t[i];
                            if ("undefined" !== typeof o && null !== o) return o
                        }
                    }

                    function u(e, i) {
                        t.isMS && !t.svg && i && "undefined" !== typeof i.opacity && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"), d(e.style, i)
                    }

                    function f(t, e, i, o, s) {
                        return t = C.createElement(t), e && d(t, e), s && u(t, {
                            padding: "0",
                            border: "none",
                            margin: "0"
                        }), i && u(t, i), o && o.appendChild(t), t
                    }

                    function g(t, e) {
                        return parseFloat(t.toPrecision(e || 14))
                    }

                    function m(t, e, i) {
                        for (var o in t) Object.hasOwnProperty.call(t, o) && e.call(i || t[o], t[o], o, t)
                    }

                    function y(e, i, o) {
                        function s(i, o) {
                            var s = e.removeEventListener || t.removeEventListenerPolyfill;
                            s && s.call(e, i, o, !1)
                        }

                        function r(t) {
                            var o;
                            if (e.nodeName) {
                                if (i) {
                                    var r = {};
                                    r[i] = !0
                                } else r = t;
                                m(r, (function(e, i) {
                                    if (t[i])
                                        for (o = t[i].length; o--;) s(i, t[i][o].fn)
                                }))
                            }
                        }
                        var n = "function" === typeof e && e.prototype || e;
                        if (Object.hasOwnProperty.call(n, "hcEvents")) {
                            var a = n.hcEvents;
                            i ? (n = a[i] || [], o ? (a[i] = n.filter((function(t) {
                                return o !== t.fn
                            })), s(i, o)) : (r(a), a[i] = [])) : (r(a), delete n.hcEvents)
                        }
                    }

                    function v(e, i, o, s) {
                        if (o = o || {}, C.createEvent && (e.dispatchEvent || e.fireEvent && e !== t)) {
                            var r = C.createEvent("Events");
                            r.initEvent(i, !0, !0), o = d(r, o), e.dispatchEvent ? e.dispatchEvent(o) : e.fireEvent(i, o)
                        } else if (e.hcEvents) {
                            o.target || d(o, {
                                preventDefault: function() {
                                    o.defaultPrevented = !0
                                },
                                target: e,
                                type: i
                            }), r = [];
                            for (var n = e, a = !1; n.hcEvents;) Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents[i] && (r.length && (a = !0), r.unshift.apply(r, n.hcEvents[i])), n = Object.getPrototypeOf(n);
                            a && r.sort((function(t, e) {
                                return t.order - e.order
                            })), r.forEach((function(t) {
                                !1 === t.fn.call(e, o) && o.preventDefault()
                            }))
                        }
                        s && !o.defaultPrevented && s.call(e, o)
                    }
                    var x, b = t.charts,
                        C = t.doc,
                        S = t.win;
                    (e || (e = {})).messages = [], Math.easeInOutSine = function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    };
                    var k = Array.prototype.find ? function(t, e) {
                        return t.find(e)
                    } : function(t, e) {
                        var i, o = t.length;
                        for (i = 0; i < o; i++)
                            if (e(t[i], i)) return t[i]
                    };
                    m({
                        map: "map",
                        each: "forEach",
                        grep: "filter",
                        reduce: "reduce",
                        some: "some"
                    }, (function(i, o) {
                        t[o] = function(t) {
                            var s;
                            return e(32, !1, void 0, ((s = {})["Highcharts." + o] = "use Array." + i, s)), Array.prototype[i].apply(t, [].slice.call(arguments, 1))
                        }
                    }));
                    var w, M = function() {
                        var t = Math.random().toString(36).substring(2, 9) + "-",
                            e = 0;
                        return function() {
                            return "highcharts-" + (w ? "" : t) + e++
                        }
                    }();
                    return S.jQuery && (S.jQuery.fn.highcharts = function() {
                        var e = [].slice.call(arguments);
                        if (this[0]) return e[0] ? (new(t[o(e[0]) ? e.shift() : "Chart"])(this[0], e[0], e[1]), this) : b[c(this[0], "data-highcharts-chart")]
                    }), k = {
                        addEvent: function(e, i, o, s) {
                            void 0 === s && (s = {});
                            var r = "function" === typeof e && e.prototype || e;
                            Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {}), r = r.hcEvents, t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
                            var n = e.addEventListener || t.addEventListenerPolyfill;
                            return n && n.call(e, i, o, !!t.supportsPassiveEvents && {
                                    passive: void 0 === s.passive ? -1 !== i.indexOf("touch") : s.passive,
                                    capture: !1
                                }), r[i] || (r[i] = []), r[i].push({
                                    fn: o,
                                    order: "number" === typeof s.order ? s.order : 1 / 0
                                }), r[i].sort((function(t, e) {
                                    return t.order - e.order
                                })),
                                function() {
                                    y(e, i, o)
                                }
                        },
                        arrayMax: function(t) {
                            for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
                            return i
                        },
                        arrayMin: function(t) {
                            for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
                            return i
                        },
                        attr: c,
                        clamp: function(t, e, i) {
                            return t > e ? t < i ? t : i : e
                        },
                        cleanRecursively: function t(e, i) {
                            var o = {};
                            return m(e, (function(s, n) {
                                r(e[n], !0) && !e.nodeType && i[n] ? (s = t(e[n], i[n]), Object.keys(s).length && (o[n] = s)) : (r(e[n]) || e[n] !== i[n]) && (o[n] = e[n])
                            })), o
                        },
                        clearTimeout: function(t) {
                            l(t) && clearTimeout(t)
                        },
                        correctFloat: g,
                        createElement: f,
                        css: u,
                        defined: l,
                        destroyObjectProperties: function(t, e) {
                            m(t, (function(i, o) {
                                i && i !== e && i.destroy && i.destroy(), delete t[o]
                            }))
                        },
                        discardElement: function(t) {
                            x || (x = f("div")), t && x.appendChild(t), x.innerHTML = ""
                        },
                        erase: function(t, e) {
                            for (var i = t.length; i--;)
                                if (t[i] === e) {
                                    t.splice(i, 1);
                                    break
                                }
                        },
                        error: e,
                        extend: d,
                        extendClass: function(t, e) {
                            var i = function() {};
                            return d(i.prototype = new t, e), i
                        },
                        find: k,
                        fireEvent: v,
                        getMagnitude: function(t) {
                            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                        },
                        getNestedProperty: function(t, e) {
                            for (t = t.split("."); t.length && l(e);) {
                                var i = t.shift();
                                if ("undefined" === typeof i || "__proto__" === i) return;
                                if (!l(e = e[i]) || "function" === typeof e || "number" === typeof e.nodeType || e === S) return
                            }
                            return e
                        },
                        getStyle: function o(s, r, n) {
                            var a = t.getStyle || o;
                            if ("width" === r) return r = Math.min(s.offsetWidth, s.scrollWidth), (n = s.getBoundingClientRect && s.getBoundingClientRect().width) < r && n >= r - 1 && (r = Math.floor(n)), Math.max(0, r - (a(s, "padding-left", !0) || 0) - (a(s, "padding-right", !0) || 0));
                            if ("height" === r) return Math.max(0, Math.min(s.offsetHeight, s.scrollHeight) - (a(s, "padding-top", !0) || 0) - (a(s, "padding-bottom", !0) || 0));
                            if (S.getComputedStyle || e(27, !0), s = S.getComputedStyle(s, void 0)) {
                                var h = s.getPropertyValue(r);
                                p(n, "opacity" !== r) && (h = i(h))
                            }
                            return h
                        },
                        inArray: function(t, i, o) {
                            return e(32, !1, void 0, {
                                "Highcharts.inArray": "use Array.indexOf"
                            }), i.indexOf(t, o)
                        },
                        isArray: s,
                        isClass: a,
                        isDOMElement: n,
                        isFunction: function(t) {
                            return "function" === typeof t
                        },
                        isNumber: h,
                        isObject: r,
                        isString: o,
                        keys: function(t) {
                            return e(32, !1, void 0, {
                                "Highcharts.keys": "use Object.keys"
                            }), Object.keys(t)
                        },
                        merge: function() {
                            var t, e = arguments,
                                i = {},
                                o = function(t, e) {
                                    return "object" !== typeof t && (t = {}), m(e, (function(i, s) {
                                        "__proto__" !== s && "constructor" !== s && (!r(i, !0) || a(i) || n(i) ? t[s] = e[s] : t[s] = o(t[s] || {}, i))
                                    })), t
                                };
                            !0 === e[0] && (i = e[1], e = Array.prototype.slice.call(e, 2));
                            var s = e.length;
                            for (t = 0; t < s; t++) i = o(i, e[t]);
                            return i
                        },
                        normalizeTickInterval: function(t, e, i, o, s) {
                            var r = t,
                                n = t / (i = p(i, 1));
                            for (e || (e = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === o && (1 === i ? e = e.filter((function(t) {
                                    return 0 === t % 1
                                })) : .1 >= i && (e = [1 / i]))), o = 0; o < e.length && (r = e[o], !(s && r * i >= t || !s && n <= (e[o] + (e[o + 1] || e[o])) / 2)); o++);
                            return g(r * i, -Math.round(Math.log(.001) / Math.LN10))
                        },
                        objectEach: m,
                        offset: function(t) {
                            var e = C.documentElement;
                            return {
                                top: (t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                                    top: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                }).top + (S.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                left: t.left + (S.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                                width: t.width,
                                height: t.height
                            }
                        },
                        pad: function(t, e, i) {
                            return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
                        },
                        pick: p,
                        pInt: i,
                        relativeLength: function(t, e, i) {
                            return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                        },
                        removeEvent: y,
                        splat: function(t) {
                            return s(t) ? t : [t]
                        },
                        stableSort: function(t, e) {
                            var i, o, s = t.length;
                            for (o = 0; o < s; o++) t[o].safeI = o;
                            for (t.sort((function(t, o) {
                                    return 0 === (i = e(t, o)) ? t.safeI - o.safeI : i
                                })), o = 0; o < s; o++) delete t[o].safeI
                        },
                        syncTimeout: function(t, e, i) {
                            return 0 < e ? setTimeout(t, e, i) : (t.call(0, i), -1)
                        },
                        timeUnits: {
                            millisecond: 1,
                            second: 1e3,
                            minute: 6e4,
                            hour: 36e5,
                            day: 864e5,
                            week: 6048e5,
                            month: 24192e5,
                            year: 314496e5
                        },
                        uniqueKey: M,
                        useSerialIds: function(t) {
                            return w = p(t, w)
                        },
                        wrap: function(t, e, i) {
                            var o = t[e];
                            t[e] = function() {
                                var t = Array.prototype.slice.call(arguments),
                                    e = arguments,
                                    s = this;
                                return s.proceed = function() {
                                    o.apply(s, arguments.length ? arguments : e)
                                }, t.unshift(o), t = i.apply(this, t), s.proceed = null, t
                            }
                        }
                    }
                })), e(i, "Core/Color/Palette.js", [], (function() {
                    return {
                        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                        backgroundColor: "#ffffff",
                        neutralColor100: "#000000",
                        neutralColor80: "#333333",
                        neutralColor60: "#666666",
                        neutralColor40: "#999999",
                        neutralColor20: "#cccccc",
                        neutralColor10: "#e6e6e6",
                        neutralColor5: "#f2f2f2",
                        neutralColor3: "#f7f7f7",
                        highlightColor100: "#003399",
                        highlightColor80: "#335cad",
                        highlightColor60: "#6685c2",
                        highlightColor20: "#ccd6eb",
                        highlightColor10: "#e6ebf5",
                        positiveColor: "#06b535",
                        negativeColor: "#f21313"
                    }
                })), e(i, "Core/Chart/ChartDefaults.js", [i["Core/Color/Palette.js"]], (function(t) {
                    return {
                        panning: {
                            enabled: !1,
                            type: "x"
                        },
                        styledMode: !1,
                        borderRadius: 0,
                        colorCount: 10,
                        defaultSeriesType: "line",
                        ignoreHiddenSeries: !0,
                        spacing: [10, 10, 15, 10],
                        resetZoomButton: {
                            theme: {
                                zIndex: 6
                            },
                            position: {
                                align: "right",
                                x: -10,
                                y: 10
                            }
                        },
                        zoomBySingleTouch: !1,
                        width: null,
                        height: null,
                        borderColor: t.highlightColor80,
                        backgroundColor: t.backgroundColor,
                        plotBorderColor: t.neutralColor20
                    }
                })), e(i, "Core/Color/Color.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e) {
                    var i = e.isNumber,
                        o = e.merge,
                        s = e.pInt;
                    return e = function() {
                        function e(i) {
                            this.rgba = [NaN, NaN, NaN, NaN], this.input = i;
                            var o = t.Color;
                            return o && o !== e ? new o(i) : this instanceof e ? void this.init(i) : new e(i)
                        }
                        return e.parse = function(t) {
                            return t ? new e(t) : e.None
                        }, e.prototype.init = function(t) {
                            var i;
                            if ("object" === typeof t && "undefined" !== typeof t.stops) this.stops = t.stops.map((function(t) {
                                return new e(t[1])
                            }));
                            else if ("string" === typeof t) {
                                if (this.input = t = e.names[t.toLowerCase()] || t, "#" === t.charAt(0)) {
                                    var o = t.length,
                                        s = parseInt(t.substr(1), 16);
                                    7 === o ? i = [(16711680 & s) >> 16, (65280 & s) >> 8, 255 & s, 1] : 4 === o && (i = [(3840 & s) >> 4 | (3840 & s) >> 8, (240 & s) >> 4 | 240 & s, (15 & s) << 4 | 15 & s, 1])
                                }
                                if (!i)
                                    for (s = e.parsers.length; s-- && !i;) {
                                        var r = e.parsers[s];
                                        (o = r.regex.exec(t)) && (i = r.parse(o))
                                    }
                            }
                            i && (this.rgba = i)
                        }, e.prototype.get = function(t) {
                            var e = this.input,
                                s = this.rgba;
                            if ("object" === typeof e && "undefined" !== typeof this.stops) {
                                var r = o(e);
                                return r.stops = [].slice.call(r.stops), this.stops.forEach((function(e, i) {
                                    r.stops[i] = [r.stops[i][0], e.get(t)]
                                })), r
                            }
                            return s && i(s[0]) ? "rgb" === t || !t && 1 === s[3] ? "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")" : "a" === t ? "" + s[3] : "rgba(" + s.join(",") + ")" : e
                        }, e.prototype.brighten = function(t) {
                            var e = this.rgba;
                            if (this.stops) this.stops.forEach((function(e) {
                                e.brighten(t)
                            }));
                            else if (i(t) && 0 !== t)
                                for (var o = 0; 3 > o; o++) e[o] += s(255 * t), 0 > e[o] && (e[o] = 0), 255 < e[o] && (e[o] = 255);
                            return this
                        }, e.prototype.setOpacity = function(t) {
                            return this.rgba[3] = t, this
                        }, e.prototype.tweenTo = function(t, e) {
                            var o = this.rgba,
                                s = t.rgba;
                            return i(o[0]) && i(s[0]) ? ((t = 1 !== s[3] || 1 !== o[3]) ? "rgba(" : "rgb(") + Math.round(s[0] + (o[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (o[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (o[2] - s[2]) * (1 - e)) + (t ? "," + (s[3] + (o[3] - s[3]) * (1 - e)) : "") + ")" : t.input || "none"
                        }, e.names = {
                            white: "#ffffff",
                            black: "#000000"
                        }, e.parsers = [{
                            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                            parse: function(t) {
                                return [s(t[1]), s(t[2]), s(t[3]), parseFloat(t[4], 10)]
                            }
                        }, {
                            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                            parse: function(t) {
                                return [s(t[1]), s(t[2]), s(t[3]), 1]
                            }
                        }], e.None = new e(""), e
                    }()
                })), e(i, "Core/Time.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e) {
                    var i = t.win,
                        o = e.defined,
                        s = e.error,
                        r = e.extend,
                        n = e.isObject,
                        a = e.merge,
                        h = e.objectEach,
                        l = e.pad,
                        c = e.pick,
                        d = e.splat,
                        p = e.timeUnits,
                        u = t.isSafari && i.Intl && i.Intl.DateTimeFormat.prototype.formatRange,
                        f = t.isSafari && i.Intl && !i.Intl.DateTimeFormat.prototype.formatRange;
                    return e = function() {
                        function e(t) {
                            this.options = {}, this.variableTimezone = this.useUTC = !1, this.Date = i.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t)
                        }
                        return e.prototype.get = function(t, e) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                var i = e.getTime(),
                                    o = i - this.getTimezoneOffset(e);
                                return e.setTime(o), t = e["getUTC" + t](), e.setTime(i), t
                            }
                            return this.useUTC ? e["getUTC" + t]() : e["get" + t]()
                        }, e.prototype.set = function(t, e, i) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                if ("Milliseconds" === t || "Seconds" === t || "Minutes" === t && 0 === this.getTimezoneOffset(e) % 36e5) return e["setUTC" + t](i);
                                var o = this.getTimezoneOffset(e);
                                return o = e.getTime() - o, e.setTime(o), e["setUTC" + t](i), t = this.getTimezoneOffset(e), o = e.getTime() + t, e.setTime(o)
                            }
                            return this.useUTC || u && "FullYear" === t ? e["setUTC" + t](i) : e["set" + t](i)
                        }, e.prototype.update = function(t) {
                            var e = c(t && t.useUTC, !0);
                            this.options = t = a(!0, this.options || {}, t), this.Date = t.Date || i.Date || Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e && !(!t.getTimezoneOffset && !t.timezone)
                        }, e.prototype.makeTime = function(t, e, i, o, s, r) {
                            if (this.useUTC) {
                                var n = this.Date.UTC.apply(0, arguments),
                                    a = this.getTimezoneOffset(n);
                                n += a;
                                var h = this.getTimezoneOffset(n);
                                a !== h ? n += h - a : a - 36e5 !== this.getTimezoneOffset(n - 36e5) || f || (n -= 36e5)
                            } else n = new this.Date(t, e, c(i, 1), c(o, 0), c(s, 0), c(r, 0)).getTime();
                            return n
                        }, e.prototype.timezoneOffsetFunction = function() {
                            var t = this,
                                e = this.options,
                                o = e.moment || i.moment;
                            if (!this.useUTC) return function(t) {
                                return 6e4 * new Date(t.toString()).getTimezoneOffset()
                            };
                            if (e.timezone) {
                                if (o) return function(t) {
                                    return 6e4 * -o.tz(t, e.timezone).utcOffset()
                                };
                                s(25)
                            }
                            return this.useUTC && e.getTimezoneOffset ? function(t) {
                                return 6e4 * e.getTimezoneOffset(t.valueOf())
                            } : function() {
                                return 6e4 * (t.timezoneOffset || 0)
                            }
                        }, e.prototype.dateFormat = function(e, i, s) {
                            if (!o(i) || isNaN(i)) return t.defaultOptions.lang && t.defaultOptions.lang.invalidDate || "";
                            e = c(e, "%Y-%m-%d %H:%M:%S");
                            var n = this,
                                a = new this.Date(i),
                                d = this.get("Hours", a),
                                p = this.get("Day", a),
                                u = this.get("Date", a),
                                f = this.get("Month", a),
                                g = this.get("FullYear", a),
                                m = t.defaultOptions.lang,
                                y = m && m.weekdays,
                                v = m && m.shortWeekdays;
                            return a = r({
                                a: v ? v[p] : y[p].substr(0, 3),
                                A: y[p],
                                d: l(u),
                                e: l(u, 2, " "),
                                w: p,
                                b: m.shortMonths[f],
                                B: m.months[f],
                                m: l(f + 1),
                                o: f + 1,
                                y: g.toString().substr(2, 2),
                                Y: g,
                                H: l(d),
                                k: d,
                                I: l(d % 12 || 12),
                                l: d % 12 || 12,
                                M: l(this.get("Minutes", a)),
                                p: 12 > d ? "AM" : "PM",
                                P: 12 > d ? "am" : "pm",
                                S: l(a.getSeconds()),
                                L: l(Math.floor(i % 1e3), 3)
                            }, t.dateFormats), h(a, (function(t, o) {
                                for (; - 1 !== e.indexOf("%" + o);) e = e.replace("%" + o, "function" === typeof t ? t.call(n, i) : t)
                            })), s ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                        }, e.prototype.resolveDTLFormat = function(t) {
                            return n(t, !0) ? t : {
                                main: (t = d(t))[0],
                                from: t[1],
                                to: t[2]
                            }
                        }, e.prototype.getTimeTicks = function(t, e, i, s) {
                            var n, a = this,
                                h = [],
                                l = {},
                                d = new a.Date(e),
                                u = t.unitRange,
                                f = t.count || 1;
                            if (s = c(s, 1), o(e)) {
                                if (a.set("Milliseconds", d, u >= p.second ? 0 : f * Math.floor(a.get("Milliseconds", d) / f)), u >= p.second && a.set("Seconds", d, u >= p.minute ? 0 : f * Math.floor(a.get("Seconds", d) / f)), u >= p.minute && a.set("Minutes", d, u >= p.hour ? 0 : f * Math.floor(a.get("Minutes", d) / f)), u >= p.hour && a.set("Hours", d, u >= p.day ? 0 : f * Math.floor(a.get("Hours", d) / f)), u >= p.day && a.set("Date", d, u >= p.month ? 1 : Math.max(1, f * Math.floor(a.get("Date", d) / f))), u >= p.month) {
                                    a.set("Month", d, u >= p.year ? 0 : f * Math.floor(a.get("Month", d) / f));
                                    var g = a.get("FullYear", d)
                                }
                                u >= p.year && a.set("FullYear", d, g - g % f), u === p.week && (g = a.get("Day", d), a.set("Date", d, a.get("Date", d) - g + s + (g < s ? -7 : 0))), g = a.get("FullYear", d), s = a.get("Month", d);
                                var m = a.get("Date", d),
                                    y = a.get("Hours", d);
                                for (e = d.getTime(), !a.variableTimezone && a.useUTC || !o(i) || (n = i - e > 4 * p.month || a.getTimezoneOffset(e) !== a.getTimezoneOffset(i)), e = d.getTime(), d = 1; e < i;) h.push(e), e = u === p.year ? a.makeTime(g + d * f, 0) : u === p.month ? a.makeTime(g, s + d * f) : !n || u !== p.day && u !== p.week ? n && u === p.hour && 1 < f ? a.makeTime(g, s, m, y + d * f) : e + u * f : a.makeTime(g, s, m + d * f * (u === p.day ? 1 : 7)), d++;
                                h.push(e), u <= p.hour && 1e4 > h.length && h.forEach((function(t) {
                                    0 === t % 18e5 && "000000000" === a.dateFormat("%H%M%S%L", t) && (l[t] = "day")
                                }))
                            }
                            return h.info = r(t, {
                                higherRanks: l,
                                totalRange: u * f
                            }), h
                        }, e.prototype.getDateFormat = function(t, e, i, o) {
                            var s = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                                r = {
                                    millisecond: 15,
                                    second: 12,
                                    minute: 9,
                                    hour: 6,
                                    day: 3
                                },
                                n = "millisecond";
                            for (a in p) {
                                if (t === p.week && +this.dateFormat("%w", e) === i && "00:00:00.000" === s.substr(6)) {
                                    var a = "week";
                                    break
                                }
                                if (p[a] > t) {
                                    a = n;
                                    break
                                }
                                if (r[a] && s.substr(r[a]) !== "01-01 00:00:00.000".substr(r[a])) break;
                                "week" !== a && (n = a)
                            }
                            if (a) var h = this.resolveDTLFormat(o[a]).main;
                            return h
                        }, e
                    }()
                })), e(i, "Core/DefaultOptions.js", [i["Core/Chart/ChartDefaults.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Time.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    e = e.parse;
                    var n = r.merge,
                        a = {
                            colors: o.colors,
                            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                            lang: {
                                loading: "Loading...",
                                months: "January February March April May June July August September October November December".split(" "),
                                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                decimalPoint: ".",
                                numericSymbols: "kMGTPE".split(""),
                                resetZoom: "Reset zoom",
                                resetZoomTitle: "Reset zoom level 1:1",
                                thousandsSep: " "
                            },
                            global: {},
                            time: {
                                Date: void 0,
                                getTimezoneOffset: void 0,
                                timezone: void 0,
                                timezoneOffset: 0,
                                useUTC: !0
                            },
                            chart: t,
                            title: {
                                text: "Chart title",
                                align: "center",
                                margin: 15,
                                widthAdjust: -44
                            },
                            subtitle: {
                                text: "",
                                align: "center",
                                widthAdjust: -44
                            },
                            caption: {
                                margin: 15,
                                text: "",
                                align: "left",
                                verticalAlign: "bottom"
                            },
                            plotOptions: {},
                            labels: {
                                style: {
                                    position: "absolute",
                                    color: o.neutralColor80
                                }
                            },
                            legend: {
                                enabled: !0,
                                align: "center",
                                alignColumns: !0,
                                className: "highcharts-no-tooltip",
                                layout: "horizontal",
                                labelFormatter: function() {
                                    return this.name
                                },
                                borderColor: o.neutralColor40,
                                borderRadius: 0,
                                navigation: {
                                    activeColor: o.highlightColor100,
                                    inactiveColor: o.neutralColor20
                                },
                                itemStyle: {
                                    color: o.neutralColor80,
                                    cursor: "pointer",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    textOverflow: "ellipsis"
                                },
                                itemHoverStyle: {
                                    color: o.neutralColor100
                                },
                                itemHiddenStyle: {
                                    color: o.neutralColor20
                                },
                                shadow: !1,
                                itemCheckboxStyle: {
                                    position: "absolute",
                                    width: "13px",
                                    height: "13px"
                                },
                                squareSymbol: !0,
                                symbolPadding: 5,
                                verticalAlign: "bottom",
                                x: 0,
                                y: 0,
                                title: {
                                    style: {
                                        fontWeight: "bold"
                                    }
                                }
                            },
                            loading: {
                                labelStyle: {
                                    fontWeight: "bold",
                                    position: "relative",
                                    top: "45%"
                                },
                                style: {
                                    position: "absolute",
                                    backgroundColor: o.backgroundColor,
                                    opacity: .5,
                                    textAlign: "center"
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                animation: i.svg,
                                borderRadius: 3,
                                dateTimeLabelFormats: {
                                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                                    second: "%A, %b %e, %H:%M:%S",
                                    minute: "%A, %b %e, %H:%M",
                                    hour: "%A, %b %e, %H:%M",
                                    day: "%A, %b %e, %Y",
                                    week: "Week from %A, %b %e, %Y",
                                    month: "%B %Y",
                                    year: "%Y"
                                },
                                footerFormat: "",
                                headerShape: "callout",
                                hideDelay: 500,
                                padding: 8,
                                shape: "callout",
                                shared: !1,
                                snap: i.isTouchDevice ? 25 : 10,
                                headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                                pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                                backgroundColor: e(o.neutralColor3).setOpacity(.85).get(),
                                borderWidth: 1,
                                shadow: !0,
                                stickOnContact: !1,
                                style: {
                                    color: o.neutralColor80,
                                    cursor: "default",
                                    fontSize: "12px",
                                    whiteSpace: "nowrap"
                                },
                                useHTML: !1
                            },
                            credits: {
                                enabled: !0,
                                href: "https://www.highcharts.com?credits",
                                position: {
                                    align: "right",
                                    x: -10,
                                    verticalAlign: "bottom",
                                    y: -5
                                },
                                style: {
                                    cursor: "pointer",
                                    color: o.neutralColor40,
                                    fontSize: "9px"
                                },
                                text: "Highcharts.com"
                            }
                        };
                    a.chart.styledMode = !1;
                    var h = new s(n(a.global, a.time));
                    return t = {
                        defaultOptions: a,
                        defaultTime: h,
                        getOptions: function() {
                            return a
                        },
                        setOptions: function(t) {
                            return n(!0, a, t), (t.time || t.global) && (i.time ? i.time.update(n(a.global, a.time, t.global, t.time)) : i.time = h), a
                        }
                    }
                })), e(i, "Core/Animation/Fx.js", [i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = t.parse,
                        s = e.win,
                        r = i.isNumber,
                        n = i.objectEach;
                    return function() {
                        function t(t, e, i) {
                            this.pos = NaN, this.options = e, this.elem = t, this.prop = i
                        }
                        return t.prototype.dSetter = function() {
                            var t = this.paths,
                                e = t && t[0];
                            t = t && t[1];
                            var i = this.now || 0,
                                o = [];
                            if (1 !== i && e && t)
                                if (e.length === t.length && 1 > i)
                                    for (var s = 0; s < t.length; s++) {
                                        for (var n = e[s], a = t[s], h = [], l = 0; l < a.length; l++) {
                                            var c = n[l],
                                                d = a[l];
                                            r(c) && r(d) && ("A" !== a[0] || 4 !== l && 5 !== l) ? h[l] = c + i * (d - c) : h[l] = d
                                        }
                                        o.push(h)
                                    } else o = t;
                                else o = this.toD || [];
                            this.elem.attr("d", o, void 0, !0)
                        }, t.prototype.update = function() {
                            var t = this.elem,
                                e = this.prop,
                                i = this.now,
                                o = this.options.step;
                            this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, o && o.call(t, i, this)
                        }, t.prototype.run = function(e, i, o) {
                            var r = this,
                                n = r.options,
                                a = function(t) {
                                    return !a.stopped && r.step(t)
                                },
                                h = s.requestAnimationFrame || function(t) {
                                    setTimeout(t, 13)
                                },
                                l = function() {
                                    for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                                    t.timers.length && h(l)
                                };
                            e !== i || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = i, this.unit = o, this.now = this.start, this.pos = 0, a.elem = this.elem, a.prop = this.prop, a() && 1 === t.timers.push(a) && h(l)) : (delete n.curAnim[this.prop], n.complete && 0 === Object.keys(n.curAnim).length && n.complete.call(this.elem))
                        }, t.prototype.step = function(t) {
                            var e = +new Date,
                                i = this.options,
                                o = this.elem,
                                s = i.complete,
                                r = i.duration,
                                a = i.curAnim;
                            if (o.attr && !o.element) t = !1;
                            else if (t || e >= r + this.startTime) {
                                this.now = this.end, this.pos = 1, this.update();
                                var h = a[this.prop] = !0;
                                n(a, (function(t) {
                                    !0 !== t && (h = !1)
                                })), h && s && s.call(o), t = !1
                            } else this.pos = i.easing((e - this.startTime) / r), this.now = this.start + (this.end - this.start) * this.pos, this.update(), t = !0;
                            return t
                        }, t.prototype.initPath = function(t, e, i) {
                            function o(t, e) {
                                for (; t.length < p;) {
                                    var i = t[0],
                                        o = e[p - t.length];
                                    o && "M" === i[0] && (t[0] = "C" === o[0] ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : ["L", i[1], i[2]]), t.unshift(i), h && (i = t.pop(), t.push(t[t.length - 1], i))
                                }
                            }

                            function s(t, e) {
                                for (; t.length < p;)
                                    if ("C" === (e = t[Math.floor(t.length / l) - 1].slice())[0] && (e[1] = e[5], e[2] = e[6]), h) {
                                        var i = t[Math.floor(t.length / l)].slice();
                                        t.splice(t.length / 2, 0, e, i)
                                    } else t.push(e)
                            }
                            var n = t.startX,
                                a = t.endX;
                            i = i.slice();
                            var h = t.isArea,
                                l = h ? 2 : 1;
                            if (!(e = e && e.slice())) return [i, i];
                            if (n && a && a.length) {
                                for (t = 0; t < n.length; t++) {
                                    if (n[t] === a[0]) {
                                        var c = t;
                                        break
                                    }
                                    if (n[0] === a[a.length - n.length + t]) {
                                        c = t;
                                        var d = !0;
                                        break
                                    }
                                    if (n[n.length - 1] === a[a.length - n.length + t]) {
                                        c = n.length - t;
                                        break
                                    }
                                }
                                "undefined" === typeof c && (e = [])
                            }
                            if (e.length && r(c)) {
                                var p = i.length + c * l;
                                d ? (o(e, i), s(i, e)) : (o(i, e), s(e, i))
                            }
                            return [e, i]
                        }, t.prototype.fillSetter = function() {
                            t.prototype.strokeSetter.apply(this, arguments)
                        }, t.prototype.strokeSetter = function() {
                            this.elem.attr(this.prop, o(this.start).tweenTo(o(this.end), this.pos), null, !0)
                        }, t.timers = [], t
                    }()
                })), e(i, "Core/Animation/AnimationUtilities.js", [i["Core/Animation/Fx.js"], i["Core/Utilities.js"]], (function(t, e) {
                    function i(t) {
                        return h(t) ? l({
                            duration: 500,
                            defer: 0
                        }, t) : {
                            duration: t ? 500 : 0,
                            defer: 0
                        }
                    }

                    function o(e, i) {
                        for (var o = t.timers.length; o--;) t.timers[o].elem !== e || i && i !== t.timers[o].prop || (t.timers[o].stopped = !0)
                    }
                    var s = e.defined,
                        r = e.getStyle,
                        n = e.isArray,
                        a = e.isNumber,
                        h = e.isObject,
                        l = e.merge,
                        c = e.objectEach,
                        d = e.pick;
                    return {
                        animate: function(e, i, s) {
                            var d, p, u, f = "";
                            if (!h(s)) {
                                var g = arguments;
                                s = {
                                    duration: g[2],
                                    easing: g[3],
                                    complete: g[4]
                                }
                            }
                            a(s.duration) || (s.duration = 400), s.easing = "function" === typeof s.easing ? s.easing : Math[s.easing] || Math.easeInOutSine, s.curAnim = l(i), c(i, (function(a, h) {
                                o(e, h), u = new t(e, s, h), p = void 0, "d" === h && n(i.d) ? (u.paths = u.initPath(e, e.pathArray, i.d), u.toD = i.d, d = 0, p = 1) : e.attr ? d = e.attr(h) : (d = parseFloat(r(e, h)) || 0, "opacity" !== h && (f = "px")), p || (p = a), "string" === typeof p && p.match("px") && (p = p.replace(/px/g, "")), u.run(d, p, f)
                            }))
                        },
                        animObject: i,
                        getDeferredAnimation: function(t, e, o) {
                            var r = i(e),
                                n = 0,
                                a = 0;
                            return (o ? [o] : t.series).forEach((function(t) {
                                t = i(t.options.animation), n = e && s(e.defer) ? r.defer : Math.max(n, t.duration + t.defer), a = Math.min(r.duration, t.duration)
                            })), t.renderer.forExport && (n = 0), {
                                defer: Math.max(0, n - a),
                                duration: Math.min(n, a)
                            }
                        },
                        setAnimation: function(t, e) {
                            e.renderer.globalAnimation = d(t, e.options.chart.animation, !0)
                        },
                        stop: o
                    }
                })), e(i, "Core/Renderer/HTML/AST.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e) {
                    var i = t.SVG_NS,
                        o = e.attr,
                        s = e.createElement,
                        r = e.discardElement,
                        n = e.error,
                        a = e.isString,
                        h = e.objectEach,
                        l = e.splat;
                    try {
                        var c = !!(new DOMParser).parseFromString("", "text/html")
                    } catch (d) {
                        c = !1
                    }
                    return e = function() {
                        function e(t) {
                            this.nodes = "string" === typeof t ? this.parseMarkup(t) : t
                        }
                        return e.filterUserAttributes = function(t) {
                            return h(t, (function(i, o) {
                                var s = !0; - 1 === e.allowedAttributes.indexOf(o) && (s = !1), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(o) && (s = a(i) && e.allowedReferences.some((function(t) {
                                    return 0 === i.indexOf(t)
                                }))), s || (n("Highcharts warning: Invalid attribute '" + o + "' in config"), delete t[o])
                            })), t
                        }, e.setElementHTML = function(t, i) {
                            t.innerHTML = "", i && new e(i).addToDOM(t)
                        }, e.prototype.addToDOM = function(s) {
                            return function s(r, a) {
                                var c;
                                return l(r).forEach((function(r) {
                                    var l = r.tagName,
                                        d = r.textContent ? t.doc.createTextNode(r.textContent) : void 0;
                                    if (l)
                                        if ("#text" === l) var p = d;
                                        else if (-1 !== e.allowedTags.indexOf(l)) {
                                        l = t.doc.createElementNS("svg" === l ? i : a.namespaceURI || i, l);
                                        var u = r.attributes || {};
                                        h(r, (function(t, e) {
                                            "tagName" !== e && "attributes" !== e && "children" !== e && "textContent" !== e && (u[e] = t)
                                        })), o(l, e.filterUserAttributes(u)), d && l.appendChild(d), s(r.children || [], l), p = l
                                    } else n("Highcharts warning: Invalid tagName '" + l + "' in config");
                                    p && a.appendChild(p), c = p
                                })), c
                            }(this.nodes, s)
                        }, e.prototype.parseMarkup = function(t) {
                            var e = [];
                            if (t = t.trim(), c) t = (new DOMParser).parseFromString(t, "text/html");
                            else {
                                var i = s("div");
                                i.innerHTML = t, t = {
                                    body: i
                                }
                            }
                            var o = function(t, e) {
                                var i = t.nodeName.toLowerCase(),
                                    s = {
                                        tagName: i
                                    };
                                if ("#text" === i && (s.textContent = t.textContent || ""), i = t.attributes) {
                                    var r = {};
                                    [].forEach.call(i, (function(t) {
                                        r[t.name] = t.value
                                    })), s.attributes = r
                                }
                                if (t.childNodes.length) {
                                    var n = [];
                                    [].forEach.call(t.childNodes, (function(t) {
                                        o(t, n)
                                    })), n.length && (s.children = n)
                                }
                                e.push(s)
                            };
                            return [].forEach.call(t.body.childNodes, (function(t) {
                                return o(t, e)
                            })), i && r(i), e
                        }, e.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" "), e.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "), e.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" "), e
                    }()
                })), e(i, "Core/FormatUtilities.js", [i["Core/DefaultOptions.js"], i["Core/Utilities.js"]], (function(t, e) {
                    function i(t, e, i, s) {
                        t = +t || 0, e = +e;
                        var r = o.lang,
                            l = (t.toString().split(".")[1] || "").split("e")[0].length,
                            c = t.toString().split("e"),
                            d = e;
                        if (-1 === e) e = Math.min(l, 20);
                        else if (n(e)) {
                            if (e && c[1] && 0 > c[1]) {
                                var p = e + +c[1];
                                0 <= p ? (c[0] = (+c[0]).toExponential(p).split("e")[0], e = p) : (c[0] = c[0].split(".")[0] || 0, t = 20 > e ? (c[0] * Math.pow(10, c[1])).toFixed(e) : 0, c[1] = 0)
                            }
                        } else e = 2;
                        p = (Math.abs(c[1] ? c[0] : t) + Math.pow(10, -Math.max(e, l) - 1)).toFixed(e);
                        var u = 3 < (l = String(h(p))).length ? l.length % 3 : 0;
                        return i = a(i, r.decimalPoint), s = a(s, r.thousandsSep), t = (0 > t ? "-" : "") + (u ? l.substr(0, u) + s : ""), t = 0 > +c[1] && !d ? "0" : t + l.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + s), e && (t += i + p.slice(-e)), c[1] && 0 !== +t && (t += "e" + c[1]), t
                    }
                    var o = t.defaultOptions,
                        s = t.defaultTime,
                        r = e.getNestedProperty,
                        n = e.isNumber,
                        a = e.pick,
                        h = e.pInt;
                    return {
                        dateFormat: function(t, e, i) {
                            return s.dateFormat(t, e, i)
                        },
                        format: function(t, e, n) {
                            var a = "{",
                                h = !1,
                                l = /f$/,
                                c = /\.([0-9])/,
                                d = o.lang,
                                p = n && n.time || s;
                            n = n && n.numberFormatter || i;
                            for (var u = []; t;) {
                                var f = t.indexOf(a);
                                if (-1 === f) break;
                                var g = t.slice(0, f);
                                if (h) {
                                    if (g = g.split(":"), a = r(g.shift() || "", e), g.length && "number" === typeof a)
                                        if (g = g.join(":"), l.test(g)) {
                                            var m = parseInt((g.match(c) || ["", "-1"])[1], 10);
                                            null !== a && (a = n(a, m, d.decimalPoint, -1 < g.indexOf(",") ? d.thousandsSep : ""))
                                        } else a = p.dateFormat(g, a);
                                    u.push(a)
                                } else u.push(g);
                                t = t.slice(f + 1), a = (h = !h) ? "}" : "{"
                            }
                            return u.push(t), u.join("")
                        },
                        numberFormat: i
                    }
                })), e(i, "Core/Renderer/RendererUtilities.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.clamp,
                        o = t.pick,
                        s = t.stableSort;
                    return function(t) {
                        t.distribute = function t(e, r, n) {
                            var a, h = e,
                                l = h.reducedLen || r,
                                c = function(t, e) {
                                    return (e.rank || 0) - (t.rank || 0)
                                },
                                d = function(t, e) {
                                    return t.target - e.target
                                },
                                p = !0,
                                u = [],
                                f = 0;
                            for (a = e.length; a--;) f += e[a].size;
                            if (f > l) {
                                for (s(e, c), f = a = 0; f <= l;) f += e[a].size, a++;
                                u = e.splice(a - 1, e.length)
                            }
                            for (s(e, d), e = e.map((function(t) {
                                    return {
                                        size: t.size,
                                        targets: [t.target],
                                        align: o(t.align, .5)
                                    }
                                })); p;) {
                                for (a = e.length; a--;) l = e[a], c = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = i(c - l.size * l.align, 0, r - l.size);
                                for (a = e.length, p = !1; a--;) 0 < a && e[a - 1].pos + e[a - 1].size > e[a].pos && (e[a - 1].size += e[a].size, e[a - 1].targets = e[a - 1].targets.concat(e[a].targets), e[a - 1].align = .5, e[a - 1].pos + e[a - 1].size > r && (e[a - 1].pos = r - e[a - 1].size), e.splice(a, 1), p = !0)
                            }
                            return h.push.apply(h, u), a = 0, e.some((function(e) {
                                var i = 0;
                                return (e.targets || []).some((function() {
                                    return h[a].pos = e.pos + i, "undefined" !== typeof n && Math.abs(h[a].pos - h[a].target) > n ? (h.slice(0, a + 1).forEach((function(t) {
                                        return delete t.pos
                                    })), h.reducedLen = (h.reducedLen || r) - .1 * r, h.reducedLen > .1 * r && t(h, r, n), !0) : (i += h[a].size, a++, !1)
                                }))
                            })), s(h, d), h
                        }
                    }(e || (e = {})), e
                })), e(i, "Core/Renderer/SVG/SVGElement.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Renderer/HTML/AST.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    var n = t.animate,
                        a = t.animObject,
                        h = t.stop,
                        l = o.deg2rad,
                        c = o.doc,
                        d = o.noop,
                        p = o.svg,
                        u = o.SVG_NS,
                        f = o.win,
                        g = r.addEvent,
                        m = r.attr,
                        y = r.createElement,
                        v = r.css,
                        x = r.defined,
                        b = r.erase,
                        C = r.extend,
                        S = r.fireEvent,
                        k = r.isArray,
                        w = r.isFunction,
                        M = r.isNumber,
                        T = r.isString,
                        A = r.merge,
                        P = r.objectEach,
                        O = r.pick,
                        L = r.pInt,
                        E = r.syncTimeout,
                        D = r.uniqueKey;
                    return (t = function() {
                        function t() {
                            this.element = void 0, this.onEvents = {}, this.opacity = 1, this.renderer = void 0, this.SVG_NS = u, this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ")
                        }
                        return t.prototype._defaultGetter = function(t) {
                            return t = O(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
                        }, t.prototype._defaultSetter = function(t, e, i) {
                            i.setAttribute(e, t)
                        }, t.prototype.add = function(t) {
                            var e = this.renderer,
                                i = this.element;
                            if (t && (this.parentGroup = t), this.parentInverted = t && t.inverted, "undefined" !== typeof this.textStr && "text" === this.element.nodeName && e.buildText(this), this.added = !0, !t || t.handleZ || this.zIndex) var o = this.zIndexSetter();
                            return o || (t ? t.element : e.box).appendChild(i), this.onAdd && this.onAdd(), this
                        }, t.prototype.addClass = function(t, e) {
                            var i = e ? "" : this.attr("class") || "";
                            return (t = (t || "").split(/ /g).reduce((function(t, e) {
                                return -1 === i.indexOf(e) && t.push(e), t
                            }), i ? [i] : []).join(" ")) !== i && this.attr("class", t), this
                        }, t.prototype.afterSetters = function() {
                            this.doTransform && (this.updateTransform(), this.doTransform = !1)
                        }, t.prototype.align = function(t, e, i) {
                            var o, s, r, n = {},
                                a = this.renderer,
                                h = a.alignedObjects;
                            t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || T(i)) && (this.alignTo = o = i || "renderer", b(h, this), h.push(this), i = void 0)) : (t = this.alignOptions, e = this.alignByTranslate, o = this.alignTo), i = O(i, a[o], "scrollablePlotBox" === o ? a.plotBox : void 0, a), o = t.align;
                            var l = t.verticalAlign;
                            return a = (i.x || 0) + (t.x || 0), h = (i.y || 0) + (t.y || 0), "right" === o ? s = 1 : "center" === o && (s = 2), s && (a += (i.width - (t.width || 0)) / s), n[e ? "translateX" : "x"] = Math.round(a), "bottom" === l ? r = 1 : "middle" === l && (r = 2), r && (h += (i.height - (t.height || 0)) / r), n[e ? "translateY" : "y"] = Math.round(h), this[this.placed ? "animate" : "attr"](n), this.placed = !0, this.alignAttr = n, this
                        }, t.prototype.alignSetter = function(t) {
                            var e = {
                                left: "start",
                                center: "middle",
                                right: "end"
                            };
                            e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
                        }, t.prototype.animate = function(t, e, i) {
                            var o = this,
                                s = a(O(e, this.renderer.globalAnimation, !0));
                            return e = s.defer, O(c.hidden, c.msHidden, c.webkitHidden, !1) && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), E((function() {
                                o.element && n(o, t, s)
                            }), e)) : (this.attr(t, void 0, i), P(t, (function(t, e) {
                                s.step && s.step.call(this, t, {
                                    prop: e,
                                    pos: 1,
                                    elem: this
                                })
                            }), this)), this
                        }, t.prototype.applyTextOutline = function(t) {
                            var e = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
                            var i = t.split(" ");
                            if (t = i[i.length - 1], (i = i[0]) && "none" !== i && o.svg) {
                                this.fakeTS = !0, this.ySetter = this.xSetter, i = i.replace(/(^[\d\.]+)(.*?)$/g, (function(t, e, i) {
                                    return 2 * Number(e) + i
                                })), this.removeTextOutline();
                                var s = c.createElementNS(u, "tspan");
                                m(s, {
                                    class: "highcharts-text-outline",
                                    fill: t,
                                    stroke: t,
                                    "stroke-width": i,
                                    "stroke-linejoin": "round"
                                }), [].forEach.call(e.childNodes, (function(t) {
                                    var e = t.cloneNode(!0);
                                    e.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((function(t) {
                                        return e.removeAttribute(t)
                                    })), s.appendChild(e)
                                }));
                                var r = c.createElementNS(u, "tspan");
                                r.textContent = "\u200b", ["x", "y"].forEach((function(t) {
                                    var i = e.getAttribute(t);
                                    i && r.setAttribute(t, i)
                                })), s.appendChild(r), e.insertBefore(s, e.firstChild)
                            }
                        }, t.prototype.attr = function(t, e, i, o) {
                            var s, r, n, a = this.element,
                                l = this.symbolCustomAttribs,
                                c = this;
                            if ("string" === typeof t && "undefined" !== typeof e) {
                                var d = t;
                                (t = {})[d] = e
                            }
                            return "string" === typeof t ? c = (this[t + "Getter"] || this._defaultGetter).call(this, t, a) : (P(t, (function(e, i) {
                                r = !1, o || h(this, i), this.symbolName && -1 !== l.indexOf(i) && (s || (this.symbolAttr(t), s = !0), r = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), r || ((n = this[i + "Setter"] || this._defaultSetter).call(this, e, i, a), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, n))
                            }), this), this.afterSetters()), i && i.call(this), c
                        }, t.prototype.clip = function(t) {
                            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
                        }, t.prototype.crisp = function(t, e) {
                            e = e || t.strokeWidth || 0;
                            var i = Math.round(e) % 2 / 2;
                            return t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), x(t.strokeWidth) && (t.strokeWidth = e), t
                        }, t.prototype.complexColor = function(t, e, o) {
                            var s, r, n, a, h, l, c, d, p, u, f, g = this.renderer,
                                m = [];
                            S(this.renderer, "complexColor", {
                                args: arguments
                            }, (function() {
                                if (t.radialGradient ? r = "radialGradient" : t.linearGradient && (r = "linearGradient"), r) {
                                    if (n = t[r], h = g.gradients, l = t.stops, p = o.radialReference, k(n) && (t[r] = n = {
                                            x1: n[0],
                                            y1: n[1],
                                            x2: n[2],
                                            y2: n[3],
                                            gradientUnits: "userSpaceOnUse"
                                        }), "radialGradient" === r && p && !x(n.gradientUnits) && (a = n, n = A(n, g.getRadialAttr(p, a), {
                                            gradientUnits: "userSpaceOnUse"
                                        })), P(n, (function(t, e) {
                                            "id" !== e && m.push(e, t)
                                        })), P(l, (function(t) {
                                            m.push(t)
                                        })), m = m.join(","), h[m]) u = h[m].attr("id");
                                    else {
                                        n.id = u = D();
                                        var y = h[m] = g.createElement(r).attr(n).add(g.defs);
                                        y.radAttr = a, y.stops = [], l.forEach((function(t) {
                                            0 === t[1].indexOf("rgba") ? (s = i.parse(t[1]), c = s.get("rgb"), d = s.get("a")) : (c = t[1], d = 1), t = g.createElement("stop").attr({
                                                offset: t[0],
                                                "stop-color": c,
                                                "stop-opacity": d
                                            }).add(y), y.stops.push(t)
                                        }))
                                    }
                                    f = "url(" + g.url + "#" + u + ")", o.setAttribute(e, f), o.gradient = m, t.toString = function() {
                                        return f
                                    }
                                }
                            }))
                        }, t.prototype.css = function(t) {
                            var e = this.styles,
                                i = {},
                                o = this.element,
                                s = ["textOutline", "textOverflow", "width"],
                                r = "",
                                n = !e;
                            if (t && t.color && (t.fill = t.color), e && P(t, (function(t, o) {
                                    e && e[o] !== t && (i[o] = t, n = !0)
                                })), n) {
                                if (e && (t = C(e, i)), t)
                                    if (null === t.width || "auto" === t.width) delete this.textWidth;
                                    else if ("text" === o.nodeName.toLowerCase() && t.width) var a = this.textWidth = L(t.width);
                                if (this.styles = t, a && !p && this.renderer.forExport && delete t.width, o.namespaceURI === this.SVG_NS) {
                                    var h = function(t, e) {
                                        return "-" + e.toLowerCase()
                                    };
                                    P(t, (function(t, e) {
                                        -1 === s.indexOf(e) && (r += e.replace(/([A-Z])/g, h) + ":" + t + ";")
                                    })), r && m(o, "style", r)
                                } else v(o, t);
                                this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))
                            }
                            return this
                        }, t.prototype.dashstyleSetter = function(t) {
                            var e = this["stroke-width"];
                            if ("inherit" === e && (e = 1), t = t && t.toLowerCase()) {
                                var i = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                for (t = i.length; t--;) i[t] = "" + L(i[t]) * O(e, NaN);
                                t = i.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                            }
                        }, t.prototype.destroy = function() {
                            var t = this,
                                e = t.element || {},
                                i = t.renderer,
                                o = e.ownerSVGElement,
                                s = i.isSVG && "SPAN" === e.nodeName && t.parentGroup || void 0;
                            if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, h(t), t.clipPath && o) {
                                var r = t.clipPath;
                                [].forEach.call(o.querySelectorAll("[clip-path],[CLIP-PATH]"), (function(t) {
                                    -1 < t.getAttribute("clip-path").indexOf(r.element.id) && t.removeAttribute("clip-path")
                                })), t.clipPath = r.destroy()
                            }
                            if (t.stops) {
                                for (o = 0; o < t.stops.length; o++) t.stops[o].destroy();
                                t.stops.length = 0, t.stops = void 0
                            }
                            for (t.safeRemoveChild(e), i.styledMode || t.destroyShadows(); s && s.div && 0 === s.div.childNodes.length;) e = s.parentGroup, t.safeRemoveChild(s.div), delete s.div, s = e;
                            t.alignTo && b(i.alignedObjects, t), P(t, (function(e, i) {
                                t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy(), delete t[i]
                            }))
                        }, t.prototype.destroyShadows = function() {
                            (this.shadows || []).forEach((function(t) {
                                this.safeRemoveChild(t)
                            }), this), this.shadows = void 0
                        }, t.prototype.destroyTextPath = function(t, e) {
                            var i = t.getElementsByTagName("text")[0];
                            if (i) {
                                if (i.removeAttribute("dx"), i.removeAttribute("dy"), e.element.setAttribute("id", ""), this.textPathWrapper && i.getElementsByTagName("textPath").length) {
                                    for (t = this.textPathWrapper.element.childNodes; t.length;) i.appendChild(t[0]);
                                    i.removeChild(this.textPathWrapper.element)
                                }
                            } else(t.getAttribute("dx") || t.getAttribute("dy")) && (t.removeAttribute("dx"), t.removeAttribute("dy"));
                            this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                        }, t.prototype.dSetter = function(t, e, i) {
                            k(t) && ("string" === typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((function(t, e, i) {
                                return e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString()
                            }), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                        }, t.prototype.fadeOut = function(t) {
                            var e = this;
                            e.animate({
                                opacity: 0
                            }, {
                                duration: O(t, 150),
                                complete: function() {
                                    e.attr({
                                        y: -9999
                                    }).hide()
                                }
                            })
                        }, t.prototype.fillSetter = function(t, e, i) {
                            "string" === typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                        }, t.prototype.getBBox = function(e, i) {
                            var o = this.renderer,
                                s = this.element,
                                r = this.styles,
                                n = this.textStr,
                                a = o.cache,
                                h = o.cacheKeys,
                                c = s.namespaceURI === this.SVG_NS;
                            i = O(i, this.rotation, 0);
                            var d, p = o.styledMode ? s && t.prototype.getStyle.call(s, "font-size") : r && r.fontSize;
                            if (x(n)) {
                                var u = n.toString(); - 1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0")), u += ["", i, p, this.textWidth, r && r.textOverflow, r && r.fontWeight].join()
                            }
                            if (u && !e && (d = a[u]), !d) {
                                if (c || o.forExport) {
                                    try {
                                        var f = this.fakeTS && function(t) {
                                            var e = s.querySelector(".highcharts-text-outline");
                                            e && v(e, {
                                                display: t
                                            })
                                        };
                                        w(f) && f("none"), d = s.getBBox ? C({}, s.getBBox()) : {
                                            width: s.offsetWidth,
                                            height: s.offsetHeight
                                        }, w(f) && f("")
                                    } catch (g) {}(!d || 0 > d.width) && (d = {
                                        width: 0,
                                        height: 0
                                    })
                                } else d = this.htmlGetBBox();
                                if (o.isSVG && (e = d.width, o = d.height, c && (d.height = o = {
                                        "11px,17": 14,
                                        "13px,20": 16
                                    }[r && r.fontSize + "," + Math.round(o)] || o), i && (r = i * l, d.width = Math.abs(o * Math.sin(r)) + Math.abs(e * Math.cos(r)), d.height = Math.abs(o * Math.cos(r)) + Math.abs(e * Math.sin(r)))), u && ("" === n || 0 < d.height)) {
                                    for (; 250 < h.length;) delete a[h.shift()];
                                    a[u] || h.push(u), a[u] = d
                                }
                            }
                            return d
                        }, t.prototype.getStyle = function(t) {
                            return f.getComputedStyle(this.element || this, "").getPropertyValue(t)
                        }, t.prototype.hasClass = function(t) {
                            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                        }, t.prototype.hide = function(t) {
                            return t ? this.attr({
                                y: -9999
                            }) : this.attr({
                                visibility: "hidden"
                            }), this
                        }, t.prototype.htmlGetBBox = function() {
                            return {
                                height: 0,
                                width: 0,
                                x: 0,
                                y: 0
                            }
                        }, t.prototype.init = function(t, e) {
                            this.element = "span" === e ? y(e) : c.createElementNS(this.SVG_NS, e), this.renderer = t, S(this, "afterInit")
                        }, t.prototype.invert = function(t) {
                            return this.inverted = t, this.updateTransform(), this
                        }, t.prototype.on = function(t, e) {
                            var i = this.onEvents;
                            return i[t] && i[t](), i[t] = g(this.element, t, e), this
                        }, t.prototype.opacitySetter = function(t, e, i) {
                            this.opacity = t = Number(Number(t).toFixed(3)), i.setAttribute(e, t)
                        }, t.prototype.removeClass = function(t) {
                            return this.attr("class", ("" + this.attr("class")).replace(T(t) ? new RegExp("(^| )" + t + "( |$)") : t, " ").replace(/ +/g, " ").trim())
                        }, t.prototype.removeTextOutline = function() {
                            var t = this.element.querySelector("tspan.highcharts-text-outline");
                            t && this.safeRemoveChild(t)
                        }, t.prototype.safeRemoveChild = function(t) {
                            var e = t.parentNode;
                            e && e.removeChild(t)
                        }, t.prototype.setRadialReference = function(t) {
                            var e = this.element.gradient && this.renderer.gradients[this.element.gradient];
                            return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                        }, t.prototype.setTextPath = function(t, i) {
                            var o = this.element,
                                s = this.text ? this.text.element : o,
                                r = {
                                    textAnchor: "text-anchor"
                                },
                                n = !1,
                                a = this.textPathWrapper,
                                h = !a;
                            i = A(!0, {
                                enabled: !0,
                                attributes: {
                                    dy: -5,
                                    startOffset: "50%",
                                    textAnchor: "middle"
                                }
                            }, i);
                            var l = e.filterUserAttributes(i.attributes);
                            if (t && i && i.enabled) {
                                a && null === a.element.parentNode ? (h = !0, a = a.destroy()) : a && this.removeTextOutline.call(a.parentGroup), this.options && this.options.padding && (l.dx = -this.options.padding), a || (this.textPathWrapper = a = this.renderer.createElement("textPath"), n = !0);
                                var c = a.element;
                                if ((i = t.element.getAttribute("id")) || t.element.setAttribute("id", i = D()), h)
                                    for (s.setAttribute("y", 0), M(l.dx) && s.setAttribute("x", -l.dx), t = [].slice.call(s.childNodes), h = 0; h < t.length; h++) {
                                        var p = t[h];
                                        p.nodeType !== Node.TEXT_NODE && "tspan" !== p.nodeName || c.appendChild(p)
                                    }
                                n && a && a.add({
                                    element: s
                                }), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + i), x(l.dy) && (c.parentNode.setAttribute("dy", l.dy), delete l.dy), x(l.dx) && (c.parentNode.setAttribute("dx", l.dx), delete l.dx), P(l, (function(t, e) {
                                    c.setAttribute(r[e] || e, t)
                                })), o.removeAttribute("transform"), this.removeTextOutline.call(a), this.text && !this.renderer.styledMode && this.attr({
                                    fill: "none",
                                    "stroke-width": 0
                                }), this.applyTextOutline = this.updateTransform = d
                            } else a && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(o, t), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
                            return this
                        }, t.prototype.shadow = function(t, e, i) {
                            var o, r = [],
                                n = this.element,
                                a = this.oldShadowOptions,
                                h = {
                                    color: s.neutralColor100,
                                    offsetX: this.parentInverted ? -1 : 1,
                                    offsetY: this.parentInverted ? -1 : 1,
                                    opacity: .15,
                                    width: 3
                                },
                                l = !1;
                            if (!0 === t ? o = h : "object" === typeof t && (o = C(h, t)), o && (o && a && P(o, (function(t, e) {
                                    t !== a[e] && (l = !0)
                                })), l && this.destroyShadows(), this.oldShadowOptions = o), o) {
                                if (!this.shadows) {
                                    var c = o.opacity / o.width,
                                        d = this.parentInverted ? "translate(" + o.offsetY + ", " + o.offsetX + ")" : "translate(" + o.offsetX + ", " + o.offsetY + ")";
                                    for (h = 1; h <= o.width; h++) {
                                        var p = n.cloneNode(!1),
                                            u = 2 * o.width + 1 - 2 * h;
                                        m(p, {
                                            stroke: t.color || s.neutralColor100,
                                            "stroke-opacity": c * h,
                                            "stroke-width": u,
                                            transform: d,
                                            fill: "none"
                                        }), p.setAttribute("class", (p.getAttribute("class") || "") + " highcharts-shadow"), i && (m(p, "height", Math.max(m(p, "height") - u, 0)), p.cutHeight = u), e ? e.element.appendChild(p) : n.parentNode && n.parentNode.insertBefore(p, n), r.push(p)
                                    }
                                    this.shadows = r
                                }
                            } else this.destroyShadows();
                            return this
                        }, t.prototype.show = function(t) {
                            return this.attr({
                                visibility: t ? "inherit" : "visible"
                            })
                        }, t.prototype.strokeSetter = function(e, i, o) {
                            this[i] = e, this.stroke && this["stroke-width"] ? (t.prototype.fillSetter.call(this, this.stroke, "stroke", o), o.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === i && 0 === e && this.hasStroke ? (o.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (o.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0)
                        }, t.prototype.strokeWidth = function() {
                            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                            var t = this.getStyle("stroke-width"),
                                e = 0;
                            if (t.indexOf("px") === t.length - 2) e = L(t);
                            else if ("" !== t) {
                                var i = c.createElementNS(u, "rect");
                                m(i, {
                                    width: t,
                                    "stroke-width": 0
                                }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)
                            }
                            return e
                        }, t.prototype.symbolAttr = function(t) {
                            var e = this;
                            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach((function(i) {
                                e[i] = O(t[i], e[i])
                            })), e.attr({
                                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                            })
                        }, t.prototype.textSetter = function(t) {
                            t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this))
                        }, t.prototype.titleSetter = function(t) {
                            var e = this.element,
                                i = e.getElementsByTagName("title")[0] || c.createElementNS(this.SVG_NS, "title");
                            e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = String(O(t, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                        }, t.prototype.toFront = function() {
                            var t = this.element;
                            return t.parentNode.appendChild(t), this
                        }, t.prototype.translate = function(t, e) {
                            return this.attr({
                                translateX: t,
                                translateY: e
                            })
                        }, t.prototype.updateShadows = function(t, e, i) {
                            var o = this.shadows;
                            if (o)
                                for (var s = o.length; s--;) i.call(o[s], "height" === t ? Math.max(e - (o[s].cutHeight || 0), 0) : "d" === t ? this.d : e, t, o[s])
                        }, t.prototype.updateTransform = function() {
                            var t = this.scaleX,
                                e = this.scaleY,
                                i = this.inverted,
                                o = this.rotation,
                                s = this.matrix,
                                r = this.element,
                                n = this.translateX || 0,
                                a = this.translateY || 0;
                            i && (n += this.width, a += this.height), n = ["translate(" + n + "," + a + ")"], x(s) && n.push("matrix(" + s.join(",") + ")"), i ? n.push("rotate(90) scale(-1,1)") : o && n.push("rotate(" + o + " " + O(this.rotationOriginX, r.getAttribute("x"), 0) + " " + O(this.rotationOriginY, r.getAttribute("y") || 0) + ")"), (x(t) || x(e)) && n.push("scale(" + O(t, 1) + " " + O(e, 1) + ")"), n.length && r.setAttribute("transform", n.join(" "))
                        }, t.prototype.visibilitySetter = function(t, e, i) {
                            "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                        }, t.prototype.xGetter = function(t) {
                            return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                        }, t.prototype.zIndexSetter = function(t, e) {
                            var i = this.renderer,
                                o = this.parentGroup,
                                s = (o || i).element || i.box,
                                r = this.element;
                            i = s === i.box;
                            var n, a = !1,
                                h = this.added;
                            if (x(t) ? (r.setAttribute("data-z-index", t), t = +t, this[e] === t && (h = !1)) : x(this[e]) && r.removeAttribute("data-z-index"), this[e] = t, h) {
                                for ((t = this.zIndex) && o && (o.handleZ = !0), n = (e = s.childNodes).length - 1; 0 <= n && !a; n--) {
                                    h = (o = e[n]).getAttribute("data-z-index");
                                    var l = !x(h);
                                    o !== r && (0 > t && l && !i && !n ? (s.insertBefore(r, e[n]), a = !0) : (L(h) <= t || l && (!x(t) || 0 <= t)) && (s.insertBefore(r, e[n + 1] || null), a = !0))
                                }
                                a || (s.insertBefore(r, e[i ? 3 : 0] || null), a = !0)
                            }
                            return a
                        }, t
                    }()).prototype["stroke-widthSetter"] = t.prototype.strokeSetter, t.prototype.yGetter = t.prototype.xGetter, t.prototype.matrixSetter = t.prototype.rotationOriginXSetter = t.prototype.rotationOriginYSetter = t.prototype.rotationSetter = t.prototype.scaleXSetter = t.prototype.scaleYSetter = t.prototype.translateXSetter = t.prototype.translateYSetter = t.prototype.verticalAlignSetter = function(t, e) {
                        this[e] = t, this.doTransform = !0
                    }, t
                })), e(i, "Core/Renderer/RendererRegistry.js", [i["Core/Globals.js"]], (function(t) {
                    var e;
                    return function(e) {
                        var i;
                        e.rendererTypes = {}, e.getRendererType = function(t) {
                            return void 0 === t && (t = i), e.rendererTypes[t] || e.rendererTypes[i]
                        }, e.registerRendererType = function(o, s, r) {
                            e.rendererTypes[o] = s, i && !r || (i = o, t.Renderer = s)
                        }
                    }(e || (e = {})), e
                })), e(i, "Core/Renderer/SVG/SVGLabel.js", [i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], (function(t, e) {
                    var i = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        o = e.defined,
                        s = e.extend,
                        r = e.isNumber,
                        n = e.merge,
                        a = e.pick,
                        h = e.removeEvent;
                    return function(e) {
                        function l(t, i, o, s, r, n, a, h, c, d) {
                            var p, u = e.call(this) || this;
                            return u.paddingLeftSetter = u.paddingSetter, u.paddingRightSetter = u.paddingSetter, u.init(t, "g"), u.textStr = i, u.x = o, u.y = s, u.anchorX = n, u.anchorY = a, u.baseline = c, u.className = d, u.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && u.addClass("highcharts-" + d), u.text = t.text(void 0, 0, 0, h).attr({
                                zIndex: 1
                            }), "string" === typeof r && ((p = /^url\((.*?)\)$/.test(r)) || u.renderer.symbols[r]) && (u.symbolKey = r), u.bBox = l.emptyBBox, u.padding = 3, u.baselineOffset = 0, u.needsBox = t.styledMode || p, u.deferredAttr = {}, u.alignFactor = 0, u
                        }
                        return i(l, e), l.prototype.alignSetter = function(t) {
                            (t = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[t]) !== this.alignFactor && (this.alignFactor = t, this.bBox && r(this.xSetting) && this.attr({
                                x: this.xSetting
                            }))
                        }, l.prototype.anchorXSetter = function(t, e) {
                            this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
                        }, l.prototype.anchorYSetter = function(t, e) {
                            this.anchorY = t, this.boxAttr(e, t - this.ySetting)
                        }, l.prototype.boxAttr = function(t, e) {
                            this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
                        }, l.prototype.css = function(e) {
                            if (e) {
                                var i = {};
                                e = n(e), l.textProps.forEach((function(t) {
                                    "undefined" !== typeof e[t] && (i[t] = e[t], delete e[t])
                                })), this.text.css(i);
                                var o = "width" in i;
                                "fontSize" in i || "fontWeight" in i ? this.updateTextPadding() : o && this.updateBoxSize()
                            }
                            return t.prototype.css.call(this, e)
                        }, l.prototype.destroy = function() {
                            h(this.element, "mouseenter"), h(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t.prototype.destroy.call(this)
                        }, l.prototype.fillSetter = function(t, e) {
                            t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
                        }, l.prototype.getBBox = function() {
                            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                            var t = this.padding,
                                e = a(this.paddingLeft, t);
                            return {
                                width: this.width,
                                height: this.height,
                                x: this.bBox.x - e,
                                y: this.bBox.y - t
                            }
                        }, l.prototype.getCrispAdjust = function() {
                            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                        }, l.prototype.heightSetter = function(t) {
                            this.heightSetting = t
                        }, l.prototype.onAdd = function() {
                            var t = this.textStr;
                            this.text.add(this), this.attr({
                                text: o(t) ? t : "",
                                x: this.x,
                                y: this.y
                            }), this.box && o(this.anchorX) && this.attr({
                                anchorX: this.anchorX,
                                anchorY: this.anchorY
                            })
                        }, l.prototype.paddingSetter = function(t, e) {
                            r(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
                        }, l.prototype.rSetter = function(t, e) {
                            this.boxAttr(e, t)
                        }, l.prototype.shadow = function(t) {
                            return t && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(t)), this
                        }, l.prototype.strokeSetter = function(t, e) {
                            this.stroke = t, this.boxAttr(e, t)
                        }, l.prototype["stroke-widthSetter"] = function(t, e) {
                            t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
                        }, l.prototype["text-alignSetter"] = function(t) {
                            this.textAlign = t
                        }, l.prototype.textSetter = function(t) {
                            "undefined" !== typeof t && this.text.attr({
                                text: t
                            }), this.updateTextPadding()
                        }, l.prototype.updateBoxSize = function() {
                            var t = this.text.element.style,
                                e = {},
                                i = this.padding,
                                n = this.bBox = r(this.widthSetting) && r(this.heightSetting) && !this.textAlign || !o(this.text.textStr) ? l.emptyBBox : this.text.getBBox();
                            this.width = this.getPaddedWidth(), this.height = (this.heightSetting || n.height || 0) + 2 * i, t = this.renderer.fontMetrics(t && t.fontSize, this.text), this.baselineOffset = i + Math.min((this.text.firstLineMetrics || t).b, n.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - t.h) / 2), this.needsBox && (this.box || ((i = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect()).addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), i.add(this)), i = this.getCrispAdjust(), e.x = i, e.y = (this.baseline ? -this.baselineOffset : 0) + i, e.width = Math.round(this.width), e.height = Math.round(this.height), this.box.attr(s(e, this.deferredAttr)), this.deferredAttr = {})
                        }, l.prototype.updateTextPadding = function() {
                            var t = this.text;
                            this.updateBoxSize();
                            var e = this.baseline ? 0 : this.baselineOffset,
                                i = a(this.paddingLeft, this.padding);
                            o(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (i += {
                                center: .5,
                                right: 1
                            }[this.textAlign] * (this.widthSetting - this.bBox.width)), i === t.x && e === t.y || (t.attr("x", i), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), "undefined" !== typeof e && t.attr("y", e)), t.x = i, t.y = e
                        }, l.prototype.widthSetter = function(t) {
                            this.widthSetting = r(t) ? t : void 0
                        }, l.prototype.getPaddedWidth = function() {
                            var t = this.padding,
                                e = a(this.paddingLeft, t);
                            return t = a(this.paddingRight, t), (this.widthSetting || this.bBox.width || 0) + e + t
                        }, l.prototype.xSetter = function(t) {
                            this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
                        }, l.prototype.ySetter = function(t) {
                            this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
                        }, l.emptyBBox = {
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0
                        }, l.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "), l
                    }(t)
                })), e(i, "Core/Renderer/SVG/Symbols.js", [i["Core/Utilities.js"]], (function(t) {
                    function e(t, e, i, o, r) {
                        var a = [];
                        if (r) {
                            var h = r.start || 0,
                                l = n(r.r, i);
                            i = n(r.r, o || i);
                            var c = (r.end || 0) - .001;
                            o = r.innerR;
                            var d = n(r.open, .001 > Math.abs((r.end || 0) - h - 2 * Math.PI)),
                                p = Math.cos(h),
                                u = Math.sin(h),
                                f = Math.cos(c),
                                g = Math.sin(c);
                            h = n(r.longArc, .001 > c - h - Math.PI ? 0 : 1), a.push(["M", t + l * p, e + i * u], ["A", l, i, 0, h, n(r.clockwise, 1), t + l * f, e + i * g]), s(o) && a.push(d ? ["M", t + o * f, e + o * g] : ["L", t + o * f, e + o * g], ["A", o, o, 0, h, s(r.clockwise) ? 1 - r.clockwise : 0, t + o * p, e + o * u]), d || a.push(["Z"])
                        }
                        return a
                    }

                    function i(t, e, i, s, r) {
                        return r && r.r ? o(t, e, i, s, r) : [
                            ["M", t, e],
                            ["L", t + i, e],
                            ["L", t + i, e + s],
                            ["L", t, e + s],
                            ["Z"]
                        ]
                    }

                    function o(t, e, i, o, s) {
                        return [
                            ["M", t + (s = s && s.r || 0), e],
                            ["L", t + i - s, e],
                            ["C", t + i, e, t + i, e, t + i, e + s],
                            ["L", t + i, e + o - s],
                            ["C", t + i, e + o, t + i, e + o, t + i - s, e + o],
                            ["L", t + s, e + o],
                            ["C", t, e + o, t, e + o, t, e + o - s],
                            ["L", t, e + s],
                            ["C", t, e, t, e, t + s, e]
                        ]
                    }
                    var s = t.defined,
                        r = t.isNumber,
                        n = t.pick;
                    return {
                        arc: e,
                        callout: function(t, e, i, s, n) {
                            var a = Math.min(n && n.r || 0, i, s),
                                h = a + 6,
                                l = n && n.anchorX;
                            n = n && n.anchorY || 0;
                            var c = o(t, e, i, s, {
                                r: a
                            });
                            return r(l) ? (t + l >= i ? n > e + h && n < e + s - h ? c.splice(3, 1, ["L", t + i, n - 6], ["L", t + i + 6, n], ["L", t + i, n + 6], ["L", t + i, e + s - a]) : c.splice(3, 1, ["L", t + i, s / 2], ["L", l, n], ["L", t + i, s / 2], ["L", t + i, e + s - a]) : 0 >= t + l ? n > e + h && n < e + s - h ? c.splice(7, 1, ["L", t, n + 6], ["L", t - 6, n], ["L", t, n - 6], ["L", t, e + a]) : c.splice(7, 1, ["L", t, s / 2], ["L", l, n], ["L", t, s / 2], ["L", t, e + a]) : n && n > s && l > t + h && l < t + i - h ? c.splice(5, 1, ["L", l + 6, e + s], ["L", l, e + s + 6], ["L", l - 6, e + s], ["L", t + a, e + s]) : n && 0 > n && l > t + h && l < t + i - h && c.splice(1, 1, ["L", l - 6, e], ["L", l, e - 6], ["L", l + 6, e], ["L", i - a, e]), c) : c
                        },
                        circle: function(t, i, o, s) {
                            return e(t + o / 2, i + s / 2, o / 2, s / 2, {
                                start: .5 * Math.PI,
                                end: 2.5 * Math.PI,
                                open: !1
                            })
                        },
                        diamond: function(t, e, i, o) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + o / 2],
                                ["L", t + i / 2, e + o],
                                ["L", t, e + o / 2],
                                ["Z"]
                            ]
                        },
                        rect: i,
                        roundedRect: o,
                        square: i,
                        triangle: function(t, e, i, o) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + o],
                                ["L", t, e + o],
                                ["Z"]
                            ]
                        },
                        "triangle-down": function(t, e, i, o) {
                            return [
                                ["M", t, e],
                                ["L", t + i, e],
                                ["L", t + i / 2, e + o],
                                ["Z"]
                            ]
                        }
                    }
                })), e(i, "Core/Renderer/SVG/TextBuilder.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = e.doc,
                        s = e.SVG_NS,
                        r = i.attr,
                        n = i.isString,
                        a = i.objectEach,
                        h = i.pick;
                    return function() {
                        function e(t) {
                            var e = t.styles;
                            this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e && e.lineHeight, this.textOutline = e && e.textOutline, this.ellipsis = !(!e || "ellipsis" !== e.textOverflow), this.noWrap = !(!e || "nowrap" !== e.whiteSpace), this.fontSize = e && e.fontSize
                        }
                        return e.prototype.buildSVG = function() {
                            var e = this.svgElement,
                                i = e.element,
                                s = e.renderer,
                                r = h(e.textStr, "").toString(),
                                a = -1 !== r.indexOf("<"),
                                l = i.childNodes;
                            s = this.width && !e.added && s.box;
                            var c = [r, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
                            if (c !== e.textCache) {
                                for (e.textCache = c, delete e.actualWidth, c = l.length; c--;) i.removeChild(l[c]);
                                a || this.ellipsis || this.width || -1 !== r.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(r)) ? "" !== r && (s && s.appendChild(i), r = new t(r), this.modifyTree(r.nodes), r.addToDOM(e.element), this.modifyDOM(), this.ellipsis && -1 !== (i.textContent || "").indexOf("\u2026") && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), s && s.removeChild(i)) : i.appendChild(o.createTextNode(this.unescapeEntities(r))), n(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline)
                            }
                        }, e.prototype.modifyDOM = function() {
                            var t, e = this,
                                i = this.svgElement,
                                n = r(i.element, "x");
                            for (i.firstLineMetrics = void 0;
                                (t = i.element.firstChild) && /^[\s\u200B]*$/.test(t.textContent || " ");) i.element.removeChild(t);
                            [].forEach.call(i.element.querySelectorAll("tspan.highcharts-br"), (function(t, o) {
                                t.nextSibling && t.previousSibling && (0 === o && 1 === t.previousSibling.nodeType && (i.firstLineMetrics = i.renderer.fontMetrics(void 0, t.previousSibling)), r(t, {
                                    dy: e.getLineHeight(t.nextSibling),
                                    x: n
                                }))
                            }));
                            var a = this.width || 0;
                            if (a) {
                                var h = function(t, h) {
                                        var l = t.textContent || "",
                                            c = l.replace(/([^\^])-/g, "$1- ").split(" "),
                                            d = !e.noWrap && (1 < c.length || 1 < i.element.childNodes.length),
                                            p = e.getLineHeight(h),
                                            u = 0,
                                            f = i.actualWidth;
                                        if (e.ellipsis) l && e.truncate(t, l, void 0, 0, Math.max(0, a - parseInt(e.fontSize || 12, 10)), (function(t, e) {
                                            return t.substring(0, e) + "\u2026"
                                        }));
                                        else if (d) {
                                            for (l = [], d = []; h.firstChild && h.firstChild !== t;) d.push(h.firstChild), h.removeChild(h.firstChild);
                                            for (; c.length;) c.length && !e.noWrap && 0 < u && (l.push(t.textContent || ""), t.textContent = c.join(" ").replace(/- /g, "-")), e.truncate(t, void 0, c, 0 === u && f || 0, a, (function(t, e) {
                                                return c.slice(0, e).join(" ").replace(/- /g, "-")
                                            })), f = i.actualWidth, u++;
                                            d.forEach((function(e) {
                                                h.insertBefore(e, t)
                                            })), l.forEach((function(e) {
                                                h.insertBefore(o.createTextNode(e), t), (e = o.createElementNS(s, "tspan")).textContent = "\u200b", r(e, {
                                                    dy: p,
                                                    x: n
                                                }), h.insertBefore(e, t)
                                            }))
                                        }
                                    },
                                    l = function(t) {
                                        [].slice.call(t.childNodes).forEach((function(e) {
                                            e.nodeType === Node.TEXT_NODE ? h(e, t) : (-1 !== e.className.baseVal.indexOf("highcharts-br") && (i.actualWidth = 0), l(e))
                                        }))
                                    };
                                l(i.element)
                            }
                        }, e.prototype.getLineHeight = function(t) {
                            var e;
                            return t = t.nodeType === Node.TEXT_NODE ? t.parentElement : t, this.renderer.styledMode || (e = t && /(px|em)$/.test(t.style.fontSize) ? t.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12), this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e, t || this.svgElement.element).h
                        }, e.prototype.modifyTree = function(t) {
                            var e = this,
                                i = function(o, s) {
                                    var r = o.tagName,
                                        a = e.renderer.styledMode,
                                        h = o.attributes || {};
                                    "b" === r || "strong" === r ? a ? h.class = "highcharts-strong" : h.style = "font-weight:bold;" + (h.style || "") : "i" !== r && "em" !== r || (a ? h.class = "highcharts-emphasized" : h.style = "font-style:italic;" + (h.style || "")), n(h.style) && (h.style = h.style.replace(/(;| |^)color([ :])/, "$1fill$2")), "br" === r && (h.class = "highcharts-br", o.textContent = "\u200b", (s = t[s + 1]) && s.textContent && (s.textContent = s.textContent.replace(/^ +/gm, ""))), "#text" !== r && "a" !== r && (o.tagName = "tspan"), o.attributes = h, o.children && o.children.filter((function(t) {
                                        return "#text" !== t.tagName
                                    })).forEach(i)
                                };
                            t.forEach(i)
                        }, e.prototype.truncate = function(t, e, i, o, s, r) {
                            var n, a = this.svgElement,
                                h = a.renderer,
                                l = a.rotation,
                                c = [],
                                d = i ? 1 : 0,
                                p = (e || i || "").length,
                                u = p,
                                f = function(s, n) {
                                    n = n || s;
                                    var l = t.parentNode;
                                    if (l && "undefined" === typeof c[n])
                                        if (l.getSubStringLength) try {
                                            c[n] = o + l.getSubStringLength(0, i ? n + 1 : n)
                                        } catch (d) {} else h.getSpanWidth && (t.textContent = r(e || i, s), c[n] = o + h.getSpanWidth(a, t));
                                    return c[n]
                                };
                            a.rotation = 0;
                            var g = f(t.textContent.length);
                            if (o + g > s) {
                                for (; d <= p;) u = Math.ceil((d + p) / 2), i && (n = r(i, u)), g = f(u, n && n.length - 1), d === p ? d = p + 1 : g > s ? p = u - 1 : d = u;
                                0 === p ? t.textContent = "" : e && p === e.length - 1 || (t.textContent = n || r(e || i, u))
                            }
                            i && i.splice(0, u), a.actualWidth = g, a.rotation = l
                        }, e.prototype.unescapeEntities = function(t, e) {
                            return a(this.renderer.escapes, (function(i, o) {
                                e && -1 !== e.indexOf(i) || (t = t.toString().replace(new RegExp(i, "g"), o))
                            })), t
                        }, e
                    }()
                })), e(i, "Core/Renderer/SVG/SVGRenderer.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Renderer/SVG/SVGLabel.js"], i["Core/Renderer/SVG/Symbols.js"], i["Core/Renderer/SVG/TextBuilder.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n, a, h, l) {
                    var c, d = i.charts,
                        p = i.deg2rad,
                        u = i.doc,
                        f = i.isFirefox,
                        g = i.isMS,
                        m = i.isWebKit,
                        y = i.noop,
                        v = i.SVG_NS,
                        x = i.symbolSizes,
                        b = i.win,
                        C = l.addEvent,
                        S = l.attr,
                        k = l.createElement,
                        w = l.css,
                        M = l.defined,
                        T = l.destroyObjectProperties,
                        A = l.extend,
                        P = l.isArray,
                        O = l.isNumber,
                        L = l.isObject,
                        E = l.isString,
                        D = l.merge,
                        j = l.pick,
                        I = l.pInt,
                        B = l.uniqueKey;
                    return i = function() {
                        function i(t, e, i, o, s, r, n) {
                            this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0, this.init(t, e, i, o, s, r, n)
                        }
                        return i.prototype.init = function(t, e, i, o, s, r, n) {
                            var a, h = this.createElement("svg").attr({
                                    version: "1.1",
                                    class: "highcharts-root"
                                }),
                                l = h.element;
                            n || h.css(this.getStyle(o)), t.appendChild(l), S(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && S(l, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = l, this.boxWrapper = h, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(u.createTextNode("Created with Highcharts 9.2.2")), this.defs = this.createElement("defs").add(), this.allowHTML = r, this.forExport = s, this.styledMode = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), f && t.getBoundingClientRect && ((e = function() {
                                w(t, {
                                    left: 0,
                                    top: 0
                                }), a = t.getBoundingClientRect(), w(t, {
                                    left: Math.ceil(a.left) - a.left + "px",
                                    top: Math.ceil(a.top) - a.top + "px"
                                })
                            })(), this.unSubPixelFix = C(b, "resize", e))
                        }, i.prototype.definition = function(e) {
                            return new t([e]).addToDOM(this.defs.element)
                        }, i.prototype.getReferenceURL = function() {
                            if ((f || m) && u.getElementsByTagName("base").length) {
                                if (!M(c)) {
                                    var e = B();
                                    e = new t([{
                                        tagName: "svg",
                                        attributes: {
                                            width: 8,
                                            height: 8
                                        },
                                        children: [{
                                            tagName: "defs",
                                            children: [{
                                                tagName: "clipPath",
                                                attributes: {
                                                    id: e
                                                },
                                                children: [{
                                                    tagName: "rect",
                                                    attributes: {
                                                        width: 4,
                                                        height: 4
                                                    }
                                                }]
                                            }]
                                        }, {
                                            tagName: "rect",
                                            attributes: {
                                                id: "hitme",
                                                width: 8,
                                                height: 8,
                                                "clip-path": "url(#" + e + ")",
                                                fill: "rgba(0,0,0,0.001)"
                                            }
                                        }]
                                    }]).addToDOM(u.body), w(e, {
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        zIndex: 9e5
                                    });
                                    var i = u.elementFromPoint(6, 6);
                                    c = "hitme" === (i && i.id), u.body.removeChild(e)
                                }
                                if (c) return b.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                            }
                            return ""
                        }, i.prototype.getStyle = function(t) {
                            return this.style = A({
                                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                                fontSize: "12px"
                            }, t)
                        }, i.prototype.setStyle = function(t) {
                            this.boxWrapper.css(this.getStyle(t))
                        }, i.prototype.isHidden = function() {
                            return !this.boxWrapper.getBBox().width
                        }, i.prototype.destroy = function() {
                            var t = this.defs;
                            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), T(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
                        }, i.prototype.createElement = function(t) {
                            var e = new this.Element;
                            return e.init(this, t), e
                        }, i.prototype.getRadialAttr = function(t, e) {
                            return {
                                cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                                cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                                r: (e.r || 0) * t[2]
                            }
                        }, i.prototype.buildText = function(t) {
                            new h(t).buildSVG()
                        }, i.prototype.getContrast = function(t) {
                            return (t = e.parse(t).rgba)[0] *= 1, t[1] *= 1.2, t[2] *= .5, 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                        }, i.prototype.button = function(e, i, s, r, n, a, h, l, c, d) {
                            var p = this.label(e, i, s, c, void 0, void 0, d, void 0, "button"),
                                u = this.styledMode,
                                f = 0,
                                m = n ? D(n) : {};
                            if (e = m && m.style || {}, m = t.filterUserAttributes(m), p.attr(D({
                                    padding: 8,
                                    r: 2
                                }, m)), !u) {
                                var y = (m = D({
                                    fill: o.neutralColor3,
                                    stroke: o.neutralColor20,
                                    "stroke-width": 1,
                                    style: {
                                        color: o.neutralColor80,
                                        cursor: "pointer",
                                        fontWeight: "normal"
                                    }
                                }, {
                                    style: e
                                }, m)).style;
                                delete m.style;
                                var v = (a = D(m, {
                                    fill: o.neutralColor10
                                }, t.filterUserAttributes(a || {}))).style;
                                delete a.style;
                                var x = (h = D(m, {
                                    fill: o.highlightColor10,
                                    style: {
                                        color: o.neutralColor100,
                                        fontWeight: "bold"
                                    }
                                }, t.filterUserAttributes(h || {}))).style;
                                delete h.style;
                                var b = (l = D(m, {
                                    style: {
                                        color: o.neutralColor20
                                    }
                                }, t.filterUserAttributes(l || {}))).style;
                                delete l.style
                            }
                            return C(p.element, g ? "mouseover" : "mouseenter", (function() {
                                3 !== f && p.setState(1)
                            })), C(p.element, g ? "mouseout" : "mouseleave", (function() {
                                3 !== f && p.setState(f)
                            })), p.setState = function(t) {
                                1 !== t && (p.state = f = t), p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), u || p.attr([m, a, h, l][t || 0]).css([y, v, x, b][t || 0])
                            }, u || p.attr(m).css(A({
                                cursor: "default"
                            }, y)), p.on("touchstart", (function(t) {
                                return t.stopPropagation()
                            })).on("click", (function(t) {
                                3 !== f && r.call(p, t)
                            }))
                        }, i.prototype.crispLine = function(t, e, i) {
                            void 0 === i && (i = "round");
                            var o = t[0],
                                s = t[1];
                            return M(o[1]) && o[1] === s[1] && (o[1] = s[1] = Math[i](o[1]) - e % 2 / 2), M(o[2]) && o[2] === s[2] && (o[2] = s[2] = Math[i](o[2]) + e % 2 / 2), t
                        }, i.prototype.path = function(t) {
                            var e = this.styledMode ? {} : {
                                fill: "none"
                            };
                            return P(t) ? e.d = t : L(t) && A(e, t), this.createElement("path").attr(e)
                        }, i.prototype.circle = function(t, e, i) {
                            return t = L(t) ? t : "undefined" === typeof t ? {} : {
                                x: t,
                                y: e,
                                r: i
                            }, (e = this.createElement("circle")).xSetter = e.ySetter = function(t, e, i) {
                                i.setAttribute("c" + e, t)
                            }, e.attr(t)
                        }, i.prototype.arc = function(t, e, i, o, s, r) {
                            return L(t) ? (e = (o = t).y, i = o.r, t = o.x) : o = {
                                innerR: o,
                                start: s,
                                end: r
                            }, (t = this.symbol("arc", t, e, i, i, o)).r = i, t
                        }, i.prototype.rect = function(t, e, i, o, s, r) {
                            s = L(t) ? t.r : s;
                            var n = this.createElement("rect");
                            return t = L(t) ? t : "undefined" === typeof t ? {} : {
                                x: t,
                                y: e,
                                width: Math.max(i, 0),
                                height: Math.max(o, 0)
                            }, this.styledMode || ("undefined" !== typeof r && (t["stroke-width"] = r, t = n.crisp(t)), t.fill = "none"), s && (t.r = s), n.rSetter = function(t, e, i) {
                                n.r = t, S(i, {
                                    rx: t,
                                    ry: t
                                })
                            }, n.rGetter = function() {
                                return n.r || 0
                            }, n.attr(t)
                        }, i.prototype.setSize = function(t, e, i) {
                            this.width = t, this.height = e, this.boxWrapper.animate({
                                width: t,
                                height: e
                            }, {
                                step: function() {
                                    this.attr({
                                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                    })
                                },
                                duration: j(i, !0) ? void 0 : 0
                            }), this.alignElements()
                        }, i.prototype.g = function(t) {
                            var e = this.createElement("g");
                            return t ? e.attr({
                                class: "highcharts-" + t
                            }) : e
                        }, i.prototype.image = function(t, e, i, o, s, r) {
                            var n = {
                                    preserveAspectRatio: "none"
                                },
                                a = function(t, e) {
                                    t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
                                };
                            1 < arguments.length && A(n, {
                                x: e,
                                y: i,
                                width: o,
                                height: s
                            });
                            var h = this.createElement("image").attr(n);
                            if (n = function(e) {
                                    a(h.element, t), r.call(h, e)
                                }, r) {
                                a(h.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                                var l = new b.Image;
                                C(l, "load", n), l.src = t, l.complete && n({})
                            } else a(h.element, t);
                            return h
                        }, i.prototype.symbol = function(t, e, i, o, s, r) {
                            var n, a = this,
                                h = /^url\((.*?)\)$/,
                                l = h.test(t),
                                c = !l && (this.symbols[t] ? t : "circle"),
                                p = c && this.symbols[c];
                            if (p) {
                                "number" === typeof e && (n = p.call(this.symbols, Math.round(e || 0), Math.round(i || 0), o || 0, s || 0, r));
                                var f = this.path(n);
                                a.styledMode || f.attr("fill", "none"), A(f, {
                                    symbolName: c || void 0,
                                    x: e,
                                    y: i,
                                    width: o,
                                    height: s
                                }), r && A(f, r)
                            } else if (l) {
                                var g = t.match(h)[1],
                                    m = f = this.image(g);
                                m.imgwidth = j(x[g] && x[g].width, r && r.width), m.imgheight = j(x[g] && x[g].height, r && r.height);
                                var y = function(t) {
                                    return t.attr({
                                        width: t.width,
                                        height: t.height
                                    })
                                };
                                ["width", "height"].forEach((function(t) {
                                    m[t + "Setter"] = function(t, e) {
                                        var i = this["img" + e];
                                        this[e] = t, M(i) && (r && "within" === r.backgroundSize && this.width && this.height && (i = Math.round(i * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(e, i), this.alignByTranslate || (t = ((this[e] || 0) - i) / 2, this.attr("width" === e ? {
                                            translateX: t
                                        } : {
                                            translateY: t
                                        })))
                                    }
                                })), M(e) && m.attr({
                                    x: e,
                                    y: i
                                }), m.isImg = !0, M(m.imgwidth) && M(m.imgheight) ? y(m) : (m.attr({
                                    width: 0,
                                    height: 0
                                }), k("img", {
                                    onload: function() {
                                        var t = d[a.chartIndex];
                                        0 === this.width && (w(this, {
                                            position: "absolute",
                                            top: "-999em"
                                        }), u.body.appendChild(this)), x[g] = {
                                            width: this.width,
                                            height: this.height
                                        }, m.imgwidth = this.width, m.imgheight = this.height, m.element && y(m), this.parentNode && this.parentNode.removeChild(this), a.imgCount--, a.imgCount || !t || t.hasLoaded || t.onload()
                                    },
                                    src: g
                                }), this.imgCount++)
                            }
                            return f
                        }, i.prototype.clipRect = function(t, e, i, o) {
                            var s = B() + "-",
                                r = this.createElement("clipPath").attr({
                                    id: s
                                }).add(this.defs);
                            return (t = this.rect(t, e, i, o, 0).add(r)).id = s, t.clipPath = r, t.count = 0, t
                        }, i.prototype.text = function(t, e, i, o) {
                            var s = {};
                            return !o || !this.allowHTML && this.forExport ? (s.x = Math.round(e || 0), i && (s.y = Math.round(i)), M(t) && (s.text = t), t = this.createElement("text").attr(s), (!o || this.forExport && !this.allowHTML) && (t.xSetter = function(t, e, i) {
                                for (var o, s = i.getElementsByTagName("tspan"), r = i.getAttribute(e), n = 0; n < s.length; n++)(o = s[n]).getAttribute(e) === r && o.setAttribute(e, t);
                                i.setAttribute(e, t)
                            }), t) : this.html(t, e, i)
                        }, i.prototype.fontMetrics = function(t, e) {
                            return t = !this.styledMode && /px/.test(t) || !b.getComputedStyle ? t || e && e.style && e.style.fontSize || this.style && this.style.fontSize : e && r.prototype.getStyle.call(e, "font-size"), {
                                h: e = 24 > (t = /px/.test(t) ? I(t) : 12) ? t + 3 : Math.round(1.2 * t),
                                b: Math.round(.8 * e),
                                f: t
                            }
                        }, i.prototype.rotCorr = function(t, e, i) {
                            var o = t;
                            return e && i && (o = Math.max(o * Math.cos(e * p), 4)), {
                                x: -t / 3 * Math.sin(e * p),
                                y: o
                            }
                        }, i.prototype.pathToSegments = function(t) {
                            for (var e = [], i = [], o = {
                                    A: 8,
                                    C: 7,
                                    H: 2,
                                    L: 3,
                                    M: 3,
                                    Q: 5,
                                    S: 5,
                                    T: 3,
                                    V: 2
                                }, s = 0; s < t.length; s++) E(i[0]) && O(t[s]) && i.length === o[i[0].toUpperCase()] && t.splice(s, 0, i[0].replace("M", "L").replace("m", "l")), "string" === typeof t[s] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[s]);
                            return e.push(i.slice(0)), e
                        }, i.prototype.label = function(t, e, i, o, s, r, a, h, l) {
                            return new n(this, t, e, i, o, s, r, a, h, l)
                        }, i.prototype.alignElements = function() {
                            this.alignedObjects.forEach((function(t) {
                                return t.align()
                            }))
                        }, i
                    }(), A(i.prototype, {
                        Element: r,
                        SVG_NS: v,
                        escapes: {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        },
                        symbols: a,
                        draw: y
                    }), s.registerRendererType("svg", i, !0), i
                })), e(i, "Core/Renderer/HTML/HTMLElement.js", [i["Core/Globals.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        s = t.isFirefox,
                        r = t.isMS,
                        n = t.isWebKit,
                        a = t.win,
                        h = i.css,
                        l = i.defined,
                        c = i.extend,
                        d = i.pick,
                        p = i.pInt;
                    return function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return o(e, t), e.compose = function(t) {
                            if (-1 === e.composedClasses.indexOf(t)) {
                                e.composedClasses.push(t);
                                var i = e.prototype,
                                    o = t.prototype;
                                o.getSpanCorrection = i.getSpanCorrection, o.htmlCss = i.htmlCss, o.htmlGetBBox = i.htmlGetBBox, o.htmlUpdateTransform = i.htmlUpdateTransform, o.setSpanRotation = i.setSpanRotation
                            }
                            return t
                        }, e.prototype.getSpanCorrection = function(t, e, i) {
                            this.xCorr = -t * i, this.yCorr = -e
                        }, e.prototype.htmlCss = function(t) {
                            var e = "SPAN" === this.element.tagName && t && "width" in t,
                                i = d(e && t.width, void 0);
                            if (e) {
                                delete t.width, this.textWidth = i;
                                var o = !0
                            }
                            return t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = c(this.styles, t), h(this.element, t), o && this.htmlUpdateTransform(), this
                        }, e.prototype.htmlGetBBox = function() {
                            var t = this.element;
                            return {
                                x: t.offsetLeft,
                                y: t.offsetTop,
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            }
                        }, e.prototype.htmlUpdateTransform = function() {
                            if (this.added) {
                                var t = this.renderer,
                                    e = this.element,
                                    i = this.translateX || 0,
                                    o = this.translateY || 0,
                                    s = this.x || 0,
                                    r = this.y || 0,
                                    n = this.textAlign || "left",
                                    a = {
                                        left: 0,
                                        center: .5,
                                        right: 1
                                    }[n],
                                    c = this.styles;
                                if (c = c && c.whiteSpace, h(e, {
                                        marginLeft: i,
                                        marginTop: o
                                    }), !t.styledMode && this.shadows && this.shadows.forEach((function(t) {
                                        h(t, {
                                            marginLeft: i + 1,
                                            marginTop: o + 1
                                        })
                                    })), this.inverted && [].forEach.call(e.childNodes, (function(i) {
                                        t.invertChild(i, e)
                                    })), "SPAN" === e.tagName) {
                                    var d = this.rotation,
                                        u = this.textWidth && p(this.textWidth),
                                        f = [d, n, e.innerHTML, this.textWidth, this.textAlign].join(),
                                        g = void 0;
                                    (g = u !== this.oldTextWidth) && !(g = u > this.oldTextWidth) && ((g = this.textPxLength) || (h(e, {
                                        width: "",
                                        whiteSpace: c || "nowrap"
                                    }), g = e.offsetWidth), g = g > u), g && (/[ \-]/.test(e.textContent || e.innerText) || "ellipsis" === e.style.textOverflow) ? (h(e, {
                                        width: u + "px",
                                        display: "block",
                                        whiteSpace: c || "normal"
                                    }), this.oldTextWidth = u, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, f !== this.cTT && (g = t.fontMetrics(e.style.fontSize, e).b, !l(d) || d === (this.oldRotation || 0) && n === this.oldAlign || this.setSpanRotation(d, a, g), this.getSpanCorrection(!l(d) && this.textPxLength || e.offsetWidth, g, a, d, n)), h(e, {
                                        left: s + (this.xCorr || 0) + "px",
                                        top: r + (this.yCorr || 0) + "px"
                                    }), this.cTT = f, this.oldRotation = d, this.oldAlign = n
                                }
                            } else this.alignOnAdd = !0
                        }, e.prototype.setSpanRotation = function(t, e, i) {
                            var o = {},
                                l = r && !/Edge/.test(a.navigator.userAgent) ? "-ms-transform" : n ? "-webkit-transform" : s ? "MozTransform" : a.opera ? "-o-transform" : void 0;
                            l && (o[l] = o.transform = "rotate(" + t + "deg)", o[l + (s ? "Origin" : "-origin")] = o.transformOrigin = 100 * e + "% " + i + "px", h(this.element, o))
                        }, e.composedClasses = [], e
                    }(e)
                })), e(i, "Core/Renderer/HTML/HTMLRenderer.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Renderer/SVG/SVGRenderer.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        r = o.attr,
                        n = o.createElement,
                        a = o.extend,
                        h = o.pick;
                    return function(i) {
                        function o() {
                            return null !== i && i.apply(this, arguments) || this
                        }
                        return s(o, i), o.compose = function(t) {
                            return -1 === o.composedClasses.indexOf(t) && (o.composedClasses.push(t), t.prototype.html = o.prototype.html), t
                        }, o.prototype.html = function(i, o, s) {
                            var l = this.createElement("span"),
                                c = l.element,
                                d = l.renderer,
                                p = d.isSVG,
                                u = function(t, i) {
                                    ["opacity", "visibility"].forEach((function(o) {
                                        t[o + "Setter"] = function(s, r, n) {
                                            var a = t.div ? t.div.style : i;
                                            e.prototype[o + "Setter"].call(this, s, r, n), a && (a[r] = s)
                                        }
                                    })), t.addedSetters = !0
                                };
                            return l.textSetter = function(e) {
                                e !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t.setElementHTML(this.element, h(e, "")), this.textStr = e, l.doTransform = !0)
                            }, p && u(l, l.element.style), l.xSetter = l.ySetter = l.alignSetter = l.rotationSetter = function(t, e) {
                                "align" === e ? l.alignValue = l.textAlign = t : l[e] = t, l.doTransform = !0
                            }, l.afterSetters = function() {
                                this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1)
                            }, l.attr({
                                text: i,
                                x: Math.round(o),
                                y: Math.round(s)
                            }).css({
                                position: "absolute"
                            }), d.styledMode || l.css({
                                fontFamily: this.style.fontFamily,
                                fontSize: this.style.fontSize
                            }), c.style.whiteSpace = "nowrap", l.css = l.htmlCss, p && (l.add = function(t) {
                                var e = d.box.parentNode,
                                    i = [];
                                if (this.parentGroup = t) {
                                    var o = t.div;
                                    if (!o) {
                                        for (; t;) i.push(t), t = t.parentGroup;
                                        i.reverse().forEach((function(t) {
                                            function s(e, i) {
                                                t[i] = e, "translateX" === i ? d.left = e + "px" : d.top = e + "px", t.doTransform = !0
                                            }
                                            var h = r(t.element, "class"),
                                                c = t.styles || {},
                                                d = (o = t.div = t.div || n("div", h ? {
                                                    className: h
                                                } : void 0, {
                                                    position: "absolute",
                                                    left: (t.translateX || 0) + "px",
                                                    top: (t.translateY || 0) + "px",
                                                    display: t.display,
                                                    opacity: t.opacity,
                                                    cursor: c.cursor,
                                                    pointerEvents: c.pointerEvents,
                                                    visibility: t.visibility
                                                }, o || e)).style;
                                            a(t, {
                                                classSetter: function(t) {
                                                    return function(e) {
                                                        this.element.setAttribute("class", e), t.className = e
                                                    }
                                                }(o),
                                                on: function() {
                                                    return i[0].div && l.on.apply({
                                                        element: i[0].div,
                                                        onEvents: t.onEvents
                                                    }, arguments), t
                                                },
                                                translateXSetter: s,
                                                translateYSetter: s
                                            }), t.addedSetters || u(t)
                                        }))
                                    }
                                } else o = e;
                                return o.appendChild(c), l.added = !0, l.alignOnAdd && l.htmlUpdateTransform(), l
                            }), l
                        }, o.composedClasses = [], o
                    }(i)
                })), e(i, "Core/Axis/AxisDefaults.js", [i["Core/Color/Palette.js"]], (function(t) {
                    var e;
                    return function(e) {
                        e.defaultXAxisOptions = {
                            alignTicks: !0,
                            allowDecimals: void 0,
                            panningEnabled: !0,
                            zIndex: 2,
                            zoomEnabled: !0,
                            dateTimeLabelFormats: {
                                millisecond: {
                                    main: "%H:%M:%S.%L",
                                    range: !1
                                },
                                second: {
                                    main: "%H:%M:%S",
                                    range: !1
                                },
                                minute: {
                                    main: "%H:%M",
                                    range: !1
                                },
                                hour: {
                                    main: "%H:%M",
                                    range: !1
                                },
                                day: {
                                    main: "%e. %b"
                                },
                                week: {
                                    main: "%e. %b"
                                },
                                month: {
                                    main: "%b '%y"
                                },
                                year: {
                                    main: "%Y"
                                }
                            },
                            endOnTick: !1,
                            gridLineDashStyle: "Solid",
                            gridZIndex: 1,
                            labels: {
                                autoRotation: void 0,
                                autoRotationLimit: 80,
                                distance: void 0,
                                enabled: !0,
                                indentation: 10,
                                overflow: "justify",
                                padding: 5,
                                reserveSpace: void 0,
                                rotation: void 0,
                                staggerLines: 0,
                                step: 0,
                                useHTML: !1,
                                x: 0,
                                zIndex: 7,
                                style: {
                                    color: t.neutralColor60,
                                    cursor: "default",
                                    fontSize: "11px"
                                }
                            },
                            maxPadding: .01,
                            minorGridLineDashStyle: "Solid",
                            minorTickLength: 2,
                            minorTickPosition: "outside",
                            minPadding: .01,
                            offset: void 0,
                            opposite: !1,
                            reversed: void 0,
                            reversedStacks: !1,
                            showEmpty: !0,
                            showFirstLabel: !0,
                            showLastLabel: !0,
                            startOfWeek: 1,
                            startOnTick: !1,
                            tickLength: 10,
                            tickPixelInterval: 100,
                            tickmarkPlacement: "between",
                            tickPosition: "outside",
                            title: {
                                align: "middle",
                                rotation: 0,
                                useHTML: !1,
                                x: 0,
                                y: 0,
                                style: {
                                    color: t.neutralColor60
                                }
                            },
                            type: "linear",
                            uniqueNames: !0,
                            visible: !0,
                            minorGridLineColor: t.neutralColor5,
                            minorGridLineWidth: 1,
                            minorTickColor: t.neutralColor40,
                            lineColor: t.highlightColor20,
                            lineWidth: 1,
                            gridLineColor: t.neutralColor10,
                            gridLineWidth: void 0,
                            tickColor: t.highlightColor20
                        }, e.defaultYAxisOptions = {
                            reversedStacks: !0,
                            endOnTick: !0,
                            maxPadding: .05,
                            minPadding: .05,
                            tickPixelInterval: 72,
                            showLastLabel: !0,
                            labels: {
                                x: -8
                            },
                            startOnTick: !0,
                            title: {
                                rotation: 270,
                                text: "Values"
                            },
                            stackLabels: {
                                animation: {},
                                allowOverlap: !1,
                                enabled: !1,
                                crop: !0,
                                overflow: "justify",
                                formatter: function() {
                                    return (0, this.axis.chart.numberFormatter)(this.total, -1)
                                },
                                style: {
                                    color: t.neutralColor100,
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    textOutline: "1px contrast"
                                }
                            },
                            gridLineWidth: 1,
                            lineWidth: 0
                        }, e.defaultLeftAxisOptions = {
                            labels: {
                                x: -15
                            },
                            title: {
                                rotation: 270
                            }
                        }, e.defaultRightAxisOptions = {
                            labels: {
                                x: 15
                            },
                            title: {
                                rotation: 90
                            }
                        }, e.defaultBottomAxisOptions = {
                            labels: {
                                autoRotation: [-45],
                                x: 0
                            },
                            margin: 15,
                            title: {
                                rotation: 0
                            }
                        }, e.defaultTopAxisOptions = {
                            labels: {
                                autoRotation: [-45],
                                x: 0
                            },
                            margin: 15,
                            title: {
                                rotation: 0
                            }
                        }
                    }(e || (e = {})), e
                })), e(i, "Core/Foundation.js", [i["Core/Utilities.js"]], (function(t) {
                    var e = t.addEvent,
                        i = t.isFunction,
                        o = t.objectEach,
                        s = t.removeEvent;
                    return {
                        registerEventOptions: function(t, r) {
                            t.eventOptions = t.eventOptions || {}, o(r.events, (function(o, r) {
                                t.eventOptions[r] !== o && (t.eventOptions[r] && (s(t, r, t.eventOptions[r]), delete t.eventOptions[r]), i(o) && (t.eventOptions[r] = o, e(t, r, o)))
                            }))
                        }
                    }
                })), e(i, "Core/Axis/Tick.js", [i["Core/FormatUtilities.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = e.deg2rad,
                        s = i.clamp,
                        r = i.correctFloat,
                        n = i.defined,
                        a = i.destroyObjectProperties,
                        h = i.extend,
                        l = i.fireEvent,
                        c = i.isNumber,
                        d = i.merge,
                        p = i.objectEach,
                        u = i.pick;
                    return e = function() {
                        function e(t, e, i, o, s) {
                            this.isNewLabel = this.isNew = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, l(this, "init"), i || o || this.addLabel()
                        }
                        return e.prototype.addLabel = function() {
                            var e = this,
                                i = e.axis,
                                o = i.options,
                                s = i.chart,
                                a = i.categories,
                                d = i.logarithmic,
                                p = i.names,
                                f = e.pos,
                                g = u(e.options && e.options.labels, o.labels),
                                m = i.tickPositions,
                                y = f === m[0],
                                v = f === m[m.length - 1],
                                x = (!g.step || 1 === g.step) && 1 === i.tickInterval;
                            m = m.info;
                            var b, C = e.label;
                            if (a = this.parameters.category || (a ? u(a[f], p[f], f) : f), d && c(a) && (a = r(d.lin2log(a))), i.dateTime)
                                if (m) var S = s.time.resolveDTLFormat(o.dateTimeLabelFormats[!o.grid && m.higherRanks[f] || m.unitName]),
                                    k = S.main;
                                else c(a) && (k = i.dateTime.getXDateFormat(a, o.dateTimeLabelFormats || {}));
                            e.isFirst = y, e.isLast = v;
                            var w = {
                                axis: i,
                                chart: s,
                                dateTimeLabelFormat: k,
                                isFirst: y,
                                isLast: v,
                                pos: f,
                                tick: e,
                                tickPositionInfo: m,
                                value: a
                            };
                            l(this, "labelFormat", w);
                            var M = function(e) {
                                return g.formatter ? g.formatter.call(e, e) : g.format ? (e.text = i.defaultLabelFormatter.call(e), t.format(g.format, e, s)) : i.defaultLabelFormatter.call(e, e)
                            };
                            o = M.call(w, w);
                            var T = S && S.list;
                            e.shortenLabel = T ? function() {
                                for (b = 0; b < T.length; b++)
                                    if (h(w, {
                                            dateTimeLabelFormat: T[b]
                                        }), C.attr({
                                            text: M.call(w, w)
                                        }), C.getBBox().width < i.getSlotWidth(e) - 2 * g.padding) return;
                                C.attr({
                                    text: ""
                                })
                            } : void 0, x && i._addedPlotLB && e.moveLabel(o, g), n(C) || e.movedLabel ? C && C.textStr !== o && !x && (!C.textWidth || g.style.width || C.styles.width || C.css({
                                width: null
                            }), C.attr({
                                text: o
                            }), C.textPxLength = C.getBBox().width) : (e.label = C = e.createLabel({
                                x: 0,
                                y: 0
                            }, o, g), e.rotation = 0)
                        }, e.prototype.createLabel = function(t, e, i) {
                            var o = this.axis,
                                s = o.chart;
                            return (t = n(e) && i.enabled ? s.renderer.text(e, t.x, t.y, i.useHTML).add(o.labelGroup) : null) && (s.styledMode || t.css(d(i.style)), t.textPxLength = t.getBBox().width), t
                        }, e.prototype.destroy = function() {
                            a(this, this.axis)
                        }, e.prototype.getPosition = function(t, e, i, o) {
                            var n = this.axis,
                                a = n.chart,
                                h = o && a.oldChartHeight || a.chartHeight;
                            return (t = {
                                x: t ? r(n.translate(e + i, null, null, o) + n.transB) : n.left + n.offset + (n.opposite ? (o && a.oldChartWidth || a.chartWidth) - n.right - n.left : 0),
                                y: t ? h - n.bottom + n.offset - (n.opposite ? n.height : 0) : r(h - n.translate(e + i, null, null, o) - n.transB)
                            }).y = s(t.y, -1e5, 1e5), l(this, "afterGetPosition", {
                                pos: t
                            }), t
                        }, e.prototype.getLabelPosition = function(t, e, i, s, r, a, h, c) {
                            var d = this.axis,
                                p = d.transA,
                                u = d.isLinked && d.linkedParent ? d.linkedParent.reversed : d.reversed,
                                f = d.staggerLines,
                                g = d.tickRotCorr || {
                                    x: 0,
                                    y: 0
                                },
                                m = s || d.reserveSpaceDefault ? 0 : -d.labelOffset * ("center" === d.labelAlign ? .5 : 1),
                                y = {},
                                v = r.y;
                            return n(v) || (v = 0 === d.side ? i.rotation ? -8 : -i.getBBox().height : 2 === d.side ? g.y + 8 : Math.cos(i.rotation * o) * (g.y - i.getBBox(!1, 0).height / 2)), t = t + r.x + m + g.x - (a && s ? a * p * (u ? -1 : 1) : 0), e = e + v - (a && !s ? a * p * (u ? 1 : -1) : 0), f && (i = h / (c || 1) % f, d.opposite && (i = f - i - 1), e += d.labelOffset / f * i), y.x = t, y.y = Math.round(e), l(this, "afterGetLabelPosition", {
                                pos: y,
                                tickmarkOffset: a,
                                index: h
                            }), y
                        }, e.prototype.getLabelSize = function() {
                            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                        }, e.prototype.getMarkPath = function(t, e, i, o, s, r) {
                            return r.crispLine([
                                ["M", t, e],
                                ["L", t + (s ? 0 : -i), e + (s ? i : 0)]
                            ], o)
                        }, e.prototype.handleOverflow = function(t) {
                            var e = this.axis,
                                i = e.options.labels,
                                s = t.x,
                                r = e.chart.chartWidth,
                                n = e.chart.spacing,
                                a = u(e.labelLeft, Math.min(e.pos, n[3]));
                            n = u(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, r - n[1]));
                            var h, l = this.label,
                                c = this.rotation,
                                d = {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                }[e.labelAlign || l.attr("align")],
                                p = l.getBBox().width,
                                f = e.getSlotWidth(this),
                                g = {},
                                m = f,
                                y = 1;
                            c || "justify" !== i.overflow ? 0 > c && s - d * p < a ? h = Math.round(s / Math.cos(c * o) - a) : 0 < c && s + d * p > n && (h = Math.round((r - s) / Math.cos(c * o))) : (r = s + (1 - d) * p, s - d * p < a ? m = t.x + m * (1 - d) - a : r > n && (m = n - t.x + m * d, y = -1), (m = Math.min(f, m)) < f && "center" === e.labelAlign && (t.x += y * (f - m - d * (f - Math.min(p, m)))), (p > m || e.autoRotation && (l.styles || {}).width) && (h = m)), h && (this.shortenLabel ? this.shortenLabel() : (g.width = Math.floor(h) + "px", (i.style || {}).textOverflow || (g.textOverflow = "ellipsis"), l.css(g)))
                        }, e.prototype.moveLabel = function(t, e) {
                            var i = this,
                                o = i.label,
                                s = i.axis,
                                r = s.reversed,
                                n = !1;
                            if (o && o.textStr === t ? (i.movedLabel = o, n = !0, delete i.label) : p(s.ticks, (function(e) {
                                    n || e.isNew || e === i || !e.label || e.label.textStr !== t || (i.movedLabel = e.label, n = !0, e.labelPos = i.movedLabel.xy, delete e.label)
                                })), !n && (i.labelPos || o)) {
                                var a = i.labelPos || o.xy;
                                o = s.horiz ? r ? 0 : s.width + s.left : a.x, s = s.horiz ? a.y : r ? s.width + s.left : 0, i.movedLabel = i.createLabel({
                                    x: o,
                                    y: s
                                }, t, e), i.movedLabel && i.movedLabel.attr({
                                    opacity: 0
                                })
                            }
                        }, e.prototype.render = function(t, e, i) {
                            var o = this.axis,
                                s = o.horiz,
                                r = this.pos,
                                n = u(this.tickmarkOffset, o.tickmarkOffset);
                            n = (r = this.getPosition(s, r, n, e)).x;
                            var a = r.y;
                            o = s && n === o.pos + o.len || !s && a === o.pos ? -1 : 1, s = u(i, this.label && this.label.newOpacity, 1), i = u(i, 1), this.isActive = !0, this.renderGridLine(e, i, o), this.renderMark(r, i, o), this.renderLabel(r, e, s, t), this.isNew = !1, l(this, "afterRender")
                        }, e.prototype.renderGridLine = function(t, e, i) {
                            var o = this.axis,
                                s = o.options,
                                r = {},
                                n = this.pos,
                                a = this.type,
                                h = u(this.tickmarkOffset, o.tickmarkOffset),
                                l = o.chart.renderer,
                                c = this.gridLine,
                                d = s.gridLineWidth,
                                p = s.gridLineColor,
                                f = s.gridLineDashStyle;
                            "minor" === this.type && (d = s.minorGridLineWidth, p = s.minorGridLineColor, f = s.minorGridLineDashStyle), c || (o.chart.styledMode || (r.stroke = p, r["stroke-width"] = d || 0, r.dashstyle = f), a || (r.zIndex = 1), t && (e = 0), this.gridLine = c = l.path().attr(r).addClass("highcharts-" + (a ? a + "-" : "") + "grid-line").add(o.gridGroup)), c && (i = o.getPlotLinePath({
                                value: n + h,
                                lineWidth: c.strokeWidth() * i,
                                force: "pass",
                                old: t
                            })) && c[t || this.isNew ? "attr" : "animate"]({
                                d: i,
                                opacity: e
                            })
                        }, e.prototype.renderMark = function(t, e, i) {
                            var o = this.axis,
                                s = o.options,
                                r = o.chart.renderer,
                                n = this.type,
                                a = o.tickSize(n ? n + "Tick" : "tick"),
                                h = t.x;
                            t = t.y;
                            var l = u(s["minor" !== n ? "tickWidth" : "minorTickWidth"], !n && o.isXAxis ? 1 : 0);
                            s = s["minor" !== n ? "tickColor" : "minorTickColor"];
                            var c = this.mark,
                                d = !c;
                            a && (o.opposite && (a[0] = -a[0]), c || (this.mark = c = r.path().addClass("highcharts-" + (n ? n + "-" : "") + "tick").add(o.axisGroup), o.chart.styledMode || c.attr({
                                stroke: s,
                                "stroke-width": l
                            })), c[d ? "attr" : "animate"]({
                                d: this.getMarkPath(h, t, a[0], c.strokeWidth() * i, o.horiz, r),
                                opacity: e
                            }))
                        }, e.prototype.renderLabel = function(t, e, i, o) {
                            var s = this.axis,
                                r = s.horiz,
                                n = s.options,
                                a = this.label,
                                h = n.labels,
                                l = h.step;
                            s = u(this.tickmarkOffset, s.tickmarkOffset);
                            var d = t.x;
                            t = t.y;
                            var p = !0;
                            a && c(d) && (a.xy = t = this.getLabelPosition(d, t, a, r, h, s, o, l), this.isFirst && !this.isLast && !n.showFirstLabel || this.isLast && !this.isFirst && !n.showLastLabel ? p = !1 : !r || h.step || h.rotation || e || 0 === i || this.handleOverflow(t), l && o % l && (p = !1), p && c(t.y) ? (t.opacity = i, a[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (a.attr("y", -9999), this.isNewLabel = !0))
                        }, e.prototype.replaceMovedLabel = function() {
                            var t = this.label,
                                e = this.axis,
                                i = e.reversed;
                            if (t && !this.isNew) {
                                var o = e.horiz ? i ? e.left : e.width + e.left : t.xy.x;
                                i = e.horiz ? t.xy.y : i ? e.width + e.top : e.top, t.animate({
                                    x: o,
                                    y: i,
                                    opacity: 0
                                }, void 0, t.destroy), delete this.label
                            }
                            e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                        }, e
                    }()
                })), e(i, "Core/Axis/Axis.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/AxisDefaults.js"], i["Core/Color/Color.js"], i["Core/Color/Palette.js"], i["Core/DefaultOptions.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Axis/Tick.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n, a, h) {
                    var l = t.animObject,
                        c = s.defaultOptions,
                        d = r.registerEventOptions,
                        p = n.deg2rad,
                        u = h.arrayMax,
                        f = h.arrayMin,
                        g = h.clamp,
                        m = h.correctFloat,
                        y = h.defined,
                        v = h.destroyObjectProperties,
                        x = h.erase,
                        b = h.error,
                        C = h.extend,
                        S = h.fireEvent,
                        k = h.getMagnitude,
                        w = h.isArray,
                        M = h.isNumber,
                        T = h.isString,
                        A = h.merge,
                        P = h.normalizeTickInterval,
                        O = h.objectEach,
                        L = h.pick,
                        E = h.relativeLength,
                        D = h.removeEvent,
                        j = h.splat,
                        I = h.syncTimeout;
                    return t = function() {
                        function t(t, e) {
                            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0, this.init(t, e)
                        }
                        return t.prototype.init = function(t, e) {
                            var i = e.isX;
                            this.chart = t, this.horiz = t.inverted && !this.isZAxis ? !i : i, this.isXAxis = i, this.coll = this.coll || (i ? "xAxis" : "yAxis"), S(this, "init", {
                                userOptions: e
                            }), this.opposite = L(e.opposite, this.opposite), this.side = L(e.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
                            var o = this.options,
                                s = o.labels,
                                r = o.type;
                            this.userOptions = e, this.minPixelPadding = 0, this.reversed = L(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = "category" === r || !0 === o.categories, this.categories = o.categories || this.hasNames, this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = y(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.min = this.max = null, e = L(o.crosshair, j(t.options.tooltip.crosshairs)[i ? 0 : 1]), this.crosshair = !0 === e ? {} : e, -1 === t.axes.indexOf(this) && (i ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), t[this.coll].push(this)), this.series = this.series || [], t.inverted && !this.isZAxis && i && "undefined" === typeof this.reversed && (this.reversed = !0), this.labelRotation = M(s.rotation) ? s.rotation : void 0, d(this, o), S(this, "afterInit")
                        }, t.prototype.setOptions = function(t) {
                            this.options = A(e.defaultXAxisOptions, "yAxis" === this.coll && e.defaultYAxisOptions, [e.defaultTopAxisOptions, e.defaultRightAxisOptions, e.defaultBottomAxisOptions, e.defaultLeftAxisOptions][this.side], A(c[this.coll], t)), S(this, "afterSetOptions", {
                                userOptions: t
                            })
                        }, t.prototype.defaultLabelFormatter = function(t) {
                            var e = this.axis;
                            t = this.chart.numberFormatter;
                            var i = M(this.value) ? this.value : NaN,
                                o = e.chart.time,
                                s = this.dateTimeLabelFormat,
                                r = c.lang,
                                n = r.numericSymbols;
                            r = r.numericSymbolMagnitude || 1e3;
                            var a = e.logarithmic ? Math.abs(i) : e.tickInterval,
                                h = n && n.length;
                            if (e.categories) var l = "" + this.value;
                            else if (s) l = o.dateFormat(s, i);
                            else if (h && 1e3 <= a)
                                for (; h-- && "undefined" === typeof l;) a >= (e = Math.pow(r, h + 1)) && 0 === 10 * i % e && null !== n[h] && 0 !== i && (l = t(i / e, -1) + n[h]);
                            return "undefined" === typeof l && (l = 1e4 <= Math.abs(i) ? t(i, -1) : t(i, -1, void 0, "")), l
                        }, t.prototype.getSeriesExtremes = function() {
                            var t, e = this,
                                i = e.chart;
                            S(this, "getSeriesExtremes", null, (function() {
                                e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = null, e.softThreshold = !e.isXAxis, e.stacking && e.stacking.buildStacks(), e.series.forEach((function(o) {
                                    if (o.visible || !i.options.chart.ignoreHiddenSeries) {
                                        var s = o.options,
                                            r = s.threshold;
                                        if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= r && (r = null), e.isXAxis) {
                                            if ((s = o.xData).length) {
                                                s = e.logarithmic ? s.filter(e.validatePositiveValue) : s;
                                                var n = (t = o.getXExtremes(s)).min,
                                                    a = t.max;
                                                M(n) || n instanceof Date || (s = s.filter(M), n = (t = o.getXExtremes(s)).min, a = t.max), s.length && (e.dataMin = Math.min(L(e.dataMin, n), n), e.dataMax = Math.max(L(e.dataMax, a), a))
                                            }
                                        } else o = o.applyExtremes(), M(o.dataMin) && (n = o.dataMin, e.dataMin = Math.min(L(e.dataMin, n), n)), M(o.dataMax) && (a = o.dataMax, e.dataMax = Math.max(L(e.dataMax, a), a)), y(r) && (e.threshold = r), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
                                    }
                                }))
                            })), S(this, "afterGetSeriesExtremes")
                        }, t.prototype.translate = function(t, e, i, o, s, r) {
                            var n = this.linkedParent || this,
                                a = o && n.old ? n.old.min : n.min,
                                h = n.minPixelPadding;
                            s = (n.isOrdinal || n.brokenAxis && n.brokenAxis.hasBreaks || n.logarithmic && s) && n.lin2val;
                            var l = 1,
                                c = 0;
                            return (o = o && n.old ? n.old.transA : n.transA) || (o = n.transA), i && (l *= -1, c = n.len), n.reversed && (c -= (l *= -1) * (n.sector || n.len)), e ? (t = (t * l + c - h) / o + a, s && (t = n.lin2val(t))) : (s && (t = n.val2lin(t)), t = M(a) ? l * (t - a) * o + c + l * h + (M(r) ? o * r : 0) : void 0), t
                        }, t.prototype.toPixels = function(t, e) {
                            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                        }, t.prototype.toValue = function(t, e) {
                            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                        }, t.prototype.getPlotLinePath = function(t) {
                            function e(t, e, i) {
                                return ("pass" !== x && t < e || t > i) && (x ? t = g(t, e, i) : n = !0), t
                            }
                            var i, o, s, r, n, a = this,
                                h = a.chart,
                                l = a.left,
                                c = a.top,
                                d = t.old,
                                p = t.value,
                                u = t.lineWidth,
                                f = d && h.oldChartHeight || h.chartHeight,
                                m = d && h.oldChartWidth || h.chartWidth,
                                y = a.transB,
                                v = t.translatedValue,
                                x = t.force;
                            return t = {
                                value: p,
                                lineWidth: u,
                                old: d,
                                force: x,
                                acrossPanes: t.acrossPanes,
                                translatedValue: v
                            }, S(this, "getPlotLinePath", t, (function(t) {
                                v = L(v, a.translate(p, null, null, d)), v = g(v, -1e5, 1e5), i = s = Math.round(v + y), o = r = Math.round(f - v - y), M(v) ? a.horiz ? (o = c, r = f - a.bottom, i = s = e(i, l, l + a.width)) : (i = l, s = m - a.right, o = r = e(o, c, c + a.height)) : (n = !0, x = !1), t.path = n && !x ? null : h.renderer.crispLine([
                                    ["M", i, o],
                                    ["L", s, r]
                                ], u || 1)
                            })), t.path
                        }, t.prototype.getLinearTickPositions = function(t, e, i) {
                            var o = m(Math.floor(e / t) * t);
                            i = m(Math.ceil(i / t) * t);
                            var s, r = [];
                            if (m(o + t) === o && (s = 20), this.single) return [e];
                            for (e = o; e <= i && (r.push(e), (e = m(e + t, s)) !== n);) var n = e;
                            return r
                        }, t.prototype.getMinorTickInterval = function() {
                            var t = this.options;
                            return !0 === t.minorTicks ? L(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
                        }, t.prototype.getMinorTickPositions = function() {
                            var t = this.options,
                                e = this.tickPositions,
                                i = this.minorTickInterval,
                                o = this.pointRangePadding || 0,
                                s = this.min - o,
                                r = (o = this.max + o) - s,
                                n = [];
                            if (r && r / i < this.len / 3) {
                                var a = this.logarithmic;
                                if (a) this.paddedTicks.forEach((function(t, e, o) {
                                    e && n.push.apply(n, a.getLogTickPositions(i, o[e - 1], o[e], !0))
                                }));
                                else if (this.dateTime && "auto" === this.getMinorTickInterval()) n = n.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), s, o, t.startOfWeek));
                                else
                                    for (t = s + (e[0] - s) % i; t <= o && t !== n[0]; t += i) n.push(t)
                            }
                            return 0 !== n.length && this.trimTicks(n), n
                        }, t.prototype.adjustForMinRange = function() {
                            var t, e, i, o, s = this.options,
                                r = this.logarithmic,
                                n = this.min,
                                a = this.max,
                                h = 0;
                            if (this.isXAxis && "undefined" === typeof this.minRange && !r && (y(s.min) || y(s.max) ? this.minRange = null : (this.series.forEach((function(s) {
                                    if (i = s.xData, o = s.xIncrement ? 1 : i.length - 1, 1 < i.length)
                                        for (t = o; 0 < t; t--) e = i[t] - i[t - 1], (!h || e < h) && (h = e)
                                })), this.minRange = Math.min(5 * h, this.dataMax - this.dataMin))), a - n < this.minRange) {
                                var l = this.dataMax - this.dataMin >= this.minRange,
                                    c = this.minRange,
                                    d = (c - a + n) / 2;
                                d = [n - d, L(s.min, n - d)], l && (d[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin), a = [(n = u(d)) + c, L(s.max, n + c)], l && (a[2] = r ? r.log2lin(this.dataMax) : this.dataMax), (a = f(a)) - n < c && (d[0] = a - c, d[1] = L(s.min, a - c), n = u(d))
                            }
                            this.min = n, this.max = a
                        }, t.prototype.getClosest = function() {
                            var t;
                            return this.categories ? t = 1 : this.series.forEach((function(e) {
                                var i = e.closestPointRange,
                                    o = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                                !e.noSharedTooltip && y(i) && o && (t = y(t) ? Math.min(t, i) : i)
                            })), t
                        }, t.prototype.nameToX = function(t) {
                            var e = w(this.categories),
                                i = e ? this.categories : this.names,
                                o = t.options.x;
                            if (t.series.requireSorting = !1, y(o) || (o = this.options.uniqueNames ? e ? i.indexOf(t.name) : L(i.keys[t.name], -1) : t.series.autoIncrement()), -1 === o) {
                                if (!e) var s = i.length
                            } else s = o;
                            return "undefined" !== typeof s && (this.names[s] = t.name, this.names.keys[t.name] = s), s
                        }, t.prototype.updateNames = function() {
                            var t = this,
                                e = this.names;
                            0 < e.length && (Object.keys(e.keys).forEach((function(t) {
                                delete e.keys[t]
                            })), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((function(e) {
                                e.xIncrement = null, e.points && !e.isDirtyData || (t.max = Math.max(t.max, e.xData.length - 1), e.processData(), e.generatePoints()), e.data.forEach((function(i, o) {
                                    if (i && i.options && "undefined" !== typeof i.name) {
                                        var s = t.nameToX(i);
                                        "undefined" !== typeof s && s !== i.x && (i.x = s, e.xData[o] = s)
                                    }
                                }))
                            })))
                        }, t.prototype.setAxisTranslation = function() {
                            var t = this,
                                e = t.max - t.min,
                                i = t.linkedParent,
                                o = !!t.categories,
                                s = t.isXAxis,
                                r = t.axisPointRange || 0,
                                n = 0,
                                a = 0,
                                h = t.transA;
                            if (s || o || r) {
                                var l = t.getClosest();
                                i ? (n = i.minPointOffset, a = i.pointRangePadding) : t.series.forEach((function(e) {
                                    var i = o ? 1 : s ? L(e.options.pointRange, l, 0) : t.axisPointRange || 0,
                                        h = e.options.pointPlacement;
                                    r = Math.max(r, i), t.single && !o || (e = e.is("xrange") ? !s : s, n = Math.max(n, e && T(h) ? 0 : i / 2), a = Math.max(a, e && "on" === h ? 0 : i))
                                })), i = t.ordinal && t.ordinal.slope && l ? t.ordinal.slope / l : 1, t.minPointOffset = n *= i, t.pointRangePadding = a *= i, t.pointRange = Math.min(r, t.single && o ? 1 : e), s && (t.closestPointRange = l)
                            }
                            t.translationSlope = t.transA = h = t.staticScale || t.len / (e + a || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = h * n, S(this, "afterSetAxisTranslation")
                        }, t.prototype.minFromRange = function() {
                            return this.max - this.range
                        }, t.prototype.setTickInterval = function(t) {
                            var e = this,
                                i = e.chart,
                                o = e.logarithmic,
                                s = e.options,
                                r = e.isXAxis,
                                n = e.isLinked,
                                a = s.tickPixelInterval,
                                h = e.categories,
                                l = e.softThreshold,
                                c = s.maxPadding,
                                d = s.minPadding,
                                p = s.tickInterval,
                                u = M(e.threshold) ? e.threshold : null;
                            e.dateTime || h || n || this.getTickAmount();
                            var f = L(e.userMin, s.min),
                                g = L(e.userMax, s.max);
                            if (n) {
                                e.linkedParent = i[e.coll][s.linkedTo];
                                var v = e.linkedParent.getExtremes();
                                e.min = L(v.min, v.dataMin), e.max = L(v.max, v.dataMax), s.type !== e.linkedParent.options.type && b(11, 1, i)
                            } else {
                                if (l && y(u))
                                    if (e.dataMin >= u) v = u, d = 0;
                                    else if (e.dataMax <= u) {
                                    var x = u;
                                    c = 0
                                }
                                e.min = L(f, v, e.dataMin), e.max = L(g, x, e.dataMax)
                            }
                            o && (e.positiveValuesOnly && !t && 0 >= Math.min(e.min, L(e.dataMin, e.min)) && b(10, 1, i), e.min = m(o.log2lin(e.min), 16), e.max = m(o.log2lin(e.max), 16)), e.range && y(e.max) && (e.userMin = e.min = f = Math.max(e.dataMin, e.minFromRange()), e.userMax = g = e.max, e.range = null), S(e, "foundExtremes"), e.beforePadding && e.beforePadding(), e.adjustForMinRange(), !(h || e.axisPointRange || e.stacking && e.stacking.usePercentage || n) && y(e.min) && y(e.max) && (i = e.max - e.min) && (!y(f) && d && (e.min -= i * d), !y(g) && c && (e.max += i * c)), M(e.userMin) || (M(s.softMin) && s.softMin < e.min && (e.min = f = s.softMin), M(s.floor) && (e.min = Math.max(e.min, s.floor))), M(e.userMax) || (M(s.softMax) && s.softMax > e.max && (e.max = g = s.softMax), M(s.ceiling) && (e.max = Math.min(e.max, s.ceiling))), l && y(e.dataMin) && (u = u || 0, !y(f) && e.min < u && e.dataMin >= u ? e.min = e.options.minRange ? Math.min(u, e.max - e.minRange) : u : !y(g) && e.max > u && e.dataMax <= u && (e.max = e.options.minRange ? Math.max(u, e.min + e.minRange) : u)), M(e.min) && M(e.max) && !this.chart.polar && e.min > e.max && (y(e.options.min) ? e.max = e.min : y(e.options.max) && (e.min = e.max)), e.tickInterval = e.min === e.max || "undefined" === typeof e.min || "undefined" === typeof e.max ? 1 : n && e.linkedParent && !p && a === e.linkedParent.options.tickPixelInterval ? p = e.linkedParent.tickInterval : L(p, this.tickAmount ? (e.max - e.min) / Math.max(this.tickAmount - 1, 1) : void 0, h ? 1 : (e.max - e.min) * a / Math.max(e.len, a)), r && !t && (e.series.forEach((function(t) {
                                t.forceCrop = t.forceCropping && t.forceCropping(), t.processData(e.min !== (e.old && e.old.min) || e.max !== (e.old && e.old.max))
                            })), S(this, "postProcessData")), e.setAxisTranslation(), S(this, "initialAxisTranslation"), e.pointRange && !p && (e.tickInterval = Math.max(e.pointRange, e.tickInterval)), t = L(s.minTickInterval, e.dateTime && !e.series.some((function(t) {
                                return t.noSharedTooltip
                            })) ? e.closestPointRange : 0), !p && e.tickInterval < t && (e.tickInterval = t), e.dateTime || e.logarithmic || p || (e.tickInterval = P(e.tickInterval, void 0, k(e.tickInterval), L(s.allowDecimals, .5 > e.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount)), this.tickAmount || (e.tickInterval = e.unsquish()), this.setTickPositions()
                        }, t.prototype.setTickPositions = function() {
                            var t = this.options,
                                e = t.tickPositions,
                                i = this.getMinorTickInterval(),
                                o = this.hasVerticalPanning(),
                                s = "colorAxis" === this.coll,
                                r = (s || !o) && t.startOnTick;
                            o = (s || !o) && t.endOnTick, s = t.tickPositioner, this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i && this.tickInterval ? this.tickInterval / 5 : i, this.single = this.min === this.max && y(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== t.allowDecimals), this.tickPositions = i = e && e.slice(), !i && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? i = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (i = [this.min, this.max], b(19, !1, this.chart)), i.length > this.len && (i = [i[0], i.pop()])[0] === i[1] && (i.length = 1), this.tickPositions = i, s && (s = s.apply(this, [this.min, this.max]))) && (this.tickPositions = i = s), this.paddedTicks = i.slice(0), this.trimTicks(i, r, o), this.isLinked || (this.single && 2 > i.length && !this.categories && !this.series.some((function(t) {
                                return t.is("heatmap") && "between" === t.options.pointPlacement
                            })) && (this.min -= .5, this.max += .5), e || s || this.adjustTickAmount()), S(this, "afterSetTickPositions")
                        }, t.prototype.trimTicks = function(t, e, i) {
                            var o = t[0],
                                s = t[t.length - 1],
                                r = !this.isOrdinal && this.minPointOffset || 0;
                            if (S(this, "trimTicks"), !this.isLinked) {
                                if (e && -1 / 0 !== o) this.min = o;
                                else
                                    for (; this.min - r > t[0];) t.shift();
                                if (i) this.max = s;
                                else
                                    for (; this.max + r < t[t.length - 1];) t.pop();
                                0 === t.length && y(o) && !this.options.tickPositions && t.push((s + o) / 2)
                            }
                        }, t.prototype.alignToOthers = function() {
                            var t, e = {},
                                i = this.options;
                            return !1 !== this.chart.options.chart.alignTicks && i.alignTicks && !1 !== i.startOnTick && !1 !== i.endOnTick && !this.logarithmic && this.chart[this.coll].forEach((function(i) {
                                var o = i.options;
                                o = [i.horiz ? o.left : o.top, o.width, o.height, o.pane].join(), i.series.length && (e[o] ? t = !0 : e[o] = 1)
                            })), t
                        }, t.prototype.getTickAmount = function() {
                            var t = this.options,
                                e = t.tickPixelInterval,
                                i = t.tickAmount;
                            !y(t.tickInterval) && !i && this.len < e && !this.isRadial && !this.logarithmic && t.startOnTick && t.endOnTick && (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), 4 > i && (this.finalTickAmt = i, i = 5), this.tickAmount = i
                        }, t.prototype.adjustTickAmount = function() {
                            var t = this.options,
                                e = this.tickInterval,
                                i = this.tickPositions,
                                o = this.tickAmount,
                                s = this.finalTickAmt,
                                r = i && i.length,
                                n = L(this.threshold, this.softThreshold ? 0 : null);
                            if (this.hasData() && M(this.min) && M(this.max)) {
                                if (r < o) {
                                    for (; i.length < o;) i.length % 2 || this.min === n ? i.push(m(i[i.length - 1] + e)) : i.unshift(m(i[0] - e));
                                    this.transA *= (r - 1) / (o - 1), this.min = t.startOnTick ? i[0] : Math.min(this.min, i[0]), this.max = t.endOnTick ? i[i.length - 1] : Math.max(this.max, i[i.length - 1])
                                } else r > o && (this.tickInterval *= 2, this.setTickPositions());
                                if (y(s)) {
                                    for (e = t = i.length; e--;)(3 === s && 1 === e % 2 || 2 >= s && 0 < e && e < t - 1) && i.splice(e, 1);
                                    this.finalTickAmt = void 0
                                }
                            }
                        }, t.prototype.setScale = function() {
                            var t = !1,
                                e = !1;
                            this.series.forEach((function(i) {
                                t = t || i.isDirtyData || i.isDirty, e = e || i.xAxis && i.xAxis.isDirty || !1
                            })), this.setAxisSize();
                            var i = this.len !== (this.old && this.old.len);
                            i || t || e || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = i || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(), t && this.panningState && (this.panningState.isDirty = !0), S(this, "afterSetScale")
                        }, t.prototype.setExtremes = function(t, e, i, o, s) {
                            var r = this,
                                n = r.chart;
                            i = L(i, !0), r.series.forEach((function(t) {
                                delete t.kdTree
                            })), s = C(s, {
                                min: t,
                                max: e
                            }), S(r, "setExtremes", s, (function() {
                                r.userMin = t, r.userMax = e, r.eventArgs = s, i && n.redraw(o)
                            }))
                        }, t.prototype.zoom = function(t, e) {
                            var i = this,
                                o = this.dataMin,
                                s = this.dataMax,
                                r = this.options,
                                n = Math.min(o, L(r.min, o)),
                                a = Math.max(s, L(r.max, s));
                            return S(this, "zoom", t = {
                                newMin: t,
                                newMax: e
                            }, (function(t) {
                                var e = t.newMin,
                                    r = t.newMax;
                                e === i.min && r === i.max || (i.allowZoomOutside || (y(o) && (e < n && (e = n), e > a && (e = a)), y(s) && (r < n && (r = n), r > a && (r = a))), i.displayBtn = "undefined" !== typeof e || "undefined" !== typeof r, i.setExtremes(e, r, !1, void 0, {
                                    trigger: "zoom"
                                })), t.zoomed = !0
                            })), t.zoomed
                        }, t.prototype.setAxisSize = function() {
                            var t = this.chart,
                                e = this.options,
                                i = e.offsets || [0, 0, 0, 0],
                                o = this.horiz,
                                s = this.width = Math.round(E(L(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
                                r = this.height = Math.round(E(L(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
                                n = this.top = Math.round(E(L(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop));
                            e = this.left = Math.round(E(L(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)), this.bottom = t.chartHeight - r - n, this.right = t.chartWidth - s - e, this.len = Math.max(o ? s : r, 0), this.pos = o ? e : n
                        }, t.prototype.getExtremes = function() {
                            var t = this.logarithmic;
                            return {
                                min: t ? m(t.lin2log(this.min)) : this.min,
                                max: t ? m(t.lin2log(this.max)) : this.max,
                                dataMin: this.dataMin,
                                dataMax: this.dataMax,
                                userMin: this.userMin,
                                userMax: this.userMax
                            }
                        }, t.prototype.getThreshold = function(t) {
                            var e = this.logarithmic,
                                i = e ? e.lin2log(this.min) : this.min;
                            return e = e ? e.lin2log(this.max) : this.max, null === t || -1 / 0 === t ? t = i : 1 / 0 === t ? t = e : i > t ? t = i : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
                        }, t.prototype.autoLabelAlign = function(t) {
                            var e = (L(t, 0) - 90 * this.side + 720) % 360;
                            return S(this, "autoLabelAlign", t = {
                                align: "center"
                            }, (function(t) {
                                15 < e && 165 > e ? t.align = "right" : 195 < e && 345 > e && (t.align = "left")
                            })), t.align
                        }, t.prototype.tickSize = function(t) {
                            var e = this.options,
                                i = L(e["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0),
                                o = e["tick" === t ? "tickLength" : "minorTickLength"];
                            if (i && o) {
                                "inside" === e[t + "Position"] && (o = -o);
                                var s = [o, i]
                            }
                            return S(this, "afterTickSize", t = {
                                tickSize: s
                            }), t.tickSize
                        }, t.prototype.labelMetrics = function() {
                            var t = this.tickPositions && this.tickPositions[0] || 0;
                            return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
                        }, t.prototype.unsquish = function() {
                            var t, e, i = this.options.labels,
                                o = this.horiz,
                                s = this.tickInterval,
                                r = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s),
                                n = i.rotation,
                                a = this.labelMetrics(),
                                h = Math.max(this.max - this.min, 0),
                                l = function(t) {
                                    var e = t / (r || 1);
                                    return (e = 1 < e ? Math.ceil(e) : 1) * s > h && 1 / 0 !== t && 1 / 0 !== r && h && (e = Math.ceil(h / s)), m(e * s)
                                },
                                c = s,
                                d = Number.MAX_VALUE;
                            if (o) {
                                if (!i.staggerLines && !i.step)
                                    if (M(n)) var u = [n];
                                    else r < i.autoRotationLimit && (u = i.autoRotation);
                                u && u.forEach((function(i) {
                                    if (i === n || i && -90 <= i && 90 >= i) {
                                        var o = (e = l(Math.abs(a.h / Math.sin(p * i)))) + Math.abs(i / 360);
                                        o < d && (d = o, t = i, c = e)
                                    }
                                }))
                            } else i.step || (c = l(a.h));
                            return this.autoRotation = u, this.labelRotation = L(t, M(n) ? n : 0), c
                        }, t.prototype.getSlotWidth = function(t) {
                            var e = this.chart,
                                i = this.horiz,
                                o = this.options.labels,
                                s = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                                r = e.margin[3];
                            if (t && M(t.slotWidth)) return t.slotWidth;
                            if (i && 2 > o.step) return o.rotation ? 0 : (this.staggerLines || 1) * this.len / s;
                            if (!i) {
                                if (void 0 !== (t = o.style.width)) return parseInt(String(t), 10);
                                if (r) return r - e.spacing[3]
                            }
                            return .33 * e.chartWidth
                        }, t.prototype.renderUnsquish = function() {
                            var t = this.chart,
                                e = t.renderer,
                                i = this.tickPositions,
                                o = this.ticks,
                                s = this.options.labels,
                                r = s.style,
                                n = this.horiz,
                                a = this.getSlotWidth(),
                                h = Math.max(1, Math.round(a - 2 * s.padding)),
                                l = {},
                                c = this.labelMetrics(),
                                d = r.textOverflow,
                                p = 0;
                            if (T(s.rotation) || (l.rotation = s.rotation || 0), i.forEach((function(t) {
                                    (t = o[t]).movedLabel && t.replaceMovedLabel(), t && t.label && t.label.textPxLength > p && (p = t.label.textPxLength)
                                })), this.maxLabelLength = p, this.autoRotation) p > h && p > c.h ? l.rotation = this.labelRotation : this.labelRotation = 0;
                            else if (a) {
                                var u = h;
                                if (!d) {
                                    var f = "clip";
                                    for (h = i.length; !n && h--;) {
                                        var g = i[h];
                                        (g = o[g].label) && (g.styles && "ellipsis" === g.styles.textOverflow ? g.css({
                                            textOverflow: "clip"
                                        }) : g.textPxLength > a && g.css({
                                            width: a + "px"
                                        }), g.getBBox().height > this.len / i.length - (c.h - c.f) && (g.specificTextOverflow = "ellipsis"))
                                    }
                                }
                            }
                            l.rotation && (u = p > .5 * t.chartHeight ? .33 * t.chartHeight : p, d || (f = "ellipsis")), (this.labelAlign = s.align || this.autoLabelAlign(this.labelRotation)) && (l.align = this.labelAlign), i.forEach((function(t) {
                                var e = (t = o[t]) && t.label,
                                    i = r.width,
                                    s = {};
                                e && (e.attr(l), t.shortenLabel ? t.shortenLabel() : u && !i && "nowrap" !== r.whiteSpace && (u < e.textPxLength || "SPAN" === e.element.tagName) ? (s.width = u + "px", d || (s.textOverflow = e.specificTextOverflow || f), e.css(s)) : e.styles && e.styles.width && !s.width && !i && e.css({
                                    width: null
                                }), delete e.specificTextOverflow, t.rotation = l.rotation)
                            }), this), this.tickRotCorr = e.rotCorr(c.b, this.labelRotation || 0, 0 !== this.side)
                        }, t.prototype.hasData = function() {
                            return this.series.some((function(t) {
                                return t.hasData()
                            })) || this.options.showEmpty && y(this.min) && y(this.max)
                        }, t.prototype.addTitle = function(t) {
                            var e, i = this.chart.renderer,
                                o = this.horiz,
                                s = this.opposite,
                                r = this.options.title,
                                n = this.chart.styledMode;
                            this.axisTitle || ((e = r.textAlign) || (e = (o ? {
                                low: "left",
                                middle: "center",
                                high: "right"
                            } : {
                                low: s ? "right" : "left",
                                middle: "center",
                                high: s ? "left" : "right"
                            })[r.align]), this.axisTitle = i.text(r.text || "", 0, 0, r.useHTML).attr({
                                zIndex: 7,
                                rotation: r.rotation,
                                align: e
                            }).addClass("highcharts-axis-title"), n || this.axisTitle.css(A(r.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), n || r.style.width || this.isRadial || this.axisTitle.css({
                                width: this.len + "px"
                            }), this.axisTitle[t ? "show" : "hide"](t)
                        }, t.prototype.generateTick = function(t) {
                            var e = this.ticks;
                            e[t] ? e[t].addLabel() : e[t] = new a(this, t)
                        }, t.prototype.getOffset = function() {
                            var t = this,
                                e = this,
                                i = e.chart,
                                o = i.renderer,
                                s = e.options,
                                r = e.tickPositions,
                                n = e.ticks,
                                a = e.horiz,
                                h = e.side,
                                l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                                c = e.hasData(),
                                d = s.title,
                                p = s.labels,
                                u = i.axisOffset;
                            i = i.clipOffset;
                            var f, g = [-1, 1, 1, -1][h],
                                m = s.className,
                                v = e.axisParent,
                                x = 0,
                                b = 0,
                                C = 0;
                            if (e.showAxis = f = c || s.showEmpty, e.staggerLines = e.horiz && p.staggerLines || void 0, !e.axisGroup) {
                                var k = function(e, i, s) {
                                    return o.g(e).attr({
                                        zIndex: s
                                    }).addClass("highcharts-" + t.coll.toLowerCase() + i + " " + (t.isRadial ? "highcharts-radial-axis" + i + " " : "") + (m || "")).add(v)
                                };
                                e.gridGroup = k("grid", "-grid", s.gridZIndex), e.axisGroup = k("axis", "", s.zIndex), e.labelGroup = k("axis-labels", "-labels", p.zIndex)
                            }
                            if (c || e.isLinked ? (r.forEach((function(t) {
                                    e.generateTick(t)
                                })), e.renderUnsquish(), e.reserveSpaceDefault = 0 === h || 2 === h || {
                                    1: "left",
                                    3: "right"
                                }[h] === e.labelAlign, L(p.reserveSpace, "center" === e.labelAlign || null, e.reserveSpaceDefault) && r.forEach((function(t) {
                                    C = Math.max(n[t].getLabelSize(), C)
                                })), e.staggerLines && (C *= e.staggerLines), e.labelOffset = C * (e.opposite ? -1 : 1)) : O(n, (function(t, e) {
                                    t.destroy(), delete n[e]
                                })), d && d.text && !1 !== d.enabled && (e.addTitle(f), f && !1 !== d.reserveSpace)) {
                                e.titleOffset = x = e.axisTitle.getBBox()[a ? "height" : "width"];
                                var w = d.offset;
                                b = y(w) ? 0 : L(d.margin, a ? 5 : 10)
                            }
                            e.renderLine(), e.offset = g * L(s.offset, u[h] ? u[h] + (s.margin || 0) : 0), e.tickRotCorr = e.tickRotCorr || {
                                x: 0,
                                y: 0
                            }, d = 0 === h ? -e.labelMetrics().h : 2 === h ? e.tickRotCorr.y : 0, c = Math.abs(C) + b, C && (c = c - d + g * (a ? L(p.y, e.tickRotCorr.y + 8 * g) : p.x)), e.axisTitleMargin = L(w, c), e.getMaxLabelDimensions && (e.maxLabelDimensions = e.getMaxLabelDimensions(n, r)), a = this.tickSize("tick"), u[h] = Math.max(u[h], (e.axisTitleMargin || 0) + x + g * e.offset, c, r && r.length && a ? a[0] + g * e.offset : 0), s = s.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2), i[l] = Math.max(i[l], s), S(this, "afterGetOffset")
                        }, t.prototype.getLinePath = function(t) {
                            var e = this.chart,
                                i = this.opposite,
                                o = this.offset,
                                s = this.horiz,
                                r = this.left + (i ? this.width : 0) + o;
                            return o = e.chartHeight - this.bottom - (i ? this.height : 0) + o, i && (t *= -1), e.renderer.crispLine([
                                ["M", s ? this.left : r, s ? o : this.top],
                                ["L", s ? e.chartWidth - this.right : r, s ? o : e.chartHeight - this.bottom]
                            ], t)
                        }, t.prototype.renderLine = function() {
                            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                                stroke: this.options.lineColor,
                                "stroke-width": this.options.lineWidth,
                                zIndex: 7
                            }))
                        }, t.prototype.getTitlePosition = function() {
                            var t = this.horiz,
                                e = this.left,
                                i = this.top,
                                o = this.len,
                                s = this.options.title,
                                r = t ? e : i,
                                n = this.opposite,
                                a = this.offset,
                                h = s.x,
                                l = s.y,
                                c = this.axisTitle,
                                d = this.chart.renderer.fontMetrics(s.style.fontSize, c);
                            return c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0), o = {
                                low: r + (t ? 0 : o),
                                middle: r + o / 2,
                                high: r + (t ? o : 0)
                            }[s.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (n ? -1 : 1) * this.axisTitleMargin + [-c, c, d.f, -c][this.side], t = {
                                x: t ? o + h : e + (n ? this.width : 0) + a + h,
                                y: t ? e + l - (n ? this.height : 0) + a : o + l
                            }, S(this, "afterGetTitlePosition", {
                                titlePosition: t
                            }), t
                        }, t.prototype.renderMinorTick = function(t, e) {
                            var i = this.minorTicks;
                            i[t] || (i[t] = new a(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                        }, t.prototype.renderTick = function(t, e, i) {
                            var o = this.ticks;
                            (!this.isLinked || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (o[t] || (o[t] = new a(this, t)), i && o[t].isNew && o[t].render(e, !0, -1), o[t].render(e))
                        }, t.prototype.render = function() {
                            var t, e, i = this,
                                o = i.chart,
                                s = i.logarithmic,
                                r = i.options,
                                h = i.isLinked,
                                c = i.tickPositions,
                                d = i.axisTitle,
                                p = i.ticks,
                                u = i.minorTicks,
                                f = i.alternateBands,
                                g = r.stackLabels,
                                m = r.alternateGridColor,
                                y = i.tickmarkOffset,
                                v = i.axisLine,
                                x = i.showAxis,
                                b = l(o.renderer.globalAnimation);
                            if (i.labelEdge.length = 0, i.overlap = !1, [p, u, f].forEach((function(t) {
                                    O(t, (function(t) {
                                        t.isActive = !1
                                    }))
                                })), i.hasData() || h) {
                                var C = i.chart.hasRendered && i.old && M(i.old.min);
                                i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach((function(t) {
                                    i.renderMinorTick(t, C)
                                })), c.length && (c.forEach((function(t, e) {
                                    i.renderTick(t, e, C)
                                })), y && (0 === i.min || i.single) && (p[-1] || (p[-1] = new a(i, -1, null, !0)), p[-1].render(-1))), m && c.forEach((function(r, a) {
                                    e = "undefined" !== typeof c[a + 1] ? c[a + 1] + y : i.max - y, 0 === a % 2 && r < i.max && e <= i.max + (o.polar ? -y : y) && (f[r] || (f[r] = new n.PlotLineOrBand(i)), t = r + y, f[r].options = {
                                        from: s ? s.lin2log(t) : t,
                                        to: s ? s.lin2log(e) : e,
                                        color: m,
                                        className: "highcharts-alternate-grid"
                                    }, f[r].render(), f[r].isActive = !0)
                                })), i._addedPlotLB || (i._addedPlotLB = !0, (r.plotLines || []).concat(r.plotBands || []).forEach((function(t) {
                                    i.addPlotBandOrLine(t)
                                })))
                            }[p, u, f].forEach((function(t) {
                                var e = [],
                                    i = b.duration;
                                O(t, (function(t, i) {
                                    t.isActive || (t.render(i, !1, 0), t.isActive = !1, e.push(i))
                                })), I((function() {
                                    for (var i = e.length; i--;) t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]])
                                }), t !== f && o.hasRendered && i ? i : 0)
                            })), v && (v[v.isPlaced ? "animate" : "attr"]({
                                d: this.getLinePath(v.strokeWidth())
                            }), v.isPlaced = !0, v[x ? "show" : "hide"](x)), d && x && (r = i.getTitlePosition(), M(r.y) ? (d[d.isNew ? "attr" : "animate"](r), d.isNew = !1) : (d.attr("y", -9999), d.isNew = !0)), g && g.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = {
                                len: i.len,
                                max: i.max,
                                min: i.min,
                                transA: i.transA,
                                userMax: i.userMax,
                                userMin: i.userMin
                            }, i.isDirty = !1, S(this, "afterRender")
                        }, t.prototype.redraw = function() {
                            this.visible && (this.render(), this.plotLinesAndBands.forEach((function(t) {
                                t.render()
                            }))), this.series.forEach((function(t) {
                                t.isDirty = !0
                            }))
                        }, t.prototype.getKeepProps = function() {
                            return this.keepProps || t.keepProps
                        }, t.prototype.destroy = function(t) {
                            var e = this,
                                i = e.plotLinesAndBands,
                                o = this.eventOptions;
                            if (S(this, "destroy", {
                                    keepEvents: t
                                }), t || D(e), [e.ticks, e.minorTicks, e.alternateBands].forEach((function(t) {
                                    v(t)
                                })), i)
                                for (t = i.length; t--;) i[t].destroy();
                            for (var s in "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach((function(t) {
                                    e[t] && (e[t] = e[t].destroy())
                                })), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[s] = e.plotLinesAndBandsGroups[s].destroy();
                            O(e, (function(t, i) {
                                -1 === e.getKeepProps().indexOf(i) && delete e[i]
                            })), this.eventOptions = o
                        }, t.prototype.drawCrosshair = function(t, e) {
                            var s, r = this.crosshair,
                                n = L(r && r.snap, !0),
                                a = this.chart,
                                h = this.cross;
                            if (S(this, "drawCrosshair", {
                                    e: t,
                                    point: e
                                }), t || (t = this.cross && this.cross.e), r && !1 !== (y(e) || !n)) {
                                if (n ? y(e) && (s = L("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : s = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), y(s)) {
                                    var l = {
                                        value: e && (this.isXAxis ? e.x : L(e.stackY, e.y)),
                                        translatedValue: s
                                    };
                                    a.polar && C(l, {
                                        isCrosshair: !0,
                                        chartX: t && t.chartX,
                                        chartY: t && t.chartY,
                                        point: e
                                    }), l = this.getPlotLinePath(l) || null
                                }
                                if (!y(l)) return void this.hideCrosshair();
                                n = this.categories && !this.isRadial, h || (this.cross = h = a.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (n ? "category " : "thin ") + (r.className || "")).attr({
                                    zIndex: L(r.zIndex, 2)
                                }).add(), a.styledMode || (h.attr({
                                    stroke: r.color || (n ? i.parse(o.highlightColor20).setOpacity(.25).get() : o.neutralColor20),
                                    "stroke-width": L(r.width, 1)
                                }).css({
                                    "pointer-events": "none"
                                }), r.dashStyle && h.attr({
                                    dashstyle: r.dashStyle
                                }))), h.show().attr({
                                    d: l
                                }), n && !r.width && h.attr({
                                    "stroke-width": this.transA
                                }), this.cross.e = t
                            } else this.hideCrosshair();
                            S(this, "afterDrawCrosshair", {
                                e: t,
                                point: e
                            })
                        }, t.prototype.hideCrosshair = function() {
                            this.cross && this.cross.hide(), S(this, "afterHideCrosshair")
                        }, t.prototype.hasVerticalPanning = function() {
                            var t = this.chart.options.chart.panning;
                            return !!(t && t.enabled && /y/.test(t.type))
                        }, t.prototype.validatePositiveValue = function(t) {
                            return M(t) && 0 < t
                        }, t.prototype.update = function(t, e) {
                            var i = this.chart;
                            t = A(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, L(e, !0) && i.redraw()
                        }, t.prototype.remove = function(t) {
                            for (var e = this.chart, i = this.coll, o = this.series, s = o.length; s--;) o[s] && o[s].remove(!1);
                            x(e.axes, this), x(e[i], this), e[i].forEach((function(t, e) {
                                t.options.index = t.userOptions.index = e
                            })), this.destroy(), e.isDirtyBox = !0, L(t, !0) && e.redraw()
                        }, t.prototype.setTitle = function(t, e) {
                            this.update({
                                title: t
                            }, e)
                        }, t.prototype.setCategories = function(t, e) {
                            this.update({
                                categories: t
                            }, e)
                        }, t.defaultOptions = e.defaultXAxisOptions, t.keepProps = "extKey hcEvents names series userMax userMin".split(" "), t
                    }()
                })), e(i, "Core/Axis/DateTimeAxis.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.addEvent,
                        o = t.getMagnitude,
                        s = t.normalizeTickInterval,
                        r = t.timeUnits;
                    return function(t) {
                        function e() {
                            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                        }

                        function n(t) {
                            "datetime" !== t.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new h(this))
                        }
                        var a = [];
                        t.compose = function(t) {
                            return -1 === a.indexOf(t) && (a.push(t), t.keepProps.push("dateTime"), t.prototype.getTimeTicks = e, i(t, "init", n)), t
                        };
                        var h = function() {
                            function t(t) {
                                this.axis = t
                            }
                            return t.prototype.normalizeTimeTickInterval = function(t, e) {
                                var i = e || [
                                    ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                    ["second", [1, 2, 5, 10, 15, 30]],
                                    ["minute", [1, 2, 5, 10, 15, 30]],
                                    ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                    ["day", [1, 2]],
                                    ["week", [1, 2]],
                                    ["month", [1, 2, 3, 4, 6]],
                                    ["year", null]
                                ];
                                e = i[i.length - 1];
                                var n, a = r[e[0]],
                                    h = e[1];
                                for (n = 0; n < i.length && (e = i[n], a = r[e[0]], h = e[1], !(i[n + 1] && t <= (a * h[h.length - 1] + r[i[n + 1][0]]) / 2)); n++);
                                return a === r.year && t < 5 * a && (h = [1, 2, 5]), {
                                    unitRange: a,
                                    count: t = s(t / a, h, "year" === e[0] ? Math.max(o(t / a), 1) : 1),
                                    unitName: e[0]
                                }
                            }, t.prototype.getXDateFormat = function(t, e) {
                                var i = this.axis;
                                return i.closestPointRange ? i.chart.time.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) || e.year : e.day
                            }, t
                        }();
                        t.Additions = h
                    }(e || (e = {})), e
                })), e(i, "Core/Axis/LogarithmicAxis.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.addEvent,
                        o = t.getMagnitude,
                        s = t.normalizeTickInterval,
                        r = t.pick;
                    return function(t) {
                        function e(t) {
                            var e = this.logarithmic;
                            "logarithmic" !== t.userOptions.type ? this.logarithmic = void 0 : e || (this.logarithmic = new h(this))
                        }

                        function n() {
                            var t = this.logarithmic;
                            t && (this.lin2val = function(e) {
                                return t.lin2log(e)
                            }, this.val2lin = function(e) {
                                return t.log2lin(e)
                            })
                        }
                        var a = [];
                        t.compose = function(t) {
                            return -1 === a.indexOf(t) && (a.push(t), t.keepProps.push("logarithmic"), i(t, "init", e), i(t, "afterInit", n)), t
                        };
                        var h = function() {
                            function t(t) {
                                this.axis = t
                            }
                            return t.prototype.getLogTickPositions = function(t, e, i, n) {
                                var a = this.axis,
                                    h = a.len,
                                    l = a.options,
                                    c = [];
                                if (n || (this.minorAutoInterval = void 0), .5 <= t) t = Math.round(t), c = a.getLinearTickPositions(t, e, i);
                                else if (.08 <= t) {
                                    var d, p = Math.floor(e),
                                        u = l = void 0;
                                    for (h = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; p < i + 1 && !u; p++) {
                                        var f = h.length;
                                        for (d = 0; d < f && !u; d++) {
                                            var g = this.log2lin(this.lin2log(p) * h[d]);
                                            g > e && (!n || l <= i) && "undefined" !== typeof l && c.push(l), l > i && (u = !0), l = g
                                        }
                                    }
                                } else e = this.lin2log(e), i = this.lin2log(i), t = n ? a.getMinorTickInterval() : l.tickInterval, t = r("auto" === t ? null : t, this.minorAutoInterval, l.tickPixelInterval / (n ? 5 : 1) * (i - e) / ((n ? h / a.tickPositions.length : h) || 1)), t = s(t, void 0, o(t)), c = a.getLinearTickPositions(t, e, i).map(this.log2lin), n || (this.minorAutoInterval = t / 5);
                                return n || (a.tickInterval = t), c
                            }, t.prototype.lin2log = function(t) {
                                return Math.pow(10, t)
                            }, t.prototype.log2lin = function(t) {
                                return Math.log(t) / Math.LN10
                            }, t
                        }();
                        t.Additions = h
                    }(e || (e = {})), e
                })), e(i, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.erase,
                        o = t.extend,
                        s = t.isNumber;
                    return function(t) {
                        var e, r = [];
                        t.compose = function(t, i) {
                            return e || (e = t), -1 === r.indexOf(i) && (r.push(i), o(i.prototype, n.prototype)), i
                        };
                        var n = function() {
                            function t() {}
                            return t.prototype.getPlotBandPath = function(t, e, i) {
                                void 0 === i && (i = this.options);
                                var o = this.getPlotLinePath({
                                        value: e,
                                        force: !0,
                                        acrossPanes: i.acrossPanes
                                    }),
                                    r = [],
                                    n = this.horiz;
                                if (e = !s(this.min) || !s(this.max) || t < this.min && e < this.min || t > this.max && e > this.max, t = this.getPlotLinePath({
                                        value: t,
                                        force: !0,
                                        acrossPanes: i.acrossPanes
                                    }), i = 1, t && o) {
                                    if (e) {
                                        var a = t.toString() === o.toString();
                                        i = 0
                                    }
                                    for (e = 0; e < t.length; e += 2) {
                                        var h = t[e],
                                            l = t[e + 1],
                                            c = o[e],
                                            d = o[e + 1];
                                        "M" !== h[0] && "L" !== h[0] || "M" !== l[0] && "L" !== l[0] || "M" !== c[0] && "L" !== c[0] || "M" !== d[0] && "L" !== d[0] || (n && c[1] === h[1] ? (c[1] += i, d[1] += i) : n || c[2] !== h[2] || (c[2] += i, d[2] += i), r.push(["M", h[1], h[2]], ["L", l[1], l[2]], ["L", d[1], d[2]], ["L", c[1], c[2]], ["Z"])), r.isFlat = a
                                    }
                                }
                                return r
                            }, t.prototype.addPlotBand = function(t) {
                                return this.addPlotBandOrLine(t, "plotBands")
                            }, t.prototype.addPlotLine = function(t) {
                                return this.addPlotBandOrLine(t, "plotLines")
                            }, t.prototype.addPlotBandOrLine = function(t, i) {
                                var o = this,
                                    s = this.userOptions,
                                    r = new e(this, t);
                                if (this.visible && (r = r.render()), r) {
                                    if (this._addedPlotLB || (this._addedPlotLB = !0, (s.plotLines || []).concat(s.plotBands || []).forEach((function(t) {
                                            o.addPlotBandOrLine(t)
                                        }))), i) {
                                        var n = s[i] || [];
                                        n.push(t), s[i] = n
                                    }
                                    this.plotLinesAndBands.push(r)
                                }
                                return r
                            }, t.prototype.removePlotBandOrLine = function(t) {
                                var e = this.plotLinesAndBands,
                                    o = this.options,
                                    s = this.userOptions;
                                if (e) {
                                    for (var r = e.length; r--;) e[r].id === t && e[r].destroy();
                                    [o.plotLines || [], s.plotLines || [], o.plotBands || [], s.plotBands || []].forEach((function(e) {
                                        for (r = e.length; r--;)(e[r] || {}).id === t && i(e, e[r])
                                    }))
                                }
                            }, t.prototype.removePlotBand = function(t) {
                                this.removePlotBandOrLine(t)
                            }, t.prototype.removePlotLine = function(t) {
                                this.removePlotBandOrLine(t)
                            }, t
                        }()
                    }(e || (e = {})), e
                })), e(i, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [i["Core/Color/Palette.js"], i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = i.arrayMax,
                        s = i.arrayMin,
                        r = i.defined,
                        n = i.destroyObjectProperties,
                        a = i.erase,
                        h = i.fireEvent,
                        l = i.merge,
                        c = i.objectEach,
                        d = i.pick;
                    return i = function() {
                        function i(t, e) {
                            this.axis = t, e && (this.options = e, this.id = e.id)
                        }
                        return i.compose = function(t) {
                            return e.compose(i, t)
                        }, i.prototype.render = function() {
                            h(this, "render");
                            var e = this,
                                i = e.axis,
                                o = i.horiz,
                                s = i.logarithmic,
                                n = e.options,
                                a = n.color,
                                p = d(n.zIndex, 0),
                                u = n.events,
                                f = {},
                                g = i.chart.renderer,
                                m = n.label,
                                y = e.label,
                                v = n.to,
                                x = n.from,
                                b = n.value,
                                C = e.svgElem,
                                S = [],
                                k = r(x) && r(v);
                            S = r(b);
                            var w = !C,
                                M = {
                                    class: "highcharts-plot-" + (k ? "band " : "line ") + (n.className || "")
                                },
                                T = k ? "bands" : "lines";
                            if (s && (x = s.log2lin(x), v = s.log2lin(v), b = s.log2lin(b)), i.chart.styledMode || (S ? (M.stroke = a || t.neutralColor40, M["stroke-width"] = d(n.width, 1), n.dashStyle && (M.dashstyle = n.dashStyle)) : k && (M.fill = a || t.highlightColor10, n.borderWidth && (M.stroke = n.borderColor, M["stroke-width"] = n.borderWidth))), f.zIndex = p, T += "-" + p, (s = i.plotLinesAndBandsGroups[T]) || (i.plotLinesAndBandsGroups[T] = s = g.g("plot-" + T).attr(f).add()), w && (e.svgElem = C = g.path().attr(M).add(s)), S) S = i.getPlotLinePath({
                                value: b,
                                lineWidth: C.strokeWidth(),
                                acrossPanes: n.acrossPanes
                            });
                            else {
                                if (!k) return;
                                S = i.getPlotBandPath(x, v, n)
                            }
                            return !e.eventsAdded && u && (c(u, (function(t, i) {
                                C.on(i, (function(t) {
                                    u[i].apply(e, [t])
                                }))
                            })), e.eventsAdded = !0), (w || !C.d) && S && S.length ? C.attr({
                                d: S
                            }) : C && (S ? (C.show(!0), C.animate({
                                d: S
                            })) : C.d && (C.hide(), y && (e.label = y = y.destroy()))), m && (r(m.text) || r(m.formatter)) && S && S.length && 0 < i.width && 0 < i.height && !S.isFlat ? (m = l({
                                align: o && k && "center",
                                x: o ? !k && 4 : 10,
                                verticalAlign: !o && k && "middle",
                                y: o ? k ? 16 : 10 : k ? 6 : -4,
                                rotation: o && !k && 90
                            }, m), this.renderLabel(m, S, k, p)) : y && y.hide(), e
                        }, i.prototype.renderLabel = function(t, e, i, r) {
                            var n = this.axis,
                                a = n.chart.renderer,
                                h = this.label;
                            h || (this.label = h = a.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                                align: t.textAlign || t.align,
                                rotation: t.rotation,
                                class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""),
                                zIndex: r
                            }).add(), n.chart.styledMode || h.css(l({
                                textOverflow: "ellipsis"
                            }, t.style))), r = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], e = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], i = s(r), a = s(e), h.align(t, !1, {
                                x: i,
                                y: a,
                                width: o(r) - i,
                                height: o(e) - a
                            }), h.alignValue && "left" !== h.alignValue || h.css({
                                width: (90 === h.rotation ? n.height - (h.alignAttr.y - n.top) : n.width - (h.alignAttr.x - n.left)) + "px"
                            }), h.show(!0)
                        }, i.prototype.getLabelText = function(t) {
                            return r(t.formatter) ? t.formatter.call(this) : t.text
                        }, i.prototype.destroy = function() {
                            a(this.axis.plotLinesAndBands, this), delete this.axis, n(this)
                        }, i
                    }()
                })), e(i, "Core/Tooltip.js", [i["Core/FormatUtilities.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    var n = t.format,
                        a = e.doc,
                        h = o.distribute,
                        l = r.addEvent,
                        c = r.clamp,
                        d = r.css,
                        p = r.defined,
                        u = r.discardElement,
                        f = r.extend,
                        g = r.fireEvent,
                        m = r.isArray,
                        y = r.isNumber,
                        v = r.isString,
                        x = r.merge,
                        b = r.pick,
                        C = r.splat,
                        S = r.syncTimeout;
                    return t = function() {
                        function t(t, e) {
                            this.container = void 0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.now = {}, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e)
                        }
                        return t.prototype.applyFilter = function() {
                            var t = this.chart;
                            t.renderer.definition({
                                tagName: "filter",
                                attributes: {
                                    id: "drop-shadow-" + t.index,
                                    opacity: .5
                                },
                                children: [{
                                    tagName: "feGaussianBlur",
                                    attributes: { in: "SourceAlpha",
                                        stdDeviation: 1
                                    }
                                }, {
                                    tagName: "feOffset",
                                    attributes: {
                                        dx: 1,
                                        dy: 1
                                    }
                                }, {
                                    tagName: "feComponentTransfer",
                                    children: [{
                                        tagName: "feFuncA",
                                        attributes: {
                                            type: "linear",
                                            slope: .3
                                        }
                                    }]
                                }, {
                                    tagName: "feMerge",
                                    children: [{
                                        tagName: "feMergeNode"
                                    }, {
                                        tagName: "feMergeNode",
                                        attributes: { in: "SourceGraphic"
                                        }
                                    }]
                                }]
                            })
                        }, t.prototype.bodyFormatter = function(t) {
                            return t.map((function(t) {
                                var e = t.series.tooltipOptions;
                                return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "")
                            }))
                        }, t.prototype.cleanSplit = function(t) {
                            this.chart.series.forEach((function(e) {
                                var i = e && e.tt;
                                i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                            }))
                        }, t.prototype.defaultFormatter = function(t) {
                            var e = this.points || C(this),
                                i = [t.tooltipFooterHeaderFormatter(e[0])];
                            return (i = i.concat(t.bodyFormatter(e))).push(t.tooltipFooterHeaderFormatter(e[0], !0)), i
                        }, t.prototype.destroy = function() {
                            this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), u(this.container)), r.clearTimeout(this.hideTimer), r.clearTimeout(this.tooltipTimeout)
                        }, t.prototype.getAnchor = function(t, e) {
                            var i, o, s = this.chart,
                                r = s.pointer,
                                n = s.inverted,
                                a = s.plotTop,
                                h = s.plotLeft,
                                l = 0,
                                c = 0;
                            return t = C(t), this.followPointer && e ? ("undefined" === typeof e.chartX && (e = r.normalize(e)), r = [e.chartX - h, e.chartY - a]) : t[0].tooltipPos ? r = t[0].tooltipPos : (t.forEach((function(t) {
                                i = t.series.yAxis, o = t.series.xAxis, l += t.plotX || 0, c += t.plotLow ? (t.plotLow + (t.plotHigh || 0)) / 2 : t.plotY || 0, o && i && (n ? (l += a + s.plotHeight - o.len - o.pos, c += h + s.plotWidth - i.len - i.pos) : (l += o.pos - h, c += i.pos - a))
                            })), l /= t.length, c /= t.length, r = [n ? s.plotWidth - c : l, n ? s.plotHeight - l : c], this.shared && 1 < t.length && e && (n ? r[0] = e.chartX - h : r[1] = e.chartY - a)), r.map(Math.round)
                        }, t.prototype.getLabel = function() {
                            var t, i = this,
                                o = this.chart.styledMode,
                                r = this.options,
                                n = "tooltip" + (p(r.className) ? " " + r.className : ""),
                                a = r.style.pointerEvents || (!this.followPointer && r.stickOnContact ? "auto" : "none"),
                                h = function() {
                                    i.inContact = !0
                                },
                                c = function(t) {
                                    var e = i.chart.hoverSeries;
                                    i.inContact = i.shouldStickOnContact() && i.chart.pointer.inClass(t.relatedTarget, "highcharts-tooltip"), !i.inContact && e && e.onMouseOut && e.onMouseOut()
                                },
                                u = this.chart.renderer;
                            if (!this.label) {
                                if (this.outside) {
                                    var f = this.chart.options.chart.style,
                                        g = s.getRendererType();
                                    this.container = t = e.doc.createElement("div"), t.className = "highcharts-tooltip-container", d(t, {
                                        position: "absolute",
                                        top: "1px",
                                        pointerEvents: a,
                                        zIndex: Math.max(this.options.style.zIndex || 0, (f && f.zIndex || 0) + 3)
                                    }), l(t, "mouseenter", h), l(t, "mouseleave", c), e.doc.body.appendChild(t), this.renderer = u = new g(t, 0, 0, f, void 0, void 0, u.styledMode)
                                }
                                if (this.split ? this.label = u.g(n) : (this.label = u.label("", 0, 0, r.shape, void 0, void 0, r.useHTML, void 0, n).attr({
                                        padding: r.padding,
                                        r: r.borderRadius
                                    }), o || this.label.attr({
                                        fill: r.backgroundColor,
                                        "stroke-width": r.borderWidth
                                    }).css(r.style).css({
                                        pointerEvents: a
                                    }).shadow(r.shadow)), o && r.shadow && (this.applyFilter(), this.label.attr({
                                        filter: "url(#drop-shadow-" + this.chart.index + ")"
                                    })), i.outside && !i.split) {
                                    var m = this.label,
                                        y = m.xSetter,
                                        v = m.ySetter;
                                    m.xSetter = function(e) {
                                        y.call(m, i.distance), t.style.left = e + "px"
                                    }, m.ySetter = function(e) {
                                        v.call(m, i.distance), t.style.top = e + "px"
                                    }
                                }
                                this.label.on("mouseenter", h).on("mouseleave", c).attr({
                                    zIndex: 8
                                }).add()
                            }
                            return this.label
                        }, t.prototype.getPosition = function(t, e, i) {
                            var o, s = this.chart,
                                r = this.distance,
                                n = {},
                                h = s.inverted && i.h || 0,
                                l = this.outside,
                                c = l ? a.documentElement.clientWidth - 2 * r : s.chartWidth,
                                d = l ? Math.max(a.body.scrollHeight, a.documentElement.scrollHeight, a.body.offsetHeight, a.documentElement.offsetHeight, a.documentElement.clientHeight) : s.chartHeight,
                                p = s.pointer.getChartPosition(),
                                u = function(o) {
                                    var n = "x" === o;
                                    return [o, n ? c : d, n ? t : e].concat(l ? [n ? t * p.scaleX : e * p.scaleY, n ? p.left - r + (i.plotX + s.plotLeft) * p.scaleX : p.top - r + (i.plotY + s.plotTop) * p.scaleY, 0, n ? c : d] : [n ? t : e, n ? i.plotX + s.plotLeft : i.plotY + s.plotTop, n ? s.plotLeft : s.plotTop, n ? s.plotLeft + s.plotWidth : s.plotTop + s.plotHeight])
                                },
                                f = u("y"),
                                g = u("x"),
                                m = !this.followPointer && b(i.ttBelow, !s.inverted === !!i.negative),
                                y = function(t, e, i, o, s, a, c) {
                                    var d = l ? "y" === t ? r * p.scaleY : r * p.scaleX : r,
                                        u = (i - o) / 2,
                                        f = o < s - r,
                                        g = s + r + o < e,
                                        y = s - d - i + u;
                                    if (s = s + d - u, m && g) n[t] = s;
                                    else if (!m && f) n[t] = y;
                                    else if (f) n[t] = Math.min(c - o, 0 > y - h ? y : y - h);
                                    else {
                                        if (!g) return !1;
                                        n[t] = Math.max(a, s + h + i > e ? s : s + h)
                                    }
                                },
                                v = function(t, e, i, o, s) {
                                    var a;
                                    return s < r || s > e - r ? a = !1 : n[t] = s < i / 2 ? 1 : s > e - o / 2 ? e - o - 2 : s - i / 2, a
                                },
                                x = function(t) {
                                    var e = f;
                                    f = g, g = e, o = t
                                },
                                C = function() {
                                    !1 !== y.apply(0, f) ? !1 !== v.apply(0, g) || o || (x(!0), C()) : o ? n.x = n.y = 0 : (x(!0), C())
                                };
                            return (s.inverted || 1 < this.len) && x(), C(), n
                        }, t.prototype.hide = function(t) {
                            var e = this;
                            r.clearTimeout(this.hideTimer), t = b(t, this.options.hideDelay), this.isHidden || (this.hideTimer = S((function() {
                                e.getLabel().fadeOut(t ? void 0 : t), e.isHidden = !0
                            }), t))
                        }, t.prototype.init = function(t, e) {
                            this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                                x: 0,
                                y: 0
                            }, this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = b(e.outside, !(!t.scrollablePixelsX && !t.scrollablePixelsY))
                        }, t.prototype.shouldStickOnContact = function() {
                            return !(this.followPointer || !this.options.stickOnContact)
                        }, t.prototype.isStickyOnContact = function() {
                            return !(!this.shouldStickOnContact() || !this.inContact)
                        }, t.prototype.move = function(t, e, i, o) {
                            var s = this,
                                n = s.now,
                                a = !1 !== s.options.animation && !s.isHidden && (1 < Math.abs(t - n.x) || 1 < Math.abs(e - n.y)),
                                h = s.followPointer || 1 < s.len;
                            f(n, {
                                x: a ? (2 * n.x + t) / 3 : t,
                                y: a ? (n.y + e) / 2 : e,
                                anchorX: h ? void 0 : a ? (2 * n.anchorX + i) / 3 : i,
                                anchorY: h ? void 0 : a ? (n.anchorY + o) / 2 : o
                            }), s.getLabel().attr(n), s.drawTracker(), a && (r.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout((function() {
                                s && s.move(t, e, i, o)
                            }), 32))
                        }, t.prototype.refresh = function(t, e) {
                            var o = this.chart,
                                s = this.options,
                                n = C(t),
                                a = n[0],
                                h = [],
                                l = s.formatter || this.defaultFormatter,
                                c = this.shared,
                                d = o.styledMode,
                                p = {};
                            if (s.enabled) {
                                r.clearTimeout(this.hideTimer), this.followPointer = !this.split && a.series.tooltipOptions.followPointer;
                                var u = this.getAnchor(t, e),
                                    f = u[0],
                                    y = u[1];
                                if (!c || !m(t) && t.series && t.series.noSharedTooltip ? p = a.getLabelConfig() : (o.pointer.applyInactiveState(n), n.forEach((function(t) {
                                        t.setState("hover"), h.push(t.getLabelConfig())
                                    })), (p = {
                                        x: a.category,
                                        y: a.y
                                    }).points = h), this.len = h.length, t = l.call(p, this), l = a.series, this.distance = b(l.tooltipOptions.distance, 16), !1 === t) this.hide();
                                else {
                                    if (this.split) this.renderSplit(t, n);
                                    else {
                                        if (n = f, c = y, e && o.pointer.isDirectTouch && (n = e.chartX - o.plotLeft, c = e.chartY - o.plotTop), !o.polar && !1 !== l.options.clip && !l.shouldShowTooltip(n, c)) return void this.hide();
                                        e = this.getLabel(), s.style.width && !d || e.css({
                                            width: this.chart.spacingBox.width + "px"
                                        }), e.attr({
                                            text: t && t.join ? t.join("") : t
                                        }), e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + b(a.colorIndex, l.colorIndex)), d || e.attr({
                                            stroke: s.borderColor || a.color || l.color || i.neutralColor60
                                        }), this.updatePosition({
                                            plotX: f,
                                            plotY: y,
                                            negative: a.negative,
                                            ttBelow: a.ttBelow,
                                            h: u[2] || 0
                                        })
                                    }
                                    this.isHidden && this.label && this.label.attr({
                                        opacity: 1
                                    }).show(), this.isHidden = !1
                                }
                                g(this, "refresh")
                            }
                        }, t.prototype.renderSplit = function(t, e) {
                            function o(t, e, i, o, r) {
                                return void 0 === r && (r = !0), i ? (e = L ? 0 : I, t = c(t - o / 2, A.left, A.right - o - (s.outside ? E : 0))) : (e -= D, t = c(t = r ? t - o - w : t + w, r ? t : A.left, A.right)), {
                                    x: t,
                                    y: e
                                }
                            }
                            var s = this,
                                r = s.chart,
                                n = s.chart,
                                l = n.chartWidth,
                                d = n.chartHeight,
                                p = n.plotHeight,
                                u = n.plotLeft,
                                g = n.plotTop,
                                m = n.pointer,
                                y = n.scrollablePixelsY;
                            y = void 0 === y ? 0 : y;
                            var x = n.scrollablePixelsX,
                                C = n.scrollingContainer,
                                S = (C = void 0 === C ? {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                } : C).scrollLeft;
                            C = C.scrollTop;
                            var k = n.styledMode,
                                w = s.distance,
                                M = s.options,
                                T = s.options.positioner,
                                A = s.outside && "number" !== typeof x ? a.documentElement.getBoundingClientRect() : {
                                    left: S,
                                    right: S + l,
                                    top: C,
                                    bottom: C + d
                                },
                                P = s.getLabel(),
                                O = this.renderer || r.renderer,
                                L = !(!r.xAxis[0] || !r.xAxis[0].opposite),
                                E = (r = m.getChartPosition()).left;
                            r = r.top;
                            var D = g + C,
                                j = 0,
                                I = p - y;
                            v(t) && (t = [!1, t]), t = t.slice(0, e.length + 1).reduce((function(t, r, n) {
                                if (!1 !== r && "" !== r) {
                                    var a = (n = e[n - 1] || {
                                            isHeader: !0,
                                            plotX: e[0].plotX,
                                            plotY: p,
                                            series: {}
                                        }).isHeader,
                                        h = a ? s : n.series;
                                    r = r.toString();
                                    var l = h.tt,
                                        d = n.isHeader,
                                        f = n.series,
                                        m = "highcharts-color-" + b(n.colorIndex, f.colorIndex, "none");
                                    if (l || (l = {
                                            padding: M.padding,
                                            r: M.borderRadius
                                        }, k || (l.fill = M.backgroundColor, l["stroke-width"] = M.borderWidth), l = O.label("", 0, 0, M[d ? "headerShape" : "shape"], void 0, void 0, M.useHTML).addClass((d ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + m).attr(l).add(P)), l.isActive = !0, l.attr({
                                            text: r
                                        }), k || l.css(M.style).shadow(M.shadow).attr({
                                            stroke: M.borderColor || n.color || f.color || i.neutralColor80
                                        }), r = (d = (h = h.tt = l).getBBox()).width + h.strokeWidth(), a && (j = d.height, I += j, L && (D -= j)), f = void 0 === (f = n.plotX) ? 0 : f, m = void 0 === (m = n.plotY) ? 0 : m, l = n.series, n.isHeader) {
                                        f = u + f;
                                        var y = g + p / 2
                                    } else {
                                        var v = l.xAxis,
                                            x = l.yAxis;
                                        f = v.pos + c(f, -w, v.len + w), l.shouldShowTooltip(0, x.pos - g + m, {
                                            ignoreX: !0
                                        }) && (y = x.pos + m)
                                    }
                                    f = c(f, A.left - w, A.right + w), "number" === typeof y ? (d = d.height + 1, m = T ? T.call(s, r, d, n) : o(f, y, a, r), t.push({
                                        align: T ? 0 : void 0,
                                        anchorX: f,
                                        anchorY: y,
                                        boxWidth: r,
                                        point: n,
                                        rank: b(m.rank, a ? 1 : 0),
                                        size: d,
                                        target: m.y,
                                        tt: h,
                                        x: m.x
                                    })) : h.isActive = !1
                                }
                                return t
                            }), []), !T && t.some((function(t) {
                                var e = (s.outside ? E : 0) + t.anchorX;
                                return e < A.left && e + t.boxWidth < A.right || e < E - A.left + t.boxWidth && A.right - e > e
                            })) && (t = t.map((function(t) {
                                var e = o(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
                                return f(t, {
                                    target: e.y,
                                    x: e.x
                                })
                            }))), s.cleanSplit(), h(t, I);
                            var B = E,
                                R = E;
                            t.forEach((function(t) {
                                var e = t.x,
                                    i = t.boxWidth;
                                (t = t.isHeader) || (s.outside && E + e < B && (B = E + e), !t && s.outside && B + i > R && (R = E + e))
                            })), t.forEach((function(t) {
                                var e = t.x,
                                    i = t.anchorX,
                                    o = t.pos,
                                    r = t.point.isHeader;
                                if (o = {
                                        visibility: "undefined" === typeof o ? "hidden" : "inherit",
                                        x: e,
                                        y: o + D,
                                        anchorX: i,
                                        anchorY: t.anchorY
                                    }, s.outside && e < i) {
                                    var n = E - B;
                                    0 < n && (r || (o.x = e + n, o.anchorX = i + n), r && (o.x = (R - B) / 2, o.anchorX = i + n))
                                }
                                t.tt.attr(o)
                            })), t = s.container, y = s.renderer, s.outside && t && y && (n = P.getBBox(), y.setSize(n.width + n.x, n.height + n.y, !1), t.style.left = B + "px", t.style.top = r + "px")
                        }, t.prototype.drawTracker = function() {
                            if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();
                            else {
                                var t = this.chart,
                                    e = this.label,
                                    i = this.shared ? t.hoverPoints : t.hoverPoint;
                                if (e && i) {
                                    var o = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    };
                                    i = this.getAnchor(i);
                                    var s = e.getBBox();
                                    i[0] += t.plotLeft - e.translateX, i[1] += t.plotTop - e.translateY, o.x = Math.min(0, i[0]), o.y = Math.min(0, i[1]), o.width = 0 > i[0] ? Math.max(Math.abs(i[0]), s.width - i[0]) : Math.max(Math.abs(i[0]), s.width), o.height = 0 > i[1] ? Math.max(Math.abs(i[1]), s.height - Math.abs(i[1])) : Math.max(Math.abs(i[1]), s.height), this.tracker ? this.tracker.attr(o) : (this.tracker = e.renderer.rect(o).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({
                                        fill: "rgba(0,0,0,0)"
                                    }))
                                }
                            }
                        }, t.prototype.styledModeFormat = function(t) {
                            return t.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"')
                        }, t.prototype.tooltipFooterHeaderFormatter = function(t, e) {
                            var i = t.series,
                                o = i.tooltipOptions,
                                s = i.xAxis,
                                r = s && s.dateTime;
                            s = {
                                isFooter: e,
                                labelConfig: t
                            };
                            var a = o.xDateFormat,
                                h = o[e ? "footerFormat" : "headerFormat"];
                            return g(this, "headerFormatter", s, (function(e) {
                                r && !a && y(t.key) && (a = r.getXDateFormat(t.key, o.dateTimeLabelFormats)), r && a && (t.point && t.point.tooltipDateKeys || ["key"]).forEach((function(t) {
                                    h = h.replace("{point." + t + "}", "{point." + t + ":" + a + "}")
                                })), i.chart.styledMode && (h = this.styledModeFormat(h)), e.text = n(h, {
                                    point: t,
                                    series: i
                                }, this.chart)
                            })), s.text
                        }, t.prototype.update = function(t) {
                            this.destroy(), x(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, x(!0, this.options, t))
                        }, t.prototype.updatePosition = function(t) {
                            var e = this.chart,
                                i = this.options,
                                o = e.pointer,
                                s = this.getLabel();
                            o = o.getChartPosition();
                            var r = (i.positioner || this.getPosition).call(this, s.width, s.height, t),
                                n = t.plotX + e.plotLeft;
                            t = t.plotY + e.plotTop, this.outside && (i = i.borderWidth + 2 * this.distance, this.renderer.setSize(s.width + i, s.height + i, !1), 1 === o.scaleX && 1 === o.scaleY || (d(this.container, {
                                transform: "scale(" + o.scaleX + ", " + o.scaleY + ")"
                            }), n *= o.scaleX, t *= o.scaleY), n += o.left - r.x, t += o.top - r.y), this.move(Math.round(r.x), Math.round(r.y || 0), n, t)
                        }, t
                    }()
                })), e(i, "Core/Series/Point.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Animation/AnimationUtilities.js"], i["Core/DefaultOptions.js"], i["Core/FormatUtilities.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s) {
                    var r = e.animObject,
                        n = i.defaultOptions,
                        a = o.format,
                        h = s.addEvent,
                        l = s.defined,
                        c = s.erase,
                        d = s.extend,
                        p = s.fireEvent,
                        u = s.getNestedProperty,
                        f = s.isArray,
                        g = s.isFunction,
                        m = s.isNumber,
                        y = s.isObject,
                        v = s.merge,
                        x = s.objectEach,
                        b = s.pick,
                        C = s.syncTimeout,
                        S = s.removeEvent,
                        k = s.uniqueKey;
                    return e = function() {
                        function e() {
                            this.colorIndex = this.category = void 0, this.formatPrefix = "point", this.id = void 0, this.isNull = !1, this.percentage = this.options = this.name = void 0, this.selected = !1, this.total = this.series = void 0, this.visible = !0, this.x = void 0
                        }
                        return e.prototype.animateBeforeDestroy = function() {
                            var t = this,
                                e = {
                                    x: t.startXPos,
                                    opacity: 0
                                },
                                i = t.getGraphicalProps();
                            i.singular.forEach((function(i) {
                                t[i] = t[i].animate("dataLabel" === i ? {
                                    x: t[i].startXPos,
                                    y: t[i].startYPos,
                                    opacity: 0
                                } : e)
                            })), i.plural.forEach((function(e) {
                                t[e].forEach((function(e) {
                                    e.element && e.animate(d({
                                        x: t.startXPos
                                    }, e.startYPos ? {
                                        x: e.startXPos,
                                        y: e.startYPos
                                    } : {}))
                                }))
                            }))
                        }, e.prototype.applyOptions = function(t, i) {
                            var o = this.series,
                                s = o.options.pointValKey || o.pointValKey;
                            return t = e.prototype.optionsToObject.call(this, t), d(this, t), this.options = this.options ? d(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = e.prototype.getNestedProperty.call(this, s)), this.formatPrefix = (this.isNull = b(this.isValid && !this.isValid(), null === this.x || !m(this.y))) ? "null" : "point", this.selected && (this.state = "select"), "name" in this && "undefined" === typeof i && o.xAxis && o.xAxis.hasNames && (this.x = o.xAxis.nameToX(this)), "undefined" === typeof this.x && o ? this.x = "undefined" === typeof i ? o.autoIncrement() : i : m(t.x) && o.options.relativeXValue && (this.x = o.autoIncrement(t.x)), this
                        }, e.prototype.destroy = function() {
                            function t() {
                                for (s in (e.graphic || e.dataLabel || e.dataLabels) && (S(e), e.destroyElements()), e) e[s] = null
                            }
                            var e = this,
                                i = e.series,
                                o = i.chart;
                            i = i.options.dataSorting;
                            var s, n = o.hoverPoints,
                                a = r(e.series.chart.renderer.globalAnimation);
                            e.legendItem && o.legend.destroyItem(e), n && (e.setState(), c(n, e), n.length || (o.hoverPoints = null)), e === o.hoverPoint && e.onMouseOut(), i && i.enabled ? (this.animateBeforeDestroy(), C(t, a.duration)) : t(), o.pointCount--
                        }, e.prototype.destroyElements = function(t) {
                            var e = this;
                            (t = e.getGraphicalProps(t)).singular.forEach((function(t) {
                                e[t] = e[t].destroy()
                            })), t.plural.forEach((function(t) {
                                e[t].forEach((function(t) {
                                    t.element && t.destroy()
                                })), delete e[t]
                            }))
                        }, e.prototype.firePointEvent = function(t, e, i) {
                            var o = this,
                                s = this.series.options;
                            (s.point.events[t] || o.options && o.options.events && o.options.events[t]) && o.importEvents(), "click" === t && s.allowPointSelect && (i = function(t) {
                                o.select && o.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                            }), p(o, t, e, i)
                        }, e.prototype.getClassName = function() {
                            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                        }, e.prototype.getGraphicalProps = function(t) {
                            var e, i = this,
                                o = [],
                                s = {
                                    singular: [],
                                    plural: []
                                };
                            for ((t = t || {
                                    graphic: 1,
                                    dataLabel: 1
                                }).graphic && o.push("graphic", "upperGraphic", "shadowGroup"), t.dataLabel && o.push("dataLabel", "dataLabelUpper", "connector"), e = o.length; e--;) {
                                var r = o[e];
                                i[r] && s.singular.push(r)
                            }
                            return ["dataLabel", "connector"].forEach((function(e) {
                                var o = e + "s";
                                t[e] && i[o] && s.plural.push(o)
                            })), s
                        }, e.prototype.getLabelConfig = function() {
                            return {
                                x: this.category,
                                y: this.y,
                                color: this.color,
                                colorIndex: this.colorIndex,
                                key: this.name || this.category,
                                series: this.series,
                                point: this,
                                percentage: this.percentage,
                                total: this.total || this.stackTotal
                            }
                        }, e.prototype.getNestedProperty = function(t) {
                            if (t) return 0 === t.indexOf("custom.") ? u(t, this.options) : this[t]
                        }, e.prototype.getZone = function() {
                            var t = this.series,
                                e = t.zones;
                            t = t.zoneAxis || "y";
                            var i, o = 0;
                            for (i = e[o]; this[t] >= i.value;) i = e[++o];
                            return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = i && i.color && !this.options.color ? i.color : this.nonZonedColor, i
                        }, e.prototype.hasNewShapeType = function() {
                            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                        }, e.prototype.init = function(t, e, i) {
                            return this.series = t, this.applyOptions(e, i), this.id = l(this.id) ? this.id : k(), this.resolveColor(), t.chart.pointCount++, p(this, "afterInit"), this
                        }, e.prototype.optionsToObject = function(t) {
                            var i = this.series,
                                o = i.options.keys,
                                s = o || i.pointArrayMap || ["y"],
                                r = s.length,
                                n = {},
                                a = 0,
                                h = 0;
                            if (m(t) || null === t) n[s[0]] = t;
                            else if (f(t))
                                for (!o && t.length > r && ("string" === (i = typeof t[0]) ? n.name = t[0] : "number" === i && (n.x = t[0]), a++); h < r;) o && "undefined" === typeof t[a] || (0 < s[h].indexOf(".") ? e.prototype.setNestedProperty(n, t[a], s[h]) : n[s[h]] = t[a]), a++, h++;
                            else "object" === typeof t && (n = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                            return n
                        }, e.prototype.resolveColor = function() {
                            var t = this.series,
                                e = t.chart.styledMode,
                                i = t.chart.options.chart.colorCount;
                            if (delete this.nonZonedColor, t.options.colorByPoint) {
                                if (!e) {
                                    var o = (i = t.options.colors || t.chart.options.colors)[t.colorCounter];
                                    i = i.length
                                }
                                e = t.colorCounter, t.colorCounter++, t.colorCounter === i && (t.colorCounter = 0)
                            } else e || (o = t.color), e = t.colorIndex;
                            this.colorIndex = b(this.options.colorIndex, e), this.color = b(this.options.color, o)
                        }, e.prototype.setNestedProperty = function(t, e, i) {
                            return i.split(".").reduce((function(t, i, o, s) {
                                return t[i] = s.length - 1 === o ? e : y(t[i], !0) ? t[i] : {}, t[i]
                            }), t), t
                        }, e.prototype.tooltipFormatter = function(t) {
                            var e = this.series,
                                i = e.tooltipOptions,
                                o = b(i.valueDecimals, ""),
                                s = i.valuePrefix || "",
                                r = i.valueSuffix || "";
                            return e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)), (e.pointArrayMap || ["y"]).forEach((function(e) {
                                e = "{point." + e, (s || r) && (t = t.replace(RegExp(e + "}", "g"), s + e + "}" + r)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + o + "f}")
                            })), a(t, {
                                point: this,
                                series: this.series
                            }, e.chart)
                        }, e.prototype.update = function(t, e, i, o) {
                            function s() {
                                n.applyOptions(t);
                                var o = h && n.hasDummyGraphic;
                                o = null === n.y ? !o : o, h && o && (n.graphic = h.destroy(), delete n.hasDummyGraphic), y(t, !0) && (h && h.element && t && t.marker && "undefined" !== typeof t.marker.symbol && (n.graphic = h.destroy()), t && t.dataLabels && n.dataLabel && (n.dataLabel = n.dataLabel.destroy()), n.connector && (n.connector = n.connector.destroy())), r = n.index, a.updateParallelArrays(n, r), c.data[r] = y(c.data[r], !0) || y(t, !0) ? n.options : b(t, c.data[r]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), "point" === c.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                            }
                            var r, n = this,
                                a = n.series,
                                h = n.graphic,
                                l = a.chart,
                                c = a.options;
                            e = b(e, !0), !1 === o ? s() : n.firePointEvent("update", {
                                options: t
                            }, s)
                        }, e.prototype.remove = function(t, e) {
                            this.series.removePoint(this.series.data.indexOf(this), t, e)
                        }, e.prototype.select = function(t, e) {
                            var i = this,
                                o = i.series,
                                s = o.chart;
                            this.selectedStaging = t = b(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                                accumulate: e
                            }, (function() {
                                i.selected = i.options.selected = t, o.options.data[o.data.indexOf(i)] = i.options, i.setState(t && "select"), e || s.getSelectedPoints().forEach((function(t) {
                                    var e = t.series;
                                    t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(s.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                                }))
                            })), delete this.selectedStaging
                        }, e.prototype.onMouseOver = function(t) {
                            var e = this.series.chart,
                                i = e.pointer;
                            t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                        }, e.prototype.onMouseOut = function() {
                            var t = this.series.chart;
                            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach((function(t) {
                                t.setState()
                            })), t.hoverPoints = t.hoverPoint = null
                        }, e.prototype.importEvents = function() {
                            if (!this.hasImportedEvents) {
                                var t = this,
                                    e = v(t.series.options.point, t.options).events;
                                t.events = e, x(e, (function(e, i) {
                                    g(e) && h(t, i, e)
                                })), this.hasImportedEvents = !0
                            }
                        }, e.prototype.setState = function(e, i) {
                            var o, s = this.series,
                                r = this.state,
                                a = s.options.states[e || "normal"] || {},
                                h = n.plotOptions[s.type].marker && s.options.marker,
                                l = h && !1 === h.enabled,
                                c = h && h.states && h.states[e || "normal"] || {},
                                u = !1 === c.enabled,
                                f = this.marker || {},
                                g = s.chart,
                                y = h && s.markerAttribs,
                                v = s.halo,
                                x = s.stateMarkerGraphic;
                            if (!((e = e || "") === this.state && !i || this.selected && "select" !== e || !1 === a.enabled || e && (u || l && !1 === c.enabled) || e && f.states && f.states[e] && !1 === f.states[e].enabled)) {
                                if (this.state = e, y && (o = s.markerAttribs(this, e)), this.graphic && !this.hasDummyGraphic) {
                                    if (r && this.graphic.removeClass("highcharts-point-" + r), e && this.graphic.addClass("highcharts-point-" + e), !g.styledMode) {
                                        var C = s.pointAttribs(this, e),
                                            S = b(g.options.chart.animation, a.animation);
                                        s.options.inactiveOtherPoints && m(C.opacity) && ((this.dataLabels || []).forEach((function(t) {
                                            t && t.animate({
                                                opacity: C.opacity
                                            }, S)
                                        })), this.connector && this.connector.animate({
                                            opacity: C.opacity
                                        }, S)), this.graphic.animate(C, S)
                                    }
                                    o && this.graphic.animate(o, b(g.options.chart.animation, c.animation, h.animation)), x && x.hide()
                                } else e && c && (r = f.symbol || s.symbol, x && x.currentSymbol !== r && (x = x.destroy()), o && (x ? x[i ? "animate" : "attr"]({
                                    x: o.x,
                                    y: o.y
                                }) : r && (s.stateMarkerGraphic = x = g.renderer.symbol(r, o.x, o.y, o.width, o.height).add(s.markerGroup), x.currentSymbol = r)), !g.styledMode && x && x.attr(s.pointAttribs(this, e))), x && (x[e && this.isInside ? "show" : "hide"](), x.element.point = this, x.addClass(this.getClassName(), !0));
                                a = a.halo, o = (x = this.graphic || x) && x.visibility || "inherit", a && a.size && x && "hidden" !== o && !this.isCluster ? (v || (s.halo = v = g.renderer.path().add(x.parentGroup)), v.show()[i ? "animate" : "attr"]({
                                    d: this.haloPath(a.size)
                                }), v.attr({
                                    class: "highcharts-halo highcharts-color-" + b(this.colorIndex, s.colorIndex) + (this.className ? " " + this.className : ""),
                                    visibility: o,
                                    zIndex: -1
                                }), v.point = this, g.styledMode || v.attr(d({
                                    fill: this.color || s.color,
                                    "fill-opacity": a.opacity
                                }, t.filterUserAttributes(a.attributes || {})))) : v && v.point && v.point.haloPath && v.animate({
                                    d: v.point.haloPath(0)
                                }, null, v.hide), p(this, "afterSetState", {
                                    state: e
                                })
                            }
                        }, e.prototype.haloPath = function(t) {
                            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                        }, e
                    }()
                })), e(i, "Core/Pointer.js", [i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Tooltip.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s) {
                    var r = t.parse,
                        n = e.charts,
                        a = e.noop,
                        h = s.addEvent,
                        l = s.attr,
                        c = s.css,
                        d = s.defined,
                        p = s.extend,
                        u = s.find,
                        f = s.fireEvent,
                        g = s.isNumber,
                        m = s.isObject,
                        y = s.objectEach,
                        v = s.offset,
                        x = s.pick,
                        b = s.splat;
                    return t = function() {
                        function t(t, e) {
                            this.lastValidTouch = {}, this.pinchDown = [], this.runChartClick = !1, this.eventsToUnbind = [], this.chart = t, this.hasDragged = !1, this.options = e, this.init(t, e)
                        }
                        return t.prototype.applyInactiveState = function(t) {
                            var e, i = [];
                            (t || []).forEach((function(t) {
                                e = t.series, i.push(e), e.linkedParent && i.push(e.linkedParent), e.linkedSeries && (i = i.concat(e.linkedSeries)), e.navigatorSeries && i.push(e.navigatorSeries)
                            })), this.chart.series.forEach((function(t) {
                                -1 === i.indexOf(t) ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
                            }))
                        }, t.prototype.destroy = function() {
                            var i = this;
                            this.eventsToUnbind.forEach((function(t) {
                                return t()
                            })), this.eventsToUnbind = [], e.chartCount || (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()), t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())), clearInterval(i.tooltipTimeout), y(i, (function(t, e) {
                                i[e] = void 0
                            }))
                        }, t.prototype.drag = function(t) {
                            var e = this.chart,
                                o = e.options.chart,
                                s = this.zoomHor,
                                n = this.zoomVert,
                                a = e.plotLeft,
                                h = e.plotTop,
                                l = e.plotWidth,
                                c = e.plotHeight,
                                d = this.mouseDownX || 0,
                                p = this.mouseDownY || 0,
                                u = m(o.panning) ? o.panning && o.panning.enabled : o.panning,
                                f = o.panKey && t[o.panKey + "Key"],
                                g = t.chartX,
                                y = t.chartY,
                                v = this.selectionMarker;
                            if ((!v || !v.touch) && (g < a ? g = a : g > a + l && (g = a + l), y < h ? y = h : y > h + c && (y = h + c), this.hasDragged = Math.sqrt(Math.pow(d - g, 2) + Math.pow(p - y, 2)), 10 < this.hasDragged)) {
                                var x = e.isInsidePlot(d - a, p - h, {
                                    visiblePlotOnly: !0
                                });
                                e.hasCartesianSeries && (this.zoomX || this.zoomY) && x && !f && !v && (this.selectionMarker = v = e.renderer.rect(a, h, s ? 1 : l, n ? 1 : c, 0).attr({
                                    class: "highcharts-selection-marker",
                                    zIndex: 7
                                }).add(), e.styledMode || v.attr({
                                    fill: o.selectionMarkerFill || r(i.highlightColor80).setOpacity(.25).get()
                                })), v && s && (s = g - d, v.attr({
                                    width: Math.abs(s),
                                    x: (0 < s ? 0 : s) + d
                                })), v && n && (s = y - p, v.attr({
                                    height: Math.abs(s),
                                    y: (0 < s ? 0 : s) + p
                                })), x && !v && u && e.pan(t, o.panning)
                            }
                        }, t.prototype.dragStart = function(t) {
                            var e = this.chart;
                            e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                        }, t.prototype.drop = function(t) {
                            var e = this,
                                i = this.chart,
                                o = this.hasPinched;
                            if (this.selectionMarker) {
                                var s, r = {
                                        originalEvent: t,
                                        xAxis: [],
                                        yAxis: []
                                    },
                                    n = this.selectionMarker,
                                    a = n.attr ? n.attr("x") : n.x,
                                    h = n.attr ? n.attr("y") : n.y,
                                    l = n.attr ? n.attr("width") : n.width,
                                    u = n.attr ? n.attr("height") : n.height;
                                (this.hasDragged || o) && (i.axes.forEach((function(i) {
                                    if (i.zoomEnabled && d(i.min) && (o || e[{
                                            xAxis: "zoomX",
                                            yAxis: "zoomY"
                                        }[i.coll]]) && g(a) && g(h)) {
                                        var n = i.horiz,
                                            c = "touchend" === t.type ? i.minPixelPadding : 0,
                                            p = i.toValue((n ? a : h) + c);
                                        n = i.toValue((n ? a + l : h + u) - c), r[i.coll].push({
                                            axis: i,
                                            min: Math.min(p, n),
                                            max: Math.max(p, n)
                                        }), s = !0
                                    }
                                })), s && f(i, "selection", r, (function(t) {
                                    i.zoom(p(t, o ? {
                                        animation: !1
                                    } : null))
                                }))), g(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), o && this.scaleGroups()
                            }
                            i && g(i.index) && (c(i.container, {
                                cursor: i._cursor
                            }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                        }, t.prototype.findNearestKDPoint = function(t, e, i) {
                            var o, s = this.chart,
                                r = s.hoverPoint;
                            return s = s.tooltip, r && s && s.isStickyOnContact() ? r : (t.forEach((function(t) {
                                var s = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                                if (t = t.searchPoint(i, s), (s = m(t, !0) && t.series) && !(s = !m(o, !0))) {
                                    s = o.distX - t.distX;
                                    var r = o.dist - t.dist,
                                        n = (t.series.group && t.series.group.zIndex) - (o.series.group && o.series.group.zIndex);
                                    s = 0 < (0 !== s && e ? s : 0 !== r ? r : 0 !== n ? n : o.series.index > t.series.index ? -1 : 1)
                                }
                                s && (o = t)
                            })), o)
                        }, t.prototype.getChartCoordinatesFromPoint = function(t, e) {
                            var i = t.series,
                                o = i.xAxis;
                            i = i.yAxis;
                            var s = t.shapeArgs;
                            if (o && i) {
                                var r = x(t.clientX, t.plotX),
                                    n = t.plotY || 0;
                                return t.isNode && s && g(s.x) && g(s.y) && (r = s.x, n = s.y), e ? {
                                    chartX: i.len + i.pos - n,
                                    chartY: o.len + o.pos - r
                                } : {
                                    chartX: r + o.pos,
                                    chartY: n + i.pos
                                }
                            }
                            if (s && s.x && s.y) return {
                                chartX: s.x,
                                chartY: s.y
                            }
                        }, t.prototype.getChartPosition = function() {
                            if (this.chartPosition) return this.chartPosition;
                            var t = this.chart.container,
                                e = v(t);
                            this.chartPosition = {
                                left: e.left,
                                top: e.top,
                                scaleX: 1,
                                scaleY: 1
                            };
                            var i = t.offsetWidth;
                            return t = t.offsetHeight, 2 < i && 2 < t && (this.chartPosition.scaleX = e.width / i, this.chartPosition.scaleY = e.height / t), this.chartPosition
                        }, t.prototype.getCoordinates = function(t) {
                            var e = {
                                xAxis: [],
                                yAxis: []
                            };
                            return this.chart.axes.forEach((function(i) {
                                e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                    axis: i,
                                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                                })
                            })), e
                        }, t.prototype.getHoverData = function(t, e, i, o, s, r) {
                            var n = [];
                            o = !(!o || !t);
                            var a = {
                                chartX: r ? r.chartX : void 0,
                                chartY: r ? r.chartY : void 0,
                                shared: s
                            };
                            f(this, "beforeGetHoverData", a);
                            var h = e && !e.stickyTracking ? [e] : i.filter((function(t) {
                                    return a.filter ? a.filter(t) : t.visible && !(!s && t.directTouch) && x(t.options.enableMouseTracking, !0) && t.stickyTracking
                                })),
                                l = o || !r ? t : this.findNearestKDPoint(h, s, r);
                            return e = l && l.series, l && (s && !e.noSharedTooltip ? (h = i.filter((function(t) {
                                return a.filter ? a.filter(t) : t.visible && !(!s && t.directTouch) && x(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                            }))).forEach((function(t) {
                                var e = u(t.points, (function(t) {
                                    return t.x === l.x && !t.isNull
                                }));
                                m(e) && (t.chart.isBoosting && (e = t.getPoint(e)), n.push(e))
                            })) : n.push(l)), f(this, "afterGetHoverData", a = {
                                hoverPoint: l
                            }), {
                                hoverPoint: a.hoverPoint,
                                hoverSeries: e,
                                hoverPoints: n
                            }
                        }, t.prototype.getPointFromEvent = function(t) {
                            t = t.target;
                            for (var e; t && !e;) e = t.point, t = t.parentNode;
                            return e
                        }, t.prototype.onTrackerMouseOut = function(t) {
                            t = t.relatedTarget || t.toElement;
                            var e = this.chart.hoverSeries;
                            this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                        }, t.prototype.inClass = function(t, e) {
                            for (var i; t;) {
                                if (i = l(t, "class")) {
                                    if (-1 !== i.indexOf(e)) return !0;
                                    if (-1 !== i.indexOf("highcharts-container")) return !1
                                }
                                t = t.parentNode
                            }
                        }, t.prototype.init = function(t, e) {
                            this.options = e, this.chart = t, this.runChartClick = !(!e.chart.events || !e.chart.events.click), this.pinchDown = [], this.lastValidTouch = {}, o && (t.tooltip = new o(t, e.tooltip), this.followTouchMove = x(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                        }, t.prototype.normalize = function(t, e) {
                            var i = t.touches,
                                o = i ? i.length ? i.item(0) : x(i.changedTouches, t.changedTouches)[0] : t;
                            return e || (e = this.getChartPosition()), i = o.pageX - e.left, o = o.pageY - e.top, i /= e.scaleX, o /= e.scaleY, p(t, {
                                chartX: Math.round(i),
                                chartY: Math.round(o)
                            })
                        }, t.prototype.onContainerClick = function(t) {
                            var e = this.chart,
                                i = e.hoverPoint;
                            t = this.normalize(t);
                            var o = e.plotLeft,
                                s = e.plotTop;
                            e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (f(i.series, "click", p(t, {
                                point: i
                            })), e.hoverPoint && i.firePointEvent("click", t)) : (p(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - o, t.chartY - s, {
                                visiblePlotOnly: !0
                            }) && f(e, "click", t)))
                        }, t.prototype.onContainerMouseDown = function(t) {
                            var i = 1 === (1 & (t.buttons || t.button));
                            t = this.normalize(t), e.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), ("undefined" === typeof t.button || i) && (this.zoomOption(t), i && t.preventDefault && t.preventDefault(), this.dragStart(t))
                        }, t.prototype.onContainerMouseLeave = function(e) {
                            var i = n[x(t.hoverChartIndex, -1)],
                                o = this.chart.tooltip;
                            o && o.shouldStickOnContact() && this.inClass(e.relatedTarget, "highcharts-tooltip-container") || (e = this.normalize(e), i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = void 0), o && !o.isHidden && this.reset())
                        }, t.prototype.onContainerMouseEnter = function(t) {
                            delete this.chartPosition
                        }, t.prototype.onContainerMouseMove = function(t) {
                            var e = this.chart;
                            t = this.normalize(t), this.setHoverChartIndex(), t.preventDefault || (t.returnValue = !1), ("mousedown" === e.mouseIsDown || this.touchSelect(t)) && this.drag(t), e.openMenu || !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop, {
                                visiblePlotOnly: !0
                            }) || (this.inClass(t.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(t))
                        }, t.prototype.onDocumentTouchEnd = function(e) {
                            var i = n[x(t.hoverChartIndex, -1)];
                            i && i.pointer.drop(e)
                        }, t.prototype.onContainerTouchMove = function(t) {
                            this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t)
                        }, t.prototype.onContainerTouchStart = function(t) {
                            this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0))
                        }, t.prototype.onDocumentMouseMove = function(t) {
                            var e = this.chart,
                                i = this.chartPosition;
                            t = this.normalize(t, i);
                            var o = e.tooltip;
                            !i || o && o.isStickyOnContact() || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop, {
                                visiblePlotOnly: !0
                            }) || this.inClass(t.target, "highcharts-tracker") || this.reset()
                        }, t.prototype.onDocumentMouseUp = function(e) {
                            var i = n[x(t.hoverChartIndex, -1)];
                            i && i.pointer.drop(e)
                        }, t.prototype.pinch = function(t) {
                            var e = this,
                                i = e.chart,
                                o = e.pinchDown,
                                s = t.touches || [],
                                r = s.length,
                                n = e.lastValidTouch,
                                h = e.hasZoom,
                                l = {},
                                c = 1 === r && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                                d = {},
                                u = e.selectionMarker;
                            1 < r ? e.initiated = !0 : 1 === r && this.followTouchMove && (e.initiated = !1), h && e.initiated && !c && !1 !== t.cancelable && t.preventDefault(), [].map.call(s, (function(t) {
                                return e.normalize(t)
                            })), "touchstart" === t.type ? ([].forEach.call(s, (function(t, e) {
                                o[e] = {
                                    chartX: t.chartX,
                                    chartY: t.chartY
                                }
                            })), n.x = [o[0].chartX, o[1] && o[1].chartX], n.y = [o[0].chartY, o[1] && o[1].chartY], i.axes.forEach((function(t) {
                                if (t.zoomEnabled) {
                                    var e = i.bounds[t.horiz ? "h" : "v"],
                                        o = t.minPixelPadding,
                                        s = t.toPixels(Math.min(x(t.options.min, t.dataMin), t.dataMin)),
                                        r = t.toPixels(Math.max(x(t.options.max, t.dataMax), t.dataMax)),
                                        n = Math.max(s, r);
                                    e.min = Math.min(t.pos, Math.min(s, r) - o), e.max = Math.max(t.pos + t.len, n + o)
                                }
                            })), e.res = !0) : e.followTouchMove && 1 === r ? this.runPointActions(e.normalize(t)) : o.length && (u || (e.selectionMarker = u = p({
                                destroy: a,
                                touch: !0
                            }, i.plotBox)), e.pinchTranslate(o, s, l, u, d, n), e.hasPinched = h, e.scaleGroups(l, d), e.res && (e.res = !1, this.reset(!1, 0)))
                        }, t.prototype.pinchTranslate = function(t, e, i, o, s, r) {
                            this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, o, s, r), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, o, s, r)
                        }, t.prototype.pinchTranslateDirection = function(t, e, i, o, s, r, n, a) {
                            var h = this.chart,
                                l = t ? "x" : "y",
                                c = t ? "X" : "Y",
                                d = "chart" + c,
                                p = t ? "width" : "height",
                                u = h["plot" + (t ? "Left" : "Top")],
                                f = h.inverted,
                                g = h.bounds[t ? "h" : "v"],
                                m = 1 === e.length,
                                y = e[0][d],
                                v = !m && e[1][d];
                            e = function() {
                                "number" === typeof k && 20 < Math.abs(y - v) && (C = a || Math.abs(S - k) / Math.abs(y - v)), b = (u - S) / C + y, x = h["plot" + (t ? "Width" : "Height")] / C
                            };
                            var x, b, C = a || 1,
                                S = i[0][d],
                                k = !m && i[1][d];
                            if (e(), (i = b) < g.min) {
                                i = g.min;
                                var w = !0
                            } else i + x > g.max && (i = g.max - x, w = !0);
                            w ? (S -= .8 * (S - n[l][0]), "number" === typeof k && (k -= .8 * (k - n[l][1])), e()) : n[l] = [S, k], f || (r[l] = b - u, r[p] = x), r = f ? 1 / C : C, s[p] = x, s[l] = i, o[f ? t ? "scaleY" : "scaleX" : "scale" + c] = C, o["translate" + c] = r * u + (S - r * y)
                        }, t.prototype.reset = function(t, e) {
                            var i = this.chart,
                                o = i.hoverSeries,
                                s = i.hoverPoint,
                                r = i.hoverPoints,
                                n = i.tooltip,
                                a = n && n.shared ? r : s;
                            t && a && b(a).forEach((function(e) {
                                e.series.isCartesian && "undefined" === typeof e.plotX && (t = !1)
                            })), t ? n && a && b(a).length && (n.refresh(a), n.shared && r ? r.forEach((function(t) {
                                t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                            })) : s && (s.setState(s.state, !0), i.axes.forEach((function(t) {
                                t.crosshair && s.series[t.coll] === t && t.drawCrosshair(null, s)
                            })))) : (s && s.onMouseOut(), r && r.forEach((function(t) {
                                t.setState()
                            })), o && o.onMouseOut(), n && n.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach((function(t) {
                                t.hideCrosshair()
                            })), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                        }, t.prototype.runPointActions = function(e, i) {
                            var o = this.chart,
                                s = o.tooltip && o.tooltip.options.enabled ? o.tooltip : void 0,
                                r = !!s && s.shared,
                                a = i || o.hoverPoint,
                                l = a && a.series || o.hoverSeries;
                            a = (i = this.getHoverData(a, l, o.series, (!e || "touchmove" !== e.type) && (!!i || l && l.directTouch && this.isDirectTouch), r, e)).hoverPoint, l = i.hoverSeries;
                            var c = i.hoverPoints;
                            if (i = l && l.tooltipOptions.followPointer && !l.tooltipOptions.split, r = r && l && !l.noSharedTooltip, a && (a !== o.hoverPoint || s && s.isHidden)) {
                                if ((o.hoverPoints || []).forEach((function(t) {
                                        -1 === c.indexOf(t) && t.setState()
                                    })), o.hoverSeries !== l && l.onMouseOver(), this.applyInactiveState(c), (c || []).forEach((function(t) {
                                        t.setState("hover")
                                    })), o.hoverPoint && o.hoverPoint.firePointEvent("mouseOut"), !a.series) return;
                                o.hoverPoints = c, o.hoverPoint = a, a.firePointEvent("mouseOver"), s && s.refresh(r ? c : a, e)
                            } else i && s && !s.isHidden && (a = s.getAnchor([{}], e), o.isInsidePlot(a[0], a[1], {
                                visiblePlotOnly: !0
                            }) && s.updatePosition({
                                plotX: a[0],
                                plotY: a[1]
                            }));
                            this.unDocMouseMove || (this.unDocMouseMove = h(o.container.ownerDocument, "mousemove", (function(e) {
                                var i = n[t.hoverChartIndex];
                                i && i.pointer.onDocumentMouseMove(e)
                            })), this.eventsToUnbind.push(this.unDocMouseMove)), o.axes.forEach((function(t) {
                                var i, s = x((t.crosshair || {}).snap, !0);
                                s && ((i = o.hoverPoint) && i.series[t.coll] === t || (i = u(c, (function(e) {
                                    return e.series[t.coll] === t
                                })))), i || !s ? t.drawCrosshair(e, i) : t.hideCrosshair()
                            }))
                        }, t.prototype.scaleGroups = function(t, e) {
                            var i = this.chart;
                            i.series.forEach((function(o) {
                                var s = t || o.getPlotBox();
                                o.xAxis && o.xAxis.zoomEnabled && o.group && (o.group.attr(s), o.markerGroup && (o.markerGroup.attr(s), o.markerGroup.clip(e ? i.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(s))
                            })), i.clipRect.attr(e || i.clipBox)
                        }, t.prototype.setDOMEvents = function() {
                            var i = this,
                                o = this.chart.container,
                                s = o.ownerDocument;
                            o.onmousedown = this.onContainerMouseDown.bind(this), o.onmousemove = this.onContainerMouseMove.bind(this), o.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(h(o, "mouseenter", this.onContainerMouseEnter.bind(this))), this.eventsToUnbind.push(h(o, "mouseleave", this.onContainerMouseLeave.bind(this))), t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = h(s, "mouseup", this.onDocumentMouseUp.bind(this)));
                            for (var r = this.chart.renderTo.parentElement; r && "BODY" !== r.tagName;) this.eventsToUnbind.push(h(r, "scroll", (function() {
                                delete i.chartPosition
                            }))), r = r.parentElement;
                            e.hasTouch && (this.eventsToUnbind.push(h(o, "touchstart", this.onContainerTouchStart.bind(this), {
                                passive: !1
                            })), this.eventsToUnbind.push(h(o, "touchmove", this.onContainerTouchMove.bind(this), {
                                passive: !1
                            })), t.unbindDocumentTouchEnd || (t.unbindDocumentTouchEnd = h(s, "touchend", this.onDocumentTouchEnd.bind(this), {
                                passive: !1
                            })))
                        }, t.prototype.setHoverChartIndex = function() {
                            var i = this.chart,
                                o = e.charts[x(t.hoverChartIndex, -1)];
                            o && o !== i && o.pointer.onContainerMouseLeave({
                                relatedTarget: !0
                            }), o && o.mouseIsDown || (t.hoverChartIndex = i.index)
                        }, t.prototype.touch = function(t, e) {
                            var i = this.chart;
                            if (this.setHoverChartIndex(), 1 === t.touches.length)
                                if (t = this.normalize(t), i.isInsidePlot(t.chartX - i.plotLeft, t.chartY - i.plotTop, {
                                        visiblePlotOnly: !0
                                    }) && !i.openMenu) {
                                    if (e && this.runPointActions(t), "touchmove" === t.type) var o = !!(e = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(e[0].chartX - t.chartX, 2) + Math.pow(e[0].chartY - t.chartY, 2));
                                    x(o, !0) && this.pinch(t)
                                } else e && this.reset();
                            else 2 === t.touches.length && this.pinch(t)
                        }, t.prototype.touchSelect = function(t) {
                            return !(!this.chart.options.chart.zoomBySingleTouch || !t.touches || 1 !== t.touches.length)
                        }, t.prototype.zoomOption = function(t) {
                            var e = this.chart,
                                i = e.options.chart;
                            e = e.inverted;
                            var o = i.zoomType || "";
                            /touch/.test(t.type) && (o = x(i.pinchType, o)), this.zoomX = t = /x/.test(o), this.zoomY = i = /y/.test(o), this.zoomHor = t && !e || i && e, this.zoomVert = i && !e || t && e, this.hasZoom = t || i
                        }, t
                    }()
                })), e(i, "Core/MSPointer.js", [i["Core/Globals.js"], i["Core/Pointer.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    function o() {
                        var t = [];
                        return t.item = function(t) {
                            return this[t]
                        }, p(f, (function(e) {
                            t.push({
                                pageX: e.pageX,
                                pageY: e.pageY,
                                target: e.target
                            })
                        })), t
                    }

                    function s(t, i, s, r) {
                        var a = n[e.hoverChartIndex || NaN];
                        "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !a || (a = a.pointer, r(t), a[i]({
                            type: s,
                            target: t.currentTarget,
                            preventDefault: h,
                            touches: o()
                        }))
                    }
                    var r = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        n = t.charts,
                        a = t.doc,
                        h = t.noop,
                        l = t.win,
                        c = i.addEvent,
                        d = i.css,
                        p = i.objectEach,
                        u = i.removeEvent,
                        f = {},
                        g = !!l.PointerEvent;
                    return function(e) {
                        function i() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return r(i, e), i.isRequired = function() {
                            return !(t.hasTouch || !l.PointerEvent && !l.MSPointerEvent)
                        }, i.prototype.batchMSEvents = function(t) {
                            t(this.chart.container, g ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, g ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(a, g ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                        }, i.prototype.destroy = function() {
                            this.batchMSEvents(u), e.prototype.destroy.call(this)
                        }, i.prototype.init = function(t, i) {
                            e.prototype.init.call(this, t, i), this.hasZoom && d(t.container, {
                                "-ms-touch-action": "none",
                                "touch-action": "none"
                            })
                        }, i.prototype.onContainerPointerDown = function(t) {
                            s(t, "onContainerTouchStart", "touchstart", (function(t) {
                                f[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY,
                                    target: t.currentTarget
                                }
                            }))
                        }, i.prototype.onContainerPointerMove = function(t) {
                            s(t, "onContainerTouchMove", "touchmove", (function(t) {
                                f[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                }, f[t.pointerId].target || (f[t.pointerId].target = t.currentTarget)
                            }))
                        }, i.prototype.onDocumentPointerUp = function(t) {
                            s(t, "onDocumentTouchEnd", "touchend", (function(t) {
                                delete f[t.pointerId]
                            }))
                        }, i.prototype.setDOMEvents = function() {
                            e.prototype.setDOMEvents.call(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(c)
                        }, i
                    }(e)
                })), e(i, "Core/Legend/Legend.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/FormatUtilities.js"], i["Core/Globals.js"], i["Core/Series/Point.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    var n = t.animObject,
                        a = t.setAnimation,
                        h = e.format;
                    t = i.isFirefox;
                    var l = i.marginNames;
                    i = i.win;
                    var c = s.distribute,
                        d = r.addEvent,
                        p = r.createElement,
                        u = r.css,
                        f = r.defined,
                        g = r.discardElement,
                        m = r.find,
                        y = r.fireEvent,
                        v = r.isNumber,
                        x = r.merge,
                        b = r.pick,
                        C = r.relativeLength,
                        S = r.stableSort,
                        k = r.syncTimeout;
                    return s = r.wrap, r = function() {
                        function t(t, e) {
                            this.allItems = [], this.contentGroup = this.box = void 0, this.display = !1, this.group = void 0, this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0, this.options = {}, this.padding = 0, this.pages = [], this.proximate = !1, this.scrollGroup = void 0, this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0, this.chart = t, this.init(t, e)
                        }
                        return t.prototype.init = function(t, e) {
                            this.chart = t, this.setOptions(e), e.enabled && (this.render(), d(this.chart, "endResize", (function() {
                                this.legend.positionCheckboxes()
                            })), this.proximate ? this.unchartrender = d(this.chart, "render", (function() {
                                this.legend.proximatePositions(), this.legend.positionItems()
                            })) : this.unchartrender && this.unchartrender())
                        }, t.prototype.setOptions = function(t) {
                            var e = b(t.padding, 8);
                            this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = x(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop || 0, this.itemMarginBottom = t.itemMarginBottom || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = b(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
                        }, t.prototype.update = function(t, e) {
                            var i = this.chart;
                            this.setOptions(x(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, b(e, !0) && i.redraw(), y(this, "afterUpdate")
                        }, t.prototype.colorizeItem = function(t, e) {
                            if (t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                                var i = this.options,
                                    o = t.legendItem,
                                    s = t.legendLine,
                                    r = t.legendSymbol,
                                    n = this.itemHiddenStyle.color;
                                i = e ? i.itemStyle.color : n;
                                var a = e && t.color || n,
                                    h = t.options && t.options.marker,
                                    l = {
                                        fill: a
                                    };
                                o && o.css({
                                    fill: i,
                                    color: i
                                }), s && s.attr({
                                    stroke: a
                                }), r && (h && r.isMarker && (l = t.pointAttribs(), e || (l.stroke = l.fill = n)), r.attr(l))
                            }
                            y(this, "afterColorizeItem", {
                                item: t,
                                visible: e
                            })
                        }, t.prototype.positionItems = function() {
                            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                        }, t.prototype.positionItem = function(t) {
                            var e = this,
                                i = this.options,
                                o = i.symbolPadding,
                                s = !i.rtl,
                                r = t._legendItemPos;
                            i = r[0], r = r[1];
                            var n = t.checkbox,
                                a = t.legendGroup;
                            a && a.element && (o = {
                                translateX: s ? i : this.legendWidth - i - 2 * o - 4,
                                translateY: r
                            }, s = function() {
                                y(e, "afterPositionItem", {
                                    item: t
                                })
                            }, f(a.translateY) ? a.animate(o, void 0, s) : (a.attr(o), s())), n && (n.x = i, n.y = r)
                        }, t.prototype.destroyItem = function(t) {
                            var e = t.checkbox;
                            ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach((function(e) {
                                t[e] && (t[e] = t[e].destroy())
                            })), e && g(t.checkbox)
                        }, t.prototype.destroy = function() {
                            function t(t) {
                                this[t] && (this[t] = this[t].destroy())
                            }
                            this.getAllItems().forEach((function(e) {
                                ["legendItem", "legendGroup"].forEach(t, e)
                            })), "clipRect up down pager nav box title group".split(" ").forEach(t, this), this.display = null
                        }, t.prototype.positionCheckboxes = function() {
                            var t = this.group && this.group.alignAttr,
                                e = this.clipHeight || this.legendHeight,
                                i = this.titleHeight;
                            if (t) {
                                var o = t.translateY;
                                this.allItems.forEach((function(s) {
                                    var r = s.checkbox;
                                    if (r) {
                                        var n = o + i + r.y + (this.scrollOffset || 0) + 3;
                                        u(r, {
                                            left: t.translateX + s.checkboxOffset + r.x - 20 + "px",
                                            top: n + "px",
                                            display: this.proximate || n > o - 6 && n < o + e - 6 ? "" : "none"
                                        })
                                    }
                                }), this)
                            }
                        }, t.prototype.renderTitle = function() {
                            var t = this.options,
                                e = this.padding,
                                i = t.title,
                                o = 0;
                            i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                                zIndex: 1
                            }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
                                width: this.maxLegendWidth + "px"
                            }), o = (t = this.title.getBBox()).height, this.offsetWidth = t.width, this.contentGroup.attr({
                                translateY: o
                            })), this.titleHeight = o
                        }, t.prototype.setText = function(t) {
                            var e = this.options;
                            t.legendItem.attr({
                                text: e.labelFormat ? h(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                            })
                        }, t.prototype.renderItem = function(t) {
                            var e = this.chart,
                                i = e.renderer,
                                o = this.options,
                                s = this.symbolWidth,
                                r = o.symbolPadding || 0,
                                n = this.itemStyle,
                                a = this.itemHiddenStyle,
                                h = "horizontal" === o.layout ? b(o.itemDistance, 20) : 0,
                                l = !o.rtl,
                                c = !t.series,
                                d = !c && t.series.drawLegendSymbol ? t.series : t,
                                p = d.options,
                                u = this.createCheckboxForItem && p && p.showCheckbox,
                                f = o.useHTML,
                                g = t.options.className,
                                m = t.legendItem;
                            p = s + r + h + (u ? 20 : 0), m || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + d.type + "-series highcharts-color-" + t.colorIndex + (g ? " " + g : "") + (c ? " highcharts-series-" + t.index : "")).attr({
                                zIndex: 1
                            }).add(this.scrollGroup), t.legendItem = m = i.text("", l ? s + r : -r, this.baseline || 0, f), e.styledMode || m.css(x(t.visible ? n : a)), m.attr({
                                align: l ? "left" : "right",
                                zIndex: 2
                            }).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(e.styledMode ? 12 : n.fontSize, m), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, m.attr("y", this.baseline), this.symbolHeight = o.symbolHeight || this.fontMetrics.f, o.squareSymbol && (this.symbolWidth = b(o.symbolWidth, Math.max(this.symbolHeight, 16)), p = this.symbolWidth + r + h + (u ? 20 : 0), l && m.attr("x", this.symbolWidth + r))), d.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, m, f)), u && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), !e.styledMode && n.width || m.css({
                                width: (o.itemWidth || this.widthOption || e.spacingBox.width) - p + "px"
                            }), this.setText(t), e = m.getBBox(), t.itemWidth = t.checkboxOffset = o.itemWidth || t.legendItemWidth || e.width + p, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
                        }, t.prototype.layoutItem = function(t) {
                            var e = this.options,
                                i = this.padding,
                                o = "horizontal" === e.layout,
                                s = t.itemHeight,
                                r = this.itemMarginBottom,
                                n = this.itemMarginTop,
                                a = o ? b(e.itemDistance, 20) : 0,
                                h = this.maxLegendWidth;
                            e = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth, o && this.itemX - i + e > h && (this.itemX = i, this.lastLineHeight && (this.itemY += n + this.lastLineHeight + r), this.lastLineHeight = 0), this.lastItemY = n + this.itemY + r, this.lastLineHeight = Math.max(s, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], o ? this.itemX += e : (this.itemY += n + s + r, this.lastLineHeight = s), this.offsetWidth = this.widthOption || Math.max((o ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth)
                        }, t.prototype.getAllItems = function() {
                            var t = [];
                            return this.chart.series.forEach((function(e) {
                                var i = e && e.options;
                                e && b(i.showInLegend, !f(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                            })), y(this, "afterGetAllItems", {
                                allItems: t
                            }), t
                        }, t.prototype.getAlignment = function() {
                            var t = this.options;
                            return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                        }, t.prototype.adjustMargins = function(t, e) {
                            var i = this.chart,
                                o = this.options,
                                s = this.getAlignment();
                            s && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((function(r, n) {
                                r.test(s) && !f(t[n]) && (i[l[n]] = Math.max(i[l[n]], i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n] * o[n % 2 ? "x" : "y"] + b(o.margin, 12) + e[n] + (i.titleOffset[n] || 0)))
                            }))
                        }, t.prototype.proximatePositions = function() {
                            var t = this.chart,
                                e = [],
                                i = "left" === this.options.align;
                            this.allItems.forEach((function(o) {
                                var s, r = i;
                                if (o.yAxis) {
                                    o.xAxis.options.reversed && (r = !r), o.points && (s = m(r ? o.points : o.points.slice(0).reverse(), (function(t) {
                                        return v(t.plotY)
                                    }))), r = this.itemMarginTop + o.legendItem.getBBox().height + this.itemMarginBottom;
                                    var n = o.yAxis.top - t.plotTop;
                                    o.visible ? (s = s ? s.plotY : o.yAxis.height, s += n - .3 * r) : s = n + o.yAxis.height, e.push({
                                        target: s,
                                        size: r,
                                        item: o
                                    })
                                }
                            }), this), c(e, t.plotHeight).forEach((function(e) {
                                e.item._legendItemPos && (e.item._legendItemPos[1] = t.plotTop - t.spacing[0] + e.pos)
                            }))
                        }, t.prototype.render = function() {
                            var t = this.chart,
                                e = t.renderer,
                                i = this.options,
                                o = this.padding,
                                s = this.getAllItems(),
                                r = this.group,
                                n = this.box;
                            this.itemX = o, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, this.widthOption = C(i.width, t.spacingBox.width - o);
                            var a = t.spacingBox.width - 2 * o - i.x; - 1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (a /= 2), this.maxLegendWidth = this.widthOption || a, r || (this.group = r = e.g("legend").addClass(i.className || "").attr({
                                zIndex: 7
                            }).add(), this.contentGroup = e.g().attr({
                                zIndex: 1
                            }).add(r), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), S(s, (function(t, e) {
                                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                            })), i.reversed && s.reverse(), this.allItems = s, this.display = a = !!s.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, s.forEach(this.renderItem, this), s.forEach(this.layoutItem, this), s = (this.widthOption || this.offsetWidth) + o;
                            var h = this.lastItemY + this.lastLineHeight + this.titleHeight;
                            h = this.handleOverflow(h), h += o, n || (this.box = n = e.rect().addClass("highcharts-legend-box").attr({
                                r: i.borderRadius
                            }).add(r), n.isNew = !0), t.styledMode || n.attr({
                                stroke: i.borderColor,
                                "stroke-width": i.borderWidth || 0,
                                fill: i.backgroundColor || "none"
                            }).shadow(i.shadow), 0 < s && 0 < h && (n[n.isNew ? "attr" : "animate"](n.crisp.call({}, {
                                x: 0,
                                y: 0,
                                width: s,
                                height: h
                            }, n.strokeWidth())), n.isNew = !1), n[a ? "show" : "hide"](), t.styledMode && "none" === r.getStyle("display") && (s = h = 0), this.legendWidth = s, this.legendHeight = h, a && this.align(), this.proximate || this.positionItems(), y(this, "afterRender")
                        }, t.prototype.align = function(t) {
                            void 0 === t && (t = this.chart.spacingBox);
                            var e = this.chart,
                                i = this.options,
                                o = t.y;
                            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < e.titleOffset[0] ? o += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < e.titleOffset[2] && (o -= e.titleOffset[2]), o !== t.y && (t = x(t, {
                                y: o
                            })), this.group.align(x(i, {
                                width: this.legendWidth,
                                height: this.legendHeight,
                                verticalAlign: this.proximate ? "top" : i.verticalAlign
                            }), !0, t)
                        }, t.prototype.handleOverflow = function(t) {
                            var e, i, o = this,
                                s = this.chart,
                                r = s.renderer,
                                n = this.options,
                                a = n.y,
                                h = "top" === n.verticalAlign,
                                l = this.padding,
                                c = n.maxHeight,
                                d = n.navigation,
                                p = b(d.animation, !0),
                                u = d.arrowSize || 12,
                                f = this.pages,
                                g = this.allItems,
                                m = function(t) {
                                    "number" === typeof t ? x.attr({
                                        height: t
                                    }) : x && (o.clipRect = x.destroy(), o.contentGroup.clip()), o.contentGroup.div && (o.contentGroup.div.style.clip = t ? "rect(" + l + "px,9999px," + (l + t) + "px,0)" : "auto")
                                },
                                y = function(t) {
                                    return o[t] = r.circle(0, 0, 1.3 * u).translate(u / 2, u / 2).add(v), s.styledMode || o[t].attr("fill", "rgba(0,0,0,0.0001)"), o[t]
                                };
                            a = s.spacingBox.height + (h ? -a : a) - l;
                            var v = this.nav,
                                x = this.clipRect;
                            return "horizontal" !== n.layout || "middle" === n.verticalAlign || n.floating || (a /= 2), c && (a = Math.min(a, c)), f.length = 0, t && 0 < a && t > a && !1 !== d.enabled ? (this.clipHeight = e = Math.max(a - 20 - this.titleHeight - l, 0), this.currentPage = b(this.currentPage, 1), this.fullHeight = t, g.forEach((function(t, o) {
                                var s = t._legendItemPos[1],
                                    r = Math.round(t.legendItem.getBBox().height),
                                    n = f.length;
                                (!n || s - f[n - 1] > e && (i || s) !== f[n - 1]) && (f.push(i || s), n++), t.pageIx = n - 1, i && (g[o - 1].pageIx = n - 1), o === g.length - 1 && s + r - f[n - 1] > e && s !== i && (f.push(s), t.pageIx = n), s !== i && (i = s)
                            })), x || (x = o.clipRect = r.clipRect(0, l, 9999, 0), o.contentGroup.clip(x)), m(e), v || (this.nav = v = r.g().attr({
                                zIndex: 1
                            }).add(this.group), this.up = r.symbol("triangle", 0, 0, u, u).add(v), y("upTracker").on("click", (function() {
                                o.scroll(-1, p)
                            })), this.pager = r.text("", 15, 10).addClass("highcharts-legend-navigation"), s.styledMode || this.pager.css(d.style), this.pager.add(v), this.down = r.symbol("triangle-down", 0, 0, u, u).add(v), y("downTracker").on("click", (function() {
                                o.scroll(1, p)
                            }))), o.scroll(0), t = a) : v && (m(), this.nav = v.destroy(), this.scrollGroup.attr({
                                translateY: 1
                            }), this.clipHeight = 0), t
                        }, t.prototype.scroll = function(t, e) {
                            var i = this,
                                o = this.chart,
                                s = this.pages,
                                r = s.length,
                                h = this.clipHeight,
                                l = this.options.navigation,
                                c = this.pager,
                                d = this.padding,
                                p = this.currentPage + t;
                            p > r && (p = r), 0 < p && ("undefined" !== typeof e && a(e, o), this.nav.attr({
                                translateX: d,
                                translateY: h + this.padding + 7 + this.titleHeight,
                                visibility: "visible"
                            }), [this.up, this.upTracker].forEach((function(t) {
                                t.attr({
                                    class: 1 === p ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                })
                            })), c.attr({
                                text: p + "/" + r
                            }), [this.down, this.downTracker].forEach((function(t) {
                                t.attr({
                                    x: 18 + this.pager.getBBox().width,
                                    class: p === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                })
                            }), this), o.styledMode || (this.up.attr({
                                fill: 1 === p ? l.inactiveColor : l.activeColor
                            }), this.upTracker.css({
                                cursor: 1 === p ? "default" : "pointer"
                            }), this.down.attr({
                                fill: p === r ? l.inactiveColor : l.activeColor
                            }), this.downTracker.css({
                                cursor: p === r ? "default" : "pointer"
                            })), this.scrollOffset = -s[p - 1] + this.initialItemY, this.scrollGroup.animate({
                                translateY: this.scrollOffset
                            }), this.currentPage = p, this.positionCheckboxes(), t = n(b(e, o.renderer.globalAnimation, !0)), k((function() {
                                y(i, "afterScroll", {
                                    currentPage: p
                                })
                            }), t.duration))
                        }, t.prototype.setItemEvents = function(t, e, i) {
                            var s = this,
                                r = s.chart.renderer.boxWrapper,
                                n = t instanceof o,
                                a = "highcharts-legend-" + (n ? "point" : "series") + "-active",
                                h = s.chart.styledMode,
                                l = function(e) {
                                    s.allItems.forEach((function(i) {
                                        t !== i && [i].concat(i.linkedSeries || []).forEach((function(t) {
                                            t.setState(e, !n)
                                        }))
                                    }))
                                };
                            (i ? [e, t.legendSymbol] : [t.legendGroup]).forEach((function(i) {
                                i && i.on("mouseover", (function() {
                                    t.visible && l("inactive"), t.setState("hover"), t.visible && r.addClass(a), h || e.css(s.options.itemHoverStyle)
                                })).on("mouseout", (function() {
                                    s.chart.styledMode || e.css(x(t.visible ? s.itemStyle : s.itemHiddenStyle)), l(""), r.removeClass(a), t.setState()
                                })).on("click", (function(e) {
                                    var i = function() {
                                        t.setVisible && t.setVisible(), l(t.visible ? "inactive" : "")
                                    };
                                    r.removeClass(a), e = {
                                        browserEvent: e
                                    }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : y(t, "legendItemClick", e, i)
                                }))
                            }))
                        }, t.prototype.createCheckboxForItem = function(t) {
                            t.checkbox = p("input", {
                                type: "checkbox",
                                className: "highcharts-legend-checkbox",
                                checked: t.selected,
                                defaultChecked: t.selected
                            }, this.options.itemCheckboxStyle, this.chart.container), d(t.checkbox, "click", (function(e) {
                                y(t.series || t, "checkboxClick", {
                                    checked: e.target.checked,
                                    item: t
                                }, (function() {
                                    t.select()
                                }))
                            }))
                        }, t
                    }(), (/Trident\/7\.0/.test(i.navigator && i.navigator.userAgent) || t) && s(r.prototype, "positionItem", (function(t, e) {
                        var i = this,
                            o = function() {
                                e._legendItemPos && t.call(i, e)
                            };
                        o(), i.bubbleLegend || setTimeout(o)
                    })), r
                })), e(i, "Core/Series/SeriesRegistry.js", [i["Core/Globals.js"], i["Core/DefaultOptions.js"], i["Core/Series/Point.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s, r = e.defaultOptions,
                        n = o.error,
                        a = o.extendClass,
                        h = o.merge;
                    return function(e) {
                        function o(t, o) {
                            var s = r.plotOptions || {},
                                n = o.defaultOptions;
                            o.prototype.pointClass || (o.prototype.pointClass = i), o.prototype.type = t, n && (s[t] = n), e.seriesTypes[t] = o
                        }
                        e.seriesTypes = t.seriesTypes, e.getSeries = function(t, i) {
                            void 0 === i && (i = {});
                            var o = t.options.chart;
                            o = i.type || o.type || o.defaultSeriesType || "";
                            var s = e.seriesTypes[o];
                            return e || n(17, !0, t, {
                                missingModuleFor: o
                            }), "function" === typeof(o = new s).init && o.init(t, i), o
                        }, e.registerSeriesType = o, e.seriesType = function(t, s, n, l, c) {
                            var d = r.plotOptions || {};
                            return s = s || "", d[t] = h(d[s], n), o(t, a(e.seriesTypes[s] || function() {}, l)), e.seriesTypes[t].prototype.type = t, c && (e.seriesTypes[t].prototype.pointClass = a(i, c)), e.seriesTypes[t]
                        }
                    }(s || (s = {})), s
                })), e(i, "Core/Chart/Chart.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/Axis.js"], i["Core/FormatUtilities.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Legend/Legend.js"], i["Core/MSPointer.js"], i["Core/DefaultOptions.js"], i["Core/Color/Palette.js"], i["Core/Pointer.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/SVGRenderer.js"], i["Core/Time.js"], i["Core/Utilities.js"], i["Core/Renderer/HTML/AST.js"]], (function(t, e, i, o, s, r, n, a, h, l, c, d, p, u, f, g) {
                    var m = t.animate,
                        y = t.animObject,
                        v = t.setAnimation,
                        x = i.numberFormat,
                        b = o.registerEventOptions,
                        C = s.charts,
                        S = s.doc,
                        k = s.marginNames,
                        w = s.svg,
                        M = s.win,
                        T = a.defaultOptions,
                        A = a.defaultTime,
                        P = d.seriesTypes,
                        O = f.addEvent,
                        L = f.attr,
                        E = f.cleanRecursively,
                        D = f.createElement,
                        j = f.css,
                        I = f.defined,
                        B = f.discardElement,
                        R = f.erase,
                        z = f.error,
                        N = f.extend,
                        W = f.find,
                        G = f.fireEvent,
                        X = f.getStyle,
                        H = f.isArray,
                        Y = f.isNumber,
                        F = f.isObject,
                        _ = f.isString,
                        U = f.merge,
                        V = f.objectEach,
                        K = f.pick,
                        Z = f.pInt,
                        q = f.relativeLength,
                        $ = f.removeEvent,
                        J = f.splat,
                        Q = f.syncTimeout,
                        tt = f.uniqueKey;
                    return t = function() {
                        function t(t, e, i) {
                            this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0, this.sharedClips = {}, this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0, this.getArgs(t, e, i)
                        }
                        return t.chart = function(e, i, o) {
                            return new t(e, i, o)
                        }, t.prototype.getArgs = function(t, e, i) {
                            _(t) || t.nodeName ? (this.renderTo = t, this.init(e, i)) : this.init(t, e)
                        }, t.prototype.init = function(t, e) {
                            var i = t.plotOptions || {};
                            G(this, "init", {
                                args: arguments
                            }, (function() {
                                var o = U(T, t),
                                    r = o.chart;
                                V(o.plotOptions, (function(t, e) {
                                    F(t) && (t.tooltip = i[e] && U(i[e].tooltip) || void 0)
                                })), o.tooltip.userOptions = t.chart && t.chart.forExport && t.tooltip.userOptions || t.tooltip, this.userOptions = t, this.margin = [], this.spacing = [], this.bounds = {
                                    h: {},
                                    v: {}
                                }, this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = o, this.axes = [], this.series = [], this.time = t.time && Object.keys(t.time).length ? new u(t.time) : s.time, this.numberFormatter = r.numberFormatter || x, this.styledMode = r.styledMode, this.hasCartesianSeries = r.showAxes, this.index = C.length, C.push(this), s.chartCount++, b(this, r), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, G(this, "afterInit"), this.firstRender()
                            }))
                        }, t.prototype.initSeries = function(t) {
                            var e = this.options.chart;
                            e = t.type || e.type || e.defaultSeriesType;
                            var i = P[e];
                            return i || z(17, !0, this, {
                                missingModuleFor: e
                            }), "function" === typeof(e = new i).init && e.init(this, t), e
                        }, t.prototype.setSeriesData = function() {
                            this.getSeriesOrderByLinks().forEach((function(t) {
                                t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
                            }))
                        }, t.prototype.getSeriesOrderByLinks = function() {
                            return this.series.concat().sort((function(t, e) {
                                return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
                            }))
                        }, t.prototype.orderSeries = function(t) {
                            var e = this.series;
                            t = t || 0;
                            for (var i = e.length; t < i; ++t) e[t] && (e[t].index = t, e[t].name = e[t].getName())
                        }, t.prototype.isInsidePlot = function(t, e, i) {
                            void 0 === i && (i = {});
                            var o = this.inverted,
                                s = this.plotBox,
                                r = this.plotLeft,
                                n = this.plotTop,
                                a = this.scrollablePlotBox,
                                h = 0,
                                l = 0;
                            i.visiblePlotOnly && this.scrollingContainer && (h = (l = this.scrollingContainer).scrollLeft, l = l.scrollTop);
                            var c = i.series;
                            if (s = i.visiblePlotOnly && a || s, t = {
                                    x: a = i.inverted ? e : t,
                                    y: e = i.inverted ? t : e,
                                    isInsidePlot: !0
                                }, !i.ignoreX) {
                                var d = c && (o ? c.yAxis : c.xAxis) || {
                                    pos: r,
                                    len: 1 / 0
                                };
                                (a = i.paneCoordinates ? d.pos + a : r + a) >= Math.max(h + r, d.pos) && a <= Math.min(h + r + s.width, d.pos + d.len) || (t.isInsidePlot = !1)
                            }
                            return !i.ignoreY && t.isInsidePlot && (o = c && (o ? c.xAxis : c.yAxis) || {
                                pos: n,
                                len: 1 / 0
                            }, (i = i.paneCoordinates ? o.pos + e : n + e) >= Math.max(l + n, o.pos) && i <= Math.min(l + n + s.height, o.pos + o.len) || (t.isInsidePlot = !1)), G(this, "afterIsInsidePlot", t), t.isInsidePlot
                        }, t.prototype.redraw = function(t) {
                            G(this, "beforeRedraw");
                            var e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                                i = this.series,
                                o = this.pointer,
                                s = this.legend,
                                r = this.userOptions.legend,
                                n = this.renderer,
                                a = n.isHidden(),
                                h = [],
                                l = this.isDirtyBox,
                                c = this.isDirtyLegend;
                            for (this.setResponsive && this.setResponsive(!1), v(!!this.hasRendered && t, this), a && this.temporaryDisplay(), this.layOutTitles(), t = i.length; t--;) {
                                var d = i[t];
                                if (d.options.stacking || d.options.centerInCategory) {
                                    var p = !0;
                                    if (d.isDirty) {
                                        var u = !0;
                                        break
                                    }
                                }
                            }
                            if (u)
                                for (t = i.length; t--;)(d = i[t]).options.stacking && (d.isDirty = !0);
                            i.forEach((function(t) {
                                t.isDirty && ("point" === t.options.legendType ? ("function" === typeof t.updateTotals && t.updateTotals(), c = !0) : r && (r.labelFormatter || r.labelFormat) && (c = !0)), t.isDirtyData && G(t, "updatedData")
                            })), c && s && s.options.enabled && (s.render(), this.isDirtyLegend = !1), p && this.getStacks(), e.forEach((function(t) {
                                t.updateNames(), t.setScale()
                            })), this.getMargins(), e.forEach((function(t) {
                                t.isDirty && (l = !0)
                            })), e.forEach((function(t) {
                                var e = t.min + "," + t.max;
                                t.extKey !== e && (t.extKey = e, h.push((function() {
                                    G(t, "afterSetExtremes", N(t.eventArgs, t.getExtremes())), delete t.eventArgs
                                }))), (l || p) && t.redraw()
                            })), l && this.drawChartBox(), G(this, "predraw"), i.forEach((function(t) {
                                (l || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                            })), o && o.reset(!0), n.draw(), G(this, "redraw"), G(this, "render"), a && this.temporaryDisplay(!0), h.forEach((function(t) {
                                t.call()
                            }))
                        }, t.prototype.get = function(t) {
                            function e(e) {
                                return e.id === t || e.options && e.options.id === t
                            }
                            for (var i = this.series, o = W(this.axes, e) || W(this.series, e), s = 0; !o && s < i.length; s++) o = W(i[s].points || [], e);
                            return o
                        }, t.prototype.getAxes = function() {
                            var t = this,
                                i = this.options,
                                o = i.xAxis = J(i.xAxis || {});
                            i = i.yAxis = J(i.yAxis || {}), G(this, "getAxes"), o.forEach((function(t, e) {
                                t.index = e, t.isX = !0
                            })), i.forEach((function(t, e) {
                                t.index = e
                            })), o.concat(i).forEach((function(i) {
                                new e(t, i)
                            })), G(this, "afterGetAxes")
                        }, t.prototype.getSelectedPoints = function() {
                            return this.series.reduce((function(t, e) {
                                return e.getPointsCollection().forEach((function(e) {
                                    K(e.selectedStaging, e.selected) && t.push(e)
                                })), t
                            }), [])
                        }, t.prototype.getSelectedSeries = function() {
                            return this.series.filter((function(t) {
                                return t.selected
                            }))
                        }, t.prototype.setTitle = function(t, e, i) {
                            this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
                        }, t.prototype.applyDescription = function(t, e) {
                            var i = this,
                                o = "title" === t ? {
                                    color: h.neutralColor80,
                                    fontSize: this.options.isStock ? "16px" : "18px"
                                } : {
                                    color: h.neutralColor60
                                };
                            o = this.options[t] = U(!this.styledMode && {
                                style: o
                            }, this.options[t], e);
                            var s = this[t];
                            s && e && (this[t] = s = s.destroy()), o && !s && ((s = this.renderer.text(o.text, 0, 0, o.useHTML).attr({
                                align: o.align,
                                class: "highcharts-" + t,
                                zIndex: o.zIndex || 4
                            }).add()).update = function(e) {
                                i[{
                                    title: "setTitle",
                                    subtitle: "setSubtitle",
                                    caption: "setCaption"
                                }[t]](e)
                            }, this.styledMode || s.css(o.style), this[t] = s)
                        }, t.prototype.layOutTitles = function(t) {
                            var e = [0, 0, 0],
                                i = this.renderer,
                                o = this.spacingBox;
                            ["title", "subtitle", "caption"].forEach((function(t) {
                                var s, r = this[t],
                                    n = this.options[t],
                                    a = n.verticalAlign || "top";
                                if (t = "title" === t ? "top" === a ? -3 : 0 : "top" === a ? e[0] + 2 : 0, r) {
                                    this.styledMode || (s = n.style && n.style.fontSize), s = i.fontMetrics(s, r).b, r.css({
                                        width: (n.width || o.width + (n.widthAdjust || 0)) + "px"
                                    });
                                    var h = Math.round(r.getBBox(n.useHTML).height);
                                    r.align(N({
                                        y: "bottom" === a ? s : t + s,
                                        height: h
                                    }, n), !1, "spacingBox"), n.floating || ("top" === a ? e[0] = Math.ceil(e[0] + h) : "bottom" === a && (e[2] = Math.ceil(e[2] + h)))
                                }
                            }), this), e[0] && "top" === (this.options.title.verticalAlign || "top") && (e[0] += this.options.title.margin), e[2] && "bottom" === this.options.caption.verticalAlign && (e[2] += this.options.caption.margin);
                            var s = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                            this.titleOffset = e, G(this, "afterLayOutTitles"), !this.isDirtyBox && s && (this.isDirtyBox = this.isDirtyLegend = s, this.hasRendered && K(t, !0) && this.isDirtyBox && this.redraw())
                        }, t.prototype.getChartSize = function() {
                            var t = this.options.chart,
                                e = t.width;
                            t = t.height;
                            var i = this.renderTo;
                            I(e) || (this.containerWidth = X(i, "width")), I(t) || (this.containerHeight = X(i, "height")), this.chartWidth = Math.max(0, e || this.containerWidth || 600), this.chartHeight = Math.max(0, q(t, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                        }, t.prototype.temporaryDisplay = function(t) {
                            var e = this.renderTo;
                            if (t)
                                for (; e && e.style;) e.hcOrigStyle && (j(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (S.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
                            else
                                for (; e && e.style && (S.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, S.body.appendChild(e)), ("none" === X(e, "display", !1) || e.hcOricDetached) && (e.hcOrigStyle = {
                                        display: e.style.display,
                                        height: e.style.height,
                                        overflow: e.style.overflow
                                    }, t = {
                                        display: "block",
                                        overflow: "hidden"
                                    }, e !== this.renderTo && (t.height = 0), j(e, t), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== S.body););
                        }, t.prototype.setClassName = function(t) {
                            this.container.className = "highcharts-container " + (t || "")
                        }, t.prototype.getContainer = function() {
                            var t, e = this.options,
                                i = e.chart,
                                o = tt(),
                                s = this.renderTo;
                            s || (this.renderTo = s = i.renderTo), _(s) && (this.renderTo = s = S.getElementById(s)), s || z(13, !0, this);
                            var r = Z(L(s, "data-highcharts-chart"));
                            Y(r) && C[r] && C[r].hasRendered && C[r].destroy(), L(s, "data-highcharts-chart", this.index), s.innerHTML = "", i.skipClone || s.offsetWidth || this.temporaryDisplay(), this.getChartSize(), r = this.chartWidth;
                            var n = this.chartHeight;
                            if (j(s, {
                                    overflow: "hidden"
                                }), this.styledMode || (t = N({
                                    position: "relative",
                                    overflow: "hidden",
                                    width: r + "px",
                                    height: n + "px",
                                    textAlign: "left",
                                    lineHeight: "normal",
                                    zIndex: 0,
                                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                    userSelect: "none",
                                    "touch-action": "manipulation",
                                    outline: "none"
                                }, i.style || {})), this.container = o = D("div", {
                                    id: o
                                }, t, s), this._cursor = o.style.cursor, this.renderer = new(i.renderer || !w ? c.getRendererType(i.renderer) : p)(o, r, n, void 0, i.forExport, e.exporting && e.exporting.allowHTML, this.styledMode), v(void 0, this), this.setClassName(i.className), this.styledMode)
                                for (var a in e.defs) this.renderer.definition(e.defs[a]);
                            else this.renderer.setStyle(i.style);
                            this.renderer.chartIndex = this.index, G(this, "afterGetContainer")
                        }, t.prototype.getMargins = function(t) {
                            var e = this.spacing,
                                i = this.margin,
                                o = this.titleOffset;
                            this.resetMargins(), o[0] && !I(i[0]) && (this.plotTop = Math.max(this.plotTop, o[0] + e[0])), o[2] && !I(i[2]) && (this.marginBottom = Math.max(this.marginBottom, o[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), G(this, "getMargins"), t || this.getAxisMargins()
                        }, t.prototype.getAxisMargins = function() {
                            var t = this,
                                e = t.axisOffset = [0, 0, 0, 0],
                                i = t.colorAxis,
                                o = t.margin,
                                s = function(t) {
                                    t.forEach((function(t) {
                                        t.visible && t.getOffset()
                                    }))
                                };
                            t.hasCartesianSeries ? s(t.axes) : i && i.length && s(i), k.forEach((function(i, s) {
                                I(o[s]) || (t[i] += e[s])
                            })), t.setChartSize()
                        }, t.prototype.reflow = function(t) {
                            var e = this,
                                i = e.options.chart,
                                o = e.renderTo,
                                s = I(i.width) && I(i.height),
                                r = i.width || X(o, "width");
                            i = i.height || X(o, "height"), o = t ? t.target : M, delete e.pointer.chartPosition, s || e.isPrinting || !r || !i || o !== M && o !== S || (r === e.containerWidth && i === e.containerHeight || (f.clearTimeout(e.reflowTimeout), e.reflowTimeout = Q((function() {
                                e.container && e.setSize(void 0, void 0, !1)
                            }), t ? 100 : 0)), e.containerWidth = r, e.containerHeight = i)
                        }, t.prototype.setReflow = function(t) {
                            var e = this;
                            !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = O(M, "resize", (function(t) {
                                e.options && e.reflow(t)
                            })), O(this, "destroy", this.unbindReflow))
                        }, t.prototype.setSize = function(t, e, i) {
                            var o = this,
                                s = o.renderer;
                            o.isResizing += 1, v(i, o), i = s.globalAnimation, o.oldChartHeight = o.chartHeight, o.oldChartWidth = o.chartWidth, "undefined" !== typeof t && (o.options.chart.width = t), "undefined" !== typeof e && (o.options.chart.height = e), o.getChartSize(), o.styledMode || (i ? m : j)(o.container, {
                                width: o.chartWidth + "px",
                                height: o.chartHeight + "px"
                            }, i), o.setChartSize(!0), s.setSize(o.chartWidth, o.chartHeight, i), o.axes.forEach((function(t) {
                                t.isDirty = !0, t.setScale()
                            })), o.isDirtyLegend = !0, o.isDirtyBox = !0, o.layOutTitles(), o.getMargins(), o.redraw(i), o.oldChartHeight = null, G(o, "resize"), Q((function() {
                                o && G(o, "endResize", null, (function() {
                                    --o.isResizing
                                }))
                            }), y(i).duration)
                        }, t.prototype.setChartSize = function(t) {
                            var e, i, o, s, r = this.inverted,
                                n = this.renderer,
                                a = this.chartWidth,
                                h = this.chartHeight,
                                l = this.options.chart,
                                c = this.spacing,
                                d = this.clipOffset;
                            this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = o = Math.max(0, Math.round(a - e - this.marginRight)), this.plotHeight = s = Math.max(0, Math.round(h - i - this.marginBottom)), this.plotSizeX = r ? s : o, this.plotSizeY = r ? o : s, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = n.spacingBox = {
                                x: c[3],
                                y: c[0],
                                width: a - c[3] - c[1],
                                height: h - c[0] - c[2]
                            }, this.plotBox = n.plotBox = {
                                x: e,
                                y: i,
                                width: o,
                                height: s
                            }, r = 2 * Math.floor(this.plotBorderWidth / 2), a = Math.ceil(Math.max(r, d[3]) / 2), h = Math.ceil(Math.max(r, d[0]) / 2), this.clipBox = {
                                x: a,
                                y: h,
                                width: Math.floor(this.plotSizeX - Math.max(r, d[1]) / 2 - a),
                                height: Math.max(0, Math.floor(this.plotSizeY - Math.max(r, d[2]) / 2 - h))
                            }, t || (this.axes.forEach((function(t) {
                                t.setAxisSize(), t.setAxisTranslation()
                            })), n.alignElements()), G(this, "afterSetChartSize", {
                                skipAxes: t
                            })
                        }, t.prototype.resetMargins = function() {
                            G(this, "resetMargins");
                            var t = this,
                                e = t.options.chart;
                            ["margin", "spacing"].forEach((function(i) {
                                var o = e[i],
                                    s = F(o) ? o : [o, o, o, o];
                                ["Top", "Right", "Bottom", "Left"].forEach((function(o, r) {
                                    t[i][r] = K(e[i + o], s[r])
                                }))
                            })), k.forEach((function(e, i) {
                                t[e] = K(t.margin[i], t.spacing[i])
                            })), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                        }, t.prototype.drawChartBox = function() {
                            var t, e = this.options.chart,
                                i = this.renderer,
                                o = this.chartWidth,
                                s = this.chartHeight,
                                r = this.styledMode,
                                n = this.plotBGImage,
                                a = e.backgroundColor,
                                h = e.plotBackgroundColor,
                                l = e.plotBackgroundImage,
                                c = this.plotLeft,
                                d = this.plotTop,
                                p = this.plotWidth,
                                u = this.plotHeight,
                                f = this.plotBox,
                                g = this.clipRect,
                                m = this.clipBox,
                                y = this.chartBackground,
                                v = this.plotBackground,
                                x = this.plotBorder,
                                b = "animate";
                            if (y || (this.chartBackground = y = i.rect().addClass("highcharts-background").add(), b = "attr"), r) var C = t = y.strokeWidth();
                            else t = (C = e.borderWidth || 0) + (e.shadow ? 8 : 0), a = {
                                fill: a || "none"
                            }, (C || y["stroke-width"]) && (a.stroke = e.borderColor, a["stroke-width"] = C), y.attr(a).shadow(e.shadow);
                            y[b]({
                                x: t / 2,
                                y: t / 2,
                                width: o - t - C % 2,
                                height: s - t - C % 2,
                                r: e.borderRadius
                            }), b = "animate", v || (b = "attr", this.plotBackground = v = i.rect().addClass("highcharts-plot-background").add()), v[b](f), r || (v.attr({
                                fill: h || "none"
                            }).shadow(e.plotShadow), l && (n ? (l !== n.attr("href") && n.attr("href", l), n.animate(f)) : this.plotBGImage = i.image(l, c, d, p, u).add())), g ? g.animate({
                                width: m.width,
                                height: m.height
                            }) : this.clipRect = i.clipRect(m), b = "animate", x || (b = "attr", this.plotBorder = x = i.rect().addClass("highcharts-plot-border").attr({
                                zIndex: 1
                            }).add()), r || x.attr({
                                stroke: e.plotBorderColor,
                                "stroke-width": e.plotBorderWidth || 0,
                                fill: "none"
                            }), x[b](x.crisp({
                                x: c,
                                y: d,
                                width: p,
                                height: u
                            }, -x.strokeWidth())), this.isDirtyBox = !1, G(this, "afterDrawChartBox")
                        }, t.prototype.propFromSeries = function() {
                            var t, e, i, o = this,
                                s = o.options.chart,
                                r = o.options.series;
                            ["inverted", "angular", "polar"].forEach((function(n) {
                                for (e = P[s.type || s.defaultSeriesType], i = s[n] || e && e.prototype[n], t = r && r.length; !i && t--;)(e = P[r[t].type]) && e.prototype[n] && (i = !0);
                                o[n] = i
                            }))
                        }, t.prototype.linkSeries = function() {
                            var t = this,
                                e = t.series;
                            e.forEach((function(t) {
                                t.linkedSeries.length = 0
                            })), e.forEach((function(e) {
                                var i = e.options.linkedTo;
                                _(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, i.enabledDataSorting && e.setDataSortingOptions(), e.visible = K(e.options.visible, i.options.visible, e.visible))
                            })), G(this, "afterLinkSeries")
                        }, t.prototype.renderSeries = function() {
                            this.series.forEach((function(t) {
                                t.translate(), t.render()
                            }))
                        }, t.prototype.renderLabels = function() {
                            var t = this,
                                e = t.options.labels;
                            e.items && e.items.forEach((function(i) {
                                var o = N(e.style, i.style),
                                    s = Z(o.left) + t.plotLeft,
                                    r = Z(o.top) + t.plotTop + 12;
                                delete o.left, delete o.top, t.renderer.text(i.html, s, r).attr({
                                    zIndex: 2
                                }).css(o).add()
                            }))
                        }, t.prototype.render = function() {
                            var t = this.axes,
                                e = this.colorAxis,
                                i = this.renderer,
                                o = this.options,
                                s = function(t) {
                                    t.forEach((function(t) {
                                        t.visible && t.render()
                                    }))
                                },
                                n = 0;
                            this.setTitle(), this.legend = new r(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t.some((function(t) {
                                if (t.horiz && t.visible && t.options.labels.enabled && t.series.length) return n = 21, !0
                            }));
                            var a = this.plotHeight = Math.max(this.plotHeight - n, 0);
                            t.forEach((function(t) {
                                t.setScale()
                            })), this.getAxisMargins();
                            var h = 1.1 < o / this.plotWidth,
                                l = 1.05 < a / this.plotHeight;
                            (h || l) && (t.forEach((function(t) {
                                (t.horiz && h || !t.horiz && l) && t.setTickInterval(!0)
                            })), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries ? s(t) : e && e.length && s(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({
                                zIndex: 3
                            }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                        }, t.prototype.addCredits = function(t) {
                            var e = this,
                                i = U(!0, this.options.credits, t);
                            i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", (function() {
                                i.href && (M.location.href = i.href)
                            })).attr({
                                align: i.position.align,
                                zIndex: 8
                            }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(t) {
                                e.credits = e.credits.destroy(), e.addCredits(t)
                            })
                        }, t.prototype.destroy = function() {
                            var t, e = this,
                                i = e.axes,
                                o = e.series,
                                r = e.container,
                                n = r && r.parentNode;
                            for (G(e, "destroy"), e.renderer.forExport ? R(C, e) : C[e.index] = void 0, s.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), $(e), t = i.length; t--;) i[t] = i[t].destroy();
                            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = o.length; t--;) o[t] = o[t].destroy();
                            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach((function(t) {
                                var i = e[t];
                                i && i.destroy && (e[t] = i.destroy())
                            })), r && (r.innerHTML = "", $(r), n && B(r)), V(e, (function(t, i) {
                                delete e[i]
                            }))
                        }, t.prototype.firstRender = function() {
                            var t = this,
                                e = t.options;
                            t.isReadyToRender && !t.isReadyToRender() || (t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), (H(e.series) ? e.series : []).forEach((function(e) {
                                t.initSeries(e)
                            })), t.linkSeries(), t.setSeriesData(), G(t, "beforeRender"), l && (n.isRequired() ? t.pointer = new n(t, e) : t.pointer = new l(t, e)), t.render(), t.pointer.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0))
                        }, t.prototype.onload = function() {
                            this.callbacks.concat([this.callback]).forEach((function(t) {
                                t && "undefined" !== typeof this.index && t.apply(this, [this])
                            }), this), G(this, "load"), G(this, "render"), I(this.index) && this.setReflow(this.options.chart.reflow), this.hasLoaded = !0
                        }, t.prototype.addSeries = function(t, e, i) {
                            var o, s = this;
                            return t && (e = K(e, !0), G(s, "addSeries", {
                                options: t
                            }, (function() {
                                o = s.initSeries(t), s.isDirtyLegend = !0, s.linkSeries(), o.enabledDataSorting && o.setData(t.data, !1), G(s, "afterAddSeries", {
                                    series: o
                                }), e && s.redraw(i)
                            }))), o
                        }, t.prototype.addAxis = function(t, e, i, o) {
                            return this.createAxis(e ? "xAxis" : "yAxis", {
                                axis: t,
                                redraw: i,
                                animation: o
                            })
                        }, t.prototype.addColorAxis = function(t, e, i) {
                            return this.createAxis("colorAxis", {
                                axis: t,
                                redraw: e,
                                animation: i
                            })
                        }, t.prototype.createAxis = function(t, i) {
                            return t = new e(this, U(i.axis, {
                                index: this[t].length,
                                isX: "xAxis" === t
                            })), K(i.redraw, !0) && this.redraw(i.animation), t
                        }, t.prototype.showLoading = function(t) {
                            var e = this,
                                i = e.options,
                                o = i.loading,
                                s = function() {
                                    r && j(r, {
                                        left: e.plotLeft + "px",
                                        top: e.plotTop + "px",
                                        width: e.plotWidth + "px",
                                        height: e.plotHeight + "px"
                                    })
                                },
                                r = e.loadingDiv,
                                n = e.loadingSpan;
                            r || (e.loadingDiv = r = D("div", {
                                className: "highcharts-loading highcharts-loading-hidden"
                            }, null, e.container)), n || (e.loadingSpan = n = D("span", {
                                className: "highcharts-loading-inner"
                            }, null, r), O(e, "redraw", s)), r.className = "highcharts-loading", g.setElementHTML(n, K(t, i.lang.loading, "")), e.styledMode || (j(r, N(o.style, {
                                zIndex: 10
                            })), j(n, o.labelStyle), e.loadingShown || (j(r, {
                                opacity: 0,
                                display: ""
                            }), m(r, {
                                opacity: o.style.opacity || .5
                            }, {
                                duration: o.showDuration || 0
                            }))), e.loadingShown = !0, s()
                        }, t.prototype.hideLoading = function() {
                            var t = this.options,
                                e = this.loadingDiv;
                            e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || m(e, {
                                opacity: 0
                            }, {
                                duration: t.loading.hideDuration || 100,
                                complete: function() {
                                    j(e, {
                                        display: "none"
                                    })
                                }
                            })), this.loadingShown = !1
                        }, t.prototype.update = function(t, e, i, o) {
                            var s, r, n = this,
                                a = {
                                    credits: "addCredits",
                                    title: "setTitle",
                                    subtitle: "setSubtitle",
                                    caption: "setCaption"
                                },
                                h = t.isResponsiveOptions,
                                l = [];
                            G(n, "update", {
                                options: t
                            }), h || n.setResponsive(!1, !0), t = E(t, n.options), n.userOptions = U(n.userOptions, t);
                            var c = t.chart;
                            if (c) {
                                if (U(!0, n.options.chart, c), "className" in c && n.setClassName(c.className), "reflow" in c && n.setReflow(c.reflow), "inverted" in c || "polar" in c || "type" in c) {
                                    n.propFromSeries();
                                    var d = !0
                                }
                                "alignTicks" in c && (d = !0), "events" in c && b(this, c), V(c, (function(t, e) {
                                    -1 !== n.propsRequireUpdateSeries.indexOf("chart." + e) && (s = !0), -1 !== n.propsRequireDirtyBox.indexOf(e) && (n.isDirtyBox = !0), -1 !== n.propsRequireReflow.indexOf(e) && (h ? n.isDirtyBox = !0 : r = !0)
                                })), !n.styledMode && c.style && n.renderer.setStyle(n.options.chart.style || {})
                            }!n.styledMode && t.colors && (this.options.colors = t.colors), t.time && (this.time === A && (this.time = new u(t.time)), U(!0, n.options.time, t.time)), V(t, (function(e, i) {
                                n[i] && "function" === typeof n[i].update ? n[i].update(e, !1) : "function" === typeof n[a[i]] ? n[a[i]](e) : "colors" !== i && -1 === n.collectionsWithUpdate.indexOf(i) && U(!0, n.options[i], t[i]), "chart" !== i && -1 !== n.propsRequireUpdateSeries.indexOf(i) && (s = !0)
                            })), this.collectionsWithUpdate.forEach((function(e) {
                                if (t[e]) {
                                    var o = [];
                                    n[e].forEach((function(t, e) {
                                        t.options.isInternal || o.push(K(t.options.index, e))
                                    })), J(t[e]).forEach((function(t, s) {
                                        var r, a = I(t.id);
                                        a && (r = n.get(t.id)), !r && n[e] && (r = n[e][o ? o[s] : s]) && a && I(r.options.id) && (r = void 0), r && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && n.collectionsWithInit[e] && (n.collectionsWithInit[e][0].apply(n, [t].concat(n.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
                                    })), i && n[e].forEach((function(t) {
                                        t.touched || t.options.isInternal ? delete t.touched : l.push(t)
                                    }))
                                }
                            })), l.forEach((function(t) {
                                t.chart && t.remove && t.remove(!1)
                            })), d && n.axes.forEach((function(t) {
                                t.update({}, !1)
                            })), s && n.getSeriesOrderByLinks().forEach((function(t) {
                                t.chart && t.update({}, !1)
                            }), this), d = c && c.width, c = c && (_(c.height) ? q(c.height, d || n.chartWidth) : c.height), r || Y(d) && d !== n.chartWidth || Y(c) && c !== n.chartHeight ? n.setSize(d, c, o) : K(e, !0) && n.redraw(o), G(n, "afterUpdate", {
                                options: t,
                                redraw: e,
                                animation: o
                            })
                        }, t.prototype.setSubtitle = function(t, e) {
                            this.applyDescription("subtitle", t), this.layOutTitles(e)
                        }, t.prototype.setCaption = function(t, e) {
                            this.applyDescription("caption", t), this.layOutTitles(e)
                        }, t.prototype.showResetZoom = function() {
                            function t() {
                                e.zoomOut()
                            }
                            var e = this,
                                i = T.lang,
                                o = e.options.chart.resetZoomButton,
                                s = o.theme,
                                r = s.states,
                                n = "chart" === o.relativeTo || "spacingBox" === o.relativeTo ? null : "scrollablePlotBox";
                            G(this, "beforeShowResetZoom", null, (function() {
                                e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, s, r && r.hover).attr({
                                    align: o.position.align,
                                    title: i.resetZoomTitle
                                }).addClass("highcharts-reset-zoom").add().align(o.position, !1, n)
                            })), G(this, "afterShowResetZoom")
                        }, t.prototype.zoomOut = function() {
                            G(this, "selection", {
                                resetSelection: !0
                            }, this.zoom)
                        }, t.prototype.zoom = function(t) {
                            var e, i = this,
                                o = i.pointer,
                                s = i.inverted ? o.mouseDownX : o.mouseDownY,
                                r = !1;
                            !t || t.resetSelection ? (i.axes.forEach((function(t) {
                                e = t.zoom()
                            })), o.initiated = !1) : t.xAxis.concat(t.yAxis).forEach((function(t) {
                                var n = t.axis,
                                    a = i.inverted ? n.left : n.top,
                                    h = i.inverted ? a + n.width : a + n.height,
                                    l = n.isXAxis,
                                    c = !1;
                                (!l && s >= a && s <= h || l || !I(s)) && (c = !0), o[l ? "zoomX" : "zoomY"] && c && (e = n.zoom(t.min, t.max), n.displayBtn && (r = !0))
                            }));
                            var n = i.resetZoomButton;
                            r && !n ? i.showResetZoom() : !r && F(n) && (i.resetZoomButton = n.destroy()), e && i.redraw(K(i.options.chart.animation, t && t.animation, 100 > i.pointCount))
                        }, t.prototype.pan = function(t, e) {
                            var i = this,
                                o = i.hoverPoints;
                            e = "object" === typeof e ? e : {
                                enabled: e,
                                type: "x"
                            };
                            var s = i.options.chart,
                                r = i.options.mapNavigation && i.options.mapNavigation.enabled;
                            s && s.panning && (s.panning = e);
                            var n, a = e.type;
                            G(this, "pan", {
                                originalEvent: t
                            }, (function() {
                                o && o.forEach((function(t) {
                                    t.setState()
                                }));
                                var e = i.xAxis;
                                "xy" === a ? e = e.concat(i.yAxis) : "y" === a && (e = i.yAxis);
                                var s = {};
                                e.forEach((function(e) {
                                    if (e.options.panningEnabled && !e.options.isInternal) {
                                        var o = e.horiz,
                                            h = t[o ? "chartX" : "chartY"],
                                            l = i[o = o ? "mouseDownX" : "mouseDownY"],
                                            c = e.minPointOffset || 0,
                                            d = e.reversed && !i.inverted || !e.reversed && i.inverted ? -1 : 1,
                                            p = e.getExtremes(),
                                            u = e.toValue(l - h, !0) + c * d,
                                            f = e.toValue(l + e.len - h, !0) - (c * d || e.isXAxis && e.pointRangePadding || 0),
                                            g = f < u;
                                        d = e.hasVerticalPanning(), l = g ? f : u, u = g ? u : f;
                                        var m = e.panningState;
                                        !d || e.isXAxis || m && !m.isDirty || e.series.forEach((function(t) {
                                            var e = t.getProcessedData(!0);
                                            e = t.getExtremes(e.yData, !0), m || (m = {
                                                startMin: Number.MAX_VALUE,
                                                startMax: -Number.MAX_VALUE
                                            }), Y(e.dataMin) && Y(e.dataMax) && (m.startMin = Math.min(K(t.options.threshold, 1 / 0), e.dataMin, m.startMin), m.startMax = Math.max(K(t.options.threshold, -1 / 0), e.dataMax, m.startMax))
                                        })), d = Math.min(K(m && m.startMin, p.dataMin), c ? p.min : e.toValue(e.toPixels(p.min) - e.minPixelPadding)), f = Math.max(K(m && m.startMax, p.dataMax), c ? p.max : e.toValue(e.toPixels(p.max) + e.minPixelPadding)), e.panningState = m, e.isOrdinal || (0 < (c = d - l) && (u += c, l = d), 0 < (c = u - f) && (u = f, l -= c), e.series.length && l !== p.min && u !== p.max && l >= d && u <= f && (e.setExtremes(l, u, !1, !1, {
                                            trigger: "pan"
                                        }), i.resetZoomButton || r || l === d || u === f || !a.match("y") || (i.showResetZoom(), e.displayBtn = !1), n = !0), s[o] = h)
                                    }
                                })), V(s, (function(t, e) {
                                    i[e] = t
                                })), n && i.redraw(!1), j(i.container, {
                                    cursor: "move"
                                })
                            }))
                        }, t
                    }(), N(t.prototype, {
                        callbacks: [],
                        collectionsWithInit: {
                            xAxis: [t.prototype.addAxis, [!0]],
                            yAxis: [t.prototype.addAxis, [!1]],
                            series: [t.prototype.addSeries]
                        },
                        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                        propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                        propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                        propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
                    }), t
                })), e(i, "Core/Legend/LegendSymbol.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.merge,
                        o = t.pick;
                    return function(t) {
                        t.drawLineMarker = function(t) {
                            var e = this.options,
                                s = t.symbolWidth,
                                r = t.symbolHeight,
                                n = r / 2,
                                a = this.chart.renderer,
                                h = this.legendGroup;
                            t = t.baseline - Math.round(.3 * t.fontMetrics.b);
                            var l = {},
                                c = e.marker;
                            this.chart.styledMode || (l = {
                                "stroke-width": e.lineWidth || 0
                            }, e.dashStyle && (l.dashstyle = e.dashStyle)), this.legendLine = a.path([
                                ["M", 0, t],
                                ["L", s, t]
                            ]).addClass("highcharts-graph").attr(l).add(h), c && !1 !== c.enabled && s && (e = Math.min(o(c.radius, n), n), 0 === this.symbol.indexOf("url") && (c = i(c, {
                                width: r,
                                height: r
                            }), e = 0), this.legendSymbol = s = a.symbol(this.symbol, s / 2 - e, t - e, 2 * e, 2 * e, c).addClass("highcharts-point").add(h), s.isMarker = !0)
                        }, t.drawRectangle = function(t, e) {
                            var i = t.symbolHeight,
                                s = t.options.squareSymbol;
                            e.legendSymbol = this.chart.renderer.rect(s ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, s ? i : t.symbolWidth, i, o(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                                zIndex: 3
                            }).add(e.legendGroup)
                        }
                    }(e || (e = {})), e
                })), e(i, "Core/Series/SeriesDefaults.js", [i["Core/Color/Palette.js"]], (function(t) {
                    return {
                        lineWidth: 2,
                        allowPointSelect: !1,
                        crisp: !0,
                        showCheckbox: !1,
                        animation: {
                            duration: 1e3
                        },
                        events: {},
                        marker: {
                            enabledThreshold: 2,
                            lineColor: t.backgroundColor,
                            lineWidth: 0,
                            radius: 4,
                            states: {
                                normal: {
                                    animation: !0
                                },
                                hover: {
                                    animation: {
                                        duration: 50
                                    },
                                    enabled: !0,
                                    radiusPlus: 2,
                                    lineWidthPlus: 1
                                },
                                select: {
                                    fillColor: t.neutralColor20,
                                    lineColor: t.neutralColor100,
                                    lineWidth: 2
                                }
                            }
                        },
                        point: {
                            events: {}
                        },
                        dataLabels: {
                            animation: {},
                            align: "center",
                            defer: !0,
                            formatter: function() {
                                var t = this.series.chart.numberFormatter;
                                return "number" !== typeof this.y ? "" : t(this.y, -1)
                            },
                            padding: 5,
                            style: {
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "contrast",
                                textOutline: "1px contrast"
                            },
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0
                        },
                        cropThreshold: 300,
                        opacity: 1,
                        pointRange: 0,
                        softThreshold: !0,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 50
                                },
                                lineWidthPlus: 1,
                                marker: {},
                                halo: {
                                    size: 10,
                                    opacity: .25
                                }
                            },
                            select: {
                                animation: {
                                    duration: 0
                                }
                            },
                            inactive: {
                                animation: {
                                    duration: 50
                                },
                                opacity: .2
                            }
                        },
                        stickyTracking: !0,
                        turboThreshold: 1e3,
                        findNearestPointBy: "x"
                    }
                })), e(i, "Core/Series/Series.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/DefaultOptions.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Color/Palette.js"], i["Core/Series/Point.js"], i["Core/Series/SeriesDefaults.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n, a, h, l, c) {
                    var d = t.animObject,
                        p = t.setAnimation,
                        u = e.defaultOptions,
                        f = i.registerEventOptions,
                        g = o.hasTouch,
                        m = o.svg,
                        y = o.win,
                        v = h.seriesTypes,
                        x = c.addEvent,
                        b = c.arrayMax,
                        C = c.arrayMin,
                        S = c.clamp,
                        k = c.cleanRecursively,
                        w = c.correctFloat,
                        M = c.defined,
                        T = c.erase,
                        A = c.error,
                        P = c.extend,
                        O = c.find,
                        L = c.fireEvent,
                        E = c.getNestedProperty,
                        D = c.isArray,
                        j = c.isNumber,
                        I = c.isString,
                        B = c.merge,
                        R = c.objectEach,
                        z = c.pick,
                        N = c.removeEvent,
                        W = c.splat,
                        G = c.syncTimeout;
                    return t = function() {
                        function t() {
                            this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                        }
                        return t.prototype.init = function(t, e) {
                            L(this, "init", {
                                options: e
                            });
                            var i = this,
                                o = t.series;
                            this.eventsToUnbind = [], i.chart = t, i.options = i.setOptions(e), e = i.options, i.linkedSeries = [], i.bindAxes(), P(i, {
                                name: e.name,
                                state: "",
                                visible: !1 !== e.visible,
                                selected: !0 === e.selected
                            }), f(this, e);
                            var s, r = e.events;
                            (r && r.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), i.getColor(), i.getSymbol(), i.parallelArrays.forEach((function(t) {
                                i[t + "Data"] || (i[t + "Data"] = [])
                            })), i.isCartesian && (t.hasCartesianSeries = !0), o.length && (s = o[o.length - 1]), i._i = z(s && s._i, -1) + 1, i.opacity = i.options.opacity, t.orderSeries(this.insert(o)), e.dataSorting && e.dataSorting.enabled ? i.setDataSortingOptions() : i.points || i.data || i.setData(e.data, !1), L(this, "afterInit")
                        }, t.prototype.is = function(t) {
                            return v[t] && this instanceof v[t]
                        }, t.prototype.insert = function(t) {
                            var e, i = this.options.index;
                            if (j(i)) {
                                for (e = t.length; e--;)
                                    if (i >= z(t[e].options.index, t[e]._i)) {
                                        t.splice(e + 1, 0, this);
                                        break
                                    } - 1 === e && t.unshift(this), e += 1
                            } else t.push(this);
                            return z(e, t.length - 1)
                        }, t.prototype.bindAxes = function() {
                            var t, e = this,
                                i = e.options,
                                o = e.chart;
                            L(this, "bindAxes", null, (function() {
                                (e.axisTypes || []).forEach((function(s) {
                                    var r = 0;
                                    o[s].forEach((function(o) {
                                        t = o.options, (i[s] === r && !t.isInternal || "undefined" !== typeof i[s] && i[s] === t.id || "undefined" === typeof i[s] && 0 === t.index) && (e.insert(o.series), e[s] = o, o.isDirty = !0), t.isInternal || r++
                                    })), e[s] || e.optionalAxis === s || A(18, !0, o)
                                }))
                            })), L(this, "afterBindAxes")
                        }, t.prototype.updateParallelArrays = function(t, e) {
                            var i = t.series,
                                o = arguments,
                                s = j(e) ? function(o) {
                                    var s = "y" === o && i.toYData ? i.toYData(t) : t[o];
                                    i[o + "Data"][e] = s
                                } : function(t) {
                                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(o, 2))
                                };
                            i.parallelArrays.forEach(s)
                        }, t.prototype.hasData = function() {
                            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length
                        }, t.prototype.autoIncrement = function(t) {
                            var e, i = this.options,
                                o = i.pointIntervalUnit,
                                s = i.relativeXValue,
                                r = this.chart.time,
                                n = this.xIncrement;
                            return n = z(n, i.pointStart, 0), this.pointInterval = e = z(this.pointInterval, i.pointInterval, 1), s && j(t) && (e *= t), o && (i = new r.Date(n), "day" === o ? r.set("Date", i, r.get("Date", i) + e) : "month" === o ? r.set("Month", i, r.get("Month", i) + e) : "year" === o && r.set("FullYear", i, r.get("FullYear", i) + e), e = i.getTime() - n), s && j(t) ? n + e : (this.xIncrement = n + e, n)
                        }, t.prototype.setDataSortingOptions = function() {
                            var t = this.options;
                            P(this, {
                                requireSorting: !1,
                                sorted: !1,
                                enabledDataSorting: !0,
                                allowDG: !1
                            }), M(t.pointRange) || (t.pointRange = 1)
                        }, t.prototype.setOptions = function(t) {
                            var e = this.chart,
                                i = e.options,
                                o = i.plotOptions,
                                s = e.userOptions || {};
                            t = B(t), e = e.styledMode;
                            var r = {
                                plotOptions: o,
                                userOptions: t
                            };
                            L(this, "setOptions", r);
                            var n = r.plotOptions[this.type],
                                a = s.plotOptions || {};
                            return this.userOptions = r.userOptions, s = B(n, o.series, s.plotOptions && s.plotOptions[this.type], t), this.tooltipOptions = B(u.tooltip, u.plotOptions.series && u.plotOptions.series.tooltip, u.plotOptions[this.type].tooltip, i.tooltip.userOptions, o.series && o.series.tooltip, o[this.type].tooltip, t.tooltip), this.stickyTracking = z(t.stickyTracking, a[this.type] && a[this.type].stickyTracking, a.series && a.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || s.stickyTracking), null === n.marker && delete s.marker, this.zoneAxis = s.zoneAxis, o = this.zones = (s.zones || []).slice(), !s.negativeColor && !s.negativeFillColor || s.zones || (i = {
                                value: s[this.zoneAxis + "Threshold"] || s.threshold || 0,
                                className: "highcharts-negative"
                            }, e || (i.color = s.negativeColor, i.fillColor = s.negativeFillColor), o.push(i)), o.length && M(o[o.length - 1].value) && o.push(e ? {} : {
                                color: this.color,
                                fillColor: this.fillColor
                            }), L(this, "afterSetOptions", {
                                options: s
                            }), s
                        }, t.prototype.getName = function() {
                            return z(this.options.name, "Series " + (this.index + 1))
                        }, t.prototype.getCyclic = function(t, e, i) {
                            var o = this.chart,
                                s = this.userOptions,
                                r = t + "Index",
                                n = t + "Counter",
                                a = i ? i.length : z(o.options.chart[t + "Count"], o[t + "Count"]);
                            if (!e) {
                                var h = z(s[r], s["_" + r]);
                                M(h) || (o.series.length || (o[n] = 0), s["_" + r] = h = o[n] % a, o[n] += 1), i && (e = i[h])
                            }
                            "undefined" !== typeof h && (this[r] = h), this[t] = e
                        }, t.prototype.getColor = function() {
                            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = r.neutralColor20 : this.getCyclic("color", this.options.color || u.plotOptions[this.type].color, this.chart.options.colors)
                        }, t.prototype.getPointsCollection = function() {
                            return (this.hasGroupedData ? this.points : this.data) || []
                        }, t.prototype.getSymbol = function() {
                            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                        }, t.prototype.findPointIndex = function(t, e) {
                            var i, o, s = t.id,
                                r = t.x,
                                a = this.points,
                                h = this.options.dataSorting;
                            if (s)(h = this.chart.get(s)) instanceof n && (i = h);
                            else if ((this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) && (i = function(e) {
                                    return !e.touched && e.index === t.index
                                }, h && h.matchByName ? i = function(e) {
                                    return !e.touched && e.name === t.name
                                } : this.options.relativeXValue && (i = function(e) {
                                    return !e.touched && e.options.x === t.x
                                }), !(i = O(a, i)))) return;
                            if (i) {
                                var l = i && i.index;
                                "undefined" !== typeof l && (o = !0)
                            }
                            return "undefined" === typeof l && j(r) && (l = this.xData.indexOf(r, e)), -1 !== l && "undefined" !== typeof l && this.cropped && (l = l >= this.cropStart ? l - this.cropStart : l), !o && j(l) && a[l] && a[l].touched && (l = void 0), l
                        }, t.prototype.updateData = function(t, e) {
                            var i, o, s, r = this.options,
                                n = r.dataSorting,
                                a = this.points,
                                h = [],
                                l = this.requireSorting,
                                c = t.length === a.length,
                                d = !0;
                            if (this.xIncrement = null, t.forEach((function(t, e) {
                                    var o = M(t) && this.pointClass.prototype.optionsToObject.call({
                                            series: this
                                        }, t) || {},
                                        d = o.x;
                                    o.id || j(d) ? (-1 === (o = this.findPointIndex(o, s)) || "undefined" === typeof o ? h.push(t) : a[o] && t !== r.data[o] ? (a[o].update(t, !1, null, !1), a[o].touched = !0, l && (s = o + 1)) : a[o] && (a[o].touched = !0), (!c || e !== o || n && n.enabled || this.hasDerivedData) && (i = !0)) : h.push(t)
                                }), this), i)
                                for (t = a.length; t--;)(o = a[t]) && !o.touched && o.remove && o.remove(!1, e);
                            else !c || n && n.enabled ? d = !1 : (t.forEach((function(t, e) {
                                t !== a[e].y && a[e].update && a[e].update(t, !1, null, !1)
                            })), h.length = 0);
                            return a.forEach((function(t) {
                                t && (t.touched = !1)
                            })), !!d && (h.forEach((function(t) {
                                this.addPoint(t, !1, null, null, !1)
                            }), this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = b(this.xData), this.autoIncrement()), !0)
                        }, t.prototype.setData = function(t, e, i, o) {
                            var s = this,
                                r = s.points,
                                n = r && r.length || 0,
                                a = s.options,
                                h = s.chart,
                                l = a.dataSorting,
                                c = s.xAxis,
                                d = a.turboThreshold,
                                p = this.xData,
                                u = this.yData,
                                f = s.pointArrayMap;
                            f = f && f.length;
                            var g, m = a.keys,
                                y = 0,
                                v = 1,
                                x = null,
                                b = (t = t || []).length;
                            if (e = z(e, !0), l && l.enabled && (t = this.sortData(t)), !1 !== o && b && n && !s.cropped && !s.hasGroupedData && s.visible && !s.isSeriesBoosting && (g = this.updateData(t, i)), !g) {
                                if (s.xIncrement = null, s.colorCounter = 0, this.parallelArrays.forEach((function(t) {
                                        s[t + "Data"].length = 0
                                    })), d && b > d)
                                    if (x = s.getFirstValidPoint(t), j(x))
                                        for (i = 0; i < b; i++) p[i] = this.autoIncrement(), u[i] = t[i];
                                    else if (D(x))
                                    if (f)
                                        for (i = 0; i < b; i++) o = t[i], p[i] = o[0], u[i] = o.slice(1, f + 1);
                                    else
                                        for (m && (y = 0 <= (y = m.indexOf("x")) ? y : 0, v = 0 <= (v = m.indexOf("y")) ? v : 1), i = 0; i < b; i++) o = t[i], p[i] = o[y], u[i] = o[v];
                                else A(12, !1, h);
                                else
                                    for (i = 0; i < b; i++) "undefined" !== typeof t[i] && (o = {
                                        series: s
                                    }, s.pointClass.prototype.applyOptions.apply(o, [t[i]]), s.updateParallelArrays(o, i));
                                for (u && I(u[0]) && A(14, !0, h), s.data = [], s.options.data = s.userOptions.data = t, i = n; i--;) r[i] && r[i].destroy && r[i].destroy();
                                c && (c.minRange = c.userMinRange), s.isDirty = h.isDirtyBox = !0, s.isDirtyData = !!r, i = !1
                            }
                            "point" === a.legendType && (this.processData(), this.generatePoints()), e && h.redraw(i)
                        }, t.prototype.sortData = function(t) {
                            var e = this,
                                i = e.options.dataSorting.sortKey || "y",
                                o = function(t, e) {
                                    return M(e) && t.pointClass.prototype.optionsToObject.call({
                                        series: t
                                    }, e) || {}
                                };
                            return t.forEach((function(i, s) {
                                t[s] = o(e, i), t[s].index = s
                            }), this), t.concat().sort((function(t, e) {
                                return t = E(i, t), (e = E(i, e)) < t ? -1 : e > t ? 1 : 0
                            })).forEach((function(t, e) {
                                t.x = e
                            }), this), e.linkedSeries && e.linkedSeries.forEach((function(e) {
                                var i = e.options,
                                    s = i.data;
                                i.dataSorting && i.dataSorting.enabled || !s || (s.forEach((function(i, r) {
                                    s[r] = o(e, i), t[r] && (s[r].x = t[r].x, s[r].index = r)
                                })), e.setData(s, !1))
                            })), t
                        }, t.prototype.getProcessedData = function(t) {
                            var e = this.xAxis,
                                i = this.options,
                                o = i.cropThreshold,
                                s = t || this.getExtremesFromAll || i.getExtremesFromAll,
                                r = this.isCartesian;
                            t = e && e.val2lin, i = !(!e || !e.logarithmic);
                            var n = 0,
                                a = this.xData,
                                h = this.yData,
                                l = this.requireSorting,
                                c = !1,
                                d = a.length;
                            if (e) {
                                var p = (c = e.getExtremes()).min,
                                    u = c.max;
                                c = e.categories && !e.names.length
                            }
                            if (r && this.sorted && !s && (!o || d > o || this.forceCrop))
                                if (a[d - 1] < p || a[0] > u) a = [], h = [];
                                else if (this.yData && (a[0] < p || a[d - 1] > u)) {
                                var f = this.cropData(this.xData, this.yData, p, u);
                                a = f.xData, h = f.yData, n = f.start, f = !0
                            }
                            for (o = a.length || 1; --o;)
                                if (0 < (e = i ? t(a[o]) - t(a[o - 1]) : a[o] - a[o - 1]) && ("undefined" === typeof g || e < g)) var g = e;
                                else 0 > e && l && !c && (A(15, !1, this.chart), l = !1);
                            return {
                                xData: a,
                                yData: h,
                                cropped: f,
                                cropStart: n,
                                closestPointRange: g
                            }
                        }, t.prototype.processData = function(t) {
                            var e = this.xAxis;
                            if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                            t = this.getProcessedData(), this.cropped = t.cropped, this.cropStart = t.cropStart, this.processedXData = t.xData, this.processedYData = t.yData, this.closestPointRange = this.basePointRange = t.closestPointRange
                        }, t.prototype.cropData = function(t, e, i, o, s) {
                            var r, n = t.length,
                                a = 0,
                                h = n;
                            for (s = z(s, this.cropShoulder), r = 0; r < n; r++)
                                if (t[r] >= i) {
                                    a = Math.max(0, r - s);
                                    break
                                }
                            for (i = r; i < n; i++)
                                if (t[i] > o) {
                                    h = i + s;
                                    break
                                }
                            return {
                                xData: t.slice(a, h),
                                yData: e.slice(a, h),
                                start: a,
                                end: h
                            }
                        }, t.prototype.generatePoints = function() {
                            var t = this.options,
                                e = t.data,
                                i = this.processedXData,
                                o = this.processedYData,
                                s = this.pointClass,
                                r = i.length,
                                n = this.cropStart || 0,
                                a = this.hasGroupedData,
                                h = t.keys,
                                l = [];
                            t = t.dataGrouping && t.dataGrouping.groupAll ? n : 0;
                            var c, d, p = this.data;
                            if (!p && !a) {
                                var u = [];
                                u.length = e.length, p = this.data = u
                            }
                            for (h && a && (this.options.keys = !1), d = 0; d < r; d++) {
                                if (u = n + d, a) {
                                    var f = (new s).init(this, [i[d]].concat(W(o[d])));
                                    f.dataGroup = this.groupMap[t + d], f.dataGroup.options && (f.options = f.dataGroup.options, P(f, f.dataGroup.options), delete f.dataLabels)
                                } else(f = p[u]) || "undefined" === typeof e[u] || (p[u] = f = (new s).init(this, e[u], i[d]));
                                f && (f.index = a ? t + d : u, l[d] = f)
                            }
                            if (this.options.keys = h, p && (r !== (c = p.length) || a))
                                for (d = 0; d < c; d++) d !== n || a || (d += r), p[d] && (p[d].destroyElements(), p[d].plotX = void 0);
                            this.data = p, this.points = l, L(this, "afterGeneratePoints")
                        }, t.prototype.getXExtremes = function(t) {
                            return {
                                min: C(t),
                                max: b(t)
                            }
                        }, t.prototype.getExtremes = function(t, e) {
                            var i = this.xAxis,
                                o = this.yAxis,
                                s = this.processedXData || this.xData,
                                r = [],
                                n = this.requireSorting ? this.cropShoulder : 0;
                            o = !!o && o.positiveValuesOnly;
                            var a, h = 0,
                                l = 0,
                                c = 0,
                                d = (t = t || this.stackedYData || this.processedYData || []).length;
                            if (i) {
                                var p = i.getExtremes();
                                h = p.min, l = p.max
                            }
                            for (a = 0; a < d; a++) {
                                var u = s[a];
                                p = t[a];
                                var f = (j(p) || D(p)) && (p.length || 0 < p || !o);
                                if (u = e || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i || (s[a + n] || u) >= h && (s[a - n] || u) <= l, f && u)
                                    if (f = p.length)
                                        for (; f--;) j(p[f]) && (r[c++] = p[f]);
                                    else r[c++] = p
                            }
                            return t = {
                                dataMin: C(r),
                                dataMax: b(r)
                            }, L(this, "afterGetExtremes", {
                                dataExtremes: t
                            }), t
                        }, t.prototype.applyExtremes = function() {
                            var t = this.getExtremes();
                            return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
                        }, t.prototype.getFirstValidPoint = function(t) {
                            for (var e = t.length, i = 0, o = null; null === o && i < e;) o = t[i], i++;
                            return o
                        }, t.prototype.translate = function() {
                            this.processedXData || this.processData(), this.generatePoints();
                            var t, e, i = this.options,
                                o = i.stacking,
                                s = this.xAxis,
                                r = s.categories,
                                n = this.enabledDataSorting,
                                a = this.yAxis,
                                h = this.points,
                                l = h.length,
                                c = !!this.modifyValue,
                                d = this.pointPlacementToXValue(),
                                p = !!d,
                                u = i.threshold,
                                f = i.startFromThreshold ? u : 0,
                                g = this.zoneAxis || "y",
                                m = Number.MAX_VALUE;
                            for (t = 0; t < l; t++) {
                                var y = h[t],
                                    v = y.x,
                                    x = void 0,
                                    b = void 0,
                                    C = y.y,
                                    k = y.low,
                                    T = o && a.stacking && a.stacking.stacks[(this.negStacks && C < (f ? 0 : u) ? "-" : "") + this.stackKey];
                                if ((a.positiveValuesOnly && !a.validatePositiveValue(C) || s.positiveValuesOnly && !s.validatePositiveValue(v)) && (y.isNull = !0), y.plotX = e = w(S(s.translate(v, 0, 0, 0, 1, d, "flags" === this.type), -1e5, 1e5)), o && this.visible && T && T[v]) {
                                    var A = this.getStackIndicator(A, v, this.index);
                                    y.isNull || (b = (x = T[v]).points[A.key])
                                }
                                if (D(b) && (k = b[0], C = b[1], k === f && A.key === T[v].base && (k = z(j(u) && u, a.min)), a.positiveValuesOnly && 0 >= k && (k = null), y.total = y.stackTotal = x.total, y.percentage = x.total && y.y / x.total * 100, y.stackY = C, this.irregularWidths || x.setOffset(this.pointXOffset || 0, this.barW || 0)), y.yBottom = M(k) ? S(a.translate(k, 0, 1, 0, 1), -1e5, 1e5) : null, c && (C = this.modifyValue(C, y)), y.plotY = void 0, j(C) && "undefined" !== typeof(x = a.translate(C, !1, !0, !1, !0)) && (y.plotY = S(x, -1e5, 1e5)), y.isInside = this.isPointInside(y), y.clientX = p ? w(s.translate(v, 0, 0, 0, 1, d)) : e, y.negative = y[g] < (i[g + "Threshold"] || u || 0), y.category = r && "undefined" !== typeof r[y.x] ? r[y.x] : y.x, !y.isNull && !1 !== y.visible) {
                                    "undefined" !== typeof P && (m = Math.min(m, Math.abs(e - P)));
                                    var P = e
                                }
                                y.zone = this.zones.length && y.getZone(), !y.graphic && this.group && n && (y.isNew = !0)
                            }
                            this.closestPointRangePx = m, L(this, "afterTranslate")
                        }, t.prototype.getValidPoints = function(t, e, i) {
                            var o = this.chart;
                            return (t || this.points || []).filter((function(t) {
                                return !(e && !o.isInsidePlot(t.plotX, t.plotY, {
                                    inverted: o.inverted
                                })) && !1 !== t.visible && (i || !t.isNull)
                            }))
                        }, t.prototype.getClipBox = function(t, e) {
                            var i = this.options,
                                o = this.chart,
                                s = o.inverted,
                                r = this.xAxis,
                                n = r && this.yAxis,
                                a = o.options.chart.scrollablePlotArea || {};
                            return t && !1 === i.clip && n ? t = s ? {
                                y: -o.chartWidth + n.len + n.pos,
                                height: o.chartWidth,
                                width: o.chartHeight,
                                x: -o.chartHeight + r.len + r.pos
                            } : {
                                y: -n.pos,
                                height: o.chartHeight,
                                width: o.chartWidth,
                                x: -r.pos
                            } : (t = this.clipBox || o.clipBox, e && (t.width = o.plotSizeX, t.x = (o.scrollablePixelsX || 0) * (a.scrollPositionX || 0))), e ? {
                                width: t.width,
                                x: t.x
                            } : t
                        }, t.prototype.getSharedClipKey = function(t) {
                            if (this.sharedClipKey) return this.sharedClipKey;
                            var e = [t && t.duration, t && t.easing, t && t.defer, this.getClipBox(t).height, this.options.xAxis, this.options.yAxis].join();
                            return (!1 !== this.options.clip || t) && (this.sharedClipKey = e), e
                        }, t.prototype.setClip = function(t) {
                            var e = this.chart,
                                i = this.options,
                                o = e.renderer,
                                s = e.inverted,
                                r = this.clipBox,
                                n = this.getClipBox(t),
                                a = this.getSharedClipKey(t),
                                h = e.sharedClips[a],
                                l = e.sharedClips[a + "m"];
                            t && (n.width = 0, s && (n.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop))), h ? e.hasLoaded || h.attr(n) : (t && (e.sharedClips[a + "m"] = l = o.clipRect(s ? (e.plotSizeX || 0) + 99 : -99, s ? -e.plotLeft : -e.plotTop, 99, s ? e.chartWidth : e.chartHeight)), e.sharedClips[a] = h = o.clipRect(n), h.count = {
                                length: 0
                            }), t && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1), (!1 !== i.clip || t) && (this.group.clip(t || r ? h : e.clipRect), this.markerGroup.clip(l)), t || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && (r || (e.sharedClips[a] = h.destroy()), l && (e.sharedClips[a + "m"] = l.destroy())))
                        }, t.prototype.animate = function(t) {
                            var e = this.chart,
                                i = d(this.options.animation),
                                o = this.sharedClipKey;
                            if (t) this.setClip(i);
                            else if (o) {
                                t = e.sharedClips[o], o = e.sharedClips[o + "m"];
                                var s = this.getClipBox(i, !0);
                                t && t.animate(s, i), o && o.animate({
                                    width: s.width + 99,
                                    x: s.x - (e.inverted ? 0 : 99)
                                }, i)
                            }
                        }, t.prototype.afterAnimate = function() {
                            this.setClip(), L(this, "afterAnimate"), this.finishedAnimating = !0
                        }, t.prototype.drawPoints = function() {
                            var t, e, i = this.points,
                                o = this.chart,
                                s = this.options.marker,
                                r = this[this.specialGroup] || this.markerGroup,
                                n = this.xAxis,
                                a = z(s.enabled, !(n && !n.isRadial) || null, this.closestPointRangePx >= s.enabledThreshold * s.radius);
                            if (!1 !== s.enabled || this._hasPointMarkers)
                                for (t = 0; t < i.length; t++) {
                                    var h = i[t],
                                        l = (e = h.graphic) ? "animate" : "attr",
                                        c = h.marker || {},
                                        d = !!h.marker;
                                    if ((a && "undefined" === typeof c.enabled || c.enabled) && !h.isNull && !1 !== h.visible) {
                                        var p = z(c.symbol, this.symbol, "rect"),
                                            u = this.markerAttribs(h, h.selected && "select");
                                        this.enabledDataSorting && (h.startXPos = n.reversed ? -(u.width || 0) : n.width);
                                        var f = !1 !== h.isInside;
                                        e ? e[f ? "show" : "hide"](f).animate(u) : f && (0 < (u.width || 0) || h.hasImage) && (h.graphic = e = o.renderer.symbol(p, u.x, u.y, u.width, u.height, d ? c : s).add(r), this.enabledDataSorting && o.hasRendered && (e.attr({
                                            x: h.startXPos
                                        }), l = "animate")), e && "animate" === l && e[f ? "show" : "hide"](f).animate(u), e && !o.styledMode && e[l](this.pointAttribs(h, h.selected && "select")), e && e.addClass(h.getClassName(), !0)
                                    } else e && (h.graphic = e.destroy())
                                }
                        }, t.prototype.markerAttribs = function(t, e) {
                            var i = this.options,
                                o = i.marker,
                                s = t.marker || {},
                                r = s.symbol || o.symbol,
                                n = z(s.radius, o.radius);
                            return e && (o = o.states[e], e = s.states && s.states[e], n = z(e && e.radius, o && o.radius, n + (o && o.radiusPlus || 0))), t.hasImage = r && 0 === r.indexOf("url"), t.hasImage && (n = 0), t = {
                                x: i.crisp ? Math.floor(t.plotX - n) : t.plotX - n,
                                y: t.plotY - n
                            }, n && (t.width = t.height = 2 * n), t
                        }, t.prototype.pointAttribs = function(t, e) {
                            var i = this.options.marker,
                                o = t && t.options,
                                s = o && o.marker || {},
                                r = o && o.color,
                                n = t && t.color,
                                a = t && t.zone && t.zone.color,
                                h = this.color;
                            return t = z(s.lineWidth, i.lineWidth), o = 1, h = r || a || n || h, r = s.fillColor || i.fillColor || h, n = s.lineColor || i.lineColor || h, e = e || "normal", i = i.states[e], e = s.states && s.states[e] || {}, t = z(e.lineWidth, i.lineWidth, t + z(e.lineWidthPlus, i.lineWidthPlus, 0)), r = e.fillColor || i.fillColor || r, {
                                stroke: n = e.lineColor || i.lineColor || n,
                                "stroke-width": t,
                                fill: r,
                                opacity: o = z(e.opacity, i.opacity, o)
                            }
                        }, t.prototype.destroy = function(t) {
                            var e, i, o, s = this,
                                r = s.chart,
                                n = /AppleWebKit\/533/.test(y.navigator.userAgent),
                                a = s.data || [];
                            for (L(s, "destroy"), this.removeEvents(t), (s.axisTypes || []).forEach((function(t) {
                                    (o = s[t]) && o.series && (T(o.series, s), o.isDirty = o.forceRedraw = !0)
                                })), s.legendItem && s.chart.legend.destroyItem(s), e = a.length; e--;)(i = a[e]) && i.destroy && i.destroy();
                            s.clips && s.clips.forEach((function(t) {
                                return t.destroy()
                            })), c.clearTimeout(s.animationTimeout), R(s, (function(t, e) {
                                t instanceof l && !t.survive && t[n && "group" === e ? "hide" : "destroy"]()
                            })), r.hoverSeries === s && (r.hoverSeries = void 0), T(r.series, s), r.orderSeries(), R(s, (function(e, i) {
                                t && "hcEvents" === i || delete s[i]
                            }))
                        }, t.prototype.applyZones = function() {
                            var t, e, i, o, s, r, n, a, h = this,
                                l = this.chart,
                                c = l.renderer,
                                d = this.zones,
                                p = this.clips || [],
                                u = this.graph,
                                f = this.area,
                                g = Math.max(l.chartWidth, l.chartHeight),
                                m = this[(this.zoneAxis || "y") + "Axis"],
                                y = l.inverted,
                                v = !1;
                            if (d.length && (u || f) && m && "undefined" !== typeof m.min) {
                                var x = m.reversed,
                                    b = m.horiz;
                                u && !this.showLine && u.hide(), f && f.hide();
                                var C = m.getExtremes();
                                d.forEach((function(d, k) {
                                    t = x ? b ? l.plotWidth : 0 : b ? 0 : m.toPixels(C.min) || 0, t = S(z(e, t), 0, g), e = S(Math.round(m.toPixels(z(d.value, C.max), !0) || 0), 0, g), v && (t = e = m.toPixels(C.max)), o = Math.abs(t - e), s = Math.min(t, e), r = Math.max(t, e), m.isXAxis ? (i = {
                                        x: y ? r : s,
                                        y: 0,
                                        width: o,
                                        height: g
                                    }, b || (i.x = l.plotHeight - i.x)) : (i = {
                                        x: 0,
                                        y: y ? r : s,
                                        width: g,
                                        height: o
                                    }, b && (i.y = l.plotWidth - i.y)), y && c.isVML && (i = m.isXAxis ? {
                                        x: 0,
                                        y: x ? s : r,
                                        height: i.width,
                                        width: l.chartWidth
                                    } : {
                                        x: i.y - l.plotLeft - l.spacingBox.x,
                                        y: 0,
                                        width: i.height,
                                        height: l.chartHeight
                                    }), p[k] ? p[k].animate(i) : p[k] = c.clipRect(i), n = h["zone-area-" + k], a = h["zone-graph-" + k], u && a && a.clip(p[k]), f && n && n.clip(p[k]), v = d.value > C.max, h.resetZones && 0 === e && (e = void 0)
                                })), this.clips = p
                            } else h.visible && (u && u.show(!0), f && f.show(!0))
                        }, t.prototype.invertGroups = function(t) {
                            function e() {
                                ["group", "markerGroup"].forEach((function(e) {
                                    i[e] && (o.renderer.isVML && i[e].attr({
                                        width: i.yAxis.len,
                                        height: i.xAxis.len
                                    }), i[e].width = i.yAxis.len, i[e].height = i.xAxis.len, i[e].invert(!i.isRadialSeries && t))
                                }))
                            }
                            var i = this,
                                o = i.chart;
                            i.xAxis && (i.eventsToUnbind.push(x(o, "resize", e)), e(), i.invertGroups = e)
                        }, t.prototype.plotGroup = function(t, e, i, o, s) {
                            var r = this[t],
                                n = !r;
                            return i = {
                                visibility: i,
                                zIndex: o || .1
                            }, "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (i.opacity = this.opacity), n && (this[t] = r = this.chart.renderer.g().add(s)), r.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (M(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), r.attr(i)[n ? "attr" : "animate"](this.getPlotBox()), r
                        }, t.prototype.getPlotBox = function() {
                            var t = this.chart,
                                e = this.xAxis,
                                i = this.yAxis;
                            return t.inverted && (e = i, i = this.xAxis), {
                                translateX: e ? e.left : t.plotLeft,
                                translateY: i ? i.top : t.plotTop,
                                scaleX: 1,
                                scaleY: 1
                            }
                        }, t.prototype.removeEvents = function(t) {
                            t || N(this), this.eventsToUnbind.length && (this.eventsToUnbind.forEach((function(t) {
                                t()
                            })), this.eventsToUnbind.length = 0)
                        }, t.prototype.render = function() {
                            var t = this,
                                e = t.chart,
                                i = t.options,
                                o = d(i.animation),
                                s = t.visible ? "inherit" : "hidden",
                                r = i.zIndex,
                                n = t.hasRendered,
                                a = e.seriesGroup,
                                h = e.inverted,
                                l = !t.finishedAnimating && e.renderer.isSVG && o.duration;
                            L(this, "render");
                            var c = t.plotGroup("group", "series", s, r, a);
                            t.markerGroup = t.plotGroup("markerGroup", "markers", s, r, a), l && t.animate && t.animate(!0), c.inverted = !!z(t.invertible, t.isCartesian) && h, t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels && t.drawDataLabels(), t.redrawPoints && t.redrawPoints(), t.drawTracker && !1 !== t.options.enableMouseTracking && t.drawTracker(), t.invertGroups(h), !1 === i.clip || t.sharedClipKey || n || c.clip(e.clipRect), l && t.animate && t.animate(), n || (l && o.defer && (l += o.defer), t.animationTimeout = G((function() {
                                t.afterAnimate()
                            }), l || 0)), t.isDirty = !1, t.hasRendered = !0, L(t, "afterRender")
                        }, t.prototype.redraw = function() {
                            var t = this.chart,
                                e = this.isDirty || this.isDirtyData,
                                i = this.group,
                                o = this.xAxis,
                                s = this.yAxis;
                            i && (t.inverted && i.attr({
                                width: t.plotWidth,
                                height: t.plotHeight
                            }), i.animate({
                                translateX: z(o && o.left, t.plotLeft),
                                translateY: z(s && s.top, t.plotTop)
                            })), this.translate(), this.render(), e && delete this.kdTree
                        }, t.prototype.searchPoint = function(t, e) {
                            var i = this.xAxis,
                                o = this.yAxis,
                                s = this.chart.inverted;
                            return this.searchKDTree({
                                clientX: s ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                                plotY: s ? o.len - t.chartX + o.pos : t.chartY - o.pos
                            }, e, t)
                        }, t.prototype.buildKDTree = function(t) {
                            function e(t, o, s) {
                                var r = t && t.length;
                                if (r) {
                                    var n = i.kdAxisArray[o % s];
                                    return t.sort((function(t, e) {
                                        return t[n] - e[n]
                                    })), {
                                        point: t[r = Math.floor(r / 2)],
                                        left: e(t.slice(0, r), o + 1, s),
                                        right: e(t.slice(r + 1), o + 1, s)
                                    }
                                }
                            }
                            this.buildingKdTree = !0;
                            var i = this,
                                o = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                            delete i.kdTree, G((function() {
                                i.kdTree = e(i.getValidPoints(null, !i.directTouch), o, o), i.buildingKdTree = !1
                            }), i.options.kdNow || t && "touchstart" === t.type ? 0 : 1)
                        }, t.prototype.searchKDTree = function(t, e, i) {
                            var o = this,
                                s = this.kdAxisArray[0],
                                r = this.kdAxisArray[1],
                                n = e ? "distX" : "dist";
                            if (e = -1 < o.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, a, h) {
                                var l = i.point,
                                    c = o.kdAxisArray[a % h],
                                    d = l,
                                    p = M(e[s]) && M(l[s]) ? Math.pow(e[s] - l[s], 2) : null,
                                    u = M(e[r]) && M(l[r]) ? Math.pow(e[r] - l[r], 2) : null;
                                return u = (p || 0) + (u || 0), l.dist = M(u) ? Math.sqrt(u) : Number.MAX_VALUE, l.distX = M(p) ? Math.sqrt(p) : Number.MAX_VALUE, p = 0 > (c = e[c] - l[c]) ? "right" : "left", i[u = 0 > c ? "left" : "right"] && (d = (u = t(e, i[u], a + 1, h))[n] < d[n] ? u : l), i[p] && Math.sqrt(c * c) < d[n] && (d = (e = t(e, i[p], a + 1, h))[n] < d[n] ? e : d), d
                            }(t, this.kdTree, e, e)
                        }, t.prototype.pointPlacementToXValue = function() {
                            var t = this.options,
                                e = t.pointRange,
                                i = this.xAxis;
                            return "between" === (t = t.pointPlacement) && (t = i.reversed ? -.5 : .5), j(t) ? t * (e || i.pointRange) : 0
                        }, t.prototype.isPointInside = function(t) {
                            return "undefined" !== typeof t.plotY && "undefined" !== typeof t.plotX && 0 <= t.plotY && t.plotY <= this.yAxis.len && 0 <= t.plotX && t.plotX <= this.xAxis.len
                        }, t.prototype.drawTracker = function() {
                            var t = this,
                                e = t.options,
                                i = e.trackByArea,
                                o = [].concat(i ? t.areaPath : t.graphPath),
                                s = t.chart,
                                r = s.pointer,
                                n = s.renderer,
                                a = s.options.tooltip.snap,
                                h = t.tracker,
                                l = function(e) {
                                    s.hoverSeries !== t && t.onMouseOver()
                                },
                                c = "rgba(192,192,192," + (m ? 1e-4 : .002) + ")";
                            h ? h.attr({
                                d: o
                            }) : t.graph && (t.tracker = n.path(o).attr({
                                visibility: t.visible ? "visible" : "hidden",
                                zIndex: 2
                            }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), s.styledMode || t.tracker.attr({
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                stroke: c,
                                fill: i ? c : "none",
                                "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
                            }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((function(t) {
                                t && (t.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", (function(t) {
                                    r.onTrackerMouseOut(t)
                                })), e.cursor && !s.styledMode && t.css({
                                    cursor: e.cursor
                                }), g) && t.on("touchstart", l)
                            }))), L(this, "afterDrawTracker")
                        }, t.prototype.addPoint = function(t, e, i, o, s) {
                            var r = this.options,
                                n = this.data,
                                a = this.chart,
                                h = this.xAxis;
                            h = h && h.hasNames && h.names;
                            var l, c = r.data,
                                d = this.xData;
                            e = z(e, !0);
                            var p = {
                                series: this
                            };
                            this.pointClass.prototype.applyOptions.apply(p, [t]);
                            var u = p.x,
                                f = d.length;
                            if (this.requireSorting && u < d[f - 1])
                                for (l = !0; f && d[f - 1] > u;) f--;
                            this.updateParallelArrays(p, "splice", f, 0, 0), this.updateParallelArrays(p, f), h && p.name && (h[u] = p.name), c.splice(f, 0, t), l && (this.data.splice(f, 0, null), this.processData()), "point" === r.legendType && this.generatePoints(), i && (n[0] && n[0].remove ? n[0].remove(!1) : (n.shift(), this.updateParallelArrays(p, "shift"), c.shift())), !1 !== s && L(this, "addPoint", {
                                point: p
                            }), this.isDirtyData = this.isDirty = !0, e && a.redraw(o)
                        }, t.prototype.removePoint = function(t, e, i) {
                            var o = this,
                                s = o.data,
                                r = s[t],
                                n = o.points,
                                a = o.chart,
                                h = function() {
                                    n && n.length === s.length && n.splice(t, 1), s.splice(t, 1), o.options.data.splice(t, 1), o.updateParallelArrays(r || {
                                        series: o
                                    }, "splice", t, 1), r && r.destroy(), o.isDirty = !0, o.isDirtyData = !0, e && a.redraw()
                                };
                            p(i, a), e = z(e, !0), r ? r.firePointEvent("remove", null, h) : h()
                        }, t.prototype.remove = function(t, e, i, o) {
                            function s() {
                                r.destroy(o), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), z(t, !0) && n.redraw(e)
                            }
                            var r = this,
                                n = r.chart;
                            !1 !== i ? L(r, "remove", null, s) : s()
                        }, t.prototype.update = function(t, e) {
                            t = k(t, this.userOptions), L(this, "update", {
                                options: t
                            });
                            var i, o = this,
                                s = o.chart,
                                r = o.userOptions,
                                n = o.initialType || o.type,
                                a = s.options.plotOptions,
                                h = v[n].prototype,
                                l = o.finishedAnimating && {
                                    animation: !1
                                },
                                c = {},
                                d = ["eventOptions", "navigatorSeries", "baseSeries"],
                                p = t.type || r.type || s.options.chart.type,
                                u = !(this.hasDerivedData || p && p !== this.type || "undefined" !== typeof t.pointStart || "undefined" !== typeof t.pointInterval || "undefined" !== typeof t.relativeXValue || o.hasOptionChanged("dataGrouping") || o.hasOptionChanged("pointStart") || o.hasOptionChanged("pointInterval") || o.hasOptionChanged("pointIntervalUnit") || o.hasOptionChanged("keys"));
                            if (p = p || n, u && (d.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== t.visible && d.push("area", "graph"), o.parallelArrays.forEach((function(t) {
                                    d.push(t + "Data")
                                })), t.data && (t.dataSorting && P(o.options.dataSorting, t.dataSorting), this.setData(t.data, !1))), t = B(r, l, {
                                    index: "undefined" === typeof r.index ? o.index : r.index,
                                    pointStart: z(a && a.series && a.series.pointStart, r.pointStart, o.xData[0])
                                }, !u && {
                                    data: o.options.data
                                }, t), u && t.data && (t.data = o.options.data), (d = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(d)).forEach((function(t) {
                                    d[t] = o[t], delete o[t]
                                })), a = !1, v[p]) {
                                if (a = p !== o.type, o.remove(!1, !1, !1, !0), a)
                                    if (Object.setPrototypeOf) Object.setPrototypeOf(o, v[p].prototype);
                                    else {
                                        for (i in l = Object.hasOwnProperty.call(o, "hcEvents") && o.hcEvents, h) o[i] = void 0;
                                        P(o, v[p].prototype), l ? o.hcEvents = l : delete o.hcEvents
                                    }
                            } else A(17, !0, s, {
                                missingModuleFor: p
                            });
                            if (d.forEach((function(t) {
                                    o[t] = d[t]
                                })), o.init(s, t), u && this.points) {
                                var f = o.options;
                                !1 === f.visible ? (c.graphic = 1, c.dataLabel = 1) : o._hasPointLabels || (t = f.marker, h = f.dataLabels, !t || !1 !== t.enabled && (r.marker && r.marker.symbol) === t.symbol || (c.graphic = 1), h && !1 === h.enabled && (c.dataLabel = 1)), this.points.forEach((function(t) {
                                    t && t.series && (t.resolveColor(), Object.keys(c).length && t.destroyElements(c), !1 === f.showInLegend && t.legendItem && s.legend.destroyItem(t))
                                }), this)
                            }
                            o.initialType = n, s.linkSeries(), a && o.linkedSeries.length && (o.isDirtyData = !0), L(this, "afterUpdate"), z(e, !0) && s.redraw(!!u && void 0)
                        }, t.prototype.setName = function(t) {
                            this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                        }, t.prototype.hasOptionChanged = function(t) {
                            var e = this.options[t],
                                i = this.chart.options.plotOptions,
                                o = this.userOptions[t];
                            return o ? e !== o : e !== z(i && i[this.type] && i[this.type][t], i && i.series && i.series[t], e)
                        }, t.prototype.onMouseOver = function() {
                            var t = this.chart,
                                e = t.hoverSeries;
                            t.pointer.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && L(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                        }, t.prototype.onMouseOut = function() {
                            var t = this.options,
                                e = this.chart,
                                i = e.tooltip,
                                o = e.hoverPoint;
                            e.hoverSeries = null, o && o.onMouseOut(), this && t.events.mouseOut && L(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), e.series.forEach((function(t) {
                                t.setState("", !0)
                            }))
                        }, t.prototype.setState = function(t, e) {
                            var i = this,
                                o = i.options,
                                s = i.graph,
                                r = o.inactiveOtherPoints,
                                n = o.states,
                                a = z(n[t || "normal"] && n[t || "normal"].animation, i.chart.options.chart.animation),
                                h = o.lineWidth,
                                l = 0,
                                c = o.opacity;
                            if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach((function(e) {
                                    e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                                })), i.state = t, !i.chart.styledMode)) {
                                if (n[t] && !1 === n[t].enabled) return;
                                if (t && (h = n[t].lineWidth || h + (n[t].lineWidthPlus || 0), c = z(n[t].opacity, c)), s && !s.dashstyle)
                                    for (o = {
                                            "stroke-width": h
                                        }, s.animate(o, a); i["zone-graph-" + l];) i["zone-graph-" + l].animate(o, a), l += 1;
                                r || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach((function(t) {
                                    t && t.animate({
                                        opacity: c
                                    }, a)
                                }))
                            }
                            e && r && i.points && i.setAllPointsToState(t || void 0)
                        }, t.prototype.setAllPointsToState = function(t) {
                            this.points.forEach((function(e) {
                                e.setState && e.setState(t)
                            }))
                        }, t.prototype.setVisible = function(t, e) {
                            var i = this,
                                o = i.chart,
                                s = i.legendItem,
                                r = o.options.chart.ignoreHiddenSeries,
                                n = i.visible,
                                a = (i.visible = t = i.options.visible = i.userOptions.visible = "undefined" === typeof t ? !n : t) ? "show" : "hide";
                            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((function(t) {
                                i[t] && i[t][a]()
                            })), o.hoverSeries !== i && (o.hoverPoint && o.hoverPoint.series) !== i || i.onMouseOut(), s && o.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && o.series.forEach((function(t) {
                                t.options.stacking && t.visible && (t.isDirty = !0)
                            })), i.linkedSeries.forEach((function(e) {
                                e.setVisible(t, !1)
                            })), r && (o.isDirtyBox = !0), L(i, a), !1 !== e && o.redraw()
                        }, t.prototype.show = function() {
                            this.setVisible(!0)
                        }, t.prototype.hide = function() {
                            this.setVisible(!1)
                        }, t.prototype.select = function(t) {
                            this.selected = t = this.options.selected = "undefined" === typeof t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), L(this, t ? "select" : "unselect")
                        }, t.prototype.shouldShowTooltip = function(t, e, i) {
                            return void 0 === i && (i = {}), i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
                        }, t.defaultOptions = a, t
                    }(), P(t.prototype, {
                        axisTypes: ["xAxis", "yAxis"],
                        coll: "series",
                        colorCounter: 0,
                        cropShoulder: 1,
                        directTouch: !1,
                        drawLegendSymbol: s.drawLineMarker,
                        isCartesian: !0,
                        kdAxisArray: ["clientX", "plotY"],
                        parallelArrays: ["x", "y"],
                        pointClass: n,
                        requireSorting: !0,
                        sorted: !0
                    }), h.series = t, t
                })), e(i, "Extensions/ScrollablePlotArea.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/Axis.js"], i["Core/Chart/Chart.js"], i["Core/Series/Series.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    var n = t.stop,
                        a = r.addEvent,
                        h = r.createElement,
                        l = r.merge,
                        c = r.pick;
                    a(i, "afterSetChartSize", (function(t) {
                        var i = this.options.chart.scrollablePlotArea,
                            o = i && i.minWidth;
                        if (i = i && i.minHeight, !this.renderer.forExport) {
                            if (o) {
                                if (this.scrollablePixelsX = o = Math.max(0, o - this.chartWidth)) {
                                    this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox), this.plotBox.width = this.plotWidth += o, this.inverted ? this.clipBox.height += o : this.clipBox.width += o;
                                    var s = {
                                        1: {
                                            name: "right",
                                            value: o
                                        }
                                    }
                                }
                            } else i && (this.scrollablePixelsY = o = Math.max(0, i - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox), this.plotBox.height = this.plotHeight += o, this.inverted ? this.clipBox.width += o : this.clipBox.height += o, s = {
                                2: {
                                    name: "bottom",
                                    value: o
                                }
                            });
                            s && !t.skipAxes && this.axes.forEach((function(t) {
                                s[t.side] ? t.getPlotLinePath = function() {
                                    var i = s[t.side].name,
                                        o = this[i];
                                    this[i] = o - s[t.side].value;
                                    var r = e.prototype.getPlotLinePath.apply(this, arguments);
                                    return this[i] = o, r
                                } : (t.setAxisSize(), t.setAxisTranslation())
                            }))
                        }
                    })), a(i, "render", (function() {
                        this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
                    })), i.prototype.setUpScrolling = function() {
                        var t = this,
                            e = {
                                WebkitOverflowScrolling: "touch",
                                overflowX: "hidden",
                                overflowY: "hidden"
                            };
                        this.scrollablePixelsX && (e.overflowX = "auto"), this.scrollablePixelsY && (e.overflowY = "auto"), this.scrollingParent = h("div", {
                            className: "highcharts-scrolling-parent"
                        }, {
                            position: "relative"
                        }, this.renderTo), this.scrollingContainer = h("div", {
                            className: "highcharts-scrolling"
                        }, e, this.scrollingParent), a(this.scrollingContainer, "scroll", (function() {
                            t.pointer && delete t.pointer.chartPosition
                        })), this.innerContainer = h("div", {
                            className: "highcharts-inner-container"
                        }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null
                    }, i.prototype.moveFixedElements = function() {
                        var t, e = this.container,
                            i = this.fixedRenderer,
                            o = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" ");
                        this.scrollablePixelsX && !this.inverted ? t = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted || this.scrollablePixelsY && !this.inverted ? t = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (t = ".highcharts-yaxis"), t && o.push(t + ":not(.highcharts-radial-axis)", t + "-labels:not(.highcharts-radial-axis-labels)"), o.forEach((function(t) {
                            [].forEach.call(e.querySelectorAll(t), (function(t) {
                                (t.namespaceURI === i.SVG_NS ? i.box : i.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                            }))
                        }))
                    }, i.prototype.applyFixed = function() {
                        var t = !this.fixedDiv,
                            e = this.options.chart,
                            i = e.scrollablePlotArea,
                            o = s.getRendererType();
                        t ? (this.fixedDiv = h("div", {
                            className: "highcharts-fixed"
                        }, {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: (e.style && e.style.zIndex || 0) + 2,
                            top: 0
                        }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = e = new o(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = e.path().attr({
                            fill: this.options.chart.backgroundColor || "#fff",
                            "fill-opacity": c(i.opacity, .85),
                            zIndex: -1
                        }).addClass("highcharts-scrollable-mask").add(), a(this, "afterShowResetZoom", this.moveFixedElements), a(this, "afterDrilldown", this.moveFixedElements), a(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), (this.scrollableDirty || t) && (this.scrollableDirty = !1, this.moveFixedElements()), e = this.chartWidth + (this.scrollablePixelsX || 0), o = this.chartHeight + (this.scrollablePixelsY || 0), n(this.container), this.container.style.width = e + "px", this.container.style.height = o + "px", this.renderer.boxWrapper.attr({
                            width: e,
                            height: o,
                            viewBox: [0, 0, e, o].join(" ")
                        }), this.chartBackground.attr({
                            width: e,
                            height: o
                        }), this.scrollingContainer.style.height = this.chartHeight + "px", t && (i.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * i.scrollPositionX), i.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * i.scrollPositionY)), o = this.axisOffset, t = this.plotTop - o[0] - 1, i = this.plotLeft - o[3] - 1, e = this.plotTop + this.plotHeight + o[2] + 1, o = this.plotLeft + this.plotWidth + o[1] + 1;
                        var r = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
                            l = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
                        t = this.scrollablePixelsX ? [
                            ["M", 0, t],
                            ["L", this.plotLeft - 1, t],
                            ["L", this.plotLeft - 1, e],
                            ["L", 0, e],
                            ["Z"],
                            ["M", r, t],
                            ["L", this.chartWidth, t],
                            ["L", this.chartWidth, e],
                            ["L", r, e],
                            ["Z"]
                        ] : this.scrollablePixelsY ? [
                            ["M", i, 0],
                            ["L", i, this.plotTop - 1],
                            ["L", o, this.plotTop - 1],
                            ["L", o, 0],
                            ["Z"],
                            ["M", i, l],
                            ["L", i, this.chartHeight],
                            ["L", o, this.chartHeight],
                            ["L", o, l],
                            ["Z"]
                        ] : [
                            ["M", 0, 0]
                        ], "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
                            d: t
                        })
                    }, a(e, "afterInit", (function() {
                        this.chart.scrollableDirty = !0
                    })), a(o, "show", (function() {
                        this.chart.scrollableDirty = !0
                    }))
                })), e(i, "Core/Axis/StackingAxis.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/Axis.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o, s = t.getDeferredAnimation,
                        r = i.addEvent,
                        n = i.destroyObjectProperties,
                        a = i.fireEvent,
                        h = i.isNumber,
                        l = i.objectEach;
                    return function(t) {
                        function e() {
                            var t = this.stacking;
                            if (t) {
                                var e = t.stacks;
                                l(e, (function(t, i) {
                                    n(t), e[i] = null
                                })), t && t.stackTotalGroup && t.stackTotalGroup.destroy()
                            }
                        }

                        function i() {
                            this.stacking || (this.stacking = new c(this))
                        }
                        var o = [];
                        t.compose = function(t) {
                            return -1 === o.indexOf(t) && (o.push(t), r(t, "init", i), r(t, "destroy", e)), t
                        };
                        var c = function() {
                            function t(t) {
                                this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
                            }
                            return t.prototype.buildStacks = function() {
                                var t, e = this.axis,
                                    i = e.series,
                                    o = e.options.reversedStacks,
                                    s = i.length;
                                if (!e.isXAxis) {
                                    for (this.usePercentage = !1, t = s; t--;) {
                                        var r = i[o ? t : s - t - 1];
                                        r.setStackedPoints(), r.setGroupedPoints()
                                    }
                                    for (t = 0; t < s; t++) i[t].modifyStacks();
                                    a(e, "afterBuildStacks")
                                }
                            }, t.prototype.cleanStacks = function() {
                                if (!this.axis.isXAxis) {
                                    if (this.oldStacks) var t = this.stacks = this.oldStacks;
                                    l(t, (function(t) {
                                        l(t, (function(t) {
                                            t.cumulative = t.total
                                        }))
                                    }))
                                }
                            }, t.prototype.resetStacks = function() {
                                var t = this,
                                    e = t.stacks;
                                t.axis.isXAxis || l(e, (function(e) {
                                    l(e, (function(i, o) {
                                        h(i.touched) && i.touched < t.stacksTouched ? (i.destroy(), delete e[o]) : (i.total = null, i.cumulative = null)
                                    }))
                                }))
                            }, t.prototype.renderStackTotals = function() {
                                var t = this.axis,
                                    e = t.chart,
                                    i = e.renderer,
                                    o = this.stacks;
                                t = s(e, t.options.stackLabels && t.options.stackLabels.animation || !1);
                                var r = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({
                                    visibility: "visible",
                                    zIndex: 6,
                                    opacity: 0
                                }).add();
                                r.translate(e.plotLeft, e.plotTop), l(o, (function(t) {
                                    l(t, (function(t) {
                                        t.render(r)
                                    }))
                                })), r.animate({
                                    opacity: 1
                                }, t)
                            }, t
                        }();
                        t.Additions = c
                    }(o || (o = {})), o
                })), e(i, "Extensions/Stacking.js", [i["Core/Axis/Axis.js"], i["Core/Chart/Chart.js"], i["Core/FormatUtilities.js"], i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Axis/StackingAxis.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n) {
                    var a = i.format,
                        h = n.correctFloat,
                        l = n.defined,
                        c = n.destroyObjectProperties,
                        d = n.isArray,
                        p = n.isNumber,
                        u = n.objectEach,
                        f = n.pick,
                        g = function() {
                            function t(t, e, i, o, s) {
                                var r = t.chart.inverted;
                                this.axis = t, this.isNegative = i, this.options = e = e || {}, this.x = o, this.total = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                                    align: e.align || (r ? i ? "left" : "right" : "center"),
                                    verticalAlign: e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
                                    y: e.y,
                                    x: e.x
                                }, this.textAlign = e.textAlign || (r ? i ? "right" : "left" : "center")
                            }
                            return t.prototype.destroy = function() {
                                c(this, this.axis)
                            }, t.prototype.render = function(t) {
                                var e = this.axis.chart,
                                    i = this.options,
                                    o = i.format;
                                o = o ? a(o, this, e) : i.formatter.call(this), this.label ? this.label.attr({
                                    text: o,
                                    visibility: "hidden"
                                }) : (this.label = e.renderer.label(o, null, null, i.shape, null, null, i.useHTML, !1, "stack-labels"), o = {
                                    r: i.borderRadius || 0,
                                    text: o,
                                    rotation: i.rotation,
                                    padding: f(i.padding, 5),
                                    visibility: "hidden"
                                }, e.styledMode || (o.fill = i.backgroundColor, o.stroke = i.borderColor, o["stroke-width"] = i.borderWidth, this.label.css(i.style)), this.label.attr(o), this.label.added || this.label.add(t)), this.label.labelrank = e.plotSizeY
                            }, t.prototype.setOffset = function(t, e, i, o, r) {
                                var n = this.axis,
                                    a = n.chart;
                                o = n.translate(n.stacking.usePercentage ? 100 : o || this.total, 0, 0, 0, 1), i = n.translate(i || 0), i = l(o) && Math.abs(o - i), t = f(r, a.xAxis[0].translate(this.x)) + t, n = l(o) && this.getStackBox(a, this, t, o, e, i, n), e = this.label, i = this.isNegative, t = "justify" === f(this.options.overflow, "justify");
                                var h = this.textAlign;
                                e && n && (r = e.getBBox(), o = e.padding, h = "left" === h ? a.inverted ? -o : o : "right" === h ? r.width : a.inverted && "center" === h ? r.width / 2 : a.inverted ? i ? r.width + o : -o : r.width / 2, i = a.inverted ? r.height / 2 : i ? -o : r.height, this.alignOptions.x = f(this.options.x, 0), this.alignOptions.y = f(this.options.y, 0), n.x -= h, n.y -= i, e.align(this.alignOptions, null, n), a.isInsidePlot(e.alignAttr.x + h - this.alignOptions.x, e.alignAttr.y + i - this.alignOptions.y) ? e.show() : (e.alignAttr.y = -9999, t = !1), t && s.prototype.justifyDataLabel.call(this.axis, e, this.alignOptions, e.alignAttr, r, n), e.attr({
                                    x: e.alignAttr.x,
                                    y: e.alignAttr.y
                                }), f(!t && this.options.crop, !0) && ((a = p(e.x) && p(e.y) && a.isInsidePlot(e.x - o + e.width, e.y) && a.isInsidePlot(e.x + o, e.y)) || e.hide()))
                            }, t.prototype.getStackBox = function(t, e, i, o, s, r, n) {
                                var a = e.axis.reversed,
                                    h = t.inverted,
                                    l = n.height + n.pos - (h ? t.plotLeft : t.plotTop);
                                return e = e.isNegative && !a || !e.isNegative && a, {
                                    x: h ? e ? o - n.right : o - r + n.pos - t.plotLeft : i + t.xAxis[0].transB - t.plotLeft,
                                    y: h ? n.height - i - s : e ? l - o - r : l - o,
                                    width: h ? r : s,
                                    height: h ? s : r
                                }
                            }, t
                        }();
                    return e.prototype.getStacks = function() {
                        var t = this,
                            e = t.inverted;
                        t.yAxis.forEach((function(t) {
                            t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
                        })), t.series.forEach((function(i) {
                            var o = i.xAxis && i.xAxis.options || {};
                            !i.options.stacking || !0 !== i.visible && !1 !== t.options.chart.ignoreHiddenSeries || (i.stackKey = [i.type, f(i.options.stack, ""), e ? o.top : o.left, e ? o.height : o.width].join())
                        }))
                    }, r.compose(t), s.prototype.setGroupedPoints = function() {
                        var t = this.yAxis.stacking;
                        this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? s.prototype.setStackedPoints.call(this, "group") : t && u(t.stacks, (function(e, i) {
                            "group" === i.slice(-5) && (u(e, (function(t) {
                                return t.destroy()
                            })), delete t.stacks[i])
                        }))
                    }, s.prototype.setStackedPoints = function(t) {
                        var e = t || this.options.stacking;
                        if (e && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                            var i = this.processedXData,
                                o = this.processedYData,
                                s = [],
                                r = o.length,
                                n = this.options,
                                a = n.threshold,
                                c = f(n.startFromThreshold && a, 0);
                            n = n.stack;
                            var p, u, m = "-" + (t = t ? this.type + "," + e : this.stackKey),
                                y = this.negStacks,
                                v = this.yAxis,
                                x = v.stacking.stacks,
                                b = v.stacking.oldStacks;
                            for (v.stacking.stacksTouched += 1, u = 0; u < r; u++) {
                                var C = i[u],
                                    S = o[u],
                                    k = this.getStackIndicator(k, C, this.index),
                                    w = k.key,
                                    M = (p = y && S < (c ? 0 : a)) ? m : t;
                                x[M] || (x[M] = {}), x[M][C] || (b[M] && b[M][C] ? (x[M][C] = b[M][C], x[M][C].total = null) : x[M][C] = new g(v, v.options.stackLabels, p, C, n)), M = x[M][C], null !== S ? (M.points[w] = M.points[this.index] = [f(M.cumulative, c)], l(M.cumulative) || (M.base = w), M.touched = v.stacking.stacksTouched, 0 < k.index && !1 === this.singleStacks && (M.points[w][0] = M.points[this.index + "," + C + ",0"][0])) : M.points[w] = M.points[this.index] = null, "percent" === e ? (p = p ? t : m, y && x[p] && x[p][C] ? (p = x[p][C], M.total = p.total = Math.max(p.total, M.total) + Math.abs(S) || 0) : M.total = h(M.total + (Math.abs(S) || 0))) : "group" === e ? (d(S) && (S = S[0]), null !== S && (M.total = (M.total || 0) + 1)) : M.total = h(M.total + (S || 0)), M.cumulative = "group" === e ? (M.total || 1) - 1 : f(M.cumulative, c) + (S || 0), null !== S && (M.points[w].push(M.cumulative), s[u] = M.cumulative, M.hasValidPoints = !0)
                            }
                            "percent" === e && (v.stacking.usePercentage = !0), "group" !== e && (this.stackedYData = s), v.stacking.oldStacks = {}
                        }
                    }, s.prototype.modifyStacks = function() {
                        var t, e = this,
                            i = e.stackKey,
                            o = e.yAxis.stacking.stacks,
                            s = e.processedXData,
                            r = e.options.stacking;
                        e[r + "Stacker"] && [i, "-" + i].forEach((function(i) {
                            for (var n, a, h = s.length; h--;) n = s[h], t = e.getStackIndicator(t, n, e.index, i), (a = (n = o[i] && o[i][n]) && n.points[t.key]) && e[r + "Stacker"](a, n, h)
                        }))
                    }, s.prototype.percentStacker = function(t, e, i) {
                        e = e.total ? 100 / e.total : 0, t[0] = h(t[0] * e), t[1] = h(t[1] * e), this.stackedYData[i] = t[1]
                    }, s.prototype.getStackIndicator = function(t, e, i, o) {
                        return !l(t) || t.x !== e || o && t.key !== o ? t = {
                            x: e,
                            index: 0,
                            key: o
                        } : t.index++, t.key = [i, e, t.index].join(), t
                    }, o.StackItem = g, o.StackItem
                })), e(i, "Series/Line/LineSeries.js", [i["Core/Color/Palette.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        r = o.defined,
                        n = o.merge;
                    return o = function(i) {
                        function o() {
                            var t = null !== i && i.apply(this, arguments) || this;
                            return t.data = void 0, t.options = void 0, t.points = void 0, t
                        }
                        return s(o, i), o.prototype.drawGraph = function() {
                            var e = this,
                                i = this.options,
                                o = (this.gappedPath || this.getGraphPath).call(this),
                                s = this.chart.styledMode,
                                r = [
                                    ["graph", "highcharts-graph"]
                                ];
                            s || r[0].push(i.lineColor || this.color || t.neutralColor20, i.dashStyle), (r = e.getZonesGraphs(r)).forEach((function(t, r) {
                                var n = t[0],
                                    a = e[n],
                                    h = a ? "animate" : "attr";
                                a ? (a.endX = e.preventGraphAnimation ? null : o.xMap, a.animate({
                                    d: o
                                })) : o.length && (e[n] = a = e.chart.renderer.path(o).addClass(t[1]).attr({
                                    zIndex: 1
                                }).add(e.group)), a && !s && (n = {
                                    stroke: t[2],
                                    "stroke-width": i.lineWidth,
                                    fill: e.fillGraph && e.color || "none"
                                }, t[3] ? n.dashstyle = t[3] : "square" !== i.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), a[h](n).shadow(2 > r && i.shadow)), a && (a.startX = o.xMap, a.isArea = o.isArea)
                            }))
                        }, o.prototype.getGraphPath = function(t, e, i) {
                            var o, s = this,
                                n = s.options,
                                a = [],
                                h = [],
                                l = n.step,
                                c = (t = t || s.points).reversed;
                            return c && t.reverse(), (l = {
                                right: 1,
                                center: 2
                            }[l] || l && 3) && c && (l = 4 - l), (t = this.getValidPoints(t, !1, !(n.connectNulls && !e && !i))).forEach((function(c, d) {
                                var p = c.plotX,
                                    u = c.plotY,
                                    f = t[d - 1];
                                (c.leftCliff || f && f.rightCliff) && !i && (o = !0), c.isNull && !r(e) && 0 < d ? o = !n.connectNulls : c.isNull && !e ? o = !0 : (0 === d || o ? d = [
                                    ["M", c.plotX, c.plotY]
                                ] : s.getPointSpline ? d = [s.getPointSpline(t, c, d)] : l ? (d = 1 === l ? [
                                    ["L", f.plotX, u]
                                ] : 2 === l ? [
                                    ["L", (f.plotX + p) / 2, f.plotY],
                                    ["L", (f.plotX + p) / 2, u]
                                ] : [
                                    ["L", p, f.plotY]
                                ]).push(["L", p, u]) : d = [
                                    ["L", p, u]
                                ], h.push(c.x), l && (h.push(c.x), 2 === l && h.push(c.x)), a.push.apply(a, d), o = !1)
                            })), a.xMap = h, s.graphPath = a
                        }, o.prototype.getZonesGraphs = function(t) {
                            return this.zones.forEach((function(e, i) {
                                i = ["zone-graph-" + i, "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || "")], this.chart.styledMode || i.push(e.color || this.color, e.dashStyle || this.options.dashStyle), t.push(i)
                            }), this), t
                        }, o.defaultOptions = n(e.defaultOptions, {}), o
                    }(e), i.registerSeriesType("line", o), o
                })), e(i, "Series/Area/AreaSeries.js", [i["Core/Color/Color.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        r = t.parse,
                        n = i.seriesTypes.line;
                    t = o.extend;
                    var a = o.merge,
                        h = o.objectEach,
                        l = o.pick;
                    return o = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.data = void 0, e.options = void 0, e.points = void 0, e
                        }
                        return s(e, t), e.prototype.drawGraph = function() {
                            this.areaPath = [], t.prototype.drawGraph.apply(this);
                            var e = this,
                                i = this.areaPath,
                                o = this.options,
                                s = [
                                    ["area", "highcharts-area", this.color, o.fillColor]
                                ];
                            this.zones.forEach((function(t, i) {
                                s.push(["zone-area-" + i, "highcharts-area highcharts-zone-area-" + i + " " + t.className, t.color || e.color, t.fillColor || o.fillColor])
                            })), s.forEach((function(t) {
                                var s = t[0],
                                    n = e[s],
                                    a = n ? "animate" : "attr",
                                    h = {};
                                n ? (n.endX = e.preventGraphAnimation ? null : i.xMap, n.animate({
                                    d: i
                                })) : (h.zIndex = 0, (n = e[s] = e.chart.renderer.path(i).addClass(t[1]).add(e.group)).isArea = !0), e.chart.styledMode || (h.fill = l(t[3], r(t[2]).setOpacity(l(o.fillOpacity, .75)).get())), n[a](h), n.startX = i.xMap, n.shiftUnit = o.step ? 2 : 1
                            }))
                        }, e.prototype.getGraphPath = function(t) {
                            var e, i = n.prototype.getGraphPath,
                                o = this.options,
                                s = o.stacking,
                                r = this.yAxis,
                                a = [],
                                h = [],
                                c = this.index,
                                d = r.stacking.stacks[this.stackKey],
                                p = o.threshold,
                                u = Math.round(r.getThreshold(o.threshold));
                            o = l(o.connectNulls, "percent" === s);
                            var f = function(e, i, o) {
                                var n = t[e];
                                e = s && d[n.x].points[c];
                                var l = n[o + "Null"] || 0;
                                if (o = n[o + "Cliff"] || 0, n = !0, o || l) {
                                    var f = (l ? e[0] : e[1]) + o,
                                        g = e[0] + o;
                                    n = !!l
                                } else !s && t[i] && t[i].isNull && (f = g = p);
                                "undefined" !== typeof f && (h.push({
                                    plotX: m,
                                    plotY: null === f ? u : r.getThreshold(f),
                                    isNull: n,
                                    isCliff: !0
                                }), a.push({
                                    plotX: m,
                                    plotY: null === g ? u : r.getThreshold(g),
                                    doCurve: !1
                                }))
                            };
                            for (t = t || this.points, s && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) {
                                s || (t[e].leftCliff = t[e].rightCliff = t[e].leftNull = t[e].rightNull = void 0);
                                var g = t[e].isNull,
                                    m = l(t[e].rectPlotX, t[e].plotX),
                                    y = s ? l(t[e].yBottom, u) : u;
                                g && !o || (o || f(e, e - 1, "left"), g && !s && o || (h.push(t[e]), a.push({
                                    x: e,
                                    plotX: m,
                                    plotY: y
                                })), o || f(e, e + 1, "right"))
                            }
                            return e = i.call(this, h, !0, !0), a.reversed = !0, (y = (g = i.call(this, a, !0, !0))[0]) && "M" === y[0] && (g[0] = ["L", y[1], y[2]]), (g = e.concat(g)).length && g.push(["Z"]), i = i.call(this, h, !1, o), g.xMap = e.xMap, this.areaPath = g, i
                        }, e.prototype.getStackPoints = function(t) {
                            var e = this,
                                i = [],
                                o = [],
                                s = this.xAxis,
                                r = this.yAxis,
                                n = r.stacking.stacks[this.stackKey],
                                a = {},
                                c = r.series,
                                d = c.length,
                                p = r.options.reversedStacks ? 1 : -1,
                                u = c.indexOf(e);
                            if (t = t || this.points, this.options.stacking) {
                                for (var f = 0; f < t.length; f++) t[f].leftNull = t[f].rightNull = void 0, a[t[f].x] = t[f];
                                h(n, (function(t, e) {
                                    null !== t.total && o.push(e)
                                })), o.sort((function(t, e) {
                                    return t - e
                                }));
                                var g = c.map((function(t) {
                                    return t.visible
                                }));
                                o.forEach((function(t, h) {
                                    var f, m, y = 0;
                                    if (a[t] && !a[t].isNull) i.push(a[t]), [-1, 1].forEach((function(i) {
                                        var s = 1 === i ? "rightNull" : "leftNull",
                                            r = 0,
                                            l = n[o[h + i]];
                                        if (l)
                                            for (var y = u; 0 <= y && y < d;) {
                                                var v = c[y].index;
                                                (f = l.points[v]) || (v === e.index ? a[t][s] = !0 : g[y] && (m = n[t].points[v]) && (r -= m[1] - m[0])), y += p
                                            }
                                        a[t][1 === i ? "rightCliff" : "leftCliff"] = r
                                    }));
                                    else {
                                        for (var v = u; 0 <= v && v < d;) {
                                            if (f = n[t].points[c[v].index]) {
                                                y = f[1];
                                                break
                                            }
                                            v += p
                                        }
                                        y = l(y, 0), y = r.translate(y, 0, 1, 0, 1), i.push({
                                            isNull: !0,
                                            plotX: s.translate(t, 0, 0, 0, 1),
                                            x: t,
                                            plotY: y,
                                            yBottom: y
                                        })
                                    }
                                }))
                            }
                            return i
                        }, e.defaultOptions = a(n.defaultOptions, {
                            threshold: 0
                        }), e
                    }(n), t(o.prototype, {
                        singleStacks: !1,
                        drawLegendSymbol: e.drawRectangle
                    }), i.registerSeriesType("area", o), o
                })), e(i, "Series/Spline/SplineSeries.js", [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e) {
                    var i = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        o = t.seriesTypes.line,
                        s = e.merge,
                        r = e.pick;
                    return e = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.data = void 0, e.options = void 0, e.points = void 0, e
                        }
                        return i(e, t), e.prototype.getPointSpline = function(t, e, i) {
                            var o = e.plotX || 0,
                                s = e.plotY || 0,
                                n = t[i - 1];
                            if (i = t[i + 1], n && !n.isNull && !1 !== n.doCurve && !e.isCliff && i && !i.isNull && !1 !== i.doCurve && !e.isCliff) {
                                t = n.plotY || 0;
                                var a = i.plotX || 0;
                                i = i.plotY || 0;
                                var h = 0,
                                    l = (1.5 * o + (n.plotX || 0)) / 2.5,
                                    c = (1.5 * s + t) / 2.5,
                                    d = (1.5 * s + i) / 2.5;
                                (a = (1.5 * o + a) / 2.5) !== l && (h = (d - c) * (a - o) / (a - l) + s - d), d += h, (c += h) > t && c > s ? d = 2 * s - (c = Math.max(t, s)) : c < t && c < s && (d = 2 * s - (c = Math.min(t, s))), d > i && d > s ? c = 2 * s - (d = Math.max(i, s)) : d < i && d < s && (c = 2 * s - (d = Math.min(i, s))), e.rightContX = a, e.rightContY = d
                            }
                            return e = ["C", r(n.rightContX, n.plotX, 0), r(n.rightContY, n.plotY, 0), r(l, o, 0), r(c, s, 0), o, s], n.rightContX = n.rightContY = void 0, e
                        }, e.defaultOptions = s(o.defaultOptions), e
                    }(o), t.registerSeriesType("spline", e), e
                })), e(i, "Series/AreaSpline/AreaSplineSeries.js", [i["Series/Area/AreaSeries.js"], i["Series/Spline/SplineSeries.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s) {
                    var r = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        n = t.prototype,
                        a = s.extend,
                        h = s.merge;
                    return a((s = function(i) {
                        function o() {
                            var t = null !== i && i.apply(this, arguments) || this;
                            return t.data = void 0, t.points = void 0, t.options = void 0, t
                        }
                        return r(o, i), o.defaultOptions = h(e.defaultOptions, t.defaultOptions), o
                    }(e)).prototype, {
                        getGraphPath: n.getGraphPath,
                        getStackPoints: n.getStackPoints,
                        drawGraph: n.drawGraph,
                        drawLegendSymbol: i.drawRectangle
                    }), o.registerSeriesType("areaspline", s), s
                })), e(i, "Series/Column/ColumnSeries.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Color/Palette.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n, a) {
                    var h = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        l = t.animObject,
                        c = e.parse,
                        d = i.hasTouch;
                    t = i.noop;
                    var p = a.clamp,
                        u = a.css,
                        f = a.defined,
                        g = a.extend,
                        m = a.fireEvent,
                        y = a.isArray,
                        v = a.isNumber,
                        x = a.merge,
                        b = a.pick,
                        C = a.objectEach;
                    return a = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.borderWidth = void 0, e.data = void 0, e.group = void 0, e.options = void 0, e.points = void 0, e
                        }
                        return h(e, t), e.prototype.animate = function(t) {
                            var e = this,
                                i = this.yAxis,
                                o = e.options,
                                s = this.chart.inverted,
                                r = {},
                                n = s ? "translateX" : "translateY";
                            if (t) r.scaleY = .001, t = p(i.toPixels(o.threshold), i.pos, i.pos + i.len), s ? r.translateX = t - i.len : r.translateY = t, e.clipBox && e.setClip(), e.group.attr(r);
                            else {
                                var a = Number(e.group.attr(n));
                                e.group.animate({
                                    scaleY: 1
                                }, g(l(e.options.animation), {
                                    step: function(t, o) {
                                        e.group && (r[n] = a + o.pos * (i.pos - a), e.group.attr(r))
                                    }
                                }))
                            }
                        }, e.prototype.init = function(e, i) {
                            t.prototype.init.apply(this, arguments);
                            var o = this;
                            (e = o.chart).hasRendered && e.series.forEach((function(t) {
                                t.type === o.type && (t.isDirty = !0)
                            }))
                        }, e.prototype.getColumnMetrics = function() {
                            var t = this,
                                e = t.options,
                                i = t.xAxis,
                                o = t.yAxis,
                                s = i.options.reversedStacks;
                            s = i.reversed && !s || !i.reversed && s;
                            var r, n = {},
                                a = 0;
                            !1 === e.grouping ? a = 1 : t.chart.series.forEach((function(e) {
                                var i = e.yAxis,
                                    s = e.options;
                                if (e.type === t.type && (e.visible || !t.chart.options.chart.ignoreHiddenSeries) && o.len === i.len && o.pos === i.pos) {
                                    if (s.stacking && "group" !== s.stacking) {
                                        r = e.stackKey, "undefined" === typeof n[r] && (n[r] = a++);
                                        var h = n[r]
                                    } else !1 !== s.grouping && (h = a++);
                                    e.columnIndex = h
                                }
                            }));
                            var h = Math.min(Math.abs(i.transA) * (i.ordinal && i.ordinal.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
                                l = h * e.groupPadding,
                                c = (h - 2 * l) / (a || 1);
                            return e = Math.min(e.maxPointWidth || i.len, b(e.pointWidth, c * (1 - 2 * e.pointPadding))), t.columnMetrics = {
                                width: e,
                                offset: (c - e) / 2 + (l + ((t.columnIndex || 0) + (s ? 1 : 0)) * c - h / 2) * (s ? -1 : 1),
                                paddedWidth: c,
                                columnCount: a
                            }, t.columnMetrics
                        }, e.prototype.crispCol = function(t, e, i, o) {
                            var s = this.chart,
                                r = this.borderWidth,
                                n = -(r % 2 ? .5 : 0);
                            return r = r % 2 ? .5 : 1, s.inverted && s.renderer.isVML && (r += 1), this.options.crisp && (i = Math.round(t + i) + n, i -= t = Math.round(t) + n), o = Math.round(e + o) + r, n = .5 >= Math.abs(e) && .5 < o, o -= e = Math.round(e) + r, n && o && (--e, o += 1), {
                                x: t,
                                y: e,
                                width: i,
                                height: o
                            }
                        }, e.prototype.adjustForMissingColumns = function(t, e, i, o) {
                            var s = this,
                                r = this.options.stacking;
                            if (!i.isNull && 1 < o.columnCount) {
                                var n = 0,
                                    a = 0;
                                C(this.yAxis.stacking && this.yAxis.stacking.stacks, (function(t) {
                                    if ("number" === typeof i.x && (t = t[i.x.toString()])) {
                                        var e = t.points[s.index],
                                            o = t.total;
                                        r ? (e && (n = a), t.hasValidPoints && a++) : y(e) && (n = e[1], a = o || 0)
                                    }
                                })), t = (i.plotX || 0) + ((a - 1) * o.paddedWidth + e) / 2 - e - n * o.paddedWidth
                            }
                            return t
                        }, e.prototype.translate = function() {
                            var t = this,
                                e = t.chart,
                                i = t.options,
                                o = t.dense = 2 > t.closestPointRange * t.xAxis.transA;
                            o = t.borderWidth = b(i.borderWidth, o ? 0 : 1);
                            var s = t.xAxis,
                                n = t.yAxis,
                                a = i.threshold,
                                h = t.translatedThreshold = n.getThreshold(a),
                                l = b(i.minPointLength, 5),
                                c = t.getColumnMetrics(),
                                d = c.width,
                                u = t.pointXOffset = c.offset,
                                g = t.dataMin,
                                m = t.dataMax,
                                y = t.barW = Math.max(d, 1 + 2 * o);
                            e.inverted && (h -= .5), i.pointPadding && (y = Math.ceil(y)), r.prototype.translate.apply(t), t.points.forEach((function(o) {
                                var r = b(o.yBottom, h),
                                    x = 999 + Math.abs(r),
                                    C = o.plotX || 0;
                                x = p(o.plotY, -x, n.len + x);
                                var S = Math.min(x, r),
                                    k = Math.max(x, r) - S,
                                    w = d,
                                    M = C + u,
                                    T = y;
                                l && Math.abs(k) < l && (k = l, C = !n.reversed && !o.negative || n.reversed && o.negative, v(a) && v(m) && o.y === a && m <= a && (n.min || 0) < a && (g !== m || (n.max || 0) <= a) && (C = !C), S = Math.abs(S - h) > l ? r - l : h - (C ? l : 0)), f(o.options.pointWidth) && (w = T = Math.ceil(o.options.pointWidth), M -= Math.round((w - d) / 2)), i.centerInCategory && (M = t.adjustForMissingColumns(M, w, o, c)), o.barX = M, o.pointWidth = w, o.tooltipPos = e.inverted ? [p(n.len + n.pos - e.plotLeft - x, n.pos - e.plotLeft, n.len + n.pos - e.plotLeft), s.len + s.pos - e.plotTop - M - T / 2, k] : [s.left - e.plotLeft + M + T / 2, p(x + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop), k], o.shapeType = t.pointClass.prototype.shapeType || "rect", o.shapeArgs = t.crispCol.apply(t, o.isNull ? [M, h, T, 0] : [M, S, T, k])
                            }))
                        }, e.prototype.drawGraph = function() {
                            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                        }, e.prototype.pointAttribs = function(t, e) {
                            var i = this.options,
                                o = this.pointAttrToOptions || {},
                                s = o.stroke || "borderColor",
                                r = o["stroke-width"] || "borderWidth",
                                n = t && t.color || this.color,
                                a = t && t[s] || i[s] || n;
                            o = t && t.options.dashStyle || i.dashStyle;
                            var h = t && t[r] || i[r] || this[r] || 0,
                                l = b(t && t.opacity, i.opacity, 1);
                            if (t && this.zones.length) {
                                var d = t.getZone();
                                n = t.options.color || d && (d.color || t.nonZonedColor) || this.color, d && (a = d.borderColor || a, o = d.dashStyle || o, h = d.borderWidth || h)
                            }
                            return e && t && (e = (t = x(i.states[e], t.options.states && t.options.states[e] || {})).brightness, n = t.color || "undefined" !== typeof e && c(n).brighten(t.brightness).get() || n, a = t[s] || a, h = t[r] || h, o = t.dashStyle || o, l = b(t.opacity, l)), s = {
                                fill: n,
                                stroke: a,
                                "stroke-width": h,
                                opacity: l
                            }, o && (s.dashstyle = o), s
                        }, e.prototype.drawPoints = function() {
                            var t, e = this,
                                i = this.chart,
                                o = e.options,
                                s = i.renderer,
                                r = o.animationLimit || 250;
                            e.points.forEach((function(n) {
                                var a = n.graphic,
                                    h = !!a,
                                    l = a && i.pointCount < r ? "animate" : "attr";
                                v(n.plotY) && null !== n.y ? (t = n.shapeArgs, a && n.hasNewShapeType() && (a = a.destroy()), e.enabledDataSorting && (n.startXPos = e.xAxis.reversed ? -(t && t.width || 0) : e.xAxis.width), a || (n.graphic = a = s[n.shapeType](t).add(n.group || e.group)) && e.enabledDataSorting && i.hasRendered && i.pointCount < r && (a.attr({
                                    x: n.startXPos
                                }), h = !0, l = "animate"), a && h && a[l](x(t)), o.borderRadius && a[l]({
                                    r: o.borderRadius
                                }), i.styledMode || a[l](e.pointAttribs(n, n.selected && "select")).shadow(!1 !== n.allowShadow && o.shadow, null, o.stacking && !o.borderRadius), a && (a.addClass(n.getClassName(), !0), a.attr({
                                    visibility: n.visible ? "inherit" : "hidden"
                                }))) : a && (n.graphic = a.destroy())
                            }))
                        }, e.prototype.drawTracker = function() {
                            var t, e = this,
                                i = e.chart,
                                o = i.pointer,
                                s = function(t) {
                                    var e = o.getPointFromEvent(t);
                                    "undefined" !== typeof e && (o.isDirectTouch = !0, e.onMouseOver(t))
                                };
                            e.points.forEach((function(e) {
                                t = y(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), t.forEach((function(t) {
                                    t.div ? t.div.point = e : t.element.point = e
                                }))
                            })), e._hasTracking || (e.trackerGroups.forEach((function(t) {
                                e[t] && (e[t].addClass("highcharts-tracker").on("mouseover", s).on("mouseout", (function(t) {
                                    o.onTrackerMouseOut(t)
                                })), d && e[t].on("touchstart", s), !i.styledMode && e.options.cursor && e[t].css(u).css({
                                    cursor: e.options.cursor
                                }))
                            })), e._hasTracking = !0), m(this, "afterDrawTracker")
                        }, e.prototype.remove = function() {
                            var t = this,
                                e = t.chart;
                            e.hasRendered && e.series.forEach((function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            })), r.prototype.remove.apply(t, arguments)
                        }, e.defaultOptions = x(r.defaultOptions, {
                            borderRadius: 0,
                            centerInCategory: !1,
                            groupPadding: .2,
                            marker: null,
                            pointPadding: .1,
                            minPointLength: 0,
                            cropThreshold: 50,
                            pointRange: null,
                            states: {
                                hover: {
                                    halo: !1,
                                    brightness: .1
                                },
                                select: {
                                    color: s.neutralColor20,
                                    borderColor: s.neutralColor100
                                }
                            },
                            dataLabels: {
                                align: void 0,
                                verticalAlign: void 0,
                                y: void 0
                            },
                            startFromThreshold: !0,
                            stickyTracking: !1,
                            tooltip: {
                                distance: 6
                            },
                            threshold: 0,
                            borderColor: s.backgroundColor
                        }), e
                    }(r), g(a.prototype, {
                        cropShoulder: 0,
                        directTouch: !0,
                        drawLegendSymbol: o.drawRectangle,
                        getSymbol: t,
                        negStacks: !0,
                        trackerGroups: ["group", "dataLabelsGroup"]
                    }), n.registerSeriesType("column", a), a
                })), e(i, "Core/Series/DataLabel.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/FormatUtilities.js"], i["Core/Color/Palette.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s, r = t.getDeferredAnimation,
                        n = e.format,
                        a = o.defined,
                        h = o.extend,
                        l = o.fireEvent,
                        c = o.isArray,
                        d = o.merge,
                        p = o.objectEach,
                        u = o.pick,
                        f = o.splat;
                    return function(t) {
                        function e(t, e, i, o, s) {
                            var r = this,
                                n = this.chart,
                                a = this.isCartesian && n.inverted,
                                l = this.enabledDataSorting,
                                c = u(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                                d = u(t.plotY, -9999),
                                p = e.getBBox(),
                                f = i.rotation,
                                g = i.align,
                                m = n.isInsidePlot(c, Math.round(d), {
                                    inverted: a,
                                    paneCoordinates: !0,
                                    series: r
                                }),
                                y = function(i) {
                                    l && r.xAxis && !v && r.setDataLabelStartPos(t, e, s, m, i)
                                },
                                v = "justify" === u(i.overflow, l ? "none" : "justify"),
                                x = this.visible && !1 !== t.visible && (t.series.forceDL || l && !v || m || u(i.inside, !!this.options.stacking) && o && n.isInsidePlot(c, a ? o.x + 1 : o.y + o.height - 1, {
                                    inverted: a,
                                    paneCoordinates: !0,
                                    series: r
                                }));
                            if (x) {
                                var b = n.renderer.fontMetrics(n.styledMode ? void 0 : i.style.fontSize, e).b;
                                o = h({
                                    x: a ? this.yAxis.len - d : c,
                                    y: Math.round(a ? this.xAxis.len - c : d),
                                    width: 0,
                                    height: 0
                                }, o), h(i, {
                                    width: p.width,
                                    height: p.height
                                }), f ? (v = !1, c = n.renderer.rotCorr(b, f), y(c = {
                                    x: o.x + (i.x || 0) + o.width / 2 + c.x,
                                    y: o.y + (i.y || 0) + {
                                        top: 0,
                                        middle: .5,
                                        bottom: 1
                                    }[i.verticalAlign] * o.height
                                }), e[s ? "attr" : "animate"](c).attr({
                                    align: g
                                }), y = 180 < (y = (f + 720) % 360) && 360 > y, "left" === g ? c.y -= y ? p.height : 0 : "center" === g ? (c.x -= p.width / 2, c.y -= p.height / 2) : "right" === g && (c.x -= p.width, c.y -= y ? 0 : p.height), e.placed = !0, e.alignAttr = c) : (y(o), e.align(i, void 0, o), c = e.alignAttr), v && 0 <= o.height ? this.justifyDataLabel(e, i, c, p, o, s) : u(i.crop, !0) && (x = n.isInsidePlot(c.x, c.y, {
                                    paneCoordinates: !0,
                                    series: r
                                }) && n.isInsidePlot(c.x + p.width, c.y + p.height, {
                                    paneCoordinates: !0,
                                    series: r
                                })), i.shape && !f && e[s ? "attr" : "animate"]({
                                    anchorX: a ? n.plotWidth - t.plotY : t.plotX,
                                    anchorY: a ? n.plotHeight - t.plotX : t.plotY
                                })
                            }
                            s && l && (e.placed = !1), x || l && !v || (e.hide(!0), e.placed = !1)
                        }

                        function o() {
                            var t = this,
                                e = t.chart,
                                o = t.options,
                                s = t.points,
                                h = t.hasRendered || 0,
                                d = e.renderer,
                                m = o.dataLabels,
                                y = m.animation;
                            if (y = m.defer ? r(e, y, t) : {
                                    defer: 0,
                                    duration: 0
                                }, m = g(g(e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels, e.options.plotOptions && e.options.plotOptions[t.type] && e.options.plotOptions[t.type].dataLabels), m), l(this, "drawDataLabels"), c(m) || m.enabled || t._hasPointLabels) {
                                var v = t.plotGroup("dataLabelsGroup", "data-labels", h ? "inherit" : "hidden", m.zIndex || 6);
                                v.attr({
                                    opacity: +h
                                }), !h && (h = t.dataLabelsGroup) && (t.visible && v.show(!0), h[o.animation ? "animate" : "attr"]({
                                    opacity: 1
                                }, y)), s.forEach((function(s) {
                                    f(g(m, s.dlOptions || s.options && s.options.dataLabels)).forEach((function(r, h) {
                                        var l = r.enabled && (!s.isNull || s.dataLabelOnNull) && function(t, e) {
                                                var i = e.filter;
                                                return !i || (e = i.operator, t = t[i.property], i = i.value, ">" === e && t > i || "<" === e && t < i || ">=" === e && t >= i || "<=" === e && t <= i || "==" === e && t == i || "===" === e && t === i)
                                            }(s, r),
                                            c = s.connectors ? s.connectors[h] : s.connector,
                                            f = s.dataLabels ? s.dataLabels[h] : s.dataLabel,
                                            g = u(r.distance, s.labelDistance),
                                            m = !f;
                                        if (l) {
                                            var y = s.getLabelConfig(),
                                                x = u(r[s.formatPrefix + "Format"], r.format);
                                            y = a(x) ? n(x, y, e) : (r[s.formatPrefix + "Formatter"] || r.formatter).call(y, r), x = r.style;
                                            var b = r.rotation;
                                            e.styledMode || (x.color = u(r.color, x.color, t.color, i.neutralColor100), "contrast" === x.color ? (s.contrastColor = d.getContrast(s.color || t.color), x.color = !a(g) && r.inside || 0 > g || o.stacking ? s.contrastColor : i.neutralColor100) : delete s.contrastColor, o.cursor && (x.cursor = o.cursor));
                                            var C = {
                                                r: r.borderRadius || 0,
                                                rotation: b,
                                                padding: r.padding,
                                                zIndex: 1
                                            };
                                            e.styledMode || (C.fill = r.backgroundColor, C.stroke = r.borderColor, C["stroke-width"] = r.borderWidth), p(C, (function(t, e) {
                                                "undefined" === typeof t && delete C[e]
                                            }))
                                        }!f || l && a(y) ? l && a(y) && (f ? C.text = y : (s.dataLabels = s.dataLabels || [], f = s.dataLabels[h] = b ? d.text(y, 0, -9999, r.useHTML).addClass("highcharts-data-label") : d.label(y, 0, -9999, r.shape, null, null, r.useHTML, null, "data-label"), h || (s.dataLabel = f), f.addClass(" highcharts-data-label-color-" + s.colorIndex + " " + (r.className || "") + (r.useHTML ? " highcharts-tracker" : ""))), f.options = r, f.attr(C), e.styledMode || f.css(x).shadow(r.shadow), f.added || f.add(v), r.textPath && !r.useHTML && (f.setTextPath(s.getDataLabelPath && s.getDataLabelPath(f) || s.graphic, r.textPath), s.dataLabelPath && !r.textPath.enabled && (s.dataLabelPath = s.dataLabelPath.destroy())), t.alignDataLabel(s, f, r, null, m)) : (s.dataLabel = s.dataLabel && s.dataLabel.destroy(), s.dataLabels && (1 === s.dataLabels.length ? delete s.dataLabels : delete s.dataLabels[h]), h || delete s.dataLabel, c && (s.connector = s.connector.destroy(), s.connectors && (1 === s.connectors.length ? delete s.connectors : delete s.connectors[h])))
                                    }))
                                }))
                            }
                            l(this, "afterDrawDataLabels")
                        }

                        function s(t, e, i, o, s, r) {
                            var n = this.chart,
                                a = e.align,
                                h = e.verticalAlign,
                                l = t.box ? 0 : t.padding || 0,
                                c = e.x;
                            c = void 0 === c ? 0 : c;
                            var d = e.y;
                            d = void 0 === d ? 0 : d;
                            var p = (i.x || 0) + l;
                            if (0 > p) {
                                "right" === a && 0 <= c ? (e.align = "left", e.inside = !0) : c -= p;
                                var u = !0
                            }
                            return (p = (i.x || 0) + o.width - l) > n.plotWidth && ("left" === a && 0 >= c ? (e.align = "right", e.inside = !0) : c += n.plotWidth - p, u = !0), 0 > (p = i.y + l) && ("bottom" === h && 0 <= d ? (e.verticalAlign = "top", e.inside = !0) : d -= p, u = !0), (p = (i.y || 0) + o.height - l) > n.plotHeight && ("top" === h && 0 >= d ? (e.verticalAlign = "bottom", e.inside = !0) : d += n.plotHeight - p, u = !0), u && (e.x = c, e.y = d, t.placed = !r, t.align(e, void 0, s)), u
                        }

                        function g(t, e) {
                            var i, o = [];
                            if (c(t) && !c(e)) o = t.map((function(t) {
                                return d(t, e)
                            }));
                            else if (c(e) && !c(t)) o = e.map((function(e) {
                                return d(t, e)
                            }));
                            else if (c(t) || c(e))
                                for (i = Math.max(t.length, e.length); i--;) o[i] = d(t[i], e[i]);
                            else o = d(t, e);
                            return o
                        }

                        function m(t, e, i, o, s) {
                            var r = this.chart,
                                n = r.inverted,
                                a = this.xAxis,
                                h = a.reversed,
                                l = n ? e.height / 2 : e.width / 2;
                            t = (t = t.pointWidth) ? t / 2 : 0, e.startXPos = n ? s.x : h ? -l - t : a.width - l + t, e.startYPos = n ? h ? this.yAxis.height - l + t : -l - t : s.y, o ? "hidden" === e.visibility && (e.show(), e.attr({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            })) : e.attr({
                                opacity: 1
                            }).animate({
                                opacity: 0
                            }, void 0, e.hide), r.hasRendered && (i && e.attr({
                                x: e.startXPos,
                                y: e.startYPos
                            }), e.placed = !0)
                        }
                        var y = [];
                        t.compose = function(t) {
                            if (-1 === y.indexOf(t)) {
                                var i = t.prototype;
                                y.push(t), i.alignDataLabel = e, i.drawDataLabels = o, i.justifyDataLabel = s, i.setDataLabelStartPos = m
                            }
                        }
                    }(s || (s = {})), s
                })), e(i, "Series/Column/ColumnDataLabel.js", [i["Core/Series/DataLabel.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o, s = e.series,
                        r = i.merge,
                        n = i.pick;
                    return function(e) {
                        function i(t, e, i, o, a) {
                            var h = this.chart.inverted,
                                l = t.series,
                                c = t.dlBox || t.shapeArgs,
                                d = n(t.below, t.plotY > n(this.translatedThreshold, l.yAxis.len)),
                                p = n(i.inside, !!this.options.stacking);
                            c && (0 > (o = r(c)).y && (o.height += o.y, o.y = 0), 0 < (c = o.y + o.height - l.yAxis.len) && c < o.height && (o.height -= c), h && (o = {
                                x: l.yAxis.len - o.y - o.height,
                                y: l.xAxis.len - o.x - o.width,
                                width: o.height,
                                height: o.width
                            }), p || (h ? (o.x += d ? 0 : o.width, o.width = 0) : (o.y += d ? o.height : 0, o.height = 0))), i.align = n(i.align, !h || p ? "center" : d ? "right" : "left"), i.verticalAlign = n(i.verticalAlign, h || p ? "middle" : d ? "top" : "bottom"), s.prototype.alignDataLabel.call(this, t, e, i, o, a), i.inside && t.contrastColor && e.css({
                                color: t.contrastColor
                            })
                        }
                        var o = [];
                        e.compose = function(e) {
                            t.compose(s), -1 === o.indexOf(e) && (o.push(e), e.prototype.alignDataLabel = i)
                        }
                    }(o || (o = {})), o
                })), e(i, "Series/Bar/BarSeries.js", [i["Series/Column/ColumnSeries.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        s = i.extend,
                        r = i.merge;
                    return s((i = function(e) {
                        function i() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.data = void 0, t.options = void 0, t.points = void 0, t
                        }
                        return o(i, e), i.defaultOptions = r(t.defaultOptions, {}), i
                    }(t)).prototype, {
                        inverted: !0
                    }), e.registerSeriesType("bar", i), i
                })), e(i, "Series/Scatter/ScatterSeries.js", [i["Series/Column/ColumnSeries.js"], i["Series/Line/LineSeries.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o) {
                    var s = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        r = o.addEvent,
                        n = o.extend,
                        a = o.merge;
                    return n((o = function(t) {
                        function i() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.data = void 0, e.options = void 0, e.points = void 0, e
                        }
                        return s(i, t), i.prototype.applyJitter = function() {
                            var t = this,
                                e = this.options.jitter,
                                i = this.points.length;
                            e && this.points.forEach((function(o, s) {
                                ["x", "y"].forEach((function(r, n) {
                                    var a = "plot" + r.toUpperCase();
                                    if (e[r] && !o.isNull) {
                                        var h = t[r + "Axis"],
                                            l = e[r] * h.transA;
                                        if (h && !h.isLog) {
                                            var c = Math.max(0, o[a] - l);
                                            h = Math.min(h.len, o[a] + l), n = 1e4 * Math.sin(s + n * i), o[a] = c + (h - c) * (n - Math.floor(n)), "x" === r && (o.clientX = o.plotX)
                                        }
                                    }
                                }))
                            }))
                        }, i.prototype.drawGraph = function() {
                            this.options.lineWidth ? t.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy())
                        }, i.defaultOptions = a(e.defaultOptions, {
                            lineWidth: 0,
                            findNearestPointBy: "xy",
                            jitter: {
                                x: 0,
                                y: 0
                            },
                            marker: {
                                enabled: !0
                            },
                            tooltip: {
                                headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                            }
                        }), i
                    }(e)).prototype, {
                        drawTracker: t.prototype.drawTracker,
                        sorted: !1,
                        requireSorting: !1,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                        takeOrdinalPosition: !1
                    }), r(o, "afterTranslate", (function() {
                        this.applyJitter()
                    })), i.registerSeriesType("scatter", o), o
                })), e(i, "Mixins/CenteredSeries.js", [i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = i.isNumber,
                        s = i.pick,
                        r = i.relativeLength,
                        n = t.deg2rad;
                    return t.CenteredSeriesMixin = {
                        getCenter: function() {
                            var t = this.options,
                                i = this.chart,
                                o = 2 * (t.slicedOffset || 0),
                                n = i.plotWidth - 2 * o,
                                a = i.plotHeight - 2 * o,
                                h = t.center,
                                l = Math.min(n, a),
                                c = t.size,
                                d = t.innerSize || 0;
                            for ("string" === typeof c && (c = parseFloat(c)), "string" === typeof d && (d = parseFloat(d)), t = [s(h[0], "50%"), s(h[1], "50%"), s(c && 0 > c ? void 0 : t.size, "100%"), s(d && 0 > d ? void 0 : t.innerSize || 0, "0%")], !i.angular || this instanceof e || (t[3] = 0), h = 0; 4 > h; ++h) c = t[h], i = 2 > h || 2 === h && /%$/.test(c), t[h] = r(c, [n, a, l, t[2]][h]) + (i ? o : 0);
                            return t[3] > t[2] && (t[3] = t[2]), t
                        },
                        getStartAndEndRadians: function(t, e) {
                            return t = o(t) ? t : 0, e = o(e) && e > t && 360 > e - t ? e : t + 360, {
                                start: n * (t + -90),
                                end: n * (e + -90)
                            }
                        }
                    }
                })), e(i, "Series/Pie/PiePoint.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Series/Point.js"], i["Core/Utilities.js"]], (function(t, e, i) {
                    var o = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        s = t.setAnimation,
                        r = i.addEvent,
                        n = i.defined;
                    t = i.extend;
                    var a = i.isNumber,
                        h = i.pick,
                        l = i.relativeLength;
                    return e = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.labelDistance = void 0, e.options = void 0, e.series = void 0, e
                        }
                        return o(e, t), e.prototype.getConnectorPath = function() {
                            var t = this.labelPosition,
                                e = this.series.options.dataLabels,
                                i = this.connectorShapes,
                                o = e.connectorShape;
                            return i[o] && (o = i[o]), o.call(this, {
                                x: t.final.x,
                                y: t.final.y,
                                alignment: t.alignment
                            }, t.connectorPosition, e)
                        }, e.prototype.getTranslate = function() {
                            return this.sliced ? this.slicedTranslation : {
                                translateX: 0,
                                translateY: 0
                            }
                        }, e.prototype.haloPath = function(t) {
                            var e = this.shapeArgs;
                            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                                innerR: e.r - 1,
                                start: e.start,
                                end: e.end
                            })
                        }, e.prototype.init = function() {
                            var e = this;
                            t.prototype.init.apply(this, arguments), this.name = h(this.name, "Slice");
                            var i = function(t) {
                                e.slice("select" === t.type)
                            };
                            return r(this, "select", i), r(this, "unselect", i), this
                        }, e.prototype.isValid = function() {
                            return a(this.y) && 0 <= this.y
                        }, e.prototype.setVisible = function(t, e) {
                            var i = this,
                                o = this.series,
                                s = o.chart,
                                r = o.options.ignoreHiddenPoint;
                            e = h(e, r), t !== this.visible && (this.visible = this.options.visible = t = "undefined" === typeof t ? !this.visible : t, o.options.data[o.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach((function(e) {
                                i[e] && i[e][t ? "show" : "hide"](t)
                            })), this.legendItem && s.legend.colorizeItem(this, t), t || "hover" !== this.state || this.setState(""), r && (o.isDirty = !0), e && s.redraw())
                        }, e.prototype.slice = function(t, e, i) {
                            var o = this.series;
                            s(i, o.chart), h(e, !0), this.sliced = this.options.sliced = n(t) ? t : !this.sliced, o.options.data[o.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                        }, e
                    }(e), t(e.prototype, {
                        connectorShapes: {
                            fixedOffset: function(t, e, i) {
                                var o = e.breakAt;
                                return e = e.touchingSliceAt, [
                                    ["M", t.x, t.y], i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * o.x - e.x, 2 * o.y - e.y, o.x, o.y] : ["L", o.x, o.y],
                                    ["L", e.x, e.y]
                                ]
                            },
                            straight: function(t, e) {
                                return e = e.touchingSliceAt, [
                                    ["M", t.x, t.y],
                                    ["L", e.x, e.y]
                                ]
                            },
                            crookedLine: function(t, e, i) {
                                e = e.touchingSliceAt;
                                var o = this.series,
                                    s = o.center[0],
                                    r = o.chart.plotWidth,
                                    n = o.chart.plotLeft;
                                o = t.alignment;
                                var a = this.shapeArgs.r;
                                return i = l(i.crookDistance, 1), i = ["L", r = "left" === o ? s + a + (r + n - s - a) * (1 - i) : n + (s - a) * i, t.y], s = !0, ("left" === o ? r > t.x || r < e.x : r < t.x || r > e.x) && (s = !1), t = [
                                    ["M", t.x, t.y]
                                ], s && t.push(i), t.push(["L", e.x, e.y]), t
                            }
                        }
                    }), e
                })), e(i, "Series/Pie/PieSeries.js", [i["Mixins/CenteredSeries.js"], i["Series/Column/ColumnSeries.js"], i["Core/Globals.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Color/Palette.js"], i["Series/Pie/PiePoint.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/Symbols.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r, n, a, h, l) {
                    var c = this && this.__extends || function() {
                            var t = function(e, i) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                    })(e, i)
                            };
                            return function(e, i) {
                                function o() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
                            }
                        }(),
                        d = t.getStartAndEndRadians;
                    i = i.noop;
                    var p = l.clamp,
                        u = l.extend,
                        f = l.fireEvent,
                        g = l.merge,
                        m = l.pick,
                        y = l.relativeLength;
                    return l = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.center = void 0, e.data = void 0, e.maxLabelDistance = void 0, e.options = void 0, e.points = void 0, e
                        }
                        return c(e, t), e.prototype.animate = function(t) {
                            var e = this,
                                i = e.points,
                                o = e.startAngleRad;
                            t || i.forEach((function(t) {
                                var i = t.graphic,
                                    s = t.shapeArgs;
                                i && s && (i.attr({
                                    r: m(t.startR, e.center && e.center[3] / 2),
                                    start: o,
                                    end: o
                                }), i.animate({
                                    r: s.r,
                                    start: s.start,
                                    end: s.end
                                }, e.options.animation))
                            }))
                        }, e.prototype.drawEmpty = function() {
                            var t = this.startAngleRad,
                                e = this.endAngleRad,
                                i = this.options;
                            if (0 === this.total && this.center) {
                                var o = this.center[0],
                                    r = this.center[1];
                                this.graph || (this.graph = this.chart.renderer.arc(o, r, this.center[1] / 2, 0, t, e).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                                    d: h.arc(o, r, this.center[2] / 2, 0, {
                                        start: t,
                                        end: e,
                                        innerR: this.center[3] / 2
                                    })
                                }), this.chart.styledMode || this.graph.attr({
                                    "stroke-width": i.borderWidth,
                                    fill: i.fillColor || "none",
                                    stroke: i.color || s.neutralColor20
                                })
                            } else this.graph && (this.graph = this.graph.destroy())
                        }, e.prototype.drawPoints = function() {
                            var t = this.chart.renderer;
                            this.points.forEach((function(e) {
                                e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                            }))
                        }, e.prototype.generatePoints = function() {
                            t.prototype.generatePoints.call(this), this.updateTotals()
                        }, e.prototype.getX = function(t, e, i) {
                            var o = this.center,
                                s = this.radii ? this.radii[i.index] || 0 : o[2] / 2;
                            return t = Math.asin(p((t - o[1]) / (s + i.labelDistance), -1, 1)), o[0] + (e ? -1 : 1) * Math.cos(t) * (s + i.labelDistance) + (0 < i.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0)
                        }, e.prototype.hasData = function() {
                            return !!this.processedXData.length
                        }, e.prototype.redrawPoints = function() {
                            var t, e, i, o, s = this,
                                r = s.chart,
                                n = r.renderer,
                                a = s.options.shadow;
                            this.drawEmpty(), !a || s.shadowGroup || r.styledMode || (s.shadowGroup = n.g("shadow").attr({
                                zIndex: -1
                            }).add(s.group)), s.points.forEach((function(h) {
                                var l = {};
                                if (e = h.graphic, !h.isNull && e) {
                                    var c = void 0;
                                    o = h.shapeArgs, t = h.getTranslate(), r.styledMode || (c = h.shadowGroup, a && !c && (c = h.shadowGroup = n.g("shadow").add(s.shadowGroup)), c && c.attr(t), i = s.pointAttribs(h, h.selected && "select")), h.delayedRendering ? (e.setRadialReference(s.center).attr(o).attr(t), r.styledMode || e.attr(i).attr({
                                        "stroke-linejoin": "round"
                                    }).shadow(a, c), h.delayedRendering = !1) : (e.setRadialReference(s.center), r.styledMode || g(!0, l, i), g(!0, l, o, t), e.animate(l)), e.attr({
                                        visibility: h.visible ? "inherit" : "hidden"
                                    }), e.addClass(h.getClassName(), !0)
                                } else e && (h.graphic = e.destroy())
                            }))
                        }, e.prototype.sortByAngle = function(t, e) {
                            t.sort((function(t, i) {
                                return "undefined" !== typeof t.angle && (i.angle - t.angle) * e
                            }))
                        }, e.prototype.translate = function(t) {
                            this.generatePoints();
                            var e = this.options,
                                i = e.slicedOffset,
                                o = i + (e.borderWidth || 0),
                                s = d(e.startAngle, e.endAngle),
                                r = this.startAngleRad = s.start;
                            s = (this.endAngleRad = s.end) - r;
                            var n = this.points,
                                a = e.dataLabels.distance;
                            e = e.ignoreHiddenPoint;
                            var h, l = n.length,
                                c = 0;
                            for (t || (this.center = t = this.getCenter()), h = 0; h < l; h++) {
                                var p = n[h],
                                    u = r + c * s;
                                !p.isValid() || e && !p.visible || (c += p.percentage / 100);
                                var g = r + c * s,
                                    v = {
                                        x: t[0],
                                        y: t[1],
                                        r: t[2] / 2,
                                        innerR: t[3] / 2,
                                        start: Math.round(1e3 * u) / 1e3,
                                        end: Math.round(1e3 * g) / 1e3
                                    };
                                p.shapeType = "arc", p.shapeArgs = v, p.labelDistance = m(p.options.dataLabels && p.options.dataLabels.distance, a), p.labelDistance = y(p.labelDistance, v.r), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, p.labelDistance), (g = (g + u) / 2) > 1.5 * Math.PI ? g -= 2 * Math.PI : g < -Math.PI / 2 && (g += 2 * Math.PI), p.slicedTranslation = {
                                    translateX: Math.round(Math.cos(g) * i),
                                    translateY: Math.round(Math.sin(g) * i)
                                }, v = Math.cos(g) * t[2] / 2;
                                var x = Math.sin(g) * t[2] / 2;
                                p.tooltipPos = [t[0] + .7 * v, t[1] + .7 * x], p.half = g < -Math.PI / 2 || g > Math.PI / 2 ? 1 : 0, p.angle = g, u = Math.min(o, p.labelDistance / 5), p.labelPosition = {
                                    natural: {
                                        x: t[0] + v + Math.cos(g) * p.labelDistance,
                                        y: t[1] + x + Math.sin(g) * p.labelDistance
                                    },
                                    final: {},
                                    alignment: 0 > p.labelDistance ? "center" : p.half ? "right" : "left",
                                    connectorPosition: {
                                        breakAt: {
                                            x: t[0] + v + Math.cos(g) * u,
                                            y: t[1] + x + Math.sin(g) * u
                                        },
                                        touchingSliceAt: {
                                            x: t[0] + v,
                                            y: t[1] + x
                                        }
                                    }
                                }
                            }
                            f(this, "afterTranslate")
                        }, e.prototype.updateTotals = function() {
                            var t, e = this.points,
                                i = e.length,
                                o = this.options.ignoreHiddenPoint,
                                s = 0;
                            for (t = 0; t < i; t++) {
                                var r = e[t];
                                !r.isValid() || o && !r.visible || (s += r.y)
                            }
                            for (this.total = s, t = 0; t < i; t++)(r = e[t]).percentage = 0 < s && (r.visible || !o) ? r.y / s * 100 : 0, r.total = s
                        }, e.defaultOptions = g(n.defaultOptions, {
                            center: [null, null],
                            clip: !1,
                            colorByPoint: !0,
                            dataLabels: {
                                allowOverlap: !0,
                                connectorPadding: 5,
                                connectorShape: "fixedOffset",
                                crookDistance: "70%",
                                distance: 30,
                                enabled: !0,
                                formatter: function() {
                                    return this.point.isNull ? void 0 : this.point.name
                                },
                                softConnector: !0,
                                x: 0
                            },
                            fillColor: void 0,
                            ignoreHiddenPoint: !0,
                            inactiveOtherPoints: !0,
                            legendType: "point",
                            marker: null,
                            size: null,
                            showInLegend: !1,
                            slicedOffset: 10,
                            stickyTracking: !1,
                            tooltip: {
                                followPointer: !0
                            },
                            borderColor: s.backgroundColor,
                            borderWidth: 1,
                            lineWidth: void 0,
                            states: {
                                hover: {
                                    brightness: .1
                                }
                            }
                        }), e
                    }(n), u(l.prototype, {
                        axisTypes: [],
                        directTouch: !0,
                        drawGraph: void 0,
                        drawLegendSymbol: o.drawRectangle,
                        drawTracker: e.prototype.drawTracker,
                        getCenter: t.getCenter,
                        getSymbol: i,
                        isCartesian: !1,
                        noSharedTooltip: !0,
                        pointAttribs: e.prototype.pointAttribs,
                        pointClass: r,
                        requireSorting: !1,
                        searchPoint: i,
                        trackerGroups: ["group", "dataLabelsGroup"]
                    }), a.registerSeriesType("pie", l), l
                })), e(i, "Series/Pie/PieDataLabel.js", [i["Core/Series/DataLabel.js"], i["Core/Globals.js"], i["Core/Color/Palette.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], (function(t, e, i, o, s, r) {
                    var n, a = e.noop,
                        h = o.distribute,
                        l = s.series,
                        c = r.arrayMax,
                        d = r.clamp,
                        p = r.defined,
                        u = r.merge,
                        f = r.pick,
                        g = r.relativeLength;
                    return function(e) {
                        function o() {
                            var t, e, o, s, r, n, a, d, g, m, y, v, x = this,
                                b = x.data,
                                C = x.chart,
                                S = x.options.dataLabels || {},
                                k = S.connectorPadding,
                                w = C.plotWidth,
                                M = C.plotHeight,
                                T = C.plotLeft,
                                A = Math.round(C.chartWidth / 3),
                                P = x.center,
                                O = P[2] / 2,
                                L = P[1],
                                E = [
                                    [],
                                    []
                                ],
                                D = [0, 0, 0, 0],
                                j = x.dataLabelPositioners;
                            x.visible && (S.enabled || x._hasPointLabels) && (b.forEach((function(t) {
                                t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                                    width: "auto"
                                }).css({
                                    width: "auto",
                                    textOverflow: "clip"
                                }), t.dataLabel.shortened = !1)
                            })), l.prototype.drawDataLabels.apply(x), b.forEach((function(t) {
                                t.dataLabel && (t.visible ? (E[t.half].push(t), t.dataLabel._pos = null, !p(S.style.width) && !p(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > A && (t.dataLabel.css({
                                    width: Math.round(.7 * A) + "px"
                                }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels))
                            })), E.forEach((function(e, i) {
                                var o, l = e.length,
                                    c = [];
                                if (l) {
                                    if (x.sortByAngle(e, i - .5), 0 < x.maxLabelDistance) {
                                        var u = Math.max(0, L - O - x.maxLabelDistance),
                                            b = Math.min(L + O + x.maxLabelDistance, C.plotHeight);
                                        e.forEach((function(t) {
                                            0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, L - O - t.labelDistance), t.bottom = Math.min(L + O + t.labelDistance, C.plotHeight), o = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                                                target: t.labelPosition.natural.y - t.top + o / 2,
                                                size: o,
                                                rank: t.y
                                            }, c.push(t.distributeBox))
                                        })), h(c, u = b + o - u, u / 5)
                                    }
                                    for (y = 0; y < l; y++) {
                                        if (t = e[y], n = t.labelPosition, s = t.dataLabel, m = !1 === t.visible ? "hidden" : "inherit", g = u = n.natural.y, c && p(t.distributeBox) && ("undefined" === typeof t.distributeBox.pos ? m = "hidden" : (a = t.distributeBox.size, g = j.radialDistributionY(t))), delete t.positionIndex, S.justify) d = j.justify(t, O, P);
                                        else switch (S.alignTo) {
                                            case "connectors":
                                                d = j.alignToConnectors(e, i, w, T);
                                                break;
                                            case "plotEdges":
                                                d = j.alignToPlotEdges(s, i, w, T);
                                                break;
                                            default:
                                                d = j.radialDistributionX(x, t, g, u)
                                        }
                                        s._attr = {
                                            visibility: m,
                                            align: n.alignment
                                        }, v = t.options.dataLabels || {}, s._pos = {
                                            x: d + f(v.x, S.x) + ({
                                                left: k,
                                                right: -k
                                            }[n.alignment] || 0),
                                            y: g + f(v.y, S.y) - 10
                                        }, n.final.x = d, n.final.y = g, f(S.crop, !0) && (r = s.getBBox().width, u = null, d - r < k && 1 === i ? (u = Math.round(r - d + k), D[3] = Math.max(u, D[3])) : d + r > w - k && 0 === i && (u = Math.round(d + r - w + k), D[1] = Math.max(u, D[1])), 0 > g - a / 2 ? D[0] = Math.max(Math.round(a / 2 - g), D[0]) : g + a / 2 > M && (D[2] = Math.max(Math.round(g + a / 2 - M), D[2])), s.sideOverflow = u)
                                    }
                                }
                            })), 0 === c(D) || this.verifyDataLabelOverflow(D)) && (this.placeDataLabels(), this.points.forEach((function(t) {
                                var r;
                                v = u(S, t.options.dataLabels), (e = f(v.connectorWidth, 1)) && (o = t.connector, (s = t.dataLabel) && s._pos && t.visible && 0 < t.labelDistance ? (m = s._attr.visibility, (r = !o) && (t.connector = o = C.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(x.dataLabelsGroup), C.styledMode || o.attr({
                                    "stroke-width": e,
                                    stroke: v.connectorColor || t.color || i.neutralColor60
                                })), o[r ? "attr" : "animate"]({
                                    d: t.getConnectorPath()
                                }), o.attr("visibility", m)) : o && (t.connector = o.destroy()))
                            })))
                        }

                        function s() {
                            this.points.forEach((function(t) {
                                var e, i = t.dataLabel;
                                i && t.visible && ((e = i._pos) ? (i.sideOverflow && (i._attr.width = Math.max(i.getBBox().width - i.sideOverflow, 0), i.css({
                                    width: i._attr.width + "px",
                                    textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                                }), i.shortened = !0), i.attr(i._attr), i[i.moved ? "animate" : "attr"](e), i.moved = !0) : i && i.attr({
                                    y: -9999
                                })), delete t.distributeBox
                            }), this)
                        }

                        function r(t) {
                            var e = this.center,
                                i = this.options,
                                o = i.center,
                                s = i.minSize || 80,
                                r = null !== i.size;
                            if (!r) {
                                if (null !== o[0]) var n = Math.max(e[2] - Math.max(t[1], t[3]), s);
                                else n = Math.max(e[2] - t[1] - t[3], s), e[0] += (t[3] - t[1]) / 2;
                                null !== o[1] ? n = d(n, s, e[2] - Math.max(t[0], t[2])) : (n = d(n, s, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), n < e[2] ? (e[2] = n, e[3] = Math.min(g(i.innerSize || 0, n), n), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : r = !0
                            }
                            return r
                        }
                        var n = [],
                            m = {
                                radialDistributionY: function(t) {
                                    return t.top + t.distributeBox.pos
                                },
                                radialDistributionX: function(t, e, i, o) {
                                    return t.getX(i < e.top + 2 || i > e.bottom - 2 ? o : i, e.half, e)
                                },
                                justify: function(t, e, i) {
                                    return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance)
                                },
                                alignToPlotEdges: function(t, e, i, o) {
                                    return t = t.getBBox().width, e ? t + o : i - t - o
                                },
                                alignToConnectors: function(t, e, i, o) {
                                    var s, r = 0;
                                    return t.forEach((function(t) {
                                        (s = t.dataLabel.getBBox().width) > r && (r = s)
                                    })), e ? r + o : i - r - o
                                }
                            };
                        e.compose = function(e) {
                            t.compose(l), -1 === n.indexOf(e) && (n.push(e), (e = e.prototype).dataLabelPositioners = m, e.alignDataLabel = a, e.drawDataLabels = o, e.placeDataLabels = s, e.verifyDataLabelOverflow = r)
                        }
                    }(n || (n = {})), n
                })), e(i, "Extensions/OverlappingDataLabels.js", [i["Core/Chart/Chart.js"], i["Core/Utilities.js"]], (function(t, e) {
                    function i(t, e) {
                        var i = !1;
                        if (t) {
                            var o = t.newOpacity;
                            t.oldOpacity !== o && (t.alignAttr && t.placed ? (t[o ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i = !0, t.alignAttr.opacity = o, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, (function() {
                                e.styledMode || t.css({
                                    pointerEvents: o ? "auto" : "none"
                                })
                            })), s(e, "afterHideOverlappingLabel")) : t.attr({
                                opacity: o
                            })), t.isOld = !0
                        }
                        return i
                    }
                    var o = e.addEvent,
                        s = e.fireEvent,
                        r = e.isArray,
                        n = e.isNumber,
                        a = e.objectEach,
                        h = e.pick;
                    o(t, "render", (function() {
                        var t = this,
                            e = [];
                        (this.labelCollectors || []).forEach((function(t) {
                            e = e.concat(t())
                        })), (this.yAxis || []).forEach((function(t) {
                            t.stacking && t.options.stackLabels && !t.options.stackLabels.allowOverlap && a(t.stacking.stacks, (function(t) {
                                a(t, (function(t) {
                                    t.label && "hidden" !== t.label.visibility && e.push(t.label)
                                }))
                            }))
                        })), (this.series || []).forEach((function(o) {
                            var s = o.options.dataLabels;
                            o.visible && (!1 !== s.enabled || o._hasPointLabels) && ((s = function(o) {
                                return o.forEach((function(o) {
                                    o.visible && (r(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : []).forEach((function(s) {
                                        var r = s.options;
                                        s.labelrank = h(r.labelrank, o.labelrank, o.shapeArgs && o.shapeArgs.height), r.allowOverlap ? (s.oldOpacity = s.opacity, s.newOpacity = 1, i(s, t)) : e.push(s)
                                    }))
                                }))
                            })(o.nodes || []), s(o.points))
                        })), this.hideOverlappingLabels(e)
                    })), t.prototype.hideOverlappingLabels = function(t) {
                        var e, o, r, a = this,
                            h = t.length,
                            l = a.renderer,
                            c = !1,
                            d = function(t) {
                                var e, i, o = t.box ? 0 : t.padding || 0,
                                    s = e = 0;
                                if (t && (!t.alignAttr || t.placed)) {
                                    var r = t.alignAttr || {
                                            x: t.attr("x"),
                                            y: t.attr("y")
                                        },
                                        a = t.parentGroup;
                                    t.width || (e = t.getBBox(), t.width = e.width, t.height = e.height, e = l.fontMetrics(null, t.element).h);
                                    var h = t.width - 2 * o;
                                    return (i = {
                                        left: "0",
                                        center: "0.5",
                                        right: "1"
                                    }[t.alignValue]) ? s = +i * h : n(t.x) && Math.round(t.x) !== t.translateX && (s = t.x - t.translateX), {
                                        x: r.x + (a.translateX || 0) + o - (s || 0),
                                        y: r.y + (a.translateY || 0) + o - e,
                                        width: t.width - 2 * o,
                                        height: t.height - 2 * o
                                    }
                                }
                            };
                        for (o = 0; o < h; o++)(e = t[o]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = d(e));
                        for (t.sort((function(t, e) {
                                return (e.labelrank || 0) - (t.labelrank || 0)
                            })), o = 0; o < h; o++) {
                            var p = (d = t[o]) && d.absoluteBox;
                            for (e = o + 1; e < h; ++e) {
                                var u = (r = t[e]) && r.absoluteBox;
                                !p || !u || d === r || 0 === d.newOpacity || 0 === r.newOpacity || u.x >= p.x + p.width || u.x + u.width <= p.x || u.y >= p.y + p.height || u.y + u.height <= p.y || ((d.labelrank < r.labelrank ? d : r).newOpacity = 0)
                            }
                        }
                        t.forEach((function(t) {
                            i(t, a) && (c = !0)
                        })), c && s(a, "afterHideAllOverlappingLabels")
                    }
                })), e(i, "Core/Responsive.js", [i["Core/Utilities.js"]], (function(t) {
                    var e, i = t.extend,
                        o = t.find,
                        s = t.isArray,
                        r = t.isObject,
                        n = t.merge,
                        a = t.objectEach,
                        h = t.pick,
                        l = t.splat,
                        c = t.uniqueKey;
                    return function(t) {
                        var e = [];
                        t.compose = function(t) {
                            return -1 === e.indexOf(t) && (e.push(t), i(t.prototype, d.prototype)), t
                        };
                        var d = function() {
                            function t() {}
                            return t.prototype.currentOptions = function(t) {
                                var e = this,
                                    i = {};
                                return function t(i, o, n, h) {
                                    var c;
                                    a(i, (function(i, a) {
                                        if (!h && -1 < e.collectionsWithUpdate.indexOf(a) && o[a])
                                            for (i = l(i), n[a] = [], c = 0; c < Math.max(i.length, o[a].length); c++) o[a][c] && (void 0 === i[c] ? n[a][c] = o[a][c] : (n[a][c] = {}, t(i[c], o[a][c], n[a][c], h + 1)));
                                        else r(i) ? (n[a] = s(i) ? [] : {}, t(i, o[a] || {}, n[a], h + 1)) : n[a] = "undefined" === typeof o[a] ? null : o[a]
                                    }))
                                }(t, this.options, i, 0), i
                            }, t.prototype.matchResponsiveRule = function(t, e) {
                                var i = t.condition;
                                (i.callback || function() {
                                    return this.chartWidth <= h(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= h(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= h(i.minWidth, 0) && this.chartHeight >= h(i.minHeight, 0)
                                }).call(this) && e.push(t._id)
                            }, t.prototype.setResponsive = function(t, e) {
                                var i = this,
                                    s = this.options.responsive,
                                    r = this.currentResponsive,
                                    a = [];
                                !e && s && s.rules && s.rules.forEach((function(t) {
                                    "undefined" === typeof t._id && (t._id = c()), i.matchResponsiveRule(t, a)
                                }), this), (e = n.apply(void 0, a.map((function(t) {
                                    return o((s || {}).rules || [], (function(e) {
                                        return e._id === t
                                    }))
                                })).map((function(t) {
                                    return t && t.chartOptions
                                })))).isResponsiveOptions = !0, (a = a.toString() || void 0) !== (r && r.ruleIds) && (r && this.update(r.undoOptions, t, !0), a ? ((r = this.currentOptions(e)).isResponsiveOptions = !0, this.currentResponsive = {
                                    ruleIds: a,
                                    mergedOptions: e,
                                    undoOptions: r
                                }, this.update(e, t, !0)) : this.currentResponsive = void 0)
                            }, t
                        }()
                    }(e || (e = {})), e
                })), e(i, "masters/highcharts.src.js", [i["Core/Globals.js"], i["Core/Utilities.js"], i["Core/DefaultOptions.js"], i["Core/Animation/Fx.js"], i["Core/Animation/AnimationUtilities.js"], i["Core/Renderer/HTML/AST.js"], i["Core/FormatUtilities.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Renderer/SVG/SVGRenderer.js"], i["Core/Renderer/HTML/HTMLElement.js"], i["Core/Renderer/HTML/HTMLRenderer.js"], i["Core/Axis/Axis.js"], i["Core/Axis/DateTimeAxis.js"], i["Core/Axis/LogarithmicAxis.js"], i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], i["Core/Axis/Tick.js"], i["Core/Tooltip.js"], i["Core/Series/Point.js"], i["Core/Pointer.js"], i["Core/MSPointer.js"], i["Core/Legend/Legend.js"], i["Core/Chart/Chart.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Series/Column/ColumnSeries.js"], i["Series/Column/ColumnDataLabel.js"], i["Series/Pie/PieSeries.js"], i["Series/Pie/PieDataLabel.js"], i["Core/Series/DataLabel.js"], i["Core/Responsive.js"], i["Core/Color/Color.js"], i["Core/Time.js"]], (function(t, e, i, o, s, r, n, a, h, l, c, d, p, u, f, g, m, y, v, x, b, C, S, k, w, M, T, A, P, O, L, E, D) {
                    return t.animate = s.animate, t.animObject = s.animObject, t.getDeferredAnimation = s.getDeferredAnimation, t.setAnimation = s.setAnimation, t.stop = s.stop, t.timers = o.timers, t.AST = r, t.Axis = p, t.Chart = S, t.chart = S.chart, t.Fx = o, t.Legend = C, t.PlotLineOrBand = g, t.Point = v, t.Pointer = b.isRequired() ? b : x, t.Series = k, t.SVGElement = h, t.SVGRenderer = l, t.Tick = m, t.Time = D, t.Tooltip = y, t.Color = E, t.color = E.parse, d.compose(l), c.compose(h), t.defaultOptions = i.defaultOptions, t.getOptions = i.getOptions, t.time = i.defaultTime, t.setOptions = i.setOptions, t.dateFormat = n.dateFormat, t.format = n.format, t.numberFormat = n.numberFormat, t.addEvent = e.addEvent, t.arrayMax = e.arrayMax, t.arrayMin = e.arrayMin, t.attr = e.attr, t.clearTimeout = e.clearTimeout, t.correctFloat = e.correctFloat, t.createElement = e.createElement, t.css = e.css, t.defined = e.defined, t.destroyObjectProperties = e.destroyObjectProperties, t.discardElement = e.discardElement, t.distribute = a.distribute, t.erase = e.erase, t.error = e.error, t.extend = e.extend, t.extendClass = e.extendClass, t.find = e.find, t.fireEvent = e.fireEvent, t.getMagnitude = e.getMagnitude, t.getStyle = e.getStyle, t.inArray = e.inArray, t.isArray = e.isArray, t.isClass = e.isClass, t.isDOMElement = e.isDOMElement, t.isFunction = e.isFunction, t.isNumber = e.isNumber, t.isObject = e.isObject, t.isString = e.isString, t.keys = e.keys, t.merge = e.merge, t.normalizeTickInterval = e.normalizeTickInterval, t.objectEach = e.objectEach, t.offset = e.offset, t.pad = e.pad, t.pick = e.pick, t.pInt = e.pInt, t.relativeLength = e.relativeLength, t.removeEvent = e.removeEvent, t.seriesType = w.seriesType, t.splat = e.splat, t.stableSort = e.stableSort, t.syncTimeout = e.syncTimeout, t.timeUnits = e.timeUnits, t.uniqueKey = e.uniqueKey, t.useSerialIds = e.useSerialIds, t.wrap = e.wrap, T.compose(M), O.compose(k), u.compose(p), f.compose(p), P.compose(A), g.compose(p), L.compose(S), t
                })), i["masters/highcharts.src.js"]._modules = i, i["masters/highcharts.src.js"]
            }, t.exports ? (r.default = r, t.exports = s.document ? r(s) : r) : void 0 === (o = function() {
                return r(s)
            }.call(e, i, e, t)) || (t.exports = o)
        }
    }
]);
//# sourceMappingURL=4b358913.de1a4922ff262cbfee9d.js.map