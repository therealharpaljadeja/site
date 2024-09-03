import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Pre from "@/components/ui/pre";
import Text from "@/components/ui/text";
import Header from "@/components/ui/markdown/header";
import type { MDXComponents } from "mdx/types";
import React, { isValidElement, ReactNode } from "react";

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

// const ListItem: DetailedHTMLProps<
//     LiHTMLAttributes<HTMLLIElement>,
//     HTMLLIElement
// > &
//     React.FC<ListItemProps> = ({ children, index, start }) => {
//     const itemNumber = Number(start) + index; // Calculate the actual list item number

//     return (
//         <li className="relative pl-8 mb-2">
//             <span className="absolute left-0 top-0 text-graymodern-300 font-bold">
//                 {itemNumber}.{" "}
//             </span>
//             <span className="text-graymodern-300 font-body text-text-md">
//                 {children}
//             </span>
//         </li>
//     );
// };

const OrderedList: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = ({
    children,
    start = 1,
}) => {
    if (children) {
        const items = React.Children.toArray(children).filter(
            (children) => children !== "\n"
        );

        return (
            <ol className="list-decimal ml-5" start={start}>
                {items.map((item, index: number) => {
                    if (item && isValidElement(item)) {
                        return (
                            <li className="relative pl-8 mb-2">
                                <span className="absolute left-0 top-0 text-graymodern-300 font-bold">
                                    {`${Number(start) + index}. ${
                                        item.props.children
                                    }`}
                                </span>
                            </li>
                        );
                    }
                })}
            </ol>
        );
    }
    // Convert children to an array and add the index as a prop to each ListItem
    return <React.Fragment></React.Fragment>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props: JSX.IntrinsicElements["h1"]) => <H1 {...props} />,
        h2: (props: JSX.IntrinsicElements["h2"]) => <H2 {...props} />,
        h3: (props: JSX.IntrinsicElements["h3"]) => <H3 {...props} />,
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

            return <Pre language={language}>{code}</Pre>;
        },
        p: ({ children, ...rest }: JSX.IntrinsicElements["p"]) => (
            <Text {...rest}>{children}</Text>
        ),
        ol: OrderedList,
        a: ({
            children,
            href,
            target,
            ...rest
        }: JSX.IntrinsicElements["a"]) => (
            <a
                {...rest}
                href={href}
                target={href?.startsWith("/") ? "_self" : "_blank"}
                className="text-graymodern-300 underline underline-offset-4 italic"
            >
                {children}
            </a>
        ),
        Header,
        ...components,
    };
}
