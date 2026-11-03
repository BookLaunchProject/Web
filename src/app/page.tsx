import BookSection from "@/components/BookSection";
import Hero from "@/components/Hero";
import { Episodes, NextSteps, Testimonials } from "@/components/Homelower";
import MeetAuthor from "@/components/MeetAuthor";
import { NewsletterDock } from "@/components/Newsletter";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BookSection />
      <MeetAuthor />
      <NextSteps />
      <Testimonials />
      <Episodes />
      <NewsletterDock />
    </>
  );
}