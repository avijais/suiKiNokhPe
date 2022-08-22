'use strict';

export class GlobalConstants {
    public static API_URL = 'https://api.TEST.com/api/v1.0/';
    public static DATA = 'data';
    public static STATUS_CODE = 'status_code';
    public static TOKEN = 'token';
    public static INFO_MSG =  {
        PASWRD_FORMT_ERR: 'Password must contain at least (6) characters, including (1) Number, (1) UPPERCASE, and (1) lowercase letter',
        VLID_USRNEM: 'Please enter a valid email address.'
    };
    public static REDIRECT_URLS = {
        DASHBOARD: '/dashboard',
        LOGIN: '/'
    };
    public static API = {
        LOGIN: "useractivity/",
        RESTO_DROP_DOWN: "/",
        USER_TYPE: "usertype/"
    };
}