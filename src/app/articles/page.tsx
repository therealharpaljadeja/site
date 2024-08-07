import { Heading, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Articles as articles } from "./articles";

export default function Articles() {
    return (
        <main className="flex flex-col mt-4 space-y-6">
            <Heading size="xl">Articles</Heading>
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
                                        <Text className="text-sm">
                                            {article.title}
                                        </Text>
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
        </main>
    );
}
