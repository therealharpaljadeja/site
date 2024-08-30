import Link from "next/link";
import { Videos as videos } from "./videos";
import React from "react";

export default function Videos() {
    return (
        <React.Fragment>
            <h1 className="font-display text-white text-xs tablet:text-sm">
                Videos
            </h1>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                {videos.map((video) => {
                    return (
                        <Link
                            href={video.externalLink}
                            target="_blank"
                            key={video.title}
                        >
                            <img alt={video.title} src={video.thumbnail} />
                        </Link>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
