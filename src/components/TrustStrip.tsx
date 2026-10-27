import type { ReactNode } from "react";

type Proof = { lead: string; rest: string };

const PROOFS: Proof[] = [
    { lead: "100+", rest: "CEOs and industry leaders interviewed" },
    { lead: "TEDx", rest: "speaker" },
    { lead: "National TV", rest: "in Rwanda and on Canal+" },
    { lead: "Weekly", rest: "podcast and YouTube" },
];

/* Typeset placeholders. Swap for official SVG logos (next/image) when you have them. */
const TedMark = () => (
    <span className="trust-marquee__ted" aria-label="TEDx">
        TED<span className="trust-marquee__ted-x">x</span>
    </span>
);
const CnbcMark = () => (
    <span className="trust-marquee__cnbc" aria-label="CNBC Africa">
        <span className="trust-marquee__cnbc-main">CNBC</span>
        <span className="trust-marquee__cnbc-sub">africa</span>
    </span>
);

/** One scrolling row. The group is rendered twice so the loop is seamless. */
function Row({
    children,
    seconds,
    reverse = false,
}: {
    children: ReactNode;
    seconds: number;
    reverse?: boolean;
}) {
    const style = { "--tm-duration": `${seconds}s` } as React.CSSProperties;
    return (
        <div className="trust-marquee__row">
            <div
                className={`trust-marquee__track${reverse ? " is-reverse" : ""}`}
                style={style}
            >
                <ul className="trust-marquee__group">{children}</ul>
                <ul className="trust-marquee__group" aria-hidden="true">
                    {children}
                </ul>
            </div>
        </div>
    );
}

const repeat = <T,>(arr: T[], n: number) => Array.from({ length: n }, () => arr).flat();

export default function TrustMarquee() {
    const row1 = repeat(PROOFS, 3);
    const row3 = repeat([...PROOFS].reverse(), 3);

    return (
        <section className="trust-marquee" aria-label="Credentials and media appearances">
            {/* Row 1: proof points, drifting left */}
            <Row seconds={50}>
                {row1.map((p, i) => (
                    <li key={i} className={`trust-marquee__stat${i >= PROOFS.length ? " is-repeat" : ""}`}>
                        <span className="trust-marquee__lead">{p.lead}</span>
                        <span className="trust-marquee__rest">{p.rest}</span>
                        <span className="trust-marquee__dot" aria-hidden="true" />
                    </li>
                ))}
            </Row>

            {/* Row 2: as featured on, drifting right */}
            <Row seconds={38} reverse>
                {repeat([0, 1, 2], 5).map((n, i) => (
                    <li key={i} className={`trust-marquee__brand${i >= 3 ? " is-repeat" : ""}`}>
                        {n === 0 ? (
                            <span className="trust-marquee__label">As featured on</span>
                        ) : n === 1 ? (
                            <TedMark />
                        ) : (
                            <CnbcMark />
                        )}
                    </li>
                ))}
            </Row>

            {/* Row 3: proof points as chips, drifting left, slower */}
            <Row seconds={62}>
                {row3.map((p, i) => (
                    <li key={i} className={`trust-marquee__chip${i >= PROOFS.length ? " is-repeat" : ""}`}>
                        <strong>{p.lead}</strong> {p.rest}
                    </li>
                ))}
            </Row>
        </section>
    );
}