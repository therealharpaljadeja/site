import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center mt-4 space-y-12 tablet:space-y-8  max-w-[640px] m-auto">
            <div className="flex flex-col space-y-4 tablet:flex-row tablet:space-x-4 tablet:items-start tablet:space-y-0">
                <div className="w-full h-[250px] rounded-md overflow-hidden relative border-white">
                    <NextImage
                        alt="me"
                        src="/images/IMG_2507.jpg"
                        fill={true}
                        sizes="(max-width: 768px) 50vw"
                        className="object-fit object-cover"
                    />
                </div>
                <div className="flex  flex-col space-y-2 w-full justify-start">
                    <Heading as="h1" className="">
                        Harpalsinh Jadeja
                    </Heading>
                    <Text>
                        Hello! I'm Harpal, a Developer Relations Engineer at
                        Celo Foundation with 3 years of experience in the Web3
                        space, including 2 years of professional work.
                    </Text>
                    <Text className="tablet:hidden">
                        In my free time, you can find me exploring the latest
                        trends in Web3 or collaborating on new open-source
                        initiatives. I'm always eager to connect with fellow
                        enthusiasts and explore new opportunities.
                    </Text>
                    <Text>
                        Feel free to reach out to me using email or connect with
                        me on social media.
                    </Text>
                    <HStack className="w-full !mt-4 items-center">
                        <Link
                            target="_blank"
                            href={"https://twitter.com/HarpalJadeja11"}
                        >
                            <SiX color="white" size={16} />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/harpalsinhjadeja/"
                            }
                        >
                            <Linkedin color="white" size={16} />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://github.com/therealharpaljadeja"}
                        >
                            <SiGithub color="white" size={16} />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.youtube.com/channel/UCRR7y_jGHOOe1wMyEhcQdUg"
                            }
                        >
                            <SiYoutube color="white" size={16} />
                        </Link>
                    </HStack>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-4">
                <div className="flex items-end justify-between p-1 border-b-2 border-white">
                    <Heading size="lg">Articles</Heading>
                    <Link href="/articles">
                        <Text className="text-sm">View More</Text>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <Link
                        href="https://www.alchemy.com/overviews/meta-transactions"
                        target="_blank"
                    >
                        <div className="flex space-x-1 items-center">
                            <Text className="text-sm">
                                What are Meta Transactions (ERC-2771)?
                            </Text>
                            <ArrowUpRight color="#dedede" size="14px" />
                        </div>
                    </Link>
                    <Link
                        href="https://www.alchemy.com/overviews/4337-vs-2771"
                        target="_blank"
                    >
                        <div className="flex space-x-1 items-center">
                            <Text className="text-sm">
                                Account Abstraction (ERC-4337) vs. Meta
                                Transactions (ERC-2771)
                            </Text>
                            <ArrowUpRight color="#dedede" size="14px" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-4">
                <div className="flex items-end justify-between p-1 border-b-2 border-white">
                    <Heading size="lg">Videos</Heading>
                    <Link href="/videos">
                        <Text className="text-sm">View More</Text>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4 tablet:flex-row tablet:space-y-0 tablet:space-x-4">
                    <Link
                        href="https://www.youtube.com/watch?v=gMG9hYevFtA"
                        target="_blank"
                    >
                        <Image
                            alt="Farcaster Frames"
                            src="/images/Farcaster Frames.png"
                        />
                    </Link>
                    <Link
                        href="https://www.alchemy.com/overviews/4337-vs-2771"
                        target="_blank"
                    >
                        <Image
                            alt="Coinbase Smart Wallet Tutorial"
                            src="/images/Coinbase Smart Wallet Tutorial.png"
                        />
                    </Link>
                </div>
            </div>
        </main>
    );
}
