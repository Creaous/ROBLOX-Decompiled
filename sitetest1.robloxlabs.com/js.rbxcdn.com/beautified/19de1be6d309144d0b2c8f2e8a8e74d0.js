; // bundle: headerinit___93e64b0ec21dbb1bc4bef521592de58e_m
; // files: jquery/jquery-1.11.1.min.js, jquery/jquery-migrate-1.2.1.min.js, Microsoft/MicrosoftAjax.js, roblox.js, common/constants.js, jquery.cookie.js, utilities/performance.js, RobloxCookies.js, utilities/minifyTestFile.js, RobloxEventStream.js, Events/UserInteractionsEvent.js, Events/PageHeartbeatEvent.js, services/userService.js, services/metaDataValues.js, utilities/localStorage.js, utilities/ExponentialBackoff.js, utilities/ExponentialBackoffSpecification.js, Reference/themeUpdate.js

; // jquery/jquery-1.11.1.min.js
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});

; // jquery/jquery-migrate-1.2.1.min.js
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);

; // Microsoft/MicrosoftAjax.js
function Sys$Enum$parse(n, t) {
    var i, r, h, f, e, o, s, u, c;
    if (t) {
        if (i = this.__lowerCaseValues, !i) {
            this.__lowerCaseValues = i = {}, f = this.prototype;
            for (e in f) i[e.toLowerCase()] = f[e]
        }
    } else i = this.prototype;
    if (this.__flags) {
        for (o = (t ? n.toLowerCase() : n).split(","), s = 0, u = o.length - 1; u >= 0; u--) {
            if (c = o[u].trim(), r = i[c], typeof r != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n.split(",")[u].trim(), this.__typeName));
            s |= r
        }
        return s
    }
    if (h = t ? n.toLowerCase() : n, r = i[h.trim()], typeof r != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n, this.__typeName));
    return r
}

function Sys$Enum$toString(n) {
    var r, t, i, u, e, o, f;
    if (typeof n == "undefined" || n === null) return this.__string;
    if (r = this.prototype, this.__flags && n !== 0) {
        if (i = this.__sortedValues, !i) {
            i = [];
            for (t in r) i[i.length] = {
                key: t,
                value: r[t]
            };
            i.sort(function(n, t) {
                return n.value - t.value
            }), this.__sortedValues = i
        }
        for (u = [], e = n, t = i.length - 1; t >= 0; t--)
            if ((o = i[t], f = o.value, f !== 0) && (f & n) === f && (u[u.length] = o.key, e -= f, e === 0)) break;
        if (u.length && e === 0) return u.reverse().join(", ")
    } else
        for (t in r)
            if (r[t] === n) return t; return ""
}

function Sys$Component$_setProperties(n, t) {
    var u, c = Object.getType(n),
        e = c === Object || c === Sys.UI.DomElement,
        l = Sys.Component.isInstanceOfType(n) && !n.get_isUpdating(),
        r, i, f, o, s;
    l && n.beginUpdate();
    for (r in t)
        if (i = t[r], f = e ? null : n["get_" + r], e || typeof f != "function") o = n[r], i && typeof i == "object" && (!e || o) ? Sys$Component$_setProperties(o, i) : n[r] = i;
        else if (s = n["set_" + r], typeof s == "function") s.apply(n, [i]);
    else if (i instanceof Array) {
        u = f.apply(n);
        for (var h = 0, a = u.length, v = i.length; h < v; h++, a++) u[a] = i[h]
    } else typeof i == "object" && Object.getType(i) === Object && (u = f.apply(n), Sys$Component$_setProperties(u, i));
    l && n.endUpdate()
}

