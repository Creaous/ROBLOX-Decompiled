! function() {
    var n = {
            907: function(e, t, n) {
                var r = {
                    "./2dThumbnailComponent.js": 4170
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 907
            },
            9441: function(e, t, n) {
                var r = {
                    "./thumbnailConstants.js": 8558
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 9441
            },
            6297: function(e, t, n) {
                var r = {
                    "./2dThumbnailController.js": 4469
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 6297
            },
            6484: function(e, t, n) {
                var r = {
                    "./imageLoadDirective.js": 2799,
                    "./thumbnailErrorDirective.js": 8904
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 6484
            },
            9044: function(e, t, n) {
                var r = {
                    "./thumbnailService.js": 5411
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 9044
            },
            2671: function(e, t, n) {
                var r = {
                    "./components/templates/2dThumbnail.html": 6103
                };

                function a(e) {
                    e = i(e);
                    return n(e)
                }

                function i(e) {
                    if (n.o(r, e)) return r[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                a.keys = function() {
                    return Object.keys(r)
                }, a.resolve = i, (e.exports = a).id = 2671
            },
            726: function(e) {
                function i(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function o(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, r, a) {
                        return e.module(t, []).run(["$templateCache", function(n) {
                            r && r.keys().forEach(function(e) {
                                var t = i(o(e));
                                n.put(t, r(e))
                            }), a && a.keys().forEach(function(e) {
                                var t = i(o(e));
                                n.put(t, a(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            4170: function(e, t, n) {
                "use strict";
                n.r(t);
                var r = {
                    templateUrl: "2d-thumbnail",
                    bindings: {
                        thumbnailType: "<",
                        thumbnailTargetId: "<",
                        thumbnailOptions: "<?",
                        onSuccess: "<",
                        onFailure: "<",
                        altName: "<"
                    },
                    controller: "2dThumbnailController"
                };
                n(1214).Z.component("thumbnail2d", r), t.default = r
            },
            8558: function(e, t, n) {
                "use strict";
                n.r(t);
                var r = n(8613),
                    n = n(1214),
                    r = {
                        thumbnailTypes: r.ThumbnailTypes,
                        thumbnailStates: r.ThumbnailStates,
                        formats: r.ThumbnailFormat,
                        avatarHeadshotSize: r.ThumbnailAvatarHeadshotSize,
                        gameIconSize: r.ThumbnailGameIconSize,
                        thumbnailAvatarsSize: r.ThumbnailAvatarsSize
                    };
                n.Z.constant("thumbnailConstants", r), t.default = r
            },
            4469: function(e, t, n) {
                "use strict";
                n.r(t);
                var o = n(8613),
                    n = n(1214);

                function r(e, n) {
                    var r = this,
                        a = "",
                        i = o.ThumbnailStates;
                    r.getCssClasses = function() {
                        return r.isThumbnailRequestSending ? "shimmer" : n.getCssClass(r.thumbnailState)
                    }, r.setThumbnailLoadFailed = function() {}, r.isLazyLoadingEnabled = function() {
                        return r.thumbnailOptions && r.thumbnailOptions.isLazyLoading
                    };

                    function t() {
                        var e, t = "".concat(r.thumbnailType, ":").concat(r.thumbnailTargetId);
                        a !== t && (a = t, r.thumbnailState = i.loading, t = (null === (e = r.thumbnailOptions) || void 0 === e ? void 0 : e.size) || o.DefaultThumbnailSize, e = (null === (e = r.thumbnailOptions) || void 0 === e ? void 0 : e.format) || o.DefaultThumbnailFormat, r.isThumbnailRequestSending = !0, n.getThumbnailImage(r.thumbnailType, r.thumbnailTargetId, t, e).then(function(e) {
                            var t = e.thumbnail,
                                n = t.state,
                                t = t.imageUrl,
                                e = e.performance;
                            r.thumbnailState = n, r.thumbnailUrl = t, r.onSuccess && r.onSuccess(e)
                        }).catch(function(e) {
                            r.thumbnailState = i.error, r.onFailure && r.onFailure(e)
                        }).finally(function() {
                            r.isThumbnailRequestSending = !1
                        }))
                    }
                    r.$onInit = t, r.$onChanges = t
                }
                r.$inject = ["$scope", "thumbnailService"], n.Z.controller("2dThumbnailController", r), t.default = r
            },
            2799: function(e, t, n) {
                "use strict";

                function r() {
                    return {
                        restrict: "A",
                        link: function(e, t) {
                            t.bind("load", function() {
                                e.$evalAsync(function() {
                                    e.isLoaded = !0
                                })
                            })
                        }
                    }
                }
                n.r(t), n(1214).Z.directive("imageLoad", r), t.default = r
            },
            8904: function(e, t, n) {
                "use strict";

                function r() {
                    return {
                        scope: {
                            thumbnailError: "<"
                        },
                        link: function(e, t) {
                            t.on("error", e.thumbnailError)
                        }
                    }
                }
                n.r(t), n(1214).Z.directive("thumbnailError", r), t.default = r
            },
            5411: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n(1079),
                    n = n(1214);

                function r(e) {
                    return {
                        getThumbnailImage: function(n, r, a) {
                            return e(function(t, e) {
                                i.Z.getThumbnailImage(n, r, a).then(function(e) {
                                    t(e)
                                }).catch(e)
                            })
                        },
                        getCssClass: function(e) {
                            return i.Z.getCssClass(e)
                        },
                        reloadThumbnailImage: function(n, r, a) {
                            return e(function(t, e) {
                                i.Z.reloadThumbnailImage(n, r, a).then(function(e) {
                                    t(e)
                                }).catch(e)
                            })
                        }
                    }
                }
                r.$inject = ["$q"], n.Z.factory("thumbnailService", r), t.default = r
            },
            1214: function(e, t, n) {
                "use strict";
                var r = n(5734),
                    r = n.n(r)().module("thumbnails", ["robloxApp", "thumbnailsTemplates", "angularLazyImg"]);
                t.Z = r
            },
            9050: function() {
                angular.module("angularLazyImg", []).factory("LazyImgMagic", ["$window", "$rootScope", "lazyImgConfig", "lazyImgHelpers", function(e, r, t, n) {
                    "use strict";
                    var a, i, o, u, s, l, c, m;

                    function f() {
                        for (var e = o.length - 1; 0 <= e; e--) {
                            var t = o[e];
                            t && n.isElementInView(t.$elem[0], s.offset, a) && (function(n) {
                                var e = new Image;
                                e.onerror = function() {
                                    s.errorClass && n.$elem.addClass(s.errorClass), r.$emit("lazyImg:error", n), s.onError(n)
                                }, e.onload = function() {
                                    var e, t;
                                    e = n.$elem, t = n.src, "img" === e[0].nodeName.toLowerCase() ? e[0].src = t : e.css("background-image", 'url("' + t + '")'), n.$elem.removeClass(s.loadingClass), s.successClass && n.$elem.addClass(s.successClass), r.$emit("lazyImg:success", n), s.onSuccess(n)
                                }, e.src = n.src
                            }(t), o.splice(e, 1))
                        }
                        0 === o.length && b()
                    }

                    function h(t) {
                        m.forEach(function(e) {
                            e[t]("scroll", l), e[t]("touchmove", l)
                        }), i[t]("resize", l), i[t]("resize", c)
                    }

                    function d() {
                        u = !0, setTimeout(function() {
                            f(), h("on")
                        }, 1)
                    }

                    function b() {
                        u = !1, h("off")
                    }

                    function p(e) {
                        e.addClass(s.loadingClass), this.$elem = e
                    }
                    return u = !(o = []), s = t.getOptions(), i = angular.element(e), a = n.getWinDimensions(), c = n.throttle(function() {
                        a = n.getWinDimensions()
                    }, 60), m = [s.container || i], l = n.throttle(f, 30), p.prototype.setSource = function(e) {
                        this.src = e, o.unshift(this), u || d()
                    }, p.prototype.removeImage = function() {
                        var e;
                        e = this, -1 !== (e = o.indexOf(e)) && o.splice(e, 1), 0 === o.length && b()
                    }, p.prototype.checkImages = function() {
                        f()
                    }, p.addContainer = function(e) {
                        b(), m.push(e), d()
                    }, p.removeContainer = function(e) {
                        b(), m.splice(m.indexOf(e), 1), d()
                    }, p
                }]).provider("lazyImgConfig", function() {
                    "use strict";
                    this.options = {
                        offset: 100,
                        errorClass: null,
                        successClass: null,
                        onError: function() {},
                        onSuccess: function() {},
                        loadingClass: "icon-placeholder-game"
                    }, this.$get = function() {
                        var e = this.options;
                        return {
                            getOptions: function() {
                                return e
                            }
                        }
                    }, this.setOptions = function(e) {
                        angular.extend(this.options, e)
                    }
                }).factory("lazyImgHelpers", ["$window", function(e) {
                    "use strict";
                    return {
                        isElementInView: function(e, t, n) {
                            var r = e.getBoundingClientRect(),
                                a = n.height + t;
                            return e.offsetParent && 0 <= r.left && r.right <= n.width + t && (0 <= r.top && r.top <= a || r.bottom <= a && r.bottom >= 0 - t)
                        },
                        getWinDimensions: function() {
                            return {
                                height: e.innerHeight,
                                width: e.innerWidth
                            }
                        },
                        throttle: function(r, a, i) {
                            var o, u;
                            return function() {
                                var e = i || this,
                                    t = +new Date,
                                    n = arguments;
                                o && t < o + a ? (clearTimeout(u), u = setTimeout(function() {
                                    o = t, r.apply(e, n)
                                }, a)) : (o = t, r.apply(e, n))
                            }
                        }
                    }
                }]).directive("lazyImg", ["$rootScope", "LazyImgMagic", function(a, i) {
                    "use strict";
                    return {
                        link: function(e, t, n) {
                            var r = new i(t);
                            n.$observe("lazyImg", function(e) {
                                e && r.setSource(e)
                            }), e.$on("$destroy", function() {
                                r.removeImage()
                            }), a.$on("lazyImg.runCheck", function() {
                                r.checkImages()
                            }), a.$on("lazyImg:refresh", function() {
                                r.checkImages()
                            })
                        },
                        restrict: "A"
                    }
                }]).directive("lazyImgContainer", ["LazyImgMagic", function(n) {
                    "use strict";
                    return {
                        link: function(e, t) {
                            n.addContainer(t), e.$on("$destroy", function() {
                                n.removeContainer(t)
                            })
                        },
                        restrict: "A"
                    }
                }])
            },
            5145: function(e, t, n) {
                var r;

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
                    var o = {}.hasOwnProperty;

                    function u() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var r = s(n);
                                if ("string" === r || "number" === r) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var a = u.apply(null, n);
                                    a && e.push(a)
                                } else if ("object" === r)
                                    for (var i in n) o.call(n, i) && n[i] && e.push(i)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (u.default = u, e.exports = u) : "object" === s(n.amdO) && n.amdO ? void 0 === (r = function() {
                        return u
                    }.apply(t, [])) || (e.exports = r) : window.classNames = u
                }()
            },
            6103: function(e) {
                e.exports = '<span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="{{ $ctrl.thumbnailType }}" thumbnail-target-id="{{ $ctrl.thumbnailTargetId }}"> <img ng-if="$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()" ng-src="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed" ng-class="{\'loading\': $ctrl.thumbnailUrl && !isLoaded }" image-load alt="{{$ctrl.altName}}" title="{{$ctrl.altName}}"/> <img ng-if="$ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled()" lazy-img="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed"/> </span> '
            },
            8613: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
                    BatchRequestError: function() {
                        return r
                    },
                    DEFAULT_META_DATA: function() {
                        return E
                    },
                    DefaultBatchSize: function() {
                        return s
                    },
                    DefaultThumbnailFormat: function() {
                        return I
                    },
                    DefaultThumbnailSize: function() {
                        return S
                    },
                    FeatureName: function() {
                        return w
                    },
                    LoadFailureMetricsType: function() {
                        return z
                    },
                    LoadFailureName: function() {
                        return A
                    },
                    LoadSuccessMetricsType: function() {
                        return O
                    },
                    LoadSuccessName: function() {
                        return x
                    },
                    ReturnPolicy: function() {
                        return C
                    },
                    RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum: function() {
                        return a
                    },
                    ThumbnailAssetsSize: function() {
                        return m
                    },
                    ThumbnailAvatarHeadshotSize: function() {
                        return h
                    },
                    ThumbnailAvatarsSize: function() {
                        return f
                    },
                    ThumbnailBadgeIconSize: function() {
                        return b
                    },
                    ThumbnailCooldown: function() {
                        return u
                    },
                    ThumbnailDeveloperProductIconSize: function() {
                        return p
                    },
                    ThumbnailFormat: function() {
                        return v
                    },
                    ThumbnailGameIconSize: function() {
                        return l
                    },
                    ThumbnailGamePassIconSize: function() {
                        return c
                    },
                    ThumbnailGameThumbnailSize: function() {
                        return g
                    },
                    ThumbnailGroupIconSize: function() {
                        return d
                    },
                    ThumbnailMetadataUrl: function() {
                        return o
                    },
                    ThumbnailStates: function() {
                        return T
                    },
                    ThumbnailTypes: function() {
                        return i
                    },
                    ThumbnailUniverseThumbnailSize: function() {
                        return y
                    }
                });
                var r, a, i, o = Roblox.EnvironmentUrls.thumbnailsApi + "/v1/metadata";
                (t = r = r || {}).processFailure = "processFailure", t.unretriableFailure = "unretriableFailure", t.maxAttemptsReached = "maxAttemptsReached", (t = a = a || {}).Avatar = "Avatar", t.AvatarHeadShot = "AvatarHeadShot", t.GameIcon = "GameIcon", t.BadgeIcon = "BadgeIcon", t.GameThumbnail = "GameThumbnail", t.GamePass = "GamePass", t.Asset = "Asset", t.BundleThumbnail = "BundleThumbnail", t.Outfit = "Outfit", t.GroupIcon = "GroupIcon", t.DeveloperProduct = "DeveloperProduct", t.PlaceIcon = "PlaceIcon", (t = i = i || {}).avatar = "Avatar", t.avatarHeadshot = "AvatarHeadshot", t.gameIcon = "GameIcon", t.badgeIcon = "BadgeIcon", t.gamePassIcon = "GamePass", t.assetThumbnail = "Asset", t.bundleThumbnail = "BundleThumbnail", t.userOutfit = "Outfit", t.groupIcon = "GroupIcon", t.developerProductIcon = "DeveloperProduct", t.universeThumbnail = "UniverseThumbnail", t.universeThumbnails = "UniverseThumbnails", t.placeGameIcon = "PlaceGameIcon";
                var u, s = 100;
                (t = u = u || {})[t.maxRetryAttempts = 10] = "maxRetryAttempts", t[t.minCooldown = 1e3] = "minCooldown", t[t.maxCooldown = 3e4] = "maxCooldown";
                var l, c, m, f, h, d, b, p, g, y, T, v, C, S = "150x150",
                    I = "png";
                (t = l = l || {}).size50 = "50x50", t.size150 = "150x150", t.size512 = "512x512", (c = c || {}).size150 = "150x150", (t = m = m || {}).size150 = "150x150", t.size420 = "420x420", (t = f = f || {}).size100 = "100x100", t.size352 = "352x352", t.size720 = "720x720", (t = h = h || {}).size48 = "48x48", t.size60 = "60x60", t.size150 = "150x150", (t = d = d || {}).size150 = "150x150", t.size420 = "420x420", (b = b || {}).size150 = "150x150", (p = p || {}).size150 = "150x150", (t = g = g || {}).width768 = "768x432", t.width576 = "576x324", t.width480 = "480x270", t.width384 = "384x216", t.width256 = "256x144", (t = y = y || {}).width768 = "768x432", t.width576 = "576x324", t.width480 = "480x270", t.width384 = "384x216", t.width256 = "256x144", (t = T = T || {}).error = "Error", t.complete = "Completed", t.inReview = "InReview", t.pending = "Pending", t.blocked = "Blocked", (t = v = v || {}).png = "png", t.jpg = "jpg", t.jpeg = "jpeg", (t = C = C || {}).PlaceHolder = "PlaceHolder", t.AutoGenerated = "AutoGenerated", t.ForceAutoGenerated = "ForceAutoGenerated";
                var w = "Thumbnail2DWeb",
                    x = "LoadSuccess",
                    O = "Sequence",
                    A = "LoadFailure",
                    z = "Counter",
                    E = {
                        thumbnailMetricsSampleSize: 10,
                        isWebappUseCacheEnabled: !1,
                        webappCacheExpirationTimespan: "00:00:00",
                        requestMinCooldown: 1e3,
                        requestMaxCooldown: 3e3,
                        requestMaxRetryAttempts: 5,
                        requestBatchSize: 100,
                        concurrentThumbnailRequestCount: 1
                    }
            },
            1079: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return O
                    }
                });
                var r = CoreUtilities,
                    i = CoreRobloxUtilities,
                    u = n(8613);
                var t = function() {
                        var e = null === (e = document.getElementsByName("thumbnail-meta-data")[0]) || void 0 === e ? void 0 : e.dataset;
                        return e ? {
                            thumbnailMetricsSampleSize: parseInt(e.thumbnailMetricsSampleSize, 10),
                            isWebappUseCacheEnabled: "True" === e.isWebappCacheEnabled,
                            webappCacheExpirationTimespan: e.webappCacheExpirationsTimespan,
                            requestMinCooldown: parseInt(e.requestMinCooldown, 10),
                            requestMaxCooldown: parseInt(e.requestMaxCooldown, 10),
                            requestMaxRetryAttempts: parseInt(e.requestMaxRetryAttempts, 10),
                            requestBatchSize: parseInt(e.requestBatchSize, 10),
                            concurrentThumbnailRequestCount: parseInt(e.concurrentThumbnailRequestCount, 10)
                        } : u.DEFAULT_META_DATA
                    },
                    a = ((n = {})[u.ThumbnailTypes.avatar] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Avatar, n[u.ThumbnailTypes.avatarHeadshot] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.AvatarHeadShot, n[u.ThumbnailTypes.gameIcon] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GameIcon, n[u.ThumbnailTypes.badgeIcon] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BadgeIcon, n[u.ThumbnailTypes.gamePassIcon] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GamePass, n[u.ThumbnailTypes.assetThumbnail] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Asset, n[u.ThumbnailTypes.bundleThumbnail] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BundleThumbnail, n[u.ThumbnailTypes.userOutfit] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Outfit, n[u.ThumbnailTypes.groupIcon] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GroupIcon, n[u.ThumbnailTypes.placeGameIcon] = u.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.PlaceIcon, n);

                function o(e) {
                    e = e.split(":");
                    return 1e3 * (60 * parseInt(e[0], 10) * 60 + 60 * parseInt(e[1], 10) + parseInt(e[2], 10))
                }
                var n = function(e) {
                        return a[e]
                    },
                    s = t,
                    l = function(e, t) {
                        return t ? {
                            getFailureCooldown: e.createExponentialBackoffCooldown(t.requestMinCooldown, t.requestMaxCooldown),
                            maxRetryAttempts: t.requestMaxRetryAttempts,
                            batchSize: t.requestBatchSize,
                            concurrentRequestCount: t.concurrentThumbnailRequestCount,
                            debugMode: !0
                        } : {
                            getFailureCooldown: e.createExponentialBackoffCooldown(u.ThumbnailCooldown.minCooldown, u.ThumbnailCooldown.maxCooldown),
                            maxRetryAttempts: u.ThumbnailCooldown.maxRetryAttempts,
                            batchSize: u.DefaultBatchSize,
                            debugMode: !0
                        }
                    },
                    c = function(e) {
                        return e ? {
                            useCache: e.isWebappUseCacheEnabled,
                            expirationWindowMS: o(e.webappCacheExpirationTimespan)
                        } : null
                    },
                    m = function(e) {
                        return !e || (e = e.thumbnailMetricsSampleSize, Math.floor(100 * Math.random()) <= e)
                    },
                    f = new r.BatchRequestFactory,
                    h = {};

                function d(e) {
                    var t = e.targetId,
                        n = e.type,
                        r = e.size,
                        a = e.format,
                        e = e.isCircular;
                    return t.toString() + ":" + n + ":" + r + ":" + a + ":" + (e ? "circular" : "regular")
                }

                function b(e) {
                    var t = e.type,
                        n = e.targetId;
                    return t === u.ThumbnailTypes.universeThumbnail || t === u.ThumbnailTypes.universeThumbnails ? n.toString() : d(e)
                }
                var r = function(e, t, n, r) {
                        void 0 === n && (n = d(e));
                        var a = s(),
                            n = function(e, t, n) {
                                if (t in h) return h[t];
                                n = f.createRequestProcessor(e, b, l(f, n));
                                return h[t] = n
                            }(t, n, a);
                        return r && n.invalidateItem(e), r = c(a), n.queueItem(e, null, r).then(function(e) {
                            var t;
                            return i.metricsService && e.performance && m(a) && (t = e.performance.duration, i.metricsService.logMeasurement({
                                featureName: u.FeatureName,
                                measureName: u.LoadSuccessName,
                                metricsType: u.LoadSuccessMetricsType,
                                excludeCountry: !0,
                                value: t
                            }).catch(console.debug)), e
                        }).catch(function(e) {
                            return console.debug({
                                error: e
                            }), i.metricsService && m(a) && e === u.BatchRequestError.maxAttemptsReached && i.metricsService.logMeasurement({
                                featureName: u.FeatureName,
                                measureName: u.LoadFailureName,
                                metricsType: u.LoadFailureMetricsType,
                                excludeCountry: !0
                            }).catch(console.debug), Promise.reject(e)
                        })
                    },
                    p = function() {
                        return (p = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                            return e
                        }).apply(this, arguments)
                    },
                    g = function(e, t) {
                        var n = {};
                        for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                        return n
                    },
                    y = n,
                    T = i.dataStores.thumbnailsDataStore,
                    v = i.dataStores.gameThumbnailsDataStore,
                    n = (C.prototype.handle = function(a, i) {
                        var o = this;
                        return new Promise(function(t) {
                            o.storeInstance(a, i).then(function(e) {
                                var n = new Map,
                                    r = {};
                                (null !== (e = null === (e = null == e ? void 0 : e.data) || void 0 === e ? void 0 : e.data) && void 0 !== e ? e : new Array).forEach(function(e) {
                                    n.set(o.keySetter(e), e)
                                }), a.forEach(function(e) {
                                    var t, e = o.keyGetter(e);
                                    n.has(e) ? (t = n.get(e), o.validator(t) && (r[e] = o.resultSetter(t, i))) : (t = {}, t = 1 < i ? {
                                        thumbnails: []
                                    } : {
                                        thumbnail: {
                                            targetId: e,
                                            state: u.ThumbnailStates.error
                                        }
                                    }, r[e] = p(p({}, t), {
                                        errorcode: 3,
                                        errorMessage: "id doesn't exist"
                                    }))
                                }), t(r)
                            }).catch(function() {
                                t({})
                            })
                        })
                    }, C);

                function C(e, t, n, r, a) {
                    this.storeInstance = e, this.keySetter = t, this.keyGetter = n, this.validator = r, this.resultSetter = a
                }

                function S(t, e, n, r, a) {
                    return void 0 === r && (r = u.ThumbnailFormat.jpeg), e ? t ? (r = {
                        targetId: e,
                        type: t,
                        format: r,
                        size: n
                    }, n = [u.ThumbnailTypes.universeThumbnails, u.ThumbnailTypes.universeThumbnail].includes(t) ? null : "thumbnail2dProcessor", x(r, function(e) {
                        return t === u.ThumbnailTypes.universeThumbnail ? w.handle(e, 1) : t === u.ThumbnailTypes.universeThumbnails ? w.handle(e, 10) : I.handle(e)
                    }, n, a)) : new Promise(function(e, t) {
                        t(new Error("ThumbnailType can not be empty."))
                    }) : new Promise(function(e, t) {
                        t(new Error("TargetId can not be empty."))
                    })
                }
                var n = {
                        batchRequestHandler: new n(function(e) {
                            var n = e.map(function(e) {
                                var t = e.data,
                                    n = t.type,
                                    t = g(t, ["type"]),
                                    e = e.key;
                                return p({
                                    requestId: e,
                                    type: y(n)
                                }, t)
                            });
                            return new Promise(function(e, t) {
                                T.getBatchThumbnails(n).then(e).catch(t)
                            })
                        }, function(e) {
                            return e.requestId
                        }, function(e) {
                            return e.key
                        }, function(e) {
                            return e.state !== u.ThumbnailStates.pending
                        }, function(e) {
                            return {
                                thumbnail: e
                            }
                        }),
                        universeThumbnailHandler: new n(function(r, a) {
                            return new Promise(function(e, t) {
                                var n;
                                v.getAllUniverseThumbnails(r.map(function(e) {
                                    return e.data.targetId
                                }), null === (n = r[0]) || void 0 === n ? void 0 : n.data.size, null === (n = r[0]) || void 0 === n ? void 0 : n.data.format, null === (n = r[0]) || void 0 === n ? void 0 : n.data.isCircular, a).then(e).catch(t)
                            })
                        }, function(e) {
                            return e.universeId.toString()
                        }, function(e) {
                            return e.data.targetId.toString()
                        }, function(e) {
                            return !e.error
                        }, function(e, t) {
                            return 1 === t ? {
                                thumbnail: e.thumbnails[0]
                            } : {
                                thumbnails: e.thumbnails
                            }
                        })
                    },
                    I = n.batchRequestHandler,
                    w = n.universeThumbnailHandler,
                    x = r,
                    O = (null === (r = window.RobloxThumbnails) || void 0 === r ? void 0 : r.thumbnailService) || {
                        getThumbnailImage: function(e, t, n, r) {
                            return void 0 === r && (r = u.ThumbnailFormat.jpeg), S(e, t, n, r, !1)
                        },
                        getCssClass: function(e) {
                            return {
                                "icon-broken": e === u.ThumbnailStates.error,
                                "icon-in-review": e === u.ThumbnailStates.inReview,
                                "icon-blocked": e === u.ThumbnailStates.blocked,
                                "icon-pending": e === u.ThumbnailStates.pending
                            }
                        },
                        reloadThumbnailImage: function(e, t, n, r) {
                            return void 0 === r && (r = u.ThumbnailFormat.jpeg), S(e, t, n, r, !0)
                        }
                    }
            },
            5734: function(e) {
                "use strict";
                e.exports = angular
            }
        },
        r = {};

    function h(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, h), t.exports
    }
    h.amdO = {}, h.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return h.d(t, {
                a: t
            }), t
        }, h.d = function(e, t) {
            for (var n in t) h.o(t, n) && !h.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, h.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, h.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var e = h(5734),
                t = h.n(e),
                n = h(726),
                r = h(8613),
                T = React,
                v = h.n(T),
                a = h(5145),
                C = h.n(a),
                e = PropTypes,
                a = h.n(e),
                S = h(1079);

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e) {
                var t = e.onLoad,
                    n = e.errorIconClass,
                    r = e.thumbnailUrl,
                    a = e.imgClassName,
                    i = e.containerClass,
                    o = e.altName,
                    e = C()("thumbnail-2d-container", n, i),
                    n = s((0, T.useState)(C()(a, "loading")), 2),
                    i = n[0],
                    u = n[1];
                (0, T.useEffect)(function() {
                    null === r && u(C()(a, "loading"))
                }, [r, a]);
                return v().createElement("span", {
                    className: e
                }, r && v().createElement("img", {
                    className: i,
                    src: r,
                    alt: o,
                    title: o,
                    onLoad: function() {
                        t(), u(a)
                    }
                }))
            }
            o.defaultProps = {
                errorIconClass: "",
                thumbnailUrl: "",
                imgClassName: "",
                containerClass: "",
                altName: "",
                onLoad: function() {}
            }, o.propTypes = {
                errorIconClass: a().string,
                thumbnailUrl: a().string,
                imgClassName: a().string,
                containerClass: a().string,
                altName: a().string,
                onLoad: a().func
            };
            var I = o;

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e) {
                var t = e.type,
                    r = e.targetId,
                    a = e.size,
                    n = e.imgClassName,
                    i = e.containerClass,
                    o = e.format,
                    u = e.altName,
                    s = e.onLoad,
                    l = b((0, T.useState)(null), 2),
                    c = l[0],
                    m = l[1],
                    f = b((0, T.useState)(null), 2),
                    e = f[0],
                    h = f[1],
                    l = C()(S.Z.getCssClass(c)),
                    f = b((0, T.useState)("shimmer"), 2),
                    c = f[0],
                    d = f[1];
                return (0, T.useEffect)(function() {
                    d("shimmer"), m(null), h(null);
                    var n = !1;
                    return S.Z.getThumbnailImage(t, r, a, o).then(function(e) {
                            var t = e.thumbnail,
                                e = t.state,
                                t = t.imageUrl;
                            n || (m(e), h(t), d(""))
                        }).catch(function(e) {
                            console.debug(e), n || d("")
                        }),
                        function() {
                            n = !0
                        }
                }, [t, r, a, n]), v().createElement(I, {
                    thumbnailUrl: e,
                    errorIconClass: l,
                    imgClassName: n,
                    altName: u,
                    onLoad: s,
                    containerClass: C()(c, i)
                })
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e) {
                function n() {
                    var e = (e = g) >= c.length - 1 ? 0 : e + 1;
                    y(e)
                }
                var r = e.type,
                    a = e.targetId,
                    i = e.size,
                    t = e.imgClassName,
                    o = e.containerClass,
                    u = e.format,
                    s = e.altName,
                    l = w((0, T.useState)(null), 2),
                    c = l[0],
                    m = l[1],
                    f = w((0, T.useState)(null), 2),
                    h = f[0],
                    d = f[1],
                    e = w((0, T.useState)(null), 2),
                    l = e[0],
                    b = e[1],
                    f = w((0, T.useState)("shimmer"), 2),
                    e = f[0],
                    p = f[1],
                    f = w((0, T.useState)(0), 2),
                    g = f[0],
                    y = f[1];
                return (0, T.useEffect)(function() {
                    var e, t;
                    return c && (t = c[g], d(t.state), b(t.imageUrl), p(""), e = setInterval(n, 4e3)),
                        function() {
                            clearInterval(e)
                        }
                }, [c, g]), (0, T.useEffect)(function() {
                    var t = !1;
                    return S.Z.getThumbnailImage(r, a, i, u).then(function(e) {
                            t || m(e.thumbnails)
                        }).catch(function() {
                            t || p("")
                        }),
                        function() {
                            t = !0
                        }
                }, [r, a, i, t, u]), v().createElement(I, {
                    thumbnailUrl: l,
                    errorIconClass: C()(S.Z.getCssClass(h)),
                    imgClassName: t,
                    altName: s,
                    containerClass: C()(e, o)
                })
            }

            function f(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }
            l.defaultProps = {
                size: "150x150",
                imgClassName: "",
                containerClass: "",
                format: "png",
                altName: "",
                onLoad: function() {}
            }, l.propTypes = {
                type: a().string.isRequired,
                targetId: a().number.isRequired,
                size: a().string,
                format: a().string,
                imgClassName: a().string,
                containerClass: a().string,
                altName: a().string,
                onLoad: a().func
            }, e = l, m.defaultProps = {
                size: "576x324",
                imgClassName: "",
                containerClass: "",
                format: "png",
                altName: ""
            }, m.propTypes = {
                type: a().string.isRequired,
                targetId: a().number.isRequired,
                size: a().string,
                format: a().string,
                imgClassName: a().string,
                containerClass: a().string,
                altName: a().string
            }, a = m, h(9050), h(1214), window.RobloxThumbnails = function(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }({
                Thumbnail2d: e,
                Thumbnail2dCarouselContainer: a,
                thumbnailService: S.Z
            }, r), (0, n.importFilesUnderPath)(h(907)), (0, n.importFilesUnderPath)(h(9441)), (0, n.importFilesUnderPath)(h(6297)), (0, n.importFilesUnderPath)(h(6484)), (0, n.importFilesUnderPath)(h(9044)), r = h(2671), (0, n.templateCacheGenerator)(t(), "thumbnailsTemplates", r, null)
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/fcfdbf4d4f49292ad7c9-thumbnails.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails");