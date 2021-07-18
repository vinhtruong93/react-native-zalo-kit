import { NativeModules, } from 'react-native';
const { ZaloKit } = NativeModules;
export var Constants;
(function (Constants) {
    Constants[Constants["AUTH_VIA_WEB"] = ZaloKit.AUTH_VIA_WEB] = "AUTH_VIA_WEB";
    Constants[Constants["AUTH_VIA_APP"] = ZaloKit.AUTH_VIA_APP] = "AUTH_VIA_APP";
    Constants[Constants["AUTH_VIA_APP_OR_WEB"] = ZaloKit.AUTH_VIA_APP_OR_WEB] = "AUTH_VIA_APP_OR_WEB";
})(Constants || (Constants = {}));
//# sourceMappingURL=types.js.map