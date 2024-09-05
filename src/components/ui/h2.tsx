import React from "react";

const H2: React.FC<JSX.IntrinsicElements["h2"]> = ({ children, ...rest }) => {
    return (
        <h2
            className="font-display text-graymodern-300 text-text-xl tablet:text-xs"
            {...rest}
        >
            {children}
        </h2>
    );
};

export default H2;
