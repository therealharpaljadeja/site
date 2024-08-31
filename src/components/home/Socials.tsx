import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Socials() {
    return (
        <div className="w-full !mt-4 flex space-x-4 items-center">
            {socials.map((social) => (
                <Link target="_blank" href={social.link} key={social.link}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}

const socials = [
    {
        icon: <SiX className="fill-[#dfdfdf]" size={24} />,
        link: "https://twitter.com/HarpalJadeja11",
    },
    {
        icon: <Linkedin className="stroke-[#dfdfdf]" size={24} />,
        link: "https://www.linkedin.com/in/harpalsinhjadeja/",
    },
    {
        icon: <SiGithub className="fill-[#dfdfdf]" size={24} />,
        link: "https://github.com/therealharpaljadeja",
    },
    {
        icon: <SiYoutube className="fill-[#dfdfdf]" size={24} />,
        link: "https://www.youtube.com/channel/UCRR7y_jGHOOe1wMyEhcQdUg",
    },
    {
        icon: <Mail className="stroke-[#dfdfdf]" size={24} />,
        link: "mailto:harpaljadeja.informal@gmail.com?subject=Mail from Our Site",
    },
];
