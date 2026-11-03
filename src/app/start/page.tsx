import type { Metadata } from "next";
import StartPage from "@/components/StartPage";

export const metadata: Metadata = {
    title: "New Here? Start Here",
    description:
        "New to Christian Kitumaini? Pick what describes you and follow a short path through the book, the shows, the programs and the Summit.",
};

export default function Page() {
    return <StartPage />;
}
