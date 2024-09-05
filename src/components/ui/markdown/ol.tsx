import React, { isValidElement } from "react";

interface OlProps extends React.OlHTMLAttributes<HTMLOListElement> {
    children?: React.ReactNode;
    start?: number;
}

export default function Ol({ children, start = 1, ...rest }: OlProps) {
    let items = React.Children.toArray(children).filter(
        (children) => children !== "\n"
    );

    if (items) {
        return (
            <ol className="list-decimal ml-5" start={start} {...rest}>
                {items.map((item, index: number) => {
                    if (item && isValidElement(item)) {
                        return (
                            <li
                                className="relative pl-8 mb-2 text-graymodern-300"
                                key={index}
                            >
                                <span className="absolute left-0 top-0 text-graymodern-300">
                                    {`${item.props.children}`}
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
}