function Sys$Component$_setReferences(n, t) {
    var i, r, u;
    for (i in t) r = n["set_" + i], u = $find(t[i]), r.apply(n, [u])
}
var $create, $removeHandler, $get, $find;
Function.__typeName = "Function", Function.__class = !0, Function.createCallback = function(n, t) {
    return function() {
        var u = arguments.length,
            r, i;
        if (u > 0) {
            for (r = [], i = 0; i < u; i++) r[i] = arguments[i];
            return r[u] = t, n.apply(this, r)
        }
        return n.call(this, t)
    }
}, Function.createDelegate = function(n, t) {
    return function() {
        return t.apply(n, arguments)
    }
}, Function.emptyFunction = Function.emptyMethod = function() {}, Function.validateParameters = function(n, t, i) {
    return Function._validateParams(n, t, i)
}, Function._validateParams = function(n, t, i) {
    var r, e = t.length,
        u, s, f, o;
    if (i = i || typeof i == "undefined", r = Function._validateParameterCount(n, t, i), r) return r.popStackFrame(), r;
    for (u = 0, s = n.length; u < s; u++) {
        if (f = t[Math.min(u, e - 1)], o = f.name, f.parameterArray) o += "[" + (u - e + 1) + "]";
        else if (!i && u >= e) break;
        if (r = Function._validateParameter(n[u], f, o), r) return r.popStackFrame(), r
    }
    return null
}, Function._validateParameterCount = function(n, t, i) {
    var r, f, u = t.length,
        e = n.length,
        o, s, h;
    if (e < u) {
        for (o = u, r = 0; r < u; r++) s = t[r], (s.optional || s.parameterArray) && o--;
        e < o && (f = !0)
    } else if (i && e > u)
        for (f = !0, r = 0; r < u; r++)
            if (t[r].parameterArray) {
                f = !1;
                break
            }
    return f ? (h = Error.parameterCount(), h.popStackFrame(), h) : null
}, Function._validateParameter = function(n, t, i) {
    var r, o = t.type,
        l = !!t.integer,
        a = !!t.domElement,
        v = !!t.mayBeNull,
        f, e, s, h, u, c;
    if (r = Function._validateParameterType(n, o, l, a, v, i), r) return r.popStackFrame(), r;
    if (f = t.elementType, e = !!t.elementMayBeNull, o === Array && typeof n != "undefined" && n !== null && (f || !e))
        for (s = !!t.elementInteger, h = !!t.elementDomElement, u = 0; u < n.length; u++)
            if (c = n[u], r = Function._validateParameterType(c, f, s, h, e, i + "[" + u + "]"), r) return r.popStackFrame(), r;
    return null
}, Function._validateParameterType = function(n, t, i, r, u, f) {
    var e, h, o, c, s;
    if (typeof n == "undefined") return u ? null : (e = Error.argumentUndefined(f), e.popStackFrame(), e);
    if (n === null) return u ? null : (e = Error.argumentNull(f), e.popStackFrame(), e);
    if (t && t.__enum) {
        if (typeof n != "number") return e = Error.argumentType(f, Object.getType(n), t), e.popStackFrame(), e;
        if (n % 1 == 0)
            if (o = t.prototype, t.__flags && n !== 0) {
                c = n;
                for (h in o)
                    if ((s = o[h], s !== 0) && ((s & n) === s && (c -= s), c === 0)) return null
            } else
                for (h in o)
                    if (o[h] === n) return null;
        return e = Error.argumentOutOfRange(f, n, String.format(Sys.Res.enumInvalidValue, n, t.getName())), e.popStackFrame(), e
    }
    return r && (!Sys._isDomElement(n) || n.nodeType === 3) ? (e = Error.argument(f, Sys.Res.argumentDomElement), e.popStackFrame(), e) : t && !Sys._isInstanceOfType(t, n) ? (e = Error.argumentType(f, Object.getType(n), t), e.popStackFrame(), e) : t === Number && i && n % 1 != 0 ? (e = Error.argumentOutOfRange(f, n, Sys.Res.argumentInteger), e.popStackFrame(), e) : null
}, Error.__typeName = "Error", Error.__class = !0, Error.create = function(n, t) {
    var i = new Error(n),
        r;
    if (i.message = n, t)
        for (r in t) i[r] = t[r];
    return i.popStackFrame(), i
}, Error.argument = function(n, t) {
    var r = "Sys.ArgumentException: " + (t ? t : Sys.Res.argument),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.argumentNull = function(n, t) {
    var r = "Sys.ArgumentNullException: " + (t ? t : Sys.Res.argumentNull),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentNullException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.argumentOutOfRange = function(n, t, i) {
    var r = "Sys.ArgumentOutOfRangeException: " + (i ? i : Sys.Res.argumentOutOfRange),
        u;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), typeof t != "undefined" && t !== null && (r += "\n" + String.format(Sys.Res.actualValue, t)), u = Error.create(r, {
        name: "Sys.ArgumentOutOfRangeException",
        paramName: n,
        actualValue: t
    }), u.popStackFrame(), u
}, Error.argumentType = function(n, t, i, r) {
    var u = "Sys.ArgumentTypeException: ",
        f;
    return u += r ? r : t && i ? String.format(Sys.Res.argumentTypeWithTypes, t.getName(), i.getName()) : Sys.Res.argumentType, n && (u += "\n" + String.format(Sys.Res.paramName, n)), f = Error.create(u, {
        name: "Sys.ArgumentTypeException",
        paramName: n,
        actualType: t,
        expectedType: i
    }), f.popStackFrame(), f
}, Error.argumentUndefined = function(n, t) {
    var r = "Sys.ArgumentUndefinedException: " + (t ? t : Sys.Res.argumentUndefined),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentUndefinedException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.format = function(n) {
    var i = "Sys.FormatException: " + (n ? n : Sys.Res.format),
        t = Error.create(i, {
            name: "Sys.FormatException"
        });
    return t.popStackFrame(), t
}, Error.invalidOperation = function(n) {
    var i = "Sys.InvalidOperationException: " + (n ? n : Sys.Res.invalidOperation),
        t = Error.create(i, {
            name: "Sys.InvalidOperationException"
        });
    return t.popStackFrame(), t
}, Error.notImplemented = function(n) {
    var i = "Sys.NotImplementedException: " + (n ? n : Sys.Res.notImplemented),
        t = Error.create(i, {
            name: "Sys.NotImplementedException"
        });
    return t.popStackFrame(), t
}, Error.parameterCount = function(n) {
    var i = "Sys.ParameterCountException: " + (n ? n : Sys.Res.parameterCount),
        t = Error.create(i, {
            name: "Sys.ParameterCountException"
        });
    return t.popStackFrame(), t
}, Error.prototype.popStackFrame = function() {
    var r, t;
    if (typeof this.stack != "undefined" && this.stack !== null && typeof this.fileName != "undefined" && this.fileName !== null && typeof this.lineNumber != "undefined" && this.lineNumber !== null) {
        for (var n = this.stack.split("\n"), i = n[0], u = this.fileName + ":" + this.lineNumber; typeof i != "undefined" && i !== null && i.indexOf(u) === -1;) n.shift(), i = n[0];
        (r = n[1], typeof r != "undefined" && r !== null) && (t = r.match(/@(.*):(\d+)$/), typeof t != "undefined" && t !== null) && (this.fileName = t[1], this.lineNumber = parseInt(t[2]), n.shift(), this.stack = n.join("\n"))
    }
}, Object.__typeName = "Object", Object.__class = !0, Object.getType = function(n) {
    var t = n.constructor;
    return !t || typeof t != "function" || !t.__typeName || t.__typeName === "Object" ? Object : t
}, Object.getTypeName = function(n) {
    return Object.getType(n).getName()
}, String.__typeName = "String", String.__class = !0, String.prototype.endsWith = function(n) {
    return this.substr(this.length - n.length) === n
}, String.prototype.startsWith = function(n) {
    return this.substr(0, n.length) === n
}, String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.trimEnd = function() {
    return this.replace(/\s+$/, "")
}, String.prototype.trimStart = function() {
    return this.replace(/^\s+/, "")
}, String.format = function() {
    return String._toFormattedString(!1, arguments)
}, String._toFormattedString = function(n, t) {
    for (var u = "", e = t[0], o, f, i = 0;;) {
        if (o = e.indexOf("{", i), f = e.indexOf("}", i), o < 0 && f < 0) {
            u += e.slice(i);
            break
        }
        if (f > 0 && (f < o || o < 0)) {
            u += e.slice(i, f + 1), i = f + 2;
            continue
        }
        if (u += e.slice(i, o), i = o + 1, e.charAt(i) === "{") {
            u += "{", i++;
            continue
        }
        if (f < 0) break;
        var s = e.substring(i, f),
            h = s.indexOf(":"),
            l = parseInt(h < 0 ? s : s.substring(0, h), 10) + 1,
            c = h < 0 ? "" : s.substring(h + 1),
            r = t[l];
        (typeof r == "undefined" || r === null) && (r = ""), u += r.toFormattedString ? r.toFormattedString(c) : n && r.localeFormat ? r.localeFormat(c) : r.format ? r.format(c) : r.toString(), i = f + 1
    }
    return u
}, Boolean.__typeName = "Boolean", Boolean.__class = !0, Boolean.parse = function(n) {
    var t = n.trim().toLowerCase();
    return t === "false" ? !1 : t === "true" ? !0 : void 0
}, Date.__typeName = "Date", Date.__class = !0, Number.__typeName = "Number", Number.__class = !0, RegExp.__typeName = "RegExp", RegExp.__class = !0, window || (this.window = this), window.Type = Function, Type.prototype.callBaseMethod = function(n, t, i) {
    var r = Sys._getBaseMethod(this, n, t);
    return i ? r.apply(n, i) : r.apply(n)
}, Type.prototype.getBaseMethod = function(n, t) {
    return Sys._getBaseMethod(this, n, t)
}, Type.prototype.getBaseType = function() {
    return typeof this.__baseType == "undefined" ? null : this.__baseType
}, Type.prototype.getInterfaces = function() {
    for (var n = [], t = this, i, r, f, u; t;) {
        if (i = t.__interfaces, i)
            for (r = 0, f = i.length; r < f; r++) u = i[r], Array.contains(n, u) || (n[n.length] = u);
        t = t.__baseType
    }
    return n
}, Type.prototype.getName = function() {
    return typeof this.__typeName == "undefined" ? "" : this.__typeName
}, Type.prototype.implementsInterface = function(n) {
    var r, t, u, i, f;
    if (this.resolveInheritance(), r = n.getName(), t = this.__interfaceCache, t) {
        if (u = t[r], typeof u != "undefined") return u
    } else t = this.__interfaceCache = {};
    for (i = this; i;) {
        if (f = i.__interfaces, f && Array.indexOf(f, n) !== -1) return t[r] = !0;
        i = i.__baseType
    }
    return t[r] = !1
}, Type.prototype.inheritsFrom = function(n) {
    this.resolveInheritance();
    for (var t = this.__baseType; t;) {
        if (t === n) return !0;
        t = t.__baseType
    }
    return !1
}, Type.prototype.initializeBase = function(n, t) {
    return this.resolveInheritance(), this.__baseType && (t ? this.__baseType.apply(n, t) : this.__baseType.apply(n)), n
}, Type.prototype.isImplementedBy = function(n) {
    if (typeof n == "undefined" || n === null) return !1;
    var t = Object.getType(n);
    return !!(t.implementsInterface && t.implementsInterface(this))
}, Type.prototype.isInstanceOfType = function(n) {
    return Sys._isInstanceOfType(this, n)
}, Type.prototype.registerClass = function(n, t, i) {
    var r, u, f;
    if (this.prototype.constructor = this, this.__typeName = n, this.__class = !0, t && (this.__baseType = t, this.__basePrototypePending = !0), Sys.__upperCaseTypes[n.toUpperCase()] = this, i)
        for (this.__interfaces = [], r = 2, u = arguments.length; r < u; r++) f = arguments[r], this.__interfaces.push(f);
    return this
}, Type.prototype.registerInterface = function(n) {
    return Sys.__upperCaseTypes[n.toUpperCase()] = this, this.prototype.constructor = this, this.__typeName = n, this.__interface = !0, this
}, Type.prototype.resolveInheritance = function() {
    var n, t, i;
    if (this.__basePrototypePending) {
        n = this.__baseType, n.resolveInheritance();
        for (t in n.prototype) i = n.prototype[t], this.prototype[t] || (this.prototype[t] = i);
        delete this.__basePrototypePending
    }
}, Type.getRootNamespaces = function() {
    return Array.clone(Sys.__rootNamespaces)
}, Type.isClass = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__class
}, Type.isInterface = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__interface
}, Type.isNamespace = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__namespace
}, Type.parse = function(n, t) {
    var i;
    return t ? (i = Sys.__upperCaseTypes[t.getName().toUpperCase() + "." + n.toUpperCase()], i || null) : n ? (Type.__htClasses || (Type.__htClasses = {}), i = Type.__htClasses[n], i || (i = eval(n), Type.__htClasses[n] = i), i) : null
}, Type.registerNamespace = function(n) {
    for (var r = window, u = n.split("."), f, t, i = 0; i < u.length; i++) f = u[i], t = r[f], t || (t = r[f] = {}), t.__namespace || (i === 0 && n !== "Sys" && (Sys.__rootNamespaces[Sys.__rootNamespaces.length] = t), t.__namespace = !0, t.__typeName = u.slice(0, i + 1).join("."), t.getName = function() {
        return this.__typeName
    }), r = t
}, Type._checkDependency = function(n, t) {
    var i = Type._registerScript._scripts,
        r = i ? !!i[n] : !1;
    if (typeof t != "undefined" && !r) throw Error.invalidOperation(String.format(Sys.Res.requiredScriptReferenceNotIncluded, t, n));
    return r
}, Type._registerScript = function(n, t) {
    var i = Type._registerScript._scripts,
        r, f, u;
    if (i || (Type._registerScript._scripts = i = {}), i[n]) throw Error.invalidOperation(String.format(Sys.Res.scriptAlreadyLoaded, n));
    if (i[n] = !0, t)
        for (r = 0, f = t.length; r < f; r++)
            if (u = t[r], !Type._checkDependency(u)) throw Error.invalidOperation(String.format(Sys.Res.scriptDependencyNotFound, n, u));
}, Type.registerNamespace("Sys"), Sys.__upperCaseTypes = {}, Sys.__rootNamespaces = [Sys], Sys._isInstanceOfType = function(n, t) {
    if (typeof t == "undefined" || t === null) return !1;
    if (t instanceof n) return !0;
    var i = Object.getType(t);
    return !!(i === n) || i.inheritsFrom && i.inheritsFrom(n) || i.implementsInterface && i.implementsInterface(n)
}, Sys._getBaseMethod = function(n, t, i) {
    var u = n.getBaseType(),
        r;
    return u ? (r = u.prototype[i], r instanceof Function ? r : null) : null
}, Sys._isDomElement = function(n) {
    var i = !1,
        t, r;
    return typeof n.nodeType != "number" && (t = n.ownerDocument || n.document || n, t != n ? (r = t.defaultView || t.parentWindow, i = r != n) : i = typeof t.body == "undefined"), !i
}, Array.__typeName = "Array", Array.__class = !0, Array.add = Array.enqueue = function(n, t) {
    n[n.length] = t
}, Array.addRange = function(n, t) {
    n.push.apply(n, t)
}, Array.clear = function(n) {
    n.length = 0
}, Array.clone = function(n) {
    return n.length === 1 ? [n[0]] : Array.apply(null, n)
}, Array.contains = function(n, t) {
    return Sys._indexOf(n, t) >= 0
}, Array.dequeue = function(n) {
    return n.shift()
}, Array.forEach = function(n, t, i) {
    for (var u, r = 0, f = n.length; r < f; r++) u = n[r], typeof u != "undefined" && t.call(i, u, r, n)
}, Array.indexOf = function(n, t, i) {
    return Sys._indexOf(n, t, i)
}, Array.insert = function(n, t, i) {
    n.splice(t, 0, i)
}, Array.parse = function(n) {
    return n ? eval(n) : []
}, Array.remove = function(n, t) {
    var i = Sys._indexOf(n, t);
    return i >= 0 && n.splice(i, 1), i >= 0
}, Array.removeAt = function(n, t) {
    n.splice(t, 1)
}, Sys._indexOf = function(n, t, i) {
    var u, r;
    if (typeof t == "undefined") return -1;
    if (u = n.length, u !== 0)
        for (i = +i, isNaN(i) ? i = 0 : (isFinite(i) && (i = i - i % 1), i < 0 && (i = Math.max(0, u + i))), r = i; r < u; r++)
            if (typeof n[r] != "undefined" && n[r] === t) return r;
    return -1
}, Type._registerScript._scripts = {
    "MicrosoftAjaxCore.js": !0,
    "MicrosoftAjaxGlobalization.js": !0,
    "MicrosoftAjaxSerialization.js": !0,
    "MicrosoftAjaxComponentModel.js": !0,
    "MicrosoftAjaxHistory.js": !0,
    "MicrosoftAjaxNetwork.js": !0,
    "MicrosoftAjaxWebServices.js": !0
}, Sys.IDisposable = function() {}, Sys.IDisposable.prototype = {}, Sys.IDisposable.registerInterface("Sys.IDisposable"), Sys.StringBuilder = function(n) {
    this._parts = typeof n != "undefined" && n !== null && n !== "" ? [n.toString()] : [], this._value = {}, this._len = 0
}, Sys.StringBuilder.prototype = {
    append: function(n) {
        this._parts[this._parts.length] = n
    },
    appendLine: function(n) {
        this._parts[this._parts.length] = typeof n == "undefined" || n === null || n === "" ? "\r\n" : n + "\r\n"
    },
    clear: function() {
        this._parts = [], this._value = {}, this._len = 0
    },
    isEmpty: function() {
        return this._parts.length === 0 ? !0 : this.toString() === ""
    },
    toString: function(n) {
        var t, r, i;
        if (n = n || "", t = this._parts, this._len !== t.length && (this._value = {}, this._len = t.length), r = this._value, typeof r[n] == "undefined") {
            if (n !== "")
                for (i = 0; i < t.length;) typeof t[i] == "undefined" || t[i] === "" || t[i] === null ? t.splice(i, 1) : i++;
            r[n] = this._parts.join(n)
        }
        return r[n]
    }
}, Sys.StringBuilder.registerClass("Sys.StringBuilder"), Sys.Browser = {}, Sys.Browser.InternetExplorer = {}, Sys.Browser.Firefox = {}, Sys.Browser.Safari = {}, Sys.Browser.Opera = {}, Sys.Browser.agent = null, Sys.Browser.hasDebuggerStatement = !1, Sys.Browser.name = navigator.appName, Sys.Browser.version = parseFloat(navigator.appVersion), Sys.Browser.documentMode = 0, navigator.userAgent.indexOf(" MSIE ") > -1 ? (Sys.Browser.agent = Sys.Browser.InternetExplorer, Sys.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]), Sys.Browser.version >= 8 && document.documentMode >= 7 && (Sys.Browser.documentMode = document.documentMode), Sys.Browser.hasDebuggerStatement = !0) : navigator.userAgent.indexOf(" Firefox/") > -1 ? (Sys.Browser.agent = Sys.Browser.Firefox, Sys.Browser.version = parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]), Sys.Browser.name = "Firefox", Sys.Browser.hasDebuggerStatement = !0) : navigator.userAgent.indexOf(" AppleWebKit/") > -1 ? (Sys.Browser.agent = Sys.Browser.Safari, Sys.Browser.version = parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]), Sys.Browser.name = "Safari") : navigator.userAgent.indexOf("Opera/") > -1 && (Sys.Browser.agent = Sys.Browser.Opera), Sys.EventArgs = function() {}, Sys.EventArgs.registerClass("Sys.EventArgs"), Sys.EventArgs.Empty = new Sys.EventArgs, Sys.CancelEventArgs = function() {
    Sys.CancelEventArgs.initializeBase(this), this._cancel = !1
}, Sys.CancelEventArgs.prototype = {
    get_cancel: function() {
        return this._cancel
    },
    set_cancel: function(n) {
        this._cancel = n
    }
}, Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs", Sys.EventArgs), Type.registerNamespace("Sys.UI"), Sys._Debug = function() {}, Sys._Debug.prototype = {
    _appendConsole: function(n) {
        typeof Debug != "undefined" && Debug.writeln, window.console && window.console.log && window.console.log(n), window.opera && window.opera.postError(n), window.debugService && window.debugService.trace(n)
    },
    _appendTrace: function(n) {
        var t = document.getElementById("TraceConsole");
        t && t.tagName.toUpperCase() === "TEXTAREA" && (t.value += n + "\n")
    },
    assert: function(n, t, i) {
        n || (t = i && this.assert.caller ? String.format(Sys.Res.assertFailedCaller, t, this.assert.caller) : String.format(Sys.Res.assertFailed, t), confirm(String.format(Sys.Res.breakIntoDebugger, t)) && this.fail(t))
    },
    clearTrace: function() {
        var n = document.getElementById("TraceConsole");
        n && n.tagName.toUpperCase() === "TEXTAREA" && (n.value = "")
    },
    fail: function(n) {
        this._appendConsole(n), Sys.Browser.hasDebuggerStatement && eval("debugger")
    },
    trace: function(n) {
        this._appendConsole(n), this._appendTrace(n)
    },
    traceDump: function(n, t) {
        var i = this._traceDump(n, t, !0)
    },
    _traceDump: function(n, t, i, r, u) {
        var e, o, f, c, l, s, h;
        if (t = t ? t : "traceDump", r = r ? r : "", n === null) {
            this.trace(r + t + ": null");
            return
        }
        switch (typeof n) {
            case "undefined":
                this.trace(r + t + ": Undefined");
                break;
            case "number":
            case "string":
            case "boolean":
                this.trace(r + t + ": " + n);
                break;
            default:
                if (Date.isInstanceOfType(n) || RegExp.isInstanceOfType(n)) {
                    this.trace(r + t + ": " + n.toString());
                    break
                }
                if (u) {
                    if (Array.contains(u, n)) {
                        this.trace(r + t + ": ...");
                        return
                    }
                } else u = [];
                if (Array.add(u, n), n == window || n === document || window.HTMLElement && n instanceof HTMLElement || typeof n.nodeName == "string") e = n.tagName ? n.tagName : "DomElement", n.id && (e += " - " + n.id), this.trace(r + t + " {" + e + "}");
                else if (o = Object.getTypeName(n), this.trace(r + t + (typeof o == "string" ? " {" + o + "}" : "")), r === "" || i)
                    if (r += "    ", Array.isInstanceOfType(n))
                        for (c = n.length, f = 0; f < c; f++) this._traceDump(n[f], "[" + f + "]", i, r, u);
                    else
                        for (s in n) h = n[s], Function.isInstanceOfType(h) || this._traceDump(h, s, i, r, u);
                Array.remove(u, n)
        }
    }
}, Sys._Debug.registerClass("Sys._Debug"), Sys.Debug = new Sys._Debug, Sys.Debug.isDebug = !1, Type.prototype.registerEnum = function(n, t) {
    Sys.__upperCaseTypes[n.toUpperCase()] = this;
    for (var i in this.prototype) this[i] = this.prototype[i];
    this.__typeName = n, this.parse = Sys$Enum$parse, this.__string = this.toString(), this.toString = Sys$Enum$toString, this.__flags = t, this.__enum = !0
}, Type.isEnum = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__enum
}, Type.isFlags = function(n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__flags
}, Sys.CollectionChange = function(n, t, i, r, u) {
    this.action = n, t && (t instanceof Array || (t = [t])), this.newItems = t || null, typeof i != "number" && (i = -1), this.newStartingIndex = i, r && (r instanceof Array || (r = [r])), this.oldItems = r || null, typeof u != "number" && (u = -1), this.oldStartingIndex = u
}, Sys.CollectionChange.registerClass("Sys.CollectionChange"), Sys.NotifyCollectionChangedAction = function() {
    throw Error.notImplemented();
}, Sys.NotifyCollectionChangedAction.prototype = {
    add: 0,
    remove: 1,
    reset: 2
}, Sys.NotifyCollectionChangedAction.registerEnum("Sys.NotifyCollectionChangedAction"), Sys.NotifyCollectionChangedEventArgs = function(n) {
    this._changes = n, Sys.NotifyCollectionChangedEventArgs.initializeBase(this)
}, Sys.NotifyCollectionChangedEventArgs.prototype = {
    get_changes: function() {
        return this._changes || []
    }
}, Sys.NotifyCollectionChangedEventArgs.registerClass("Sys.NotifyCollectionChangedEventArgs", Sys.EventArgs), Sys.Observer = function() {}, Sys.Observer.registerClass("Sys.Observer"), Sys.Observer.makeObservable = function(n) {
    var i = n instanceof Array,
        t = Sys.Observer;
    return n.setValue === t._observeMethods.setValue ? n : (t._addMethods(n, t._observeMethods), i && t._addMethods(n, t._arrayMethods), n)
}, Sys.Observer._addMethods = function(n, t) {
    for (var i in t) n[i] = t[i]
}, Sys.Observer._addEventHandler = function(n, t, i) {
    Sys.Observer._getContext(n, !0).events._addHandler(t, i)
}, Sys.Observer.addEventHandler = function(n, t, i) {
    Sys.Observer._addEventHandler(n, t, i)
}, Sys.Observer._removeEventHandler = function(n, t, i) {
    Sys.Observer._getContext(n, !0).events._removeHandler(t, i)
}, Sys.Observer.removeEventHandler = function(n, t, i) {
    Sys.Observer._removeEventHandler(n, t, i)
}, Sys.Observer.raiseEvent = function(n, t, i) {
    var u = Sys.Observer._getContext(n),
        r;
    u && (r = u.events.getHandler(t), r && r(n, i))
}, Sys.Observer.addPropertyChanged = function(n, t) {
    Sys.Observer._addEventHandler(n, "propertyChanged", t)
}, Sys.Observer.removePropertyChanged = function(n, t) {
    Sys.Observer._removeEventHandler(n, "propertyChanged", t)
}, Sys.Observer.beginUpdate = function(n) {
    Sys.Observer._getContext(n, !0).updating = !0
}, Sys.Observer.endUpdate = function(n) {
    var t = Sys.Observer._getContext(n),
        i, r;
    t && t.updating && (t.updating = !1, i = t.dirty, t.dirty = !1, i && (n instanceof Array && (r = t.changes, t.changes = null, Sys.Observer.raiseCollectionChanged(n, r)), Sys.Observer.raisePropertyChanged(n, "")))
}, Sys.Observer.isUpdating = function(n) {
    var t = Sys.Observer._getContext(n);
    return t ? t.updating : !1
}, Sys.Observer._setValue = function(n, t, i) {
    for (var r, s, a = n, f = t.split("."), c, v, l, u, o, e = 0, h = f.length - 1; e < h; e++)
        if (c = f[e], r = n["get_" + c], n = typeof r == "function" ? r.call(n) : n[c], v = typeof n, n === null || v === "undefined") throw Error.invalidOperation(String.format(Sys.Res.nullReferenceInPath, t));
    if (u = f[h], r = n["get_" + u], s = n["set_" + u], l = typeof r == "function" ? r.call(n) : n[u], typeof s == "function" ? s.call(n, i) : n[u] = i, l !== i) {
        if (o = Sys.Observer._getContext(a), o && o.updating) {
            o.dirty = !0;
            return
        }
        Sys.Observer.raisePropertyChanged(a, f[0])
    }
}, Sys.Observer.setValue = function(n, t, i) {
    Sys.Observer._setValue(n, t, i)
}, Sys.Observer.raisePropertyChanged = function(n, t) {
    Sys.Observer.raiseEvent(n, "propertyChanged", new Sys.PropertyChangedEventArgs(t))
}, Sys.Observer.addCollectionChanged = function(n, t) {
    Sys.Observer._addEventHandler(n, "collectionChanged", t)
}, Sys.Observer.removeCollectionChanged = function(n, t) {
    Sys.Observer._removeEventHandler(n, "collectionChanged", t)
}, Sys.Observer._collectionChange = function(n, t) {
    var i = Sys.Observer._getContext(n),
        r;
    i && i.updating ? (i.dirty = !0, r = i.changes, r ? r.push(t) : i.changes = r = [t]) : (Sys.Observer.raiseCollectionChanged(n, [t]), Sys.Observer.raisePropertyChanged(n, "length"))
}, Sys.Observer.add = function(n, t) {
    var i = new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, [t], n.length);
    Array.add(n, t), Sys.Observer._collectionChange(n, i)
}, Sys.Observer.addRange = function(n, t) {
    var i = new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, t, n.length);
    Array.addRange(n, t), Sys.Observer._collectionChange(n, i)
}, Sys.Observer.clear = function(n) {
    var t = Array.clone(n);
    Array.clear(n), Sys.Observer._collectionChange(n, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.reset, null, -1, t, 0))
}, Sys.Observer.insert = function(n, t, i) {
    Array.insert(n, t, i), Sys.Observer._collectionChange(n, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, [i], t))
}, Sys.Observer.remove = function(n, t) {
    var i = Array.indexOf(n, t);
    return i !== -1 ? (Array.remove(n, t), Sys.Observer._collectionChange(n, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove, null, -1, [t], i)), !0) : !1
}, Sys.Observer.removeAt = function(n, t) {
    if (t > -1 && t < n.length) {
        var i = n[t];
        Array.removeAt(n, t), Sys.Observer._collectionChange(n, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove, null, -1, [i], t))
    }
}, Sys.Observer.raiseCollectionChanged = function(n, t) {
    Sys.Observer.raiseEvent(n, "collectionChanged", new Sys.NotifyCollectionChangedEventArgs(t))
}, Sys.Observer._observeMethods = {
    add_propertyChanged: function(n) {
        Sys.Observer._addEventHandler(this, "propertyChanged", n)
    },
    remove_propertyChanged: function(n) {
        Sys.Observer._removeEventHandler(this, "propertyChanged", n)
    },
    addEventHandler: function(n, t) {
        Sys.Observer._addEventHandler(this, n, t)
    },
    removeEventHandler: function(n, t) {
        Sys.Observer._removeEventHandler(this, n, t)
    },
    get_isUpdating: function() {
        return Sys.Observer.isUpdating(this)
    },
    beginUpdate: function() {
        Sys.Observer.beginUpdate(this)
    },
    endUpdate: function() {
        Sys.Observer.endUpdate(this)
    },
    setValue: function(n, t) {
        Sys.Observer._setValue(this, n, t)
    },
    raiseEvent: function(n, t) {
        Sys.Observer.raiseEvent(this, n, t)
    },
    raisePropertyChanged: function(n) {
        Sys.Observer.raiseEvent(this, "propertyChanged", new Sys.PropertyChangedEventArgs(n))
    }
}, Sys.Observer._arrayMethods = {
    add_collectionChanged: function(n) {
        Sys.Observer._addEventHandler(this, "collectionChanged", n)
    },
    remove_collectionChanged: function(n) {
        Sys.Observer._removeEventHandler(this, "collectionChanged", n)
    },
    add: function(n) {
        Sys.Observer.add(this, n)
    },
    addRange: function(n) {
        Sys.Observer.addRange(this, n)
    },
    clear: function() {
        Sys.Observer.clear(this)
    },
    insert: function(n, t) {
        Sys.Observer.insert(this, n, t)
    },
    remove: function(n) {
        return Sys.Observer.remove(this, n)
    },
    removeAt: function(n) {
        Sys.Observer.removeAt(this, n)
    },
    raiseCollectionChanged: function(n) {
        Sys.Observer.raiseEvent(this, "collectionChanged", new Sys.NotifyCollectionChangedEventArgs(n))
    }
}, Sys.Observer._getContext = function(n, t) {
    var i = n._observerContext;
    return i ? i() : t ? (n._observerContext = Sys.Observer._createContext())() : null
}, Sys.Observer._createContext = function() {
    var n = {
        events: new Sys.EventHandlerList
    };
    return function() {
        return n
    }
}, Date._appendPreOrPostMatch = function(n, t) {
    for (var f = 0, i = !1, u, r = 0, e = n.length; r < e; r++) {
        u = n.charAt(r);
        switch (u) {
            case "'":
                i ? t.append("'") : f++, i = !1;
                break;
            case "\\":
                i && t.append("\\"), i = !i;
                break;
            default:
                t.append(u), i = !1
        }
    }
    return f
}, Date._expandFormat = function(n, t) {
    t || (t = "F");
    var i = t.length;
    if (i === 1) switch (t) {
        case "d":
            return n.ShortDatePattern;
        case "D":
            return n.LongDatePattern;
        case "t":
            return n.ShortTimePattern;
        case "T":
            return n.LongTimePattern;
        case "f":
            return n.LongDatePattern + " " + n.ShortTimePattern;
        case "F":
            return n.FullDateTimePattern;
        case "M":
        case "m":
            return n.MonthDayPattern;
        case "s":
            return n.SortableDateTimePattern;
        case "Y":
        case "y":
            return n.YearMonthPattern;
        default:
            throw Error.format(Sys.Res.formatInvalidString);
    } else i === 2 && t.charAt(0) === "%" && (t = t.charAt(1));
    return t
}, Date._expandYear = function(n, t) {
    var r = new Date,
        u = Date._getEra(r),
        i;
    return t < 100 && (i = Date._getEraYear(r, n, u), t += i - i % 100, t > n.Calendar.TwoDigitYearMax && (t -= 100)), t
}, Date._getEra = function(n, t) {
    var r, u, i, f;
    if (!t) return 0;
    for (u = n.getTime(), i = 0, f = t.length; i < f; i += 4)
        if (r = t[i + 2], r === null || u >= r) return i;
    return 0
}, Date._getEraYear = function(n, t, i, r) {
    var u = n.getFullYear();
    return !r && t.eras && (u -= t.eras[i + 3]), u
}, Date._getParseRegExp = function(n, t) {
    var r, c, l, e;
    if (n._parseRegExp) {
        if (n._parseRegExp[t]) return n._parseRegExp[t]
    } else n._parseRegExp = {};
    r = Date._expandFormat(n, t), r = r.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1");
    for (var i = new Sys.StringBuilder("^"), o = [], f = 0, s = 0, h = Date._getTokenRegExp(), u;
        (u = h.exec(r)) !== null;) {
        if (c = r.slice(f, u.index), f = h.lastIndex, s += Date._appendPreOrPostMatch(c, i), s % 2 == 1) {
            i.append(u[0]);
            continue
        }
        switch (u[0]) {
            case "dddd":
            case "ddd":
            case "MMMM":
            case "MMM":
            case "gg":
            case "g":
                i.append("(\\D+)");
                break;
            case "tt":
            case "t":
                i.append("(\\D*)");
                break;
            case "yyyy":
                i.append("(\\d{4})");
                break;
            case "fff":
                i.append("(\\d{3})");
                break;
            case "ff":
                i.append("(\\d{2})");
                break;
            case "f":
                i.append("(\\d)");
                break;
            case "dd":
            case "d":
            case "MM":
            case "M":
            case "yy":
            case "y":
            case "HH":
            case "H":
            case "hh":
            case "h":
            case "mm":
            case "m":
            case "ss":
            case "s":
                i.append("(\\d\\d?)");
                break;
            case "zzz":
                i.append("([+-]?\\d\\d?:\\d{2})");
                break;
            case "zz":
            case "z":
                i.append("([+-]?\\d\\d?)");
                break;
            case "/":
                i.append("(\\" + n.DateSeparator + ")")
        }
        Array.add(o, u[0])
    }
    return Date._appendPreOrPostMatch(r.slice(f), i), i.append("$"), l = i.toString().replace(/\s+/g, "\\s+"), e = {
        regExp: l,
        groups: o
    }, n._parseRegExp[t] = e, e
}, Date._getTokenRegExp = function() {
    return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
}, Date.parseLocale = function(n) {
    return Date._parse(n, Sys.CultureInfo.CurrentCulture, arguments)
}, Date.parseInvariant = function(n) {
    return Date._parse(n, Sys.CultureInfo.InvariantCulture, arguments)
}, Date._parse = function(n, t, i) {
    for (var u, e, o, s = !1, r = 1, f = i.length; r < f; r++)
        if (e = i[r], e && (s = !0, u = Date._parseExact(n, e, t), u)) return u;
    if (!s)
        for (o = t._getDateTimeFormats(), r = 0, f = o.length; r < f; r++)
            if (u = Date._parseExact(n, o[r], t), u) return u;
    return null
}, Date._parseExact = function(n, t, i) {
    var b, et, r, tt, k, y, v, w, ht, u, rt, p, ft;
    n = n.trim();
    var s = i.dateTimeFormat,
        ct = Date._getParseRegExp(s, t),
        st = new RegExp(ct.regExp).exec(n);
    if (st === null) return null;
    var ot = ct.groups,
        it = null,
        e = null,
        f = null,
        c = null,
        l = null,
        o = 0,
        a, nt = 0,
        d = 0,
        h = 0,
        g = null,
        ut = !1;
    for (b = 0, et = ot.length; b < et; b++)
        if (r = st[b + 1], r) switch (ot[b]) {
            case "dd":
            case "d":
                if (c = parseInt(r, 10), c < 1 || c > 31) return null;
                break;
            case "MMMM":
                if (f = i._getMonthIndex(r), f < 0 || f > 11) return null;
                break;
            case "MMM":
                if (f = i._getAbbrMonthIndex(r), f < 0 || f > 11) return null;
                break;
            case "M":
            case "MM":
                if (f = parseInt(r, 10) - 1, f < 0 || f > 11) return null;
                break;
            case "y":
            case "yy":
                if (e = Date._expandYear(s, parseInt(r, 10)), e < 0 || e > 9999) return null;
                break;
            case "yyyy":
                if (e = parseInt(r, 10), e < 0 || e > 9999) return null;
                break;
            case "h":
            case "hh":
                if (o = parseInt(r, 10), o === 12 && (o = 0), o < 0 || o > 11) return null;
                break;
            case "H":
            case "HH":
                if (o = parseInt(r, 10), o < 0 || o > 23) return null;
                break;
            case "m":
            case "mm":
                if (nt = parseInt(r, 10), nt < 0 || nt > 59) return null;
                break;
            case "s":
            case "ss":
                if (d = parseInt(r, 10), d < 0 || d > 59) return null;
                break;
            case "tt":
            case "t":
                if (tt = r.toUpperCase(), ut = tt === s.PMDesignator.toUpperCase(), !ut && tt !== s.AMDesignator.toUpperCase()) return null;
                break;
            case "f":
                if (h = parseInt(r, 10) * 100, h < 0 || h > 999) return null;
                break;
            case "ff":
                if (h = parseInt(r, 10) * 10, h < 0 || h > 999) return null;
                break;
            case "fff":
                if (h = parseInt(r, 10), h < 0 || h > 999) return null;
                break;
            case "dddd":
                if (l = i._getDayIndex(r), l < 0 || l > 6) return null;
                break;
            case "ddd":
                if (l = i._getAbbrDayIndex(r), l < 0 || l > 6) return null;
                break;
            case "zzz":
                if ((k = r.split(/:/), k.length !== 2) || (a = parseInt(k[0], 10), a < -12 || a > 13) || (y = parseInt(k[1], 10), y < 0 || y > 59)) return null;
                g = a * 60 + (r.startsWith("-") ? -y : y);
                break;
            case "z":
            case "zz":
                if (a = parseInt(r, 10), a < -12 || a > 13) return null;
                g = a * 60;
                break;
            case "g":
            case "gg":
                if (v = r, !v || !s.eras) return null;
                for (v = v.toLowerCase().trim(), w = 0, ht = s.eras.length; w < ht; w += 4)
                    if (v === s.eras[w + 1].toLowerCase()) {
                        it = w;
                        break
                    }
                if (it === null) return null
        }
        if (u = new Date, p = s.Calendar.convert, rt = p ? p.fromGregorian(u)[0] : u.getFullYear(), e === null ? e = rt : s.eras && (e += s.eras[(it || 0) + 3]), f === null && (f = 0), c === null && (c = 1), p) {
            if (u = p.toGregorian(e, f, c), u === null) return null
        } else if ((u.setFullYear(e, f, c), u.getDate() !== c) || l !== null && u.getDay() !== l) return null;
    return ut && o < 12 && (o += 12), u.setHours(o, nt, d, h), g !== null && (ft = u.getMinutes() - (g + u.getTimezoneOffset()), u.setHours(u.getHours() + parseInt(ft / 60, 10), ft % 60)), u
}, Date.prototype.format = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
}, Date.prototype.localeFormat = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
}, Date.prototype._toFormattedString = function(n, t) {
    function f(n) {
        return n < 10 ? "0" + n : n.toString()
    }

    function w(n) {
        return n < 10 ? "00" + n : n < 100 ? "0" + n : n.toString()
    }

    function tt(n) {
        return n < 10 ? "000" + n : n < 100 ? "00" + n : n < 1e3 ? "0" + n : n.toString()
    }

    function g() {
        return s || k ? s : (s = d.test(n), k = !0, s)
    }
    var r = t.dateTimeFormat,
        p = r.Calendar.convert,
        a, b, h, l, i, u, s, k, d, v, y, e;
    if (!n || !n.length || n === "i") return t && t.name.length ? p ? this._toFormattedString(r.FullDateTimePattern, t) : (a = new Date(this.getTime()), b = Date._getEra(this, r.eras), a.setFullYear(Date._getEraYear(this, r, b)), a.toLocaleString()) : this.toString();
    for (h = r.eras, l = n === "s", n = Date._expandFormat(r, n), i = new Sys.StringBuilder, d = /([^d]|^)(d|dd)([^d]|$)/g, v = 0, y = Date._getTokenRegExp(), !l && p && (e = p.fromGregorian(this));;) {
        var it = y.lastIndex,
            c = y.exec(n),
            nt = n.slice(it, c ? c.index : n.length);
        if (v += Date._appendPreOrPostMatch(nt, i), !c) break;
        if (v % 2 == 1) {
            i.append(c[0]);
            continue
        }

        function o(n, t) {
            if (e) return e[t];
            switch (t) {
                case 0:
                    return n.getFullYear();
                case 1:
                    return n.getMonth();
                case 2:
                    return n.getDate()
            }
        }
        switch (c[0]) {
            case "dddd":
                i.append(r.DayNames[this.getDay()]);
                break;
            case "ddd":
                i.append(r.AbbreviatedDayNames[this.getDay()]);
                break;
            case "dd":
                s = !0, i.append(f(o(this, 2)));
                break;
            case "d":
                s = !0, i.append(o(this, 2));
                break;
            case "MMMM":
                i.append(r.MonthGenitiveNames && g() ? r.MonthGenitiveNames[o(this, 1)] : r.MonthNames[o(this, 1)]);
                break;
            case "MMM":
                i.append(r.AbbreviatedMonthGenitiveNames && g() ? r.AbbreviatedMonthGenitiveNames[o(this, 1)] : r.AbbreviatedMonthNames[o(this, 1)]);
                break;
            case "MM":
                i.append(f(o(this, 1) + 1));
                break;
            case "M":
                i.append(o(this, 1) + 1);
                break;
            case "yyyy":
                i.append(tt(e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, h), l)));
                break;
            case "yy":
                i.append(f((e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, h), l)) % 100));
                break;
            case "y":
                i.append((e ? e[0] : Date._getEraYear(this, r, Date._getEra(this, h), l)) % 100);
                break;
            case "hh":
                u = this.getHours() % 12, u === 0 && (u = 12), i.append(f(u));
                break;
            case "h":
                u = this.getHours() % 12, u === 0 && (u = 12), i.append(u);
                break;
            case "HH":
                i.append(f(this.getHours()));
                break;
            case "H":
                i.append(this.getHours());
                break;
            case "mm":
                i.append(f(this.getMinutes()));
                break;
            case "m":
                i.append(this.getMinutes());
                break;
            case "ss":
                i.append(f(this.getSeconds()));
                break;
            case "s":
                i.append(this.getSeconds());
                break;
            case "tt":
                i.append(this.getHours() < 12 ? r.AMDesignator : r.PMDesignator);
                break;
            case "t":
                i.append((this.getHours() < 12 ? r.AMDesignator : r.PMDesignator).charAt(0));
                break;
            case "f":
                i.append(w(this.getMilliseconds()).charAt(0));
                break;
            case "ff":
                i.append(w(this.getMilliseconds()).substr(0, 2));
                break;
            case "fff":
                i.append(w(this.getMilliseconds()));
                break;
            case "z":
                u = this.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + Math.floor(Math.abs(u)));
                break;
            case "zz":
                u = this.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + f(Math.floor(Math.abs(u))));
                break;
            case "zzz":
                u = this.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + f(Math.floor(Math.abs(u))) + ":" + f(Math.abs(this.getTimezoneOffset() % 60)));
                break;
            case "g":
            case "gg":
                r.eras && i.append(r.eras[Date._getEra(this, h) + 1]);
                break;
            case "/":
                i.append(r.DateSeparator)
        }
    }
    return i.toString()
}, String.localeFormat = function() {
    return String._toFormattedString(!0, arguments)
}, Number.parseLocale = function(n) {
    return Number._parse(n, Sys.CultureInfo.CurrentCulture)
}, Number.parseInvariant = function(n) {
    return Number._parse(n, Sys.CultureInfo.InvariantCulture)
}, Number._parse = function(n, t) {
    var l, f, e, r, a, v, y, h, c;
    if (n = n.trim(), n.match(/^[+-]?infinity$/i)) return parseFloat(n);
    if (n.match(/^0x[a-f0-9]+$/i)) return parseInt(n);
    var i = t.numberFormat,
        o = Number._parseNumberNegativePattern(n, i, i.NumberNegativePattern),
        s = o[0],
        u = o[1];
    return (s === "" && i.NumberNegativePattern !== 1 && (o = Number._parseNumberNegativePattern(n, i, 1), s = o[0], u = o[1]), s === "" && (s = "+"), e = u.indexOf("e"), e < 0 && (e = u.indexOf("E")), e < 0 ? (f = u, l = null) : (f = u.substr(0, e), l = u.substr(e + 1)), v = f.indexOf(i.NumberDecimalSeparator), v < 0 ? (r = f, a = null) : (r = f.substr(0, v), a = f.substr(v + i.NumberDecimalSeparator.length)), r = r.split(i.NumberGroupSeparator).join(""), y = i.NumberGroupSeparator.replace(/\u00A0/g, " "), i.NumberGroupSeparator !== y && (r = r.split(y).join("")), h = s + r, a !== null && (h += "." + a), l !== null && (c = Number._parseNumberNegativePattern(l, i, 1), c[0] === "" && (c[0] = "+"), h += "e" + c[0] + c[1]), h.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/)) ? parseFloat(h) : Number.NaN
}, Number._parseNumberNegativePattern = function(n, t, i) {
    var r = t.NegativeSign,
        u = t.PositiveSign;
    switch (i) {
        case 4:
            r = " " + r, u = " " + u;
        case 3:
            if (n.endsWith(r)) return ["-", n.substr(0, n.length - r.length)];
            if (n.endsWith(u)) return ["+", n.substr(0, n.length - u.length)];
            break;
        case 2:
            r += " ", u += " ";
        case 1:
            if (n.startsWith(r)) return ["-", n.substr(r.length)];
            if (n.startsWith(u)) return ["+", n.substr(u.length)];
            break;
        case 0:
            if (n.startsWith("(") && n.endsWith(")")) return ["-", n.substr(1, n.length - 2)]
    }
    return ["", n]
}, Number.prototype.format = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
}, Number.prototype.localeFormat = function(n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
}, Number.prototype._toFormattedString = function(n, t) {
    function s(n, t, i) {
        for (var r = n.length; r < t; r++) n = i ? "0" + n : n + "0";
        return n
    }

    function c(n, t, i, r, u) {
        var a = i[0],
            v = 1,
            p = Math.pow(10, t),
            y = Math.round(n * p) / p,
            w, h, c;
        isFinite(y) || (y = n), n = y;
        var e = n.toString(),
            f = "",
            o, l = e.split(/e/i);
        for (e = l[0], o = l.length > 1 ? parseInt(l[1]) : 0, l = e.split("."), e = l[0], f = l.length > 1 ? l[1] : "", o > 0 ? (f = s(f, o, !1), e += f.slice(0, o), f = f.substr(o)) : o < 0 && (o = -o, e = s(e, o + 1, !0), f = e.slice(-o, e.length) + f, e = e.slice(0, -o)), t > 0 ? (f = f.length > t ? f.slice(0, t) : s(f, t, !1), f = u + f) : f = "", h = e.length - 1, c = ""; h >= 0;) {
            if (a === 0 || a > h) return c.length > 0 ? e.slice(0, h + 1) + r + c + f : e.slice(0, h + 1) + f;
            c = c.length > 0 ? e.slice(h - a + 1, h + 1) + r + c : e.slice(h - a + 1, h + 1), h -= a, v < i.length && (a = i[v], v++)
        }
        return e.slice(0, h + 1) + r + c + f
    }
    var i, f, r, u, h, e, l, o;
    if (!n || n.length === 0 || n === "i") return t && t.name.length > 0 ? this.toLocaleString() : this.toString();
    var w = ["n %", "n%", "%n"],
        p = ["-n %", "-n%", "-%n"],
        y = ["(n)", "-n", "- n", "n-", "n -"],
        v = ["$n", "n$", "$ n", "n $"],
        a = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
    i = t.numberFormat, f = Math.abs(this), n || (n = "D"), r = -1, n.length > 1 && (r = parseInt(n.slice(1), 10));
    switch (n.charAt(0)) {
        case "d":
        case "D":
            u = "n", r !== -1 && (f = s("" + f, r, !0)), this < 0 && (f = -f);
            break;
        case "c":
        case "C":
            u = this < 0 ? a[i.CurrencyNegativePattern] : v[i.CurrencyPositivePattern], r === -1 && (r = i.CurrencyDecimalDigits), f = c(Math.abs(this), r, i.CurrencyGroupSizes, i.CurrencyGroupSeparator, i.CurrencyDecimalSeparator);
            break;
        case "n":
        case "N":
            u = this < 0 ? y[i.NumberNegativePattern] : "n", r === -1 && (r = i.NumberDecimalDigits), f = c(Math.abs(this), r, i.NumberGroupSizes, i.NumberGroupSeparator, i.NumberDecimalSeparator);
            break;
        case "p":
        case "P":
            u = this < 0 ? p[i.PercentNegativePattern] : w[i.PercentPositivePattern], r === -1 && (r = i.PercentDecimalDigits), f = c(Math.abs(this) * 100, r, i.PercentGroupSizes, i.PercentGroupSeparator, i.PercentDecimalSeparator);
            break;
        default:
            throw Error.format(Sys.Res.formatBadFormatSpecifier);
    }
    for (h = /n|\$|-|%/g, e = "";;) {
        if (l = h.lastIndex, o = h.exec(u), e += u.slice(l, o ? o.index : u.length), !o) break;
        switch (o[0]) {
            case "n":
                e += f;
                break;
            case "$":
                e += i.CurrencySymbol;
                break;
            case "-":
                /[1-9]/.test(f) && (e += i.NegativeSign);
                break;
            case "%":
                e += i.PercentSymbol
        }
    }
    return e
}, Sys.CultureInfo = function(n, t, i) {
    this.name = n, this.numberFormat = t, this.dateTimeFormat = i
}, Sys.CultureInfo.prototype = {
    _getDateTimeFormats: function() {
        if (!this._dateTimeFormats) {
            var n = this.dateTimeFormat;
            this._dateTimeFormats = [n.MonthDayPattern, n.YearMonthPattern, n.ShortDatePattern, n.ShortTimePattern, n.LongDatePattern, n.LongTimePattern, n.FullDateTimePattern, n.RFC1123Pattern, n.SortableDateTimePattern, n.UniversalSortableDateTimePattern]
        }
        return this._dateTimeFormats
    },
    _getIndex: function(n, t, i) {
        var u = this._toUpper(n),
            r = Array.indexOf(t, u);
        return r === -1 && (r = Array.indexOf(i, u)), r
    },
    _getMonthIndex: function(n) {
        return this._upperMonths || (this._upperMonths = this._toUpperArray(this.dateTimeFormat.MonthNames), this._upperMonthsGenitive = this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames)), this._getIndex(n, this._upperMonths, this._upperMonthsGenitive)
    },
    _getAbbrMonthIndex: function(n) {
        return this._upperAbbrMonths || (this._upperAbbrMonths = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames), this._upperAbbrMonthsGenitive = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames)), this._getIndex(n, this._upperAbbrMonths, this._upperAbbrMonthsGenitive)
    },
    _getDayIndex: function(n) {
        return this._upperDays || (this._upperDays = this._toUpperArray(this.dateTimeFormat.DayNames)), Array.indexOf(this._upperDays, this._toUpper(n))
    },
    _getAbbrDayIndex: function(n) {
        return this._upperAbbrDays || (this._upperAbbrDays = this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames)), Array.indexOf(this._upperAbbrDays, this._toUpper(n))
    },
    _toUpperArray: function(n) {
        for (var i = [], t = 0, r = n.length; t < r; t++) i[t] = this._toUpper(n[t]);
        return i
    },
    _toUpper: function(n) {
        return n.split("Â ").join(" ").toUpperCase()
    }
}, Sys.CultureInfo.registerClass("Sys.CultureInfo"), Sys.CultureInfo._parse = function(n) {
    var t = n.dateTimeFormat;
    return t && !t.eras && (t.eras = n.eras), new Sys.CultureInfo(n.name, n.numberFormat, t)
}, Sys.CultureInfo.InvariantCulture = Sys.CultureInfo._parse({
    name: "",
    numberFormat: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: ".",
        IsReadOnly: !0,
        CurrencyGroupSizes: [3],
        NumberGroupSizes: [3],
        PercentGroupSizes: [3],
        CurrencyGroupSeparator: ",",
        CurrencySymbol: "Â¤",
        NaNSymbol: "NaN",
        CurrencyNegativePattern: 0,
        NumberNegativePattern: 1,
        PercentPositivePattern: 0,
        PercentNegativePattern: 0,
        NegativeInfinitySymbol: "-Infinity",
        NegativeSign: "-",
        NumberDecimalDigits: 2,
        NumberDecimalSeparator: ".",
        NumberGroupSeparator: ",",
        CurrencyPositivePattern: 0,
        PositiveInfinitySymbol: "Infinity",
        PositiveSign: "+",
        PercentDecimalDigits: 2,
        PercentDecimalSeparator: ".",
        PercentGroupSeparator: ",",
        PercentSymbol: "%",
        PerMilleSymbol: "â€°",
        NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        DigitSubstitution: 1
    },
    dateTimeFormat: {
        AMDesignator: "AM",
        Calendar: {
            MinSupportedDateTime: "@-62135568000000@",
            MaxSupportedDateTime: "@253402300799999@",
            AlgorithmType: 1,
            CalendarType: 1,
            Eras: [1],
            TwoDigitYearMax: 2029,
            IsReadOnly: !0
        },
        DateSeparator: "/",
        FirstDayOfWeek: 0,
        CalendarWeekRule: 0,
        FullDateTimePattern: "dddd, dd MMMM yyyy HH:mm:ss",
        LongDatePattern: "dddd, dd MMMM yyyy",
        LongTimePattern: "HH:mm:ss",
        MonthDayPattern: "MMMM dd",
        PMDesignator: "PM",
        RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        ShortDatePattern: "MM/dd/yyyy",
        ShortTimePattern: "HH:mm",
        SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        TimeSeparator: ":",
        UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        YearMonthPattern: "yyyy MMMM",
        AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
        IsReadOnly: !0,
        NativeCalendarName: "Gregorian Calendar",
        AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]
    },
    eras: [1, "A.D.", null, 0]
}), typeof __cultureInfo == "object" ? (Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse(__cultureInfo), delete __cultureInfo) : Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse({
    name: "en-US",
    numberFormat: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: ".",
        IsReadOnly: !1,
        CurrencyGroupSizes: [3],
        NumberGroupSizes: [3],
        PercentGroupSizes: [3],
        CurrencyGroupSeparator: ",",
        CurrencySymbol: "$",
        NaNSymbol: "NaN",
        CurrencyNegativePattern: 0,
        NumberNegativePattern: 1,
        PercentPositivePattern: 0,
        PercentNegativePattern: 0,
        NegativeInfinitySymbol: "-Infinity",
        NegativeSign: "-",
        NumberDecimalDigits: 2,
        NumberDecimalSeparator: ".",
        NumberGroupSeparator: ",",
        CurrencyPositivePattern: 0,
        PositiveInfinitySymbol: "Infinity",
        PositiveSign: "+",
        PercentDecimalDigits: 2,
        PercentDecimalSeparator: ".",
        PercentGroupSeparator: ",",
        PercentSymbol: "%",
        PerMilleSymbol: "â€°",
        NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        DigitSubstitution: 1
    },
    dateTimeFormat: {
        AMDesignator: "AM",
        Calendar: {
            MinSupportedDateTime: "@-62135568000000@",
            MaxSupportedDateTime: "@253402300799999@",
            AlgorithmType: 1,
            CalendarType: 1,
            Eras: [1],
            TwoDigitYearMax: 2029,
            IsReadOnly: !1
        },
        DateSeparator: "/",
        FirstDayOfWeek: 0,
        CalendarWeekRule: 0,
        FullDateTimePattern: "dddd, MMMM dd, yyyy h:mm:ss tt",
        LongDatePattern: "dddd, MMMM dd, yyyy",
        LongTimePattern: "h:mm:ss tt",
        MonthDayPattern: "MMMM dd",
        PMDesignator: "PM",
        RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        ShortDatePattern: "M/d/yyyy",
        ShortTimePattern: "h:mm tt",
        SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        TimeSeparator: ":",
        UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        YearMonthPattern: "MMMM, yyyy",
        AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
        IsReadOnly: !1,
        NativeCalendarName: "Gregorian Calendar",
        AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]
    },
    eras: [1, "A.D.", null, 0]
}), Type.registerNamespace("Sys.Serialization"), Sys.Serialization.JavaScriptSerializer = function() {}, Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer"), Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs = [], Sys.Serialization.JavaScriptSerializer._charsToEscape = [], Sys.Serialization.JavaScriptSerializer._dateRegEx = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"', "g"), Sys.Serialization.JavaScriptSerializer._escapeChars = {}, Sys.Serialization.JavaScriptSerializer._escapeRegEx = new RegExp('["\\\\\\x00-\\x1F]', "i"), Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal = new RegExp('["\\\\\\x00-\\x1F]', "g"), Sys.Serialization.JavaScriptSerializer._jsonRegEx = new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]", "g"), Sys.Serialization.JavaScriptSerializer._jsonStringRegEx = new RegExp('"(\\\\.|[^"\\\\])*"', "g"), Sys.Serialization.JavaScriptSerializer._serverTypeFieldName = "__type", Sys.Serialization.JavaScriptSerializer._init = function() {
    var i = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"],
        n, t;
    for (Sys.Serialization.JavaScriptSerializer._charsToEscape[0] = "\\", Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"] = new RegExp("\\\\", "g"), Sys.Serialization.JavaScriptSerializer._escapeChars["\\"] = "\\\\", Sys.Serialization.JavaScriptSerializer._charsToEscape[1] = '"', Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"'] = new RegExp('"', "g"), Sys.Serialization.JavaScriptSerializer._escapeChars['"'] = '\\"', n = 0; n < 32; n++) t = String.fromCharCode(n), Sys.Serialization.JavaScriptSerializer._charsToEscape[n + 2] = t, Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[t] = new RegExp(t, "g"), Sys.Serialization.JavaScriptSerializer._escapeChars[t] = i[n]
}, Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder = function(n, t) {
    t.append(n.toString())
}, Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder = function(n, t) {
    if (isFinite(n)) t.append(String(n));
    else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers);
}, Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder = function(n, t) {
    var r, i;
    if (t.append('"'), Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(n))
        if (Sys.Serialization.JavaScriptSerializer._charsToEscape.length === 0 && Sys.Serialization.JavaScriptSerializer._init(), n.length < 128) n = n.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal, function(n) {
            return Sys.Serialization.JavaScriptSerializer._escapeChars[n]
        });
        else
            for (r = 0; r < 34; r++) i = Sys.Serialization.JavaScriptSerializer._charsToEscape[r], n.indexOf(i) !== -1 && (n = Sys.Browser.agent === Sys.Browser.Opera || Sys.Browser.agent === Sys.Browser.FireFox ? n.split(i).join(Sys.Serialization.JavaScriptSerializer._escapeChars[i]) : n.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[i], Sys.Serialization.JavaScriptSerializer._escapeChars[i]));
    t.append(n), t.append('"')
}, Sys.Serialization.JavaScriptSerializer._serializeWithBuilder = function(n, t, i, r) {
    var u, f, e, o, h, s;
    switch (typeof n) {
        case "object":
            if (n)
                if (Number.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
                else if (Boolean.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
            else if (String.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
            else if (Array.isInstanceOfType(n)) {
                for (t.append("["), u = 0; u < n.length; ++u) u > 0 && t.append(","), Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n[u], t, !1, r);
                t.append("]")
            } else {
                if (Date.isInstanceOfType(n)) {
                    t.append('"\\/Date('), t.append(n.getTime()), t.append(')\\/"');
                    break
                }
                f = [], e = 0;
                for (o in n) o.startsWith("$") || (o === Sys.Serialization.JavaScriptSerializer._serverTypeFieldName && e !== 0 ? (f[e++] = f[0], f[0] = o) : f[e++] = o);
                for (i && f.sort(), t.append("{"), h = !1, u = 0; u < e; u++) s = n[f[u]], typeof s != "undefined" && typeof s != "function" && (h ? t.append(",") : h = !0, Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(f[u], t, i, r), t.append(":"), Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(s, t, i, r));
                t.append("}")
            } else t.append("null");
            break;
        case "number":
            Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
            break;
        case "string":
            Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
            break;
        case "boolean":
            Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
            break;
        default:
            t.append("null")
    }
}, Sys.Serialization.JavaScriptSerializer.serialize = function(n) {
    var t = new Sys.StringBuilder;
    return Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n, t, !1), t.toString()
}, Sys.Serialization.JavaScriptSerializer.deserialize = function(n, t) {
    if (n.length === 0) throw Error.argument("data", Sys.Res.cannotDeserializeEmptyString);
    try {
        var i = n.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx, "$1new Date($2)");
        if (t && Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(i.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx, ""))) throw null;
        return eval("(" + i + ")")
    } catch (r) {
        throw Error.argument("data", Sys.Res.cannotDeserializeInvalidJson);
    }
}, Type.registerNamespace("Sys.UI"), Sys.EventHandlerList = function() {
    this._list = {}
}, Sys.EventHandlerList.prototype = {
    _addHandler: function(n, t) {
        Array.add(this._getEvent(n, !0), t)
    },
    addHandler: function(n, t) {
        this._addHandler(n, t)
    },
    _removeHandler: function(n, t) {
        var i = this._getEvent(n);
        i && Array.remove(i, t)
    },
    removeHandler: function(n, t) {
        this._removeHandler(n, t)
    },
    getHandler: function(n) {
        var t = this._getEvent(n);
        return !t || t.length === 0 ? null : (t = Array.clone(t), function(n, i) {
            for (var r = 0, u = t.length; r < u; r++) t[r](n, i)
        })
    },
    _getEvent: function(n, t) {
        if (!this._list[n]) {
            if (!t) return null;
            this._list[n] = []
        }
        return this._list[n]
    }
}, Sys.EventHandlerList.registerClass("Sys.EventHandlerList"), Sys.CommandEventArgs = function(n, t, i) {
    Sys.CommandEventArgs.initializeBase(this), this._commandName = n, this._commandArgument = t, this._commandSource = i
}, Sys.CommandEventArgs.prototype = {
    _commandName: null,
    _commandArgument: null,
    _commandSource: null,
    get_commandName: function() {
        return this._commandName
    },
    get_commandArgument: function() {
        return this._commandArgument
    },
    get_commandSource: function() {
        return this._commandSource
    }
}, Sys.CommandEventArgs.registerClass("Sys.CommandEventArgs", Sys.CancelEventArgs), Sys.INotifyPropertyChange = function() {}, Sys.INotifyPropertyChange.prototype = {}, Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange"), Sys.PropertyChangedEventArgs = function(n) {
    Sys.PropertyChangedEventArgs.initializeBase(this), this._propertyName = n
}, Sys.PropertyChangedEventArgs.prototype = {
    get_propertyName: function() {
        return this._propertyName
    }
}, Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs", Sys.EventArgs), Sys.INotifyDisposing = function() {}, Sys.INotifyDisposing.prototype = {}, Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing"), Sys.Component = function() {
    Sys.Application && Sys.Application.registerDisposableObject(this)
}, Sys.Component.prototype = {
    _id: null,
    _initialized: !1,
    _updating: !1,
    get_events: function() {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_id: function() {
        return this._id
    },
    set_id: function(n) {
        this._id = n
    },
    get_isInitialized: function() {
        return this._initialized
    },
    get_isUpdating: function() {
        return this._updating
    },
    add_disposing: function(n) {
        this.get_events().addHandler("disposing", n)
    },
    remove_disposing: function(n) {
        this.get_events().removeHandler("disposing", n)
    },
    add_propertyChanged: function(n) {
        this.get_events().addHandler("propertyChanged", n)
    },
    remove_propertyChanged: function(n) {
        this.get_events().removeHandler("propertyChanged", n)
    },
    beginUpdate: function() {
        this._updating = !0
    },
    dispose: function() {
        if (this._events) {
            var n = this._events.getHandler("disposing");
            n && n(this, Sys.EventArgs.Empty)
        }
        delete this._events, Sys.Application.unregisterDisposableObject(this), Sys.Application.removeComponent(this)
    },
    endUpdate: function() {
        this._updating = !1, this._initialized || this.initialize(), this.updated()
    },
    initialize: function() {
        this._initialized = !0
    },
    raisePropertyChanged: function(n) {
        if (this._events) {
            var t = this._events.getHandler("propertyChanged");
            t && t(this, new Sys.PropertyChangedEventArgs(n))
        }
    },
    updated: function() {}
}, Sys.Component.registerClass("Sys.Component", null, Sys.IDisposable, Sys.INotifyPropertyChange, Sys.INotifyDisposing), $create = Sys.Component.create = function(n, t, i, r, u) {
    var f = u ? new n(u) : new n,
        e = Sys.Application,
        s = e.get_isCreatingComponents(),
        o;
    if (f.beginUpdate(), t && Sys$Component$_setProperties(f, t), i)
        for (o in i) f["add_" + o](i[o]);
    return f.get_id() && e.addComponent(f), s ? (e._createdComponents[e._createdComponents.length] = f, r ? e._addComponentToSecondPass(f, r) : f.endUpdate()) : (r && Sys$Component$_setReferences(f, r), f.endUpdate()), f
}, Sys.UI.MouseButton = function() {
    throw Error.notImplemented();
}, Sys.UI.MouseButton.prototype = {
    leftButton: 0,
    middleButton: 1,
    rightButton: 2
}, Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton"), Sys.UI.Key = function() {
    throw Error.notImplemented();
}, Sys.UI.Key.prototype = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 127
}, Sys.UI.Key.registerEnum("Sys.UI.Key"), Sys.UI.Point = function(n, t) {
    this.x = n, this.y = t
}, Sys.UI.Point.registerClass("Sys.UI.Point"), Sys.UI.Bounds = function(n, t, i, r) {
    this.x = n, this.y = t, this.height = r, this.width = i
}, Sys.UI.Bounds.registerClass("Sys.UI.Bounds"), Sys.UI.DomEvent = function(n) {
    var t = n,
        u = this.type = t.type.toLowerCase(),
        i, r;
    this.rawEvent = t, this.altKey = t.altKey, typeof t.button != "undefined" && (this.button = typeof t.which != "undefined" ? t.button : t.button === 4 ? Sys.UI.MouseButton.middleButton : t.button === 2 ? Sys.UI.MouseButton.rightButton : Sys.UI.MouseButton.leftButton), u === "keypress" ? this.charCode = t.charCode || t.keyCode : this.keyCode = t.keyCode && t.keyCode === 46 ? 127 : t.keyCode, this.clientX = t.clientX, this.clientY = t.clientY, this.ctrlKey = t.ctrlKey, this.target = t.target ? t.target : t.srcElement, u.startsWith("key") || (typeof t.offsetX != "undefined" && typeof t.offsetY != "undefined" ? (this.offsetX = t.offsetX, this.offsetY = t.offsetY) : this.target && this.target.nodeType !== 3 && typeof t.clientX == "number" && (i = Sys.UI.DomElement.getLocation(this.target), r = Sys.UI.DomElement._getWindow(this.target), this.offsetX = (r.pageXOffset || 0) + t.clientX - i.x, this.offsetY = (r.pageYOffset || 0) + t.clientY - i.y)), this.screenX = t.screenX, this.screenY = t.screenY, this.shiftKey = t.shiftKey
}, Sys.UI.DomEvent.prototype = {
    preventDefault: function() {
        this.rawEvent.preventDefault ? this.rawEvent.preventDefault() : window.event && (this.rawEvent.returnValue = !1)
    },
    stopPropagation: function() {
        this.rawEvent.stopPropagation ? this.rawEvent.stopPropagation() : window.event && (this.rawEvent.cancelBubble = !0)
    }
}, Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");
var $addHandler = Sys.UI.DomEvent.addHandler = function(n, t, i, r) {
        var u, f, e;
        n._events || (n._events = {}), u = n._events[t], u || (n._events[t] = u = []), n.addEventListener ? (f = function(t) {
            return i.call(n, new Sys.UI.DomEvent(t))
        }, n.addEventListener(t, f, !1)) : n.attachEvent && (f = function() {
            var t = {};
            try {
                t = Sys.UI.DomElement._getWindow(n).event
            } catch (r) {}
            return i.call(n, new Sys.UI.DomEvent(t))
        }, n.attachEvent("on" + t, f)), u[u.length] = {
            handler: i,
            browserHandler: f,
            autoRemove: r
        }, r && (e = n.dispose, e !== Sys.UI.DomEvent._disposeHandlers && (n.dispose = Sys.UI.DomEvent._disposeHandlers, typeof e != "undefined" && (n._chainDispose = e)))
    },
    $addHandlers = Sys.UI.DomEvent.addHandlers = function(n, t, i, r) {
        var f, u;
        for (f in t) u = t[f], i && (u = Function.createDelegate(i, u)), $addHandler(n, f, u, r || !1)
    },
    $clearHandlers = Sys.UI.DomEvent.clearHandlers = function(n) {
        Sys.UI.DomEvent._clearHandlers(n, !1)
    };
