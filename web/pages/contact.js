import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data?.message || "Sent. We'll get back soon.");
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Error. Please try again.');
    }
  }

  return (
    <>
      <Head>
        <title>Contact SeaMemories360 | Book Corfu Experiences at Sea</title>
        <meta
          name="description"
          content="Contact SeaMemories360 to book unique Corfu experiences at sea, including underwater videos, underwater selfies, snorkeling memories, sea scooter rental, and partnerships."
        />
        <link rel="canonical" href="https://www.seamemories360.com/contact" />
        <meta property="og:title" content="Contact SeaMemories360 | Book Corfu Experiences" />
        <meta
          property="og:description"
          content="Reach out to SeaMemories360 for Corfu experiences at sea: underwater filming, snorkeling memories, sea scooter rental, partnerships, or general inquiries."
        />
        <meta property="og:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta property="og:url" content="https://www.seamemories360.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SeaMemories360 | Corfu Experiences" />
        <meta
          name="twitter:description"
          content="Contact SeaMemories360 for underwater video, snorkeling memories, sea scooter rental, and unique Corfu experiences."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta
          name="keywords"
          content="book corfu experience, contact corfu experiences, contact seamemories360, underwater video corfu, sea scooter rental corfu, underwater selfie booking, snorkeling video corfu"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact SeaMemories360',
              url: 'https://www.seamemories360.com/contact',
              description:
                'Contact page for SeaMemories360, offering unique Corfu experiences including underwater videos, underwater selfies, snorkeling memories, and sea scooter rental.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'info@seamemories360.com',
                telephone: '+306945474102',
                areaServed: 'Corfu, Greece',
              },
              publisher: {
                '@type': 'LocalBusiness',
                name: 'SeaMemories360',
                url: 'https://www.seamemories360.com',
              },
            }),
          }}
        />
      </Head>

      <Header />

      <main style={{ maxWidth: 700, margin: '0 auto', padding: '40px 20px' }}>
        <h1>Book Your Corfu Experience</h1>

        <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
          <input
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}
          />

          <input
            placeholder="Email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}
          />

          <textarea
            placeholder="Message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}
          />

          <button
            style={{
              padding: '12px 18px',
              borderRadius: 8,
              border: 'none',
              background: '#0ea5e9',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </form>

        {status && <p style={{ marginTop: 10 }}>{status}</p>}
      </main>

      <Footer />
    </>
  );
}
