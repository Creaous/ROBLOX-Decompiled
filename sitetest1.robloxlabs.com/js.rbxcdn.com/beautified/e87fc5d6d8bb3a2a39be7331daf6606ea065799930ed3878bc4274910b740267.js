! function() {
    "use strict";
    var r = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        e = jQuery,
        i = r.n(e),
        n = ["POST", "PUT", "DELETE", "PATCH"],
        o = [".roblox.com", ".robloxlabs.com", ".roblox.qq.com"],
        t = "",
        a = null,
        u = {
            setToken: function(e) {
                t = e, a = new Date
            },
            getToken: function() {
                var e;
                return "" === t && 0 < (e = i()("meta[name='csrf-token']")).length && (t = e.data("token"), (e = e.data("timestamp")) && (a = new Date(Date.parse(e)))), t
            },
            requiresXsrf: function(e, t) {
                return 0 <= n.indexOf(null == e ? void 0 : e.toUpperCase()) && function(e) {
                    e = function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.host
                    }(e);
                    return e === location.host || function(e) {
                        for (var t = 0; t < o.length; t++)
                            if (e.endsWith(o[t])) return !0;
                        return !1
                    }(e)
                }(t) && !(null === (t = null == (t = t = t) ? void 0 : t.split("?")[0]) || void 0 === t ? void 0 : t.toLowerCase().endsWith(".aspx"))
            },
            getTokenTimestamp: function() {
                return a
            }
        },
        s = "X-CSRF-TOKEN",
        l = 403;

    function c(e, t, n) {
        var r = u.getToken();
        "" !== r && u.requiresXsrf(n.type, n.url) && t.setRequestHeader(s, r)
    }

    function f(e, n, r) {
        if ("jsonp" !== e.dataType && "script" !== e.dataType && u.requiresXsrf(e.type, e.url)) {
            n.error && (n._error = n.error), e.error = function() {};
            var o = i().Deferred();
            return r.done(o.resolve), r.fail(function() {
                var e, t = Array.prototype.slice.call(arguments);
                r.status == l && null !== r.getResponseHeader(s) ? null != (e = r.getResponseHeader(s)) ? (u.setToken(e), i().ajax(n).then(o.resolve, o.reject)) : o.rejectWith(r, t) : (n._error && o.fail(n._error), o.rejectWith(r, t))
            }), o.promise(r)
        }
    }
    var d = {
            initialize: function() {
                i()(document).ajaxSend(c), i().ajaxPrefilter(f)
            }
        },
        p = "CsrfToken",
        m = 300;

    function T(e) {
        i()("<input />").attr("type", "hidden").attr("name", p).attr("value", u.getToken()).appendTo(e)
    }

    function b(e) {
        var r, t = e ? e.target : this;
        if ("true" !== t.dataset.ajax) {
            if (e = t, u.requiresXsrf(e.getAttribute("method"), e.getAttribute("action")) && u.getToken() && 0 === i()(e).children("input[name='" + p + "']").length) return null === (e = u.getTokenTimestamp()) || (e = new Date - e, m < e / 1e3) ? (r = function(e) {
                e && u.setToken(e), T(t), t._submit()
            }, i().ajax({
                method: "GET",
                url: "/XsrfToken",
                success: function(e, t, n) {
                    n = n.getResponseHeader("X-CSRF-TOKEN");
                    r(n)
                },
                error: function() {
                    r(null)
                }
            }), !1) : (T(t), void t._submit());
            t._submit()
        }
    }
    e = {
        initialize: function() {
            window.addEventListener("submit", b, !0), HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit, HTMLFormElement.prototype.submit = b
        }
    }, window.Roblox = window.Roblox || {}, window.Roblox.XsrfToken = u, window.Roblox.XsrfTokenFormInjector = e, d.initialize()
}();
//# sourceMappingURL=https://js.rbxcdn.com/2f6790915e0ec9087c5d-xsrfProtection.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("XsrfProtection");