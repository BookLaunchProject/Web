"use client";

import Link from "next/link";
import { useState } from "react";

const TOPICS = ["Speaking", "Programs and coaching", "Press and media", "Book orders", "Partnerships", "Something else"];

const SHORTCUTS = [
    { t: "Book Christian to speak", h: "/summit#request" },
    { t: "Apply for a program", h: "/work#apply" },
    { t: "Press kit", h: "/press" },
    { t: "Bulk book orders", h: "/book" },
];

export function ContactSection() {
    const [done, setDone] = useState(false);
    return (
        <section className="ct" id="top">
            <div className="ab-in ct__grid">
                <div>
                    <p className="ab-kicker">Contact</p>
                    <h1>Let&apos;s <em className="u-hand">talk</em></h1>
                    <p className="ct__lead">Speaking, programs, press, book orders and partnerships. Send your message and the right person will reply.</p>
                    <p className="ct__h">Looking for something specific?</p>
                    <ul className="ct__links">
                        {SHORTCUTS.map((s) => (
                            <li key={s.h}><Link href={s.h}>{s.t} <span aria-hidden="true">→</span></Link></li>
                        ))}
                    </ul>
                </div>

                <div className="ct__card">
                    {done ? (
                        <p className="ct__ok" role="status">Thank you. Your message is in, and the right person will reply within [number] working days.</p>
                    ) : (
                        <form
                            className="ct__form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // TODO: send new FormData(e.currentTarget) to your API route / email service
                                setDone(true);
                            }}
                        >
                            <label>Full name<input name="name" required autoComplete="name" /></label>
                            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
                            <label className="ct__wide">What is it about?
                                <select name="topic" required defaultValue="">
                                    <option value="" disabled>Select</option>
                                    {TOPICS.map((t) => (<option key={t}>{t}</option>))}
                                </select>
                            </label>
                            <label className="ct__wide">Your message<textarea name="message" rows={5} required /></label>
                            <button className="bk-btn ct__submit" type="submit">Send message</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
