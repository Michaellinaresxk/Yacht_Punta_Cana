import Head from 'next/head';
import { MainBanner } from '../components/MainBanner';
import { Footer } from '../components/Footer';
import { SupportBanner } from '../components/SupportBanner';
import { MainTitle } from '../components/MainTitle';
import { BannerImageClip } from '../components/BannerImageClip';
import { BookNowButton } from '../components/buttons/BookNowButton';
import { VideoDesktop } from '../components/video/VideoDesktop';
import { BoatsComponent } from '../components/BoatsComponent';
import { DestinationsContainer } from '../components/DestinationsContainer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        {/* Título optimizado con palabras clave */}
        <title>
          Yacht Rentals in Punta Cana - Luxury Caribbean Sea Charters
        </title>

        {/* Meta descripción más detallada y atractiva */}
        <meta
          name='description'
          content='Discover the ultimate luxury yacht experience in Punta Cana. Charter private yachts for unforgettable Caribbean adventures. Premium services, stunning views, and personalized trips await you!'
        />

        {/* Open Graph meta tags para redes sociales */}
        <meta
          property='og:title'
          content='Yachts Punta Cana - Luxury Caribbean Yacht Charters'
        />
        <meta
          property='og:description'
          content='Experience the best yacht rentals in Punta Cana. Sail the Caribbean in style with our premium yacht charters.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://yachtpuntacana.com/' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg'
        />

        {/* Twitter Card meta tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Yachts Punta Cana - Luxury Caribbean Yacht Charters'
        />
        <meta
          name='twitter:description'
          content="Explore Punta Cana's waters with our luxury yacht rentals. Unforgettable Caribbean experiences await!"
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)"'
        />

        {/* Canonical URL para evitar contenido duplicado */}
        <link rel='canonical' href='https://yachtpuntacana.com/' />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />

        {/* Verificación de Google Search Console */}
        <meta
          name='google-site-verification'
          content='XvBRJKvRQn33_vzkKZlM4dEP2f0NyUc6wRa02xEJdFU'
        />

        {/* Otras etiquetas meta importantes */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />

        {/* Lenguaje y región */}
        <meta httpEquiv='content-language' content='es-DO' />
      </Head>
      <MainBanner />
      <MainTitle />
      <BoatsComponent />
      <BookNowButton />
      <VideoDesktop />
      <SupportBanner />
      <DestinationsContainer />
      <BannerImageClip />  
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
