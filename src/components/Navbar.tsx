"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Signature from "@/components/Signature";

type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

const links: NavLink[] = [
    { href: "/book", label: "Book" },
    { href: "/watch", label: "Watch & Listen" },
    { href: "/work", label: "Join My Universe" },
    { href: "/summit", label: "Summit" },
    {
        href: "/about",
        label: "About",
        children: [
            { href: "/press", label: "Press & Media" },
            { href: "/contact", label: "Contact" },
        ],
    },
];

const Chevron = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
    const inSection = (l: NavLink) => isActive(l.href) || !!l.children?.some((c) => isActive(c.href));
    const close = () => setOpen(false);

    /* lock page scroll while the mobile menu is open, close it on Escape */
    useEffect(() => {
        document.documentElement.classList.toggle("menu-open", open);
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className={`bk-top${open ? " is-open" : ""}`}>
            <div className="bk-top-in">
                <Link className="bk-logo" href="/" onClick={close} aria-label="Christian Kitumaini, home">
                    <Signature />
                </Link>

                <nav className="bk-links" aria-label="Main">
                    {links.map((l) =>
                        l.children ? (
                            <div key={l.href} className="bk-drop">
                                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={inSection(l) ? "is-section" : undefined}>
                                    {l.label} <Chevron />
                                </Link>
                                <div className="bk-drop__panel">
                                    {l.children.map((c) => (
                                        <Link key={c.href} href={c.href} aria-current={isActive(c.href) ? "page" : undefined}>{c.label}</Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</Link>
                        )
                    )}
                </nav>

                <button
                    className="bk-burger"
                    type="button"
                    aria-expanded={open}
                    aria-controls="bk-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((o) => !o)}
                >
                    <span /><span />
                </button>
            </div>

            <div id="bk-menu" className="bk-menu" inert={!open}>
                <nav aria-label="Mobile">
                    <ol>
                        {links.map((l, i) => (
                            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
                                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} onClick={close}>
                                    <small>0{i + 1}</small>{l.label}
                                </Link>
                                {l.children ? (
                                    <ul className="bk-menu__sub">
                                        {l.children.map((c) => (
                                            <li key={c.href}>
                                                <Link href={c.href} aria-current={isActive(c.href) ? "page" : undefined} onClick={close}>{c.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="bk-menu__foot">
                    <Link className="bk-menu__new" href="/start" onClick={close}>New here? Start with the guide →</Link>
                    <p>Behind the Business Dream</p>
                    <Link className="bk-btn" href="/book" onClick={close}>
                        Get the Book
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 12h15M14 7l5 5-5 5" /></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
