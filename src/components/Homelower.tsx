"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties } from "react";

const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

/* ---------- 1. Pick your next step: a staircase. The step you point at lifts and opens ---------- */
const ic = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const STEPS = [
    {
        t: "Watch & Listen", d: "Real conversations with the people building Africa's businesses.", b: "Explore the shows", h: "/watch", c: "#f4a3a5",
        icon: <g {...ic}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></g>
    },
    {
        t: "Work With Me", d: "Coaching and mentorship for founders at every stage.", b: "See the programs", h: "/work", c: "#f08a8c",
        icon: <g {...ic}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6M9 11h6M9 15h4" /></g>
    },
    {
        t: "The Mastermind", d: "A private room for serious business makers.", b: "Apply to join", h: "/work#mastermind", c: "#E5383B",
        icon: <g {...ic}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.3c3 0 6 1.5 6 5.7" /></g>
    },
    {
        t: "The Summit", d: "One day of real talk, real networks and real deals.", b: "Get notified", h: "/summit", c: "#c02a30",
        icon: <g {...ic}><path d="M5 21V4M5 5h12l-2 4 2 4H5" /></g>
    },
    {
        t: "Speaking", d: "Keynotes and workshops that change the narrative.", b: "Book Christian", h: "/summit#speaking", c: "#8F1418",
        icon: <g {...ic}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" /></g>
    },
];

