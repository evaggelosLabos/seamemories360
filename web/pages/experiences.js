import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Experiences() {
  return (
    <>
      <Header />
      <main style={{maxWidth:1000, margin:'0 auto', padding:'40px 20px'}}>
        <h1>Experiences</h1>
        <p>Underwater drone tours, 360° capture, AI-cut highlight reels, and more.</p>
        <ul style={{lineHeight:1.8}}>
          <li>🐠 Reef Discovery — shallow dives with rich marine life.</li>
          <li>📹 360° Memory — we capture, you relive in immersive view.</li>
          <li>🤖 AI Highlight — your best moments auto-edited for sharing.</li>
          <li>🛥️ Boat Day Add-on — onboard QR access and instant previews.</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
