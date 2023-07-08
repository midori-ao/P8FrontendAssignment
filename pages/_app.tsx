import '../styles/normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutWrapper } from './components/LayoutWrapper';
import { GoogleFonts } from 'next-google-fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default MyApp
