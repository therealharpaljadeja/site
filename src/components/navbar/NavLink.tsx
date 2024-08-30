"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ButtonHTMLAttributes,
    LinkHTMLAttributes,
    useEffect,
    useState,
} from "react";

export default function NavLink(
    props: ButtonHTMLAttributes<HTMLButtonElement> &
        LinkHTMLAttributes<HTMLAnchorElement>
) {
    const { children, href } = props;
    const [isCurrent, setIsCurrent] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname == href) {
            console.log(`${href} is active`);
            setIsCurrent(true);
        }

        return () => {
            setIsCurrent(false);
        };
    }, [pathname]);

    if (href)
        return (
            <Link href={href}>
                <button
                    // isActive={isActive}
                    className={clsx(
                        `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-graymodern-600 active:bg-graymodern-900 active:text-graymodern-800`,
                        isCurrent && "bg-graymodern-900"
                    )}
                    // _hover={{
                    //     bg: "bg-graymodern-300", // placeholder to override
                    // }}
                    // variant={"outline"}
                >
                    {children}
                </button>
            </Link>
        );
}
