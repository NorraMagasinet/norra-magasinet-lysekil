import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Kontakt = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          interest: formData.get("interest"),
          message: formData.get("message"),
        },
      });

      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err: any) {
      console.error("Contact form error:", err);
      setError("Något gick fel. Försök igen eller kontakta oss via telefon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-primary">
        <div className="container-narrow section-padding pb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Kontakta oss
          </h1>
          <p className="font-body text-lg text-primary-foreground/85 mt-3 max-w-xl">
            Har du frågor om våra lokaler eller förråd? Hör av dig – vi hjälper dig gärna.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Skicka ett meddelande
              </h2>

              {submitted ? (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Tack för ditt meddelande!</h3>
                  <p className="font-body text-muted-foreground">Vi återkommer till dig så snart vi kan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-1">Namn</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1">E-post</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="din@epost.se"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-1">Telefon (valfritt)</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="070-000 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block font-body text-sm font-medium text-foreground mb-1">Jag är intresserad av</label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                    >
                      <option>Kontor</option>
                      <option>Förråd</option>
                      <option>Både kontor och förråd</option>
                      <option>Övrigt</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-1">Meddelande</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                      placeholder="Beskriv kort vad du söker…"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm font-body">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? <><Loader2 size={18} className="animate-spin" /> Skickar…</> : <>Skicka meddelande <Send size={18} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Kontaktuppgifter
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">Adress</h3>
                    <p className="font-body text-sm text-muted-foreground">Norra Hamnen, Lysekil</p>
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
                    <p className="font-body text-sm text-muted-foreground">Kontakta oss för telefonnummer</p>
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
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="font-body text-sm text-muted-foreground">
                    Norra Hamnen, Lysekil
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Norra+Hamnen+Lysekil"
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

export default Kontakt;
