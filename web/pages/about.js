import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main style={{maxWidth:900, margin:'0 auto', padding:'40px 20px'}}>
        <h1>About Sea Memories 360</h1>
        <p>We turn your time at sea into beautiful, sharable stories — filmed in Corfu with pro underwater drones and enhanced by AI.</p>
        <p>Built by a team in Greece who love the sea and great tech.</p>
      </main>
      <Footer />
    </>
  );
}
