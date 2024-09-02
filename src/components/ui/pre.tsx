"use client";

import { Highlight, RenderProps, themes } from "prism-react-renderer";

const Pre = ({
    children,
    language,
}: JSX.IntrinsicElements["pre"] & { language: string }) => {
    return (
        <div className="overflow-hidden">
            <div>
                <pre
                    className="border-2 border-graymodern-600 bg-graymodern-900 p-2 rounded-md overflow-x-scroll hide-scrollbar"
                    style={{ overflowX: "scroll" }}
                >
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
                            <pre style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line })}>
                                        <span className="pr-2">{i + 1}</span>
                                        {line.map((token, key) => (
                                            <span
                                                key={key}
                                                {...getTokenProps({ token })}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </pre>
            </div>
        </div>
    );
};

export default Pre;
