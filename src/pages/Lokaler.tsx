import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Clock, Car, KeyRound } from "lucide-react";
import officeImg from "@/assets/office-interior.jpg";
import storageImg from "@/assets/storage-units.jpg";
import buildingImg from "@/assets/building-exterior.jpg";

const Lokaler = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16">
        <img src={buildingImg} alt="Norra Magasinet exteriör med parkering" className="w-full h-72 md:h-96 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-narrow section-padding pb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Lokaler & Förråd
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 mt-3 max-w-xl">
              Kontorslokaler och kallförråd i Norra Hamnen, Lysekil – flexibla ytor för företag och privatpersoner.
            </p>
          </div>
        </div>
      </section>

      {/* Kontorslokaler */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">Kontorslokaler i Lysekil</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                Kontor med karaktär
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Norra Magasinet erbjuder kontorslokaler på cirka 100–200 kvm i ett unikt hamnläge.
                Här sitter du i en inspirerande miljö med västerläge och marina omgivningar – perfekt
                för dig som vill kombinera arbete med livskvalitet.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Lokalerna passar allt från små kontor för enmansföretag till större ytor för team.
                Vi ser gärna till att lösningen anpassas efter just ditt behov.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Ruler size={16} className="text-accent" /> 100–200 kvm
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Clock size={16} className="text-accent" /> Tillgång 24/7
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Car size={16} className="text-accent" /> Parkering
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <KeyRound size={16} className="text-accent" /> Trygg miljö
                </div>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
              >
                Kontakta oss för mer info <ArrowRight size={18} />
              </Link>
            </div>
            <img src={officeImg} alt="Ljus kontorslokal i Norra Magasinet" className="rounded-lg shadow-lg w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Kallförråd */}
      <section className="bg-sand-gradient section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={storageImg} alt="Kallförråd i Norra Magasinet" className="rounded-lg shadow-lg w-full h-80 object-cover md:order-1 order-2" />
            <div className="md:order-2 order-1">
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">Hyra förråd i Lysekil</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                Kallförråd för alla behov
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Våra kallförråd varierar i storlek från 15 till 70 kvm och passar dig som behöver
                extra utrymme – oavsett om det gäller säsongsvaror, verktyg, inventarier eller
                e-handelslager.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Lastmöjligheter direkt i markplan gör det smidigt att flytta in och ut material.
                Du har tillgång till ditt förråd dygnet runt, året om.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Ruler size={16} className="text-accent" /> 15–70 kvm
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Clock size={16} className="text-accent" /> Tillgång 24/7
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Car size={16} className="text-accent" /> Last i markplan
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground">
                  <KeyRound size={16} className="text-accent" /> Säker förvaring
                </div>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
              >
                Hör av dig om förråd <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Praktisk information</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Norra Magasinet ligger i Norra Hamnen i Lysekil. Fastigheten har parkering, lastmöjligheter
            i markplan och tillgång dygnet runt. Observera att det inte finns hiss i byggnaden.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-md hover:bg-ocean-deep transition-colors text-lg"
          >
            Kontakta oss <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Lokaler;
