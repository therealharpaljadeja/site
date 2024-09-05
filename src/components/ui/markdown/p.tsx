import Text from "../text";

export default function P({ children, ...rest }: JSX.IntrinsicElements["p"]) {
    return <Text {...rest}>{children}</Text>;
}