Sys.UI.DomEvent._clearHandlers = function(n, t) {
    var r, u, f, i, e;
    if (n._events) {
        r = n._events;
        for (u in r)
            for (f = r[u], i = f.length - 1; i >= 0; i--) e = f[i], (!t || e.autoRemove) && $removeHandler(n, u, e.handler);
        n._events = null
    }
}, Sys.UI.DomEvent._disposeHandlers = function() {
    Sys.UI.DomEvent._clearHandlers(this, !0);
    var n = this._chainDispose,
        t = typeof n;
    t !== "undefined" && (this.dispose = n, this._chainDispose = null, t === "function" && this.dispose())
}, $removeHandler = Sys.UI.DomEvent.removeHandler = function(n, t, i) {
    Sys.UI.DomEvent._removeHandler(n, t, i)
}, Sys.UI.DomEvent._removeHandler = function(n, t, i) {
    for (var f = null, u = n._events[t], r = 0, e = u.length; r < e; r++)
        if (u[r].handler === i) {
            f = u[r].browserHandler;
            break
        }
    n.removeEventListener ? n.removeEventListener(t, f, !1) : n.detachEvent && n.detachEvent("on" + t, f), u.splice(r, 1)
}, Sys.UI.DomElement = function() {}, Sys.UI.DomElement.registerClass("Sys.UI.DomElement"), Sys.UI.DomElement.addCssClass = function(n, t) {
    Sys.UI.DomElement.containsCssClass(n, t) || (n.className === "" ? n.className = t : n.className += " " + t)
}, Sys.UI.DomElement.containsCssClass = function(n, t) {
    return Array.contains(n.className.split(" "), t)
}, Sys.UI.DomElement.getBounds = function(n) {
    var t = Sys.UI.DomElement.getLocation(n);
    return new Sys.UI.Bounds(t.x, t.y, n.offsetWidth || 0, n.offsetHeight || 0)
}, $get = Sys.UI.DomElement.getElementById = function(n, t) {
    var u, f, r, i;
    if (!t) return document.getElementById(n);
    if (t.getElementById) return t.getElementById(n);
    for (u = [], f = t.childNodes, r = 0; r < f.length; r++) i = f[r], i.nodeType == 1 && (u[u.length] = i);
    while (u.length) {
        if (i = u.shift(), i.id == n) return i;
        for (f = i.childNodes, r = 0; r < f.length; r++) i = f[r], i.nodeType == 1 && (u[u.length] = i)
    }
    return null
}, Sys.UI.DomElement.getLocation = document.documentElement.getBoundingClientRect ? function(n) {
    var u, e, o;
    if (n.self || n.nodeType === 9 || n === document.documentElement || n.parentNode === n.ownerDocument.documentElement) return new Sys.UI.Point(0, 0);
    if (u = n.getBoundingClientRect(), !u) return new Sys.UI.Point(0, 0);
    var c, f = n.ownerDocument.documentElement,
        i = Math.round(u.left) + f.scrollLeft,
        r = Math.round(u.top) + f.scrollTop;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        try {
            e = n.ownerDocument.parentWindow.frameElement || null, e && (o = e.frameBorder === "0" || e.frameBorder === "no" ? 2 : 0, i += o, r += o)
        } catch (l) {}
        if (Sys.Browser.version === 7 && !document.documentMode) {
            var s = document.body,
                h = s.getBoundingClientRect(),
                t = (h.right - h.left) / s.clientWidth;
            t = Math.round(t * 100), t = (t - t % 5) / 100, isNaN(t) || t === 1 || (i = Math.round(i / t), r = Math.round(r / t))
        }(document.documentMode || 0) < 8 && (i -= f.clientLeft, r -= f.clientTop)
    }
    return new Sys.UI.Point(i, r)
} : Sys.Browser.agent === Sys.Browser.Safari ? function(n) {
    var r, o, s;
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var u = 0, f = 0, h = null, e = null, i, t = n; t; h = t, e = i, t = t.offsetParent) i = Sys.UI.DomElement._getCurrentStyle(t), r = t.tagName ? t.tagName.toUpperCase() : null, (t.offsetLeft || t.offsetTop) && (r !== "BODY" || !e || e.position !== "absolute") && (u += t.offsetLeft, f += t.offsetTop), h && Sys.Browser.version >= 3 && (u += parseInt(i.borderLeftWidth), f += parseInt(i.borderTopWidth));
    if (i = Sys.UI.DomElement._getCurrentStyle(n), o = i ? i.position : null, !o || o !== "absolute")
        for (t = n.parentNode; t; t = t.parentNode)
            if (r = t.tagName ? t.tagName.toUpperCase() : null, r !== "BODY" && r !== "HTML" && (t.scrollLeft || t.scrollTop) && (u -= t.scrollLeft || 0, f -= t.scrollTop || 0), i = Sys.UI.DomElement._getCurrentStyle(t), s = i ? i.position : null, s && s === "absolute") break;
    return new Sys.UI.Point(u, f)
} : function(n) {
    var r, o;
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var u = 0, f = 0, s = null, e = null, i = null, t = n; t; s = t, e = i, t = t.offsetParent) r = t.tagName ? t.tagName.toUpperCase() : null, i = Sys.UI.DomElement._getCurrentStyle(t), !t.offsetLeft && !t.offsetTop || r === "BODY" && (!e || e.position !== "absolute") || (u += t.offsetLeft, f += t.offsetTop), s !== null && i && (r !== "TABLE" && r !== "TD" && r !== "HTML" && (u += parseInt(i.borderLeftWidth) || 0, f += parseInt(i.borderTopWidth) || 0), r === "TABLE" && (i.position === "relative" || i.position === "absolute") && (u += parseInt(i.marginLeft) || 0, f += parseInt(i.marginTop) || 0));
    if (i = Sys.UI.DomElement._getCurrentStyle(n), o = i ? i.position : null, !o || o !== "absolute")
        for (t = n.parentNode; t; t = t.parentNode) r = t.tagName ? t.tagName.toUpperCase() : null, r !== "BODY" && r !== "HTML" && (t.scrollLeft || t.scrollTop) && (u -= t.scrollLeft || 0, f -= t.scrollTop || 0, i = Sys.UI.DomElement._getCurrentStyle(t), i && (u += parseInt(i.borderLeftWidth) || 0, f += parseInt(i.borderTopWidth) || 0));
    return new Sys.UI.Point(u, f)
}, Sys.UI.DomElement.isDomElement = function(n) {
    return Sys._isDomElement(n)
}, Sys.UI.DomElement.removeCssClass = function(n, t) {
    var i = " " + n.className + " ",
        r = i.indexOf(" " + t + " ");
    r >= 0 && (n.className = (i.substr(0, r) + " " + i.substring(r + t.length + 1, i.length)).trim())
}, Sys.UI.DomElement.resolveElement = function(n, t) {
    var i = n;
    return i ? (typeof i == "string" && (i = Sys.UI.DomElement.getElementById(i, t)), i) : null
}, Sys.UI.DomElement.raiseBubbleEvent = function(n, t) {
    for (var r = n, i; r;) {
        if (i = r.control, i && i.onBubbleEvent && i.raiseBubbleEvent) {
            Sys.UI.DomElement._raiseBubbleEventFromControl(i, n, t);
            return
        }
        r = r.parentNode
    }
}, Sys.UI.DomElement._raiseBubbleEventFromControl = function(n, t, i) {
    n.onBubbleEvent(t, i) || n._raiseBubbleEvent(t, i)
}, Sys.UI.DomElement.setLocation = function(n, t, i) {
    var r = n.style;
    r.position = "absolute", r.left = t + "px", r.top = i + "px"
}, Sys.UI.DomElement.toggleCssClass = function(n, t) {
    Sys.UI.DomElement.containsCssClass(n, t) ? Sys.UI.DomElement.removeCssClass(n, t) : Sys.UI.DomElement.addCssClass(n, t)
}, Sys.UI.DomElement.getVisibilityMode = function(n) {
    return n._visibilityMode === Sys.UI.VisibilityMode.hide ? Sys.UI.VisibilityMode.hide : Sys.UI.VisibilityMode.collapse
}, Sys.UI.DomElement.setVisibilityMode = function(n, t) {
    Sys.UI.DomElement._ensureOldDisplayMode(n), n._visibilityMode !== t && (n._visibilityMode = t, Sys.UI.DomElement.getVisible(n) === !1 && (n.style.display = n._visibilityMode === Sys.UI.VisibilityMode.hide ? n._oldDisplayMode : "none"), n._visibilityMode = t)
}, Sys.UI.DomElement.getVisible = function(n) {
    var t = n.currentStyle || Sys.UI.DomElement._getCurrentStyle(n);
    return t ? t.visibility !== "hidden" && t.display !== "none" : !0
}, Sys.UI.DomElement.setVisible = function(n, t) {
    t !== Sys.UI.DomElement.getVisible(n) && (Sys.UI.DomElement._ensureOldDisplayMode(n), n.style.visibility = t ? "visible" : "hidden", n.style.display = t || n._visibilityMode === Sys.UI.VisibilityMode.hide ? n._oldDisplayMode : "none")
}, Sys.UI.DomElement._ensureOldDisplayMode = function(n) {
    if (!n._oldDisplayMode) {
        var t = n.currentStyle || Sys.UI.DomElement._getCurrentStyle(n);
        if (n._oldDisplayMode = t ? t.display : null, !n._oldDisplayMode || n._oldDisplayMode === "none") switch (n.tagName.toUpperCase()) {
            case "DIV":
            case "P":
            case "ADDRESS":
            case "BLOCKQUOTE":
            case "BODY":
            case "COL":
            case "COLGROUP":
            case "DD":
            case "DL":
            case "DT":
            case "FIELDSET":
            case "FORM":
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "HR":
            case "IFRAME":
            case "LEGEND":
            case "OL":
            case "PRE":
            case "TABLE":
            case "TD":
            case "TH":
            case "TR":
            case "UL":
                n._oldDisplayMode = "block";
                break;
            case "LI":
                n._oldDisplayMode = "list-item";
                break;
            default:
                n._oldDisplayMode = "inline"
        }
    }
}, Sys.UI.DomElement._getWindow = function(n) {
    var t = n.ownerDocument || n.document || n;
    return t.defaultView || t.parentWindow
}, Sys.UI.DomElement._getCurrentStyle = function(n) {
    var t, i, f, e, r, u;
    if (n.nodeType === 3) return null;
    if (t = Sys.UI.DomElement._getWindow(n), n.documentElement && (n = n.documentElement), i = t && n !== t && t.getComputedStyle ? t.getComputedStyle(n, null) : n.currentStyle || n.style, !i && Sys.Browser.agent === Sys.Browser.Safari && n.style) {
        f = n.style.display, e = n.style.position, n.style.position = "absolute", n.style.display = "block", r = t.getComputedStyle(n, null), n.style.display = f, n.style.position = e, i = {};
        for (u in r) i[u] = r[u];
        i.display = "none"
    }
    return i
}, Sys.IContainer = function() {}, Sys.IContainer.prototype = {}, Sys.IContainer.registerInterface("Sys.IContainer"), Sys.ApplicationLoadEventArgs = function(n, t) {
    Sys.ApplicationLoadEventArgs.initializeBase(this), this._components = n, this._isPartialLoad = t
}, Sys.ApplicationLoadEventArgs.prototype = {
    get_components: function() {
        return this._components
    },
    get_isPartialLoad: function() {
        return this._isPartialLoad
    }
}, Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs", Sys.EventArgs), Sys._Application = function() {
    Sys._Application.initializeBase(this), this._disposableObjects = [], this._components = {}, this._createdComponents = [], this._secondPassComponents = [], this._unloadHandlerDelegate = Function.createDelegate(this, this._unloadHandler), Sys.UI.DomEvent.addHandler(window, "unload", this._unloadHandlerDelegate), this._domReady()
}, Sys._Application.prototype = {
    _creatingComponents: !1,
    _disposing: !1,
    _deleteCount: 0,
    get_isCreatingComponents: function() {
        return this._creatingComponents
    },
    get_isDisposing: function() {
        return this._disposing
    },
    add_init: function(n) {
        this._initialized ? n(this, Sys.EventArgs.Empty) : this.get_events().addHandler("init", n)
    },
    remove_init: function(n) {
        this.get_events().removeHandler("init", n)
    },
    add_load: function(n) {
        this.get_events().addHandler("load", n)
    },
    remove_load: function(n) {
        this.get_events().removeHandler("load", n)
    },
    add_unload: function(n) {
        this.get_events().addHandler("unload", n)
    },
    remove_unload: function(n) {
        this.get_events().removeHandler("unload", n)
    },
    addComponent: function(n) {
        this._components[n.get_id()] = n
    },
    beginCreateComponents: function() {
        this._creatingComponents = !0
    },
    dispose: function() {
        var t, i, n, f, r, u;
        if (!this._disposing) {
            for (this._disposing = !0, this._timerCookie && (window.clearTimeout(this._timerCookie), delete this._timerCookie), this._endRequestHandler && (Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler), delete this._endRequestHandler), this._beginRequestHandler && (Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler), delete this._beginRequestHandler), window.pageUnload && window.pageUnload(this, Sys.EventArgs.Empty), t = this.get_events().getHandler("unload"), t && t(this, Sys.EventArgs.Empty), i = Array.clone(this._disposableObjects), n = 0, f = i.length; n < f; n++) r = i[n], typeof r != "undefined" && r.dispose();
            Array.clear(this._disposableObjects), Sys.UI.DomEvent.removeHandler(window, "unload", this._unloadHandlerDelegate), Sys._ScriptLoader && (u = Sys._ScriptLoader.getInstance(), u && u.dispose()), Sys._Application.callBaseMethod(this, "dispose")
        }
    },
    disposeElement: function(n, t) {
        var f, e, u, i;
        if (n.nodeType === 1) {
            for (var s = n.getElementsByTagName("*"), o = s.length, h = new Array(o), r = 0; r < o; r++) h[r] = s[r];
            for (r = o - 1; r >= 0; r--) f = h[r], e = f.dispose, e && typeof e == "function" ? f.dispose() : (u = f.control, u && typeof u.dispose == "function" && u.dispose()), i = f._behaviors, i && this._disposeComponents(i), i = f._components, i && (this._disposeComponents(i), f._components = null);
            t || (e = n.dispose, e && typeof e == "function" ? n.dispose() : (u = n.control, u && typeof u.dispose == "function" && u.dispose()), i = n._behaviors, i && this._disposeComponents(i), i = n._components, i && (this._disposeComponents(i), n._components = null))
        }
    },
    endCreateComponents: function() {
        for (var t = this._secondPassComponents, i, n = 0, r = t.length; n < r; n++) i = t[n].component, Sys$Component$_setReferences(i, t[n].references), i.endUpdate();
        this._secondPassComponents = [], this._creatingComponents = !1
    },
    findComponent: function(n, t) {
        return t ? Sys.IContainer.isInstanceOfType(t) ? t.findComponent(n) : t[n] || null : Sys.Application._components[n] || null
    },
    getComponents: function() {
        var n = [],
            t = this._components,
            i;
        for (i in t) n[n.length] = t[i];
        return n
    },
    initialize: function() {
        if (!this.get_isInitialized() && !this._disposing) {
            if (Sys._Application.callBaseMethod(this, "initialize"), this._raiseInit(), this.get_stateString) {
                Sys.WebForms && Sys.WebForms.PageRequestManager && (this._beginRequestHandler = Function.createDelegate(this, this._onPageRequestManagerBeginRequest), Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler), this._endRequestHandler = Function.createDelegate(this, this._onPageRequestManagerEndRequest), Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler));
                var n = this.get_stateString();
                n !== this._currentEntry ? this._navigate(n) : this._ensureHistory()
            }
            this.raiseLoad()
        }
    },
    notifyScriptLoaded: function() {},
    registerDisposableObject: function(n) {
        if (!this._disposing) {
            var t = this._disposableObjects,
                i = t.length;
            t[i] = n, n.__msdisposeindex = i
        }
    },
    raiseLoad: function() {
        var n = this.get_events().getHandler("load"),
            t = new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents), !!this._loaded);
        this._loaded = !0, n && n(this, t), window.pageLoad && window.pageLoad(this, t), this._createdComponents = []
    },
    removeComponent: function(n) {
        var t = n.get_id();
        t && delete this._components[t]
    },
    unregisterDisposableObject: function(n) {
        var u, t, i, r, f;
        if (!this._disposing && (u = n.__msdisposeindex, typeof u == "number" && (t = this._disposableObjects, delete t[u], delete n.__msdisposeindex, ++this._deleteCount > 1e3))) {
            for (i = [], r = 0, f = t.length; r < f; r++) n = t[r], typeof n != "undefined" && (n.__msdisposeindex = i.length, i.push(n));
            this._disposableObjects = i, this._deleteCount = 0
        }
    },
    _addComponentToSecondPass: function(n, t) {
        this._secondPassComponents[this._secondPassComponents.length] = {
            component: n,
            references: t
        }
    },
    _disposeComponents: function(n) {
        var t, i;
        if (n)
            for (t = n.length - 1; t >= 0; t--) i = n[t], typeof i.dispose == "function" && i.dispose()
    },
    _domReady: function() {
        function t() {
            u.initialize()
        }
        var n, e, u = this,
            r = function() {
                Sys.UI.DomEvent.removeHandler(window, "load", r), t()
            },
            f, i;
        if (Sys.UI.DomEvent.addHandler(window, "load", r), document.addEventListener) try {
            document.addEventListener("DOMContentLoaded", n = function() {
                document.removeEventListener("DOMContentLoaded", n, !1), t()
            }, !1)
        } catch (o) {} else document.attachEvent && (window == window.top && document.documentElement.doScroll ? (i = document.createElement("div"), n = function() {
            try {
                i.doScroll("left")
            } catch (r) {
                f = window.setTimeout(n, 0);
                return
            }
            i = null, t()
        }, n()) : document.attachEvent("onreadystatechange", n = function() {
            document.readyState === "complete" && (document.detachEvent("onreadystatechange", n), t())
        }))
    },
    _raiseInit: function() {
        var n = this.get_events().getHandler("init");
        n && (this.beginCreateComponents(), n(this, Sys.EventArgs.Empty), this.endCreateComponents())
    },
    _unloadHandler: function() {
        this.dispose()
    }
}, Sys._Application.registerClass("Sys._Application", Sys.Component, Sys.IContainer), Sys.Application = new Sys._Application, $find = Sys.Application.findComponent, Sys.UI.Behavior = function(n) {
    Sys.UI.Behavior.initializeBase(this), this._element = n;
    var t = n._behaviors;
    t ? t[t.length] = this : n._behaviors = [this]
}, Sys.UI.Behavior.prototype = {
    _name: null,
    get_element: function() {
        return this._element
    },
    get_id: function() {
        var n = Sys.UI.Behavior.callBaseMethod(this, "get_id");
        return n ? n : !this._element || !this._element.id ? "" : this._element.id + "$" + this.get_name()
    },
    get_name: function() {
        if (this._name) return this._name;
        var n = Object.getTypeName(this),
            t = n.lastIndexOf(".");
        return t !== -1 && (n = n.substr(t + 1)), this.get_isInitialized() || (this._name = n), n
    },
    set_name: function(n) {
        this._name = n
    },
    initialize: function() {
        Sys.UI.Behavior.callBaseMethod(this, "initialize");
        var n = this.get_name();
        n && (this._element[n] = this)
    },
    dispose: function() {
        var n, t, i;
        Sys.UI.Behavior.callBaseMethod(this, "dispose"), n = this._element, n && (t = this.get_name(), t && (n[t] = null), i = n._behaviors, Array.remove(i, this), i.length === 0 && (n._behaviors = null), delete this._element)
    }
}, Sys.UI.Behavior.registerClass("Sys.UI.Behavior", Sys.Component), Sys.UI.Behavior.getBehaviorByName = function(n, t) {
    var i = n[t];
    return i && Sys.UI.Behavior.isInstanceOfType(i) ? i : null
}, Sys.UI.Behavior.getBehaviors = function(n) {
    return n._behaviors ? Array.clone(n._behaviors) : []
}, Sys.UI.Behavior.getBehaviorsByType = function(n, t) {
    var r = n._behaviors,
        u = [],
        i, f;
    if (r)
        for (i = 0, f = r.length; i < f; i++) t.isInstanceOfType(r[i]) && (u[u.length] = r[i]);
    return u
}, Sys.UI.VisibilityMode = function() {
    throw Error.notImplemented();
}, Sys.UI.VisibilityMode.prototype = {
    hide: 0,
    collapse: 1
}, Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode"), Sys.UI.Control = function(n) {
    Sys.UI.Control.initializeBase(this), this._element = n, n.control = this;
    var t = this.get_role();
    t && n.setAttribute("role", t)
}, Sys.UI.Control.prototype = {
    _parent: null,
    _visibilityMode: Sys.UI.VisibilityMode.hide,
    get_element: function() {
        return this._element
    },
    get_id: function() {
        return this._element ? this._element.id : ""
    },
    set_id: function() {
        throw Error.invalidOperation(Sys.Res.cantSetId);
    },
    get_parent: function() {
        if (this._parent) return this._parent;
        if (!this._element) return null;
        for (var n = this._element.parentNode; n;) {
            if (n.control) return n.control;
            n = n.parentNode
        }
        return null
    },
    set_parent: function(n) {
        this._parent = n
    },
    get_role: function() {
        return null
    },
    get_visibilityMode: function() {
        return Sys.UI.DomElement.getVisibilityMode(this._element)
    },
    set_visibilityMode: function(n) {
        Sys.UI.DomElement.setVisibilityMode(this._element, n)
    },
    get_visible: function() {
        return Sys.UI.DomElement.getVisible(this._element)
    },
    set_visible: function(n) {
        Sys.UI.DomElement.setVisible(this._element, n)
    },
    addCssClass: function(n) {
        Sys.UI.DomElement.addCssClass(this._element, n)
    },
    dispose: function() {
        Sys.UI.Control.callBaseMethod(this, "dispose"), this._element && (this._element.control = null, delete this._element), this._parent && delete this._parent
    },
    onBubbleEvent: function() {
        return !1
    },
    raiseBubbleEvent: function(n, t) {
        this._raiseBubbleEvent(n, t)
    },
    _raiseBubbleEvent: function(n, t) {
        for (var i = this.get_parent(); i;) {
            if (i.onBubbleEvent(n, t)) return;
            i = i.get_parent()
        }
    },
    removeCssClass: function(n) {
        Sys.UI.DomElement.removeCssClass(this._element, n)
    },
    toggleCssClass: function(n) {
        Sys.UI.DomElement.toggleCssClass(this._element, n)
    }
}, Sys.UI.Control.registerClass("Sys.UI.Control", Sys.Component), Sys.HistoryEventArgs = function(n) {
    Sys.HistoryEventArgs.initializeBase(this), this._state = n
}, Sys.HistoryEventArgs.prototype = {
    get_state: function() {
        return this._state
    }
}, Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs", Sys.EventArgs), Sys.Application._appLoadHandler = null, Sys.Application._beginRequestHandler = null, Sys.Application._clientId = null, Sys.Application._currentEntry = "", Sys.Application._endRequestHandler = null, Sys.Application._history = null, Sys.Application._enableHistory = !1, Sys.Application._historyFrame = null, Sys.Application._historyInitialized = !1, Sys.Application._historyPointIsNew = !1, Sys.Application._ignoreTimer = !1, Sys.Application._initialState = null, Sys.Application._state = {}, Sys.Application._timerCookie = 0, Sys.Application._timerHandler = null, Sys.Application._uniqueId = null, Sys._Application.prototype.get_stateString = function() {
    var n = null,
        t, i;
    return Sys.Browser.agent === Sys.Browser.Firefox ? (t = window.location.href, i = t.indexOf("#"), n = i !== -1 ? t.substring(i + 1) : "") : (n = window.location.hash, n.length > 0 && n.charAt(0) === "#" && (n = n.substring(1)), n)
}, Sys._Application.prototype.get_enableHistory = function() {
    return this._enableHistory
}, Sys._Application.prototype.set_enableHistory = function(n) {
    this._enableHistory = n
}, Sys._Application.prototype.add_navigate = function(n) {
    this.get_events().addHandler("navigate", n)
}, Sys._Application.prototype.remove_navigate = function(n) {
    this.get_events().removeHandler("navigate", n)
}, Sys._Application.prototype.addHistoryPoint = function(n, t) {
    var i, r, u, f;
    this._ensureHistory(), i = this._state;
    for (r in n) u = n[r], u === null ? typeof i[r] != "undefined" && delete i[r] : i[r] = u;
    f = this._serializeState(i), this._historyPointIsNew = !0, this._setState(f, t), this._raiseNavigate()
}, Sys._Application.prototype.setServerId = function(n, t) {
    this._clientId = n, this._uniqueId = t
}, Sys._Application.prototype.setServerState = function(n) {
    this._ensureHistory(), this._state.__s = n, this._updateHiddenField(n)
}, Sys._Application.prototype._deserializeState = function(n) {
    var f = {},
        t, e, u, o, i, r, s, h;
    for (n = n || "", t = n.indexOf("&&"), t !== -1 && t + 2 < n.length && (f.__s = n.substr(t + 2), n = n.substr(0, t)), e = n.split("&"), u = 0, o = e.length; u < o; u++) i = e[u], r = i.indexOf("="), r !== -1 && r + 1 < i.length && (s = i.substr(0, r), h = i.substr(r + 1), f[s] = decodeURIComponent(h));
    return f
}, Sys._Application.prototype._enableHistoryInScriptManager = function() {
    this._enableHistory = !0
}, Sys._Application.prototype._ensureHistory = function() {
    if (!this._historyInitialized && this._enableHistory) {
        Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.documentMode < 8 && (this._historyFrame = document.getElementById("__historyFrame"), this._ignoreIFrame = !0), this._timerHandler = Function.createDelegate(this, this._onIdle), this._timerCookie = window.setTimeout(this._timerHandler, 100);
        try {
            this._initialState = this._deserializeState(this.get_stateString())
        } catch (n) {}
        this._historyInitialized = !0
    }
}, Sys._Application.prototype._navigate = function(n) {
    var t, r, i;
    if (this._ensureHistory(), t = this._deserializeState(n), this._uniqueId && (r = this._state.__s || "", i = t.__s || "", i !== r)) {
        this._updateHiddenField(i), __doPostBack(this._uniqueId, i), this._state = t;
        return
    }
    this._setState(n), this._state = t, this._raiseNavigate()
}, Sys._Application.prototype._onIdle = function() {
    delete this._timerCookie;
    var n = this.get_stateString();
    n !== this._currentEntry ? this._ignoreTimer || (this._historyPointIsNew = !1, this._navigate(n)) : this._ignoreTimer = !1, this._timerCookie = window.setTimeout(this._timerHandler, 100)
}, Sys._Application.prototype._onIFrameLoad = function(n) {
    this._ensureHistory(), this._ignoreIFrame || (this._historyPointIsNew = !1, this._navigate(n)), this._ignoreIFrame = !1
}, Sys._Application.prototype._onPageRequestManagerBeginRequest = function() {
    this._ignoreTimer = !0, this._originalTitle = document.title
}, Sys._Application.prototype._onPageRequestManagerEndRequest = function(n, t) {
    var u = t.get_dataItems()[this._clientId],
        f = this._originalTitle,
        r, i, e;
    this._originalTitle = null, r = document.getElementById("__EVENTTARGET"), r && r.value === this._uniqueId && (r.value = ""), typeof u != "undefined" ? (this.setServerState(u), this._historyPointIsNew = !0) : this._ignoreTimer = !1, i = this._serializeState(this._state), i !== this._currentEntry && (this._ignoreTimer = !0, typeof f == "string" ? (Sys.Browser.agent !== Sys.Browser.InternetExplorer || Sys.Browser.version > 7 ? (e = document.title, document.title = f, this._setState(i), document.title = e) : this._setState(i), this._raiseNavigate()) : (this._setState(i), this._raiseNavigate()))
}, Sys._Application.prototype._raiseNavigate = function() {
    var u = this._historyPointIsNew,
        t = this.get_events().getHandler("navigate"),
        i = {},
        n, r, f;
    for (n in this._state) n !== "__s" && (i[n] = this._state[n]);
    if (r = new Sys.HistoryEventArgs(i), t && t(this, r), !u) try {
        Sys.Browser.agent === Sys.Browser.Firefox && window.location.hash && (!window.frameElement || window.top.location.hash) && (Sys.Browser.version < 3.5 ? window.history.go(0) : location.hash = this.get_stateString())
    } catch (e) {}
}, Sys._Application.prototype._serializeState = function(n) {
    var i = [],
        t, r, u;
    for (t in n) r = n[t], t === "__s" ? u = r : i[i.length] = t + "=" + encodeURIComponent(r);
    return i.join("&") + (u ? "&&" + u : "")
}, Sys._Application.prototype._setState = function(n, t) {
    var i, u, r, f;
    this._enableHistory && (n = n || "", n !== this._currentEntry && (window.theForm && (i = window.theForm.action, u = i.indexOf("#"), window.theForm.action = (u !== -1 ? i.substring(0, u) : i) + "#" + n), this._historyFrame && this._historyPointIsNew && (this._ignoreIFrame = !0, r = this._historyFrame.contentWindow.document, r.open("javascript:'<html></html>'"), r.write("<html><head><title>" + (t || document.title) + '</title><script type="text/javascript">parent.Sys.Application._onIFrameLoad(' + Sys.Serialization.JavaScriptSerializer.serialize(n) + ");<\/script></head><body></body></html>"), r.close()), this._ignoreTimer = !1, this._currentEntry = n, (this._historyFrame || this._historyPointIsNew) && (f = this.get_stateString(), n !== f && (window.location.hash = n, this._currentEntry = this.get_stateString(), typeof t != "undefined" && t !== null && (document.title = t))), this._historyPointIsNew = !1))
}, Sys._Application.prototype._updateHiddenField = function(n) {
    if (this._clientId) {
        var t = document.getElementById(this._clientId);
        t && (t.value = n)
    }
}, window.XMLHttpRequest || (window.XMLHttpRequest = function() {
    for (var t = ["Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP"], n = 0, i = t.length; n < i; n++) try {
        return new ActiveXObject(t[n])
    } catch (r) {}
    return null
}), Type.registerNamespace("Sys.Net"), Sys.Net.WebRequestExecutor = function() {
    this._webRequest = null, this._resultObject = null
}, Sys.Net.WebRequestExecutor.prototype = {
    get_webRequest: function() {
        return this._webRequest
    },
    _set_webRequest: function(n) {
        this._webRequest = n
    },
    get_started: function() {
        throw Error.notImplemented();
    },
    get_responseAvailable: function() {
        throw Error.notImplemented();
    },
    get_timedOut: function() {
        throw Error.notImplemented();
    },
    get_aborted: function() {
        throw Error.notImplemented();
    },
    get_responseData: function() {
        throw Error.notImplemented();
    },
    get_statusCode: function() {
        throw Error.notImplemented();
    },
    get_statusText: function() {
        throw Error.notImplemented();
    },
    get_xml: function() {
        throw Error.notImplemented();
    },
    get_object: function() {
        return this._resultObject || (this._resultObject = Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData())), this._resultObject
    },
    executeRequest: function() {
        throw Error.notImplemented();
    },
    abort: function() {
        throw Error.notImplemented();
    },
    getResponseHeader: function() {
        throw Error.notImplemented();
    },
    getAllResponseHeaders: function() {
        throw Error.notImplemented();
    }
}, Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor"), Sys.Net.XMLDOM = function(n) {
    var r, i, u, t, f;
    if (window.DOMParser) try {
        return f = new window.DOMParser, f.parseFromString(n, "text/xml")
    } catch (e) {} else
        for (r = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"], i = 0, u = r.length; i < u; i++) try {
            return t = new ActiveXObject(r[i]), t.async = !1, t.loadXML(n), t.setProperty("SelectionLanguage", "XPath"), t
        } catch (e) {}
    return null
}, Sys.Net.XMLHttpExecutor = function() {
    Sys.Net.XMLHttpExecutor.initializeBase(this);
    var n = this;
    this._xmlHttpRequest = null, this._webRequest = null, this._responseAvailable = !1, this._timedOut = !1, this._timer = null, this._aborted = !1, this._started = !1, this._onReadyStateChange = function() {
        if (n._xmlHttpRequest.readyState === 4) {
            try {
                if (typeof n._xmlHttpRequest.status == "undefined") return
            } catch (t) {
                return
            }
            n._clearTimer(), n._responseAvailable = !0;
            try {
                n._webRequest.completed(Sys.EventArgs.Empty)
            } finally {
                n._xmlHttpRequest != null && (n._xmlHttpRequest.onreadystatechange = Function.emptyMethod, n._xmlHttpRequest = null)
            }
        }
    }, this._clearTimer = function() {
        n._timer != null && (window.clearTimeout(n._timer), n._timer = null)
    }, this._onTimeout = function() {
        n._responseAvailable || (n._clearTimer(), n._timedOut = !0, n._xmlHttpRequest.onreadystatechange = Function.emptyMethod, n._xmlHttpRequest.abort(), n._webRequest.completed(Sys.EventArgs.Empty), n._xmlHttpRequest = null)
    }
}, Sys.Net.XMLHttpExecutor.prototype = {
    get_timedOut: function() {
        return this._timedOut
    },
    get_started: function() {
        return this._started
    },
    get_responseAvailable: function() {
        return this._responseAvailable
    },
    get_aborted: function() {
        return this._aborted
    },
    executeRequest: function() {
        var t, n, i, r, u, f;
        if (this._webRequest = this.get_webRequest(), t = this._webRequest.get_body(), n = this._webRequest.get_headers(), this._xmlHttpRequest = new XMLHttpRequest, this._xmlHttpRequest.onreadystatechange = this._onReadyStateChange, i = this._webRequest.get_httpVerb(), this._xmlHttpRequest.open(i, this._webRequest.getResolvedUrl(), !0), this._xmlHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n)
            for (r in n) u = n[r], typeof u != "function" && this._xmlHttpRequest.setRequestHeader(r, u);
        i.toLowerCase() === "post" && (n !== null && n["Content-Type"] || this._xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), t || (t = "")), f = this._webRequest.get_timeout(), f > 0 && (this._timer = window.setTimeout(Function.createDelegate(this, this._onTimeout), f)), this._xmlHttpRequest.send(t), this._started = !0
    },
    getResponseHeader: function(n) {
        var t;
        try {
            t = this._xmlHttpRequest.getResponseHeader(n)
        } catch (i) {}
        return t || (t = ""), t
    },
    getAllResponseHeaders: function() {
        return this._xmlHttpRequest.getAllResponseHeaders()
    },
    get_responseData: function() {
        return this._xmlHttpRequest.responseText
    },
    get_statusCode: function() {
        var n = 0;
        try {
            n = this._xmlHttpRequest.status
        } catch (t) {}
        return n
    },
    get_statusText: function() {
        return this._xmlHttpRequest.statusText
    },
    get_xml: function() {
        var n = this._xmlHttpRequest.responseXML;
        if (n && n.documentElement) navigator.userAgent.indexOf("MSIE") !== -1 && n.setProperty("SelectionLanguage", "XPath");
        else if (n = Sys.Net.XMLDOM(this._xmlHttpRequest.responseText), !n || !n.documentElement) return null;
        return n.documentElement.namespaceURI === "http://www.mozilla.org/newlayout/xml/parsererror.xml" && n.documentElement.tagName === "parsererror" ? null : n.documentElement.firstChild && n.documentElement.firstChild.tagName === "parsererror" ? null : n
    },
    abort: function() {
        this._aborted || this._responseAvailable || this._timedOut || (this._aborted = !0, this._clearTimer(), this._xmlHttpRequest && !this._responseAvailable && (this._xmlHttpRequest.onreadystatechange = Function.emptyMethod, this._xmlHttpRequest.abort(), this._xmlHttpRequest = null, this._webRequest.completed(Sys.EventArgs.Empty)))
    }
}, Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor", Sys.Net.WebRequestExecutor), Sys.Net._WebRequestManager = function() {
    this._defaultTimeout = 0, this._defaultExecutorType = "Sys.Net.XMLHttpExecutor"
}, Sys.Net._WebRequestManager.prototype = {
    add_invokingRequest: function(n) {
        this._get_eventHandlerList().addHandler("invokingRequest", n)
    },
    remove_invokingRequest: function(n) {
        this._get_eventHandlerList().removeHandler("invokingRequest", n)
    },
    add_completedRequest: function(n) {
        this._get_eventHandlerList().addHandler("completedRequest", n)
    },
    remove_completedRequest: function(n) {
        this._get_eventHandlerList().removeHandler("completedRequest", n)
    },
    _get_eventHandlerList: function() {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_defaultTimeout: function() {
        return this._defaultTimeout
    },
    set_defaultTimeout: function(n) {
        this._defaultTimeout = n
    },
    get_defaultExecutorType: function() {
        return this._defaultExecutorType
    },
    set_defaultExecutorType: function(n) {
        this._defaultExecutorType = n
    },
    executeRequest: function(n) {
        var t = n.get_executor(),
            u, f, i, r;
        if (!t) {
            u = !1;
            try {
                f = eval(this._defaultExecutorType), t = new f
            } catch (e) {
                u = !0
            }
            n.set_executor(t)
        }
        t.get_aborted() || (i = new Sys.Net.NetworkRequestEventArgs(n), r = this._get_eventHandlerList().getHandler("invokingRequest"), r && r(this, i), i.get_cancel() || t.executeRequest())
    }
}, Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager"), Sys.Net.WebRequestManager = new Sys.Net._WebRequestManager, Sys.Net.NetworkRequestEventArgs = function(n) {
    Sys.Net.NetworkRequestEventArgs.initializeBase(this), this._webRequest = n
}, Sys.Net.NetworkRequestEventArgs.prototype = {
    get_webRequest: function() {
        return this._webRequest
    }
}, Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs", Sys.CancelEventArgs), Sys.Net.WebRequest = function() {
    this._url = "", this._headers = {}, this._body = null, this._userContext = null, this._httpVerb = null, this._executor = null, this._invokeCalled = !1, this._timeout = 0
}, Sys.Net.WebRequest.prototype = {
    add_completed: function(n) {
        this._get_eventHandlerList().addHandler("completed", n)
    },
    remove_completed: function(n) {
        this._get_eventHandlerList().removeHandler("completed", n)
    },
    completed: function(n) {
        var t = Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");
        t && t(this._executor, n), t = this._get_eventHandlerList().getHandler("completed"), t && t(this._executor, n)
    },
    _get_eventHandlerList: function() {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_url: function() {
        return this._url
    },
    set_url: function(n) {
        this._url = n
    },
    get_headers: function() {
        return this._headers
    },
    get_httpVerb: function() {
        return this._httpVerb === null ? this._body === null ? "GET" : "POST" : this._httpVerb
    },
    set_httpVerb: function(n) {
        this._httpVerb = n
    },
    get_body: function() {
        return this._body
    },
    set_body: function(n) {
        this._body = n
    },
    get_userContext: function() {
        return this._userContext
    },
    set_userContext: function(n) {
        this._userContext = n
    },
    get_executor: function() {
        return this._executor
    },
    set_executor: function(n) {
        this._executor = n, this._executor._set_webRequest(this)
    },
    get_timeout: function() {
        return this._timeout === 0 ? Sys.Net.WebRequestManager.get_defaultTimeout() : this._timeout
    },
    set_timeout: function(n) {
        this._timeout = n
    },
    getResolvedUrl: function() {
        return Sys.Net.WebRequest._resolveUrl(this._url)
    },
    invoke: function() {
        Sys.Net.WebRequestManager.executeRequest(this), this._invokeCalled = !0
    }
}, Sys.Net.WebRequest._resolveUrl = function(n, t) {
    var r, i, u, f, e;
    return n && n.indexOf("://") !== -1 ? n : (t && t.length !== 0 || (r = document.getElementsByTagName("base")[0], t = r && r.href && r.href.length > 0 ? r.href : document.URL), i = t.indexOf("?"), i !== -1 && (t = t.substr(0, i)), i = t.indexOf("#"), i !== -1 && (t = t.substr(0, i)), t = t.substr(0, t.lastIndexOf("/") + 1), !n || n.length === 0) ? t : n.charAt(0) === "/" ? (u = t.indexOf("://"), f = t.indexOf("/", u + 3), t.substr(0, f) + n) : (e = t.lastIndexOf("/"), t.substr(0, e + 1) + n)
}, Sys.Net.WebRequest._createQueryString = function(n, t, i) {
    t = t || encodeURIComponent;
    var e = 0,
        u, o, f, r = new Sys.StringBuilder;
    if (n)
        for (f in n)(u = n[f], typeof u != "function") && (o = Sys.Serialization.JavaScriptSerializer.serialize(u), e++ && r.append("&"), r.append(f), r.append("="), r.append(t(o)));
    return i && (e && r.append("&"), r.append(i)), r.toString()
}, Sys.Net.WebRequest._createUrl = function(n, t, i) {
    if (!t && !i) return n;
    var r = Sys.Net.WebRequest._createQueryString(t, null, i);
    return r.length ? n + (n && n.indexOf("?") >= 0 ? "&" : "?") + r : n
}, Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest"), Sys._ScriptLoaderTask = function(n, t) {
    this._scriptElement = n, this._completedCallback = t
}, Sys._ScriptLoaderTask.prototype = {
    get_scriptElement: function() {
        return this._scriptElement
    },
    dispose: function() {
        this._disposed || (this._disposed = !0, this._removeScriptElementHandlers(), Sys._ScriptLoaderTask._clearScript(this._scriptElement), this._scriptElement = null)
    },
    execute: function() {
        this._addScriptElementHandlers(), document.getElementsByTagName("head")[0].appendChild(this._scriptElement)
    },
    _addScriptElementHandlers: function() {
        this._scriptLoadDelegate = Function.createDelegate(this, this._scriptLoadHandler), Sys.Browser.agent !== Sys.Browser.InternetExplorer ? (this._scriptElement.readyState = "loaded", $addHandler(this._scriptElement, "load", this._scriptLoadDelegate)) : $addHandler(this._scriptElement, "readystatechange", this._scriptLoadDelegate), this._scriptElement.addEventListener && (this._scriptErrorDelegate = Function.createDelegate(this, this._scriptErrorHandler), this._scriptElement.addEventListener("error", this._scriptErrorDelegate, !1))
    },
    _removeScriptElementHandlers: function() {
        if (this._scriptLoadDelegate) {
            var n = this.get_scriptElement();
            Sys.Browser.agent !== Sys.Browser.InternetExplorer ? $removeHandler(n, "load", this._scriptLoadDelegate) : $removeHandler(n, "readystatechange", this._scriptLoadDelegate), this._scriptErrorDelegate && (this._scriptElement.removeEventListener("error", this._scriptErrorDelegate, !1), this._scriptErrorDelegate = null), this._scriptLoadDelegate = null
        }
    },
    _scriptErrorHandler: function() {
        this._disposed || this._completedCallback(this.get_scriptElement(), !1)
    },
    _scriptLoadHandler: function() {
        if (!this._disposed) {
            var n = this.get_scriptElement();
            (n.readyState === "loaded" || n.readyState === "complete") && this._completedCallback(n, !0)
        }
    }
}, Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask", null, Sys.IDisposable), Sys._ScriptLoaderTask._clearScript = function(n) {
    Sys.Debug.isDebug || n.parentNode.removeChild(n)
}, Type.registerNamespace("Sys.Net"), Sys.Net.WebServiceProxy = function() {}, Sys.Net.WebServiceProxy.prototype = {
    get_timeout: function() {
        return this._timeout || 0
    },
    set_timeout: function(n) {
        if (n < 0) throw Error.argumentOutOfRange("value", n, Sys.Res.invalidTimeout);
        this._timeout = n
    },
    get_defaultUserContext: function() {
        return typeof this._userContext == "undefined" ? null : this._userContext
    },
    set_defaultUserContext: function(n) {
        this._userContext = n
    },
    get_defaultSucceededCallback: function() {
        return this._succeeded || null
    },
    set_defaultSucceededCallback: function(n) {
        this._succeeded = n
    },
    get_defaultFailedCallback: function() {
        return this._failed || null
    },
    set_defaultFailedCallback: function(n) {
        this._failed = n
    },
    get_enableJsonp: function() {
        return !!this._jsonp
    },
    set_enableJsonp: function(n) {
        this._jsonp = n
    },
    get_path: function() {
        return this._path || null
    },
    set_path: function(n) {
        this._path = n
    },
    get_jsonpCallbackParameter: function() {
        return this._callbackParameter || "callback"
    },
    set_jsonpCallbackParameter: function(n) {
        this._callbackParameter = n
    },
    _invoke: function(n, t, i, r, u, f, e) {
        return u = u || this.get_defaultSucceededCallback(), f = f || this.get_defaultFailedCallback(), (e === null || typeof e == "undefined") && (e = this.get_defaultUserContext()), Sys.Net.WebServiceProxy.invoke(n, t, i, r, u, f, e, this.get_timeout(), this.get_enableJsonp(), this.get_jsonpCallbackParameter())
    }
}, Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy"), Sys.Net.WebServiceProxy.invoke = function(n, t, i, r, u, f, e, o, s, h) {
    function it(n) {
        var r, i, o, c, s, h;
        if (n.get_responseAvailable()) {
            r = n.get_statusCode(), i = null;
            try {
                o = n.getResponseHeader("Content-Type"), i = o.startsWith("application/json") ? n.get_object() : o.startsWith("text/xml") ? n.get_xml() : n.get_responseData()
            } catch (l) {}
            c = n.getResponseHeader("jsonerror"), s = c === "true", s ? i && (i = new Sys.Net.WebServiceError(!1, i.Message, i.StackTrace, i.ExceptionType, i)) : o.startsWith("application/json") && (i = !i || typeof i.d == "undefined" ? i : i.d), r < 200 || r >= 300 || s ? f && (i && s || (i = new Sys.Net.WebServiceError(!1, String.format(Sys.Res.webServiceFailedNoMsg, t))), i._statusCode = r, f(i, e, t)) : u && u(i, e, t)
        } else h = n.get_timedOut() ? String.format(Sys.Res.webServiceTimedOut, t) : String.format(Sys.Res.webServiceFailedNoMsg, t), f && f(new Sys.Net.WebServiceError(n.get_timedOut(), h, "", ""), e, t)
    }
    var k = s !== !1 ? Sys.Net.WebServiceProxy._xdomain.exec(n) : null,
        l, y = k && k.length === 3 && (k[1] !== location.protocol || k[2] !== location.host),
        p, c;
    i = y || i, y && (h = h || "callback", l = "_jsonp" + Sys._jsonp++), r || (r = {}), p = r, i && p || (p = {});
    var d, v, a = null,
        w, b = null,
        g = Sys.Net.WebRequest._createUrl(t ? n + "/" + encodeURIComponent(t) : n, p, y ? h + "=Sys." + l : null);
    if (y) {
        d = document.createElement("script"), d.src = g, w = new Sys._ScriptLoaderTask(d, function(n, i) {
            (!i || l) && nt({
                Message: String.format(Sys.Res.webServiceFailedNoMsg, t)
            }, -1)
        });

        function tt() {
            a !== null && (a = null, v = new Sys.Net.WebServiceError(!0, String.format(Sys.Res.webServiceTimedOut, t)), w.dispose(), delete Sys[l], f && f(v, e, t))
        }

        function nt(n, i) {
            a !== null && (window.clearTimeout(a), a = null), w.dispose(), delete Sys[l], l = null, typeof i != "undefined" && i !== 200 ? f && (v = new Sys.Net.WebServiceError(!1, n.Message || String.format(Sys.Res.webServiceFailedNoMsg, t), n.StackTrace || null, n.ExceptionType || null, n), v._statusCode = i, f(v, e, t)) : u && u(n, e, t)
        }
        return Sys[l] = nt, o = o || Sys.Net.WebRequestManager.get_defaultTimeout(), o > 0 && (a = window.setTimeout(tt, o)), w.execute(), null
    }
    return c = new Sys.Net.WebRequest, c.set_url(g), c.get_headers()["Content-Type"] = "application/json; charset=utf-8", i || (b = Sys.Serialization.JavaScriptSerializer.serialize(r), b === "{}" && (b = "")), c.set_body(b), c.add_completed(it), o && o > 0 && c.set_timeout(o), c.invoke(), c
}, Sys.Net.WebServiceProxy._generateTypedConstructor = function(n) {
    return function(t) {
        if (t)
            for (var i in t) this[i] = t[i];
        this.__type = n
    }
}, Sys._jsonp = 0, Sys.Net.WebServiceProxy._xdomain = /^\s*([a-zA-Z0-9\+\-\.]+\:)\/\/([^?#\/]+)/, Sys.Net.WebServiceError = function(n, t, i, r, u) {
    this._timedOut = n, this._message = t, this._stackTrace = i, this._exceptionType = r, this._errorObject = u, this._statusCode = -1
}, Sys.Net.WebServiceError.prototype = {
    get_timedOut: function() {
        return this._timedOut
    },
    get_statusCode: function() {
        return this._statusCode
    },
    get_message: function() {
        return this._message
    },
    get_stackTrace: function() {
        return this._stackTrace || ""
    },
    get_exceptionType: function() {
        return this._exceptionType || ""
    },
    get_errorObject: function() {
        return this._errorObject || null
    }
}, Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError"), Type.registerNamespace("Sys"), Sys.Res = {
    argumentInteger: "Value must be an integer.",
    invokeCalledTwice: "Cannot call invoke more than once.",
    webServiceFailed: "The server method '{0}' failed with the following error: {1}",
    argumentType: "Object cannot be converted to the required type.",
    argumentNull: "Value cannot be null.",
    scriptAlreadyLoaded: "The script '{0}' has been referenced multiple times. If referencing Microsoft AJAX scripts explicitly, set the MicrosoftAjaxMode property of the ScriptManager to Explicit.",
    scriptDependencyNotFound: "The script '{0}' failed to load because it is dependent on script '{1}'.",
    formatBadFormatSpecifier: "Format specifier was invalid.",
    requiredScriptReferenceNotIncluded: "'{0}' requires that you have included a script reference to '{1}'.",
    webServiceFailedNoMsg: "The server method '{0}' failed.",
    argumentDomElement: "Value must be a DOM element.",
    invalidExecutorType: "Could not create a valid Sys.Net.WebRequestExecutor from: {0}.",
    cannotCallBeforeResponse: "Cannot call {0} when responseAvailable is false.",
    actualValue: "Actual value was {0}.",
    enumInvalidValue: "'{0}' is not a valid value for enum {1}.",
    scriptLoadFailed: "The script '{0}' could not be loaded.",
    parameterCount: "Parameter count mismatch.",
    cannotDeserializeEmptyString: "Cannot deserialize empty string.",
    formatInvalidString: "Input string was not in a correct format.",
    invalidTimeout: "Value must be greater than or equal to zero.",
    cannotAbortBeforeStart: "Cannot abort when executor has not started.",
    argument: "Value does not fall within the expected range.",
    cannotDeserializeInvalidJson: "Cannot deserialize. The data does not correspond to valid JSON.",
    invalidHttpVerb: "httpVerb cannot be set to an empty or null string.",
    nullWebRequest: "Cannot call executeRequest with a null webRequest.",
    eventHandlerInvalid: "Handler was not added through the Sys.UI.DomEvent.addHandler method.",
    cannotSerializeNonFiniteNumbers: "Cannot serialize non finite numbers.",
    argumentUndefined: "Value cannot be undefined.",
    webServiceInvalidReturnType: "The server method '{0}' returned an invalid type. Expected type: {1}",
    servicePathNotSet: "The path to the web service has not been set.",
    argumentTypeWithTypes: "Object of type '{0}' cannot be converted to type '{1}'.",
    cannotCallOnceStarted: "Cannot call {0} once started.",
    badBaseUrl1: "Base URL does not contain ://.",
    badBaseUrl2: "Base URL does not contain another /.",
    badBaseUrl3: "Cannot find last / in base URL.",
    setExecutorAfterActive: "Cannot set executor after it has become active.",
    paramName: "Parameter name: {0}",
    nullReferenceInPath: "Null reference while evaluating data path: '{0}'.",
    cannotCallOutsideHandler: "Cannot call {0} outside of a completed event handler.",
    cannotSerializeObjectWithCycle: "Cannot serialize object with cyclic reference within child properties.",
    format: "One of the identified items was in an invalid format.",
    assertFailedCaller: "Assertion Failed: {0}\r\nat {1}",
    argumentOutOfRange: "Specified argument was out of the range of valid values.",
    webServiceTimedOut: "The server method '{0}' timed out.",
    notImplemented: "The method or operation is not implemented.",
    assertFailed: "Assertion Failed: {0}",
    invalidOperation: "Operation is not valid due to the current state of the object.",
    breakIntoDebugger: "{0}\r\n\r\nBreak into debugger?"
};

