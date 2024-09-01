import Link from "next/link";
import { Articles as articles } from "./articles";
import React from "react";

export default function Articles() {
    return (
        <React.Fragment>
            <h1 className="font-display text-white text-xs tablet:text-sm">
                Articles
            </h1>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                    {articles
                        .sort((a, b) => b.date.getTime() - a.date.getTime())
                        .map((article) => {
                            return (
                                <Link
                                    href={
                                        article.slug !== undefined
                                            ? article.slug
                                            : article.externalLink
                                    }
                                    target="_blank"
                                    key={article.title}
                                >
                                    <div className="flex space-x-2 justify-between items-center tablet:justify-normal">
                                        <p className="text-text-sm tablet:text-text-md text-white font-body hover:underline">
                                            {article.title}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    );
}
