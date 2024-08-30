import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        screens: {
            mobileS: "320px",
            mobileM: "375px",
            mobileL: "425px",
            tablet: "768px",
            laptop: "1024px",
            laptopL: "1440px",
        },
        fontSize: {
            "2xl": "72px",
            xl: "60px",
            lg: "48px",
            md: "36px",
            sm: "30px",
            xs: "24px",
            "text-xl": "20px",
            "text-lg": "18px",
            "text-md": "16px",
            "text-sm": "14px",
            "text-xs": "12px",
        },
        fontFamily: {
            display: ["var(--font-geist)"],
            body: ["var(--font-inter)"],
        },
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
