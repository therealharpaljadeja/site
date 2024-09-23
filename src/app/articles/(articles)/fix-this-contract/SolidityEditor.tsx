"use client";

import Text from "@/components/ui/text";
import Editor, { OnMount } from "@monaco-editor/react";
import CodeBlockLanguageLogo from "@/components/ui/markdown/pre/language-logo/index";
import { Circle, CircleCheck, CircleX, Ellipsis, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

function parseTestResults(testResults: string) {
    // Regular expression to match the test results
    const regex = /\[(PASS|FAIL(?:: .*?)?)\] (test_[\w()]+)/g;

    const results: { [test: string]: string } = {};
    let match;

    // Extracting the test names and statuses
    while ((match = regex.exec(testResults)) !== null) {
        const status = match[1].startsWith("FAIL") ? "FAIL" : "PASS";
        results[match[2]] = status;
    }

    return results;
}

const tests: { [testName: string]: "NOT_RUN" | "FAIL" | "PASS" } = {
    "test_Increment()": "NOT_RUN",
    "test_Decrement()": "NOT_RUN",
    "test_IncrementDecrement()": "NOT_RUN",
};

export default function SolidityEditor({
    logo,
}: {
    logo?: React.FC<JSX.IntrinsicElements["svg"]>;
}) {
    const [editorContent, setEditorContent] = useState<string | undefined>(
        undefined
    );
    const [editorMounted, setEditorMounted] = useState<boolean>(false);
    const [isFoundryInstalled, setIsFoundryInstalled] =
        useState<boolean>(false);
    const [sessionToken, setSessionToken] = useState<boolean>(false);
    const [testsResults, setTestsResults] = useState<any>(tests);
    const [runningTests, setRunningTests] = useState<boolean>(false);

    const fetchSessionInfo = useCallback(async () => {
        try {
            const response = await fetch(
                "https://solidity-testing-backend-production.up.railway.app/api/session",
                {
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch session");
            }
            const data = await response.json();

            setIsFoundryInstalled(
                data.foundryInstalled && data.projectInitialized
            );
            setSessionToken(data.sessionToken);
            console.log(
                "Session info updated, Foundry installed:",
                data.foundryInstalled
            );
            console.log(
                "Session info updated, Project initialized:",
                data.projectInitialized
            );
            return data.foundryInstalled;
        } catch (error) {
            console.error("Error fetching session:", error);
            return false;
        }
    }, []);

    useEffect(() => {
        fetchSessionInfo();
    }, [fetchSessionInfo]);

    const handleEditorDidMount: OnMount = async (editor, monaco) => {
        setEditorMounted(true);
        let response = await fetch("/contracts/Counter.sol");
        let content = await response.text();

        setEditorContent(content);

        monaco.editor.createModel(
            content,
            "sol",
            monaco.Uri.parse(`file:///Counter.sol`)
        );

        const currentModel = monaco.editor.getModel(
            monaco.Uri.parse(`file:///Counter.sol`)
        );
        editor.setModel(currentModel);
    };

    const handleEditorChange = (value: string | undefined) => {
        setEditorContent(value);
    };

    const handleRun = async () => {
        setRunningTests(true);
        try {
            const response = await fetch(
                "https://solidity-testing-backend-production.up.railway.app/api/test/Counter",
                {
                    body: JSON.stringify({ content: editorContent }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await response.json();
            console.log(data.output);
            let parsedTestResults = parseTestResults(data.output);
            console.log(parsedTestResults);
            setTestsResults(parsedTestResults);
        } catch (error) {
            console.log(error);
        } finally {
            setRunningTests(false);
        }
    };

    const Icon = CodeBlockLanguageLogo.Solidity;

    return (
        <div className="mt-8">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col justify-start rounded-t-md">
                    {editorMounted ? (
                        <div className="flex justify-between items-center w-full bg-[rgb(40_40_40)] border-b-2 border-graymodern-700">
                            <span className="flex font-display items-center space-x-2 px-4 py-2 rounded-t-md text-[rgb(190_190_190)] text-text-sm tablet:text-text-md">
                                <Icon className="w-3 h-3 tablet:w-4 tablet:h-4" />
                                <div>{"Counter.sol"}</div>
                            </span>
                            <div className="flex items-center space-x-4">
                                {!isFoundryInstalled ? (
                                    <span className="text-[10px]">
                                        Installing Foundry...
                                    </span>
                                ) : null}
                                {runningTests ? (
                                    <button
                                        disabled={!isFoundryInstalled}
                                        className="flex bg-yellow-700 disabled:bg-graymodern-700 px-4 py-1 rounded-md text-white text-text-sm items-center space-x-2 mx-2 my-2 disabled:cursor-wait"
                                    >
                                        <Ellipsis size={20} />{" "}
                                        <span>Running</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleRun}
                                        disabled={
                                            !isFoundryInstalled || runningTests
                                        }
                                        className="flex bg-green-700 disabled:bg-graymodern-700 px-4 py-1 rounded-md text-white text-text-sm items-center space-x-2 mx-2 my-2 disabled:cursor-wait"
                                    >
                                        <Play size={10} /> <span>Run</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : null}
                    <Editor
                        height="50vh"
                        theme="vs-dark"
                        defaultLanguage="sol"
                        path={"/contracts/Counter.sol"}
                        loading={<Text>Loading Editor...</Text>}
                        onMount={handleEditorDidMount}
                        onChange={handleEditorChange}
                        options={{
                            fontSize: 16,
                            wordWrap: "wordWrapColumn",
                            wordWrapColumn: 80,
                            lineNumbersMinChars: 3,
                            padding: {
                                top: 5,
                            },
                        }}
                    />
                    {editorMounted && (
                        <div className="flex flex-col mt-4 space-y-2">
                            {Object.keys(testsResults).map((item: string) => (
                                <div
                                    className="flex justify-between items-center rounded-md border-2 border-graymodern-500 bg-graymodern-900 px-4 py-4 w-full"
                                    key={item}
                                >
                                    <span>{item}</span>
                                    {testsResults[item] === "NOT_RUN" ? (
                                        <Circle size={20} />
                                    ) : testsResults[item] === "FAIL" ? (
                                        <CircleX
                                            className="stroke-red-700"
                                            size={30}
                                        />
                                    ) : testsResults[item] === "PASS" ? (
                                        <CircleCheck
                                            className="stroke-green-700"
                                            size={30}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
