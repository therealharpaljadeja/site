const Code: React.FC<JSX.IntrinsicElements["code"]> = (props) => {
    return (
        <code
            className="rounded-md border border-graymodern-700 bg-graymodern-600 text-graymodern-300 px-1 font-display leading-[1.15] group-focus-visible:ring-2 group-focus-visible:ring-blue-9"
            {...props}
        />
    );
};

export default Code;