; // roblox.js
(function(n, t) {
    function b(n, i) {
        var r = i.split(".");
        for (i = r.shift(); r.length > 0; n = n[i], i = r.shift())
            if (n[i] === t) return t;
        return n[i]
    }

    function y(n, i, r) {
        var u = i.split(".");
        for (i = u.shift(); u.length > 0; n = n[i], i = u.shift()) n[i] === t && (n[i] = {});
        n[i] = r
    }

    function w(n, t) {
        var i = f.createElement("link");
        i.href = n, i.rel = "stylesheet", i.type = "text/css", u.parentNode.insertBefore(i, u), t()
    }

    function p(n, t) {
        var i = f.createElement("script");
        i.type = "text/javascript", i.src = n, i.onload = i.onreadystatechange = function() {
            i.readyState && i.readyState != "loaded" && i.readyState != "complete" || (t(), i.onload = i.onreadystatechange = null)
        }, u.parentNode.insertBefore(i, u)
    }

    function g(n) {
        return n.split(".").pop().split("?").shift()
    }

    function l(n) {
        if (n.indexOf(".js") < 0) return n;
        if (n.indexOf(r.modulePath) >= 0) return n.split(r.modulePath + "/").pop().split(".").shift().replace("/", ".");
        for (var t in r.paths)
            if (r.paths[t] == n) return t;
        return n
    }

    function v(n) {
        return n.indexOf(".js") >= 0 || n.indexOf(".css") >= 0 ? n : r.paths[n] || r.baseUrl + r.modulePath + "/" + n.replace(".", "/") + ".js"
    }

    function c(n) {
        for (var r, u = [], i = 0; i < n.length; i++) r = b(Roblox, l(n[i])), r !== t && u.push(r);
        return u
    }

    function e(n) {
        var t = i[n];
        if (t.loaded && t.depsLoaded)
            while (t.listeners.length > 0) t.listeners.shift()()
    }

    function a(n, u) {
        var f, o, s;
        if (!d(n) || r.externalResources.toString().indexOf(n) >= 0) return u();
        f = l(n), i[f] === t ? (i[f] = {
            loaded: !1,
            depsLoaded: !0,
            listeners: []
        }, i[f].listeners.push(u), o = v(f), s = g(o) == "css" ? w : p, s(o, function() {
            i[f].loaded = !0, e(f)
        })) : (i[f].listeners.push(u), e(f))
    }

    function o(n, t) {
        var i = n.shift(),
            r = n.length == 0 ? t : function() {
                o(n, t)
            };
        a(i, r)
    }

    function h(n, t) {
        s(n) || (n = [n]);
        var i = function() {
            t.apply(null, c(n))
        };
        o(n.slice(0), i)
    }

    function nt(n, t, r) {
        k(t) ? (r = t, t = []) : s(t) || (t = [t]), i[n] = i[n] || {
            loaded: !0,
            listeners: []
        }, i[n].depsLoaded = !1, i[n].listeners.unshift(function() {
            y(Roblox, n, r.apply(null, c(t)))
        }), h(t, function() {
            i[n].depsLoaded = !0, e(n)
        })
    }
    var f = n.document,
        u = f.getElementsByTagName("script")[0],
        d = function(n) {
            return typeof n == "string"
        },
        s = function(n) {
            return Object.prototype.toString.call(n) == "[object Array]"
        },
        k = function(n) {
            return Object.prototype.toString.call(n) == "[object Function]"
        },
        i = {},
        r = {
            baseUrl: "",
            modulePath: "/js/modules",
            paths: {},
            externalResources: []
        };
    typeof Roblox == "undefined" && (Roblox = {}), Roblox.config = r, Roblox.require = h, Roblox.define = nt
})(window);

