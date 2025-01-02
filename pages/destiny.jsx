import Head from 'next/head';
import { DestinationHero } from '../components/hero/DestinationHero';
import { Footer } from '../components/Footer';
import { BoatsComponent } from '../components/BoatsComponent';
import { SupportBanner } from '../components/SupportBanner';
import { BookNowButton } from '../components/buttons/BookNowButton';
import { ServicesSliderPalmilla } from '../components/ServicesSliderPalmilla';
import { ServicesSliderPuntaCana } from '../components/ServicesSliderPuntaCana';
import { ServicesSliderSantaCatalina } from '../components/ServicesSliderSantaCatalina';
import { MainTitleBoatServices } from '../components/MainTitleBoatServices';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { boats } from '../database/boat_data';

function Destiny({ boat_list }) {
  return (
    <>
      <Head>
        <title>
          Discover Stunning Destinations: Punta Cana, Catalina Island & Palmilla
          Beach
        </title>
        <meta
          name='description'
          content='Explore breathtaking Caribbean destinations with our luxury yacht charters. Sail through the pristine waters of Punta Cana, discover the beauty of Catalina Island, and experience the tranquility of Palmilla Beach.'
        />
        <meta
          name='keywords'
          content='Punta Cana destinations, Catalina Island yacht charter, Palmilla Beach, Caribbean sailing, luxury yacht destinations, tropical boat tours'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://localhost:3000/destiny' />
        <meta
          property='og:title'
          content='Discover Stunning Destinations: Punta Cana, Catalina Island & Palmilla Beach'
        />
        <meta
          property='og:description'
          content='Explore breathtaking Caribbean destinations with our luxury yacht charters. Sail through the pristine waters of Punta Cana, discover the beauty of Catalina Island, and experience the tranquility of Palmilla Beach.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='http://localhost:3000/destiny' />
        <meta
          property='twitter:title'
          content='Discover Stunning Destinations: Punta Cana, Catalina Island & Palmilla Beach'
        />
        <meta
          property='twitter:description'
          content='Explore breathtaking Caribbean destinations with our luxury yacht charters. Sail through the pristine waters of Punta Cana, discover the beauty of Catalina Island, and experience the tranquility of Palmilla Beach.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg'
        />

        <link rel='canonical' href='http://localhost:3000/destiny' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DestinationHero />
      <ServicesSliderPalmilla />
      <ServicesSliderPuntaCana />
      <ServicesSliderSantaCatalina />
      <MainTitleBoatServices />
      <BoatsComponent data={boat_list} />
      <BookNowButton />
      <SupportBanner />
      <Footer />
    </>
  );
}

export default Destiny;

export async function getStaticProps({ locale }) {
  return {
    props: {
      boat_list: boats,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
