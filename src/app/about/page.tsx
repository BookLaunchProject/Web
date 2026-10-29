import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
    title: { absolute: "About Christian Kitumaini | Founder, Investor, Author and TV Host" },
    description:
        "Learn about Christian Kitumaini, founder of G5 Business Makers Group, host of 60x Business and author of Behind the Business Dream.",
};

export default function Page() {
    return <AboutPage />;
}
