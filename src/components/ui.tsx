import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "red",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: "red" | "ink" | "ghost" | "white";
  type?: "button" | "submit";
}) {
  const cls = `btn btn-${variant}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        <span aria-hidden>→</span>
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}

/** Round sticker with text that slowly spins around an arrow. `id` must be unique on the page. */
export function RoundBadge({
  id,
  text,
  href,
  label,
  className = "",
  core,
}: {
  id: string;
  text: string;
  href: string;
  label: string;
  className?: string;
  /** what sits in the middle; an arrow by default */
  core?: ReactNode;
}) {
  return (
    <Link href={href} className={`rbadge ${className}`} aria-label={label}>
      <svg className="rbadge__ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href={`#${id}`} textLength="486" lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <span className="rbadge__core" aria-hidden="true">
        {core ?? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M7 17 17 7M9 7h8v8" /></svg>}
      </span>
    </Link>
  );
}

export function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`kicker ${light ? "text-white/70" : "text-red"}`}>{children}</p>
  );
}

export function PageHero({
  kicker,
  title,
  children,
  dark = false,
}: {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-line ${
        dark ? "bg-ink text-white" : "bg-paper"
      }`}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 opacity-40 slash" />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Kicker light={dark}>{kicker}</Kicker>
        <h1 className="display mt-5 max-w-5xl text-[14vw] md:text-[7.2rem]">
          {title}
        </h1>
        {children ? (
          <div className={`mt-8 max-w-xl text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Field({
  label,
  name,
  type = "text",
  as,
  options,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea" | "select";
  options?: string[];
  required?: boolean;
}) {
  if (as === "textarea") {
    return (
      <label className="block">
        <span className="kicker text-muted">{label}</span>
        <textarea name={name} required={required} rows={4} className="field mt-1 resize-y" />
      </label>
    );
  }
  if (as === "select" && options) {
    return (
      <label className="block">
        <span className="kicker text-muted">{label}</span>
        <select name={name} required={required} defaultValue="" className="field mt-1">
          <option value="" disabled>
            Select
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    );
  }
  return (
    <label className="block">
      <span className="kicker text-muted">{label}</span>
      <input name={name} type={type} required={required} className="field mt-1" />
    </label>
  );
}
