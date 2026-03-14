import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Norra Magasinet</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Kontorslokaler, verksamhetslokaler, garage och förråd i Norra Hamnen, Lysekil.
              Ett attraktivt läge vid havet med närhet till allt du behöver.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Snabblänkar</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#om", label: "Om Norra Magasinet" },
                { href: "#lokaler", label: "Lokaler & Förråd" },
                { href: "#laget", label: "Läget i Norra Hamnen" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70 font-body">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Norra Hamngatan 6, 453 30 Lysekil</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>Kontakta oss för telefonnummer</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@norramagasinet.se</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50 font-body">
            © {new Date().getFullYear()} Norra Magasinet, Lysekil. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
