"use client";

import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";
import CodeBlockLanguageLogo from "./language-logo";
import { File, FileDiff, TerminalSquare } from "lucide-react";
import Prism from "prismjs";

(typeof global === "undefined" ? window : global).Prism = Prism;
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-solidity");
require("prismjs/components/prism-python");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-diff");

const Pre = ({
    children,
    language,
    showLineNumbers,
    logo,
    fileName,
    filePath,
}: JSX.IntrinsicElements["pre"] & {
    language: string;
    showLineNumbers?: boolean;
    logo?: React.FC<JSX.IntrinsicElements["svg"]>;
    fileName?: string;
    filePath?: string;
}) => {
    const hasHeader = fileName !== undefined;
    let fileLocation: string[] = [];

    if (filePath) {
        fileLocation = filePath.split("/");
    }

    const Icon = logo
        ? logo
        : language === "javascript" || language === "js"
        ? CodeBlockLanguageLogo.JavaScript
        : language === "typescript" || language === "ts"
        ? CodeBlockLanguageLogo.TypeScript
        : language === "jsx"
        ? CodeBlockLanguageLogo.React
        : language === "tsx"
        ? CodeBlockLanguageLogo.React
        : language === "solidity" || language === "sol"
        ? CodeBlockLanguageLogo.Solidity
        : language === "python" || language === "py"
        ? CodeBlockLanguageLogo.Python
        : language === "bash" || language === "sh"
        ? TerminalSquare
        : language === "diff"
        ? FileDiff
        : File;

    return (
        <div className="overflow-hidden shadow-lg">
            <div className="flex flex-col">
                {hasHeader ? (
                    <div
                        className="flex flex-col justify-start bg-graymodern-700 rounded-t-md"
                        code-block-header=""
                    >
                        <span className="flex font-display items-center space-x-2 bg-[rgb(40_40_40)] px-4 py-2 rounded-t-md text-[rgb(190_190_190)] text-text-sm tablet:text-text-md">
                            <Icon className="w-3 h-3 tablet:w-4 tablet:h-4" />
                            <div>{fileName}</div>
                        </span>
                        {fileLocation.length ? (
                            <div className="flex space-x-2 px-4 py-1 bg-[rgb(30_30_30)] text-[rgb(140_140_140)] items-center font-display text-text-xs tablet:text-text-md">
                                {fileLocation.map((location, index) =>
                                    index === fileLocation.length - 1 ? (
                                        <>
                                            <span>{location}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{location}</span>
                                            <span>&gt;</span>
                                        </>
                                    )
                                )}
                            </div>
                        ) : null}
                        {/* <CodeBlockActions
                            code={children}
                            switcher={switcher}
                            inHeader
                        /> */}
                    </div>
                ) : null}
                {/* <pre
                    className="border-2 border-graymodern-600 bg-graymodern-900 p-2 rounded-md overflow-x-scroll hide-scrollbar"
                    style={{ overflowX: "scroll" }}
                > */}
                <Highlight
                    prism={Prism}
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
                            className={clsx(
                                "flex relative bg-graymodern-900 border-t-2 border-[rgb(40_40_40)]",
                                hasHeader ? "rounded-b-md" : "rounded-md"
                            )}
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
