import clsx from "clsx";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <article
            className={clsx(
                "prose prose-invert prose-blockquote:border-graymodern-600",
                "prose-pre:m-0 prose-pre:rounded-t-none prose-pre:p-0",
                "prose-code:text-graymodern-200 prose-code:bg-graymodern-900 prose-code:before:content-[``] prose-code:after:content-[``] prose-code:px-[4px] prose-code:py-[1.5px] prose-code:font-normal prose-code:font-display"
            )}
        >
            {children}
        </article>
    );
}
