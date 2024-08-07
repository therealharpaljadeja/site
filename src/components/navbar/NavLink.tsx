"use client";

import { Button } from "@chakra-ui/react";
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
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname == href) {
            console.log(`${href} is active`);
            setIsActive(true);
        }
    }, [pathname]);

    if (href)
        return (
            <Link href={href}>
                <Button
                    isActive={isActive}
                    className="flex items-center space-x-2 hover:bg-graymodern-600 active:bg-graymodern-200 active:text-graymodern-800"
                    _hover={{
                        bg: "bg-graymodern-300", // placeholder to override
                    }}
                    variant={"outline"}
                >
                    {children}
                </Button>
            </Link>
        );
}
