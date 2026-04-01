import { Typography, Box, Container } from '@mui/material';
import { Check } from '@mui/icons-material';
import { Colors } from '../styles/theme';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export const BannerImageClip = () => {
  const { t } = useTranslation();

  const listItems = [
    'owners.list1',
    'owners.list2',
    'owners.list3',
    'owners.list4',
    'owners.list5',
  ];

  return (
    <Box
      sx={{
        bgcolor: Colors.navy_mid,
        borderTop: '1px solid rgba(12, 113, 224, 0.12)',
        borderBottom: '1px solid rgba(12, 113, 224, 0.12)',
        py: { xs: 8, md: 10 },
        mt: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '100%',
          background: `radial-gradient(ellipse, rgba(12,113,224,0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* Feature list */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            sx={{ flex: 1.2 }}
          >
            <Typography
              variant='body1'
              sx={{
                color: Colors.text_muted,
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1rem',
              }}
            >
              {t('owners.subtitle')}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {listItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1.75,
                      borderRadius: '10px',
                      bgcolor: 'rgba(12, 113, 224, 0.05)',
                      border: '1px solid rgba(12, 113, 224, 0.1)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: 'rgba(12, 113, 224, 0.1)',
                        borderColor: 'rgba(12, 113, 224, 0.3)',
                        transform: 'translateX(6px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        bgcolor: 'rgba(12, 113, 224, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check sx={{ color: Colors.soft_blue, fontSize: 16 }} />
                    </Box>
                    <Typography
                      variant='body2'
                      sx={{ color: Colors.off_white, fontWeight: 500, fontSize: '0.95rem' }}
                    >
                      {t(item)}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Heading */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            sx={{ flex: 0.8 }}
          >
            {/* Accent line */}
            <Box
              sx={{
                width: 40,
                height: '2px',
                background: `linear-gradient(90deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
                mb: 3,
              }}
            />
            <Typography
              variant='h2'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                background: `linear-gradient(135deg, ${Colors.off_white} 0%, ${Colors.soft_blue} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('owners.title')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
