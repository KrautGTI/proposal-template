(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [116], {
        56116: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, {
                default: function() {
                    return l
                }
            });
            var t = n(85893),
                i = n(86010),
                r = n(67294),
                o = n(28216),
                s = n(29163),
                c = n(18078),
                d = (0, r.memo)((function(e) {
                    var a = e.id,
                        n = e.show,
                        s = (0, r.useRef)(null),
                        d = (0, o.I0)();
                    return (0, r.useEffect)((function() {
                        s.current && d((0, c.bA)(a))
                    }), [d, a]), (0, t.jsx)(u, {
                        ref: s,
                        className: (0, i.Z)("drawing-board", !n && "invisible"),
                        "aria-hidden": !n,
                        "data-board-id": a
                    })
                }));

            function l() {
                var e = (0, o.v9)((function(e) {
                        return e.drawMode
                    })),
                    a = e.enabled,
                    n = e.boards,
                    r = (0, o.v9)((function(e) {
                        return e.deck.currentSlideId
                    }));
                return (0, t.jsxs)(v, {
                    id: "annotation-overlay",
                    className: (0, i.Z)(a && "active"),
                    children: [(0, t.jsx)(f, {
                        className: "boards",
                        children: Object.keys(n).map((function(e) {
                            return (0, t.jsx)(d, {
                                id: e,
                                show: e === r
                            }, e)
                        }))
                    }), (0, t.jsx)("div", {
                        className: "saved-annotations"
                    })]
                })
            }
            var u = s.ZP.div.withConfig({
                    displayName: "AnnotationsOverlay__Board",
                    componentId: "j3y427-0"
                })(["--margin-factor:calc(var(--deck-margin,0) + 1);position:absolute;width:calc(var(--deck-width) * var(--deck-scale,1) * var(--margin-factor,1) * 1px);height:calc(var(--deck-height) * var(--deck-scale,1) * var(--margin-factor,1) * 1px);top:50%;left:50%;transform:translate(-50%,-50%);"]),
                v = s.ZP.div.withConfig({
                    displayName: "AnnotationsOverlay__Wrapper",
                    componentId: "j3y427-1"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;z-index:98;transition:opacity 250ms ease;pointer-events:none;&.active{pointer-events:auto;}"]),
                f = s.ZP.div.withConfig({
                    displayName: "AnnotationsOverlay__InnerWrapper",
                    componentId: "j3y427-2"
                })(["position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;overflow:visible;z-index:1;text-align:center;"])
        }
    }
]);
//# sourceMappingURL=116.95cceddb5e0d681047c6.js.map