import '../styles/globals.css';
import '../styles/hero.css';
import Head from 'next/head';
import WhatsAppButton from '../components/WhatsAppButton';

const GA_MEASUREMENT_ID = 'G-ZZEF1JHEP4';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
