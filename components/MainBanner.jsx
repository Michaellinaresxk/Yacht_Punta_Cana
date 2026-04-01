import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Colors } from '../styles/theme';

const textVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Background image with Ken Burns zoom ── */}
      <Box
        component={motion.div}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: '50% 50%', md: '70% 50%' },
        }}
      />

      {/* ── Dark gradient overlay ── */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(6,16,30,0.88) 0%, rgba(6,16,30,0.6) 55%, rgba(6,16,30,0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Bottom fade ── */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to top, #06101e, transparent)',
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '860px',
          mx: { xs: '24px', sm: '48px', md: '72px', lg: '90px' },
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: '1px',
                background: Colors.soft_blue,
                opacity: 0.7,
              }}
            />
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '3.5px',
                textTransform: 'uppercase',
                color: Colors.soft_blue,
              }}
            >
              Luxury Yacht Charter
            </Typography>
          </Box>
        </motion.div>

        {/* Main title */}
        <motion.div
          custom={0.15}
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem', lg: '5rem' },
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            {t('mainBanner.title')}
          </Typography>
        </motion.div>

        {/* Subtitle with blue accent */}
        <motion.div
          custom={0.3}
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0, sm: 1 }, mb: 3.5 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 300,
                color: 'rgba(220, 232, 248, 0.9)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {t('mainBanner.subtitle')}&nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${Colors.first_blue} 0%, ${Colors.soft_blue} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {t('mainBanner.span')}
            </Typography>
          </Box>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={0.45}
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <Link href='/services'>
            <Button
              variant='contained'
              sx={{
                px: { xs: 3.5, md: 5 },
                py: { xs: 1.5, md: 1.85 },
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                fontWeight: 600,
                borderRadius: '6px',
                background: `linear-gradient(135deg, ${Colors.first_blue} 0%, ${Colors.second_blue} 100%)`,
                color: '#fff',
                boxShadow: `0 8px 32px rgba(12, 113, 224, 0.4)`,
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 40px rgba(12, 113, 224, 0.55)`,
                  background: `linear-gradient(135deg, ${Colors.second_blue} 0%, ${Colors.first_blue} 100%)`,
                },
              }}
            >
              {t('button.luxuryyacht')}
            </Button>
          </Link>
        </motion.div>
      </Box>

      {/* ── Scroll indicator ── */}
      <Box
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          opacity: 0.5,
          cursor: 'default',
        }}
      >
        <Typography sx={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#fff' }}>
          Scroll
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: 18, color: '#fff' }} />
      </Box>
    </Box>
  );
};
