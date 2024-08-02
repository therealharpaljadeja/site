import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { fonts } from "@/app/fonts";
const Text = defineStyleConfig({
    baseStyle: {
        color: "white",
        fontFamily: fonts.rubik.style.fontFamily,
    },
});

const Heading = defineStyleConfig({
    baseStyle: {
        color: "white",
        fontFamily: fonts.rubik.style.fontFamily,
    },
});

export const theme = extendTheme({
    fonts: {
        heading: "var(--font-rubik)",
        body: "var(--font-rubik)",
    },
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ["48px", "72px"],
            // fontWeight: "bold",
            // lineHeight: "110%",
            // letterSpacing: "-2%",
            color: "white",
        },
        paragraph: {
            // fontSize: ["36px", "48px"],
            // fontWeight: "semibold",
            // lineHeight: "110%",
            // letterSpacing: "-1%",
            color: "white",
        },
    },
    components: {
        Text,
        Heading,
    },
});
