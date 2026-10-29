import Image from "next/image";
import Link from "next/link";

const BUY = "https://btbd.imaginewe.rw/";

const Arrow = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

const INSIDE = [
    { t: "Capital", d: "the hard truths about raising it, managing it and losing it" },
    { t: "Leadership", d: "what it takes to lead when the plan stops working" },
    { t: "Resilience", d: "how founders keep going when nothing seems to work" },
    { t: "System realities", d: "the policies, infrastructure and market conditions you actually operate in" },
    { t: "Mindset", d: "the beliefs that help you, and the myths that hurt you" },
    { t: "Market dynamics", d: "who really pays, and why they stay" },
];

const FOR = [
    "Entrepreneurs.",
    "Aspiring founders.",
    "Early-stage business owners.",
    "Professionals moving into entrepreneurship.",
    "University students.",
];

/* Paste the seven reviews exactly as printed in the book's praise pages.
   The first three are the ones already in your website copy: check them against the book. */
const PRAISE = [
    { q: "Africa is lacking in local business narratives which can provide young entrepreneurs with relevant and inspiring information. Since I have known Christian, he is one of the few that is tackling this massive challenge.", n: "Henri Nyakarundi", r: "CEO and Founder, ARED Group" },
    { q: "His guidance has been key to entrepreneurs and aspiring entrepreneurs.", n: "Kampeta Sayinzonga", r: "CEO, Rwanda Development Bank (BRD Plc)" },
    { q: "Christian manages to break down big ideas and examples into local and practical advice on starting a business in Rwanda. A much needed and appreciated blend.", n: "Dianne Dusaidi", r: "Program Partner, Mastercard Foundation" },
    { q: "[Review 4, exactly as printed in the praise pages]", n: "[Name]", r: "[Title, organisation]" },
    { q: "[Review 5, exactly as printed in the praise pages]", n: "[Name]", r: "[Title, organisation]" },
    { q: "[Review 6, exactly as printed in the praise pages]", n: "[Name]", r: "[Title, organisation]" },
    { q: "[Review 7, exactly as printed in the praise pages]", n: "[Name]", r: "[Title, organisation]" },
];

const FAQ = [
    { q: "Where can I get the book?", a: "[Outlets and online link]" },
    { q: "Do you ship outside Rwanda?", a: "[Answer]" },
    { q: "Is there an e-book or audiobook?", a: "[Answer]" },
    { q: "Can I get a signed copy?", a: "[Answer]" },
];

export default function BookPage() {
    return (
        <main className="bp" id="top">
            {/* ===== Hero: photo background, white wash on the text side (same style as the home and Work heroes) ===== */}
            <section className="bp-hero">
                <Image className="bp-hero__bg" src="/images/BookCover.jpg" alt="Christian Kitumaini reading Behind the Business Dream" fill preload sizes="100vw" />
                <div className="bp-hero__wash" aria-hidden="true" />
                <div className="bp-in bp-hero__grid">
                    <div className="bp-hero__copy">
                        <h1>Behind the Business <em className="u-hand">Dream</em></h1>
                        <p className="bp-hero__sub">The Untold Reality of Rwandan and African Entrepreneurship</p>
                        <p className="bp-hero__text">A practical reality check for anyone building a business in Africa.</p>
                        <div className="bp-row">
                            <Link className="bk-btn" href={BUY} target="_blank" rel="noopener noreferrer">Get the Book <span><Arrow /></span></Link>
                            <a className="bp-ghost" href="#intro">▶ Watch Christian&apos;s introduction</a>
                        </div>
                    </div>
                    <div className="bp-hero__book" aria-hidden="true">
                        <Image src="/images/BookCover.jpg" alt="" width={420} height={635} preload />
                    </div>
                </div>
            </section>

            {/* ===== Why this book ===== */}
            <section className="bp-sec">
                <div className="bp-in bp-why">
                    <div>
                        <p className="bp-kicker">Why this book</p>
                        <h2>Not another <em>theory-heavy</em> business book</h2>
                    </div>
                    <div className="bp-why__text">
                        <p className="bp-lead">Most business books are written for another market, then handed to African founders as gospel. This one starts from the ground you&apos;re standing on.</p>
                        <p>I cut through the noise and take apart the imported formulas that ignore Africa&apos;s real business environment. In their place, I share practical, homegrown models built for the realities on the ground, drawn from stories of triumph and failure from Rwanda and across the continent.</p>
                        <p className="bp-kicker bp-for__k">Written for people who are serious about building</p>
                        <ul className="bp-for">
                            {FOR.map((w) => (<li key={w}>{w.replace(/\.$/, "")}</li>))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== What you will find inside ===== */}
            <section className="bp-sec bp-tint">
                <div className="bp-in">
                    <p className="bp-kicker">What you will find inside</p>
                    <h2>What really separates the ventures that <em>last</em></h2>
                    <ol className="bp-grid">
                        {INSIDE.map((x, i) => (
                            <li key={x.t}>

                                <h3>{x.t}</h3>
                                <p>{x.d}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="bp-close">All without sugarcoating the journey.</p>
                </div>
            </section>

            {/* ===== A message from Christian ===== */}
            <section className="bp-sec bp-dark" id="intro">
                <div className="bp-in bp-msg">
                    <div className="bp-video" role="img" aria-label="Video placeholder: Christian's 60-second introduction">
                        <Image src="/images/authorReading.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 55vw" />
                        <span className="bp-video__play" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                        <em>[60-second video]</em>
                    </div>
                    <div>
                        <p className="bp-kicker">A message from Christian</p>
                        <h2>Why I wrote it</h2>
                        <p className="bp-lead">I wrote this book because the dream matters, and so do the mechanics behind it. Watch my short introduction, then join me on the journey.</p>
                    </div>
                </div>
            </section>

            {/* ===== Praise ===== */}
            <section className="bp-sec bp-tint">
                <div className="bp-in">
                    <p className="bp-kicker">Praise</p>
                    <h2>What leaders are <em>saying</em></h2>
                    <div className="bp-praise">
                        {PRAISE.map((p, i) => (
                            <figure key={i}>
                                <blockquote>{p.q}</blockquote>
                                <figcaption><b>{p.n}</b>{p.r}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Launch event ===== */}
            <section className="bp-launch">
                <div className="bp-in bp-launch__in">
                    <div>
                        <p className="bp-kicker">Launch event</p>
                        <h2>Join us at the launch</h2>
                        <p>I&apos;d love you to be there. Come celebrate the book, meet fellow business makers and hear the stories behind it.</p>
                        <p className="bp-stamp">[Date, time, venue]</p>
                    </div>
                    <Link className="bp-white" href="/contact">RSVP <Arrow /></Link>
                </div>
            </section>

            {/* ===== Bulk orders ===== */}
            <section className="bp-sec bp-tint">
                <div className="bp-in bp-bulk">
                    <div>
                        <p className="bp-kicker">Bulk orders</p>
                        <h2>Ordering for a team, school or institution?</h2>
                        <p className="bp-lead">Equip your people with a practical guide to African entrepreneurship. Tell us what you need and we&apos;ll come back to you quickly.</p>
                    </div>
                    <Link className="bk-btn" href="/contact">Request a bulk order <span><Arrow /></span></Link>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="bp-sec">
                <div className="bp-in bp-faq">
                    <h2>Questions, <em>answered</em></h2>
                    <div>
                        {FAQ.map((f) => (
                            <details key={f.q}>
                                <summary>{f.q}</summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}