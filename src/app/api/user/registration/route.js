import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        console.log(reqBody);
        const prisma = new PrismaClient();
        const result = await prisma.registered_users.create({
            data: {
                firstName: reqBody["firstName"],
                lastName: reqBody["lastName"],
                email: reqBody["email"],
                phone: reqBody["phone"],
                password: reqBody["password"],
            },
        })
        return NextResponse.json({ status: true, message: "user created successfully", data: result });
    } catch (error) {
        return NextResponse.json({ status: false, message: "failed to create user", data: error.toString() });
    }
}