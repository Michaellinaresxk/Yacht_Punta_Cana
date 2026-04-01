import { Typography, Button, Box, Container } from '@mui/material';
import { WhatsApp, Email, Phone } from '@mui/icons-material';
import { Colors } from '../styles/theme';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

const contactOptions = [
  {
    icon: WhatsApp,
    text: 'WHATSAPP',
    link: 'https://api.whatsapp.com/send?phone=18292963529&text=%C2%A1Bienvenido%20a%20bordo!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte',
    color: '#25D366',
  },
  {
    icon: Phone,
    text: 'button.callUs',
    link: 'tel:+18292963529',
    color: Colors.soft_blue,
  },
  {
    icon: Email,
    text: 'button.email',
    link: 'mailto:booking@yachtpuntacana.com',
    color: '#EA4335',
  },
];

export const SupportBanner = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl' sx={{ my: 8 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(12, 113, 224, 0.2)',
          background: `linear-gradient(135deg, ${Colors.navy_mid} 0%, ${Colors.navy} 100%)`,
        }}
      >
        {/* Animated blue glow top-right */}
        <Box
          sx={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(12,113,224,0.18) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        {/* Faint left glow */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(8,89,198,0.12) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            p: { xs: 4, md: 6 },
            gap: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Text */}
          <Box sx={{ maxWidth: '560px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: Colors.off_white,
                  fontWeight: 700,
                  mb: 1.5,
                  fontSize: { xs: '1.8rem', md: '2.3rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                {t('button.ContactUs')}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <Typography
                sx={{
                  color: Colors.text_muted,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}
              >
                {t('contactQuote.title')}
              </Typography>
            </motion.div>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: { xs: '100%', md: 'auto' },
            }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href={option.link} target='_blank' style={{ textDecoration: 'none' }}>
                  <Button
                    startIcon={<option.icon sx={{ fontSize: '18px !important' }} />}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(8px)',
                      py: 1.5,
                      px: 3,
                      width: { xs: '100%', sm: 'auto' },
                      borderRadius: '10px',
                      color: Colors.off_white,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: 'rgba(12, 113, 224, 0.18)',
                        borderColor: `rgba(12, 113, 224, 0.5)`,
                        boxShadow: '0 4px 20px rgba(12, 113, 224, 0.2)',
                      },
                    }}
                  >
                    {t(option.text)}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
