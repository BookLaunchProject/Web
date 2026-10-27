import BookSection from "@/components/BookSection";
import Hero from "@/components/Hero";
import MeetAuthor from "@/components/MeetAuthor";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BookSection />
      <MeetAuthor />
    </>
  );
}