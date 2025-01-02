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
        <title>
          Luxury Yacht Charters in Punta Cana | Premium Boat Services
        </title>
        <meta
          name='description'
          content='Discover the ultimate luxury yacht experience in Punta Cana. Charter private yachts for unforgettable Caribbean adventures. Premium services, stunning views, and personalized trips await you!'
        />
        <meta
          name='keywords'
          content='yacht charter, Punta Cana, luxury boats, Caribbean cruise, private yacht rental'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://localhost:3000/contact_us' />
        <meta
          property='og:title'
          content='Luxury Yacht Charters in Punta Cana'
        />
        <meta
          property='og:description'
          content='Discover the ultimate luxury yacht experience in Punta Cana. Charter private yachts for unforgettable Caribbean adventures. Premium services, stunning views, and personalized trips await you!'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='http://localhost:3000/contact_us'
        />
        <meta
          property='twitter:title'
          content='Luxury Yacht Charters in Punta Cana'
        />
        <meta
          property='twitter:description'
          content='Discover the ultimate luxury yacht experience in Punta Cana. Charter private yachts for unforgettable Caribbean adventures. Premium services, stunning views, and personalized trips await you!'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        <link rel='canonical' href='http://localhost:3000/contact_us' />
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
