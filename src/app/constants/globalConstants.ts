'use strict';

import { ApiConst } from "./apiConst";

export class GlobalConstants {
    public static API_URL = ApiConst.BASE_URL
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
}