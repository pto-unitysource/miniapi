declare const APIS: {
    miniProgram: {
        getEnv: typeof getEnv;
        navigateTo: typeof navigateTo;
        navigateBack: typeof navigateBack;
        switchTab: typeof switchTab;
        reLaunch: typeof reLaunch;
        redirectTo: typeof redirectTo;
        postMessage: typeof postMessage_2;
        close: typeof close_2;
        navigateToMiniProgram(): void;
        navigateBackMiniProgram(): void;
        onWebviewEvent(): void;
        offWebviewEvent(): void;
        sendWebviewEvent(): void;
        onShow(): void;
        onHide(): void;
        onUnload(): void;
    };
    chooseImage: typeof chooseImage;
    getLocation: typeof getLocation;
    previewImage: typeof previewImage;
    openDocument: typeof openDocument;
    getStorage: typeof getStorage;
    setStorage: typeof setStorage;
    removeStorage: typeof removeStorage;
    clearStorage: typeof clearStorage;
    getNetworkType: typeof getNetworkType;
    scanCode: typeof scanCode;
    getLocalImgData: typeof getLocalImgData;
    callNativeAPI: typeof callNativeAPI;
    native: typeof native;
};
export default APIS;

declare function callNativeAPI(apiName: string, inputParams: IAnyStrObject | undefined, callback: NativeCallback): void;

declare function chooseImage(option?: ChooseImageOption): void;

declare interface ChooseImageOption extends Partial<GeneralInvokeOption> {
    count: number;
    sizeType: Array<String>;
    sourceType: Array<String>;
}

declare function clearStorage(option?: GeneralInvokeOption): void;

/**
 * 关闭小程序
 *
 * ```js
 *   ma.miniProgram.close()
 * ```
 */
declare function close_2(): void;

declare type GeneralCallback = (res: GeneralCallbackResult) => void;

declare interface GeneralCallbackResult {
    errMsg: string;
}

declare interface GeneralInvokeOption {
    success: GeneralCallback;
    fail: GeneralCallback;
    complete: GeneralCallback;
}

declare function getEnv(callback: GetEnvCallback): void;

declare type GetEnvCallback = (ret: {
    miniprogram: boolean;
}) => void;

declare function getLocalImgData(option?: GetLocalImgDataOption): void;

declare interface GetLocalImgDataOption extends Partial<GeneralInvokeOption> {
    path: string;
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
declare function getLocation(option?: GeneralInvokeOption): void;

declare function getNetworkType(option?: GeneralInvokeOption): void;

declare function getStorage(option?: GetStorageOption): void;

declare interface GetStorageOption extends Partial<GeneralInvokeOption> {
    key: string;
}

declare type IAnyStrObject = Record<string, any>;

declare function native(method: string, param?: IAnyStrObject): Promise<unknown>;

declare type NativeCallback = (res: any) => any;

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
declare function navigateBack(option: NavigateBackOption): void;

declare interface NavigateBackOption extends Partial<GeneralInvokeOption> {
    delta: number;
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
declare function navigateTo(option: NavigateToOption): void;

declare interface NavigateToOption extends Partial<GeneralInvokeOption> {
    url: string;
}

declare function openDocument(option?: OpenDocumentOption): void;

declare interface OpenDocumentOption extends Partial<GeneralInvokeOption> {
    filePath: string;
    fileType: string;
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
declare function postMessage_2(option: PostMessageOption): void;

declare interface PostMessageOption extends Partial<GeneralInvokeOption> {
    data: string | IAnyStrObject;
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
declare function previewImage(option?: PreviewImageOption): void;

declare interface PreviewImageOption extends Partial<GeneralInvokeOption> {
    urls: Array<string>;
    current: string;
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
declare function redirectTo(option: RedirectToOption): void;

declare interface RedirectToOption extends Partial<GeneralInvokeOption> {
    url: string;
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
declare function reLaunch(option: ReLaunchOption): void;

declare interface ReLaunchOption extends Partial<GeneralInvokeOption> {
    url: string;
}

declare function removeStorage(option?: RemoveStorageOption): void;

declare interface RemoveStorageOption extends Partial<GeneralInvokeOption> {
    key: string;
}

declare function scanCode(option?: ScanCodeOption): void;

declare interface ScanCodeOption extends Partial<GeneralInvokeOption> {
    onlyFromCamera: boolean;
    scanType: Array<string>;
}

declare function setStorage(option?: SetStorageOption): void;

declare interface SetStorageOption extends Partial<GeneralInvokeOption> {
    key: string;
    data: any;
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
declare function switchTab(option: SwitchTabOption): void;

declare interface SwitchTabOption extends Partial<GeneralInvokeOption> {
    url: string;
}

export { }
