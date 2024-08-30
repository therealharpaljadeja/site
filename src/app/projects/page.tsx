import { Projects as projects } from "./projects";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiYoutube } from "@icons-pack/react-simple-icons";
import React from "react";

export default function Projects() {
    return (
        <React.Fragment>
            <h1 className="font-display text-white text-xs tablet:text-sm">
                Projects
            </h1>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                {projects.map((project) => {
                    return (
                        <div
                            className="flex flex-col space-y-2 border-2 p-2 rounded-md border-graymodern-700"
                            key={project.title}
                        >
                            {project.thumbnail ? (
                                <div className="relative overflow-hidden rounded-md">
                                    <img src={project.thumbnail} />
                                </div>
                            ) : null}
                            <div className="flex flex-col space-y-4 p-2">
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href={project.externalURL}
                                        className="flex space-x-2 items-center"
                                        target="_blank"
                                    >
                                        <h3 className="font-display text-text-md text-graymodern-300">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="font-body text-text-sm text-graymodern-300">
                                        {project.shortDescription}
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    {project.githubURL && (
                                        <Link
                                            href={project.githubURL}
                                            target="_blank"
                                        >
                                            <SiGithub color="white" size="16" />
                                        </Link>
                                    )}
                                    {project.demoVideoURL && (
                                        <Link
                                            href={project.demoVideoURL}
                                            target="_blank"
                                        >
                                            <SiYoutube
                                                color="white"
                                                size="16"
                                            />
                                        </Link>
                                    )}
                                </div>
                                {/* <div className="grid gap-2 space-x-2">
                                    {project.prizes &&
                                        project.prizes.length &&
                                        project.prizes.map((prize) => {
                                            if (prize.externalURL) {
                                                return (
                                                    <Link
                                                        href={prize.externalURL}
                                                        target="_blank"
                                                    >
                                                        <Tag>{prize.title}</Tag>
                                                    </Link>
                                                );
                                            }

                                            return <Tag>{prize.title}</Tag>;
                                        })}
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
