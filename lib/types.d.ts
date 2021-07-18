export declare enum Constants {
    AUTH_VIA_WEB,
    AUTH_VIA_APP,
    AUTH_VIA_APP_OR_WEB
}
export interface IUserProfile {
    id: string;
    name: string;
    phoneNumber: string;
    gender: string;
    birthday: string;
    picture: {
        data: {
            url: string;
        };
    };
}
export interface IFriendList {
    data: IUserProfile[];
    paging: {};
    summary: {
        total_count: number;
    };
}
export interface IShareResponseObject {
    success: boolean;
    data: string;
    message: string;
    sendAction: 0 | 1;
}
//# sourceMappingURL=types.d.ts.map