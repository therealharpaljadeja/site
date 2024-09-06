"use client";

import { Link } from "lucide-react";
import { usePathname } from "next/navigation";
import Heading2 from "@/components/ui/h2";

export default function H2({ children, ...rest }: JSX.IntrinsicElements["h2"]) {
    const pathname = usePathname();

    const stringChildren: string[] = (
        Array.isArray(children)
            ? children
            : [typeof children === "string" ? children : ""]
    ).filter((child) => typeof child === "string" && child.length > 0);

    if (stringChildren.length > 0) {
        const id = stringChildren
            .join("-")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "") // Remove special characters
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
            .trim();

        return (
            <Heading2 id={id} {...rest}>
                <a
                    href={`#${id}`}
                    className="no-underline hover:underline group"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            `${
                                process.env.NEXT_PUBLIC_BASE_URL ??
                                "https://harpaljadeja.com"
                            }${pathname}#${id}`
                        );
                        // toast({
                        //     intent: "info",
                        //     title: "Copied to clipboard",
                        //     description: "URL copied to clipboard.",
                        // });
                    }}
                >
                    {children}
                    <Link className="hidden size-4 text-graymodern-500 animate-in fade-in-50 group-hover:inline ml-2 group-focus-visible:inline md:size-6" />
                </a>
            </Heading2>
        );
    }

    return <h2 {...rest}>{children}</h2>;
}
