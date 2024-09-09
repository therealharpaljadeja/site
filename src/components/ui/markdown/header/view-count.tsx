"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function BlogViewCount({ id }: { id: string }) {
    const { data } = useSWR(`/api/blog/views?id=${id}&incr=1`, fetcher);

    return (
        <span className="text-graymodern-500 font-body">
            {data?.views || 0} views
        </span>
    );
}
