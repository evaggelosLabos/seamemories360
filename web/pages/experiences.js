import Header from '../components/Header';
import Footer from '../components/Footer';

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
  width: "100%",         // <— IMPORTANT FIX
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
        <h1 style={{ fontSize: "2.4rem", marginBottom: 20 }}>Experiences</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 50 }}>
          Discover immersive underwater adventures crafted with cutting-edge drone technology.
        </p>

        {/* CARD GRID */}
       <div
  className="exp-grid"
  style={{
    display: "grid",
    gap: "30px",
  }}
>




          {/* Cards */}

          <div style={card}>
            <div style={icon}>🌊</div>
            <h3 style={title}>Reef Discovery</h3>
            <p style={desc}>Glide over vibrant shallow reefs.</p>
            <ul style={miniList}>
              <li>🐠 Reef fish</li>
              <li>🪸 Coral</li>
              <li>📷 Cinematic capture</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>📸</div>
            <h3 style={title}>360° Memory</h3>
            <p style={desc}>Immersive VR-ready underwater footage.</p>
            <ul style={miniList}>
              <li>🔄 Full sphere</li>
              <li>🌐 VR-ready</li>
              <li>💾 Digital delivery</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>🤖</div>
            <h3 style={title}>AI Highlight</h3>
            <p style={desc}>AI auto-edits your best moments.</p>
            <ul style={miniList}>
              <li>🎬 Smart cuts</li>
              <li>🎶 Soundtrack</li>
              <li>✨ Color enhancement</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>✋</div>
            <h3 style={title}>Gesture Mode</h3>
            <p style={desc}>Raise your hand → drone orbits you.</p>
            <ul style={miniList}>
              <li>🌀 Orbit shot</li>
              <li>📐 Auto-framing</li>
              <li>🤳 Selfie-perfect</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>🚤</div>
            <h3 style={title}>Boat Day Add-on</h3>
            <p style={desc}>Instant previews during your trip.</p>
            <ul style={miniList}>
              <li>📱 QR preview</li>
              <li>⚡ Instant playback</li>
              <li>📤 Same-day delivery</li>
            </ul>
          </div>

          <div style={card}>
            <div style={icon}>🎯</div>
            <h3 style={title}>AI Object Tracking</h3>
            <p style={desc}>Drone locks onto a swimmer and follows smoothly.</p>
            <ul style={miniList}>
              <li>🤖 Smart lock-on</li>
              <li>🎥 Follow shots</li>
              <li>⚡ Real-time tracking</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />

      {/* 🔵 NORMAL CSS — NO styled-jsx (NO CRASH) */}
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
