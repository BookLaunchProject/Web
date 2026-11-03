import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const serif = Fraunces({ subsets: ["latin"], variable: "--serif", style: ["normal", "italic"] });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--sans" });
/* signature logo */
const sig = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--sig" });

export const metadata: Metadata = {
  metadataBase: new URL("https://christiankitumaini.com"),
  title: {
    default: "Christian Kitumaini | Author, Speaker and Host on African Entrepreneurship",
    template: "%s | Christian Kitumaini",
  },
  description:
    "Author of Behind the Business Dream, host of The School of Business Makers and 60x Business. Books, podcast, coaching, mastermind and speaking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${sig.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Newsletter />
      </body>
    </html>
  );
}
