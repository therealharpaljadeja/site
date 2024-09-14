"use client";

import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";
import CodeBlockLanguageLogo from "./language-logo";
import { File, FileDiff, TerminalSquare } from "lucide-react";
import Prism from "prismjs";
import CopyButton from "./copy-button";

(typeof global === "undefined" ? window : global).Prism = Prism;
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-solidity");
require("prismjs/components/prism-python");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-diff");

function isLineToBeHighlighted(number: number, ranges: (number | number[])[]) {
    let highlightLine = false;
    for (let i = 0; i < ranges.length; i++) {
        if (Array.isArray(ranges[i])) {
            const [min, max] = ranges[i] as number[];
            // Check if the number is between or equal to the boundaries
            highlightLine = number >= min && number <= max;
        } else {
            highlightLine = number === ranges[i];
        }
        if (highlightLine) return highlightLine;
    }

    return highlightLine;
}

const Pre = ({
    children,
    language,
    showLineNumbers,
    highlightLines = [],
    logo,
    fileName,
    filePath,
}: JSX.IntrinsicElements["pre"] & {
    language: string;
    showLineNumbers?: boolean;
    highlightLines?: (number | number[])[];
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
        <div className="overflow-hidden shadow-lg rounded-md">
            <div className={"flex flex-col"}>
                {hasHeader ? (
                    <div
                        className="flex flex-col justify-start bg-graymodern-700 rounded-t-md"
                        code-block-header=""
                    >
                        <div className="flex justify-between items-center bg-[rgb(40_40_40)]">
                            <span className="flex font-display items-center space-x-2 px-4 py-2 rounded-t-md text-[rgb(190_190_190)] text-text-sm tablet:text-text-md">
                                <Icon className="w-3 h-3 tablet:w-4 tablet:h-4" />
                                <div>{fileName}</div>
                            </span>
                            <span className="px-4 py-2">
                                <CopyButton code={children as string} />
                            </span>
                        </div>
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
                    {({ style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            style={style}
                            className={clsx(
                                "flex relative bg-graymodern-900",
                                hasHeader
                                    ? "border-t-2 border-[rgb(40_40_40)] rounded-b-md"
                                    : "rounded-md"
                            )}
                        >
                            {showLineNumbers ? (
                                <div className="flex flex-col shadow-md border-[rgb(40_40_40)]">
                                    {tokens.map((line, i) => {
                                        return (
                                            <span
                                                className={clsx(
                                                    "w-12 text-text-sm tablet:text-text-md text-graymodern-400 inline-block select-none text-right border-r-2  border-[rgb(40_40_40)] px-2",
                                                    i === 0 ? "pt-2" : "",
                                                    i === tokens.length - 1
                                                        ? "pb-2"
                                                        : "",
                                                    isLineToBeHighlighted(
                                                        i + 1,
                                                        highlightLines
                                                    )
                                                        ? "bg-graymodern-800 border-r-2  border-l-2 border-l-graymodern-700 border-r-graymodern-400"
                                                        : ""
                                                )}
                                                key={i}
                                            >
                                                {i + 1}
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : null}
                            <div
                                className={clsx(
                                    "py-2 overflow-x-scroll text-text-sm tablet:text-text-md hide-scrollbar"
                                )}
                            >
                                {tokens.map((line, i) => {
                                    const { className, ...restLineProps } =
                                        getLineProps({
                                            line,
                                        });
                                    return (
                                        <div
                                            key={i}
                                            className={clsx(
                                                "px-4 min-w-fit",
                                                className
                                            )}
                                            code-block-line=""
                                            {...restLineProps}
                                        >
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
