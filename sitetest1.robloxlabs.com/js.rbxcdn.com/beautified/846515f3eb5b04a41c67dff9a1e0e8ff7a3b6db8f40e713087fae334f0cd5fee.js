! function() {
    "use strict";
    var r = {
            n: function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return r.d(n, {
                    a: n
                }), n
            },
            d: function(t, n) {
                for (var e in n) r.o(n, e) && !r.o(t, e) && Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n[e]
                })
            },
            o: function(t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }
        },
        u = CoreUtilities,
        l = React,
        s = r.n(l),
        t = ReactDOM,
        f = ReactStyleGuide,
        n = Roblox,
        n = "".concat(n.EnvironmentUrls.apiGatewayUrl, "/maintenance-status/v1/maintenance"),
        e = "".concat(n, "/status"),
        o = "".concat(n, "/bypass"),
        m = function() {
            return 36e5
        },
        d = function(c, i, u) {
            var l;
            l = setInterval(function() {
                var t, n, e, r, o, a = new Date(c) - new Date;
                u(0 < a), 0 < a ? (t = a, n = 6e4, e = 36e5, r = Math.floor(t / 864e5), o = Math.floor(t % 864e5 / e), a = Math.floor(t % e / n), e = "", r && (e = "".concat(r, 1 === r ? " day " : " days ")), 1 === o || 0 === o ? e += "0".concat(o, " hr ") : (o < 10 && (o = "0".concat(o)), e += "".concat(o, " hrs ")), 1 === a || 0 === a ? e += "0".concat(a, " min ") : (a < 10 && (a = "0".concat(a)), e += "".concat(a, " mins ")), t <= n && (n = Math.floor(t % n / 1e3), e += "".concat(n, " secs ")), i(e)) : clearInterval(l)
            }, 1e3)
        },
        v = function() {
            return "/home"
        },
        y = function(t) {
            setInterval(function() {
                var t = v();
                window.location.href = t
            }, t)
        },
        p = function() {
            var t = {
                url: e,
                withCredentials: !0
            };
            return u.httpService.get(t)
        },
        b = function(t, n) {
            t = {
                button: t,
                constraint: n
            }, n = {
                url: o,
                withCredentials: !0
            };
            return u.httpService.post(n, t)
        };

    function h(t, n) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var e = [],
                r = !0,
                o = !1,
                a = void 0;
            try {
                for (var c, i = t[Symbol.iterator](); !(r = (c = i.next()).done) && (e.push(c.value), !n || e.length !== n); r = !0);
            } catch (t) {
                o = !0, a = t
            } finally {
                try {
                    r || null == i.return || i.return()
                } finally {
                    if (o) throw a
                }
            }
            return e
        }(t, n) || function(t, n) {
            if (!t) return;
            if ("string" == typeof t) return a(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(t, n)
        }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r
    }

    function c() {
        var t = h((0, l.useState)(""), 2),
            n = t[0],
            e = t[1],
            r = h((0, l.useState)(""), 2),
            o = r[0],
            a = r[1],
            t = h((0, l.useState)(""), 2),
            r = t[0],
            c = t[1];
        (0, l.useEffect)(function() {
            p().then(function(t) {
                var n;
                t.data.canAccessSite ? (n = v(), window.location.href = n) : d(t.data.countDownTime, a, c)
            }), y(m())
        }, []);

        function i(t) {
            b(t, n).then(function() {
                var t = v();
                window.location.href = t
            })
        }
        return s().createElement("div", {
            className: "cookie-constraint-body"
        }, s().createElement("div", {
            className: "header"
        }, s().createElement("div", {
            className: "system-maintenance-notification-img",
            alt: "We're making things more awesome. Be back soon."
        })), s().createElement("div", {
            id: "cookie-constraint-container",
            className: "content"
        }, s().createElement("div", {
            className: "cookie-constraint-form"
        }, s().createElement("input", {
            className: "cookie-constraint-input",
            type: "password",
            id: "cookie-constraint-input-field",
            autoComplete: "off",
            onChange: function(t) {
                return e(t.target.value)
            }
        }), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-1",
            onClick: function() {
                return i("R")
            }
        }, "R"), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-2",
            onClick: function() {
                return i("O")
            }
        }, "O"), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-3",
            onClick: function() {
                return i("B")
            }
        }, "B"), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-4",
            onClick: function() {
                return i("L")
            }
        }, "L"), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-5",
            onClick: function() {
                return i("O")
            }
        }, "O"), s().createElement(f.Button, {
            className: "cookie-constraint-btn",
            id: "cookie-constraint-btn-6",
            onClick: function() {
                return i("X")
            }
        }, "X")), !0 === r && s().createElement("div", {
            id: "countDown",
            className: "count-down"
        }, s().createElement("h1", null, "Down time: "), s().createElement("h1", {
            id: "timer",
            className: "timer"
        }, o)), s().createElement("a", {
            className: "privacy-policy-link",
            href: u.urlService.formatUrl("/info/privacy"),
            rel: "noreferrer",
            target: "_blank"
        }, "Privacy Policy")))
    }
    c.propTypes = {};
    var i = c;

    function k() {
        return s().createElement(i, null)
    }
    k.propTypes = {};
    var w = k;
    (0, u.ready)(function() {
        (0, t.render)(s().createElement(w, null), document.getElementById("cookie-constraint-container"))
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/56974d7829d32df13666-CookieConstraint.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CookieConstraint");