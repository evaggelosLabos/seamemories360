import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partners() {
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

      {/* HERO */}
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
          Partnerships
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
          Offer your guests something unforgettable — without adding any workload to your team.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          maxWidth: "950px",
          margin: "0 auto",
          padding: "20px",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            padding: "35px",
            borderRadius: "18px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
            lineHeight: 1.7,
            color: "#033b4e",
          }}
        >

          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
            Why Partner With Us?
          </h2>

          <p style={{ marginBottom: "20px" }}>
            Sea Memories 360 adds a premium experience to your property or service — 
            something guests remember long after their trip.  
            You’re not “selling a service”; you’re enriching what you already offer.
          </p>

          <ul style={{ paddingLeft: "18px", marginBottom: "20px" }}>
            <li>💙 Zero effort required from your team</li>
            <li>📱 Guests discover and book instantly via onsite QR</li>
            <li>🎥 Your venue gets free promo footage shot by us</li>
            <li>⚡ Same-day video delivery to your guests</li>
            <li>💰 Optional revenue share for each booking</li>
            <li>🌍 Ideal for hotels, marinas, boat rentals, villas & dive centers</li>
          </ul>

          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
            What’s In It For You?
          </h2>

          <p style={{ marginBottom: "20px" }}>
            You already provide accommodation, dining, or boating — 
            but now you can offer <strong>a premium add-on experience</strong> 
            that costs you nothing and creates delighted customers.
          </p>

          <ul style={{ paddingLeft: "18px", marginBottom: "20px" }}>
            <li>⭐ Increased guest satisfaction</li>
            <li>📣 More social-media sharing (your venue included!)</li>
            <li>🏆 Stronger online reviews</li>
            <li>🧭 Your guests stay longer & spend more</li>
          </ul>

          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
            Let’s Build Something Great
          </h2>

          <p>
            We’re currently opening a limited number of partnership slots in Corfu.  
            If you want to offer something exclusive and memorable to your guests,  
            we’d love to talk.
          </p>

          <p style={{ marginTop: "25px", fontWeight: "600", fontSize: "1.1rem" }}>
            📩 Email: <a href="mailto:info@seamemories360.com">info@seamemories360.com</a>
          </p>

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

