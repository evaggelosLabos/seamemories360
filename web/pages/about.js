import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
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
        <title>About SeaMemories360 | Unique Corfu Experiences at Sea</title>
        <meta
          name="description"
          content="Learn about SeaMemories360, a Corfu experiences brand creating underwater videos, snorkeling memories, underwater selfies, and sea scooter rental moments at sea."
        />
        <link rel="canonical" href="https://www.seamemories360.com/about" />
        <meta property="og:title" content="About SeaMemories360 | Unique Corfu Experiences" />
        <meta
          property="og:description"
          content="Meet the creators behind SeaMemories360, offering unforgettable Corfu experiences through underwater filming, snorkeling memories, and sea scooter rental."
        />
        <meta property="og:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta property="og:url" content="https://www.seamemories360.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About SeaMemories360 | Unique Corfu Experiences" />
        <meta
          name="twitter:description"
          content="A Corfu experiences brand for underwater videos, snorkeling memories, and sea scooter rental at sea."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta
          name="keywords"
          content="corfu experiences, corfu experience, about seamemories360, underwater videographer corfu, underwater filming greece, sea experience corfu, snorkeling memories corfu, underwater selfie creators"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About SeaMemories360',
              url: 'https://www.seamemories360.com/about',
              description:
                'About SeaMemories360, a Corfu experiences brand creating underwater videos, underwater selfies, snorkeling memories, and sea scooter rental moments in Corfu, Greece.',
              publisher: {
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
          About Sea Memories 360
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 720, margin: '0 auto', lineHeight: 1.6, color: '#044a5f', opacity: 0.85 }}>
          We create unique Corfu experiences at sea with underwater filming, snorkeling memories,
          sea scooter rental, and cinematic editing for travelers who want more than ordinary holiday photos.
        </p>
      </section>

      <main style={{ flex: 1, maxWidth: 900, margin: '0 auto', padding: 20, animation: 'fadeInUp 0.8s ease-out' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            padding: 30,
            borderRadius: 18,
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
            lineHeight: 1.7,
            color: '#033b4e',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: 15 }}>Our Mission</h2>
          <p style={{ marginBottom: 20 }}>
            Sea Memories 360 was created to help people capture the magic of the Ionian Sea like never before.
            Whether you are exploring reefs, enjoying a boat day, or looking for an original Corfu experience,
            our work brings your time at sea to life.
          </p>

          <h2 style={{ fontSize: '1.8rem', marginBottom: 15 }}>Who We Are</h2>
          <p style={{ marginBottom: 20 }}>
            We are based in <strong>Corfu, Greece</strong> and combine sea experience, filming, software,
            and AI-enhanced editing to create memories that feel personal, polished, and easy to share.
          </p>

          <h2 style={{ fontSize: '1.8rem', marginBottom: 15 }}>What Makes Us Different</h2>
          <ul style={{ paddingLeft: 18, marginBottom: 10 }}>
            <li>Underwater video experiences in Corfu</li>
            <li>Aqua Marina sea scooter rental</li>
            <li>AI-powered video enhancement and smart editing</li>
            <li>Same-day delivery for unforgettable memories</li>
            <li>QR preview access from boats, hotels, and partners</li>
          </ul>
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
