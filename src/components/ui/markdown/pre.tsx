"use client";

import clsx from "clsx";
import { Highlight, RenderProps, themes } from "prism-react-renderer";

const Pre = ({
    children,
    language,
    showLineNumbers,
}: JSX.IntrinsicElements["pre"] & {
    language: string;
    showLineNumbers?: boolean;
}) => {
    return (
        <div className="overflow-hidden">
            <div>
                {/* <pre
                    className="border-2 border-graymodern-600 bg-graymodern-900 p-2 rounded-md overflow-x-scroll hide-scrollbar"
                    style={{ overflowX: "scroll" }}
                > */}
                <Highlight
                    theme={themes.vsDark}
                    code={children as string}
                    language={language}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <pre
                            style={style}
                            className={
                                "border-2 flex border-graymodern-600  relative bg-graymodern-900 rounded-md "
                            }
                        >
                            {showLineNumbers ? (
                                <div className="flex flex-col border-r-2 p-2 shadow-md border-[rgb(40_40_40)]">
                                    {tokens.map((line, i) => {
                                        return (
                                            <span
                                                className="w-8 text-text-sm tablet:text-text-md text-graymodern-400 inline-block select-none text-right"
                                                key={i}
                                            >
                                                {i + 1}
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : null}
                            <div className="p-2 overflow-x-scroll text-text-sm tablet:text-text-md hide-scrollbar">
                                {tokens.map((line, i) => {
                                    const { className, ...restLineProps } =
                                        getLineProps({ line });
                                    return (
                                        <div
                                            key={i}
                                            className={clsx(
                                                "px-2 min-w-fit",
                                                className
                                            )}
                                            code-block-line=""
                                            {...restLineProps}
                                        >
                                            {/* <span className="pr-4 w-8 opacity-60 inline-block select-none text-right">
                                            {i + 1}
                                        </span> */}
                                            {line.map((token, key) => (
                                                <span
                                                    key={key}
                                                    {...getTokenProps({
                                                        token,
                                                    })}
                                                />
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </pre>
                    )}
                </Highlight>
                {/* </pre> */}
            </div>
        </div>
    );
};

export default Pre;
