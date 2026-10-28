import type { Metadata } from "next";
import EventsPage from "@/components/EventsPage";

export const metadata: Metadata = {
    title: "The Summit and Speaking | Kigali | Christian Kitumaini",
    description:
        "A day of real talk, real networks and real deals for African founders, investors and leaders. Plus TEDx speaker and TV host Christian Kitumaini, available for keynotes and events.",
};

export default function Page() {
    return <EventsPage />;
}