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
            setIsCurrent(true);
        }

        return () => {
            setIsCurrent(false);
        };
    }, [pathname, href]);

    if (href)
        return (
            <Link href={href}>
                <button
                    className={clsx(
                        `flex items-center space-x-2 px-2 py-1 mobileL:px-4 mobileL:py-2 rounded-md hover:bg-graymodern-600 active:bg-graymodern-900 active:text-graymodern-800`,
                        isCurrent &&
                            "bg-graymodern-900 border border-graymodern-300"
                    )}
                >
                    {children}
                    {/* <p className="hidden font-display text-graymodern-300 tablet:block">
                        {text}
                    </p> */}
                </button>
            </Link>
        );
}
