import { Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Colors } from '../styles/theme/index'; // Asegúrate de importar tus colores

export const MainTitleBoatServices = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: {
          xs: '35px',
          sm: '50px',
          md: '75px',
        },
        marginLeft: { xs: '15px' },
        marginRight: { xs: '15px' },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant='h2'
          sx={{
            fontWeight: 700,
            fontSize: 'clamp(2em, 5vw, 4em)',
            background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          {t('services-page.subtitle')}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            marginLeft: { xs: '10px' },
            marginRight: { xs: '10px' },
            marginTop: '5px',
            color: 'text.secondary',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          {t('weAre.slogan')} {t('weAre.slogan1')}
        </Typography>
      </motion.div>
    </Box>
  );
};
