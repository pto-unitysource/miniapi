!(function (t) {
    var e = {};
    function o(n) {
        if (e[n]) return e[n].exports;
        var a = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = t),
        (o.c = e),
        (o.d = function (n, a, t) {
            o.o(n, a) || Object.defineProperty(n, a, { enumerable: !0, get: t });
        }),
        (o.r = function (n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (o.t = function (a, n) {
            if ((1 & n && (a = o(a)), 8 & n)) return a;
            if (4 & n && "object" == typeof a && a && a.__esModule) return a;
            var t = Object.create(null);
            if ((o.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: a }), 2 & n && "string" != typeof a))
                for (var e in a)
                    o.d(
                        t,
                        e,
                        function (n) {
                            return a[n];
                        }.bind(null, e)
                    );
            return t;
        }),
        (o.n = function (n) {
            var a =
                n && n.__esModule
                    ? function () {
                          return n.default;
                      }
                    : function () {
                          return n;
                      };
            return o.d(a, "a", a), a;
        }),
        (o.o = function (n, a) {
            return Object.prototype.hasOwnProperty.call(n, a);
        }),
        (o.p = ""),
        o((o.s = 0));
})([
    function (n, a, t) {
        "use strict";
        t.r(a);
        var e = {};
        t.r(e),
            t.d(e, "version", function () {
                return u;
            }),
            t.d(e, "platform", function () {
                return s;
            }),
            t.d(e, "language", function () {
                return l;
            }),
            t.d(e, "supportUnicode", function () {
                return f;
            }),
            t.d(e, "appName", function () {
                return b;
            }),
            t.d(e, "PLATFORM_ANDROID", function () {
                return y;
            }),
            t.d(e, "PLATFORM_IOS", function () {
                return k;
            }),
            t.d(e, "APP_CUSTOMER", function () {
                return d;
            }),
            t.d(e, "APP_PARTNER", function () {
                return g;
            });
        var o = {};
        t.r(o),
            t.d(o, "getAppPlatform", function () {
                return v;
            }),
            t.d(o, "getAppVersion", function () {
                return _;
            }),
            t.d(o, "getAppLanguage", function () {
                return z;
            }),
            t.d(o, "getAppSupportUnicode", function () {
                return h;
            }),
            t.d(o, "getAppName", function () {
                return N;
            }),
            t.d(o, "close", function () {
                return O;
            }),
            t.d(o, "openBrowser", function () {
                return P;
            }),
            t.d(o, "hideToolBar", function () {
                return j;
            }),
            t.d(o, "showToolBar", function () {
                return S;
            }),
            t.d(o, "gotoFunction", function () {
                return C;
            }),
            t.d(o, "guestLogin", function () {
                return F;
            }),
            t.d(o, "comVersion", function () {
                return A;
            }),
            t.d(o, "putAppData", function () {
                return J;
            }),
            t.d(o, "removeAppData", function () {
                return D;
            }),
            t.d(o, "getAppData", function () {
                return L;
            }),
            t.d(o, "getAppDataCallback", function () {
                return V;
            });
        var i = {};
        t.r(i),
            t.d(i, "startPayMiniApp", function () {
                return T;
            }),
            t.d(i, "openMiniApp", function () {
                return I;
            });
        var r = {};
        t.r(r),
            t.d(r, "startPay", function () {
                return U;
            }),
            t.d(r, "startPayCallback", function () {
                return R;
            }),
            t.d(r, "startPayCallbackError", function () {
                return x;
            }),
            t.d(r, "getKBZPayToken", function () {
                return W;
            }),
            t.d(r, "miniNotification", function () {
                return B;
            }),
            t.d(r, "getLanguage", function () {
                return M;
            });
        var p = {};
        t.r(p),
            t.d(p, "requestPin", function () {
                return K;
            }),
            t.d(p, "getContactPhoneNumber", function () {
                return Z;
            }),
            t.d(p, "back", function () {
                return G;
            }),
            t.d(p, "shareSocialNetwork", function () {
                return Q;
            }),
            t.d(p, "shareSocialNetworkCallback", function () {
                return X;
            }),
            t.d(p, "startScan", function () {
                return Y;
            }),
            t.d(p, "getFaceVerification", function () {
                return $;
            }),
            t.d(p, "readContact", function () {
                return nn;
            }),
            t.d(p, "readDeviceId", function () {
                return an;
            }),
            t.d(p, "saveReceipt", function () {
                return tn;
            }),
            t.d(p, "openFeaturePanel", function () {
                return en;
            }),
            t.d(p, "takeIdCard", function () {
                return on;
            }),
            t.d(p, "registerSetPin", function () {
                return rn;
            }),
            t.d(p, "startFaceVerification", function () {
                return pn;
            }),
            t.d(p, "registerLoginFromH5", function () {
                return cn;
            }),
            t.d(p, "startFaceRecord", function () {
                return un;
            }),
            t.d(p, "openSharePanel", function () {
                return sn;
            });
        var c = {};
        t.r(c),
            t.d(c, "openLocation", function () {
                return ln;
            }),
            t.d(c, "closeLocation", function () {
                return fn;
            });
        var u = void 0,
            s = void 0,
            l = void 0,
            f = void 0,
            b = void 0,
            y = "android",
            k = "ios",
            d = "customer",
            g = "partner";
        function m(a, n) {
            var t = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(a);
                n &&
                    (e = e.filter(function (n) {
                        return Object.getOwnPropertyDescriptor(a, n).enumerable;
                    })),
                    t.push.apply(t, e);
            }
            return t;
        }
        function w(n, a, t) {
            return a in n ? Object.defineProperty(n, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[a] = t), n;
        }
        function v() {
            return this.platform
                ? this.platform
                : kbzpayapp.getPlatform instanceof Function
                ? ((this.platform = kbzpayapp.getPlatform()), this.platform)
                : void (kbzpayapp.getPlatformAsync instanceof Function && kbzpayapp.getPlatformAsync(JSON.stringify({ callback: "window.kbzpay.getAppPlatformCallback" })));
        }
        function _() {
            return this.version
                ? this.version
                : window.kbzpayapp.getVersion instanceof Function
                ? ((this.version = window.kbzpayapp.getVersion()), this.version)
                : void (window.kbzpayapp.getVersionAsync instanceof Function && window.kbzpayapp.getVersionAsync(JSON.stringify({ callback: "window.kbzpay_getAppVersionCallback" })));
        }
        function z() {
            return this.language
                ? this.language
                : kbzpayapp.getLanguage instanceof Function
                ? ((this.language = kbzpayapp.getLanguage()), this.language)
                : void (kbzpayapp.getLanguageAsync instanceof Function && kbzpayapp.getLanguageAsync(JSON.stringify({ callback: "window.kbzpay_getAppLanguageCallback" })));
        }
        function h() {
            return this.supportUnicode
                ? this.supportUnicode
                : kbzpayapp.getUnicode instanceof Function
                ? ((this.supportUnicode = kbzpayapp.getUnicode()), this.supportUnicode)
                : void (kbzpayapp.getUnicodeAsync instanceof Function && kbzpayapp.getUnicodeAsync(JSON.stringify({ callback: "window.kbzpay_getAppSupportUnicodeCallback" })));
        }
        function N() {
            return this.appName
                ? this.appName
                : kbzpayapp.getAppName instanceof Function
                ? ((this.appName = kbzpayapp.getAppName()), this.appName)
                : void (kbzpayapp.getAppNameAsync instanceof Function && kbzpayapp.getAppNameAsync(JSON.stringify({ callback: "window.kbzpay_getAppNameAsyncCallback" })));
        }
        function O() {
            window.kbzpayapp &&
                (kbzpayapp.evaluate instanceof Function
                    ? (kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_closeWebview" })), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_closeWebView" })))
                    : window.kbzpayapp.closeWebView instanceof Function
                    ? window.kbzpayapp.closeWebView()
                    : window.kbzpayapp.closeWebview instanceof Function
                    ? window.kbzpayapp.closeWebview()
                    : window.kbzpayapp.closeWebView instanceof Function
                    ? window.kbzpayapp.closeWebView()
                    : window.kbzpayapp.close());
        }
        function P(n) {
            n
                ? window.kbzpayapp &&
                  (kbzpayapp.evaluate instanceof Function ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_openNewWindow", params: { url: n, shareUrl: n } })) : window.kbzpayapp.openNewWindow && window.kbzpayapp.openNewWindow(n))
                : console.log("url is empty");
        }
        function j() {
            kbzpayapp.evaluate instanceof Function ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_hideToolBar" })) : kbzpayapp.hideToolBar instanceof Function && kbzpayapp.hideToolBar();
        }
        function S() {
            kbzpayapp.evaluate instanceof Function ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_showToolBar" })) : kbzpayapp.showToolBar instanceof Function && kbzpayapp.showToolBar();
        }
        function C(n, a, t) {
            n || console.log("gotoFunction command is empty"), (this.gotoFunctionCallback = t || function () {});
            var e = "window.kbzpay.gotoFunctionCallback";
            if (kbzpayapp.evaluate instanceof Function) {
                var o = {};
                if (a) {
                    try {
                        o = JSON.parse(a);
                    } catch (n) {
                        return void console.log("jsonParams is not json");
                    }
                    kbzpayapp.evaluate(
                        JSON.stringify({
                            functionName: "js_fun_gotoFunction",
                            params: {
                                command: n,
                                commandParams: (function (a) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {};
                                        n % 2
                                            ? m(Object(t), !0).forEach(function (n) {
                                                  w(a, n, t[n]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
                                            : m(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
                                              });
                                    }
                                    return a;
                                })({}, o, { callback: e }),
                                callback: e,
                            },
                        })
                    );
                } else kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_gotoFunction", params: { command: n, commandParams: { callback: e }, callback: e } }));
            } else kbzpayapp.showToolBar instanceof Function && kbzpayapp.gotoFunction(n, a);
        }
        function F(n) {
            if (!(kbzpayapp.evaluate instanceof Function) && window.xm) return window.xm.native("js_handler_guest_login", { backPath: n });
        }
        function A(n, a) {
            for (var t = n.split("."), e = a.split("."), o = Math.min(t.length, e.length), i = 0, r = -1; i < o && 0 == (r = parseInt(t[i]) - parseInt(e[i])); ) i++;
            return 0 <= r;
        }
        function J(n, a) {
            window.kbzpayapp.evaluate instanceof Function ? window.kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_putAppLocalData", params: { key: n, data: a } })) : window.kbzpayapp.putAppLocalData(n, a);
        }
        function D(n) {
            window.kbzpayapp.evaluate instanceof Function ? window.kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_removeAppLocalData", params: { key: n } })) : window.kbzpayapp.removeAppLocalData(n);
        }
        function L(n, a) {
            this.get_app_data_callback || (this.get_app_data_callback = {}),
                (this.get_app_data_callback[n] = a),
                window.kbzpayapp.evaluate instanceof Function
                    ? window.kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_getAppLocalData", params: { key: n, callback: "window.kbzpay.getAppDataCallback" } }))
                    : ((this.get_app_data_callback[n] = a), window.kbzpayapp.getApplocalData(n, JSON.stringify({ callback: "window.kbzpay.getAppDataCallback" })));
        }
        function V(n, a) {
            console.log("getAppDataCallback result=" + n), console.log("getAppDataCallback data=" + a);
            var t = JSON.parse(n),
                e = t.Key,
                o = function () {};
            this.get_app_data_callback && this.get_app_data_callback[e] && (console.log("this.get_app_data_callback[key]=" + this.get_app_data_callback[e]), (o = this.get_app_data_callback[e])), "1" == t.ResultCode ? o(a) : o("");
        }
        function T(n, a, t, e) {
            window.xm.native("js_handler_start_pay", { prepayId: n, orderInfo: a, sign: t, tradeType: "APPH5" }).then(function (n) {
                e(n);
            });
        }
        function I(a) {
            return new Promise(function (n) {
                kbzpayapp.evaluate instanceof Function && (kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_open_mini_app", params: a })), n());
            });
        }
        function U(n, a, t, e, o) {
            e instanceof Function ? (this.startPay_callback = e) : (this.startPay_callback = void 0),
                o instanceof Function ? (this.startPay_callback_error = o) : (this.startPay_callback_error = void 0),
                n && a && t
                    ? (console.log("window.navigator.userAgent = " + window.navigator.userAgent),
                      0 <= window.navigator.userAgent.indexOf("hwminiapp")
                          ? T(n, a, t, e)
                          : kbzpayapp
                          ? kbzpayapp.evaluate instanceof Function
                              ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_startPay", params: { prepayId: n, orderInfo: a, sign: t } }))
                              : kbzpayapp.startPay instanceof Function && kbzpayapp.startPay(n, a, t)
                          : this.startPay_callback_error && this.startPay_callback_error(10, "not found kbzpay environment"))
                    : console.log("parameters have empty value");
        }
        function R(n) {
            if (this.startPay_callback instanceof Function) {
                var a = JSON.parse(n);
                this.startPay_callback(a);
            }
        }
        function x(n, a) {
            this.startPay_callback_error instanceof Function && this.startPay_callback_error({ code: n, msg: a });
        }
        function W(n, a) {
            if (!a)
                return new Promise(function (a) {
                    window.xm.native("js_handler_get_kbzpay_token", { appid: n }).then(function (n) {
                        a(n);
                    });
                });
            window.xm.native("js_handler_get_kbzpay_token", { appid: n }).then(function (n) {
                a(n);
            });
        }
        function B(a) {
            return new Promise(function (n) {
                window.xm.native("js_handler_notification", a);
            });
        }
        function M() {
            return new Promise(function (a) {
                window.xm.native("js_handler_get_language").then(function (n) {
                    a(n.language);
                });
            });
        }
        function q(a, n) {
            var t = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(a);
                n &&
                    (e = e.filter(function (n) {
                        return Object.getOwnPropertyDescriptor(a, n).enumerable;
                    })),
                    t.push.apply(t, e);
            }
            return t;
        }
        function E(a) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                    ? q(Object(t), !0).forEach(function (n) {
                          H(a, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
                    : q(Object(t)).forEach(function (n) {
                          Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
                      });
            }
            return a;
        }
        function H(n, a, t) {
            return a in n ? Object.defineProperty(n, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[a] = t), n;
        }
        function K(n) {
            kbzpayapp.evaluate instanceof Function
                ? ((this.requestPinCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_requestPin", params: { callback: "window.kbzpay.requestPinCallback" } })))
                : kbzpayapp.requestPin instanceof Function
                ? ((this.requestPinCallback = n), kbzpayapp.requestPin(JSON.stringify({ callback: "window.kbzpay.requestPinCallback" })))
                : console.log("kbzpayapp.requestPin is empty");
        }
        function Z(n) {
            var a = this.getAppVersion(),
                t = this.getAppName();
            if (a) {
                var e = parseFloat(this.version);
                if (t) {
                    if (t === g && e <= 3.2) return void console.log("current version is not support");
                    if (t === d && e <= 2.4) return void console.log("current version is not support");
                } else if (e <= 2.4) return void console.log("current version is not support");
                kbzpayapp.evaluate instanceof Function
                    ? ((this.getContactPhoneNumberCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_getContactPhoneNumber", params: { callback: "window.kbzpay.getContactPhoneNumberCallback" } })))
                    : kbzpayapp.getContactPhoneNumber instanceof Function
                    ? ((this.getContactPhoneNumberCallback = n), kbzpayapp.getContactPhoneNumber(JSON.stringify({ callback: "window.kbzpay.getContactPhoneNumberCallback" })))
                    : console.log("kbzpayapp.getContactPhoneNumber is empty");
            } else console.log("current version is empty");
        }
        function G() {
            kbzpayapp.evaluate instanceof Function ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_back" })) : kbzpayapp.back instanceof Function && kbzpayapp.back();
        }
        function Q(n, a, t) {
            if (n) {
                var e = n.url || n,
                    o = n.title || "";
                t instanceof Function && (this.shareSocialNetworkCallback = t),
                    kbzpayapp.evaluate instanceof Function
                        ? kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_shareSocialNetwork", params: { shareUrl: e, title: o, appId: a } }))
                        : kbzpayapp.shareSocialNetwork instanceof Function && (a ? kbzpayapp.shareSocialNetwork(e, a) : kbzpayapp.shareSocialNetwork(e));
            } else console.log("function shareSocialNetwork shareUrl is empty");
        }
        function X(n) {}
        function Y(n, a, t) {
            var e = this.getAppVersion(),
                o = this.getAppName();
            if (!e) return console.log("current version empty"), void (n && n('{"result":"-2", "msg":"current version empty"}'));
            if (!o) return console.log("current appName is empty"), void (n && n('{"result":"-2", "msg":"current appName is empty"}'));
            if (o !== d && o !== g) return console.log("current platform is not support"), void (n && n('{"result":"-2", "msg":"current platform is not support"}'));
            var i = parseFloat(e);
            if (o === d && i <= 2.5) {
                if ("2.5.2" !== e) return console.log("current version is not support"), void (n && n('{"result":"-2", "msg":"current version is not support"}'));
            } else if (o === g && i <= 3.2 && "3.2.2" !== e) return console.log("current version is not support"), void (n && n('{"result":"-2", "msg":"current version is not support"}'));
            kbzpayapp.evaluate instanceof Function
                ? ((this.startScanCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_startScan", params: { callback: "window.kbzpay.startScanCallback", supportManual: a, inputTitle: t } })))
                : console.log("kbzpayapp.startScan is empty");
        }
        function $(n, a, t, e) {
            var o = this.getAppVersion(),
                i = this.getAppName();
            if (!o) return console.log("current version empty"), void (n && n('{"result":"-2", "msg":"current version empty"}'));
            if (!i) return console.log("current appName is empty"), void (n && n('{"result":"-2", "msg":"current appName is empty"}'));
            if (i !== d && i !== g) return console.log("current platform is not support"), void (n && n('{"result":"-2", "msg":"current platform is not support"}'));
            var r = parseFloat(o);
            if (i === d && r <= 2.5) {
                if ("2.5.2" !== o) return console.log("current version is not support"), void (n && n('{"result":"-2", "msg":"current version is not support"}'));
            } else if (i === g && r <= 3.2 && "3.2.2" !== o) return console.log("current version is not support"), void (n && n('{"result":"-2", "msg":"current version is not support"}'));
            var p = { callback: "window.kbzpay.faceVerificationCallback" };
            (p.compare = a ? "1" : "0"),
                t && (p.targetWidth = t),
                e && (p.targetHeight = e),
                kbzpayapp.evaluate instanceof Function
                    ? ((this.faceVerificationCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_faceVerification", params: p })))
                    : console.log("kbzpayapp.faceVerificationCallback is empty");
        }
        function nn(n) {
            kbzpayapp.evaluate instanceof Function
                ? ((this.readContactCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_readContact", params: { callback: "window.kbzpay.readContactCallback" } })))
                : console.log("kbzpayapp.readContact is empty");
        }
        function an(n) {
            kbzpayapp.evaluate instanceof Function
                ? ((this.readDeviceIdCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_readDeviceId", params: { callback: "window.kbzpay.readDeviceIdCallback" } })))
                : console.log("kbzpayapp.readDeviceId is empty");
        }
        function tn(n, a, t) {
            (this.saveReceiptCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_saveReceipt", params: { callback: "window.kbzpay.saveReceiptCallback", orderNo: a, dataSource: t } }));
        }
        function en(n) {
            var a = {};
            n && (a = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_show_feature_panel", params: a }));
        }
        function on(n) {
            return new Promise(function (a) {
                (window.kbzpay.takeIdCardCallback = function (n) {
                    a(n);
                }),
                    kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_take_id_card", params: E({ callback: "window.kbzpay.takeIdCardCallback" }, n) }));
            });
        }
        function rn(n) {
            return new Promise(function (a) {
                (window.kbzpay.registerSetPinCallback = function (n) {
                    a(n);
                }),
                    kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_register_set_pin", params: E({ callback: "window.kbzpay.registerSetPinCallback" }, n) }));
            });
        }
        function pn(n) {
            return (
                n.compare ? (n.compare = "1") : (n.compare = "0"),
                new Promise(function (a) {
                    (window.kbzpay.startFaceVerificationCallback = function (n) {
                        a(n);
                    }),
                        kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_faceVerification", params: E({ callback: "window.kbzpay.startFaceVerificationCallback" }, n) }));
                })
            );
        }
        function cn(n) {
            return new Promise(function (a) {
                (window.kbzpay.registerLoginFromH5Callback = function (n) {
                    a(n);
                }),
                    kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_register_login_from_h5", params: E({ callback: "window.kbzpay.registerLoginFromH5Callback" }, n) }));
            });
        }
        function un(n) {
            return new Promise(function (a) {
                (window.kbzpay.startFaceRecordCallback = function (n) {
                    a(n);
                }),
                    kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_upload_video", params: E({ callback: "window.kbzpay.startFaceRecordCallback" }, n) }));
            });
        }
        function sn(n) {
            return new Promise(function (a) {
                (window.kbzpay.openSharePanelCallback = function (n) {
                    a(n);
                }),
                    kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_openSharePanel", params: E({ callback: "window.kbzpay.openSharePanelCallback" }, n) }));
            });
        }
        function ln(n) {
            kbzpayapp.evaluate instanceof Function
                ? ((this.openLocationCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_openLocation", params: { callback: "window.kbzpay.openLocationCallback" } })))
                : console.log("kbzpayapp.openLocation is empty");
        }
        function fn(n) {
            kbzpayapp.evaluate instanceof Function
                ? ((this.closeLocationCallback = n), kbzpayapp.evaluate(JSON.stringify({ functionName: "js_fun_closeLocation", params: { callback: "window.kbzpay.closeLocationCallback" } })))
                : console.log("kbzpayapp.closeLocation is empty");
        }
        function bn(a, n) {
            var t = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(a);
                n &&
                    (e = e.filter(function (n) {
                        return Object.getOwnPropertyDescriptor(a, n).enumerable;
                    })),
                    t.push.apply(t, e);
            }
            return t;
        }
        function yn(n, a, t) {
            return a in n ? Object.defineProperty(n, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[a] = t), n;
        }
        window.kbzpay = (function (a) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                    ? bn(Object(t), !0).forEach(function (n) {
                          yn(a, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
                    : bn(Object(t)).forEach(function (n) {
                          Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
                      });
            }
            return a;
        })({}, e, {}, o, {}, r, {}, p, {}, c, {}, i);
    },
]);
