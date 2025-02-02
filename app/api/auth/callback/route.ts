import db from "@/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
    noStore();
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
        throw new Error("something went wrong, please try again again later");
    }

    let dbUser = await db.user.findUnique({
        where: {
            id: user.id,
        },
    });

    if (!dbUser) {
        dbUser = await db.user.create({
            data: {
                id: user.id,
                email: user.email ?? "",
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                profileImage: user.picture ?? "",
            },
        });
    }
    return NextResponse.redirect(
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://sole-style-sigma.vercel.app"
    );
}