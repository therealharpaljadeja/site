import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
    return <div className="flex flex-col w-full space-y-4">{children}</div>;
}
