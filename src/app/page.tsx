import { Craft } from "@/components/craft";
import { Collections } from "@/components/collections";
import { Hero } from "@/components/hero";
import { House } from "@/components/house";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Statement } from "@/components/statement";
import { Visit } from "@/components/visit";
import { Vitrina } from "@/components/vitrina";

export default function HomePage() {
  return (
    <>
      <div className="loader" aria-hidden="true">
        <div className="loader-ring" />
        <p className="loader-mark">JL</p>
        <p className="loader-label">Joyería López</p>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip" href="#portada">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Collections />
        <Vitrina />
        <Craft />
        <House />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
