! function() {
    var r = {
            5290: function(t, e, r) {
                "use strict";
                /** @license React v16.14.0
                 * react.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                function n(t) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var o = r(7559),
                    a = "function" == typeof Symbol && Symbol.for,
                    s = a ? Symbol.for("react.element") : 60103,
                    r = (a && Symbol.for("react.portal"), a && Symbol.for("react.fragment"), a && Symbol.for("react.strict_mode"), a && Symbol.for("react.profiler"), a && Symbol.for("react.provider"), a && Symbol.for("react.context"), a && Symbol.for("react.forward_ref"), a ? Symbol.for("react.suspense") : 60113);
                a && Symbol.for("react.memo"), a && Symbol.for("react.lazy");

                function i(t) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) e += "&args[]=" + encodeURIComponent(arguments[r]);
                    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var c = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    u = {};

                function f(t, e, r) {
                    this.props = t, this.context = e, this.refs = u, this.updater = r || c
                }

                function l() {}

                function p(t, e, r) {
                    this.props = t, this.context = e, this.refs = u, this.updater = r || c
                }
                f.prototype.isReactComponent = {}, f.prototype.setState = function(t, e) {
                    if ("object" !== n(t) && "function" != typeof t && null != t) throw Error(i(85));
                    this.updater.enqueueSetState(this, t, e, "setState")
                }, f.prototype.forceUpdate = function(t) {
                    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
                }, l.prototype = f.prototype;
                a = p.prototype = new l;
                a.constructor = p, o(a, f.prototype), a.isPureReactComponent = !0;
                var y = {
                        current: null
                    },
                    b = Object.prototype.hasOwnProperty,
                    m = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function h(t, e, r) {
                    var n, o = {},
                        a = null,
                        i = null;
                    if (null != e)
                        for (n in void 0 !== e.ref && (i = e.ref), void 0 !== e.key && (a = "" + e.key), e) b.call(e, n) && !m.hasOwnProperty(n) && (o[n] = e[n]);
                    var c = arguments.length - 2;
                    if (1 === c) o.children = r;
                    else if (1 < c) {
                        for (var u = Array(c), f = 0; f < c; f++) u[f] = arguments[f + 2];
                        o.children = u
                    }
                    if (t && t.defaultProps)
                        for (n in c = t.defaultProps) void 0 === o[n] && (o[n] = c[n]);
                    return {
                        $$typeof: s,
                        type: t,
                        key: a,
                        ref: i,
                        props: o,
                        _owner: y.current
                    }
                }
                var d = {
                    current: null
                };
                a = {
                    ReactCurrentDispatcher: d,
                    ReactCurrentBatchConfig: {
                        suspense: null
                    },
                    ReactCurrentOwner: y,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: o
                };
                e.Component = f, e.createElement = h
            },
            4529: function(t, e, r) {
                "use strict";
                t.exports = r(5290)
            },
            5145: function(t, e, r) {
                var n;

                function u(t) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var i = {}.hasOwnProperty;

                    function c() {
                        for (var t = [], e = 0; e < arguments.length; e++) {
                            var r = arguments[e];
                            if (r) {
                                var n = u(r);
                                if ("string" === n || "number" === n) t.push(r);
                                else if (Array.isArray(r) && r.length) {
                                    var o = c.apply(null, r);
                                    o && t.push(o)
                                } else if ("object" === n)
                                    for (var a in r) i.call(r, a) && r[a] && t.push(a)
                            }
                        }
                        return t.join(" ")
                    }
                    t.exports ? (c.default = c, t.exports = c) : "object" === u(r.amdO) && r.amdO ? void 0 === (n = function() {
                        return c
                    }.apply(e, [])) || (t.exports = n) : window.classNames = c
                }()
            },
            7559: function(t) {
                "use strict";
                /*
                object-assign
                (c) Sindre Sorhus
                @license MIT
                */
                var u = Object.getOwnPropertySymbols,
                    f = Object.prototype.hasOwnProperty,
                    s = Object.prototype.propertyIsEnumerable;
                t.exports = function() {
                    try {
                        if (!Object.assign) return;
                        var t = new String("abc");
                        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;
                        for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                                return e[t]
                            }).join("")) return;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                            n[t] = t
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1
                    } catch (t) {
                        return
                    }
                }() ? Object.assign : function(t, e) {
                    for (var r, n, o = function(t) {
                            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(t)
                        }(t), a = 1; a < arguments.length; a++) {
                        for (var i in r = Object(arguments[a])) f.call(r, i) && (o[i] = r[i]);
                        if (u) {
                            n = u(r);
                            for (var c = 0; c < n.length; c++) s.call(r, n[c]) && (o[n[c]] = r[n[c]])
                        }
                    }
                    return o
                }
            },
            8309: function(t, e, r) {
                "use strict";
                var i = r(8122);

                function n() {}

                function o() {}
                o.resetWarningCache = n, t.exports = function() {
                    function t(t, e, r, n, o, a) {
                        if (a !== i) {
                            a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw a.name = "Invariant Violation", a
                        }
                    }

                    function e() {
                        return t
                    }
                    var r = {
                        array: t.isRequired = t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: o,
                        resetWarningCache: n
                    };
                    return r.PropTypes = r
                }
            },
            9671: function(t, e, r) {
                t.exports = r(8309)()
            },
            8122: function(t) {
                "use strict";
                t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }
        },
        n = {};

    function T(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            exports: {}
        };
        return r[t](e, e.exports, T), e.exports
    }
    T.amdO = {}, T.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return T.d(e, {
                a: e
            }), e
        }, T.d = function(t, e) {
            for (var r in e) T.o(e, r) && !T.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, T.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";

            function a(e, t) {
                var r, n = Object.keys(e);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)), n
            }

            function i(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var f = T(4529),
                t = T(9671),
                e = T.n(t),
                r = T(5145),
                s = T.n(r),
                c = function(t, e) {
                    console.warn("The following exception has been caught with the captured component stack:"), console.group(), console.info("".concat(t)), console.info("".concat(e.componentStack)), console.groupEnd()
                };

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r, n = arguments[e];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function p(t, e) {
                if (null == t) return {};
                var r, n = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], 0 <= e.indexOf(r) || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(t), a = 0; a < o.length; a++) r = o[a], 0 <= e.indexOf(r) || Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
                return n
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function b(t, e) {
                return (b = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(r) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = u(r);
                    return t = n ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== o(t) && "function" != typeof t ? h(e) : t
                }
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function u(t) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var r = (t = function(a, t) {
                    var i = 1 < arguments.length && void 0 !== t ? t : "withHOC";
                    return function(t) {
                        for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                        var o = a.apply(void 0, [t].concat(r));
                        return o.displayName = (t = t, "".concat(i, "(").concat((t = t).displayName || t.name || "Component", ")")), o
                    }
                })(function(u) {
                    var t = function() {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && b(t, e)
                        }(o, f.Component);
                        var t, e, r, n = m(o);

                        function o(t) {
                            var e;
                            ! function(t) {
                                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            t = (e = n.call(this, t)).props.showAppOnInit;
                            return e.state = {
                                isLoading: !t,
                                hasError: !1,
                                errorState: null
                            }, e.onLoadStart = e.onLoadStart.bind(h(e)), e.onLoadEnd = e.onLoadEnd.bind(h(e)), e.onError = e.onError.bind(h(e)), e
                        }
                        return t = o, r = [{
                            key: "getDerivedStateFromError",
                            value: function() {
                                return {
                                    hasError: !0,
                                    errorState: null
                                }
                            }
                        }], (e = [{
                            key: "componentDidCatch",
                            value: function(t, e) {
                                c(t, e)
                            }
                        }, {
                            key: "onLoadStart",
                            value: function() {
                                this.setState({
                                    isLoading: !0
                                })
                            }
                        }, {
                            key: "onLoadEnd",
                            value: function() {
                                this.setState({
                                    isLoading: !1
                                })
                            }
                        }, {
                            key: "onError",
                            value: function(t) {
                                this.setState({
                                    hasError: !0,
                                    errorState: t
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t, e, r = this.props,
                                    n = (r.showAppOnInit, r.defaultMessage),
                                    o = r.errorStates,
                                    a = p(r, ["showAppOnInit", "defaultMessage", "errorStates"]),
                                    i = this.state,
                                    c = i.isLoading,
                                    r = i.hasError,
                                    i = i.errorState;
                                r ? t = f.createElement("h3", null, o[i] || n) : (t = f.createElement("span", {
                                    className: "spinner spinner-default"
                                }), e = f.createElement(u, l({}, a, {
                                    isLoading: c,
                                    hasError: r,
                                    errorState: i,
                                    onLoadStart: this.onLoadStart,
                                    onLoadEnd: this.onLoadEnd,
                                    onError: this.onError
                                })));
                                r = r || c, c = s()("component-status-container", {
                                    hidden: !r
                                }), r = s()("component-container", {
                                    hidden: r
                                });
                                return f.createElement("div", {
                                    className: "component-status"
                                }, f.createElement("div", {
                                    className: c
                                }, t), f.createElement("div", {
                                    className: r
                                }, e))
                            }
                        }]) && y(t.prototype, e), r && y(t, r), o
                    }();
                    return t.defaultProps = {
                        showAppOnInit: !1,
                        defaultMessage: "",
                        errorStates: {}
                    }, t.propTypes = {
                        showAppOnInit: e().bool,
                        defaultMessage: e().string,
                        errorStates: e().objectOf(e().string)
                    }, t
                }, "withComponentStatus"),
                d = Roblox,
                v = 2,
                g = ["Common", "CommonUI"];

            function O(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                    } catch (t) {
                        o = !0, a = t
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var S = window.RobloxError,
                w = function(t) {
                    return "string" != typeof t ? (new S("Invalid namespace name, required a string").throw(), null) : t.split(".")
                };

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E() {
                return (E = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r, n = arguments[e];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function P(t) {
                return function(t) {
                    if (Array.isArray(t)) return R(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return R(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function _(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function A(t, e) {
                return (A = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(r) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = k(r);
                    return t = n ? (t = k(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== j(t) && "function" != typeof t ? x(e) : t
                }
            }

            function x(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function k(t) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            t = t(function(n, t) {
                var e, r, i = (r = (e = t).common, t = e.feature, e = {}, !Array.isArray(r) || null !== t && "string" != typeof t ? (new S("Invalid namespaces config!").throw(), e) : Object.assign(e, {
                    feature: t,
                    common: r.filter(function(t) {
                        var e = w(t);
                        if (Array.isArray(e) && e.length === v) {
                            e = O(e, 1)[0];
                            if (-1 < g.indexOf(e)) return !0;
                            new S("Requested namespace ".concat(t, " is not a common namespace!")).throw()
                        }
                        return !1
                    })
                }));
                return function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && A(t, e)
                    }(a, f.Component);
                    var t, e, r, o = C(a);

                    function a(t) {
                        var e;
                        ! function(t) {
                            if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this), (e = o.call(this, t)).intl = new d.Intl, e.translate = e.translate.bind(x(e));
                        var r = i.common,
                            t = i.feature,
                            n = new d.TranslationResourceProvider(e.intl),
                            t = [].concat(P(r), [t]).filter(function(t) {
                                return !!t
                            }).map(function(t) {
                                return n.getTranslationResource(t)
                            });
                        return e.state = {
                            languageResources: n.mergeTranslationResources.apply(n, P(t))
                        }, e
                    }
                    return t = a, (e = [{
                        key: "translate",
                        value: function(t, e) {
                            return this.state.languageResources.get(t, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f.createElement(n, E({}, this.props, {
                                translate: this.translate,
                                intl: this.intl
                            }))
                        }
                    }]) && _(t.prototype, e), r && _(t, r), a
                }()
            }, "withTranslations"), window.ReactUtilities = {
                makeActionCreator: function(r) {
                    for (var t = arguments.length, o = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) o[e - 1] = arguments[e];
                    return function() {
                        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? a(Object(r), !0).forEach(function(t) {
                                    i(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            type: r
                        }, o.reduce(function(t, e, r) {
                            return Object.assign(t, i({}, e, n[r]))
                        }, {}))
                    }
                },
                withComponentStatus: r,
                withTranslations: t
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/4047bf8b1fdd53220fcf-reactUtilities.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ReactUtilities");