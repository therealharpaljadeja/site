type Prize = {
    title: string;
    externalURL?: string;
};

enum TECH_STACK {
    NEXT_JS,
    REACT_JS,
    FARCASTER_FRAME,
    AIRSTACK,
    ZORA_SDK,
    CB_SMART_WALLET,
    PLASMO,
    NEYNAR,
    GITHUB_CI,
    REDIS,
    METAMASK_SNAP,
    THIRDWEB,
    ALCHEMY,
    SUPERFLUID,
    LENS_PROTOCOL,
    LIVEPEER,
    OPENZEPPELIN_RELAYER,
    CELO,
}

type Project = {
    title: string;
    shortDescription: string;
    thumbnail?: string;
    // URL to some external page that has more info about the project. For example: ETHGlobal Page.
    externalURL: string;
    demoVideoURL?: string;
    githubURL?: string;
    // Prize won by the project
    prizes?: Prize[];
    // Tech Stack
    techStack?: TECH_STACK[];
};

export const Projects: Project[] = [
    {
        title: "ZoraCart",
        shortDescription: "Buy Multiple Zora NFT at once",
        thumbnail: "https://img.youtube.com/vi/KtniX7MEfgU/maxresdefault.jpg",
        externalURL: "https://devfolio.co/projects/zoracart-fcfc",
        demoVideoURL: "https://youtu.be/KtniX7MEfgU",
        githubURL: "https://github.com/therealharpaljadeja/zora-cart-extension",
        prizes: [
            {
                title: "1st place on Onchain Summer Buildathon Voting Leaderboard",
                externalURL: "https://onchain-summer.devfolio.co/leaderboard",
            },
            {
                title: "1st in /base-builds Round #9",
                externalURL:
                    "https://rounds.wtf/base-builds/base-builds-by-build-1",
            },
        ],
        techStack: [
            TECH_STACK.REACT_JS,
            TECH_STACK.CB_SMART_WALLET,
            TECH_STACK.PLASMO,
            TECH_STACK.ZORA_SDK,
        ],
    },
    {
        title: "Farcaster Github Action",
        shortDescription: "Automate casting to Farcaster using Github Actions",
        thumbnail: "",
        externalURL: "https://github.com/marketplace/actions/cast-to-farcaster",
        githubURL:
            "https://github.com/therealharpaljadeja/farcaster-cast-github-action",
        techStack: [TECH_STACK.NEYNAR, TECH_STACK.GITHUB_CI],
    },
    {
        title: "Find Farcaster Friends",
        shortDescription:
            "Discover new profiles on Farcaster based on your wallet activity",
        externalURL: "https://warpcast.com/harpaljadeja/0x1e5a7cde",
        githubURL:
            "https://github.com/therealharpaljadeja/find-farcaster-friends",
        demoVideoURL: "https://www.youtube.com/watch?v=gSDTqCp0nUE",
        thumbnail: "https://img.youtube.com/vi/gSDTqCp0nUE/maxresdefault.jpg",
        prizes: [
            {
                title: "Winner for Best Airstack use case",
                externalURL:
                    "https://build.bewater.xyz/en/campaigns/HK6L-DeSoc-Hackathon-S1/result",
            },
        ],
        techStack: [
            TECH_STACK.AIRSTACK,
            TECH_STACK.FARCASTER_FRAME,
            TECH_STACK.NEXT_JS,
            TECH_STACK.NEYNAR,
            TECH_STACK.REDIS,
        ],
    },
    {
        title: "Event Farcaster Frame",
        shortDescription: "1st ever RSVP Frame",
        externalURL: "https://warpcast.com/harpaljadeja/0x91fa6b14",
        thumbnail:
            "https://github.com/therealharpaljadeja/farcaster-event-frame/blob/main/public/start.png?raw=true",
        githubURL:
            "https://github.com/therealharpaljadeja/farcaster-event-frame",
        techStack: [
            TECH_STACK.FARCASTER_FRAME,
            TECH_STACK.REDIS,
            TECH_STACK.NEXT_JS,
        ],
    },
    {
        title: "Akinator Farcaster Frame (700+ players)",
        shortDescription:
            "The famous Akinator Game in a frame, broke my Vercel",
        externalURL: "https://warpcast.com/harpaljadeja/0xa4ff1e6b",
        thumbnail:
            "https://github.com/therealharpaljadeja/akinator-farcaster-frame/blob/main/public/assets/images/first.png?raw=true",
        githubURL:
            "https://github.com/therealharpaljadeja/akinator-farcaster-frame",
        techStack: [
            TECH_STACK.FARCASTER_FRAME,
            TECH_STACK.NEXT_JS,
            TECH_STACK.REDIS,
        ],
    },
    {
        title: "AA Snap",
        shortDescription:
            "Metamask Snap that add Smart Account support to Metamask",
        externalURL:
            "https://www.youtube.com/live/RAUQhd-ZXpw?si=tcsi2kV1VTwNCavz&t=1850",
        demoVideoURL: "https://youtu.be/youK9nQQHGY?si=d9xZ7u71_qG8wpg5",
        thumbnail: "https://img.youtube.com/vi/youK9nQQHGY/maxresdefault.jpg",
        githubURL:
            "https://github.com/therealharpaljadeja/aa-snap-builders-demo",
        prizes: [
            {
                title: "Winner under IYKYK Linea Edition track",
                externalURL:
                    "https://www.youtube.com/live/RAUQhd-ZXpw?si=tcsi2kV1VTwNCavz&t=1850",
            },
        ],
        techStack: [TECH_STACK.METAMASK_SNAP, TECH_STACK.THIRDWEB],
    },
    {
        title: "RugProof Snap",
        shortDescription: "Metamask Snap that provide transaction insights",
        externalURL: "https://www.youtube.com/watch?v=cRoX2DapSVw",
        demoVideoURL: "https://www.youtube.com/watch?v=cRoX2DapSVw",
        thumbnail: "https://img.youtube.com/vi/cRoX2DapSVw/maxresdefault.jpg",
        githubURL: "https://github.com/therealharpaljadeja/rugproof-snap",
        techStack: [TECH_STACK.METAMASK_SNAP, TECH_STACK.ALCHEMY],
    },
    {
        title: "LensTube",
        shortDescription:
            "Decentralized video sharing platform built using Lens Protocol and Livepeer. Fun Fact: I created it first.",
        externalURL: "https://ethglobal.com/showcase/lenstube-82rue",
        demoVideoURL:
            "https://stream.mux.com/XitE201FB02xvLxw6ZmJRg9tgjVB3t6TNnhhyQaobSOR00/high.mp4",
        thumbnail:
            "https://github.com/LensLive/lenstube/blob/main/public/cover.png?raw=true",
        githubURL: "https://github.com/LensLive/lenstube/tree/main",
        techStack: [
            TECH_STACK.NEXT_JS,
            TECH_STACK.LENS_PROTOCOL,
            TECH_STACK.LIVEPEER,
        ],
    },

    {
        title: "Celo OZ Relayer",
        shortDescription:
            "Meta-Transactions on Celo network using Openzeppelin Relay",
        externalURL:
            "https://github.com/therealharpaljadeja/celo-meta-tx-using-openzeppelin-relayer/tree/main",
        githubURL:
            "https://github.com/therealharpaljadeja/celo-meta-tx-using-openzeppelin-relayer/tree/main",
        techStack: [
            TECH_STACK.CELO,
            TECH_STACK.REACT_JS,
            TECH_STACK.OPENZEPPELIN_RELAYER,
        ],
    },
    {
        title: "NiftySubs",
        shortDescription:
            "Decentralized pay-as-you-watch Livestreaming Platform",
        externalURL: "https://ethglobal.com/showcase/niftysubs-3z9ey",
        demoVideoURL: "https://youtu.be/skJes2cwNTI?si=nGYgOs1Xl-GQmDZf",
        thumbnail: "https://img.youtube.com/vi/skJes2cwNTI/maxresdefault.jpg",
        techStack: [TECH_STACK.SUPERFLUID],
    },
];
