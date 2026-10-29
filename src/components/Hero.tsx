import Image from "next/image";
import Link from "next/link";
import { RoundBadge } from "@/components/ui";

export default function Hero() {
    return (
        <section className="bk-hero" id="top">
            <Image className="bk-hero__bg" src="/images/Authorbg.jpg" alt="Christian Kitumaini holding Behind the Business Dream" fill preload sizes="100vw" />
            <div className="bk-hero__wash" aria-hidden="true" />

            <div className="bk-hero__in">
                <p className="bk-kick">Founder · Investor · Mentor · TV host</p>

                <h1>
                    Hi, I&apos;m <br />
                    <em className="u-hand">Christian Kitumaini</em>
                </h1>

                <p className="bk-role">
                    Author of <b>Behind the Business Dream</b>. Host of <b>The School of Business Makers</b> and <b>60x Business</b>.
                    Books, podcast, coaching, mastermind and speaking.
                </p>

                <p className="bk-stmt">
                    Most people chase their dreams. <span>Few understand the business behind them.</span>
                </p>
                <p className="bk-sub">
                    I help a new generation of African entrepreneurs build businesses that last, with practical
                    lessons from real stories, not borrowed playbooks.
                </p>

                <div className="bk-actions">
                    <Link className="bk-btn" href="/book">
                        Get the Book
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                                <path d="M4 12h15M14 7l5 5-5 5" />
                            </svg>
                        </span>
                    </Link>
                    <Link className="bk-ghost" href="/watch">Listen to the Podcast</Link>
                </div>
            </div>

            <RoundBadge id="hero-badge" className="bk-hero__badge" href="/book" label="Read about the book" text="BEHIND THE BUSINESS DREAM • READ THE BOOK • " />
        </section>
    );
}
