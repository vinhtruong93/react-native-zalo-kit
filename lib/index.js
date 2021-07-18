import { NativeModules, Platform, } from 'react-native';
import { Constants, } from './types';
import { checkProps } from './helpers';
const { ZaloKit } = NativeModules;
const login = async (authType = Constants.AUTH_VIA_APP_OR_WEB) => {
    try {
        const AUTH_TYPES = [Constants.AUTH_VIA_APP, Constants.AUTH_VIA_APP_OR_WEB, Constants.AUTH_VIA_WEB];
        const AUTH_TYPE_KEYS = AUTH_TYPES.map((key) => {
            return Constants[key];
        });
        if (!AUTH_TYPES.includes(authType)) {
            throw new Error(`"authType" must be one of [${AUTH_TYPE_KEYS.join(', ')}]`);
        }
        const oauthCode = await ZaloKit.login(authType);
        return oauthCode;
    }
    catch (error) {
        throw error;
    }
};
const logout = ZaloKit.logout;
const isAuthenticated = ZaloKit.isAuthenticated;
const getUserProfile = ZaloKit.getUserProfile;
const getApplicationHashKey = async () => {
    try {
        if (Platform.OS === 'android') {
            const key = await ZaloKit.getApplicationHashKey();
            return key;
        }
        return 'This function is only supported on Android';
    }
    catch (error) {
        throw error;
    }
};
const getFriendListUsedApp = async (position, count) => {
    try {
        const source = {
            position,
            count,
        };
        const requiredProps = [
            {
                key: 'position',
                type: 'number',
            },
            {
                key: 'count',
                type: 'number',
            },
        ];
        checkProps(source, requiredProps);
        const data = await ZaloKit.getFriendListUsedApp(position, count);
        return data;
    }
    catch (error) {
        throw error;
    }
};
const getFriendListInvitable = async (position, count) => {
    try {
        const source = {
            position,
            count,
        };
        const requiredProps = [
            {
                key: 'position',
                type: 'number',
            },
            {
                key: 'count',
                type: 'number',
            },
        ];
        checkProps(source, requiredProps);
        const data = await ZaloKit.getFriendListInvitable(position, count);
        return data;
    }
    catch (error) {
        throw error;
    }
};
const postToWall = async (link, message) => {
    try {
        const source = {
            link,
            message,
        };
        const requiredProps = [
            {
                key: 'link',
                type: 'string',
            },
            {
                key: 'message',
                type: 'string',
            },
        ];
        checkProps(source, requiredProps);
        const data = await ZaloKit.postToWall(link, message);
        return data;
    }
    catch (error) {
        throw error;
    }
};
const sendMessageToFriend = async (friendId, link, message) => {
    try {
        const source = {
            friendId,
            link,
            message,
        };
        const requiredProps = [
            {
                key: 'friendId',
                type: 'string',
            },
            {
                key: 'link',
                type: 'string',
            },
            {
                key: 'message',
                type: 'string',
            },
        ];
        checkProps(source, requiredProps);
        const data = await ZaloKit.sendMessageToFriend(friendId, link, message);
        return data;
    }
    catch (error) {
        throw error;
    }
};
const inviteFriendUseApp = async (friendIds, message) => {
    try {
        const source = {
            friendIds,
            message,
        };
        const requiredProps = [
            {
                key: 'friendIds',
                type: 'array',
            },
            {
                key: 'message',
                type: 'string',
            },
        ];
        checkProps(source, requiredProps);
        let response;
        if (Platform.OS === 'android') {
            response = await ZaloKit.inviteFriendUseApp(friendIds, message);
        }
        else {
            response = await ZaloKit.inviteFriendUseApp(friendIds.join(','), message);
        }
        return response;
    }
    catch (error) {
        throw error;
    }
};
const sendMessageToFriendByApp = async (feedData) => {
    try {
        const requiredProps = [
            {
                key: 'appName',
                type: 'string',
            },
            {
                key: 'message',
                type: 'string',
            },
            {
                key: 'link',
                type: 'string',
            },
            {
                key: 'linkTitle',
                type: 'string',
            },
            {
                key: 'linkSource',
                type: 'string',
            },
            {
                key: 'linkDesc',
                type: 'string',
            },
            {
                key: 'linkThumb',
                type: 'array',
            },
            {
                key: 'others',
                type: 'object',
            },
        ];
        checkProps(feedData, requiredProps);
        const data = await ZaloKit.sendMessageToFriendByApp(feedData);
        return data;
    }
    catch (error) {
        throw error;
    }
};
const postToWallByApp = async (feedData) => {
    try {
        const requiredProps = [
            {
                key: 'appName',
                type: 'string',
            },
            {
                key: 'message',
                type: 'string',
            },
            {
                key: 'link',
                type: 'string',
            },
            {
                key: 'linkTitle',
                type: 'string',
            },
            {
                key: 'linkSource',
                type: 'string',
            },
            {
                key: 'linkDesc',
                type: 'string',
            },
            {
                key: 'linkThumb',
                type: 'array',
            },
            {
                key: 'others',
                type: 'object',
            },
        ];
        checkProps(feedData, requiredProps);
        const data = await ZaloKit.postToWallByApp(feedData);
        return data;
    }
    catch (error) {
        throw error;
    }
};
export { login, logout, isAuthenticated, getUserProfile, getApplicationHashKey, Constants, getFriendListUsedApp, getFriendListInvitable, postToWall, sendMessageToFriend, inviteFriendUseApp, sendMessageToFriendByApp, postToWallByApp, };
export default {
    login,
    logout,
    isAuthenticated,
    getUserProfile,
    getApplicationHashKey,
    Constants,
    getFriendListUsedApp,
    getFriendListInvitable,
    postToWall,
    sendMessageToFriend,
    inviteFriendUseApp,
    sendMessageToFriendByApp,
    postToWallByApp,
};
//# sourceMappingURL=index.js.map