; // common/constants.js
var Roblox = Roblox || {};
Roblox.Constants = function() {
    return {
        http: {
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            successStatus: "Success"
        },
        realTimeNotifications: {
            friendshipNotifications: {
                name: "FriendshipNotifications",
                types: {
                    friendshipCreated: "FriendshipCreated",
                    friendshipDestroyed: "FriendshipDestroyed",
                    friendshipDeclined: "FriendshipDeclined",
                    friendshipRequested: "FriendshipRequested"
                }
            },
            presenceBulkNotifications: {
                name: "PresenceBulkNotifications",
                types: {
                    presenceChanged: "PresenceChanged"
                }
            }
        },
        presenceTypes: {
            offline: 0,
            online: 1,
            inGame: 2,
            inStudio: 3
        },
        keyCodes: {
            enter: 13
        },
        events: {
            ClickShareGameToChat: {
                name: "ShareGameToChat",
                context: "ClickShareIcon"
            }
        }
    }
}();

; // jquery.cookie.js
jQuery.cookie = function(n, t, i) {
    var f, r, e, o, u, s;
    if (typeof t != "undefined") {
        i = i || {}, t === null && (t = "", i.expires = -1), f = "", i.expires && (typeof i.expires == "number" || i.expires.toUTCString) && (typeof i.expires == "number" ? (r = new Date, r.setTime(r.getTime() + i.expires * 864e5)) : r = i.expires, f = "; expires=" + r.toUTCString());
        var h = i.path ? "; path=" + i.path : "",
            c = i.domain ? "; domain=" + i.domain : "",
            l = i.secure ? "; secure" : "";
        document.cookie = [n, "=", encodeURIComponent(t), f, h, c, l].join("")
    } else {
        if (e = null, document.cookie && document.cookie != "")
            for (o = document.cookie.split(";"), u = 0; u < o.length; u++)
                if (s = jQuery.trim(o[u]), s.substring(0, n.length + 1) == n + "=") {
                    e = decodeURIComponent(s.substring(n.length + 1));
                    break
                }
        return e
    }
};

