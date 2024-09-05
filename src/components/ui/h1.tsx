import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";

const H1: React.FC<JSX.IntrinsicElements["h1"]> = ({ children, ...rest }) => {
    return (
        <h1
            className="font-display text-graymodern-300 text-xs tablet:text-sm"
            {...rest}
        >
            {children}
        </h1>
    );
};

export default H1;
