import { ContactHero } from '../components/hero/ContactHero';
import { ContactGroupIcons } from '../components/icons/ContactGroupIcons';
import { Footer } from '../components/Footer';
import { FormComponent } from '../components/FormComponent';
import { NewMap } from '../components/map/NewMap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Container, Grid } from '@mui/material';

function contact_us() {
  return (
    <>
      <ContactHero />
      <ContactGroupIcons />
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <NewMap />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <FormComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default contact_us;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