; // utilities/performance.js
Roblox = Roblox || {}, Roblox.Performance = function() {
    function r() {
        return "performance" in window && "timing" in window.performance && "navigation" in window.performance && "measure" in window.performance
    }

    function nt() {
        if (u = $('meta[name="performance"]'), !u) return !1;
        var n = u.data("ui-performance-relative-value");
        return Math.random() < n && r()
    }

    function w() {
        var n = i.data("performance-relative-value");
        return Math.random() < n && r()
    }

    function p() {
        var n = i.data("send-event-percentage");
        return Roblox.EventStream && n && n != 0 && Math.random() < n && r()
    }

    function y() {
        typeof t == "undefined" && (t = i.data("internal-page-name"))
    }

    function v() {
        typeof n == "undefined" && window.performance && (n = window.performance.timing)
    }

    function ot(n, t, i, r) {
        var u = [];
        return u.push(n), u.push(t), u.push(i), r = Math.floor(r), u.push(r), u
    }

    function k(n, t, i, r) {
        if (Roblox.GaEventSettings.gaPerformanceEventEnabled && typeof GoogleAnalyticsEvents != "undefined" && r > 0) {
            var u = ot(n, t, i, r);
            GoogleAnalyticsEvents.FireEvent(u)
        }
    }

    function a(n, t) {
        return typeof t == "undefined" && (t = rt), t + ":" + n
    }

    function c(n) {
        return n + "_measure"
    }

    function h(n, t) {
        if (window.performance && typeof window.performance.mark == "function") {
            var i = a(n, t);
            window.performance.mark(i)
        }
    }

    function s(n) {
        var t = n.split(":"),
            r = t[0],
            i = t[1];
        t.length > 2 && (i = t[2] + ":" + i), window.performance.measure(c(i), r, n)
    }

    function d() {
        var n, t, i;
        if (typeof window.performance.getEntriesByType == "function" && (n = window.performance.getEntriesByType("mark"), n && n.length > 0))
            for (t = 0; t < n.length; t++) i = n[t], s(i.name)
    }

    function g(n) {
        var f = [],
            t, i, u, r;
        if (typeof window.performance.getEntriesByName == "function" && (t = window.performance.getEntriesByName(n), t && t.length > 0))
            for (i = 0; i < t.length; i++) u = t[i], r = {}, r.name = u.name, r.duration = Math.floor(u.duration), f.push(r);
        return f
    }

    function o() {
        if (n && n.domComplete && n.navigationStart) {
            var t = Math.floor(n.domComplete - n.navigationStart);
            if (t > 0) return {
                name: "PageLoad",
                duration: t
            }
        }
        return null
    }

    function tt() {
        if (n && n.responseEnd && n.navigationStart) {
            var t = Math.floor(n.responseEnd - n.navigationStart);
            if (t > 0 && t.toString().length < 6) return {
                name: "FirstByte",
                duration: t
            }
        }
        return null
    }

    function it() {
        var t = [],
            e = o(),
            u, n, i, f, r;
        if (e && t.push(e), u = tt(), u && t.push(u), typeof window.performance.getEntriesByType == "function" && (n = window.performance.getEntriesByType("measure"), n && n.length > 0))
            for (i = 0; i < n.length; i++) f = n[i], r = {}, r.name = f.name, r.duration = Math.floor(f.duration), t.push(r);
        return t
    }

    function e(n) {
        var i, r;
        if (n && n.length > 0)
            for (i = 0; i < n.length; i++) r = n[i], k(ut, t, r.name, r.duration)
    }

    function f(n) {
        var r, i;
        if (n && n.length > 0) {
            for (r = {}, i = 0; i < n.length; i++) r[n[i].name] = n[i].duration;
            Roblox.EventStream.SendEventWithTarget("pagePerformance", t, r, Roblox.EventStream.TargetTypes.WWW)
        }
    }

    function ft() {
        var i, r, e;
        if (nt()) {
            var n = [],
                s = u.data("ui-performance-endpoint"),
                f = o();
            if (f && (n.push(f), n.length > 0))
                for (i = 0; i < n.length; i++) r = n[i], e = {
                    featureName: t,
                    measureName: r.name,
                    value: r.duration
                }, $.ajax({
                    type: "POST",
                    url: s,
                    data: e,
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !0
                    }
                })
        }
    }

    function et(n) {
        var o, l, u;
        i && r() && typeof t != "undefined" && (h(n), o = a(n), s(o), l = c(n), u = g(l), w() && e(u), p() && f(u))
    }

    function l() {
        if (i && r() && typeof t != "undefined") {
            d();
            var n = it();
            w() && e(n), p() && f(n)
        }
    }

    function b() {
        i = $("#rbx-body")
    }
    var n, ut = "Performance",
        t, i, u, rt = "navigationStart";
    return $(window).load(function() {
        b(), v(), y(), l(), ft()
    }), {
        setPageElement: b,
        setTiming: v,
        setPageName: y,
        setPerformanceMark: h,
        logSinglePerformanceMark: et,
        logPerformance: l
    }
}();

