"use client";

import { FileText, House, Newspaper, Play, Zap } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <div className="flex items-center fixed w-full border-b-2 border-graymodern-700 bg-graymodern-800 z-10">
            <div className="max-w-[640px] flex justify-center m-auto w-full p-4 space-x-2">
                <NavLink href="/">
                    <House className="size-[22px] tablet:size-[18px] stroke-graymodern-300" />
                    <p className="hidden tablet:block text-graymodern-300">
                        Home
                    </p>
                </NavLink>
                <NavLink href="/articles">
                    <Newspaper className="size-[22px] tablet:size-[18px] stroke-graymodern-300" />
                    <p className="hidden tablet:block text-graymodern-300">
                        Articles
                    </p>
                </NavLink>
                <NavLink href="/videos">
                    <Play className="size-[22px] tablet:size-[18px] stroke-graymodern-300" />
                    <p className="hidden tablet:block text-graymodern-300">
                        Videos
                    </p>
                </NavLink>
                <NavLink href="/projects">
                    <Zap className="size-[22px] tablet:size-[18px] stroke-graymodern-300" />
                    <p className="hidden tablet:block text-graymodern-300">
                        Projects
                    </p>
                </NavLink>
                <a download href="/Harpalsinh_Jadeja_Resume_01_07_24.pdf">
                    <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-graymodern-600 active:bg-graymodern-900 active:text-graymodern-800`}
                    >
                        <FileText className="size-[22px] tablet:size-[18px] stroke-graymodern-300" />
                        <p className="hidden tablet:block text-graymodern-300">
                            Resume
                        </p>
                    </button>
                </a>
                {/* <Link className="hidden mobileL:block" href="/">
                    <button className="flex items-center space-x-2">
                        <Bookmark
                            className="size-[22px] tablet:size-[18px]"
                            color="white"
                        />
                    </button>
                </Link> */}
            </div>
        </div>
    );
}
