import type { Metadata } from "next";
import WorkPage from "@/components/WorkWithChristian";

export const metadata: Metadata = {
    title: { absolute: "Business Coaching, Mentorship and Mastermind | Christian Kitumaini" },
    description:
        "Coaching and mentorship for African founders, from idea to scale, plus an exclusive application-only mastermind. Apply with Christian Kitumaini.",
};

export default function Page() {
    return <WorkPage />;
}