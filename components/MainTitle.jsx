import { Typography, Box, Container } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Sailing } from '@mui/icons-material';
import { Colors } from '../styles/theme';

export const MainTitle = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='lg'>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: 2,
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '60px',
            background: `linear-gradient(to bottom, ${Colors.first_blue}00, ${Colors.first_blue})`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'text.secondary',
              fontWeight: 500,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Sailing sx={{ color: Colors.first_blue }} />
            {t('weAre.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.2,
              mb: 3,
              background: `linear-gradient(135deg, ${Colors.first_blue} 0%, ${Colors.soft_blue} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.05)',
              position: 'relative',
            }}
          >
            Yacht Punta Cana
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Typography
            variant='h5'
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              lineHeight: 1.8,
              fontWeight: 400,
              position: 'relative',
              '& strong': {
                color: Colors.first_blue,
                fontWeight: 600,
              },
            }}
          >
            {t('weAre.slogan')} <strong>{t('weAre.slogan1')}</strong>
          </Typography>
        </motion.div>

        {/* Decorative wave */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            borderRadius: '2px',
            background: `linear-gradient(90deg, ${Colors.first_blue}00, ${Colors.first_blue}, ${Colors.first_blue}00)`,
          }}
        />
      </Box>
    </Container>
  );
};
