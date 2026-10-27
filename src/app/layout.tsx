import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Fraunces, Hanken_Grotesk } from "next/font/google";

const serif = Fraunces({ subsets: ["latin"], variable: "--serif" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--sans" });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
