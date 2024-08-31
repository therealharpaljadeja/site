export default function H1({ children }: { children: string }) {
    return (
        <h1 className="font-display text-white text-xs tablet:text-sm">
            {children}
        </h1>
    );
}
