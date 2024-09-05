import { Articles } from "@/app/articles/articles";
import H1 from "@/components/ui/markdown/h1";
import { BlogViewCount } from "./view-count";

export default function Header({ slug }: { slug: string }) {
    const post = Articles.find((article) => article.slug === slug);

    if (!post) return null;

    return (
        <header>
            <H1>{post.title}</H1>
            {post.slug ? <BlogViewCount id={post.slug} /> : null}
        </header>
    );
}
