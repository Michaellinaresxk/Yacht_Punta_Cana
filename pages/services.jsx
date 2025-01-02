import Head from 'next/head';
import { ServicesHero } from '../components/hero/ServicesHero';
import { Footer } from '../components/Footer';
import { BookNowButton } from '../components/buttons/BookNowButton';
import { OurServicesLogo } from '../components/OurServicesLogo';
import { ServicesCard } from '../components/cards/ServicesCard';
import { DestinationsContainer } from '../components/DestinationsContainer';
import { boats } from '../database/boat_data';
import { BoatsComponent } from '../components/BoatsComponent';
import { MainTitleBoatServices } from '../components/MainTitleBoatServices';
import { SupportBanner } from '../components/SupportBanner';
import { FixedComponentImage } from '../components/FixedComponentImage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BoatServices } from '../components/BoatServices';

const image1 =
  'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg';

const image2 =
  'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124942/opcion2_mfwnti.jpg';

function Services({ boat_list }) {
  return (
    <>
      <Head>
        <title>Yacht Services in Punta Cana | Luxury Boat Charters</title>
        <meta
          name='description'
          content='Explore our premium yacht services in Punta Cana. Discover a range of luxury boats, exclusive destinations, and personalized maritime experiences. Book your dream yacht charter today!'
        />
        <meta
          name='keywords'
          content='yacht services, Punta Cana, luxury boat charters, marine experiences, yacht rental, Caribbean yachting'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://localhost:3000/services' />
        <meta
          property='og:title'
          content='Yacht Services in Punta Cana | Luxury Boat Charters'
        />
        <meta
          property='og:description'
          content='Explore our premium yacht services in Punta Cana. Discover a range of luxury boats, exclusive destinations, and personalized maritime experiences. Book your dream yacht charter today!'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='http://localhost:3000/services' />
        <meta
          property='twitter:title'
          content='Yacht Services in Punta Cana | Luxury Boat Charters'
        />
        <meta
          property='twitter:description'
          content='Explore our premium yacht services in Punta Cana. Discover a range of luxury boats, exclusive destinations, and personalized maritime experiences. Book your dream yacht charter today!'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        <link rel='canonical' href='http://localhost:3000/services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ServicesHero />
      <OurServicesLogo />
      <ServicesCard />
      <BoatServices />
      <SupportBanner />
      <FixedComponentImage image={image1} />
      <MainTitleBoatServices />
      <BoatsComponent data={boat_list} />
      <BookNowButton />
      <FixedComponentImage image={image2} />
      <DestinationsContainer />
      <Footer />
    </>
  );
}

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      boat_list: boats,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
