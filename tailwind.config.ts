import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        extend: {
            colors: {
                graymodern: {
                    25: "#FCFCFD",
                    50: "#F8FAFC",
                    100: "#EEF2F6",
                    200: "#E3E8EF",
                    300: "#CDD5DF",
                    400: "#9DA4AE",
                    500: "#697586",
                    600: "#4B5565",
                    700: "#364152",
                    800: "#202939",
                    900: "#121926",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
