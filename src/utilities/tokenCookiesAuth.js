// This is a auxiliary middleware function

import { NextResponse } from "next/server";
import { verifyToken } from "./jwtEncoderDecoder"

export async function tokenAuthenticationHelper(req, res) {
    try {
        let token = req.cookies.get("token")
        let payload = await verifyToken(token['value']);
        let requestHeaders = new Headers(req.headers)
        requestHeaders.set('id', payload['id']);
        requestHeaders.set('email', payload['email']);
        requestHeaders.set('password', payload['password']);

        return NextResponse.next({
            request: { headers: requestHeaders }
        })

    } catch (error) {
        console.log(error);
        // return NextResponse.redirect(new URL('/login', req.url));
    }
}