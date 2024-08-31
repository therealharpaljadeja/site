import Link from "next/link";

export default function HeaderWithViewMore({
    header,
    viewMoreLink,
}: {
    header: string;
    viewMoreLink: string;
}) {
    return (
        <div className="flex items-end justify-between p-1 border-b-2 border-graymodern-600">
            <h1 className="text-text-xl text-graymodern-300 mobileL:text-sm">
                {header}
            </h1>
            <Link href={viewMoreLink}>
                <p className="text-text-sm text-graymodern-300">View More</p>
            </Link>
        </div>
    );
}
