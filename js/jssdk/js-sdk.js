/*jssdk v23.9.0  Thu Sep 28 2023*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jssdk = factory());
})(this, (function () { 'use strict';

  var _a, _b;
  const userAgent = (_b = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase();

  const isAndroid = (userAgent === null || userAgent === void 0 ? void 0 : userAgent.indexOf('android')) !== -1;

  const CURRENT_ROUTE = Symbol(`currentRoute`);
  const IS_INITD = Symbol(`isInitd`);
  const TABBAR = Symbol(`tabBar`);
  const CAN_NAVIGATE_TO = Symbol(`canNavigateTo`);
  // 为了调试方便, 这里使用字符串常量 而不是 symbol 变量
  // TODO: 后期增加 __DEV__ 能力之后, 生产态使用 Symbol
  const MA_GLOBAL_KEY = `__ma__global__`;
  const globalConfig = {
      [CURRENT_ROUTE]: ``,
      [IS_INITD]: false,
      [TABBAR]: null,
      [CAN_NAVIGATE_TO]: true
  };
  /**
   * 将变量和值挂到 window 上方便共享
   * 统一挂到 window.__ma__global__对象下, 相同的 key 会被覆盖
   */
  window[MA_GLOBAL_KEY] = globalConfig;
  function makeGlobal(key, val) {
      globalConfig[key] = val;
  }
  function getGlobal(key) {
      return window[MA_GLOBAL_KEY][key];
  }

  const MiniProgram = {
      NAVIGATE_TO: 'navigateTo',
      NAVIGATE_BACK: 'navigateBack',
      REDIRECT_TO: 'redirectTo',
      SWITCH_TAB: 'switchTab',
      RE_LAUNCH: 'reLaunch',
      POST_MESSAGE: 'postMessage',
      CLOSE: 'close'
  };
  const Native = {
      CHOOSE_IMAGE: 'chooseImage',
      GET_LOCAL_IMG_DATA: 'getLocalImgData',
      GET_LOCATION: 'getLocation',
      PREVIEW_IMAGE: 'previewImage',
      OPEN_DOCUMENT: 'openDocument',
      GET_STORAGE: 'getStorage',
      SET_STORAGE: 'setStorage',
      REMOVE_STORAGE: 'removeStorage',
      CLEAR_STORAGE: 'clearStorage',
      GET_NETWORK_TYPE: 'getNetworkType',
      SCAN_CODE: 'scanCode'
  };
  const APINames = {
      MiniProgram,
      Native
  };

  const isWeb = window.parent.__simulatorConfig__ !== undefined;

  // invoke callbacks
  const callbacks = {};
  let callbackIndex = 0;
  function invokeHandler(command, inputParams, callbackId) {
      if (isWeb) {
          window.simulatorWebkit.messageHandlers.invoke.postMessage({
              command,
              inputParams,
              callbackId,
              type: 'legacy'
          });
      }
      else if (isAndroid) {
          window.viewLayerNative.invoke(command, inputParams, callbackId);
      }
      else {
          window.webkit.messageHandlers.invoke.postMessage({
              command,
              inputParams,
              callbackId
          });
      }
  }
  function invoke(command, inputParams = {}, callback) {
      const paramsString = JSON.stringify(inputParams);
      const callbackId = ++callbackIndex;
      callbacks[callbackId] = callback;
      invokeHandler(command, paramsString, callbackId);
  }
  /**
   * 统一封装调用逻辑, 通知 Native, 调用 API
   */
  function invokeMethod(apiName, opts, innerCb = {}) {
      const invokeCbFnsObj = {};
      for (const name in opts) {
          if (typeof opts[name] === 'function') {
              invokeCbFnsObj[name] = opts[name];
              delete opts[name];
          }
      }
      invoke(apiName, opts, (invokeStatusCode, res) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j;
          const isOk = Number(invokeStatusCode) === 0;
          const isFail = !isOk;
          if (isOk) {
              (_a = innerCb === null || innerCb === void 0 ? void 0 : innerCb.beforeAll) === null || _a === void 0 ? void 0 : _a.call(innerCb, res);
              (_b = innerCb === null || innerCb === void 0 ? void 0 : innerCb.beforeSuccess) === null || _b === void 0 ? void 0 : _b.call(innerCb, res);
              (_c = invokeCbFnsObj.success) === null || _c === void 0 ? void 0 : _c.call(invokeCbFnsObj, res);
              (_d = innerCb === null || innerCb === void 0 ? void 0 : innerCb.afterSuccess) === null || _d === void 0 ? void 0 : _d.call(innerCb, res);
          }
          if (isFail) {
              (_e = innerCb === null || innerCb === void 0 ? void 0 : innerCb.beforeFail) === null || _e === void 0 ? void 0 : _e.call(innerCb, res);
              (_f = invokeCbFnsObj.fail) === null || _f === void 0 ? void 0 : _f.call(invokeCbFnsObj, res);
              (_g = innerCb === null || innerCb === void 0 ? void 0 : innerCb.afterFail) === null || _g === void 0 ? void 0 : _g.call(innerCb, res);
          }
          (_h = invokeCbFnsObj.complete) === null || _h === void 0 ? void 0 : _h.call(invokeCbFnsObj, res);
          (_j = innerCb === null || innerCb === void 0 ? void 0 : innerCb.afterAll) === null || _j === void 0 ? void 0 : _j.call(innerCb, res);
      });
  }
  /**
   * Native notify Web Page invoke result
   *
   * => viewLayer.onInvokeFinished
   */
  function onInvokeFinished(callbackId, invokeStatusCode, outputParams) {
      const callback = callbacks[callbackId];
      callback(invokeStatusCode, outputParams);
      delete callbacks[callbackId];
  }

  // subscribe handlers
  const handlers = {};
  const eventPrefix = 'ma_custom_event_';
  /**
   * subscribe web event(user)
   */
  function webSubscribe(eventName, handler) {
      handlers[eventName] = handler;
  }
  /**
   * subscribe custom event
   */
  function subscribe(eventName, handler) {
      handlers[`${eventPrefix}${eventName}`] = handler;
  }
  /**
   * trigger event handler
   */
  function subscribeHandler(eventName, data) {
      const handler = handlers[eventName];
      return handler(data);
  }
  function publish(eventName, params = {}) {
      const paramsString = JSON.stringify(params);
      publishHandler(`${eventPrefix}${eventName}`, paramsString);
  }
  function webPublish(eventName, params = {}) {
      const paramsString = JSON.stringify(params);
      publishHandler(eventName, paramsString);
  }
  /**
   * 通知 Native, 处理业务事件
   */
  function publishHandler(eventName, paramsString) {
      if (isWeb) {
          window.simulatorWebkit.messageHandlers.notifyNative.postMessage({
              eventName,
              paramsString,
              type: 'legacy'
          });
      }
      else if (isAndroid) {
          window.viewLayerNative.notifyNative(eventName, paramsString);
      }
      else {
          window.webkit.messageHandlers.notifyNative.postMessage({
              eventName,
              paramsString
          });
      }
  }

  const MacleJSBridge = {
      invoke,
      invokeMethod,
      subscribe,
      webSubscribe,
      publish,
      webPublish
  };

  function init() {
      // already initd
      if (getGlobal(IS_INITD)) {
          return;
      }
      makeGlobal(IS_INITD, true);
      try {
          subscribe("getCurrentRoute" /* CUSTOM_EVENT.GET_CURRENT_ROUTE */, (data) => {
              makeGlobal(CURRENT_ROUTE, data.route);
              makeGlobal(TABBAR, data.tabBar);
              makeGlobal(CAN_NAVIGATE_TO, data.canNavigateTo !== undefined ? data.canNavigateTo : true);
          });
          publish("getCurrentRoute" /* CUSTOM_EVENT.GET_CURRENT_ROUTE */);
      }
      catch (error) { }
  }

  function getEnv(callback) {
      const miniprogram = window.__ma_environment === 'miniprogram';
      callback({
          miniprogram
      });
  }

  /**
   * ```js
   *   ma.miniProgram.navigateTo({
   *     delta: 1,
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function navigateBack(option) {
      const fixedOption = Object.assign({ delta: 1 }, option);
      MacleJSBridge.invokeMethod(APINames.MiniProgram.NAVIGATE_BACK, fixedOption);
  }

  /**
   * fix route
   * @param currentRoute 当前路由
   * @param toUrl 目标 url
   */
  function getRealRoute(currentRoute, toUrl, isHtml = true) {
      let fixedUrl = toUrl;
      if (isHtml) {
          fixedUrl = addHTMLSuffix(fixedUrl);
      }
      if (fixedUrl.startsWith('/')) {
          return fixedUrl.substr('/'.length);
      }
      if (fixedUrl.startsWith('./')) {
          return getRealRoute(currentRoute, fixedUrl.substr('./'.length), false);
      }
      // 移除 url 前面的 ../ 并记录其位置
      let index;
      let urlArrLength;
      const urlArr = fixedUrl.split('/');
      for (index = 0, urlArrLength = urlArr.length; index < urlArrLength && urlArr[index] === '..'; index++)
          ;
      urlArr.splice(0, index);
      const pathArr = currentRoute.length > 0 ? currentRoute.split('/') : [];
      pathArr.splice(pathArr.length - index - 1, index + 1);
      return pathArr.concat(urlArr).join('/');
  }
  function encodeUrlQuery(url) {
      const urlArr = url.split('?');
      const [urlPath, queryUrl] = urlArr;
      if (!queryUrl) {
          return url;
      }
      const queryParams = queryUrl.split('&').reduce((res, cur) => {
          if (typeof cur === 'string' && cur.length > 0) {
              const curArr = cur.split('=');
              const key = curArr[0];
              const value = curArr[1];
              res[key] = value;
          }
          return res;
      }, Object.create(null));
      const urlQueryArr = [];
      for (const i in queryParams) {
          urlQueryArr.push(i + '=' + encodeURIComponent(queryParams[i]));
      }
      return urlQueryArr.length > 0 ? urlPath + '?' + urlQueryArr.join('&') : url;
  }
  function addHTMLSuffix(url) {
      const urlArr = url.split('?');
      urlArr[0] += '.html';
      return urlArr[1] === undefined ? urlArr[0] : `${urlArr[0]}?${urlArr[1]}`;
  }
  function checkUrl(apiName, options) {
      const tabBar = getGlobal(TABBAR);
      if (tabBar === null) {
          return true;
      }
      if (options.url.startsWith('/')) {
          options.url = options.url.slice('/'.length);
      }
      // 目标 url 是否在 tabbar 中
      const inTabBar = ((url) => tabBar === null || tabBar === void 0 ? void 0 : tabBar.list.find(e => url.indexOf(e.pagePath) === 0))(options.url);
      // navigateTo 和 redirectTo API 禁止跳转到 tabbar 页面
      if (apiName === APINames.MiniProgram.NAVIGATE_TO ||
          apiName === APINames.MiniProgram.REDIRECT_TO) {
          if (inTabBar) {
              console.error(apiName, options, `${apiName}: can not ${apiName} to a tabbar page`);
              return false;
          }
      }
      // switchTab 禁止跳转到非 tabbar 页面
      if (apiName === APINames.MiniProgram.SWITCH_TAB) {
          if (!inTabBar) {
              console.error(apiName, options, `${apiName}: can not ${apiName} to a non-tabbar page`);
              return false;
          }
      }
      return true;
  }

  /**
   * ```js
   *   ma.miniProgram.navigateTo({
   *     url: 'example?id=1',
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function navigateTo(option) {
      if (!option.url) {
          console.error('navigateTo fail,parameter error:parameter.url should be String instead of Undefined.');
          return;
      }
      const fixedOption = option;
      fixedOption.url = getRealRoute(getGlobal(CURRENT_ROUTE), fixedOption.url);
      fixedOption.url = encodeUrlQuery(fixedOption.url);
      if (checkUrl(APINames.MiniProgram.NAVIGATE_TO, fixedOption)) {
          MacleJSBridge.invokeMethod(APINames.MiniProgram.NAVIGATE_TO, fixedOption);
      }
  }

  /**
   * ```js
   *   ma.miniProgram.redirectTo({
   *     url: 'example?id=1',
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function redirectTo(option) {
      if (!option.url) {
          console.error('redirectTo fail,parameter error:parameter.url should be String instead of Undefined.');
          return;
      }
      const fixedOption = option;
      fixedOption.url = getRealRoute(getGlobal(CURRENT_ROUTE), fixedOption.url);
      fixedOption.url = encodeUrlQuery(fixedOption.url);
      if (checkUrl(APINames.MiniProgram.REDIRECT_TO, fixedOption)) {
          MacleJSBridge.invokeMethod(APINames.MiniProgram.REDIRECT_TO, fixedOption);
      }
  }

  /**
   * ```js
   *   ma.miniProgram.switchTab({
   *     url: '/example',
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function switchTab(option) {
      if (!option.url) {
          console.error('switchTab fail,parameter error:parameter.url should be String instead of Undefined.');
          return;
      }
      const fixedOption = option;
      fixedOption.url = getRealRoute(getGlobal(CURRENT_ROUTE), fixedOption.url);
      fixedOption.url = encodeUrlQuery(fixedOption.url);
      if (checkUrl(APINames.MiniProgram.SWITCH_TAB, fixedOption)) {
          MacleJSBridge.invokeMethod(APINames.MiniProgram.SWITCH_TAB, fixedOption);
      }
  }

  /**
   * ```js
   *   ma.miniProgram.reLaunch({
   *     url: '/example',
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function reLaunch(option) {
      if (!option.url) {
          console.error('reLaunch fail,parameter error:parameter.url should be String instead of Undefined.');
          return;
      }
      const fixedOption = option;
      fixedOption.url = getRealRoute(getGlobal(CURRENT_ROUTE), fixedOption.url);
      fixedOption.url = encodeUrlQuery(fixedOption.url);
      if (checkUrl(APINames.MiniProgram.RE_LAUNCH, fixedOption)) {
          MacleJSBridge.invokeMethod(APINames.MiniProgram.RE_LAUNCH, fixedOption);
      }
  }

  /**
   * 向小程序发送消息，会在特定时机（小程序后退、组件销毁）触发组件的 message 事件
   * 需要通过 bindmessage 接收
   *
   * ```js
   *   ma.miniProgram.postMessage({
   *     data: 'foo' | { foo: 'bar' },
   *     success: function(res) {},
   *     fail: function(res) {},
   *     complete: function(res) {},
   *   })
   * ```
   */
  function postMessage(option) {
      MacleJSBridge.invokeMethod(APINames.MiniProgram.POST_MESSAGE, option);
  }

  /**
   * 关闭小程序
   *
   * ```js
   *   ma.miniProgram.close()
   * ```
   */
  function close() {
      MacleJSBridge.invokeMethod(APINames.MiniProgram.CLOSE);
  }

  // 拍照或上传
  function chooseImage(option) {
      const fixedOption = Object.assign({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera']
      }, option);
      MacleJSBridge.invokeMethod(APINames.Native.CHOOSE_IMAGE, fixedOption);
  }

  /**
   * ```js
   *   ma.getLocation({
   *     success(res) {},
   *     fail(res) {},
   *     complete(res) {},
   *   })
   * ```
   */
  // 获取当前地理位置信息
  function getLocation(option) {
      MacleJSBridge.invokeMethod(APINames.Native.GET_LOCATION, option);
  }

  /**
   * js
   * ma.previewImage({
    urls: [],
    current: '',
    success() {},
    fail() {},
    complete() {}
  });
  */
  // 预览图片
  function previewImage(option) {
      if (!(option === null || option === void 0 ? void 0 : option.urls)) {
          console.error('previewImage fail,parameter error:parameter.urls should be Array instead of Undefined.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.PREVIEW_IMAGE, option);
  }

  // 打开文件，预览文件
  function openDocument(option) {
      if (!(option === null || option === void 0 ? void 0 : option.filePath)) {
          console.error('openDocument fail,parameter error:parameters.filePath should be String instead of Undefined.');
          return;
      }
      const validFileType = [
          'doc',
          'docx',
          'xls',
          'xlsx',
          'ppt',
          'pptx',
          'pdf'
      ];
      if (option.fileType && validFileType.indexOf(option.fileType) === -1) {
          console.error('openDocument fail,parameter error:parameter.fileType is invalid value.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.OPEN_DOCUMENT, option);
  }

  // 从本地缓存中获取指定key的内容
  function getStorage(option) {
      if (!(option === null || option === void 0 ? void 0 : option.key)) {
          console.error('getStorage fail,parameter error:parameters.key should be String instead of Undefined.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.GET_STORAGE, option);
  }

  // 将数据存储在本地缓存指定key中
  function setStorage(option) {
      if (!(option === null || option === void 0 ? void 0 : option.key) || !option.data) {
          console.error('setStorage fail,parameter error:parameter.key or parameter.data should not be Undefined.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.SET_STORAGE, option);
  }

  // 从本地缓存中移除指定key
  function removeStorage(option) {
      if (!(option === null || option === void 0 ? void 0 : option.key)) {
          console.error('removeStorage fail,parameter error:parameter.key should be String instead of Undefined.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.REMOVE_STORAGE, option);
  }

  // 清理本地数据缓存
  function clearStorage(option) {
      MacleJSBridge.invokeMethod(APINames.Native.CLEAR_STORAGE, option);
  }

  // 获取网络类型
  function getNetworkType(option) {
      MacleJSBridge.invokeMethod(APINames.Native.GET_NETWORK_TYPE, option);
  }

  // 扫描二维码
  function scanCode(option) {
      // 校验scanType合法性
      const validScanType = [
          'barCode',
          'qrCode',
          'datamatrix',
          'pdf417'
      ];
      if ((option === null || option === void 0 ? void 0 : option.scanType) && option.scanType.length > 0) {
          if (!option.scanType.every(item => validScanType.indexOf(item) > -1)) {
              console.error('scanCode fail,parameter error:parameter.scanType contains invalid values.');
              return;
          }
      }
      const fixedOption = Object.assign({
          onlyFromCamera: false,
          scanType: ['barCode', 'qrCode']
      }, option);
      MacleJSBridge.invokeMethod(APINames.Native.SCAN_CODE, fixedOption);
  }

  // 获取本地base64图片
  function getLocalImgData(option) {
      if (!(option === null || option === void 0 ? void 0 : option.path)) {
          console.error('getLocalImgData fail,parameter error:parameter.path should be String instead of Undefined.');
          return;
      }
      MacleJSBridge.invokeMethod(APINames.Native.GET_LOCAL_IMG_DATA, option);
  }

  // h5调用native原生方法
  function callNativeAPI(apiName, inputParams = {}, callback) {
      if (!callback || typeof callback !== 'function') {
          console.error('callNativeAPI failed, callback should be function!');
          return;
      }
      MacleJSBridge.invoke(apiName, inputParams, (invokeStatusCode, res) => {
          const isOk = Number(invokeStatusCode) === 0;
          if (!isOk) {
              console.error(`callNativeAPI failed, ${res.errMsg}`);
              return;
          }
          callback(res);
      });
  }

  function native(method, param) {
      const finalParam = param || {};
      return new Promise(resolve => {
          callNativeAPI(method, finalParam, res => {
              resolve(res);
          });
      });
  }

  const APIS = {
      // miniapp
      miniProgram: {
          getEnv,
          navigateTo,
          navigateBack,
          switchTab,
          reLaunch,
          redirectTo,
          postMessage,
          close,
          navigateToMiniProgram() { },
          navigateBackMiniProgram() { },
          onWebviewEvent() { },
          offWebviewEvent() { },
          sendWebviewEvent() { },
          onShow() { },
          onHide() { },
          onUnload() { }
      },
      // H5 invoke Native
      chooseImage,
      getLocation,
      previewImage,
      openDocument,
      getStorage,
      setStorage,
      removeStorage,
      clearStorage,
      getNetworkType,
      scanCode,
      getLocalImgData,
      callNativeAPI,
      native
  };

  // 执行初始化逻辑
  document.readyState !== 'loading'
      ? init()
      : document.addEventListener('DOMContentLoaded', init);
  /**
   * Support use ma.api from window
   */
  window.ma = APIS;
  window.viewLayer = {
      onInvokeFinished,
      subscribeHandler
  };

  return APIS;

}));
//# sourceMappingURL=js-sdk.js.map
