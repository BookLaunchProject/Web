import Link from "next/link";

export default function NotFound() {
  return (
    <main className="ab nf" id="top">
      <div className="ab-in">
        <p className="ab-kicker">404</p>
        <h1>This page did not <em className="u-hand">last.</em></h1>
        <p>The mechanics were missing. Go back and pick a real next step.</p>
        <Link className="bk-btn" href="/">
          Home
          <span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 12h15M14 7l5 5-5 5" /></svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
