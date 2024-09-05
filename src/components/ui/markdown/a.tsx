export default function A({
    children,
    href,
    target,
    ...rest
}: JSX.IntrinsicElements["a"]) {
    return (
        <a
            {...rest}
            href={href}
            target={href?.startsWith("/") ? "_self" : "_blank"}
            className="text-graymodern-300 underline underline-offset-4 italic"
        >
            {children}
        </a>
    );
}
