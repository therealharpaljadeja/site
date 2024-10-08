import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const geist = localFont({
    src: "../../public/fonts/GeistVF.ttf",
    variable: "--font-geist",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Harpalsinh Jadeja",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.variable} ${inter.variable}`}>
            <body className={`box-border relative bg-graymodern-800`}>
                <Navbar />
                <main className="pt-24 pb-12 mx-auto px-4 tablet:px-0 flex flex-col space-y-6 max-w-[640px]">
                    {children}
                </main>
            </body>
        </html>
    );
}
