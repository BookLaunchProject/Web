import Link from "next/link";

const COLUMNS = [
    {
        title: "Explore", links: [
            { label: "Book", href: "/book" },
            { label: "Podcast & Shows", href: "/watch" },
            { label: "About", href: "/about" },
        ]
    },
    {
        title: "Work together", links: [
            { label: "Programs", href: "/work" },
            { label: "Speaking", href: "/speaking" },
            { label: "Press & Media", href: "/press" },
        ]
    },
    {
        title: "Community", links: [
            { label: "Mastermind", href: "/mastermind" },
            { label: "Summit", href: "/summit" },
            { label: "Business Makers Wall", href: "/wall" },
        ]
    },
];

const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const SOCIALS = [
    { label: "Instagram", href: "#", icon: <g {...s}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".5" /></g> },
    { label: "LinkedIn", href: "#", icon: <g {...s}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v6M8 7.5v.01M12 16v-6M12 12.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16" /></g> },
    { label: "X", href: "#", icon: <g {...s}><path d="M4 4l16 16M20 4L4 20" /></g> },
    { label: "YouTube", href: "#", icon: <g {...s}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" /></g> },
];

export default function Footer() {
    return (
        <footer className="ft">

            <div className="ft__in">
                <div className="ft__top">
                    <div>
                        <p className="ft__name">Christian Kitumaini</p>
                        <p className="ft__line">
                            Christian Kitumaini is a founder, investor, mentor and TV host on a mission to change the narrative about African entrepreneurship.
                        </p>
                    </div>
                    <Link className="bk-btn" href="/book">
                        Get the Book
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><path d="M4 12h15M14 7l5 5-5 5" /></svg>
                        </span>
                    </Link>
                </div>

                <div className="ft__cols">
                    {COLUMNS.map((c) => (
                        <nav key={c.title} aria-label={c.title}>
                            <h2>{c.title}</h2>
                            <ul>
                                {c.links.map((l) => (
                                    <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    <div>
                        <h2>Connect</h2>
                        <div className="ft__soc">
                            {SOCIALS.map((x) => (
                                <a key={x.label} href={x.href} aria-label={x.label}><svg viewBox="0 0 24 24" aria-hidden="true">{x.icon}</svg></a>
                            ))}
                        </div>
                        <ul>
                            <li>Email [address]</li>
                            <li>WhatsApp [number]</li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="ft__bottom">
                    <p>
                        © 2026 Christian Kitumaini · <em>Behind the Business Dream</em> is published by Imagine We Publishers.
                    </p>
                    <p className="ft__legal">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                        <a href="#top">Back to top ↑</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}