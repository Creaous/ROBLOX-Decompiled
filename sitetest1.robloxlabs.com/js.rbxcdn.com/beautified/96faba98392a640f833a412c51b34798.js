; // bundle: intl-polyfill___a46ecf0230921f4bb4c96b63eeff6ea5_m
; // files: intl/intl-polyfill.min.js, intl/polyfillLocales/en-US.js, intl/polyfillLocales/es-ES.js, intl/polyfillLocales/fr-FR.js, intl/polyfillLocales/de-DE.js, intl/polyfillLocales/pt-BR.js, intl/polyfillLocales/ko-KR.js, intl/polyfillLocales/zh-Hans-CN.js, intl/polyfillLocales/zh-Hant-TW.js

; // intl/intl-polyfill.min.js
! function(e, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : e.IntlPolyfill = r()
}(this, function() {
    "use strict";

    function e(e) {
        if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
        var r = Math.round(Math.log(e) * Math.LOG10E);
        return r - (Number("1e" + r) > e)
    }

    function r(e) {
        for (var t in e)(e instanceof r || Me.call(e, t)) && Ie(this, t, {
            value: e[t],
            enumerable: !0,
            writable: !0,
            configurable: !0
        })
    }

    function t() {
        Ie(this, "length", {
            writable: !0,
            value: 0
        }), arguments.length && Ge.apply(this, qe.call(arguments))
    }

    function n() {
        if ($e.disableRegExpRestore) return function() {};
        for (var e = {
                lastMatch: RegExp.lastMatch || "",
                leftContext: RegExp.leftContext,
                multiline: RegExp.multiline,
                input: RegExp.input
            }, r = !1, n = 1; n <= 9; n++) r = (e["$" + n] = RegExp["$" + n]) || r;
        return function() {
            var n = /[.?*+^$[\]\\(){}|-]/g,
                a = e.lastMatch.replace(n, "\\$&"),
                i = new t;
            if (r)
                for (var o = 1; o <= 9; o++) {
                    var s = e["$" + o];
                    s ? (s = s.replace(n, "\\$&"), a = a.replace(s, "(" + s + ")")) : a = "()" + a, Ge.call(i, a.slice(0, a.indexOf("(") + 1)), a = a.slice(a.indexOf("(") + 1)
                }
            var l = Ze.call(i, "") + a;
            l = l.replace(/(\\\(|\\\)|[^()])+/g, function(e) {
                return "[\\s\\S]{" + e.replace("\\", "").length + "}"
            });
            var c = new RegExp(l, e.multiline ? "gm" : "g");
            c.lastIndex = e.leftContext.length, c.exec(e.input)
        }
    }

    function a(e) {
        if (null === e) throw new TypeError("Cannot convert null or undefined to object");
        return "object" === ("undefined" == typeof e ? "undefined" : Ne.typeof(e)) ? e : Object(e)
    }

    function i(e) {
        return "number" == typeof e ? e : Number(e)
    }

    function o(e) {
        var r = i(e);
        return isNaN(r) ? 0 : 0 === r || r === -0 || r === +(1 / 0) || r === -(1 / 0) ? r : r < 0 ? Math.floor(Math.abs(r)) * -1 : Math.floor(Math.abs(r))
    }

    function s(e) {
        var r = o(e);
        return r <= 0 ? 0 : r === 1 / 0 ? Math.pow(2, 53) - 1 : Math.min(r, Math.pow(2, 53) - 1)
    }

    function l(e) {
        return Me.call(e, "__getInternalProperties") ? e.__getInternalProperties(Ke) : Re(null)
    }

    function c(e) {
        cr = e
    }

    function u(e) {
        for (var r = e.length; r--;) {
            var t = e.charAt(r);
            t >= "a" && t <= "z" && (e = e.slice(0, r) + t.toUpperCase() + e.slice(r + 1))
        }
        return e
    }

    function g(e) {
        return !!ir.test(e) && (!or.test(e) && !sr.test(e))
    }

    function f(e) {
        var r = void 0,
            t = void 0;
        e = e.toLowerCase(), t = e.split("-");
        for (var n = 1, a = t.length; n < a; n++)
            if (2 === t[n].length) t[n] = t[n].toUpperCase();
            else if (4 === t[n].length) t[n] = t[n].charAt(0).toUpperCase() + t[n].slice(1);
        else if (1 === t[n].length && "x" !== t[n]) break;
        e = Ze.call(t, "-"), (r = e.match(lr)) && r.length > 1 && (r.sort(), e = e.replace(RegExp("(?:" + lr.source + ")+", "i"), Ze.call(r, ""))), Me.call(ur.tags, e) && (e = ur.tags[e]), t = e.split("-");
        for (var i = 1, o = t.length; i < o; i++) Me.call(ur.subtags, t[i]) ? t[i] = ur.subtags[t[i]] : Me.call(ur.extLang, t[i]) && (t[i] = ur.extLang[t[i]][0], 1 === i && ur.extLang[t[1]][1] === t[0] && (t = qe.call(t, i++), o -= 1));
        return Ze.call(t, "-")
    }

    function m() {
        return cr
    }

    function v(e) {
        var r = String(e),
            t = u(r);
        return gr.test(t) !== !1
    }

    function d(e) {
        if (void 0 === e) return new t;
        var r = new t;
        e = "string" == typeof e ? [e] : e;
        for (var n = a(e), i = s(n.length), o = 0; o < i;) {
            var l = String(o),
                c = l in n;
            if (c) {
                var u = n[l];
                if (null === u || "string" != typeof u && "object" !== ("undefined" == typeof u ? "undefined" : Ne.typeof(u))) throw new TypeError("String or Object type expected");
                var m = String(u);
                if (!g(m)) throw new RangeError("'" + m + "' is not a structurally valid language tag");
                m = f(m), Ae.call(r, m) === -1 && Ge.call(r, m)
            }
            o++
        }
        return r
    }

    function h(e, r) {
        for (var t = r; t;) {
            if (Ae.call(e, t) > -1) return t;
            var n = t.lastIndexOf("-");
            if (n < 0) return;
            n >= 2 && "-" === t.charAt(n - 2) && (n -= 2), t = t.substring(0, n)
        }
    }

    function p(e, t) {
        for (var n = 0, a = t.length, i = void 0, o = void 0, s = void 0; n < a && !i;) o = t[n], s = String(o).replace(fr, ""), i = h(e, s), n++;
        var l = new r;
        if (void 0 !== i) {
            if (l["[[locale]]"] = i, String(o) !== String(s)) {
                var c = o.match(fr)[0],
                    u = o.indexOf("-u-");
                l["[[extension]]"] = c, l["[[extensionIndex]]"] = u
            }
        } else l["[[locale]]"] = m();
        return l
    }

    function y(e, r) {
        return p(e, r)
    }

    function b(e, t, n, a, i) {
        if (0 === e.length) throw new ReferenceError("No locale data has been provided for this object yet.");
        var o = n["[[localeMatcher]]"],
            s = void 0;
        s = "lookup" === o ? p(e, t) : y(e, t);
        var l = s["[[locale]]"],
            c = void 0,
            u = void 0;
        if (Me.call(s, "[[extension]]")) {
            var g = s["[[extension]]"],
                m = String.prototype.split;
            c = m.call(g, "-"), u = c.length
        }
        var v = new r;
        v["[[dataLocale]]"] = l;
        for (var d = "-u", h = 0, b = a.length; h < b;) {
            var w = a[h],
                x = i[l],
                j = x[w],
                D = j[0],
                z = "",
                k = Ae;
            if (void 0 !== c) {
                var O = k.call(c, w);
                if (O !== -1)
                    if (O + 1 < u && c[O + 1].length > 2) {
                        var F = c[O + 1],
                            S = k.call(j, F);
                        S !== -1 && (D = F, z = "-" + w + "-" + D)
                    } else {
                        var E = k(j, "true");
                        E !== -1 && (D = "true")
                    }
            }
            if (Me.call(n, "[[" + w + "]]")) {
                var L = n["[[" + w + "]]"];
                k.call(j, L) !== -1 && L !== D && (D = L, z = "")
            }
            v["[[" + w + "]]"] = D, d += z, h++
        }
        if (d.length > 2) {
            var P = l.indexOf("-x-");
            if (P === -1) l += d;
            else {
                var N = l.substring(0, P),
                    T = l.substring(P);
                l = N + d + T
            }
            l = f(l)
        }
        return v["[[locale]]"] = l, v
    }

    function w(e, r) {
        for (var n = r.length, a = new t, i = 0; i < n;) {
            var o = r[i],
                s = String(o).replace(fr, ""),
                l = h(e, s);
            void 0 !== l && Ge.call(a, o), i++
        }
        var c = qe.call(a);
        return c
    }

    function x(e, r) {
        return w(e, r)
    }

    function j(e, t, n) {
        var i = void 0,
            o = void 0;
        if (void 0 !== n && (n = new r(a(n)), i = n.localeMatcher, void 0 !== i && (i = String(i), "lookup" !== i && "best fit" !== i))) throw new RangeError('matcher should be "lookup" or "best fit"');
        o = void 0 === i || "best fit" === i ? x(e, t) : w(e, t);
        for (var s in o) Me.call(o, s) && Ie(o, s, {
            writable: !1,
            configurable: !1,
            value: o[s]
        });
        return Ie(o, "length", {
            writable: !1
        }), o
    }

    function D(e, r, t, n, a) {
        var i = e[r];
        if (void 0 !== i) {
            if (i = "boolean" === t ? Boolean(i) : "string" === t ? String(i) : i, void 0 !== n && Ae.call(n, i) === -1) throw new RangeError("'" + i + "' is not an allowed value for `" + r + "`");
            return i
        }
        return a
    }

    function z(e, r, t, n, a) {
        var i = e[r];
        if (void 0 !== i) {
            if (i = Number(i), isNaN(i) || i < t || i > n) throw new RangeError("Value is not a number or outside accepted range");
            return Math.floor(i)
        }
        return a
    }

    function k(e) {
        for (var r = d(e), t = [], n = r.length, a = 0; a < n;) t[a] = r[a], a++;
        return t
    }

    function O() {
        var e = arguments[0],
            r = arguments[1];
        return this && this !== mr ? F(a(this), e, r) : new mr.NumberFormat(e, r)
    }

    function F(e, i, o) {
        var s = l(e),
            c = n();
        if (s["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object");
        Ie(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === Ke) return s
            }
        }), s["[[initializedIntlObject]]"] = !0;
        var u = d(i);
        o = void 0 === o ? {} : a(o);
        var g = new r,
            f = D(o, "localeMatcher", "string", new t("lookup", "best fit"), "best fit");
        g["[[localeMatcher]]"] = f;
        var m = $e.NumberFormat["[[localeData]]"],
            h = b($e.NumberFormat["[[availableLocales]]"], u, g, $e.NumberFormat["[[relevantExtensionKeys]]"], m);
        s["[[locale]]"] = h["[[locale]]"], s["[[numberingSystem]]"] = h["[[nu]]"], s["[[dataLocale]]"] = h["[[dataLocale]]"];
        var p = h["[[dataLocale]]"],
            y = D(o, "style", "string", new t("decimal", "percent", "currency"), "decimal");
        s["[[style]]"] = y;
        var w = D(o, "currency", "string");
        if (void 0 !== w && !v(w)) throw new RangeError("'" + w + "' is not a valid currency code");
        if ("currency" === y && void 0 === w) throw new TypeError("Currency code is required when style is currency");
        var x = void 0;
        "currency" === y && (w = w.toUpperCase(), s["[[currency]]"] = w, x = S(w));
        var j = D(o, "currencyDisplay", "string", new t("code", "symbol", "name"), "symbol");
        "currency" === y && (s["[[currencyDisplay]]"] = j);
        var k = z(o, "minimumIntegerDigits", 1, 21, 1);
        s["[[minimumIntegerDigits]]"] = k;
        var O = "currency" === y ? x : 0,
            F = z(o, "minimumFractionDigits", 0, 20, O);
        s["[[minimumFractionDigits]]"] = F;
        var L = "currency" === y ? Math.max(F, x) : "percent" === y ? Math.max(F, 0) : Math.max(F, 3),
            P = z(o, "maximumFractionDigits", F, 20, L);
        s["[[maximumFractionDigits]]"] = P;
        var N = o.minimumSignificantDigits,
            T = o.maximumSignificantDigits;
        void 0 === N && void 0 === T || (N = z(o, "minimumSignificantDigits", 1, 21, 1), T = z(o, "maximumSignificantDigits", N, 21, 21), s["[[minimumSignificantDigits]]"] = N, s["[[maximumSignificantDigits]]"] = T);
        var _ = D(o, "useGrouping", "boolean", void 0, !0);
        s["[[useGrouping]]"] = _;
        var M = m[p],
            I = M.patterns,
            A = I[y];
        return s["[[positivePattern]]"] = A.positivePattern, s["[[negativePattern]]"] = A.negativePattern, s["[[boundFormat]]"] = void 0, s["[[initializedNumberFormat]]"] = !0, _e && (e.format = E.call(e)), c(), e
    }

    function S(e) {
        return void 0 !== vr[e] ? vr[e] : 2
    }

    function E() {
        var e = null !== this && "object" === Ne.typeof(this) && l(this);
        if (!e || !e["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var r = function(e) {
                    return T(this, Number(e))
                },
                t = Ue.call(r, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function L() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
            r = null !== this && "object" === Ne.typeof(this) && l(this);
        if (!r || !r["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");
        var t = Number(e);
        return P(this, t)
    }

    function P(e, r) {
        for (var t = N(e, r), n = [], a = 0, i = 0; t.length > i; i++) {
            var o = t[i],
                s = {};
            s.type = o["[[type]]"], s.value = o["[[value]]"], n[a] = s, a += 1
        }
        return n
    }

    function N(e, r) {
        var n = l(e),
            a = n["[[dataLocale]]"],
            i = n["[[numberingSystem]]"],
            o = $e.NumberFormat["[[localeData]]"][a],
            s = o.symbols[i] || o.symbols.latn,
            c = void 0;
        !isNaN(r) && r < 0 ? (r = -r, c = n["[[negativePattern]]"]) : c = n["[[positivePattern]]"];
        for (var u = new t, g = c.indexOf("{", 0), f = 0, m = 0, v = c.length; g > -1 && g < v;) {
            if (f = c.indexOf("}", g), f === -1) throw new Error;
            if (g > m) {
                var d = c.substring(m, g);
                Ge.call(u, {
                    "[[type]]": "literal",
                    "[[value]]": d
                })
            }
            var h = c.substring(g + 1, f);
            if ("number" === h)
                if (isNaN(r)) {
                    var p = s.nan;
                    Ge.call(u, {
                        "[[type]]": "nan",
                        "[[value]]": p
                    })
                } else if (isFinite(r)) {
                "percent" === n["[[style]]"] && isFinite(r) && (r *= 100);
                var y = void 0;
                y = Me.call(n, "[[minimumSignificantDigits]]") && Me.call(n, "[[maximumSignificantDigits]]") ? _(r, n["[[minimumSignificantDigits]]"], n["[[maximumSignificantDigits]]"]) : M(r, n["[[minimumIntegerDigits]]"], n["[[minimumFractionDigits]]"], n["[[maximumFractionDigits]]"]), dr[i] ? ! function() {
                    var e = dr[i];
                    y = String(y).replace(/\d/g, function(r) {
                        return e[r]
                    })
                }() : y = String(y);
                var b = void 0,
                    w = void 0,
                    x = y.indexOf(".", 0);
                if (x > 0 ? (b = y.substring(0, x), w = y.substring(x + 1, x.length)) : (b = y, w = void 0), n["[[useGrouping]]"] === !0) {
                    var j = s.group,
                        D = [],
                        z = o.patterns.primaryGroupSize || 3,
                        k = o.patterns.secondaryGroupSize || z;
                    if (b.length > z) {
                        var O = b.length - z,
                            F = O % k,
                            S = b.slice(0, F);
                        for (S.length && Ge.call(D, S); F < O;) Ge.call(D, b.slice(F, F + k)), F += k;
                        Ge.call(D, b.slice(O))
                    } else Ge.call(D, b);
                    if (0 === D.length) throw new Error;
                    for (; D.length;) {
                        var E = Be.call(D);
                        Ge.call(u, {
                            "[[type]]": "integer",
                            "[[value]]": E
                        }), D.length && Ge.call(u, {
                            "[[type]]": "group",
                            "[[value]]": j
                        })
                    }
                } else Ge.call(u, {
                    "[[type]]": "integer",
                    "[[value]]": b
                });
                if (void 0 !== w) {
                    var L = s.decimal;
                    Ge.call(u, {
                        "[[type]]": "decimal",
                        "[[value]]": L
                    }), Ge.call(u, {
                        "[[type]]": "fraction",
                        "[[value]]": w
                    })
                }
            } else {
                var P = s.infinity;
                Ge.call(u, {
                    "[[type]]": "infinity",
                    "[[value]]": P
                })
            } else if ("plusSign" === h) {
                var N = s.plusSign;
                Ge.call(u, {
                    "[[type]]": "plusSign",
                    "[[value]]": N
                })
            } else if ("minusSign" === h) {
                var T = s.minusSign;
                Ge.call(u, {
                    "[[type]]": "minusSign",
                    "[[value]]": T
                })
            } else if ("percentSign" === h && "percent" === n["[[style]]"]) {
                var I = s.percentSign;
                Ge.call(u, {
                    "[[type]]": "literal",
                    "[[value]]": I
                })
            } else if ("currency" === h && "currency" === n["[[style]]"]) {
                var A = n["[[currency]]"],
                    R = void 0;
                "code" === n["[[currencyDisplay]]"] ? R = A : "symbol" === n["[[currencyDisplay]]"] ? R = o.currencies[A] || A : "name" === n["[[currencyDisplay]]"] && (R = A), Ge.call(u, {
                    "[[type]]": "currency",
                    "[[value]]": R
                })
            } else {
                var q = c.substring(g, f);
                Ge.call(u, {
                    "[[type]]": "literal",
                    "[[value]]": q
                })
            }
            m = f + 1, g = c.indexOf("{", m)
        }
        if (m < v) {
            var C = c.substring(m, v);
            Ge.call(u, {
                "[[type]]": "literal",
                "[[value]]": C
            })
        }
        return u
    }

    function T(e, r) {
        for (var t = N(e, r), n = "", a = 0; t.length > a; a++) {
            var i = t[a];
            n += i["[[value]]"]
        }
        return n
    }

    function _(r, t, n) {
        var a = n,
            i = void 0,
            o = void 0;
        if (0 === r) i = Ze.call(Array(a + 1), "0"), o = 0;
        else {
            o = e(Math.abs(r));
            var s = Math.round(Math.exp(Math.abs(o - a + 1) * Math.LN10));
            i = String(Math.round(o - a + 1 < 0 ? r * s : r / s))
        }
        if (o >= a) return i + Ze.call(Array(o - a + 1 + 1), "0");
        if (o === a - 1) return i;
        if (o >= 0 ? i = i.slice(0, o + 1) + "." + i.slice(o + 1) : o < 0 && (i = "0." + Ze.call(Array(-(o + 1) + 1), "0") + i), i.indexOf(".") >= 0 && n > t) {
            for (var l = n - t; l > 0 && "0" === i.charAt(i.length - 1);) i = i.slice(0, -1), l--;
            "." === i.charAt(i.length - 1) && (i = i.slice(0, -1))
        }
        return i
    }

    function M(e, r, t, n) {
        var a = n,
            i = Math.pow(10, a) * e,
            o = 0 === i ? "0" : i.toFixed(0),
            s = void 0,
            l = (s = o.indexOf("e")) > -1 ? o.slice(s + 1) : 0;
        l && (o = o.slice(0, s).replace(".", ""), o += Ze.call(Array(l - (o.length - 1) + 1), "0"));
        var c = void 0;
        if (0 !== a) {
            var u = o.length;
            if (u <= a) {
                var g = Ze.call(Array(a + 1 - u + 1), "0");
                o = g + o, u = a + 1
            }
            var f = o.substring(0, u - a),
                m = o.substring(u - a, o.length);
            o = f + "." + m, c = f.length
        } else c = o.length;
        for (var v = n - t; v > 0 && "0" === o.slice(-1);) o = o.slice(0, -1), v--;
        if ("." === o.slice(-1) && (o = o.slice(0, -1)), c < r) {
            var d = Ze.call(Array(r - c + 1), "0");
            o = d + o
        }
        return o
    }

    function I(e) {
        for (var r = 0; r < wr.length; r += 1)
            if (e.hasOwnProperty(wr[r])) return !1;
        return !0
    }

    function A(e) {
        for (var r = 0; r < br.length; r += 1)
            if (e.hasOwnProperty(br[r])) return !1;
        return !0
    }

    function R(e, r) {
        for (var t = {
                _: {}
            }, n = 0; n < br.length; n += 1) e[br[n]] && (t[br[n]] = e[br[n]]), e._[br[n]] && (t._[br[n]] = e._[br[n]]);
        for (var a = 0; a < wr.length; a += 1) r[wr[a]] && (t[wr[a]] = r[wr[a]]), r._[wr[a]] && (t._[wr[a]] = r._[wr[a]]);
        return t
    }

    function q(e) {
        return e.pattern12 = e.extendedPattern.replace(/'([^']*)'/g, function(e, r) {
            return r ? r : "'"
        }), e.pattern = e.pattern12.replace("{ampm}", "").replace(pr, ""), e
    }

    function C(e, r) {
        switch (e.charAt(0)) {
            case "G":
                return r.era = ["short", "short", "short", "long", "narrow"][e.length - 1], "{era}";
            case "y":
            case "Y":
            case "u":
            case "U":
            case "r":
                return r.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
            case "Q":
            case "q":
                return r.quarter = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], "{quarter}";
            case "M":
            case "L":
                return r.month = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], "{month}";
            case "w":
                return r.week = 2 === e.length ? "2-digit" : "numeric", "{weekday}";
            case "W":
                return r.week = "numeric", "{weekday}";
            case "d":
                return r.day = 2 === e.length ? "2-digit" : "numeric", "{day}";
            case "D":
            case "F":
            case "g":
                return r.day = "numeric", "{day}";
            case "E":
                return r.weekday = ["short", "short", "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "e":
                return r.weekday = ["numeric", "2-digit", "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "c":
                return r.weekday = ["numeric", void 0, "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "a":
            case "b":
            case "B":
                return r.hour12 = !0, "{ampm}";
            case "h":
            case "H":
                return r.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
            case "k":
            case "K":
                return r.hour12 = !0, r.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
            case "m":
                return r.minute = 2 === e.length ? "2-digit" : "numeric", "{minute}";
            case "s":
                return r.second = 2 === e.length ? "2-digit" : "numeric", "{second}";
            case "S":
            case "A":
                return r.second = "numeric", "{second}";
            case "z":
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                return r.timeZoneName = e.length < 4 ? "short" : "long", "{timeZoneName}"
        }
    }

    function G(e, r) {
        if (!yr.test(r)) {
            var t = {
                originalPattern: r,
                _: {}
            };
            return t.extendedPattern = r.replace(hr, function(e) {
                return C(e, t._)
            }), e.replace(hr, function(e) {
                return C(e, t)
            }), q(t)
        }
    }

    function Z(e) {
        var r = e.availableFormats,
            t = e.timeFormats,
            n = e.dateFormats,
            a = [],
            i = void 0,
            o = void 0,
            s = void 0,
            l = void 0,
            c = void 0,
            u = [],
            g = [];
        for (i in r) r.hasOwnProperty(i) && (o = r[i], s = G(i, o), s && (a.push(s), I(s) ? g.push(s) : A(s) && u.push(s)));
        for (i in t) t.hasOwnProperty(i) && (o = t[i], s = G(i, o), s && (a.push(s), u.push(s)));
        for (i in n) n.hasOwnProperty(i) && (o = n[i], s = G(i, o), s && (a.push(s), g.push(s)));
        for (l = 0; l < u.length; l += 1)
            for (c = 0; c < g.length; c += 1) o = "long" === g[c].month ? g[c].weekday ? e.full : e.long : "short" === g[c].month ? e.medium : e.short, s = R(g[c], u[l]), s.originalPattern = o, s.extendedPattern = o.replace("{0}", u[l].extendedPattern).replace("{1}", g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, ""), a.push(q(s));
        return a
    }

    function B(e, r) {
        if (xr[e] && xr[e][r]) {
            var t;
            return t = {
                originalPattern: xr[e][r],
                _: ge({}, e, r),
                extendedPattern: "{" + e + "}"
            }, ge(t, e, r), ge(t, "pattern12", "{" + e + "}"), ge(t, "pattern", "{" + e + "}"), t
        }
    }

    function U(e, r, t, n, a) {
        var i = e[r] && e[r][t] ? e[r][t] : e.gregory[t],
            o = {
                narrow: ["short", "long"],
                short: ["long", "narrow"],
                long: ["short", "narrow"]
            },
            s = Me.call(i, n) ? i[n] : Me.call(i, o[n][0]) ? i[o[n][0]] : i[o[n][1]];
        return null !== a ? s[a] : s
    }

    function $() {
        var e = arguments[0],
            r = arguments[1];
        return this && this !== mr ? K(a(this), e, r) : new mr.DateTimeFormat(e, r)
    }

    function K(e, a, i) {
        var o = l(e),
            s = n();
        if (o["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object");
        Ie(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === Ke) return o
            }
        }), o["[[initializedIntlObject]]"] = !0;
        var c = d(a);
        i = H(i, "any", "date");
        var g = new r,
            f = D(i, "localeMatcher", "string", new t("lookup", "best fit"), "best fit");
        g["[[localeMatcher]]"] = f;
        var m = $e.DateTimeFormat,
            v = m["[[localeData]]"],
            h = b(m["[[availableLocales]]"], c, g, m["[[relevantExtensionKeys]]"], v);
        o["[[locale]]"] = h["[[locale]]"], o["[[calendar]]"] = h["[[ca]]"], o["[[numberingSystem]]"] = h["[[nu]]"], o["[[dataLocale]]"] = h["[[dataLocale]]"];
        var p = h["[[dataLocale]]"],
            y = i.timeZone;
        if (void 0 !== y && (y = u(y), "UTC" !== y)) throw new RangeError("timeZone is not supported.");
        o["[[timeZone]]"] = y, g = new r;
        for (var w in Dr)
            if (Me.call(Dr, w)) {
                var x = D(i, w, "string", Dr[w]);
                g["[[" + w + "]]"] = x
            }
        var j = void 0,
            z = v[p],
            k = Y(z.formats);
        if (f = D(i, "formatMatcher", "string", new t("basic", "best fit"), "best fit"), z.formats = k, "basic" === f) j = W(g, k);
        else {
            var O = D(i, "hour12", "boolean");
            g.hour12 = void 0 === O ? z.hour12 : O, j = X(g, k)
        }
        for (var F in Dr)
            if (Me.call(Dr, F) && Me.call(j, F)) {
                var S = j[F];
                S = j._ && Me.call(j._, F) ? j._[F] : S, o["[[" + F + "]]"] = S
            }
        var E = void 0,
            L = D(i, "hour12", "boolean");
        if (o["[[hour]]"])
            if (L = void 0 === L ? z.hour12 : L, o["[[hour12]]"] = L, L === !0) {
                var P = z.hourNo0;
                o["[[hourNo0]]"] = P, E = j.pattern12
            } else E = j.pattern;
        else E = j.pattern;
        return o["[[pattern]]"] = E, o["[[boundFormat]]"] = void 0, o["[[initializedDateTimeFormat]]"] = !0, _e && (e.format = V.call(e)), s(), e
    }

    function Y(e) {
        return "[object Array]" === Object.prototype.toString.call(e) ? e : Z(e)
    }

    function H(e, t, n) {
        if (void 0 === e) e = null;
        else {
            var i = a(e);
            e = new r;
            for (var o in i) e[o] = i[o]
        }
        var s = Re;
        e = s(e);
        var l = !0;
        return "date" !== t && "any" !== t || void 0 === e.weekday && void 0 === e.year && void 0 === e.month && void 0 === e.day || (l = !1), "time" !== t && "any" !== t || void 0 === e.hour && void 0 === e.minute && void 0 === e.second || (l = !1), !l || "date" !== n && "all" !== n || (e.year = e.month = e.day = "numeric"), !l || "time" !== n && "all" !== n || (e.hour = e.minute = e.second = "numeric"), e
    }

    function W(e, r) {
        for (var t = 120, n = 20, a = 8, i = 6, o = 6, s = 3, l = -(1 / 0), c = void 0, u = 0, g = r.length; u < g;) {
            var f = r[u],
                m = 0;
            for (var v in Dr)
                if (Me.call(Dr, v)) {
                    var d = e["[[" + v + "]]"],
                        h = Me.call(f, v) ? f[v] : void 0;
                    if (void 0 === d && void 0 !== h) m -= n;
                    else if (void 0 !== d && void 0 === h) m -= t;
                    else {
                        var p = ["2-digit", "numeric", "narrow", "short", "long"],
                            y = Ae.call(p, d),
                            b = Ae.call(p, h),
                            w = Math.max(Math.min(b - y, 2), -2);
                        2 === w ? m -= i : 1 === w ? m -= s : w === -1 ? m -= o : w === -2 && (m -= a)
                    }
                }
            m > l && (l = m, c = f), u++
        }
        return c
    }

    function X(e, r) {
        var t = [];
        for (var n in Dr) Me.call(Dr, n) && void 0 !== e["[[" + n + "]]"] && t.push(n);
        if (1 === t.length) {
            var a = B(t[0], e["[[" + t[0] + "]]"]);
            if (a) return a
        }
        for (var i = 120, o = 20, s = 8, l = 6, c = 6, u = 3, g = 2, f = 1, m = -(1 / 0), v = void 0, d = 0, h = r.length; d < h;) {
            var p = r[d],
                y = 0;
            for (var b in Dr)
                if (Me.call(Dr, b)) {
                    var w = e["[[" + b + "]]"],
                        x = Me.call(p, b) ? p[b] : void 0,
                        j = Me.call(p._, b) ? p._[b] : void 0;
                    if (w !== j && (y -= g), void 0 === w && void 0 !== x) y -= o;
                    else if (void 0 !== w && void 0 === x) y -= i;
                    else {
                        var D = ["2-digit", "numeric", "narrow", "short", "long"],
                            z = Ae.call(D, w),
                            k = Ae.call(D, x),
                            O = Math.max(Math.min(k - z, 2), -2);
                        k <= 1 && z >= 2 || k >= 2 && z <= 1 ? O > 0 ? y -= l : O < 0 && (y -= s) : O > 1 ? y -= u : O < -1 && (y -= c)
                    }
                }
            p._.hour12 !== e.hour12 && (y -= f), y > m && (m = y, v = p), d++
        }
        return v
    }

    function V() {
        var e = null !== this && "object" === Ne.typeof(this) && l(this);
        if (!e || !e["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var r = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
                        r = void 0 === e ? Date.now() : i(e);
                    return ee(this, r)
                },
                t = Ue.call(r, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function J() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
            r = null !== this && "object" === Ne.typeof(this) && l(this);
        if (!r || !r["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.");
        var t = void 0 === e ? Date.now() : i(e);
        return re(this, t)
    }

    function Q(e, r) {
        if (!isFinite(r)) throw new RangeError("Invalid valid date passed to format");
        var a = e.__getInternalProperties(Ke);
        n();
        for (var i = a["[[locale]]"], o = new mr.NumberFormat([i], {
                useGrouping: !1
            }), s = new mr.NumberFormat([i], {
                minimumIntegerDigits: 2,
                useGrouping: !1
            }), l = te(r, a["[[calendar]]"], a["[[timeZone]]"]), c = a["[[pattern]]"], u = new t, g = 0, f = c.indexOf("{"), m = 0, v = a["[[dataLocale]]"], d = $e.DateTimeFormat["[[localeData]]"][v].calendars, h = a["[[calendar]]"]; f !== -1;) {
            var p = void 0;
            if (m = c.indexOf("}", f), m === -1) throw new Error("Unclosed pattern");
            f > g && Ge.call(u, {
                type: "literal",
                value: c.substring(g, f)
            });
            var y = c.substring(f + 1, m);
            if (Dr.hasOwnProperty(y)) {
                var b = a["[[" + y + "]]"],
                    w = l["[[" + y + "]]"];
                if ("year" === y && w <= 0 ? w = 1 - w : "month" === y ? w++ : "hour" === y && a["[[hour12]]"] === !0 && (w %= 12, 0 === w && a["[[hourNo0]]"] === !0 && (w = 12)), "numeric" === b) p = T(o, w);
                else if ("2-digit" === b) p = T(s, w), p.length > 2 && (p = p.slice(-2));
                else if (b in jr) switch (y) {
                    case "month":
                        p = U(d, h, "months", b, l["[[" + y + "]]"]);
                        break;
                    case "weekday":
                        try {
                            p = U(d, h, "days", b, l["[[" + y + "]]"])
                        } catch (e) {
                            throw new Error("Could not find weekday data for locale " + i)
                        }
                        break;
                    case "timeZoneName":
                        p = "";
                        break;
                    case "era":
                        try {
                            p = U(d, h, "eras", b, l["[[" + y + "]]"])
                        } catch (e) {
                            throw new Error("Could not find era data for locale " + i)
                        }
                        break;
                    default:
                        p = l["[[" + y + "]]"]
                }
                Ge.call(u, {
                    type: y,
                    value: p
                })
            } else if ("ampm" === y) {
                var x = l["[[hour]]"];
                p = U(d, h, "dayPeriods", x > 11 ? "pm" : "am", null), Ge.call(u, {
                    type: "dayPeriod",
                    value: p
                })
            } else Ge.call(u, {
                type: "literal",
                value: c.substring(f, m + 1)
            });
            g = m + 1, f = c.indexOf("{", g)
        }
        return m < c.length - 1 && Ge.call(u, {
            type: "literal",
            value: c.substr(m + 1)
        }), u
    }

    function ee(e, r) {
        for (var t = Q(e, r), n = "", a = 0; t.length > a; a++) {
            var i = t[a];
            n += i.value
        }
        return n
    }

    function re(e, r) {
        for (var t = Q(e, r), n = [], a = 0; t.length > a; a++) {
            var i = t[a];
            n.push({
                type: i.type,
                value: i.value
            })
        }
        return n
    }

    function te(e, t, n) {
        var a = new Date(e),
            i = "get" + (n || "");
        return new r({
            "[[weekday]]": a[i + "Day"](),
            "[[era]]": +(a[i + "FullYear"]() >= 0),
            "[[year]]": a[i + "FullYear"](),
            "[[month]]": a[i + "Month"](),
            "[[day]]": a[i + "Date"](),
            "[[hour]]": a[i + "Hours"](),
            "[[minute]]": a[i + "Minutes"](),
            "[[second]]": a[i + "Seconds"](),
            "[[inDST]]": !1
        })
    }

    function ne(e, r) {
        if (!e.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
        var t = void 0,
            n = [r],
            a = r.split("-");
        for (a.length > 2 && 4 === a[1].length && Ge.call(n, a[0] + "-" + a[2]); t = Be.call(n);) Ge.call($e.NumberFormat["[[availableLocales]]"], t), $e.NumberFormat["[[localeData]]"][t] = e.number, e.date && (e.date.nu = e.number.nu, Ge.call($e.DateTimeFormat["[[availableLocales]]"], t), $e.DateTimeFormat["[[localeData]]"][t] = e.date);
        void 0 === cr && c(r)
    }
    var ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        ie = function() {
            var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
            return function(r, t, n, a) {
                var i = r && r.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {}), t && i)
                    for (var s in i) void 0 === t[s] && (t[s] = i[s]);
                else t || (t = i || {});
                if (1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = Array(o), c = 0; c < o; c++) l[c] = arguments[c + 3];
                    t.children = l
                }
                return {
                    $$typeof: e,
                    type: r,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
        }(),
        oe = function(e) {
            return function() {
                var r = e.apply(this, arguments);
                return new Promise(function(e, t) {
                    function n(a, i) {
                        try {
                            var o = r[a](i),
                                s = o.value
                        } catch (e) {
                            return void t(e)
                        }
                        return o.done ? void e(s) : Promise.resolve(s).then(function(e) {
                            return n("next", e)
                        }, function(e) {
                            return n("throw", e)
                        })
                    }
                    return n("next")
                })
            }
        },
        se = function(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        },
        le = function() {
            function e(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(r, t, n) {
                return t && e(r.prototype, t), n && e(r, n), r
            }
        }(),
        ce = function(e, r) {
            for (var t in r) {
                var n = r[t];
                n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n)
            }
            return e
        },
        ue = function(e, r) {
            for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
                var a = t[n],
                    i = Object.getOwnPropertyDescriptor(r, a);
                i && i.configurable && void 0 === e[a] && Object.defineProperty(e, a, i)
            }
            return e
        },
        ge = function(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        },
        fe = Object.assign || function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
        },
        me = function e(r, t, n) {
            null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, t);
            if (void 0 === a) {
                var i = Object.getPrototypeOf(r);
                return null === i ? void 0 : e(i, t, n)
            }
            if ("value" in a) return a.value;
            var o = a.get;
            if (void 0 !== o) return o.call(n)
        },
        ve = function(e, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            e.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r)
        },
        de = function(e, r) {
            return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r
        },
        he = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        },
        pe = function(e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
            return r.default = e, r
        },
        ye = function(e, r) {
            if (e !== r) throw new TypeError("Cannot instantiate an arrow function")
        },
        be = function(e) {
            if (null == e) throw new TypeError("Cannot destructure undefined")
        },
        we = function(e, r) {
            var t = {};
            for (var n in e) r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        },
        xe = function(e, r) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !r || "object" != typeof r && "function" != typeof r ? e : r
        },
        je = "undefined" == typeof global ? self : global,
        De = function e(r, t, n, a) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(r);
                null !== o && e(o, t, n, a)
            } else if ("value" in i && i.writable) i.value = n;
            else {
                var s = i.set;
                void 0 !== s && s.call(a, n)
            }
            return n
        },
        ze = function() {
            function e(e, r) {
                var t = [],
                    n = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        !n && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return t
            }
            return function(r, t) {
                if (Array.isArray(r)) return r;
                if (Symbol.iterator in Object(r)) return e(r, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        ke = function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) {
                for (var t, n = [], a = e[Symbol.iterator](); !(t = a.next()).done && (n.push(t.value), !r || n.length !== r););
                return n
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Oe = function(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        },
        Fe = function(e, r) {
            return e.raw = r, e
        },
        Se = function(e, r, t) {
            if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");
            return e
        },
        Ee = {},
        Le = function(e) {
            return Array.isArray(e) ? e : Array.from(e)
        },
        Pe = function(e) {
            if (Array.isArray(e)) {
                for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
                return t
            }
            return Array.from(e)
        },
        Ne = Object.freeze({
            jsx: ie,
            asyncToGenerator: oe,
            classCallCheck: se,
            createClass: le,
            defineEnumerableProperties: ce,
            defaults: ue,
            defineProperty: ge,
            get: me,
            inherits: ve,
            interopRequireDefault: he,
            interopRequireWildcard: pe,
            newArrowCheck: ye,
            objectDestructuringEmpty: be,
            objectWithoutProperties: we,
            possibleConstructorReturn: xe,
            selfGlobal: je,
            set: De,
            slicedToArray: ze,
            slicedToArrayLoose: ke,
            taggedTemplateLiteral: Oe,
            taggedTemplateLiteralLoose: Fe,
            temporalRef: Se,
            temporalUndefined: Ee,
            toArray: Le,
            toConsumableArray: Pe,
            typeof: ae,
            extends: fe,
            instanceof: de
        }),
        Te = function() {
            var e = function() {};
            try {
                return Object.defineProperty(e, "a", {
                    get: function() {
                        return 1
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), 1 === e.a && e.prototype instanceof Object
            } catch (e) {
                return !1
            }
        }(),
        _e = !Te && !Object.prototype.__defineGetter__,
        Me = Object.prototype.hasOwnProperty,
        Ie = Te ? Object.defineProperty : function(e, r, t) {
            "get" in t && e.__defineGetter__ ? e.__defineGetter__(r, t.get) : (!Me.call(e, r) || "value" in t) && (e[r] = t.value)
        },
        Ae = Array.prototype.indexOf || function(e) {
            var r = this;
            if (!r.length) return -1;
            for (var t = arguments[1] || 0, n = r.length; t < n; t++)
                if (r[t] === e) return t;
            return -1
        },
        Re = Object.create || function(e, r) {
            function t() {}
            var n = void 0;
            t.prototype = e, n = new t;
            for (var a in r) Me.call(r, a) && Ie(n, a, r[a]);
            return n
        },
        qe = Array.prototype.slice,
        Ce = Array.prototype.concat,
        Ge = Array.prototype.push,
        Ze = Array.prototype.join,
        Be = Array.prototype.shift,
        Ue = Function.prototype.bind || function(e) {
            var r = this,
                t = qe.call(arguments, 1);
            return 1 === r.length ? function() {
                return r.apply(e, Ce.call(t, qe.call(arguments)))
            } : function() {
                return r.apply(e, Ce.call(t, qe.call(arguments)))
            }
        },
        $e = Re(null),
        Ke = Math.random();
    r.prototype = Re(null), t.prototype = Re(null);
    var Ye = "[a-z]{3}(?:-[a-z]{3}){0,2}",
        He = "(?:[a-z]{2,3}(?:-" + Ye + ")?|[a-z]{4}|[a-z]{5,8})",
        We = "[a-z]{4}",
        Xe = "(?:[a-z]{2}|\\d{3})",
        Ve = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
        Je = "[0-9a-wy-z]",
        Qe = Je + "(?:-[a-z0-9]{2,8})+",
        er = "x(?:-[a-z0-9]{1,8})+",
        rr = "(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))",
        tr = "(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))",
        nr = "(?:" + rr + "|" + tr + ")",
        ar = He + "(?:-" + We + ")?(?:-" + Xe + ")?(?:-" + Ve + ")*(?:-" + Qe + ")*(?:-" + er + ")?",
        ir = RegExp("^(?:" + ar + "|" + er + "|" + nr + ")$", "i"),
        or = RegExp("^(?!x).*?-(" + Ve + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
        sr = RegExp("^(?!x).*?-(" + Je + ")-(?:\\w+-(?!x-))*\\1\\b", "i"),
        lr = RegExp("-" + Qe, "ig"),
        cr = void 0,
        ur = {
            tags: {
                "art-lojban": "jbo",
                "i-ami": "ami",
                "i-bnn": "bnn",
                "i-hak": "hak",
                "i-klingon": "tlh",
                "i-lux": "lb",
                "i-navajo": "nv",
                "i-pwn": "pwn",
                "i-tao": "tao",
                "i-tay": "tay",
                "i-tsu": "tsu",
                "no-bok": "nb",
                "no-nyn": "nn",
                "sgn-BE-FR": "sfb",
                "sgn-BE-NL": "vgt",
                "sgn-CH-DE": "sgg",
                "zh-guoyu": "cmn",
                "zh-hakka": "hak",
                "zh-min-nan": "nan",
                "zh-xiang": "hsn",
                "sgn-BR": "bzs",
                "sgn-CO": "csn",
                "sgn-DE": "gsg",
                "sgn-DK": "dsl",
                "sgn-ES": "ssp",
                "sgn-FR": "fsl",
                "sgn-GB": "bfi",
                "sgn-GR": "gss",
                "sgn-IE": "isg",
                "sgn-IT": "ise",
                "sgn-JP": "jsl",
                "sgn-MX": "mfs",
                "sgn-NI": "ncs",
                "sgn-NL": "dse",
                "sgn-NO": "nsl",
                "sgn-PT": "psr",
                "sgn-SE": "swl",
                "sgn-US": "ase",
                "sgn-ZA": "sfs",
                "zh-cmn": "cmn",
                "zh-cmn-Hans": "cmn-Hans",
                "zh-cmn-Hant": "cmn-Hant",
                "zh-gan": "gan",
                "zh-wuu": "wuu",
                "zh-yue": "yue"
            },
            subtags: {
                BU: "MM",
                DD: "DE",
                FX: "FR",
                TP: "TL",
                YD: "YE",
                ZR: "CD",
                heploc: "alalc97",
                in: "id",
                iw: "he",
                ji: "yi",
                jw: "jv",
                mo: "ro",
                ayx: "nun",
                bjd: "drl",
                ccq: "rki",
                cjr: "mom",
                cka: "cmr",
                cmk: "xch",
                drh: "khk",
                drw: "prs",
                gav: "dev",
                hrr: "jal",
                ibi: "opa",
                kgh: "kml",
                lcq: "ppr",
                mst: "mry",
                myt: "mry",
                sca: "hle",
                tie: "ras",
                tkk: "twm",
                tlw: "weo",
                tnf: "prs",
                ybd: "rki",
                yma: "lrr"
            },
            extLang: {
                aao: ["aao", "ar"],
                abh: ["abh", "ar"],
                abv: ["abv", "ar"],
                acm: ["acm", "ar"],
                acq: ["acq", "ar"],
                acw: ["acw", "ar"],
                acx: ["acx", "ar"],
                acy: ["acy", "ar"],
                adf: ["adf", "ar"],
                ads: ["ads", "sgn"],
                aeb: ["aeb", "ar"],
                aec: ["aec", "ar"],
                aed: ["aed", "sgn"],
                aen: ["aen", "sgn"],
                afb: ["afb", "ar"],
                afg: ["afg", "sgn"],
                ajp: ["ajp", "ar"],
                apc: ["apc", "ar"],
                apd: ["apd", "ar"],
                arb: ["arb", "ar"],
                arq: ["arq", "ar"],
                ars: ["ars", "ar"],
                ary: ["ary", "ar"],
                arz: ["arz", "ar"],
                ase: ["ase", "sgn"],
                asf: ["asf", "sgn"],
                asp: ["asp", "sgn"],
                asq: ["asq", "sgn"],
                asw: ["asw", "sgn"],
                auz: ["auz", "ar"],
                avl: ["avl", "ar"],
                ayh: ["ayh", "ar"],
                ayl: ["ayl", "ar"],
                ayn: ["ayn", "ar"],
                ayp: ["ayp", "ar"],
                bbz: ["bbz", "ar"],
                bfi: ["bfi", "sgn"],
                bfk: ["bfk", "sgn"],
                bjn: ["bjn", "ms"],
                bog: ["bog", "sgn"],
                bqn: ["bqn", "sgn"],
                bqy: ["bqy", "sgn"],
                btj: ["btj", "ms"],
                bve: ["bve", "ms"],
                bvl: ["bvl", "sgn"],
                bvu: ["bvu", "ms"],
                bzs: ["bzs", "sgn"],
                cdo: ["cdo", "zh"],
                cds: ["cds", "sgn"],
                cjy: ["cjy", "zh"],
                cmn: ["cmn", "zh"],
                coa: ["coa", "ms"],
                cpx: ["cpx", "zh"],
                csc: ["csc", "sgn"],
                csd: ["csd", "sgn"],
                cse: ["cse", "sgn"],
                csf: ["csf", "sgn"],
                csg: ["csg", "sgn"],
                csl: ["csl", "sgn"],
                csn: ["csn", "sgn"],
                csq: ["csq", "sgn"],
                csr: ["csr", "sgn"],
                czh: ["czh", "zh"],
                czo: ["czo", "zh"],
                doq: ["doq", "sgn"],
                dse: ["dse", "sgn"],
                dsl: ["dsl", "sgn"],
                dup: ["dup", "ms"],
                ecs: ["ecs", "sgn"],
                esl: ["esl", "sgn"],
                esn: ["esn", "sgn"],
                eso: ["eso", "sgn"],
                eth: ["eth", "sgn"],
                fcs: ["fcs", "sgn"],
                fse: ["fse", "sgn"],
                fsl: ["fsl", "sgn"],
                fss: ["fss", "sgn"],
                gan: ["gan", "zh"],
                gds: ["gds", "sgn"],
                gom: ["gom", "kok"],
                gse: ["gse", "sgn"],
                gsg: ["gsg", "sgn"],
                gsm: ["gsm", "sgn"],
                gss: ["gss", "sgn"],
                gus: ["gus", "sgn"],
                hab: ["hab", "sgn"],
                haf: ["haf", "sgn"],
                hak: ["hak", "zh"],
                hds: ["hds", "sgn"],
                hji: ["hji", "ms"],
                hks: ["hks", "sgn"],
                hos: ["hos", "sgn"],
                hps: ["hps", "sgn"],
                hsh: ["hsh", "sgn"],
                hsl: ["hsl", "sgn"],
                hsn: ["hsn", "zh"],
                icl: ["icl", "sgn"],
                ils: ["ils", "sgn"],
                inl: ["inl", "sgn"],
                ins: ["ins", "sgn"],
                ise: ["ise", "sgn"],
                isg: ["isg", "sgn"],
                isr: ["isr", "sgn"],
                jak: ["jak", "ms"],
                jax: ["jax", "ms"],
                jcs: ["jcs", "sgn"],
                jhs: ["jhs", "sgn"],
                jls: ["jls", "sgn"],
                jos: ["jos", "sgn"],
                jsl: ["jsl", "sgn"],
                jus: ["jus", "sgn"],
                kgi: ["kgi", "sgn"],
                knn: ["knn", "kok"],
                kvb: ["kvb", "ms"],
                kvk: ["kvk", "sgn"],
                kvr: ["kvr", "ms"],
                kxd: ["kxd", "ms"],
                lbs: ["lbs", "sgn"],
                lce: ["lce", "ms"],
                lcf: ["lcf", "ms"],
                liw: ["liw", "ms"],
                lls: ["lls", "sgn"],
                lsg: ["lsg", "sgn"],
                lsl: ["lsl", "sgn"],
                lso: ["lso", "sgn"],
                lsp: ["lsp", "sgn"],
                lst: ["lst", "sgn"],
                lsy: ["lsy", "sgn"],
                ltg: ["ltg", "lv"],
                lvs: ["lvs", "lv"],
                lzh: ["lzh", "zh"],
                max: ["max", "ms"],
                mdl: ["mdl", "sgn"],
                meo: ["meo", "ms"],
                mfa: ["mfa", "ms"],
                mfb: ["mfb", "ms"],
                mfs: ["mfs", "sgn"],
                min: ["min", "ms"],
                mnp: ["mnp", "zh"],
                mqg: ["mqg", "ms"],
                mre: ["mre", "sgn"],
                msd: ["msd", "sgn"],
                msi: ["msi", "ms"],
                msr: ["msr", "sgn"],
                mui: ["mui", "ms"],
                mzc: ["mzc", "sgn"],
                mzg: ["mzg", "sgn"],
                mzy: ["mzy", "sgn"],
                nan: ["nan", "zh"],
                nbs: ["nbs", "sgn"],
                ncs: ["ncs", "sgn"],
                nsi: ["nsi", "sgn"],
                nsl: ["nsl", "sgn"],
                nsp: ["nsp", "sgn"],
                nsr: ["nsr", "sgn"],
                nzs: ["nzs", "sgn"],
                okl: ["okl", "sgn"],
                orn: ["orn", "ms"],
                ors: ["ors", "ms"],
                pel: ["pel", "ms"],
                pga: ["pga", "ar"],
                pks: ["pks", "sgn"],
                prl: ["prl", "sgn"],
                prz: ["prz", "sgn"],
                psc: ["psc", "sgn"],
                psd: ["psd", "sgn"],
                pse: ["pse", "ms"],
                psg: ["psg", "sgn"],
                psl: ["psl", "sgn"],
                pso: ["pso", "sgn"],
                psp: ["psp", "sgn"],
                psr: ["psr", "sgn"],
                pys: ["pys", "sgn"],
                rms: ["rms", "sgn"],
                rsi: ["rsi", "sgn"],
                rsl: ["rsl", "sgn"],
                sdl: ["sdl", "sgn"],
                sfb: ["sfb", "sgn"],
                sfs: ["sfs", "sgn"],
                sgg: ["sgg", "sgn"],
                sgx: ["sgx", "sgn"],
                shu: ["shu", "ar"],
                slf: ["slf", "sgn"],
                sls: ["sls", "sgn"],
                sqk: ["sqk", "sgn"],
                sqs: ["sqs", "sgn"],
                ssh: ["ssh", "ar"],
                ssp: ["ssp", "sgn"],
                ssr: ["ssr", "sgn"],
                svk: ["svk", "sgn"],
                swc: ["swc", "sw"],
                swh: ["swh", "sw"],
                swl: ["swl", "sgn"],
                syy: ["syy", "sgn"],
                tmw: ["tmw", "ms"],
                tse: ["tse", "sgn"],
                tsm: ["tsm", "sgn"],
                tsq: ["tsq", "sgn"],
                tss: ["tss", "sgn"],
                tsy: ["tsy", "sgn"],
                tza: ["tza", "sgn"],
                ugn: ["ugn", "sgn"],
                ugy: ["ugy", "sgn"],
                ukl: ["ukl", "sgn"],
                uks: ["uks", "sgn"],
                urk: ["urk", "ms"],
                uzn: ["uzn", "uz"],
                uzs: ["uzs", "uz"],
                vgt: ["vgt", "sgn"],
                vkk: ["vkk", "ms"],
                vkt: ["vkt", "ms"],
                vsi: ["vsi", "sgn"],
                vsl: ["vsl", "sgn"],
                vsv: ["vsv", "sgn"],
                wuu: ["wuu", "zh"],
                xki: ["xki", "sgn"],
                xml: ["xml", "sgn"],
                xmm: ["xmm", "ms"],
                xms: ["xms", "sgn"],
                yds: ["yds", "sgn"],
                ysl: ["ysl", "sgn"],
                yue: ["yue", "zh"],
                zib: ["zib", "sgn"],
                zlm: ["zlm", "ms"],
                zmi: ["zmi", "ms"],
                zsl: ["zsl", "sgn"],
                zsm: ["zsm", "ms"]
            }
        },
        gr = /^[A-Z]{3}$/,
        fr = /-u(?:-[0-9a-z]{2,8})+/gi,
        mr = {};
    Object.defineProperty(mr, "getCanonicalLocales", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: k
    });
    var vr = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
    Ie(mr, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: O
    }), Ie(mr.NumberFormat, "prototype", {
        writable: !1
    }), $e.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, Ie(mr.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: Ue.call(function(e) {
            if (!Me.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
            var r = n(),
                t = arguments[1],
                a = this["[[availableLocales]]"],
                i = d(e);
            return r(), j(a, i, t)
        }, $e.NumberFormat)
    }), Ie(mr.NumberFormat.prototype, "format", {
        configurable: !0,
        get: E
    }), Object.defineProperty(mr.NumberFormat.prototype, "formatToParts", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: L
    });
    var dr = {
        arab: ["Ù ", "Ù¡", "Ù¢", "Ù£", "Ù¤", "Ù¥", "Ù¦", "Ù§", "Ù¨", "Ù©"],
        arabext: ["Û°", "Û±", "Û²", "Û³", "Û´", "Ûµ", "Û¶", "Û·", "Û¸", "Û¹"],
        bali: ["á­", "á­‘", "á­’", "á­“", "á­”", "á­•", "á­–", "á­—", "á­˜", "á­™"],
        beng: ["à§¦", "à§§", "à§¨", "à§©", "à§ª", "à§«", "à§¬", "à§­", "à§®", "à§¯"],
        deva: ["à¥¦", "à¥§", "à¥¨", "à¥©", "à¥ª", "à¥«", "à¥¬", "à¥­", "à¥®", "à¥¯"],
        fullwide: ["ï¼", "ï¼‘", "ï¼’", "ï¼“", "ï¼”", "ï¼•", "ï¼–", "ï¼—", "ï¼˜", "ï¼™"],
        gujr: ["à«¦", "à«§", "à«¨", "à«©", "à«ª", "à««", "à«¬", "à«­", "à«®", "à«¯"],
        guru: ["à©¦", "à©§", "à©¨", "à©©", "à©ª", "à©«", "à©¬", "à©­", "à©®", "à©¯"],
        hanidec: ["ã€‡", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹"],
        khmr: ["áŸ ", "áŸ¡", "áŸ¢", "áŸ£", "áŸ¤", "áŸ¥", "áŸ¦", "áŸ§", "áŸ¨", "áŸ©"],
        knda: ["à³¦", "à³§", "à³¨", "à³©", "à³ª", "à³«", "à³¬", "à³­", "à³®", "à³¯"],
        laoo: ["à»", "à»‘", "à»’", "à»“", "à»”", "à»•", "à»–", "à»—", "à»˜", "à»™"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["á¥†", "á¥‡", "á¥ˆ", "á¥‰", "á¥Š", "á¥‹", "á¥Œ", "á¥", "á¥Ž", "á¥"],
        mlym: ["àµ¦", "àµ§", "àµ¨", "àµ©", "àµª", "àµ«", "àµ¬", "àµ­", "àµ®", "àµ¯"],
        mong: ["á ", "á ‘", "á ’", "á “", "á ”", "á •", "á –", "á —", "á ˜", "á ™"],
        mymr: ["á€", "á", "á‚", "áƒ", "á„", "á…", "á†", "á‡", "áˆ", "á‰"],
        orya: ["à­¦", "à­§", "à­¨", "à­©", "à­ª", "à­«", "à­¬", "à­­", "à­®", "à­¯"],
        tamldec: ["à¯¦", "à¯§", "à¯¨", "à¯©", "à¯ª", "à¯«", "à¯¬", "à¯­", "à¯®", "à¯¯"],
        telu: ["à±¦", "à±§", "à±¨", "à±©", "à±ª", "à±«", "à±¬", "à±­", "à±®", "à±¯"],
        thai: ["à¹", "à¹‘", "à¹’", "à¹“", "à¹”", "à¹•", "à¹–", "à¹—", "à¹˜", "à¹™"],
        tibt: ["à¼ ", "à¼¡", "à¼¢", "à¼£", "à¼¤", "à¼¥", "à¼¦", "à¼§", "à¼¨", "à¼©"]
    };
    Ie(mr.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0,
        writable: !0,
        value: function() {
            var e = void 0,
                t = new r,
                n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                a = null !== this && "object" === Ne.typeof(this) && l(this);
            if (!a || !a["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var i = 0, o = n.length; i < o; i++) Me.call(a, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                value: a[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return Re({}, t)
        }
    });
    var hr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        pr = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        yr = /[rqQASjJgwWIQq]/,
        br = ["era", "year", "month", "day", "weekday", "quarter"],
        wr = ["hour", "minute", "second", "hour12", "timeZoneName"],
        xr = {
            second: {
                numeric: "s",
                "2-digit": "ss"
            },
            minute: {
                numeric: "m",
                "2-digit": "mm"
            },
            year: {
                numeric: "y",
                "2-digit": "yy"
            },
            day: {
                numeric: "d",
                "2-digit": "dd"
            },
            month: {
                numeric: "L",
                "2-digit": "LL",
                narrow: "LLLLL",
                short: "LLL",
                long: "LLLL"
            },
            weekday: {
                narrow: "ccccc",
                short: "ccc",
                long: "cccc"
            }
        },
        jr = Re(null, {
            narrow: {},
            short: {},
            long: {}
        });
    Ie(mr, "DateTimeFormat", {
        configurable: !0,
        writable: !0,
        value: $
    }), Ie($, "prototype", {
        writable: !1
    });
    var Dr = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };
    $e.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["ca", "nu"],
        "[[localeData]]": {}
    }, Ie(mr.DateTimeFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: Ue.call(function(e) {
            if (!Me.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
            var r = n(),
                t = arguments[1],
                a = this["[[availableLocales]]"],
                i = d(e);
            return r(), j(a, i, t)
        }, $e.NumberFormat)
    }), Ie(mr.DateTimeFormat.prototype, "format", {
        configurable: !0,
        get: V
    }), Object.defineProperty(mr.DateTimeFormat.prototype, "formatToParts", {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: J
    }), Ie(mr.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function() {
            var e = void 0,
                t = new r,
                n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                a = null !== this && "object" === Ne.typeof(this) && l(this);
            if (!a || !a["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, o = n.length; i < o; i++) Me.call(a, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                value: a[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return Re({}, t)
        }
    });
    var zr = mr.__localeSensitiveProtos = {
        Number: {},
        Date: {}
    };
    if (zr.Number.toLocaleString = function() {
            if ("[object Number]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
            return T(new O(arguments[0], arguments[1]), this)
        }, zr.Date.toLocaleString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var r = arguments[0],
                t = arguments[1];
            t = H(t, "any", "all");
            var n = new $(r, t);
            return ee(n, e)
        }, zr.Date.toLocaleDateString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var r = arguments[0],
                t = arguments[1];
            t = H(t, "date", "date");
            var n = new $(r, t);
            return ee(n, e)
        }, zr.Date.toLocaleTimeString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var r = arguments[0],
                t = arguments[1];
            t = H(t, "time", "time");
            var n = new $(r, t);
            return ee(n, e)
        }, Ie(mr, "__applyLocaleSensitivePrototypes", {
            writable: !0,
            configurable: !0,
            value: function() {
                Ie(Number.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: zr.Number.toLocaleString
                }), Ie(Date.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: zr.Date.toLocaleString
                });
                for (var e in zr.Date) Me.call(zr.Date, e) && Ie(Date.prototype, e, {
                    writable: !0,
                    configurable: !0,
                    value: zr.Date[e]
                })
            }
        }), Ie(mr, "__addLocaleData", {
            value: function(e) {
                if (!g(e.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");
                ne(e, e.locale)
            }
        }), Ie(mr, "__disableRegExpRestore", {
            value: function() {
                $e.disableRegExpRestore = !0
            }
        }), "undefined" == typeof Intl) try {
        window.Intl = mr, mr.__applyLocaleSensitivePrototypes()
    } catch (e) {}
    return mr
});

; // intl/polyfillLocales/en-US.js
IntlPolyfill.__addLocaleData({
    locale: "en-US",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !0,
        formats: {
            short: "{1}, {0}",
            medium: "{1}, {0}",
            full: "{1} 'at' {0}",
            long: "{1} 'at' {0}",
            availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "d E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "MMM d, y G",
                GyMMMEd: "E, MMM d, y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "M/d",
                MEd: "E, M/d",
                MMM: "LLL",
                MMMd: "MMM d",
                MMMEd: "E, MMM d",
                MMMMd: "MMMM d",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "M/d/y",
                yMEd: "E, M/d/y",
                yMMM: "MMM y",
                yMMMd: "MMM d, y",
                yMMMEd: "E, MMM d, y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
            },
            dateFormats: {
                yMMMMEEEEd: "EEEE, MMMM d, y",
                yMMMMd: "MMMM d, y",
                yMMMd: "MMM d, y",
                yMd: "M/d/yy"
            },
            timeFormats: {
                hmmsszzzz: "h:mm:ss a zzzz",
                hmsz: "h:mm:ss a z",
                hms: "h:mm:ss a",
                hm: "h:mm a"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["BE"],
                    short: ["BE"],
                    long: ["BE"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
                    long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
                    long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            gregory: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["B", "A", "BCE", "CE"],
                    short: ["BC", "AD", "BCE", "CE"],
                    long: ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                    long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            japanese: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"],
                    long: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            roc: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["Before R.O.C.", "Minguo"],
                    short: ["Before R.O.C.", "Minguo"],
                    long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
            },
            percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            AUD: "A$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CNÂ¥",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "Â¥",
            KRW: "â‚©",
            MXN: "MX$",
            NZD: "NZ$",
            TWD: "NT$",
            USD: "$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/es-ES.js
IntlPolyfill.__addLocaleData({
    locale: "es-ES",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !1,
        formats: {
            short: "{1} {0}",
            medium: "{1} {0}",
            full: "{1}, {0}",
            long: "{1}, {0}",
            availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E d",
                Ehm: "E, h:mm a",
                EHm: "E, H:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, H:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "MMMM 'de' y G",
                GyMMMMd: "d 'de' MMMM 'de' y G",
                GyMMMMEd: "E, d 'de' MMMM 'de' y G",
                h: "h a",
                H: "H",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmsvvvv: "h:mm:ss a (vvvv)",
                Hmsvvvv: "H:mm:ss (vvvv)",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMd: "d/M",
                MMdd: "d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "EEE, d/M/y",
                yMM: "M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "EEE, d MMM y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "EEE, d 'de' MMMM 'de' y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ 'de' y"
            },
            dateFormats: {
                yMMMMEEEEd: "EEEE, d 'de' MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMd: "d MMM y",
                yMd: "d/M/yy"
            },
            timeFormats: {
                hmmsszzzz: "H:mm:ss (zzzz)",
                hmsz: "H:mm:ss z",
                hms: "H:mm:ss",
                hm: "H:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                    long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["BE"],
                    short: ["BE"],
                    long: ["BE"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            gregory: {
                months: {
                    narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                    long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                    short: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                    long: ["antes de Cristo", "despuÃ©s de Cristo", "antes de la era comÃºn", "era comÃºn"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                    long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            japanese: {
                months: {
                    narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                    long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"],
                    long: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            },
            roc: {
                months: {
                    narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                    long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "X", "J", "V", "S"],
                    short: ["dom.", "lun.", "mar.", "miÃ©.", "jue.", "vie.", "sÃ¡b."],
                    long: ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["antes de R.O.C.", "R.O.C."],
                    short: ["antes de R.O.C.", "R.O.C."],
                    long: ["antes de R.O.C.", "R.O.C."]
                },
                dayPeriods: {
                    am: "a. m.",
                    pm: "p. m."
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{number}Â {currency}",
                negativePattern: "{minusSign}{number}Â {currency}"
            },
            percent: {
                positivePattern: "{number}Â {percentSign}",
                negativePattern: "{minusSign}{number}Â {percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            CAD: "CA$",
            ESP: "â‚§",
            EUR: "â‚¬",
            THB: "à¸¿",
            USD: "$",
            VND: "â‚«",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/fr-FR.js
IntlPolyfill.__addLocaleData({
    locale: "fr-FR",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !1,
        formats: {
            short: "{1} {0}",
            medium: "{1} 'Ã ' {0}",
            full: "{1} 'Ã ' {0}",
            long: "{1} 'Ã ' {0}",
            availableFormats: {
                d: "d",
                E: "E",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h a",
                H: "HH 'h'",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "dd/MM",
                MEd: "E dd/MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMMd: "d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM/y",
                yMd: "dd/MM/y",
                yMEd: "E dd/MM/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
            },
            dateFormats: {
                yMMMMEEEEd: "EEEE d MMMM y",
                yMMMMd: "d MMMM y",
                yMMMd: "d MMM y",
                yMd: "dd/MM/y"
            },
            timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["janv.", "fÃ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
                    long: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["E.B."],
                    short: ["Ã¨re b."],
                    long: ["Ã¨re bouddhiste"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1yuÃ¨", "2yuÃ¨", "3yuÃ¨", "4yuÃ¨", "5yuÃ¨", "6yuÃ¨", "7yuÃ¨", "8yuÃ¨", "9yuÃ¨", "10yuÃ¨", "11yuÃ¨", "12yuÃ¨"],
                    long: ["zhÄ“ngyuÃ¨", "Ã¨ryuÃ¨", "sÄnyuÃ¨", "sÃ¬yuÃ¨", "wÇ”yuÃ¨", "liÃ¹yuÃ¨", "qÄ«yuÃ¨", "bÄyuÃ¨", "jiÇ”yuÃ¨", "shÃ­yuÃ¨", "shÃ­yÄ«yuÃ¨", "shÃ­â€™Ã¨ryuÃ¨"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1yuÃ¨", "2yuÃ¨", "3yuÃ¨", "4yuÃ¨", "5yuÃ¨", "6yuÃ¨", "7yuÃ¨", "8yuÃ¨", "9yuÃ¨", "10yuÃ¨", "11yuÃ¨", "12yuÃ¨"],
                    long: ["zhÄ“ngyuÃ¨", "Ã¨ryuÃ¨", "sÄnyuÃ¨", "sÃ¬yuÃ¨", "wÇ”yuÃ¨", "liÃ¹yuÃ¨", "qÄ«yuÃ¨", "bÄyuÃ¨", "jiÇ”yuÃ¨", "shÃ­yuÃ¨", "shÃ­yÄ«yuÃ¨", "shÃ­â€™Ã¨ryuÃ¨"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            gregory: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["janv.", "fÃ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
                    long: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                    short: ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                    long: ["avant JÃ©sus-Christ", "aprÃ¨s JÃ©sus-Christ", "avant lâ€™Ã¨re commune", "de lâ€™Ã¨re commune"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["Tisseri", "Hesvan", "Kislev", "TÃ©beth", "SchÃ©bat", "Adar I", "Adar", "Nissan", "Iyar", "Sivan", "Tamouz", "Ab", "Elloul", "Adar II"],
                    long: ["Tisseri", "Hesvan", "Kislev", "TÃ©beth", "SchÃ©bat", "Adar I", "Adar", "Nissan", "Iyar", "Sivan", "Tamouz", "Ab", "Elloul", "Adar II"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["mouh.", "saf.", "rab. aw.", "rab. th.", "joum. oul.", "joum. tha.", "raj.", "chaa.", "ram.", "chaw.", "dhou. q.", "dhou. h."],
                    long: ["mouharram", "safar", "rabia al awal", "rabia ath-thani", "joumada al oula", "joumada ath-thania", "rajab", "chaabane", "ramadan", "chawwal", "dhou al qi`da", "dhou al-hijja"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["mouh.", "saf.", "rab. aw.", "rab. th.", "joum. oul.", "joum. tha.", "raj.", "chaa.", "ram.", "chaw.", "dhou. q.", "dhou. h."],
                    long: ["mouharram", "safar", "rabia al awal", "rabia ath-thani", "joumada al oula", "joumada ath-thania", "rajab", "chaabane", "ramadan", "chawwal", "dhou al qi`da", "dhou al-hijja"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            japanese: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["janv.", "fÃ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
                    long: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"],
                    long: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            roc: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["janv.", "fÃ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
                    long: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"]
                },
                days: {
                    narrow: ["D", "L", "M", "M", "J", "V", "S"],
                    short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                    narrow: ["avant RdC", "RdC"],
                    short: ["avant RdC", "RdC"],
                    long: ["avant RdC", "RdC"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{number}Â {currency}",
                negativePattern: "{minusSign}{number}Â {currency}"
            },
            percent: {
                positivePattern: "{number}Â {percentSign}",
                negativePattern: "{minusSign}{number}Â {percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ",",
                group: "Â ",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            ARS: "$AR",
            AUD: "$AU",
            BEF: "FB",
            BMD: "$BM",
            BND: "$BN",
            BRL: "R$",
            BSD: "$BS",
            BZD: "$BZ",
            CAD: "$CA",
            CLP: "$CL",
            COP: "$CO",
            CYP: "Â£CY",
            EUR: "â‚¬",
            FJD: "$FJ",
            FKP: "Â£FK",
            FRF: "F",
            GBP: "Â£GB",
            GIP: "Â£GI",
            IEP: "Â£IE",
            ILP: "Â£IL",
            ILS: "â‚ª",
            INR: "â‚¹",
            ITL: "â‚¤IT",
            KRW: "â‚©",
            LBP: "Â£LB",
            MTP: "Â£MT",
            MXN: "$MX",
            NAD: "$NA",
            NZD: "$NZ",
            RHD: "$RH",
            SBD: "$SB",
            SGD: "$SG",
            SRD: "$SR",
            TTD: "$TT",
            USD: "$US",
            UYU: "$UY",
            VND: "â‚«",
            WST: "WS$",
            XAF: "FCFA",
            XOF: "CFA",
            XPF: "FCFP"
        }
    }
});

; // intl/polyfillLocales/de-DE.js
IntlPolyfill.__addLocaleData({
    locale: "de-DE",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !1,
        formats: {
            short: "{1}, {0}",
            medium: "{1}, {0}",
            full: "{1} 'um' {0}",
            long: "{1} 'um' {0}",
            availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E, d.",
                Ehm: "E h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d. MMM y G",
                GyMMMEd: "E, d. MMM y G",
                h: "h a",
                H: "HH 'Uhr'",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d.M.",
                MEd: "E, d.M.",
                MMd: "d.MM.",
                MMdd: "dd.MM.",
                MMM: "LLL",
                MMMd: "d. MMM",
                MMMEd: "E, d. MMM",
                MMMMd: "d. MMMM",
                MMMMEd: "E, d. MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M.y",
                yMd: "d.M.y",
                yMEd: "E, d.M.y",
                yMM: "MM.y",
                yMMdd: "dd.MM.y",
                yMMM: "MMM y",
                yMMMd: "d. MMM y",
                yMMMEd: "E, d. MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
            },
            dateFormats: {
                yMMMMEEEEd: "EEEE, d. MMMM y",
                yMMMMd: "d. MMMM y",
                yMMMd: "dd.MM.y",
                yMd: "dd.MM.yy"
            },
            timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan.", "Feb.", "MÃ¤rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                    long: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["BE"],
                    short: ["BE"],
                    long: ["BE"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            gregory: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan.", "Feb.", "MÃ¤rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                    long: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                    short: ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                    long: ["v. Chr.", "n. Chr.", "vor unserer Zeitrechnung", "unserer Zeitrechnung"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                    long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            japanese: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan.", "Feb.", "MÃ¤rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                    long: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"],
                    long: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            },
            roc: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["Jan.", "Feb.", "MÃ¤rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                    long: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                    narrow: ["S", "M", "D", "M", "D", "F", "S"],
                    short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                    long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                    narrow: ["Before R.O.C.", "Minguo"],
                    short: ["Before R.O.C.", "Minguo"],
                    long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                    am: "vorm.",
                    pm: "nachm."
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{number}Â {currency}",
                negativePattern: "{minusSign}{number}Â {currency}"
            },
            percent: {
                positivePattern: "{number}Â {percentSign}",
                negativePattern: "{minusSign}{number}Â {percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            ATS: "Ã¶S",
            AUD: "AU$",
            BGM: "BGK",
            BGO: "BGJ",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CNÂ¥",
            DEM: "DM",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "Â¥",
            KRW: "â‚©",
            MXN: "MX$",
            NZD: "NZ$",
            THB: "à¸¿",
            TWD: "NT$",
            USD: "$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/pt-BR.js
IntlPolyfill.__addLocaleData({
    locale: "pt-BR",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !1,
        formats: {
            short: "{1} {0}",
            medium: "{1} {0}",
            full: "{1} {0}",
            long: "{1} {0}",
            availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E, d",
                Ehm: "E, h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM 'de' y G",
                GyMMMd: "d 'de' MMM 'de' y G",
                GyMMMEd: "E, d 'de' MMM 'de' y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, dd/MM",
                MMdd: "dd/MM",
                MMM: "LLL",
                MMMd: "d 'de' MMM",
                MMMEd: "E, d 'de' MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM/y",
                yMd: "dd/MM/y",
                yMEd: "E, dd/MM/y",
                yMM: "MM/y",
                yMMM: "MMM 'de' y",
                yMMMd: "d 'de' MMM 'de' y",
                yMMMEd: "E, d 'de' MMM 'de' y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "E, d 'de' MMMM 'de' y",
                yQQQ: "y QQQ",
                yQQQQ: "y QQQQ"
            },
            dateFormats: {
                yMMMMEEEEd: "EEEE, d 'de' MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMd: "d 'de' MMM 'de' y",
                yMd: "dd/MM/yy"
            },
            timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                    long: ["janeiro", "fevereiro", "marÃ§o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["BE"],
                    short: ["BE"],
                    long: ["BE"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["MÃªs 1", "MÃªs 2", "MÃªs 3", "MÃªs 4", "MÃªs 5", "MÃªs 6", "MÃªs 7", "MÃªs 8", "MÃªs 9", "MÃªs 10", "MÃªs 11", "MÃªs 12"],
                    long: ["MÃªs 1", "MÃªs 2", "MÃªs 3", "MÃªs 4", "MÃªs 5", "MÃªs 6", "MÃªs 7", "MÃªs 8", "MÃªs 9", "MÃªs 10", "MÃªs 11", "MÃªs 12"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["MÃªs 1", "MÃªs 2", "MÃªs 3", "MÃªs 4", "MÃªs 5", "MÃªs 6", "MÃªs 7", "MÃªs 8", "MÃªs 9", "MÃªs 10", "MÃªs 11", "MÃªs 12"],
                    long: ["MÃªs 1", "MÃªs 2", "MÃªs 3", "MÃªs 4", "MÃªs 5", "MÃªs 6", "MÃªs 7", "MÃªs 8", "MÃªs 9", "MÃªs 10", "MÃªs 11", "MÃªs 12"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            gregory: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                    long: ["janeiro", "fevereiro", "marÃ§o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["a.C.", "d.C.", "AEC", "EC"],
                    short: ["a.C.", "d.C.", "AEC", "EC"],
                    long: ["antes de Cristo", "depois de Cristo", "antes da Era Comum", "Era Comum"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                    long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["Muharram", "Safar", "RabiÊ» I", "RabiÊ» II", "Jumada I", "Jumada II", "Rajab", "ShaÊ»ban", "Ramadan", "Shawwal", "DhuÊ»l-QiÊ»dah", "DhuÊ»l-Hijjah"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            japanese: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                    long: ["janeiro", "fevereiro", "marÃ§o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"],
                    long: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "Meiji", "TaishÅ", "ShÅwa", "Heisei"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            roc: {
                months: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                    long: ["janeiro", "fevereiro", "marÃ§o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sÃ¡b"],
                    long: ["domingo", "segunda-feira", "terÃ§a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sÃ¡bado"]
                },
                eras: {
                    narrow: ["Antes de R.O.C.", "R.O.C."],
                    short: ["Antes de R.O.C.", "R.O.C."],
                    long: ["Antes de R.O.C.", "R.O.C."]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
            },
            percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CNÂ¥",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "JPÂ¥",
            KRW: "â‚©",
            MXN: "MX$",
            NZD: "NZ$",
            PTE: "Esc.",
            THB: "à¸¿",
            TWD: "NT$",
            USD: "US$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/ko-KR.js
IntlPolyfill.__addLocaleData({
    locale: "ko-KR",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !0,
        formats: {
            short: "{1} {0}",
            medium: "{1} {0}",
            full: "{1} {0}",
            long: "{1} {0}",
            availableFormats: {
                d: "dì¼",
                E: "ccc",
                Ed: "dì¼ (E)",
                EEEEd: "dì¼ EEEE",
                Ehm: "(E) a h:mm",
                EHm: "(E) HH:mm",
                Ehms: "(E) a h:mm:ss",
                EHms: "(E) HH:mm:ss",
                Gy: "G yë…„",
                GyMMM: "G yë…„ MMM",
                GyMMMd: "G yë…„ MMM dì¼",
                GyMMMEd: "G yë…„ MMM dì¼ (E)",
                GyMMMEEEEd: "G yë…„ MMM dì¼ EEEE",
                h: "a hì‹œ",
                H: "Hì‹œ",
                HHmmss: "HH:mm:ss",
                hm: "a h:mm",
                Hm: "HH:mm",
                hms: "a h:mm:ss",
                Hms: "Hì‹œ më¶„ sì´ˆ",
                hmsv: "a h:mm:ss v",
                Hmsv: "Hì‹œ më¶„ sì´ˆ v",
                hmv: "a h:mm v",
                Hmv: "HH:mm v",
                M: "Mì›”",
                Md: "M. d.",
                MEd: "M. d. (E)",
                MEEEEd: "M. d. EEEE",
                MMM: "LLL",
                MMMd: "MMM dì¼",
                MMMEd: "MMM dì¼ (E)",
                MMMEEEEd: "MMM dì¼ EEEE",
                MMMMd: "MMMM dì¼",
                mmss: "mm:ss",
                ms: "mm:ss",
                y: "yë…„",
                yM: "y. M.",
                yMd: "y. M. d.",
                yMEd: "y. M. d. (E)",
                yMEEEEd: "y. M. d. EEEE",
                yMM: "y. M.",
                yMMM: "yë…„ MMM",
                yMMMd: "yë…„ MMM dì¼",
                yMMMEd: "yë…„ MMM dì¼ (E)",
                yMMMEEEEd: "yë…„ MMM dì¼ EEEE",
                yMMMM: "yë…„ MMMM",
                yQQQ: "yë…„ QQQ",
                yQQQQ: "yë…„ QQQQ"
            },
            dateFormats: {
                yMMMMEEEEd: "yë…„ Mì›” dì¼ EEEE",
                yMMMMd: "yë…„ Mì›” dì¼",
                yMMMd: "y. M. d.",
                yMd: "yy. M. d."
            },
            timeFormats: {
                hmmsszzzz: "a hì‹œ më¶„ sì´ˆ zzzz",
                hmsz: "a hì‹œ më¶„ sì´ˆ z",
                hms: "a h:mm:ss",
                hm: "a h:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ë¶ˆê¸°"],
                    short: ["ë¶ˆê¸°"],
                    long: ["ë¶ˆê¸°"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            chinese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["íˆ¬íŠ¸", "ë°”ë°”í", "í•˜íˆ¬ë¥´", "í‚¤ì•¼íí¬", "íˆ¬ë°”í", "ì•”ì‰¬ë¥´", "ë°”ë¼ë§ˆíŠ¸", "ë°”ë¼ë¬¸ë‹¤í", "ë°”ìƒ¨ìŠ¤", "ë°”ìš°ë‚˜í", "ì•„ë¹„ë¸Œ", "ë¯¸ìŠ¤ë¼", "ë‚˜ì‹œ"],
                    long: ["íˆ¬íŠ¸", "ë°”ë°”í", "í•˜íˆ¬ë¥´", "í‚¤ì•¼íí¬", "íˆ¬ë°”í", "ì•”ì‰¬ë¥´", "ë°”ë¼ë§ˆíŠ¸", "ë°”ë¼ë¬¸ë‹¤í", "ë°”ìƒ¨ìŠ¤", "ë°”ìš°ë‚˜í", "ì•„ë¹„ë¸Œ", "ë¯¸ìŠ¤ë¼", "ë‚˜ì‹œ"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            dangi: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["ë§¤ìŠ¤ìºëž¨", "í…Œì¼íŠ¸", "í—¤ë‹¤ë¥´", "íƒ€íì‚¬ìŠ¤", "í…Œë¥´", "ì–˜ì¹´í‹°íŠ¸", "ë§¤ê°€ë¹„íŠ¸", "ë¯¸ì•¼ì§€ì•¼", "ê²ë³´íŠ¸", "ìƒˆë„¤", "í•¨ë ˆ", "ë‚´í•˜ì„¸", "íŒŒêµ¬ë§¨"],
                    long: ["ë§¤ìŠ¤ìºëž¨", "í…Œì¼íŠ¸", "í—¤ë‹¤ë¥´", "íƒ€íì‚¬ìŠ¤", "í…Œë¥´", "ì–˜ì¹´í‹°íŠ¸", "ë§¤ê°€ë¹„íŠ¸", "ë¯¸ì•¼ì§€ì•¼", "ê²ë³´íŠ¸", "ìƒˆë„¤", "í•¨ë ˆ", "ë‚´í•˜ì„¸", "íŒŒêµ¬ë§¨"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["ë§¤ìŠ¤ìºëž¨", "í…Œì¼íŠ¸", "í—¤ë‹¤ë¥´", "íƒ€íì‚¬ìŠ¤", "í…Œë¥´", "ì–˜ì¹´í‹°íŠ¸", "ë§¤ê°€ë¹„íŠ¸", "ë¯¸ì•¼ì§€ì•¼", "ê²ë³´íŠ¸", "ìƒˆë„¤", "í•¨ë ˆ", "ë‚´í•˜ì„¸", "íŒŒêµ¬ë§¨"],
                    long: ["ë§¤ìŠ¤ìºëž¨", "í…Œì¼íŠ¸", "í—¤ë‹¤ë¥´", "íƒ€íì‚¬ìŠ¤", "í…Œë¥´", "ì–˜ì¹´í‹°íŠ¸", "ë§¤ê°€ë¹„íŠ¸", "ë¯¸ì•¼ì§€ì•¼", "ê²ë³´íŠ¸", "ìƒˆë„¤", "í•¨ë ˆ", "ë‚´í•˜ì„¸", "íŒŒêµ¬ë§¨"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            gregory: {
                months: {
                    narrow: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["BC", "AD", "BCE", "CE"],
                    short: ["BC", "AD", "BCE", "CE"],
                    long: ["ê¸°ì›ì „", "ì„œê¸°", "BCE", "CE"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["ë””ìŠ¤ë¦¬ì›”", "ë§ì¼€ìŠ¤ì›”", "ê¸°ìŠ¬ë¥´ì›”", "ë°ë²³ì›”", "ìŠ¤ë°§ì›”", "ì•„ë‹¬ì›” 1", "ì•„ë‹¬ì›”", "ë‹›ì‚°ì›”", "ì´ì•¼ë¥´ì›”", "ì‹œì™„ì›”", "ë‹´ë¬´ë¥´ì›”", "ì••ì›”", "ì—˜ë£°ì›”", "ì•„ë‹¬ì›” 2"],
                    long: ["ë””ìŠ¤ë¦¬ì›”", "ë§ì¼€ìŠ¤ì›”", "ê¸°ìŠ¬ë¥´ì›”", "ë°ë²³ì›”", "ìŠ¤ë°§ì›”", "ì•„ë‹¬ì›” 1", "ì•„ë‹¬ì›”", "ë‹›ì‚°ì›”", "ì´ì•¼ë¥´ì›”", "ì‹œì™„ì›”", "ë‹´ë¬´ë¥´ì›”", "ì••ì›”", "ì—˜ë£°ì›”", "ì•„ë‹¬ì›” 2"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["AM"],
                    short: ["AM"],
                    long: ["AM"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["Saka"],
                    short: ["Saka"],
                    long: ["Saka"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["ë¬´í•˜ëžŒ", "ì‚¬íŒŒë¥´", "ë¼ë¹„ ì•Œ ì•„ì™ˆ", "ë¼ë¹„ ì•Œ ìŽ„ë‹ˆ", "ì£¼ë§ˆë‹¤ ì•Œ ì•„ì™ˆ", "ì£¼ë§ˆë‹¤ ì•Œ ìŽ„ë‹ˆ", "ë¼ìž¡", "ì‰ì•„ë°˜", "ë¼ë§ˆë‹¨", "ì‰ì™ˆ", "ë“€ ì•Œ ê¹Œë‹¤", "ë“€ ì•Œ ížˆìž"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "DhuÊ»l-Q.", "DhuÊ»l-H."],
                    long: ["ë¬´í•˜ëžŒ", "ì‚¬íŒŒë¥´", "ë¼ë¹„ ì•Œ ì•„ì™ˆ", "ë¼ë¹„ ì•Œ ìŽ„ë‹ˆ", "ì£¼ë§ˆë‹¤ ì•Œ ì•„ì™ˆ", "ì£¼ë§ˆë‹¤ ì•Œ ìŽ„ë‹ˆ", "ë¼ìž¡", "ì‰ì•„ë°˜", "ë¼ë§ˆë‹¨", "ì‰ì™ˆ", "ë“€ ì•Œ ê¹Œë‹¤", "ë“€ ì•Œ ížˆìž"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["AH"],
                    short: ["AH"],
                    long: ["AH"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            japanese: {
                months: {
                    narrow: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["ë‹¤ì´ì¹´ (645 ~ 650)", "í•˜ì¿ ì¹˜ (650 ~ 671)", "í•˜ì¿ í˜¸ (672 ~ 686)", "ìŠˆì´ˆ (686 ~ 701)", "ë‹¤ì´í˜¸ (701 ~ 704)", "ê²Œì´ìš´ (704 ~ 708)", "ì™€ë„ (708 ~ 715)", "ë ˆì´í‚¤ (715 ~ 717)", "ìš”ë¡œ (717 ~ 724)", "ì§„í‚¤ (724 ~ 729)", "ë´í‘œ (729 ~ 749)", "ë´í‘œì¹¸í¬ (749 ~ 749)", "ë´í‘œì‡¼í˜¸ (749 ~ 757)", "ë´í‘œí˜¸ì§€ (757 ~ 765)", "ë´í‘œì§„ê³  (765 ~ 767)", "ì§„ê³ ì¼€ì´ìš´ (767 ~ 770)", "í˜¸í‚¤ (770 ~ 780)", "ë´ì˜¤ (781 ~ 782)", "ì—”ëž´ì¿  (782 ~ 806)", "ë‹¤ì´ë„ (806 ~ 810)", "ê³ ë‹Œ (810 ~ 824)", "ë´ì´ˆ (824 ~ 834)", "ì¡°ì™€ (834 ~ 848)", "ê°€ì‡¼ (848 ~ 851)", "ë‹Œì£¼ (851 ~ 854)", "ì‚¬ì´ì½” (854 ~ 857)", "ë´ë‚œ (857 ~ 859)", "ì¡°ê°„ (859 ~ 877)", "ê°„êµ (877 ~ 885)", "ë‹Œë‚˜ (885 ~ 889)", "ê°„í‘œ (889 ~ 898)", "ì‡¼íƒ€ì´ (898 ~ 901)", "ì—”ê¸° (901 ~ 923)", "ì—”ì´ˆ (923 ~ 931)", "ì¡°í—¤ì´ (931 ~ 938)", "ë´êµ (938 ~ 947)", "ë´ëž´ì¿  (947 ~ 957)", "ë´í† ì¿  (957 ~ 961)", "ì˜¤ì™€ (961 ~ 964)", "ê³ í˜¸ (964 ~ 968)", "ì•ˆë‚˜ (968 ~ 970)", "ë´ë¡œì¿  (970 ~ 973)", "ë´ì—” (973 ~ 976)", "ì¡°ê² (976 ~ 978)", "ë´ê² (978 ~ 983)", "ì—ì´ê°„ (983 ~ 985)", "ê°„ë‚˜ (985 ~ 987)", "ì—ì´ì—” (987 ~ 989)", "ì—ì´ì†Œ (989 ~ 990)", "ì‡¼ëž´ì¿  (990 ~ 995)", "ì¡°í† ì¿  (995 ~ 999)", "ì¡°í˜¸ (999 ~ 1004)", "ê°„ì½” (1004 ~ 1012)", "ì¡°ì™€ (1012 ~ 1017)", "ê°„ë‹Œ (1017 ~ 1021)", "ì§€ì•ˆ (1021 ~ 1024)", "ë§Œì£¼ (1024 ~ 1028)", "ì¡°ê² (1028 ~ 1037)", "ì¡°ëž´ì¿  (1037 ~ 1040)", "ì¡°í (1040 ~ 1044)", "ê°„í† ì¿  (1044 ~ 1046)", "ì—ì´ì‡¼ (1046 ~ 1053)", "ë´ê¸° (1053 ~ 1058)", "ê³ í—¤ì´ (1058 ~ 1065)", "ì§€ëž´ì¿  (1065 ~ 1069)", "ì—”í (1069 ~ 1074)", "ì¡°í˜¸ (1074 ~ 1077)", "ì‡¼ëž´ì¿  (1077 ~ 1081)", "ì—ì´í˜¸ (1081 ~ 1084)", "ì˜¤í† ì¿  (1084 ~ 1087)", "ê°„ì§€ (1087 ~ 1094)", "ê°€í˜¸ (1094 ~ 1096)", "ì—ì´ì´ˆ (1096 ~ 1097)", "ì¡°í† ì¿  (1097 ~ 1099)", "ê³ ì™€ (1099 ~ 1104)", "ì¡°ì§€ (1104 ~ 1106)", "ê°€ì‡¼ (1106 ~ 1108)", "ë´ë‹Œ (1108 ~ 1110)", "ë´ì—ì´ (1110 ~ 1113)", "ì—ì´í (1113 ~ 1118)", "ê²ì—ì´ (1118 ~ 1120)", "í˜¸ì•ˆ (1120 ~ 1124)", "ë´ì§€ (1124 ~ 1126)", "ë‹¤ì´ì§€ (1126 ~ 1131)", "ë´ì‡¼ (1131 ~ 1132)", "ì¡°ì‡¼ (1132 ~ 1135)", "í˜¸ì—” (1135 ~ 1141)", "ì—ì´ì§€ (1141 ~ 1142)", "ê³ ì§€ (1142 ~ 1144)", "ë´ìš” (1144 ~ 1145)", "ê·œì•ˆ (1145 ~ 1151)", "ë‹ŒíŽ˜ì´ (1151 ~ 1154)", "ê·œì£¼ (1154 ~ 1156)", "í˜¸ê² (1156 ~ 1159)", "í—¤ì´ì§€ (1159 ~ 1160)", "ì—ì´ëž´ì¿  (1160 ~ 1161)", "ì˜¤í˜¸ (1161 ~ 1163)", "ì¡°ì¹¸ (1163 ~ 1165)", "ì—ì´ë§Œ (1165 ~ 1166)", "ë‹Œë‚œ (1166 ~ 1169)", "ê°€ì˜¤ (1169 ~ 1171)", "ì¡°ì•ˆ (1171 ~ 1175)", "ì•ˆê² (1175 ~ 1177)", "ì§€ì‡¼ (1177 ~ 1181)", "ìš”ì™€ (1181 ~ 1182)", "ì£¼ì—ì´ (1182 ~ 1184)", "ê²ëž´ì¿  (1184 ~ 1185)", "ë¶„ì§€ (1185 ~ 1190)", "ê²í (1190 ~ 1199)", "ì‡¼ì§€ (1199 ~ 1201)", "ê²ë‹Œ (1201 ~ 1204)", "ê²í (1204 ~ 1206)", "ê²ì—ì´ (1206 ~ 1207)", "ì¡°ê² (1207 ~ 1211)", "ê²ëž´ì¿  (1211 ~ 1213)", "ê²í¬ (1213 ~ 1219)", "ì¡°í (1219 ~ 1222)", "ì¡°ì˜¤ (1222 ~ 1224)", "ê²ë‹Œ (1224 ~ 1225)", "ê°€ë¡œì¿  (1225 ~ 1227)", "ì•ˆí…Œì´ (1227 ~ 1229)", "ê°„í‚¤ (1229 ~ 1232)", "ì¡°ì—ì´ (1232 ~ 1233)", "ë´í‘¸ì¿  (1233 ~ 1234)", "ë¶„ëž´ì¿  (1234 ~ 1235)", "ê°€í…Œì´ (1235 ~ 1238)", "ëž´ì¿ ë‹Œ (1238 ~ 1239)", "ì—”ì˜¤ (1239 ~ 1240)", "ë‹Œì§€ (1240 ~ 1243)", "ê°„ê² (1243 ~ 1247)", "í˜¸ì§€ (1247 ~ 1249)", "ê²ì´ˆ (1249 ~ 1256)", "ê³ ê² (1256 ~ 1257)", "ì‡¼ì¹´ (1257 ~ 1259)", "ì‡¼ê² (1259 ~ 1260)", "ë¶„ì˜¤ (1260 ~ 1261)", "ê³ ì´ˆ (1261 ~ 1264)", "ë¶„ì—ì´ (1264 ~ 1275)", "ê²ì§€ (1275 ~ 1278)", "ê³ ì•ˆ (1278 ~ 1288)", "ì‡¼ì˜¤ (1288 ~ 1293)", "ì—ì´ë‹Œ (1293 ~ 1299)", "ì‡¼ì•ˆ (1299 ~ 1302)", "ê²ê² (1302 ~ 1303)", "ê°€ê² (1303 ~ 1306)", "ë„ì¿ ì§€ (1306 ~ 1308)", "ì—”ì¿„ (1308 ~ 1311)", "ì˜¤ì´ˆ (1311 ~ 1312)", "ì‡¼ì™€ (1312 ~ 1317)", "ë¶„í¬ (1317 ~ 1319)", "ê²ì˜¤ (1319 ~ 1321)", "ê²ì½” (1321 ~ 1324)", "ì‡¼ì¶” (1324 ~ 1326)", "ê°€ëž´ì¿  (1326 ~ 1329)", "ê²í† ì¿  (1329 ~ 1331)", "ê²ì½” (1331 ~ 1334)", "ê²ë¬´ (1334 ~ 1336)", "ì—”ê² (1336 ~ 1340)", "ê³ ì½”ì¿  (1340 ~ 1346)", "ì‡¼í—¤ì´ (1346 ~ 1370)", "ê²í† ì¿  (1370 ~ 1372)", "ë¶„ì¶” (1372 ~ 1375)", "ë´ì£¼ (1375 ~ 1379)", "ê³ ëž´ì¿  (1379 ~ 1381)", "ê³ ì™€ (1381 ~ 1384)", "ê²ì¶” (1384 ~ 1392)", "ë©”ì´í† ì¿  (1384 ~ 1387)", "ê°€ì¿„ (1387 ~ 1389)", "ê³ ì˜¤ (1389 ~ 1390)", "ë©”ì´í† ì¿  (1390 ~ 1394)", "ì˜¤ì—ì´ (1394 ~ 1428)", "ì‡¼ì´ˆ (1428 ~ 1429)", "ì—ì´ì¿„ (1429 ~ 1441)", "ê°€í‚¤ì“° (1441 ~ 1444)", "ë¶„ì•ˆ (1444 ~ 1449)", "í˜¸í† ì¿  (1449 ~ 1452)", "êµí† ì¿  (1452 ~ 1455)", "ê³ ì‡¼ (1455 ~ 1457)", "ì¡°ë¡œì¿  (1457 ~ 1460)", "ê°„ì‡¼ (1460 ~ 1466)", "ë¶„ì‡¼ (1466 ~ 1467)", "ì˜¤ë‹Œ (1467 ~ 1469)", "ë¶„ë©”ì´ (1469 ~ 1487)", "ì¡°ì¿„ (1487 ~ 1489)<", "ì—”í† ì¿  (1489 ~ 1492)", "ë©”ì´ì˜¤ (1492 ~ 1501)", "ë¶„í‚¤ (1501 ~ 1504)", "ì—ì´ì‡¼ (1504 ~ 1521)", "ë‹¤ì´ì—ì´ (1521 ~ 1528)", "êµë¡œì¿  (1528 ~ 1532)", "ë´ë¶„ (1532 ~ 1555)", "ê³ ì§€ (1555 ~ 1558)", "ì—ì´ë¡œì¿  (1558 ~ 1570)", "ê²í‚¤ (1570 ~ 1573)", "ë´ì‡¼ (1573 ~ 1592)", "ë¶„ë¡œì¿  (1592 ~ 1596)", "ê²Œì´ì´ˆ (1596 ~ 1615)", "ê²ë‚˜ (1615 ~ 1624)", "ê°„ì—ì´ (1624 ~ 1644)", "ì‡¼í˜¸ (1644 ~ 1648)", "ê²Œì´ì•ˆ (1648 ~ 1652)", "ì¡°ì˜¤ (1652 ~ 1655)", "ë©”ì´ë ˆí‚¤ (1655 ~ 1658)", "ë§Œì§€ (1658 ~ 1661)", "ê°„ë¶„ (1661 ~ 1673)", "ì—”í¬ (1673 ~ 1681)", "ë´ë‚˜ (1681 ~ 1684)", "ì¡°ì¿„ (1684 ~ 1688)", "ê²ë¡œì¿  (1688 ~ 1704)", "í˜¸ì—ì´ (1704 ~ 1711)", "ì‡¼í† ì¿  (1711 ~ 1716)", "êµí˜¸ (1716 ~ 1736)", "ê²ë¶„ (1736 ~ 1741)", "ê°„í¬ (1741 ~ 1744)", "ì—”ì¿„ (1744 ~ 1748)", "ê°„ì—” (1748 ~ 1751)", "í˜¸ë ˆí‚¤ (1751 ~ 1764)", "ë©”ì´ì™€ (1764 ~ 1772)", "ì•ˆì—ì´ (1772 ~ 1781)", "ë´ë©”ì´ (1781 ~ 1789)", "ê°„ì„¸ì´ (1789 ~ 1801)", "êµì™€ (1801 ~ 1804)", "ë¶„ì¹´ (1804 ~ 1818)", "ë¶„ì„¸ì´ (1818 ~ 1830)", "ë´í¬ (1830 ~ 1844)", "ê³ ì¹´ (1844 ~ 1848)", "ê°€ì—ì´ (1848 ~ 1854)", "ì•ˆì„¸ì´ (1854 ~ 1860)", "ë§Œì—” (1860 ~ 1861)", "ë¶„í (1861 ~ 1864)", "ê²ì§€ (1864 ~ 1865)", "ê²Œì´ì˜¤ (1865 ~ 1868)", "ë©”ì´ì§€", "ë‹¤ì´ì‡¼", "ì‡¼ì™€", "í—¤ì´ì„¸ì´"],
                    long: ["ë‹¤ì´ì¹´ (645 ~ 650)", "í•˜ì¿ ì¹˜ (650 ~ 671)", "í•˜ì¿ í˜¸ (672 ~ 686)", "ìŠˆì´ˆ (686 ~ 701)", "ë‹¤ì´í˜¸ (701 ~ 704)", "ê²Œì´ìš´ (704 ~ 708)", "ì™€ë„ (708 ~ 715)", "ë ˆì´í‚¤ (715 ~ 717)", "ìš”ë¡œ (717 ~ 724)", "ì§„í‚¤ (724 ~ 729)", "ë´í‘œ (729 ~ 749)", "ë´í‘œì¹¸í¬ (749 ~ 749)", "ë´í‘œì‡¼í˜¸ (749 ~ 757)", "ë´í‘œí˜¸ì§€ (757 ~ 765)", "ë´í‘œì§„ê³  (765 ~ 767)", "ì§„ê³ ì¼€ì´ìš´ (767 ~ 770)", "í˜¸í‚¤ (770 ~ 780)", "ë´ì˜¤ (781 ~ 782)", "ì—”ëž´ì¿  (782 ~ 806)", "ë‹¤ì´ë„ (806 ~ 810)", "ê³ ë‹Œ (810 ~ 824)", "ë´ì´ˆ (824 ~ 834)", "ì¡°ì™€ (834 ~ 848)", "ê°€ì‡¼ (848 ~ 851)", "ë‹Œì£¼ (851 ~ 854)", "ì‚¬ì´ì½” (854 ~ 857)", "ë´ë‚œ (857 ~ 859)", "ì¡°ê°„ (859 ~ 877)", "ê°„êµ (877 ~ 885)", "ë‹Œë‚˜ (885 ~ 889)", "ê°„í‘œ (889 ~ 898)", "ì‡¼íƒ€ì´ (898 ~ 901)", "ì—”ê¸° (901 ~ 923)", "ì—”ì´ˆ (923 ~ 931)", "ì¡°í—¤ì´ (931 ~ 938)", "ë´êµ (938 ~ 947)", "ë´ëž´ì¿  (947 ~ 957)", "ë´í† ì¿  (957 ~ 961)", "ì˜¤ì™€ (961 ~ 964)", "ê³ í˜¸ (964 ~ 968)", "ì•ˆë‚˜ (968 ~ 970)", "ë´ë¡œì¿  (970 ~ 973)", "ë´ì—” (973 ~ 976)", "ì¡°ê² (976 ~ 978)", "ë´ê² (978 ~ 983)", "ì—ì´ê°„ (983 ~ 985)", "ê°„ë‚˜ (985 ~ 987)", "ì—ì´ì—” (987 ~ 989)", "ì—ì´ì†Œ (989 ~ 990)", "ì‡¼ëž´ì¿  (990 ~ 995)", "ì¡°í† ì¿  (995 ~ 999)", "ì¡°í˜¸ (999 ~ 1004)", "ê°„ì½” (1004 ~ 1012)", "ì¡°ì™€ (1012 ~ 1017)", "ê°„ë‹Œ (1017 ~ 1021)", "ì§€ì•ˆ (1021 ~ 1024)", "ë§Œì£¼ (1024 ~ 1028)", "ì¡°ê² (1028 ~ 1037)", "ì¡°ëž´ì¿  (1037 ~ 1040)", "ì¡°í (1040 ~ 1044)", "ê°„í† ì¿  (1044 ~ 1046)", "ì—ì´ì‡¼ (1046 ~ 1053)", "ë´ê¸° (1053 ~ 1058)", "ê³ í—¤ì´ (1058 ~ 1065)", "ì§€ëž´ì¿  (1065 ~ 1069)", "ì—”í (1069 ~ 1074)", "ì¡°í˜¸ (1074 ~ 1077)", "ì‡¼ëž´ì¿  (1077 ~ 1081)", "ì—ì´í˜¸ (1081 ~ 1084)", "ì˜¤í† ì¿  (1084 ~ 1087)", "ê°„ì§€ (1087 ~ 1094)", "ê°€í˜¸ (1094 ~ 1096)", "ì—ì´ì´ˆ (1096 ~ 1097)", "ì¡°í† ì¿  (1097 ~ 1099)", "ê³ ì™€ (1099 ~ 1104)", "ì¡°ì§€ (1104 ~ 1106)", "ê°€ì‡¼ (1106 ~ 1108)", "ë´ë‹Œ (1108 ~ 1110)", "ë´ì—ì´ (1110 ~ 1113)", "ì—ì´í (1113 ~ 1118)", "ê²ì—ì´ (1118 ~ 1120)", "í˜¸ì•ˆ (1120 ~ 1124)", "ë´ì§€ (1124 ~ 1126)", "ë‹¤ì´ì§€ (1126 ~ 1131)", "ë´ì‡¼ (1131 ~ 1132)", "ì¡°ì‡¼ (1132 ~ 1135)", "í˜¸ì—” (1135 ~ 1141)", "ì—ì´ì§€ (1141 ~ 1142)", "ê³ ì§€ (1142 ~ 1144)", "ë´ìš” (1144 ~ 1145)", "ê·œì•ˆ (1145 ~ 1151)", "ë‹ŒíŽ˜ì´ (1151 ~ 1154)", "ê·œì£¼ (1154 ~ 1156)", "í˜¸ê² (1156 ~ 1159)", "í—¤ì´ì§€ (1159 ~ 1160)", "ì—ì´ëž´ì¿  (1160 ~ 1161)", "ì˜¤í˜¸ (1161 ~ 1163)", "ì¡°ì¹¸ (1163 ~ 1165)", "ì—ì´ë§Œ (1165 ~ 1166)", "ë‹Œë‚œ (1166 ~ 1169)", "ê°€ì˜¤ (1169 ~ 1171)", "ì¡°ì•ˆ (1171 ~ 1175)", "ì•ˆê² (1175 ~ 1177)", "ì§€ì‡¼ (1177 ~ 1181)", "ìš”ì™€ (1181 ~ 1182)", "ì£¼ì—ì´ (1182 ~ 1184)", "ê²ëž´ì¿  (1184 ~ 1185)", "ë¶„ì§€ (1185 ~ 1190)", "ê²í (1190 ~ 1199)", "ì‡¼ì§€ (1199 ~ 1201)", "ê²ë‹Œ (1201 ~ 1204)", "ê²í (1204 ~ 1206)", "ê²ì—ì´ (1206 ~ 1207)", "ì¡°ê² (1207 ~ 1211)", "ê²ëž´ì¿  (1211 ~ 1213)", "ê²í¬ (1213 ~ 1219)", "ì¡°í (1219 ~ 1222)", "ì¡°ì˜¤ (1222 ~ 1224)", "ê²ë‹Œ (1224 ~ 1225)", "ê°€ë¡œì¿  (1225 ~ 1227)", "ì•ˆí…Œì´ (1227 ~ 1229)", "ê°„í‚¤ (1229 ~ 1232)", "ì¡°ì—ì´ (1232 ~ 1233)", "ë´í‘¸ì¿  (1233 ~ 1234)", "ë¶„ëž´ì¿  (1234 ~ 1235)", "ê°€í…Œì´ (1235 ~ 1238)", "ëž´ì¿ ë‹Œ (1238 ~ 1239)", "ì—”ì˜¤ (1239 ~ 1240)", "ë‹Œì§€ (1240 ~ 1243)", "ê°„ê² (1243 ~ 1247)", "í˜¸ì§€ (1247 ~ 1249)", "ê²ì´ˆ (1249 ~ 1256)", "ê³ ê² (1256 ~ 1257)", "ì‡¼ì¹´ (1257 ~ 1259)", "ì‡¼ê² (1259 ~ 1260)", "ë¶„ì˜¤ (1260 ~ 1261)", "ê³ ì´ˆ (1261 ~ 1264)", "ë¶„ì—ì´ (1264 ~ 1275)", "ê²ì§€ (1275 ~ 1278)", "ê³ ì•ˆ (1278 ~ 1288)", "ì‡¼ì˜¤ (1288 ~ 1293)", "ì—ì´ë‹Œ (1293 ~ 1299)", "ì‡¼ì•ˆ (1299 ~ 1302)", "ê²ê² (1302 ~ 1303)", "ê°€ê² (1303 ~ 1306)", "ë„ì¿ ì§€ (1306 ~ 1308)", "ì—”ì¿„ (1308 ~ 1311)", "ì˜¤ì´ˆ (1311 ~ 1312)", "ì‡¼ì™€ (1312 ~ 1317)", "ë¶„í¬ (1317 ~ 1319)", "ê²ì˜¤ (1319 ~ 1321)", "ê²ì½” (1321 ~ 1324)", "ì‡¼ì¶” (1324 ~ 1326)", "ê°€ëž´ì¿  (1326 ~ 1329)", "ê²í† ì¿  (1329 ~ 1331)", "ê²ì½” (1331 ~ 1334)", "ê²ë¬´ (1334 ~ 1336)", "ì—”ê² (1336 ~ 1340)", "ê³ ì½”ì¿  (1340 ~ 1346)", "ì‡¼í—¤ì´ (1346 ~ 1370)", "ê²í† ì¿  (1370 ~ 1372)", "ë¶„ì¶” (1372 ~ 1375)", "ë´ì£¼ (1375 ~ 1379)", "ê³ ëž´ì¿  (1379 ~ 1381)", "ê³ ì™€ (1381 ~ 1384)", "ê²ì¶” (1384 ~ 1392)", "ë©”ì´í† ì¿  (1384 ~ 1387)", "ê°€ì¿„ (1387 ~ 1389)", "ê³ ì˜¤ (1389 ~ 1390)", "ë©”ì´í† ì¿  (1390 ~ 1394)", "ì˜¤ì—ì´ (1394 ~ 1428)", "ì‡¼ì´ˆ (1428 ~ 1429)", "ì—ì´ì¿„ (1429 ~ 1441)", "ê°€í‚¤ì“° (1441 ~ 1444)", "ë¶„ì•ˆ (1444 ~ 1449)", "í˜¸í† ì¿  (1449 ~ 1452)", "êµí† ì¿  (1452 ~ 1455)", "ê³ ì‡¼ (1455 ~ 1457)", "ì¡°ë¡œì¿  (1457 ~ 1460)", "ê°„ì‡¼ (1460 ~ 1466)", "ë¶„ì‡¼ (1466 ~ 1467)", "ì˜¤ë‹Œ (1467 ~ 1469)", "ë¶„ë©”ì´ (1469 ~ 1487)", "ì¡°ì¿„ (1487 ~ 1489)<", "ì—”í† ì¿  (1489 ~ 1492)", "ë©”ì´ì˜¤ (1492 ~ 1501)", "ë¶„í‚¤ (1501 ~ 1504)", "ì—ì´ì‡¼ (1504 ~ 1521)", "ë‹¤ì´ì—ì´ (1521 ~ 1528)", "êµë¡œì¿  (1528 ~ 1532)", "ë´ë¶„ (1532 ~ 1555)", "ê³ ì§€ (1555 ~ 1558)", "ì—ì´ë¡œì¿  (1558 ~ 1570)", "ê²í‚¤ (1570 ~ 1573)", "ë´ì‡¼ (1573 ~ 1592)", "ë¶„ë¡œì¿  (1592 ~ 1596)", "ê²Œì´ì´ˆ (1596 ~ 1615)", "ê²ë‚˜ (1615 ~ 1624)", "ê°„ì—ì´ (1624 ~ 1644)", "ì‡¼í˜¸ (1644 ~ 1648)", "ê²Œì´ì•ˆ (1648 ~ 1652)", "ì¡°ì˜¤ (1652 ~ 1655)", "ë©”ì´ë ˆí‚¤ (1655 ~ 1658)", "ë§Œì§€ (1658 ~ 1661)", "ê°„ë¶„ (1661 ~ 1673)", "ì—”í¬ (1673 ~ 1681)", "ë´ë‚˜ (1681 ~ 1684)", "ì¡°ì¿„ (1684 ~ 1688)", "ê²ë¡œì¿  (1688 ~ 1704)", "í˜¸ì—ì´ (1704 ~ 1711)", "ì‡¼í† ì¿  (1711 ~ 1716)", "êµí˜¸ (1716 ~ 1736)", "ê²ë¶„ (1736 ~ 1741)", "ê°„í¬ (1741 ~ 1744)", "ì—”ì¿„ (1744 ~ 1748)", "ê°„ì—” (1748 ~ 1751)", "í˜¸ë ˆí‚¤ (1751 ~ 1764)", "ë©”ì´ì™€ (1764 ~ 1772)", "ì•ˆì—ì´ (1772 ~ 1781)", "ë´ë©”ì´ (1781 ~ 1789)", "ê°„ì„¸ì´ (1789 ~ 1801)", "êµì™€ (1801 ~ 1804)", "ë¶„ì¹´ (1804 ~ 1818)", "ë¶„ì„¸ì´ (1818 ~ 1830)", "ë´í¬ (1830 ~ 1844)", "ê³ ì¹´ (1844 ~ 1848)", "ê°€ì—ì´ (1848 ~ 1854)", "ì•ˆì„¸ì´ (1854 ~ 1860)", "ë§Œì—” (1860 ~ 1861)", "ë¶„í (1861 ~ 1864)", "ê²ì§€ (1864 ~ 1865)", "ê²Œì´ì˜¤ (1865 ~ 1868)", "ë©”ì´ì§€", "ë‹¤ì´ì‡¼", "ì‡¼ì™€", "í—¤ì´ì„¸ì´"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["í™”ë¥´ë°”ë”˜", "ì˜¤ë¥´ë””ë² í—¤ì‰¬íŠ¸", "í˜¸ë¥´ë‹¤ë“œ", "í‹°ë¥´", "ëª¨ë¥´ë‹¤ë“œ", "ìƒ¤íë¦¬ë°”ë¥´", "ë©”íë¥´", "ì•„ë°˜", "ì•„ìžë¥´", "ë‹¤ì´", "ë°”íë§Œ", "ì—ìŠ¤íŒë“œ"],
                    long: ["í™”ë¥´ë°”ë”˜", "ì˜¤ë¥´ë””ë² í—¤ì‰¬íŠ¸", "í˜¸ë¥´ë‹¤ë“œ", "í‹°ë¥´", "ëª¨ë¥´ë‹¤ë“œ", "ìƒ¤íë¦¬ë°”ë¥´", "ë©”íë¥´", "ì•„ë°˜", "ì•„ìžë¥´", "ë‹¤ì´", "ë°”íë§Œ", "ì—ìŠ¤íŒë“œ"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["AP"],
                    short: ["AP"],
                    long: ["AP"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            },
            roc: {
                months: {
                    narrow: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    short: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
                    long: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"]
                },
                days: {
                    narrow: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    short: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
                    long: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
                },
                eras: {
                    narrow: ["ì¤‘í™”ë¯¼êµ­ì „", "ì¤‘í™”ë¯¼êµ­"],
                    short: ["ì¤‘í™”ë¯¼êµ­ì „", "ì¤‘í™”ë¯¼êµ­"],
                    long: ["ì¤‘í™”ë¯¼êµ­ì „", "ì¤‘í™”ë¯¼êµ­"]
                },
                dayPeriods: {
                    am: "ì˜¤ì „",
                    pm: "ì˜¤í›„"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
            },
            percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
            }
        },
        symbols: {
            latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CNÂ¥",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "JPÂ¥",
            KRW: "â‚©",
            MXN: "MX$",
            NZD: "NZ$",
            THB: "à¸¿",
            TWD: "NT$",
            USD: "US$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/zh-Hans-CN.js
IntlPolyfill.__addLocaleData({
    locale: "zh-Hans-CN",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !0,
        formats: {
            short: "{1} {0}",
            medium: "{1} {0}",
            full: "{1} {0}",
            long: "{1} {0}",
            availableFormats: {
                d: "dæ—¥",
                E: "ccc",
                Ed: "dæ—¥E",
                Ehm: "E ah:mm",
                EHm: "EHH:mm",
                Ehms: "E ah:mm:ss",
                EHms: "EHH:mm:ss",
                Gy: "Gyå¹´",
                GyMMM: "Gyå¹´Mæœˆ",
                GyMMMd: "Gyå¹´Mæœˆdæ—¥",
                GyMMMEd: "Gyå¹´Mæœˆdæ—¥E",
                h: "ahæ—¶",
                H: "Hæ—¶",
                hm: "ah:mm",
                Hm: "HH:mm",
                hms: "ah:mm:ss",
                Hms: "HH:mm:ss",
                hmsv: "v ah:mm:ss",
                Hmsv: "v HH:mm:ss",
                hmv: "v ah:mm",
                Hmv: "v HH:mm",
                M: "Mæœˆ",
                Md: "M/d",
                MEd: "M/dE",
                MMdd: "MM/dd",
                MMM: "LLL",
                MMMd: "Mæœˆdæ—¥",
                MMMEd: "Mæœˆdæ—¥E",
                MMMMd: "Mæœˆdæ—¥",
                ms: "mm:ss",
                y: "yå¹´",
                yM: "yå¹´Mæœˆ",
                yMd: "y/M/d",
                yMEd: "y/M/dE",
                yMM: "yå¹´Mæœˆ",
                yMMM: "yå¹´Mæœˆ",
                yMMMd: "yå¹´Mæœˆdæ—¥",
                yMMMEd: "yå¹´Mæœˆdæ—¥E",
                yMMMM: "yå¹´Mæœˆ",
                yQQQ: "yå¹´ç¬¬Qå­£åº¦",
                yQQQQ: "yå¹´ç¬¬Qå­£åº¦"
            },
            dateFormats: {
                yMMMMEEEEd: "yå¹´Mæœˆdæ—¥EEEE",
                yMMMMd: "yå¹´Mæœˆdæ—¥",
                yMMMd: "yå¹´Mæœˆdæ—¥",
                yMd: "y/M/d"
            },
            timeFormats: {
                hmmsszzzz: "zzzz ah:mm:ss",
                hmsz: "z ah:mm:ss",
                hms: "ah:mm:ss",
                hm: "ah:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä½›åŽ†"],
                    short: ["ä½›åŽ†"],
                    long: ["ä½›åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            chinese: {
                months: {
                    narrow: ["æ­£", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "å†¬", "è…Š"],
                    short: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è…Šæœˆ"],
                    long: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è…Šæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ", "åä¸‰æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            dangi: {
                months: {
                    narrow: ["æ­£", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "å†¬", "è…Š"],
                    short: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è…Šæœˆ"],
                    long: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è…Šæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ", "åä¸‰æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ", "åä¸‰æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            gregory: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["å…¬å…ƒå‰", "å…¬å…ƒ", "è¥¿å…ƒå‰", "è¥¿å…ƒ"],
                    short: ["å…¬å…ƒå‰", "å…¬å…ƒ", "è¥¿å…ƒå‰", "è¥¿å…ƒ"],
                    long: ["å…¬å…ƒå‰", "å…¬å…ƒ", "è¥¿å…ƒå‰", "è¥¿å…ƒ"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ", "é—°7æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ", "åä¸‰æœˆ", "é—°ä¸ƒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["å¸Œä¼¯æ¥åŽ†"],
                    short: ["å¸Œä¼¯æ¥åŽ†"],
                    long: ["å¸Œä¼¯æ¥åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["å°åº¦åŽ†"],
                    short: ["å°åº¦åŽ†"],
                    long: ["å°åº¦åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä¼Šæ–¯å…°åŽ†"],
                    short: ["ä¼Šæ–¯å…°åŽ†"],
                    long: ["ä¼Šæ–¯å…°åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä¼Šæ–¯å…°åŽ†"],
                    short: ["ä¼Šæ–¯å…°åŽ†"],
                    long: ["ä¼Šæ–¯å…°åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            japanese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["å¤§åŒ– (645â€“650)", "ç™½é›‰ (650â€“671)", "ç™½å‡¤ (672â€“686)", "æœ±é¸Ÿ (686â€“701)", "å¤§å® (701â€“704)", "åº†äº‘ (704â€“708)", "å’Œé“œ (708â€“715)", "çµé¾Ÿ (715â€“717)", "å…»è€ (717â€“724)", "ç¥žé¾Ÿ (724â€“729)", "å¤©å¹³ (729â€“749)", "å¤©å¹³æ„Ÿå® (749â€“749)", "å¤©å¹³èƒœå® (749â€“757)", "å¤©å¹³å®å­— (757â€“765)", "å¤©å¹³ç¥žæŠ¤ (765â€“767)", "ç¥žæŠ¤æ™¯äº‘ (767â€“770)", "å®é¾Ÿ (770â€“780)", "å¤©åº” (781â€“782)", "å»¶åŽ† (782â€“806)", "å¤§åŒ (806â€“810)", "å¼˜ä» (810â€“824)", "å¤©é•¿ (824â€“834)", "æ‰¿å’Œ (834â€“848)", "å˜‰ç¥¥ (848â€“851)", "ä»å¯¿ (851â€“854)", "é½è¡¡ (854â€“857)", "å¤©å®‰ (857â€“859)", "è´žè§‚ (859â€“877)", "å…ƒåº† (877â€“885)", "ä»å’Œ (885â€“889)", "å®½å¹³ (889â€“898)", "æ˜Œæ³° (898â€“901)", "å»¶å–œ (901â€“923)", "å»¶é•¿ (923â€“931)", "æ‰¿å¹³ (931â€“938)", "å¤©åº† (938â€“947)", "å¤©åŽ† (947â€“957)", "å¤©å¾· (957â€“961)", "åº”å’Œ (961â€“964)", "åº·ä¿ (964â€“968)", "å®‰å’Œ (968â€“970)", "å¤©ç¦„ (970â€“973)", "å¤©å»¶ (973â€“976)", "è´žå…ƒ (976â€“978)", "å¤©å…ƒ (978â€“983)", "æ°¸è§‚ (983â€“985)", "å®½å’Œ (985â€“987)", "æ°¸å»¶ (987â€“989)", "æ°¸ç¥š (989â€“990)", "æ­£åŽ† (990â€“995)", "é•¿å¾· (995â€“999)", "é•¿ä¿ (999â€“1004)", "å®½å¼˜ (1004â€“1012)", "é•¿å’Œ (1012â€“1017)", "å®½ä» (1017â€“1021)", "æ²»å®‰ (1021â€“1024)", "ä¸‡å¯¿ (1024â€“1028)", "é•¿å…ƒ (1028â€“1037)", "é•¿åŽ† (1037â€“1040)", "é•¿ä¹… (1040â€“1044)", "å®½å¾· (1044â€“1046)", "æ°¸æ‰¿ (1046â€“1053)", "å¤©å–œ (1053â€“1058)", "åº·å¹³ (1058â€“1065)", "æ²»åŽ† (1065â€“1069)", "å»¶ä¹… (1069â€“1074)", "æ‰¿ä¿ (1074â€“1077)", "æ­£åŽ† (1077â€“1081)", "æ°¸ä¿ (1081â€“1084)", "åº”å¾· (1084â€“1087)", "å®½æ²» (1087â€“1094)", "å˜‰ä¿ (1094â€“1096)", "æ°¸é•¿ (1096â€“1097)", "æ‰¿å¾· (1097â€“1099)", "åº·å’Œ (1099â€“1104)", "é•¿æ²» (1104â€“1106)", "å˜‰æ‰¿ (1106â€“1108)", "å¤©ä» (1108â€“1110)", "å¤©æ°¸ (1110â€“1113)", "æ°¸ä¹… (1113â€“1118)", "å…ƒæ°¸ (1118â€“1120)", "ä¿å®‰ (1120â€“1124)", "å¤©æ²» (1124â€“1126)", "å¤§æ²» (1126â€“1131)", "å¤©æ‰¿ (1131â€“1132)", "é•¿æ‰¿ (1132â€“1135)", "ä¿å»¶ (1135â€“1141)", "æ°¸æ²» (1141â€“1142)", "åº·æ²» (1142â€“1144)", "å¤©å…» (1144â€“1145)", "ä¹…å®‰ (1145â€“1151)", "ä»å¹³ (1151â€“1154)", "ä¹…å¯¿ (1154â€“1156)", "ä¿å…ƒ (1156â€“1159)", "å¹³æ²» (1159â€“1160)", "æ°¸åŽ† (1160â€“1161)", "åº”ä¿ (1161â€“1163)", "é•¿å®½ (1163â€“1165)", "æ°¸ä¸‡ (1165â€“1166)", "ä»å®‰ (1166â€“1169)", "å˜‰åº” (1169â€“1171)", "æ‰¿å®‰ (1171â€“1175)", "å®‰å…ƒ (1175â€“1177)", "æ²»æ‰¿ (1177â€“1181)", "å…»å’Œ (1181â€“1182)", "å¯¿æ°¸ (1182â€“1184)", "å…ƒåŽ† (1184â€“1185)", "æ–‡æ²» (1185â€“1190)", "å»ºä¹… (1190â€“1199)", "æ­£æ²» (1199â€“1201)", "å»ºä» (1201â€“1204)", "å…ƒä¹… (1204â€“1206)", "å»ºæ°¸ (1206â€“1207)", "æ‰¿å…ƒ (1207â€“1211)", "å»ºåŽ† (1211â€“1213)", "å»ºä¿ (1213â€“1219)", "æ‰¿ä¹… (1219â€“1222)", "è´žåº” (1222â€“1224)", "å…ƒä» (1224â€“1225)", "å˜‰ç¦„ (1225â€“1227)", "å®‰è´ž (1227â€“1229)", "å®½å–œ (1229â€“1232)", "è´žæ°¸ (1232â€“1233)", "å¤©ç¦ (1233â€“1234)", "æ–‡åŽ† (1234â€“1235)", "å˜‰ç¥¯ (1235â€“1238)", "åŽ†ä» (1238â€“1239)", "å»¶åº” (1239â€“1240)", "ä»æ²» (1240â€“1243)", "å®½å…ƒ (1243â€“1247)", "å®æ²» (1247â€“1249)", "å»ºé•¿ (1249â€“1256)", "åº·å…ƒ (1256â€“1257)", "æ­£å˜‰ (1257â€“1259)", "æ­£å…ƒ (1259â€“1260)", "æ–‡åº” (1260â€“1261)", "å¼˜é•¿ (1261â€“1264)", "æ–‡æ°¸ (1264â€“1275)", "å»ºæ²» (1275â€“1278)", "å¼˜å®‰ (1278â€“1288)", "æ­£åº” (1288â€“1293)", "æ°¸ä» (1293â€“1299)", "æ­£å®‰ (1299â€“1302)", "å¹²å…ƒ (1302â€“1303)", "å˜‰å…ƒ (1303â€“1306)", "å¾·æ²» (1306â€“1308)", "å»¶åº† (1308â€“1311)", "åº”é•¿ (1311â€“1312)", "æ­£å’Œ (1312â€“1317)", "æ–‡ä¿ (1317â€“1319)", "å…ƒåº” (1319â€“1321)", "å…ƒäº¨ (1321â€“1324)", "æ­£ä¸­ (1324â€“1326)", "å˜‰åŽ† (1326â€“1329)", "å…ƒå¾· (1329â€“1331)", "å…ƒå¼˜ (1331â€“1334)", "å»ºæ­¦ (1334â€“1336)", "å»¶å…ƒ (1336â€“1340)", "å…´å›½ (1340â€“1346)", "æ­£å¹³ (1346â€“1370)", "å»ºå¾· (1370â€“1372)", "æ–‡ä¸­ (1372â€“1375)", "å¤©æŽˆ (1375â€“1379)", "åº·åŽ† (1379â€“1381)", "å¼˜å’Œ (1381â€“1384)", "å…ƒä¸­ (1384â€“1392)", "è‡³å¾· (1384â€“1387)", "å˜‰åº† (1387â€“1389)", "åº·åº” (1389â€“1390)", "æ˜Žå¾· (1390â€“1394)", "åº”æ°¸ (1394â€“1428)", "æ­£é•¿ (1428â€“1429)", "æ°¸äº« (1429â€“1441)", "å˜‰å‰ (1441â€“1444)", "æ–‡å®‰ (1444â€“1449)", "å®å¾· (1449â€“1452)", "äº«å¾· (1452â€“1455)", "åº·æ­£ (1455â€“1457)", "é•¿ç¦„ (1457â€“1460)", "å®½æ­£ (1460â€“1466)", "æ–‡æ­£ (1466â€“1467)", "åº”ä» (1467â€“1469)", "æ–‡æ˜Ž (1469â€“1487)", "é•¿äº« (1487â€“1489)", "å»¶å¾· (1489â€“1492)", "æ˜Žåº” (1492â€“1501)", "æ–‡é¾Ÿ (1501â€“1504)", "æ°¸æ­£ (1504â€“1521)", "å¤§æ°¸ (1521â€“1528)", "äº«ç¦„ (1528â€“1532)", "å¤©æ–‡ (1532â€“1555)", "å¼˜æ²» (1555â€“1558)", "æ°¸ç¦„ (1558â€“1570)", "å…ƒé¾Ÿ (1570â€“1573)", "å¤©æ­£ (1573â€“1592)", "æ–‡ç¦„ (1592â€“1596)", "åº†é•¿ (1596â€“1615)", "å…ƒå’Œ (1615â€“1624)", "å®½æ°¸ (1624â€“1644)", "æ­£ä¿ (1644â€“1648)", "åº†å®‰ (1648â€“1652)", "æ‰¿åº” (1652â€“1655)", "æ˜ŽåŽ† (1655â€“1658)", "ä¸‡æ²» (1658â€“1661)", "å®½æ–‡ (1661â€“1673)", "å»¶å® (1673â€“1681)", "å¤©å’Œ (1681â€“1684)", "è´žäº« (1684â€“1688)", "å…ƒç¦„ (1688â€“1704)", "å®æ°¸ (1704â€“1711)", "æ­£å¾· (1711â€“1716)", "äº«ä¿ (1716â€“1736)", "å…ƒæ–‡ (1736â€“1741)", "å®½ä¿ (1741â€“1744)", "å»¶äº« (1744â€“1748)", "å®½å»¶ (1748â€“1751)", "å®åŽ† (1751â€“1764)", "æ˜Žå’Œ (1764â€“1772)", "å®‰æ°¸ (1772â€“1781)", "å¤©æ˜Ž (1781â€“1789)", "å®½æ”¿ (1789â€“1801)", "äº«å’Œ (1801â€“1804)", "æ–‡åŒ– (1804â€“1818)", "æ–‡æ”¿ (1818â€“1830)", "å¤©ä¿ (1830â€“1844)", "å¼˜åŒ– (1844â€“1848)", "å˜‰æ°¸ (1848â€“1854)", "å®‰æ”¿ (1854â€“1860)", "ä¸‡å»¶ (1860â€“1861)", "æ–‡ä¹… (1861â€“1864)", "å…ƒæ²» (1864â€“1865)", "åº†åº” (1865â€“1868)", "æ˜Žæ²»", "å¤§æ­£", "æ˜­å’Œ", "å¹³æˆ"],
                    long: ["å¤§åŒ– (645â€“650)", "ç™½é›‰ (650â€“671)", "ç™½å‡¤ (672â€“686)", "æœ±é¸Ÿ (686â€“701)", "å¤§å® (701â€“704)", "åº†äº‘ (704â€“708)", "å’Œé“œ (708â€“715)", "çµé¾Ÿ (715â€“717)", "å…»è€ (717â€“724)", "ç¥žé¾Ÿ (724â€“729)", "å¤©å¹³ (729â€“749)", "å¤©å¹³æ„Ÿå® (749â€“749)", "å¤©å¹³èƒœå® (749â€“757)", "å¤©å¹³å®å­— (757â€“765)", "å¤©å¹³ç¥žæŠ¤ (765â€“767)", "ç¥žæŠ¤æ™¯äº‘ (767â€“770)", "å®é¾Ÿ (770â€“780)", "å¤©åº” (781â€“782)", "å»¶åŽ† (782â€“806)", "å¤§åŒ (806â€“810)", "å¼˜ä» (810â€“824)", "å¤©é•¿ (824â€“834)", "æ‰¿å’Œ (834â€“848)", "å˜‰ç¥¥ (848â€“851)", "ä»å¯¿ (851â€“854)", "é½è¡¡ (854â€“857)", "å¤©å®‰ (857â€“859)", "è´žè§‚ (859â€“877)", "å…ƒåº† (877â€“885)", "ä»å’Œ (885â€“889)", "å®½å¹³ (889â€“898)", "æ˜Œæ³° (898â€“901)", "å»¶å–œ (901â€“923)", "å»¶é•¿ (923â€“931)", "æ‰¿å¹³ (931â€“938)", "å¤©åº† (938â€“947)", "å¤©åŽ† (947â€“957)", "å¤©å¾· (957â€“961)", "åº”å’Œ (961â€“964)", "åº·ä¿ (964â€“968)", "å®‰å’Œ (968â€“970)", "å¤©ç¦„ (970â€“973)", "å¤©å»¶ (973â€“976)", "è´žå…ƒ (976â€“978)", "å¤©å…ƒ (978â€“983)", "æ°¸è§‚ (983â€“985)", "å®½å’Œ (985â€“987)", "æ°¸å»¶ (987â€“989)", "æ°¸ç¥š (989â€“990)", "æ­£åŽ† (990â€“995)", "é•¿å¾· (995â€“999)", "é•¿ä¿ (999â€“1004)", "å®½å¼˜ (1004â€“1012)", "é•¿å’Œ (1012â€“1017)", "å®½ä» (1017â€“1021)", "æ²»å®‰ (1021â€“1024)", "ä¸‡å¯¿ (1024â€“1028)", "é•¿å…ƒ (1028â€“1037)", "é•¿åŽ† (1037â€“1040)", "é•¿ä¹… (1040â€“1044)", "å®½å¾· (1044â€“1046)", "æ°¸æ‰¿ (1046â€“1053)", "å¤©å–œ (1053â€“1058)", "åº·å¹³ (1058â€“1065)", "æ²»åŽ† (1065â€“1069)", "å»¶ä¹… (1069â€“1074)", "æ‰¿ä¿ (1074â€“1077)", "æ­£åŽ† (1077â€“1081)", "æ°¸ä¿ (1081â€“1084)", "åº”å¾· (1084â€“1087)", "å®½æ²» (1087â€“1094)", "å˜‰ä¿ (1094â€“1096)", "æ°¸é•¿ (1096â€“1097)", "æ‰¿å¾· (1097â€“1099)", "åº·å’Œ (1099â€“1104)", "é•¿æ²» (1104â€“1106)", "å˜‰æ‰¿ (1106â€“1108)", "å¤©ä» (1108â€“1110)", "å¤©æ°¸ (1110â€“1113)", "æ°¸ä¹… (1113â€“1118)", "å…ƒæ°¸ (1118â€“1120)", "ä¿å®‰ (1120â€“1124)", "å¤©æ²» (1124â€“1126)", "å¤§æ²» (1126â€“1131)", "å¤©æ‰¿ (1131â€“1132)", "é•¿æ‰¿ (1132â€“1135)", "ä¿å»¶ (1135â€“1141)", "æ°¸æ²» (1141â€“1142)", "åº·æ²» (1142â€“1144)", "å¤©å…» (1144â€“1145)", "ä¹…å®‰ (1145â€“1151)", "ä»å¹³ (1151â€“1154)", "ä¹…å¯¿ (1154â€“1156)", "ä¿å…ƒ (1156â€“1159)", "å¹³æ²» (1159â€“1160)", "æ°¸åŽ† (1160â€“1161)", "åº”ä¿ (1161â€“1163)", "é•¿å®½ (1163â€“1165)", "æ°¸ä¸‡ (1165â€“1166)", "ä»å®‰ (1166â€“1169)", "å˜‰åº” (1169â€“1171)", "æ‰¿å®‰ (1171â€“1175)", "å®‰å…ƒ (1175â€“1177)", "æ²»æ‰¿ (1177â€“1181)", "å…»å’Œ (1181â€“1182)", "å¯¿æ°¸ (1182â€“1184)", "å…ƒåŽ† (1184â€“1185)", "æ–‡æ²» (1185â€“1190)", "å»ºä¹… (1190â€“1199)", "æ­£æ²» (1199â€“1201)", "å»ºä» (1201â€“1204)", "å…ƒä¹… (1204â€“1206)", "å»ºæ°¸ (1206â€“1207)", "æ‰¿å…ƒ (1207â€“1211)", "å»ºåŽ† (1211â€“1213)", "å»ºä¿ (1213â€“1219)", "æ‰¿ä¹… (1219â€“1222)", "è´žåº” (1222â€“1224)", "å…ƒä» (1224â€“1225)", "å˜‰ç¦„ (1225â€“1227)", "å®‰è´ž (1227â€“1229)", "å®½å–œ (1229â€“1232)", "è´žæ°¸ (1232â€“1233)", "å¤©ç¦ (1233â€“1234)", "æ–‡åŽ† (1234â€“1235)", "å˜‰ç¥¯ (1235â€“1238)", "åŽ†ä» (1238â€“1239)", "å»¶åº” (1239â€“1240)", "ä»æ²» (1240â€“1243)", "å®½å…ƒ (1243â€“1247)", "å®æ²» (1247â€“1249)", "å»ºé•¿ (1249â€“1256)", "åº·å…ƒ (1256â€“1257)", "æ­£å˜‰ (1257â€“1259)", "æ­£å…ƒ (1259â€“1260)", "æ–‡åº” (1260â€“1261)", "å¼˜é•¿ (1261â€“1264)", "æ–‡æ°¸ (1264â€“1275)", "å»ºæ²» (1275â€“1278)", "å¼˜å®‰ (1278â€“1288)", "æ­£åº” (1288â€“1293)", "æ°¸ä» (1293â€“1299)", "æ­£å®‰ (1299â€“1302)", "å¹²å…ƒ (1302â€“1303)", "å˜‰å…ƒ (1303â€“1306)", "å¾·æ²» (1306â€“1308)", "å»¶åº† (1308â€“1311)", "åº”é•¿ (1311â€“1312)", "æ­£å’Œ (1312â€“1317)", "æ–‡ä¿ (1317â€“1319)", "å…ƒåº” (1319â€“1321)", "å…ƒäº¨ (1321â€“1324)", "æ­£ä¸­ (1324â€“1326)", "å˜‰åŽ† (1326â€“1329)", "å…ƒå¾· (1329â€“1331)", "å…ƒå¼˜ (1331â€“1334)", "å»ºæ­¦ (1334â€“1336)", "å»¶å…ƒ (1336â€“1340)", "å…´å›½ (1340â€“1346)", "æ­£å¹³ (1346â€“1370)", "å»ºå¾· (1370â€“1372)", "æ–‡ä¸­ (1372â€“1375)", "å¤©æŽˆ (1375â€“1379)", "åº·åŽ† (1379â€“1381)", "å¼˜å’Œ (1381â€“1384)", "å…ƒä¸­ (1384â€“1392)", "è‡³å¾· (1384â€“1387)", "å˜‰åº† (1387â€“1389)", "åº·åº” (1389â€“1390)", "æ˜Žå¾· (1390â€“1394)", "åº”æ°¸ (1394â€“1428)", "æ­£é•¿ (1428â€“1429)", "æ°¸äº« (1429â€“1441)", "å˜‰å‰ (1441â€“1444)", "æ–‡å®‰ (1444â€“1449)", "å®å¾· (1449â€“1452)", "äº«å¾· (1452â€“1455)", "åº·æ­£ (1455â€“1457)", "é•¿ç¦„ (1457â€“1460)", "å®½æ­£ (1460â€“1466)", "æ–‡æ­£ (1466â€“1467)", "åº”ä» (1467â€“1469)", "æ–‡æ˜Ž (1469â€“1487)", "é•¿äº« (1487â€“1489)", "å»¶å¾· (1489â€“1492)", "æ˜Žåº” (1492â€“1501)", "æ–‡é¾Ÿ (1501â€“1504)", "æ°¸æ­£ (1504â€“1521)", "å¤§æ°¸ (1521â€“1528)", "äº«ç¦„ (1528â€“1532)", "å¤©æ–‡ (1532â€“1555)", "å¼˜æ²» (1555â€“1558)", "æ°¸ç¦„ (1558â€“1570)", "å…ƒé¾Ÿ (1570â€“1573)", "å¤©æ­£ (1573â€“1592)", "æ–‡ç¦„ (1592â€“1596)", "åº†é•¿ (1596â€“1615)", "å…ƒå’Œ (1615â€“1624)", "å®½æ°¸ (1624â€“1644)", "æ­£ä¿ (1644â€“1648)", "åº†å®‰ (1648â€“1652)", "æ‰¿åº” (1652â€“1655)", "æ˜ŽåŽ† (1655â€“1658)", "ä¸‡æ²» (1658â€“1661)", "å®½æ–‡ (1661â€“1673)", "å»¶å® (1673â€“1681)", "å¤©å’Œ (1681â€“1684)", "è´žäº« (1684â€“1688)", "å…ƒç¦„ (1688â€“1704)", "å®æ°¸ (1704â€“1711)", "æ­£å¾· (1711â€“1716)", "äº«ä¿ (1716â€“1736)", "å…ƒæ–‡ (1736â€“1741)", "å®½ä¿ (1741â€“1744)", "å»¶äº« (1744â€“1748)", "å®½å»¶ (1748â€“1751)", "å®åŽ† (1751â€“1764)", "æ˜Žå’Œ (1764â€“1772)", "å®‰æ°¸ (1772â€“1781)", "å¤©æ˜Ž (1781â€“1789)", "å®½æ”¿ (1789â€“1801)", "äº«å’Œ (1801â€“1804)", "æ–‡åŒ– (1804â€“1818)", "æ–‡æ”¿ (1818â€“1830)", "å¤©ä¿ (1830â€“1844)", "å¼˜åŒ– (1844â€“1848)", "å˜‰æ°¸ (1848â€“1854)", "å®‰æ”¿ (1854â€“1860)", "ä¸‡å»¶ (1860â€“1861)", "æ–‡ä¹… (1861â€“1864)", "å…ƒæ²» (1864â€“1865)", "åº†åº” (1865â€“1868)", "æ˜Žæ²»", "å¤§æ­£", "æ˜­å’Œ", "å¹³æˆ"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["æ³¢æ–¯åŽ†"],
                    short: ["æ³¢æ–¯åŽ†"],
                    long: ["æ³¢æ–¯åŽ†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            roc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["æ°‘å›½å‰", "æ°‘å›½"],
                    short: ["æ°‘å›½å‰", "æ°‘å›½"],
                    long: ["æ°‘å›½å‰", "æ°‘å›½"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
            },
            percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
            }
        },
        symbols: {
            hanidec: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            },
            latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "ï¿¥",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILR: "ILS",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "JPÂ¥",
            KRW: "ï¿¦",
            MXN: "MX$",
            NZD: "NZ$",
            TWD: "NT$",
            USD: "US$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});

; // intl/polyfillLocales/zh-Hant-TW.js
IntlPolyfill.__addLocaleData({
    locale: "zh-Hant-TW",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
        hourNo0: !0,
        hour12: !0,
        formats: {
            short: "{1} {0}",
            medium: "{1} {0}",
            full: "{1} {0}",
            long: "{1} {0}",
            availableFormats: {
                d: "dæ—¥",
                E: "ccc",
                Ed: "d E",
                Ehm: "E ah:mm",
                EHm: "E HH:mm",
                Ehms: "E ah:mm:ss",
                EHms: "E HH:mm:ss",
                Gy: "Gyå¹´",
                GyMMM: "Gyå¹´Mæœˆ",
                GyMMMd: "Gyå¹´Mæœˆdæ—¥",
                GyMMMEd: "Gyå¹´Mæœˆdæ—¥ E",
                h: "ahæ™‚",
                H: "Hæ™‚",
                hm: "ah:mm",
                Hm: "HH:mm",
                hms: "ah:mm:ss",
                Hms: "HH:mm:ss",
                hmsv: "ah:mm:ss [v]",
                Hmsv: "HH:mm:ss [v]",
                hmv: "ah:mm [v]",
                Hmv: "HH:mm [v]",
                M: "Mæœˆ",
                Md: "M/d",
                MEd: "M/dï¼ˆEï¼‰",
                MMdd: "MM/dd",
                MMM: "LLL",
                MMMd: "Mæœˆdæ—¥",
                MMMEd: "Mæœˆdæ—¥ E",
                MMMMd: "Mæœˆdæ—¥",
                ms: "mm:ss",
                y: "yå¹´",
                yM: "y/M",
                yMd: "y/M/d",
                yMEd: "y/M/dï¼ˆEï¼‰",
                yMM: "y/MM",
                yMMM: "yå¹´Mæœˆ",
                yMMMd: "yå¹´Mæœˆdæ—¥",
                yMMMEd: "yå¹´Mæœˆdæ—¥ E",
                yMMMM: "yå¹´Mæœˆ",
                yQQQ: "yå¹´QQQ",
                yQQQQ: "yå¹´QQQQ"
            },
            dateFormats: {
                yMMMMEEEEd: "yå¹´Mæœˆdæ—¥ EEEE",
                yMMMMd: "yå¹´Mæœˆdæ—¥",
                yMMMd: "yå¹´Mæœˆdæ—¥",
                yMd: "y/M/d"
            },
            timeFormats: {
                hmmsszzzz: "ah:mm:ss [zzzz]",
                hmsz: "ah:mm:ss [z]",
                hms: "ah:mm:ss",
                hm: "ah:mm"
            }
        },
        calendars: {
            buddhist: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä½›æ›†"],
                    short: ["ä½›æ›†"],
                    long: ["ä½›æ›†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            chinese: {
                months: {
                    narrow: ["æ­£", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "å†¬", "è‡˜"],
                    short: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è‡˜æœˆ"],
                    long: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "å†¬æœˆ", "è‡˜æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            coptic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            dangi: {
                months: {
                    narrow: ["æ­£", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "åä¸€", "åäºŒ"],
                    short: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
                    long: ["æ­£æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            ethiopic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            ethioaa: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ", "13æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0"],
                    short: ["ERA0"],
                    long: ["ERA0"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            generic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ERA0", "ERA1"],
                    short: ["ERA0", "ERA1"],
                    long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            gregory: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["è¥¿å…ƒå‰", "è¥¿å…ƒ", "å…¬å…ƒå‰", "å…¬å…ƒ"],
                    short: ["è¥¿å…ƒå‰", "è¥¿å…ƒ", "å…¬å…ƒå‰", "å…¬å…ƒ"],
                    long: ["è¥¿å…ƒå‰", "è¥¿å…ƒ", "å…¬å…ƒå‰", "å…¬å…ƒ"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            hebrew: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                    short: ["ææ–¯åˆ©æœˆ", "ç‘ªè¥¿ç­æœˆ", "åŸºæ–¯æµæœˆ", "æåˆ¥æœˆ", "ç´°ç½·ç‰¹æœˆ", "äºžé”æœˆ I", "äºžé”æœˆ", "å°¼æ•£æœˆ", "ä»¥ç¥æœˆ", "è¥¿å½Žæœˆ", "æ­æ¨¡æ–¯æœˆ", "åŸƒæ³¢æœˆ", "ä»¥ç¥¿æœˆ", "äºžé”æœˆ II"],
                    long: ["ææ–¯åˆ©æœˆ", "ç‘ªè¥¿ç­æœˆ", "åŸºæ–¯æµæœˆ", "æåˆ¥æœˆ", "ç´°ç½·ç‰¹æœˆ", "äºžé”æœˆ I", "äºžé”æœˆ", "å°¼æ•£æœˆ", "ä»¥ç¥æœˆ", "è¥¿å½Žæœˆ", "æ­æ¨¡æ–¯æœˆ", "åŸƒæ³¢æœˆ", "ä»¥ç¥¿æœˆ", "äºžé”æœˆ II"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["å‰µä¸–ç´€å…ƒ"],
                    short: ["å‰µä¸–ç´€å…ƒ"],
                    long: ["å‰µä¸–ç´€å…ƒ"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            indian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["åˆ¶æª€é‚æœˆ", "å èˆä½‰æœˆ", "é€ç‘Ÿå’æœˆ", "é žæ²™è¼æœˆ", "å®¤ç¾…ä¼æ‹æœˆ", "å©†ç¾…é‰¢é™€æœˆ", "é žæ¶‡ç¸›åºšé—æœˆ", "è¿¦å‰Œåº•è¿¦æœˆ", "æœ«ä¼½å§‹ç¾…æœˆ", "å ±æ²™æœˆ", "ç£¨ç¥›æœˆ", "é —å‹’çª¶æ‹æœˆ"],
                    long: ["åˆ¶æª€é‚æœˆ", "å èˆä½‰æœˆ", "é€ç‘Ÿå’æœˆ", "é žæ²™è¼æœˆ", "å®¤ç¾…ä¼æ‹æœˆ", "å©†ç¾…é‰¢é™€æœˆ", "é žæ¶‡ç¸›åºšé—æœˆ", "è¿¦å‰Œåº•è¿¦æœˆ", "æœ«ä¼½å§‹ç¾…æœˆ", "å ±æ²™æœˆ", "ç£¨ç¥›æœˆ", "é —å‹’çª¶æ‹æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["å°åº¦æ›†"],
                    short: ["å°åº¦æ›†"],
                    long: ["å°åº¦æ›†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            islamic: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["ç©†å“ˆè˜­å§†æœˆ", "è‰²æ³•çˆ¾æœˆ", "è³´æ¯”æœˆ I", "è³´æ¯”æœˆ II", "ä¸»é¦¬é”æœˆ I", "ä¸»é¦¬é”æœˆ II", "è³´å“²åœæœˆ", "èˆçˆ¾é‚¦æœˆ", "è³´è²·ä¸¹æœˆ", "é–ƒç“¦é­¯æœˆ", "éƒ½çˆ¾å–€çˆ¾å¾·æœˆ", "éƒ½çˆ¾é»‘å“²æœˆ"],
                    long: ["ç©†å“ˆè˜­å§†æœˆ", "è‰²æ³•çˆ¾æœˆ", "è³´æ¯”æœˆ I", "è³´æ¯”æœˆ II", "ä¸»é¦¬é”æœˆ I", "ä¸»é¦¬é”æœˆ II", "è³´å“²åœæœˆ", "èˆçˆ¾é‚¦æœˆ", "è³´è²·ä¸¹æœˆ", "é–ƒç“¦é­¯æœˆ", "éƒ½çˆ¾å–€çˆ¾å¾·æœˆ", "éƒ½çˆ¾é»‘å“²æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä¼Šæ–¯è˜­æ›†"],
                    short: ["ä¼Šæ–¯è˜­æ›†"],
                    long: ["ä¼Šæ–¯è˜­æ›†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            islamicc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["ç©†å“ˆè˜­å§†æœˆ", "è‰²æ³•çˆ¾æœˆ", "è³´æ¯”æœˆ I", "è³´æ¯”æœˆ II", "ä¸»é¦¬é”æœˆ I", "ä¸»é¦¬é”æœˆ II", "è³´å“²åœæœˆ", "èˆçˆ¾é‚¦æœˆ", "è³´è²·ä¸¹æœˆ", "é–ƒç“¦é­¯æœˆ", "éƒ½çˆ¾å–€çˆ¾å¾·æœˆ", "éƒ½çˆ¾é»‘å“²æœˆ"],
                    long: ["ç©†å“ˆè˜­å§†æœˆ", "è‰²æ³•çˆ¾æœˆ", "è³´æ¯”æœˆ I", "è³´æ¯”æœˆ II", "ä¸»é¦¬é”æœˆ I", "ä¸»é¦¬é”æœˆ II", "è³´å“²åœæœˆ", "èˆçˆ¾é‚¦æœˆ", "è³´è²·ä¸¹æœˆ", "é–ƒç“¦é­¯æœˆ", "éƒ½çˆ¾å–€çˆ¾å¾·æœˆ", "éƒ½çˆ¾é»‘å“²æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["ä¼Šæ–¯è˜­æ›†"],
                    short: ["ä¼Šæ–¯è˜­æ›†"],
                    long: ["ä¼Šæ–¯è˜­æ›†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            japanese: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["Taika (645â€“650)", "Hakuchi (650â€“671)", "HakuhÅ (672â€“686)", "ShuchÅ (686â€“701)", "TaihÅ (701â€“704)", "Keiun (704â€“708)", "WadÅ (708â€“715)", "Reiki (715â€“717)", "YÅrÅ (717â€“724)", "Jinki (724â€“729)", "TenpyÅ (729â€“749)", "TenpyÅ-kampÅ (749-749)", "TenpyÅ-shÅhÅ (749-757)", "TenpyÅ-hÅji (757-765)", "TenpyÅ-jingo (765-767)", "Jingo-keiun (767-770)", "HÅki (770â€“780)", "Ten-Å (781-782)", "Enryaku (782â€“806)", "DaidÅ (806â€“810)", "KÅnin (810â€“824)", "TenchÅ (824â€“834)", "JÅwa (834â€“848)", "KajÅ (848â€“851)", "Ninju (851â€“854)", "SaikÅ (854â€“857)", "Ten-an (857-859)", "JÅgan (859â€“877)", "GangyÅ (877â€“885)", "Ninna (885â€“889)", "KanpyÅ (889â€“898)", "ShÅtai (898â€“901)", "Engi (901â€“923)", "EnchÅ (923â€“931)", "JÅhei (931â€“938)", "TengyÅ (938â€“947)", "Tenryaku (947â€“957)", "Tentoku (957â€“961)", "ÅŒwa (961â€“964)", "KÅhÅ (964â€“968)", "Anna (968â€“970)", "Tenroku (970â€“973)", "Tenâ€™en (973â€“976)", "JÅgen (976â€“978)", "Tengen (978â€“983)", "Eikan (983â€“985)", "Kanna (985â€“987)", "Eien (987â€“989)", "Eiso (989â€“990)", "ShÅryaku (990â€“995)", "ChÅtoku (995â€“999)", "ChÅhÅ (999â€“1004)", "KankÅ (1004â€“1012)", "ChÅwa (1012â€“1017)", "Kannin (1017â€“1021)", "Jian (1021â€“1024)", "Manju (1024â€“1028)", "ChÅgen (1028â€“1037)", "ChÅryaku (1037â€“1040)", "ChÅkyÅ« (1040â€“1044)", "Kantoku (1044â€“1046)", "EishÅ (1046â€“1053)", "Tengi (1053â€“1058)", "KÅhei (1058â€“1065)", "Jiryaku (1065â€“1069)", "EnkyÅ« (1069â€“1074)", "ShÅho (1074â€“1077)", "ShÅryaku (1077â€“1081)", "EihÅ (1081â€“1084)", "ÅŒtoku (1084â€“1087)", "Kanji (1087â€“1094)", "KahÅ (1094â€“1096)", "EichÅ (1096â€“1097)", "JÅtoku (1097â€“1099)", "KÅwa (1099â€“1104)", "ChÅji (1104â€“1106)", "KashÅ (1106â€“1108)", "Tennin (1108â€“1110)", "Ten-ei (1110-1113)", "EikyÅ« (1113â€“1118)", "Genâ€™ei (1118â€“1120)", "HÅan (1120â€“1124)", "Tenji (1124â€“1126)", "Daiji (1126â€“1131)", "TenshÅ (1131â€“1132)", "ChÅshÅ (1132â€“1135)", "HÅen (1135â€“1141)", "Eiji (1141â€“1142)", "KÅji (1142â€“1144)", "Tenâ€™yÅ (1144â€“1145)", "KyÅ«an (1145â€“1151)", "Ninpei (1151â€“1154)", "KyÅ«ju (1154â€“1156)", "HÅgen (1156â€“1159)", "Heiji (1159â€“1160)", "Eiryaku (1160â€“1161)", "ÅŒho (1161â€“1163)", "ChÅkan (1163â€“1165)", "Eiman (1165â€“1166)", "Ninâ€™an (1166â€“1169)", "KaÅ (1169â€“1171)", "ShÅan (1171â€“1175)", "Angen (1175â€“1177)", "JishÅ (1177â€“1181)", "YÅwa (1181â€“1182)", "Juei (1182â€“1184)", "Genryaku (1184â€“1185)", "Bunji (1185â€“1190)", "KenkyÅ« (1190â€“1199)", "ShÅji (1199â€“1201)", "Kennin (1201â€“1204)", "GenkyÅ« (1204â€“1206)", "Kenâ€™ei (1206â€“1207)", "JÅgen (1207â€“1211)", "Kenryaku (1211â€“1213)", "KenpÅ (1213â€“1219)", "JÅkyÅ« (1219â€“1222)", "JÅÅ (1222â€“1224)", "Gennin (1224â€“1225)", "Karoku (1225â€“1227)", "Antei (1227â€“1229)", "Kanki (1229â€“1232)", "JÅei (1232â€“1233)", "Tenpuku (1233â€“1234)", "Bunryaku (1234â€“1235)", "Katei (1235â€“1238)", "Ryakunin (1238â€“1239)", "Enâ€™Å (1239â€“1240)", "Ninji (1240â€“1243)", "Kangen (1243â€“1247)", "HÅji (1247â€“1249)", "KenchÅ (1249â€“1256)", "KÅgen (1256â€“1257)", "ShÅka (1257â€“1259)", "ShÅgen (1259â€“1260)", "Bunâ€™Å (1260â€“1261)", "KÅchÅ (1261â€“1264)", "Bunâ€™ei (1264â€“1275)", "Kenji (1275â€“1278)", "KÅan (1278â€“1288)", "ShÅÅ (1288â€“1293)", "Einin (1293â€“1299)", "ShÅan (1299â€“1302)", "Kengen (1302â€“1303)", "Kagen (1303â€“1306)", "Tokuji (1306â€“1308)", "EnkyÅ (1308â€“1311)", "ÅŒchÅ (1311â€“1312)", "ShÅwa (1312â€“1317)", "BunpÅ (1317â€“1319)", "GenÅ (1319â€“1321)", "GenkÅ (1321â€“1324)", "ShÅchÅ« (1324â€“1326)", "Karyaku (1326â€“1329)", "Gentoku (1329â€“1331)", "GenkÅ (1331â€“1334)", "Kenmu (1334â€“1336)", "Engen (1336â€“1340)", "KÅkoku (1340â€“1346)", "ShÅhei (1346â€“1370)", "Kentoku (1370â€“1372)", "BunchÅ« (1372â€“1375)", "Tenju (1375â€“1379)", "KÅryaku (1379â€“1381)", "KÅwa (1381â€“1384)", "GenchÅ« (1384â€“1392)", "Meitoku (1384â€“1387)", "Kakei (1387â€“1389)", "KÅÅ (1389â€“1390)", "Meitoku (1390â€“1394)", "ÅŒei (1394â€“1428)", "ShÅchÅ (1428â€“1429)", "EikyÅ (1429â€“1441)", "Kakitsu (1441â€“1444)", "Bunâ€™an (1444â€“1449)", "HÅtoku (1449â€“1452)", "KyÅtoku (1452â€“1455)", "KÅshÅ (1455â€“1457)", "ChÅroku (1457â€“1460)", "KanshÅ (1460â€“1466)", "BunshÅ (1466â€“1467)", "ÅŒnin (1467â€“1469)", "Bunmei (1469â€“1487)", "ChÅkyÅ (1487â€“1489)", "Entoku (1489â€“1492)", "MeiÅ (1492â€“1501)", "Bunki (1501â€“1504)", "EishÅ (1504â€“1521)", "Taiei (1521â€“1528)", "KyÅroku (1528â€“1532)", "Tenbun (1532â€“1555)", "KÅji (1555â€“1558)", "Eiroku (1558â€“1570)", "Genki (1570â€“1573)", "TenshÅ (1573â€“1592)", "Bunroku (1592â€“1596)", "KeichÅ (1596â€“1615)", "Genna (1615â€“1624)", "Kanâ€™ei (1624â€“1644)", "ShÅho (1644â€“1648)", "Keian (1648â€“1652)", "JÅÅ (1652â€“1655)", "Meireki (1655â€“1658)", "Manji (1658â€“1661)", "Kanbun (1661â€“1673)", "EnpÅ (1673â€“1681)", "Tenna (1681â€“1684)", "JÅkyÅ (1684â€“1688)", "Genroku (1688â€“1704)", "HÅei (1704â€“1711)", "ShÅtoku (1711â€“1716)", "KyÅhÅ (1716â€“1736)", "Genbun (1736â€“1741)", "KanpÅ (1741â€“1744)", "EnkyÅ (1744â€“1748)", "Kanâ€™en (1748â€“1751)", "HÅreki (1751â€“1764)", "Meiwa (1764â€“1772)", "Anâ€™ei (1772â€“1781)", "Tenmei (1781â€“1789)", "Kansei (1789â€“1801)", "KyÅwa (1801â€“1804)", "Bunka (1804â€“1818)", "Bunsei (1818â€“1830)", "TenpÅ (1830â€“1844)", "KÅka (1844â€“1848)", "Kaei (1848â€“1854)", "Ansei (1854â€“1860)", "Manâ€™en (1860â€“1861)", "BunkyÅ« (1861â€“1864)", "Genji (1864â€“1865)", "KeiÅ (1865â€“1868)", "M", "T", "S", "H"],
                    short: ["å¤§åŒ–", "ç™½é›‰", "ç™½é³³", "æœ±é³¥", "å¤§å¯¶", "æ…¶é›²", "å’ŒéŠ…", "éˆé¾œ", "é¤Šè€", "ç¥žé¾œ", "å¤©å¹³", "å¤©å¹³æ„Ÿå¯¶", "å¤©å¹³å‹å¯¶", "å¤©å¹³å¯¶å­—", "å¤©å¹³ç¥žè­·", "ç¥žè­·æ™¯é›²", "å¯¶é¾œ", "å¤©æ‡‰", "å»¶æ›†", "å¤§åŒ", "å¼˜ä»", "å¤©é•·", "æ‰¿å’Œ", "å˜‰ç¥¥", "ä»å£½", "é½Šè¡¡", "å¤©å®‰", "è²žè§€", "å…ƒæ…¶", "ä»å’Œ", "å¯¬å¹³", "æ˜Œæ³°", "å»¶å–œ", "å»¶é•·", "æ‰¿å¹³", "å¤©æ…¶", "å¤©æ›†", "å¤©å¾·", "æ‡‰å’Œ", "åº·ä¿", "å®‰å’Œ", "å¤©ç¥¿", "å¤©å»¶", "è²žå…ƒ", "å¤©å…ƒ", "æ°¸è§€", "å¯¬å’Œ", "æ°¸å»¶", "æ°¸ç¥š", "æ­£æ›†", "é•·å¾·", "é•·ä¿", "å¯¬å¼˜", "é•·å’Œ", "å¯¬ä»", "æ²»å®‰", "è¬å£½", "é•·å…ƒ", "é•·æ›†", "é•·ä¹…", "å¯¬å¾·", "æ°¸æ‰¿", "å¤©å–œ", "åº·å¹³", "æ²»æ›†", "å»¶ä¹…", "æ‰¿ä¿", "æ‰¿æ›†", "æ°¸ä¿", "æ‡‰å¾·", "å¯¬æ²»", "å˜‰ä¿", "æ°¸é•·", "æ‰¿å¾·", "åº·å’Œ", "é•·æ²»", "å˜‰æ‰¿", "å¤©ä»", "å¤©æ°¸", "æ°¸ä¹…", "å…ƒæ°¸", "ä¿å®‰", "å¤©æ²»", "å¤§æ²»", "å¤©æ‰¿", "é•·æ‰¿", "ä¿å»¶", "æ°¸æ²»", "åº·æ²»", "å¤©é¤Š", "ä¹…å®‰", "ä»å¹³", "ä¹…å£½", "ä¿å…ƒ", "å¹³æ²»", "æ°¸æ›†", "æ‡‰ä¿", "é•·å¯¬", "æ°¸è¬", "ä»å®‰", "å˜‰æ‡‰", "æ‰¿å®‰", "å®‰å…ƒ", "æ²»æ‰¿", "é¤Šå’Œ", "å£½æ°¸", "å…ƒæ›†", "æ–‡æ²»", "å»ºä¹…", "æ­£æ²»", "å»ºä»", "å…ƒä¹…", "å»ºæ°¸", "æ‰¿å…ƒ", "å»ºæ›†", "å»ºä¿", "æ‰¿ä¹…", "è²žæ‡‰", "å…ƒä»", "å˜‰ç¥¿", "å®‰è²ž", "å¯¬å–œ", "è²žæ°¸", "å¤©ç¦", "æ–‡æ›†", "å˜‰ç¦Ž", "æ›†ä»", "å»¶æ‡‰", "ä»æ²»", "å¯¬å…ƒ", "å¯¶æ²»", "å»ºé•·", "åº·å…ƒ", "æ­£å˜‰", "æ­£å…ƒ", "æ–‡æ‡‰", "å¼˜é•·", "æ–‡æ°¸", "å»ºæ²»", "å¼˜å®‰", "æ­£æ‡‰", "æ°¸ä»", "æ­£å®‰", "ä¹¾å…ƒ", "å˜‰å…ƒ", "å¾·æ²»", "å»¶æ…¶", "æ‡‰é•·", "æ­£å’Œ", "æ–‡ä¿", "å…ƒæ‡‰", "å…ƒäº¨", "æ­£ä¸­", "å˜‰æ›†", "å…ƒå¾·", "å…ƒå¼˜", "å»ºæ­¦", "å»¶å…ƒ", "èˆˆåœ‹", "æ­£å¹³", "å»ºå¾·", "æ–‡ä¸­", "å¤©æŽˆ", "åº·æ›†", "å¼˜å’Œ", "å…ƒä¸­", "è‡³å¾·", "å˜‰æ…¶", "åº·æ‡‰", "æ˜Žå¾·", "æ‡‰æ°¸", "æ­£é•·", "æ°¸äº«", "å˜‰å‰", "æ–‡å®‰", "å¯¶å¾·", "äº«å¾·", "åº·æ­£", "é•·ç¥¿", "å¯¬æ­£", "æ–‡æ­£", "æ‡‰ä»", "æ–‡æ˜Ž", "é•·äº«", "å»¶å¾·", "æ˜Žæ‡‰", "æ–‡é¾œ", "æ°¸æ­£", "å¤§æ°¸", "äº«ç¥¿", "å¤©æ–‡", "å¼˜æ²»", "æ°¸ç¥¿", "å…ƒé¾œ", "å¤©æ­£", "æ–‡ç¥¿", "æ…¶é•·", "å…ƒå’Œ", "å¯¬æ°¸", "æ­£ä¿", "æ…¶å®‰", "æ‰¿æ‡‰", "æ˜Žæ›†", "è¬æ²»", "å¯¬æ–‡", "å»¶å¯¶", "å¤©å’Œ", "è²žäº«", "å…ƒç¥¿", "å¯¶æ°¸", "æ­£å¾·", "äº«ä¿", "å…ƒæ–‡", "å¯¬ä¿", "å»¶äº«", "å¯¬å»¶", "å¯¶æ›†", "æ˜Žå’Œ", "å®‰æ°¸", "å¤©æ˜Ž", "å¯¬æ”¿", "äº«å’Œ", "æ–‡åŒ–", "æ–‡æ”¿", "å¤©ä¿", "å¼˜åŒ–", "å˜‰æ°¸", "å®‰æ”¿", "è¬å»¶", "æ–‡ä¹…", "å…ƒæ²»", "æ…¶æ‡‰", "æ˜Žæ²»", "å¤§æ­£", "æ˜­å’Œ", "å¹³æˆ"],
                    long: ["å¤§åŒ–", "ç™½é›‰", "ç™½é³³", "æœ±é³¥", "å¤§å¯¶", "æ…¶é›²", "å’ŒéŠ…", "éˆé¾œ", "é¤Šè€", "ç¥žé¾œ", "å¤©å¹³", "å¤©å¹³æ„Ÿå¯¶", "å¤©å¹³å‹å¯¶", "å¤©å¹³å¯¶å­—", "å¤©å¹³ç¥žè­·", "ç¥žè­·æ™¯é›²", "å¯¶é¾œ", "å¤©æ‡‰", "å»¶æ›†", "å¤§åŒ", "å¼˜ä»", "å¤©é•·", "æ‰¿å’Œ", "å˜‰ç¥¥", "ä»å£½", "é½Šè¡¡", "å¤©å®‰", "è²žè§€", "å…ƒæ…¶", "ä»å’Œ", "å¯¬å¹³", "æ˜Œæ³°", "å»¶å–œ", "å»¶é•·", "æ‰¿å¹³", "å¤©æ…¶", "å¤©æ›†", "å¤©å¾·", "æ‡‰å’Œ", "åº·ä¿", "å®‰å’Œ", "å¤©ç¥¿", "å¤©å»¶", "è²žå…ƒ", "å¤©å…ƒ", "æ°¸è§€", "å¯¬å’Œ", "æ°¸å»¶", "æ°¸ç¥š", "æ­£æ›†", "é•·å¾·", "é•·ä¿", "å¯¬å¼˜", "é•·å’Œ", "å¯¬ä»", "æ²»å®‰", "è¬å£½", "é•·å…ƒ", "é•·æ›†", "é•·ä¹…", "å¯¬å¾·", "æ°¸æ‰¿", "å¤©å–œ", "åº·å¹³", "æ²»æ›†", "å»¶ä¹…", "æ‰¿ä¿", "æ‰¿æ›†", "æ°¸ä¿", "æ‡‰å¾·", "å¯¬æ²»", "å˜‰ä¿", "æ°¸é•·", "æ‰¿å¾·", "åº·å’Œ", "é•·æ²»", "å˜‰æ‰¿", "å¤©ä»", "å¤©æ°¸", "æ°¸ä¹…", "å…ƒæ°¸", "ä¿å®‰", "å¤©æ²»", "å¤§æ²»", "å¤©æ‰¿", "é•·æ‰¿", "ä¿å»¶", "æ°¸æ²»", "åº·æ²»", "å¤©é¤Š", "ä¹…å®‰", "ä»å¹³", "ä¹…å£½", "ä¿å…ƒ", "å¹³æ²»", "æ°¸æ›†", "æ‡‰ä¿", "é•·å¯¬", "æ°¸è¬", "ä»å®‰", "å˜‰æ‡‰", "æ‰¿å®‰", "å®‰å…ƒ", "æ²»æ‰¿", "é¤Šå’Œ", "å£½æ°¸", "å…ƒæ›†", "æ–‡æ²»", "å»ºä¹…", "æ­£æ²»", "å»ºä»", "å…ƒä¹…", "å»ºæ°¸", "æ‰¿å…ƒ", "å»ºæ›†", "å»ºä¿", "æ‰¿ä¹…", "è²žæ‡‰", "å…ƒä»", "å˜‰ç¥¿", "å®‰è²ž", "å¯¬å–œ", "è²žæ°¸", "å¤©ç¦", "æ–‡æ›†", "å˜‰ç¦Ž", "æ›†ä»", "å»¶æ‡‰", "ä»æ²»", "å¯¬å…ƒ", "å¯¶æ²»", "å»ºé•·", "åº·å…ƒ", "æ­£å˜‰", "æ­£å…ƒ", "æ–‡æ‡‰", "å¼˜é•·", "æ–‡æ°¸", "å»ºæ²»", "å¼˜å®‰", "æ­£æ‡‰", "æ°¸ä»", "æ­£å®‰", "ä¹¾å…ƒ", "å˜‰å…ƒ", "å¾·æ²»", "å»¶æ…¶", "æ‡‰é•·", "æ­£å’Œ", "æ–‡ä¿", "å…ƒæ‡‰", "å…ƒäº¨", "æ­£ä¸­", "å˜‰æ›†", "å…ƒå¾·", "å…ƒå¼˜", "å»ºæ­¦", "å»¶å…ƒ", "èˆˆåœ‹", "æ­£å¹³", "å»ºå¾·", "æ–‡ä¸­", "å¤©æŽˆ", "åº·æ›†", "å¼˜å’Œ", "å…ƒä¸­", "è‡³å¾·", "å˜‰æ…¶", "åº·æ‡‰", "æ˜Žå¾·", "æ‡‰æ°¸", "æ­£é•·", "æ°¸äº«", "å˜‰å‰", "æ–‡å®‰", "å¯¶å¾·", "äº«å¾·", "åº·æ­£", "é•·ç¥¿", "å¯¬æ­£", "æ–‡æ­£", "æ‡‰ä»", "æ–‡æ˜Ž", "é•·äº«", "å»¶å¾·", "æ˜Žæ‡‰", "æ–‡é¾œ", "æ°¸æ­£", "å¤§æ°¸", "äº«ç¥¿", "å¤©æ–‡", "å¼˜æ²»", "æ°¸ç¥¿", "å…ƒé¾œ", "å¤©æ­£", "æ–‡ç¥¿", "æ…¶é•·", "å…ƒå’Œ", "å¯¬æ°¸", "æ­£ä¿", "æ…¶å®‰", "æ‰¿æ‡‰", "æ˜Žæ›†", "è¬æ²»", "å¯¬æ–‡", "å»¶å¯¶", "å¤©å’Œ", "è²žäº«", "å…ƒç¥¿", "å¯¶æ°¸", "æ­£å¾·", "äº«ä¿", "å…ƒæ–‡", "å¯¬ä¿", "å»¶äº«", "å¯¬å»¶", "å¯¶æ›†", "æ˜Žå’Œ", "å®‰æ°¸", "å¤©æ˜Ž", "å¯¬æ”¿", "äº«å’Œ", "æ–‡åŒ–", "æ–‡æ”¿", "å¤©ä¿", "å¼˜åŒ–", "å˜‰æ°¸", "å®‰æ”¿", "è¬å»¶", "æ–‡ä¹…", "å…ƒæ²»", "æ…¶æ‡‰", "æ˜Žæ²»", "å¤§æ­£", "æ˜­å’Œ", "å¹³æˆ"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            persian: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["æ³¢æ–¯æ›†"],
                    short: ["æ³¢æ–¯æ›†"],
                    long: ["æ³¢æ–¯æ›†"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            },
            roc: {
                months: {
                    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    short: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                    long: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"]
                },
                days: {
                    narrow: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
                    short: ["é€±æ—¥", "é€±ä¸€", "é€±äºŒ", "é€±ä¸‰", "é€±å››", "é€±äº”", "é€±å…­"],
                    long: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
                },
                eras: {
                    narrow: ["æ°‘åœ‹å‰", "æ°‘åœ‹"],
                    short: ["æ°‘åœ‹å‰", "æ°‘åœ‹"],
                    long: ["æ°‘åœ‹å‰", "æ°‘åœ‹"]
                },
                dayPeriods: {
                    am: "ä¸Šåˆ",
                    pm: "ä¸‹åˆ"
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
            },
            percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
            }
        },
        symbols: {
            hanidec: {
                decimal: ".",
                group: ",",
                nan: "éžæ•¸å€¼",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            },
            latn: {
                decimal: ".",
                group: ",",
                nan: "éžæ•¸å€¼",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "âˆž"
            }
        },
        currencies: {
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CNÂ¥",
            EUR: "â‚¬",
            GBP: "Â£",
            HKD: "HK$",
            ILS: "â‚ª",
            INR: "â‚¹",
            JPY: "Â¥",
            KRW: "ï¿¦",
            MXN: "MX$",
            NZD: "NZ$",
            TWD: "$",
            USD: "US$",
            VND: "â‚«",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
});