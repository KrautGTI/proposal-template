(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [558], {
        48558: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n(85893),
                o = n(86010),
                r = n(67294),
                l = n(29163),
                s = n(44378),
                a = n(67556),
                c = function() {
                    return null
                };

            function d(t) {
                return (0, i.jsxs)("button", {
                    type: "button",
                    className: "px-6 py-2 mb-7 flex flex-col items-center focus:ring-opacity-10 rounded-lg",
                    onClick: t.onClick,
                    children: [(0, i.jsx)(u, {
                        className: (0, o.Z)("rounded-full flex items-center justify-center shadow-md transition-colors focus:outline-none", t.active ? "bg-primary text-white" : "bg-white text-gray-300"),
                        style: {
                            height: 69,
                            width: 69
                        },
                        tabIndex: -1,
                        children: (0, i.jsx)(t.icon, {
                            width: 34.5,
                            height: 34.5
                        })
                    }), (0, i.jsx)("div", {
                        className: (0, o.Z)("whitespace-nowrap text-center mt-2 transition-colors", t.active ? "text-primary" : "text-gray-400"),
                        children: t.title
                    })]
                })
            }
            e.default = function(t) {
                t.id;
                var e = t.heading,
                    n = t.forceSelect,
                    o = (0, r.useState)((function() {
                        return null !== n && void 0 !== n ? n : a._[0].id
                    })),
                    l = o[0],
                    u = o[1],
                    x = (0, r.useMemo)((function() {
                        var t, e;
                        return null !== (t = null === (e = a._.find((function(t) {
                            return t.id === l
                        }))) || void 0 === e ? void 0 : e.component) && void 0 !== t ? t : c
                    }), [l]);
                return (0, i.jsx)(s.Z, {
                    title: null !== e && void 0 !== e ? e : "FAQ",
                    children: (0, i.jsxs)("div", {
                        className: "h-full w-full flex px-4",
                        children: [(0, i.jsx)("div", {
                            className: "flex flex-col mr-6 mt-3",
                            children: a._.map((function(t) {
                                return (0, i.jsx)(d, {
                                    title: t.title,
                                    icon: t.icon,
                                    active: t.id === l,
                                    onClick: n ? void 0 : function() {
                                        return u(t.id)
                                    }
                                }, t.id)
                            }))
                        }), (0, i.jsx)("div", {
                            className: "flex-grow rounded-lg shadow-xl bg-white p-12",
                            children: (0, i.jsx)(x, {
                                expandAll: !!n
                            })
                        })]
                    })
                })
            };
            var u = l.ZP.div.withConfig({
                displayName: "Faqs__IconBubble",
                componentId: "sc-2xqq9l-0"
            })(["button:focus &{--tw-shadow-color:rgb(var(--rgb-primary));--tw-shadow:0 -1px 6px -1px var(--tw-shadow-color),0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);}"])
        }
    }
]);
//# sourceMappingURL=558.1fbacceeb382ea7948f0.js.map