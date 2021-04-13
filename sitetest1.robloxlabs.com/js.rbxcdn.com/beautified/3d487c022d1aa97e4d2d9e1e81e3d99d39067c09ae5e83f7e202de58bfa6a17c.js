! function() {
    "use strict";
    var e = {
            getBrowserTrackerId: function() {
                return Roblox.LoadTesting.userBrowserTrackerId ? Number(Roblox.LoadTesting.userBrowserTrackerId) : 0
            }
        },
        t = {
            handler: 0,
            updateGlobalConfigHandler: 0,
            currentConfig: null,
            update: function(n) {
                $.ajax({
                    url: n,
                    dataType: "jsonp"
                })
            },
            areEqual: function(n, t) {
                if (!n && !t) return !0;
                if (!n || !t) return !1;
                try {
                    for (var e in n)
                        if (n[e] !== t[e]) return !1
                } catch (n) {
                    return !1
                }
                return !0
            },
            start: function(n, t, e) {
                var r = this;
                this.handler && clearInterval(this.handler), this.updateGlobalConfigHandler && clearInterval(this.updateGlobalConfigHandler), this.updateGlobalConfigHandler = setInterval(function() {
                    r.update(n)
                }, t), this.handler = setInterval(function() {
                    r.areEqual(r.currentConfig, Roblox.LoadTesting.configuration) || (r.currentConfig = Roblox.LoadTesting.configuration, e.onConfigChanged(r.currentConfig))
                }, t)
            },
            stop: function() {
                this.handler && clearInterval(this.handler), this.updateGlobalConfigHandler && clearInterval(this.updateGlobalConfigHandler)
            }
        },
        n = {
            handler: 0,
            onConfigChanged: function(n) {
                n && this.start(n)
            },
            init: function(n) {
                t.start(n, 1e4, this)
            },
            start: function(n) {
                var t;
                this.handler && clearInterval(this.handler), n.enabled && (t = e.getBrowserTrackerId(), n.enabledPermill < t % 1e3 || (this.handler = setInterval(function() {
                    $.ajax({
                        method: n.targetHttpMethod,
                        url: n.targetUrl
                    }).done(function() {})
                }, n.intervalBetweenRequestsInMilliseconds)))
            },
            stop: function() {
                this.handler && clearInterval(this.handler), t.stop()
            }
        };
    $(document).ready(function() {
        n.init(Roblox.LoadTesting.configurationUrl)
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/9f3597c6f28a3a2301b9-loadtesting.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("LoadTesting");