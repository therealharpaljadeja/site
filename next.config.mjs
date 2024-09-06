import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [remarkRehype, rehypeKatex, rehypeMdxCodeProps],
    },
});

export default withMDX(nextConfig);
