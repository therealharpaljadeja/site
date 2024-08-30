import { ArrowUpRight } from "lucide-react";
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
                                >
                                    <div className="flex space-x-1 items-center">
                                        <p className="text-text-sm tablet:text-text-md text-white font-body">
                                            {article.title}
                                        </p>
                                        {article.externalLink ? (
                                            <ArrowUpRight
                                                color="#dedede"
                                                size="14px"
                                            />
                                        ) : null}
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    );
}
