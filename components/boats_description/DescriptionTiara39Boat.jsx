import { Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Colors } from '../../styles/theme/index';

export const DescriptionTiara39Boat = () => {
  const { t } = useTranslation();

  // Función para verificar si la traducción existe y no está vacía
  const hasParagraph = (key) => {
    const translation = t(key);
    return (
      translation && translation.trim() !== key && translation.trim() !== ''
    );
  };

  return (
    <Box
      sx={{
        marginTop: '70px',
        width: 'auto',
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            marginBottom: 2,
          }}
        >
          {t('tiara-39.desc')}
        </Typography>
      </motion.div>

      {hasParagraph('tiara-39.p1') && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {t('tiara-39.p1')}
          </Typography>
        </motion.div>
      )}

      {hasParagraph('tiara-39.p2') && (
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {t('tiara-39.p2')}
          </Typography>
        </motion.div>
      )}

      {hasParagraph('tiara-39.p3') && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {t('tiara-39.p3')}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};
