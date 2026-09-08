import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const siteUrl = 'https://www.seamemories360.com';
const defaultImage = `${siteUrl}/images/aqua-marina-bluedrive-rental.png`;

export default function ServiceLanding({
  title,
  description,
  canonicalPath,
  keywords,
  eyebrow,
  heading,
  intro,
  imageAlt,
  highlights,
  sections,
  faq,
  whatsappText,
}) {
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const whatsappUrl = `https://wa.me/306945474102?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultImage} />
        <meta name="keywords" content={keywords.join(', ')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: heading,
              description,
              image: defaultImage,
              url: canonicalUrl,
              areaServed: 'Corfu, Greece',
              provider: {
                '@type': 'LocalBusiness',
                name: 'SeaMemories360',
                url: siteUrl,
                telephone: '+306945474102',
                areaServed: 'Corfu, Greece',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </Head>

      <Header />

      <main className="service-page">
        <section className="service-hero">
          <div className="service-hero-copy">
            <p className="service-eyebrow">{eyebrow}</p>
            <h1>{heading}</h1>
            <p>{intro}</p>
            <div className="service-actions">
              <a className="service-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
              <Link className="service-secondary" href="/experiences">
                View all experiences
              </Link>
            </div>
          </div>
          <div className="service-hero-media">
            <Image
              src="/images/aqua-marina-bluedrive-rental.png"
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 520px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className="service-highlights" aria-label="Service highlights">
          {highlights.map((highlight) => (
            <article key={highlight.title}>
              <span>{highlight.label}</span>
              <h2>{highlight.title}</h2>
              <p>{highlight.text}</p>
            </article>
          ))}
        </section>

        <section className="service-content">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </section>

        <section className="service-faq">
          <h2>Questions people ask</h2>
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
