import { ContactHero } from '../components/hero/ContactHero';
import { ContactGroupIcons } from '../components/icons/ContactGroupIcons';
import { FormComponent } from '../components/FormComponent';
import { NewMap } from '../components/map/NewMap';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Colors } from '../styles/theme';

function contact_us() {
  return (
    <>
      <ContactHero />
      <ContactGroupIcons />
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant='h3'
            align='center'
            sx={{
              fontWeight: 700,
              mb: 6,
              background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.second_blue})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {/* {t('contact-page.keepinTouch')} */}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NewMap />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormComponent />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default contact_us;

export async function getStaticProps({ locale }) {
  // Importación dinámica que solo ocurre en el servidor
  const { serverSideTranslations } = await import(
    'next-i18next/serverSideTranslations'
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
