! function() {
    var n = {
            73773: function(e, t, n) {
                e.exports = n(61487)
            },
            79117: function(e, t, u) {
                "use strict";
                var c = u(90717),
                    d = u(29097),
                    l = u(74717),
                    h = u(98634),
                    v = u(55816),
                    p = u(70239);
                e.exports = function(i) {
                    return new Promise(function(t, n) {
                        var r = i.data,
                            o = i.headers;
                        c.isFormData(r) && delete o["Content-Type"];
                        var e, a, s = new XMLHttpRequest;
                        if (i.auth && (e = i.auth.username || "", a = i.auth.password || "", o.Authorization = "Basic " + btoa(e + ":" + a)), s.open(i.method.toUpperCase(), l(i.url, i.params, i.paramsSerializer), !0), s.timeout = i.timeout, s.onreadystatechange = function() {
                                var e;
                                s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:")) && (e = "getAllResponseHeaders" in s ? h(s.getAllResponseHeaders()) : null, e = {
                                    data: i.responseType && "text" !== i.responseType ? s.response : s.responseText,
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: e,
                                    config: i,
                                    request: s
                                }, d(t, n, e), s = null)
                            }, s.onerror = function() {
                                n(p("Network Error", i, null, s)), s = null
                            }, s.ontimeout = function() {
                                n(p("timeout of " + i.timeout + "ms exceeded", i, "ECONNABORTED", s)), s = null
                            }, c.isStandardBrowserEnv() && (a = u(64076), (a = (i.withCredentials || v(i.url)) && i.xsrfCookieName ? a.read(i.xsrfCookieName) : void 0) && (o[i.xsrfHeaderName] = a)), "setRequestHeader" in s && c.forEach(o, function(e, t) {
                                void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : s.setRequestHeader(t, e)
                            }), i.withCredentials && (s.withCredentials = !0), i.responseType) try {
                            s.responseType = i.responseType
                        } catch (e) {
                            if ("json" !== i.responseType) throw e
                        }
                        "function" == typeof i.onDownloadProgress && s.addEventListener("progress", i.onDownloadProgress), "function" == typeof i.onUploadProgress && s.upload && s.upload.addEventListener("progress", i.onUploadProgress), i.cancelToken && i.cancelToken.promise.then(function(e) {
                            s && (s.abort(), n(e), s = null)
                        }), void 0 === r && (r = null), s.send(r)
                    })
                }
            },
            61487: function(e, t, n) {
                "use strict";
                var r = n(90717),
                    o = n(6272),
                    a = n(11158),
                    s = n(52896);

                function i(e) {
                    var t = new a(e),
                        e = o(a.prototype.request, t);
                    return r.extend(e, a.prototype, t), r.extend(e, t), e
                }
                var u = i(s);
                u.Axios = a, u.create = function(e) {
                    return i(r.merge(s, e))
                }, u.Cancel = n(24458), u.CancelToken = n(36126), u.isCancel = n(78427), u.all = function(e) {
                    return Promise.all(e)
                }, u.spread = n(50464), e.exports = u, e.exports.default = u
            },
            24458: function(e) {
                "use strict";

                function t(e) {
                    this.message = e
                }
                t.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, t.prototype.__CANCEL__ = !0, e.exports = t
            },
            36126: function(e, t, n) {
                "use strict";
                var r = n(24458);

                function o(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise(function(e) {
                        t = e
                    });
                    var n = this;
                    e(function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    })
                }
                o.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, o.source = function() {
                    var t;
                    return {
                        token: new o(function(e) {
                            t = e
                        }),
                        cancel: t
                    }
                }, e.exports = o
            },
            78427: function(e) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            11158: function(e, t, n) {
                "use strict";
                var o = n(52896),
                    a = n(90717),
                    r = n(69143),
                    s = n(63093);

                function i(e) {
                    this.defaults = e, this.interceptors = {
                        request: new r,
                        response: new r
                    }
                }
                i.prototype.request = function(e, t) {
                    "string" == typeof e && (e = a.merge({
                        url: arguments[0]
                    }, t)), (e = a.merge(o, {
                        method: "get"
                    }, this.defaults, e)).method = e.method.toLowerCase();
                    var n = [s, void 0],
                        r = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                            n.unshift(e.fulfilled, e.rejected)
                        }), this.interceptors.response.forEach(function(e) {
                            n.push(e.fulfilled, e.rejected)
                        }); n.length;) r = r.then(n.shift(), n.shift());
                    return r
                }, a.forEach(["delete", "get", "head", "options"], function(n) {
                    i.prototype[n] = function(e, t) {
                        return this.request(a.merge(t || {}, {
                            method: n,
                            url: e
                        }))
                    }
                }), a.forEach(["post", "put", "patch"], function(r) {
                    i.prototype[r] = function(e, t, n) {
                        return this.request(a.merge(n || {}, {
                            method: r,
                            url: e,
                            data: t
                        }))
                    }
                }), e.exports = i
            },
            69143: function(e, t, n) {
                "use strict";
                var r = n(90717);

                function o() {
                    this.handlers = []
                }
                o.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }), this.handlers.length - 1
                }, o.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, o.prototype.forEach = function(t) {
                    r.forEach(this.handlers, function(e) {
                        null !== e && t(e)
                    })
                }, e.exports = o
            },
            70239: function(e, t, n) {
                "use strict";
                var a = n(85120);
                e.exports = function(e, t, n, r, o) {
                    e = new Error(e);
                    return a(e, t, n, r, o)
                }
            },
            63093: function(e, t, n) {
                "use strict";
                var r = n(90717),
                    o = n(15794),
                    a = n(78427),
                    s = n(52896),
                    i = n(40812),
                    u = n(81474);

                function c(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(t) {
                    return c(t), t.baseURL && !i(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                        delete t.headers[e]
                    }), (t.adapter || s.adapter)(t).then(function(e) {
                        return c(t), e.data = o(e.data, e.headers, t.transformResponse), e
                    }, function(e) {
                        return a(e) || (c(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                    })
                }
            },
            85120: function(e) {
                "use strict";
                e.exports = function(e, t, n, r, o) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
                }
            },
            29097: function(e, t, n) {
                "use strict";
                var o = n(70239);
                e.exports = function(e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(o("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                }
            },
            15794: function(e, t, n) {
                "use strict";
                var r = n(90717);
                e.exports = function(t, n, e) {
                    return r.forEach(e, function(e) {
                        t = e(t, n)
                    }), t
                }
            },
            52896: function(e, t, n) {
                "use strict";
                var r = n(90717),
                    o = n(21890),
                    a = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function s(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var i, u = {
                    adapter: ("undefined" == typeof XMLHttpRequest && "undefined" == typeof process || (i = n(79117)), i),
                    transformRequest: [function(e, t) {
                        return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return 200 <= e && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], function(e) {
                    u.headers[e] = {}
                }), r.forEach(["post", "put", "patch"], function(e) {
                    u.headers[e] = r.merge(a)
                }), e.exports = u
            },
            6272: function(e) {
                "use strict";
                e.exports = function(n, r) {
                    return function() {
                        for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                        return n.apply(r, e)
                    }
                }
            },
            74717: function(e, t, n) {
                "use strict";
                var o = n(90717);

                function a(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var r, t = n ? n(t) : o.isURLSearchParams(t) ? t.toString() : (r = [], o.forEach(t, function(e, t) {
                        null != e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function(e) {
                            o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), r.push(a(t) + "=" + a(e))
                        }))
                    }), r.join("&"));
                    return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
                }
            },
            81474: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            64076: function(e, t, n) {
                "use strict";
                var i = n(90717);
                e.exports = i.isStandardBrowserEnv() ? {
                    write: function(e, t, n, r, o, a) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), i.isString(r) && s.push("path=" + r), i.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read: function(e) {
                        e = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return e ? decodeURIComponent(e[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            40812: function(e) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            },
            55816: function(e, t, n) {
                "use strict";
                var r, o, a, s = n(90717);

                function i(e) {
                    return o && (a.setAttribute("href", e), e = a.href), a.setAttribute("href", e), {
                        href: a.href,
                        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                        host: a.host,
                        search: a.search ? a.search.replace(/^\?/, "") : "",
                        hash: a.hash ? a.hash.replace(/^#/, "") : "",
                        hostname: a.hostname,
                        port: a.port,
                        pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
                    }
                }
                e.exports = s.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), r = i(window.location.href), function(e) {
                    e = s.isString(e) ? i(e) : e;
                    return e.protocol === r.protocol && e.host === r.host
                }) : function() {
                    return !0
                }
            },
            21890: function(e, t, n) {
                "use strict";
                var o = n(90717);
                e.exports = function(n, r) {
                    o.forEach(n, function(e, t) {
                        t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t])
                    })
                }
            },
            98634: function(e, t, n) {
                "use strict";
                var o = n(90717),
                    a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, r = {};
                    return e && o.forEach(e.split("\n"), function(e) {
                        n = e.indexOf(":"), t = o.trim(e.substr(0, n)).toLowerCase(), n = o.trim(e.substr(n + 1)), t && (r[t] && 0 <= a.indexOf(t) || (r[t] = "set-cookie" === t ? (r[t] || []).concat([n]) : r[t] ? r[t] + ", " + n : n))
                    }), r
                }
            },
            50464: function(e) {
                "use strict";
                e.exports = function(t) {
                    return function(e) {
                        return t.apply(null, e)
                    }
                }
            },
            90717: function(e, t, n) {
                "use strict";

                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var o = n(6272),
                    n = n(64297),
                    r = Object.prototype.toString;

                function s(e) {
                    return "[object Array]" === r.call(e)
                }

                function i(e) {
                    return null !== e && "object" === a(e)
                }

                function u(e) {
                    return "[object Function]" === r.call(e)
                }

                function c(e, t) {
                    if (null != e)
                        if ("object" !== a(e) && (e = [e]), s(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
                }
                e.exports = {
                    isArray: s,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === r.call(e)
                    },
                    isBuffer: n,
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: i,
                    isUndefined: function(e) {
                        return void 0 === e
                    },
                    isDate: function(e) {
                        return "[object Date]" === r.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === r.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === r.call(e)
                    },
                    isFunction: u,
                    isStream: function(e) {
                        return i(e) && u(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                    },
                    forEach: c,
                    merge: function n() {
                        var r = {};

                        function e(e, t) {
                            "object" === a(r[t]) && "object" === a(e) ? r[t] = n(r[t], e) : r[t] = e
                        }
                        for (var t = 0, o = arguments.length; t < o; t++) c(arguments[t], e);
                        return r
                    },
                    extend: function(n, e, r) {
                        return c(e, function(e, t) {
                            n[t] = r && "function" == typeof e ? o(e, r) : e
                        }), n
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                }
            },
            91745: function(e) {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var t = "%[a-f0-9]{2}",
                    o = new RegExp(t, "gi"),
                    i = new RegExp("(" + t + ")+", "gi");

                function u(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (e) {
                        for (var n = t.match(o), r = 1; r < n.length; r++) n = (t = function e(t, n) {
                            try {
                                return decodeURIComponent(t.join(""))
                            } catch (e) {}
                            if (1 === t.length) return t;
                            n = n || 1;
                            var r = t.slice(0, n),
                                n = t.slice(n);
                            return Array.prototype.concat.call([], e(r), e(n))
                        }(n, r).join("")).match(o);
                        return t
                    }
                }
                e.exports = function(t) {
                    if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + n(t) + "`");
                    try {
                        return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                    } catch (e) {
                        return function(e) {
                            for (var t = {
                                    "%FE%FF": "ï¿½ï¿½",
                                    "%FF%FE": "ï¿½ï¿½"
                                }, n = i.exec(e); n;) {
                                try {
                                    t[n[0]] = decodeURIComponent(n[0])
                                } catch (e) {
                                    var r = u(n[0]);
                                    r !== n[0] && (t[n[0]] = r)
                                }
                                n = i.exec(e)
                            }
                            t["%C2"] = "ï¿½";
                            for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                                var s = o[a];
                                e = e.replace(new RegExp(s, "g"), t[s])
                            }
                            return e
                        }(t)
                    }
                }
            },
            64297: function(e) {
                /*!
                 * Determine if an object is a Buffer
                 *
                 * @author   Feross Aboukhadijeh <https://feross.org>
                 * @license  MIT
                 */
                e.exports = function(e) {
                    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
            },
            22149: function(R, O, D) {
                var x;

                function B(e) {
                    return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /*! https://mths.be/punycode v1.3.2 by @mathias */
                R = D.nmd(R),
                    function(e) {
                        var t = "object" == B(O) && O && !O.nodeType && O,
                            n = "object" == B(R) && R && !R.nodeType && R,
                            r = "object" == (void 0 === D.g ? "undefined" : B(D.g)) && D.g;
                        r.global !== r && r.window !== r && r.self !== r || (e = r);
                        var o, a, g = 2147483647,
                            y = 36,
                            G = 1,
                            I = 26,
                            s = 38,
                            i = 700,
                            P = 72,
                            b = 128,
                            w = "-",
                            u = /^xn--/,
                            c = /[^\x20-\x7E]/,
                            d = /[\x2E\u3002\uFF0E\uFF61]/g,
                            l = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            },
                            h = y - G,
                            C = Math.floor,
                            q = String.fromCharCode;

                        function A(e) {
                            throw RangeError(l[e])
                        }

                        function v(e, t) {
                            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                            return r
                        }

                        function p(e, t) {
                            var n = e.split("@"),
                                r = "";
                            return 1 < n.length && (r = n[0] + "@", e = n[1]), r + v((e = e.replace(d, ".")).split("."), t).join(".")
                        }

                        function T(e) {
                            for (var t, n, r = [], o = 0, a = e.length; o < a;) 55296 <= (t = e.charCodeAt(o++)) && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                            return r
                        }

                        function m(e) {
                            return v(e, function(e) {
                                var t = "";
                                return 65535 < e && (t += q((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += q(e)
                            }).join("")
                        }

                        function L(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function S(e, t, n) {
                            var r = 0;
                            for (e = n ? C(e / i) : e >> 1, e += C(e / t); h * I >> 1 < e; r += y) e = C(e / h);
                            return C(r + (h + 1) * e / (e + s))
                        }

                        function f(e) {
                            var t, n, r, o, a, s, i, u = [],
                                c = e.length,
                                d = 0,
                                l = b,
                                h = P,
                                v = e.lastIndexOf(w);
                            for (v < 0 && (v = 0), n = 0; n < v; ++n) 128 <= e.charCodeAt(n) && A("not-basic"), u.push(e.charCodeAt(n));
                            for (r = 0 < v ? v + 1 : 0; r < c;) {
                                for (o = d, a = 1, s = y; c <= r && A("invalid-input"), i = e.charCodeAt(r++), (y <= (i = i - 48 < 10 ? i - 22 : i - 65 < 26 ? i - 65 : i - 97 < 26 ? i - 97 : y) || i > C((g - d) / a)) && A("overflow"), d += i * a, !(i < (i = s <= h ? G : h + I <= s ? I : s - h)); s += y) a > C(g / (i = y - i)) && A("overflow"), a *= i;
                                h = S(d - o, t = u.length + 1, 0 == o), C(d / t) > g - l && A("overflow"), l += C(d / t), d %= t, u.splice(d++, 0, l)
                            }
                            return m(u)
                        }

                        function U(e) {
                            for (var t, n, r, o, a, s, i, u, c, d, l, h = [], v = (e = T(e)).length, p = b, m = P, f = t = 0; f < v; ++f)(u = e[f]) < 128 && h.push(q(u));
                            for (n = r = h.length, r && h.push(w); n < v;) {
                                for (o = g, f = 0; f < v; ++f) p <= (u = e[f]) && u < o && (o = u);
                                for (o - p > C((g - t) / (c = n + 1)) && A("overflow"), t += (o - p) * c, p = o, f = 0; f < v; ++f)
                                    if ((u = e[f]) < p && ++t > g && A("overflow"), u == p) {
                                        for (a = t, s = y; !(a < (i = s <= m ? G : m + I <= s ? I : s - m)); s += y) l = a - i, d = y - i, h.push(q(L(i + l % d, 0))), a = C(l / d);
                                        h.push(q(L(a, 0))), m = S(t, c, n == r), t = 0, ++n
                                    }++t, ++p
                            }
                            return h.join("")
                        }
                        if (o = {
                                version: "1.3.2",
                                ucs2: {
                                    decode: T,
                                    encode: m
                                },
                                decode: f,
                                encode: U,
                                toASCII: function(e) {
                                    return p(e, function(e) {
                                        return c.test(e) ? "xn--" + U(e) : e
                                    })
                                },
                                toUnicode: function(e) {
                                    return p(e, function(e) {
                                        return u.test(e) ? f(e.slice(4).toLowerCase()) : e
                                    })
                                }
                            }, "object" == B(D.amdO) && D.amdO) void 0 === (x = function() {
                            return o
                        }.call(O, D, O, R)) || (R.exports = x);
                        else if (t && n)
                            if (R.exports == t) n.exports = o;
                            else
                                for (a in o) o.hasOwnProperty(a) && (t[a] = o[a]);
                        else e.punycode = o
                    }(this)
            },
            66933: function(e, i, t) {
                "use strict";

                function p(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                r || null == i.return || i.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return n
                    }(e, t) || f(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function m(e) {
                    return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function c(e) {
                    return function(e) {
                        if (Array.isArray(e)) return r(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || f(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function f(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }

                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var n = t(53162),
                    o = t(91745),
                    g = t(49393);

                function y(e) {
                    if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                }

                function d(e, t) {
                    return t.encode ? (t.strict ? n : encodeURIComponent)(e) : e
                }

                function G(e, t) {
                    return t.decode ? o(e) : e
                }

                function u(e) {
                    var t = e.indexOf("#");
                    return -1 !== t && (e = e.slice(0, t)), e
                }

                function a(e) {
                    var t = (e = u(e)).indexOf("?");
                    return -1 === t ? "" : e.slice(t + 1)
                }

                function I(e, t) {
                    return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
                }

                function s(e, t) {
                    y((t = Object.assign({
                        decode: !0,
                        sort: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ",",
                        parseNumbers: !1,
                        parseBooleans: !1
                    }, t)).arrayFormatSeparator);
                    var n = function(a) {
                            var r;
                            switch (a.arrayFormat) {
                                case "index":
                                    return function(e, t, n) {
                                        r = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), r ? (void 0 === n[e] && (n[e] = {}), n[e][r[1]] = t) : n[e] = t
                                    };
                                case "bracket":
                                    return function(e, t, n) {
                                        r = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), r ? void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = [t] : n[e] = t
                                    };
                                case "comma":
                                case "separator":
                                    return function(e, t, n) {
                                        var r = "string" == typeof t && t.includes(a.arrayFormatSeparator),
                                            o = "string" == typeof t && !r && G(t, a).includes(a.arrayFormatSeparator);
                                        t = o ? G(t, a) : t;
                                        t = r || o ? t.split(a.arrayFormatSeparator).map(function(e) {
                                            return G(e, a)
                                        }) : null === t ? t : G(t, a);
                                        n[e] = t
                                    };
                                default:
                                    return function(e, t, n) {
                                        void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                    }
                            }
                        }(t),
                        r = Object.create(null);
                    if ("string" != typeof e) return r;
                    if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                    var o = function(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = f(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    t = function() {};
                                return {
                                    s: t,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            s = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                s = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                        }
                    }(e.split("&"));
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var a = s.value,
                                s = p(g(t.decode ? a.replace(/\+/g, " ") : a, "="), 2),
                                a = s[0],
                                s = void 0 === (s = s[1]) ? null : ["comma", "separator"].includes(t.arrayFormat) ? s : G(s, t);
                            n(G(a, t), s, r)
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    for (var i = 0, u = Object.keys(r); i < u.length; i++) {
                        var c = u[i],
                            d = r[c];
                        if ("object" === m(d) && null !== d)
                            for (var l = 0, h = Object.keys(d); l < h.length; l++) {
                                var v = h[l];
                                d[v] = I(d[v], t)
                            } else r[c] = I(d, t)
                    }
                    return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(function(e, t) {
                        var n = r[t];
                        return Boolean(n) && "object" === m(n) && !Array.isArray(n) ? e[t] = function e(t) {
                            return Array.isArray(t) ? t.sort() : "object" === m(t) ? e(Object.keys(t)).sort(function(e, t) {
                                return Number(e) - Number(t)
                            }).map(function(e) {
                                return t[e]
                            }) : t
                        }(n) : e[t] = n, e
                    }, Object.create(null))
                }
                i.extract = a, i.parse = s, i.stringify = function(n, r) {
                    if (!n) return "";
                    y((r = Object.assign({
                        encode: !0,
                        strict: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ","
                    }, r)).arrayFormatSeparator);
                    for (var e, o = function(o) {
                            switch (o.arrayFormat) {
                                case "index":
                                    return function(r) {
                                        return function(e, t) {
                                            var n = e.length;
                                            return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [d(r, o), "[", n, "]"].join("")
                                            ] : [
                                                [d(r, o), "[", d(n, o), "]=", d(t, o)].join("")
                                            ])
                                        }
                                    };
                                case "bracket":
                                    return function(n) {
                                        return function(e, t) {
                                            return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [d(n, o), "[]"].join("")
                                            ] : [
                                                [d(n, o), "[]=", d(t, o)].join("")
                                            ])
                                        }
                                    };
                                case "comma":
                                case "separator":
                                    return function(n) {
                                        return function(e, t) {
                                            return null == t || 0 === t.length ? e : 0 === e.length ? [
                                                [d(n, o), "=", d(t, o)].join("")
                                            ] : [
                                                [e, d(t, o)].join(o.arrayFormatSeparator)
                                            ]
                                        }
                                    };
                                default:
                                    return function(n) {
                                        return function(e, t) {
                                            return void 0 === t || o.skipNull && null === t || o.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [d(n, o)] : [
                                                [d(n, o), "=", d(t, o)].join("")
                                            ])
                                        }
                                    }
                            }
                        }(r), t = {}, a = 0, s = Object.keys(n); a < s.length; a++) {
                        var i = s[a];
                        e = i, r.skipNull && null == n[e] || r.skipEmptyString && "" === n[e] || (t[i] = n[i])
                    }
                    var u = Object.keys(t);
                    return !1 !== r.sort && u.sort(r.sort), u.map(function(e) {
                        var t = n[e];
                        return void 0 === t ? "" : null === t ? d(e, r) : Array.isArray(t) ? t.reduce(o(e), []).join("&") : d(e, r) + "=" + d(t, r)
                    }).filter(function(e) {
                        return 0 < e.length
                    }).join("&")
                }, i.parseUrl = function(e, t) {
                    t = Object.assign({
                        decode: !0
                    }, t);
                    var n = p(g(e, "#"), 2),
                        r = n[0],
                        n = n[1];
                    return Object.assign({
                        url: r.split("?")[0] || "",
                        query: s(a(e), t)
                    }, t && t.parseFragmentIdentifier && n ? {
                        fragmentIdentifier: G(n, t)
                    } : {})
                }, i.stringifyUrl = function(e, t) {
                    t = Object.assign({
                        encode: !0,
                        strict: !0
                    }, t);
                    var n = u(e.url).split("?")[0] || "",
                        r = i.extract(e.url),
                        o = i.parse(r, {
                            sort: !1
                        }),
                        a = Object.assign(o, e.query),
                        s = (s = i.stringify(a, t)) && "?".concat(s),
                        o = (r = e.url, o = "", -1 !== (a = r.indexOf("#")) && (o = r.slice(a)), o);
                    return e.fragmentIdentifier && (o = "#".concat(d(e.fragmentIdentifier, t))), "".concat(n).concat(s).concat(o)
                }
            },
            24963: function(e) {
                "use strict";
                e.exports = function(e, t, n, r) {
                    t = t || "&", n = n || "=";
                    var o = {};
                    if ("string" != typeof e || 0 === e.length) return o;
                    var a = /\+/g;
                    e = e.split(t);
                    t = 1e3;
                    r && "number" == typeof r.maxKeys && (t = r.maxKeys);
                    var s = e.length;
                    0 < t && t < s && (s = t);
                    for (var i = 0; i < s; ++i) {
                        var u, c = e[i].replace(a, "%20"),
                            d = c.indexOf(n),
                            l = 0 <= d ? (u = c.substr(0, d), c.substr(d + 1)) : (u = c, ""),
                            h = decodeURIComponent(u),
                            d = decodeURIComponent(l);
                        c = o, l = h, Object.prototype.hasOwnProperty.call(c, l) ? Array.isArray(o[h]) ? o[h].push(d) : o[h] = [o[h], d] : o[h] = d
                    }
                    return o
                }
            },
            61467: function(e) {
                "use strict";

                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function a(e) {
                    switch (t(e)) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }
                e.exports = function(n, r, o, e) {
                    return r = r || "&", o = o || "=", null === n && (n = void 0), "object" === t(n) ? Object.keys(n).map(function(e) {
                        var t = encodeURIComponent(a(e)) + o;
                        return Array.isArray(n[e]) ? n[e].map(function(e) {
                            return t + encodeURIComponent(a(e))
                        }).join(r) : t + encodeURIComponent(a(n[e]))
                    }).join(r) : e ? encodeURIComponent(a(e)) + o + encodeURIComponent(a(n)) : ""
                }
            },
            95261: function(e, t, n) {
                "use strict";
                t.decode = t.parse = n(24963), t.encode = t.stringify = n(61467)
            },
            49393: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                    if ("" === t) return [e];
                    var n = e.indexOf(t);
                    return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
                }
            },
            53162: function(e) {
                "use strict";
                e.exports = function(e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                        return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
                    })
                }
            },
            91651: function(e, t, n) {
                "use strict";

                function A(e) {
                    return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var T = n(22149),
                    L = n(84817);

                function P() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                }
                t.Qc = o, t.DB = function(e, t) {
                    return o(e, !1, !0).resolve(t)
                }, t.WU = function(e) {
                    L.isString(e) && (e = o(e));
                    return e instanceof P ? e.format() : P.prototype.format.call(e)
                };
                var S = /^([a-z0-9.+-]+:)/i,
                    r = /:[0-9]*$/,
                    U = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    t = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    R = ["'"].concat(t),
                    O = ["%", "/", "?", ";", "#"].concat(R),
                    D = ["/", "?", "#"],
                    x = /^[+a-z0-9A-Z_-]{0,63}$/,
                    B = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    E = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    F = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    j = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    },
                    z = n(95261);

                function o(e, t, n) {
                    if (e && L.isObject(e) && e instanceof P) return e;
                    var r = new P;
                    return r.parse(e, t, n), r
                }
                P.prototype.parse = function(e, t, n) {
                    if (!L.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + A(e));
                    var r = e.indexOf("?"),
                        o = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                        r = e.split(o);
                    r[0] = r[0].replace(/\\/g, "/");
                    var a = (a = e = r.join(o)).trim();
                    if (!n && 1 === e.split("#").length) {
                        var s = U.exec(a);
                        if (s) return this.path = a, this.href = a, this.pathname = s[1], s[2] ? (this.search = s[2], this.query = t ? z.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                    }
                    var i, s = S.exec(a);
                    if (s && (q = (s = s[0]).toLowerCase(), this.protocol = q, a = a.substr(s.length)), (n || s || a.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(i = "//" === a.substr(0, 2)) || s && F[s] || (a = a.substr(2), this.slashes = !0)), !F[s] && (i || s && !j[s])) {
                        for (var u = -1, c = 0; c < D.length; c++) - 1 !== (d = a.indexOf(D[c])) && (-1 === u || d < u) && (u = d); - 1 !== (P = -1 === u ? a.lastIndexOf("@") : a.lastIndexOf("@", u)) && (b = a.slice(0, P), a = a.slice(P + 1), this.auth = decodeURIComponent(b)), u = -1;
                        for (var d, c = 0; c < O.length; c++) - 1 !== (d = a.indexOf(O[c])) && (-1 === u || d < u) && (u = d); - 1 === u && (u = a.length), this.host = a.slice(0, u), a = a.slice(u), this.parseHost(), this.hostname = this.hostname || "";
                        var l = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!l)
                            for (var h = this.hostname.split(/\./), c = 0, v = h.length; c < v; c++) {
                                var p = h[c];
                                if (p && !p.match(x)) {
                                    for (var m = "", f = 0, g = p.length; f < g; f++) 127 < p.charCodeAt(f) ? m += "x" : m += p[f];
                                    if (!m.match(x)) {
                                        var y = h.slice(0, c),
                                            G = h.slice(c + 1),
                                            I = p.match(B);
                                        I && (y.push(I[1]), G.unshift(I[2])), G.length && (a = "/" + G.join(".") + a), this.hostname = y.join(".");
                                        break
                                    }
                                }
                            }
                        255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), l || (this.hostname = T.toASCII(this.hostname));
                        var P = this.port ? ":" + this.port : "",
                            b = this.hostname || "";
                        this.host = b + P, this.href += this.host, l && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
                    }
                    if (!E[q])
                        for (c = 0, v = R.length; c < v; c++) {
                            var w, C = R[c]; - 1 !== a.indexOf(C) && ((w = encodeURIComponent(C)) === C && (w = escape(C)), a = a.split(C).join(w))
                        }
                    l = a.indexOf("#"); - 1 !== l && (this.hash = a.substr(l), a = a.slice(0, l));
                    var q, l = a.indexOf("?");
                    return -1 !== l ? (this.search = a.substr(l), this.query = a.substr(l + 1), t && (this.query = z.parse(this.query)), a = a.slice(0, l)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), j[q] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (P = this.pathname || "", q = this.search || "", this.path = P + q), this.href = this.format(), this
                }, P.prototype.format = function() {
                    var e = this.auth || "";
                    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                    var t = this.protocol || "",
                        n = this.pathname || "",
                        r = this.hash || "",
                        o = !1,
                        a = "";
                    this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && L.isObject(this.query) && Object.keys(this.query).length && (a = z.stringify(this.query));
                    a = this.search || a && "?" + a || "";
                    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || j[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o = o || "", r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + o + (n = n.replace(/[?#]/g, function(e) {
                        return encodeURIComponent(e)
                    })) + (a = a.replace("#", "%23")) + r
                }, P.prototype.resolve = function(e) {
                    return this.resolveObject(o(e, !1, !0)).format()
                }, P.prototype.resolveObject = function(e) {
                    L.isString(e) && ((v = new P).parse(e, !1, !0), e = v);
                    for (var t = new P, n = Object.keys(this), r = 0; r < n.length; r++) {
                        var o = n[r];
                        t[o] = this[o]
                    }
                    if (t.hash = e.hash, "" === e.href) return t.href = t.format(), t;
                    if (e.slashes && !e.protocol) {
                        for (var a = Object.keys(e), s = 0; s < a.length; s++) {
                            var i = a[s];
                            "protocol" !== i && (t[i] = e[i])
                        }
                        return j[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t
                    }
                    if (e.protocol && e.protocol !== t.protocol) {
                        if (!j[e.protocol]) {
                            for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                                var d = u[c];
                                t[d] = e[d]
                            }
                            return t.href = t.format(), t
                        }
                        if (t.protocol = e.protocol, e.host || F[e.protocol]) t.pathname = e.pathname;
                        else {
                            for (var l = (e.pathname || "").split("/"); l.length && !(e.host = l.shift()););
                            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== l[0] && l.unshift(""), l.length < 2 && l.unshift(""), t.pathname = l.join("/")
                        }
                        return t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, (t.pathname || t.search) && (p = t.pathname || "", m = t.search || "", t.path = p + m), t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                    }
                    var h = t.pathname && "/" === t.pathname.charAt(0),
                        v = e.host || e.pathname && "/" === e.pathname.charAt(0),
                        p = v || h || t.host && e.pathname,
                        m = p,
                        f = t.pathname && t.pathname.split("/") || [],
                        l = e.pathname && e.pathname.split("/") || [],
                        h = t.protocol && !j[t.protocol];
                    if (h && (t.hostname = "", t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === l[0] ? l[0] = e.host : l.unshift(e.host)), e.host = null), p = p && ("" === l[0] || "" === f[0])), v) t.host = (e.host || "" === e.host ? e : t).host, t.hostname = (e.hostname || "" === e.hostname ? e : t).hostname, t.search = e.search, t.query = e.query, f = l;
                    else if (l.length)(f = f || []).pop(), f = f.concat(l), t.search = e.search, t.query = e.query;
                    else if (!L.isNullOrUndefined(e.search)) return h && (t.hostname = t.host = f.shift(), (I = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = I.shift(), t.host = t.hostname = I.shift())), t.search = e.search, t.query = e.query, L.isNull(t.pathname) && L.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.href = t.format(), t;
                    if (!f.length) return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
                    for (var g = f.slice(-1)[0], v = (t.host || e.host || 1 < f.length) && ("." === g || ".." === g) || "" === g, y = 0, G = f.length; 0 <= G; G--) "." === (g = f[G]) ? f.splice(G, 1) : ".." === g ? (f.splice(G, 1), y++) : y && (f.splice(G, 1), y--);
                    if (!p && !m)
                        for (; y--;) f.unshift("..");
                    !p || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), v && "/" !== f.join("/").substr(-1) && f.push("");
                    var I, v = "" === f[0] || f[0] && "/" === f[0].charAt(0);
                    return h && (t.hostname = t.host = !v && f.length ? f.shift() : "", (I = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = I.shift(), t.host = t.hostname = I.shift())), (p = p || t.host && f.length) && !v && f.unshift(""), f.length ? t.pathname = f.join("/") : (t.pathname = null, t.path = null), L.isNull(t.pathname) && L.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                }, P.prototype.parseHost = function() {
                    var e = this.host,
                        t = r.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                }
            },
            84817: function(e) {
                "use strict";

                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                e.exports = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isObject: function(e) {
                        return "object" === t(e) && null !== e
                    },
                    isNull: function(e) {
                        return null === e
                    },
                    isNullOrUndefined: function(e) {
                        return null == e
                    }
                }
            }
        },
        r = {};

    function qs(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, qs), t.loaded = !0, t.exports
    }
    qs.amdO = {}, qs.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return qs.d(t, {
                a: t
            }), t
        }, qs.d = function(e, t) {
            for (var n in t) qs.o(t, n) && !qs.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, qs.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), qs.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, qs.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";
            var q = qs(91651),
                e = qs(73773),
                l = qs.n(e),
                i = Roblox,
                u = RobloxTracer;
            (Zt = Ae = Ae || {})[Zt.ok = 200] = "ok", Zt[Zt.accepted = 202] = "accepted", Zt[Zt.movedPermanently = 301] = "movedPermanently", Zt[Zt.badRequest = 400] = "badRequest", Zt[Zt.unauthorized = 401] = "unauthorized", Zt[Zt.forbidden = 403] = "forbidden", Zt[Zt.notFound = 404] = "notFound", Zt[Zt.methodNotAllowed = 405] = "methodNotAllowed", Zt[Zt.conflict = 409] = "conflict", Zt[Zt.payloadTooLarge = 413] = "payloadTooLarge", Zt[Zt.tooManyAttempts = 429] = "tooManyAttempts", Zt[Zt.serverError = 500] = "serverError", Zt[Zt.serviceUnavailable = 503] = "serviceUnavailable";
            var t = Object.freeze(Ae);
            (xe = $e = $e || {}).GET = "get", xe.HEAD = "head", xe.POST = "post", xe.PUT = "put", xe.DELETE = "delete", xe.OPTIONS = "options", xe.PATCH = "patch";
            var c = Object.freeze($e),
                d = function() {
                    return (d = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                h = "x-csrf-token",
                s = t.forbidden,
                v = i.XsrfToken.getToken();
            l().interceptors.request.use(function(e) {
                var t, n = e.method,
                    r = e.noCache,
                    o = e.headers,
                    a = e.url,
                    s = d({}, e);
                return n !== c.POST && n !== c.PATCH && n !== c.DELETE || (v = v || i.XsrfToken.getToken(), r && (s.headers = o || {}, s["Cache-Control"] = "no-cache, no-store, must-revalidate", s.Pragma = "no-cache", s.Expires = 0), s.headers[h] = v), u.isTracerEnabled && u.apiSiteRequestValidator.isApiSiteAvailableForTracing(a) && (o = u.instrumentation.createAndGetSpan(u.tracerConstants.operationNames.httpRequest), u.tags.setXHRRequestTags(o, {
                    component: "axios",
                    method: n,
                    url: a
                }), u.logs.setXHRRequestLogs(o), t = u.inject.httpRequestCarrier(o), Object.keys(t).forEach(function(e) {
                    s.headers[e] = t[e]
                }), s.tracerConfig = {
                    requestSpan: o
                }), s
            }, null), l().interceptors.response.use(function(e) {
                var t = e.status,
                    n = e.config,
                    r = n.url,
                    n = n.tracerConfig;
                return n && u.apiSiteRequestValidator.isApiSiteAvailableForTracing(r) && (n = n.requestSpan, u.tags.setXHRResponseTags(n, {
                    status: t
                }), u.logs.setXHRResponseSuccessLogs(n), u.instrumentation.finalizeSpan(n)), e
            }, function(e) {
                var t = e.config,
                    n = e.response;
                if (n) {
                    var r = n.status,
                        o = n.headers,
                        a = n.config,
                        o = o[h];
                    if (r === s && o) return a.headers[h] = o, v = o, i.XsrfToken.setToken(o), l().request(a);
                    null != a && a.tracerConfig && u.apiSiteRequestValidator.isApiSiteAvailableForTracing(a.url) && (a = a.tracerConfig.requestSpan, u.tags.setXHRResponseErrorTags(a, {
                        status: r
                    }), u.logs.setXHRResponseErrorLogs(a), u.instrumentation.finalizeSpan(a))
                }
                return null != t && t.fullError || l().isCancel(e) ? Promise.reject(e) : Promise.reject(n)
            });
            var P = l(),
                n = function() {
                    return (n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function r(e) {
                return e || Promise.reject(new Error("No config found")), P((e = n({}, t = e), t.noCache && (e.headers = n(n({}, e.headers), {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    Pragma: "no-cache",
                    Expires: 0
                })), t.authBearerToken && (e.headers = n(n({}, e.headers), {
                    "X-Auth-Bearer-Token": t.authBearerToken
                })), e));
                var t
            }

            function p(e, t) {
                return r(n(n({
                    method: c.GET,
                    url: e.url
                }, e), {
                    params: t
                }))
            }

            function m(e, t) {
                return r(n(n({
                    method: c.POST,
                    url: e.url
                }, e), {
                    data: t
                }))
            }
            var o, a, f = {
                    methods: c,
                    get: p,
                    post: m,
                    delete: function(e) {
                        return r(n({
                            method: c.DELETE,
                            url: e.url
                        }, e))
                    },
                    patch: function(e, t) {
                        return r(n(n({
                            method: c.PATCH,
                            url: e.url
                        }, e), {
                            data: t
                        }))
                    },
                    buildBatchPromises: function(e, t, n, r, o) {
                        for (var a = [], s = 0, i = e.slice(s, t), u = o || "userIds"; 0 < i.length;) {
                            var c = {};
                            c[u] = i, r ? a.push(m(n, c)) : a.push(p(n, c)), s += 1, i = e.slice(s * t, s * t + t)
                        }
                        return Promise.all(a)
                    },
                    createCancelToken: function() {
                        return P.CancelToken.source()
                    },
                    isCancelled: function(e) {
                        return P.isCancel(e)
                    }
                },
                g = (o = function(e, t) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                b = i.EnvironmentUrls.catalogApi.replace(/\/+$/, ""),
                y = ",",
                G = function(e, t, n) {
                    void 0 === t && (t = b), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                I = (a = Error, g(w, a), w);

            function w(e, t) {
                t = a.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var C, A = (C = function(e, t) {
                    return (C = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    C(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                T = function() {
                    return (T = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                L = function(e, s, i, u) {
                    return new(i = i || Promise)(function(n, t) {
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
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, s || [])).next())
                    })
                },
                S = function(n, r) {
                    var o, a, s, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
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
                                for (; i;) try {
                                    if (o = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                    switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            s = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < s[1]) {
                                                i.label = s[1], s = t;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2], i.ops.push(t);
                                                break
                                            }
                                            s[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = s = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function U(h) {
                var e = this;
                return {
                    v1AssetsAssetIdBundlesGet: function(s, i, u, c, d) {
                        return void 0 === d && (d = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("assetId", "Required parameter assetId was null or undefined when calling v1AssetsAssetIdBundlesGet.");
                                return o = "/v1/assets/{assetId}/bundles".replace("{assetId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), d), r = {}, o = {}, void 0 !== i && (o.sortOrder = i), void 0 !== u && (o.limit = u), void 0 !== c && (o.cursor = c), t.query = T(T(T({}, t.query), o), d.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), d.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdDetailsGet: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdDetailsGet.");
                                return o = "/v1/bundles/{bundleId}/details".replace("{bundleId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdRecommendationsGet: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdRecommendationsGet.");
                                return o = "/v1/bundles/{bundleId}/recommendations".replace("{bundleId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, void 0 !== i && (o.numItems = i), t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdUnpackPost: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdUnpackPost.");
                                return o = "/v1/bundles/{bundleId}/unpack".replace("{bundleId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "POST"
                                }, a), i), r = {}, o = {}, t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesDetailsGet: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("bundleIds", "Required parameter bundleIds was null or undefined when calling v1BundlesDetailsGet.");
                                return t = q.Qc("/v1/bundles/details", !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, s && (o.bundleIds = s.join(y)), t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1UsersUserIdBundlesBundleTypeGet: function(s, i, u, c, d, l) {
                        return void 0 === l && (l = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1UsersUserIdBundlesBundleTypeGet.");
                                if (null == i) throw new I("bundleType", "Required parameter bundleType was null or undefined when calling v1UsersUserIdBundlesBundleTypeGet.");
                                return o = "/v1/users/{userId}/bundles/{bundleType}".replace("{userId}", encodeURIComponent(String(s))).replace("{bundleType}", encodeURIComponent(String(i))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), l), r = {}, o = {}, void 0 !== u && (o.limit = u), void 0 !== c && (o.cursor = c), void 0 !== d && (o.sortOrder = d), t.query = T(T(T({}, t.query), o), l.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), l.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1UsersUserIdBundlesGet: function(s, i, u, c, d) {
                        return void 0 === d && (d = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1UsersUserIdBundlesGet.");
                                return o = "/v1/users/{userId}/bundles".replace("{userId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), d), r = {}, o = {}, void 0 !== i && (o.sortOrder = i), void 0 !== u && (o.limit = u), void 0 !== c && (o.cursor = c), t.query = T(T(T({}, t.query), o), d.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), d.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function R(u) {
                return {
                    v1AssetsAssetIdBundlesGet: function(t, r, o, a, s) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1AssetsAssetIdBundlesGet(t, r, o, a, s)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdDetailsGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1BundlesBundleIdDetailsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdRecommendationsGet: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1BundlesBundleIdRecommendationsGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdUnpackPost: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1BundlesBundleIdUnpackPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesDetailsGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1BundlesDetailsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1UsersUserIdBundlesBundleTypeGet: function(t, r, o, a, s, i) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1UsersUserIdBundlesBundleTypeGet(t, r, o, a, s, i)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1UsersUserIdBundlesGet: function(t, r, o, a, s) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, U(u).v1UsersUserIdBundlesGet(t, r, o, a, s)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(D = {}).Accessories = "Accessories", D.All = "All", D.AvatarAnimations = "AvatarAnimations", D.BackAccessories = "BackAccessories", D.BodyParts = "BodyParts", D.Clothing = "Clothing", D.Collectibles = "Collectibles", D.FaceAccessories = "FaceAccessories", D.Faces = "Faces", D.Featured = "Featured", D.FrontAccessories = "FrontAccessories", D.Gear = "Gear", D.HairAccessories = "HairAccessories", D.Hats = "Hats", D.Heads = "Heads", D.NeckAccessories = "NeckAccessories", D.Pants = "Pants", D.Shirts = "Shirts", D.ShoulderAccessories = "ShoulderAccessories", D.Tshirts = "Tshirts", D.WaistAccessories = "WaistAccessories", D.Bundles = "Bundles", D.AnimationBundles = "AnimationBundles", D.EmoteAnimations = "EmoteAnimations", D.CommunityCreations = "CommunityCreations", D.Melee = "Melee", D.Ranged = "Ranged", D.Explosive = "Explosive", D.PowerUp = "PowerUp", D.Navigation = "Navigation", D.Musical = "Musical", D.Social = "Social", D.Building = "Building", D.Transport = "Transport", D.Premium = "Premium", D.Recommended = "Recommended", (k = {}).Accessories = "Accessories", k.All = "All", k.AvatarAnimations = "AvatarAnimations", k.BodyParts = "BodyParts", k.Clothing = "Clothing", k.Collectibles = "Collectibles", k.Featured = "Featured", k.Gear = "Gear", k.CommunityCreations = "CommunityCreations", k.Premium = "Premium", k.Recommended = "Recommended", (te = {}).Accessories = "Accessories", te.All = "All", te.AvatarAnimations = "AvatarAnimations", te.BodyParts = "BodyParts", te.Clothing = "Clothing", te.Collectibles = "Collectibles", te.Featured = "Featured", te.Gear = "Gear", te.CommunityCreations = "CommunityCreations", te.Premium = "Premium", te.Recommended = "Recommended", (le = {}).User = "User", le.Group = "Group", (he = {}).All = "All", he.Robux = "Robux", he.Tickets = "Tickets", he.CustomRobux = "CustomRobux", he.CustomTickets = "CustomTickets", he.Free = "Free", (pe = {}).Relevance = "Relevance", pe.Favorited = "Favorited", pe.Sales = "Sales", pe.Updated = "Updated", pe.PriceAsc = "PriceAsc", pe.PriceDesc = "PriceDesc", (Ge = {}).Past12Hours = "Past12Hours", Ge.PastDay = "PastDay", Ge.Past3Days = "Past3Days", Ge.PastWeek = "PastWeek", Ge.PastMonth = "PastMonth", Ge.AllTime = "AllTime", (zt = {}).Accessories = "Accessories", zt.All = "All", zt.AvatarAnimations = "AvatarAnimations", zt.BodyParts = "BodyParts", zt.Clothing = "Clothing", zt.Collectibles = "Collectibles", zt.Featured = "Featured", zt.Gear = "Gear", zt.CommunityCreations = "CommunityCreations", zt.Premium = "Premium", zt.Recommended = "Recommended", (Kn = {}).Accessories = "Accessories", Kn.All = "All", Kn.AvatarAnimations = "AvatarAnimations", Kn.BackAccessories = "BackAccessories", Kn.BodyParts = "BodyParts", Kn.Clothing = "Clothing", Kn.Collectibles = "Collectibles", Kn.FaceAccessories = "FaceAccessories", Kn.Faces = "Faces", Kn.Featured = "Featured", Kn.FrontAccessories = "FrontAccessories", Kn.Gear = "Gear", Kn.HairAccessories = "HairAccessories", Kn.Hats = "Hats", Kn.Heads = "Heads", Kn.NeckAccessories = "NeckAccessories", Kn.Pants = "Pants", Kn.Shirts = "Shirts", Kn.ShoulderAccessories = "ShoulderAccessories", Kn.Tshirts = "Tshirts", Kn.WaistAccessories = "WaistAccessories", Kn.Bundles = "Bundles", Kn.AnimationBundles = "AnimationBundles", Kn.EmoteAnimations = "EmoteAnimations", Kn.CommunityCreations = "CommunityCreations", Kn.Melee = "Melee", Kn.Ranged = "Ranged", Kn.Explosive = "Explosive", Kn.PowerUp = "PowerUp", Kn.Navigation = "Navigation", Kn.Musical = "Musical", Kn.Social = "Social", Kn.Building = "Building", Kn.Transport = "Transport", Kn.Premium = "Premium", Kn.Recommended = "Recommended", (Qt = {}).Accessories = "Accessories", Qt.All = "All", Qt.AvatarAnimations = "AvatarAnimations", Qt.BodyParts = "BodyParts", Qt.Clothing = "Clothing", Qt.Collectibles = "Collectibles", Qt.Featured = "Featured", Qt.Gear = "Gear", Qt.CommunityCreations = "CommunityCreations", Qt.Premium = "Premium", Qt.Recommended = "Recommended", (e = {}).All = "All", e.Robux = "Robux", e.Tickets = "Tickets", e.CustomRobux = "CustomRobux", e.CustomTickets = "CustomTickets", e.Free = "Free", (Zt = {}).All = "All", Zt.Robux = "Robux", Zt.Tickets = "Tickets", Zt.CustomRobux = "CustomRobux", Zt.CustomTickets = "CustomTickets", Zt.Free = "Free", (Ae = {}).All = "All", Ae.Robux = "Robux", Ae.Tickets = "Tickets", Ae.CustomRobux = "CustomRobux", Ae.CustomTickets = "CustomTickets", Ae.Free = "Free", (xe = {}).Asset = "Asset", xe.Bundle = "Bundle", ($e = {}).Image = "Image", $e.TShirt = "TShirt", $e.Audio = "Audio", $e.Mesh = "Mesh", $e.Lua = "Lua", $e.HTML = "HTML", $e.Text = "Text", $e.Hat = "Hat", $e.Place = "Place", $e.Model = "Model", $e.Shirt = "Shirt", $e.Pants = "Pants", $e.Decal = "Decal", $e.Avatar = "Avatar", $e.Head = "Head", $e.Face = "Face", $e.Gear = "Gear", $e.Badge = "Badge", $e.GroupEmblem = "GroupEmblem", $e.Animation = "Animation", $e.Arms = "Arms", $e.Legs = "Legs", $e.Torso = "Torso", $e.RightArm = "RightArm", $e.LeftArm = "LeftArm", $e.LeftLeg = "LeftLeg", $e.RightLeg = "RightLeg", $e.Package = "Package", $e.YouTubeVideo = "YouTubeVideo", $e.GamePass = "GamePass", $e.App = "App", $e.Code = "Code", $e.Plugin = "Plugin", $e.SolidModel = "SolidModel", $e.MeshPart = "MeshPart", $e.HairAccessory = "HairAccessory", $e.FaceAccessory = "FaceAccessory", $e.NeckAccessory = "NeckAccessory", $e.ShoulderAccessory = "ShoulderAccessory", $e.FrontAccessory = "FrontAccessory", $e.BackAccessory = "BackAccessory", $e.WaistAccessory = "WaistAccessory", $e.ClimbAnimation = "ClimbAnimation", $e.DeathAnimation = "DeathAnimation", $e.FallAnimation = "FallAnimation", $e.IdleAnimation = "IdleAnimation", $e.JumpAnimation = "JumpAnimation", $e.RunAnimation = "RunAnimation", $e.SwimAnimation = "SwimAnimation", $e.WalkAnimation = "WalkAnimation", $e.PoseAnimation = "PoseAnimation", $e.LocalizationTableManifest = "LocalizationTableManifest", $e.LocalizationTableTranslation = "LocalizationTableTranslation", $e.EmoteAnimation = "EmoteAnimation", $e.Video = "Video", $e.TexturePack = "TexturePack", (t = {}).BodyParts = "BodyParts", t.AvatarAnimations = "AvatarAnimations", (g = {}).All = "All", g.Tutorial = "Tutorial", g.Scary = "Scary", g.TownAndCity = "TownAndCity", g.War = "War", g.Funny = "Funny", g.Fantasy = "Fantasy", g.Adventure = "Adventure", g.SciFi = "SciFi", g.Pirate = "Pirate", g.FPS = "FPS", g.RPG = "RPG", g.Sports = "Sports", g.Ninja = "Ninja", g.WildWest = "WildWest", (D = {}).New = "New", D.Sale = "Sale", D.XboxExclusive = "XboxExclusive", D.AmazonExclusive = "AmazonExclusive", D.GooglePlayExclusive = "GooglePlayExclusive", D.IosExclusive = "IosExclusive", D.SaleTimer = "SaleTimer", (k = {}).ThirteenPlus = "ThirteenPlus", k.LimitedUnique = "LimitedUnique", k.Limited = "Limited", k.BuildersClub = "BuildersClub", k.TurboBuildersClub = "TurboBuildersClub", k.OutrageousBuildersClub = "OutrageousBuildersClub", k.Rthro = "Rthro", (te = {}).User = "User", te.Group = "Group", (le = {}).Asset = "Asset", le.Bundle = "Bundle", (he = {}).Image = "Image", he.TShirt = "TShirt", he.Audio = "Audio", he.Mesh = "Mesh", he.Lua = "Lua", he.HTML = "HTML", he.Text = "Text", he.Hat = "Hat", he.Place = "Place", he.Model = "Model", he.Shirt = "Shirt", he.Pants = "Pants", he.Decal = "Decal", he.Avatar = "Avatar", he.Head = "Head", he.Face = "Face", he.Gear = "Gear", he.Badge = "Badge", he.GroupEmblem = "GroupEmblem", he.Animation = "Animation", he.Arms = "Arms", he.Legs = "Legs", he.Torso = "Torso", he.RightArm = "RightArm", he.LeftArm = "LeftArm", he.LeftLeg = "LeftLeg", he.RightLeg = "RightLeg", he.Package = "Package", he.YouTubeVideo = "YouTubeVideo", he.GamePass = "GamePass", he.App = "App", he.Code = "Code", he.Plugin = "Plugin", he.SolidModel = "SolidModel", he.MeshPart = "MeshPart", he.HairAccessory = "HairAccessory", he.FaceAccessory = "FaceAccessory", he.NeckAccessory = "NeckAccessory", he.ShoulderAccessory = "ShoulderAccessory", he.FrontAccessory = "FrontAccessory", he.BackAccessory = "BackAccessory", he.WaistAccessory = "WaistAccessory", he.ClimbAnimation = "ClimbAnimation", he.DeathAnimation = "DeathAnimation", he.FallAnimation = "FallAnimation", he.IdleAnimation = "IdleAnimation", he.JumpAnimation = "JumpAnimation", he.RunAnimation = "RunAnimation", he.SwimAnimation = "SwimAnimation", he.WalkAnimation = "WalkAnimation", he.PoseAnimation = "PoseAnimation", he.LocalizationTableManifest = "LocalizationTableManifest", he.LocalizationTableTranslation = "LocalizationTableTranslation", he.EmoteAnimation = "EmoteAnimation", he.Video = "Video", he.TexturePack = "TexturePack", (pe = {}).BodyParts = "BodyParts", pe.AvatarAnimations = "AvatarAnimations", (Ge = {}).All = "All", Ge.Tutorial = "Tutorial", Ge.Scary = "Scary", Ge.TownAndCity = "TownAndCity", Ge.War = "War", Ge.Funny = "Funny", Ge.Fantasy = "Fantasy", Ge.Adventure = "Adventure", Ge.SciFi = "SciFi", Ge.Pirate = "Pirate", Ge.FPS = "FPS", Ge.RPG = "RPG", Ge.Sports = "Sports", Ge.Ninja = "Ninja", Ge.WildWest = "WildWest", (zt = {}).New = "New", zt.Sale = "Sale", zt.XboxExclusive = "XboxExclusive", zt.AmazonExclusive = "AmazonExclusive", zt.GooglePlayExclusive = "GooglePlayExclusive", zt.IosExclusive = "IosExclusive", zt.SaleTimer = "SaleTimer", (Kn = {}).ThirteenPlus = "ThirteenPlus", Kn.LimitedUnique = "LimitedUnique", Kn.Limited = "Limited", Kn.BuildersClub = "BuildersClub", Kn.TurboBuildersClub = "TurboBuildersClub", Kn.OutrageousBuildersClub = "OutrageousBuildersClub", Kn.Rthro = "Rthro", (Qt = {}).User = "User", Qt.Group = "Group", (e = {}).Accessories = "Accessories", e.All = "All", e.AvatarAnimations = "AvatarAnimations", e.BodyParts = "BodyParts", e.Clothing = "Clothing", e.Collectibles = "Collectibles", e.Featured = "Featured", e.Gear = "Gear", e.CommunityCreations = "CommunityCreations", e.Premium = "Premium", e.Recommended = "Recommended", (Zt = {}).Accessories = "Accessories", Zt.All = "All", Zt.AvatarAnimations = "AvatarAnimations", Zt.BackAccessories = "BackAccessories", Zt.BodyParts = "BodyParts", Zt.Clothing = "Clothing", Zt.Collectibles = "Collectibles", Zt.FaceAccessories = "FaceAccessories", Zt.Faces = "Faces", Zt.Featured = "Featured", Zt.FrontAccessories = "FrontAccessories", Zt.Gear = "Gear", Zt.HairAccessories = "HairAccessories", Zt.Hats = "Hats", Zt.Heads = "Heads", Zt.NeckAccessories = "NeckAccessories", Zt.Pants = "Pants", Zt.Shirts = "Shirts", Zt.ShoulderAccessories = "ShoulderAccessories", Zt.Tshirts = "Tshirts", Zt.WaistAccessories = "WaistAccessories", Zt.Bundles = "Bundles", Zt.AnimationBundles = "AnimationBundles", Zt.EmoteAnimations = "EmoteAnimations", Zt.CommunityCreations = "CommunityCreations", Zt.Melee = "Melee", Zt.Ranged = "Ranged", Zt.Explosive = "Explosive", Zt.PowerUp = "PowerUp", Zt.Navigation = "Navigation", Zt.Musical = "Musical", Zt.Social = "Social", Zt.Building = "Building", Zt.Transport = "Transport", Zt.Premium = "Premium", Zt.Recommended = "Recommended", (Ae = {}).Past12Hours = "Past12Hours", Ae.PastDay = "PastDay", Ae.Past3Days = "Past3Days", Ae.PastWeek = "PastWeek", Ae.PastMonth = "PastMonth", Ae.AllTime = "AllTime", (xe = {}).All = "All", xe.Robux = "Robux", xe.Tickets = "Tickets", xe.CustomRobux = "CustomRobux", xe.CustomTickets = "CustomTickets", xe.Free = "Free", ($e = {}).TownAndCity = "TownAndCity", $e.Medieval = "Medieval", $e.SciFi = "SciFi", $e.Fighting = "Fighting", $e.Horror = "Horror", $e.Naval = "Naval", $e.Adventure = "Adventure", $e.Sports = "Sports", $e.Comedy = "Comedy", $e.Western = "Western", $e.Military = "Military", $e.Building = "Building", $e.Fps = "Fps", $e.Rpg = "Rpg", (t = {}).Relevance = "Relevance", t.Favorited = "Favorited", t.Sales = "Sales", t.Updated = "Updated", t.PriceAsc = "PriceAsc", t.PriceDesc = "PriceDesc", (g = {}).User = "User", g.Group = "Group", (D = {}).Asset = "Asset", D.Bundle = "Bundle", (k = {}).Accessories = "Accessories", k.All = "All", k.AvatarAnimations = "AvatarAnimations", k.BodyParts = "BodyParts", k.Clothing = "Clothing", k.Collectibles = "Collectibles", k.Featured = "Featured", k.Gear = "Gear", k.CommunityCreations = "CommunityCreations", k.Premium = "Premium", k.Recommended = "Recommended", (te = {}).TownAndCity = "TownAndCity", te.Medieval = "Medieval", te.SciFi = "SciFi", te.Fighting = "Fighting", te.Horror = "Horror", te.Naval = "Naval", te.Adventure = "Adventure", te.Sports = "Sports", te.Comedy = "Comedy", te.Western = "Western", te.Military = "Military", te.Building = "Building", te.Fps = "Fps", te.Rpg = "Rpg", (le = {}).Asset = "Asset", le.Bundle = "Bundle", (he = {}).All = "All", he.Robux = "Robux", he.Tickets = "Tickets", he.CustomRobux = "CustomRobux", he.CustomTickets = "CustomTickets", he.Free = "Free", (pe = {}).Past12Hours = "Past12Hours", pe.PastDay = "PastDay", pe.Past3Days = "Past3Days", pe.PastWeek = "PastWeek", pe.PastMonth = "PastMonth", pe.AllTime = "AllTime", (Ge = {}).Relevance = "Relevance", Ge.Favorited = "Favorited", Ge.Sales = "Sales", Ge.Updated = "Updated", Ge.PriceAsc = "PriceAsc", Ge.PriceDesc = "PriceDesc", (zt = {}).Asc = "Asc", zt.Desc = "Desc", (Kn = {}).Accessories = "Accessories", Kn.All = "All", Kn.AvatarAnimations = "AvatarAnimations", Kn.BackAccessories = "BackAccessories", Kn.BodyParts = "BodyParts", Kn.Clothing = "Clothing", Kn.Collectibles = "Collectibles", Kn.FaceAccessories = "FaceAccessories", Kn.Faces = "Faces", Kn.Featured = "Featured", Kn.FrontAccessories = "FrontAccessories", Kn.Gear = "Gear", Kn.HairAccessories = "HairAccessories", Kn.Hats = "Hats", Kn.Heads = "Heads", Kn.NeckAccessories = "NeckAccessories", Kn.Pants = "Pants", Kn.Shirts = "Shirts", Kn.ShoulderAccessories = "ShoulderAccessories", Kn.Tshirts = "Tshirts", Kn.WaistAccessories = "WaistAccessories", Kn.Bundles = "Bundles", Kn.AnimationBundles = "AnimationBundles", Kn.EmoteAnimations = "EmoteAnimations", Kn.CommunityCreations = "CommunityCreations", Kn.Melee = "Melee", Kn.Ranged = "Ranged", Kn.Explosive = "Explosive", Kn.PowerUp = "PowerUp", Kn.Navigation = "Navigation", Kn.Musical = "Musical", Kn.Social = "Social", Kn.Building = "Building", Kn.Transport = "Transport", Kn.Premium = "Premium", Kn.Recommended = "Recommended", (Qt = {}).Asc = "Asc", Qt.Desc = "Desc", (e = {}).Forward = "Forward", e.Backward = "Backward", (Zt = {}).Asc = "Asc", Zt.Desc = "Desc", (Ae = {}).Forward = "Forward", Ae.Backward = "Backward", (xe = {}).Asc = "Asc", xe.Desc = "Desc", ($e = {}).Forward = "Forward", $e.Backward = "Backward", (t = {}).Asc = "Asc", t.Desc = "Desc", (g = {}).Forward = "Forward", g.Backward = "Backward";
            var O, D = (A(x, O = G), x.prototype.v1AssetsAssetIdBundlesGet = function(e, t, n, r, o) {
                var a = this;
                return R(this.configuration).v1AssetsAssetIdBundlesGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, x.prototype.v1BundlesBundleIdDetailsGet = function(e, t) {
                var n = this;
                return R(this.configuration).v1BundlesBundleIdDetailsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, x.prototype.v1BundlesBundleIdRecommendationsGet = function(e, t, n) {
                var r = this;
                return R(this.configuration).v1BundlesBundleIdRecommendationsGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, x.prototype.v1BundlesBundleIdUnpackPost = function(e, t) {
                var n = this;
                return R(this.configuration).v1BundlesBundleIdUnpackPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, x.prototype.v1BundlesDetailsGet = function(e, t) {
                var n = this;
                return R(this.configuration).v1BundlesDetailsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, x.prototype.v1UsersUserIdBundlesBundleTypeGet = function(e, t, n, r, o, a) {
                var s = this;
                return R(this.configuration).v1UsersUserIdBundlesBundleTypeGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, x.prototype.v1UsersUserIdBundlesGet = function(e, t, n, r, o) {
                var a = this;
                return R(this.configuration).v1UsersUserIdBundlesGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, x);

            function x() {
                return null !== O && O.apply(this, arguments) || this
            }

            function B(c) {
                var e = this;
                return {
                    v1CatalogItemsDetailsPost: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("model", "Required parameter model was null or undefined when calling v1CatalogItemsDetailsPost.");
                                return t = q.Qc("/v1/catalog/items/details", !0), c && (a = c.baseOptions), n = T(T({
                                    method: "POST"
                                }, a), i), o = {}, (r = {})["Content-Type"] = "application/json", t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), a = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogItemsItemIdDetailsGet: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("itemId", "Required parameter itemId was null or undefined when calling v1CatalogItemsItemIdDetailsGet.");
                                if (null == i) throw new I("itemType", "Required parameter itemType was null or undefined when calling v1CatalogItemsItemIdDetailsGet.");
                                return o = "/v1/catalog/items/{itemId}/details".replace("{itemId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, void 0 !== i && (o.itemType = i), t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogMetadataGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/catalog/metadata", !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogSortsGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/catalog/sorts", !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function E(a) {
                return {
                    v1CatalogItemsDetailsPost: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, B(a).v1CatalogItemsDetailsPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogItemsItemIdDetailsGet: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, B(a).v1CatalogItemsItemIdDetailsGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogMetadataGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, B(a).v1CatalogMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogSortsGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, B(a).v1CatalogSortsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var F, j, z, N, k = (A(W, F = G), W.prototype.v1CatalogItemsDetailsPost = function(e, t) {
                var n = this;
                return E(this.configuration).v1CatalogItemsDetailsPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, W.prototype.v1CatalogItemsItemIdDetailsGet = function(e, t, n) {
                var r = this;
                return E(this.configuration).v1CatalogItemsItemIdDetailsGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, W.prototype.v1CatalogMetadataGet = function(e) {
                var t = this;
                return E(this.configuration).v1CatalogMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, W.prototype.v1CatalogSortsGet = function(e) {
                var t = this;
                return E(this.configuration).v1CatalogSortsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, W);

            function W() {
                return null !== F && F.apply(this, arguments) || this
            }

            function _(i) {
                var e = this;
                return {
                    v1AssetToCategoryGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/asset-to-category", !0), i && (a = i.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AssetToSubcategoryGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/asset-to-subcategory", !0), i && (a = i.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CategoriesGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/categories", !0), i && (a = i.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SubcategoriesGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/subcategories", !0), i && (a = i.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function M(r) {
                return {
                    v1AssetToCategoryGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _(r).v1AssetToCategoryGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AssetToSubcategoryGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _(r).v1AssetToSubcategoryGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CategoriesGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _(r).v1CategoriesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SubcategoriesGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _(r).v1SubcategoriesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Q() {
                return null !== j && j.apply(this, arguments) || this
            }

            function H(o) {
                return {
                    v1ExclusiveItemsAppStoreTypeBundlesGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(u) {
                                            var e = this;
                                            return {
                                                v1ExclusiveItemsAppStoreTypeBundlesGet: function(s, i) {
                                                    return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                                                        var t, n, r, o, a;
                                                        return S(this, function(e) {
                                                            if (null == s) throw new I("appStoreType", "Required parameter appStoreType was null or undefined when calling v1ExclusiveItemsAppStoreTypeBundlesGet.");
                                                            return o = "/v1/exclusive-items/{appStoreType}/bundles".replace("{appStoreType}", encodeURIComponent(String(s))), t = q.Qc(o, !0), u && (a = u.baseOptions), n = T(T({
                                                                method: "GET"
                                                            }, a), i), r = {}, o = {}, t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                                                url: q.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(o).v1ExclusiveItemsAppStoreTypeBundlesGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function V() {
                return null !== z && z.apply(this, arguments) || this
            }

            function J(c) {
                var e = this;
                return {
                    v1FavoritesAssetsAssetIdCountGet: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesAssetsAssetIdCountGet.");
                                return o = "/v1/favorites/assets/{assetId}/count".replace("{assetId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesBundlesBundleIdCountGet: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesBundlesBundleIdCountGet.");
                                return o = "/v1/favorites/bundles/{bundleId}/count".replace("{bundleId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete.");
                                if (null == i) throw new I("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete.");
                                return o = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{assetId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet.");
                                if (null == i) throw new I("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet.");
                                return o = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{assetId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoritePost: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoritePost.");
                                if (null == i) throw new I("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoritePost.");
                                return o = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{assetId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "POST"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete.");
                                if (null == i) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete.");
                                return o = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{bundleId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet.");
                                if (null == i) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet.");
                                return o = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{bundleId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoritePost: function(s, i, u) {
                        return void 0 === u && (u = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoritePost.");
                                if (null == i) throw new I("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoritePost.");
                                return o = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(s))).replace("{bundleId}", encodeURIComponent(String(i))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = T(T({
                                    method: "POST"
                                }, a), u), r = {}, o = {}, t.query = T(T(T({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function K(a) {
                return {
                    v1FavoritesAssetsAssetIdCountGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesAssetsAssetIdCountGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesBundlesBundleIdCountGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesBundlesBundleIdCountGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoritePost: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoritePost: function(t, r, o) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, J(a).v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function $() {
                return null !== N && N.apply(this, arguments) || this
            }

            function X(d) {
                var e = this;
                return {
                    v1RecommendationsAssetAssetTypeIdGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                if (null == s) throw new I("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v1RecommendationsAssetAssetTypeIdGet.");
                                return o = "/v1/recommendations/asset/{assetTypeId}".replace("{assetTypeId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.numItems = i), void 0 !== u && (o.contextAssetId = u), t.query = T(T(T({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1RecommendationsMetadataGet: function(s, i) {
                        return void 0 === i && (i = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/recommendations/metadata", !0), d && (a = d.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, void 0 !== s && (o.page = s), t.query = T(T(T({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Y(s) {
                return {
                    v1RecommendationsAssetAssetTypeIdGet: function(t, r, o, a) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, X(s).v1RecommendationsAssetAssetTypeIdGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1RecommendationsMetadataGet: function(t, r) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, X(s).v1RecommendationsMetadataGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            A(Q, j = G), Q.prototype.v1AssetToCategoryGet = function(e) {
                var t = this;
                return M(this.configuration).v1AssetToCategoryGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Q.prototype.v1AssetToSubcategoryGet = function(e) {
                var t = this;
                return M(this.configuration).v1AssetToSubcategoryGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Q.prototype.v1CategoriesGet = function(e) {
                var t = this;
                return M(this.configuration).v1CategoriesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Q.prototype.v1SubcategoriesGet = function(e) {
                var t = this;
                return M(this.configuration).v1SubcategoriesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, A(V, z = G), V.prototype.v1ExclusiveItemsAppStoreTypeBundlesGet = function(e, t) {
                var n = this;
                return H(this.configuration).v1ExclusiveItemsAppStoreTypeBundlesGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, A($, N = G), $.prototype.v1FavoritesAssetsAssetIdCountGet = function(e, t) {
                var n = this;
                return K(this.configuration).v1FavoritesAssetsAssetIdCountGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, $.prototype.v1FavoritesBundlesBundleIdCountGet = function(e, t) {
                var n = this;
                return K(this.configuration).v1FavoritesBundlesBundleIdCountGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoritePost = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, $.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoritePost = function(e, t, n) {
                var r = this;
                return K(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            };
            var Z, ee, te = (A(ne, Z = G), ne.prototype.v1RecommendationsAssetAssetTypeIdGet = function(e, t, n, r) {
                var o = this;
                return Y(this.configuration).v1RecommendationsAssetAssetTypeIdGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ne.prototype.v1RecommendationsMetadataGet = function(e, t) {
                var n = this;
                return Y(this.configuration).v1RecommendationsMetadataGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ne);

            function ne() {
                return null !== Z && Z.apply(this, arguments) || this
            }

            function re(C) {
                var e = this;
                return {
                    v1SearchItemsDetailsGet: function(s, i, u, c, d, l, h, v, p, m, f, g, y, G, I, P, b, w) {
                        return void 0 === w && (w = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/search/items/details", !0), C && (a = C.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), w), r = {}, o = {}, void 0 !== s && (o["model.category"] = s), void 0 !== i && (o["model.subcategory"] = i), void 0 !== u && (o["model.sortAggregation"] = u), void 0 !== c && (o["model.sortCurrency"] = c), d && (o["model.genres"] = d), void 0 !== l && (o["model.sortType"] = l), void 0 !== h && (o["model.creatorType"] = h), void 0 !== v && (o["model.creatorTargetId"] = v), void 0 !== p && (o["model.creatorName"] = p), void 0 !== m && (o["model.maxPrice"] = m), void 0 !== f && (o["model.minPrice"] = f), void 0 !== g && (o["model.keyword"] = g), void 0 !== y && (o["model.includeNotForSale"] = y), G && (o["model.tagNames"] = G), void 0 !== I && (o.sortOrder = I), void 0 !== P && (o.limit = P), void 0 !== b && (o.cursor = b), t.query = T(T(T({}, t.query), o), w.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), w.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SearchItemsGet: function(s, i, u, c, d, l, h, v, p, m, f, g, y, G, I, P, b, w) {
                        return void 0 === w && (w = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/search/items", !0), C && (a = C.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), w), r = {}, o = {}, void 0 !== s && (o["model.category"] = s), void 0 !== i && (o["model.subcategory"] = i), void 0 !== u && (o["model.sortAggregation"] = u), void 0 !== c && (o["model.sortCurrency"] = c), d && (o["model.genres"] = d), void 0 !== l && (o["model.sortType"] = l), void 0 !== h && (o["model.creatorType"] = h), void 0 !== v && (o["model.creatorTargetId"] = v), void 0 !== p && (o["model.creatorName"] = p), void 0 !== m && (o["model.maxPrice"] = m), void 0 !== f && (o["model.minPrice"] = f), void 0 !== g && (o["model.keyword"] = g), void 0 !== y && (o["model.includeNotForSale"] = y), G && (o["model.tagNames"] = G), void 0 !== I && (o.sortOrder = I), void 0 !== P && (o.limit = P), void 0 !== b && (o.cursor = b), t.query = T(T(T({}, t.query), o), w.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), w.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SearchNavigationMenuItemsGet: function(s) {
                        return void 0 === s && (s = {}), L(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return S(this, function(e) {
                                return t = q.Qc("/v1/search/navigation-menu-items", !0), C && (a = C.baseOptions), n = T(T({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = T(T(T({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = T(T(T({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function oe(I) {
                return {
                    v1SearchItemsDetailsGet: function(t, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g, y, G) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, re(I).v1SearchItemsDetailsGet(t, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g, y, G)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SearchItemsGet: function(t, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g, y, G) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, re(I).v1SearchItemsGet(t, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g, y, G)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SearchNavigationMenuItemsGet: function(t) {
                        return L(this, void 0, Promise, function() {
                            var n;
                            return S(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, re(I).v1SearchNavigationMenuItemsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = b);
                                            t = T(T({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ae() {
                return null !== ee && ee.apply(this, arguments) || this
            }
            A(ae, ee = G), ae.prototype.v1SearchItemsDetailsGet = function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g) {
                var y = this;
                return oe(this.configuration).v1SearchItemsDetailsGet(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g).then(function(e) {
                    return e(y.axios, y.basePath)
                })
            }, ae.prototype.v1SearchItemsGet = function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g) {
                var y = this;
                return oe(this.configuration).v1SearchItemsGet(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m, f, g).then(function(e) {
                    return e(y.axios, y.basePath)
                })
            }, ae.prototype.v1SearchNavigationMenuItemsGet = function(e) {
                var t = this;
                return oe(this.configuration).v1SearchNavigationMenuItemsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var se, ie, ue = new D,
                ce = new k,
                de = new te,
                le = {
                    getAssetRecommendations: function(e, t, n) {
                        return de.v1RecommendationsAssetAssetTypeIdGet(e, t, n)
                    },
                    getBundleRecommendations: function(e, t) {
                        return ue.v1BundlesBundleIdRecommendationsGet(e, t, {
                            withCredentials: !0
                        })
                    },
                    postItemDetails: function(e) {
                        return ce.v1CatalogItemsDetailsPost(e, {
                            withCredentials: !0
                        })
                    }
                },
                he = (se = function(e, t) {
                    return (se = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    se(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                ve = i.EnvironmentUrls.gameInternationalizationApi.replace(/\/+$/, ""),
                pe = function(e, t, n) {
                    void 0 === t && (t = ve), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                me = (ie = Error, he(fe, ie), fe);

            function fe(e, t) {
                t = ie.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var ge, ye, Ge = (ge = function(e, t) {
                    return (ge = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    ge(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ie = function() {
                    return (Ie = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Pe = function(e, s, i, u) {
                    return new(i = i || Promise)(function(n, t) {
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
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, s || [])).next())
                    })
                },
                be = function(n, r) {
                    var o, a, s, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
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
                                for (; i;) try {
                                    if (o = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                    switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            s = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < s[1]) {
                                                i.label = s[1], s = t;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2], i.ops.push(t);
                                                break
                                            }
                                            s[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = s = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function we(c) {
                var e = this;
                return {
                    v1AutolocalizationGamesGameIdAutolocalizationtablePatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePatch.");
                                return r = "/v1/autolocalization/games/{gameId}/autolocalizationtable".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutolocalizationtablePost: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePost.");
                                return o = "/v1/autolocalization/games/{gameId}/autolocalizationtable".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost.");
                                return r = "/v1/autolocalization/games/{gameId}/autoscrape-cleanup-request".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdGet.");
                                return o = "/v1/autolocalization/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdPatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdPatch.");
                                return r = "/v1/autolocalization/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdSettingsPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdSettingsPatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdSettingsPatch.");
                                return r = "/v1/autolocalization/games/{gameId}/settings".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationMetadataGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/autolocalization/metadata", !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Ce(a) {
                return {
                    v1AutolocalizationGamesGameIdAutolocalizationtablePatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdAutolocalizationtablePatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutolocalizationtablePost: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdAutolocalizationtablePost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdSettingsPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationGamesGameIdSettingsPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationMetadataGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, we(a).v1AutolocalizationMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(zt = {}).User = "User", zt.Group = "Group", (Kn = {}).Asc = "Asc", Kn.Desc = "Desc", (Qt = {}).Approved = "Approved", Qt.PendingReview = "PendingReview", Qt.UnAvailable = "UnAvailable", Qt.Rejected = "Rejected", Qt.Error = "Error", (e = {}).Approved = "Approved", e.PendingReview = "PendingReview", e.UnAvailable = "UnAvailable", e.Rejected = "Rejected", e.Error = "Error", (Zt = {}).Approved = "Approved", Zt.PendingReview = "PendingReview", Zt.UnAvailable = "UnAvailable", Zt.Rejected = "Rejected", Zt.Error = "Error", (Ae = {}).Approved = "Approved", Ae.PendingReview = "PendingReview", Ae.UnAvailable = "UnAvailable", Ae.Rejected = "Rejected", Ae.Error = "Error", (xe = {}).Name = "Name", xe.Description = "Description", ($e = {}).Asc = "Asc", $e.Desc = "Desc", (t = {}).User = "User", t.Group = "Group", (g = {}).Language = "Language", g.Locale = "Locale", (A = {}).Language = "Language", A.Locale = "Locale", (G = {}).Language = "Language", G.Locale = "Locale", (D = {}).Approved = "Approved", D.PendingReview = "PendingReview", D.UnAvailable = "UnAvailable", D.Rejected = "Rejected", D.Error = "Error", (k = ye = ye || {}).Language = "Language", k.Locale = "Locale", (te = {}).GameTranslationStatus = "GameTranslationStatus", te.GameTranslationStatusForTranslatorGroup = "GameTranslationStatusForTranslatorGroup", te.GameTranslationStatusForTranslator = "GameTranslationStatusForTranslator", te.Test = "Test", (he = {}).InProgress = "inProgress", he.Ready = "ready", he.Unavailable = "unavailable", (zt = {}).Automation = "Automation", zt.User = "User", (Kn = {}).LanguageOrLocaleSupportedForGame = "LanguageOrLocaleSupportedForGame", Kn.LanguageOrLocaleNotSupportedForGame = "LanguageOrLocaleNotSupportedForGame", Kn.LanguageOrLocaleIsSource = "LanguageOrLocaleIsSource", Kn.InsufficientPermission = "InsufficientPermission", Kn.GameDoesNotExist = "GameDoesNotExist", Kn.GameDoesNotHaveTable = "GameDoesNotHaveTable", Kn.UnknownError = "UnknownError", (Qt = {}).Success = "Success", Qt.LanguageOrLocaleNotSupportedForGame = "LanguageOrLocaleNotSupportedForGame", (e = {}).Language = "Language", e.Locale = "Locale", (Zt = {}).User = "User", Zt.Automation = "Automation";
            var qe, Ae = (Ge(Te, qe = pe), Te.prototype.v1AutolocalizationGamesGameIdAutolocalizationtablePatch = function(e, t, n) {
                var r = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdAutolocalizationtablePatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Te.prototype.v1AutolocalizationGamesGameIdAutolocalizationtablePost = function(e, t) {
                var n = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdAutolocalizationtablePost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Te.prototype.v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost = function(e, t, n) {
                var r = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Te.prototype.v1AutolocalizationGamesGameIdGet = function(e, t) {
                var n = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Te.prototype.v1AutolocalizationGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Te.prototype.v1AutolocalizationGamesGameIdSettingsPatch = function(e, t, n) {
                var r = this;
                return Ce(this.configuration).v1AutolocalizationGamesGameIdSettingsPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Te.prototype.v1AutolocalizationMetadataGet = function(e) {
                var t = this;
                return Ce(this.configuration).v1AutolocalizationMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Te);

            function Te() {
                return null !== qe && qe.apply(this, arguments) || this
            }

            function Le(c) {
                var e = this;
                return {
                    v1AutomaticTranslationGamesGameIdFeatureStatusGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutomaticTranslationGamesGameIdFeatureStatusGet.");
                                return o = "/v1/automatic-translation/games/{gameId}/feature-status".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutomaticTranslationGamesGameIdQuotaGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1AutomaticTranslationGamesGameIdQuotaGet.");
                                return o = "/v1/automatic-translation/games/{gameId}/quota".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet.");
                                return o = "/v1/automatic-translation/languages/{languageCode}/target-languages".replace("{languageCode}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, i && (o.targetLanguages = i), t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Se(a) {
                return {
                    v1AutomaticTranslationGamesGameIdFeatureStatusGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Le(a).v1AutomaticTranslationGamesGameIdFeatureStatusGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutomaticTranslationGamesGameIdQuotaGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Le(a).v1AutomaticTranslationGamesGameIdQuotaGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Le(a).v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var Ue, Re, Oe, De, xe = (Ge(Be, Ue = pe), Be.prototype.v1AutomaticTranslationGamesGameIdFeatureStatusGet = function(e, t) {
                var n = this;
                return Se(this.configuration).v1AutomaticTranslationGamesGameIdFeatureStatusGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Be.prototype.v1AutomaticTranslationGamesGameIdQuotaGet = function(e, t) {
                var n = this;
                return Se(this.configuration).v1AutomaticTranslationGamesGameIdQuotaGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Be.prototype.v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet = function(e, t, n) {
                var r = this;
                return Se(this.configuration).v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Be);

            function Be() {
                return null !== Ue && Ue.apply(this, arguments) || this
            }

            function Ee(l) {
                var e = this;
                return {
                    v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsGet.");
                                return o = "/v1/badges/{badgeId}/icons".replace("{badgeId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.width = i), void 0 !== u && (o.height = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/badges/{badgeId}/icons/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost: function(i, u, c, d) {
                        return void 0 === d && (d = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a, s;
                            return be(this, function(e) {
                                if (null == i) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost.");
                                return a = "/v1/badges/{badgeId}/icons/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(u))), t = q.Qc(a, !0), l && (s = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, s), d), r = {}, o = {}, a = new FormData, void 0 !== c && a.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = Ie(Ie(Ie({}, t.query), o), d.query), delete t.search, s = s && s.headers ? s.headers : {}, n.headers = Ie(Ie(Ie({}, r), s), d.headers), n.data = a, [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionGet.");
                                return o = "/v1/badges/{badgeId}/name-description".replace("{badgeId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/badges/{badgeId}/name-description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/name-description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/name/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Fe(s) {
                return {
                    v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdIconsGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ee(s).v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function je() {
                return null !== Re && Re.apply(this, arguments) || this
            }

            function ze(l) {
                var e = this;
                return {
                    v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsGet.");
                                return o = "/v1/developer-products/{developerProductId}/icons".replace("{developerProductId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.width = i), void 0 !== u && (o.height = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/developer-products/{developerProductId}/icons/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost: function(i, u, c, d) {
                        return void 0 === d && (d = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a, s;
                            return be(this, function(e) {
                                if (null == i) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost.");
                                return a = "/v1/developer-products/{developerProductId}/icons/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(u))), t = q.Qc(a, !0), l && (s = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, s), d), r = {}, o = {}, a = new FormData, void 0 !== c && a.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = Ie(Ie(Ie({}, t.query), o), d.query), delete t.search, s = s && s.headers ? s.headers : {}, n.headers = Ie(Ie(Ie({}, r), s), d.headers), n.data = a, [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionGet.");
                                return o = "/v1/developer-products/{developerProductId}/name-description".replace("{developerProductId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/developer-products/{developerProductId}/name-description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/name-description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/name/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Ne(s) {
                return {
                    v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdIconsGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ze(s).v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ke() {
                return null !== Oe && Oe.apply(this, arguments) || this
            }

            function We(l) {
                var e = this;
                return {
                    v1GameIconGamesGameIdGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdGet.");
                                return o = "/v1/game-icon/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.width = i), void 0 !== u && (o.height = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/game-icon/games/{gameId}/language-codes/{languageCode}".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodePost: function(i, u, c, d) {
                        return void 0 === d && (d = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a, s;
                            return be(this, function(e) {
                                if (null == i) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodePost.");
                                if (null == u) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodePost.");
                                return a = "/v1/game-icon/games/{gameId}/language-codes/{languageCode}".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(u))), t = q.Qc(a, !0), l && (s = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, s), d), r = {}, o = {}, a = new FormData, void 0 !== c && a.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = Ie(Ie(Ie({}, t.query), o), d.query), delete t.search, s = s && s.headers ? s.headers : {}, n.headers = Ie(Ie(Ie({}, r), s), d.headers), n.data = a, [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function _e(s) {
                return {
                    v1GameIconGamesGameIdGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, We(s).v1GameIconGamesGameIdGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, We(s).v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodePost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, We(s).v1GameIconGamesGameIdLanguageCodesLanguageCodePost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Me() {
                return null !== De && De.apply(this, arguments) || this
            }

            function Qe(d) {
                var e = this;
                return {
                    v1GameLocalizationStatusGameIdTranslationCountsGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationStatusGameIdTranslationCountsGet.");
                                return o = "/v1/game-localization-status/{gameId}/translation-counts".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameIds", "Required parameter gameIds was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                if (null == i) throw new me("languageOrLocaleCode", "Required parameter languageOrLocaleCode was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                if (null == u) throw new me("languageOrLocaleType", "Required parameter languageOrLocaleType was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                return t = q.Qc("/v1/game-localization-status/translation-counts-for-language-or-locale", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, s && (o.gameIds = s), void 0 !== i && (o.languageOrLocaleCode = i), void 0 !== u && (o.languageOrLocaleType = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function He(s) {
                return {
                    v1GameLocalizationStatusGameIdTranslationCountsGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Qe(s).v1GameLocalizationStatusGameIdTranslationCountsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Qe(s).v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Ge(je, Re = pe), je.prototype.v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Fe(this.configuration).v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdIconsGet = function(e, t, n, r) {
                var o = this;
                return Fe(this.configuration).v1BadgesBadgeIdIconsGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Fe(this.configuration).v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var o = this;
                return Fe(this.configuration).v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdNameDescriptionGet = function(e, t) {
                var n = this;
                return Fe(this.configuration).v1BadgesBadgeIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Fe(this.configuration).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Fe(this.configuration).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, je.prototype.v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Fe(this.configuration).v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Ge(ke, Oe = pe), ke.prototype.v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdIconsGet = function(e, t, n, r) {
                var o = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdIconsGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var o = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionGet = function(e, t) {
                var n = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ke.prototype.v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ne(this.configuration).v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Ge(Me, De = pe), Me.prototype.v1GameIconGamesGameIdGet = function(e, t, n, r) {
                var o = this;
                return _e(this.configuration).v1GameIconGamesGameIdGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Me.prototype.v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return _e(this.configuration).v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Me.prototype.v1GameIconGamesGameIdLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var o = this;
                return _e(this.configuration).v1GameIconGamesGameIdLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            };
            var Ve, Je, Ke, $e = (Ge(Xe, Ve = pe), Xe.prototype.v1GameLocalizationStatusGameIdTranslationCountsGet = function(e, t) {
                var n = this;
                return He(this.configuration).v1GameLocalizationStatusGameIdTranslationCountsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Xe.prototype.v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet = function(e, t, n, r) {
                var o = this;
                return He(this.configuration).v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Xe);

            function Xe() {
                return null !== Ve && Ve.apply(this, arguments) || this
            }

            function Ye(l) {
                var e = this;
                return {
                    v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsGet.");
                                return o = "/v1/game-passes/{gamePassId}/icons".replace("{gamePassId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.width = i), void 0 !== u && (o.height = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/game-passes/{gamePassId}/icons/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost: function(i, u, c, d) {
                        return void 0 === d && (d = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a, s;
                            return be(this, function(e) {
                                if (null == i) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost.");
                                return a = "/v1/game-passes/{gamePassId}/icons/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(u))), t = q.Qc(a, !0), l && (s = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, s), d), r = {}, o = {}, a = new FormData, void 0 !== c && a.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = Ie(Ie(Ie({}, t.query), o), d.query), delete t.search, s = s && s.headers ? s.headers : {}, n.headers = Ie(Ie(Ie({}, r), s), d.headers), n.data = a, [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionGet.");
                                return o = "/v1/game-passes/{gamePassId}/name-description".replace("{gamePassId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return o = "/v1/game-passes/{gamePassId}/name-description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), u), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/name-description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/name/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Ze(s) {
                return {
                    v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdIconsGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ye(s).v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function et() {
                return null !== Je && Je.apply(this, arguments) || this
            }

            function tt(l) {
                var e = this;
                return {
                    v1GameThumbnailsGamesGameIdImagesGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdImagesGet.");
                                return o = "/v1/game-thumbnails/games/{gameId}/images".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.width = i), void 0 !== u && (o.height = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost: function(i, u, c, d) {
                        return void 0 === d && (d = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a, s;
                            return be(this, function(e) {
                                if (null == i) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost.");
                                if (null == u) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost.");
                                return a = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/image".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(u))), t = q.Qc(a, !0), l && (s = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, s), d), r = {}, o = {}, a = new FormData, void 0 !== c && a.append("gameThumbnailRequest.files", c), r["Content-Type"] = "multipart/form-data", t.query = Ie(Ie(Ie({}, t.query), o), d.query), delete t.search, s = s && s.headers ? s.headers : {}, n.headers = Ie(Ie(Ie({}, r), s), d.headers), n.data = a, [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                if (null == u) throw new me("imageId", "Required parameter imageId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                return o = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/images/{imageId}".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))).replace("{imageId}", encodeURIComponent(String(u))), t = q.Qc(o, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "DELETE"
                                }, a), c), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                if (null == u) throw new me("request", "Required parameter request was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                return r = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/images/order".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), l && (a = l.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function nt(s) {
                return {
                    v1GameThumbnailsGamesGameIdImagesGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, tt(s).v1GameThumbnailsGamesGameIdImagesGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, tt(s).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, tt(s).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, tt(s).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function rt() {
                return null !== Ke && Ke.apply(this, arguments) || this
            }

            function ot(d) {
                var e = this;
                return {
                    v1LocalizationtableAvailableLanguagesGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/localizationtable/available-languages", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableGamesGameIdAssetsGenerationRequestPost: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1LocalizationtableGamesGameIdAssetsGenerationRequestPost.");
                                return o = "/v1/localizationtable/games/{gameId}/assets-generation-request".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableGametablesGameIdPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1LocalizationtableGametablesGameIdPatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1LocalizationtableGametablesGameIdPatch.");
                                return r = "/v1/localizationtable/gametables/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("assetId", "Required parameter assetId was null or undefined when calling v1LocalizationtableTablesGet.");
                                return t = q.Qc("/v1/localizationtable/tables", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, void 0 !== s && (o.assetId = s), t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesPost: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesPost.");
                                return t = q.Qc("/v1/localizationtable/tables", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), i), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), a = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntriesGet.");
                                return o = "/v1/localizationtable/tables/{tableId}/entries".replace("{tableId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== i && (o.cursor = i), void 0 !== u && (o.gameId = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost.");
                                return o = "/v1/localizationtable/tables/{tableId}/entries/translation-history".replace("{tableId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), c), r = {}, o = {}, void 0 !== u && (o.gameId = u), r["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntryCountGet: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntryCountGet.");
                                return o = "/v1/localizationtable/tables/{tableId}/entry-count".replace("{tableId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), u), r = {}, o = {}, void 0 !== i && (o.gameId = i), t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdGet.");
                                return o = "/v1/localizationtable/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdPatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdPatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesTableIdPatch.");
                                return o = "/v1/localizationtable/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), r = {}, o = {}, void 0 !== u && (o.gameId = u), r["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function at(s) {
                return {
                    v1LocalizationtableAvailableLanguagesGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableAvailableLanguagesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableGamesGameIdAssetsGenerationRequestPost: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableGamesGameIdAssetsGenerationRequestPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableGametablesGameIdPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableGametablesGameIdPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesPost: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesTableIdEntriesGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntryCountGet: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesTableIdEntryCountGet(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesTableIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdPatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ot(s).v1LocalizationtableTablesTableIdPatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Ge(et, Je = pe), et.prototype.v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ze(this.configuration).v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdIconsGet = function(e, t, n, r) {
                var o = this;
                return Ze(this.configuration).v1GamePassesGamePassIdIconsGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Ze(this.configuration).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var o = this;
                return Ze(this.configuration).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdNameDescriptionGet = function(e, t) {
                var n = this;
                return Ze(this.configuration).v1GamePassesGamePassIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return Ze(this.configuration).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ze(this.configuration).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, et.prototype.v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var o = this;
                return Ze(this.configuration).v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Ge(rt, Ke = pe), rt.prototype.v1GameThumbnailsGamesGameIdImagesGet = function(e, t, n, r) {
                var o = this;
                return nt(this.configuration).v1GameThumbnailsGamesGameIdImagesGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, rt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost = function(e, t, n, r) {
                var o = this;
                return nt(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, rt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete = function(e, t, n, r) {
                var o = this;
                return nt(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, rt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost = function(e, t, n, r) {
                var o = this;
                return nt(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            };
            var st, it, ut, t = (Ge(ct, st = pe), ct.prototype.v1LocalizationtableAvailableLanguagesGet = function(e) {
                var t = this;
                return at(this.configuration).v1LocalizationtableAvailableLanguagesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ct.prototype.v1LocalizationtableGamesGameIdAssetsGenerationRequestPost = function(e, t) {
                var n = this;
                return at(this.configuration).v1LocalizationtableGamesGameIdAssetsGenerationRequestPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ct.prototype.v1LocalizationtableGametablesGameIdPatch = function(e, t, n) {
                var r = this;
                return at(this.configuration).v1LocalizationtableGametablesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesGet = function(e, t) {
                var n = this;
                return at(this.configuration).v1LocalizationtableTablesGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesPost = function(e, t) {
                var n = this;
                return at(this.configuration).v1LocalizationtableTablesPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesTableIdEntriesGet = function(e, t, n, r) {
                var o = this;
                return at(this.configuration).v1LocalizationtableTablesTableIdEntriesGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost = function(e, t, n, r) {
                var o = this;
                return at(this.configuration).v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesTableIdEntryCountGet = function(e, t, n) {
                var r = this;
                return at(this.configuration).v1LocalizationtableTablesTableIdEntryCountGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesTableIdGet = function(e, t) {
                var n = this;
                return at(this.configuration).v1LocalizationtableTablesTableIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ct.prototype.v1LocalizationtableTablesTableIdPatch = function(e, t, n, r) {
                var o = this;
                return at(this.configuration).v1LocalizationtableTablesTableIdPatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, ct);

            function ct() {
                return null !== st && st.apply(this, arguments) || this
            }

            function dt(c) {
                var e = this;
                return {
                    v1NameDescriptionGamesGameIdGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdGet.");
                                return o = "/v1/name-description/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdHistoryPost: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdHistoryPost.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1NameDescriptionGamesGameIdHistoryPost.");
                                return r = "/v1/name-description/games/{gameId}/history".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdPatch.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1NameDescriptionGamesGameIdPatch.");
                                return r = "/v1/name-description/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionMetadataGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/name-description/metadata", !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function lt(a) {
                return {
                    v1NameDescriptionGamesGameIdGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, dt(a).v1NameDescriptionGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdHistoryPost: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, dt(a).v1NameDescriptionGamesGameIdHistoryPost(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, dt(a).v1NameDescriptionGamesGameIdPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionMetadataGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, dt(a).v1NameDescriptionMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ht() {
                return null !== it && it.apply(this, arguments) || this
            }

            function vt(d) {
                var e = this;
                return {
                    v1PlayerPoliciesAllValuesGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/player-policies/all-values", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1PlayerPoliciesClientGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/player-policies-client", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1PlayerPoliciesRccGet: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("userId", "Required parameter userId was null or undefined when calling v1PlayerPoliciesRccGet.");
                                if (null == i) throw new me("ipAddress", "Required parameter ipAddress was null or undefined when calling v1PlayerPoliciesRccGet.");
                                if (null == u) throw new me("userAgent", "Required parameter userAgent was null or undefined when calling v1PlayerPoliciesRccGet.");
                                return t = q.Qc("/v1/player-policies-rcc", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), c), r = {}, o = {}, void 0 !== s && (o.userId = s), void 0 !== i && (o.ipAddress = i), void 0 !== u && (o.userAgent = u), t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function pt(s) {
                return {
                    v1PlayerPoliciesAllValuesGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, vt(s).v1PlayerPoliciesAllValuesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1PlayerPoliciesClientGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, vt(s).v1PlayerPoliciesClientGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1PlayerPoliciesRccGet: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, vt(s).v1PlayerPoliciesRccGet(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function mt() {
                return null !== ut && ut.apply(this, arguments) || this
            }

            function ft(c) {
                var e = this;
                return {
                    v1SourceLanguageGamesGameIdGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SourceLanguageGamesGameIdGet.");
                                return o = "/v1/source-language/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SourceLanguageGamesGameIdPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SourceLanguageGamesGameIdPatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1SourceLanguageGamesGameIdPatch.");
                                return o = "/v1/source-language/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), c && (a = c.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), r = {}, o = {}, void 0 !== i && (o.languageCode = i), t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function gt(a) {
                return {
                    v1SourceLanguageGamesGameIdGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ft(a).v1SourceLanguageGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SourceLanguageGamesGameIdPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ft(a).v1SourceLanguageGamesGameIdPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Ge(ht, it = pe), ht.prototype.v1NameDescriptionGamesGameIdGet = function(e, t) {
                var n = this;
                return lt(this.configuration).v1NameDescriptionGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ht.prototype.v1NameDescriptionGamesGameIdHistoryPost = function(e, t, n) {
                var r = this;
                return lt(this.configuration).v1NameDescriptionGamesGameIdHistoryPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ht.prototype.v1NameDescriptionGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return lt(this.configuration).v1NameDescriptionGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ht.prototype.v1NameDescriptionMetadataGet = function(e) {
                var t = this;
                return lt(this.configuration).v1NameDescriptionMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Ge(mt, ut = pe), mt.prototype.v1PlayerPoliciesAllValuesGet = function(e) {
                var t = this;
                return pt(this.configuration).v1PlayerPoliciesAllValuesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, mt.prototype.v1PlayerPoliciesClientGet = function(e) {
                var t = this;
                return pt(this.configuration).v1PlayerPoliciesClientGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, mt.prototype.v1PlayerPoliciesRccGet = function(e, t, n, r) {
                var o = this;
                return pt(this.configuration).v1PlayerPoliciesRccGet(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            };
            var yt, g = (Ge(Gt, yt = pe), Gt.prototype.v1SourceLanguageGamesGameIdGet = function(e, t) {
                var n = this;
                return gt(this.configuration).v1SourceLanguageGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Gt.prototype.v1SourceLanguageGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return gt(this.configuration).v1SourceLanguageGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Gt);

            function Gt() {
                return null !== yt && yt.apply(this, arguments) || this
            }

            function It(d) {
                var e = this;
                return {
                    v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet.");
                                return o = "/v1/supported-languages/games/{gameId}/automatic-translation-status".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdGet.");
                                return o = "/v1/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                if (null == u) throw new me("enableAutomaticTranslation", "Required parameter enableAutomaticTranslation was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                return r = "/v1/supported-languages/games/{gameId}/languages/{languageCode}/automatic-translation-status".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch: function(s, i, u, c) {
                        return void 0 === c && (c = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                if (null == i) throw new me("languageCode", "Required parameter languageCode was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                if (null == u) throw new me("enableUniverseDisplayInfoAutomaticTranslation", "Required parameter enableUniverseDisplayInfoAutomaticTranslation was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                return r = "/v1/supported-languages/games/{gameId}/languages/{languageCode}/universe-display-info-automatic-translation-settings".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(i))), t = q.Qc(r, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), c), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), c.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), c.headers), a = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdPatch: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdPatch.");
                                if (null == i) throw new me("languages", "Required parameter languages was null or undefined when calling v1SupportedLanguagesGamesGameIdPatch.");
                                return r = "/v1/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "PATCH"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet: function(s, i) {
                        return void 0 === i && (i = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet.");
                                return o = "/v1/supported-languages/games/{gameId}/universe-display-info-automatic-translation-settings".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), i), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), i.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesMetadataGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/supported-languages/metadata", !0), d && (a = d.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Pt(s) {
                return {
                    v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch: function(t, r, o, a) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(t, r, o, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdPatch: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdPatch(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet: function(t, r) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesMetadataGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, It(s).v1SupportedLanguagesMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var bt, A = (Ge(wt, bt = pe), wt.prototype.v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet = function(e, t) {
                var n = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesGamesGameIdGet = function(e, t) {
                var n = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch = function(e, t, n, r) {
                var o = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch = function(e, t, n, r) {
                var o = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(e, t, n, r).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet = function(e, t) {
                var n = this;
                return Pt(this.configuration).v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, wt.prototype.v1SupportedLanguagesMetadataGet = function(e) {
                var t = this;
                return Pt(this.configuration).v1SupportedLanguagesMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, wt);

            function wt() {
                return null !== bt && bt.apply(this, arguments) || this
            }

            function Ct(h) {
                var e = this;
                return {
                    v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet: function(s, i, u, c, d, l) {
                        return void 0 === l && (l = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == i) throw new me("startDateTime", "Required parameter startDateTime was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == u) throw new me("endDateTime", "Required parameter endDateTime was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == c) throw new me("reportType", "Required parameter reportType was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == d) throw new me("reportSubjectTargetId", "Required parameter reportSubjectTargetId was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                return o = "/v1/translation-analytics/games/{gameId}/download-translation-analytics-report".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), h && (a = h.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), l), r = {}, o = {}, void 0 !== i && (o.startDateTime = i), void 0 !== u && (o.endDateTime = u), void 0 !== c && (o.reportType = c), void 0 !== d && (o.reportSubjectTargetId = d), t.query = Ie(Ie(Ie({}, t.query), o), l.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), l.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost: function(s, i, u) {
                        return void 0 === u && (u = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                if (null == s) throw new me("gameId", "Required parameter gameId was null or undefined when calling v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost.");
                                if (null == i) throw new me("request", "Required parameter request was null or undefined when calling v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost.");
                                return r = "/v1/translation-analytics/games/{gameId}/request-translation-analytics-report".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(r, !0), h && (a = h.baseOptions), n = Ie(Ie({
                                    method: "POST"
                                }, a), u), o = {}, (r = {})["Content-Type"] = "application/json", t.query = Ie(Ie(Ie({}, t.query), o), u.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), u.headers), a = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = a ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1TranslationAnalyticsMetadataGet: function(s) {
                        return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                            var t, n, r, o, a;
                            return be(this, function(e) {
                                return t = q.Qc("/v1/translation-analytics/metadata", !0), h && (a = h.baseOptions), n = Ie(Ie({
                                    method: "GET"
                                }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                    url: q.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function qt(u) {
                return {
                    v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet: function(t, r, o, a, s, i) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ct(u).v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(t, r, o, a, s, i)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost: function(t, r, o) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ct(u).v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(t, r, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1TranslationAnalyticsMetadataGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Ct(u).v1TranslationAnalyticsMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var At, Tt, G = (Ge(Lt, At = pe), Lt.prototype.v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet = function(e, t, n, r, o, a) {
                var s = this;
                return qt(this.configuration).v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, Lt.prototype.v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost = function(e, t, n) {
                var r = this;
                return qt(this.configuration).v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Lt.prototype.v1TranslationAnalyticsMetadataGet = function(e) {
                var t = this;
                return qt(this.configuration).v1TranslationAnalyticsMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Lt);

            function Lt() {
                return null !== At && At.apply(this, arguments) || this
            }

            function St(r) {
                return {
                    v1UiConfigurationsGet: function(t) {
                        return Pe(this, void 0, Promise, function() {
                            var n;
                            return be(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(i) {
                                            var e = this;
                                            return {
                                                v1UiConfigurationsGet: function(s) {
                                                    return void 0 === s && (s = {}), Pe(e, void 0, Promise, function() {
                                                        var t, n, r, o, a;
                                                        return be(this, function(e) {
                                                            return t = q.Qc("/v1/ui-configurations", !0), i && (a = i.baseOptions), n = Ie(Ie({
                                                                method: "GET"
                                                            }, a), s), r = {}, o = {}, t.query = Ie(Ie(Ie({}, t.query), o), s.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Ie(Ie(Ie({}, r), a), s.headers), [2, {
                                                                url: q.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(r).v1UiConfigurationsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = ve);
                                            t = Ie(Ie({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Ut() {
                return null !== Tt && Tt.apply(this, arguments) || this
            }
            Ge(Ut, Tt = pe), Ut.prototype.v1UiConfigurationsGet = function(e) {
                var t = this;
                return St(this.configuration).v1UiConfigurationsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var Rt, Ot, Dt = new Ae,
                D = {
                    getAutolocalizationConfiguration: function(e) {
                        return Dt.v1AutolocalizationGamesGameIdAutolocalizationtablePost(e, {
                            withCredentials: !0
                        })
                    },
                    setAutolocalizationConfiguration: function(e, t) {
                        t = {
                            isAutolocalizationEnabled: t
                        };
                        return Dt.v1AutolocalizationGamesGameIdSettingsPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    setUseAutoLocalizationTable: function(e, t) {
                        t = {
                            shouldUseLocalizationTable: t
                        };
                        return Dt.v1AutolocalizationGamesGameIdSettingsPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    flushAutoLocalizationTable: function(e, t) {
                        t = {
                            maxAgeForFlush: t
                        };
                        return Dt.v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost(e, t, {
                            withCredentials: !0
                        })
                    },
                    getMetadata: function() {
                        return Dt.v1AutolocalizationMetadataGet({
                            withCredentials: !0
                        })
                    }
                },
                xt = new xe,
                k = {
                    getGameFeatureStatus: function(e) {
                        return xt.v1AutomaticTranslationGamesGameIdFeatureStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    getTargetLanguages: function(e, t) {
                        return xt.v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(e, t, {
                            withCredentials: !0
                        })
                    },
                    getGameAutoLocalizationQuota: function(e) {
                        return xt.v1AutomaticTranslationGamesGameIdQuotaGet(e, {
                            withCredentials: !0
                        })
                    }
                },
                te = (Rt = function(e, t) {
                    return (Rt = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Rt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Bt = i.EnvironmentUrls.gameInternationalizationApi.replace(/\/+$/, ""),
                he = function(e, t, n) {
                    void 0 === t && (t = Bt), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Et = (Ot = Error, te(Ft, Ot), Ft);

            function Ft(e, t) {
                t = Ot.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var jt, zt = (jt = function(e, t) {
                    return (jt = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    jt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Nt = function() {
                    return (Nt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                kt = function(e, s, i, u) {
                    return new(i = i || Promise)(function(n, t) {
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
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, s || [])).next())
                    })
                },
                Wt = function(n, r) {
                    var o, a, s, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
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
                                for (; i;) try {
                                    if (o = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                    switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            s = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < s[1]) {
                                                i.label = s[1], s = t;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2], i.ops.push(t);
                                                break
                                            }
                                            s[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = s = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function _t(o) {
                return {
                    v2SupportedLanguagesGamesGameIdGet: function(t, r) {
                        return kt(this, void 0, Promise, function() {
                            var n;
                            return Wt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(u) {
                                            var e = this;
                                            return {
                                                v2SupportedLanguagesGamesGameIdGet: function(s, i) {
                                                    return void 0 === i && (i = {}), kt(e, void 0, Promise, function() {
                                                        var t, n, r, o, a;
                                                        return Wt(this, function(e) {
                                                            if (null == s) throw new Et("gameId", "Required parameter gameId was null or undefined when calling v2SupportedLanguagesGamesGameIdGet.");
                                                            return o = "/v2/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(s))), t = q.Qc(o, !0), u && (a = u.baseOptions), n = Nt(Nt({
                                                                method: "GET"
                                                            }, a), i), r = {}, o = {}, t.query = Nt(Nt(Nt({}, t.query), o), i.query), delete t.search, a = a && a.headers ? a.headers : {}, n.headers = Nt(Nt(Nt({}, r), a), i.headers), [2, {
                                                                url: q.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(o).v2SupportedLanguagesGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = P), void 0 === t && (t = Bt);
                                            t = Nt(Nt({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(Kn = {}).EnUs = "en_us", Kn.EsEs = "es_es", Kn.FrFr = "fr_fr", Kn.IdId = "id_id", Kn.ItIt = "it_it", Kn.JaJp = "ja_jp", Kn.KoKr = "ko_kr", Kn.RuRu = "ru_ru", Kn.ThTh = "th_th", Kn.TrTr = "tr_tr", Kn.ViVn = "vi_vn", Kn.PtBr = "pt_br", Kn.DeDe = "de_de", Kn.ZhCn = "zh_cn", Kn.ZhTw = "zh_tw", Kn.BgBg = "bg_bg", Kn.BnBd = "bn_bd", Kn.CsCz = "cs_cz", Kn.DaDk = "da_dk", Kn.ElGr = "el_gr", Kn.EtEe = "et_ee", Kn.FiFi = "fi_fi", Kn.HiIn = "hi_in", Kn.HrHr = "hr_hr", Kn.HuHu = "hu_hu", Kn.KaGe = "ka_ge", Kn.KkKz = "kk_kz", Kn.KmKh = "km_kh", Kn.LtLt = "lt_lt", Kn.LvLv = "lv_lv", Kn.MsMy = "ms_my", Kn.MyMm = "my_mm", Kn.NbNo = "nb_no", Kn.NlNl = "nl_nl", Kn.FilPh = "fil_ph", Kn.PlPl = "pl_pl", Kn.RoRo = "ro_ro", Kn.UkUa = "uk_ua", Kn.SiLk = "si_lk", Kn.SkSk = "sk_sk", Kn.SlSl = "sl_sl", Kn.SqAl = "sq_al", Kn.BsBa = "bs_ba", Kn.SrRs = "sr_rs", Kn.SvSe = "sv_se", Kn.ZhCjv = "zh_cjv";
            var Mt, Qt = (zt(Ht, Mt = he), Ht.prototype.v2SupportedLanguagesGamesGameIdGet = function(e, t) {
                var n = this;
                return _t(this.configuration).v2SupportedLanguagesGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ht);

            function Ht() {
                return null !== Mt && Mt.apply(this, arguments) || this
            }
            var Vt, Jt, Kt = new A,
                $t = new Qt,
                Xt = new t,
                e = {
                    getGameLanguageRolloutSettings: function() {
                        return Kt.v1SupportedLanguagesMetadataGet({
                            withCredentials: !0
                        })
                    },
                    getGameLanguages: function(e) {
                        return Kt.v1SupportedLanguagesGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGameLanguagesV2: function(e) {
                        return $t.v2SupportedLanguagesGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    addLanguages: function(e, t) {
                        t = t.map(function(e) {
                            return {
                                languageCodeType: ye.Language,
                                languageCode: e
                            }
                        });
                        return Kt.v1SupportedLanguagesGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    deleteLanguages: function(e, t) {
                        t = t.map(function(e) {
                            return {
                                languageCodeType: ye.Language,
                                languageCode: e,
                                delete: !0
                            }
                        });
                        return Kt.v1SupportedLanguagesGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    getAvailableLanguages: function() {
                        return Xt.v1LocalizationtableAvailableLanguagesGet()
                    },
                    getAutomaticTranslationStatus: function(e) {
                        return Kt.v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    setAutomaticTranslationStatus: function(e, t, n) {
                        return Kt.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(e, n, t, {
                            withCredentials: !0
                        })
                    },
                    getAutomaticTranslationSwitchesValues: function(e) {
                        return Kt.v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(e, {
                            withCredentials: !0
                        })
                    },
                    setAutomaticTranslationSwitchesValue: function(e, t, n) {
                        return Kt.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(e, n, t, {
                            withCredentials: !0
                        })
                    }
                },
                Yt = new g,
                Zt = {
                    getSourceLanguage: function(e) {
                        return Yt.v1SourceLanguageGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    updateSourceLanguage: function(e, t) {
                        return Yt.v1SourceLanguageGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    }
                },
                Ge = (Vt = function(e, t) {
                    return (Vt = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Vt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                en = i.EnvironmentUrls.thumbnailsApi.replace(/\/+$/, ""),
                tn = ",",
                pe = function(e, t, n) {
                    void 0 === t && (t = en), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                nn = (Jt = Error, Ge(rn, Jt), rn);

            function rn(e, t) {
                t = Jt.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function on(e, t, n) {
                if (null == n) throw new nn(t, "Required parameter " + t + " was null or undefined when calling " + e + ".")
            }

            function an(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = new URLSearchParams(e.search), o = 0, a = t; o < a.length; o++) {
                    var s, i = a[o];
                    for (s in i) r.set(s, i[s])
                }
                e.search = r.toString()
            }

            function sn(e) {
                return e.pathname + e.search + e.hash
            }

            function un(n, r, o, a) {
                return function(e, t) {
                    void 0 === e && (e = r), void 0 === t && (t = o);
                    t = dn(dn({}, n.options), {
                        url: ((null == a ? void 0 : a.basePath) || t) + n.url
                    });
                    return e.request(t)
                }
            }
            var cn, dn = function() {
                    return (dn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                ln = "https://example.com",
                Ae = (cn = function(e, t) {
                    return (cn = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    cn(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                hn = function() {
                    return (hn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                vn = function(e, s, i, u) {
                    return new(i = i || Promise)(function(n, t) {
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
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, s || [])).next())
                    })
                },
                pn = function(n, r) {
                    var o, a, s, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
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
                                for (; i;) try {
                                    if (o = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                    switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            s = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < s[1]) {
                                                i.label = s[1], s = t;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2], i.ops.push(t);
                                                break
                                            }
                                            s[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = s = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function mn(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v1AssetsGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1AssetsGet", "assetIds", s), t = new URL("/v1/assets", ln), h && (a = h.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, s && (o.assetIds = s.join(tn)), void 0 !== i && (o.returnPolicy = i), void 0 !== u && (o.size = u), void 0 !== c && (o.format = c), void 0 !== d && (o.isCircular = d), an(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), l.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1AssetsThumbnail3dGet: function(s, i) {
                            return void 0 === i && (i = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1AssetsThumbnail3dGet", "assetId", s), t = new URL("/v1/assets-thumbnail-3d", ln), h && (a = h.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), i), r = {}, o = {}, void 0 !== s && (o.assetId = s), an(t, o, i.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), i.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v1AssetsGet: function(n, r, o, a, s, i) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1AssetsGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, u)]
                                }
                            })
                        })
                    },
                    v1AssetsThumbnail3dGet: function(n, r) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1AssetsThumbnail3dGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, u)]
                                }
                            })
                        })
                    }
                }
            }(xe = {}).Avatar = "Avatar", xe.AvatarHeadShot = "AvatarHeadShot", xe.GameIcon = "GameIcon", xe.BadgeIcon = "BadgeIcon", xe.GameThumbnail = "GameThumbnail", xe.GamePass = "GamePass", xe.Asset = "Asset", xe.BundleThumbnail = "BundleThumbnail", xe.Outfit = "Outfit", xe.GroupIcon = "GroupIcon", xe.DeveloperProduct = "DeveloperProduct", xe.AvatarBust = "AvatarBust", xe.AutoGeneratedAsset = "AutoGeneratedAsset", (te = {}).Error = "Error", te.Completed = "Completed", te.InReview = "InReview", te.Pending = "Pending", te.Blocked = "Blocked", (Kn = {}).Error = "Error", Kn.Completed = "Completed", Kn.InReview = "InReview", Kn.Pending = "Pending", Kn.Blocked = "Blocked";
            var fn, zt = (Ae(gn, fn = pe), gn.prototype.v1AssetsGet = function(e, t, n, r, o, a) {
                var s = this;
                return mn(this.configuration).v1AssetsGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, gn.prototype.v1AssetsThumbnail3dGet = function(e, t) {
                var n = this;
                return mn(this.configuration).v1AssetsThumbnail3dGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, gn);

            function gn() {
                return null !== fn && fn.apply(this, arguments) || this
            }

            function yn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1UsersAvatar3dGet: function(s, i) {
                            return void 0 === i && (i = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1UsersAvatar3dGet", "userId", s), t = new URL("/v1/users/avatar-3d", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), i), r = {}, o = {}, void 0 !== s && (o.userId = s), an(t, o, i.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), i.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarBustGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1UsersAvatarBustGet", "userIds", s), t = new URL("/v1/users/avatar-bust", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.userIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1UsersAvatarGet", "userIds", s), t = new URL("/v1/users/avatar", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.userIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarHeadshotGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1UsersAvatarHeadshotGet", "userIds", s), t = new URL("/v1/users/avatar-headshot", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.userIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1UsersAvatar3dGet: function(n, r) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatar3dGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarBustGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarBustGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarHeadshotGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarHeadshotGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var Gn, he = (Ae(In, Gn = pe), In.prototype.v1UsersAvatar3dGet = function(e, t) {
                var n = this;
                return yn(this.configuration).v1UsersAvatar3dGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, In.prototype.v1UsersAvatarBustGet = function(e, t, n, r, o) {
                var a = this;
                return yn(this.configuration).v1UsersAvatarBustGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, In.prototype.v1UsersAvatarGet = function(e, t, n, r, o) {
                var a = this;
                return yn(this.configuration).v1UsersAvatarGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, In.prototype.v1UsersAvatarHeadshotGet = function(e, t, n, r, o) {
                var a = this;
                return yn(this.configuration).v1UsersAvatarHeadshotGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, In);

            function In() {
                return null !== Gn && Gn.apply(this, arguments) || this
            }

            function Pn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1BadgesIconsGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1BadgesIconsGet", "badgeIds", s), t = new URL("/v1/badges/icons", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.badgeIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1BadgesIconsGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1BadgesIconsGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var bn, A = (Ae(wn, bn = pe), wn.prototype.v1BadgesIconsGet = function(e, t, n, r, o) {
                var a = this;
                return Pn(this.configuration).v1BadgesIconsGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, wn);

            function wn() {
                return null !== bn && bn.apply(this, arguments) || this
            }

            function Cn(h) {
                var e = this;
                return {
                    v1BatchPost: function(d, l) {
                        return void 0 === l && (l = {}), vn(e, void 0, Promise, function() {
                            var a, s, i, u, c;
                            return pn(this, function(e) {
                                var t, n, r, o;
                                return on("v1BatchPost", "requests", d), a = new URL("/v1/batch", ln), h && (c = h.baseOptions), s = hn(hn({
                                    method: "POST"
                                }, c), l), u = {}, (i = {})["Content-Type"] = "application/json", an(a, u, l.query), c = c && c.headers ? c.headers : {}, s.headers = hn(hn(hn({}, i), c), l.headers), s.data = (n = s, r = h, ((o = "string" != typeof(t = d)) && r && r.isJsonMime ? r.isJsonMime(n.headers["Content-Type"]) : o) ? JSON.stringify(void 0 !== t ? t : {}) : t || ""), [2, {
                                    url: sn(a),
                                    options: s
                                }]
                            })
                        })
                    }
                }
            }

            function qn(o) {
                var a = Cn(o);
                return {
                    v1BatchPost: function(n, r) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, a.v1BatchPost(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, o)]
                                }
                            })
                        })
                    }
                }
            }
            var An, Qt = (Ae(Tn, An = pe), Tn.prototype.v1BatchPost = function(e, t) {
                var n = this;
                return qn(this.configuration).v1BatchPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Tn);

            function Tn() {
                return null !== An && An.apply(this, arguments) || this
            }

            function Ln(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1BundlesThumbnailsGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1BundlesThumbnailsGet", "bundleIds", s), t = new URL("/v1/bundles/thumbnails", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.bundleIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1BundlesThumbnailsGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1BundlesThumbnailsGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var Sn, t = (Ae(Un, Sn = pe), Un.prototype.v1BundlesThumbnailsGet = function(e, t, n, r, o) {
                var a = this;
                return Ln(this.configuration).v1BundlesThumbnailsGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Un);

            function Un() {
                return null !== Sn && Sn.apply(this, arguments) || this
            }

            function Rn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1DeveloperProductsIconsGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1DeveloperProductsIconsGet", "developerProductIds", s), t = new URL("/v1/developer-products/icons", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.developerProductIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1DeveloperProductsIconsGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1DeveloperProductsIconsGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var On, g = (Ae(Dn, On = pe), Dn.prototype.v1DeveloperProductsIconsGet = function(e, t, n, r, o) {
                var a = this;
                return Rn(this.configuration).v1DeveloperProductsIconsGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Dn);

            function Dn() {
                return null !== On && On.apply(this, arguments) || this
            }

            function xn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1GamePassesGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1GamePassesGet", "gamePassIds", s), t = new URL("/v1/game-passes", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.gamePassIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1GamePassesGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1GamePassesGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var Bn, Ge = (Ae(En, Bn = pe), En.prototype.v1GamePassesGet = function(e, t, n, r, o) {
                var a = this;
                return xn(this.configuration).v1GamePassesGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, En);

            function En() {
                return null !== Bn && Bn.apply(this, arguments) || this
            }

            function Fn(c) {
                var d = function(v) {
                    var e = this;
                    return {
                        v1GamesIconsGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1GamesIconsGet", "universeIds", s), t = new URL("/v1/games/icons", ln), v && (a = v.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, s && (o.universeIds = s.join(tn)), void 0 !== i && (o.returnPolicy = i), void 0 !== u && (o.size = u), void 0 !== c && (o.format = c), void 0 !== d && (o.isCircular = d), an(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), l.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1GamesMultigetThumbnailsGet: function(s, i, u, c, d, l, h) {
                            return void 0 === h && (h = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1GamesMultigetThumbnailsGet", "universeIds", s), t = new URL("/v1/games/multiget/thumbnails", ln), v && (a = v.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), h), r = {}, o = {}, s && (o.universeIds = s.join(tn)), void 0 !== i && (o.countPerUniverse = i), void 0 !== u && (o.defaults = u), void 0 !== c && (o.size = c), void 0 !== d && (o.format = d), void 0 !== l && (o.isCircular = l), an(t, o, h.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), h.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1GamesUniverseIdThumbnailsGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1GamesUniverseIdThumbnailsGet", "universeId", s), on("v1GamesUniverseIdThumbnailsGet", "thumbnailIds", i), o = "/v1/games/{universeId}/thumbnails".replace("{universeId}", encodeURIComponent(String(s))), t = new URL(o, ln), v && (a = v.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, i && (o.thumbnailIds = i.join(tn)), void 0 !== u && (o.size = u), void 0 !== c && (o.format = c), void 0 !== d && (o.isCircular = d), an(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), l.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(c);
                return {
                    v1GamesIconsGet: function(n, r, o, a, s, i) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, d.v1GamesIconsGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, c)]
                                }
                            })
                        })
                    },
                    v1GamesMultigetThumbnailsGet: function(n, r, o, a, s, i, u) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, d.v1GamesMultigetThumbnailsGet(n, r, o, a, s, i, u)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, c)]
                                }
                            })
                        })
                    },
                    v1GamesUniverseIdThumbnailsGet: function(n, r, o, a, s, i) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, d.v1GamesUniverseIdThumbnailsGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, c)]
                                }
                            })
                        })
                    }
                }
            }
            var jn, xe = (Ae(zn, jn = pe), zn.prototype.v1GamesIconsGet = function(e, t, n, r, o, a) {
                var s = this;
                return Fn(this.configuration).v1GamesIconsGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, zn.prototype.v1GamesMultigetThumbnailsGet = function(e, t, n, r, o, a, s) {
                var i = this;
                return Fn(this.configuration).v1GamesMultigetThumbnailsGet(e, t, n, r, o, a, s).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, zn.prototype.v1GamesUniverseIdThumbnailsGet = function(e, t, n, r, o, a) {
                var s = this;
                return Fn(this.configuration).v1GamesUniverseIdThumbnailsGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, zn);

            function zn() {
                return null !== jn && jn.apply(this, arguments) || this
            }

            function Nn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1GroupsIconsGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1GroupsIconsGet", "groupIds", s), t = new URL("/v1/groups/icons", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.groupIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1GroupsIconsGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1GroupsIconsGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            var kn, Wn, te = (Ae(_n, kn = pe), _n.prototype.v1GroupsIconsGet = function(e, t, n, r, o) {
                var a = this;
                return Nn(this.configuration).v1GroupsIconsGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, _n);

            function _n() {
                return null !== kn && kn.apply(this, arguments) || this
            }

            function Mn(r) {
                var o = function(s) {
                    var e = this;
                    return {
                        v1MetadataGet: function(a) {
                            return void 0 === a && (a = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o;
                                return pn(this, function(e) {
                                    return t = new URL("/v1/metadata", ln), s && (o = s.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, o), a), r = {}, an(t, {}, a.query), o = o && o.headers ? o.headers : {}, n.headers = hn(hn(hn({}, r), o), a.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(r);
                return {
                    v1MetadataGet: function(n) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, o.v1MetadataGet(n)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, r)]
                                }
                            })
                        })
                    }
                }
            }

            function Qn() {
                return null !== Wn && Wn.apply(this, arguments) || this
            }

            function Hn(i) {
                var u = function(l) {
                    var e = this;
                    return {
                        v1UsersOutfitsGet: function(s, i, u, c, d) {
                            return void 0 === d && (d = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1UsersOutfitsGet", "userOutfitIds", s), t = new URL("/v1/users/outfits", ln), l && (a = l.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), d), r = {}, o = {}, s && (o.userOutfitIds = s.join(tn)), void 0 !== i && (o.size = i), void 0 !== u && (o.format = u), void 0 !== c && (o.isCircular = c), an(t, o, d.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), d.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1UsersOutfitsGet: function(n, r, o, a, s) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersOutfitsGet(n, r, o, a, s)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, i)]
                                }
                            })
                        })
                    }
                }
            }
            Ae(Qn, Wn = pe), Qn.prototype.v1MetadataGet = function(e) {
                var t = this;
                return Mn(this.configuration).v1MetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var Vn, Jn, Kn = (Ae($n, Vn = pe), $n.prototype.v1UsersOutfitsGet = function(e, t, n, r, o) {
                var a = this;
                return Hn(this.configuration).v1UsersOutfitsGet(e, t, n, r, o).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, $n);

            function $n() {
                return null !== Vn && Vn.apply(this, arguments) || this
            }

            function Xn(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v1PlacesGameiconsGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), vn(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return pn(this, function(e) {
                                    return on("v1PlacesGameiconsGet", "placeIds", s), t = new URL("/v1/places/gameicons", ln), h && (a = h.baseOptions), n = hn(hn({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, s && (o.placeIds = s.join(tn)), void 0 !== i && (o.returnPolicy = i), void 0 !== u && (o.size = u), void 0 !== c && (o.format = c), void 0 !== d && (o.isCircular = d), an(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = hn(hn(hn({}, r), a), l.headers), [2, {
                                        url: sn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v1PlacesGameiconsGet: function(n, r, o, a, s, i) {
                        return vn(this, void 0, Promise, function() {
                            var t;
                            return pn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1PlacesGameiconsGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, un(t, l(), en, u)]
                                }
                            })
                        })
                    }
                }
            }

            function Yn() {
                return null !== Jn && Jn.apply(this, arguments) || this
            }
            Ae(Yn, Jn = pe), Yn.prototype.v1PlacesGameiconsGet = function(e, t, n, r, o, a) {
                var s = this;
                return Xn(this.configuration).v1PlacesGameiconsGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            };
            var Zn = i.EnvironmentUrls.thumbnailsApi,
                er = new xe,
                tr = new Ge;
            (xe = ar = ar || {}).PlaceHolder = "PlaceHolder", xe.AutoGenerated = "AutoGenerated", xe.ForceAutoGenerated = "ForceAutoGenerated", (Ge = ur = ur || {}).Large = "150x150", Ge.Default = "50x50", (xe = vr = vr || {}).width768 = "768x432", xe.width576 = "576x324", xe.width480 = "480x270", xe.width384 = "384x216", xe.width256 = "256x144", (Ir = Ir || {}).Png = "Png";
            var nr, rr, Ge = {
                    getIcons: function(e, t, n, r, o) {
                        return er.v1GamesIconsGet(e, t, n, r, o, {
                            withCredentials: !0
                        })
                    },
                    getUniverseThumbnails: function(e, t, n, r) {
                        return er.v1GamesMultigetThumbnailsGet(e, 1, !0, t, n, r, {
                            withCredentials: !0
                        }).then(function(e) {
                            var t = e.data,
                                n = e.status,
                                r = e.statusText,
                                o = e.headers,
                                e = e.request;
                            return {
                                data: {
                                    data: null === (t = null == t ? void 0 : t.data) || void 0 === t ? void 0 : t.map(function(e) {
                                        var t = null === (t = e.thumbnails) || void 0 === t ? void 0 : t[0];
                                        return {
                                            targetId: e.universeId,
                                            state: null == t ? void 0 : t.state,
                                            imageUrl: null == t ? void 0 : t.imageUrl
                                        }
                                    })
                                },
                                status: n,
                                statusText: r,
                                headers: o,
                                request: e
                            }
                        })
                    },
                    getAllUniverseThumbnails: function(e, t, n, r, o) {
                        return void 0 === o && (o = 10), er.v1GamesMultigetThumbnailsGet(e, o, !0, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getGamePassIcons: function(e, t, n, r) {
                        return tr.v1GamePassesGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getThumbnailsByThumbnailIds: function(e, t, n, r, o) {
                        return er.v1GamesUniverseIdThumbnailsGet(e, t, n, r, o, {
                            withCredentials: !0
                        })
                    },
                    getPlacesGameIcons: function(e, t, n, r, o) {
                        var a = {
                            url: Zn + "/v1/places/gameicons",
                            withCredentials: !0,
                            retryable: !0
                        };
                        return f.get(a, {
                            placeIds: e,
                            returnPolicy: t,
                            size: n,
                            format: r,
                            isCircular: o
                        })
                    },
                    ReturnPolicy: ar,
                    Size: ur,
                    GameThumbnailSize: vr,
                    FileType: Ir
                },
                or = new G,
                xe = {
                    getMetadata: function() {
                        return or.v1TranslationAnalyticsMetadataGet({
                            withCredentials: !0
                        })
                    },
                    requestReport: function(e, t, n, r, o) {
                        o = {
                            startDateTime: t,
                            endDateTime: n,
                            reportType: r,
                            reportSubjectTargetId: o
                        };
                        return or.v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(e, o, {
                            withCredentials: !0
                        })
                    },
                    downloadReport: function(e, t, n, r, o) {
                        return or.v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(e, t, n, r, o, {
                            withCredentials: !0,
                            responseType: "arraybuffer"
                        })
                    }
                },
                ar = (nr = function(e, t) {
                    return (nr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    nr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                sr = i.EnvironmentUrls.gamesApi.replace(/\/+$/, ""),
                ir = ",",
                ur = function(e, t, n) {
                    void 0 === t && (t = sr), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                cr = (rr = Error, ar(dr, rr), dr);

            function dr(e, t) {
                t = rr.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var lr, hr, vr = (lr = function(e, t) {
                    return (lr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    lr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                pr = function() {
                    return (pr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function mr(a) {
                return {
                    v1GamesUniverseIdFavoritesCountGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesCountGet.");
                        e = "/v1/games/{universeId}/favorites/count".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        a && (n = a.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdFavoritesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesGet.");
                        e = "/v1/games/{universeId}/favorites".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        a && (n = a.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdFavoritesPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesPost.");
                        if (null == t) throw new cr("request", "Required parameter request was null or undefined when calling v1GamesUniverseIdFavoritesPost.");
                        var r = "/v1/games/{universeId}/favorites".replace("{universeId}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "POST"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    }
                }
            }

            function fr(o) {
                return {
                    v1GamesUniverseIdFavoritesCountGet: function(e, t) {
                        var n = mr(o).v1GamesUniverseIdFavoritesCountGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdFavoritesGet: function(e, t) {
                        var n = mr(o).v1GamesUniverseIdFavoritesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdFavoritesPost: function(e, t, n) {
                        var r = mr(o).v1GamesUniverseIdFavoritesPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function gr() {
                return null !== hr && hr.apply(this, arguments) || this
            }

            function yr(s) {
                return {
                    v1GamesUniverseIdGamePassesGet: function(e, t, n, r, o) {
                        var i, a = (i = s, function(e, t, n, r, o) {
                            if (void 0 === o && (o = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdGamePassesGet.");
                            var a = "/v1/games/{universeId}/game-passes".replace("{universeId}", encodeURIComponent(String(e))),
                                e = q.Qc(a, !0);
                            i && (s = i.baseOptions);
                            var a = pr(pr({
                                    method: "GET"
                                }, s), o),
                                s = {};
                            return void 0 !== t && (s.sortOrder = t), void 0 !== n && (s.limit = n), void 0 !== r && (s.cursor = r), e.query = pr(pr(pr({}, e.query), s), o.query), delete e.search, a.headers = pr(pr({}, {}), o.headers), {
                                url: q.WU(e),
                                options: a
                            }
                        }(e, t, n, r, o));
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }(Ir = {}).GamesDefaultSorts = "GamesDefaultSorts", Ir.GamesAllSorts = "GamesAllSorts", Ir.HomeSorts = "HomeSorts", Ir.ChatSorts = "ChatSorts", Ir.UnifiedHomeSorts = "UnifiedHomeSorts", Ir.AbTestSorts = "AbTestSorts", Ir.GamesPageAbTestSorts1 = "GamesPageAbTestSorts1", Ir.GamesPageAbTestSorts2 = "GamesPageAbTestSorts2", (G = {}).MorphToR6 = "MorphToR6", G.PlayerChoice = "PlayerChoice", G.MorphToR15 = "MorphToR15", (ar = {}).UnplayableOtherReason = "UnplayableOtherReason", ar.Playable = "Playable", ar.GuestProhibited = "GuestProhibited", ar.GameUnapproved = "GameUnapproved", ar.IncorrectConfiguration = "IncorrectConfiguration", ar.UniverseRootPlaceIsPrivate = "UniverseRootPlaceIsPrivate", ar.InsufficientPermissionFriendsOnly = "InsufficientPermissionFriendsOnly", ar.InsufficientPermissionGroupOnly = "InsufficientPermissionGroupOnly", ar.DeviceRestricted = "DeviceRestricted", ar.UnderReview = "UnderReview", ar.PurchaseRequired = "PurchaseRequired", ar.AccountRestricted = "AccountRestricted", ar.TemporarilyUnavailable = "TemporarilyUnavailable", (Ir = {}).Facebook = "Facebook", Ir.Twitter = "Twitter", Ir.YouTube = "YouTube", Ir.Twitch = "Twitch", Ir.GooglePlus = "GooglePlus", Ir.Discord = "Discord", Ir.RobloxGroup = "RobloxGroup", Ir.Amazon = "Amazon", (G = {}).Asc = "Asc", G.Desc = "Desc", (ar = {}).Forward = "Forward", ar.Backward = "Backward", vr(gr, hr = ur), gr.prototype.v1GamesUniverseIdFavoritesCountGet = function(e, t) {
                return fr(this.configuration).v1GamesUniverseIdFavoritesCountGet(e, t)(this.axios, this.basePath)
            }, gr.prototype.v1GamesUniverseIdFavoritesGet = function(e, t) {
                return fr(this.configuration).v1GamesUniverseIdFavoritesGet(e, t)(this.axios, this.basePath)
            }, gr.prototype.v1GamesUniverseIdFavoritesPost = function(e, t, n) {
                return fr(this.configuration).v1GamesUniverseIdFavoritesPost(e, t, n)(this.axios, this.basePath)
            };
            var Gr, Ir = (vr(Pr, Gr = ur), Pr.prototype.v1GamesUniverseIdGamePassesGet = function(e, t, n, r, o) {
                return yr(this.configuration).v1GamesUniverseIdGamePassesGet(e, t, n, r, o)(this.axios, this.basePath)
            }, Pr);

            function Pr() {
                return null !== Gr && Gr.apply(this, arguments) || this
            }

            function br(G) {
                return {
                    v1GamesGameThumbnailGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new cr("imageToken", "Required parameter imageToken was null or undefined when calling v1GamesGameThumbnailGet.");
                        var o = q.Qc("/v1/games/game-thumbnail", !0);
                        G && (s = G.baseOptions);
                        var a = pr(pr({
                                method: "GET"
                            }, s), r),
                            s = {};
                        return void 0 !== e && (s.imageToken = e), void 0 !== t && (s.height = t), void 0 !== n && (s.width = n), o.query = pr(pr(pr({}, o.query), s), r.query), delete o.search, a.headers = pr(pr({}, {}), r.headers), {
                            url: q.WU(o),
                            options: a
                        }
                    },
                    v1GamesGameThumbnailsGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new cr("imageTokens", "Required parameter imageTokens was null or undefined when calling v1GamesGameThumbnailsGet.");
                        var o = q.Qc("/v1/games/game-thumbnails", !0);
                        G && (s = G.baseOptions);
                        var a = pr(pr({
                                method: "GET"
                            }, s), r),
                            s = {};
                        return e && (s.imageTokens = e), void 0 !== t && (s.height = t), void 0 !== n && (s.width = n), o.query = pr(pr(pr({}, o.query), s), r.query), delete o.search, a.headers = pr(pr({}, {}), r.headers), {
                            url: q.WU(o),
                            options: a
                        }
                    },
                    v1GamesGamesProductInfoGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesGamesProductInfoGet.");
                        var n = q.Qc("/v1/games/games-product-info", !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return e && (o.universeIds = e.join(ir)), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1GamesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesGet.");
                        var n = q.Qc("/v1/games", !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return e && (o.universeIds = e.join(ir)), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1GamesListGet: function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m) {
                        void 0 === m && (m = {});
                        var f = q.Qc("/v1/games/list", !0);
                        G && (y = G.baseOptions);
                        var g = pr(pr({
                                method: "GET"
                            }, y), m),
                            y = {};
                        return void 0 !== e && (y["model.sortToken"] = e), void 0 !== t && (y["model.gameFilter"] = t), void 0 !== n && (y["model.timeFilter"] = n), void 0 !== r && (y["model.genreFilter"] = r), void 0 !== o && (y["model.exclusiveStartId"] = o), void 0 !== a && (y["model.sortOrder"] = a), void 0 !== s && (y["model.gameSetTargetId"] = s), void 0 !== i && (y["model.keyword"] = i), void 0 !== u && (y["model.startRows"] = u), void 0 !== c && (y["model.maxRows"] = c), void 0 !== d && (y["model.isKeywordSuggestionEnabled"] = d), void 0 !== l && (y["model.contextCountryRegionId"] = l), void 0 !== h && (y["model.contextUniverseId"] = h), void 0 !== v && (y["model.pageId"] = v), void 0 !== p && (y["model.sortPosition"] = p), f.query = pr(pr(pr({}, f.query), y), m.query), delete f.search, g.headers = pr(pr({}, {}), m.headers), {
                            url: q.WU(f),
                            options: g
                        }
                    },
                    v1GamesMultigetPlaceDetailsGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("placeIds", "Required parameter placeIds was null or undefined when calling v1GamesMultigetPlaceDetailsGet.");
                        var n = q.Qc("/v1/games/multiget-place-details", !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return e && (o.placeIds = e), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1GamesMultigetPlayabilityStatusGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesMultigetPlayabilityStatusGet.");
                        var n = q.Qc("/v1/games/multiget-playability-status", !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return e && (o.universeIds = e.join(ir)), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1GamesPlaceIdServersServerTypeGet: function(e, t, n, r, o, a) {
                        if (void 0 === a && (a = {}), null == e) throw new cr("placeId", "Required parameter placeId was null or undefined when calling v1GamesPlaceIdServersServerTypeGet.");
                        if (null == t) throw new cr("serverType", "Required parameter serverType was null or undefined when calling v1GamesPlaceIdServersServerTypeGet.");
                        e = "/v1/games/{placeId}/servers/{serverType}".replace("{placeId}", encodeURIComponent(String(e))).replace("{serverType}", encodeURIComponent(String(t))), t = q.Qc(e, !0);
                        G && (s = G.baseOptions);
                        var e = pr(pr({
                                method: "GET"
                            }, s), a),
                            s = {};
                        return void 0 !== n && (s.sortOrder = n), void 0 !== r && (s.limit = r), void 0 !== o && (s.cursor = o), t.query = pr(pr(pr({}, t.query), s), a.query), delete t.search, e.headers = pr(pr({}, {}), a.headers), {
                            url: q.WU(t),
                            options: e
                        }
                    },
                    v1GamesPlacesPlaceIdMetadataPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("placeId", "Required parameter placeId was null or undefined when calling v1GamesPlacesPlaceIdMetadataPost.");
                        if (null == t) throw new cr("request", "Required parameter request was null or undefined when calling v1GamesPlacesPlaceIdMetadataPost.");
                        var r = "/v1/games/places/{placeId}/metadata".replace("{placeId}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "POST"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1GamesRecommendationsAlgorithmAlgorithmNameGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new cr("algorithmName", "Required parameter algorithmName was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                        var o = "/v1/games/recommendations/algorithm/{algorithmName}".replace("{algorithmName}", encodeURIComponent(String(e))),
                            e = q.Qc(o, !0);
                        G && (a = G.baseOptions);
                        var o = pr(pr({
                                method: "GET"
                            }, a), r),
                            a = {};
                        return void 0 !== t && (a["model.paginationKey"] = t), void 0 !== n && (a["model.maxRows"] = n), e.query = pr(pr(pr({}, e.query), a), r.query), delete e.search, o.headers = pr(pr({}, {}), r.headers), {
                            url: q.WU(e),
                            options: o
                        }
                    },
                    v1GamesRecommendationsGameUniverseIdGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                        var o = "/v1/games/recommendations/game/{universeId}".replace("{universeId}", encodeURIComponent(String(e))),
                            e = q.Qc(o, !0);
                        G && (a = G.baseOptions);
                        var o = pr(pr({
                                method: "GET"
                            }, a), r),
                            a = {};
                        return void 0 !== t && (a["model.paginationKey"] = t), void 0 !== n && (a["model.maxRows"] = n), e.query = pr(pr(pr({}, e.query), a), r.query), delete e.search, o.headers = pr(pr({}, {}), r.headers), {
                            url: q.WU(e),
                            options: o
                        }
                    },
                    v1GamesSortsGet: function(e, t) {
                        void 0 === t && (t = {});
                        var n = q.Qc("/v1/games/sorts", !0);
                        G && (o = G.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return void 0 !== e && (o["model.gameSortsContext"] = e), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1GamesUniverseIdIconGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdIconGet.");
                        e = "/v1/games/{universeId}/icon".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        G && (n = G.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdMediaGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdMediaGet.");
                        e = "/v1/games/{universeId}/media".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        G && (n = G.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    }
                }
            }

            function wr(g) {
                return {
                    v1GamesGameThumbnailGet: function(e, t, n, r) {
                        var o = br(g).v1GamesGameThumbnailGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGameThumbnailsGet: function(e, t, n, r) {
                        var o = br(g).v1GamesGameThumbnailsGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGamesProductInfoGet: function(e, t) {
                        var n = br(g).v1GamesGamesProductInfoGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGet: function(e, t) {
                        var n = br(g).v1GamesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesListGet: function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m) {
                        var f = br(g).v1GamesListGet(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, f.options), {
                                url: t + f.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesMultigetPlaceDetailsGet: function(e, t) {
                        var n = br(g).v1GamesMultigetPlaceDetailsGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesMultigetPlayabilityStatusGet: function(e, t) {
                        var n = br(g).v1GamesMultigetPlayabilityStatusGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesPlaceIdServersServerTypeGet: function(e, t, n, r, o, a) {
                        var s = br(g).v1GamesPlaceIdServersServerTypeGet(e, t, n, r, o, a);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, s.options), {
                                url: t + s.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesPlacesPlaceIdMetadataPost: function(e, t, n) {
                        var r = br(g).v1GamesPlacesPlaceIdMetadataPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesRecommendationsAlgorithmAlgorithmNameGet: function(e, t, n, r) {
                        var o = br(g).v1GamesRecommendationsAlgorithmAlgorithmNameGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesRecommendationsGameUniverseIdGet: function(e, t, n, r) {
                        var o = br(g).v1GamesRecommendationsGameUniverseIdGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesSortsGet: function(e, t) {
                        var n = br(g).v1GamesSortsGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdIconGet: function(e, t) {
                        var n = br(g).v1GamesUniverseIdIconGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdMediaGet: function(e, t) {
                        var n = br(g).v1GamesUniverseIdMediaGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }
            var Cr, qr, Ar, Tr, G = (vr(Lr, Cr = ur), Lr.prototype.v1GamesGameThumbnailGet = function(e, t, n, r) {
                return wr(this.configuration).v1GamesGameThumbnailGet(e, t, n, r)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesGameThumbnailsGet = function(e, t, n, r) {
                return wr(this.configuration).v1GamesGameThumbnailsGet(e, t, n, r)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesGamesProductInfoGet = function(e, t) {
                return wr(this.configuration).v1GamesGamesProductInfoGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesGet = function(e, t) {
                return wr(this.configuration).v1GamesGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesListGet = function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m) {
                return wr(this.configuration).v1GamesListGet(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesMultigetPlaceDetailsGet = function(e, t) {
                return wr(this.configuration).v1GamesMultigetPlaceDetailsGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesMultigetPlayabilityStatusGet = function(e, t) {
                return wr(this.configuration).v1GamesMultigetPlayabilityStatusGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesPlaceIdServersServerTypeGet = function(e, t, n, r, o, a) {
                return wr(this.configuration).v1GamesPlaceIdServersServerTypeGet(e, t, n, r, o, a)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesPlacesPlaceIdMetadataPost = function(e, t, n) {
                return wr(this.configuration).v1GamesPlacesPlaceIdMetadataPost(e, t, n)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesRecommendationsAlgorithmAlgorithmNameGet = function(e, t, n, r) {
                return wr(this.configuration).v1GamesRecommendationsAlgorithmAlgorithmNameGet(e, t, n, r)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesRecommendationsGameUniverseIdGet = function(e, t, n, r) {
                return wr(this.configuration).v1GamesRecommendationsGameUniverseIdGet(e, t, n, r)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesSortsGet = function(e, t) {
                return wr(this.configuration).v1GamesSortsGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesUniverseIdIconGet = function(e, t) {
                return wr(this.configuration).v1GamesUniverseIdIconGet(e, t)(this.axios, this.basePath)
            }, Lr.prototype.v1GamesUniverseIdMediaGet = function(e, t) {
                return wr(this.configuration).v1GamesUniverseIdMediaGet(e, t)(this.axios, this.basePath)
            }, Lr);

            function Lr() {
                return null !== Cr && Cr.apply(this, arguments) || this
            }

            function Sr(o) {
                return {
                    v1GamesUniverseIdSocialLinksListGet: function(e, t) {
                        var r, n = (r = o, function(e, t) {
                            if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdSocialLinksListGet.");
                            e = "/v1/games/{universeId}/social-links/list".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                            r && (n = r.baseOptions);
                            var n = pr(pr({
                                method: "GET"
                            }, n), t);
                            return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                                url: q.WU(e),
                                options: n
                            }
                        }(e, t));
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Ur() {
                return null !== qr && qr.apply(this, arguments) || this
            }

            function Rr(a) {
                return {
                    v1GamesVipServersUniverseIdPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesVipServersUniverseIdPost.");
                        if (null == t) throw new cr("requestBody", "Required parameter requestBody was null or undefined when calling v1GamesVipServersUniverseIdPost.");
                        var r = "/v1/games/vip-servers/{universeId}".replace("{universeId}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "POST"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("id", "Required parameter id was null or undefined when calling v1VipServersIdGet.");
                        e = "/v1/vip-servers/{id}".replace("{id}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        a && (n = a.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1VipServersIdPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("id", "Required parameter id was null or undefined when calling v1VipServersIdPatch.");
                        if (null == t) throw new cr("request", "Required parameter request was null or undefined when calling v1VipServersIdPatch.");
                        var r = "/v1/vip-servers/{id}".replace("{id}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "PATCH"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdPermissionsPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("id", "Required parameter id was null or undefined when calling v1VipServersIdPermissionsPatch.");
                        if (null == t) throw new cr("request", "Required parameter request was null or undefined when calling v1VipServersIdPermissionsPatch.");
                        var r = "/v1/vip-servers/{id}/permissions".replace("{id}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "PATCH"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdSubscriptionPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("id", "Required parameter id was null or undefined when calling v1VipServersIdSubscriptionPatch.");
                        if (null == t) throw new cr("request", "Required parameter request was null or undefined when calling v1VipServersIdSubscriptionPatch.");
                        var r = "/v1/vip-servers/{id}/subscription".replace("{id}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "PATCH"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    }
                }
            }

            function Or(o) {
                return {
                    v1GamesVipServersUniverseIdPost: function(e, t, n) {
                        var r = Rr(o).v1GamesVipServersUniverseIdPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdGet: function(e, t) {
                        var n = Rr(o).v1VipServersIdGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdPatch: function(e, t, n) {
                        var r = Rr(o).v1VipServersIdPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdPermissionsPatch: function(e, t, n) {
                        var r = Rr(o).v1VipServersIdPermissionsPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdSubscriptionPatch: function(e, t, n) {
                        var r = Rr(o).v1VipServersIdSubscriptionPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Dr() {
                return null !== Ar && Ar.apply(this, arguments) || this
            }

            function xr(a) {
                return {
                    v1GamesUniverseIdUserVotesPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                        if (null == t) throw new cr("requestBody", "Required parameter requestBody was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                        var r = "/v1/games/{universeId}/user-votes".replace("{universeId}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "PATCH"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = pr(pr(pr({}, e.query), {}), n.query), delete e.search, r.headers = pr(pr({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1GamesUniverseIdVotesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdVotesGet.");
                        e = "/v1/games/{universeId}/votes".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        a && (n = a.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdVotesUserGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdVotesUserGet.");
                        e = "/v1/games/{universeId}/votes/user".replace("{universeId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        a && (n = a.baseOptions);
                        var n = pr(pr({
                            method: "GET"
                        }, n), t);
                        return e.query = pr(pr(pr({}, e.query), {}), t.query), delete e.search, n.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GamesVotesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new cr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesVotesGet.");
                        var n = q.Qc("/v1/games/votes", !0);
                        a && (o = a.baseOptions);
                        var r = pr(pr({
                                method: "GET"
                            }, o), t),
                            o = {};
                        return e && (o.universeIds = e.join(ir)), n.query = pr(pr(pr({}, n.query), o), t.query), delete n.search, r.headers = pr(pr({}, {}), t.headers), {
                            url: q.WU(n),
                            options: r
                        }
                    }
                }
            }

            function Br(o) {
                return {
                    v1GamesUniverseIdUserVotesPatch: function(e, t, n) {
                        var r = xr(o).v1GamesUniverseIdUserVotesPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdVotesGet: function(e, t) {
                        var n = xr(o).v1GamesUniverseIdVotesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdVotesUserGet: function(e, t) {
                        var n = xr(o).v1GamesUniverseIdVotesUserGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesVotesGet: function(e, t) {
                        var n = xr(o).v1GamesVotesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = sr);
                            t = pr(pr({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Er() {
                return null !== Tr && Tr.apply(this, arguments) || this
            }
            vr(Ur, qr = ur), Ur.prototype.v1GamesUniverseIdSocialLinksListGet = function(e, t) {
                return Sr(this.configuration).v1GamesUniverseIdSocialLinksListGet(e, t)(this.axios, this.basePath)
            }, vr(Dr, Ar = ur), Dr.prototype.v1GamesVipServersUniverseIdPost = function(e, t, n) {
                return Or(this.configuration).v1GamesVipServersUniverseIdPost(e, t, n)(this.axios, this.basePath)
            }, Dr.prototype.v1VipServersIdGet = function(e, t) {
                return Or(this.configuration).v1VipServersIdGet(e, t)(this.axios, this.basePath)
            }, Dr.prototype.v1VipServersIdPatch = function(e, t, n) {
                return Or(this.configuration).v1VipServersIdPatch(e, t, n)(this.axios, this.basePath)
            }, Dr.prototype.v1VipServersIdPermissionsPatch = function(e, t, n) {
                return Or(this.configuration).v1VipServersIdPermissionsPatch(e, t, n)(this.axios, this.basePath)
            }, Dr.prototype.v1VipServersIdSubscriptionPatch = function(e, t, n) {
                return Or(this.configuration).v1VipServersIdSubscriptionPatch(e, t, n)(this.axios, this.basePath)
            }, vr(Er, Tr = ur), Er.prototype.v1GamesUniverseIdUserVotesPatch = function(e, t, n) {
                return Br(this.configuration).v1GamesUniverseIdUserVotesPatch(e, t, n)(this.axios, this.basePath)
            }, Er.prototype.v1GamesUniverseIdVotesGet = function(e, t) {
                return Br(this.configuration).v1GamesUniverseIdVotesGet(e, t)(this.axios, this.basePath)
            }, Er.prototype.v1GamesUniverseIdVotesUserGet = function(e, t) {
                return Br(this.configuration).v1GamesUniverseIdVotesUserGet(e, t)(this.axios, this.basePath)
            }, Er.prototype.v1GamesVotesGet = function(e, t) {
                return Br(this.configuration).v1GamesVotesGet(e, t)(this.axios, this.basePath)
            };
            var Fr, jr, ar = (Fr = function(e, t) {
                    return (Fr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Fr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                zr = i.EnvironmentUrls.gamesApi.replace(/\/+$/, ""),
                vr = function(e, t, n) {
                    void 0 === t && (t = zr), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Nr = (jr = Error, ar(kr, jr), kr);

            function kr(e, t) {
                t = jr.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function Wr(e, t, n) {
                if (null == n) throw new Nr(t, "Required parameter " + t + " was null or undefined when calling " + e + ".")
            }

            function _r(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = new URLSearchParams(e.search), o = 0, a = t; o < a.length; o++) {
                    var s, i = a[o];
                    for (s in i) r.set(s, i[s])
                }
                e.search = r.toString()
            }

            function Mr(e) {
                return e.pathname + e.search + e.hash
            }

            function Qr(n, r, o, a) {
                return function(e, t) {
                    void 0 === e && (e = r), void 0 === t && (t = o);
                    t = Vr(Vr({}, n.options), {
                        url: ((null == a ? void 0 : a.basePath) || t) + n.url
                    });
                    return e.request(t)
                }
            }
            var Hr, Vr = function() {
                    return (Vr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Jr = "https://example.com",
                ur = (Hr = function(e, t) {
                    return (Hr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Hr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Kr = function() {
                    return (Kr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                $r = function(e, s, i, u) {
                    return new(i = i || Promise)(function(n, t) {
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
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(r, o)
                        }
                        a((u = u.apply(e, s || [])).next())
                    })
                },
                Xr = function(n, r) {
                    var o, a, s, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
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
                                for (; i;) try {
                                    if (o = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                    switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            s = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < s[1]) {
                                                i.label = s[1], s = t;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2], i.ops.push(t);
                                                break
                                            }
                                            s[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    o = s = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function Yr(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v2GamesUniverseIdMediaGet: function(a, s) {
                            return void 0 === s && (s = {}), $r(e, void 0, Promise, function() {
                                var t, n, r, o;
                                return Xr(this, function(e) {
                                    return Wr("v2GamesUniverseIdMediaGet", "universeId", a), r = "/v2/games/{universeId}/media".replace("{universeId}", encodeURIComponent(String(a))), t = new URL(r, Jr), h && (o = h.baseOptions), n = Kr(Kr({
                                        method: "GET"
                                    }, o), s), r = {}, _r(t, {}, s.query), o = o && o.headers ? o.headers : {}, n.headers = Kr(Kr(Kr({}, r), o), s.headers), [2, {
                                        url: Mr(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2GroupsGroupIdGamesGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), $r(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return Xr(this, function(e) {
                                    return Wr("v2GroupsGroupIdGamesGet", "groupId", s), o = "/v2/groups/{groupId}/games".replace("{groupId}", encodeURIComponent(String(s))), t = new URL(o, Jr), h && (a = h.baseOptions), n = Kr(Kr({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, void 0 !== i && (o.accessFilter = i), void 0 !== u && (o.sortOrder = u), void 0 !== c && (o.limit = c), void 0 !== d && (o.cursor = d), _r(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = Kr(Kr(Kr({}, r), a), l.headers), [2, {
                                        url: Mr(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2GroupsGroupIdGamesV2Get: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), $r(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return Xr(this, function(e) {
                                    return Wr("v2GroupsGroupIdGamesV2Get", "groupId", s), o = "/v2/groups/{groupId}/gamesV2".replace("{groupId}", encodeURIComponent(String(s))), t = new URL(o, Jr), h && (a = h.baseOptions), n = Kr(Kr({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, void 0 !== i && (o.accessFilter = i), void 0 !== u && (o.sortOrder = u), void 0 !== c && (o.limit = c), void 0 !== d && (o.cursor = d), _r(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = Kr(Kr(Kr({}, r), a), l.headers), [2, {
                                        url: Mr(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2UsersUserIdFavoriteGamesGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), $r(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return Xr(this, function(e) {
                                    return Wr("v2UsersUserIdFavoriteGamesGet", "userId", s), o = "/v2/users/{userId}/favorite/games".replace("{userId}", encodeURIComponent(String(s))), t = new URL(o, Jr), h && (a = h.baseOptions), n = Kr(Kr({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, void 0 !== i && (o.accessFilter = i), void 0 !== u && (o.sortOrder = u), void 0 !== c && (o.limit = c), void 0 !== d && (o.cursor = d), _r(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = Kr(Kr(Kr({}, r), a), l.headers), [2, {
                                        url: Mr(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2UsersUserIdGamesGet: function(s, i, u, c, d, l) {
                            return void 0 === l && (l = {}), $r(e, void 0, Promise, function() {
                                var t, n, r, o, a;
                                return Xr(this, function(e) {
                                    return Wr("v2UsersUserIdGamesGet", "userId", s), o = "/v2/users/{userId}/games".replace("{userId}", encodeURIComponent(String(s))), t = new URL(o, Jr), h && (a = h.baseOptions), n = Kr(Kr({
                                        method: "GET"
                                    }, a), l), r = {}, o = {}, void 0 !== i && (o.accessFilter = i), void 0 !== u && (o.sortOrder = u), void 0 !== c && (o.limit = c), void 0 !== d && (o.cursor = d), _r(t, o, l.query), a = a && a.headers ? a.headers : {}, n.headers = Kr(Kr(Kr({}, r), a), l.headers), [2, {
                                        url: Mr(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v2GamesUniverseIdMediaGet: function(n, r) {
                        return $r(this, void 0, Promise, function() {
                            var t;
                            return Xr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GamesUniverseIdMediaGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, Qr(t, l(), zr, u)]
                                }
                            })
                        })
                    },
                    v2GroupsGroupIdGamesGet: function(n, r, o, a, s, i) {
                        return $r(this, void 0, Promise, function() {
                            var t;
                            return Xr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GroupsGroupIdGamesGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, Qr(t, l(), zr, u)]
                                }
                            })
                        })
                    },
                    v2GroupsGroupIdGamesV2Get: function(n, r, o, a, s, i) {
                        return $r(this, void 0, Promise, function() {
                            var t;
                            return Xr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GroupsGroupIdGamesV2Get(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, Qr(t, l(), zr, u)]
                                }
                            })
                        })
                    },
                    v2UsersUserIdFavoriteGamesGet: function(n, r, o, a, s, i) {
                        return $r(this, void 0, Promise, function() {
                            var t;
                            return Xr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2UsersUserIdFavoriteGamesGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, Qr(t, l(), zr, u)]
                                }
                            })
                        })
                    },
                    v2UsersUserIdGamesGet: function(n, r, o, a, s, i) {
                        return $r(this, void 0, Promise, function() {
                            var t;
                            return Xr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2UsersUserIdGamesGet(n, r, o, a, s, i)];
                                    case 1:
                                        return t = e.sent(), [2, Qr(t, l(), zr, u)]
                                }
                            })
                        })
                    }
                }
            }(ar = {}).Asc = "Asc", ar.Desc = "Desc", (ar = {}).Forward = "Forward", ar.Backward = "Backward", (ar = {}).Asc = "Asc", ar.Desc = "Desc", (ar = {}).Forward = "Forward", ar.Backward = "Backward", (ar = {}).Image = "Image", ar.TShirt = "TShirt", ar.Audio = "Audio", ar.Mesh = "Mesh", ar.Lua = "Lua", ar.Html = "HTML", ar.Text = "Text", ar.Hat = "Hat", ar.Place = "Place", ar.Model = "Model", ar.Shirt = "Shirt", ar.Pants = "Pants", ar.Decal = "Decal", ar.Avatar = "Avatar", ar.Head = "Head", ar.Face = "Face", ar.Gear = "Gear", ar.Badge = "Badge", ar.GroupEmblem = "GroupEmblem", ar.Animation = "Animation", ar.Arms = "Arms", ar.Legs = "Legs", ar.Torso = "Torso", ar.RightArm = "RightArm", ar.LeftArm = "LeftArm", ar.LeftLeg = "LeftLeg", ar.RightLeg = "RightLeg", ar.Package = "Package", ar.YouTubeVideo = "YouTubeVideo", ar.GamePass = "GamePass", ar.App = "App", ar.Code = "Code", ar.Plugin = "Plugin", ar.SolidModel = "SolidModel", ar.MeshPart = "MeshPart", ar.HairAccessory = "HairAccessory", ar.FaceAccessory = "FaceAccessory", ar.NeckAccessory = "NeckAccessory", ar.ShoulderAccessory = "ShoulderAccessory", ar.FrontAccessory = "FrontAccessory", ar.BackAccessory = "BackAccessory", ar.WaistAccessory = "WaistAccessory", ar.ClimbAnimation = "ClimbAnimation", ar.DeathAnimation = "DeathAnimation", ar.FallAnimation = "FallAnimation", ar.IdleAnimation = "IdleAnimation", ar.JumpAnimation = "JumpAnimation", ar.RunAnimation = "RunAnimation", ar.SwimAnimation = "SwimAnimation", ar.WalkAnimation = "WalkAnimation", ar.PoseAnimation = "PoseAnimation", ar.LocalizationTableManifest = "LocalizationTableManifest", ar.LocalizationTableTranslation = "LocalizationTableTranslation", ar.EmoteAnimation = "EmoteAnimation", ar.Video = "Video", ar.TexturePack = "TexturePack", (ar = {}).User = "User", ar.Group = "Group";
            var Zr, ur = (ur(eo, Zr = vr), eo.prototype.v2GamesUniverseIdMediaGet = function(e, t) {
                var n = this;
                return Yr(this.configuration).v2GamesUniverseIdMediaGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, eo.prototype.v2GroupsGroupIdGamesGet = function(e, t, n, r, o, a) {
                var s = this;
                return Yr(this.configuration).v2GroupsGroupIdGamesGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, eo.prototype.v2GroupsGroupIdGamesV2Get = function(e, t, n, r, o, a) {
                var s = this;
                return Yr(this.configuration).v2GroupsGroupIdGamesV2Get(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, eo.prototype.v2UsersUserIdFavoriteGamesGet = function(e, t, n, r, o, a) {
                var s = this;
                return Yr(this.configuration).v2UsersUserIdFavoriteGamesGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, eo.prototype.v2UsersUserIdGamesGet = function(e, t, n, r, o, a) {
                var s = this;
                return Yr(this.configuration).v2UsersUserIdGamesGet(e, t, n, r, o, a).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, eo);

            function eo() {
                return null !== Zr && Zr.apply(this, arguments) || this
            }
            var to, no, ro = new G,
                oo = new ur,
                ao = new Ir,
                vr = {
                    getUniverseMedia: function(e) {
                        return oo.v2GamesUniverseIdMediaGet(e, {
                            withCredentials: !0
                        })
                    },
                    getPlayabilityStatus: function(e) {
                        return ro.v1GamesMultigetPlayabilityStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    getPlaceDetails: function(e) {
                        return ro.v1GamesMultigetPlaceDetailsGet(e, {
                            withCredentials: !0
                        })
                    },
                    getProductInfo: function(e) {
                        return ro.v1GamesGamesProductInfoGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGameDetails: function(e) {
                        return ro.v1GamesGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGamePasses: function(e, t, n, r) {
                        return ao.v1GamesUniverseIdGamePassesGet(e, t, n, r)
                    },
                    getGamesSorts: function(e) {
                        return ro.v1GamesSortsGet(e)
                    },
                    getGamesList: function(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m) {
                        return ro.v1GamesListGet(e, t, n, r, o, a, s, i, u, c, d, l, h, v, p, m)
                    }
                },
                G = (to = function(e, t) {
                    return (to = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    to(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                so = i.EnvironmentUrls.inventoryApi.replace(/\/+$/, ""),
                ur = function(e, t, n) {
                    void 0 === t && (t = so), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                io = (no = Error, G(uo, no), uo);

            function uo(e, t) {
                t = no.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var co, Ir = (co = function(e, t) {
                    return (co = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    co(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                lo = function() {
                    return (lo = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function ho(u) {
                return {
                    v2AssetsAssetIdOwnersGet: function(e, t, n, r, o) {
                        if (void 0 === o && (o = {}), null == e) throw new io("assetId", "Required parameter assetId was null or undefined when calling v2AssetsAssetIdOwnersGet.");
                        var a = "/v2/assets/{assetId}/owners".replace("{assetId}", encodeURIComponent(String(e))),
                            e = q.Qc(a, !0);
                        u && (s = u.baseOptions);
                        var a = lo(lo({
                                method: "GET"
                            }, s), o),
                            s = {};
                        return void 0 !== t && (s.sortOrder = t), void 0 !== n && (s.limit = n), void 0 !== r && (s.cursor = r), e.query = lo(lo(lo({}, e.query), s), o.query), delete e.search, a.headers = lo(lo({}, {}), o.headers), {
                            url: q.WU(e),
                            options: a
                        }
                    },
                    v2RecommendationsAssetTypeIdGet: function(e, t, n, r, o, a) {
                        if (void 0 === a && (a = {}), null == e) throw new io("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v2RecommendationsAssetTypeIdGet.");
                        var s = "/v2/recommendations/{assetTypeId}".replace("{assetTypeId}", encodeURIComponent(String(e))),
                            e = q.Qc(s, !0);
                        u && (i = u.baseOptions);
                        var s = lo(lo({
                                method: "GET"
                            }, i), a),
                            i = {};
                        return void 0 !== t && (i.numItems = t), void 0 !== n && (i.contextAssetId = n), void 0 !== r && (i.thumbWidth = r), void 0 !== o && (i.thumbHeight = o), e.query = lo(lo(lo({}, e.query), i), a.query), delete e.search, s.headers = lo(lo({}, {}), a.headers), {
                            url: q.WU(e),
                            options: s
                        }
                    }
                }
            }

            function vo(i) {
                return {
                    v2AssetsAssetIdOwnersGet: function(e, t, n, r, o) {
                        var a = ho(i).v2AssetsAssetIdOwnersGet(e, t, n, r, o);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = so);
                            t = lo(lo({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    },
                    v2RecommendationsAssetTypeIdGet: function(e, t, n, r, o, a) {
                        var s = ho(i).v2RecommendationsAssetTypeIdGet(e, t, n, r, o, a);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = so);
                            t = lo(lo({}, s.options), {
                                url: t + s.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }(G = {}).Asc = "Asc", G.Desc = "Desc", (G = {}).Forward = "Forward", G.Backward = "Backward", (G = {}).User = "User", G.Group = "Group", (G = {}).None = "None", G.BC = "BC", G.TBC = "TBC", G.OBC = "OBC", G.RobloxPremium = "RobloxPremium";
            var po, mo, G = (Ir(fo, po = ur), fo.prototype.v2AssetsAssetIdOwnersGet = function(e, t, n, r, o) {
                return vo(this.configuration).v2AssetsAssetIdOwnersGet(e, t, n, r, o)(this.axios, this.basePath)
            }, fo.prototype.v2RecommendationsAssetTypeIdGet = function(e, t, n, r, o, a) {
                return vo(this.configuration).v2RecommendationsAssetTypeIdGet(e, t, n, r, o, a)(this.axios, this.basePath)
            }, fo);

            function fo() {
                return null !== po && po.apply(this, arguments) || this
            }

            function go(u) {
                return {
                    v2UsersUserIdInventoryAssetTypeIdGet: function(e, t, n, r, o, a) {
                        var i, s = (i = u, function(e, t, n, r, o, a) {
                            if (void 0 === a && (a = {}), null == e) throw new io("userId", "Required parameter userId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet.");
                            if (null == t) throw new io("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet.");
                            e = "/v2/users/{userId}/inventory/{assetTypeId}".replace("{userId}", encodeURIComponent(String(e))).replace("{assetTypeId}", encodeURIComponent(String(t))), t = q.Qc(e, !0);
                            i && (s = i.baseOptions);
                            var e = lo(lo({
                                    method: "GET"
                                }, s), a),
                                s = {};
                            return void 0 !== n && (s.sortOrder = n), void 0 !== r && (s.limit = r), void 0 !== o && (s.cursor = o), t.query = lo(lo(lo({}, t.query), s), a.query), delete t.search, e.headers = lo(lo({}, {}), a.headers), {
                                url: q.WU(t),
                                options: e
                            }
                        }(e, t, n, r, o, a));
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = so);
                            t = lo(lo({}, s.options), {
                                url: t + s.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function yo() {
                return null !== mo && mo.apply(this, arguments) || this
            }
            Ir(yo, mo = ur), yo.prototype.v2UsersUserIdInventoryAssetTypeIdGet = function(e, t, n, r, o, a) {
                return go(this.configuration).v2UsersUserIdInventoryAssetTypeIdGet(e, t, n, r, o, a)(this.axios, this.basePath)
            };
            var Go, Io, Po = new G,
                Ir = {
                    getRecommendations: function(e, t, n) {
                        return Po.v2RecommendationsAssetTypeIdGet(e, t, n)
                    }
                },
                bo = {
                    getUserKey: function(e) {
                        return "user_" + e
                    },
                    storage: function() {
                        return i.LocalStorage ? i.LocalStorage.isAvailable() : localStorage
                    },
                    getLength: function() {
                        return this.storage() ? localStorage.length : 0
                    },
                    getKey: function(e) {
                        return this.storage() ? localStorage.key(e) : ""
                    },
                    setLocalStorage: function(e, t) {
                        this.storage() && localStorage.setItem(e, JSON.stringify(t))
                    },
                    getLocalStorage: function(e) {
                        if (this.storage()) return JSON.parse(localStorage.getItem(e))
                    },
                    listenLocalStorage: function(e) {
                        this.storage() && void 0 !== e && (window.addEventListener ? window.addEventListener("storage", e, !1) : window.attachEvent("onstorage", e))
                    },
                    removeLocalStorage: function(e) {
                        this.storage() && localStorage.removeItem(e)
                    },
                    saveDataByTimeStamp: function(e, t) {
                        var n = (new Date).getTime(),
                            r = this.getLocalStorage(e);
                        (r = r || {}).data = t, r.timeStamp = n, this.setLocalStorage(e, r)
                    },
                    fetchNonExpiredCachedData: function(e, t) {
                        var n = (new Date).getTime(),
                            r = this.getLocalStorage(e);
                        if (r && r.timeStamp) {
                            if (n - r.timeStamp < (t = t || 3e4)) return r;
                            this.removeLocalStorage(e)
                        }
                        return null
                    }
                },
                ur = (Go = function(e, t) {
                    return (Go = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Go(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                wo = i.EnvironmentUrls.localeApi.replace(/\/+$/, ""),
                G = function(e, t, n) {
                    void 0 === t && (t = wo), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Co = (Io = Error, ur(qo, Io), qo);

            function qo(e, t) {
                t = Io.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function Ao(a) {
                return {
                    v1CountryRegionsGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/country-regions", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1CountryRegionsUserCountryRegionGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/country-regions/user-country-region", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1CountryRegionsUserCountryRegionPatch: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Co("userRequest", "Required parameter userRequest was null or undefined when calling v1CountryRegionsUserCountryRegionPatch.");
                        var n = q.Qc("/v1/country-regions/user-country-region", !0);
                        a && (o = a.baseOptions);
                        var r = Oo(Oo({
                                method: "PATCH"
                            }, o), t),
                            o = {};
                        o["Content-Type"] = "application/json", n.query = Oo(Oo(Oo({}, n.query), {}), t.query), delete n.search, r.headers = Oo(Oo({}, o), t.headers);
                        return r.data = JSON.stringify(void 0 !== e ? e : {}), {
                            url: q.WU(n),
                            options: r
                        }
                    }
                }
            }

            function To(r) {
                return {
                    v1CountryRegionsGet: function(e) {
                        var n = Ao(r).v1CountryRegionsGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1CountryRegionsUserCountryRegionGet: function(e) {
                        var n = Ao(r).v1CountryRegionsUserCountryRegionGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1CountryRegionsUserCountryRegionPatch: function(e, t) {
                        var n = Ao(r).v1CountryRegionsUserCountryRegionPatch(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }
            var Lo, So, Uo, Ro, ur = (Lo = function(e, t) {
                    return (Lo = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Lo(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Oo = function() {
                    return (Oo = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function Do() {
                return null !== So && So.apply(this, arguments) || this
            }

            function xo(r) {
                return {
                    v1LanguagesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/languages", !0);
                        r && (n = r.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1LanguagesUserGeneratedContentGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/languages/user-generated-content", !0);
                        r && (n = r.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    }
                }
            }

            function Bo(t) {
                return {
                    v1LanguagesGet: function(e) {
                        var n = xo(t).v1LanguagesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LanguagesUserGeneratedContentGet: function(e) {
                        var n = xo(t).v1LanguagesUserGeneratedContentGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Eo() {
                return null !== Uo && Uo.apply(this, arguments) || this
            }

            function Fo(a) {
                return {
                    v1LocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/locales", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1LocalesSetUserSupportedLocalePost: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Co("userRequest", "Required parameter userRequest was null or undefined when calling v1LocalesSetUserSupportedLocalePost.");
                        var n = q.Qc("/v1/locales/set-user-supported-locale", !0);
                        a && (o = a.baseOptions);
                        var r = Oo(Oo({
                                method: "POST"
                            }, o), t),
                            o = {};
                        o["Content-Type"] = "application/json", n.query = Oo(Oo(Oo({}, n.query), {}), t.query), delete n.search, r.headers = Oo(Oo({}, o), t.headers);
                        return r.data = JSON.stringify(void 0 !== e ? e : {}), {
                            url: q.WU(n),
                            options: r
                        }
                    },
                    v1LocalesSupportedLocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/locales/supported-locales", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1LocalesUserLocaleGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/locales/user-locale", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    },
                    v1LocalesUserLocalizationLocusSupportedLocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = q.Qc("/v1/locales/user-localization-locus-supported-locales", !0);
                        a && (n = a.baseOptions);
                        var n = Oo(Oo({
                            method: "GET"
                        }, n), e);
                        return t.query = Oo(Oo(Oo({}, t.query), {}), e.query), delete t.search, n.headers = Oo(Oo({}, {}), e.headers), {
                            url: q.WU(t),
                            options: n
                        }
                    }
                }
            }

            function jo(r) {
                return {
                    v1LocalesGet: function(e) {
                        var n = Fo(r).v1LocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesSetUserSupportedLocalePost: function(e, t) {
                        var n = Fo(r).v1LocalesSetUserSupportedLocalePost(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesSupportedLocalesGet: function(e) {
                        var n = Fo(r).v1LocalesSupportedLocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesUserLocaleGet: function(e) {
                        var n = Fo(r).v1LocalesUserLocaleGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesUserLocalizationLocusSupportedLocalesGet: function(e) {
                        var n = Fo(r).v1LocalesUserLocalizationLocusSupportedLocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = wo);
                            t = Oo(Oo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function zo() {
                return null !== Ro && Ro.apply(this, arguments) || this
            }
            ur(Do, So = G), Do.prototype.v1CountryRegionsGet = function(e) {
                return To(this.configuration).v1CountryRegionsGet(e)(this.axios, this.basePath)
            }, Do.prototype.v1CountryRegionsUserCountryRegionGet = function(e) {
                return To(this.configuration).v1CountryRegionsUserCountryRegionGet(e)(this.axios, this.basePath)
            }, Do.prototype.v1CountryRegionsUserCountryRegionPatch = function(e, t) {
                return To(this.configuration).v1CountryRegionsUserCountryRegionPatch(e, t)(this.axios, this.basePath)
            }, ur(Eo, Uo = G), Eo.prototype.v1LanguagesGet = function(e) {
                return Bo(this.configuration).v1LanguagesGet(e)(this.axios, this.basePath)
            }, Eo.prototype.v1LanguagesUserGeneratedContentGet = function(e) {
                return Bo(this.configuration).v1LanguagesUserGeneratedContentGet(e)(this.axios, this.basePath)
            };
            var No, ko = new(ur(zo, Ro = G), zo.prototype.v1LocalesGet = function(e) {
                return jo(this.configuration).v1LocalesGet(e)(this.axios, this.basePath)
            }, zo.prototype.v1LocalesSetUserSupportedLocalePost = function(e, t) {
                return jo(this.configuration).v1LocalesSetUserSupportedLocalePost(e, t)(this.axios, this.basePath)
            }, zo.prototype.v1LocalesSupportedLocalesGet = function(e) {
                return jo(this.configuration).v1LocalesSupportedLocalesGet(e)(this.axios, this.basePath)
            }, zo.prototype.v1LocalesUserLocaleGet = function(e) {
                return jo(this.configuration).v1LocalesUserLocaleGet(e)(this.axios, this.basePath)
            }, zo.prototype.v1LocalesUserLocalizationLocusSupportedLocalesGet = function(e) {
                return jo(this.configuration).v1LocalesUserLocalizationLocusSupportedLocalesGet(e)(this.axios, this.basePath)
            }, zo);

            function Wo() {
                return ko.v1LocalesGet({
                    withCredentials: !0
                })
            }(No = No || {}).getLocales = "Roblox.Api.Locales.getLocales";
            var _o, G = {
                    getLocales: Wo,
                    getUserLocale: function() {
                        return ko.v1LocalesUserLocalizationLocusSupportedLocalesGet({
                            withCredentials: !0
                        })
                    },
                    setUserLocale: function(e) {
                        e = {
                            supportedLocaleCode: e
                        };
                        return ko.v1LocalesSetUserSupportedLocalePost(e, {
                            withCredentials: !0
                        })
                    },
                    getLocalesWithCache: function(e) {
                        return r = Wo, o = No.getLocales, a = e, new Promise(function(t, n) {
                            var e = bo.fetchNonExpiredCachedData(o, a);
                            e ? t(e.data) : r().then(function(e) {
                                bo.saveDataByTimeStamp(o, e.data), t(e.data)
                            }, function(e) {
                                return n(e)
                            })
                        });
                        var r, o, a
                    }
                },
                Mo = new zt,
                Qo = new t,
                Ho = new he,
                Vo = new te,
                Jo = new A,
                Ko = new g,
                $o = new Kn,
                Xo = new Qt,
                te = {
                    getAssets: function(e, t, n, r, o) {
                        return Mo.v1AssetsGet(e, t, n, r, o, {
                            withCredentials: !0
                        })
                    },
                    getAvatars: function(e, t, n, r) {
                        return Ho.v1UsersAvatarGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getAvatarHeadshots: function(e, t, n, r) {
                        return Ho.v1UsersAvatarHeadshotGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getGroupIcons: function(e, t, n, r) {
                        return Vo.v1GroupsIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBadgeIcons: function(e, t, n, r) {
                        return Jo.v1BadgesIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getDeveloperProductIcons: function(e, t, n, r) {
                        return Ko.v1DeveloperProductsIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBundles: function(e, t, n, r) {
                        return Qo.v1BundlesThumbnailsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getUserOutfits: function(e, t, n, r) {
                        return $o.v1UsersOutfitsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBatchThumbnails: function(e) {
                        return Xo.v1BatchPost(e)
                    }
                },
                Yo = new $e;
            (A = _o = _o || {}).Language = "Language", A.Locale = "Locale";
            var Zo, ea, g = {
                    getTranslationProgress: function(e, t) {
                        return Yo.v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(e, t, _o.Language, {
                            withCredentials: !0
                        })
                    }
                },
                Kn = (Zo = function(e, t) {
                    return (Zo = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Zo(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                ta = i.EnvironmentUrls.translationRolesApi.replace(/\/+$/, ""),
                Qt = function(e, t, n) {
                    void 0 === t && (t = ta), void 0 === n && (n = P), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                na = (ea = Error, Kn(ra, ea), ra);

            function ra(e, t) {
                t = ea.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var oa, aa, $e = (oa = function(e, t) {
                    return (oa = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    oa(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                sa = function() {
                    return (sa = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function ia(s) {
                return {
                    v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new na("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet.");
                        e = "/v1/game-localization-roles/games/{gameId}/current-user/roles".replace("{gameId}", encodeURIComponent(String(e))), e = q.Qc(e, !0);
                        s && (n = s.baseOptions);
                        var n = sa(sa({
                            method: "GET"
                        }, n), t);
                        return e.query = sa(sa(sa({}, e.query), {}), t.query), delete e.search, n.headers = sa(sa({}, {}), t.headers), {
                            url: q.WU(e),
                            options: n
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new na("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdPatch.");
                        if (null == t) throw new na("request", "Required parameter request was null or undefined when calling v1GameLocalizationRolesGamesGameIdPatch.");
                        var r = "/v1/game-localization-roles/games/{gameId}".replace("{gameId}", encodeURIComponent(String(e))),
                            e = q.Qc(r, !0);
                        s && (o = s.baseOptions);
                        var r = sa(sa({
                                method: "PATCH"
                            }, o), n),
                            o = {};
                        o["Content-Type"] = "application/json", e.query = sa(sa(sa({}, e.query), {}), n.query), delete e.search, r.headers = sa(sa({}, o), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: q.WU(e),
                            options: r
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new na("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet.");
                        if (null == t) throw new na("role", "Required parameter role was null or undefined when calling v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet.");
                        t = "/v1/game-localization-roles/games/{gameId}/roles/{role}/assignees".replace("{gameId}", encodeURIComponent(String(e))).replace("{role}", encodeURIComponent(String(t))), t = q.Qc(t, !0);
                        s && (r = s.baseOptions);
                        var r = sa(sa({
                            method: "GET"
                        }, r), n);
                        return t.query = sa(sa(sa({}, t.query), {}), n.query), delete t.search, r.headers = sa(sa({}, {}), n.headers), {
                            url: q.WU(t),
                            options: r
                        }
                    },
                    v1GameLocalizationRolesRolesRoleCurrentUserGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new na("role", "Required parameter role was null or undefined when calling v1GameLocalizationRolesRolesRoleCurrentUserGet.");
                        var o = "/v1/game-localization-roles/roles/{role}/current-user".replace("{role}", encodeURIComponent(String(e))),
                            e = q.Qc(o, !0);
                        s && (a = s.baseOptions);
                        var o = sa(sa({
                                method: "GET"
                            }, a), r),
                            a = {};
                        return void 0 !== t && (a.exclusiveStartKey = t), void 0 !== n && (a.pageSize = n), e.query = sa(sa(sa({}, e.query), a), r.query), delete e.search, o.headers = sa(sa({}, {}), r.headers), {
                            url: q.WU(e),
                            options: o
                        }
                    }
                }
            }

            function ua(a) {
                return {
                    v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet: function(e, t) {
                        var n = ia(a).v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = ta);
                            t = sa(sa({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdPatch: function(e, t, n) {
                        var r = ia(a).v1GameLocalizationRolesGamesGameIdPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = ta);
                            t = sa(sa({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet: function(e, t, n) {
                        var r = ia(a).v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = ta);
                            t = sa(sa({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesRolesRoleCurrentUserGet: function(e, t, n, r) {
                        var o = ia(a).v1GameLocalizationRolesRolesRoleCurrentUserGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = P), void 0 === t && (t = ta);
                            t = sa(sa({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function ca() {
                return null !== aa && aa.apply(this, arguments) || this
            }(A = {}).User = "user", A.Group = "group", A.GroupRole = "groupRole", (Kn = {}).User = "user", Kn.Group = "group", Kn.GroupRole = "groupRole", (A = {}).User = "user", A.Group = "group", A.GroupRole = "groupRole";
            var da, la = new($e(ca, aa = Qt), ca.prototype.v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet = function(e, t) {
                return ua(this.configuration).v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet(e, t)(this.axios, this.basePath)
            }, ca.prototype.v1GameLocalizationRolesGamesGameIdPatch = function(e, t, n) {
                return ua(this.configuration).v1GameLocalizationRolesGamesGameIdPatch(e, t, n)(this.axios, this.basePath)
            }, ca.prototype.v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet = function(e, t, n) {
                return ua(this.configuration).v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet(e, t, n)(this.axios, this.basePath)
            }, ca.prototype.v1GameLocalizationRolesRolesRoleCurrentUserGet = function(e, t, n, r) {
                return ua(this.configuration).v1GameLocalizationRolesRolesRoleCurrentUserGet(e, t, n, r)(this.axios, this.basePath)
            }, ca);
            (da = da || {}).Translator = "translator";
            var ha, Kn = {
                    getGamesListForTranslator: function(e, t) {
                        return la.v1GameLocalizationRolesRolesRoleCurrentUserGet(da.Translator, t, e, {
                            withCredentials: !0
                        })
                    }
                },
                va = {
                    useCache: !1,
                    expirationWindowMS: 3e4
                };

            function pa(t, n) {
                return function(e) {
                    e = Math.pow(2, e - 1) * t;
                    return Math.min(n, e)
                }
            }

            function ma(e, t) {
                this.store = new Map, this.useCache = e || !1, this.expirationWindowMS = t || 3e4, this.storeKeyPrefix = "CacheStore:BatchRequestProcessor::"
            }(A = ha = ha || {}).processFailure = "processFailure", A.unretriableFailure = "unretriableFailure", A.maxAttemptsReached = "maxAttemptsReached";
            var fa = (ma.prototype.getCacheKey = function(e) {
                    return "" + this.storeKeyPrefix + e
                }, ma.prototype.has = function(e, t) {
                    var n = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (n || this.useCache) && localStorage ? !!bo.fetchNonExpiredCachedData(e, t || this.expirationWindowMS) : this.store.has(e)
                }, ma.prototype.set = function(e, t, n) {
                    n = n.useCache, e = this.getCacheKey(e);
                    (n || this.useCache) && localStorage && bo.saveDataByTimeStamp(e, t), this.store.set(e, t)
                }, ma.prototype.get = function(e, t) {
                    var n, r = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (r || this.useCache) && localStorage ? null == (n = bo.fetchNonExpiredCachedData(e, t || this.expirationWindowMS)) ? void 0 : n.data : (n && this.store.set(e, null == n ? void 0 : n.data), this.store.get(e))
                }, ma.prototype.delete = function(e) {
                    e = this.getCacheKey(e);
                    localStorage && bo.removeLocalStorage(e), this.store.delete(e)
                }, ma.prototype.clear = function() {
                    if (this.store.clear(), localStorage) {
                        for (var e = [], t = 0; t < localStorage.length; t++) {
                            var n = localStorage.key(t);
                            n.includes(this.storeKeyPrefix) && e.push(n)
                        }
                        for (var r = 0; r < e.length; r++) localStorage.removeItem(e[r])
                    }
                }, ma),
                ga = function() {
                    return (ga = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function ya(e, t, n) {
                this.requestQueue = [], this.active = !1, this.debug = !1;
                var r = n.cacheProperties,
                    o = n.processBatchWaitTime,
                    a = n.batchSize,
                    s = n.maxRetryAttempts,
                    i = n.getItemExpiration,
                    u = n.getFailureCooldown,
                    c = n.debugMode,
                    d = r.useCache,
                    n = r.expirationWindowMS;
                this.cacheProperties = r, this.completeItems = new fa(d, n), this.processBatchWaitTime = o, this.batchSize = a, this.maxRetryAttempts = s, this.getItemExpiration = i, this.getFailureCooldown = u, this.itemsProcessor = e, this.itemsSerializer = t, this.debug = c || !1, this.processorId = Date.now()
            }
            var Ga = (ya.prototype.handleBatchResult = function(e, n) {
                var r = this,
                    o = 0,
                    a = (new Date).getTime();
                e.forEach(function(e) {
                    var t;
                    r.completeItems.has(e.key, e.cacheProperties) ? (t = (new Date).getTime(), e.resolve(ga(ga({}, r.completeItems.get(e.key, e.cacheProperties)), {
                        performance: {
                            duration: t - e.startTime.getTime()
                        }
                    }))) : r.maxRetryAttempts && n !== ha.unretriableFailure ? (t = r.getFailureCooldown ? r.getFailureCooldown(e.retryAttempts) : 1e3, o = 0 < o ? Math.min(o, t) : t, ++e.retryAttempts <= r.maxRetryAttempts ? (e.queueAfter = a + t, r.requestQueue.unshift(e)) : e.reject(ha.maxAttemptsReached)) : (console.debug(n, e), e.reject(n))
                }), this.processEndTime = Date.now(), this.debug && console.debug(this.processorId + ": process queue ended", {
                    duration: this.processEndTime - this.processStartTime,
                    requestQueue: this.requestQueue,
                    minimumCooldown: o,
                    processBatchWaitTime: this.processBatchWaitTime
                }), 0 < o && setTimeout(function() {
                    return r.processQueue()
                }, o + this.processBatchWaitTime), this.active = !1, this.processQueue()
            }, ya.prototype.processQueue = function() {
                var e, r = this;
                if (!this.active) {
                    this.processStartTime = Date.now();
                    for (var t = [], o = new Map, n = [], a = (new Date).getTime(); t.length < this.batchSize && 0 < this.requestQueue.length;) {
                        var s, i = this.requestQueue.shift();
                        i.queueAfter > a ? (o.set(i.key, i), n.push(i)) : this.completeItems.has(i.key, i.cacheProperties) ? (s = (new Date).getTime(), i.resolve(ga(ga({}, this.completeItems.get(i.key, i.cacheProperties)), {
                            performance: {
                                duration: s - i.startTime.getTime()
                            }
                        }))) : o.has(i.key) ? n.push(i) : (o.set(i.key, i), t.push(i))
                    }(e = this.requestQueue).push.apply(e, n), t.length <= 0 || (this.active = !0, this.debug && console.debug(this.processorId + ": process queue start", {
                        timeSinceLastStart: this.processEndTime ? this.processStartTime - this.processEndTime : 0,
                        startTime: this.processStartTime,
                        requestQueue: this.requestQueue,
                        batch: t
                    }), this.itemsProcessor(t).then(function(e) {
                        Object.entries(e).forEach(function(e) {
                            var t = e[0],
                                n = e[1],
                                e = o.get(t);
                            r.saveCompleteItem(t, n, null == e ? void 0 : e.cacheProperties)
                        }), r.handleBatchResult(t, ha.processFailure)
                    }, function(e) {
                        r.handleBatchResult(t, e)
                    }))
                }
            }, ya.prototype.saveCompleteItem = function(e, t, n) {
                var r = this;
                this.completeItems.set(e, t, n || this.cacheProperties), this.getItemExpiration && setTimeout(function() {
                    r.completeItems.delete(e)
                }, this.getItemExpiration(e))
            }, ya.prototype.queueItem = function(n, r, o) {
                var a = this;
                return new Promise(function(e, t) {
                    a.requestQueue.push({
                        key: r || a.itemsSerializer(n),
                        itemId: n,
                        data: n,
                        retryAttempts: 0,
                        queueAfter: 0,
                        startTime: new Date,
                        cacheProperties: o || a.cacheProperties,
                        resolve: e,
                        reject: t
                    }), setTimeout(function() {
                        return a.processQueue()
                    }, a.processBatchWaitTime)
                })
            }, ya.prototype.invalidateItem = function(e, t) {
                e = t || this.itemsSerializer(e);
                return this.completeItems.delete(e)
            }, ya.prototype.clearCache = function() {
                this.completeItems.clear()
            }, ya);

            function Ia() {
                this.createExponentialBackoffCooldown = pa
            }
            new($e = (Ia.prototype.createRequestProcessor = function(e, t, n) {
                return n.processBatchWaitTime || (n.processBatchWaitTime = 10), n.maxRetryAttempts || (n.maxRetryAttempts = 2), n.cacheProperties || (n.cacheProperties = va), new Ga(e, t, n)
            }, Ia));
            var Pa, ba = i.EnvironmentUrls.friendsApi,
                wa = i.EnvironmentUrls.presenceApi,
                Ca = i.EnvironmentUrls.usersApi;

            function qa(e, t) {
                return t = ba + "/v1/users/" + t + "/" + e, e === Pa.Requests && (t = ba + "/v1/my/friends/requests"), {
                    url: t,
                    retryable: !0,
                    withCredentials: !0
                }
            }

            function Aa() {
                return {
                    url: wa + "/v1/presence/users",
                    retryable: !1,
                    withCredentials: !0
                }
            }

            function Ta(a) {
                return function(e) {
                    var t = e[0],
                        u = t.key,
                        n = t.data,
                        r = n.userId,
                        c = n.isGuest,
                        o = qa(a, r),
                        e = (t = (e = n).cursor, r = e.sortOrder, n = e.limit, e = {}, t && Object.assign(e, {
                            cursor: t
                        }), r && Object.assign(e, {
                            sortOrder: r
                        }), n && Object.assign(e, {
                            limit: n
                        }), e);
                    return f.get(o, e).then(function(e) {
                        var r = {};
                        if (null == e || !e.data) return r[u] = {
                            userData: []
                        }, r;
                        var t, n = e.data,
                            o = n.data,
                            a = n.previousPageCursor,
                            s = n.nextPageCursor,
                            i = (t = {}, o.forEach(function(e) {
                                t[e.id] = e, t[e.id].profileUrl = "/users/" + e.id + "/profile", t[e.id].presence = {}
                            }), t);
                        if (c) return r[u] = {
                            userData: o,
                            prevCursor: a,
                            nextCursor: s
                        }, r;
                        e = Aa(), n = Object.keys(i).map(function(e) {
                            return parseInt(e, 10)
                        });
                        return f.post(e, {
                            userIds: n
                        }).then(function(e) {
                            var t, n;
                            return t = i, 0 < (null === (e = null === (e = null == (n = e) ? void 0 : n.data) || void 0 === e ? void 0 : e.userPresences) || void 0 === e ? void 0 : e.length) && (n = n.data.userPresences, Ra([], n).forEach(function(e) {
                                t[e.userId].presence = e
                            })), r[u] = {
                                userData: o,
                                prevCursor: a,
                                nextCursor: s
                            }, r
                        }).catch(function(e) {
                            return console.debug(e), r[u] = {
                                userData: o,
                                prevCursor: a,
                                nextCursor: s
                            }, r
                        })
                    }).catch(function(e) {
                        return console.debug(e), {}
                    })
                }
            }

            function La(e) {
                return e = 0 < arguments.length && void 0 !== e ? e : window.location.search, Ba.parse(e)
            }

            function Sa(e) {
                return e = 0 < arguments.length && void 0 !== e ? e : {}, Ba.stringify(e)
            }

            function Ua(e) {
                return i.Endpoints ? i.Endpoints.getAbsoluteUrl(e) : e
            }(Qt = Pa = Pa || {}).Friends = "friends", Qt.Followers = "followers", Qt.Followings = "followings", Qt.Requests = "requests";
            var Ra = function(e, t) {
                    for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                    return e
                },
                Oa = (new $e).createRequestProcessor(function(e) {
                    var t = {
                            url: Ca + "/v1/users",
                            retryable: !0,
                            withCredentials: !0
                        },
                        e = e.map(function(e) {
                            return e.data.userId
                        });
                    return f.post(t, {
                        userIds: e,
                        excludeBannedUsers: !0
                    }).then(function(e) {
                        var e = e.data.data,
                            t = {};
                        return e.forEach(function(e) {
                            t[e.id] = e
                        }), t
                    })
                }, function(e) {
                    e = e.userId;
                    return null == e ? void 0 : e.toString()
                }, {
                    batchSize: 100,
                    processBatchWaitTime: 1e3
                }),
                Da = new $e,
                xa = new Map,
                A = function(r) {
                    var o = function(e, t, n) {
                        if (xa.has(e)) return xa.get(e);
                        n = Da.createRequestProcessor(t, n, {
                            batchSize: 1
                        });
                        return xa.set(e, n), n
                    }(r, Ta(r), function(e) {
                        e = e.userId;
                        return null == e ? void 0 : e.toString()
                    });
                    return function(e, t) {
                        var n, n = r + ":" + (n = e).userId + ":" + n.cursor + ":" + n.sortOrder + ":" + n.limit;
                        return null != t && t.refreshCache && o.invalidateItem(e, n), o.queueItem(e, n, t)
                    }
                },
                A = (null === (Qt = null === (Qt = window.CoreRobloxUtilities) || void 0 === Qt ? void 0 : Qt.dataStores) || void 0 === Qt ? void 0 : Qt.userDataStoreV2) || {
                    getFriends: A(Pa.Friends),
                    getFollowers: A(Pa.Followers),
                    getFollowings: A(Pa.Followings),
                    getFriendsRequests: A(Pa.Requests),
                    getUser: function(e) {
                        return Oa.queueItem({
                            userId: e
                        })
                    },
                    clearUserDataStoreCache: function() {
                        xa.forEach(function(e) {
                            e.clearCache()
                        })
                    }
                },
                vr = {
                    catalogDataStore: le,
                    gameAutoLocalizationDataStore: D,
                    gameAutomaticTranslationDataStore: k,
                    gameLanguagesDataStore: e,
                    gameSourceLanguageDataStore: Zt,
                    gameThumbnailsDataStore: Ge,
                    gameTranslationAnalyticsDataStore: xe,
                    gamesDataStore: vr,
                    inventoryDataStore: Ir,
                    localeDataStore: G,
                    thumbnailsDataStore: te,
                    translationProgressDataStore: g,
                    translationRolesDataStore: Kn,
                    userDataStore: A,
                    userDataStoreV2: A
                },
                Ba = qs(66933),
                Ea = {
                    getAbsoluteUrl: Ua,
                    parseQueryString: La,
                    composeQueryString: Sa,
                    getQueryParam: function(e) {
                        return La()[e]
                    },
                    formatUrl: q.WU,
                    resolveUrl: q.DB,
                    parseUrl: q.Qc,
                    parseUrlAndQueryString: Ba.parseUrl,
                    extractQueryString: Ba.extract,
                    getGameDetailReferralUrls: function(e) {
                        return Ua("/games/refer?".concat(Sa(e)))
                    },
                    getUrlWithQueries: function(e, t) {
                        return Ua("".concat(e, "?").concat(Sa(t)))
                    }
                };

            function Fa() {}
            var ja, za, Ir = (Fa.prototype.getAbsoluteUrl = function(e) {
                if ("number" != typeof e) return null;
                var t = i.EnvironmentUrls.websiteUrl,
                    e = Ea.formatUrl({
                        pathname: this.getRelativePath(e)
                    });
                return Ea.resolveUrl(t, e)
            }, Fa.prototype.navigateTo = function(e) {
                e = this.getAbsoluteUrl(e);
                e && window.location.assign(e)
            }, Fa);

            function Na() {
                return null !== za && za.apply(this, arguments) || this
            }
            var ka, Wa, G = ((ja = function(e, t) {
                return (ja = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                ja(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(Na, za = Ir), Na.prototype.getRelativePath = function(e) {
                return "/games/" + e
            }, Na.prototype.getReferralPath = function() {
                return "/games/refer"
            }, Na);

            function _a() {
                return null !== Wa && Wa.apply(this, arguments) || this
            }
            var Ma, Qa, te = ((ka = function(e, t) {
                return (ka = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                ka(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(_a, Wa = Ir), _a.prototype.getRelativePath = function(e) {
                return "/groups/" + e
            }, _a.prototype.getReferralPath = function() {
                return "/groups/refer"
            }, _a);

            function Ha() {
                return null !== Qa && Qa.apply(this, arguments) || this
            }

            function Va(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Ja(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Va(Object(o), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : Va(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    })
                }
                return r
            }

            function Ka() {
                return void 0 !== i.EventStream
            }

            function $a(e, t, n, r) {
                Ka() && i.EventStream.SendEventWithTarget && (r = Object.values(Xa).includes(r) ? r : Xa.WWW, i.EventStream.SendEventWithTarget(e, t, n, r))
            }(Ma = function(e, t) {
                return (Ma = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                Ma(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(Ha, Qa = Ir), Ha.prototype.getRelativePath = function(e) {
                return "/users/" + e + "/profile"
            }, Ha.prototype.getReferralPath = function() {
                return "/users/refer"
            }, g = Ha, Kn = {
                game: new G,
                group: new te,
                user: new g
            };
            var Xa = Ja(Ja({}, {
                    DEFAULT: 0,
                    WWW: 1,
                    STUDIO: 2,
                    DIAGNOSTIC: 3
                }), Ka() ? i.EventStream.TargetTypes : {}),
                Ya = {
                    eventTypes: {
                        formInteraction: "formInteraction",
                        modalAction: "modalAction",
                        pageLoad: "pageLoad"
                    },
                    targetTypes: Xa,
                    sendEvent: function(e, t) {
                        var n = e.name,
                            r = e.type,
                            o = e.context,
                            e = e.requiredParams,
                            a = Ja({
                                btn: n
                            }, t);
                        Array.isArray(e) && e.forEach(function(e) {
                            Object.prototype.hasOwnProperty.call(a, e) || console.info("A required event parameter '".concat(e, "' is not provided"))
                        }), $a(r, o, a)
                    },
                    sendEventWithTarget: $a,
                    sendGamePlayEvent: function(e, t, n) {
                        i.GamePlayEvents && i.GamePlayEvents.SendGamePlayIntent && i.GamePlayEvents.SendGamePlayIntent(e, t, n)
                    }
                },
                Za = (A = i.Hybrid || {}).Chat,
                es = A.Navigation,
                ts = A.Overlay,
                ns = A.Game,
                rs = A.Localization;

            function os(e) {
                return void 0 === e ? function() {} : e
            }

            function as(e) {
                var t = e.eventName,
                    n = e.ctx,
                    e = e.properties;
                Ya.sendEventWithTarget(t, n, e)
            }

            function ss(e, t) {
                Ya.sendGamePlayEvent(e, t)
            }
            var Ir = {
                    startChatConversation: function(e, t) {
                        Za && Za.startChatConversation(e, os(t))
                    },
                    startWebChatConversation: function(e, t) {
                        es && es.startWebChatConversation(e, os(t))
                    },
                    navigateToFeature: function(e, t) {
                        es && es.navigateToFeature(e, os(t))
                    },
                    openUserProfile: function(e, t) {
                        es && es.openUserProfile(e, os(t))
                    },
                    close: function(e) {
                        ts && ts.close(os(e))
                    },
                    launchGame: function(e, t) {
                        ns && ns.launchGame(e, os(t))
                    },
                    localization: function(e, t) {
                        rs && rs.languageChangeTrigger && rs.languageChangeTrigger(e, os(t))
                    }
                },
                is = (i.CurrentUser || {}).userId,
                us = {
                    friends: "Friends",
                    followers: "Followers",
                    requests: "Requests",
                    followings: "Followings"
                },
                cs = {
                    friendsDict: function(e) {
                        return "Roblox.".concat(us[e], "Dict.UserId").concat(is || 0)
                    }
                },
                G = {
                    buildPlayGameProperties: function(e, t, n, r) {
                        return {
                            rootPlaceId: e,
                            placeId: t,
                            gameInstanceId: n,
                            playerId: r
                        }
                    },
                    launchGame: function(e, t) {
                        var n, r, o, a;
                        i.GameLauncher && (n = t, r = e.rootPlaceId, o = e.placeId, a = e.gameInstanceId, t = e.playerId, o === r && a ? (n.properties.gameInstanceId = a, as(n), ss(n.gamePlayIntentEventCtx, r), e = o, a = a, i.GameLauncher.joinGameInstance(e, a, !0, !0)) : r && t ? (n.properties.playerId = t, as(n), ss(n.gamePlayIntentEventCtx, r), t = t, i.GameLauncher.followPlayerIntoGame(t)) : (as(n), ss(n.gamePlayIntentEventCtx, o), o = o, i.GameLauncher.joinMultiplayerGame(o)))
                    }
                },
                ds = i.EnvironmentUrls.friendsApi,
                ls = i.EnvironmentUrls.presenceApi,
                hs = i.EnvironmentUrls.websiteUrl,
                vs = function(e) {
                    return "".concat(hs, "/users/").concat(e, "/profile")
                },
                ps = function() {
                    return "".concat(ls, "/v1/presence/users")
                },
                ms = 100,
                fs = {
                    friends: function(e) {
                        return "".concat(ds, "/v1/users/").concat(e, "/friends")
                    },
                    followers: function(e) {
                        return "".concat(ds, "/v1/users/").concat(e, "/followers")
                    },
                    followings: function(e) {
                        return "".concat(ds, "/v1/users/").concat(e, "/followings")
                    },
                    friendrequests: function() {
                        return "".concat(ds, "/v1/my/friends/requests")
                    }
                };

            function gs(r, o, a) {
                var e = {
                        url: fs[o](i.CurrentUser.userId),
                        retryable: !0,
                        withCredentials: !0
                    },
                    t = {
                        url: ps(),
                        retryable: !0,
                        withCredentials: !0
                    };
                return f.get(e).then(function(e) {
                    var e = e.data.data || e,
                        n = [];
                    return r[o] = {}, e.forEach(function(e) {
                        var t = e.id;
                        n.push(t), e.profileUrl = vs(t), r[o][t] = e
                    }), f.buildBatchPromises(n, ms, t, !0).then(function(e) {
                        var t, n;
                        return e && 0 < e.length && (t = [], e.forEach(function(e) {
                            e = e.data.userPresences;
                            t = t.concat(e)
                        }), t.forEach(function(e) {
                            r[o][e.userId].presence = e
                        })), a && (bo.saveDataByTimeStamp(cs.friendsDict(o), r[o]), n = o, document.addEventListener("Roblox.Logout", function() {
                            bo.removeLocalStorage(cs.friendsDict(n))
                        })), r[o]
                    })
                })
            }

            function ys(e, t, n) {
                var r = n.expirationMS,
                    o = n.isEnabled;
                if (o) {
                    var a = (n = t, r = r, (r = bo.fetchNonExpiredCachedData(cs.friendsDict(n), r)) ? r.data : null);
                    if (a) return new Promise(function(e) {
                        e(a)
                    })
                }
                return gs(e, t, o)
            }

            function Gs(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(te = new(function() {
                function t() {
                    ! function(e) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.callbacks = new Set, this.friendsDict = {}
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "unSubscribe",
                    value: function(e) {
                        this.callbacks.delete(e)
                    }
                }, {
                    key: "subscribe",
                    value: function(e, o, t) {
                        var a = this,
                            n = "function" == typeof e,
                            s = t && t.isEnabled;
                        n && this.callbacks.add(e), s && this.friendsDict[o] ? n && e(this.friendsDict[o]) : ys(this.friendsDict, o, t).then(function(t) {
                            var n, r;
                            s && (n = o, (r = t) && document.addEventListener("Roblox.Presence.Update", function(e, t) {
                                t && setTimeout(function() {
                                    t.forEach(function(e) {
                                        var t = e.userId;
                                        r[t] && (r[t].presence = e)
                                    }), bo.saveDataByTimeStamp(cs.friendsDict(n), r)
                                })
                            })), a.friendsDict[o] = t, a.callbacks.forEach(function(e) {
                                e(t)
                            })
                        })
                    }
                }, {
                    key: "refreshCacheData",
                    value: function(e, t) {
                        t = t.isEnabled;
                        return gs(this.friendsDict, e, t)
                    }
                }]) && Gs(e.prototype, n), r && Gs(e, r), t
            }())).TYPE = {
                FRIENDS: "friends",
                FOLLOWERS: "followers",
                FOLLOWINGS: "followings",
                FRIENDREQUESTS: "friendrequests"
            };
            var g = te,
                Is = i.EnvironmentUrls.metricsApi,
                A = function() {
                    var e = document.getElementsByName("performance")[0];
                    return e ? {
                        performanceMetricsBatchWaitTime: function(e) {
                            if (!e) return 0;
                            e = e.split(":");
                            return 1e3 * (60 * parseInt(e[0], 10) * 60 + 60 * parseInt(e[1], 10) + parseInt(e[2], 10))
                        }(e.getAttribute("data-ui-performance-metrics-batch-wait-time")),
                        performanceMetricsBatchSize: parseInt(e.getAttribute("data-ui-performance-metrics-batch-size"), 10)
                    } : {}
                },
                Ps = function() {
                    return (Ps = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                bs = function(e, t) {
                    var n = {};
                    for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                    return n
                },
                te = new $e,
                ws = 0,
                A = ($e = A()).performanceMetricsBatchWaitTime,
                $e = $e.performanceMetricsBatchSize,
                Cs = te.createRequestProcessor(function(e) {
                    var t = {
                            url: Is + "/v1/performance/measurements",
                            retryable: !0,
                            withCredentials: !0
                        },
                        n = e.map(function(e) {
                            e = e.data, e.taskId, e = bs(e, ["taskId"]);
                            return Ps({}, e)
                        });
                    return f.post(t, n).then(function() {
                        var t = {};
                        return e.forEach(function(e) {
                            e = e.key;
                            t[e] = !0
                        }), t
                    })
                }, function(e) {
                    e = e.taskId;
                    return null == e ? void 0 : e.toString()
                }, {
                    batchSize: $e || 100,
                    processBatchWaitTime: A || 1e4
                }),
                A = {
                    logMeasurement: function(e) {
                        var t = ws;
                        return ws += 1, Cs.queueItem(Ps({
                            taskId: t
                        }, e))
                    }
                };
            window.CoreRobloxUtilities = {
                dataStores: vr,
                entityUrl: Kn,
                eventStreamService: Ya,
                hybridService: Ir,
                localStorageService: bo,
                localStorageNames: cs,
                playGameService: G,
                userInfoService: g,
                metricsService: A
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/b10c78c6453f5a8d38b0-coreRobloxUtilities.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CoreRobloxUtilities");