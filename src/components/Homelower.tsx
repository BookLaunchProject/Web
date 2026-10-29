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

/* ---------- 2. Testimonials: one slim row. Photo (or initials) left, quote right ---------- */
type Quote = { q: string; n: string; r: string; photo?: string };
const QUOTES: Quote[] = [
    { q: "Africa is lacking in local business narratives which can provide young entrepreneurs with relevant and inspiring information. Since I have known Christian, he is one of the few that is tackling this massive challenge.", n: "Henri Nyakarundi", r: "CEO and Founder, ARED Group" /* , photo: "/images/henri.jpg" */ },
    { q: "His guidance has been key to entrepreneurs and aspiring entrepreneurs.", n: "Kampeta Sayinzonga", r: "CEO, Rwanda Development Bank (BRD Plc)" },
    { q: "Christian manages to break down big ideas and examples into local and practical advice on starting a business in Rwanda. A much needed and appreciated blend.", n: "Dianne Dusaidi", r: "Program Partner, Mastercard Foundation" },
];

export function Testimonials() {
    const [i, setI] = useState(0);
    const cur = QUOTES[i];
    const next = () => setI((v) => (v + 1) % QUOTES.length);
    return (
        <section className="tq" aria-roledescription="carousel" aria-label="What leaders say">
            <div className="tq__in">
                <div key={`a${i}`} className="tq__avatar">
                    {cur.photo ? (
                        <Image src={cur.photo} alt={cur.n} width={96} height={96} />
                    ) : (
                        <span aria-hidden="true">{cur.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                    )}
                </div>
                <figure key={i} className="tq__fig" aria-live="polite">
                    <blockquote>“{cur.q}”</blockquote>
                    <figcaption><b>{cur.n}</b> · {cur.r}</figcaption>
                    <div className="tq__nav">
                        {QUOTES.map((x, j) => (
                            <button key={x.n} className={`tq__seg${j === i ? " on" : ""}`} aria-label={`Show quote from ${x.n}`} aria-current={j === i} onClick={() => setI(j)}>
                                <span onAnimationEnd={j === i ? next : undefined} />
                            </button>
                        ))}
                    </div>
                </figure>
            </div>
        </section>
    );
}

/* ---------- 3. Latest conversations (replace the [placeholders]) ---------- */
const EPS = [
    { n: "01", t: "[Episode title]", g: "[Guest name], [Role, Company]", d: "[00:00]" },
    { n: "02", t: "[Episode title]", g: "[Guest name], [Role, Company]", d: "[00:00]" },
    { n: "03", t: "[Episode title]", g: "[Guest name], [Role, Company]", d: "[00:00]" },
];

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
                    {EPS.map((e) => (
                        <article key={e.n} className="ep__card">
                            <div className="ep__thumb">
                                <span className="ep__tag">EP {e.n}</span>
                                <span className="ep__play" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                                <em>{e.d}</em>
                            </div>
                            <h3>{e.t}</h3>
                            <p>{e.g}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}