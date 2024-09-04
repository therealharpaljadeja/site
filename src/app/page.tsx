import HeaderWithViewMore from "@/components/home/HeaderWithViewMore";
import Intro from "@/components/home/Intro";
import Section from "@/components/home/Section";
import Link from "next/link";
import { Articles } from "./articles/articles";
import { Videos } from "./videos/videos";
import { Projects } from "./projects/projects";
import Project from "@/components/ui/project";

export default function Home() {
    return (
        <div className="space-y-12 tablet:space-y-8">
            <Intro />
            <ArticlesSection />
            <VideosSection />
            <ProjectsSection />
        </div>
    );
}

function ArticlesSection() {
    return (
        <Section>
            <HeaderWithViewMore header="Articles" viewMoreLink="/articles" />
            <div className="flex flex-col space-y-4">
                {Articles.sort((a, b) => (a.date > b.date ? -1 : 1))
                    .slice(0, 5)
                    .map((article) => (
                        <Link
                            href={
                                article.slug !== undefined
                                    ? `/articles/${article.slug}`
                                    : article.externalLink
                            }
                            target="_blank"
                            key={article.title}
                        >
                            <div className="flex space-x-2 justify-between items-center tablet:justify-normal">
                                <p className="text-text-sm text-graymodern-300 mobileL:text-text-md hover:underline">
                                    {article.title}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </Section>
    );
}

function VideosSection() {
    return (
        <Section>
            <HeaderWithViewMore header="Videos" viewMoreLink="/videos" />
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                {Videos.slice(0, 4).map((video) => (
                    <Link
                        href={video.externalLink}
                        target="_blank"
                        key={video.title}
                    >
                        <img alt={video.title} src={video.thumbnail} />
                    </Link>
                ))}
            </div>
        </Section>
    );
}

function ProjectsSection() {
    return (
        <Section>
            <HeaderWithViewMore header="Projects" viewMoreLink="/projects" />
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                {Projects.filter((project) => project.thumbnail !== "")
                    .slice(0, 4)
                    .map((project) => (
                        <Project project={project} key={project.title} />
                    ))}
            </div>
        </Section>
    );
}
