"use client";

import Image from "next/image";
import { useState } from "react";

/* ---- fill these in ---- */
const PARTNER_DECK = "#";      // e.g. "/downloads/partner-deck.pdf"
const TEDX_EMBED = "";         // e.g. "https://www.youtube-nocookie.com/embed/VIDEO_ID" (leave empty to show the placeholder)
const DOWNLOADS = [
    { label: "Speaker one-sheet", href: "#" },
    { label: "Photos", href: "#" },
    { label: "Short and long bio", href: "#" },
];

const Arrow = ({ color = "#fff" }: { color?: string }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea"; required?: boolean };

function Form({ id, fields, button, success }: { id: string; fields: Field[]; button: string; success: string }) {
    const [done, setDone] = useState(false);
    if (done) return <p className="ev-ok" role="status">{success}</p>;
    return (
        <form
            className="ev-form"
            onSubmit={(e) => {
                e.preventDefault();
                // TODO: send new FormData(e.currentTarget) (and `id`) to your API route / email service
                setDone(true);
            }}
        >
            {fields.map((f) => {
                const area = f.type === "textarea";
                return (
                    <div key={f.name} className={`ev-f${area ? " ev-f--wide" : ""}`}>
                        <label htmlFor={`${id}-${f.name}`}>{f.label}</label>
                        {area ? (
                            <textarea id={`${id}-${f.name}`} name={f.name} rows={3} required={f.required !== false} />
                        ) : (
                            <input id={`${id}-${f.name}`} name={f.name} type={f.type ?? "text"} required={f.required !== false} />
                        )}
                    </div>
                );
            })}
            <button className="bk-btn ev-submit" type="submit">{button}</button>
        </form>
    );
}

const EXPECT = [
    "Keynotes and fireside conversations with leaders who have built real businesses",
    "Live podcast and show recordings",
    "Masterclasses on capital, leadership and market access",
    "A startup showcase",
    "Curated networking, so you meet the right people",
];

const TALKS = [
    { t: "Behind the Business Dream", d: "what really separates the ventures that survive from those that disappear" },
    { t: "A New Narrative for African Entrepreneurs", d: "from stories of struggle to stories of impact" },
    { t: "Homegrown Business Models", d: "why imported playbooks fail here and what works instead" },
    { t: "Capital, Leadership and Resilience", d: "the hard truths every founder faces" },
];

const FORMATS = ["Keynotes", "Panels", "Fireside chats", "Workshops", "Moderator and MC"];

const WAITLIST: Field[] = [
    { name: "name", label: "First name" },
    { name: "email", label: "Email", type: "email" },
];

const BOOKING: Field[] = [
    { name: "name", label: "Your name" },
    { name: "org", label: "Organisation" },
    { name: "email", label: "Email", type: "email" },
    { name: "event", label: "Event name and date" },
    { name: "location", label: "Location" },
    { name: "audience", label: "Expected audience" },
    { name: "topic", label: "Topic or theme", type: "textarea" },
    { name: "budget", label: "Budget range", required: false },
];

export default function EventsPage() {
    return (
        <main className="ev" id="top">
            {/* ================= THE SUMMIT ================= */}
            <section className="ev-hero">
                <div className="ev-in ev-hero__grid">
                    <div>
                        <p className="ev-kicker">The Summit · Kigali</p>
                        <h1>One day. Real talk. <em>Real networks.</em></h1>
                        <p className="ev-lead">A gathering of Africa&apos;s builders: founders, investors, policymakers and the next generation of entrepreneurs. Learn what actually works, meet the people who can help, and leave with a plan, not just inspiration.</p>
                        <p className="ev-details">[Date] · [Venue], Kigali</p>
                        <div className="ev-row">
                            {/* When tickets open, change this label to "Get your ticket" and link to the ticket page */}
                            <a className="bk-btn" href="#waitlist">Be first to know <span><Arrow /></span></a>
                            <a className="ev-ghost" href="#speaking">Book Christian to speak</a>
                        </div>
                    </div>

                    <div className="ev-ticket" aria-hidden="true">
                        <div className="ev-ticket__main">
                            <small>Admit one · Kigali</small>
                            <strong>[Summit name]</strong>
                            <p>[Date]</p>
                            <p>[Venue]</p>
                        </div>
                        <div className="ev-ticket__stub"><i /></div>
                    </div>
                </div>
            </section>

            <section className="ev-sec">
                <div className="ev-in">

                    <h2>A day built for <em>doing</em>, not just listening</h2>
                    <ol className="ev-expect">
                        {EXPECT.map((x, i) => (
                            <li key={x}><p>{x}</p></li>
                        ))}
                    </ol>

                    <div className="ev-stage">
                        <div>
                            <p className="ev-kicker">Speakers and agenda</p>
                            <h2>Who&apos;s on <em>stage</em></h2>
                            <p className="ev-muted">Announced soon.</p>
                        </div>
                        <div className="ev-spk" aria-hidden="true">
                            {Array.from({ length: 6 }, (_, i) => (<span key={i}>?</span>))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ev-sec ev-tint" id="waitlist">
                <div className="ev-in ev-two">
                    <div className="ev-card">
                        <p className="ev-kicker">Partners</p>
                        <h2>Partner with <em>us</em></h2>
                        <p className="ev-muted">Put your brand in front of Africa&apos;s next generation of business builders.</p>
                        <div className="ev-logos" aria-hidden="true"><i>Your logo</i><i>Your logo</i><i>Your logo</i></div>
                        <a className="bk-btn" href={PARTNER_DECK} download>Download the partner deck <span><Arrow /></span></a>
                    </div>
                    <div className="ev-card">
                        <p className="ev-kicker">Waitlist</p>
                        <h2>Be first to <em>know</em></h2>
                        <p className="ev-muted">Join the list and you&apos;ll hear about tickets, speakers and early offers before anyone else.</p>
                        <Form id="waitlist" fields={WAITLIST} button="Notify me" success="You're on the list. We'll tell you about tickets, speakers and early offers first." />
                    </div>
                </div>
            </section>

            {/* ================= SPEAKING ================= */}
            <section className="ev-hero2" id="speaking">
                <Image className="ev-hero2__bg" src="/images/Author.jpg" alt="Christian Kitumaini" fill sizes="100vw" />
                <div className="ev-hero2__wash" aria-hidden="true" />
                <div className="ev-in ev-hero2__in">
                    <p className="ev-kicker">Speaking</p>
                    <h1>Changing the narrative about African <em>entrepreneurship</em></h1>
                    <p className="ev-lead">I&apos;ve shared this message on the TEDx stage and in rooms across Rwanda and Africa. I speak with the credibility of an investor and founder, the curiosity of an interviewer and the honesty of someone who has seen both the triumph and the failure.</p>
                    <a className="bk-btn" href="#request">Request Christian <span><Arrow /></span></a>
                </div>
            </section>

            <section className="ev-sec">
                <div className="ev-in">
                    <div className="ev-talk">
                        <div>
                            <p className="ev-kicker">TEDx talk</p>
                            <h2>Watch the <em>talk</em></h2>
                            <p className="ev-muted">Changing the Narrative About African Entrepreneurs, TEDxYouth@Nyarugenge, February 2023.</p>
                        </div>
                        <div className="ev-video">
                            {TEDX_EMBED ? (
                                <iframe src={TEDX_EMBED} title="TEDx talk: Changing the Narrative About African Entrepreneurs" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
                            ) : (
                                <>
                                    <span className="ev-video__play" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                                    <em>[Embed video]</em>
                                </>
                            )}
                        </div>
                    </div>

                    <p className="ev-kicker ev-mt">Signature talks</p>
                    <div className="ev-talks">
                        {TALKS.map((t, i) => (
                            <article key={t.t}>
                                <span>0{i + 1}</span>
                                <h3>{t.t}</h3>
                                <p>{t.d}</p>
                            </article>
                        ))}
                    </div>

                    <p className="ev-kicker ev-mt">Formats</p>
                    <ul className="ev-chips">
                        {FORMATS.map((f) => (<li key={f}>{f}</li>))}
                    </ul>
                </div>
            </section>

            <section className="ev-sec ev-tint" id="request">
                <div className="ev-in ev-two ev-two--book">
                    <div>
                        <p className="ev-kicker">Booking form</p>
                        <h2>Request <em>Christian</em></h2>
                        <p className="ev-muted">Tell me about your event and I&apos;ll come back to you.</p>
                        <p className="ev-dl-h">Downloads</p>
                        <ul className="ev-dl">
                            {DOWNLOADS.map((d) => (
                                <li key={d.label}><a href={d.href} download>{d.label} <Arrow color="#E5383B" /></a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="ev-card ev-card--form">
                        <Form id="booking" fields={BOOKING} button="Send request" success="Thank you. We've received your request and will reply within [number] working days." />
                    </div>
                </div>
            </section>
        </main>
    );
}