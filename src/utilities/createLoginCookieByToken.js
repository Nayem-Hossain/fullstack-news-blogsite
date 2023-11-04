import { createToken } from "./jwtEncoderDecoder";


export async function createLoginCookie(id, email, password) {
    let getToken = await createToken(id, email, password);
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const cookieToken = `token=${getToken}; expires=${expirationDate}; MaxAge=7200; Secure; HttpOnly; Path=/; SameSite=Strict;`;
    return { token: getToken, cookie: cookieToken };
}