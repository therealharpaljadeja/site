"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { Bookmark, Code, House, Newspaper } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex items-center">
            <HStack className="m-auto w-full border-2 rounded-md border-white p-2 mt-4 justify-center">
                <Link href="/">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <House
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                        <Text className="hidden tablet:block">Home</Text>
                    </Button>
                </Link>
                <Link href="/">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <Newspaper
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                        <Text className="hidden tablet:block">Articles</Text>
                    </Button>
                </Link>
                <Link href="/">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <Code
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                        <Text className="hidden tablet:block">Tutorials</Text>
                    </Button>
                </Link>

                <Link href="/">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <Bookmark
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                        <Text className="hidden tablet:block">Bookmarks</Text>
                    </Button>
                </Link>
            </HStack>
        </div>
    );
}
