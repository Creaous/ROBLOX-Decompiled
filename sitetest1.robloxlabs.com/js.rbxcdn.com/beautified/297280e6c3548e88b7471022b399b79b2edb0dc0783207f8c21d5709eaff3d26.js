! function() {
    var a = {
            145: function(e, t, a) {
                var n;

                function s(e) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var l = {}.hasOwnProperty;

                    function i() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var a = arguments[t];
                            if (a) {
                                var n = s(a);
                                if ("string" === n || "number" === n) e.push(a);
                                else if (Array.isArray(a) && a.length) {
                                    var o = i.apply(null, a);
                                    o && e.push(o)
                                } else if ("object" === n)
                                    for (var r in a) l.call(a, r) && a[r] && e.push(r)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (i.default = i, e.exports = i) : "object" === s(a.amdO) && a.amdO ? void 0 === (n = function() {
                        return i
                    }.apply(t, [])) || (e.exports = n) : window.classNames = i
                }()
            }
        },
        n = {};

    function W(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return a[e](t, t.exports, W), t.exports
    }
    W.amdO = {}, W.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return W.d(t, {
                a: t
            }), t
        }, W.d = function(e, t) {
            for (var a in t) W.o(t, a) && !W.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, W.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = React,
                l = W.n(e),
                n = ReactDOM,
                i = CoreUtilities,
                o = "account-settings-language-selector",
                t = {
                    common: [],
                    feature: "CommonUI.Features"
                },
                r = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy",
                    cssClass: "privacy"
                }],
                s = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "giftcards",
                    path: "/giftcards",
                    labelTranslationKey: "Label.GiftCards",
                    cssClass: "giftcards"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy",
                    cssClass: "privacy"
                }],
                a = PropTypes,
                c = W.n(a),
                u = ReactUtilities,
                p = HeaderScripts,
                d = Roblox;

            function f(e) {
                var t = e.translate,
                    e = (new Date).getFullYear();
                return l().createElement("p", {
                    className: "text-footer footer-note"
                }, t("Description.CopyRightMessageDynamicYear", {
                    copyrightYear: e
                }))
            }
            f.propTypes = {
                translate: c().func.isRequired
            };
            var h = f,
                e = W(145),
                g = W.n(e),
                y = ReactStyleGuide;

            function m(e) {
                var n = e.translate,
                    o = e.intl,
                    t = r,
                    a = !1,
                    e = document.getElementById("footer-container");
                null == e || null != (e = e.getAttribute("data-is-giftcards-footer-enabled")) && (a = "true" === e.toLowerCase()), a && (t = s);
                t = t.map(function(a) {
                    var e = {
                            pathname: a.path,
                            query: {
                                locale: o.getRobloxLocale()
                            }
                        },
                        t = g()("text-footer-nav", a.cssClass);
                    return l().createElement("li", {
                        key: a.name,
                        className: "footer-link"
                    }, l().createElement(y.Link, {
                        url: i.urlService.formatUrl(e),
                        cssClasses: t,
                        target: "_blank",
                        onClick: function(e) {
                            return t = a.name, e = e, void(d.EventStream && d.EventStream.SendEventWithTarget("PageFooter", "click", {
                                destination: "".concat(t),
                                source: "".concat(e.currentTarget.ownerDocument.location.pathname)
                            }, d.EventStream.TargetTypes.WWW));
                            var t
                        }
                    }, n(a.labelTranslationKey)))
                });
                return l().createElement("ul", {
                    className: "row footer-links"
                }, t)
            }
            m.propTypes = {
                translate: c().func.isRequired,
                intl: c().shape({
                    getRobloxLocale: c().func.isRequired
                }).isRequired
            };
            var b = m,
                v = CoreRobloxUtilities,
                a = v.eventStreamService.eventTypes,
                e = "Localization",
                L = {
                    changeLanguage: {
                        name: "changeLanguage",
                        type: a.formInteraction,
                        context: e,
                        requiredParams: ["userId", "newSupportedLocaleCode", "previousSupportedLocaleCode"]
                    },
                    changeLanguageModal: {
                        name: "changeLanguageModal",
                        type: a.formInteraction,
                        context: e,
                        requiredParams: ["userId", "newSupportedLocaleCode"]
                    }
                },
                w = 6e5;

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return E(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function C(t, e) {
                var a, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t), e && (a = a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, a)), n
            }

            function O(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(o), !0).forEach(function(e) {
                        var t, a;
                        t = n, e = o[a = e], a in t ? Object.defineProperty(t, a, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : C(Object(o)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return n
            }

            function T(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e, t) {
                return (P = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function N(a) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var e, t = M(a);
                    return e = n ? (e = M(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== S(e) && "function" != typeof e ? j(t) : e
                }
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function x(e) {
                return e.locale && e.locale.nativeName ? e.isEnabledForFullExperience ? e.locale.nativeName : "".concat(e.locale.nativeName, "*") : ""
            }
            var k = v.dataStores.localeDataStore;
            (e = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && P(e, t)
                }(o, l().Component);
                var e, t, a, n = N(o);

                function o(e) {
                    return function(e) {
                        if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                    }(this), (e = n.call(this, e)).state = {
                        supportedLocales: [],
                        userLocale: {},
                        showUnsupportedModal: !1,
                        isUserLocaleUnsupported: !1,
                        isLocaleUpdateInProgress: !1
                    }, e.handleNativeLanguageChange = e.handleNativeLanguageChange.bind(j(e)), e.hideUnsupportedModal = e.hideUnsupportedModal.bind(j(e)), e
                }
                return e = o, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        this.loadSupportedLocales()
                    }
                }, {
                    key: "handleLanguageChange",
                    value: function(e) {
                        var t = this,
                            a = O({}, e.locale),
                            n = this.state.userLocale,
                            o = this.props,
                            r = o.isAuthenticatedUser,
                            l = o.onLanguageChange,
                            n = O({}, n);
                        r ? (this.setState({
                            isLocaleUpdateInProgress: !0
                        }), k.setUserLocale(a.locale).then(function() {
                            e.isEnabledForFullExperience ? l(a) : (t.showUnsupportedLocaleMessage(), t.showUnsupportedLocaleModal(a))
                        }, function(e) {
                            console.debug(e)
                        }).finally(function() {
                            t.setState({
                                isLocaleUpdateInProgress: !1
                            })
                        })) : l(a), this.setUserLocaleByLocaleCode(a.locale), v.eventStreamService.sendEvent(L.changeLanguage, {
                            userId: p.authenticatedUser.id,
                            newSupportedLocaleCode: a.locale,
                            previousSupportedLocaleCode: n.locale.locale
                        })
                    }
                }, {
                    key: "handleNativeLanguageChange",
                    value: function(e) {
                        var t = this.state.supportedLocales,
                            a = e.target.value,
                            t = t.find(function(e) {
                                return e.locale.locale === a
                            });
                        this.handleLanguageChange(t)
                    }
                }, {
                    key: "getDefaultSelector",
                    value: function() {
                        var t = this,
                            e = this.state,
                            a = e.supportedLocales,
                            n = e.userLocale,
                            e = e.isLocaleUpdateInProgress,
                            a = a.map(function(e) {
                                return l().createElement(y.Dropdown.Item, {
                                    key: e.locale.id,
                                    onClick: function() {
                                        return t.handleLanguageChange(e)
                                    }
                                }, x(e))
                            }),
                            n = x(n);
                        return l().createElement(y.Dropdown, {
                            currSelectionLabel: n,
                            id: "language-switcher",
                            icon: "icon-globe",
                            disabled: e
                        }, a)
                    }
                }, {
                    key: "getNativeSelector",
                    value: function() {
                        var e = this.state,
                            t = e.supportedLocales,
                            e = e.userLocale,
                            t = t.map(function(e) {
                                return {
                                    value: e.locale.locale,
                                    key: e.locale.id,
                                    label: x(e)
                                }
                            }),
                            e = e.locale && e.locale.locale;
                        return 0 < t.length && l().createElement(y.NativeDropdown, {
                            id: "language-switcher",
                            selectionItems: t,
                            onChange: this.handleNativeLanguageChange,
                            selectedItemvalue: e
                        })
                    }
                }, {
                    key: "setUserLocaleByLocaleCode",
                    value: function(e) {
                        e = this.findSupportedLocaleByLocaleCode(e);
                        this.setState({
                            userLocale: O({}, e)
                        }), e.isEnabledForFullExperience || this.showUnsupportedLocaleMessage()
                    }
                }, {
                    key: "sortSupportedLocalesByFullExperience",
                    value: function(e) {
                        if (Array.isArray(e)) {
                            var t = e.filter(function(e) {
                                    return e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                }),
                                a = e.filter(function(e) {
                                    return !e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                });
                            return [].concat(U(t), U(a))
                        }
                        return e
                    }
                }, {
                    key: "findSupportedLocaleByLocaleCode",
                    value: function(t) {
                        return this.state.supportedLocales.find(function(e) {
                            return e.locale.locale === t
                        })
                    }
                }, {
                    key: "loadSupportedLocales",
                    value: function() {
                        var t = this;
                        k.getLocalesWithCache(w).then(function(e) {
                            t.setState({
                                supportedLocales: t.sortSupportedLocalesByFullExperience(e.data)
                            }), t.loadUserLocale()
                        }, function(e) {
                            console.debug(e)
                        })
                    }
                }, {
                    key: "loadUserLocale",
                    value: function() {
                        var t, a = this,
                            e = i.urlService.getQueryParam("locale");
                        e ? this.setUserLocaleByLocaleCode(e) : (t = this.props.isAuthenticatedUser, k.getUserLocale().then(function(e) {
                            e = (t ? e.data.ugc : e.data.signupAndLogin).locale;
                            a.setUserLocaleByLocaleCode(e)
                        }, function(e) {
                            console.debug(e)
                        }))
                    }
                }, {
                    key: "showUnsupportedLocaleModal",
                    value: function(e) {
                        this.props.showWarningModalForUnsupportedLocale && (this.setState({
                            showUnsupportedModal: !0
                        }), v.eventStreamService.sendEvent(L.changeLanguageModal, {
                            userId: p.authenticatedUser.id,
                            newSupportedLocaleCode: e.locale
                        }))
                    }
                }, {
                    key: "hideUnsupportedModal",
                    value: function() {
                        (0, this.props.onLanguageChange)(this.state.userLocale)
                    }
                }, {
                    key: "showUnsupportedLocaleMessage",
                    value: function() {
                        this.props.showWarningMessageForUnsupportedLocale && this.setState({
                            isUserLocaleUnsupported: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.translate,
                            a = e.isNative,
                            n = this.state,
                            o = n.showUnsupportedModal,
                            r = n.isUserLocaleUnsupported,
                            e = n.supportedLocales,
                            n = n.userLocale;
                        return l().createElement(l().Fragment, null, 0 < e.length && n.locale ? l().createElement("div", {
                            className: "language-selector-wrapper"
                        }, a ? this.getNativeSelector() : this.getDefaultSelector()) : l().createElement(y.Loading, null), l().createElement(y.SimpleModal, {
                            title: t("Heading.UnsupportedLanguage"),
                            body: t("Description.UnsupportedLanguage"),
                            show: o,
                            neutralButtonText: t("Action.Ok"),
                            onNeutral: this.hideUnsupportedModal
                        }), r && l().createElement("div", {
                            className: "row"
                        }, l().createElement("span", {
                            className: "text text-error"
                        }, t("Description.UnsupportedLanguage"))))
                    }
                }]) && T(e.prototype, t), a && T(e, a), o
            }()).defaultProps = {
                onLanguageChange: function() {},
                isAuthenticatedUser: !1,
                isNative: !1,
                showWarningModalForUnsupportedLocale: !0,
                showWarningMessageForUnsupportedLocale: !0
            }, e.propTypes = {
                isAuthenticatedUser: c().bool,
                onLanguageChange: c().func,
                isNative: c().bool,
                showWarningModalForUnsupportedLocale: c().bool,
                showWarningMessageForUnsupportedLocale: c().bool,
                translate: c().func.isRequired
            };
            var A = e;

            function R(e) {
                var t = i.pageName.PageNameProvider && i.pageName.PageNameProvider.isLandingPage(),
                    a = null === p.authenticatedUser || void 0 === p.authenticatedUser ? void 0 : p.authenticatedUser.isAuthenticated,
                    n = d.DeviceMeta && new d.DeviceMeta,
                    o = n && (n.isPhone || n.isTablet),
                    r = a || t,
                    n = e.translate;
                return l().createElement("div", {
                    className: "footer"
                }, l().createElement(b, e), l().createElement("div", {
                    className: "row copyright-container"
                }, l().createElement("div", {
                    className: "col-sm-6 col-md-3"
                }, r && l().createElement(A, {
                    translate: n,
                    onLanguageChange: function(e) {
                        e = e.locale;
                        t && e ? (e = {
                            pathname: window.location.pathname,
                            query: {
                                locale: e
                            }
                        }, window.location.href = i.urlService.formatUrl(e)) : window.location.reload()
                    },
                    isAuthenticatedUser: a,
                    showWarningMessageForUnsupportedLocale: !1,
                    isNative: o
                })), l().createElement("div", {
                    className: r ? "col-sm-6 col-md-9" : "col-sm-12"
                }, l().createElement(h, e))))
            }
            R.propTypes = {
                translate: c().func.isRequired
            };
            var D = R;

            function F(e) {
                var t = e.translate,
                    e = e.intl;
                return l().createElement(D, {
                    translate: t,
                    intl: e
                })
            }
            F.propTypes = {
                translate: c().func.isRequired,
                intl: c().shape({
                    getRobloxLocale: c().func.isRequired
                }).isRequired
            };
            var I = (0, u.withTranslations)(F, t),
                K = function(e, t) {
                    d.DeviceMeta && v.hybridService && (new d.DeviceMeta).isInApp && v.hybridService.localization && v.hybridService.localization(e, t)
                };

            function B(e) {
                var t = e.translate,
                    e = null === p.authenticatedUser || void 0 === p.authenticatedUser ? void 0 : p.authenticatedUser.isAuthenticated;
                return l().createElement("div", {
                    className: "col-xs-12 col-sm-6"
                }, l().createElement(A, {
                    onLanguageChange: function(e) {
                        var t = e.locale;
                        t && K(t, function() {
                            console.debug("Language Change Hybrid Event: ".concat(t))
                        }), window.location.reload()
                    },
                    translate: t,
                    isAuthenticatedUser: e,
                    isNative: !0
                }))
            }
            B.propTypes = {
                translate: c().func.isRequired
            };
            var q = (0, u.withTranslations)(B, t);
            (0, i.ready)(function() {
                var e = document.getElementById("footer-container");
                e && (0, n.render)(l().createElement(I, null), e);
                var t = document.getElementById(o),
                    a = 10;
                (function e() {
                    !(t = document.getElementById(o)) && 0 < a ? (--a, setTimeout(e, 200)) : t && (0, n.render)(l().createElement(q, null), t)
                })(), window.onhashchange = function() {
                    var e;
                    "#!/info" !== window.location.hash || (e = document.getElementById(o)) && (0, n.render)(l().createElement(q, null), e)
                }
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/d4f8caddcd49e709583f-footer.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Footer");