import Image from "next/image";
import Link from "next/link";

const icon = { viewBox: "0 0 24 24", "aria-hidden": true } as const;

export default function Hero() {
    return (
        <section className="bk-hero" id="top">
            <div className="bk-deco" aria-hidden="true"><b className="a" /><b className="b" /><b className="c" /></div>

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

            {/* bottom row */}
            <div className="bk-foot">
                <div className="bk-foot-in">
                    <div className="bk-soc">
                        <a href="#" aria-label="LinkedIn"><svg {...icon}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v6M8 7.5v.01M12 16v-6M12 12.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16" /></svg></a>
                        <a href="#" aria-label="Instagram"><svg {...icon}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".5" /></svg></a>
                        <a href="#" aria-label="YouTube"><svg {...icon}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" /></svg></a>
                    </div>
                    <div className="bk-yt"><i />youtube.com/[channel]</div>
                    <Link className="bk-chat" href="/contact">
                        Let&apos;s Chat
                        <span className="bub">
                            <svg {...icon}><path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><circle cx="8" cy="10" r="1.3" /><circle cx="12" cy="10" r="1.3" /><circle cx="16" cy="10" r="1.3" /></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}