; // RobloxCookies.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Cookies == "undefined" && (Roblox.Cookies = {}), Roblox.Cookies.getBrowserTrackerId = function() {
    var t = $.cookie("RBXEventTrackerV2") || $.cookie("RBXEventTracker"),
        n;
    return t && (n = t.match(/browserid=([^&]*)/i), n) ? n[1] : !1
}, Roblox.Cookies.getSessionId = function() {
    var t = $.cookie("RBXSessionTracker"),
        n;
    if (t) return (n = t.match(/sessionid=([^&]*)/i), n) ? n[1] : !1
}, Roblox.Cookies.getGuestId = function() {
    var t = $.cookie("GuestData"),
        n;
    if (t) return (n = t.match(/userid=([^&]*)/i), n) ? n[1] : !1
};

; // utilities/minifyTestFile.js
minifyTest = function() {
    var n, t = "Minified"
};

; // RobloxEventStream.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.EventStream == "undefined" && (Roblox.EventStream = function() {
    function b() {
        t = !0
    }

    function l(n) {
        u = n
    }

    function a(n, i) {
        var r, e, f, o, s;
        return r = t ? this.location.href : window.location.href, r && u && (e = r.indexOf("?"), e > -1 && (r = r.slice(0, e))), f = {
            evt: n,
            ctx: i,
            url: r,
            lt: (new Date).toISOString()
        }, t || (o = Roblox.Cookies.getGuestId(), o && (f.gid = o), s = Roblox.Cookies.getSessionId(), s && (f.sid = s)), f
    }

    function i(i, r, u, l) {
        var v = "",
            p, y, b;
        switch (l) {
            case n.DEFAULT:
                v = s;
                break;
            case n.WWW:
                v = o;
                break;
            case n.STUDIO:
                v = e;
                break;
            case n.DIAGNOSTIC:
                v = h
        }
        if (t && l !== n.DEFAULT) throw "TargetType '" + l + "' is not supported in Service Worker mode";
        i && r && v !== "" && (p = a(i, r), y = v, y += v && v.indexOf("?") === -1 ? "?" : "&", t ? (w(u, p), y += c(u), Roblox.Fetch.getWithNoCredentials(y)) : ($.extend(u, p), y += $.param(u), b = new Image, b.src = y), f.LocalEventLog.push({
            eventName: i,
            context: r,
            additionalProperties: u
        }))
    }

    function v(t, r, u) {
        return i(t, r, u, n.DEFAULT)
    }

    function y() {
        return r
    }

    function p(n, t, i, u) {
        s = n, o = t, e = i, h = u, r = !0
    }

    function w(n, t) {
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        return n
    }

    function c(n) {
        var i = [],
            t;
        for (t in n) n.hasOwnProperty(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
        return i.join("&")
    }
    var n = {
            DEFAULT: 0,
            WWW: 1,
            STUDIO: 2,
            DIAGNOSTIC: 3
        },
        s, o, e, h, t = !1,
        u = !1,
        r = !1,
        f = {
            Init: p,
            isInitialized: y,
            SendEvent: v,
            SendEventWithTarget: i,
            LocalEventLog: [],
            TargetTypes: n,
            SetServiceWorkerMode: b,
            SetExcludeQueryStringFromUrl: l
        };
    return f
}());

