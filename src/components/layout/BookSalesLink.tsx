import Link from "next/link";

export function BookSalesLink() {
  return (
    <section className="bg-gradient-to-r from-bordeaux to-forest py-16 text-white sm:py-20">
      <div className="page-container text-center">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
          Plateforme de vente de livres
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Vous souhaitez acheter des livres en ligne ? Notre plateforme
          e-commerce est en cours de développement. Revenez bientôt pour
          découvrir notre catalogue.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-bordeaux transition hover:bg-cream"
          >
            Découvrir les types de livres
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur">
            Boutique en ligne — Bientôt disponible
          </span>
        </div>
      </div>
    </section>
  );
}
