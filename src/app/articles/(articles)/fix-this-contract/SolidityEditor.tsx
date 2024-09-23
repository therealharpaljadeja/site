"use client";

import Text from "@/components/ui/text";
import Editor, { OnMount } from "@monaco-editor/react";
import CodeBlockLanguageLogo from "@/components/ui/markdown/pre/language-logo/index";
import { Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

            setIsFoundryInstalled(data.foundryInstalled);
            setSessionToken(data.sessionToken);
            setIsLoading(false);
            console.log(
                "Session info updated, Foundry installed:",
                data.foundryInstalled
            );
            return data.foundryInstalled;
        } catch (error) {
            console.error("Error fetching session:", error);
            setIsLoading(false);
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
        console.log(value);
    };

    const handleRun = async () => {
        const response = await fetch(
            "https://solidity-testing-backend-production.up.railway.app/api/test/Counter",
            {
                body: editorContent,
                method: "POST",
            }
        );
        const data = await response.json();
        console.log(data);
    };

    const Icon = CodeBlockLanguageLogo.Solidity;

    return (
        <div className="mt-8">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col justify-start rounded-t-md">
                    {editorMounted && (
                        <div className="flex justify-between items-center w-full bg-[rgb(40_40_40)] border-b-2 border-graymodern-700">
                            <span className="flex font-display items-center space-x-2 px-4 py-2 rounded-t-md text-[rgb(190_190_190)] text-text-sm tablet:text-text-md">
                                <Icon className="w-3 h-3 tablet:w-4 tablet:h-4" />
                                <div>{"Counter.sol"}</div>
                            </span>
                            <button
                                onClick={handleRun}
                                className="flex bg-green-500 px-2 py-1 rounded-md text-white text-text-sm items-center space-x-2 mx-2 my-2"
                            >
                                <Play size={10} /> <span>Run</span>
                            </button>
                        </div>
                    )}
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
                        <div className="bg-black rounded-b-md p-2 text-text-sm">
                            <span>➜ foundry-playground git:(main) ✗</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
