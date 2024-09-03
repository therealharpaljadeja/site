type ArticleWithExternalLink = {
    externalLink: string;
    title: string;
    date: Date;
    slug?: never;
};

type ArticlesWithSlug = {
    slug: string;
    externalLink?: never;
    title: string;
    date: Date;
};

type Article = ArticleWithExternalLink | ArticlesWithSlug;

export const Articles: Article[] = [
    // 2023
    {
        title: "What are Meta Transactions (ERC-2771)?",
        date: new Date("2023-08-09"),
        externalLink: "https://www.alchemy.com/overviews/meta-transactions",
    },
    {
        title: "Account Abstraction (ERC-4337) vs. Meta Transactions (ERC-2771)",
        date: new Date("2023-10-26"),
        externalLink: "https://www.alchemy.com/overviews/4337-vs-2771",
    },
    // 2022
    {
        title: "React Native & Celo: Easily build React Native dApps on Celo.",
        date: new Date("2022-07-21"),
        externalLink:
            "https://medium.com/@jadejaharpal/celo-composer-react-native-easily-build-react-native-dapps-on-celo-bdc57080772f",
    },
    {
        title: "Bridging tokens to and from Celo via Wormhole",
        date: new Date("2022-07-06"),
        externalLink:
            "https://medium.com/@jadejaharpal/bridging-token-to-and-from-celo-via-wormhole-83cae48dfcff",
    },
    {
        title: "How to create a Loyalty Program using Meta-transactions",
        date: new Date("2022-07-22"),
        externalLink:
            "https://medium.com/@jadejaharpal/how-to-create-a-loyalty-program-using-meta-transactions-686ae036b976",
    },
    {
        title: "All you need to know about Biconomy.",
        date: new Date("2022-01-01"),
        externalLink:
            "https://chisel-quality-501.notion.site/All-you-need-to-know-about-Biconomy-82cd8281ad9a4fb6afc815e3fc28c793",
    },
    {
        title: "Create a Horoscope Web3 NFT Application",
        date: new Date("2022-01-22"),
        externalLink:
            "https://metaschool.so/courses/create-a-horoscope-web3-nft-application",
    },

    {
        title: "How to integrate Coinbase Smart Wallet into your frontend",
        date: new Date("2024-06-28"),
        slug: "cbsw-connect-wallet-tutorial",
    },
];
