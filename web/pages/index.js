import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import GalleryGrid from '../components/GalleryGrid';
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
        <title>Underwater Video & Selfie Filming in Corfu | SeaMemories360</title>
        <meta
          name="description"
          content="Professional underwater videos, underwater selfies, and cinematic snorkeling footage in Corfu. SeaMemories360 captures your holiday moments with stunning underwater videography."
        />
        <link rel="canonical" href="https://www.seamemories360.com" />

        {/* ========== OG / SOCIAL ========== */}
        <meta property="og:title" content="SeaMemories360 – Underwater Filming in Corfu" />
        <meta
          property="og:description"
          content="Cinematic underwater videos and underwater selfies captured with professional underwater cameras in Corfu, Greece."
        />
        <meta property="og:image" content="https://www.seamemories360.com/og-image.jpg" />
        <meta property="og:url" content="https://www.seamemories360.com" />
        <meta property="og:type" content="website" />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SeaMemories360 – Underwater Filming in Corfu" />
        <meta
          name="twitter:description"
          content="Underwater videos, underwater selfies, and cinematic snorkeling footage captured in Corfu."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/og-image.jpg" />

        {/* ========== KEYWORDS ========== */}
        <meta
          name="keywords"
          content="underwater video, underwater selfie, underwater filming, underwater videographer, snorkeling video corfu, holiday underwater video, underwater camera corfu, corfu underwater experience"
        />

        {/* ========== JSON-LD PERSON SCHEMA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "SeaMemories360",
              "jobTitle": "Underwater Videographer",
              "description":
                "Creator of underwater videos, underwater selfies, and cinematic snorkeling films in Corfu, Greece.",
              "url": "https://www.seamemories360.com"
            })
          }}
        />
      </Head>

      <Header />
      <HeroSection />

      {/* ========== SEO CONTENT BLOCK (RANKS FAST) ========== */}
      <section style={{padding:'40px 20px', maxWidth:1200, margin:'0 auto'}}>
        <h1 style={{textAlign:'center', marginBottom:20}}>
          Underwater Video & Underwater Selfie Filming in Corfu
        </h1>
        <p style={{textAlign:'center', maxWidth:800, margin:'0 auto', marginBottom:40}}>
          SeaMemories360 specializes in <strong>underwater video</strong>, <strong>underwater selfies</strong>,
          and cinematic <strong>snorkeling experiences</strong> in Corfu. Whether you're swimming, snorkeling,
          or exploring the coastline, we capture your moments with stunning clarity. Perfect for families,
          couples, solo travelers, and sea lovers visiting Greece.
        </p>

        <h2 style={{textAlign:'center', marginBottom:20}}>Why Sea Memories 360?</h2>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
          <FeatureCard title="Cinematic Underwater" text="Stunning 4K underwater visuals captured by pro drones." />
          <FeatureCard title="AI Storytelling" text="Your journey auto-curated into a memory to share." />
          <FeatureCard title="Effortless Booking" text="Scan a QR on boats & hotels to reserve your experience." />
          <FeatureCard title="Made in Corfu" text="Born in Greece, crafted for sea lovers worldwide." />
        </div>
      </section>

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
