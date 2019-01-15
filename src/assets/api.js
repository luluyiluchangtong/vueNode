import {
    get,
    post
} from "./config"

export const apiAddress = p => post('/v2/store/order', p);
export const apiAddress1 = p => get('v2/user/login', p);