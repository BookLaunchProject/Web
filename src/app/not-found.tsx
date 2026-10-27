import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <p className="kicker text-red">404</p>
      <h1 className="display mt-4 text-6xl md:text-8xl">This page did not last.</h1>
      <p className="mt-6 text-lg text-muted">
        The mechanics were missing. Go back and pick a real next step.
      </p>
      <div className="mt-8">
        <Button href="/">Home</Button>
      </div>
    </section>
  );
}