; // Events/UserInteractionsEvent.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.UserInteractionsEvent == "undefined" && (Roblox.UserInteractionsEvent = function() {
    var n = "mousemove touchstart",
        t = function(n) {
            return !Roblox.EventStream || !Roblox.EventStream.isInitialized || !Roblox.EventStream.isInitialized() ? !1 : (Roblox.EventStream.SendEvent("userInteractions", n, {}), !0)
        },
        i = function(r) {
            if (r.type === "mousemove") {
                if (!t("mouse")) return
            } else if (!t("touch")) return;
            $.each(n.split(" "), function(n, t) {
                $(document).off(t, null, i)
            })
        },
        r = function() {
            $(document).on(n, i)
        };
    return {
        Init: r
    }
}(), Roblox.UserInteractionsEvent.Init());

; // Events/PageHeartbeatEvent.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.PageHeartbeatEvent == "undefined" && (Roblox.PageHeartbeatEvent = function() {
    var n = function(n) {
            Roblox.EventStream && Roblox.EventStream.SendEvent("pageHeartbeat", "heartbeat" + n, {})
        },
        t = function(t) {
            if (t) {
                var i = 0;

                function r() {
                    if (t.length && i < t.length) {
                        var u = t[i++];
                        setTimeout(function() {
                            n(i), r()
                        }, u * 1e3)
                    }
                }
                r()
            }
        },
        i = function(n) {
            t(n)
        };
    return {
        Init: i
    }
}());

; // services/userService.js
"use strict";
var Roblox = Roblox || {};
Roblox.CurrentUser = Roblox.CurrentUser || {}, Roblox.UserService = function() {
    function t() {
        Roblox.CurrentUser.isAuthenticated = !0, Roblox.CurrentUser.userId = n.dataset.userid, Roblox.CurrentUser.name = n.dataset.name, Roblox.CurrentUser.isUnder13 = n.dataset.isunder13 === "true", Roblox.CurrentUser.is13orOver = !Roblox.CurrentUser.isUnder13
    }

    function i() {
        n ? t() : Roblox.CurrentUser.isAuthenticated = !1
    }
    var n = document.querySelector('meta[name="user-data"]');
    i()
}();

; // services/metaDataValues.js
"use strict";
var Roblox = Roblox || {};
Roblox.MetaDataValues = function() {
    function t() {
        return n && n.dataset && n.dataset.internalPageName
    }
    var n = document.querySelector('meta[name="page-meta"]');
    return {
        getPageName: t
    }
}();

; // utilities/localStorage.js
var Roblox = Roblox || {};
Roblox.LocalStorage = function() {
    function n() {
        var n = "localstorage_validation_test";
        try {
            return localStorage.setItem(n, n), localStorage.removeItem(n), !0
        } catch (t) {
            return !1
        }
    }

    function t(n) {
        localStorage.removeItem(n)
    }

    function i(n, t, i) {
        var u = +new Date,
            r = JSON.parse(localStorage.getItem(n));
        r || (r = {}), r.value = t, r.expiryTimestamp = u + i, localStorage.setItem(n, JSON.stringify(r))
    }

    function r(n) {
        var r = +new Date,
            t = JSON.parse(localStorage.getItem(n)),
            i;
        if (t && t.expiryTimestamp) {
            if (i = t.expiryTimestamp, r < i) return t.value;
            localStorage.removeItem(n)
        }
        return null
    }
    return {
        isAvailable: n,
        removeFromLocalStorage: t,
        setItemWithExpiry: i,
        getItemWithExpiry: r
    }
}();

; // utilities/ExponentialBackoff.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Utilities == "undefined" && (Roblox.Utilities = {}), Roblox.Utilities.ExponentialBackoff = function(n, t, i) {
    function s() {
        a();
        var n = v();
        return r++, n
    }

    function h() {
        r = 0, e = +new Date, f = !1
    }

    function c() {
        return r
    }

    function l() {
        return e
    }

    function a() {
        r === 0 && t && t(u) && (f = !0)
    }

    function v() {
        var t = y(),
            i, n;
        return r === 0 ? (n = t.FirstAttemptDelay(), n + o(n, t.FirstAttemptRandomnessFactor())) : (i = t.SubsequentDelayBase(), n = i * Math.pow(2, r - 1), n > t.MaximumDelayBase() && (n = t.MaximumDelayBase()), n + o(n, t.SubsequentDelayRandomnessFactor()))
    }

    function o(n, t) {
        return Math.floor(Math.random() * n * t)
    }

    function y() {
        return f && i ? i : n
    }
    var u = this,
        r = 0,
        f = !1,
        e = null;
    u.StartNewAttempt = s, u.Reset = h, u.GetAttemptCount = c, u.GetLastResetTime = l
};

; // utilities/ExponentialBackoffSpecification.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Utilities == "undefined" && (Roblox.Utilities = {}), Roblox.Utilities.ExponentialBackoffSpecification = function(n) {
    n = n || {};
    var t = typeof n.firstAttemptDelay == "number" ? n.firstAttemptDelay : 5e3,
        i = typeof n.firstAttemptRandomnessFactor == "number" ? n.firstAttemptRandomnessFactor : .5,
        r = typeof n.subsequentDelayBase == "number" ? n.subsequentDelayBase : t * 2,
        u = typeof n.subsequentDelayRandomnessFactor == "number" ? n.subsequentDelayRandomnessFactor : i,
        f = typeof n.maximumDelayBase == "number" ? n.maximumDelayBase : 3e5;
    this.FirstAttemptDelay = function() {
        return t
    }, this.FirstAttemptRandomnessFactor = function() {
        return i
    }, this.SubsequentDelayBase = function() {
        return r
    }, this.SubsequentDelayRandomnessFactor = function() {
        return u
    }, this.MaximumDelayBase = function() {
        return f
    }
};

; // Reference/themeUpdate.js
"use strict";
var Roblox = Roblox || {};
Roblox.ThemeUpdate = function() {
    function f(t) {
        r !== t.themeType && (h(), s(n[t.themeType]), r = t.themeType)
    }

    function u() {
        var n = Roblox.EnvironmentUrls.accountSettingsApi + "/v1/themes/user";
        $.ajax({
            type: "GET",
            url: n,
            contentType: "application/json; charset=utf-8",
            success: f
        })
    }

    function e() {
        if (Roblox && Roblox.RealTime) {
            var n = Roblox.RealTime.Factory.GetClient();
            n.Subscribe("UserThemeTypeChangeNotification", u)
        }
        $(document).on("Roblox.ThemeUpdate", u)
    }

    function o() {
        var n = $(t);
        return n && n.length > 0
    }

    function s(n) {
        o() ? $(t).addClass(n) : i.forEach(function(t) {
            $(t) && $(t).addClass(n)
        })
    }

    function h() {
        for (var r in n) $(t).removeClass(n[r]), i.forEach(function(t) {
            $(t) && $(t).removeClass(n[r])
        })
    }

    function c() {
        e()
    }
    var n = {
            Classic: "light-theme",
            Dark: "dark-theme",
            Light: "light-theme"
        },
        t = ".rbx-body",
        i = ["#navigation-container", ".container-main", "#chat-container", ".notification-stream-base", "#notification-stream-popover"],
        r = "";
    return {
        init: c
    }
}(), $(function() {
    Roblox.ThemeUpdate.init()
});