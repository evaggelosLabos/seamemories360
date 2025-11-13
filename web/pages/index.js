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
      <Header />
      <HeroSection />

      <section style={{padding:'40px 20px', maxWidth:1200, margin:'0 auto'}}>
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
            value={email} onChange={e=>setEmail(e.target.value)}
            style={{padding:'12px', borderRadius:8, border:'1px solid #ddd'}}
          />
          <button style={{padding:'12px 18px', borderRadius:8, border:'none', background:'#0ea5e9', color:'#fff', cursor:'pointer'}}>
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
