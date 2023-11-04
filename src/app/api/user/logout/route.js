import { cookies } from "next/headers";

export async function POST(req, res) {
    cookies().delete('token');
    return NextResponse.json(
        {
            status: true,
            message: 'logout success',

        },

    )
}