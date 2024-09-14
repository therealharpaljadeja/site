import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
    code: string;
};

export default function CopyButton({ code }: CopyButtonProps) {
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = () => {
        if (!copied) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        navigator.clipboard.writeText(code);
    };

    return (
        <button onClick={copyToClipboard} aria-label="Copy to clipboard">
            {copied ? (
                <Check className="duration-300 animate-in fade-in zoom-in h-4 w-4" />
            ) : (
                <Copy className="duration-300 animate-in fade-in h-4 w-4" />
            )}
        </button>
    );
}