export function NextSteps() {
    const [a, setA] = useState(0);
    return (
        <section className="ns" aria-labelledby="ns-title">
            <div className="ns__in">
                <p className="ns__kicker">Where do you want to start?</p>
                <h2 id="ns-title">Pick your <em>next step</em></h2>
                <ol className="st">
                    {STEPS.map((s, i) => (
                        <li key={s.t} className={`st__row${a === i ? " is-on" : ""}`} style={{ "--i": i, "--c": s.c } as CSSProperties} onMouseEnter={() => setA(i)}>
                            <div className="st__text">
                                <h3>
                                    <button className="st__tab" aria-expanded={a === i} onClick={() => setA(i)} onFocus={() => setA(i)}>
                                        <span className="st__label">STEP 0{i + 1}</span>
                                        <span className="st__name">{s.t}</span>
                                    </button>
                                </h3>
                                <div className="st__more">
                                    <div>
                                        <p>{s.d}</p>
                                        <Link className="st__go" href={s.h}>{s.b} <Arrow /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="st__stage" onClick={() => setA(i)} aria-hidden="true">
                                <svg className="st__icon" viewBox="0 0 24 24">{s.icon}</svg>
                                <svg className="st__slab" viewBox="0 0 320 90">
                                    <polygon className="front" points="6,34 250,44 250,66 6,56" />
                                    <polygon className="side" points="250,44 316,18 316,40 250,66" />
                                    <polygon className="top" points="6,34 72,10 316,18 250,44" />
                                </svg>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

/* ---------- 2. Testimonials: every quote on show at once ---------- */
type Quote = { q: string; n: string; r: string; photo?: string };
const QUOTES: Quote[] = [
    { q: "Africa is lacking in local business narratives which can provide young entrepreneurs with relevant and inspiring information. Since I have known Christian, he is one of the few that is tackling this massive challenge.", n: "Henri Nyakarundi", r: "CEO and Founder, ARED Group", photo: "/images/Henri Nyakarundi.jpeg" },
    { q: "His guidance has been key to entrepreneurs and aspiring entrepreneurs.", n: "Kampeta Sayinzonga", r: "CEO, Rwanda Development Bank (BRD Plc)", photo: "/images/Kampeta Sayinzoga.jpeg" },
    { q: "Christian manages to break down big ideas and examples into local and practical advice on starting a business in Rwanda. A much needed and appreciated blend.", n: "Dianne Dusaidi", r: "Program Partner, Mastercard Foundation", photo: "/images/Diane Dusaidi.jpeg" },
    { q: "Christian doesn’t theorize from a distance. He lives it. Every insight here is earned, not imagined. Every framework has been tested in the messy reality of building a business in Africa.", n: "Eric Kacou", r: "Co-Founder and Managing Partner, Entrepreneurial Solutions Partners", photo: "/images/Eric Kacou.jpeg" },
    { q: "Ever since I have known Christian, he has been very resilient, even when nothing seemed to work. He pushed through, learned the ropes, and used the ropes to reel in opportunity after opportunity.", n: "Georgie Ndirangu", r: "Director of Programs, Africa Leadership and Dialogue Institute (ALADI)", photo: "/images/Goergie Ndirangu.jpeg" },
    { q: "This is a go-to book for entrepreneurs. It talks about the journey, the hardships and the rising", n: "Fiona Kamikazi", r: "CEO of Marca Ltd", photo: "/images/Fiona Kamikazi.jpeg" },
    { q: "Christian has spent years supporting entrepreneurs by creating platforms for them to share their stories and by offering business insights through talks, TV shows, social media, and podcasts. His new book is a natural next step in his journey—one that will impact not just this generation, but future ones as well. It reflects his core values of courage, integrity, sound judgment, and strong leadership, all essential for lasting business success.", n: "Patrick Buchana", r: "CEO of AC Group", photo: "/images/Patrick Buchana-1.jpg" },

];

export function Testimonials() {
    return (
        <section className="tq" aria-labelledby="tq-title">
            <div className="tq__in">
                <div className="tq__head">
                    <p className="ns__kicker">What leaders say</p>
                    <h2 id="tq-title">Trusted by the people <em>building Africa</em></h2>
                </div>
                <div className="tq__grid">
                    {QUOTES.map((x) => (
                        <figure key={x.n} className="tq__card">
                            <blockquote>{x.q}</blockquote>
                            <figcaption>
                                <span className="tq__avatar">
                                    {x.photo ? (
                                        <Image src={x.photo} alt={x.n} width={128} height={128} sizes="64px" />
                                    ) : (
                                        <span aria-hidden="true">{x.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                                    )}
                                </span>
                                <span><b>{x.n}</b>{x.r}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- 3. Latest conversations: the videos we have so far (add new ones to the top) ---------- */
type Episode = { id: string; tag: string; t: string; g: string; d: string; thumb: string; embed: string };
const EPS: Episode[] = [
    {
        id: "tedx", tag: "TEDx", d: "10:04",
        t: "Changing the narrative about African entrepreneurs",
        g: "Christian Kitumaini at TEDxYouth@Nyarugenge",
        thumb: "https://i.ytimg.com/vi/4PYMV12oXs8/maxresdefault.jpg",
        embed: "https://www.youtube-nocookie.com/embed/4PYMV12oXs8?autoplay=1",
    },
    {
        id: "intro", tag: "The book", d: "1:19",
        t: "Why I wrote Behind the Business Dream",
        g: "A message from Christian",
        thumb: "https://i.vimeocdn.com/video/2221385619-bed0a93763b24af6ea544cc9288cc6795f4a77059e7aa69f5785e8b0d65f9ca6-d_1280",
        embed: "https://player.vimeo.com/video/1242978263?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1",
    },
];

/* Shows the thumbnail first and only loads the video player when someone presses play */
function EpisodeCard({ e }: { e: Episode }) {
    const [playing, setPlaying] = useState(false);
    return (
        <article className="ep__card">
            <div className="ep__thumb">
                {playing ? (
                    <iframe
                        src={e.embed}
                        title={e.t}
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ) : (
                    <button type="button" className="ep__start" onClick={() => setPlaying(true)} aria-label={`Play: ${e.t}`}>
                        <Image src={e.thumb} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
                        <span className="ep__tag">{e.tag}</span>
                        <span className="ep__play" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                        <em>{e.d}</em>
                    </button>
                )}
            </div>
            <h3>{e.t}</h3>
            <p>{e.g}</p>
        </article>
    );
}

export function Episodes() {
    return (
        <section className="ep" aria-labelledby="ep-title">
            <div className="ep__in">
                <div className="ep__head">
                    <div>
                        <p className="ep__kicker">Latest episodes</p>
                        <h2 id="ep-title">Latest <em>conversations</em></h2>
                    </div>
                    <Link className="bk-btn" href="/watch">See all episodes <span><Arrow /></span></Link>
                </div>
                <div className="ep__grid">
                    {EPS.map((e) => (<EpisodeCard key={e.id} e={e} />))}
                </div>
            </div>
        </section>
    );
}