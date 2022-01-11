(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [838], {
        3838: function(e, t, i) {
            "use strict";
            i.r(t);
            const a = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
                n = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,
                s = (e, t) => {
                    for (let i in t) e[i] = t[i];
                    return e
                },
                o = (e, t) => Array.from(e.querySelectorAll(t)),
                r = (e, t, i) => {
                    i ? e.classList.add(t) : e.classList.remove(t)
                },
                l = e => {
                    if ("string" == typeof e) {
                        if ("null" === e) return null;
                        if ("true" === e) return !0;
                        if ("false" === e) return !1;
                        if (e.match(/^-?[\d\.]+$/)) return parseFloat(e)
                    }
                    return e
                },
                d = (e, t) => {
                    e.style.transform = t
                },
                c = (e, t) => {
                    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
                    return !(!i || !i.call(e, t))
                },
                h = (e, t) => {
                    if ("function" == typeof e.closest) return e.closest(t);
                    for (; e;) {
                        if (c(e, t)) return e;
                        e = e.parentNode
                    }
                    return null
                },
                u = (e, t, i, a = "") => {
                    let n = e.querySelectorAll("." + i);
                    for (let o = 0; o < n.length; o++) {
                        let t = n[o];
                        if (t.parentNode === e) return t
                    }
                    let s = document.createElement(t);
                    return s.className = i, s.innerHTML = a, e.appendChild(s), s
                },
                g = e => {
                    let t = document.createElement("style");
                    return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t
                },
                v = () => {
                    let e = {};
                    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t => {
                        e[t.split("=").shift()] = t.split("=").pop()
                    }));
                    for (let t in e) {
                        let i = e[t];
                        e[t] = l(unescape(i))
                    }
                    return void 0 !== e.dependencies && delete e.dependencies, e
                },
                p = (e, t = 0) => {
                    if (e) {
                        let i, a = e.style.height;
                        return e.style.height = "0px", e.parentNode.style.height = "auto", i = t - e.parentNode.offsetHeight, e.style.height = a + "px", e.parentNode.style.removeProperty("height"), i
                    }
                    return t
                },
                m = navigator.userAgent,
                f = document.createElement("div"),
                b = /(iphone|ipod|ipad|android)/gi.test(m) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                y = /chrome/i.test(m) && !/edge/i.test(m),
                w = /android/gi.test(m),
                R = "zoom" in f.style && !b && (y || /Version\/[\d\.]+.*Safari/.test(m));
            var A = {};
            Object.defineProperty(A, "__esModule", {
                value: !0
            });
            var E = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                    }
                    return e
                },
                S = A.default = function(e) {
                    if (e) {
                        var t = function(e) {
                                return [].slice.call(e)
                            },
                            i = 3,
                            a = [],
                            n = null,
                            s = "requestAnimationFrame" in e ? function() {
                                e.cancelAnimationFrame(n), n = e.requestAnimationFrame((function() {
                                    return r(a.filter((function(e) {
                                        return e.dirty && e.active
                                    })))
                                }))
                            } : function() {},
                            o = function(e) {
                                return function() {
                                    a.forEach((function(t) {
                                        return t.dirty = e
                                    })), s()
                                }
                            },
                            r = function(e) {
                                e.filter((function(e) {
                                    return !e.styleComputed
                                })).forEach((function(e) {
                                    e.styleComputed = h(e)
                                })), e.filter(u).forEach(g);
                                var t = e.filter(c);
                                t.forEach(d), t.forEach((function(e) {
                                    g(e), l(e)
                                })), t.forEach(v)
                            },
                            l = function(e) {
                                return e.dirty = 0
                            },
                            d = function(e) {
                                e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
                            },
                            c = function(e) {
                                return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth
                            },
                            h = function(t) {
                                var i = e.getComputedStyle(t.element, null);
                                t.currentFontSize = parseFloat(i.getPropertyValue("font-size")), t.display = i.getPropertyValue("display"), t.whiteSpace = i.getPropertyValue("white-space")
                            },
                            u = function(e) {
                                var t = !1;
                                return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
                            },
                            g = function(e) {
                                e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
                            },
                            v = function(e) {
                                e.element.dispatchEvent(new CustomEvent("fit", {
                                    detail: {
                                        oldValue: e.previousFontSize,
                                        newValue: e.currentFontSize,
                                        scaleFactor: e.currentFontSize / e.previousFontSize
                                    }
                                }))
                            },
                            p = function(e, t) {
                                return function() {
                                    e.dirty = t, e.active && s()
                                }
                            },
                            m = function(e) {
                                return function() {
                                    a = a.filter((function(t) {
                                        return t.element !== e.element
                                    })), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
                                }
                            },
                            f = function(e) {
                                return function() {
                                    e.active || (e.active = !0, s())
                                }
                            },
                            b = function(e) {
                                return function() {
                                    return e.active = !1
                                }
                            },
                            y = function(e) {
                                e.observeMutations && (e.observer = new MutationObserver(p(e, 1)), e.observer.observe(e.element, e.observeMutations))
                            },
                            w = {
                                minSize: 16,
                                maxSize: 512,
                                multiLine: !0,
                                observeMutations: "MutationObserver" in e && {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0
                                }
                            },
                            R = null,
                            A = function() {
                                e.clearTimeout(R), R = e.setTimeout(o(2), L.observeWindowDelay)
                            },
                            S = ["resize", "orientationchange"];
                        return Object.defineProperty(L, "observeWindow", {
                            set: function(t) {
                                var i = (t ? "add" : "remove") + "EventListener";
                                S.forEach((function(t) {
                                    e[i](t, A)
                                }))
                            }
                        }), L.observeWindow = !0, L.observeWindowDelay = 100, L.fitAll = o(i), L
                    }

                    function k(e, t) {
                        var n = E({}, w, t),
                            o = e.map((function(e) {
                                var t = E({}, n, {
                                    element: e,
                                    active: !0
                                });
                                return function(e) {
                                    e.originalStyle = {
                                        whiteSpace: e.element.style.whiteSpace,
                                        display: e.element.style.display,
                                        fontSize: e.element.style.fontSize
                                    }, y(e), e.newbie = !0, e.dirty = !0, a.push(e)
                                }(t), {
                                    element: e,
                                    fit: p(t, i),
                                    unfreeze: f(t),
                                    freeze: b(t),
                                    unsubscribe: m(t)
                                }
                            }));
                        return s(), o
                    }

                    function L(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e ? k(t(document.querySelectorAll(e)), i) : k([e], i)[0]
                    }
                }("undefined" == typeof window ? null : window);
            class k {
                constructor(e) {
                    this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this)
                }
                shouldPreload(e) {
                    let t = this.Reveal.getConfig().preloadIframes;
                    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t
                }
                load(e, t = {}) {
                    e.style.display = this.Reveal.getConfig().display, o(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e => {
                        ("IFRAME" !== e.tagName || this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"))
                    })), o(e, "video, audio").forEach((e => {
                        let t = 0;
                        o(e, "source[data-src]").forEach((e => {
                            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1
                        })), b && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), t > 0 && e.load()
                    }));
                    let i = e.slideBackgroundElement;
                    if (i) {
                        i.style.display = "block";
                        let a = e.slideBackgroundContentElement,
                            n = e.getAttribute("data-background-iframe");
                        if (!1 === i.hasAttribute("data-loaded")) {
                            i.setAttribute("data-loaded", "true");
                            let s = e.getAttribute("data-background-image"),
                                o = e.getAttribute("data-background-video"),
                                r = e.hasAttribute("data-background-video-loop"),
                                l = e.hasAttribute("data-background-video-muted");
                            if (s) a.style.backgroundImage = s.split(",").map((e => `url(${encodeURI(e.trim())})`)).join(",");
                            else if (o && !this.Reveal.isSpeakerNotes()) {
                                let e = document.createElement("video");
                                r && e.setAttribute("loop", ""), l && (e.muted = !0), b && (e.muted = !0, e.setAttribute("playsinline", "")), o.split(",").forEach((t => {
                                    e.innerHTML += '<source src="' + t + '">'
                                })), a.appendChild(e)
                            } else if (n && !0 !== t.excludeIframes) {
                                let e = document.createElement("iframe");
                                e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", n), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", a.appendChild(e)
                            }
                        }
                        let s = a.querySelector("iframe[data-src]");
                        s && this.shouldPreload(i) && !/autoplay=(1|true|yes)/gi.test(n) && s.getAttribute("src") !== n && s.setAttribute("src", n)
                    }
                    this.layout(e)
                }
                layout(e) {
                    Array.from(e.querySelectorAll(".r-fit-text")).forEach((e => {
                        S(e, {
                            minSize: 24,
                            maxSize: .8 * this.Reveal.getConfig().height,
                            observeMutations: !1,
                            observeWindow: !1
                        })
                    }))
                }
                unload(e) {
                    e.style.display = "none";
                    let t = this.Reveal.getSlideBackground(e);
                    t && (t.style.display = "none", o(t, "iframe[src]").forEach((e => {
                        e.removeAttribute("src")
                    }))), o(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e => {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    })), o(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e => {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    }))
                }
                formatEmbeddedContent() {
                    let e = (e, t, i) => {
                        o(this.Reveal.getSlidesElement(), "iframe[" + e + '*="' + t + '"]').forEach((t => {
                            let a = t.getAttribute(e);
                            a && -1 === a.indexOf(i) && t.setAttribute(e, a + (/\?/.test(a) ? "&" : "?") + i)
                        }))
                    };
                    e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1")
                }
                startEmbeddedContent(e) {
                    e && !this.Reveal.isSpeakerNotes() && (o(e, 'img[src$=".gif"]').forEach((e => {
                        e.setAttribute("src", e.getAttribute("src"))
                    })), o(e, "video, audio").forEach((e => {
                        if (h(e, ".fragment") && !h(e, ".fragment.visible")) return;
                        let t = this.Reveal.getConfig().autoPlayMedia;
                        if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!h(e, ".slide-background")), t && "function" == typeof e.play)
                            if (e.readyState > 1) this.startEmbeddedMedia({
                                target: e
                            });
                            else if (b) {
                            let t = e.play();
                            t && "function" == typeof t.catch && !1 === e.controls && t.catch((() => {
                                e.controls = !0, e.addEventListener("play", (() => {
                                    e.controls = !1
                                }))
                            }))
                        } else e.removeEventListener("loadeddata", this.startEmbeddedMedia), e.addEventListener("loadeddata", this.startEmbeddedMedia)
                    })), o(e, "iframe[src]").forEach((e => {
                        h(e, ".fragment") && !h(e, ".fragment.visible") || this.startEmbeddedIframe({
                            target: e
                        })
                    })), o(e, "iframe[data-src]").forEach((e => {
                        h(e, ".fragment") && !h(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")))
                    })))
                }
                startEmbeddedMedia(e) {
                    let t = !!h(e.target, "html"),
                        i = !!h(e.target, ".present");
                    t && i && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia)
                }
                startEmbeddedIframe(e) {
                    let t = e.target;
                    if (t && t.contentWindow) {
                        let i = !!h(e.target, "html"),
                            a = !!h(e.target, ".present");
                        if (i && a) {
                            let e = this.Reveal.getConfig().autoPlayMedia;
                            "boolean" != typeof e && (e = t.hasAttribute("data-autoplay") || !!h(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
                        }
                    }
                }
                stopEmbeddedContent(e, t = {}) {
                    t = s({
                        unloadIframes: !0
                    }, t), e && e.parentNode && (o(e, "video, audio").forEach((e => {
                        e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause())
                    })), o(e, "iframe").forEach((e => {
                        e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.startEmbeddedIframe)
                    })), o(e, 'iframe[src*="youtube.com/embed/"]').forEach((e => {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    })), o(e, 'iframe[src*="player.vimeo.com/"]').forEach((e => {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
                    })), !0 === t.unloadIframes && o(e, "iframe[data-src]").forEach((e => {
                        e.setAttribute("src", "about:blank"), e.removeAttribute("src")
                    })))
                }
            }
            class L {
                constructor(e) {
                    this.Reveal = e
                }
                render() {
                    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element)
                }
                configure(e, t) {
                    let i = "none";
                    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i
                }
                update() {
                    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber())
                }
                getSlideNumber(e = this.Reveal.getCurrentSlide()) {
                    let t, i = this.Reveal.getConfig(),
                        a = "h.v";
                    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);
                    else {
                        "string" == typeof i.slideNumber && (a = i.slideNumber), /c/.test(a) || 1 !== this.Reveal.getHorizontalSlides().length || (a = "c");
                        let n = e && "uncounted" === e.dataset.visibility ? 0 : 1;
                        switch (t = [], a) {
                            case "c":
                                t.push(this.Reveal.getSlidePastCount(e) + n);
                                break;
                            case "c/t":
                                t.push(this.Reveal.getSlidePastCount(e) + n, "/", this.Reveal.getTotalSlides());
                                break;
                            default:
                                let i = this.Reveal.getIndices(e);
                                t.push(i.h + n);
                                let s = "h/v" === a ? "/" : ".";
                                this.Reveal.isVerticalSlide(e) && t.push(s, i.v + 1)
                        }
                    }
                    let n = "#" + this.Reveal.location.getHash(e);
                    return this.formatNumber(t[0], t[1], t[2], n)
                }
                formatNumber(e, t, i, a = "#" + this.Reveal.location.getHash()) {
                    return "number" != typeof i || isNaN(i) ? `<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>` : `<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`
                }
            }
            const C = e => {
                let t = e.match(/^#([0-9a-f]{3})$/i);
                if (t && t[1]) return t = t[1], {
                    r: 17 * parseInt(t.charAt(0), 16),
                    g: 17 * parseInt(t.charAt(1), 16),
                    b: 17 * parseInt(t.charAt(2), 16)
                };
                let i = e.match(/^#([0-9a-f]{6})$/i);
                if (i && i[1]) return i = i[1], {
                    r: parseInt(i.substr(0, 2), 16),
                    g: parseInt(i.substr(2, 2), 16),
                    b: parseInt(i.substr(4, 2), 16)
                };
                let a = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
                if (a) return {
                    r: parseInt(a[1], 10),
                    g: parseInt(a[2], 10),
                    b: parseInt(a[3], 10)
                };
                let n = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
                return n ? {
                    r: parseInt(n[1], 10),
                    g: parseInt(n[2], 10),
                    b: parseInt(n[3], 10),
                    a: parseFloat(n[4])
                } : null
            };
            class x {
                constructor(e) {
                    this.Reveal = e
                }
                render() {
                    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element)
                }
                create() {
                    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e => {
                        let t = this.createBackground(e, this.element);
                        o(e, "section").forEach((e => {
                            this.createBackground(e, t), t.classList.add("stack")
                        }))
                    })), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout((() => {
                        this.Reveal.getRevealElement().classList.add("has-parallax-background")
                    }), 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"))
                }
                createBackground(e, t) {
                    let i = document.createElement("div");
                    i.className = "slide-background " + e.className.replace(/present|past|future/, "");
                    let a = document.createElement("div");
                    return a.className = "slide-background-content", i.appendChild(a), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = a, this.sync(e), i
                }
                sync(e) {
                    const t = e.slideBackgroundElement,
                        i = e.slideBackgroundContentElement,
                        a = {
                            background: e.getAttribute("data-background"),
                            backgroundSize: e.getAttribute("data-background-size"),
                            backgroundImage: e.getAttribute("data-background-image"),
                            backgroundVideo: e.getAttribute("data-background-video"),
                            backgroundIframe: e.getAttribute("data-background-iframe"),
                            backgroundColor: e.getAttribute("data-background-color"),
                            backgroundRepeat: e.getAttribute("data-background-repeat"),
                            backgroundPosition: e.getAttribute("data-background-position"),
                            backgroundTransition: e.getAttribute("data-background-transition"),
                            backgroundOpacity: e.getAttribute("data-background-opacity")
                        },
                        n = e.hasAttribute("data-preload");
                    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "", a.background && (/^(http|file|\/\/)/gi.test(a.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(a.background) ? e.setAttribute("data-background-image", a.background) : t.style.background = a.background), (a.background || a.backgroundColor || a.backgroundImage || a.backgroundVideo || a.backgroundIframe) && t.setAttribute("data-background-hash", a.background + a.backgroundSize + a.backgroundImage + a.backgroundVideo + a.backgroundIframe + a.backgroundColor + a.backgroundRepeat + a.backgroundPosition + a.backgroundTransition + a.backgroundOpacity), a.backgroundSize && t.setAttribute("data-background-size", a.backgroundSize), a.backgroundColor && (t.style.backgroundColor = a.backgroundColor), a.backgroundTransition && t.setAttribute("data-background-transition", a.backgroundTransition), n && t.setAttribute("data-preload", ""), a.backgroundSize && (i.style.backgroundSize = a.backgroundSize), a.backgroundRepeat && (i.style.backgroundRepeat = a.backgroundRepeat), a.backgroundPosition && (i.style.backgroundPosition = a.backgroundPosition), a.backgroundOpacity && (i.style.opacity = a.backgroundOpacity);
                    let s = a.backgroundColor;
                    if (!s || !C(s)) {
                        let e = window.getComputedStyle(t);
                        e && e.backgroundColor && (s = e.backgroundColor)
                    }
                    if (s) {
                        const t = C(s);
                        t && 0 !== t.a && ("string" == typeof(o = s) && (o = C(o)), (o ? (299 * o.r + 587 * o.g + 114 * o.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"))
                    }
                    var o
                }
                update(e = !1) {
                    let t = this.Reveal.getCurrentSlide(),
                        i = this.Reveal.getIndices(),
                        a = null,
                        n = this.Reveal.getConfig().rtl ? "future" : "past",
                        s = this.Reveal.getConfig().rtl ? "past" : "future";
                    if (Array.from(this.element.childNodes).forEach(((t, r) => {
                            t.classList.remove("past", "present", "future"), r < i.h ? t.classList.add(n) : r > i.h ? t.classList.add(s) : (t.classList.add("present"), a = t), (e || r === i.h) && o(t, ".slide-background").forEach(((e, t) => {
                                e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), r === i.h && (a = e))
                            }))
                        })), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
                            unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
                        }), a) {
                        this.Reveal.slideContent.startEmbeddedContent(a);
                        let e = a.querySelector(".slide-background-content");
                        if (e) {
                            let t = e.style.backgroundImage || "";
                            /\.gif/i.test(t) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = t)
                        }
                        let t = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
                            i = a.getAttribute("data-background-hash");
                        i && i === t && a !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = a
                    }
                    t && ["has-light-background", "has-dark-background"].forEach((e => {
                        t.classList.contains(e) ? this.Reveal.getRevealElement().classList.add(e) : this.Reveal.getRevealElement().classList.remove(e)
                    }), this), setTimeout((() => {
                        this.element.classList.remove("no-transition")
                    }), 1)
                }
                updateParallax() {
                    let e = this.Reveal.getIndices();
                    if (this.Reveal.getConfig().parallaxBackgroundImage) {
                        let t, i, a = this.Reveal.getHorizontalSlides(),
                            n = this.Reveal.getVerticalSlides(),
                            s = this.element.style.backgroundSize.split(" ");
                        1 === s.length ? t = i = parseInt(s[0], 10) : (t = parseInt(s[0], 10), i = parseInt(s[1], 10));
                        let o, r, l = this.element.offsetWidth,
                            d = a.length;
                        o = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d > 1 ? (t - l) / (d - 1) : 0, r = o * e.h * -1;
                        let c, h, u = this.element.offsetHeight,
                            g = n.length;
                        c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i - u) / (g - 1), h = g > 0 ? c * e.v : 0, this.element.style.backgroundPosition = r + "px " + -h + "px"
                    }
                }
            }
            let P = 0;
            class N {
                constructor(e) {
                    this.Reveal = e
                }
                run(e, t) {
                    this.reset();
                    let i = this.Reveal.getSlides(),
                        a = i.indexOf(t),
                        n = i.indexOf(e);
                    if (e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(a > n ? t : e).hasAttribute("data-auto-animate-restart")) {
                        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || g();
                        let i = this.getAutoAnimateOptions(t);
                        e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", i.slideDirection = a > n ? "forward" : "backward";
                        let s = this.getAutoAnimatableElements(e, t).map((e => this.autoAnimateElements(e.from, e.to, e.options || {}, i, P++)));
                        if ("false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                            let e = .8 * i.duration,
                                a = .2 * i.duration;
                            this.getUnmatchedAutoAnimateElements(t).forEach((e => {
                                let t = this.getAutoAnimateOptions(e, i),
                                    a = "unmatched";
                                t.duration === i.duration && t.delay === i.delay || (a = "unmatched-" + P++, s.push(`[data-auto-animate="running"] [data-auto-animate-target="${a}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)), e.dataset.autoAnimateTarget = a
                            }), this), s.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${a}s; }`)
                        }
                        this.autoAnimateStyleSheet.innerHTML = s.join(""), requestAnimationFrame((() => {
                            this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running")
                        })), this.Reveal.dispatchEvent({
                            type: "autoanimate",
                            data: {
                                fromSlide: e,
                                toSlide: t,
                                sheet: this.autoAnimateStyleSheet
                            }
                        })
                    }
                }
                reset() {
                    o(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e => {
                        e.dataset.autoAnimate = ""
                    })), o(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e => {
                        delete e.dataset.autoAnimateTarget
                    })), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null)
                }
                autoAnimateElements(e, t, i, a, s) {
                    e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = s;
                    let o = this.getAutoAnimateOptions(t, a);
                    void 0 !== i.delay && (o.delay = i.delay), void 0 !== i.duration && (o.duration = i.duration), void 0 !== i.easing && (o.easing = i.easing);
                    let r = this.getAutoAnimatableProperties("from", e, i),
                        l = this.getAutoAnimatableProperties("to", t, i);
                    if (t.classList.contains("fragment") && (delete l.styles.opacity, e.classList.contains("fragment")) && (e.className.match(n) || [""])[0] === (t.className.match(n) || [""])[0] && "forward" === a.slideDirection && t.classList.add("visible", "disabled"), !1 !== i.translate || !1 !== i.scale) {
                        let e = this.Reveal.getScale(),
                            t = {
                                x: (r.x - l.x) / e,
                                y: (r.y - l.y) / e,
                                scaleX: r.width / l.width,
                                scaleY: r.height / l.height
                            };
                        t.x = Math.round(1e3 * t.x) / 1e3, t.y = Math.round(1e3 * t.y) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3;
                        let a = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
                            n = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
                        if (a || n) {
                            let e = [];
                            a && e.push(`translate(${t.x}px, ${t.y}px)`), n && e.push(`scale(${t.scaleX}, ${t.scaleY})`), r.styles.transform = e.join(" "), r.styles["transform-origin"] = "top left", l.styles.transform = "none"
                        }
                    }
                    for (let n in l.styles) {
                        const e = l.styles[n],
                            t = r.styles[n];
                        e === t ? delete l.styles[n] : (!0 === e.explicitValue && (l.styles[n] = e.value), !0 === t.explicitValue && (r.styles[n] = t.value))
                    }
                    let d = "",
                        c = Object.keys(l.styles);
                    return c.length > 0 && (r.styles.transition = "none", l.styles.transition = `all ${o.duration}s ${o.easing} ${o.delay}s`, l.styles["transition-property"] = c.join(", "), l.styles["will-change"] = c.join(", "), d = '[data-auto-animate-target="' + s + '"] {' + Object.keys(r.styles).map((e => e + ": " + r.styles[e] + " !important;")).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + s + '"] {' + Object.keys(l.styles).map((e => e + ": " + l.styles[e] + " !important;")).join("") + "}"), d
                }
                getAutoAnimateOptions(e, t) {
                    let i = {
                        easing: this.Reveal.getConfig().autoAnimateEasing,
                        duration: this.Reveal.getConfig().autoAnimateDuration,
                        delay: 0
                    };
                    if (i = s(i, t), e.parentNode) {
                        let t = h(e.parentNode, "[data-auto-animate-target]");
                        t && (i = this.getAutoAnimateOptions(t, i))
                    }
                    return e.dataset.autoAnimateEasing && (i.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (i.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (i.delay = parseFloat(e.dataset.autoAnimateDelay)), i
                }
                getAutoAnimatableProperties(e, t, i) {
                    let a = this.Reveal.getConfig(),
                        n = {
                            styles: []
                        };
                    if (!1 !== i.translate || !1 !== i.scale) {
                        let e;
                        if ("function" == typeof i.measure) e = i.measure(t);
                        else if (a.center) e = t.getBoundingClientRect();
                        else {
                            let i = this.Reveal.getScale();
                            e = {
                                x: t.offsetLeft * i,
                                y: t.offsetTop * i,
                                width: t.offsetWidth * i,
                                height: t.offsetHeight * i
                            }
                        }
                        n.x = e.x, n.y = e.y, n.width = e.width, n.height = e.height
                    }
                    const s = getComputedStyle(t);
                    return (i.styles || a.autoAnimateStyles).forEach((t => {
                        let i;
                        "string" == typeof t && (t = {
                            property: t
                        }), i = void 0 !== t.from && "from" === e ? {
                            value: t.from,
                            explicitValue: !0
                        } : void 0 !== t.to && "to" === e ? {
                            value: t.to,
                            explicitValue: !0
                        } : s[t.property], "" !== i && (n.styles[t.property] = i)
                    })), n
                }
                getAutoAnimatableElements(e, t) {
                    let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
                        a = [];
                    return i.filter(((e, t) => {
                        if (-1 === a.indexOf(e.to)) return a.push(e.to), !0
                    }))
                }
                getAutoAnimatePairs(e, t) {
                    let i = [];
                    const a = "h1, h2, h3, h4, h5, h6, p, li";
                    return this.findAutoAnimateMatches(i, e, t, "[data-id]", (e => e.nodeName + ":::" + e.getAttribute("data-id"))), this.findAutoAnimateMatches(i, e, t, a, (e => e.nodeName + ":::" + e.innerText)), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", (e => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src")))), this.findAutoAnimateMatches(i, e, t, "pre", (e => e.nodeName + ":::" + e.innerText)), i.forEach((e => {
                        c(e.from, a) ? e.options = {
                            scale: !1
                        } : c(e.from, "pre") && (e.options = {
                            scale: !1,
                            styles: ["width", "height"]
                        }, this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", (e => e.textContent), {
                            scale: !1,
                            styles: [],
                            measure: this.getLocalBoundingBox.bind(this)
                        }), this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", (e => e.getAttribute("data-line-number")), {
                            scale: !1,
                            styles: ["width"],
                            measure: this.getLocalBoundingBox.bind(this)
                        }))
                    }), this), i
                }
                getLocalBoundingBox(e) {
                    const t = this.Reveal.getScale();
                    return {
                        x: Math.round(e.offsetLeft * t * 100) / 100,
                        y: Math.round(e.offsetTop * t * 100) / 100,
                        width: Math.round(e.offsetWidth * t * 100) / 100,
                        height: Math.round(e.offsetHeight * t * 100) / 100
                    }
                }
                findAutoAnimateMatches(e, t, i, a, n, s) {
                    let o = {},
                        r = {};
                    [].slice.call(t.querySelectorAll(a)).forEach(((e, t) => {
                        const i = n(e);
                        "string" == typeof i && i.length && (o[i] = o[i] || [], o[i].push(e))
                    })), [].slice.call(i.querySelectorAll(a)).forEach(((t, i) => {
                        const a = n(t);
                        let l;
                        if (r[a] = r[a] || [], r[a].push(t), o[a]) {
                            const e = r[a].length - 1,
                                t = o[a].length - 1;
                            o[a][e] ? (l = o[a][e], o[a][e] = null) : o[a][t] && (l = o[a][t], o[a][t] = null)
                        }
                        l && e.push({
                            from: l,
                            to: t,
                            options: s
                        })
                    }))
                }
                getUnmatchedAutoAnimateElements(e) {
                    return [].slice.call(e.children).reduce(((e, t) => {
                        const i = t.querySelector("[data-auto-animate-target]");
                        return t.hasAttribute("data-auto-animate-target") || i || e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(this.getUnmatchedAutoAnimateElements(t))), e
                    }), [])
                }
            }
            class M {
                constructor(e) {
                    this.Reveal = e
                }
                configure(e, t) {
                    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable()
                }
                disable() {
                    o(this.Reveal.getSlidesElement(), ".fragment").forEach((e => {
                        e.classList.add("visible"), e.classList.remove("current-fragment")
                    }))
                }
                enable() {
                    o(this.Reveal.getSlidesElement(), ".fragment").forEach((e => {
                        e.classList.remove("visible"), e.classList.remove("current-fragment")
                    }))
                }
                availableRoutes() {
                    let e = this.Reveal.getCurrentSlide();
                    if (e && this.Reveal.getConfig().fragments) {
                        let t = e.querySelectorAll(".fragment:not(.disabled)"),
                            i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
                        return {
                            prev: t.length - i.length > 0,
                            next: !!i.length
                        }
                    }
                    return {
                        prev: !1,
                        next: !1
                    }
                }
                sort(e, t = !1) {
                    e = Array.from(e);
                    let i = [],
                        a = [],
                        n = [];
                    e.forEach((e => {
                        if (e.hasAttribute("data-fragment-index")) {
                            let t = parseInt(e.getAttribute("data-fragment-index"), 10);
                            i[t] || (i[t] = []), i[t].push(e)
                        } else a.push([e])
                    })), i = i.concat(a);
                    let s = 0;
                    return i.forEach((e => {
                        e.forEach((e => {
                            n.push(e), e.setAttribute("data-fragment-index", s)
                        })), s++
                    })), !0 === t ? i : n
                }
                sortAll() {
                    this.Reveal.getHorizontalSlides().forEach((e => {
                        let t = o(e, "section");
                        t.forEach(((e, t) => {
                            this.sort(e.querySelectorAll(".fragment"))
                        }), this), 0 === t.length && this.sort(e.querySelectorAll(".fragment"))
                    }))
                }
                update(e, t) {
                    let i = {
                            shown: [],
                            hidden: []
                        },
                        a = this.Reveal.getCurrentSlide();
                    if (a && this.Reveal.getConfig().fragments && (t = t || this.sort(a.querySelectorAll(".fragment"))).length) {
                        let n = 0;
                        if ("number" != typeof e) {
                            let t = this.sort(a.querySelectorAll(".fragment.visible")).pop();
                            t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10))
                        }
                        Array.from(t).forEach(((t, a) => {
                            if (t.hasAttribute("data-fragment-index") && (a = parseInt(t.getAttribute("data-fragment-index"), 10)), n = Math.max(n, a), a <= e) {
                                let n = t.classList.contains("visible");
                                t.classList.add("visible"), t.classList.remove("current-fragment"), a === e && (this.Reveal.announceStatus(this.Reveal.getStatusText(t)), t.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t)), n || (i.shown.push(t), this.Reveal.dispatchEvent({
                                    target: t,
                                    type: "visible",
                                    bubbles: !1
                                }))
                            } else {
                                let e = t.classList.contains("visible");
                                t.classList.remove("visible"), t.classList.remove("current-fragment"), e && (this.Reveal.slideContent.stopEmbeddedContent(t), i.hidden.push(t), this.Reveal.dispatchEvent({
                                    target: t,
                                    type: "hidden",
                                    bubbles: !1
                                }))
                            }
                        })), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, n), -1), a.setAttribute("data-fragment", e)
                    }
                    return i
                }
                sync(e = this.Reveal.getCurrentSlide()) {
                    return this.sort(e.querySelectorAll(".fragment"))
                }
                goto(e, t = 0) {
                    let i = this.Reveal.getCurrentSlide();
                    if (i && this.Reveal.getConfig().fragments) {
                        let a = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
                        if (a.length) {
                            if ("number" != typeof e) {
                                let t = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                                e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1
                            }
                            e += t;
                            let n = this.update(e, a);
                            return n.hidden.length && this.Reveal.dispatchEvent({
                                type: "fragmenthidden",
                                data: {
                                    fragment: n.hidden[0],
                                    fragments: n.hidden
                                }
                            }), n.shown.length && this.Reveal.dispatchEvent({
                                type: "fragmentshown",
                                data: {
                                    fragment: n.shown[0],
                                    fragments: n.shown
                                }
                            }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!n.shown.length && !n.hidden.length)
                        }
                    }
                    return !1
                }
                next() {
                    return this.goto(null, 1)
                }
                prev() {
                    return this.goto(null, -1)
                }
            }
            class D {
                constructor(e) {
                    this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this)
                }
                activate() {
                    if (this.Reveal.getConfig().overview && !this.isActive()) {
                        this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), o(this.Reveal.getRevealElement(), ".slides section").forEach((e => {
                            e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0)
                        }));
                        const e = 70,
                            t = this.Reveal.getComputedSlideSize();
                        this.overviewSlideWidth = t.width + e, this.overviewSlideHeight = t.height + e, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
                        const i = this.Reveal.getIndices();
                        this.Reveal.dispatchEvent({
                            type: "overviewshown",
                            data: {
                                indexh: i.h,
                                indexv: i.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
                layout() {
                    this.Reveal.getHorizontalSlides().forEach(((e, t) => {
                        e.setAttribute("data-index-h", t), d(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && o(e, "section").forEach(((e, i) => {
                            e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", i), d(e, "translate3d(0, " + i * this.overviewSlideHeight + "px, 0)")
                        }))
                    })), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e, t) => {
                        d(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), o(e, ".slide-background").forEach(((e, t) => {
                            d(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)")
                        }))
                    }))
                }
                update() {
                    const e = Math.min(window.innerWidth, window.innerHeight),
                        t = Math.max(e / 5, 150) / e,
                        i = this.Reveal.getIndices();
                    this.Reveal.transformSlides({
                        overview: ["scale(" + t + ")", "translateX(" + -i.h * this.overviewSlideWidth + "px)", "translateY(" + -i.v * this.overviewSlideHeight + "px)"].join(" ")
                    })
                }
                deactivate() {
                    if (this.Reveal.getConfig().overview) {
                        this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout((() => {
                            this.Reveal.getRevealElement().classList.remove("overview-deactivating")
                        }), 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), o(this.Reveal.getRevealElement(), ".slides section").forEach((e => {
                            d(e, ""), e.removeEventListener("click", this.onSlideClicked, !0)
                        })), o(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e => {
                            d(e, "")
                        })), this.Reveal.transformSlides({
                            overview: ""
                        });
                        const e = this.Reveal.getIndices();
                        this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                            type: "overviewhidden",
                            data: {
                                indexh: e.h,
                                indexv: e.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
                toggle(e) {
                    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate()
                }
                isActive() {
                    return this.active
                }
                onSlideClicked(e) {
                    if (this.isActive()) {
                        e.preventDefault();
                        let t = e.target;
                        for (; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
                        if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
                            let e = parseInt(t.getAttribute("data-index-h"), 10),
                                i = parseInt(t.getAttribute("data-index-v"), 10);
                            this.Reveal.slide(e, i)
                        }
                    }
                }
            }
            class I {
                constructor(e) {
                    this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this)
                }
                configure(e, t) {
                    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts.P = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Home  ,  Shift &#8592;"] = "First slide", this.shortcuts["End  ,  Shift &#8594;"] = "Last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview"
                }
                bind() {
                    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1)
                }
                unbind() {
                    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1)
                }
                addKeyBinding(e, t) {
                    "object" == typeof e && e.keyCode ? this.bindings[e.keyCode] = {
                        callback: t,
                        key: e.key,
                        description: e.description
                    } : this.bindings[e] = {
                        callback: t,
                        key: null,
                        description: null
                    }
                }
                removeKeyBinding(e) {
                    delete this.bindings[e]
                }
                triggerKey(e) {
                    this.onDocumentKeyDown({
                        keyCode: e
                    })
                }
                registerKeyboardShortcut(e, t) {
                    this.shortcuts[e] = t
                }
                getShortcuts() {
                    return this.shortcuts
                }
                getBindings() {
                    return this.bindings
                }
                onDocumentKeyPress(e) {
                    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp()
                }
                onDocumentKeyDown(e) {
                    let t = this.Reveal.getConfig();
                    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
                    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
                    let i = e.keyCode,
                        a = !this.Reveal.isAutoSliding();
                    this.Reveal.onUserInput(e);
                    let n = document.activeElement && !0 === document.activeElement.isContentEditable,
                        s = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
                        o = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
                        r = e.shiftKey && 32 === e.keyCode,
                        l = e.shiftKey && 37 === i,
                        d = e.shiftKey && 39 === i,
                        c = !r && !l && !d && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
                    if (n || s || o || c) return;
                    let h, u = [66, 86, 190, 191];
                    if ("object" == typeof t.keyboard)
                        for (h in t.keyboard) "togglePause" === t.keyboard[h] && u.push(parseInt(h, 10));
                    if (this.Reveal.isPaused() && -1 === u.indexOf(i)) return !1;
                    let g = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
                        v = !1;
                    if ("object" == typeof t.keyboard)
                        for (h in t.keyboard)
                            if (parseInt(h, 10) === i) {
                                let i = t.keyboard[h];
                                "function" == typeof i ? i.apply(null, [e]) : "string" == typeof i && "function" == typeof this.Reveal[i] && this.Reveal[i].call(), v = !0
                            }
                    if (!1 === v)
                        for (h in this.bindings)
                            if (parseInt(h, 10) === i) {
                                let t = this.bindings[h].callback;
                                "function" == typeof t ? t.apply(null, [e]) : "string" == typeof t && "function" == typeof this.Reveal[t] && this.Reveal[t].call(), v = !0
                            }!1 === v && (v = !0, 80 === i || 33 === i ? this.Reveal.prev() : 78 === i || 34 === i ? this.Reveal.next() : 72 === i || 37 === i ? l ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.left() : 76 === i || 39 === i ? d ? this.Reveal.slide(Number.MAX_VALUE) : !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.right() : 75 === i || 38 === i ? !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.up() : 74 === i || 40 === i ? !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.down() : 36 === i ? this.Reveal.slide(0) : 35 === i ? this.Reveal.slide(Number.MAX_VALUE) : 32 === i ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev() : this.Reveal.next()) : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i ? this.Reveal.togglePause() : 70 === i ? (e => {
                        let t = (e = e || document.documentElement).requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
                        t && t.apply(e)
                    })(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(a) : v = !1), v ? e.preventDefault && e.preventDefault() : 27 !== i && 79 !== i || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide()
                }
            }
            class T {
                constructor(e) {
                    this.Reveal = e, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this)
                }
                bind() {
                    window.addEventListener("hashchange", this.onWindowHashChange, !1)
                }
                unbind() {
                    window.removeEventListener("hashchange", this.onWindowHashChange, !1)
                }
                readURL() {
                    let e = this.Reveal.getConfig(),
                        t = this.Reveal.getIndices(),
                        i = this.Reveal.getCurrentSlide(),
                        a = window.location.hash,
                        n = a.slice(2).split("/"),
                        s = a.replace(/#\/?/gi, "");
                    if (!/^[0-9]*$/.test(n[0]) && s.length) {
                        let a, n;
                        /\/[-\d]+$/g.test(s) && (n = parseInt(s.split("/").pop(), 10), n = isNaN(n) ? void 0 : n, s = s.split("/").shift());
                        try {
                            a = document.getElementById(decodeURIComponent(s))
                        } catch (e) {}
                        let o = !!i && i.getAttribute("id") === s;
                        if (a) {
                            if (!o || void 0 !== n) {
                                let e = this.Reveal.getIndices(a);
                                this.Reveal.slide(e.h, e.v, n)
                            }
                        } else this.Reveal.slide(t.h || 0, t.v || 0)
                    } else {
                        let i, a = e.hashOneBasedIndex ? 1 : 0,
                            s = parseInt(n[0], 10) - a || 0,
                            o = parseInt(n[1], 10) - a || 0;
                        e.fragmentInURL && (i = parseInt(n[2], 10), isNaN(i) && (i = void 0)), s === t.h && o === t.v && void 0 === i || this.Reveal.slide(s, o, i)
                    }
                }
                writeURL(e) {
                    let t = this.Reveal.getConfig(),
                        i = this.Reveal.getCurrentSlide();
                    if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);
                    else if (i) {
                        let e = this.getHash();
                        t.history ? window.location.hash = e : t.hash && ("/" === e ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + e))
                    }
                }
                getHash(e) {
                    let t = "/",
                        i = e || this.Reveal.getCurrentSlide(),
                        a = i ? i.getAttribute("id") : null;
                    a && (a = encodeURIComponent(a));
                    let n = this.Reveal.getIndices(e);
                    if (this.Reveal.getConfig().fragmentInURL || (n.f = void 0), "string" == typeof a && a.length) t = "/" + a, n.f >= 0 && (t += "/" + n.f);
                    else {
                        let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
                        (n.h > 0 || n.v > 0 || n.f >= 0) && (t += n.h + e), (n.v > 0 || n.f >= 0) && (t += "/" + (n.v + e)), n.f >= 0 && (t += "/" + n.f)
                    }
                    return t
                }
                onWindowHashChange(e) {
                    this.readURL()
                }
            }
            class z {
                constructor(e) {
                    this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this)
                }
                render() {
                    const e = this.Reveal.getConfig().rtl,
                        t = this.Reveal.getRevealElement();
                    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = o(t, ".navigate-left"), this.controlsRight = o(t, ".navigate-right"), this.controlsUp = o(t, ".navigate-up"), this.controlsDown = o(t, ".navigate-down"), this.controlsPrev = o(t, ".navigate-prev"), this.controlsNext = o(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down")
                }
                configure(e, t) {
                    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows)
                }
                bind() {
                    let e = ["touchstart", "click"];
                    w && (e = ["touchstart"]), e.forEach((e => {
                        this.controlsLeft.forEach((t => t.addEventListener(e, this.onNavigateLeftClicked, !1))), this.controlsRight.forEach((t => t.addEventListener(e, this.onNavigateRightClicked, !1))), this.controlsUp.forEach((t => t.addEventListener(e, this.onNavigateUpClicked, !1))), this.controlsDown.forEach((t => t.addEventListener(e, this.onNavigateDownClicked, !1))), this.controlsPrev.forEach((t => t.addEventListener(e, this.onNavigatePrevClicked, !1))), this.controlsNext.forEach((t => t.addEventListener(e, this.onNavigateNextClicked, !1)))
                    }))
                }
                unbind() {
                    ["touchstart", "click"].forEach((e => {
                        this.controlsLeft.forEach((t => t.removeEventListener(e, this.onNavigateLeftClicked, !1))), this.controlsRight.forEach((t => t.removeEventListener(e, this.onNavigateRightClicked, !1))), this.controlsUp.forEach((t => t.removeEventListener(e, this.onNavigateUpClicked, !1))), this.controlsDown.forEach((t => t.removeEventListener(e, this.onNavigateDownClicked, !1))), this.controlsPrev.forEach((t => t.removeEventListener(e, this.onNavigatePrevClicked, !1))), this.controlsNext.forEach((t => t.removeEventListener(e, this.onNavigateNextClicked, !1)))
                    }))
                }
                update() {
                    let e = this.Reveal.availableRoutes();
                    [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach((e => {
                        e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled")
                    })), e.left && this.controlsLeft.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.right && this.controlsRight.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.up && this.controlsUp.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.down && this.controlsDown.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), (e.left || e.up) && this.controlsPrev.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), (e.right || e.down) && this.controlsNext.forEach((e => {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }));
                    let t = this.Reveal.getCurrentSlide();
                    if (t) {
                        let e = this.Reveal.fragments.availableRoutes();
                        e.prev && this.controlsPrev.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), e.next && this.controlsNext.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), this.Reveal.isVerticalSlide(t) ? (e.prev && this.controlsUp.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), e.next && this.controlsDown.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }))) : (e.prev && this.controlsLeft.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), e.next && this.controlsRight.forEach((e => {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })))
                    }
                    if (this.Reveal.getConfig().controlsTutorial) {
                        let t = this.Reveal.getIndices();
                        !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"))
                    }
                }
                onNavigateLeftClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left()
                }
                onNavigateRightClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right()
                }
                onNavigateUpClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up()
                }
                onNavigateDownClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down()
                }
                onNavigatePrevClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev()
                }
                onNavigateNextClicked(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next()
                }
            }
            class H {
                constructor(e) {
                    this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this)
                }
                render() {
                    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar)
                }
                configure(e, t) {
                    this.element.style.display = e.progress ? "block" : "none"
                }
                bind() {
                    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1)
                }
                unbind() {
                    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1)
                }
                update() {
                    if (this.Reveal.getConfig().progress && this.bar) {
                        let e = this.Reveal.getProgress();
                        this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")"
                    }
                }
                getMaxWidth() {
                    return this.Reveal.getRevealElement().offsetWidth
                }
                onProgressClicked(e) {
                    this.Reveal.onUserInput(e), e.preventDefault();
                    let t = this.Reveal.getSlides(),
                        i = t.length,
                        a = Math.floor(e.clientX / this.getMaxWidth() * i);
                    this.Reveal.getConfig().rtl && (a = i - a);
                    let n = this.Reveal.getIndices(t[a]);
                    this.Reveal.slide(n.h, n.v)
                }
            }
            class B {
                constructor(e) {
                    this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this)
                }
                configure(e, t) {
                    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1))
                }
                showCursor() {
                    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "")
                }
                hideCursor() {
                    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none")
                }
                onDocumentCursorActive(e) {
                    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime)
                }
                onDocumentMouseScroll(e) {
                    if (Date.now() - this.lastMouseWheelStep > 1e3) {
                        this.lastMouseWheelStep = Date.now();
                        let t = e.detail || -e.wheelDelta;
                        t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev()
                    }
                }
            }
            const q = (e, t) => {
                const i = document.createElement("script");
                i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = e => {
                    ("load" === e.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = i.onerror = null, t())
                }, i.onerror = e => {
                    i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e))
                });
                const a = document.querySelector("head");
                a.insertBefore(i, a.lastChild)
            };
            class F {
                constructor(e) {
                    this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = []
                }
                load(e, t) {
                    return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise((e => {
                        let i = [],
                            a = 0;
                        if (t.forEach((e => {
                                e.condition && !e.condition() || (e.async ? this.asyncDependencies.push(e) : i.push(e))
                            })), i.length) {
                            a = i.length;
                            const t = t => {
                                t && "function" == typeof t.callback && t.callback(), 0 == --a && this.initPlugins().then(e)
                            };
                            i.forEach((e => {
                                "string" == typeof e.id ? (this.registerPlugin(e), t(e)) : "string" == typeof e.src ? q(e.src, (() => t(e))) : (console.warn("Unrecognized plugin format", e), t())
                            }))
                        } else this.initPlugins().then(e)
                    }))
                }
                initPlugins() {
                    return new Promise((e => {
                        let t = Object.values(this.registeredPlugins),
                            i = t.length;
                        if (0 === i) this.loadAsync().then(e);
                        else {
                            let a, n = () => {
                                    0 == --i ? this.loadAsync().then(e) : a()
                                },
                                s = 0;
                            a = () => {
                                let e = t[s++];
                                if ("function" == typeof e.init) {
                                    let t = e.init(this.Reveal);
                                    t && "function" == typeof t.then ? t.then(n) : n()
                                } else n()
                            }, a()
                        }
                    }))
                }
                loadAsync() {
                    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e => {
                        q(e.src, e.callback)
                    })), Promise.resolve()
                }
                registerPlugin(e) {
                    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
                    let t = e.id;
                    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered')
                }
                hasPlugin(e) {
                    return !!this.registeredPlugins[e]
                }
                getPlugin(e) {
                    return this.registeredPlugins[e]
                }
                getRegisteredPlugins() {
                    return this.registeredPlugins
                }
            }
            class U {
                constructor(e) {
                    this.Reveal = e
                }
                async setupPDF() {
                    const e = this.Reveal.getConfig(),
                        t = o(this.Reveal.getRevealElement(), ".slides section"),
                        i = e.slideNumber && /all|print/i.test(e.showSlideNumber),
                        a = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
                        n = Math.floor(a.width * (1 + e.margin)),
                        s = Math.floor(a.height * (1 + e.margin)),
                        r = a.width,
                        l = a.height;
                    await new Promise(requestAnimationFrame), g("@page{size:" + n + "px " + s + "px; margin: 0px;}"), g(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + r + "px; max-height:" + l + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n + "px", document.body.style.height = s + "px", await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(r, l), t.forEach((e => this.Reveal.slideContent.layout(e))), await new Promise(requestAnimationFrame);
                    const d = t.map((e => e.scrollHeight)),
                        c = [],
                        h = t[0].parentNode;
                    t.forEach((function(t, a) {
                        if (!1 === t.classList.contains("stack")) {
                            let h = (n - r) / 2,
                                u = (s - l) / 2;
                            const g = d[a];
                            let v = Math.max(Math.ceil(g / s), 1);
                            v = Math.min(v, e.pdfMaxPagesPerSlide), (1 === v && e.center || t.classList.contains("center")) && (u = Math.max((s - g) / 2, 0));
                            const p = document.createElement("div");
                            if (c.push(p), p.className = "pdf-page", p.style.height = (s + e.pdfPageHeightOffset) * v + "px", p.appendChild(t), t.style.left = h + "px", t.style.top = u + "px", t.style.width = r + "px", t.slideBackgroundElement && p.insertBefore(t.slideBackgroundElement, t), e.showNotes) {
                                const i = this.Reveal.getSlideNotes(t);
                                if (i) {
                                    const t = 8,
                                        a = "string" == typeof e.showNotes ? e.showNotes : "inline",
                                        s = document.createElement("div");
                                    s.classList.add("speaker-notes"), s.classList.add("speaker-notes-pdf"), s.setAttribute("data-layout", a), s.innerHTML = i, "separate-page" === a ? c.push(s) : (s.style.left = t + "px", s.style.bottom = t + "px", s.style.width = n - 2 * t + "px", p.appendChild(s))
                                }
                            }
                            if (i) {
                                const e = a + 1,
                                    t = document.createElement("div");
                                t.classList.add("slide-number"), t.classList.add("slide-number-pdf"), t.innerHTML = e, p.appendChild(t)
                            }
                            if (e.pdfSeparateFragments) {
                                const e = this.Reveal.fragments.sort(p.querySelectorAll(".fragment"), !0);
                                let t;
                                e.forEach((function(e) {
                                    t && t.forEach((function(e) {
                                        e.classList.remove("current-fragment")
                                    })), e.forEach((function(e) {
                                        e.classList.add("visible", "current-fragment")
                                    }), this);
                                    const i = p.cloneNode(!0);
                                    c.push(i), t = e
                                }), this), e.forEach((function(e) {
                                    e.forEach((function(e) {
                                        e.classList.remove("visible", "current-fragment")
                                    }))
                                }))
                            } else o(p, ".fragment:not(.fade-out)").forEach((function(e) {
                                e.classList.add("visible")
                            }))
                        }
                    }), this), await new Promise(requestAnimationFrame), c.forEach((e => h.appendChild(e))), this.Reveal.dispatchEvent({
                        type: "pdf-ready"
                    })
                }
                isPrintingPDF() {
                    return /print-pdf/gi.test(window.location.search)
                }
            }
            class O {
                constructor(e) {
                    this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this)
                }
                bind() {
                    let e = this.Reveal.getRevealElement();
                    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1))
                }
                unbind() {
                    let e = this.Reveal.getRevealElement();
                    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1)
                }
                isSwipePrevented(e) {
                    if (c(e, "video, audio")) return !0;
                    for (; e && "function" == typeof e.hasAttribute;) {
                        if (e.hasAttribute("data-prevent-swipe")) return !0;
                        e = e.parentNode
                    }
                    return !1
                }
                onTouchStart(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length
                }
                onTouchMove(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    let t = this.Reveal.getConfig();
                    if (this.touchCaptured) w && e.preventDefault();
                    else {
                        this.Reveal.onUserInput(e);
                        let i = e.touches[0].clientX,
                            a = e.touches[0].clientY;
                        if (1 === e.touches.length && 2 !== this.touchStartCount) {
                            let n = this.Reveal.availableRoutes({
                                    includeFragments: !0
                                }),
                                s = i - this.touchStartX,
                                o = a - this.touchStartY;
                            s > 40 && Math.abs(s) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : s < -40 && Math.abs(s) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > 40 && n.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && n.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault()
                        }
                    }
                }
                onTouchEnd(e) {
                    this.touchCaptured = !1
                }
                onPointerDown(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchStart(e))
                }
                onPointerMove(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchMove(e))
                }
                onPointerUp(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchEnd(e))
                }
            }
            class W {
                constructor(e) {
                    this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this)
                }
                configure(e, t) {
                    e.embedded ? this.blur() : (this.focus(), this.unbind())
                }
                bind() {
                    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1)
                }
                unbind() {
                    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)
                }
                focus() {
                    "focus" !== this.state && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "focus"
                }
                blur() {
                    "blur" !== this.state && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "blur"
                }
                isFocused() {
                    return "focus" === this.state
                }
                onRevealPointerDown(e) {
                    this.focus()
                }
                onDocumentPointerDown(e) {
                    let t = h(e.target, ".reveal");
                    t && t === this.Reveal.getRevealElement() || this.blur()
                }
            }
            class V {
                constructor(e) {
                    this.Reveal = e
                }
                render() {
                    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element)
                }
                configure(e, t) {
                    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline")
                }
                update() {
                    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>')
                }
                updateVisibility() {
                    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes")
                }
                hasNotes() {
                    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0
                }
                isSpeakerNotesWindow() {
                    return !!window.location.search.match(/receiver/gi)
                }
                getSlideNotes(e = this.Reveal.getCurrentSlide()) {
                    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
                    let t = e.querySelector("aside.notes");
                    return t ? t.innerHTML : null
                }
            }
            class $ {
                constructor(e, t) {
                    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
                }
                setPlaying(e) {
                    const t = this.playing;
                    this.playing = e, !t && this.playing ? this.animate() : this.render()
                }
                animate() {
                    const e = this.progress;
                    this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this))
                }
                render() {
                    let e = this.playing ? this.progress : 0,
                        t = this.diameter2 - this.thickness,
                        i = this.diameter2,
                        a = this.diameter2;
                    this.progressOffset += .1 * (1 - this.progressOffset);
                    const n = -Math.PI / 2 + e * (2 * Math.PI),
                        s = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
                    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, a, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, a, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, a, t, s, n, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, a - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
                }
                on(e, t) {
                    this.canvas.addEventListener(e, t, !1)
                }
                off(e, t) {
                    this.canvas.removeEventListener(e, t, !1)
                }
                destroy() {
                    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
                }
            }
            var K = {
                width: 960,
                height: 700,
                margin: .04,
                minScale: .2,
                maxScale: 2,
                controls: !0,
                controlsTutorial: !0,
                controlsLayout: "bottom-right",
                controlsBackArrows: "faded",
                progress: !0,
                slideNumber: !1,
                showSlideNumber: "all",
                hashOneBasedIndex: !1,
                hash: !1,
                respondToHashChanges: !0,
                history: !1,
                keyboard: !0,
                keyboardCondition: null,
                disableLayout: !1,
                overview: !0,
                center: !0,
                touch: !0,
                loop: !1,
                rtl: !1,
                navigationMode: "default",
                shuffle: !1,
                fragments: !0,
                fragmentInURL: !0,
                embedded: !1,
                help: !0,
                pause: !0,
                showNotes: !1,
                showHiddenSlides: !1,
                autoPlayMedia: null,
                preloadIframes: null,
                autoAnimate: !0,
                autoAnimateMatcher: null,
                autoAnimateEasing: "ease",
                autoAnimateDuration: 1,
                autoAnimateUnmatched: !0,
                autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
                autoSlide: 0,
                autoSlideStoppable: !0,
                autoSlideMethod: null,
                defaultTiming: null,
                mouseWheel: !1,
                previewLinks: !1,
                postMessage: !0,
                postMessageEvents: !1,
                focusBodyOnPageVisibilityChange: !0,
                transition: "slide",
                transitionSpeed: "default",
                backgroundTransition: "fade",
                parallaxBackgroundImage: "",
                parallaxBackgroundSize: "",
                parallaxBackgroundRepeat: "",
                parallaxBackgroundPosition: "",
                parallaxBackgroundHorizontal: null,
                parallaxBackgroundVertical: null,
                pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
                pdfSeparateFragments: !0,
                pdfPageHeightOffset: -1,
                viewDistance: 3,
                mobileViewDistance: 2,
                display: "block",
                hideInactiveCursor: !0,
                hideCursorTime: 5e3,
                dependencies: [],
                plugins: []
            };

            function j(e, t) {
                arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
                const i = {};
                let n, c, g, m, f, y = {},
                    w = !1,
                    A = {
                        hasNavigatedHorizontally: !1,
                        hasNavigatedVertically: !1
                    },
                    E = [],
                    S = 1,
                    C = {
                        layout: "",
                        overview: ""
                    },
                    P = {},
                    q = "idle",
                    j = 0,
                    X = 0,
                    Y = -1,
                    _ = !1,
                    J = new k(i),
                    Q = new L(i),
                    Z = new N(i),
                    G = new x(i),
                    ee = new M(i),
                    te = new D(i),
                    ie = new I(i),
                    ae = new T(i),
                    ne = new z(i),
                    se = new H(i),
                    oe = new B(i),
                    re = new F(i),
                    le = new U(i),
                    de = new W(i),
                    ce = new O(i),
                    he = new V(i);

                function ue(a) {
                    return P.wrapper = e, P.slides = e.querySelector(".slides"), y = { ...K,
                        ...y,
                        ...t,
                        ...a,
                        ...v()
                    }, ge(), window.addEventListener("load", He, !1), re.load(y.plugins, y.dependencies).then(ve), new Promise((e => i.on("ready", e)))
                }

                function ge() {
                    !0 === y.embedded ? P.viewport = h(e, ".reveal-viewport") || e : (P.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), P.viewport.classList.add("reveal-viewport")
                }

                function ve() {
                    w = !0, pe(), me(), Re(), we(), et(), Ae(), ae.readURL(), G.update(!0), setTimeout((() => {
                        P.slides.classList.remove("no-transition"), P.wrapper.classList.add("ready"), xe({
                            type: "ready",
                            data: {
                                indexh: n,
                                indexv: c,
                                currentSlide: m
                            }
                        })
                    }), 1), le.isPrintingPDF() && (Se(), "complete" === document.readyState ? le.setupPDF() : window.addEventListener("load", (() => {
                        le.setupPDF()
                    })))
                }

                function pe() {
                    y.showHiddenSlides || o(P.wrapper, 'section[data-visibility="hidden"]').forEach((e => {
                        e.parentNode.removeChild(e)
                    }))
                }

                function me() {
                    P.slides.classList.add("no-transition"), b ? P.wrapper.classList.add("no-hover") : P.wrapper.classList.remove("no-hover"), G.render(), Q.render(), ne.render(), se.render(), he.render(), P.pauseOverlay = u(P.wrapper, "div", "pause-overlay", y.controls ? '<button class="resume-button">Resume presentation</button>' : null), P.statusElement = fe(), P.wrapper.setAttribute("role", "application")
                }

                function fe() {
                    let e = P.wrapper.querySelector(".aria-status");
                    return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), P.wrapper.appendChild(e)), e
                }

                function be(e) {
                    P.statusElement.textContent = e
                }

                function ye(e) {
                    let t = "";
                    if (3 === e.nodeType) t += e.textContent;
                    else if (1 === e.nodeType) {
                        let i = e.getAttribute("aria-hidden"),
                            a = "none" === window.getComputedStyle(e).display;
                        "true" === i || a || Array.from(e.childNodes).forEach((e => {
                            t += ye(e)
                        }))
                    }
                    return t = t.trim(), "" === t ? "" : t + " "
                }

                function we() {
                    setInterval((() => {
                        0 === P.wrapper.scrollTop && 0 === P.wrapper.scrollLeft || (P.wrapper.scrollTop = 0, P.wrapper.scrollLeft = 0)
                    }), 1e3)
                }

                function Re() {
                    y.postMessage && window.addEventListener("message", (e => {
                        let t = e.data;
                        if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof i[t.method]))
                            if (!1 === a.test(t.method)) {
                                const e = i[t.method].apply(i, t.args);
                                Pe("callback", {
                                    method: t.method,
                                    result: e
                                })
                            } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API')
                    }), !1)
                }

                function Ae(e) {
                    const t = { ...y
                    };
                    if ("object" == typeof e && s(y, e), !1 === i.isReady()) return;
                    const a = P.wrapper.querySelectorAll(".slides section").length;
                    P.wrapper.classList.remove(t.transition), P.wrapper.classList.add(y.transition), P.wrapper.setAttribute("data-transition-speed", y.transitionSpeed), P.wrapper.setAttribute("data-background-transition", y.backgroundTransition), P.viewport.style.setProperty("--slide-width", y.width + "px"), P.viewport.style.setProperty("--slide-height", y.height + "px"), y.shuffle && tt(), r(P.wrapper, "embedded", y.embedded), r(P.wrapper, "rtl", y.rtl), r(P.wrapper, "center", y.center), !1 === y.pause && je(), y.previewLinks ? (Ne(), Me("[data-preview-link=false]")) : (Me(), Ne("[data-preview-link]:not([data-preview-link=false])")), Z.reset(), f && (f.destroy(), f = null), a > 1 && y.autoSlide && y.autoSlideStoppable && (f = new $(P.wrapper, (() => Math.min(Math.max((Date.now() - Y) / j, 0), 1))), f.on("click", zt), _ = !1), "default" !== y.navigationMode ? P.wrapper.setAttribute("data-navigation-mode", y.navigationMode) : P.wrapper.removeAttribute("data-navigation-mode"), he.configure(y, t), de.configure(y, t), oe.configure(y, t), ne.configure(y, t), se.configure(y, t), ie.configure(y, t), ee.configure(y, t), Q.configure(y, t), Ze()
                }

                function Ee() {
                    window.addEventListener("resize", Dt, !1), y.touch && ce.bind(), y.keyboard && ie.bind(), y.progress && se.bind(), y.respondToHashChanges && ae.bind(), ne.bind(), de.bind(), P.slides.addEventListener("transitionend", Mt, !1), P.pauseOverlay.addEventListener("click", je, !1), y.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", It, !1)
                }

                function Se() {
                    ce.unbind(), de.unbind(), ie.unbind(), ne.unbind(), se.unbind(), ae.unbind(), window.removeEventListener("resize", Dt, !1), P.slides.removeEventListener("transitionend", Mt, !1), P.pauseOverlay.removeEventListener("click", je, !1)
                }

                function ke(t, i, a) {
                    e.addEventListener(t, i, a)
                }

                function Le(t, i, a) {
                    e.removeEventListener(t, i, a)
                }

                function Ce(e) {
                    "string" == typeof e.layout && (C.layout = e.layout), "string" == typeof e.overview && (C.overview = e.overview), C.layout ? d(P.slides, C.layout + " " + C.overview) : d(P.slides, C.overview)
                }

                function xe({
                    target: e = P.wrapper,
                    type: t,
                    data: i,
                    bubbles: a = !0
                }) {
                    let n = document.createEvent("HTMLEvents", 1, 2);
                    n.initEvent(t, a, !0), s(n, i), e.dispatchEvent(n), e === P.wrapper && Pe(t)
                }

                function Pe(e, t) {
                    if (y.postMessageEvents && window.parent !== window.self) {
                        let i = {
                            namespace: "reveal",
                            eventName: e,
                            state: bt()
                        };
                        s(i, t), window.parent.postMessage(JSON.stringify(i), "*")
                    }
                }

                function Ne(e = "a") {
                    Array.from(P.wrapper.querySelectorAll(e)).forEach((e => {
                        /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Tt, !1)
                    }))
                }

                function Me(e = "a") {
                    Array.from(P.wrapper.querySelectorAll(e)).forEach((e => {
                        /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Tt, !1)
                    }))
                }

                function De(e) {
                    ze(), P.overlay = document.createElement("div"), P.overlay.classList.add("overlay"), P.overlay.classList.add("overlay-preview"), P.wrapper.appendChild(P.overlay), P.overlay.innerHTML = `<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`, P.overlay.querySelector("iframe").addEventListener("load", (e => {
                        P.overlay.classList.add("loaded")
                    }), !1), P.overlay.querySelector(".close").addEventListener("click", (e => {
                        ze(), e.preventDefault()
                    }), !1), P.overlay.querySelector(".external").addEventListener("click", (e => {
                        ze()
                    }), !1)
                }

                function Ie(e) {
                    "boolean" == typeof e ? e ? Te() : ze() : P.overlay ? ze() : Te()
                }

                function Te() {
                    if (y.help) {
                        ze(), P.overlay = document.createElement("div"), P.overlay.classList.add("overlay"), P.overlay.classList.add("overlay-help"), P.wrapper.appendChild(P.overlay);
                        let e = '<p class="title">Keyboard Shortcuts</p><br/>',
                            t = ie.getShortcuts(),
                            i = ie.getBindings();
                        e += "<table><th>KEY</th><th>ACTION</th>";
                        for (let a in t) e += `<tr><td>${a}</td><td>${t[a]}</td></tr>`;
                        for (let a in i) i[a].key && i[a].description && (e += `<tr><td>${i[a].key}</td><td>${i[a].description}</td></tr>`);
                        e += "</table>", P.overlay.innerHTML = `\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`, P.overlay.querySelector(".close").addEventListener("click", (e => {
                            ze(), e.preventDefault()
                        }), !1)
                    }
                }

                function ze() {
                    return !!P.overlay && (P.overlay.parentNode.removeChild(P.overlay), P.overlay = null, !0)
                }

                function He() {
                    if (P.wrapper && !le.isPrintingPDF()) {
                        if (!y.disableLayout) {
                            b && !y.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                            const e = qe(),
                                t = S;
                            Be(y.width, y.height), P.slides.style.width = e.width + "px", P.slides.style.height = e.height + "px", S = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), S = Math.max(S, y.minScale), S = Math.min(S, y.maxScale), 1 === S ? (P.slides.style.zoom = "", P.slides.style.left = "", P.slides.style.top = "", P.slides.style.bottom = "", P.slides.style.right = "", Ce({
                                layout: ""
                            })) : S > 1 && R && window.devicePixelRatio < 2 ? (P.slides.style.zoom = S, P.slides.style.left = "", P.slides.style.top = "", P.slides.style.bottom = "", P.slides.style.right = "", Ce({
                                layout: ""
                            })) : (P.slides.style.zoom = "", P.slides.style.left = "50%", P.slides.style.top = "50%", P.slides.style.bottom = "auto", P.slides.style.right = "auto", Ce({
                                layout: "translate(-50%, -50%) scale(" + S + ")"
                            }));
                            const i = Array.from(P.wrapper.querySelectorAll(".slides section"));
                            for (let a = 0, n = i.length; a < n; a++) {
                                const t = i[a];
                                "none" !== t.style.display && (y.center || t.classList.contains("center") ? t.classList.contains("stack") ? t.style.top = 0 : t.style.top = Math.max((e.height - t.scrollHeight) / 2, 0) + "px" : t.style.top = "")
                            }
                            t !== S && xe({
                                type: "resize",
                                data: {
                                    oldScale: t,
                                    scale: S,
                                    size: e
                                }
                            })
                        }
                        se.update(), G.updateParallax(), te.isActive() && te.update()
                    }
                }

                function Be(e, t) {
                    o(P.slides, "section > .stretch, section > .r-stretch").forEach((i => {
                        let a = p(i, t);
                        if (/(img|video)/gi.test(i.nodeName)) {
                            const t = i.naturalWidth || i.videoWidth,
                                n = i.naturalHeight || i.videoHeight,
                                s = Math.min(e / t, a / n);
                            i.style.width = t * s + "px", i.style.height = n * s + "px"
                        } else i.style.width = e + "px", i.style.height = a + "px"
                    }))
                }

                function qe(e, t) {
                    const i = {
                        width: y.width,
                        height: y.height,
                        presentationWidth: e || P.wrapper.offsetWidth,
                        presentationHeight: t || P.wrapper.offsetHeight
                    };
                    return i.presentationWidth -= i.presentationWidth * y.margin, i.presentationHeight -= i.presentationHeight * y.margin, "string" == typeof i.width && /%$/.test(i.width) && (i.width = parseInt(i.width, 10) / 100 * i.presentationWidth), "string" == typeof i.height && /%$/.test(i.height) && (i.height = parseInt(i.height, 10) / 100 * i.presentationHeight), i
                }

                function Fe(e, t) {
                    "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
                }

                function Ue(e) {
                    if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
                        const t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
                        return parseInt(e.getAttribute(t) || 0, 10)
                    }
                    return 0
                }

                function Oe(e = m) {
                    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
                }

                function We() {
                    return !(!m || !Oe(m)) && !m.nextElementSibling
                }

                function Ve() {
                    return 0 === n && 0 === c
                }

                function $e() {
                    return !!m && !m.nextElementSibling && (!Oe(m) || !m.parentNode.nextElementSibling)
                }

                function Ke() {
                    if (y.pause) {
                        const e = P.wrapper.classList.contains("paused");
                        Rt(), P.wrapper.classList.add("paused"), !1 === e && xe({
                            type: "paused"
                        })
                    }
                }

                function je() {
                    const e = P.wrapper.classList.contains("paused");
                    P.wrapper.classList.remove("paused"), wt(), e && xe({
                        type: "resumed"
                    })
                }

                function Xe(e) {
                    "boolean" == typeof e ? e ? Ke() : je() : Ye() ? je() : Ke()
                }

                function Ye() {
                    return P.wrapper.classList.contains("paused")
                }

                function _e(e) {
                    "boolean" == typeof e ? e ? Et() : At() : _ ? Et() : At()
                }

                function Je() {
                    return !(!j || _)
                }

                function Qe(e, t, i, a) {
                    g = m;
                    const s = P.wrapper.querySelectorAll(".slides>section");
                    if (0 === s.length) return;
                    void 0 !== t || te.isActive() || (t = Ue(s[e])), g && g.parentNode && g.parentNode.classList.contains("stack") && Fe(g.parentNode, c);
                    const o = E.concat();
                    E.length = 0;
                    let r = n || 0,
                        l = c || 0;
                    n = it(".slides>section", void 0 === e ? n : e), c = it(".slides>section.present>section", void 0 === t ? c : t);
                    let d = n !== r || c !== l;
                    d || (g = null);
                    let h = s[n],
                        u = h.querySelectorAll("section");
                    m = u[c] || h;
                    let v = !1;
                    d && g && m && !te.isActive() && (g.hasAttribute("data-auto-animate") && m.hasAttribute("data-auto-animate") && g.getAttribute("data-auto-animate-id") === m.getAttribute("data-auto-animate-id") && !(n > r || c > l ? m : g).hasAttribute("data-auto-animate-restart") && (v = !0, P.slides.classList.add("disable-slide-transitions")), q = "running"), at(), He(), te.isActive() && te.update(), void 0 !== i && ee.goto(i), g && g !== m && (g.classList.remove("present"), g.setAttribute("aria-hidden", "true"), Ve() && setTimeout((() => {
                        ht().forEach((e => {
                            Fe(e, 0)
                        }))
                    }), 0));
                    e: for (let n = 0, c = E.length; n < c; n++) {
                        for (let e = 0; e < o.length; e++)
                            if (o[e] === E[n]) {
                                o.splice(e, 1);
                                continue e
                            }
                        P.viewport.classList.add(E[n]), xe({
                            type: E[n]
                        })
                    }
                    for (; o.length;) P.viewport.classList.remove(o.pop());
                    d && xe({
                        type: "slidechanged",
                        data: {
                            indexh: n,
                            indexv: c,
                            previousSlide: g,
                            currentSlide: m,
                            origin: a
                        }
                    }), !d && g || (J.stopEmbeddedContent(g), J.startEmbeddedContent(m)), requestAnimationFrame((() => {
                        be(ye(m))
                    })), se.update(), ne.update(), he.update(), G.update(), G.updateParallax(), Q.update(), ee.update(), ae.writeURL(), wt(), v && (setTimeout((() => {
                        P.slides.classList.remove("disable-slide-transitions")
                    }), 0), y.autoAnimate && Z.run(g, m))
                }

                function Ze() {
                    Se(), Ee(), He(), j = y.autoSlide, wt(), G.create(), ae.writeURL(), ee.sortAll(), ne.update(), se.update(), at(), he.update(), he.updateVisibility(), G.update(!0), Q.update(), J.formatEmbeddedContent(), !1 === y.autoPlayMedia ? J.stopEmbeddedContent(m, {
                        unloadIframes: !1
                    }) : J.startEmbeddedContent(m), te.isActive() && te.layout()
                }

                function Ge(e = m) {
                    G.sync(e), ee.sync(e), J.load(e), G.update(), he.update()
                }

                function et() {
                    dt().forEach((e => {
                        o(e, "section").forEach(((e, t) => {
                            t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
                        }))
                    }))
                }

                function tt(e = dt()) {
                    e.forEach(((t, i) => {
                        let a = e[Math.floor(Math.random() * e.length)];
                        a.parentNode === t.parentNode && t.parentNode.insertBefore(t, a);
                        let n = t.querySelectorAll("section");
                        n.length && tt(n)
                    }))
                }

                function it(e, t) {
                    let i = o(P.wrapper, e),
                        a = i.length,
                        n = le.isPrintingPDF();
                    if (a) {
                        y.loop && (t %= a) < 0 && (t = a + t), t = Math.max(Math.min(t, a - 1), 0);
                        for (let l = 0; l < a; l++) {
                            let e = i[l],
                                a = y.rtl && !Oe(e);
                            e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), e.setAttribute("hidden", ""), e.setAttribute("aria-hidden", "true"), e.querySelector("section") && e.classList.add("stack"), n ? e.classList.add("present") : l < t ? (e.classList.add(a ? "future" : "past"), y.fragments && o(e, ".fragment").forEach((e => {
                                e.classList.add("visible"), e.classList.remove("current-fragment")
                            }))) : l > t && (e.classList.add(a ? "past" : "future"), y.fragments && o(e, ".fragment.visible").forEach((e => {
                                e.classList.remove("visible", "current-fragment")
                            })))
                        }
                        let e = i[t],
                            s = e.classList.contains("present");
                        e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), s || xe({
                            target: e,
                            type: "visible",
                            bubbles: !1
                        });
                        let r = e.getAttribute("data-state");
                        r && (E = E.concat(r.split(" ")))
                    } else t = 0;
                    return t
                }

                function at() {
                    let e, t, i = dt(),
                        a = i.length;
                    if (a && void 0 !== n) {
                        let s = te.isActive() ? 10 : y.viewDistance;
                        b && (s = te.isActive() ? 6 : y.mobileViewDistance), le.isPrintingPDF() && (s = Number.MAX_VALUE);
                        for (let r = 0; r < a; r++) {
                            let l = i[r],
                                d = o(l, "section"),
                                h = d.length;
                            if (e = Math.abs((n || 0) - r) || 0, y.loop && (e = Math.abs(((n || 0) - r) % (a - s)) || 0), e < s ? J.load(l) : J.unload(l), h) {
                                let i = Ue(l);
                                for (let a = 0; a < h; a++) {
                                    let o = d[a];
                                    t = r === (n || 0) ? Math.abs((c || 0) - a) : Math.abs(a - i), e + t < s ? J.load(o) : J.unload(o)
                                }
                            }
                        }
                        gt() ? P.wrapper.classList.add("has-vertical-slides") : P.wrapper.classList.remove("has-vertical-slides"), ut() ? P.wrapper.classList.add("has-horizontal-slides") : P.wrapper.classList.remove("has-horizontal-slides")
                    }
                }

                function nt({
                    includeFragments: e = !1
                } = {}) {
                    let t = P.wrapper.querySelectorAll(".slides>section"),
                        i = P.wrapper.querySelectorAll(".slides>section.present>section"),
                        a = {
                            left: n > 0,
                            right: n < t.length - 1,
                            up: c > 0,
                            down: c < i.length - 1
                        };
                    if (y.loop && (t.length > 1 && (a.left = !0, a.right = !0), i.length > 1 && (a.up = !0, a.down = !0)), t.length > 1 && "linear" === y.navigationMode && (a.right = a.right || a.down, a.left = a.left || a.up), !0 === e) {
                        let e = ee.availableRoutes();
                        a.left = a.left || e.prev, a.up = a.up || e.prev, a.down = a.down || e.next, a.right = a.right || e.next
                    }
                    if (y.rtl) {
                        let e = a.left;
                        a.left = a.right, a.right = e
                    }
                    return a
                }

                function st(e = m) {
                    let t = dt(),
                        i = 0;
                    e: for (let a = 0; a < t.length; a++) {
                        let n = t[a],
                            s = n.querySelectorAll("section");
                        for (let t = 0; t < s.length; t++) {
                            if (s[t] === e) break e;
                            "uncounted" !== s[t].dataset.visibility && i++
                        }
                        if (n === e) break;
                        !1 === n.classList.contains("stack") && "uncounted" !== n.dataset.visibility && i++
                    }
                    return i
                }

                function ot() {
                    let e = pt(),
                        t = st();
                    if (m) {
                        let e = m.querySelectorAll(".fragment");
                        if (e.length > 0) {
                            let i = .9;
                            t += m.querySelectorAll(".fragment.visible").length / e.length * i
                        }
                    }
                    return Math.min(t / (e - 1), 1)
                }

                function rt(e) {
                    let t, i = n,
                        a = c;
                    if (e) {
                        let t = Oe(e),
                            n = t ? e.parentNode : e,
                            s = dt();
                        i = Math.max(s.indexOf(n), 0), a = void 0, t && (a = Math.max(o(e.parentNode, "section").indexOf(e), 0))
                    }
                    if (!e && m && m.querySelectorAll(".fragment").length > 0) {
                        let e = m.querySelector(".current-fragment");
                        t = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : m.querySelectorAll(".fragment.visible").length - 1
                    }
                    return {
                        h: i,
                        v: a,
                        f: t
                    }
                }

                function lt() {
                    return o(P.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])')
                }

                function dt() {
                    return o(P.wrapper, ".slides>section")
                }

                function ct() {
                    return o(P.wrapper, ".slides>section>section")
                }

                function ht() {
                    return o(P.wrapper, ".slides>section.stack")
                }

                function ut() {
                    return dt().length > 1
                }

                function gt() {
                    return ct().length > 1
                }

                function vt() {
                    return lt().map((e => {
                        let t = {};
                        for (let i = 0; i < e.attributes.length; i++) {
                            let a = e.attributes[i];
                            t[a.name] = a.value
                        }
                        return t
                    }))
                }

                function pt() {
                    return lt().length
                }

                function mt(e, t) {
                    let i = dt()[e],
                        a = i && i.querySelectorAll("section");
                    return a && a.length && "number" == typeof t ? a ? a[t] : void 0 : i
                }

                function ft(e, t) {
                    let i = "number" == typeof e ? mt(e, t) : e;
                    if (i) return i.slideBackgroundElement
                }

                function bt() {
                    let e = rt();
                    return {
                        indexh: e.h,
                        indexv: e.v,
                        indexf: e.f,
                        paused: Ye(),
                        overview: te.isActive()
                    }
                }

                function yt(e) {
                    if ("object" == typeof e) {
                        Qe(l(e.indexh), l(e.indexv), l(e.indexf));
                        let t = l(e.paused),
                            i = l(e.overview);
                        "boolean" == typeof t && t !== Ye() && Xe(t), "boolean" == typeof i && i !== te.isActive() && te.toggle(i)
                    }
                }

                function wt() {
                    if (Rt(), m && !1 !== y.autoSlide) {
                        let e = m.querySelector(".current-fragment");
                        e || (e = m.querySelector(".fragment"));
                        let t = e ? e.getAttribute("data-autoslide") : null,
                            i = m.parentNode ? m.parentNode.getAttribute("data-autoslide") : null,
                            a = m.getAttribute("data-autoslide");
                        t ? j = parseInt(t, 10) : a ? j = parseInt(a, 10) : i ? j = parseInt(i, 10) : (j = y.autoSlide, 0 === m.querySelectorAll(".fragment").length && o(m, "video, audio").forEach((e => {
                            e.hasAttribute("data-autoplay") && j && 1e3 * e.duration / e.playbackRate > j && (j = 1e3 * e.duration / e.playbackRate + 1e3)
                        }))), !j || _ || Ye() || te.isActive() || $e() && !ee.availableRoutes().next && !0 !== y.loop || (X = setTimeout((() => {
                            "function" == typeof y.autoSlideMethod ? y.autoSlideMethod() : Pt(), wt()
                        }), j), Y = Date.now()), f && f.setPlaying(-1 !== X)
                    }
                }

                function Rt() {
                    clearTimeout(X), X = -1
                }

                function At() {
                    j && !_ && (_ = !0, xe({
                        type: "autoslidepaused"
                    }), clearTimeout(X), f && f.setPlaying(!1))
                }

                function Et() {
                    j && _ && (_ = !1, xe({
                        type: "autoslideresumed"
                    }), wt())
                }

                function St() {
                    A.hasNavigatedHorizontally = !0, y.rtl ? (te.isActive() || !1 === ee.next()) && nt().left && Qe(n + 1, "grid" === y.navigationMode ? c : void 0) : (te.isActive() || !1 === ee.prev()) && nt().left && Qe(n - 1, "grid" === y.navigationMode ? c : void 0)
                }

                function kt() {
                    A.hasNavigatedHorizontally = !0, y.rtl ? (te.isActive() || !1 === ee.prev()) && nt().right && Qe(n - 1, "grid" === y.navigationMode ? c : void 0) : (te.isActive() || !1 === ee.next()) && nt().right && Qe(n + 1, "grid" === y.navigationMode ? c : void 0)
                }

                function Lt() {
                    (te.isActive() || !1 === ee.prev()) && nt().up && Qe(n, c - 1)
                }

                function Ct() {
                    A.hasNavigatedVertically = !0, (te.isActive() || !1 === ee.next()) && nt().down && Qe(n, c + 1)
                }

                function xt() {
                    if (!1 === ee.prev())
                        if (nt().up) Lt();
                        else {
                            let e;
                            if (e = y.rtl ? o(P.wrapper, ".slides>section.future").pop() : o(P.wrapper, ".slides>section.past").pop(), e) {
                                let t = e.querySelectorAll("section").length - 1 || void 0;
                                Qe(n - 1, t)
                            }
                        }
                }

                function Pt() {
                    if (A.hasNavigatedHorizontally = !0, A.hasNavigatedVertically = !0, !1 === ee.next()) {
                        let e = nt();
                        e.down && e.right && y.loop && We() && (e.down = !1), e.down ? Ct() : y.rtl ? St() : kt()
                    }
                }

                function Nt(e) {
                    y.autoSlideStoppable && At()
                }

                function Mt(e) {
                    "running" === q && /section/gi.test(e.target.nodeName) && (q = "idle", xe({
                        type: "slidetransitionend",
                        data: {
                            indexh: n,
                            indexv: c,
                            previousSlide: g,
                            currentSlide: m
                        }
                    }))
                }

                function Dt(e) {
                    He()
                }

                function It(e) {
                    !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
                }

                function Tt(e) {
                    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                        let t = e.currentTarget.getAttribute("href");
                        t && (De(t), e.preventDefault())
                    }
                }

                function zt(e) {
                    $e() && !1 === y.loop ? (Qe(0, 0), Et()) : _ ? Et() : At()
                }
                const Ht = {
                    VERSION: "4.1.3",
                    initialize: ue,
                    configure: Ae,
                    sync: Ze,
                    syncSlide: Ge,
                    syncFragments: ee.sync.bind(ee),
                    slide: Qe,
                    left: St,
                    right: kt,
                    up: Lt,
                    down: Ct,
                    prev: xt,
                    next: Pt,
                    navigateLeft: St,
                    navigateRight: kt,
                    navigateUp: Lt,
                    navigateDown: Ct,
                    navigatePrev: xt,
                    navigateNext: Pt,
                    navigateFragment: ee.goto.bind(ee),
                    prevFragment: ee.prev.bind(ee),
                    nextFragment: ee.next.bind(ee),
                    on: ke,
                    off: Le,
                    addEventListener: ke,
                    removeEventListener: Le,
                    layout: He,
                    shuffle: tt,
                    availableRoutes: nt,
                    availableFragments: ee.availableRoutes.bind(ee),
                    toggleHelp: Ie,
                    toggleOverview: te.toggle.bind(te),
                    togglePause: Xe,
                    toggleAutoSlide: _e,
                    isFirstSlide: Ve,
                    isLastSlide: $e,
                    isLastVerticalSlide: We,
                    isVerticalSlide: Oe,
                    isPaused: Ye,
                    isAutoSliding: Je,
                    isSpeakerNotes: he.isSpeakerNotesWindow.bind(he),
                    isOverview: te.isActive.bind(te),
                    isFocused: de.isFocused.bind(de),
                    isPrintingPDF: le.isPrintingPDF.bind(le),
                    isReady: () => w,
                    loadSlide: J.load.bind(J),
                    unloadSlide: J.unload.bind(J),
                    showPreview: De,
                    hidePreview: ze,
                    addEventListeners: Ee,
                    removeEventListeners: Se,
                    dispatchEvent: xe,
                    getState: bt,
                    setState: yt,
                    getProgress: ot,
                    getIndices: rt,
                    getSlidesAttributes: vt,
                    getSlidePastCount: st,
                    getTotalSlides: pt,
                    getSlide: mt,
                    getPreviousSlide: () => g,
                    getCurrentSlide: () => m,
                    getSlideBackground: ft,
                    getSlideNotes: he.getSlideNotes.bind(he),
                    getSlides: lt,
                    getHorizontalSlides: dt,
                    getVerticalSlides: ct,
                    hasHorizontalSlides: ut,
                    hasVerticalSlides: gt,
                    hasNavigatedHorizontally: () => A.hasNavigatedHorizontally,
                    hasNavigatedVertically: () => A.hasNavigatedVertically,
                    addKeyBinding: ie.addKeyBinding.bind(ie),
                    removeKeyBinding: ie.removeKeyBinding.bind(ie),
                    triggerKey: ie.triggerKey.bind(ie),
                    registerKeyboardShortcut: ie.registerKeyboardShortcut.bind(ie),
                    getComputedSlideSize: qe,
                    getScale: () => S,
                    getConfig: () => y,
                    getQueryHash: v,
                    getRevealElement: () => e,
                    getSlidesElement: () => P.slides,
                    getViewportElement: () => P.viewport,
                    getBackgroundsElement: () => G.element,
                    registerPlugin: re.registerPlugin.bind(re),
                    hasPlugin: re.hasPlugin.bind(re),
                    getPlugin: re.getPlugin.bind(re),
                    getPlugins: re.getRegisteredPlugins.bind(re)
                };
                return s(i, { ...Ht,
                    announceStatus: be,
                    getStatusText: ye,
                    print: le,
                    focus: de,
                    progress: se,
                    controls: ne,
                    location: ae,
                    overview: te,
                    fragments: ee,
                    slideContent: J,
                    slideNumber: Q,
                    onUserInput: Nt,
                    closeOverlay: ze,
                    updateSlidesVisibility: at,
                    layoutSlideContents: Be,
                    transformSlides: Ce,
                    cueAutoSlide: wt,
                    cancelAutoSlide: Rt
                }), Ht
            }
            let X = j,
                Y = [];
            X.initialize = e => (Object.assign(X, new j(document.querySelector(".reveal"), e)), Y.map((e => e(X))), X.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((e => {
                X[e] = (...t) => {
                    Y.push((i => i[e].call(null, ...t)))
                }
            })), X.isReady = () => !1, X.VERSION = "4.1.3", t.default = X
        }
    }
]);
//# sourceMappingURL=838.2dad5d277b933b9baadf.js.map