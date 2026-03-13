import { Link } from "react-router-dom";
import { ArrowRight, Anchor, UtensilsCrossed, TreePine, ShieldCheck } from "lucide-react";
import waterfrontImg from "@/assets/waterfront-promenade.jpg";
import heroImg from "@/assets/hero-harbor.jpg";

const highlights = [
  { icon: Anchor, title: "Marint läge", desc: "Direkt i Norra Hamnen med utsikt över hav, bryggor och båtar." },
  { icon: UtensilsCrossed, title: "Restauranger på nära håll", desc: "Lunchställen och kvällsrestauranger bara ett stenkast bort." },
  { icon: TreePine, title: "Västerhavspromenaden", desc: "Populär promenadväg längs kusten – perfekt för en paus i arbetsdagen." },
  { icon: ShieldCheck, title: "Tryggt & levande", desc: "Ett populärt och välbesökt område som upplevs som tryggt och trivsamt." },
];

const Laget = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16">
        <img src={waterfrontImg} alt="Hamnpromenaden i Lysekil" className="w-full h-72 md:h-96 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-narrow section-padding pb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Läget i Norra Hamnen
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 mt-3 max-w-xl">
              Norra Hamnen är en av Lysekils mest eftertraktade platser – här möts hav, kultur och näringsliv.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            Mer än bara en adress
          </h2>
          <div className="font-body text-muted-foreground leading-relaxed space-y-4">
            <p>
              Norra Magasinet ligger i Norra Hamnen i Lysekil – en plats som för många
              symboliserar det bästa av västkusten. Här varvar du arbete med havsutsikt,
              restaurangbesök och promenader längs Västerhavspromenaden.
            </p>
            <p>
              Området är levande året om och lockar både boende, besökare och företag.
              Det är tryggt, välskött och har en unik atmosfär som gör att kunder och
              medarbetare trivs.
            </p>
            <p>
              Lysekil har goda kommunikationer och Norra Hamnen är lättillgängligt med bil.
              Det gör området intressant inte bara för lokala aktörer, utan även för företag
              från andra delar av Sverige som söker ett kontor i en inspirerande miljö.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-sand-gradient section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
            Det här finns runt hörnet
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <h.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{h.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / location image */}
      <section className="relative">
        <img src={heroImg} alt="Lysekils hamn och kustlinje" className="w-full h-72 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Kom och upplev Norra Hamnen
            </h2>
            <p className="font-body text-primary-foreground/85 max-w-md mx-auto mb-6">
              Boka en visning så visar vi dig runt i fastigheten och området.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors"
            >
              Kontakta oss för visning <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Laget;
