"use client";

import { BookOpen, FileText, House, Newspaper, Play, Zap } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <div className="flex items-center fixed w-full border-b-2 border-graymodern-700 bg-graymodern-800 z-10">
            <div className="max-w-[640px] flex justify-center m-auto w-full p-4 space-x-2">
                {navLinks.map((navLink) => (
                    <NavLink
                        href={navLink.link}
                        text={navLink.text}
                        key={navLink.text}
                    >
                        {navLink.icon}
                    </NavLink>
                ))}

                {/* Resume Download */}
                <a download href="/Harpalsinh_Jadeja_Resume_01_07_24.pdf">
                    <button
                        className={`flex items-center space-x-2 px-2 py-1 mobileL:px-4 mobileL:py-2 rounded-md hover:bg-graymodern-600 active:bg-graymodern-900 active:text-graymodern-800`}
                    >
                        <FileText className={navLinkIconClasses} />
                        <p className="hidden font-display tablet:block text-graymodern-300">
                            Resume
                        </p>
                    </button>
                </a>
            </div>
        </div>
    );
}

const navLinkIconClasses =
    "size-[22px] tablet:size-[18px] stroke-graymodern-300";

const navLinks = [
    {
        link: "/",
        text: "",
        icon: <House className={navLinkIconClasses} />,
    },
    {
        link: "/articles",
        text: "",
        icon: <Newspaper className={navLinkIconClasses} />,
    },
    {
        link: "/videos",
        text: "",
        icon: <Play className={navLinkIconClasses} />,
    },
    {
        link: "/projects",
        text: "",
        icon: <Zap className={navLinkIconClasses} />,
    },
    {
        link: "/me",
        text: "",
        icon: <BookOpen className={navLinkIconClasses} />,
    },
];
