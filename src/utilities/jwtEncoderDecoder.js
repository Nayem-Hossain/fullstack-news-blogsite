// # Steps of Token Encoding:

// 1. import { SignJWT, jwtVerify } from "jose"
// 2. create a function using GET() method
// 3. get secret_key from .env file
// 4. get payload(i.e. user_id, email)
// 5. create token by using:
// i) signJWT
// ii) setProtectedHeader
// iii) setIssuedAt
// iv) setIssuer
// v) setExpirationTime
// v) sign
// 6. Return encripted token as NextResponse


//----------------------------------------------//


// # Steps of Token Decoding:

// 1. get secret_key from .env file
// 2. decoding by using jwtVerify() built-in method from jose packege
// 3. return verified token

import { SignJWT, jwtVerify } from "jose";

// --------------------------------------------------------SignJWT---------------------------------------------------------------
// token encoding
export async function createToken(id, email, password) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    const alg = 'HS256'
    const payload = { id: id, email: email, password: password };
    const jwtToken = await new SignJWT(payload)
        .setProtectedHeader({ alg: alg })
        .setIssuedAt() // current time
        .setIssuer(process.env.JWT_ISSUER)
        // .setAudience(process.env.JWT_AUDIENCE)
        .setExpirationTime(process.env.JWT_EXPIRE_TIME)
        .sign(secret)

    return jwtToken;
}


// --------------------------------------------------------VerifyJWT---------------------------------------------------------------
// token decoding
export async function verifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const verifiedToken = await jwtVerify(token, secret); // token decoding

    return verifiedToken;
}