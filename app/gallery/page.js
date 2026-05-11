import { PageHero, Shell } from "../components";
import { gallery } from "../data";

export default function GalleryPage() {
  return (
    <Shell>
      <PageHero
        partyKey="media"
        eyebrow="Gallery"
        title="Session moments and media coverage."
        copy="A clean gallery page for photos, debate highlights, certificates, committee work, and event reports."
      />
      <section className="gallery-grid" aria-label="Session gallery">
        {gallery.map((item) => (
          <article className="gallery-card" key={item.title}>
            <figure className="gallery-media">
              {item.image ? (
                <img
                  className="gallery-photo"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                />
              ) : (
                <div className="gallery-art" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </figure>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </Shell>
  );
}
