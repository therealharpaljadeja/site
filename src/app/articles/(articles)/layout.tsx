import clsx from "clsx";
import React from "react";
import { Articles } from "../articles";

type Params = {
    slug: string;
};

export async function generateMetadata({ params }: { params: Params }) {
    // Path to your markdown file
    const { slug } = params;
    const post = Articles.find((article) => article.slug === slug);

    if (post)
        // Dynamic metadata generation
        return {
            title: post.title,
            openGraph: {
                title: post.title,
            },
        };

    return null;
}

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
