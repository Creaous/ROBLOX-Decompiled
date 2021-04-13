! function() {
    "use strict";
    var a = {
            n: function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return a.d(n, {
                    a: n
                }), n
            },
            d: function(e, n) {
                for (var t in n) a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n[t]
                })
            },
            o: function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
        },
        e = jQuery,
        c = a.n(e),
        s = Roblox;

    function t(e) {
        var n = new(c().Deferred);
        return s.Hybrid.Game.launchGame(e, function() {
            n.resolve(e)
        }), n
    }
    var n, o, r = {
            joinMultiplayerGame: function(e) {
                var n = !0 === e.isPlayTogetherGame;
                return t({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                    placeId: e.placeId.toString(),
                    isPlayTogetherGame: n,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            followPlayerIntoGame: function(e) {
                return t({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.FOLLOW_USER,
                    userId: e.userId.toString(),
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            joinGameInstance: function(e) {
                var n = !0 === e.isPlayTogetherGame;
                return t({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.GAME_INSTANCE,
                    placeId: e.placeId.toString(),
                    instanceId: e.gameId,
                    isPlayTogetherGame: n,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            joinPrivateGame: function(e) {
                return t({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.PRIVATE_SERVER,
                    placeId: e.placeId.toString(),
                    accessCode: e.accessCode,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            playTogetherGame: function(e) {
                return t({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                    placeId: e.placeId.toString(),
                    conversationId: e.conversationId.toString(),
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            }
        },
        i = {
            modalClassName: "soli-modal",
            loginUrl: "/login?returnurl=",
            signupUrl: "/?returnurl=",
            eventContext: "gameDetails",
            loginField: "gameLaunch_login",
            signupField: "gameLaunch_signup"
        };
    c()(document).ready(function() {
        n = new s.TranslationResourceProvider, o = n.getTranslationResource("Feature.GameLaunchGuestMode")
    });
    var l = {
            restrictGuests: function(e) {
                var n = new(c().Deferred);
                return "True" === c()("#PlaceLauncherStatusPanel").data("is-user-logged-in") ? n.resolve(e) : s.Dialog.open({
                    titleText: o.get("Heading.Dialog.SignUpOrLogin"),
                    bodyContent: o.get("Description.Dialog.SignUpOrLogin"),
                    cssClass: i.modalClassName,
                    acceptColor: s.Dialog.green,
                    acceptText: o.get("Action.Dialog.SignUp"),
                    declineText: o.get("Action.Dialog.Login"),
                    onDecline: function() {
                        s.FormEvents && s.FormEvents.SendInteractionClick(i.eventContext, i.loginField);
                        var e = i.loginUrl + encodeURIComponent(window.location.pathname + window.location.search);
                        window.location.href = s.Endpoints ? s.Endpoints.getAbsoluteUrl(e) : e
                    },
                    onAccept: function() {
                        var e;
                        e = i.signupField, s.FormEvents && s.FormEvents.SendInteractionClick("gameDetails", e), e = i.signupUrl + encodeURIComponent(window.location.pathname + window.location.search), window.location.href = s.Endpoints ? s.Endpoints.getAbsoluteUrl(e) : e
                    }
                }), n
            }
        },
        d = {
            bars: [],
            init: function(e, n, t, a) {
                var o = this.get(e);
                null == o && (o = {}), o.barID = e, o.innerBarID = n, o.percentageID = t, void 0 === a && (o.percentComplete = 0), this.bars.push(o), this.update(e, o.percentComplete)
            },
            get: function(e) {
                for (var n = 0; n < this.bars.length; n += 1)
                    if (this.bars[n].barID === e) return this.bars[n];
                return null
            },
            dispose: function(e) {
                for (var n = 0; n < this.bars.length; n += 1) this.bars[n].barID === e && this.bars.splice(n, 1)
            },
            update: function(e, n) {
                var t = this.get(e);
                t && (1 < n && (n = 1), e = c()("#".concat(e)).width(), e = Math.round(e * n), c()("#".concat(t.innerBarID)).animate({
                    width: e
                }, 200, "swing"), t.percentageID && 0 < c()("#".concat(t.percentageID)).length && c()("#".concat(t.percentageID)).html("".concat(Math.round(100 * n), "%")), t.percentComplete = n)
            }
        },
        u = {
            newValue: "",
            showVideoPreRoll: !1,
            videoInitialized: !1,
            videoStarted: !1,
            videoCompleted: !1,
            videoSkipped: !1,
            videoCancelled: !1,
            videoErrored: !1,
            loadingBarMaxTime: 3e4,
            loadingBarCurrentTime: 0,
            loadingBarIntervalID: 0,
            loadingBarID: "videoPrerollLoadingBar",
            loadingBarInnerID: "videoPrerollLoadingBarCompleted",
            loadingBarPercentageID: "videoPrerollLoadingPercent",
            videoDiv: "videoPrerollMainDiv",
            companionAdDiv: "videoPrerollCompanionAd",
            contentElement: "contentElement",
            videoLoadingTimeout: 7e3,
            videoPlayingTimeout: 23e3,
            videoLogNote: "",
            logsEnabled: !1,
            includedPlaceIds: "",
            isSwfPreloaderEnabled: !1,
            isFlashInstalled: !1,
            isPrerollShownEveryXMinutesEnabled: !1,
            isAgeTargetingEnabled: !0,
            isAgeOrSegmentTargetingEnabled: !1,
            adUnit: "",
            adTime: 0,
            placeId: 0,
            customTargeting: {
                userAge: "",
                userAgeOrSegment: "",
                userGender: "",
                gameGenres: "",
                environment: "",
                adTime: "",
                PLVU: !1
            },
            adsManager: null,
            adsLoader: null,
            adDisplayContainer: null,
            intervalTimer: null,
            videoContent: null,
            isCompanionAdRenderedByGoogleTag: !1
        };

    function p() {
        u.adsLoader.contentComplete()
    }

    function m() {
        u.videoContent = document.getElementById(u.contentElement)
    }

    function g() {
        u.adDisplayContainer = new window.google.ima.AdDisplayContainer(document.getElementById(u.videoDiv), u.videoContent)
    }

    function v() {
        var e = "&iu=".concat(u.adUnit),
            n = "";
        u.isAgeTargetingEnabled && (n += "&Age=".concat(u.customTargeting.userAge)), u.isAgeOrSegmentTargetingEnabled && (n += "&A=".concat(u.customTargeting.userAgeOrSegment));
        n = encodeURIComponent("Env=".concat(u.customTargeting.environment, "&Gender=").concat(u.customTargeting.userGender).concat(n, "&Genres=").concat(u.customTargeting.gameGenres, "&PlaceID=").concat(u.placeId, "&Time=").concat(u.customTargeting.adTime, "&PLVU=").concat(u.customTargeting.PLVU));
        return "".concat("http://pubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]").concat("&sz=400x300").concat(e).concat("&ciu_szs=300x250", "&cust_params=").concat(n, "&")
    }

    function h() {
        window.googletag.defineSlot(u.adUnit, [300, 250], u.companionAdDiv).addService(window.googletag.companionAds()), window.googletag.enableServices(), window.googletag.display(u.companionAdDiv)
    }

    function f(e) {
        switch (e.type) {
            case window.google.ima.AdEvent.Type.LOADED:
                break;
            case window.google.ima.AdEvent.Type.STARTED:
                if (u.videoStarted = !0, u.isCompanionAdRenderedBywindow.googletag) {
                    if (!window.googletag) break;
                    window.googletag.cmd.push(h)
                } else {
                    var n = e.getAd().getCompanionAds(300, 250);
                    0 < n.length && (n = n[0].getContent(), document.getElementById(u.companionAdDiv).innerHTML = n)
                }
                break;
            case window.google.ima.AdEvent.Type.SKIPPED:
                u.videoCompleted = !0, u.videoSkipped = !0, u.showVideoPreRoll = !1;
                break;
            case window.google.ima.AdEvent.Type.COMPLETE:
                u.videoStarted && !1 === u.videoCancelled && (u.videoCompleted = !0, u.showVideoPreRoll = !1, "" !== u.newValue && c().cookie("RBXVPR", u.newValue, 180))
        }
    }

    function w() {
        u.videoErrored = !0, u.videoCompleted = !0, u.videoLogNote = "AdError"
    }

    function b(e) {
        u.adsManager = e.getAdsManager(u.videoContent), u.adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, w), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.LOADED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.SKIPPED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, f);
        try {
            u.adsManager.init(400, 300, window.google.ima.ViewMode.NORMAL), u.adsManager.start()
        } catch (e) {
            w()
        }
    }

    function I() {
        window.google.ima.settings.setVpaidAllowed(!0), m(), g(), u.adDisplayContainer.initialize(), u.adsLoader = new window.google.ima.AdsLoader(u.adDisplayContainer), u.adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, b, !1), u.adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, w, !1), u.videoContent.addEventListener("ended", p);
        var e = new window.google.ima.AdsRequest,
            n = v();
        e.adTagUrl = n, e.linearAdSlotWidth = 400, e.linearAdSlotHeight = 300, e.nonLinearAdSlotWidth = 400, e.nonLinearAdSlotHeight = 300, u.adsLoader.requestAds(e)
    }

    function y() {
        var n = !1;
        try {
            new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (n = !0)
        } catch (e) {
            navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (n = !0)
        }
        return n
    }

    function P() {
        if (u.logsEnabled) {
            var e = "";
            if (u.videoCompleted) e = "Complete", "" === u.videoLogNote && (u.videoLogNote = "NoTimeout"), u.logsEnabled = !1;
            else if (u.videoCancelled) e = "Cancelled", u.videoLogNote = window.RobloxLaunch.state;
            else {
                if (!1 !== u.videoInitialized || "" === u.videoLogNote) return;
                e = "Failed", u.logsEnabled = !1
            }
            s.GaEventSettings.gaDFPPreRollEnabled && window.GoogleAnalyticsEvents && window.GoogleAnalyticsEvents.FireEvent(["DFPPreRoll", e, u.videoLogNote])
        }
    }

    function C() {
        return !!u.videoInitialized && (u.videoInitialized && !u.videoStarted && u.loadingBarCurrentTime > u.videoLoadingTimeout && (u.videoCompleted = !0, u.videoLogNote = "LoadingTimeout"), u.videoStarted && !u.videoCompleted && u.loadingBarCurrentTime > u.videoPlayingTimeout && (u.videoCompleted = !0, u.videoLogNote = "PlayingTimeout"), !u.videoCompleted)
    }

    function E() {
        var e = encodeURIComponent(v()),
            e = "adTagUrl=".concat(e);
        c().ajax({
            url: "/game/preloader",
            data: {
                url: e
            },
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        }).success(function(e) {
            c()("#videoPrerollMainDiv").html(e), u.videoErrored || (u.videoStarted = !0)
        })
    }

    function S() {
        c().ajax({
            url: "/game/updateprerollcount",
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        })
    }
    Object.assign(u, {
        contentEndedListener: p,
        createVideoContent: m,
        createAdDisplayContainer: g,
        constructUrl: v,
        renderCompanionAd: h,
        onAdEvent: f,
        onAdError: w,
        onAdsManagerLoaded: b,
        requestAds: I,
        checkFlashEnabled: y,
        checkEligibility: function() {
            u.showVideoPreRoll && (y() && (u.isFlashInstalled = !0), "True" === c()("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") || s.Client.IsRobloxInstalled() ? void 0 === window.google || void 0 === window.google.ima ? (u.videoLogNote = "NoGoogle", u.showVideoPreRoll = !1) : s.Client.isIDE() ? (u.videoLogNote = "RobloxStudio", u.showVideoPreRoll = !1) : s.Client.isRobloxBrowser() ? (u.videoLogNote = "RobloxPlayer", u.showVideoPreRoll = !1) : (window.chrome || window.safari) && "#chromeInstall" === window.location.hash && (u.showVideoPreRoll = !1) : u.showVideoPreRoll = !1)
        },
        logVideoPreRoll: P,
        isPlaying: C,
        correctIEModalPosition: function(e) {
            var n, t;
            e.container.innerHeight() <= 30 && (n = c()("#videoPrerollPanel"), t = -Math.floor(n.innerHeight() / 2), n.css({
                position: "relative",
                top: "".concat(t, "px")
            }), e.container.find(".VprCloseButton").css({
                top: "".concat(t - 10, "px"),
                "z-index": "1003"
            }))
        },
        renderImaPreloader: E,
        updatePrerollCount: S,
        start: function() {
            0 === u.placeId && "undefined" != typeof play_placeId && (u.placeId = play_placeId), u.videoInitialized = !0, u.videoStarted = !1, u.videoCancelled = !1, u.videoCompleted = !1, u.videoSkipped = !1, u.loadingBarCurrentTime = 0, u.videoLogNote = "", d.init(u.loadingBarID, u.loadingBarInnerID, u.loadingBarPercentageID), u.loadingBarIntervalID = setInterval(function() {
                u.loadingBarCurrentTime += 1e3, d.update(u.loadingBarID, u.loadingBarCurrentTime / u.loadingBarMaxTime)
            }, 1e3), (u.isSwfPreloaderEnabled && u.isFlashInstalled ? E : I)()
        },
        cancel: function() {
            u.videoCancelled = !0, c().modal.close()
        },
        skip: function() {
            u.videoCompleted = !0, u.videoSkipped = !0, u.showVideoPreRoll = !1
        },
        close: function() {
            window.MadStatus && window.MadStatus.running && window.MadStatus.stop(""), window.RobloxLaunch.launcher && (window.RobloxLaunch.launcher._cancelled = !0), clearInterval(u.loadingBarIntervalID), d.dispose(u.loadingBarID), C() && (u.videoCancelled = !0), c().modal.close(), P(), u.isPrerollShownEveryXMinutesEnabled && u.videoInitialized && u.videoCompleted && S()
        }
    });
    var L = u,
        T = {
            waitForPreroll: function(e) {
                var n, t, a = new(c().Deferred),
                    o = L;
                return o.placeId = void 0 !== e.placeId ? e.placeId : 0, o.showVideoPreRoll ? (n = {
                    escClose: !0,
                    opacity: 80,
                    overlayCss: {
                        backgroundColor: "#000"
                    },
                    zIndex: 1031,
                    onShow: function(e) {
                        o.correctIEModalPosition(e), o.start(), c()("#prerollClose").hide(), c()("#prerollClose").delay(1e3 * o.adTime).show(300)
                    },
                    onClose: function() {
                        o.close()
                    },
                    closeHTML: '<a href="#" id="prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>'
                }, c()("#videoPrerollPanel").modal(n), t = setInterval(function() {
                    o.isPlaying() || (c().modal.close(), clearInterval(t), o.videoCancelled ? a.reject(e) : a.resolve(e))
                }, 200)) : (a.resolve(e), o.logVideoPreRoll()), a
            }
        };

    function G(e, n, t, a, o, r, i) {
        try {
            var l = e[r](i),
                c = l.value
        } catch (e) {
            return void t(e)
        }
        l.done ? n(c) : Promise.resolve(c).then(a, o)
    }
    var A, D = {
        gameLaunchInterface: null,
        gameLaunchLogger: null,
        initialized: new Promise(function(e, n) {
            A = e
        })
    };

    function R(e, n, t) {
        D.gameLaunchInterface.editGameInStudio(e, n, t)
    }

    function x(e) {
        e = {
            placeId: e,
            isPlayTogetherGame: !0 === (2 < arguments.length ? arguments[2] : void 0)
        };
        return l.restrictGuests(e).then(T.waitForPreroll).then(D.gameLaunchInterface.joinMultiplayerGame)
    }

    function k() {
        var l;
        return l = regeneratorRuntime.mark(function e(n, t, a) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, D.initialized;
                    case 2:
                        return o = {
                            placeId: n,
                            accessCode: t,
                            linkCode: a
                        }, o = T.waitForPreroll(o).then(D.gameLaunchInterface.joinPrivateGame), e.abrupt("return", o);
                    case 5:
                    case "end":
                        return e.stop()
                }
            }, e)
        }), (k = function() {
            var e = this,
                i = arguments;
            return new Promise(function(n, t) {
                var a = l.apply(e, i);

                function o(e) {
                    G(a, n, t, o, r, "next", e)
                }

                function r(e) {
                    G(a, n, t, o, r, "throw", e)
                }
                o(void 0)
            })
        }).apply(this, arguments)
    }
    c().fn.bindGameLaunch = function() {
        return this.find(".VisitButtonPlayGLI").click(function() {
            var e = c()(this);
            x(e.attr("placeid"), e.data("is-membership-level-ok"))
        }), this.find(".VisitButtonEditGLI").click(function() {
            var e = c()(this);
            R(e.attr("placeid"), e.data("universeid"), !!e.data("allowupload"))
        }), this
    }, c()(document).ready(function() {
        c()("body").bindGameLaunch()
    }), Object.assign(D, {
        authenticationChecker: l,
        prerollPlayer: T,
        joinMultiplayerGame: x,
        openStudio: function() {
            D.gameLaunchInterface.openStudio()
        },
        returnToStudio: function() {
            D.gameLaunchInterface.returnToStudio()
        },
        openPluginInStudio: function(e) {
            D.gameLaunchInterface.openPluginInStudio(e)
        },
        editGameInStudio: R,
        followPlayerIntoGame: function(e) {
            return e = {
                userId: e
            }, l.restrictGuests(e).then(T.waitForPreroll).then(D.gameLaunchInterface.followPlayerIntoGame)
        },
        joinGameInstance: function(e, n, t, a) {
            return a = {
                placeId: e,
                gameId: n,
                isPlayTogetherGame: !0 === a
            }, l.restrictGuests(a).then(T.waitForPreroll).then(D.gameLaunchInterface.joinGameInstance)
        },
        joinPrivateGame: function(e, n, t) {
            return k.apply(this, arguments)
        },
        playTogetherGame: function(e, n) {
            return n = {
                placeId: e,
                conversationId: n
            }, l.restrictGuests(n).then(T.waitForPreroll).then(D.gameLaunchInterface.playTogetherGame)
        },
        setGameLaunchInterface: function(e) {
            D.gameLaunchInterface = e, A()
        },
        setGameLaunchLogger: function(e) {
            D.gameLaunchLogger = e
        },
        tryAssetInStudio: function(e) {
            D.gameLaunchInterface.tryAssetInStudio(e)
        },
        startClientAttemptedEvent: "startClientAttempted",
        startClientFailedEvent: "startClientFailed",
        startClientSucceededEvent: "startClientSucceeded",
        beginInstallEvent: "beginInstall",
        successfulInstallEvent: "successfulInstall",
        manualDownloadEvent: "manualDownload"
    });
    var U = D,
        M = {
            lastContext: "unknown",
            contextCategories: {
                joinUser: "JoinUser"
            }
        };

    function B(e, n) {
        var t = c()("#PlaceLauncherStatusPanel");
        return {
            lType: t && t.data("is-protocol-handler-launch-enabled") && "true" === t.data("is-protocol-handler-launch-enabled").toLowerCase() ? "protocol" : "plugin",
            pid: e,
            refuid: n,
            pg: (t = window.location.pathname.toLowerCase(), e = "profile", -1 !== (n = t.lastIndexOf(e)) && t.length === n + e.length ? e : -1 !== t.indexOf("/develop") ? "develop" : "gameDetail")
        }
    }

    function O(e, n, t, a) {
        null !== n && "" !== n && "unknown" !== n && (M.lastContext = n), s.EventStream.SendEvent(e, M.lastContext, B(t, a))
    }
    Object.assign(M, {
        SendGamePlayIntent: function(e, n, t) {
            O("gamePlayIntent", e, n, t), c()(document).trigger("playButton:gamePlayIntent")
        },
        SendDevelopIntent: function(e, n) {
            O("developIntent", e, n)
        },
        SendInstallBegin: function(e, n) {
            O("installBegin", e, n)
        },
        SendInstallSuccess: function(e, n) {
            O("installSuccess", e, n)
        },
        SendClientStartAttempt: function(e, n) {
            O("clientStartAttempt", e, n)
        },
        SendClientStartSuccessWeb: function(e, n) {
            O("clientStartSuccessWeb", e, n)
        },
        SendManualDownloadClick: function(e, n) {
            O("manualDownload", e, n)
        }
    });
    var F = M,
        N = {
            logToConsoleEnabled: !1,
            logToGAEnabled: !0,
            logToEphemeralCountersEnabled: !0
        },
        j = {};
    j[U.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], j[U.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"];
    var V = {};
    s.GaEventSettings.gaLaunchAttemptAndLaunchSuccessEnabled && (V[U.startClientAttemptedEvent] = "Launch Attempt", V[U.startClientSucceededEvent] = "Launch Success"), V[U.beginInstallEvent] = "Install Begin", V[U.successfulInstallEvent] = "Install Success", V[U.manualDownloadEvent] = "Manual Download";
    var H = {};

    function _(e) {
        N.logToConsoleEnabled && console.log(e)
    }

    function q(e, n) {
        var t;
        N.logToEphemeralCountersEnabled && ("Windows" === (t = c()("#PlaceLauncherStatusPanel").data("os-name")) && (t = "Win32"), e = (e = e.replace("<os>", t)).replace("<launchmethod>", n), null !== (n = window.EventTracker) && void 0 !== n && n.fireEvent && window.EventTracker.fireEvent(e))
    }

    function z(e, n, t, a) {
        void 0 !== window.GoogleAnalyticsEvents && N.logToGAEnabled && window.GoogleAnalyticsEvents.FireEvent && window.GoogleAnalyticsEvents.FireEvent([e, n, t, a])
    }

    function W(e, t) {
        _("".concat(e.type, ": ").concat(JSON.stringify(t))), j[e.type] && c().each(j[e.type], function(e, n) {
            q(n, t.launchMethod)
        }), V[e.type] && z(t.launchMethod, V[e.type], t.params.launchMode, 0), "True" === c()("#PlaceLauncherStatusPanel").data("event-stream-for-protocol-enabled") && H[e.type] && H[e.type](null, t.params.placeId)
    }
    H[U.startClientAttemptedEvent] = F.SendClientStartAttempt, H[U.startClientSucceededEvent] = F.SendClientStartSuccessWeb, H[U.beginInstallEvent] = F.SendInstallBegin, H[U.successfulInstallEvent] = F.SendInstallSuccess, H[U.manualDownloadEvent] = F.SendManualDownloadClick, Object.assign(N, {
        logToConsole: _,
        logToEphemeralCounters: q,
        logToGA: z
    }), c()(document).ready(function() {
        var e = [U.startClientAttemptedEvent, U.startClientFailedEvent, U.startClientSucceededEvent, U.beginInstallEvent, U.successfulInstallEvent, U.manualDownloadEvent];
        c()(U).on(e.join(" "), W)
    });
    var J = N,
        X = function() {
            var e = "click";
            c()("body").on(e, ".VisitButtonPlay, .VisitButtonPlayGLI", function() {
                var e, n, t, a, o, r = c()(this);
                (r.hasClass("VisitButtonPlay") || r.hasClass("VisitButtonPlayGLI")) && (e = "PlayButton"), e && (n = c()(this).attr("placeid"), t = c()(this).data("universe-id"), o = c()(this).data("user-id"), a = c()(this).data("originator-type"), r = c()(this).data("originator-id"), "GameUpdateNotification" === a && c().ajax({
                    url: "".concat(s.EnvironmentUrls.notificationApi, "/v2/stream-notifications/game-update-notification-interacted"),
                    type: "POST",
                    data: {
                        universeId: t,
                        createdOn: new Date(r),
                        interactionType: "Played",
                        currentUserId: o
                    }
                }), o = s.UrlParser ? s.UrlParser.getParameterValueByName("rbxp") : null, F.SendGamePlayIntent(e, n, o))
            }), c()("body").on(e, ".VisitButtonEdit, .VisitButtonEditGLI", function() {
                var e = c()(this).attr("placeid");
                F.SendDevelopIntent("Edit", e)
            }), c()("#rbx-running-games").on(e, ".rbx-game-server-item .rbx-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && F.SendGamePlayIntent("JoinInstance", e)
            }), c()("#rbx-friends-running-games").on(e, ".rbx-friends-game-server-item .rbx-friends-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && F.SendGamePlayIntent("JoinInstance", e)
            }), c()("#game-instances").on(e, "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
                var e = c()(this).data("placeid");
                e && F.SendGamePlayIntent("PrivateServer", e)
            }), c()("#build-page").on(e, ".roblox-edit-button", function() {
                var e = c()(this).parents("table.item-table"),
                    e = e.data("rootplace-id") || e.data("item-id");
                e && F.SendDevelopIntent("Edit", e)
            })
        };

    function K(n, e) {
        var t, a = Object.keys(n);
        return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(n), e && (t = t.filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        })), a.push.apply(a, t)), a
    }

    function Y(a) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? K(Object(o), !0).forEach(function(e) {
                var n, t;
                n = a, e = o[t = e], t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : K(Object(o)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return a
    }
    var Q = {
            isInstalling: !1,
            statusInterval: 0,
            robloxLocale: "",
            gameLocale: "",
            protocolUrlSeparator: "+",
            protocolUrlIncludesLaunchTime: !1,
            protocolDetectionEnabled: !1,
            avatarParamEnabled: !0,
            separateScriptParamsEnabled: !1,
            waitTimeBeforeFailure: 300,
            protocolNameForStudio: "roblox-studio",
            protocolNameForClient: "roblox-client",
            logger: null,
            channel: "",
            studioChannel: "",
            playerChannel: ""
        },
        Z = {
            edit: "edit",
            plugin: "plugin",
            play: "play",
            build: "build",
            app: "app",
            asset: "asset"
        };

    function $(e) {
        return e === Z.edit || e === Z.plugin || e === Z.asset
    }

    function ee(e, n) {
        function t() {
            clearTimeout(l), e()
        }
        var a, o, r, i, l = setTimeout(function() {
            c().modal.close(),
                function(e, n) {
                    var t = "True" === s.PlaceLauncher.Resources.RefactorEnabled,
                        a = $(n.launchMode);
                    if (t) {
                        a = a ? s.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.studio : s.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.play;
                        return s.Dialog.open({
                            bodyContent: a.content,
                            allowHtmlContentInBody: !0,
                            showAccept: !0,
                            acceptColor: s.Dialog.green,
                            acceptText: a.buttonText,
                            showDecline: !1,
                            dismissable: !1,
                            xToCancel: !0,
                            footerText: a.footerContent,
                            allowHtmlContentInFooter: !0,
                            onAccept: function() {
                                ge(n)
                            },
                            cssClass: "protocolhandler-are-you-installed-modal"
                        })
                    }
                    c()("#ProtocolHandlerAreYouInstalled").modal({
                        escClose: !0,
                        opacity: 80,
                        overlayCss: {
                            backgroundColor: "#000"
                        },
                        onClose: function() {
                            e(), c()("#ProtocolHandlerInstallButton").off("click"), c().modal.close()
                        },
                        zIndex: 1031
                    }), c()("#ProtocolHandlerInstallButton, #ProtocolHandlerStudioInstallButton").click(function() {
                        ge(n)
                    })
                }(t, n)
        }, 5e3);
        a = t, o = n.launchMode, r = "True" === s.PlaceLauncher.Resources.RefactorEnabled, i = $(o), r ? (o = (i ? s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.studio : s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.play).content, r = s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.loader, s.Dialog.open({
            bodyContent: o + r,
            allowHtmlContentInBody: !0,
            showAccept: !1,
            showDecline: !1,
            dismissable: !1,
            cssClass: "protocolhandler-starting-modal",
            onCloseCallback: a,
            onCancel: function() {
                a(), c().modal.close()
            }
        })) : (i ? c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").addClass("hidden"), c()(this).find(".studio-modal").removeClass("hidden")
        }) : c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").removeClass("hidden"), c()(this).find(".studio-modal").addClass("hidden")
        }), c()("#ProtocolHandlerStartingDialog").modal({
            escClose: !0,
            opacity: 80,
            overlayCss: {
                backgroundColor: "#000"
            },
            onClose: function() {
                a(), c().modal.close()
            },
            zIndex: 1031
        }))
    }

    function ne() {
        c().modal.close(), s.Dialog.open({
            titleText: s.Lang.VisitGameResources["Heading.ErrorStartingGame"],
            bodyContent: s.Lang.VisitGameResources["Response.Dialog.ErrorLaunching"],
            acceptText: s.Lang.ControlsResources["Action.OK"] || "OK",
            showDecline: !1
        })
    }

    function te(n) {
        var t = new(c().Deferred);
        return clearInterval(Q.statusInterval), Q.statusInterval = setInterval(function() {
            var e = s.Endpoints.getAbsoluteUrl("/client-status");
            c().ajax(e, {
                success: function(e) {
                    "Unknown" !== e && (t.resolve(n), clearInterval(Q.statusInterval))
                },
                cache: !1
            })
        }, 3e3), t
    }

    function ae(e) {
        c().modal.close();
        e = {
            launchMethod: "Protocol",
            params: e
        };
        c()(U).trigger(U.startClientSucceededEvent, e), Q.isInstalling && (c()(U).trigger(U.successfulInstallEvent, e), Q.isInstalling = !1)
    }

    function oe(e) {
        return !1
    }

    function re(e) {
        var n;
        Q.protocolDetectionEnabled && void 0 !== navigator.msLaunchUri ? navigator.msLaunchUri(e, function() {}, function() {}) : (0 < (n = c()("iframe#gamelaunch")).length && n.remove(), n = c()("<iframe id='gamelaunch' class='hidden'></iframe>").attr("src", e), c()("body").append(n), n = new Event("ProtocolLaunchStartSelenium"), window.dispatchEvent(n))
    }

    function ie(e) {
        var n, t = new(c().Deferred),
            a = Q.protocolUrlSeparator,
            o = "".concat(e.protocolName, ":"),
            r = [];
        return r.push(1), r.push("launchmode:".concat(e.launchMode)), !e.gameInfo || e.protocolName === Q.protocolNameForStudio && 0 === e.gameInfo.indexOf("Guest:") || r.push("gameinfo:".concat(encodeURIComponent(e.gameInfo))), Q.protocolUrlIncludesLaunchTime && r.push("launchtime:".concat(e.launchTime)), "True" === s.PlaceLauncher.Resources.IsProtocolHandlerBaseUrlParamEnabled && (n = s.EnvironmentUrls.websiteUrl || "https://".concat(window.location.host), r.push("baseUrl:".concat(encodeURIComponent(n)))), c().each(e.otherParams, function(e, n) {
            e === n ? r.push(e) : r.push("".concat(e, ":").concat(encodeURIComponent(n)))
        }), o += r.join(a), U.gameLaunchLogger && U.gameLaunchLogger.logToConsole("launchProtocolUrl: ".concat(JSON.stringify({
            url: o,
            params: e
        }))), re(o), t.resolve(e), t
    }

    function le(e) {
        return c().when((e = e, a = new(c().Deferred), o = Y({}, e), s.CurrentUser.isAuthenticated ? Q.doAuthTicketRequest().then(function(e, n, t) {
            t = t.getResponseHeader("RBX-Authentication-Ticket");
            return t && 0 < t.length ? (o.gameInfo = t, a.resolve(o)) : a.reject(), a
        }) : (a.resolve(o), a)), (e = s.Endpoints.getAbsoluteUrl("/client-status/set?status=Unknown"), c().ajax({
            method: "POST",
            url: e
        }))).then(ie, ne).then(te).then(ae, oe);
        var a, o
    }

    function ce(e) {
        return c()(this).hasClass("disabled") || (le(e.data), void 0 === (e = c()("#ProtocolHandlerClickAlwaysAllowed")).data("hideRememberOverlay") && e.show()), !1
    }

    function se(e) {
        e = Y({}, e);
        return e.launchTime = (new Date).getTime(), e.otherParams.browsertrackerid = s.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = Q.robloxLocale, e.otherParams.gameLocale = Q.gameLocale, e.otherParams.channel = Q.channel, e.protocolName === Q.protocolNameForStudio ? e.otherParams.channel = Q.studioChannel : e.otherParams.channel = Q.playerChannel, c()(U).trigger(U.startClientAttemptedEvent, {
            launchMethod: "Protocol",
            params: e
        }), ee(function() {}, e), le(e)
    }

    function de(e, n) {
        var t = " ";
        s.Endpoints && s.Endpoints.Urls && (t = "".concat(s.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx"), "?")), "h" !== t[0] && (t = "http://".concat(window.location.host) + "/Game/PlaceLauncher.ashx?"), t = t.replace("placelauncher", "PlaceLauncher");
        e = {
            request: e,
            browserTrackerId: s.Cookies.getBrowserTrackerId()
        };
        return c().extend(e, n), t + c().param(e)
    }

    function ue(e, n, t) {
        return a = "Edit.ashx", o = e, e = n, n = t, t = " ", s.Endpoints && s.Endpoints.Urls && (t = "".concat(s.Endpoints.getAbsoluteUrl("/Game/".concat(a)), "?")), "h" !== t[0] && (t = "http://".concat(window.location.host) + "/Game/".concat(a, "?")), e = {
            placeId: o,
            upload: n ? o : "",
            universeId: e,
            testMode: !1
        }, t + c().param(e);
        var a, o
    }

    function pe() {
        document.getElementById("downloadInstallerIFrame").src = "/download/client"
    }

    function me(e, n) {
        var t = Y({}, e),
            e = t.gameInfo;
        void 0 !== t.gameInfo && (t.gameInfo = void 0), c()(U).trigger(U.beginInstallEvent, {
            launchMethod: "Protocol",
            params: t
        }), Q.isInstalling = !0, t.url = window.location.href, void 0 !== e && (t.gameInfo = e), n ? document.getElementById("downloadInstallerIFrame").src = "/download/studio" : pe()
    }

    function ge(e) {
        var n = $(e.launchMode);
        c().modal.close(), n || (s.Dialog.open({
            titleText: c()("#InstallationInstructions .ph-modal-header .title").text(),
            allowHtmlContentInBody: !0,
            bodyContent: c()("#InstallationInstructions .modal-content-container").html(),
            allowHtmlContentInFooter: !0,
            footerText: c()("#InstallationInstructions .xsmall").html(),
            acceptColor: s.Dialog.none,
            declineColor: s.Dialog.none,
            cssClass: "install-instructions-modal",
            xToCancel: !0,
            onCloseCallback: function() {
                c()("#ProtocolHandlerClickAlwaysAllowed").hide()
            }
        }), setTimeout(function() {
            c()(".VisitButtonContinueGLI a").removeClass("disabled").click(e, ce)
        }, 5e3)), me(e, n)
    }

    function ve() {
        c()(U).trigger(U.manualDownloadEvent, {
            launchMethod: "Protocol",
            params: {}
        }), pe()
    }
    Object.assign(Q, {
        joinMultiplayerGame: function(e) {
            var n = Q.protocolNameForClient,
                t = de("RequestGame", e),
                a = !0 === e.isPlayTogetherGame;
            return se({
                protocolName: n,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: t
                },
                placeId: e.placeId,
                isPlayTogetherGame: a
            })
        },
        openStudio: function() {
            var e = {};
            return Q.avatarParamEnabled && (e.avatar = "avatar"), se({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: e
            })
        },
        tryAssetInStudio: function(e) {
            return e = {
                assetid: e
            }, Q.avatarParamEnabled && (e.avatar = "avatar"), se({
                protocolName: Q.protocolNameForStudio,
                launchMode: "asset",
                otherParams: e
            })
        },
        returnToStudio: function() {
            var e = {
                task: "ReturnFromLogin"
            };
            return Q.avatarParamEnabled && (e.avatar = "avatar"), se({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: e
            })
        },
        openPluginInStudio: function(e) {
            e = {
                pluginid: e
            }, Q.avatarParamEnabled && (e.avatar = "avatar"), se({
                protocolName: Q.protocolNameForStudio,
                launchMode: "plugin",
                otherParams: e
            })
        },
        editGameInStudio: function(e, n, t) {
            t = Q.separateScriptParamsEnabled ? {
                task: "EditPlace",
                placeId: e,
                universeId: n
            } : {
                script: ue(e, n, t)
            }, Q.avatarParamEnabled && (t.avatar = "avatar"), se({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: t,
                placeId: e
            })
        },
        followPlayerIntoGame: function(e) {
            return se({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: de("RequestFollowUser", e)
                }
            })
        },
        joinGameInstance: function(e) {
            var n = Q.protocolNameForClient,
                t = de("RequestGameJob", e),
                a = !0 === e.isPlayTogetherGame;
            return se({
                protocolName: n,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: t
                },
                placeId: e.placeId,
                isPlayTogetherGame: a
            })
        },
        joinPrivateGame: function(e) {
            return se({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: de("RequestPrivateGame", e)
                },
                placeId: e.placeId
            })
        },
        playTogetherGame: function(e) {
            return se({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: de("RequestPlayTogetherGame", e)
                },
                placeId: e.placeId,
                conversationId: e.conversationId
            })
        },
        manualDownload: ve,
        attachManualDownloadToLink: function() {
            c()("body #GameLaunchManualInstallLink").click(function() {
                return ve(), !1
            })
        },
        startDownload: pe,
        setLocationHref: re,
        doAuthTicketRequest: function() {
            var e = "".concat(s.EnvironmentUrls.authApi, "/v1/authentication-ticket/");
            return c().ajax({
                method: "POST",
                url: e,
                contentType: "application/json"
            })
        },
        openDesktopUniversalApp: function() {
            var e = {},
                n = Q.protocolNameForClient;
            return e.protocolName = n, e.launchTime = (new Date).getTime(), e.launchMode = Z.app, e.otherParams = {}, e.otherParams.browsertrackerid = s.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = Q.robloxLocale, e.otherParams.gameLocale = Q.gameLocale, e.otherParams.LaunchExp = "InApp", c()(U).trigger(U.startClientAttemptedEvent, {
                launchMethod: "Protocol",
                params: e
            }), ee(function() {}, e), le(e)
        },
        showDialog: ee,
        showLaunchFailureDialog: ne,
        cleanUpAndLogSuccess: ae,
        cleanUpAndLogFailure: oe
    }), c()(document).ready(function() {
        U.setGameLaunchInterface(Q);
        var e = c()("#PlaceLauncherStatusPanel");
        Q.protocolNameForClient = e.data("protocol-name-for-client"), Q.protocolNameForStudio = e.data("protocol-name-for-studio"), Q.protocolUrlIncludesLaunchTime = e.data("protocol-url-includes-launchtime"), Q.protocolDetectionEnabled = e.data("protocol-detection-enabled"), Q.separateScriptParamsEnabled = e.data("protocol-separate-script-parameters-enabled"), Q.avatarParamEnabled = e.data("protocol-avatar-parameter-enabled"), Q.robloxLocale = e.data("protocol-roblox-locale"), Q.gameLocale = e.data("protocol-game-locale");
        var n = e.data("protocol-channel-name");
        "string" == typeof n && "LIVE" !== n.toUpperCase() && (Q.channel = n);
        n = e.data("protocol-studio-channel-name");
        "string" == typeof n && "LIVE" !== n.toUpperCase() && (Q.studioChannel = n);
        e = e.data("protocol-player-channel-name");
        "string" == typeof e && "LIVE" !== e.toUpperCase() && (Q.playerChannel = e), Q.logger || void 0 === window.Roblox.ProtocolHandlerLogger || (Q.logger = window.Roblox.ProtocolHandlerLogger)
    });
    var he, fe = Q,
        we = React,
        be = a.n(we),
        Ie = ReactUtilities,
        ye = ReactStyleGuide,
        Pe = {
            common: ["Common.VisitGame"],
            feature: ""
        },
        Ce = CoreRobloxUtilities,
        Ee = function(e, i, l, c) {
            return new(l = l || Promise)(function(t, n) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function r(e) {
                    var n;
                    e.done ? t(e.value) : ((n = e.value) instanceof l ? n : new l(function(e) {
                        e(n)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Se = function(t, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                e = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function n(n) {
                return function(e) {
                    return function(n) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & n[0] ? r.return : n[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, n[1])).done) return i;
                            switch (r = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                                case 0:
                                case 1:
                                    i = n;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                        l.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && l.label < i[1]) {
                                        l.label = i[1], i = n;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(n);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            n = a.call(t, l)
                        } catch (e) {
                            n = [6, e], r = 0
                        } finally {
                            o = i = 0
                        }
                        if (5 & n[0]) throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, e])
                }
            }
        },
        Le = Ce.dataStores.gamesDataStore,
        Te = function(t) {
            return Ee(void 0, void 0, Promise, function() {
                var n;
                return Se(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Le.getProductInfo(t)];
                        case 1:
                            return n = e.sent().data.data, [2, (void 0 === n ? [] : n)[0]]
                    }
                })
            })
        },
        Ge = function(t) {
            return Ee(void 0, void 0, Promise, function() {
                var n;
                return Se(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Le.getPlaceDetails(t)];
                        case 1:
                            return n = e.sent().data, [2, (void 0 === n ? [] : n)[0]]
                    }
                })
            })
        },
        Ae = function(t) {
            return Ee(void 0, void 0, Promise, function() {
                var n;
                return Se(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Le.getPlayabilityStatus(t)];
                        case 1:
                            return n = e.sent().data, [2, (void 0 === n ? [] : n)[0]]
                    }
                })
            })
        },
        De = RobloxItemPurchase,
        Re = RobloxThumbnails;

    function xe(e) {
        var a = e.placeId,
            o = e.status,
            e = e.playComponent;
        return be().createElement(ye.Button, {
            className: "btn-full-width btn-common-play-game-lg",
            onClick: function(e) {
                var n, t;
                e.preventDefault(), o === he.Playable ? (n = a, null != (t = Ue.deviceMeta.getDeviceMeta()) && t.isInApp ? window.open("/games/start?placeid=" + n, "_blank") : null != t && t.isIosDevice || Ue.jsClientDeviceIdentifier.isIos13Ipad ? window.open("https://assetgame." + s.EnvironmentUrls.domain + "/games/start?placeid=" + n, "_blank") : null != t && t.isAndroidDevice ? window.open("intent://placeID=" + n + "#Intent;scheme=robloxmobile;package=com.roblox.client;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.roblox.client;end") : Ce.playGameService.launchGame(Ce.playGameService.buildPlayGameProperties(void 0, n.toString()), ke.eventStreamProperties(n))) : o === he.GuestProhibited && (t = a, null != (n = Ue.deviceMeta.getDeviceMeta()) && n.isIosDevice || null != n && n.isAndroidDevice || Ue.jsClientDeviceIdentifier.isIos13Ipad ? window.location.assign("/login") : Ce.playGameService.launchGame(Ce.playGameService.buildPlayGameProperties(void 0, t.toString()), ke.eventStreamProperties(t)))
            }
        }, e ? e(o) : be().createElement("span", {
            className: "icon-play-game"
        }))
    }(e = he = he || {}).UnplayableOtherReason = "UnplayableOtherReason", e.Playable = "Playable", e.GuestProhibited = "GuestProhibited", e.GameUnapproved = "GameUnapproved", e.IncorrectConfiguration = "IncorrectConfiguration", e.UniverseRootPlaceIsPrivate = "UniverseRootPlaceIsPrivate", e.InsufficientPermissionFriendsOnly = "InsufficientPermissionFriendsOnly", e.InsufficientPermissionGroupOnly = "InsufficientPermissionGroupOnly", e.DeviceRestricted = "DeviceRestricted", e.UnderReview = "UnderReview", e.PurchaseRequired = "PurchaseRequired", e.AccountRestricted = "AccountRestricted", e.TemporarilyUnavailable = "TemporarilyUnavailable";
    var ke = {
            playButtonTranslationMap: ((e = {})[he.UnplayableOtherReason] = "Response.GameTemporarilyUnavailable", e[he.TemporarilyUnavailable] = "Response.GameTemporarilyUnavailable", e[he.GameUnapproved] = "Label.GameUnavailablePlaceUnderReview", e[he.IncorrectConfiguration] = "Response.GameTemporarilyUnavailable", e[he.UniverseRootPlaceIsPrivate] = "Label.GameUnavailableCurrentlyIsPrivateVisitor", e[he.InsufficientPermissionFriendsOnly] = "Label.GameUnavailablePermissionLevels", e[he.InsufficientPermissionGroupOnly] = "Label.GameUnavailablePermissionLevels", e[he.DeviceRestricted] = "Response.GameTemporarilyUnavailable", e[he.UnderReview] = "Label.GameUnavailablePlaceUnderReview", e[he.AccountRestricted] = "Label.GameUnavailableAccountResrictions", e),
            eventStreamProperties: function(e) {
                return {
                    eventName: "playGameClicked",
                    ctx: "click",
                    properties: {
                        placeId: e
                    },
                    gamePlayIntentEventCtx: "PlayButton"
                }
            }
        },
        Ue = HeaderScripts,
        Me = function() {
            return (Me = Object.assign || function(e) {
                for (var n, t = 1, a = arguments.length; t < a; t++)
                    for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                return e
            }).apply(this, arguments)
        },
        Be = function(e, i, l, c) {
            return new(l = l || Promise)(function(t, n) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function r(e) {
                    var n;
                    e.done ? t(e.value) : ((n = e.value) instanceof l ? n : new l(function(e) {
                        e(n)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Oe = function(t, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                e = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function n(n) {
                return function(e) {
                    return function(n) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & n[0] ? r.return : n[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, n[1])).done) return i;
                            switch (r = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                                case 0:
                                case 1:
                                    i = n;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                        l.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && l.label < i[1]) {
                                        l.label = i[1], i = n;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(n);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            n = a.call(t, l)
                        } catch (e) {
                            n = [6, e], r = 0
                        } finally {
                            o = i = 0
                        }
                        if (5 & n[0]) throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, e])
                }
            }
        },
        Fe = (De = (0, De.createItemPurchase)())[0],
        Ne = De[1];

    function je(e) {
        var n = e.translate,
            t = e.universeId,
            a = e.placeId,
            o = e.onPurchaseSuccess,
            r = e.purchaseComponent,
            i = e.loadingComponent,
            l = (s = (0, we.useState)(void 0))[0],
            c = s[1],
            s = (e = (0, we.useState)(void 0))[0],
            d = e[1];
        return (0, we.useEffect)(function() {
            Be(void 0, void 0, void 0, function() {
                var n;
                return Oe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, Te([t])];
                        case 1:
                            return n = e.sent(), c(n), [3, 3];
                        case 2:
                            return n = e.sent(), console.log(n), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            }), Be(void 0, void 0, void 0, function() {
                var n;
                return Oe(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, Ge([a])];
                        case 1:
                            return n = e.sent(), d(n), [3, 3];
                        case 2:
                            return n = e.sent(), console.log(n), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, []), void 0 === l || void 0 === s ? i ? i() : be().createElement(ye.Loading, null) : be().createElement(be().Fragment, null, be().createElement(ye.Button, {
            className: "btn-full-width btn-common-play-game-lg",
            onClick: function(e) {
                e.preventDefault(), Ne.start()
            }
        }, r ? r(s, l) : be().createElement(be().Fragment, null, be().createElement("span", {
            className: "icon-robux-white"
        }), be().createElement("span", {
            className: "btn-text"
        }, l.price), " ")), be().createElement(Fe, Me({}, {
            translate: n,
            productId: l.productId,
            expectedPrice: l.price,
            thumbnail: be().createElement(Re.Thumbnail2d, {
                type: Re.ThumbnailTypes.gameIcon,
                size: Re.DefaultThumbnailSize,
                targetId: t,
                imgClassName: "game-card-thumb",
                format: Re.ThumbnailFormat.jpeg
            }),
            assetName: s.name,
            assetType: "Place",
            sellerName: s.builder,
            expectedCurrency: 1,
            expectedSellerId: l.sellerId,
            onPurchaseSuccess: o,
            isPlace: !0
        })))
    }

    function Ve(e) {
        var n = e.translate,
            t = e.playabilityStatus;
        return (e = e.errorComponent) ? e(t) : be().createElement("span", {
            className: "error-message"
        }, n(ke.playButtonTranslationMap[t]))
    }
    xe.defaultProps = {
        playComponent: void 0
    }, je.defaultProps = {
        purchaseComponent: void 0,
        loadingComponent: void 0
    }, Ve.defaultProps = {
        errorComponent: void 0
    };
    var He = function(e, i, l, c) {
            return new(l = l || Promise)(function(t, n) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function r(e) {
                    var n;
                    e.done ? t(e.value) : ((n = e.value) instanceof l ? n : new l(function(e) {
                        e(n)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        _e = function(t, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                e = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function n(n) {
                return function(e) {
                    return function(n) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & n[0] ? r.return : n[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, n[1])).done) return i;
                            switch (r = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                                case 0:
                                case 1:
                                    i = n;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                        l.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && l.label < i[1]) {
                                        l.label = i[1], i = n;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(n);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            n = a.call(t, l)
                        } catch (e) {
                            n = [6, e], r = 0
                        } finally {
                            o = i = 0
                        }
                        if (5 & n[0]) throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, e])
                }
            }
        };

    function qe(e) {
        var n = this,
            t = e.translate,
            a = e.universeId,
            o = e.placeId,
            r = e.loadingComponent,
            i = e.errorComponent,
            l = e.purchaseComponent,
            c = e.playComponent,
            e = (0, we.useState)(void 0),
            s = e[0],
            d = e[1];
        switch ((0, we.useEffect)(function() {
            He(n, void 0, void 0, function() {
                var n;
                return _e(this, function(e) {
                    switch (e.label) {
                        case 0:
                            d(void 0), e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Ae([a])];
                        case 2:
                            return n = e.sent(), d(n.playabilityStatus), [3, 4];
                        case 3:
                            return e.sent(), d(he.TemporarilyUnavailable), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, []), s) {
            case void 0:
                return r ? r() : be().createElement(ye.Loading, null);
            case he.Playable:
            case he.GuestProhibited:
                return be().createElement(xe, {
                    placeId: o,
                    status: s,
                    playComponent: c
                });
            case he.PurchaseRequired:
                return be().createElement(je, {
                    translate: t,
                    onPurchaseSuccess: function() {
                        return d(he.Playable)
                    },
                    universeId: a,
                    placeId: o,
                    purchaseComponent: l,
                    loadingComponent: r
                });
            default:
                return be().createElement(Ve, {
                    playabilityStatus: s,
                    translate: t,
                    errorComponent: i
                })
        }
    }
    qe.defaultProps = {
        loadingComponent: void 0,
        errorComponent: void 0,
        purchaseComponent: void 0,
        playComponent: void 0
    }, Pe = Object.assign((0, Ie.withTranslations)(qe, Pe), {
        PlayabilityStatus: he
    }), window.Roblox || (window.Roblox = {}), Object.assign(window.Roblox, {
        AuthenticationChecker: l,
        GameLauncher: U,
        GameLaunchLogger: J,
        GamePlayEvents: F,
        PrerollPlayer: T,
        ProtocolHandlerClientInterface: fe,
        VideoPreRollDFP: L,
        PlayButton: Pe
    }), c()(document).ready(function() {
        X();
        var e = (0, s.DeviceMeta)();
        (e.isUWPApp || e.isUniversalApp) && (window.Roblox.AppHybridClientInterface = r, U.setGameLaunchInterface(r)), U.setGameLaunchLogger(J)
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/b0dffa87fd61ba66f1a0-gameLaunch.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameLaunch");