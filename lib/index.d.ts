import { Constants, IUserProfile, IFriendList, IShareResponseObject } from './types';
declare const login: (authType?: Constants) => Promise<string>;
declare const logout: () => void;
declare const isAuthenticated: () => Promise<boolean>;
declare const getUserProfile: () => Promise<IUserProfile>;
declare const getApplicationHashKey: () => Promise<string>;
declare const getFriendListUsedApp: (position: number, count: number) => Promise<IFriendList>;
declare const getFriendListInvitable: (position: number, count: number) => Promise<IFriendList>;
declare const postToWall: (link: string, message: string) => Promise<{
    id: string;
}>;
declare const sendMessageToFriend: (friendId: string, link: string, message: string) => Promise<{
    to: string;
}>;
declare const inviteFriendUseApp: (friendIds: string[], message: string) => Promise<{
    to: string[];
}>;
declare const sendMessageToFriendByApp: (feedData: {
    appName: string;
    message: string;
    link: string;
    linkTitle: string;
    linkSource: string;
    linkDesc: string;
    linkThumb: string[];
    others: object;
}) => Promise<IShareResponseObject>;
declare const postToWallByApp: (feedData: {
    appName: string;
    message: string;
    link: string;
    linkTitle: string;
    linkSource: string;
    linkDesc: string;
    linkThumb: string[];
    others: object;
}) => Promise<IShareResponseObject>;
export { login, logout, isAuthenticated, getUserProfile, getApplicationHashKey, Constants, getFriendListUsedApp, getFriendListInvitable, postToWall, sendMessageToFriend, inviteFriendUseApp, sendMessageToFriendByApp, postToWallByApp, };
declare const _default: {
    login: (authType?: Constants) => Promise<string>;
    logout: () => void;
    isAuthenticated: () => Promise<boolean>;
    getUserProfile: () => Promise<IUserProfile>;
    getApplicationHashKey: () => Promise<string>;
    Constants: typeof Constants;
    getFriendListUsedApp: (position: number, count: number) => Promise<IFriendList>;
    getFriendListInvitable: (position: number, count: number) => Promise<IFriendList>;
    postToWall: (link: string, message: string) => Promise<{
        id: string;
    }>;
    sendMessageToFriend: (friendId: string, link: string, message: string) => Promise<{
        to: string;
    }>;
    inviteFriendUseApp: (friendIds: string[], message: string) => Promise<{
        to: string[];
    }>;
    sendMessageToFriendByApp: (feedData: {
        appName: string;
        message: string;
        link: string;
        linkTitle: string;
        linkSource: string;
        linkDesc: string;
        linkThumb: string[];
        others: object;
    }) => Promise<IShareResponseObject>;
    postToWallByApp: (feedData: {
        appName: string;
        message: string;
        link: string;
        linkTitle: string;
        linkSource: string;
        linkDesc: string;
        linkThumb: string[];
        others: object;
    }) => Promise<IShareResponseObject>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map