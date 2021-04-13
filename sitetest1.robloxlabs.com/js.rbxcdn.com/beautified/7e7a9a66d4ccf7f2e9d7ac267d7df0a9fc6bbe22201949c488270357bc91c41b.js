! function() {
    "use strict";
    var r = {
            616: function(e, t, r) {
                /** @license React v16.14.0
                 * react-dom-server.browser.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                function S(e) {
                    return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var A = r(559),
                    P = r(804);

                function E(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var r = "function" == typeof Symbol && Symbol.for,
                    s = r ? Symbol.for("react.portal") : 60106,
                    c = r ? Symbol.for("react.fragment") : 60107,
                    u = r ? Symbol.for("react.strict_mode") : 60108,
                    l = r ? Symbol.for("react.profiler") : 60114,
                    f = r ? Symbol.for("react.provider") : 60109,
                    p = r ? Symbol.for("react.context") : 60110,
                    d = r ? Symbol.for("react.concurrent_mode") : 60111,
                    h = r ? Symbol.for("react.forward_ref") : 60112,
                    m = r ? Symbol.for("react.suspense") : 60113,
                    y = r ? Symbol.for("react.suspense_list") : 60120,
                    g = r ? Symbol.for("react.memo") : 60115,
                    b = r ? Symbol.for("react.lazy") : 60116,
                    n = r ? Symbol.for("react.block") : 60121,
                    v = r ? Symbol.for("react.fundamental") : 60117,
                    w = r ? Symbol.for("react.scope") : 60119;

                function x(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case c:
                            return "Fragment";
                        case s:
                            return "Portal";
                        case l:
                            return "Profiler";
                        case u:
                            return "StrictMode";
                        case m:
                            return "Suspense";
                        case y:
                            return "SuspenseList"
                    }
                    if ("object" === S(e)) switch (e.$$typeof) {
                        case p:
                            return "Context.Consumer";
                        case f:
                            return "Context.Provider";
                        case h:
                            var t = (t = e.render).displayName || t.name || "";
                            return e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case g:
                            return x(e.type);
                        case n:
                            return x(e.render);
                        case b:
                            if (e = 1 === e._status ? e._result : null) return x(e)
                    }
                    return null
                }
                r = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                r.hasOwnProperty("ReactCurrentDispatcher") || (r.ReactCurrentDispatcher = {
                    current: null
                }), r.hasOwnProperty("ReactCurrentBatchConfig") || (r.ReactCurrentBatchConfig = {
                    suspense: null
                });
                var k = {};

                function I(e, t) {
                    for (var r = 0 | e._threadCount; r <= t; r++) e[r] = e._currentValue2, e._threadCount = r + 1
                }
                for (var M = new Uint16Array(16), o = 0; o < 15; o++) M[o] = o + 1;
                M[15] = 0;
                var a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    i = Object.prototype.hasOwnProperty,
                    O = {},
                    R = {};

                function N(e) {
                    return i.call(R, e) || !i.call(O, e) && (a.test(e) ? R[e] = !0 : void(O[e] = !0))
                }

                function T(e, t, r, n) {
                    if (null == t || function(e, t, r, n) {
                            if (null === r || 0 !== r.type) switch (S(t)) {
                                case "function":
                                case "symbol":
                                    return 1;
                                case "boolean":
                                    return n ? void 0 : null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e;
                                default:
                                    return
                            }
                        }(e, t, r, n)) return 1;
                    if (!n && null !== r) switch (r.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || t < 1
                    }
                }

                function C(e, t, r, n, o, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a
                }
                var F = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
                    F[e] = new C(e, 0, !1, e, null, !1)
                }), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach(function(e) {
                    var t = e[0];
                    F[t] = new C(t, 1, !1, e[1], null, !1)
                }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
                    F[e] = new C(e, 2, !1, e.toLowerCase(), null, !1)
                }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
                    F[e] = new C(e, 2, !1, e, null, !1)
                }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
                    F[e] = new C(e, 3, !1, e.toLowerCase(), null, !1)
                }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
                    F[e] = new C(e, 3, !0, e, null, !1)
                }), ["capture", "download"].forEach(function(e) {
                    F[e] = new C(e, 4, !1, e, null, !1)
                }), ["cols", "rows", "size", "span"].forEach(function(e) {
                    F[e] = new C(e, 6, !1, e, null, !1)
                }), ["rowSpan", "start"].forEach(function(e) {
                    F[e] = new C(e, 5, !1, e.toLowerCase(), null, !1)
                });
                var j = /[\-:]([a-z])/g;

                function D(e) {
                    return e[1].toUpperCase()
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
                    var t = e.replace(j, D);
                    F[t] = new C(t, 1, !1, e, null, !1)
                }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
                    var t = e.replace(j, D);
                    F[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
                }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
                    var t = e.replace(j, D);
                    F[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
                }), ["tabIndex", "crossOrigin"].forEach(function(e) {
                    F[e] = new C(e, 1, !1, e.toLowerCase(), null, !1)
                }), F.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(e) {
                    F[e] = new C(e, 1, !1, e.toLowerCase(), null, !0)
                });
                var q = /["'&<>]/;

                function _(e) {
                    if ("boolean" == typeof e || "number" == typeof e) return "" + e;
                    e = "" + e;
                    var t = q.exec(e);
                    if (t) {
                        for (var r = "", n = 0, o = t.index; o < e.length; o++) {
                            switch (e.charCodeAt(o)) {
                                case 34:
                                    t = "&quot;";
                                    break;
                                case 38:
                                    t = "&amp;";
                                    break;
                                case 39:
                                    t = "&#x27;";
                                    break;
                                case 60:
                                    t = "&lt;";
                                    break;
                                case 62:
                                    t = "&gt;";
                                    break;
                                default:
                                    continue
                            }
                            n !== o && (r += e.substring(n, o)), n = o + 1, r += t
                        }
                        e = n !== o ? r + e.substring(n, o) : r
                    }
                    return e
                }
                var B = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    H = null,
                    L = null,
                    U = null,
                    V = !1,
                    z = !1,
                    W = null,
                    $ = 0;

                function G() {
                    if (null === H) throw Error(E(321));
                    return H
                }

                function Z() {
                    if (0 < $) throw Error(E(312));
                    return {
                        memoizedState: null,
                        queue: null,
                        next: null
                    }
                }

                function J() {
                    return null === U ? null === L ? (V = !1, L = U = Z()) : (V = !0, U = L) : U = null === U.next ? (V = !1, U.next = Z()) : (V = !0, U.next), U
                }

                function Q(e, t, r, n) {
                    for (; z;) z = !1, $ += 1, U = null, r = e(t, n);
                    return L = H = null, $ = 0, U = W = null, r
                }

                function X(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function Y(e, t, r) {
                    if (H = G(), U = J(), V) {
                        var n = U.queue;
                        if (t = n.dispatch, null === W || void 0 === (r = W.get(n))) return [U.memoizedState, t];
                        for (W.delete(n), n = U.memoizedState; n = e(n, r.action), r = r.next, null !== r;);
                        return [U.memoizedState = n, t]
                    }
                    return e = e === X ? "function" == typeof t ? t() : t : void 0 !== r ? r(t) : t, U.memoizedState = e, e = (e = U.queue = {
                        last: null,
                        dispatch: null
                    }).dispatch = function(e, t, r) {
                        if (!($ < 25)) throw Error(E(301));
                        if (e === H)
                            if (z = !0, e = {
                                    action: r,
                                    next: null
                                }, null === W && (W = new Map), void 0 === (r = W.get(t))) W.set(t, e);
                            else {
                                for (t = r; null !== t.next;) t = t.next;
                                t.next = e
                            }
                    }.bind(null, H, e), [U.memoizedState, e]
                }

                function K() {}
                var ee = 0,
                    te = {
                        readContext: function(e) {
                            var t = ee;
                            return I(e, t), e[t]
                        },
                        useContext: function(e) {
                            G();
                            var t = ee;
                            return I(e, t), e[t]
                        },
                        useMemo: function(e, t) {
                            if (H = G(), t = void 0 === t ? null : t, null !== (U = J())) {
                                var r = U.memoizedState;
                                if (null !== r && null !== t) {
                                    e: {
                                        var n = r[1];
                                        if (null === n) n = !1;
                                        else {
                                            for (var o = 0; o < n.length && o < t.length; o++)
                                                if (!B(t[o], n[o])) {
                                                    n = !1;
                                                    break e
                                                }
                                            n = !0
                                        }
                                    }
                                    if (n) return r[0]
                                }
                            }
                            return e = e(), U.memoizedState = [e, t], e
                        },
                        useReducer: Y,
                        useRef: function(e) {
                            H = G();
                            var t = (U = J()).memoizedState;
                            return null === t ? (e = {
                                current: e
                            }, U.memoizedState = e) : t
                        },
                        useState: function(e) {
                            return Y(X, e)
                        },
                        useLayoutEffect: function() {},
                        useCallback: function(e) {
                            return e
                        },
                        useImperativeHandle: K,
                        useEffect: K,
                        useDebugValue: K,
                        useResponder: function(e, t) {
                            return {
                                props: t,
                                responder: e
                            }
                        },
                        useDeferredValue: function(e) {
                            return G(), e
                        },
                        useTransition: function() {
                            return G(), [function(e) {
                                e()
                            }, !1]
                        }
                    },
                    re = "http://www.w3.org/1999/xhtml";

                function ne(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }
                var oe = {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    },
                    ae = A({
                        menuitem: !0
                    }, oe),
                    ie = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    se = ["Webkit", "ms", "Moz", "O"];
                Object.keys(ie).forEach(function(t) {
                    se.forEach(function(e) {
                        e = e + t.charAt(0).toUpperCase() + t.substring(1), ie[e] = ie[t]
                    })
                });
                var ce = /([A-Z])/g,
                    ue = /^ms-/,
                    le = P.Children.toArray,
                    fe = r.ReactCurrentDispatcher,
                    pe = {
                        listing: !0,
                        pre: !0,
                        textarea: !0
                    },
                    de = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                    he = {},
                    me = {};
                var ye = Object.prototype.hasOwnProperty,
                    ge = {
                        children: null,
                        dangerouslySetInnerHTML: null,
                        suppressContentEditableWarning: null,
                        suppressHydrationWarning: null
                    };

                function be(e, t) {
                    if (void 0 === e) throw Error(E(152, x(t) || "Component"))
                }

                function ve(d, h, m) {
                    function e(e, t) {
                        var r = t.prototype && t.prototype.isReactComponent,
                            n = function(e, t, r, n) {
                                if (n && ("object" === S(n = e.contextType) && null !== n)) return I(n, r), n[r];
                                if (e = e.contextTypes) {
                                    for (var o in r = {}, e) r[o] = t[o];
                                    t = r
                                } else t = k;
                                return t
                            }(t, h, m, r),
                            o = [],
                            a = !1,
                            i = {
                                isMounted: function() {
                                    return !1
                                },
                                enqueueForceUpdate: function() {
                                    if (null === o) return null
                                },
                                enqueueReplaceState: function(e, t) {
                                    a = !0, o = [t]
                                },
                                enqueueSetState: function(e, t) {
                                    if (null === o) return null;
                                    o.push(t)
                                }
                            };
                        if (r) {
                            var s, r = new t(e.props, n, i);
                            "function" == typeof t.getDerivedStateFromProps && null != (s = t.getDerivedStateFromProps.call(null, e.props, r.state)) && (r.state = A({}, r.state, s))
                        } else if (H = {}, r = t(e.props, n, i), null == (r = Q(t, e.props, r, n)) || null == r.render) return void be(d = r, t);
                        if (r.props = e.props, r.context = n, r.updater = i, void 0 === (i = r.state) && (r.state = i = null), "function" == typeof r.UNSAFE_componentWillMount || "function" == typeof r.componentWillMount)
                            if ("function" == typeof r.componentWillMount && "function" != typeof t.getDerivedStateFromProps && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && "function" != typeof t.getDerivedStateFromProps && r.UNSAFE_componentWillMount(), o.length) {
                                i = o;
                                var c = a,
                                    o = null,
                                    a = !1;
                                if (c && 1 === i.length) r.state = i[0];
                                else {
                                    s = c ? i[0] : r.state;
                                    for (var u = !0, c = c ? 1 : 0; c < i.length; c++) {
                                        var l = i[c];
                                        null != (l = "function" == typeof l ? l.call(r, s, e.props, n) : l) && (u ? (u = !1, s = A({}, s, l)) : A(s, l))
                                    }
                                    r.state = s
                                }
                            } else o = null;
                        if (be(d = r.render(), t), "function" == typeof r.getChildContext && "object" === S(e = t.childContextTypes)) {
                            var f, p = r.getChildContext();
                            for (f in p)
                                if (!(f in e)) throw Error(E(108, x(t) || "Unknown", f))
                        }
                        p && (h = A({}, h, p))
                    }
                    for (; P.isValidElement(d);) {
                        var t = d,
                            r = t.type;
                        if ("function" != typeof r) break;
                        e(t, r)
                    }
                    return {
                        child: d,
                        context: h
                    }
                }
                var we = ((r = xe.prototype).destroy = function() {
                        var e;
                        this.exhausted || (this.exhausted = !0, this.clearProviders(), e = this.threadID, M[e] = M[0], M[0] = e)
                    }, r.pushProvider = function(e) {
                        var t = ++this.contextIndex,
                            r = e.type._context,
                            n = this.threadID;
                        I(r, n);
                        var o = r[n];
                        this.contextStack[t] = r, this.contextValueStack[t] = o, r[n] = e.props.value
                    }, r.popProvider = function() {
                        var e = this.contextIndex,
                            t = this.contextStack[e],
                            r = this.contextValueStack[e];
                        this.contextStack[e] = null, this.contextValueStack[e] = null, this.contextIndex--, t[this.threadID] = r
                    }, r.clearProviders = function() {
                        for (var e = this.contextIndex; 0 <= e; e--) this.contextStack[e][this.threadID] = this.contextValueStack[e]
                    }, r.read = function(e) {
                        if (this.exhausted) return null;
                        var t = ee;
                        ee = this.threadID;
                        var r = fe.current;
                        fe.current = te;
                        try {
                            for (var n = [""], o = !1; n[0].length < e;) {
                                if (0 === this.stack.length) {
                                    this.exhausted = !0;
                                    var a = this.threadID;
                                    M[a] = M[0], M[0] = a;
                                    break
                                }
                                var i = this.stack[this.stack.length - 1];
                                if (o || i.childIndex >= i.children.length) {
                                    var s = i.footer;
                                    if ("" !== s && (this.previousWasTextNode = !1), this.stack.pop(), "select" === i.type) this.currentSelectValue = null;
                                    else if (null != i.type && null != i.type.type && i.type.type.$$typeof === f) this.popProvider(i.type);
                                    else if (i.type === m) {
                                        this.suspenseDepth--;
                                        var c = n.pop();
                                        if (o) {
                                            o = !1;
                                            a = i.fallbackFrame;
                                            if (!a) throw Error(E(303));
                                            this.stack.push(a), n[this.suspenseDepth] += "\x3c!--$!--\x3e";
                                            continue
                                        }
                                        n[this.suspenseDepth] += c
                                    }
                                    n[this.suspenseDepth] += s
                                } else {
                                    var u = i.children[i.childIndex++],
                                        l = "";
                                    try {
                                        l += this.render(u, i.context, i.domNamespace)
                                    } catch (e) {
                                        if (null != e && "function" == typeof e.then) throw Error(E(294));
                                        throw e
                                    }
                                    n.length <= this.suspenseDepth && n.push(""), n[this.suspenseDepth] += l
                                }
                            }
                            return n[0]
                        } finally {
                            fe.current = r, ee = t
                        }
                    }, r.render = function(e, t, r) {
                        if ("string" == typeof e || "number" == typeof e) return "" === (r = "" + e) ? "" : this.makeStaticMarkup ? _(r) : this.previousWasTextNode ? "\x3c!-- --\x3e" + _(r) : (this.previousWasTextNode = !0, _(r));
                        if (e = (t = ve(e, t, this.threadID)).child, t = t.context, null === e || !1 === e) return "";
                        if (!P.isValidElement(e)) {
                            if (null == e || null == e.$$typeof) return e = le(e), this.stack.push({
                                type: null,
                                domNamespace: r,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), "";
                            if ((r = e.$$typeof) === s) throw Error(E(257));
                            throw Error(E(258, r.toString()))
                        }
                        var n, o = e.type;
                        if ("string" == typeof o) return this.renderDOM(e, t, r);
                        switch (o) {
                            case u:
                            case d:
                            case l:
                            case y:
                            case c:
                                return e = le(e.props.children), this.stack.push({
                                    type: null,
                                    domNamespace: r,
                                    children: e,
                                    childIndex: 0,
                                    context: t,
                                    footer: ""
                                }), "";
                            case m:
                                throw Error(E(294))
                        }
                        if ("object" === S(o) && null !== o) switch (o.$$typeof) {
                            case h:
                                H = {};
                                var a = o.render(e.props, e.ref),
                                    a = Q(o.render, e.props, a, e.ref);
                                return a = le(a), this.stack.push({
                                    type: null,
                                    domNamespace: r,
                                    children: a,
                                    childIndex: 0,
                                    context: t,
                                    footer: ""
                                }), "";
                            case g:
                                return e = [P.createElement(o.type, A({
                                    ref: e.ref
                                }, e.props))], this.stack.push({
                                    type: null,
                                    domNamespace: r,
                                    children: e,
                                    childIndex: 0,
                                    context: t,
                                    footer: ""
                                }), "";
                            case f:
                                return r = {
                                    type: e,
                                    domNamespace: r,
                                    children: o = le(e.props.children),
                                    childIndex: 0,
                                    context: t,
                                    footer: ""
                                }, this.pushProvider(e), this.stack.push(r), "";
                            case p:
                                o = e.type, a = e.props;
                                var i = this.threadID;
                                return I(o, i), o = le(a.children(o[i])), this.stack.push({
                                    type: e,
                                    domNamespace: r,
                                    children: o,
                                    childIndex: 0,
                                    context: t,
                                    footer: ""
                                }), "";
                            case v:
                                throw Error(E(338));
                            case b:
                                switch (o = e.type, -1 === (n = o)._status && (n._status = 0, i = (i = n._ctor)(), (n._result = i).then(function(e) {
                                    0 === n._status && (e = e.default, n._status = 1, n._result = e)
                                }, function(e) {
                                    0 === n._status && (n._status = 2, n._result = e)
                                })), o._status) {
                                    case 1:
                                        return e = [P.createElement(o._result, A({
                                            ref: e.ref
                                        }, e.props))], this.stack.push({
                                            type: null,
                                            domNamespace: r,
                                            children: e,
                                            childIndex: 0,
                                            context: t,
                                            footer: ""
                                        }), "";
                                    case 2:
                                        throw o._result;
                                    default:
                                        throw Error(E(295))
                                }
                            case w:
                                throw Error(E(343))
                        }
                        throw Error(E(130, null == o ? o : S(o), ""))
                    }, r.renderDOM = function(e, t, r) {
                        var n = e.type.toLowerCase();
                        if (r === re && ne(n), !he.hasOwnProperty(n)) {
                            if (!de.test(n)) throw Error(E(65, n));
                            he[n] = !0
                        }
                        var o, a, i, s, c = e.props;
                        if ("input" === n) c = A({
                            type: void 0
                        }, c, {
                            defaultChecked: void 0,
                            defaultValue: void 0,
                            value: null != c.value ? c.value : c.defaultValue,
                            checked: null != c.checked ? c.checked : c.defaultChecked
                        });
                        else if ("textarea" === n) {
                            var u = c.value;
                            if (null == u) {
                                u = c.defaultValue;
                                var l = c.children;
                                if (null != l) {
                                    if (null != u) throw Error(E(92));
                                    if (Array.isArray(l)) {
                                        if (!(l.length <= 1)) throw Error(E(93));
                                        l = l[0]
                                    }
                                    u = "" + l
                                }
                                null == u && (u = "")
                            }
                            c = A({}, c, {
                                value: void 0,
                                children: "" + u
                            })
                        } else if ("select" === n) this.currentSelectValue = null != c.value ? c.value : c.defaultValue, c = A({}, c, {
                            value: void 0
                        });
                        else if ("option" === n) {
                            l = this.currentSelectValue;
                            var f = function(e) {
                                if (null == e) return e;
                                var t = "";
                                return P.Children.forEach(e, function(e) {
                                    null != e && (t += e)
                                }), t
                            }(c.children);
                            if (null != l) {
                                var p = null != c.value ? c.value + "" : f,
                                    u = !1;
                                if (Array.isArray(l)) {
                                    for (var d = 0; d < l.length; d++)
                                        if ("" + l[d] === p) {
                                            u = !0;
                                            break
                                        }
                                } else u = "" + l === p;
                                c = A({
                                    selected: void 0,
                                    children: void 0
                                }, c, {
                                    selected: u,
                                    children: f
                                })
                            }
                        }
                        if (u = c) {
                            if (ae[n] && (null != u.children || null != u.dangerouslySetInnerHTML)) throw Error(E(137, n, ""));
                            if (null != u.dangerouslySetInnerHTML) {
                                if (null != u.children) throw Error(E(60));
                                if (!("object" === S(u.dangerouslySetInnerHTML) && "__html" in u.dangerouslySetInnerHTML)) throw Error(E(61))
                            }
                            if (null != u.style && "object" !== S(u.style)) throw Error(E(62, ""))
                        }
                        for (x in u = c, l = this.makeStaticMarkup, f = 1 === this.stack.length, p = "<" + e.type, u)
                            if (ye.call(u, x)) {
                                var h = u[x];
                                if (null != h) {
                                    if ("style" === x) {
                                        d = void 0;
                                        var m, y, g, b, v = "",
                                            w = "";
                                        for (d in h) h.hasOwnProperty(d) && (m = 0 === d.indexOf("--"), null != (y = h[d]) && (v += w + (b = m ? d : (b = d, me.hasOwnProperty(b) ? me[b] : (g = b.replace(ce, "-$1").toLowerCase().replace(ue, "-ms-"), me[b] = g))) + ":", w = d, v += m = null == y || "boolean" == typeof y || "" === y ? "" : m || "number" != typeof y || 0 === y || ie.hasOwnProperty(w) && ie[w] ? ("" + y).trim() : y + "px", w = ";"));
                                        h = v || null
                                    }
                                    d = null;
                                    e: if (m = n, y = u, -1 === m.indexOf("-")) m = "string" == typeof y.is;
                                        else switch (m) {
                                            case "annotation-xml":
                                            case "color-profile":
                                            case "font-face":
                                            case "font-face-src":
                                            case "font-face-uri":
                                            case "font-face-format":
                                            case "font-face-name":
                                            case "missing-glyph":
                                                m = !1;
                                                break e;
                                            default:
                                                m = !0
                                        }
                                        m ? ge.hasOwnProperty(x) || (d = N(d = x) && null != h ? d + '="' + _(h) + '"' : ""): (o = x, a = h, s = i = void 0, s = F.hasOwnProperty(o) ? F[o] : null, (i = "style" !== o) && (i = null !== s ? 0 === s.type : 2 < o.length && ("o" === o[0] || "O" === o[0]) && ("n" === o[1] || "N" === o[1])), d = i || T(o, a, s, !1) ? "" : null !== s ? (o = s.attributeName, 3 === (i = s.type) || 4 === i && !0 === a ? o + '=""' : (s.sanitizeURL && (a = "" + a), o + '="' + _(a) + '"')) : N(o) ? o + '="' + _(a) + '"' : ""), d && (p += " " + d)
                                }
                            }
                        l || f && (p += ' data-reactroot=""');
                        var x = p;
                        u = "", oe.hasOwnProperty(n) ? x += "/>" : (x += ">", u = "</" + e.type + ">");
                        e: {
                            if (null != (l = c.dangerouslySetInnerHTML)) {
                                if (null != l.__html) {
                                    l = l.__html;
                                    break e
                                }
                            } else if ("string" == typeof(l = c.children) || "number" == typeof l) {
                                l = _(l);
                                break e
                            }
                            l = null
                        }
                        return null != l ? (c = [], pe.hasOwnProperty(n) && "\n" === l.charAt(0) && (x += "\n"), x += l) : c = le(c.children), e = e.type, r = null == r || "http://www.w3.org/1999/xhtml" === r ? ne(e) : "http://www.w3.org/2000/svg" === r && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : r, this.stack.push({
                            domNamespace: r,
                            type: n,
                            children: c,
                            childIndex: 0,
                            context: t,
                            footer: u
                        }), this.previousWasTextNode = !1, x
                    }, xe),
                    r = {
                        renderToString: function(e) {
                            e = new we(e, !1);
                            try {
                                return e.read(1 / 0)
                            } finally {
                                e.destroy()
                            }
                        },
                        renderToStaticMarkup: function(e) {
                            e = new we(e, !0);
                            try {
                                return e.read(1 / 0)
                            } finally {
                                e.destroy()
                            }
                        },
                        renderToNodeStream: function() {
                            throw Error(E(207))
                        },
                        renderToStaticNodeStream: function() {
                            throw Error(E(208))
                        },
                        version: "16.14.0"
                    };

                function xe(e, t) {
                    if (e = P.isValidElement(e) ? e.type !== c ? [e] : (e = e.props.children, P.isValidElement(e) ? [e] : le(e)) : le(e), e = {
                            type: null,
                            domNamespace: re,
                            children: e,
                            childIndex: 0,
                            context: k,
                            footer: ""
                        }, 0 === (r = M[0])) {
                        var r, n = M,
                            o = 2 * (r = n.length);
                        if (!(o <= 65536)) throw Error(E(304));
                        var a = new Uint16Array(o);
                        for (a.set(n), (M = a)[0] = r + 1, n = r; n < o - 1; n++) M[n] = n + 1;
                        M[o - 1] = 0
                    } else M[0] = M[r];
                    this.threadID = r, this.stack = [e], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = t, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = []
                }
                e.exports = r.default || r
            },
            31: function(e, t, r) {
                e.exports = r(616)
            },
            559: function(e) {
                /*
                object-assign
                (c) Sindre Sorhus
                @license MIT
                */
                var c = Object.getOwnPropertySymbols,
                    u = Object.prototype.hasOwnProperty,
                    l = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            }).join("")) return;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                            n[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1
                    } catch (e) {
                        return
                    }
                }() ? Object.assign : function(e, t) {
                    for (var r, n, o = function(e) {
                            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), a = 1; a < arguments.length; a++) {
                        for (var i in r = Object(arguments[a])) u.call(r, i) && (o[i] = r[i]);
                        if (c) {
                            n = c(r);
                            for (var s = 0; s < n.length; s++) l.call(r, n[s]) && (o[n[s]] = r[n[s]])
                        }
                    }
                    return o
                }
            },
            804: function(e) {
                e.exports = React
            }
        },
        n = {};

    function Z(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return r[e](t, t.exports, Z), t.exports
    }
    Z.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Z.d(t, {
                a: t
            }), t
        }, Z.d = function(e, t) {
            for (var r in t) Z.o(t, r) && !Z.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, Z.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var J = Z(804),
                Q = Z.n(J),
                e = PropTypes,
                r = Z.n(e),
                a = ReactUtilities,
                i = ReactStyleGuide,
                s = {
                    common: [],
                    feature: "Purchasing.PurchaseDialog"
                },
                t = {
                    transactionFailure: "TransactionFailureView",
                    insufficientFunds: "InsufficientFundsView",
                    priceChanged: "PriceChangedView"
                },
                n = {
                    badRequest: "Bad Request"
                },
                o = {
                    bought: "bought",
                    rented: "rented",
                    renewed: "renewed"
                },
                c = {
                    freeLabel: "Label.Free",
                    okAction: "Action.Ok",
                    insufficientFundsHeading: "Heading.InsufficientFunds",
                    insufficientFundsMessage: "Message.InsufficientFunds",
                    cancelAction: "Action.Cancel",
                    buyRobuxAction: "Action.BuyRobux",
                    buyAccessAction: "Action.BuyAccess",
                    buyItemHeading: "Heading.BuyItem",
                    rentNowAction: "Action.RentNow",
                    buyNowAction: "Action.BuyNow",
                    rentItemHeading: "Heading.RentItem",
                    getItemHeading: "Heading.GetItem",
                    getNowAction: "Action.GetNow",
                    priceChangedHeading: "Heading.PriceChanged",
                    priceChangedMessage: "Message.PriceChanged",
                    balanceAfterMessage: "Message.BalanceAfter",
                    agreeAndPayLabel: "Label.AgreeAndPay",
                    promptRentAccessMessage: "Message.PromptRentAccess",
                    promptRentMessage: "Message.PromptRent",
                    promptGetFreeAccessMessage: "Message.PromptGetFreeAccess",
                    promptGetFreeMessage: "Message.PromptGetFree",
                    promptBuyAccessMessage: "Message.PromptBuyAccess",
                    promptBuyMessage: "Message.PromptBuy",
                    configureAction: "Action.Customize",
                    notNowAction: "Action.NotNow",
                    customizeAction: "Action.Customize",
                    continueAction: "Action.Continue",
                    purchaseCompleteHeading: "Heading.PurchaseComplete",
                    successfullyBoughtAccessMessage: "Message.SuccessfullyBoughtAccess",
                    successfullyBoughtMessage: "Message.SuccessfullyBought",
                    successfullyRentedAccessMessage: "Message.SuccessfullyRented",
                    successfullyRenewedAccessMessage: "Message.SuccessfullyRenewedAccess",
                    successfullyRenewedMessage: "Message.SuccessfullyRenewed",
                    successfullyAcquiredAccessMessage: "Message.SuccessfullyAcquiredAccess",
                    successfullyAcquiredMessage: "Message.SuccessfullyAcquired",
                    errorOccuredHeading: "Heading.ErrorOccured",
                    purchasingUnavailableMessage: "Message.PurchasingUnavailable"
                };

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var f = c;

            function p() {
                var e = u((0, i.createModal)(), 2),
                    n = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.title,
                        e = e.message,
                        e = Q().createElement("div", {
                            className: "modal-message"
                        }, e);
                    return Q().createElement(n, {
                        title: r,
                        body: e,
                        thumbnail: Q().createElement("span", {
                            className: "icon-warning-orange-150x150"
                        }),
                        neutralButtonText: t(f.okAction)
                    })
                }
                return t.propTypes = {
                    translate: r().func.isRequired,
                    title: r().string.isRequired,
                    message: r().string.isRequired
                }, [(0, a.withTranslations)(t, s), e]
            }
            var g = Z(31),
                e = Roblox,
                d = CoreUtilities,
                h = e.EnvironmentUrls.economyApi,
                m = {
                    getRobuxUpgradesUrl: function(e) {
                        return d.urlService.getUrlWithQueries("/Upgrades/Robux.aspx", {
                            ctx: e
                        })
                    },
                    getAvatarPageUrl: function() {
                        return d.urlService.getAbsoluteUrl("/my/avatar")
                    },
                    getPurchaseItemUrl: function(e) {
                        return "".concat(h, "/v1/purchases/products/").concat(e)
                    }
                },
                y = c;

            function b(e) {
                var t = e.translate,
                    r = e.price,
                    e = e.color;
                return 0 === r ? Q().createElement("span", {
                    className: "text-robux text-free"
                }, t(y.freeLabel)) : Q().createElement(Q().Fragment, null, Q().createElement("span", {
                    className: "icon-robux".concat(e ? "-".concat(e) : "", "-16x16")
                }), Q().createElement("span", {
                    className: "text-robux"
                }, r))
            }
            b.defaultProps = {
                color: ""
            }, b.propTypes = {
                price: r().number.isRequired,
                translate: r().func.isRequired,
                color: r().string
            };
            var v = (0, a.withTranslations)(b, s);

            function w() {
                return (w = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function x(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var A = c;

            function P() {
                var e = x((0, i.createModal)(), 2),
                    o = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.robuxNeeded,
                        n = e.source,
                        r = Q().createElement("div", {
                            className: "modal-message",
                            dangerouslySetInnerHTML: {
                                __html: t(A.insufficientFundsMessage, {
                                    robux: (0, g.renderToString)(Q().createElement(v, {
                                        price: r
                                    }))
                                })
                            }
                        });
                    return Q().createElement(o, w({
                        title: t(A.insufficientFundsHeading),
                        body: r,
                        thumbnail: Q().createElement("span", {
                            className: "money-stack-icon"
                        }),
                        neutralButtonText: t(A.cancelAction),
                        actionButtonText: t(A.buyRobuxAction),
                        onAction: function() {
                            return window.location = m.getRobuxUpgradesUrl(n), !1
                        }
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    onAccept: null,
                    source: ""
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    source: r().string,
                    onAccept: r().func,
                    robuxNeeded: r().number.isRequired
                }, [(0, a.withTranslations)(t, s), e]
            }

            function E() {
                var e = document.getElementById("ItemPurchaseAjaxData");
                return e ? {
                    userRobuxBalance: parseInt(e.getAttribute("data-user-balance-robux"), 10),
                    userBc: parseInt(e.getAttribute("data-user-bc"), 10),
                    hasCurrencyServiceError: "True" === e.getAttribute("data-has-currency-service-error"),
                    currencyServiceErrorMessage: e.getAttribute("data-currency-service-error-message")
                } : {}
            }
            var k = c;

            function I(e) {
                var t = e.translate,
                    e = e.expectedPrice,
                    e = E().userRobuxBalance - e;
                return Q().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: t(k.balanceAfterMessage, {
                            robuxBalance: (0, g.renderToString)(Q().createElement(v, {
                                price: e,
                                color: "gray"
                            }))
                        })
                    }
                })
            }
            I.propTypes = {
                expectedPrice: r().number.isRequired,
                translate: r().func.isRequired
            };
            var M = (0, a.withTranslations)(I, s);

            function O() {
                return (O = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var T = c;

            function C() {
                var e = R((0, i.createModal)(), 2),
                    c = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.expectedPrice,
                        n = e.currentPrice,
                        o = e.onAction,
                        a = e.loading,
                        e = R((0, J.useState)(!1), 2),
                        i = e[0],
                        s = e[1],
                        r = Q().createElement(Q().Fragment, null, Q().createElement("div", {
                            className: "modal-message",
                            dangerouslySetInnerHTML: {
                                __html: t(T.priceChangedMessage, {
                                    robuxBefore: (0, g.renderToString)(Q().createElement(v, {
                                        price: r,
                                        color: "gray"
                                    })),
                                    robuxAfter: (0, g.renderToString)(Q().createElement(v, {
                                        price: n,
                                        color: "gray"
                                    }))
                                })
                            }
                        }), Q().createElement("div", {
                            className: "modal-checkbox checkbox"
                        }, Q().createElement("input", {
                            id: "modal-checkbox-input",
                            name: "agreementCheckBox",
                            type: "checkbox",
                            checked: i
                        }), Q().createElement("label", {
                            onClick: function() {
                                return s(!i)
                            },
                            htmlFor: "modal-checkbox-input"
                        }, t(T.agreeAndPayLabel))));
                    return Q().createElement(c, O({
                        title: t(T.priceChangedHeading),
                        body: r,
                        neutralButtonText: t(T.cancelAction),
                        actionButtonText: t(T.buyRobuxAction),
                        onAction: o,
                        loading: a,
                        disableActionButton: !i,
                        footerText: Q().createElement(M, {
                            expectedPrice: n
                        })
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    loading: !1
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    expectedPrice: r().number.isRequired,
                    currentPrice: r().number.isRequired,
                    onAction: r().func.isRequired,
                    loading: r().bool
                }, [(0, a.withTranslations)(t, s), e]
            }

            function F(e) {
                e = e.name;
                return Q().createElement("span", {
                    className: "font-bold"
                }, " ", e)
            }
            F.propTypes = {
                name: r().string.isRequired
            };
            var j = F;

            function D() {
                return (D = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var B = c;

            function X() {
                var e = q((0, i.createModal)(), 2),
                    h = e[0],
                    e = e[1];

                function t(e) {
                    var t, r, n = e.translate,
                        o = e.title,
                        a = e.isRentable,
                        i = e.expectedPrice,
                        s = e.thumbnail,
                        c = e.assetName,
                        u = e.assetType,
                        l = e.assetTypeDisplayName,
                        f = e.sellerName,
                        p = e.isPlace,
                        d = e.onAction,
                        e = e.loading,
                        u = {
                            assetName: (0, g.renderToString)(Q().createElement(j, {
                                name: c
                            })),
                            assetType: l || u,
                            seller: f,
                            robux: (0, g.renderToString)(Q().createElement(v, {
                                price: i
                            }))
                        },
                        f = p ? B.promptBuyAccessMessage : B.promptBuyMessage;
                    a ? (t = n(B.rentItemHeading), r = n(B.rentNowAction), f = p ? B.promptRentAccessMessage : B.promptRent) : r = 0 === i ? (t = n(B.getItemHeading), n(B.getNowAction)) : (t = n(B.buyItemHeading), n(B.buyNowAction)), p && (r = n(B.buyAccessAction));
                    u = Q().createElement("div", {
                        className: "modal-message",
                        dangerouslySetInnerHTML: {
                            __html: n(f, u)
                        }
                    });
                    return Q().createElement(h, D({
                        title: o || t,
                        body: u,
                        thumbnail: s,
                        neutralButtonText: n(B.cancelAction),
                        actionButtonText: r,
                        onAction: d,
                        footerText: Q().createElement(M, {
                            expectedPrice: i
                        }),
                        loading: e
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    isPlace: !1,
                    assetTypeDisplayName: "",
                    isRentable: !1,
                    title: "",
                    loading: !1
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    title: r().string,
                    isRentable: r().bool,
                    expectedPrice: r().number.isRequired,
                    thumbnail: r().node.isRequired,
                    assetName: r().string.isRequired,
                    assetType: r().string.isRequired,
                    assetTypeDisplayName: r().string,
                    sellerName: r().string.isRequired,
                    isPlace: r().bool,
                    onAction: r().func.isRequired,
                    loading: r().bool
                }, [(0, a.withTranslations)(t, s), e]
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return L(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var U = m.getAvatarPageUrl,
                V = c,
                z = o;

            function Y() {
                var e = H((0, i.createModal)(), 2),
                    y = e[0],
                    e = e[1];

                function t(e) {
                    var t, r, n = e.translate,
                        o = e.expectedPrice,
                        a = e.thumbnail,
                        i = e.assetName,
                        s = e.assetType,
                        c = e.assetIsWearable,
                        u = e.assetTypeDisplayName,
                        l = e.sellerName,
                        f = e.isPlace,
                        p = e.isPrivateServer,
                        d = e.onAccept,
                        h = e.onDecline,
                        m = e.transactionVerb,
                        e = n(V.continueAction);
                    p ? (t = n(V.configureAction), e = n(V.notNowAction)) : c && (t = n(V.customizeAction), e = n(V.notNowAction), r = function() {
                        return window.location.href = U(), !1
                    });
                    l = {
                        assetName: (0, g.renderToString)(Q().createElement(j, {
                            name: i
                        })),
                        assetType: u || s,
                        seller: l,
                        robux: (0, g.renderToString)(Q().createElement(v, {
                            price: o
                        }))
                    }, f = m === z.bought ? f ? V.successfullyAcquiredAccessMessage : V.successfullyBoughtMessage : m === z.rented ? V.successfullyRentedAccessMessage : m === z.renewed ? f ? V.successfullyRenewedAccessMessage : V.successfullyRenewedMessage : f ? V.successfullyAcquiredAccessMessage : V.successfullyAcquiredMessage, l = Q().createElement("div", {
                        className: "modal-message",
                        dangerouslySetInnerHTML: {
                            __html: n(f, l)
                        }
                    });
                    return Q().createElement(y, {
                        title: n(V.purchaseCompleteHeading),
                        body: l,
                        thumbnail: a,
                        neutralButtonText: e,
                        actionButtonText: t,
                        onAction: d || r,
                        onNeutral: h,
                        footerText: !p && Q().createElement(M, {
                            expectedPrice: o
                        }),
                        actionButtonShow: !!t
                    })
                }
                return t.defaultProps = {
                    isPlace: !1,
                    assetTypeDisplayName: "",
                    transactionVerb: "",
                    assetIsWearable: !1,
                    isPrivateServer: !1,
                    onAccept: null,
                    onDecline: null
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    transactionVerb: r().string,
                    expectedPrice: r().number.isRequired,
                    thumbnail: r().node.isRequired,
                    assetName: r().string.isRequired,
                    assetType: r().string.isRequired,
                    assetTypeDisplayName: r().string,
                    assetIsWearable: r().bool,
                    sellerName: r().string.isRequired,
                    isPlace: r().bool,
                    isPrivateServer: r().bool,
                    onAccept: r().func,
                    onDecline: r().func
                }, [(0, a.withTranslations)(t, s), e]
            }
            var W = m.getPurchaseItemUrl,
                K = function(e, t) {
                    e = {
                        url: W(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return d.httpService.post(e, t)
                };

            function $(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)), n
            }

            function ee(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? $(Object(o), !0).forEach(function(e) {
                        var t, r;
                        t = n, e = o[r = e], r in t ? Object.defineProperty(t, r, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : $(Object(o)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return n
            }

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return G(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return G(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var re = c,
                ne = t,
                oe = n;
            window.RobloxItemPurchase = {
                createTransactionFailureModal: p,
                createInsufficientFundsModal: P,
                createPriceChangedModal: C,
                createPurchaseVerificationModal: X,
                createPurchaseConfirmationModal: Y,
                createItemPurchase: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        F = e.customPurchaseVerificationModal,
                        j = e.customPurchaseVerificationModalService,
                        D = E().userRobuxBalance,
                        q = (e = te((0, i.createSystemFeedback)(), 2))[0],
                        _ = e[1],
                        B = (e = te(X(), 2))[0],
                        H = e[1],
                        L = (e = te(P(), 2))[0],
                        U = e[1],
                        V = (e = te(Y(), 2))[0],
                        z = e[1],
                        W = (e = te(C(), 2))[0],
                        $ = e[1],
                        G = (e = te(p(), 2))[0],
                        Z = e[1];

                    function t(e) {
                        function o() {
                            (j || H).close(), $.close()
                        }

                        function a(e) {
                            var t = e.showDivId,
                                r = e.title,
                                n = e.errorMsg,
                                o = e.price,
                                e = e.shortfallPrice;
                            t === ne.transactionFailure ? (O({
                                title: r,
                                message: n
                            }), Z.open()) : t === ne.insufficientFunds ? (T(e), U.open()) : t === ne.priceChanged && (N(o), $.open())
                        }

                        function i(e) {
                            C(e), z.open()
                        }

                        function t(e) {
                            e = {
                                expectedCurrency: l,
                                expectedPrice: e,
                                expectedSellerId: p
                            }, 0 < d && (e.expectedPromoId = d), 0 < h && (e.userAssetId = h), x ? x({
                                params: e,
                                handleError: a,
                                setLoading: k,
                                openConfirmation: i,
                                closeAll: o
                            }) : (k(!0), K(u, e).then(function(e) {
                                var t = e.data;
                                console.debug(t);
                                var r = t.statusCode,
                                    n = t.assetIsWearable,
                                    e = t.transactionVerb;
                                k(!1), o(), 500 === r ? a(t) : (S(), b ? _.success(s(re.purchaseCompleteHeading)) : i({
                                    assetIsWearable: n,
                                    transactionVerb: e
                                }))
                            }).catch(function(e) {
                                console.debug(e), k(!1), o(), e && (null == e ? void 0 : e.statusText) !== oe.badRequest ? a(JSON.parse(null == e ? void 0 : e.statusText)) : a({
                                    title: s(re.errorOccuredHeading),
                                    errorMsg: s(re.purchasingUnavailableMessage),
                                    showDivId: ne.transactionFailure
                                })
                            }))
                        }
                        var s = e.translate,
                            r = e.assetName,
                            n = e.assetType,
                            c = e.assetTypeDisplayName,
                            u = e.productId,
                            l = e.expectedCurrency,
                            f = e.expectedPrice,
                            p = e.expectedSellerId,
                            d = e.expectedPromoId,
                            h = e.userAssetId,
                            m = e.isRentable,
                            y = e.thumbnail,
                            g = e.sellerName,
                            b = e.showSuccessBanner,
                            v = e.isPlace,
                            w = e.isPrivateServer,
                            x = e.handlePurchase,
                            S = e.onPurchaseSuccess,
                            A = e.customProps,
                            P = te((0, J.useState)(!1), 2),
                            E = P[0],
                            k = P[1],
                            I = te((0, J.useState)(null), 2),
                            M = I[0],
                            O = I[1],
                            e = te((0, J.useState)(null), 2),
                            R = e[0],
                            N = e[1],
                            P = te((0, J.useState)(f - D), 2),
                            I = P[0],
                            T = P[1],
                            e = te((0, J.useState)(null), 2),
                            P = e[0],
                            C = e[1],
                            m = F ? Q().createElement(F, ee({}, ee({
                                isRentable: m,
                                assetName: r,
                                assetType: n,
                                expectedPrice: f,
                                thumbnail: y,
                                sellerName: g,
                                loading: E,
                                onAction: function() {
                                    return t(f)
                                }
                            }, A))) : Q().createElement(B, {
                                isRentable: m,
                                expectedPrice: f,
                                thumbnail: y,
                                assetName: r,
                                assetType: n,
                                assetTypeDisplayName: c,
                                sellerName: g,
                                isPlace: v,
                                loading: E,
                                onAction: function() {
                                    return t(f), !1
                                }
                            });
                        return Q().createElement(Q().Fragment, null, 0 < I ? Q().createElement(L, {
                            robuxNeeded: I
                        }) : m, M && Q().createElement(G, {
                            title: M.title,
                            message: M.message
                        }), null != R && Q().createElement(W, {
                            expectedPrice: f,
                            currentPrice: R,
                            loading: E,
                            onAction: function() {
                                return t(R), !1
                            }
                        }), P && Q().createElement(V, ee({
                            thumbnail: y,
                            assetName: r,
                            assetType: n,
                            assetTypeDisplayName: c,
                            sellerName: g,
                            isPlace: v,
                            isPrivateServer: w,
                            expectedPrice: R || f
                        }, P)), b && Q().createElement(q, null))
                    }
                    return t.defaultProps = {
                        isPlace: !1,
                        isPrivateServer: !1,
                        assetTypeDisplayName: "",
                        isRentable: !1,
                        expectedPromoId: 0,
                        userAssetId: 0,
                        showSuccessBanner: !1,
                        handlePurchase: null,
                        onPurchaseSuccess: function() {},
                        customProps: {}
                    }, t.propTypes = {
                        translate: r().func.isRequired,
                        productId: r().number.isRequired,
                        isRentable: r().bool,
                        expectedCurrency: r().number.isRequired,
                        expectedPrice: r().number.isRequired,
                        thumbnail: r().node.isRequired,
                        assetName: r().string.isRequired,
                        assetType: r().string.isRequired,
                        assetTypeDisplayName: r().string,
                        expectedSellerId: r().number.isRequired,
                        sellerName: r().string.isRequired,
                        isPlace: r().bool,
                        isPrivateServer: r().bool,
                        expectedPromoId: r().number,
                        userAssetId: r().number,
                        showSuccessBanner: r().bool,
                        handlePurchase: r().func,
                        onPurchaseSuccess: r().func,
                        customProps: r().func
                    }, [(0, a.withTranslations)(t, s), {
                        start: function() {
                            (j || H).open(), U.open()
                        }
                    }]
                },
                errorTypeIds: t,
                getMetaData: E,
                BalanceAfterSaleText: M,
                PriceLabel: v,
                AssetName: j
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/020746f1d0a749f09509-itemPurchase.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ItemPurchase");