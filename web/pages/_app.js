import '../styles/globals.css';
import '../styles/hero.css';
import WhatsAppButton from '../components/WhatsAppButton';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
