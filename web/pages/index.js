import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import GalleryGrid from '../components/GalleryGrid';
import SeaScooterRental from '../components/SeaScooterRental';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function handleJoin(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setStatus(data?.message || 'Thanks for joining!');
      setEmail('');
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <Head>
        {/* ========== PRIMARY SEO ========== */}
        <title>Unique Corfu Experiences | Underwater Videos & Sea Scooter Rental</title>
        <meta
          name="description"
          content="Book a unique Corfu experience with SeaMemories360: underwater video filming, snorkeling memories, underwater selfies, and Aqua Marina sea scooter rental."
        />
        <link rel="canonical" href="https://www.seamemories360.com" />

        {/* ========== OG / SOCIAL ========== */}
        <meta property="og:title" content="Unique Corfu Experiences | SeaMemories360" />
        <meta
          property="og:description"
          content="Underwater videos, snorkeling memories, and sea scooter rental for unforgettable Corfu experiences."
        />
        <meta property="og:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta property="og:url" content="https://www.seamemories360.com" />
        <meta property="og:type" content="website" />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unique Corfu Experiences | SeaMemories360" />
        <meta
          name="twitter:description"
          content="Book unique Corfu experiences: underwater videos, snorkeling memories, and Aqua Marina sea scooter rental."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />

        {/* ========== KEYWORDS ========== */}
        <meta
          name="keywords"
          content="corfu experience, corfu experiences, unique corfu experiences, underwater experience corfu, sea experience corfu, underwater video corfu, snorkeling video corfu, sea scooter rental corfu, aqua marina sea scooter rental, corfu underwater experience"
        />

        {/* ========== JSON-LD PERSON SCHEMA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SeaMemories360",
              "image": "https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png",
              "description":
                "Unique Corfu experiences including underwater videos, underwater selfies, cinematic snorkeling memories, and sea scooter rental in Corfu, Greece.",
              "url": "https://www.seamemories360.com",
              "telephone": "+306945474102",
              "areaServed": "Corfu, Greece",
              "makesOffer": {
                "@type": "Offer",
                "name": "Aqua Marina BlueDrive X Pro sea scooter rental in Corfu",
                "areaServed": "Corfu, Greece",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      <Header />
      <HeroSection />

      {/* ========== SEO CONTENT BLOCK (RANKS FAST) ========== */}
      <section style={{padding:'40px 20px', maxWidth:1200, margin:'0 auto'}}>
        <h1 style={{textAlign:'center', marginBottom:20}}>
          Unique Corfu Experiences: Underwater Videos & Sea Scooter Rental
        </h1>
        <p style={{textAlign:'center', maxWidth:800, margin:'0 auto', marginBottom:40}}>
          SeaMemories360 creates <strong>unique Corfu experiences</strong> at sea with <strong>underwater video</strong>,
          <strong> underwater selfies</strong>, cinematic <strong>snorkeling memories</strong>, and
          <strong> sea scooter rental</strong>. Whether you're swimming, snorkeling, or exploring the coastline,
          we help turn your holiday into something easy to remember and share.
        </p>

        <h2 style={{textAlign:'center', marginBottom:20}}>Why Sea Memories 360?</h2>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
          <FeatureCard title="Cinematic Underwater" text="Stunning 4K underwater visuals captured by pro drones." />
          <FeatureCard title="AI Storytelling" text="Your journey auto-curated into a memory to share." />
          <FeatureCard title="Effortless Booking" text="Scan a QR on boats & hotels to reserve your experience." />
          <FeatureCard title="Made in Corfu" text="Born in Greece, crafted for sea lovers worldwide." />
        </div>
      </section>

      <SeaScooterRental />
      <GalleryGrid />

      <section style={{padding:'40px 20px', maxWidth:600, margin:'0 auto', textAlign:'center'}}>
        <h3>Join the Crew</h3>
        <p>Be first to get early access and launch perks.</p>
        <form onSubmit={handleJoin} style={{display:'grid', gap:12, gridTemplateColumns:'1fr auto'}}>
          <input
            type="email" required placeholder="your@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{padding:'12px', borderRadius:8, border:'1px solid #ddd'}}
          />
          <button
            style={{
              padding:'12px 18px',
              borderRadius:8,
              border:'none',
              background:'#0ea5e9',
              color:'#fff',
              cursor:'pointer'
            }}
          >
            Join
          </button>
        </form>
        {status && <p style={{marginTop:10, fontSize:14}}>{status}</p>}
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}
