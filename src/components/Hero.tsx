import Image from "next/image";
import Link from "next/link";

const icon = { viewBox: "0 0 24 24", "aria-hidden": true } as const;

export default function Hero() {
    return (
        <section className="bk-hero" id="top">

            <div className="bk-grid">
                {/* left */}
                <div className="bk-side">
                    <h1>Hi,<br />I&apos;m <em>Christian<br />Kitumaini</em></h1>
                    <p className="bk-role">Author of Behind the Business Dream, Host of The School of Business Makers and 60x Business. Books, podcast, coaching, mastermind and speaking.</p>
                    <Link className="bk-btn" href="https://btbd.imaginewe.rw/" target="_blank" rel="noopener noreferrer">
                        Get the Book
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><path d="M4 12h15M14 7l5 5-5 5" /></svg>
                        </span>
                    </Link>
                </div>

                {/* centre photo */}
                <div className="bk-photo">
                    <Image
                        src="/images/Firefly_RemoveBackground.png"
                        alt="Christian Kitumaini holding his book Behind the Business Dream"
                        fill
                        priority
                        sizes="(max-width: 1000px) 420px, 34vw"
                        style={{ objectFit: "cover", objectPosition: "center bottom" }}
                    />
                </div>

                {/* right */}
                <div className="bk-side bk-right">
                    <small>Founder · Investor · Mentor · TV host</small>
                    <p className="bk-stmt">Most people chase their dreams. Few understand the business behind them.</p>
                    <p>I help a new generation of African entrepreneurs build businesses that last, with practical lessons from real stories, not borrowed playbooks.</p>
                    <Link className="bk-dl" href="/watch">Listen to the Podcast ↓</Link>
                </div>
            </div>
        </section>
    );
}