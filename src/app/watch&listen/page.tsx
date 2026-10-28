import type { Metadata } from "next";
import WatchPage from "@/components/WatchPage";

export const metadata: Metadata = {
    title: "The School of Business Makers Podcast and 60x Business | Christian Kitumaini",
    description:
        "Weekly conversations with Africa's business builders, a national TV show and a YouTube channel, hosted by Christian Kitumaini.",
};

export default function Page() {
    return <WatchPage />;
}