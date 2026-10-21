import { Suspense } from "react";
import { Contact } from "@/components/contact";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HouseState } from "@/components/house-state";
import { Intro } from "@/components/intro";
import { Marquee } from "@/components/marquee";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { Verbs } from "@/components/verbs";
import { readMetal, type MetalId } from "@/data/house";

function Site({ metal }: { metal: MetalId }) {
  return (
    <HouseState initialMetal={metal}>
      <a className="skip" href="#portada">
        Saltar al contenido
      </a>
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <Showcase />
        <Verbs />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
    </HouseState>
  );
}

async function Resolved({
  searchParams,
}: {
  searchParams: Promise<{ metal?: string | string[] }>;
}) {
  const params = await searchParams;
  return <Site metal={readMetal(params.metal)} />;
}

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ metal?: string | string[] }>;
}) {
  return (
    <Suspense fallback={<Site metal="oro" />}>
      <Resolved searchParams={searchParams} />
    </Suspense>
  );
}
