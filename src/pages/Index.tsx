import { Link } from "react-router-dom";
import { MapPin, Clock, Car, Warehouse, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-harbor.jpg";
import officeImg from "@/assets/office-interior.jpg";
import storageImg from "@/assets/storage-units.jpg";
import waterfrontImg from "@/assets/waterfront-promenade.jpg";

const features = [
  { icon: MapPin, title: "Attraktivt läge", desc: "Norra Hamnen i Lysekil – nära havet, restauranger och Västerhavspromenaden." },
  { icon: Clock, title: "Tillgång 24/7", desc: "Kom och gå precis när det passar dig, dygnet runt, årets alla dagar." },
  { icon: Car, title: "Parkering & last", desc: "Parkeringsplatser och lastmöjligheter direkt i markplan." },
  { icon: Warehouse, title: "Flexibla ytor", desc: "Kontor från 100 kvm och förråd från 15 kvm – vi anpassar efter ditt behov." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <img src={heroImg} alt="Norra Hamnen i Lysekil med färgglada sjöbodar och fiskebåtar" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Kontor & förråd i hjärtat av Lysekil
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 mb-8 animate-fade-up animation-delay-200 leading-relaxed">
              Norra Magasinet erbjuder kontorslokaler och kallförråd i Norra Hamnen – ett av Lysekils mest attraktiva lägen med havsutsikt och marina miljöer.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
              <Link
                to="/lokaler"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
              >
                Se våra lokaler <ArrowRight size={18} />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sand-gradient section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Varför Norra Magasinet?
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Allt du behöver för ditt företag eller dina förvaringsbehov, i ett levande och tryggt hamnområde.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices & Storage preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">Kontorslokaler</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                Ljusa kontor med havskänsla
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Våra kontorslokaler på 100–200 kvm passar företag som söker en inspirerande arbetsmiljö i Lysekil.
                Med västerläge, närhet till vattnet och ett levande hamnkvarter som granne blir vardagen lite extra.
              </p>
              <Link to="/lokaler" className="inline-flex items-center gap-2 font-body font-semibold text-accent hover:text-ocean-deep transition-colors">
                Läs mer om kontoren <ArrowRight size={16} />
              </Link>
            </div>
            <img src={officeImg} alt="Ljus kontorslokal med utsikt över hamnen" className="rounded-lg shadow-lg w-full h-72 object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={storageImg} alt="Organiserade kallförråd i Norra Magasinet" className="rounded-lg shadow-lg w-full h-72 object-cover md:order-1 order-2" />
            <div className="md:order-2 order-1">
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">Kallförråd</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                Förråd i varierande storlekar
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Behöver du extra utrymme? Våra kallförråd, från 15 till 70 kvm, passar allt från säsongsförvaring
                till e-handelslager. Lastmöjligheter i markplan gör det enkelt att komma åt dina saker.
              </p>
              <Link to="/lokaler" className="inline-flex items-center gap-2 font-body font-semibold text-accent hover:text-ocean-deep transition-colors">
                Se tillgängliga förråd <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location teaser */}
      <section className="relative">
        <img src={waterfrontImg} alt="Västerhavspromenaden i Lysekil vid solnedgång" className="w-full h-80 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ett läge utöver det vanliga
            </h2>
            <p className="font-body text-primary-foreground/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Norra Hamnen är ett av Lysekils mest populära områden. Här finns restauranger, bryggor
              och Västerhavspromenaden runt hörnet.
            </p>
            <Link
              to="/laget"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
            >
              Upptäck läget <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand-gradient section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intresserad av en lokal?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Vi hjälper dig gärna att hitta rätt yta – oavsett om det gäller kontor eller förråd.
            Hör av dig så berättar vi mer.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-md hover:bg-ocean-deep transition-colors text-lg"
          >
            Hör av dig <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
