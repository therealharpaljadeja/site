import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center p-4 mt-4 space-y-4">
            <div className="max-w-[300px] w-[100%] h-[250px] rounded-md overflow-hidden relative border-white">
                <Image
                    style={{ objectFit: "cover" }}
                    alt="harpal"
                    src="/images/IMG_2507.jpg"
                    fill={true}
                />
            </div>
            <div className="flex flex-col space-y-2 w-full justify-start">
                <Heading>Harpalsinh Jadeja</Heading>
                <Text>
                    Hello! I'm Harpal, a Developer Relations Engineer at Celo
                    Foundation with 3 years of experience in the Web3 space,
                    including 2 years of professional work.
                </Text>
                <Text>
                    My expertise lies in fostering community engagement and
                    building robust developer tools in the decentralized
                    ecosystem.
                </Text>
                <Text>
                    Even outside of my professional role, I am deeply passionate
                    about open-source development and regularly contribute to
                    various projects like Metamask Snaps and Alchemy AA SDK.
                </Text>
                <Text>
                    This commitment not only enhances my skills but also allows
                    me to give back to the community and stay at the forefront
                    of Web3 innovations.
                </Text>
                <Text>
                    In my free time, you can find me exploring the latest trends
                    in blockchain technology or collaborating on new open-source
                    initiatives. I'm always eager to connect with fellow
                    enthusiasts and explore new opportunities.
                </Text>
                <Text>
                    Feel free to reach out to me using email or connect with me
                    on social media.
                </Text>
            </div>
        </main>
    );
}
