import Text from "../ui/text";
import Socials from "./Socials";

export default function Intro() {
    return (
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
                <Text>
                    I&apos;m a Developer Relations Engineer at Celo Foundation
                    with 3 years of experience in the Web3 space, including 2
                    years of professional work.
                </Text>
                <Text>
                    In my free time, I explore Web3 trends and collaborate on
                    open-source projects. I&apos;m always eager to connect with
                    fellow enthusiasts.
                </Text>
                <Text>
                    On this site, you can explore my technical articles, watch
                    my videos, or learn more about me.
                </Text>
                <Socials />
            </div>
        </div>
    );
}
