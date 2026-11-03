"use client";

import Image from "next/image";
import { useState } from "react";

const Arrow = ({ color = "#fff" }: { color?: string }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

const SHORT_BIO =
    "Christian Kitumaini is a business and financial leader, author, speaker, podcaster and TV host. Founder of G5 Business Makers Group, he has interviewed more than 100 African CEOs and leaders and mentors young entrepreneurs across Rwanda and Africa. His first book is Behind the Business Dream.";

/* The About page story, in the third person */
const LONG_BIO = [
    "Christian Kitumaini is a business and financial leader, speaker, entrepreneur, podcaster and TV host, and the author of Behind the Business Dream. He is passionate about building and growing businesses through technology and innovation.",
    "He has worked in Rwanda and across Africa, mentoring and coaching young entrepreneurs. He founded G5 Business Makers Group, a group of platforms and initiatives that inspire and educate young people through media, mentorship, financial and investment education, and networking. Through them, he promotes a new narrative of young African entrepreneurs building impactful ventures across the continent.",
    "He hosts a weekly business podcast, The School of Business Makers, with weekly content on his YouTube channel. He has also hosted more than 100 CEOs, industry leaders and game changers across Africa on 60x Business, which airs on national television in Rwanda and on Canal+.",
    "He has been featured on TEDx, where he shared his ideas on changing the narrative around African entrepreneurship. He also founded G5 Daily, an online media platform sharing a new narrative about African stories for millennials and Gen Z.",
    "One of his golden rules is to learn something new every day, to become the best version of himself. He holds an MBA from Stamford International University.",
];

const PHOTOS = [
    { src: "/images/Author.jpg", alt: "Christian Kitumaini, portrait in his library" },
    { src: "/images/Authorbg.jpg", alt: "Christian Kitumaini holding Behind the Business Dream" },
    { src: "/images/authorReading.jpg", alt: "Christian Kitumaini reading, black and white" },
    { src: "/images/Christian.jpg", alt: "Christian Kitumaini, seated portrait" },
    { src: "/images/ChristianSpeaking.jpeg", alt: "Christian Kitumaini speaking at a podium" },
];

const TOPICS = [
    "The realities of African entrepreneurship",
    "Why businesses fail, and what makes others last",
    "Capital and funding in Rwanda and across Africa",
    "Building media platforms from scratch",
    "A new narrative for Africa",
];

/* Confirm the CNBC Africa and Canal+ features before launch */
const FEATURES: { name: string; node: React.ReactNode; href?: string }[] = [
    {
        name: "The New Times", node: <span className="tm-nt">The New Times</span>,
        href: "https://www.newtimes.co.rw/article/40062/news/featured/behind-the-business-dream-new-book-unpacks-the-realities-of-entrepreneurship",
    },
    { name: "TEDx", node: <span className="tm-ted">TED<span>x</span></span> },
    { name: "CNBC Africa", node: <span className="tm-cnbc">CNBC<span> africa</span></span> },
    { name: "Canal+", node: <span className="tm-canal">canal+</span> },
];

function CopyBio() {
    const [copied, setCopied] = useState(false);
    return (
        <button
            type="button"
            className="bk-btn pr-btn"
            onClick={async () => {
                try {
                    await navigator.clipboard.writeText(SHORT_BIO);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2200);
                } catch {
                    /* clipboard blocked: the text is still selectable on the page */
                }
            }}
        >
            <span aria-live="polite">{copied ? "Copied" : "Copy short bio"}</span>
            <i aria-hidden="true">{copied ? "✓" : <Arrow />}</i>
        </button>
    );
}

function downloadLongBio() {
    const text = `Christian Kitumaini: biography\n\n${LONG_BIO.join("\n\n")}\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "Christian-Kitumaini-bio.txt" });
    a.click();
    URL.revokeObjectURL(url);
}

export default function PressPage() {
    return (
        <main className="ab pr" id="top">
            {/* ===== Hero ===== */}
            <section className="pr-hero">
                <div className="ab-in pr-hero__grid">
                    <div>
                        <p className="ab-kicker">Press kit</p>
                        <h1>Press and <em className="u-hand">media</em></h1>
                        <p className="pr-lead">Everything you need to write about Christian or invite him to your show, in one place.</p>
                    </div>
                    <nav className="pr-jump" aria-label="On this page">
                        {[["#bio", "Bios"], ["#assets", "Assets"], ["#topics", "Topics"], ["#contact", "Media contact"]].map(([h, l], i) => (
                            <a key={h} href={h}><small>0{i + 1}</small>{l}</a>
                        ))}
                    </nav>
                </div>
            </section>

            {/* ===== Bios ===== */}
            <section className="ab-sec" id="bio">
                <div className="ab-in pr-bios">
                    <article className="pr-card pr-card--short">
                        <p className="ab-kicker">Short bio · about 50 words</p>
                        <p className="pr-short">{SHORT_BIO}</p>
                        <CopyBio />
                    </article>

                    <article className="pr-long">
                        <p className="ab-kicker">Long bio</p>
                        {LONG_BIO.map((p) => (<p key={p.slice(0, 24)}>{p}</p>))}
                        <button type="button" className="ab-ghost" onClick={downloadLongBio}>Download the long bio ↓</button>
                    </article>
                </div>
            </section>

            {/* ===== Assets ===== */}
            <section className="ab-sec ab-tint" id="assets">
                <div className="ab-in">
                    <h2 className="ab-h2">Assets</h2>
                    <div className="pr-assets">
                        <div className="pr-asset pr-asset--photos">
                            <p className="pr-asset__h">High-resolution photos</p>
                            <ul>
                                {PHOTOS.map((p) => (
                                    <li key={p.src}>
                                        <a href={p.src} download aria-label={`Download photo: ${p.alt}`}>
                                            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 30vw, 200px" />
                                            <span aria-hidden="true">↓</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pr-asset">
                            <p className="pr-asset__h">Book cover</p>
                            <a className="pr-cover" href="/images/BookCover.jpg" download aria-label="Download the book cover">
                                <Image src="/images/BookCover.jpg" alt="Behind the Business Dream, book cover" width={180} height={272} />
                                <span aria-hidden="true">↓</span>
                            </a>
                        </div>
                        <div className="pr-asset pr-asset--todo">
                            <p className="pr-asset__h">Logos</p>
                            <p>[to supply]</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Topics + features ===== */}
            <section className="ab-sec" id="topics">
                <div className="ab-in pr-topics">
                    <div>
                        <h2 className="ab-h2">Topics Christian can <em>speak on</em></h2>
                        <ol className="pr-topics__list">
                            {TOPICS.map((t, i) => (<li key={t}><span>0{i + 1}</span>{t}</li>))}
                        </ol>
                    </div>
                    <div className="pr-features">
                        <p className="ab-kicker">Past features</p>
                        <ul>
                            {FEATURES.map((f) => (
                                <li key={f.name} aria-label={f.name}>
                                    {f.href ? <a href={f.href} target="_blank" rel="noopener noreferrer">{f.node} <small>Read the article ↗</small></a> : f.node}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== Media contact ===== */}
            <section className="pr-contact" id="contact">
                <div className="ab-in pr-contact__in">
                    <div>
                        <p className="ab-kicker">Media contact</p>
                        <h2 className="ab-h2">Writing a story or booking a guest?</h2>
                    </div>
                    <dl>
                        <div><dt>Name</dt><dd>[Name]</dd></div>
                        <div><dt>Email</dt><dd>[Email]</dd></div>
                        <div><dt>Phone</dt><dd>[Phone]</dd></div>
                    </dl>
                </div>
            </section>
        </main>
    );
}
