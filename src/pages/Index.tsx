import { useState, FormEvent } from "react";
import { MapPin, Clock, Car, Warehouse, ArrowRight, Send, CheckCircle, Ruler, Building2, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/hero-harbor.jpg";
import buildingImg from "@/assets/building-exterior.jpg";
import officeImg from "@/assets/office-interior.jpg";
import storageImg from "@/assets/storage-units.jpg";
import storageDetailImg from "@/assets/storage-detail.jpg";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero – Bild A: hamnvy/översikt */}
      <section id="start" className="relative min-h-[90vh] flex items-center">
        <img
          src={heroImg}
          alt="Norra Hamnen i Lysekil med färgglada sjöbodar, fiskebåtar och havet i bakgrunden"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Lokaler &amp; förråd i hjärtat av Lysekil
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 mb-8 animate-fade-up animation-delay-200 leading-relaxed">
              Norra Magasinet erbjuder kontorslokaler, verksamhetslokaler, garage och kallförråd
              i Norra Hamnen – ett av Lysekils mest attraktiva och levande lägen.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
              <a
                href="#lokaler"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
              >
                Se våra lokaler <ArrowRight size={18} />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Om Norra Magasinet – Bild B: exteriör */}
      <section id="om" className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
                Om Norra Magasinet
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                En fastighet med historia och framtid
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Norra Magasinet ligger på Norra Hamngatan 6 i Lysekil, mitt i det populära
                  hamnområdet. Fastigheten rymmer kontorslokaler, verksamhetslokaler, garage
                  och kallförråd – öppet för både företag och privatpersoner.
                </p>
                <p>
                  Vi tror på en enkel och personlig uthyrning. Hos oss möter du en
                  fastighetsägare som bryr sig om sina hyresgäster och som värdesätter
                  långsiktiga relationer. Flexibilitet och tillgänglighet är hörnstenar
                  i hur vi arbetar.
                </p>
              </div>
            </div>
            <img
              src={buildingImg}
              alt="Norra Magasinets fasad sedd från Norra Hamngatan i Lysekil"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lokaler & förråd – Bilder C + D */}
      <section id="lokaler" className="bg-sand-gradient section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Lokaler &amp; förråd
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Ytor för alla behov
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Oavsett om du söker kontorslokaler i Lysekil, verksamhetslokaler, garage
              eller vill hyra förråd i Lysekil – vi har flexibla ytor som anpassas
              efter ditt behov.
            </p>
          </div>

          {/* Kontorslokaler */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Kontorslokaler
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Våra kontorslokaler i Norra Hamnen är cirka 70 kvm och passar dig
                som driver ett mindre företag eller behöver en inspirerande arbetsplats
                med centralt läge och närhet till havet.
              </p>
              <ul className="space-y-2 mb-4">
                {["Ca 70 kvm", "Centralt läge i Norra Hamnen", "Västerläge med marina omgivningar", "Tillgång dygnet runt"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={officeImg}
              alt="Ljus kontorslokal med fönster mot havet i Norra Magasinet, Lysekil"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
            />
          </div>

          {/* Verksamhetslokaler & Garage */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src={storageImg}
              alt="Rymlig verksamhetslokal i markplan i Norra Magasinet"
              className="rounded-lg shadow-lg w-full h-72 object-cover md:order-1 order-2"
            />
            <div className="md:order-2 order-1">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Verksamhetslokaler &amp; garage
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Vi erbjuder verksamhetslokaler i Lysekil på 40–150 kvm – perfekta
                för hantverk, lager eller annan verksamhet. Garage finns i storlekarna
                ca 150 kvm samt 25 kvm.
              </p>
              <ul className="space-y-2 mb-4">
                {["Verksamhetslokaler 40–150 kvm", "Garage ca 150 kvm + 25 kvm", "Lastmöjligheter i markplan", "Passar hantverk, lager och e-handel"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kallförråd */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Kallförråd
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Behöver du extra utrymme? Våra kallförråd varierar från 15 till 70 kvm
                och passar allt från säsongsförvaring till e-handelslager. Du har tillgång
                dygnet runt, året om.
              </p>
              <ul className="space-y-2 mb-4">
                {["15–70 kvm", "Säker förvaring", "Smidigt att flytta in och ut", "Tillgång 24/7"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={storageDetailImg}
              alt="Organiserat kallförråd med god belysning i Norra Magasinet"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fördelar & tillgänglighet */}
      <section id="fordelar" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fördelar &amp; tillgänglighet
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Allt du behöver för ditt företag eller dina förvaringsbehov, i ett levande
              och tryggt hamnområde.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Car, title: "Kommunal parkering", desc: "Parkeringsplatser nära fastigheten gör det enkelt att ta sig hit." },
              { icon: Warehouse, title: "Last i markplan", desc: "Lastmöjligheter direkt i markplan – smidigt för gods och inventarier." },
              { icon: Clock, title: "Tillgång 24/7", desc: "Kom och gå precis när det passar dig, dygnet runt, årets alla dagar." },
              { icon: Building2, title: "Centralt läge", desc: "Mitt i Norra Hamnen med närhet till allt – men observera att hiss saknas." },
            ].map((f) => (
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

      {/* Läget i Norra Hamnen – Bild A */}
      <section id="laget" className="relative">
        <img
          src={heroImg}
          alt="Panoramautsikt över Norra Hamnen i Lysekil med bryggor och havet"
          className="w-full h-96 object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Läget i Norra Hamnen
            </h2>
            <p className="font-body text-primary-foreground/85 leading-relaxed mb-3">
              Norra Hamnen är ett av Lysekils mest populära och expansiva områden.
              Med västerläge, marina miljöer och närhet till restauranger, bryggor,
              båtplatser och Västerhavspromenaden erbjuder området en unik blandning
              av arbete och livskvalitet.
            </p>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Norra Magasinet ligger på Norra Hamngatan 6 – centralt, tryggt och
              lättillgängligt för både lokala aktörer och företag från övriga Sverige.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="section-padding bg-sand-gradient">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kontakta oss
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Intresserad av en lokal eller ett förråd? Hör av dig så berättar vi mer
              och hjälper dig hitta rätt yta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* Formulär */}
            <div>
              {submitted ? (
                <div
                  className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Tack!
                  </h3>
                  <p className="font-body text-muted-foreground mb-2">
                    Vi har tagit emot din förfrågan och återkommer så snart vi kan.
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    Vill du nå oss direkt? Ring oss på telefon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-1">
                      Namn
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="din@epost.se"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-1">
                      Telefon (valfritt)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="070-000 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block font-body text-sm font-medium text-foreground mb-1">
                      Jag är intresserad av
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                    >
                      <option value="kontor">Kontor</option>
                      <option value="verksamhetslokal">Verksamhetslokal</option>
                      <option value="garage">Garage</option>
                      <option value="forrad">Förråd</option>
                      <option value="ovrigt">Övrigt</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-1">
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                      placeholder="Beskriv kort vad du söker…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2"
                  >
                    Skicka meddelande <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Kontaktinfo */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Adress</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Norra Hamngatan 6<br />453 30 Lysekil
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">E-post</h3>
                  <p className="font-body text-sm text-muted-foreground">jannerag64@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Telefon</h3>
                  <p className="font-body text-sm text-muted-foreground">070-621 02 29</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Tillgång</h3>
                  <p className="font-body text-sm text-muted-foreground">Hyresgäster har tillgång dygnet runt, 24/7</p>
                </div>
              </div>

              {/* Karta */}
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center mt-4">
                <div className="text-center">
                  <MapPin size={28} className="text-muted-foreground mx-auto mb-2" />
                  <p className="font-body text-sm text-muted-foreground">Norra Hamngatan 6, Lysekil</p>
                  <a
                    href="https://www.google.com/maps/search/Norra+Hamngatan+6+Lysekil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    Visa på Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
