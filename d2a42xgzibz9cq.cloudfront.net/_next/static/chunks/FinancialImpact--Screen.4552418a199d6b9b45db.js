(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [378], {
        24745: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return F
                }
            });
            var r = a(26265),
                i = a(85893),
                n = a(64121),
                o = a(86010),
                l = a(10928),
                s = a.n(l),
                c = a(12297),
                u = a.n(c),
                f = a(92077),
                p = a.n(f),
                d = a(67294),
                h = a(28216),
                v = a(71720),
                g = a(44378),
                y = a(52408),
                m = a(7420),
                x = a(59999),
                b = a(74047),
                Z = a(52700),
                D = a(4706),
                C = a(8127),
                j = a(44102),
                O = a(20775),
                S = a(18446),
                w = a.n(S),
                k = a(29163),
                R = a(18529),
                _ = a(95988);

            function N(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, r = (0, O.Z)(t);
                    if (e) {
                        var i = (0, O.Z)(this).constructor;
                        a = Reflect.construct(r, arguments, i)
                    } else a = r.apply(this, arguments);
                    return (0, j.Z)(this, a)
                }
            }
            var P = (new Date).getFullYear(),
                A = function(t) {
                    (0, C.Z)(a, t);
                    var e = N(a);

                    function a(t) {
                        var i;
                        return (0, b.Z)(this, a), i = e.call(this, t), (0, r.Z)((0, D.Z)(i), "highchartRef", void 0), (0, r.Z)((0, D.Z)(i), "_chart", void 0), (0, r.Z)((0, D.Z)(i), "_reflowTimeout", void 0), (0, r.Z)((0, D.Z)(i), "updateChartSeries", (function() {
                            i.setState({
                                chartOptions: {
                                    series: i._getChartSeries(i.props.active),
                                    yAxis: {
                                        max: i.props.active ? void 0 : i._getMaxYValue()
                                    }
                                }
                            })
                        })), (0, r.Z)((0, D.Z)(i), "_getCategories", (function() {
                            return (0, R.e)(P, i.props.years).map((function(t, e) {
                                return e % 2 === 0 ? t.toString() : ""
                            }))
                        })), (0, r.Z)((0, D.Z)(i), "_getMaxYValue", (function() {
                            return 1.1 * Math.max.apply(Math, (0, x.Z)(i.props.utilityData).concat((0, x.Z)(i.props.solarData)))
                        })), (0, r.Z)((0, D.Z)(i), "_getChartSeries", (function(t) {
                            var e = i.props,
                                a = e.theme,
                                r = e.solarData,
                                n = e.utilityWithOffsetData,
                                o = e.utilityWithOffsetLabel,
                                l = e.utilityData;
                            return [{
                                type: "area",
                                name: "Estimated utility payments without solar",
                                data: t ? (0, x.Z)(l) : l.map((function(t) {
                                    return 0
                                })),
                                color: a.colors.redLight,
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        x2: 0,
                                        y1: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, a.colors.redLight],
                                        [1, "rgba(255,255,255,0)"]
                                    ]
                                }
                            }, {
                                type: "area",
                                name: "Solar payments",
                                data: t ? (0, x.Z)(r) : r.map((function(t) {
                                    return 0
                                })),
                                color: a.colors.greenLight,
                                opacity: 1,
                                zIndex: 2
                            }, {
                                type: "area",
                                name: o,
                                data: t ? (0, x.Z)(n) : n.map((function(t) {
                                    return 0
                                })),
                                color: a.colors.blue,
                                zIndex: 3
                            }]
                        })), i.highchartRef = (0, d.createRef)(), i.state = {
                            chartOptions: {
                                chart: {
                                    type: "area",
                                    polar: !1,
                                    inverted: !1,
                                    spacing: [0, 0, 0, 0]
                                },
                                credits: void 0,
                                title: {
                                    text: void 0
                                },
                                xAxis: {
                                    categories: i._getCategories(),
                                    tickmarkPlacement: "on",
                                    title: {
                                        text: null
                                    },
                                    labels: {
                                        autoRotation: void 0,
                                        overflow: "allow"
                                    }
                                },
                                yAxis: {
                                    min: 0,
                                    max: i._getMaxYValue(),
                                    title: {
                                        text: null
                                    },
                                    labels: {
                                        format: "${value}"
                                    }
                                },
                                tooltip: {
                                    split: !0,
                                    valuePrefix: "$"
                                },
                                legend: {
                                    verticalAlign: "top"
                                },
                                plotOptions: {
                                    area: {
                                        stacking: void 0,
                                        marker: {
                                            enabled: !1
                                        }
                                    }
                                },
                                series: i._getChartSeries(!1)
                            }
                        }, i
                    }
                    return (0, Z.Z)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t;
                            this._chart = null === (t = this.highchartRef.current) || void 0 === t ? void 0 : t.chart, this.updateChartSeries()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            var a = !!t.active !== !!this.props.active,
                                r = !w()(t.utilityData, this.props.utilityData),
                                i = !w()(t.solarData, this.props.solarData),
                                n = !w()(t.utilityWithOffsetData, this.props.utilityWithOffsetData);
                            (a || r || i || n) && this.updateChartSeries()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, i.jsx)(_.o, {
                                ref: this.highchartRef,
                                containerProps: {
                                    className: this.props.className
                                },
                                options: this.state.chartOptions
                            })
                        }
                    }]), a
                }(d.Component),
                z = (0, k.Zz)(A),
                L = a(96026),
                M = a.n(L);

            function W(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, r = (0, O.Z)(t);
                    if (e) {
                        var i = (0, O.Z)(this).constructor;
                        a = Reflect.construct(r, arguments, i)
                    } else a = r.apply(this, arguments);
                    return (0, j.Z)(this, a)
                }
            }
            var E = function(t) {
                    (0, C.Z)(a, t);
                    var e = W(a);

                    function a(t) {
                        var i;
                        return (0, b.Z)(this, a), i = e.call(this, t), (0, r.Z)((0, D.Z)(i), "highchartRef", void 0), (0, r.Z)((0, D.Z)(i), "_chart", void 0), (0, r.Z)((0, D.Z)(i), "_reflowTimeout", void 0), (0, r.Z)((0, D.Z)(i), "updateChartSeries", (function() {
                            i.setState({
                                chartOptions: {
                                    series: i._getChartSeries(i.props.active)
                                }
                            })
                        })), (0, r.Z)((0, D.Z)(i), "_getCategories", (function() {
                            return M()(1, i.props.years + 1).map((function(t) {
                                return "Yr ".concat(t)
                            }))
                        })), (0, r.Z)((0, D.Z)(i), "_getChartSeries", (function(t) {
                            var e = i.props,
                                a = e.theme,
                                r = e.solarData,
                                n = e.utilityWithOffsetData,
                                o = e.utilityWithOffsetLabel,
                                l = e.utilityData,
                                s = null === l || void 0 === l ? void 0 : l.map((function(t, e) {
                                    var a, i;
                                    return t - (null !== (a = null === r || void 0 === r ? void 0 : r[e]) && void 0 !== a ? a : 0) - (null !== (i = null === n || void 0 === n ? void 0 : n[e]) && void 0 !== i ? i : 0)
                                }));
                            return [{
                                type: "spline",
                                name: "Forecasted Utility Cost",
                                data: (0, x.Z)(l),
                                color: a.colors.redLight,
                                marker: {
                                    enabled: !1
                                },
                                zIndex: 4
                            }, {
                                type: "area",
                                name: o,
                                data: (0, x.Z)(n),
                                color: "#24bee3",
                                zIndex: 3
                            }, {
                                name: "Cost of Solar",
                                color: a.colors.grayDark,
                                data: (0, x.Z)(r),
                                type: "area",
                                zIndex: 2,
                                fillOpacity: 1
                            }, {
                                name: "Solar Savings",
                                color: a.colors.savings,
                                data: (0, x.Z)(l),
                                type: "area",
                                zIndex: 1,
                                fillOpacity: .8,
                                tooltip: {
                                    pointFormatter: function() {
                                        return ""
                                    }
                                }
                            }, {
                                name: "Estimated Savings",
                                color: a.colors.savings,
                                data: (0, x.Z)(null !== s && void 0 !== s ? s : []),
                                type: "line",
                                zIndex: 0,
                                showInLegend: !1,
                                opacity: 0
                            }]
                        })), i.highchartRef = (0, d.createRef)(), i.state = {
                            chartOptions: {
                                chart: {
                                    type: "area",
                                    polar: !1,
                                    inverted: !1,
                                    spacing: [0, 0, 0, 0]
                                },
                                title: {
                                    text: void 0
                                },
                                credits: void 0,
                                xAxis: {
                                    categories: i._getCategories(),
                                    tickmarkPlacement: "on",
                                    title: {
                                        text: null
                                    },
                                    labels: {
                                        autoRotation: void 0,
                                        overflow: "allow"
                                    }
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: null
                                    },
                                    labels: {
                                        format: "${value}"
                                    }
                                },
                                tooltip: {
                                    shared: !0,
                                    useHTML: !0,
                                    headerFormat: '<strong class="text-base">{point.key}</strong><table>',
                                    pointFormatter: function() {
                                        return '\n              <tr>\n                <td class="text-2xl pr-1" style="color:'.concat(this.color, '">\u25cf</td>\n                <td class="text-lg pr-4">').concat(this.series.name, '</td>\n                <td class="text-lg text-right">').concat(p()(this.y).format("$0,0"), "</td>\n              </tr>\n            ")
                                    },
                                    footerFormat: "</table>"
                                },
                                legend: {
                                    verticalAlign: "top"
                                },
                                plotOptions: {
                                    area: {
                                        stacking: void 0,
                                        marker: {
                                            enabled: !1
                                        }
                                    }
                                },
                                series: i._getChartSeries(!1)
                            }
                        }, i
                    }
                    return (0, Z.Z)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var t;
                            this._chart = null === (t = this.highchartRef.current) || void 0 === t ? void 0 : t.chart, this.updateChartSeries()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            var a = !!t.active !== !!this.props.active,
                                r = !w()(t.utilityData, this.props.utilityData),
                                i = !w()(t.solarData, this.props.solarData),
                                n = !w()(t.utilityWithOffsetData, this.props.utilityWithOffsetData);
                            (a || r || i || n) && this.updateChartSeries()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, i.jsx)(_.o, {
                                ref: this.highchartRef,
                                containerProps: {
                                    className: this.props.className
                                },
                                options: this.state.chartOptions
                            })
                        }
                    }]), a
                }(d.Component),
                I = (0, k.Zz)(E);

            function $(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }
            var F = function(t) {
                var e = t.heading,
                    a = t.isActive,
                    r = t.forceSelect,
                    o = (0, v.Z)("payment", "savings", r || "payment"),
                    l = (0, n.Z)(o, 2),
                    s = l[0],
                    c = l[1],
                    u = (0, h.v9)(m.nc),
                    f = (0, d.useCallback)((function() {
                        r || c()
                    }), [r, c]);
                return (0, i.jsx)(g.Z, {
                    title: null !== e && void 0 !== e ? e : "Financial Impact",
                    children: (0, i.jsxs)("div", {
                        className: "w-full h-full flex flex-col px-8 py-7 bg-white border-2 border-gray-900 border-opacity-20 rounded-lg shadow-lg",
                        children: [u && (0, i.jsx)(U, {
                            selected: s,
                            toggle: f
                        }), (0, i.jsx)(B, {
                            selected: s
                        }), (0, i.jsx)("div", {
                            className: "flex-grow flex justify-end",
                            children: !r && u ? (0, i.jsxs)(y.Z, {
                                activeIndex: "payment" === s ? 0 : 1,
                                children: [(0, i.jsx)(T, {
                                    isActive: a
                                }), (0, i.jsx)(Q, {
                                    isActive: a
                                })]
                            }) : "savings" === s ? (0, i.jsx)(Q, {
                                isActive: a
                            }) : (0, i.jsx)(T, {
                                isActive: a
                            })
                        })]
                    })
                })
            };

            function U(t) {
                var e = t.selected,
                    a = t.toggle;
                return (0, i.jsx)("div", {
                    className: "flex justify-center overflow-hidden pt-1 pb-3 mb-6",
                    children: (0, i.jsxs)("div", {
                        className: "bg-gray-200 inline-flex rounded relative",
                        children: [(0, i.jsx)("div", {
                            className: (0, o.Z)("bg-primary w-1/2 h-full rounded-lg absolute z-0 transition-all duration-500", "payment" === e ? "left-0" : "left-1/2")
                        }), (0, i.jsx)("button", {
                            type: "button",
                            className: (0, o.Z)("btn px-6 py-3 z-10 w-1/2", "payment" === e && "text-white"),
                            onClick: "savings" === e ? a : void 0,
                            "data-cy": "payment-toggle",
                            children: "Payment"
                        }), (0, i.jsx)("button", {
                            type: "button",
                            className: (0, o.Z)("btn px-6 py-3 z-10 w-1/2", "savings" === e && "text-white"),
                            onClick: "payment" === e ? a : void 0,
                            "data-cy": "savings-toggle",
                            children: "Savings"
                        })]
                    })
                })
            }
            var Y = function(t) {
                var e = t.className,
                    a = t.bgColor,
                    r = t.textColor,
                    n = t.value,
                    l = t.label;
                return (0, i.jsxs)("div", {
                    className: (0, o.Z)("py-8 rounded-lg", a, e),
                    children: [(0, i.jsx)("div", {
                        className: (0, o.Z)("font-bold text-5xl", r),
                        children: n
                    }), (0, i.jsx)("div", {
                        className: "mt-4 text-lg text-gray-500",
                        children: l
                    })]
                })
            };

            function B(t) {
                var e = t.selected,
                    a = (0, h.v9)(m.K9),
                    n = (0, h.v9)(m.v0),
                    o = (0, h.v9)(m.Qz),
                    l = (0, h.v9)(m.ZA),
                    c = (0, h.v9)(m.LS),
                    f = (0, h.v9)(m.wY),
                    v = (0, d.useMemo)((function() {
                        if ("savings" === e) {
                            var t, r, i = null !== (t = s()(l)) && void 0 !== t ? t : 0,
                                d = null !== (r = u()(o)) && void 0 !== r ? r : 0,
                                h = i - u()(c) - d;
                            return [{
                                bgColor: "bg-gray-200",
                                textColor: "text-secondary-light",
                                value: p()(i).format("$0,0"),
                                label: "Cost of Doing Nothing"
                            }, {
                                bgColor: "bg-blue-gray-800",
                                textColor: "text-green-light",
                                value: p()(h).format("$0,0"),
                                label: "Total Estimated Solar Savings"
                            }]
                        }
                        return [{
                            bgColor: "bg-gray-200",
                            textColor: "text-secondary-light",
                            value: p()(a).format("$0,0"),
                            label: "Current Monthly Utility Bill"
                        }, {
                            bgColor: "bg-blue-gray-800",
                            textColor: "text-green-light",
                            value: p()(n).format("$0,0"),
                            label: "Monthly Solar Payment"
                        }, {
                            bgColor: "bg-gray-200",
                            textColor: "text-alt-blue",
                            value: p()(f).format("$0,0"),
                            label: "Remaining Utility Bill After Solar"
                        }]
                    }), [e, l, a, n, o, f, c]),
                    g = (0, d.useMemo)((function() {
                        return 3 === v.length ? "grid-cols-3" : "grid-cols-2"
                    }), [v]),
                    y = (0, d.useMemo)((function() {
                        return v.length > 2 ? "w-4/5" : "w-3/5"
                    }), [v]);
                return (0, i.jsx)("div", {
                    className: "flex justify-center mb-8",
                    children: (0, i.jsx)("div", {
                        className: "grid ".concat(g, " gap-4 text-center ").concat(y),
                        children: v.map((function(t) {
                            return (0, i.jsx)(Y, function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var a = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? $(Object(a), !0).forEach((function(e) {
                                        (0, r.Z)(t, e, a[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : $(Object(a)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                                    }))
                                }
                                return t
                            }({}, t), t.label)
                        }))
                    })
                })
            }

            function T(t) {
                var e = t.isActive,
                    a = (0, h.v9)(m.EB),
                    r = (0, h.v9)(m.Qz),
                    n = (0, h.v9)(m.LS);
                return (0, i.jsx)(z, {
                    className: "w-full h-full",
                    active: e,
                    solarData: null !== n && void 0 !== n ? n : [],
                    utilityData: null !== a && void 0 !== a ? a : [],
                    utilityWithOffsetData: null !== r && void 0 !== r ? r : [],
                    utilityWithOffsetLabel: "Estimated utility payments after Solar",
                    years: 30
                })
            }

            function Q(t) {
                var e = t.isActive,
                    a = (0, h.v9)(m.EB),
                    r = (0, h.v9)(m.Qz),
                    n = (0, h.v9)(m.nU),
                    o = (0, h.v9)(m.LS);
                return (0, i.jsx)(I, {
                    className: "w-full h-full",
                    active: e,
                    solarData: null !== o && void 0 !== o ? o : [],
                    utilityData: null !== a && void 0 !== a ? a : [],
                    utilityWithOffsetData: null !== r && void 0 !== r ? r : [],
                    utilityWithOffsetLabel: "Utility cost at ".concat(n, "% offset"),
                    years: 30
                })
            }
        }
    }
]);
//# sourceMappingURL=FinancialImpact--Screen.4552418a199d6b9b45db.js.map