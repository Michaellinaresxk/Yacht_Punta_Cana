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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 8, md: 11 },
          px: 2,
          position: 'relative',
        }}
      >
        {/* Top vertical accent line */}
        <Box
          sx={{
            width: '1px',
            height: '48px',
            background: `linear-gradient(to bottom, transparent, ${Colors.first_blue})`,
            mb: 3,
          }}
        />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
            <Sailing sx={{ color: Colors.soft_blue, fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: Colors.soft_blue,
              }}
            >
              {t('weAre.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
              lineHeight: 1.15,
              mb: 3,
              background: `linear-gradient(135deg, ${Colors.off_white} 0%, ${Colors.soft_blue} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em',
            }}
          >
            Yacht Punta Cana
          </Typography>
        </motion.div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Typography
            variant='h5'
            sx={{
              maxWidth: '720px',
              mx: 'auto',
              color: Colors.text_muted,
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
              lineHeight: 1.85,
              fontWeight: 400,
              '& strong': { color: Colors.soft_blue, fontWeight: 600 },
            }}
          >
            {t('weAre.slogan')} <strong>{t('weAre.slogan1')}</strong>
          </Typography>
        </motion.div>

        {/* Bottom horizontal accent */}
        <Box
          sx={{
            mt: 5,
            width: '64px',
            height: '2px',
            borderRadius: '1px',
            background: `linear-gradient(90deg, transparent, ${Colors.first_blue}, transparent)`,
          }}
        />
      </Box>
    </Container>
  );
};
