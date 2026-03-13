import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import buildingImg from "@/assets/building-exterior.jpg";
import heroImg from "@/assets/hero-harbor.jpg";

const OmOss = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16">
        <img src={buildingImg} alt="Norra Magasinet exteriör" className="w-full h-72 md:h-96 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-narrow section-padding pb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Om Norra Magasinet
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            En fastighet med historia och framtid
          </h2>
          <div className="font-body text-muted-foreground leading-relaxed space-y-4">
            <p>
              Norra Magasinet är beläget i Norra Hamnen i Lysekil – en plats med stark koppling
              till havet och västkustens tradition. Fastigheten rymmer både kontorslokaler och
              kallförråd och är öppen för såväl företag som privatpersoner.
            </p>
            <p>
              Vi tror på en enkel och personlig uthyrning. Hos oss möter du en fastighetsägare
              som bryr sig om sina hyresgäster och som värdesätter långsiktiga relationer.
              Flexibilitet och tillgänglighet är hörnstenar i hur vi arbetar.
            </p>
            <p>
              Oavsett om du driver ett litet företag, behöver ett e-handelslager eller söker
              förvaringsutrymme – så finns vi här för att hjälpa dig hitta en lösning som
              passar dina behov.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-gradient section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
            Det här står vi för
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Personligt bemötande", desc: "Vi tror på korta avstånd och enkel kommunikation. Hos oss är du aldrig bara ett kontraktsnummer." },
              { title: "Flexibla lösningar", desc: "Vi anpassar oss efter dina behov och hjälper dig hitta rätt yta – utan krångel." },
              { title: "Lokalt engagemang", desc: "Vi är stolta över att vara en del av Lysekil och Norra Hamnen, och vi bidrar gärna till ett levande område." },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="relative">
        <img src={heroImg} alt="Norra Hamnen Lysekil" className="w-full h-72 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Välkommen till Norra Magasinet
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
            >
              Kontakta oss <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OmOss;
