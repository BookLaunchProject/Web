import Image from "next/image";
import Link from "next/link";

const CARDS = [
  { n: "1", title: "What lasts", text: "What truly separates businesses that survive from those that quietly disappear." },
  { n: "2", title: "Capital, here", text: "The hard truths about raising and managing money in Africa’s real conditions." },
  { n: "3", title: "Homegrown models", text: "Leadership and systems built for the ground you are actually standing on." },
];

const STATS = [
  { n: "100+", l: "CEOs interviewed" },
  { n: "Africa", l: "Stories, not playbooks" },
  { n: "Now", l: "A reality check" },
];

const FOR = [
  "Entrepreneurs",
  "Aspiring founders",
  "Early-stage owners",
  "Professionals turning founders",
  "University students",
];

export default function BookSection() {
  return (
    <section className="the-book" id="book" aria-labelledby="the-book-title">
      <div className="the-book__wrap">
        <div className="the-book__blob">
          <Image
            src="/images/authorReading.jpg"
            alt="Christian Kitumaini reading Behind the Business Dream"
            fill
            sizes="(max-width: 700px) 90vw, 440px"
          />
        </div>

        <ol className="the-book__cards">
          {CARDS.map((c) => (
            <li key={c.n}>
              <span>{c.n}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>

        <div className="the-book__copy">
          <h2 id="the-book-title">
            Behind the
            <br />
            <em>Business Dream</em>
          </h2>
          <p className="the-book__lede">
            This is not another theory-heavy business book. It is a reality check.
            I&apos;ve sat across from more than 100 CEOs and leaders in Africa, and
            I&apos;ve seen what builds enduring companies and what quietly destroys
            them. In these pages, I share the stories, the failures and the
            homegrown models that separate ventures that survive from those that
            disappear.
          </p>

          <dl className="the-book__stats">
            {STATS.map((s) => (
              <div key={s.l}>
                <dt>{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>

          <div className="the-book__actions">
            <Link className="bk-btn" href="https://btbd.imaginewe.rw/" target="_blank" rel="noopener noreferrer">
              Get the Book
              <span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 12h15M14 7l5 5-5 5" />
                </svg>
              </span>
            </Link>
            <a className="bk-dl" href="#book-inside">Read more</a>
          </div>
        </div>
      </div>

      <div className="the-book__for" id="book-inside">
        <p className="the-book__kicker">Written for</p>
        <ul>
          {FOR.map((who) => (
            <li key={who}>{who}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}