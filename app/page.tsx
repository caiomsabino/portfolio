import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-4xl px-6">
        <Hero />
        <About />
      </main>
    </>
  );
}
