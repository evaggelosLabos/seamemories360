import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SeaScooterRental from '../components/SeaScooterRental';

// ---------- Right-facing SVG Fish ----------
const FishRight = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" style={{ display: 'inline-block' }}>
    <path
      fill="#6EC6FF"
      d="M41 24c0-6.6-5.4-12-12-12-2.8 0-5.4.9-7.5 2.5L11 12l4.5 7-4.5 7 10.5-2.5C23.6 35.1 27.2 36 29.9 36c6.6 0 12.1-5.4 12.1-12z"
    />
    <circle cx="31.5" cy="21.5" r="2" fill="#000" />
  </svg>
);

const card = {
  background: "rgba(255,255,255,0.7)",
  borderRadius: "18px",
  padding: "25px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  backdropFilter: "blur(6px)",
  width: "100%",
  boxSizing: "border-box",
};

const icon = { fontSize: "2.2rem", marginBottom: "10px" };
const title = { margin: "0 0 10px 0", fontSize: "1.4rem", fontWeight: "600" };
const desc = { margin: "0 0 15px 0", lineHeight: 1.5, color: "#333" };
const miniList = { listStyle: "none", padding: 0, margin: 0, lineHeight: 1.6 };

export default function Experiences() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #dff2ff, #c8e7ff)",
      }}
    >

      {/* SEO HEAD TAGS */}
      <Head>
        <title>Corfu Experiences | Underwater Videos & Sea Scooter Rental</title>
        <meta
          name="description"
          content="Explore unique Corfu experiences at sea: underwater videos, snorkeling memories, underwater selfies, AI highlights, boat-day add-ons, and Aqua Marina sea scooter rental."
        />
        <link rel="canonical" href="https://www.seamemories360.com/experiences" />
        
        {/* SOCIAL PREVIEW */}
        <meta property="og:title" content="Corfu Experiences | Underwater Adventures by SeaMemories360" />
        <meta
          property="og:description"
          content="Discover underwater Corfu experiences with video filming, snorkeling memories, 360-style captures, reef discovery, and sea scooter rental."
        />
        <meta property="og:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />
        <meta property="og:url" content="https://www.seamemories360.com/experiences" />
        <meta property="og:type" content="website" />

        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corfu Experiences | SeaMemories360" />
        <meta
          name="twitter:description"
          content="Unique Corfu experiences at sea: underwater filming, snorkeling videos, underwater selfies, and Aqua Marina sea scooter rental."
        />
        <meta name="twitter:image" content="https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png" />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="corfu experiences, corfu experience, unique corfu experiences, underwater experiences corfu, sea experience corfu, sea scooter rental corfu, aqua marina bluedrive rental, underwater video corfu, underwater selfie corfu, snorkeling video corfu, underwater filming greece"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Corfu Experiences - SeaMemories360",
              "image": "https://www.seamemories360.com/images/aqua-marina-bluedrive-rental.png",
              "url": "https://www.seamemories360.com/experiences",
              "description":
                "Unique Corfu experiences at sea: sea scooter rental, underwater video, underwater selfies, snorkeling memories, 360 video, and AI-edited highlight reels.",
              "about": {
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

      {/* Animated Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${8 + Math.random() * 10}px`,
              height: `${8 + Math.random() * 10}px`,
            }}
          />
        ))}

        <div className="fish swim1" style={{ top: `${10 + Math.random() * 50}%` }}><FishRight /></div>
        <div className="fish swim2" style={{ top: `${20 + Math.random() * 50}%` }}><FishRight /></div>
        <div className="fish swim3" style={{ top: `${15 + Math.random() * 50}%` }}><FishRight /></div>
      </div>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: "2.4rem", marginBottom: 20 }}>Unique Corfu Experiences at Sea</h1>

        <p style={{ fontSize: "1.1rem", marginBottom: 50 }}>
          Dive into underwater Corfu experiences crafted for families, couples, solo adventurers,
          boat days, and sea lovers who want more than ordinary holiday photos.
        </p>

        {/* CARD GRID */}
        <div className="exp-grid" style={{ display: "grid", gap: "30px" }}>

          <div style={card}>
            <div style={icon}>Reef</div>
            <h3 style={title}>Reef Discovery</h3>
            <p style={desc}>Glide over vibrant shallow reefs.</p>
            <ul style={miniList}>
              <li>Reef fish</li>
              <li>Clear coastal water</li>
              <li>Cinematic capture</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>360</div>
            <h3 style={title}>360 Memory</h3>
            <p style={desc}>Immersive VR-ready underwater footage.</p>
            <ul style={miniList}>
              <li>Full sphere</li>
              <li>VR-ready</li>
              <li>Digital delivery</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>AI</div>
            <h3 style={title}>AI Highlight</h3>
            <p style={desc}>AI auto-edits your best moments.</p>
            <ul style={miniList}>
              <li>Smart cuts</li>
              <li>Soundtrack</li>
              <li>Color enhancement</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>GO</div>
            <h3 style={title}>Gesture Mode</h3>
            <p style={desc}>Raise your hand and the drone orbits you.</p>
            <ul style={miniList}>
              <li>Orbit shot</li>
              <li>Auto-framing</li>
              <li>Selfie-perfect</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>Boat</div>
            <h3 style={title}>Boat Day Add-on</h3>
            <p style={desc}>Instant previews during your trip.</p>
            <ul style={miniList}>
              <li>QR preview</li>
              <li>Instant playback</li>
              <li>Same-day delivery</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>SEA</div>
            <h3 style={title}>Sea Scooter Rental</h3>
            <p style={desc}>Rent an Aqua Marina BlueDrive X Pro for your Corfu swim or boat day.</p>
            <ul style={miniList}>
              <li>Aqua Marina sea scooter</li>
              <li>Ideal for snorkeling</li>
              <li>Easy WhatsApp booking</li>
            </ul>
          </div>

        </div>

        <SeaScooterRental />
      </main>

      <Footer />

      {/* GLOBAL CSS */}
      <style>{`
        .bubble {
          position: absolute;
          bottom: -20px;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          animation: rise 10s infinite ease-in;
        }

        .exp-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes rise {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }

        .fish {
          position: absolute;
          width: 40px;
          opacity: 0.9;
        }

        .swim1 { animation: swim 18s linear infinite; left: -10%; }
        .swim2 { animation: swim 25s linear infinite; left: -15%; }
        .swim3 { animation: swim 22s linear infinite; left: -20%; }

        @keyframes swim {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
      `}</style>
    </div>
  );
}

