import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="space-y-12 tablet:space-y-8">
            <div className="flex flex-col space-y-4 tablet:flex-row tablet:space-x-4 tablet:items-start tablet:space-y-0">
                <div className="w-full h-[250px] mobileM:h-[360px] rounded-md overflow-hidden relative border-white shadow-sm">
                    <img
                        alt="me"
                        src="/images/IMG_2507.jpg"
                        className="translate-y-[-60px] w-[290px] h-[340px] mobileM:translate-y-[-20px] mobileM:w-[360px] mobileM:h-[420px] mobileL:translate-y-[-60px] mobileL:w-[400px] mobileL:h-[480px] tablet:translate-y-[-20px] tablet:h-[380px]"
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full justify-start">
                    <h1 className="font-display text-graymodern-200 text-xs tablet:text-md">
                        Hi, I&apos;m Harpal 👋
                    </h1>
                    <p className="font-body text-graymodern-300">
                        I&apos;m a Developer Relations Engineer at Celo
                        Foundation with 3 years of experience in the Web3 space,
                        including 2 years of professional work.
                    </p>
                    <p className="text-graymodern-300">
                        In my free time, I explore Web3 trends and collaborate
                        on open-source projects. I&apos;m always eager to
                        connect with fellow enthusiasts.
                    </p>
                    <p className="font-body text-graymodern-300">
                        On this site, you can explore my technical articles,
                        watch my videos, or learn more about me.
                    </p>
                    <div className="w-full !mt-4 flex space-x-4 items-center">
                        <Link
                            target="_blank"
                            href={"https://twitter.com/HarpalJadeja11"}
                        >
                            <SiX className="fill-[#dfdfdf]" size={24} />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/harpalsinhjadeja/"
                            }
                        >
                            <Linkedin className="stroke-[#dfdfdf]" size={24} />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://github.com/therealharpaljadeja"}
                        >
                            <SiGithub className="fill-[#dfdfdf]" size={24} />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.youtube.com/channel/UCRR7y_jGHOOe1wMyEhcQdUg"
                            }
                        >
                            <SiYoutube className="fill-[#dfdfdf]" size={24} />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "mailto:harpaljadeja.informal@gmail.com?subject=Mail from Our Site"
                            }
                        >
                            <Mail className="stroke-[#dfdfdf]" size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-4">
                <div className="flex items-end justify-between p-1 border-b-2 border-graymodern-600">
                    <h1 className="text-text-xl text-graymodern-300 mobileL:text-sm">
                        Articles
                    </h1>
                    <Link href="/articles">
                        <p className="text-text-sm text-graymodern-300">
                            View More
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <Link
                        href="https://www.alchemy.com/overviews/meta-transactions"
                        target="_blank"
                    >
                        <div className="flex space-x-2 justify-between items-center tablet:justify-normal">
                            <p className="text-text-sm text-graymodern-300 mobileL:text-text-md hover:underline">
                                What are Meta Transactions (ERC-2771)?
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://www.alchemy.com/overviews/4337-vs-2771"
                        target="_blank"
                    >
                        <div className="flex space-x-2 justify-between items-center tablet:justify-normal">
                            <p className="text-text-sm text-graymodern-300 mobileL:text-text-md">
                                Account Abstraction (ERC-4337) vs. Meta
                                Transactions (ERC-2771)
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-4">
                <div className="flex items-end justify-between p-1 border-b-2 border-graymodern-600">
                    <h1 className="text-text-xl text-graymodern-300 mobileL:text-sm">
                        Videos
                    </h1>
                    <Link href="/videos">
                        <p className="text-text-sm text-graymodern-300">
                            View More
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4 tablet:flex-row tablet:space-y-0 tablet:space-x-4">
                    <div className="relative">
                        <Link
                            href="https://www.youtube.com/watch?v=gMG9hYevFtA"
                            target="_blank"
                        >
                            <img
                                alt="Farcaster Frames"
                                src="https://img.youtube.com/vi/gMG9hYevFtA/maxresdefault.jpg"
                            />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link
                            href="https://www.alchemy.com/overviews/4337-vs-2771"
                            target="_blank"
                        >
                            <img
                                alt="Coinbase Smart Wallet Tutorial"
                                src="https://img.youtube.com/vi/ReDpcUJMz5g/maxresdefault.jpg"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
