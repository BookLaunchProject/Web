"use client";

import Image from "next/image";
import { useState } from "react";

type Mode = "program" | "mastermind";
type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea"; required?: boolean };

const Arrow = ({ color = "#fff" }: { color?: string }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

/* Names, durations and formats are proposals: confirm with Christian. */
const PROGRAMS = [
    { n: "01", t: "The Idea-to-Business Launchpad", f: "For aspiring and first-time entrepreneurs.", d: "You'll test your idea, shape a simple business model and leave with a clear plan for your first 90 days.", x: "[Format and duration]" },
    { n: "02", t: "The Scale-Up Strategy Intensive", f: "For founders with a running business who feel stuck.", d: "We'll look hard at your systems, leadership and capital, then build a 12-month roadmap.", x: "[Format and duration]" },
    { n: "03", t: "1:1 Founder Coaching", f: "A personal sounding board.", d: "For the decisions that matter most: your team, your capital and your next move. Limited places.", x: "[Format]" },
    { n: "04", t: "Corporate and Institutional Programs", f: "For banks, foundations, incubators and universities.", d: "Built for those that want to equip entrepreneurs or teams. We design workshops and mentorship cohorts together." },
];

const GET = [
    "A monthly private mastermind session with me and your peers",
    "Hot seats, where the room solves your biggest challenge",
    "A private community for daily exchange [platform]",
    "Closed-door conversations with CEOs and industry leaders",
    "Priority access to the summit, launches and events",
    "Introductions to investors, partners and opportunities",
    "Member-only tools, templates and recordings",
];

const FORMS: Record<Mode, { title: string; button: string; success: string; fields: Field[] }> = {
    program: {
        title: "Apply for a program",
        button: "Submit my application",
        success: "Thank you. I read every application personally. You'll hear from my team within [number] working days.",
        fields: [
            { name: "name", label: "Full name" },
            { name: "email", label: "Email", type: "email" },
            { name: "whatsapp", label: "WhatsApp", type: "tel" },
            { name: "country", label: "Country" },
            { name: "business", label: "Business name and stage" },
            { name: "challenge", label: "Your biggest challenge right now", type: "textarea" },
            { name: "success", label: "What success looks like in 12 months", type: "textarea" },
            { name: "heard", label: "How did you hear about us?", required: false },
        ],
    },
    mastermind: {
        title: "Apply for membership",
        button: "Apply for membership",
        success: "Thank you. We've received your application and will come back to you within [number] working days.",
        fields: [
            { name: "name", label: "Full name" },
            { name: "email", label: "Email", type: "email" },
            { name: "whatsapp", label: "WhatsApp", type: "tel" },
            { name: "role", label: "Business and role" },
            { name: "operating", label: "How long you've been operating" },
            { name: "want", label: "What you want from the room", type: "textarea" },
            { name: "bring", label: "What you can bring to others", type: "textarea" },
        ],
    },
};

function ApplicationForm({ mode }: { mode: Mode }) {
    const [done, setDone] = useState(false);
    const cfg = FORMS[mode];
    if (done) return <p className="wk-ok" role="status">{cfg.success}</p>;
    return (
        <form
            className="wk-form"
            onSubmit={(e) => {
                e.preventDefault();
                // TODO: send new FormData(e.currentTarget) + mode to your API route / email service
                setDone(true);
            }}
        >
            {cfg.fields.map((f) => {
                const area = f.type === "textarea";
                return (
                    <div key={f.name} className={`wk-f${area ? " wk-f--wide" : ""}`}>
                        <label htmlFor={`${mode}-${f.name}`}>{f.label}</label>
                        {area ? (
                            <textarea id={`${mode}-${f.name}`} name={f.name} rows={3} required={f.required !== false} />
                        ) : (
                            <input id={`${mode}-${f.name}`} name={f.name} type={f.type ?? "text"} required={f.required !== false} />
                        )}
                    </div>
                );
            })}
            <button className="bk-btn wk-submit" type="submit">{cfg.button}</button>
        </form>
    );
}

export default function WorkPage() {
    const [mode, setMode] = useState<Mode>("program");

    return (
        <main className="wk" id="top">
            {/* ===== 1. Hero: the photo is the background, a white wash keeps the words readable ===== */}
            <section className="wk-hero">
                <Image className="wk-hero__bg" src="/images/Author.jpg" alt="" fill preload sizes="100vw" />
                <div className="wk-hero__wash" aria-hidden="true" />
                <div className="wk-in wk-hero__in">

                    <h1>Build the business behind your <em>dream</em></h1>
                    <p className="wk-lead">You have the idea and the drive. What you need now is structure, honest feedback and someone who has seen what works and what quietly destroys companies. These programs are built for doing business in Rwanda and across Africa.</p>
                    <div className="wk-row">
                        <a className="bk-btn" href="#apply" onClick={() => setMode("program")}>Apply now <span><Arrow /></span></a>
                        <a className="wk-ghost" href="#mastermind">Join the Mastermind</a>
                    </div>
                </div>
            </section>

            {/* ===== 2. Programs + the Mastermind ===== */}
            <section className="wk-sec" id="programs">
                <div className="wk-in">
                    <p className="wk-kicker">Programs</p>
                    <h2>Pick the room that <em>fits</em> where you are</h2>

                    <div className="wk-cards">
                        {PROGRAMS.map((p) => (
                            <article key={p.n} className="wk-card">

                                <h3>{p.t}</h3>
                                <p className="wk-card__for">{p.f}</p>
                                <p>{p.d}</p>
                                <div className="wk-card__foot">
                                    {p.x ? <em>{p.x}</em> : <span />}
                                    <a href="#apply" onClick={() => setMode("program")}>Apply <Arrow color="#E5383B" /></a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="wk-mm" id="mastermind">
                        <div>
                            <p className="wk-kicker">The Mastermind</p>
                            <h3>The room where serious business makers <em>grow</em></h3>
                            <p>Building a business is lonely. The Business Makers Mastermind puts you in a trusted room with ambitious peers, honest feedback and direct access to me and my network of CEOs, investors and operators. No spectators. No noise. Just people building.</p>
                            <p className="wk-mm__who"><b>Who it is for:</b> Founders, co-founders and senior leaders with a business that is already operating. [Criteria] If you&apos;re still at the idea stage, start with the Launchpad.</p>
                            <a className="bk-btn" href="#apply" onClick={() => setMode("mastermind")}>Apply for membership <span><Arrow /></span></a>
                            <p className="wk-stamp">Seats are limited so every member gets real attention.</p>
                        </div>
                        <div>
                            <p className="wk-mm__h">What you get</p>
                            <ol className="wk-list">
                                {GET.map((g, i) => (
                                    <li key={g}><span>0{i + 1}</span><p>{g}</p></li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 3. Apply ===== */}
            <section className="wk-sec wk-tint" id="apply">
                <div className="wk-in wk-apply">
                    <div>
                        <p className="wk-kicker">How it works</p>
                        <h2>Apply, talk, <em>start building</em></h2>
                        <ol className="wk-steps">
                            <li><span>1</span>Apply</li>
                            <li><span>2</span>A short conversation</li>
                            <li><span>3</span>We match you to the right program, or welcome you to the Mastermind</li>
                            <li><span>4</span>Start building</li>
                        </ol>
                        <p className="wk-muted"><b>Why work with me?</b> I&apos;m an investor, a founder and a mentor to young entrepreneurs across Africa. I&apos;ve interviewed more than 100 CEOs and leaders, and I hold an MBA from Stamford International University. I&apos;ve seen the full cycle: the idea, the failure and the comeback.</p>
                    </div>

                    <div className="wk-formcard">
                        <div className="wk-seg" role="tablist" aria-label="Choose an application">
                            <button role="tab" aria-selected={mode === "program"} className={mode === "program" ? "on" : ""} onClick={() => setMode("program")}>Program</button>
                            <button role="tab" aria-selected={mode === "mastermind"} className={mode === "mastermind" ? "on" : ""} onClick={() => setMode("mastermind")}>Mastermind</button>
                        </div>
                        <h3 className="wk-formcard__t">{FORMS[mode].title}</h3>
                        <ApplicationForm key={mode} mode={mode} />
                    </div>
                </div>
            </section>
        </main>
    );
}