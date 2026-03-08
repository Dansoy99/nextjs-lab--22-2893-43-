import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const token = request.cookies.get("auth-token")

    if(!token && request.nextUrl.pathname !== "/login"){
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("redirect", request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
    }
    return NextResponse.next()
}

export const config ={
    matcher: ["/((?!_next|favicon.ico).*)"]
}