"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, HStack, Text } from "@chakra-ui/react";
import { Bookmark, FileText, House, Newspaper, Play } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <div className="flex items-center">
            <HStack className="m-auto w-full border-2 rounded-md border-white p-2 mt-4 justify-center">
                <NavLink href="/">
                    <House
                        className="size-[22px] tablet:size-[18px]"
                        color="white"
                    />
                    <Text className="hidden tablet:block">Home</Text>
                </NavLink>
                <NavLink href="/articles">
                    <Newspaper
                        className="size-[22px] tablet:size-[18px]"
                        color="white"
                    />
                    <Text className="hidden tablet:block">Articles</Text>
                </NavLink>
                <NavLink href="/videos">
                    <Play
                        className="size-[22px] tablet:size-[18px]"
                        color="white"
                    />
                    <Text className="hidden tablet:block">Videos</Text>
                </NavLink>

                <a download href="/Harpalsinh_Jadeja_Resume_01_07_24.pdf">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <FileText
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                        <Text className="hidden tablet:block">Resume</Text>
                    </Button>
                </a>
                <Link className="hidden mobileL:block" href="/">
                    <Button
                        className="flex items-center space-x-2"
                        variant={"outline"}
                    >
                        <Bookmark
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                    </Button>
                </Link>
            </HStack>
        </div>
    );
}
