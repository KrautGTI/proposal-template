(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [671], {
        12671: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return h
                }
            });
            var n = t(85893),
                s = t(73949),
                i = t(67294),
                r = t(73935),
                l = t(28216),
                c = t(76049),
                o = t(63802),
                d = (0, i.forwardRef)((function(e, a) {
                    var t = e.title,
                        s = e.body,
                        i = e.icon,
                        r = e.onHide;
                    return (0, n.jsx)("div", {
                        ref: a,
                        className: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
                        children: (0, n.jsx)("div", {
                            className: "p-4",
                            children: (0, n.jsxs)("div", {
                                className: "flex items-start",
                                children: [!!i && (0, n.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, n.jsx)(u, {
                                        type: i
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "ml-3 w-0 flex-1 pt-0.5",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: t
                                    }), (0, n.jsx)("p", {
                                        className: "mt-1 text-sm text-gray-500",
                                        children: s
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "ml-4 flex-shrink-0 flex",
                                    children: (0, n.jsxs)("button", {
                                        className: "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500",
                                        onClick: function() {
                                            r()
                                        },
                                        children: [(0, n.jsx)("span", {
                                            className: "sr-only",
                                            children: "Close"
                                        }), (0, n.jsx)(o.b0D, {
                                            className: "h-5 w-5",
                                            "aria-hidden": "true"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }));

            function u(e) {
                var a = e.type;
                return "success" === a ? (0, n.jsx)(c.rE2, {
                    className: "h-6 w-6 text-green-500",
                    "aria-hidden": "true"
                }) : "warning" === a ? (0, n.jsx)(c.$Ow, {
                    className: "h-6 w-6 text-red-500",
                    "aria-hidden": "true"
                }) : null
            }
            var x = t(41230);

            function h() {
                var e = (0, l.I0)(),
                    a = (0, l.v9)((function(e) {
                        return e.notifications.queue
                    }));
                return (0, n.jsx)(n.Fragment, {
                    children: (0, r.createPortal)((0, n.jsx)("div", {
                        "aria-live": "assertive",
                        className: "notifications",
                        children: (0, n.jsx)("div", {
                            className: "notifications--stack",
                            children: a.map((function(a) {
                                return (0, n.jsx)(f, {
                                    show: !!a.show,
                                    afterLeave: function() {
                                        e((0, x.z$)(a.id))
                                    },
                                    children: (0, n.jsx)(d, {
                                        title: a.title,
                                        body: a.body,
                                        icon: a.icon,
                                        onHide: function() {
                                            e((0, x.N5)(a.id))
                                        }
                                    })
                                }, a.id)
                            }))
                        })
                    }), document.body)
                })
            }

            function f(e) {
                var a = e.children,
                    t = e.afterLeave,
                    r = e.show;
                return (0, n.jsx)(s.u, {
                    appear: !0,
                    show: r,
                    as: i.Fragment,
                    enter: "transform ease-out duration-300 transition",
                    enterFrom: "opacity-0 translate-x-full",
                    enterTo: "opacity-100 translate-x-0",
                    leave: "transition ease-in duration-300",
                    leaveFrom: "opacity-100 translate-x-0",
                    leaveTo: "opacity-0 translate-x-full",
                    afterLeave: t,
                    children: a
                })
            }
        }
    }
]);
//# sourceMappingURL=671.07be7c3b5d97822090ee.js.map