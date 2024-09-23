import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/services/redis";
import { Articles } from "@/app/articles/articles";

export async function GET(request: NextRequest) {
    // Return early if outside production.
    if (process.env.NODE_ENV !== "production") {
        return NextResponse.json(
            { error: "Not available outside production" },
            { status: 400 }
        );
    }

    const url = new URL(request.nextUrl);
    const id = url.searchParams.get("id")?.toLowerCase();

    // Return error if missing field.
    if (!id) {
        return NextResponse.json(
            { error: "Missing `id` (`encodeURIComponent(slug)`)" },
            { status: 400 }
        );
    }

    // Return error if the post does not exist.
    const slug = decodeURIComponent(id);
    if (!Articles.find((article) => article.slug === slug)) {
        return NextResponse.json(
            { error: "Article not found" },
            { status: 404 }
        );
    }

    // If the `incr` query parameter is set, increment the view count.
    const incr = url.searchParams.get("incr");

    if (incr) {
        const ip = request.ip;

        // Update visitor count if `ip` is defined.
        let visitors = 0;
        if (ip) {
            const buffer = await crypto.subtle.digest(
                "SHA-256",
                new TextEncoder().encode(ip)
            );
            const hash = Array.from(new Uint8Array(buffer))
                .map((b) => b.toString(16).padStart(2, "0"))
                .join("");

            // Check if the view is a duplicate (same IP address on the post within the
            // last 24 hours).
            const isNew = await redis.set(
                `blog:view_deduplicates:${id}:${hash}`,
                true,
                {
                    nx: true,
                    ex: 86_400,
                }
            );

            // Increment post visitor count if `isNew` is true.
            visitors = await redis.hincrby("blog:visitors", id, isNew ? 1 : 0);
        }

        // Update post view count.
        const views = await redis.hincrby("blog:views", id, 1);

        return NextResponse.json({ id, views, visitors }, { status: 200 });
    }

    // Fetch views and visitors.
    const [views, visitors] = await Promise.all([
        redis.hget("blog:views", id),
        redis.hget("blog:visitors", id),
    ]);

    return NextResponse.json({ id, views, visitors }, { status: 200 });
}

export const runtime = "edge";
