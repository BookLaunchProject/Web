"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Links = { youtubeWatch: string; listen: string; highlights: string; subscribe: string; g5: string };
type Channel = {
    id: string;
    kind: string;
    name: ReactNode;
    plain: string;
    meta: string;
    text: string;
    tags: string[];
    art: "eq" | "air" | "play" | "news";
    cta: { label: string; href: keyof Links }[];
};

const CHANNELS: Channel[] = [
    {
        id: "podcast", kind: "Podcast", plain: "The School of Business Makers",
        name: <>The School of <em>Business Makers</em></>,
        meta: "New episodes every week",
        text: "Weekly conversations with founders, operators and leaders unpacking what really drives momentum, resilience and smart scale.",
        tags: ["Strategy", "Leadership", "Execution"], art: "eq",
        cta: [{ label: "Watch on YouTube", href: "youtubeWatch" }, { label: "Listen now", href: "listen" }],
    },
    {
        id: "tv", kind: "TV", plain: "60x Business",
        name: <>60x <em>Business</em></>,
        meta: "RBA · KC2 · Canal+",
        text: "Broadcast conversations with CEOs, builders and change-makers shaping the African business landscape.",
        tags: ["100+ CEOs and leaders", "National TV"], art: "air",
        cta: [{ label: "Watch highlights", href: "highlights" }],
    },
    {
        id: "youtube", kind: "YouTube", plain: "YouTube",
        name: <>You<em>Tube</em></>,
        meta: "Weekly drops",
        text: "Fresh videos designed to help founders and teams think sharper, act faster and build better companies.",
        tags: ["Episodes", "Clips", "Lessons"], art: "play",
        cta: [{ label: "Subscribe", href: "subscribe" }],
    },
    {
        id: "g5", kind: "Media", plain: "G5 Daily",
        name: <>G5 <em>Daily</em></>,
        meta: "Online media",
        text: "A digital storytelling platform sharing an inspiring, modern narrative about African ambition and everyday leadership.",
        tags: ["Millennials", "Gen Z", "African stories"], art: "news",
        cta: [{ label: "Explore", href: "g5" }],
    },
];

const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

/* Each channel gets its own picture on the screen, drawn in CSS */
function Art({ kind }: { kind: Channel["art"] }) {
    if (kind === "eq") {
        return <div className="wg-art wg-art--eq" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>;
    }
    if (kind === "air") return <div className="wg-art wg-art--air" aria-hidden="true"><b>60x</b></div>;
    if (kind === "play") {
        return (
            <div className="wg-art wg-art--play" aria-hidden="true">
                <span><svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
            </div>
        );
    }
    return <div className="wg-art wg-art--news" aria-hidden="true"><b>G5</b><i /><i /><i /><i /></div>;
}

export default function ShowsGuide({ links }: { links: Links }) {
    const [on, setOn] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const ch = CHANNELS[on];

    /* arrow keys move between channels, like a remote */
    const onKey = (e: KeyboardEvent) => {
        const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        const next = (on + step + CHANNELS.length) % CHANNELS.length;
        setOn(next);
        tabs.current[next]?.focus();
    };

    return (
        <section className="wg" id="showcase" aria-labelledby="wg-title">
            <div className="wl-in">
                <div className="wg-head">
                    <div>
                        <p className="wg-kicker">Pick a channel</p>
                        <h2 id="wg-title">One platform for stories, strategy and the <em>real work</em> behind growth.</h2>
                    </div>
                    <p className="wg-count" aria-hidden="true"><b>0{on + 1}</b>/0{CHANNELS.length}</p>
                </div>

                <div className="wg-guide">
                    <div className="wg-list" role="tablist" aria-label="Shows and platforms" aria-orientation="vertical" onKeyDown={onKey}>
                        {CHANNELS.map((c, i) => (
                            <button
                                key={c.id}
                                ref={(el) => { tabs.current[i] = el; }}
                                role="tab"
                                id={`wg-tab-${c.id}`}
                                aria-selected={on === i}
                                aria-controls="wg-screen"
                                tabIndex={on === i ? 0 : -1}
                                className="wg-tab"
                                onClick={(e) => {
                                    setOn(i);
                                    e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
                                }}
                            >
                                <small>CH 0{i + 1} · {c.kind}</small>
                                <b>{c.plain}</b>
                                <span>{c.meta}</span>
                            </button>
                        ))}
                    </div>

                    <div className="wg-tv">
                        <div className="wg-screen" id="wg-screen" role="tabpanel" aria-labelledby={`wg-tab-${ch.id}`}>
                            <div key={ch.id} className={`wg-show wg-show--${ch.art}`}>
                                <div className="wg-bar">
                                    <span className="wg-air">On air</span>
                                    <span>CH 0{on + 1} · {ch.meta}</span>
                                </div>
                                <Art kind={ch.art} />
                                <div className="wg-copy">
                                    <span className="wg-pill">{ch.kind}</span>
                                    <h3>{ch.name}</h3>
                                    <p>{ch.text}</p>
                                    <ul className="wg-tags">{ch.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                                    <div className="wg-cta">
                                        {ch.cta.map((b, i) => (
                                            <Link
                                                key={b.label}
                                                className={i === 0 ? "bk-btn" : "wg-ghost"}
                                                href={links[b.href]}
                                                target={links[b.href].startsWith("http") ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                            >
                                                {b.label} {i === 0 ? <span><Arrow /></span> : <Arrow />}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wg-stand" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}
