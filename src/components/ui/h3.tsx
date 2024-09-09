import React from "react";

const H3: React.FC<JSX.IntrinsicElements["h3"]> = ({ children, ...rest }) => {
    return (
        <h3
            className="font-display text-graymodern-300 text-text-lg tablet:text-text-xl"
            {...rest}
        >
            {children}
        </h3>
    );
};

export default H3;
