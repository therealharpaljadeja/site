import H1 from "@/components/ui/markdown/h1";
import H2 from "@/components/ui/markdown/h2";
import H3 from "@/components/ui/markdown/h3";
import Pre from "@/components/ui/markdown/pre/index";
import Header from "@/components/ui/markdown/header";
import type { MDXComponents } from "mdx/types";
import React, { isValidElement } from "react";
import P from "@/components/ui/markdown/p";
import Ol from "@/components/ui/markdown/ol";
import A from "@/components/ui/markdown/a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: H1,
        h2: H2,
        h3: H3,
        pre: ({ children, ...rest }) => {
            let childrenProps = isValidElement(children)
                ? children.props
                : undefined;

            let language = childrenProps?.className
                ? childrenProps.className.substring(9)
                : undefined;

            let code =
                typeof childrenProps?.children === "string"
                    ? childrenProps.children.trim()
                    : "";

            return (
                <Pre language={language} {...rest}>
                    {code}
                </Pre>
            );
        },
        p: P,
        ol: Ol,
        a: A,
        Header,
        ...components,
    };
}
