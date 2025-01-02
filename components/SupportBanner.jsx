import { Typography, Paper, Button, Box, Container } from '@mui/material';
import { WhatsApp, Email, Phone, ArrowForward } from '@mui/icons-material';
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
    color: '#0088cc',
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
    <Container maxWidth='xl'>
      <Paper
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          background: `linear-gradient(135deg, ${Colors.blur_blue} 0%, ${Colors.first_blue} 100%)`,
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          my: 8,
        }}
        elevation={0}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            p: { xs: 4, md: 6 },
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: '600px' }}>
            <Typography
              variant='h3'
              component={motion.h3}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                color: '#fff',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              {t('button.ContactUs')}
            </Typography>
            <Typography
              variant='h6'
              component={motion.p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                lineHeight: 1.6,
                mb: { xs: 3, md: 4 },
              }}
            >
              {t('contactQuote.title')}
            </Typography>
          </Box>

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={option.link}
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      py: 2,
                      px: 3,
                      width: { xs: '100%', sm: 'auto' },
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.25)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <option.icon
                      sx={{
                        // color: option.color,
                        fontSize: '24px',
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        textTransform: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      {t(option.text)}
                    </Typography>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
