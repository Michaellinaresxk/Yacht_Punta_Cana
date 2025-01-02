import { Typography, Box, Container, Divider, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo-colorfull-1.png';
import pay_image from '../assets/icons/pagos-con-paypal.png';
import { Colors } from '../styles/theme';
import { useTranslation } from 'next-i18next';
import { Instagram, Facebook, WhatsApp } from '@mui/icons-material';

const navLinks = [
  { href: '/', label: 'navbar.home' },
  { href: '/services', label: 'navbar.services' },
  { href: '/destiny', label: 'navbar.destinations' },
  { href: '/contact_us', label: 'navbar.contact' },
];

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/yachtpuntacana' },
  { Icon: Facebook, href: 'https://facebook.com/yachtpuntacana' },
  { Icon: WhatsApp, href: 'https://wa.me/18292963529' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: Colors.body,
        pt: 8,
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
        }}
      />

      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 6,
            mb: 8,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant='h6'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 600,
                mb: 3,
              }}
            >
              Yacht Punta Cana
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {t('footer.description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton
                    component='a'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      color: Colors.first_blue,
                      bgcolor: `${Colors.first_blue}15`,
                      '&:hover': {
                        bgcolor: Colors.first_blue,
                        color: 'white',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant='h6'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 600,
                mb: 3,
              }}
            >
              {t('footer.quicklinks')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Typography
                      component='span'
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: Colors.first_blue,
                        },
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                      }}
                    >
                      {t(link.label)}
                    </Typography>
                  </motion.div>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Payment Methods */}
          <Box>
            <Typography
              variant='h6'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 600,
                mb: 3,
              }}
            >
              {t('footer.payment-methods')}
            </Typography>
            <Box
              sx={{
                p: 3,
                bgcolor: 'white',
                borderRadius: 2,
                width: 'fit-content',
              }}
            >
              <Image
                alt='payment methods'
                src={pay_image}
                width={200}
                height={50}
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            mt: 3,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Image
            alt='website logo'
            src={logo}
            width={200}
            height={50}
            style={{
              objectFit: 'contain',
              marginBottom: '1rem',
            }}
          />
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
            }}
          >
            © {currentYear} Yacht Punta Cana. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
