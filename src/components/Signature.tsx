/** Christian's signature logo: script name plus a red pen swash that draws itself in. */
export default function Signature({ className = "" }: { className?: string }) {
    return (
        <span className={`sig ${className}`}>
            <span className="sig__name">Christian Kitumaini</span>
            <svg className="sig__swash" viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true">
                <path d="M6 20 C 60 9, 150 4, 222 10 S 286 22, 294 8" />
            </svg>
        </span>
    );
}
