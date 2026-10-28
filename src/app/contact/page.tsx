import type { Metadata } from "next";
import { ContactSection } from "@/components/AboutPage";

export const metadata: Metadata = {
    title: "Contact Christian Kitumaini",
    description:
        "Speaking, programs, press, book orders and partnerships. Send your message and the right person will reply.",
};

export default function Page() {
    return (
        <main className="ab-contact-page">
            <ContactSection />
        </main>
    );
}
