import Head from 'next/head';
import { boats } from '../../database/boat_data';
import { BoatsBanner } from '../../components/BoatsBanner';
import { BoatDescription } from '../../components/boats_description/BoatDescription';
import { ImageBoatsGallery } from '../../components/ImageBoatsGallery';
import { BoatServices } from '../../components/BoatServices';
import { BoatsTechnicalData } from '../../components/BoatsTechnicalData';
import { SupportBanner } from '../../components/SupportBanner';
import { BookNowButton } from '../../components/buttons/BookNowButton';

export default function BoatPage({ boat }) {
  return (
    <>
      <Head>
        <title>{boat.name} — Yacht Punta Cana</title>
        <meta name='description' content={boat.shortDesc} />
        <meta property='og:title' content={`${boat.name} — Yacht Punta Cana`} />
        <meta property='og:description' content={boat.shortDesc} />
        <meta property='og:image' content={boat.principalImage} />
        <meta property='og:type' content='website' />
        <link rel='canonical' href={`https://yachtpuntacana.com/boats/${boat.slug}`} />
      </Head>

      <BoatsBanner url={boat.principalImage} name={boat.name} />
      <BoatDescription boat={boat} />
      {boat.gallery?.length > 0 && (
        <ImageBoatsGallery image_array={boat.gallery} />
      )}
      <BoatServices />
      <BoatsTechnicalData features={boat.features} />
      <SupportBanner />
      <BookNowButton />
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = boats.flatMap((boat) =>
    locales.map((locale) => ({
      params: { slug: boat.slug },
      locale,
    }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const boat = boats.find((b) => b.slug === params.slug);
  if (!boat) return { notFound: true };

  const { serverSideTranslations } = await import(
    'next-i18next/serverSideTranslations'
  );

  return {
    props: {
      boat,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
