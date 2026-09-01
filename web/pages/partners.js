import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partners() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #dff2ff, #c8e7ff)',
      }}
    >
      <Head>
        <title>Corfu Experiences Partnerships | Hotels, Boats & Villas</title>
        <meta
          name="description"
          content="Partner with SeaMemories360 to offer guests premium Corfu experiences: underwater videos, snorkeling memories, sea scooter rental, QR bookings, and same-day delivery."
        />
        <link rel="canonical" href="https://www.seamemories360.com/partners" />
        <meta property="og:title" content="Corfu Experiences Partnerships | SeaMemories360" />
        <meta
          property="og:description"
          content="Offer guests unique Corfu experiences at sea: underwater video, snorkeling memories, and sea scooter rental for hotels, boats, villas, marinas, and dive centers."
        />
        <meta property="og:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta property="og:url" content="https://www.seamemories360.com/partners" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corfu Experiences Partnerships | SeaMemories360" />
        <meta
          name="twitter:description"
          content="Offer guests unique Corfu experiences with underwater filming, snorkeling memories, and sea scooter rental."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta
          name="keywords"
          content="corfu experiences partnership, corfu experience partner, corfu hotel partnership, boat rental partnership greece, underwater video partner, corfu tourism partner, sea scooter rental partner, villa partnership corfu, marina partnership corfu"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'SeaMemories360 Corfu Experiences Partnerships',
              url: 'https://www.seamemories360.com/partners',
              description:
                'Partner with SeaMemories360 to offer unique Corfu experiences including underwater video, underwater selfies, snorkeling memories, and sea scooter rental.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'SeaMemories360',
                url: 'https://www.seamemories360.com',
                telephone: '+306945474102',
                areaServed: 'Corfu, Greece',
              },
            }),
          }}
        />
      </Head>

      <Header />

      <section style={{ padding: '100px 20px 60px', textAlign: 'center', animation: 'fadeInHero 1s ease-out' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 20, color: '#024e76' }}>
          Corfu Experiences Partnerships
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 720, margin: '0 auto', lineHeight: 1.6, color: '#044a5f', opacity: 0.85 }}>
          Offer your guests something unforgettable at sea without adding workload to your team.
        </p>
      </section>

      <main style={{ flex: 1, maxWidth: 950, margin: '0 auto', padding: 20, animation: 'fadeInUp 0.8s ease-out' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            padding: 35,
            borderRadius: 18,
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
            lineHeight: 1.7,
            color: '#033b4e',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: 15 }}>Why Partner With Us?</h2>
          <p style={{ marginBottom: 20 }}>
            Sea Memories 360 adds a premium Corfu experience to your property, boat rental, villa,
            marina, or tourism service. Guests discover and book easily, while we handle the experience.
          </p>

          <ul style={{ paddingLeft: 18, marginBottom: 20 }}>
            <li>Zero effort required from your team</li>
            <li>Guests discover and book instantly via onsite QR</li>
            <li>Underwater video, snorkeling memories, and sea scooter rental options</li>
            <li>Same-day video delivery to your guests</li>
            <li>Optional revenue share for each booking</li>
            <li>Ideal for hotels, marinas, boat rentals, villas, and dive centers</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', marginBottom: 15 }}>Let's Build Something Great</h2>
          <p>
            We are currently opening a limited number of partnership slots in Corfu.
            If you want to offer a memorable sea experience to your guests, we would love to talk.
          </p>

          <p style={{ marginTop: 25, fontWeight: 600, fontSize: '1.1rem' }}>
            Email: <a href="mailto:info@seamemories360.com">info@seamemories360.com</a>
          </p>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeInHero {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
