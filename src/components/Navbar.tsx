"use client";

import { Link } from "@chakra-ui/next-js";
import { HStack, IconButton } from "@chakra-ui/react";
import { Bookmark, Code, House, Newspaper } from "lucide-react";

export default function Navbar() {
    return (
        <HStack className="m-auto w-fit border-2 rounded-md border-white p-2 mt-4">
            <Link href="/">
                <IconButton
                    variant="outline"
                    aria-label="home"
                    icon={<House color="white" />}
                />
            </Link>
            <IconButton
                variant="outline"
                aria-label="articles"
                icon={<Newspaper color="white" />}
            />
            <IconButton
                variant="outline"
                aria-label="code"
                icon={<Code color="white" />}
            />
            <Link href="/bookmarks">
                <IconButton
                    variant="outline"
                    aria-label="bookmarks"
                    icon={<Bookmark color="white" />}
                />
            </Link>
        </HStack>
    );
}
