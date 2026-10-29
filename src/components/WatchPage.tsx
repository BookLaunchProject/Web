import Image from "next/image";
import ShowsGuide from "@/components/ShowsGuide";

/* Fill these in: links for each platform */
const LINKS = {
    youtubeWatch: "#",      // Watch on YouTube (podcast playlist)
    listen: "#",            // Listen on [platforms]
    highlights: "#",        // 60x Business highlights
    subscribe: "#",         // YouTube channel
    g5: "#",                // G5 Daily website
};

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
                    preload
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

            <ShowsGuide links={LINKS} />
        </main>
    );
}