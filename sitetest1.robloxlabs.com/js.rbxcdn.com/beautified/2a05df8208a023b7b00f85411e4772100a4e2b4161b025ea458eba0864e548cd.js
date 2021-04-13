! function() {
    "use strict";
    var t, n, a, i = Roblox,
        e = {
            currentPageName: null === i.MetaDataValues || void 0 === i.MetaDataValues ? void 0 : i.MetaDataValues.getPageName(),
            defaultIntervalTime: 5e3,
            activeEvents: ["focus", "click", "hover", "scroll", "mouseover", "mouseenter", "mousedown", "dblclick", "keypress", "touchstart", "touchmove"],
            inactiveEvents: ["blur"]
        },
        o = CoreUtilities,
        r = function(e) {
            var t = i.EnvironmentUrls.presenceApi,
                t = {
                    url: "".concat(t, "/v1/presence/register-app-presence"),
                    withCredentials: !0
                },
                e = {
                    location: e
                };
            return o.httpService.post(t, e)
        },
        c = e.activeEvents,
        s = e.inactiveEvents,
        u = e.currentPageName;
    (t = e.defaultIntervalTime, n = !1, a = null, {
        init: function() {
            var e;
            e = document.getElementById("presence-registration-bootstrap-data"), t = Number.isNaN(null == e ? void 0 : e.dataset.interval) ? 3e3 : parseInt(null == e ? void 0 : e.dataset.interval, 10), "True" === (null == e ? void 0 : e.dataset.isEnabled) && (c.forEach(function(e) {
                window.addEventListener(e, function() {
                    a = e, n = !0
                })
            }), s.forEach(function(e) {
                return window.addEventListener(e, function() {
                    n = !1, a = null, console.debug("-------------Inactive -------------")
                }), n
            }), setInterval(function() {
                n && (console.debug("-----------".concat(a, "------------ Active")), r(u).then(function() {}).catch(function(e) {
                    console.debug(e)
                })), n = !1
            }, t))
        }
    }).init()
}();
//# sourceMappingURL=https://js.rbxcdn.com/27a333717bad533d4052-presenceRegistration.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PresenceRegistration");