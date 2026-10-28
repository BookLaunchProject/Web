import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bk-hero" id="top">
            <Image className="bk-hero__bg" src="/images/Authorbg.jpg" alt="Christian Kitumaini" fill priority sizes="100vw" />
            <div className="bk-hero__wash" aria-hidden="true" />

            <div className="bk-hero__in">


                <h1>
                    Hi,
                    <br />
                    I&apos;m <em>Christian<br />Kitumaini</em>
                </h1>
                <small className="bk-kick">Founder · Investor · Mentor · TV host</small>

                <p className="bk-role">
                    Author of Behind the Business Dream, Host of The School of Business Makers and 60x Business.
                    Books, podcast, coaching, mastermind and speaking.
                </p>

                <p className="bk-stmt">Most people chase their dreams. Few understand the business behind them.</p>
                <p className="bk-sub">
                    I help a new generation of African entrepreneurs build businesses that last, with practical
                    lessons from real stories, not borrowed playbooks.
                </p>

                <div className="bk-actions">
                    <Link className="bk-btn" href="/book">
                        Get the Book
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M4 12h15M14 7l5 5-5 5" />
                            </svg>
                        </span>
                    </Link>
                    <Link className="bk-ghost" href="/watch">Listen to the Podcast ↓</Link>
                </div>
            </div>
        </section>
    );
}