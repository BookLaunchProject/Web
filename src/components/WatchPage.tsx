import Image from "next/image";
import Link from "next/link";

/* Fill these in: links for each platform */
const LINKS = {
    youtubeWatch: "#",      // Watch on YouTube (podcast playlist)
    listen: "#",            // Listen on [platforms]
    highlights: "#",        // 60x Business highlights
    subscribe: "#",         // YouTube channel
    g5: "#",                // G5 Daily website
};

const Arrow = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

const Btn = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link className="bk-btn" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children} <span><Arrow /></span>
    </Link>
);

export default function WatchPage() {
    return (
        <main className="wl" id="top">
            {/* ===== Hero: photo background with white wash ===== */}
            <section className="wl-hero">
                <Image
                    className="wl-hero__bg"
                    src="/images/authorReading.jpg"
                    alt="Business media and podcast illustration"
                    fill
                    priority
                    sizes="100vw"
                />

                <div className="wl-hero__wash" aria-hidden="true" />

                <div className="wl-in wl-hero__in">
                    <div className="wl-hero__copy">
                        <h1>
                            Conversations that build <em>businesses</em>
                        </h1>

                        <p className="wl-hero__text">
                            Learn from the people actually doing it. These platforms put
                            real African business builders in front of you, so you can
                            learn from their wins, their mistakes and their mindset.
                        </p>

                        <nav className="wl-chips" aria-label="Jump to a show">
                            <a href="#showcase">The Podcast</a>
                            <a href="#showcase">60x Business</a>
                            <a href="#showcase">YouTube</a>
                            <a href="#showcase">G5 Daily</a>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="wl-showcase" id="showcase">
                <div className="wl-in wl-showcase__shell">
                    <div className="wl-showcase__intro">
                        <h2>One platform for stories, strategy and the real work behind growth.</h2>
                    </div>

                    <div className="wl-showcase__grid">
                        <article className="wl-feature wl-feature--primary">
                            <div className="wl-feature__topline">
                                <span className="wl-pill">Podcast</span>
                                <span>New episodes every week</span>
                            </div>
                            <h3>The School of <em>Business Makers</em></h3>
                            <p>Weekly conversations with founders, operators and leaders unpacking what really drives momentum, resilience and smart scale.</p>
                            <div className="wl-btns">
                                <Btn href={LINKS.youtubeWatch}>Watch on YouTube</Btn>
                                <Btn href={LINKS.listen}>Listen now</Btn>
                            </div>
                            <div className="wl-visual wl-visual--pod" aria-hidden="true">
                                <span className="wl-live">Stories shaping growth</span>
                                <b>Business makers</b>
                                <small>Strategy • leadership • execution</small>
                            </div>
                        </article>

                        <div className="wl-showcase__stack">
                            <article className="wl-feature wl-feature--tv">
                                <div className="wl-feature__topline">
                                    <span className="wl-pill">TV</span>
                                    <span>Rwanda • Canal+</span>
                                </div>
                                <h3>60x <em>Business</em></h3>
                                <p>Broadcast conversations with CEOs, builders and change-makers shaping the African business landscape.</p>
                                <div className="wl-btns wl-btns--compact"><Btn href={LINKS.highlights}>Watch highlights</Btn></div>
                            </article>

                            <article className="wl-feature wl-feature--yt">
                                <div className="wl-feature__topline">
                                    <span className="wl-pill">YouTube</span>
                                    <span>Weekly drops</span>
                                </div>
                                <h3>You<em>Tube</em></h3>
                                <p>Fresh videos designed to help founders and teams think sharper, act faster and build better companies.</p>
                                <div className="wl-btns wl-btns--compact"><Btn href={LINKS.subscribe}>Subscribe</Btn></div>
                            </article>

                            <article className="wl-feature wl-feature--g5">
                                <div className="wl-feature__topline">
                                    <span className="wl-pill">Media</span>
                                    <span>G5 Daily</span>
                                </div>
                                <h3>G5 <em>Daily</em></h3>
                                <p>A digital storytelling platform sharing an inspiring, modern narrative about African ambition and everyday leadership.</p>
                                <div className="wl-btns wl-btns--compact"><Btn href={LINKS.g5}>Explore</Btn></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}