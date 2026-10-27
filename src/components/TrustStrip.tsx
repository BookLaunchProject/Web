import type { CSSProperties, ReactNode } from "react";

type Proof = { lead: string; rest: string };

const PROOFS: Proof[] = [
    { lead: "100+", rest: "CEOs and industry leaders interviewed" },
    { lead: "TEDx", rest: "speaker" },
    { lead: "National TV", rest: "in Rwanda and on Canal+" },
    { lead: "Weekly", rest: "podcast and YouTube" },
];

/* Typeset wordmarks. Swap each for its official SVG logo (next/image) when you have them.
   Confirm the CNBC Africa and Canal+ features before launch. */
const LOGOS: { name: string; node: ReactNode; color: string }[] = [
    { name: "TEDx", color: "#e62b1e", node: <span className="tm-ted">TED<span>x</span></span> },
    { name: "CNBC Africa", color: "#0b4f8a", node: <span className="tm-cnbc">CNBC<span> africa</span></span> },
    { name: "Canal+", color: "#111111", node: <span className="tm-canal">canal+</span> },
    { name: "60x Business", color: "#d62839", node: <span className="tm-60x">60x<span> Business</span></span> },
    { name: "G5 Daily", color: "#b81c2c", node: <span className="tm-g5">G5<span> Daily</span></span> },
    { name: "The School of Business Makers", color: "#8f1418", node: <span className="tm-school">The School of Business Makers</span> },
];

const repeat = <T,>(arr: T[], n: number) => Array.from({ length: n }, () => arr).flat();

/** One scrolling row. The group is rendered twice so the loop is seamless. */
function Row({ children, seconds, reverse = false }: { children: ReactNode; seconds: number; reverse?: boolean }) {
    const style = { "--tm-duration": `${seconds}s` } as CSSProperties;
    return (
        <div className="trust-marquee__row">
            <div className={`trust-marquee__track${reverse ? " is-reverse" : ""}`} style={style}>
                <ul className="trust-marquee__group">{children}</ul>
                <ul className="trust-marquee__group" aria-hidden="true">{children}</ul>
            </div>
        </div>
    );
}

export default function TrustMarquee() {
    return (
        <section className="trust-marquee" aria-label="Credentials and media appearances">
            <p className="trust-marquee__title">As featured on</p>

            <Row seconds={46}>
                {repeat(LOGOS, 2).map((l, i) => (
                    <li key={i} className="trust-marquee__logo" style={{ "--c": l.color } as CSSProperties} aria-label={l.name}>
                        {l.node}
                    </li>
                ))}
            </Row>

            <Row seconds={60} reverse>
                {repeat(PROOFS, 3).map((p, i) => (
                    <li key={i} className="trust-marquee__stat">
                        <b>{p.lead}</b> {p.rest}
                    </li>
                ))}
            </Row>
        </section>
    );
}