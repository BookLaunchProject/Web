import Image from "next/image";
import Link from "next/link";

export default function MeetAuthor() {
    return (
        <section className="meet-author" aria-labelledby="meet-author-title">
            <div className="meet-author__inner">
                <div className="meet-author__media">
                    <Image
                        src="/images/Christian.jpg"
                        alt="Christian Kitumaini"
                        fill
                        sizes="(max-width: 720px) 100vw, 42vw"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                </div>

                <div className="meet-author__content">
                    <p className="meet-author__eyebrow">Meet Christian</p>
                    <h2 id="meet-author-title">The dream matters. The mechanics make it last.</h2>
                    <p>
                        For years, I&apos;ve built platforms where African entrepreneurs tell their real stories:
                        on television, on a podcast, online and on stage. I&apos;ve learned that ambition alone
                        isn&apos;t enough. This site is where I share what I&apos;ve learned, so you can build with
                        your eyes open.
                    </p>
                    <Link className="bk-btn" href="/about">
                        Read my story
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M4 12h15M14 7l5 5-5 5" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
