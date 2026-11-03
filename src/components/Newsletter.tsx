"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Signature from "@/components/Signature";

const OPEN_EVENT = "ck:newsletter";
const STORE_KEY = "ck-newsletter";
const SNOOZE_DAYS = 14;

/** Opens the newsletter popup from anywhere on the site */
export function openNewsletter() {
    window.dispatchEvent(new Event(OPEN_EVENT));
}

export function NewsletterButton({ className = "bk-btn", children }: { className?: string; children: React.ReactNode }) {
    return (
        <button type="button" className={className} onClick={openNewsletter}>
            {children}
        </button>
    );
}

/* Web storage can be unavailable (private mode, blocked storage): treat that as "never seen" */
function readStore(): { at: number; done?: boolean } | null {
    try {
        return JSON.parse(localStorage.getItem(STORE_KEY) ?? "null");
    } catch {
        return null;
    }
}

function writeStore(done = false) {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify({ at: Date.now(), done }));
    } catch {
        /* nothing to remember then */
    }
}

/** The sign-up form, shared by the popup and the home-page panel */
function NewsletterForm({ id, onLink, onDone }: { id: string; onLink?: () => void; onDone: () => void }) {
    return (
        <form
            className="nl__form"
            onSubmit={(e) => {
                e.preventDefault();
                // TODO: send new FormData(e.currentTarget) to your email service (Mailchimp, ConvertKit, ...)
                writeStore(true);
                onDone();
            }}
        >
            <label className="nl__field">
                <span className="sr-only">First name</span>
                <input name="firstName" placeholder="First Name*" required autoComplete="given-name" />
            </label>
            <label className="nl__field">
                <span className="sr-only">Email address</span>
                <input name="email" type="email" placeholder="Email Address*" required autoComplete="email" />
            </label>
            <label className="nl__consent" htmlFor={`${id}-consent`}>
                <input id={`${id}-consent`} type="checkbox" name="consent" required />
                <span>
                    Yes! Sign me up for <b>The Business Makers Letter.</b> In doing so, I agree to the{" "}
                    <Link href="/privacy" onClick={onLink}>Privacy Policy</Link> and <Link href="/terms" onClick={onLink}>Terms of Use</Link>.*
                </span>
            </label>
            <button type="submit" className="nl__go">Sign me up</button>
        </form>
    );
}

/**
 * Home page only: a sign-up panel on the left that is always there, for every visitor on every visit.
 * The close button hides it until the next time the home page loads.
 */
export function NewsletterDock() {
    const [shown, setShown] = useState(false);
    const [done, setDone] = useState(false);
    const [gone, setGone] = useState(false);

    /* slide in just after the page appears */
    useEffect(() => {
        const timer = window.setTimeout(() => setShown(true), 600);
        return () => window.clearTimeout(timer);
    }, []);

    if (gone) return null;

    const close = () => {
        setShown(false);
        setGone(true);
    };

    return (
        <aside
            className={`nl-dock${shown ? " is-shown" : ""}`}
            aria-label="Newsletter sign-up"
            aria-hidden={!shown}
            inert={!shown}
        >
            <button type="button" className="nl__x" aria-label="Close newsletter sign-up" onClick={close}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            {done ? (
                <div className="nl__ok" role="status">
                    <p className="nl-dock__t">You&apos;re in.</p>
                    <p>Look out for the first Business Makers Letter in your inbox.</p>
                    <button type="button" className="nl__go" onClick={close}>Close</button>
                </div>
            ) : (
                <>
                    <p className="nl-dock__t">100+ CEO Conversations.<br />1 Business-Building Newsletter.</p>
                    <p className="nl__sub">Simple and straight to the point. Just like Christian.</p>
                    <NewsletterForm id="nl-dock" onDone={() => setDone(true)} />
                </>
            )}
        </aside>
    );
}

export default function Newsletter() {
    const ref = useRef<HTMLDialogElement>(null);
    const [done, setDone] = useState(false);
    const pathname = usePathname();
    /* the home page has its own panel (NewsletterDock), so the popup only opens there on request */
    const autoOpen = pathname !== "/";

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        const open = () => !dialog.open && dialog.showModal();
        window.addEventListener(OPEN_EVENT, open);

        /* show it once by itself: after 15s or when the reader is halfway down a page,
           unless they subscribed or closed it in the last two weeks */
        const seen = readStore();
        const snoozed = seen && (seen.done || Date.now() - seen.at < SNOOZE_DAYS * 864e5);
        let timer: number | undefined;
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - innerHeight;
            if (max > 0 && scrollY / max > 0.5) auto();
        };
        const auto = () => {
            cleanup();
            if (!document.documentElement.classList.contains("menu-open")) open();
        };
        const cleanup = () => {
            window.clearTimeout(timer);
            window.removeEventListener("scroll", onScroll);
        };
        if (autoOpen && !snoozed) {
            timer = window.setTimeout(auto, 15000);
            window.addEventListener("scroll", onScroll, { passive: true });
        }

        return () => {
            cleanup();
            window.removeEventListener(OPEN_EVENT, open);
        };
    }, [autoOpen]);

    const close = () => ref.current?.close();

    return (
        <dialog
            ref={ref}
            className="nl"
            aria-labelledby="nl-title"
            onClose={() => !done && writeStore()}
            onClick={(e) => e.target === e.currentTarget && close()}
        >
            <div className="nl__box">
                <button type="button" className="nl__x" aria-label="Close" onClick={close}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>

                <Signature className="nl__sig" />

                {done ? (
                    <div className="nl__ok" role="status">
                        <h2 id="nl-title">You&apos;re in.</h2>
                        <p>Look out for the first Business Makers Letter in your inbox.</p>
                        <button type="button" className="nl__go" onClick={close}>Back to the site</button>
                    </div>
                ) : (
                    <>
                        <h2 id="nl-title">100+ CEO Conversations.<br />1 Business-Building Newsletter.</h2>
                        <p className="nl__sub">Simple and straight to the point. Just like Christian.</p>
                        <NewsletterForm id="nl-modal" onLink={close} onDone={() => setDone(true)} />
                    </>
                )}
            </div>
        </dialog>
    );
}
