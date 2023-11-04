import { tokenAuthenticationHelper } from "./utilities/tokenCookiesAuth";

export async function middleware(req, res) {
    try {
        return tokenAuthenticationHelper(req)
    } catch (error) {

    }
}