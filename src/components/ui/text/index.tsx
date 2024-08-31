import { ReactNode } from "react";

const Text = ({ children }: { children: string | ReactNode }) => {
    return (
        <p className="font-body text-text-sm tablet:text-text-md text-graymodern-300">
            {children}
        </p>
    );
};

export default Text;
