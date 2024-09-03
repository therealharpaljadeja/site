"use client";

import { useEffect, useRef, useState } from "react";

export function BlogViewCount({ id }: { id: string }) {
    const [views, setViews] = useState(0);

    useEffect(() => {
        async function getViews() {
            const { views } = (await (
                await fetch(`/api/blog/views?id=${id}&incr=1`)
            ).json()) as unknown as {
                id: string;
                views: number;
                visitors: number | null;
            };
            setViews(views);
        }
        getViews();
    }, []);

    return <span className="text-graymodern-500 font-body">{views} views</span>;
}
