import type { Metadata } from "next";
import PressPage from "@/components/PressPage";

export const metadata: Metadata = {
    title: { absolute: "Press and Media Kit | Christian Kitumaini" },
    description: "Biography, photos and interview topics for journalists, event organisers and producers.",
};

export default function Page() {
    return <PressPage />;
}
