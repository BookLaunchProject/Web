import type { Metadata } from "next";
import BookPage from "@/components/BookPage";

export const metadata: Metadata = {
    title: { absolute: "Behind the Business Dream by Christian Kitumaini" },
    description:
        "The untold reality of Rwandan and African entrepreneurship. A practical reality check built on homegrown models, not Western playbooks.",
};

export default function Page() {
    return <BookPage />;
}