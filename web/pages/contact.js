import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data?.message || 'Sent. We’ll get back soon.');
      setForm({name:'', email:'', message:''});
    } catch {
      setStatus('Error. Please try again.');
    }
  }

  return (
    <>
      {/* 🔵 SEO HEAD TAGS */}
      <Head>
        <title>Contact SeaMemories360 | Underwater Filming in Corfu</title>
        <meta
          name="description"
          content="Contact SeaMemories360 to book underwater videos, underwater selfies, snorkeling video sessions, or partnerships in Corfu. Get in touch today."
        />
        <link rel="canonical" href="https://www.seamemories360.com/contact" />

        {/* SOCIAL / OG */}
        <meta property="og:title" content="Contact SeaMemories360 | Underwater Filming in Corfu" />
        <meta
          property="og:description"
          content="Reach out to SeaMemories360 for underwater filming, selfie experiences, partnerships, or general inquiries. Based in Corfu, Greece."
        />
        <meta property="og:image" content="https://www.seamemories360.com/og-image.jpg" />
        <meta property="og:url" content="https://www.seamemories360.com/contact" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SeaMemories360 | Underwater Filming Corfu" />
        <meta
          name="twitter:description"
          content="Contact SeaMemories360 for underwater videography, snorkeling video shoots, and underwater selfie sessions in Corfu."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/og-image.jpg" />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="contact underwater videographer corfu, contact seamemories360, underwater video greece, underwater selfie booking, snorkeling video corfu"
        />

        {/* JSON-LD STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact SeaMemories360",
              "url": "https://www.seamemories360.com/contact",
              "description":
                "Contact page for SeaMemories360 — underwater videos and underwater selfies in Corfu.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "info@seamemories360.com"
              },
              "publisher": {
                "@type": "Person",
                "name": "SeaMemories360",
                "jobTitle": "Underwater Videographer",
                "url": "https://www.seamemories360.com"
              }
            })
          }}
        />
      </Head>

      <Header />

      <main style={{maxWidth:700, margin:'0 auto', padding:'40px 20px'}}>
        <h1>Contact</h1>

        <form onSubmit={submit} style={{display:'grid', gap:12}}>
          <input
            placeholder="Name"
            required
            value={form.name}
            onChange={e=>setForm({...form, name:e.target.value})}
            style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}}
          />

          <input
            placeholder="Email"
            type="email"
            required
            value={form.email}
            onChange={e=>setForm({...form, email:e.target.value})}
            style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}}
          />

          <textarea
            placeholder="Message"
            rows={5}
            required
            value={form.message}
            onChange={e=>setForm({...form, message:e.target.value})}
            style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}}
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
            Send
          </button>
        </form>

        {status && <p style={{marginTop:10}}>{status}</p>}
      </main>

      <Footer />
    </>
  );
}
