import Image from "next/image";
import Link from "next/link";
import { RoundBadge } from "@/components/ui";

const Arrow = ({ color = "#fff" }: { color?: string }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
    </svg>
);

const ROLES = ["Founder", "Investor", "Mentor", "Author", "TV host"];

const FACTS = [
    { n: "100+", l: "CEOs and leaders hosted on 60x Business" },
    { n: "TEDx", l: "Speaker on a new narrative for Africa" },
    { n: "Weekly", l: "Podcast and YouTube content" },
    { n: "MBA", l: "Stamford International University" },
];

/* Proposed: Christian to edit */
const BELIEFS = [
    "The dream is important, but the mechanics make it last.",
    "Africa needs its own business stories, told by Africans.",
    "Learn something new every day.",
    "Courage, integrity, sound judgment and strong leadership outlast hype.",
];

const GROUP = [
    { t: "The School of Business Makers", d: "A weekly business podcast, with weekly content on YouTube.", h: "/watch" },
    { t: "60x Business", d: "100+ CEOs and leaders, on national TV in Rwanda and on Canal+.", h: "/watch" },
    { t: "G5 Daily", d: "Online media sharing a new narrative of African stories for millennials and Gen Z.", h: "/watch" },
    { t: "Mentorship and education", d: "Mentoring, coaching, and financial and investment education for young entrepreneurs.", h: "/work" },
    { t: "Networking and community", d: "Bringing business makers together across Rwanda and Africa.", h: "/summit" },
];

export default function AboutPage() {
    return (
        <main className="ab" id="top">
            {/* ===== Hero ===== */}
            <section className="ab-hero">
                <div className="ab-in ab-hero__grid">
                    <div className="ab-hero__copy">

                        <h1>I&apos;m <em className="u-hand">Christian Kitumaini</em></h1>
                        <p className="ab-roles">
                            {ROLES.map((r, i) => (
                                <span key={r} style={{ "--i": i } as React.CSSProperties}>{r}.</span>
                            ))}
                        </p>
                        <div className="ab-row">
                            <a className="bk-btn" href="#story">Read my story <span><Arrow /></span></a>
                            <Link className="ab-ghost" href="/work">Work with me</Link>
                        </div>
                    </div>

                    <div className="ab-hero__media">
                        <div className="ab-arch">
                            <Image src="/images/Author.jpg" alt="Christian Kitumaini in his library" fill preload sizes="(max-width: 760px) 86vw, 40vw" />
                        </div>
                        <RoundBadge id="about-badge" className="ab-hero__badge" href="/book" label="Read about the book" text="AUTHOR • BEHIND THE BUSINESS DREAM • " />
                    </div>
                </div>

                <div className="ab-in">
                    <dl className="ab-facts">
                        {FACTS.map((f) => (
                            <div key={f.n}>
                                <dt>{f.n}</dt>
                                <dd>{f.l}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ===== Story ===== */}
            <section className="ab-sec" id="story">
                <div className="ab-in ab-story">
                    <aside className="ab-story__side">
                        <p className="ab-kicker">My story</p>
                        <h2>Building businesses, and the <em>people</em> behind them</h2>
                        <div className="ab-story__photo">
                            <Image src="/images/ChristianSpeaking.jpeg" alt="Christian Kitumaini speaking at a podium" fill sizes="(max-width: 900px) 70vw, 30vw" />
                        </div>
                    </aside>

                    <div className="ab-story__body">
                        <p className="ab-dropcap">
                            I&apos;m a <b>business and financial leader</b>, speaker, entrepreneur, podcaster and TV host, and I&apos;m the
                            author of <b><i>Behind the Business Dream</i></b>. I&apos;m passionate about building and growing businesses
                            through technology and innovation.
                        </p>
                        <p>
                            I&apos;ve worked in Rwanda and across Africa, mentoring and coaching young entrepreneurs. I founded{" "}
                            <b>G5 Business Makers Group</b>, a group of platforms and initiatives that inspire and educate young people
                            through media, mentorship, financial and investment education, and networking. Through them, I promote{" "}
                            <mark>a new narrative of young African entrepreneurs</mark> building impactful ventures across the continent.
                        </p>
                        <p>
                            I host a weekly business podcast, <b>The School of Business Makers</b>, with weekly content on my YouTube
                            channel. I&apos;ve also hosted <b>more than 100 CEOs</b>, industry leaders and game changers across Africa
                            on <b>60x Business</b>, which airs on national television in Rwanda and on Canal+.
                        </p>
                        <p>
                            I&apos;ve been featured on <b>TEDx</b>, where I shared my ideas on changing the narrative around African
                            entrepreneurship. I also founded <b>G5 Daily</b>, an online media platform sharing a new narrative about
                            African stories for millennials and Gen Z.
                        </p>
                        <p className="ab-story__rule">
                            One of my golden rules is to <mark>learn something new every day</mark>, to become the best version of
                            myself. I hold an <b>MBA from Stamford International University</b>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== What I believe ===== */}
            <section className="ab-sec ab-tint">
                <div className="ab-in">
                    <h2 className="ab-h2">What I <em>believe</em></h2>
                    <ol className="ab-beliefs">
                        {BELIEFS.map((b, i) => (
                            <li key={b}>
                                <span aria-hidden="true">0{i + 1}</span>
                                <p>{b}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ===== The G5 Business Makers Group ===== */}
            <section className="ab-sec ab-g5">
                <div className="ab-in ab-g5__grid">
                    <div className="ab-g5__intro">
                        <p className="ab-kicker">The group</p>
                        <h2 className="ab-h2">The G5 Business <em>Makers</em> Group</h2>
                        <p>Platforms and initiatives that inspire and educate young people through media, mentorship, financial and investment education, and networking.</p>
                        <blockquote className="ab-g5__quote">&ldquo;No one will share our narrative if we don&apos;t start.&rdquo;<cite>From Behind the Business Dream</cite></blockquote>
                        <span className="ab-g5__mark" aria-hidden="true">G5</span>
                    </div>
                    <ul className="ab-g5__list">
                        {GROUP.map((g, i) => (
                            <li key={g.t}>
                                <Link href={g.h}>
                                    <small>0{i + 1}</small>
                                    <span>
                                        <b>{g.t}</b>
                                        <em>{g.d}</em>
                                    </span>
                                    <Arrow color="currentColor" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ===== Pull-quote + closing ===== */}
            <section className="ab-sec ab-quote">
                <div className="ab-in">
                    <figure>
                        <blockquote>
                            Christian has spent years supporting entrepreneurs by creating platforms for them to share their stories
                            and by offering business insights through talks, TV shows, social media and podcasts.
                        </blockquote>
                        <figcaption><b>Patrick Buchana</b>CEO, AC Group</figcaption>
                    </figure>
                    <Link className="bk-btn ab-quote__btn" href="/work">Work with me <span><Arrow /></span></Link>
                </div>
            </section>
        </main>
    );
}
