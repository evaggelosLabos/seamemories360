import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partners() {
  return (
    <>
      <Header />
      <main style={{maxWidth:900, margin:'0 auto', padding:'40px 20px'}}>
        <h1>Partners</h1>
        <p>Hotels, marinas, boat rentals, dive centers — let’s create
          unforgettable experiences for your guests.</p>
        <ul style={{lineHeight:1.8}}>
          <li>Free promo footage for your venue.</li>
          <li>QR on-site to book experiences instantly.</li>
          <li>Revenue share options.</li>
        </ul>
        <p>Email: hello@seamemories360.com</p>
      </main>
      <Footer />
    </>
  );
}
