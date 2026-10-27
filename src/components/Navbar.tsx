import Link from "next/link";

const links = [
    { href: "/book", label: "Book" },
    { href: "/watch", label: "Watch & Listen" },
    { href: "/work", label: "Work With Christian" },
    { href: "/summit", label: "Summit" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    return (
        <header className="bk-top">
            <div className="bk-top-in">
                <Link className="bk-logo" href="/">Christian Kitumaini</Link>
                <nav className="bk-links" aria-label="Main">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href}>{l.label}</Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}