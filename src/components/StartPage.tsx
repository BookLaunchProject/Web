"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NewsletterButton, openNewsletter } from "@/components/Newsletter";

const Arrow = ({ color = "currentColor" }: { color?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

/* A stop either links to a page or opens the newsletter */
type Stop = { t: string; d: string; href?: string; cta: string };
type Path = { id: string; who: string; icon: React.ReactNode; lead: string; stops: Stop[] };

const ic = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const PATHS: Path[] = [
    {
        id: "idea", who: "I have an idea", icon: <g {...ic}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" /></g>,
        lead: "You have the dream. Here is how to give it the mechanics it needs.",
        stops: [
            { t: "Meet Christian", d: "Know who you're learning from, and why he tells the real story.", href: "/about", cta: "Read his story" },
            { t: "Read the book", d: "Behind the Business Dream: a reality check built on homegrown models.", href: "/book", cta: "See the book" },
            { t: "Listen every week", d: "The School of Business Makers: lessons from people building in Africa.", href: "/watch", cta: "Start listening" },
            { t: "Join the Launchpad", d: "Test your idea, shape a simple model and leave with a 90-day plan.", href: "/work#programs", cta: "See the program" },
        ],
    },
    {
        id: "building", who: "I'm already building", icon: <g {...ic}><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" /></g>,
        lead: "Your business is running. Now make it one that lasts.",
        stops: [
            { t: "Read the book", d: "What separates the ventures that survive from those that quietly disappear.", href: "/book", cta: "See the book" },
            { t: "Watch 60x Business", d: "Conversations with more than 100 CEOs and leaders across Africa.", href: "/watch", cta: "Watch the shows" },
            { t: "Apply to the Mastermind", d: "A trusted room of ambitious peers, honest feedback and real access.", href: "/work#mastermind", cta: "Apply to join" },
            { t: "Come to the Summit", d: "One day of real talk, real networks and real deals in Kigali.", href: "/summit", cta: "Get notified" },
        ],
    },
    {
        id: "booking", who: "I want Christian at my event", icon: <g {...ic}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" /></g>,
        lead: "Organisers, producers and journalists: everything you need, in order.",
        stops: [
            { t: "Watch the TEDx talk", d: "Changing the narrative about African entrepreneurs.", href: "/summit#speaking", cta: "Watch the talk" },
            { t: "Pick a signature talk", d: "Keynotes, panels, fireside chats, workshops, or moderator and MC.", href: "/summit#speaking", cta: "See the talks" },
            { t: "Grab the press kit", d: "Short and long bios, photos and interview topics.", href: "/press", cta: "Open the press kit" },
            { t: "Send a request", d: "Tell us about your event and we'll come back to you.", href: "/summit#request", cta: "Request Christian" },
        ],
    },
    {
        id: "stories", who: "I'm here for the stories", icon: <g {...ic}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></g>,
        lead: "No plan needed. Start with the conversations and see where they take you.",
        stops: [
            { t: "Pick a show", d: "The podcast, 60x Business, YouTube and G5 Daily, all in one place.", href: "/watch", cta: "Watch and listen" },
            { t: "Meet the host", d: "From mentoring founders to a TEDx stage: Christian's story.", href: "/about", cta: "Read his story" },
            { t: "Read the book", d: "The stories, the failures and the models behind businesses that last.", href: "/book", cta: "See the book" },
            { t: "Get the newsletter", d: "Simple and straight to the point, in your inbox.", cta: "Sign me up" },
        ],
    },
];

const MAP = [
    { t: "Book", d: "Behind the Business Dream", href: "/book" },
    { t: "Watch & Listen", d: "Podcast, TV, YouTube, G5 Daily", href: "/watch" },
    { t: "Join My Universe", d: "Programs, coaching, Mastermind", href: "/work" },
    { t: "Summit", d: "The event, and speaking", href: "/summit" },
    { t: "About", d: "Christian's story", href: "/about" },
    { t: "Press & Media", d: "Bios, photos, topics", href: "/press" },
    { t: "Contact", d: "Send a message", href: "/contact" },
];

export default function StartPage() {
    const [pick, setPick] = useState(0);
    const path = PATHS[pick];

    return (
        <main className="ab st-pg" id="top">
            {/* ===== Hero ===== */}
            <section className="sp-hero">
                <div className="ab-in sp-hero__grid">
                    <div className="sp-hero__copy">
                        <p className="ab-kicker">New here?</p>
                        <h1>Welcome. <em className="u-hand">Start here.</em></h1>
                        <p className="sp-lead">
                            This site has a book, shows, programs and an event. This page shows you the way in,
                            in about a minute.
                        </p>
                        <a className="bk-btn" href="#path">Find my path <span><Arrow color="#fff" /></span></a>
                    </div>

                    {/* the 60-second version */}
                    <ol className="sp-quick" aria-label="The 60-second version">
                        <li>
                            <span>Who</span>
                            <p><b>Christian Kitumaini</b>: founder, investor, mentor, author and TV host, working across Rwanda and Africa.</p>
                        </li>
                        <li>
                            <span>What</span>
                            <p>Practical lessons from <b>real African business stories</b>, not borrowed playbooks.</p>
                        </li>
                        <li>
                            <span>Why</span>
                            <p>The dream matters. <b>The mechanics make it last.</b></p>
                        </li>
                    </ol>
                </div>
            </section>

            {/* ===== Meet ===== */}
            <section className="ab-sec sp-meet">
                <div className="ab-in sp-meet__in">
                    <div className="sp-meet__photo">
                        <Image src="/images/Christian.jpg" alt="Christian Kitumaini" fill sizes="(max-width: 700px) 40vw, 220px" />
                    </div>
                    <div>
                        <p className="ab-kicker">Your host</p>
                        <p className="sp-meet__quote">
                            &ldquo;For years, I&apos;ve built platforms where African entrepreneurs tell their real stories.
                            This site is where I share what I&apos;ve learned, so you can build with your eyes open.&rdquo;
                        </p>
                        <Link className="sp-link" href="/about">Read Christian&apos;s story <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ===== Path picker ===== */}
            <section className="ab-sec ab-tint sp-path" id="path">
                <div className="ab-in">
                    <p className="ab-kicker">Step 1</p>
                    <h2 className="ab-h2">Which one <em>sounds like you?</em></h2>

                    <div className="sp-pick" role="radiogroup" aria-label="Choose what describes you">
                        {PATHS.map((p, i) => (
                            <button
                                key={p.id}
                                type="button"
                                role="radio"
                                aria-checked={pick === i}
                                className="sp-pick__opt"
                                onClick={() => setPick(i)}
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{p.icon}</svg>
                                {p.who}
                            </button>
                        ))}
                    </div>

                    <p className="ab-kicker sp-step2">Step 2 · Follow your path</p>
                    <p className="sp-path__lead" aria-live="polite">{path.lead}</p>

                    <ol key={path.id} className="sp-route">
                        {path.stops.map((s, i) => (
                            <li key={s.t} style={{ "--i": i } as React.CSSProperties}>
                                <span className="sp-route__n" aria-hidden="true">{i + 1}</span>
                                <div className="sp-route__card">
                                    <h3>{s.t}</h3>
                                    <p>{s.d}</p>
                                    {s.href ? (
                                        <Link href={s.href}>{s.cta} <Arrow /></Link>
                                    ) : (
                                        <button type="button" onClick={openNewsletter}>{s.cta} <Arrow /></button>
                                    )}
                                </div>
                            </li>
                        ))}
                        <li className="sp-route__end" aria-hidden="true"><span>You&apos;re a Business Maker</span></li>
                    </ol>
                </div>
            </section>

            {/* ===== Map of the site ===== */}
            <section className="ab-sec">
                <div className="ab-in">
                    <h2 className="ab-h2">Or explore <em>everything</em></h2>
                    <ul className="sp-map">
                        {MAP.map((m, i) => (
                            <li key={m.href}>
                                <Link href={m.href}>
                                    <small>0{i + 1}</small>
                                    <b>{m.t}</b>
                                    <span>{m.d}</span>
                                    <Arrow />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ===== Newsletter ===== */}
            <section className="sp-nl">
                <div className="ab-in sp-nl__in">
                    <div>
                        <h2 className="ab-h2">Not ready to choose?</h2>
                        <p>Get the Business Makers Letter and we&apos;ll bring the best of it to you.</p>
                    </div>
                    <NewsletterButton className="bp-white sp-nl__btn">Get the newsletter <Arrow /></NewsletterButton>
                </div>
            </section>
        </main>
    );
}
