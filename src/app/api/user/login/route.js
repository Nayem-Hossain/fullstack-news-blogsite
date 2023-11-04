import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createLoginCookie } from "@/utilities/createLoginCookieByToken";

export async function POST(req, res) {
    try {

        let reqBody = await req.json();
        let email = reqBody['email'];
        let password = reqBody['password'];

        const prisma = new PrismaClient();
        const dbResult = await prisma.registered_users.findUnique({ where: reqBody })


        if (email === dbResult['email'] && password === dbResult['password']) {
            const { token, cookie } = await createLoginCookie(dbResult['id'], dbResult['email'], dbResult['password']);

            return NextResponse.json({ status: true, message: 'login successfull', data: token }, { status: 200, headers: { 'set-cookie': cookie } })

        } else {
            return NextResponse.json({ status: false, message: 'UnAuthorised User' })
        }
    }
    catch (error) {
        return NextResponse.json({ status: false, message: 'login failed', data: error.toString() })
    }
}