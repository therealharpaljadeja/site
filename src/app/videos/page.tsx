import { Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Videos as videos } from "./videos";

export default function Videos() {
    return (
        <main className="flex flex-col mt-4 space-y-6">
            <Heading size="xl">Videos</Heading>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2">
                {videos.map((video) => {
                    return (
                        <Link href={video.externalLink} target="_blank">
                            <Image alt={video.title} src={video.thumbnail} />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
