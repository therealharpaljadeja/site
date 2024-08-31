import Text from "@/components/ui/text";
import Link from "next/link";
import React from "react";

export default function Me() {
    return (
        <React.Fragment>
            <h1 className="font-display text-white text-xs tablet:text-sm">
                About Me
            </h1>
            <div className="flex flex-col space-y-8">
                {/* {me.map((question) => (
                    <div className="flex flex-col space-y-2">
                        <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                            {question.question}
                        </h2>
                        {question.answers.map((answer) => (
                            <Text>{answer}</Text>
                        ))}
                    </div>
                ))} */}
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                        Who am I?
                    </h2>
                    <Text>
                        Hey, I&apos;m Harpal, I&apos;ve been coding since 2015
                        (12th Grade) professionally since 2020.
                    </Text>
                    <Text>
                        Currently, I work at{" "}
                        <SpanLink link="https://celo.org">
                            Celo Foundation
                        </SpanLink>{" "}
                        as a{" "}
                        <SpanLink link="https://medium.com/geekculture/whats-a-day-to-day-of-a-developer-relations-engineer-like-d7967cf0b33c">
                            Developer Relations Engineer
                        </SpanLink>
                        . I spend significant time outside work on myself{" "}
                        <SpanLink link="/projects">building projects</SpanLink>,
                        learning new skills and keeping up with the industry.
                    </Text>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                        What is this website?
                    </h2>
                    <Text>
                        Irrespective of how many people visit this website, this
                        will be the place where I keep all my code snippets that
                        I keep needing in my{" "}
                        <SpanLink link="/projects">projects</SpanLink> from time
                        to time to improve{" "}
                        <SpanLink link="https://www.hatica.io/blog/software-development-velocity/">
                            code velocity
                        </SpanLink>{" "}
                        feel free to copy paste into your projects and learnings
                        in the form of{" "}
                        <SpanLink link="/articles">articles</SpanLink> and notes
                        that I can quickly come here and revise if I need to.
                    </Text>
                    <Text>
                        Regardless of the above this website is a good place for
                        me to come to when the days are bad (burnout) to
                        reflecton what it took to be here.
                    </Text>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                        What are you currently upto?
                    </h2>
                    <Text>
                        Establish a thriving developer community at{" "}
                        <SpanLink link="https://celo.org">Celo</SpanLink>,
                        educate developers about Web3 and help them succeed.
                    </Text>
                    <Text>
                        I am also learning about/trying to get better at AI
                        tools like{" "}
                        <SpanLink link="https://claude.ai">Claude</SpanLink>,
                        <SpanLink link="https://chatgpt.com/">ChatGPT</SpanLink>{" "}
                        and{" "}
                        <SpanLink link="https://www.cursor.com/">
                            Cursor
                        </SpanLink>{" "}
                        to see how I can incorporate them into my workflow.
                    </Text>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                        Are you open for projects?
                    </h2>
                    <Text>
                        Shoot me an{" "}
                        <SpanLink link="mailto:harpaljadeja.informal@gmail.com">
                            email
                        </SpanLink>{" "}
                        or get in touch, if it interests me sure!
                    </Text>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-lg border-1 border-b border-graymodern-500 pb-1">
                        Advice for new developers?
                    </h2>
                    <Text>
                        I am myself very early in my career, but I guess the
                        simplest advice I can think of is to learn/improve
                        skills for which there is less data (code in case of
                        programming) on the internet.
                    </Text>
                    <Text>
                        For Example: Learning JS might be good but mastering it
                        might not be a good idea. As I write this I am
                        personally heavily invested in JS ecosystem and building
                        the willpower to learn other skills.
                    </Text>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="font-display text-graymodern-300 text-text-xl border-1 border-b border-graymodern-500 pb-1">
                        All work, no play?
                    </h2>
                    <Text>
                        I loved playing games on my computer during my childhood
                        and college days. It was a very slow machine, I
                        don&apos;t remember the specs but it couldn&apos;t
                        handle{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/Windows_Vista">
                            Windows Vista
                        </SpanLink>
                        , so you can guess. Some games I remember playing are{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/Mortal_Kombat_4">
                            MKv4 (Mortal Kombat 4)
                        </SpanLink>
                        ,{" "}
                        <SpanLink link="https://oldgamesdownload.com/need-for-speed-ii-special-edition-gl9/">
                            Need For Speed II SE
                        </SpanLink>{" "}
                        (I doubt you know about this one),{" "}
                        <SpanLink link="https://store.steampowered.com/app/10/CounterStrike/">
                            CS 1.6
                        </SpanLink>{" "}
                        and then got a{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/PlayStation_2">
                            PS2
                        </SpanLink>{" "}
                        which when I got my hands on{" "}
                        <SpanLink link="https://store.steampowered.com/agecheck/app/2050650/">
                            Resident Evil 4
                        </SpanLink>{" "}
                        and{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/God_of_War_(franchise)">
                            GoW
                        </SpanLink>{" "}
                        (it is still one of my favourites) I haven&apos;t played
                        all the sequels, I wish to. Playing games take up a lot
                        of time which is why I stopped playing.
                    </Text>
                    <Text>
                        Nowadays, I watch anime.{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/Death_Note">
                            Death Note
                        </SpanLink>{" "}
                        is top for me, you may think it&apos;s overrated
                        it&apos;s fine. Some of my favourites are{" "}
                        <SpanLink link="https://www.imdb.com/title/tt1910272/">
                            Steins Gate
                        </SpanLink>
                        ,{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/Dragon_Ball">
                            DragonBall
                        </SpanLink>{" "}
                        and all other sequels and{" "}
                        <SpanLink link="https://en.wikipedia.org/wiki/Naruto">
                            Naruto
                        </SpanLink>{" "}
                        some sequels (Until Naruto became Hokage, it was fun)
                    </Text>
                </div>
                <div className="space-y-4">
                    <h3 className="font-display italic text-text-md text-graymodern-300">
                        If you really read everything, thank you for your time!
                    </h3>
                    <h3 className="font-display italic text-text-md text-graymodern-300">
                        Reading is a good way to increase focus irrespective of
                        what you read if you can stick to something for over an
                        hour without distracted you are doing good!
                    </h3>
                </div>
            </div>
        </React.Fragment>
    );
}

function SpanLink({ children, link }: { children: string; link: string }) {
    return (
        <Link href={link} target={link.startsWith("/") ? "_self" : "_blank"}>
            <span className="underline underline-offset-4 italic text-graymodern-200 font-display font-medium">
                {children}
            </span>
        </Link>
    );
}

// const me = [
//     {
//         question: "Who am I?",
//         answers: [
//             "Hey, I'm Harpal, I've been coding since 2015 (12th Grade) professionally since 2020.",
//             "Currently, I work at Celo Foundation as a Developer Relations Engineer. I spend significant time outside work on myself building projects, learning new skills and keeping up with the industry.",
//         ],
//     },
//     {
//         question: "What is this website?",
//         answers: [
//             "Welcome to my corner of the internet, I have always struggled with showcasing/selling myself which is why this website.",
//             "Regardless of the above this website is a good place for me to come to when the days are bad (burnout) to reflecton what it took to be here.",
//             "Irrespective of how many people visit this website,this will be the place where I keep all my code snippets thatI keep needing in my projects from time to timeto improve code velocity feel free to copy paste into your projects and learnings in the form of articles and notes that I can quickly come here and revise if I need to.",
//         ],
//     },
// ];
