import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Importaciones de componentes
import { ServicesHero } from '../../components/hero/ServicesHero';
import { Footer } from '../../components/Footer';
import { BookNowButton } from '../../components/buttons/BookNowButton';
import { OurServicesLogo } from '../../components/OurServicesLogo';
import { ServicesCard } from '../../components/cards/ServicesCard';
import { DestinationsContainer } from '../../components/DestinationsContainer';
import { BoatsComponent } from '../../components/BoatsComponent';
import { MainTitleBoatServices } from '../../components/MainTitleBoatServices';
import { SupportBanner } from '../../components/SupportBanner';
import { FixedComponentImage } from '../../components/FixedComponentImage';
import { BoatServices } from '../../components/BoatServices';
import { boats } from '../../database/boat_data';

// Constantes de imágenes
const HERO_IMAGES = {
  primary:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg',
  secondary:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124942/opcion2_mfwnti.jpg',
};

// Metadatos SEO centralizados
const SEO_CONFIG = {
  title: 'Luxury Yacht Charters in Punta Cana | Premium Boat Services',
  description:
    'Discover the ultimate luxury yacht experience in Punta Cana. Charter private yachts for unforgettable Caribbean adventures. Premium services, stunning views, and personalized trips await you!',
  keywords:
    'yacht charter, Punta Cana, luxury boats, Caribbean cruise, private yacht rental',
  url: 'http://localhost:3000/contact_us',
  image: HERO_IMAGES.primary,
};

/**
 * Componente de página para servicios de yates de lujo
 * Renderiza una página completa con información de yates y servicios
 */
function DescriptionTiara43Boat({ boatList }) {
  return (
    <>
      <Head>
        <title>{SEO_CONFIG.title}</title>
        <meta name='description' content={SEO_CONFIG.description} />
        <meta name='keywords' content={SEO_CONFIG.keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={SEO_CONFIG.url} />
        <meta property='og:title' content={SEO_CONFIG.title} />
        <meta property='og:description' content={SEO_CONFIG.description} />
        <meta property='og:image' content={SEO_CONFIG.image} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={SEO_CONFIG.url} />
        <meta property='twitter:title' content={SEO_CONFIG.title} />
        <meta property='twitter:description' content={SEO_CONFIG.description} />
        <meta property='twitter:image' content={SEO_CONFIG.image} />

        <link rel='canonical' href={SEO_CONFIG.url} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ServicesHero />
      <OurServicesLogo />
      <ServicesCard />
      <BoatServices />
      <SupportBanner />
      <FixedComponentImage image={HERO_IMAGES.primary} />
      <MainTitleBoatServices />
      <BoatsComponent data={boatList} />
      <BookNowButton />
      <FixedComponentImage image={HERO_IMAGES.secondary} />
      <DestinationsContainer />
      <Footer />
    </>
  );
}

export default DescriptionTiara43Boat;

/**
 * getStaticProps - Generación estática en build time
 * Obtiene datos de yates y configuraciones de i18n
 */
export async function getStaticProps({ locale }) {
  try {
    const props = {
      boatList: boats, // ✅ boats está importado al inicio del archivo
      ...(await serverSideTranslations(locale, ['common'])),
    };

    return {
      props,
      revalidate: 3600, // Regeneración cada hora (ISR)
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
      revalidate: 60,
    };
  }
}
