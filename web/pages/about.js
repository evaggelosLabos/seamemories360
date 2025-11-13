import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(to bottom, #dff2ff, #c8e7ff)"
    }}>
      
      <Header />

      {/* HERO SECTION */}
      <section 
        style={{
          padding: "100px 20px 60px",
          textAlign: "center",
          animation: "fadeInHero 1s ease-out",
        }}
      >
        <h1 
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#024e76",
          }}
        >
          About Sea Memories 360
        </h1>

        <p 
          style={{
            fontSize: "1.2rem",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: 1.6,
            color: "#044a5f",
            opacity: 0.85,
          }}
        >
          We transform your time at sea into breathtaking stories — 
          filmed in Corfu using professional underwater drones and 
          enhanced by advanced AI cinematography.
        </p>
      </section>

      {/* CONTENT SECTION */}
      <main 
        style={{
          flex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        <div 
          style={{
            background: "rgba(255,255,255,0.75)",
            padding: "30px",
            borderRadius: "18px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
            lineHeight: 1.7,
            color: "#033b4e",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Our Mission</h2>
          <p style={{ marginBottom: "20px" }}>
            Sea Memories 360 was created to help people capture the magic of 
            the Ionian Sea like never before. Whether you're exploring reefs, 
            relaxing on a boat day, or seeking something extraordinary,
            our technology brings your experience to life.
          </p>

          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Who We Are</h2>
          <p style={{ marginBottom: "20px" }}>
            We’re a small team based in <strong>Corfu, Greece</strong> — 
            passionate about the ocean, photography, and cutting-edge drone tech.  
            With expertise in filmmaking, software, and AI, we fuse creativity with innovation.
          </p>

          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>What Makes Us Different</h2>
          <ul style={{ paddingLeft: "18px", marginBottom: "10px" }}>
            <li>🎥 Pro underwater drone cinematography</li>
            <li>🤖 AI-powered video enhancement + smart editing</li>
            <li>🌊 Custom-designed sea experiences in Corfu</li>
            <li>⚡ Same-day delivery for unforgettable memories</li>
            <li>📱 QR preview access from your boat</li>
          </ul>
        </div>
      </main>

      <Footer />

      {/* Animations */}
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
