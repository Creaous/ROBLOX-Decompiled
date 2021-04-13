! function() {
    var n = {
            145: function(e, t, n) {
                var r;

                function u(e) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    var i = {}.hasOwnProperty;

                    function c() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var r = u(n);
                                if ("string" === r || "number" === r) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var o = c.apply(null, n);
                                    o && e.push(o)
                                } else if ("object" === r)
                                    for (var a in n) i.call(n, a) && n[a] && e.push(a)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (c.default = c, e.exports = c) : "object" === u(n.amdO) && n.amdO ? void 0 === (r = function() {
                        return c
                    }.apply(t, [])) || (e.exports = r) : window.classNames = c
                }()
            },
            635: function(e) {
                e.exports = 'module.exports = __webpack_public_path__ + "../html/navigation.html";'
            }
        },
        r = {};

    function wr(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, wr), t.exports
    }
    wr.amdO = {}, wr.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return wr.d(t, {
                a: t
            }), t
        }, wr.d = function(e, t) {
            for (var n in t) wr.o(t, n) && !wr.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, wr.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var I = React,
                R = wr.n(I),
                T = CoreUtilities,
                d = HeaderScripts,
                e = ReactDOM,
                t = ReactUtilities,
                k = {
                    arrowUp: 38,
                    arrowDown: 40,
                    tab: 9,
                    enter: 13
                },
                n = {
                    name: "Roblox.Logout"
                },
                r = 1,
                o = {
                    clickMerchandise: "clickMerchandiseInLeftNav",
                    goToAmazonStore: "clickContinueToAmazonStore"
                },
                a = {
                    friendshipNotifications: "FriendshipNotifications",
                    requestCountChanged: "Roblox.Friends.CountChanged",
                    friendshipCreated: "FriendshipCreated",
                    friendshipDestroyed: "FriendshipDestroyed",
                    friendshipDeclined: "FriendshipDeclined",
                    friendshipRequested: "FriendshipRequested"
                },
                i = {
                    name: "Roblox.Messages.CountChanged"
                },
                c = "?",
                u = {
                    name: "headerMenuIconClick"
                },
                l = {
                    quickLogin: "quickLogin",
                    logout: "logout",
                    settings: "settings"
                },
                s = {
                    common: ["CommonUI.Features", "Common.AlertsAndOptions"],
                    feature: "Feature.ShopDialog"
                },
                f = PropTypes,
                m = wr.n(f),
                p = wr(145),
                g = wr.n(p),
                b = ReactStyleGuide,
                y = Roblox,
                v = y.Endpoints.getAbsoluteUrl,
                h = y.EnvironmentUrls.authApi,
                f = {
                    url: v("/games/?Keyword="),
                    label: "Label.sGames",
                    pageSort: ["home", "games"],
                    icon: "icon-menu-games-off"
                },
                p = [{
                    url: v("/search/users?keyword="),
                    label: "Label.Players",
                    pageSort: ["users"],
                    icon: "icon-menu-profile"
                }, {
                    url: v("/catalog?CatalogContext=1&Keyword="),
                    label: "Label.AvatarShop",
                    pageSort: ["catalog", "inventory"],
                    icon: "icon-menu-shop"
                }, {
                    url: v("/search/groups?keyword="),
                    label: "Label.sGroups",
                    pageSort: ["groups"],
                    icon: "icon-menu-groups"
                }, {
                    url: v("/develop/library?CatalogContext=2&Category=6&Keyword="),
                    label: "Label.Library",
                    pageSort: ["develop"],
                    icon: "icon-menu-library"
                }],
                S = {
                    scrollListItems: {
                        home: {
                            url: v("/"),
                            idSelector: "nav-home",
                            iconClass: "icon-nav-home",
                            name: "home",
                            labelTranslationKey: "Label.sHome"
                        },
                        profile: {
                            url: v("/users/".concat(d.authenticatedUser.id, "/profile")),
                            idSelector: "nav-profile",
                            iconClass: "icon-nav-profile",
                            name: "profile",
                            labelTranslationKey: "Label.sProfile"
                        },
                        messages: {
                            url: v("/my/messages/#!/inbox"),
                            urlForNotification: v("/my/messages/#!/inbox"),
                            idSelector: "nav-message",
                            iconClass: "icon-nav-message",
                            name: "messages",
                            labelTranslationKey: "Label.sMessages"
                        },
                        friends: {
                            url: v("/users/friends"),
                            urlForNotification: v("/users/friends#!/friend-requests"),
                            idSelector: "nav-friends",
                            iconClass: "icon-nav-friends",
                            name: "friends",
                            labelTranslationKey: "Label.sFriends"
                        },
                        avatar: {
                            url: v("/my/avatar"),
                            idSelector: "nav-character",
                            iconClass: "icon-nav-charactercustomizer",
                            name: "avatar",
                            labelTranslationKey: "Label.sAvatar"
                        },
                        inventory: {
                            url: v("/users/".concat(d.authenticatedUser.id, "/inventory")),
                            idSelector: "nav-inventory",
                            iconClass: "icon-nav-inventory",
                            name: "inventory",
                            labelTranslationKey: "Label.sInventory"
                        },
                        trade: {
                            url: v("/trades"),
                            urlForNotification: v("/trades"),
                            idSelector: "nav-trade",
                            iconClass: "icon-nav-trade",
                            name: "trade",
                            labelTranslationKey: "Label.sTrade"
                        },
                        groups: {
                            url: v("/my/groups"),
                            idSelector: "nav-group",
                            iconClass: "icon-nav-group",
                            name: "groups",
                            labelTranslationKey: "Label.sGroups"
                        },
                        feeds: {
                            url: v("/feeds/"),
                            idSelector: "nav-my-feed",
                            iconClass: "icon-nav-my-feed",
                            name: "feeds",
                            labelTranslationKey: "Label.Feeds"
                        },
                        blog: {
                            url: v("https://blog.roblox.com"),
                            idSelector: "nav-blog",
                            iconClass: "icon-nav-blog",
                            name: "blog",
                            labelTranslationKey: "Label.sBlog"
                        },
                        shop: {
                            isModal: !0,
                            idSelector: "nav-shop",
                            iconClass: "icon-nav-shop",
                            name: "shop",
                            labelTranslationKey: "Label.OfficialStore"
                        },
                        giftcards: {
                            url: v("/giftcards-us"),
                            idSelector: "nav-giftcards",
                            iconClass: "icon-nav-giftcards",
                            name: "giftcards",
                            labelTranslationKey: "Label.GiftCards"
                        }
                    },
                    upgradeButton: {
                        url: v("/premium/membership?ctx=leftnav"),
                        labelTranslationKey: d.authenticatedUser.isPremiumUser ? "ActionsPremium" : "ActionsGetPremium"
                    },
                    sponsorEvents: {
                        label: {
                            labelTranslationKey: "Label.sEvents"
                        },
                        events: {}
                    },
                    gameSearchLink: f,
                    miscSearchLink: p,
                    universalSearchUrls: [{
                        url: v("/search/users?keyword="),
                        label: "Label.Players",
                        pageSort: []
                    }, {
                        url: v("/games/?Keyword="),
                        label: "Label.sGames",
                        pageSort: ["home", "games"]
                    }, {
                        url: v("/catalog/browse.aspx?CatalogContext=1&Keyword="),
                        label: "Label.sCatalog",
                        pageSort: ["catalog", "inventory"]
                    }, {
                        url: v("/search/groups?keyword="),
                        label: "Label.sGroups",
                        pageSort: ["groups"]
                    }, {
                        url: v("/develop/library?CatalogContext=2&Category=6&Keyword="),
                        label: "Label.Library",
                        pageSort: ["develop"]
                    }],
                    newUniversalSearchUrls: [f].concat(p),
                    settingsUrl: {
                        settings: {
                            url: v("/my/account"),
                            label: "Label.sSettings"
                        },
                        quickLogin: {
                            url: v("/home"),
                            label: "Label.sQuickLogin"
                        },
                        help: {
                            url: v("/info/help?locale="),
                            label: "Label.sHelp"
                        },
                        logout: {
                            url: "".concat(h, "/v2/logout"),
                            label: "Label.sLogout"
                        }
                    },
                    buyRobuxUrl: {
                        robuxBalance: {
                            url: v("/transactions"),
                            label: "Label.sRobuxMessage"
                        },
                        buyRobux: {
                            url: v("/upgrades/robux?ctx=navpopover"),
                            label: "Label.sBuyRobux"
                        }
                    },
                    userDataUrl: v("/navigation/userData"),
                    quickLoginUrl: v("/crossdevicelogin/ConfirmCode")
                },
                E = y.Endpoints.getAbsoluteUrl,
                w = y.EnvironmentUrls.authApi,
                O = y.EnvironmentUrls.accountSettingsApi,
                C = y.EnvironmentUrls.websiteUrl,
                x = y.EnvironmentUrls.adsApi,
                A = y.EnvironmentUrls.economyApi,
                j = y.EnvironmentUrls.privateMessagesApi,
                N = y.EnvironmentUrls.tradesApi,
                L = y.EnvironmentUrls.friendsApi,
                f = (y.EnvironmentUrls.apiGatewayUrl, function() {
                    return E("/account/signupredir")
                }),
                p = function() {
                    return C
                },
                h = function() {
                    return E("/")
                },
                v = function(e, t) {
                    return E("/".concat(e.toLowerCase(), "/").concat(t))
                },
                P = function() {
                    return "".concat(w, "/v2/passwords/current-status")
                },
                U = function() {
                    return "".concat(O, "/v1/email")
                },
                D = function() {
                    return "".concat(w, "/v2/logout")
                },
                q = function() {
                    return "".concat(x, "/v1/sponsored-pages")
                },
                M = function() {
                    return "".concat(j, "/v1/messages/unread/count")
                },
                K = function(e) {
                    return "".concat(A, "/v1/users/").concat(e, "/currency")
                },
                _ = function() {
                    return "".concat(N, "/v1/trades/inbound/count")
                },
                F = function() {
                    return "".concat(L, "/v1/user/friend-requests/count")
                },
                G = function() {
                    var e = {
                        url: M(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                B = function(e) {
                    e = {
                        url: K(e),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                V = function() {
                    var e = {
                        url: _(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                Q = function() {
                    var e = {
                        url: F(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                $ = function() {
                    var e = {
                        url: P(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                z = function() {
                    var e = {
                        url: U(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e)
                },
                H = function() {
                    var e = {
                        url: q(),
                        withCredentials: !0
                    };
                    return T.httpService.get(e).then(function(e) {
                        return null == e ? void 0 : e.data
                    }).catch(function(e) {
                        console.error(e)
                    })
                },
                W = function() {
                    var e = {
                        url: D(),
                        withCredentials: !0
                    };
                    return T.httpService.post(e)
                };

            function X(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function J(e) {
                var t = e.translate,
                    n = e.idSelector,
                    r = e.isModal,
                    o = e.name,
                    a = e.iconClass,
                    i = e.labelTranslationKey,
                    c = e.url,
                    u = e.urlForNotification,
                    l = e.onClickShopLink,
                    s = e.friendsData,
                    f = e.messagesData,
                    m = e.tradeData,
                    e = (X(e = {}, S.scrollListItems.friends.name, s), X(e, S.scrollListItems.messages.name, f), X(e, S.scrollListItems.trade.name, m), e)[o],
                    c = null != e && e.count ? u : c;
                return r ? R().createElement("li", {
                    key: o
                }, R().createElement("div", {
                    role: "link",
                    tabIndex: "0",
                    onClick: l,
                    id: n,
                    className: "cursor-pointer dynamic-overflow-container text-nav"
                }, R().createElement("div", null, R().createElement("span", {
                    className: a
                })), R().createElement("span", {
                    className: "font-header-2 dynamic-ellipsis-item"
                }, t(i)))) : R().createElement("li", {
                    key: o
                }, R().createElement(b.Link, {
                    url: c,
                    id: n,
                    className: "dynamic-overflow-container text-nav"
                }, R().createElement("div", null, R().createElement("span", {
                    className: a
                })), R().createElement("span", {
                    className: "font-header-2 dynamic-ellipsis-item"
                }, t(i)), e && 0 < e.count && R().createElement("div", {
                    className: "dynamic-width-item align-right"
                }, R().createElement("span", {
                    className: "notification-blue notification",
                    title: T.numberFormat.getNumberFormat(e.count)
                }, T.abbreviateNumber.getTruncValue(e.count, 1e3)))))
            }
            J.defaultProps = {
                idSelector: "",
                url: "",
                urlForNotification: "",
                isModal: !1,
                friendsData: {
                    count: 0
                },
                messagesData: {
                    count: 0
                },
                tradeData: {
                    count: 0
                }
            }, J.propTypes = {
                idSelector: m().string,
                translate: m().func.isRequired,
                isModal: m().bool,
                name: m().string.isRequired,
                iconClass: m().string.isRequired,
                labelTranslationKey: m().string.isRequired,
                url: m().string,
                urlForNotification: m().string,
                onClickShopLink: m().func.isRequired,
                friendsData: m().shape({
                    count: m().number
                }),
                messagesData: m().shape({
                    count: m().number
                }),
                tradeData: m().shape({
                    count: m().number
                })
            };
            var Y = J,
                Z = v;

            function ee(e) {
                var t = e.translate,
                    e = e.sponsoredPagesData.map(function(e) {
                        var t = e.title,
                            n = e.name,
                            r = e.pageType,
                            e = e.logoImageUrl;
                        return e ? R().createElement("li", {
                            key: n,
                            className: "rbx-nav-sponsor",
                            "ng-non-bindable": "true"
                        }, R().createElement("a", {
                            className: "text-nav menu-item",
                            href: Z(r, n),
                            title: t
                        }, e ? R().createElement("img", {
                            src: e,
                            alt: ""
                        }) : R().createElement("span", null, t))) : null
                    });
                return R().createElement(R().Fragment, null, R().createElement("li", {
                    className: "font-bold small text-nav"
                }, " ", t("Label.sEvents")), e)
            }
            ee.defaultProps = {
                sponsoredPagesData: []
            }, ee.propTypes = {
                translate: m().func.isRequired,
                sponsoredPagesData: m().instanceOf(Array)
            };
            var te = ee;

            function ne(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function re(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ne(Object(o), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ne(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return r
            }

            function oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ie(e) {
                var t = d.authenticatedUser.isAuthenticated,
                    n = oe((0, I.useState)([]), 2),
                    r = n[0],
                    o = n[1];
                return (0, I.useEffect)(function() {
                    t && H().then(function(e) {
                        e = (null !== (e = null == e ? void 0 : e.data) && void 0 !== e ? e : []).filter(function(e) {
                            var t, n;
                            return !(null != e && null !== (t = e.name) && void 0 !== t && t.includes("giftcards") || null != e && null !== (n = e.title) && void 0 !== n && n.includes("giftcards"))
                        });
                        o(e)
                    }, function(e) {
                        console.debug(e)
                    })
                }, [t]), R().createElement(te, re({
                    sponsoredPagesData: r
                }, e))
            }
            var v = angular,
                ce = wr.n(v);

            function ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return fe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || se(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || se(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e, t) {
                if (e) {
                    if ("string" == typeof e) return fe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fe(e, t) : void 0
                }
            }

            function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function me() {
                return W().then(function() {
                    window.location.href = Se()
                })
            }
            var pe = S.universalSearchUrls,
                de = S.newUniversalSearchUrls,
                be = T.urlService.getQueryParam,
                ye = T.urlService.parseUrl,
                ve = T.urlService.composeQueryString,
                ge = f,
                he = p,
                Se = h,
                Ee = r,
                we = n,
                Oe = !d.authenticatedUser.isAuthenticated,
                p = function() {
                    var o = d.authenticatedUser.created;
                    return Promise.all([z(), $()]).then(function(e) {
                        var t = le(e, 2),
                            n = t[0].data.verified,
                            r = t[1].data.valid;
                        return e = o, t = n, n = new Date, e = new Date(e), +(Ee < (n - e) / 864e5 && !t) + +!r
                    }).catch(function(e) {
                        console.debug(e)
                    })
                },
                h = function() {
                    var e = be("returnUrl") || window.location.href,
                        t = ge(),
                        n = ye(he()),
                        r = n.host,
                        o = n.hostname,
                        a = ye(e, !1, !0),
                        n = a.host,
                        a = a.hostname;
                    return e && n && n === r || a && a === o || !n && !a ? "".concat(t, "?").concat(ve({
                        returnUrl: e
                    })) : t
                },
                r = function(e) {
                    e.stopPropagation(), e.preventDefault(), document.dispatchEvent(new CustomEvent(we.name)), ce().isUndefined(ce().element("#chat-container").scope()) || (e = ce().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie")), null !== y.EmailVerificationService && void 0 !== y.EmailVerificationService && y.EmailVerificationService.handleUserEmailUpsellAtLogout(me).then(function(e) {
                        e && !e.emailAddress || me()
                    })
                },
                Ce = function(e) {
                    y.EventStream && y.EventStream.SendEventWithTarget(e, "click", {}, y.EventStream.TargetTypes.WWW)
                },
                xe = function(e) {
                    if (Oe || !y.RealTime) return function() {};
                    document.addEventListener(a.requestCountChanged, e);
                    var t = y.RealTime.Factory.GetClient();
                    return t.Subscribe(a.friendshipNotifications, e),
                        function() {
                            document.removeEventListener(a.requestCountChanged, e), t.Unsubscribe(a.friendshipNotifications, e)
                        }
                },
                Ae = function(e) {
                    return Oe || !y.RealTime ? function() {} : (document.addEventListener(i, e), function() {
                        document.removeEventListener(i, e)
                    })
                },
                je = function() {
                    var e;
                    return null !== (e = (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < 543) && e
                },
                n = function() {
                    var e = (null === (e = window) || void 0 === e ? void 0 : e.location).pathname,
                        e = null !== (e = null == e ? void 0 : e.toLowerCase()) && void 0 !== e ? e : "";
                    return !e.startsWith("/login") && !e.startsWith("/newlogin")
                },
                Ie = function() {
                    var e = ue(pe);
                    return e.sort(function(e) {
                        return e.pageSort.reduce(function(e, t) {
                            return e || -1 < window.location.href.indexOf(t)
                        }, !1) ? -1 : 1
                    }), e
                },
                Re = function() {
                    var e = ue(de);
                    return e.sort(function(e) {
                        return e.pageSort.reduce(function(e, t) {
                            return e || -1 < window.location.pathname.indexOf(t)
                        }, !1) ? -1 : 1
                    }), e
                },
                Te = function() {
                    return document.getElementById("navigation-container") && document.getElementById("navigation-container").className
                },
                ke = function(e) {
                    var n = {};
                    return ("?" === e[0] ? e.substr(1) : e).split("&").forEach(function(e) {
                        var t;
                        e.includes("=") && (e = (t = le(e.split("="), 2))[0], t = t[1], n[null === (e = decodeURIComponent(e)) || void 0 === e ? void 0 : e.toLowerCase()] = decodeURIComponent(t))
                    }), n
                };

            function Ne() {
                return (Ne = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Le(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Pe(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Le(Object(o), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : Le(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return r
            }

            function Ue(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return De(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function De(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qe(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++) n = o[a], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }
            var Me = o;

            function Ke(e) {
                var t = e.translate,
                    n = qe(e, ["translate"]),
                    r = Ue((0, I.useState)(!1), 2),
                    o = r[0],
                    a = r[1],
                    i = (0, I.useCallback)(function() {
                        a(function(e) {
                            return !e
                        }), Ce(Me.clickMerchandise)
                    }, []),
                    c = function() {
                        a(!1)
                    },
                    u = Object.values(S.scrollListItems).map(function(e) {
                        return R().createElement(Y, Ne({
                            key: e.name
                        }, Pe(Pe({
                            translate: t,
                            onClickShopLink: i
                        }, e), n)))
                    }),
                    e = R().createElement("li", {
                        className: "rbx-upgrade-now"
                    }, R().createElement("a", {
                        href: S.upgradeButton.url,
                        className: "btn-growth-md btn-secondary-md",
                        id: "upgrade-now-button"
                    }, t(S.upgradeButton.labelTranslationKey))),
                    r = R().createElement(R().Fragment, null, R().createElement("p", {
                        className: "shop-description"
                    }, t("Description.RetailWebsiteRedirect")), R().createElement("p", {
                        className: "shop-warning"
                    }, t("Description.PurchaseAgeWarning"))),
                    c = R().createElement(b.SimpleModal, {
                        title: t("Heading.LeavingRoblox"),
                        body: r,
                        show: o,
                        actionButtonShow: !0,
                        actionButtonText: t("Action.Continue"),
                        neutralButtonText: t("Action.Cancel"),
                        onAction: function() {
                            var e = decodeURIComponent(y.EnvironmentUrls.amazonWebStoreLink);
                            window.open(e, "_blank"), Ce(Me.goToAmazonStore)
                        },
                        onNeutral: c,
                        onClose: c
                    });
                return R().createElement("ul", {
                    className: "left-col-list"
                }, u, e, R().createElement(ie, {
                    translate: t
                }), c)
            }
            Ke.defaultProps = {
                sponsoredPagesData: []
            }, Ke.propTypes = {
                sponsoredPagesData: m().instanceOf(Array),
                translate: m().func.isRequired
            };
            var _e = Ke;

            function Fe(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Ge(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Fe(Object(o), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : Fe(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return r
            }

            function Be(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ve(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ve(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Qe(e) {
                var n = d.authenticatedUser.isAuthenticated,
                    t = Be((0, I.useState)({}), 2),
                    r = t[0],
                    o = t[1],
                    a = (c = Be((0, I.useState)({}), 2))[0],
                    i = c[1],
                    c = (t = Be((0, I.useState)({}), 2))[0],
                    u = t[1];
                return (0, I.useEffect)(function() {
                    var e = function() {},
                        t = function() {};
                    return n && (e = xe(function() {
                            Q().then(function(e) {
                                e = e.data;
                                o(e)
                            }, function(e) {
                                console.debug(e)
                            })
                        }), t = Ae(function() {
                            G().then(function(e) {
                                e = e.data;
                                i(e)
                            })
                        }), Q().then(function(e) {
                            e = e.data;
                            o(e)
                        }, function(e) {
                            console.debug(e)
                        }), G().then(function(e) {
                            e = e.data;
                            i(e)
                        }, function(e) {
                            console.debug(e)
                        }), V().then(function(e) {
                            e = e.data;
                            u(e)
                        }, function(e) {
                            console.debug(e)
                        })),
                        function() {
                            e(), t()
                        }
                }, []), R().createElement(_e, Ge({
                    friendsData: r,
                    messagesData: a,
                    tradeData: c
                }, e))
            }
            var v = d.authenticatedUser.name,
                f = d.authenticatedUser.displayName,
                $e = {
                    nameForDisplay: null !== y.DisplayNames && void 0 !== y.DisplayNames && y.DisplayNames.Enabled() ? f : v,
                    nameForHeader: null !== y.DisplayNames && void 0 !== y.DisplayNames && y.DisplayNames.Enabled() ? T.concatTexts.concat(["", v]) : v
                };

            function ze(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++) n = o[a], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }

            function He(e) {
                var t = e.isLeftNavOpen,
                    e = ze(e, ["isLeftNavOpen"]),
                    t = g()("rbx-left-col", {
                        "nav-show": t
                    });
                return R().createElement("div", {
                    id: "navigation",
                    className: t
                }, R().createElement("ul", null, R().createElement("li", {
                    key: "username",
                    className: "text-lead nav-username"
                }, R().createElement(b.Link, {
                    url: S.scrollListItems.profile.url,
                    className: "text-nav font-header-2 text-overflow"
                }, $e.nameForDisplay)), R().createElement("li", {
                    key: "divider",
                    className: "rbx-divider"
                })), R().createElement(b.ScrollBar, {
                    className: "rbx-scrollbar"
                }, R().createElement(Qe, e)))
            }
            He.propTypes = {
                isLeftNavOpen: m().bool.isRequired
            };
            var We = He;

            function Xe(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Je(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Xe(Object(o), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : Xe(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return r
            }

            function Ye(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ze(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var et = u;

            function tt() {
                return document.getElementById("navigation-container")
            }
            var nt, rt = (0, t.withTranslations)(function(e) {
                    var t = d.authenticatedUser.isAuthenticated,
                        n = Ye((0, I.useState)(!1), 2),
                        r = n[0],
                        o = n[1],
                        a = (0, I.useCallback)(function() {
                            o(!r)
                        }, [r]);
                    return (0, I.useEffect)(function() {
                        return document.addEventListener(et.name, a),
                            function() {
                                document.removeEventListener(et.name, a)
                            }
                    }, [a]), t ? R().createElement(We, Je({
                        isLeftNavOpen: r
                    }, e)) : null
                }, s),
                ot = CoreRobloxUtilities,
                at = {
                    debounceTimeout: 100,
                    expiryTimeout: 5e3,
                    variationId: 5,
                    trendingVariationId: 0,
                    requestSuggestionUrl: {
                        url: (o = y.EnvironmentUrls.apiGatewayUrl) + "/games-autocomplete/v1/request-suggestion",
                        withCredentials: !0
                    },
                    isSpecialTreatmentAutocompleteRestricted: function() {
                        return 7 === parseInt(tt().dataset.numberOfAutocompleteSuggestions, 10) && S.miscSearchLink.reduce(function(e, t) {
                            return e.push.apply(e, t.pageSort), e
                        }, []).reduce(function(e, t) {
                            return e || -1 < window.location.pathname.indexOf(t)
                        }, !1)
                    },
                    isSpecialTreatment: function() {
                        var e;
                        return 7 === parseInt(null === (e = tt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
                    },
                    numberOfSpecialTreatmentAutocompleteSuggestions: 3,
                    isAutocompleteSuggestionsIXPTestEnabled: function() {
                        var e;
                        return 0 < parseInt(null === (e = tt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
                    },
                    numberOfAutocompleteSuggestions: function() {
                        var e;
                        return parseInt(null === (e = tt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10) || 0
                    }
                },
                it = function() {
                    return (it = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                ct = function(e, i, c, u) {
                    return new(c = c || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                a(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            try {
                                a(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, i || [])).next())
                    })
                },
                ut = function(n, r) {
                    var o, a, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (o = 1, a && (i = 2 & t[0] ? a.return : t[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, t[1])).done) return i;
                                    switch (a = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                c.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && c.label < i[1]) {
                                                c.label = i[1], i = t;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(t);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, c)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                lt = T.httpService.createCancelToken();

            function st(e) {
                return void 0 === (null == e ? void 0 : e.label)
            }

            function ft(e) {
                switch (e.type) {
                    case nt.QuerySuggestion:
                        return "keyword";
                    case nt.GameSuggestion:
                        return "game";
                    default:
                        throw Error("Unrecognized autocomplete suggestion, ".concat(JSON.stringify(e)))
                }
            }

            function mt(e) {
                switch (e.label) {
                    case "Label.Players":
                        return "defaultPlayers";
                    case "Label.AvatarShop":
                    case "Label.sCatalog":
                        return "defaultShops";
                    case "Label.sGroups":
                        return "defaultGroups";
                    case "Label.Library":
                        return "defaultLibrary";
                    case "Label.sGames":
                        return "defaultGames";
                    default:
                        throw Error("Unrecognized default suggestion, ".concat(JSON.stringify(e)))
                }
            }(o = nt = nt || {})[o.GameSuggestion = 0] = "GameSuggestion", o[o.QuerySuggestion = 1] = "QuerySuggestion", o[o.TrendingQuerySuggestion = 2] = "TrendingQuerySuggestion";
            for (var pt, dt = function(n) {
                    return ct(void 0, void 0, Promise, function() {
                        var t;
                        return ut(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        prefix: n.toLowerCase(),
                                        variationId: at.variationId,
                                        trendingSearchId: at.trendingVariationId
                                    }, lt.cancel(), lt = T.httpService.createCancelToken(), [4, T.httpService.post(it(it({}, at.requestSuggestionUrl), {
                                        timeout: at.expiryTimeout,
                                        cancelToken: lt.token,
                                        fullError: !0
                                    }), t)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                }, bt = st, yt = ft, vt = mt, gt = function(e, t) {
                    var n;
                    return st(e) ? S.gameSearchLink.url + encodeURIComponent(e.searchQuery) : null != t && null !== (n = t.target) && void 0 !== n && n.value ? e.url + encodeURIComponent(t.target.value) : ""
                }, ht = function(e, t) {
                    return e.map(function(e) {
                        return st(e) ? "".concat(ft(e), "|").concat(e.searchQuery) : "".concat(mt(e), "|").concat(t)
                    }).join(",")
                }, St = new Uint8Array(16), Et = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, wt = function(e) {
                    return "string" == typeof e && Et.test(e)
                }, Ot = [], Ct = 0; Ct < 256; ++Ct) Ot.push((Ct + 256).toString(16).substr(1));
            var xt = function(e) {
                    var t = (Ot[e[(t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0) + 0]] + Ot[e[t + 1]] + Ot[e[t + 2]] + Ot[e[t + 3]] + "-" + Ot[e[t + 4]] + Ot[e[t + 5]] + "-" + Ot[e[t + 6]] + Ot[e[t + 7]] + "-" + Ot[e[t + 8]] + Ot[e[t + 9]] + "-" + Ot[e[t + 10]] + Ot[e[t + 11]] + Ot[e[t + 12]] + Ot[e[t + 13]] + Ot[e[t + 14]] + Ot[e[t + 15]]).toLowerCase();
                    if (!wt(t)) throw TypeError("Stringified UUID is invalid");
                    return t
                },
                o = function(e, t, n) {
                    var r = (e = e || {}).random || (e.rng || function() {
                        if (!pt && !(pt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return pt(St)
                    })();
                    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                        n = n || 0;
                        for (var o = 0; o < 16; ++o) t[n + o] = r[o];
                        return t
                    }
                    return xt(r)
                },
                At = ot.eventStreamService.eventTypes,
                jt = "searchAutocomplete",
                It = {
                    actionTypes: {
                        open: "open",
                        submit: "submit",
                        close: "close"
                    },
                    generateSessionInfo: o,
                    searchTextTrim: function(e, t, n, r) {
                        return [{
                            name: "searchTextTrim",
                            type: At.formInteraction,
                            context: jt
                        }, {
                            kwd: e,
                            resultingKwd: t,
                            searchType: n,
                            sessionInfo: r
                        }]
                    },
                    searchClear: function(e, t, n) {
                        return [{
                            name: "searchClear",
                            type: At.formInteraction,
                            context: jt
                        }, {
                            kwd: e,
                            searchType: t,
                            sessionInfo: n
                        }]
                    },
                    searchSuggestionClicked: function(e, t, n, r, o, a, i) {
                        return [{
                            name: "searchSuggestionClicked",
                            type: At.formInteraction,
                            context: jt
                        }, {
                            kwd: e,
                            searchType: t,
                            suggestionPosition: n,
                            suggestionClicked: r,
                            suggestionType: o,
                            suggestions: a,
                            sessionInfo: i
                        }]
                    },
                    searchAutocomplete: function(e, t, n, r, o, a, i, c) {
                        return [{
                            name: "searchAutocomplete",
                            type: At.formInteraction,
                            context: jt
                        }, {
                            kwd: e,
                            previousKwd: t,
                            fromLocalCache: n,
                            suggestions: r,
                            algorithm: o,
                            latency: a,
                            timeoutDelayMs: i,
                            sessionInfo: c
                        }]
                    },
                    search: function(e, t, n) {
                        return [{
                            name: "search",
                            type: At.formInteraction,
                            context: jt
                        }, {
                            kwd: e,
                            actionType: t,
                            sessionInfo: n
                        }]
                    }
                };

            function Rt(e) {
                return function(e) {
                    if (Array.isArray(e)) return Nt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || kt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Tt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || kt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function kt(e, t) {
                if (e) {
                    if ("string" == typeof e) return Nt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nt(e, t) : void 0
                }
            }

            function Nt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Lt(e) {
                var o, a = e.translate,
                    i = e.searchInput,
                    c = e.indexOfSelectedOption,
                    u = e.autocompleteSessionInfo,
                    l = e.resetAutocompleteSessionInfo,
                    s = Ie();
                return R().createElement(R().Fragment, null, Object.entries(s).map(function(e) {
                    var t = Tt(e, 2),
                        n = t[0],
                        r = t[1],
                        e = r.url,
                        t = r.label;
                    "Label.sCatalog" === (o = t) && (o = "Label.AvatarShop");
                    t = g()("navbar-search-option rbx-clickable-li", parseInt(n, 10) === c ? " selected" : "");
                    return R().createElement("li", {
                        key: n,
                        className: t
                    }, R().createElement(b.Link, {
                        className: "navbar-search-anchor",
                        url: e + i,
                        onClick: function() {
                            ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Rt(It.searchSuggestionClicked(i, void 0, n, i, vt(r), ht(s, i), u))), l()
                        }
                    }, a("Label.sSearchPhrase", {
                        phrase: i,
                        location: a(o)
                    })))
                }))
            }
            Lt.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var Pt = Lt,
                Ut = RobloxThumbnails;

            function Dt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function qt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Mt = S.gameSearchLink;

            function Kt(e) {
                var t = e.translate,
                    n = e.selected,
                    r = e.suggestion,
                    o = e.onClick,
                    a = g()("navbar-search-option rbx-clickable-li", {
                        "new-selected": n
                    }),
                    i = r.type,
                    c = r.universeId,
                    e = r.searchQuery,
                    n = Dt((0, I.useState)(!1), 2),
                    r = n[0],
                    u = n[1];
                return i === nt.GameSuggestion ? R().createElement("li", {
                    className: a
                }, R().createElement(b.Link, {
                    className: "new-navbar-search-anchor",
                    url: Mt.url + encodeURIComponent(e),
                    onClick: o
                }, R().createElement("span", {
                    className: g()(Mt.icon, "navbar-list-option-icon")
                }), R().createElement("span", {
                    className: "navbar-list-option-text"
                }, e), R().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(Mt.label)
                })), R().createElement("span", {
                    className: g()("navbar-list-option-thumbnail", {
                        "navbar-list-option-thumbnail-visible": r
                    })
                }, R().createElement("span", {
                    className: "background-icon"
                }), R().createElement(Ut.Thumbnail2d, {
                    type: Ut.ThumbnailTypes.gameIcon,
                    size: Ut.DefaultThumbnailSize,
                    targetId: c,
                    containerClass: "thumbnail-icon",
                    format: Ut.ThumbnailFormat.jpeg,
                    onLoad: function() {
                        u(!0)
                    }
                })))) : R().createElement("li", {
                    className: a
                }, R().createElement(b.Link, {
                    className: "new-navbar-search-anchor",
                    url: Mt.url + encodeURIComponent(e),
                    onClick: o
                }, R().createElement("span", {
                    className: g()(Mt.icon, "navbar-list-option-icon")
                }), R().createElement("span", {
                    className: "navbar-list-option-text"
                }, e), R().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(Mt.label)
                }))))
            }

            function _t(e) {
                var t = e.translate,
                    n = e.selected,
                    r = e.searchInput,
                    o = e.suggestion,
                    a = e.onClick,
                    i = o.url,
                    e = o.label,
                    o = o.icon,
                    n = g()("navbar-search-option rbx-clickable-li", {
                        "new-selected": n
                    });
                return R().createElement("li", {
                    className: n
                }, R().createElement(b.Link, {
                    className: "new-navbar-search-anchor",
                    url: i + encodeURIComponent(r),
                    onClick: a
                }, R().createElement("span", {
                    className: g()(o, "navbar-list-option-icon")
                }), R().createElement("span", {
                    className: "navbar-list-option-text"
                }, r.toLowerCase()), R().createElement("span", {
                    className: "navbar-list-option-suffix"
                }, t("Label.sSearchPhraseV2", {
                    location: t(e)
                }))))
            }

            function Ft(e) {
                return function(e) {
                    if (Array.isArray(e)) return Gt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Gt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gt(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Gt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Bt(e) {
                function r(e, t) {
                    return function() {
                        ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Ft(It.searchSuggestionClicked(a, void 0, t, a, e, ht(n, a), c))), u()
                    }
                }
                var o = e.translate,
                    a = e.searchInput,
                    i = e.indexOfSelectedOption,
                    n = e.searchSuggestions,
                    c = e.autocompleteSessionInfo,
                    u = e.resetAutocompleteSessionInfo;
                return n.map(function(e, t) {
                    var n = parseInt(t, 10) === i;
                    return bt(e) ? R().createElement(Kt, {
                        key: e.searchQuery,
                        translate: o,
                        selected: n,
                        suggestion: e,
                        onClick: r(yt(e), t)
                    }) : R().createElement(_t, {
                        key: e.url,
                        translate: o,
                        selected: n,
                        suggestion: e,
                        searchInput: a,
                        onClick: r(vt(e), t)
                    })
                })
            }

            function Vt(n, r) {
                (0, I.useEffect)(function() {
                    function e(t) {
                        n.every(function(e) {
                            return !(null != e && e.current)
                        }) || -1 < n.findIndex(function(e) {
                            return t.target instanceof Node && (null == e ? void 0 : e.current.contains(t.target))
                        }) || r(t)
                    }
                    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e),
                        function() {
                            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
                        }
                }, [n, r])
            }
            Kt.propTypes = {
                translate: m().func.isRequired,
                selected: m().bool.isRequired,
                suggestion: m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }).isRequired,
                onClick: m().func.isRequired
            }, _t.propTypes = {
                translate: m().func.isRequired,
                selected: m().bool.isRequired,
                searchInput: m().string.isRequired,
                suggestion: m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string.isRequired
                }).isRequired,
                onClick: m().func.isRequired
            }, Bt.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                searchSuggestions: m().arrayOf(m().oneOfType([m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number.isRequired,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }), m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string.isRequired
                })])).isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var Qt = Bt;

            function $t(e) {
                return function(e) {
                    if (Array.isArray(e)) return zt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return zt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zt(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ht(e) {
                var t = e.translate,
                    n = e.searchInput,
                    r = e.isMenuOpen,
                    o = e.openMenu,
                    a = e.closeMenu,
                    i = e.handleSearch,
                    c = e.setIsMenuHover,
                    u = e.indexOfSelectedOption,
                    l = e.onSubmit,
                    s = e.onKeyDown,
                    f = e.onKeyUp,
                    m = e.isUniverseSearchShown,
                    p = e.searchSuggestions,
                    d = e.autocompleteSessionInfo,
                    b = e.resetAutocompleteSessionInfo,
                    y = (0, I.createRef)(),
                    v = (0, I.createRef)(),
                    e = function() {
                        var e;
                        ot.eventStreamService.sendEvent.apply(ot.eventStreamService, $t(It.searchClear(n, void 0, d))), null == y || null !== (e = y.current) && void 0 !== e && e.focus(), i({
                            target: {
                                value: ""
                            }
                        })
                    },
                    m = g()("navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3", {
                        "navbar-search-open": r,
                        shown: m
                    });
                return Vt([y, v], a), R().createElement("div", {
                    id: "navbar-universal-search",
                    className: m,
                    role: "search"
                }, R().createElement("div", {
                    className: "input-group"
                }, R().createElement("form", {
                    onSubmit: l
                }, at.isAutocompleteSuggestionsIXPTestEnabled() ? R().createElement("div", {
                    className: "form-has-feedback"
                }, R().createElement("input", {
                    ref: y,
                    id: "navbar-search-input",
                    className: "form-control input-field new-input-field",
                    value: n,
                    onChange: i,
                    placeholder: t("Label.sSearch"),
                    maxLength: "120",
                    onFocus: o,
                    onKeyDown: s,
                    onKeyUp: f,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false"
                }), 0 < n.length && R().createElement("span", {
                    id: "navbar-search-clear-btn",
                    tabIndex: 0,
                    role: "button",
                    "aria-label": "Clear Search",
                    onClick: e,
                    onKeyDown: e,
                    className: "clear-search icon-close-gray-16x16"
                }, R().createElement("span", null))) : R().createElement("input", {
                    ref: y,
                    id: "navbar-search-input",
                    className: "form-control input-field",
                    type: "text",
                    value: n,
                    onChange: i,
                    placeholder: t("Label.sSearch"),
                    maxLength: "120",
                    onFocus: o,
                    onKeyDown: s,
                    onKeyUp: f,
                    autoComplete: "off"
                })), R().createElement("div", {
                    className: "input-group-btn"
                }, R().createElement("button", {
                    id: "navbar-search-btn",
                    className: "input-addon-btn",
                    type: "submit"
                }, R().createElement("span", {
                    className: "icon-nav-search"
                })))), R().createElement("ul", {
                    ref: v,
                    className: g()("dropdown-menu", {
                        "new-dropdown-menu": at.isAutocompleteSuggestionsIXPTestEnabled()
                    }),
                    role: "menu",
                    onMouseEnter: function() {
                        c(!0)
                    },
                    onMouseLeave: function() {
                        c(!1)
                    }
                }, at.isAutocompleteSuggestionsIXPTestEnabled() ? R().createElement(Qt, {
                    translate: t,
                    searchInput: n,
                    indexOfSelectedOption: u,
                    searchSuggestions: p,
                    autocompleteSessionInfo: d,
                    resetAutocompleteSessionInfo: b
                }) : R().createElement(Pt, {
                    translate: t,
                    searchInput: n,
                    indexOfSelectedOption: u,
                    autocompleteSessionInfo: d,
                    resetAutocompleteSessionInfo: b
                })))
            }
            Ht.defaultProps = {
                isUniverseSearchShown: !0
            }, Ht.propTypes = {
                translate: m().func.isRequired,
                searchInput: m().string.isRequired,
                isMenuOpen: m().bool.isRequired,
                openMenu: m().func.isRequired,
                closeMenu: m().func.isRequired,
                handleSearch: m().func.isRequired,
                setIsMenuHover: m().func.isRequired,
                indexOfSelectedOption: m().number.isRequired,
                onSubmit: m().func.isRequired,
                onKeyDown: m().func.isRequired,
                onKeyUp: m().func.isRequired,
                isUniverseSearchShown: m().bool,
                searchSuggestions: m().arrayOf(m().oneOfType([m().shape({
                    type: m().number.isRequired,
                    score: m().number.isRequired,
                    universeId: m().number.isRequired,
                    canonicalTitle: m().string,
                    thumbnailUrl: m().string,
                    searchQuery: m().string.isRequired,
                    trendingSearchStartDateTime: m().string
                }), m().shape({
                    url: m().string.isRequired,
                    label: m().string.isRequired,
                    pageSort: m().arrayOf(m().string).isRequired,
                    icon: m().string
                })])).isRequired,
                autocompleteSessionInfo: m().string.isRequired,
                resetAutocompleteSessionInfo: m().func.isRequired
            };
            var Wt = Ht;

            function Xt(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Jt(e) {
                return function(e) {
                    if (Array.isArray(e)) return en(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Zt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Yt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || Zt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Zt(e, t) {
                if (e) {
                    if ("string" == typeof e) return en(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? en(e, t) : void 0
                }
            }

            function en(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function tn(e) {
                var t, n, r, o, a, i = e.translate,
                    c = e.isUniverseSearchShown,
                    u = Yt((0, I.useState)(ke(window.location.search).keyword || ""), 2),
                    l = u[0],
                    s = u[1],
                    f = (t = l, n = at.debounceTimeout, b = (0, I.useState)(t), e = b[0], r = b[1], (0, I.useEffect)(function() {
                        var e = setTimeout(function() {
                            r(t)
                        }, n);
                        return function() {
                            clearTimeout(e)
                        }
                    }, [t, n]), e),
                    m = (o = f, a = (0, I.useRef)(), (0, I.useEffect)(function() {
                        a.current = o
                    }, [o]), a.current),
                    u = Yt((0, I.useState)(null), 2),
                    p = u[0],
                    d = u[1],
                    b = Yt((0, I.useState)(It.generateSessionInfo()), 2),
                    y = b[0],
                    v = b[1],
                    e = Yt((0, I.useState)(!1), 2),
                    u = e[0],
                    g = e[1],
                    b = Yt((0, I.useState)(!1), 2),
                    h = b[0],
                    e = b[1],
                    b = Yt((0, I.useState)(0), 2),
                    S = b[0],
                    E = b[1],
                    w = k,
                    O = (at.isAutocompleteSuggestionsIXPTestEnabled() ? Re : Ie)(),
                    C = O.findIndex(function(e) {
                        return "Label.sGames" === e.label
                    }),
                    x = (0, I.useMemo)(function() {
                        if (p) {
                            if (at.isSpecialTreatmentAutocompleteRestricted()) return O;
                            var e = -1 === p.findIndex(function(e) {
                                    return e.searchQuery === f.toLowerCase() && e.type === nt.GameSuggestion
                                }),
                                t = p.filter(function(e) {
                                    return e.searchQuery !== f.toLowerCase() || e.type === nt.GameSuggestion
                                }).slice(0, at.isSpecialTreatment() ? at.numberOfSpecialTreatmentAutocompleteSuggestions : at.numberOfAutocompleteSuggestions());
                            return [].concat(Jt(O.slice(0, e ? C + 1 : C)), Jt(t), Jt(O.slice(C + 1)))
                        }
                        return O
                    }, [p]),
                    A = x.length;
                (0, I.useEffect)(function() {
                    ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.search(l, It.actionTypes.submit, y))),
                        function() {
                            var c, e = (c = regeneratorRuntime.mark(function e() {
                                var t, n, r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (at.isAutocompleteSuggestionsIXPTestEnabled() && "" !== f) return d(null), t = Date.now(), e.prev = 3, e.next = 6, dt(f);
                                            e.next = 15;
                                            break;
                                        case 6:
                                            n = e.sent, r = Date.now(), ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.searchAutocomplete(f, m, !1, ht(n.entries, f), n.algorithmName, r - t, at.debounceTimeout, y))), d(n.entries), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(3), T.httpService.isCancelled(e.t0) || d([]);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [3, 12]
                                ])
                            }), function() {
                                var e = this,
                                    i = arguments;
                                return new Promise(function(t, n) {
                                    var r = c.apply(e, i);

                                    function o(e) {
                                        Xt(r, t, n, o, a, "next", e)
                                    }

                                    function a(e) {
                                        Xt(r, t, n, o, a, "throw", e)
                                    }
                                    o(void 0)
                                })
                            });
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                }, [f]);

                function j() {
                    v(It.generateSessionInfo())
                }
                return R().createElement(Wt, {
                    searchInput: l,
                    handleSearch: function(e) {
                        e = e.target.value;
                        e.length < l.length && ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.searchTextTrim(l, e, void 0, y))), 0 === e.length && j(), E(0), g(0 < e.length), s(e)
                    },
                    openMenu: function() {
                        var e = It.generateSessionInfo();
                        ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.search(l, It.actionTypes.open, e))), v(e), 0 === l.length || h || g(!0)
                    },
                    closeMenu: function() {
                        ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.search(l, It.actionTypes.close, y))), g(!1)
                    },
                    setIsMenuHover: e,
                    isMenuOpen: u,
                    indexOfSelectedOption: S,
                    onSubmit: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    },
                    onKeyDown: function(e) {
                        var t = S;
                        e.keyCode !== w.arrowUp && e.keyCode !== w.arrowDown && e.keyCode !== w.tab || (e.stopPropagation(), e.preventDefault(), e.keyCode === w.arrowUp ? --t : t += 1, (t %= A) < 0 && (t = A + t), E(t))
                    },
                    onKeyUp: function(e) {
                        var t;
                        e.keyCode === w.enter && (e.stopPropagation(), e.preventDefault(), t = x[S], bt(t) ? ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.searchSuggestionClicked(f, void 0, S, t.searchQuery, yt(t), ht(x, l), y))) : ot.eventStreamService.sendEvent.apply(ot.eventStreamService, Jt(It.searchSuggestionClicked(f, void 0, S, f, vt(t), ht(x, l), y))), j(), (e = gt(t, e)) && (window.location = e))
                    },
                    isUniverseSearchShown: c,
                    translate: i,
                    searchSuggestions: x,
                    autocompleteSessionInfo: y,
                    resetAutocompleteSessionInfo: j
                })
            }
            tn.defaultProps = {
                isUniverseSearchShown: !0
            }, tn.propTypes = {
                translate: m().func.isRequired,
                isUniverseSearchShown: m().bool
            };
            var nn = (0, t.withTranslations)(tn, s);

            function rn(e) {
                return (rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function on(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function an(e, t) {
                return (an = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function cn(n) {
                var r = function() {
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
                    var e, t = un(n);
                    return e = r ? (e = un(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== rn(e) && "function" != typeof e ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function un(e) {
                return (un = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ln = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && an(e, t)
                }(o, R().Component);
                var e, t, n, r = cn(o);

                function o() {
                    var e;
                    return function(e) {
                        if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                    }(this), (e = r.call(this)).html = "\n            <div login-form\n                context='loginDropdown'\n                is-facebook-sign-in-enabled='true'\n                use-facebook-redirect='true'\n                redirect-to-login-page-when-username-is-required='true'\n            ></div>", e
                }
                return e = o, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        try {
                            ce().module("login"), ce().bootstrap(this.container, ["login", "loginAppTemplates"])
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return R().createElement("div", {
                            id: "login-container",
                            className: "login-container",
                            ref: function(e) {
                                t.container = e
                            },
                            dangerouslySetInnerHTML: {
                                __html: this.html
                            }
                        })
                    }
                }]) && on(e.prototype, t), n && on(e, n), o
            }();

            function sn(e) {
                return (sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function fn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function mn(e, t) {
                return (mn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function pn(n) {
                var r = function() {
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
                    var e, t = dn(n);
                    return e = r ? (e = dn(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== sn(e) && "function" != typeof e ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function dn(e) {
                return (dn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var bn = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && mn(e, t)
                }(o, R().Component);
                var e, t, n, r = pn(o);

                function o() {
                    return function(e) {
                        if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                    }(this), r.apply(this, arguments)
                }
                return e = o, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        try {
                            ce().module("notificationStreamIcon"), ce().bootstrap(this.container, ["notificationStreamIcon"])
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return R().createElement("span", {
                            ref: function(e) {
                                t.container = e
                            },
                            className: "nav-robux-icon rbx-menu-item"
                        }, R().createElement("span", {
                            id: "notification-stream-icon-container",
                            "notification-stream-indicator": "true"
                        }))
                    }
                }]) && fn(e.prototype, t), n && fn(e, n), o
            }();

            function yn(e) {
                return (yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function vn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function gn(e, t) {
                return (gn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function hn(n) {
                var r = function() {
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
                    var e, t = Sn(n);
                    return e = r ? (e = Sn(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== yn(e) && "function" != typeof e ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function Sn(e) {
                return (Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var En = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && gn(e, t)
                }(o, R().Component);
                var e, t, n, r = hn(o);

                function o() {
                    return function(e) {
                        if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                    }(this), r.apply(this, arguments)
                }
                return e = o, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        try {
                            ce().module("notificationStream"), ce().bootstrap(this.container, ["notificationStream"])
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = Te(),
                            e = g()("notification-stream-base", e);
                        return R().createElement("div", {
                            ref: function(e) {
                                t.container = e
                            },
                            className: e,
                            "notification-stream-base-view": "true"
                        })
                    }
                }]) && vn(e.prototype, t), n && vn(e, n), o
            }();

            function wn() {
                return R().createElement(b.Popover, {
                    id: "notification-stream-popover",
                    trigger: "click",
                    placement: "bottom",
                    closeOnClick: !1,
                    icon: R().createElement("li", {
                        id: "navbar-stream",
                        className: "navbar-icon-item navbar-stream"
                    }, R().createElement(bn, null)),
                    role: "menu"
                }, R().createElement(En, null))
            }
            wn.propTypes = {};
            var On = wn;

            function Cn(e) {
                var t = e.accountNotificationCount,
                    e = g()("notification-red notification nav-setting-highlight", {
                        hidden: 0 === t
                    });
                return R().createElement("span", {
                    id: "settings-icon",
                    className: "nav-settings-icon rbx-menu-item"
                }, R().createElement("span", {
                    className: "icon-nav-settings roblox-popover-close",
                    id: "nav-settings"
                }), R().createElement("span", {
                    className: e
                }, t))
            }
            Cn.defaultProps = {
                accountNotificationCount: 0
            }, Cn.propTypes = {
                accountNotificationCount: m().number
            };
            var xn = Cn;

            function An(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return jn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function jn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var In = S.settingsUrl,
                Rn = S.quickLoginUrl,
                Tn = r,
                kn = l.quickLogin,
                Nn = l.settings,
                Ln = l.logout;

            function Pn(e) {
                var r = e.translate,
                    o = e.accountNotificationCount,
                    a = e.isCrossDeviceLoginCodeValidationDisplayed,
                    i = g()("notification-blue notification nav-setting-highlight", {
                        hidden: 0 === o
                    });
                return Object.entries(In).map(function(e) {
                    var t = An(e, 2),
                        n = t[0],
                        e = t[1],
                        t = e.url,
                        e = e.label;
                    return R().createElement("li", null, n === Ln && R().createElement(b.Link, {
                        className: "rbx-menu-item logout-menu-item",
                        key: n,
                        onClick: Tn,
                        url: "#"
                    }, r(e)), n === kn && a && R().createElement(b.Link, {
                        className: "rbx-menu-item",
                        key: n,
                        url: Rn
                    }, r(e)), n !== Ln && n !== kn && R().createElement(b.Link, {
                        cssClasses: "rbx-menu-item",
                        key: n,
                        url: t
                    }, r(e), n === Nn && R().createElement("span", {
                        className: i
                    }, o)))
                })
            }
            Pn.defaultProps = {
                accountNotificationCount: 0,
                isCrossDeviceLoginCodeValidationDisplayed: !1
            }, Pn.propTypes = {
                translate: m().func.isRequired,
                accountNotificationCount: m().number,
                isCrossDeviceLoginCodeValidationDisplayed: m().bool
            };
            var Un = Pn;

            function Dn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function qn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Mn(e) {
                var t = e.translate,
                    n = e.accountNotificationCount,
                    r = Dn((0, I.useState)(!1), 2),
                    e = r[0],
                    o = r[1];
                return (0, I.useEffect)(function() {
                    o(!0)
                }, []), R().createElement(b.Popover, {
                    id: "settings-popover",
                    trigger: "click",
                    placement: "bottom",
                    className: Te(),
                    containerPadding: 20,
                    icon: R().createElement("li", {
                        id: "navbar-settings",
                        className: "cursor-pointer navbar-icon-item"
                    }, R().createElement(xn, {
                        accountNotificationCount: n
                    })),
                    role: "menu"
                }, R().createElement("div", {
                    className: Te()
                }, R().createElement("ul", {
                    id: "settings-popover-menu",
                    className: "dropdown-menu"
                }, R().createElement(Un, {
                    isCrossDeviceLoginCodeValidationDisplayed: e,
                    translate: t,
                    accountNotificationCount: n
                }))))
            }
            Mn.defaultProps = {
                accountNotificationCount: 0
            }, Mn.propTypes = {
                translate: m().func.isRequired,
                accountNotificationCount: m().number
            };
            var Kn = Mn;

            function _n(e) {
                var t = e.robuxAmount,
                    n = e.isGetCurrencyCallDone,
                    e = e.robuxError,
                    t = e ? c : T.abbreviateNumber.getTruncValue(t),
                    t = R().createElement("span", null, R().createElement("span", {
                        className: "icon-robux-28x28 roblox-popover-close",
                        id: "nav-robux"
                    }), R().createElement("span", {
                        className: "rbx-text-navbar-right text-header",
                        id: "nav-robux-amount"
                    }, n && t));
                return R().createElement("span", {
                    id: "nav-robux-icon",
                    className: "nav-robux-icon rbx-menu-item"
                }, e ? R().createElement(b.Tooltip, {
                    id: "current-error",
                    content: e,
                    placement: "bottom",
                    containerClassName: "nav-buy-robux-icon-tooltip-container"
                }, t) : t)
            }
            _n.defaultProps = {
                robuxAmount: 0,
                robuxError: ""
            }, _n.propTypes = {
                robuxAmount: m().number,
                robuxError: m().string,
                isGetCurrencyCallDone: m().bool.isRequired
            };
            var Fn = _n,
                Gn = S.buyRobuxUrl;

            function Bn(e) {
                var t = e.translate,
                    n = e.robuxAmount,
                    r = e.isGetCurrencyCallDone,
                    n = e.robuxError ? c : T.numberFormat.getNumberFormat(n);
                return R().createElement(R().Fragment, null, R().createElement("li", null, R().createElement(b.Link, {
                    cssClasses: "rbx-menu-item",
                    id: "nav-robux-balance",
                    url: Gn.robuxBalance.url
                }, r && t("Label.sRobuxMessage", {
                    robuxValue: n
                }))), R().createElement("li", null, R().createElement(b.Link, {
                    cssClasses: "rbx-menu-item",
                    url: Gn.buyRobux.url
                }, t(Gn.buyRobux.label))))
            }
            Bn.defaultProps = {
                robuxAmount: 0,
                robuxError: ""
            }, Bn.propTypes = {
                translate: m().func.isRequired,
                robuxAmount: m().number,
                robuxError: m().string,
                isGetCurrencyCallDone: m().bool.isRequired
            };
            var Vn = Bn;

            function Qn(e) {
                var t = e.translate,
                    n = e.robuxAmount,
                    r = e.isGetCurrencyCallDone,
                    e = e.robuxError;
                return R().createElement(b.Popover, {
                    id: "buy-robux-popover",
                    trigger: "click",
                    placement: "bottom",
                    icon: R().createElement("li", {
                        id: "navbar-robux",
                        className: "cursor-pointer navbar-icon-item"
                    }, R().createElement(Fn, {
                        robuxAmount: n,
                        isGetCurrencyCallDone: r,
                        robuxError: e
                    })),
                    role: "menu"
                }, R().createElement("div", {
                    className: Te()
                }, R().createElement("ul", {
                    id: "buy-robux-popover-menu",
                    className: "dropdown-menu"
                }, R().createElement(Vn, {
                    translate: t,
                    robuxAmount: n,
                    isGetCurrencyCallDone: r,
                    robuxError: e
                }))))
            }
            Qn.defaultProps = {
                robuxAmount: 0,
                robuxError: ""
            }, Qn.propTypes = {
                translate: m().func.isRequired,
                robuxAmount: m().number,
                robuxError: m().string,
                isGetCurrencyCallDone: m().bool.isRequired
            };
            var $n = Qn;

            function zn(e) {
                e = e.toggleUniverseSearch;
                return R().createElement("li", {
                    className: "cursor-pointer rbx-navbar-right-search",
                    onClick: e,
                    onKeyPress: e,
                    role: "menuitem"
                }, R().createElement("span", {
                    className: "rbx-menu-icon rbx-menu-item"
                }, R().createElement("span", {
                    className: "icon-nav-search-white"
                })))
            }
            zn.propTypes = {
                toggleUniverseSearch: m().func.isRequired
            };
            var Hn = zn;

            function Wn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Xn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Jn = p;

            function Yn(e) {
                var t = e.translate,
                    n = e.toggleUniverseSearch,
                    r = d.authenticatedUser.isAuthenticated,
                    o = d.authenticatedUser.id,
                    a = Wn((0, I.useState)(0), 2),
                    i = a[0],
                    c = a[1],
                    u = Wn((0, I.useState)(!1), 2),
                    l = u[0],
                    s = u[1],
                    e = Wn((0, I.useState)(0), 2),
                    a = e[0],
                    f = e[1],
                    u = Wn((0, I.useState)(""), 2),
                    e = u[0],
                    m = u[1];
                (0, I.useEffect)(function() {
                    r && (Jn().then(c), B(o).then(function(e) {
                        e = e.data;
                        f(e.robux)
                    }, function() {
                        m("Currency service unavailable")
                    }).finally(function() {
                        s(!0)
                    }))
                }, [r, o]);
                var p = R().createElement("li", {
                    id: "navbar-stream",
                    className: "navbar-icon-item navbar-stream"
                }, R().createElement("span", {
                    className: "nav-robux-icon rbx-menu-item"
                }, R().createElement("span", {
                    id: "notification-stream-icon-container",
                    "notification-stream-indicator": "true"
                })));
                try {
                    ce().module("notificationStreamIcon"), ce().module("notificationStream"), p = R().createElement(On, null)
                } catch (e) {
                    console.log(e)
                }
                return R().createElement("ul", {
                    className: "nav navbar-right rbx-navbar-icon-group"
                }, R().createElement(Kn, {
                    translate: t,
                    accountNotificationCount: i
                }), R().createElement($n, {
                    translate: t,
                    robuxAmount: a,
                    isGetCurrencyCallDone: l,
                    robuxError: e
                }), p, R().createElement(Hn, {
                    translate: t,
                    toggleUniverseSearch: n
                }))
            }
            Yn.defaultProps = {
                accountNotificationCount: 0
            }, Yn.propTypes = {
                translate: m().func.isRequired,
                accountNotificationCount: m().number,
                toggleUniverseSearch: m().func.isRequired
            };
            var Zn = Yn;

            function er() {
                var e = d.authenticatedUser.isUnder13;
                return R().createElement("div", {
                    className: "xsmall age-bracket-label text-header"
                }, R().createElement("span", {
                    className: "text-overflow age-bracket-label-username font-caption-header"
                }, $e.nameForHeader, " : "), R().createElement("span", {
                    className: "age-bracket-label-age"
                }, e ? "<13" : "13+"))
            }

            function tr() {
                window.location.href = rr()
            }
            er.propTypes = {};
            var nr = er,
                rr = h;

            function or(e) {
                e = e.translate;
                return R().createElement("li", {
                    className: "signup-button-container"
                }, R().createElement(b.Link, {
                    onClick: tr,
                    isDisabled: !0,
                    url: rr(),
                    id: "sign-up-button",
                    className: "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button"
                }, e("Label.sSignUp")))
            }
            or.propTypes = {
                translate: m().func.isRequired
            };
            var ar = or;

            function ir() {
                return (ir = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function cr(e, t) {
                if (null == e) return {};
                var n, r = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++) n = o[a], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }
            var ur = n;

            function lr(e) {
                var t = e.translate,
                    n = e.toggleUniverseSearch,
                    e = cr(e, ["translate", "toggleUniverseSearch"]);
                return d.authenticatedUser.isAuthenticated ? R().createElement("div", {
                    className: "navbar-right rbx-navbar-right"
                }, R().createElement(Zn, ir({
                    translate: t,
                    toggleUniverseSearch: n
                }, e)), R().createElement(nr, null)) : R().createElement("div", {
                    className: "navbar-right rbx-navbar-right"
                }, R().createElement("ul", {
                    className: "nav navbar-right rbx-navbar-right-nav"
                }, R().createElement(ar, {
                    translate: t
                }), R().createElement("li", {
                    className: "login-action"
                }, ur() && R().createElement(b.Popover, {
                    id: "login-popover",
                    trigger: "click",
                    placement: "bottom",
                    closeOnClick: !1,
                    icon: R().createElement("span", null, R().createElement("a", {
                        className: "font-header-2 rbx-navbar-login nav-menu-title rbx-menu-item"
                    }, t("Label.sLogin"))),
                    role: "menu"
                }, R().createElement(ln, null))), R().createElement(Hn, {
                    translate: t,
                    toggleUniverseSearch: n
                })))
            }
            lr.propTypes = {
                translate: m().func.isRequired,
                toggleUniverseSearch: m().func.isRequired
            };
            var sr = lr;

            function fr() {
                return (fr = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function mr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return pr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var dr = (0, t.withTranslations)(function(e) {
                    var t = je(),
                        n = mr((0, I.useState)(t), 2),
                        r = n[0],
                        o = n[1],
                        t = (n = mr((0, I.useState)(!t), 2))[0],
                        a = n[1],
                        i = (0, I.useCallback)(function() {
                            var e = je();
                            r !== e && (o(e), a(!e))
                        }, [r]);
                    return (0, I.useEffect)(function() {
                        return window.addEventListener("resize", i),
                            function() {
                                window.removeEventListener("resize", i)
                            }
                    }, [i]), R().createElement(R().Fragment, null, R().createElement(nn, fr({
                        isUniverseSearchShown: t
                    }, e)), R().createElement(sr, fr({
                        toggleUniverseSearch: function() {
                            a(function(e) {
                                return !e
                            })
                        }
                    }, e)))
                }, s),
                br = u;

            function yr() {
                function e() {
                    document.dispatchEvent(new CustomEvent(br.name))
                }
                return R().createElement("span", {
                    onClick: e,
                    onKeyPress: e,
                    className: "icon-nav-menu"
                })
            }
            yr.propTypes = {};
            var vr = yr,
                gr = (wr(635), "right-navigation-header"),
                hr = "left-navigation-container",
                Sr = "header-menu-icon",
                Er = d.authenticatedUser.isAuthenticated;
            (0, T.ready)(function() {
                document.getElementById(Sr) && Er && (0, e.render)(R().createElement(vr, null), document.getElementById(Sr)), document.getElementById(gr) && (0, e.render)(R().createElement(dr, null), document.getElementById(gr)), document.getElementById(hr) && (0, e.render)(R().createElement(rt, null), document.getElementById(hr))
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/dcdaa2d52fd0a99c0e0c-navigation.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Navigation");