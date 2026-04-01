import { Typography, Box, Container, Divider, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo-colorfull-1.png';
import pay_image from '../assets/icons/pagos-con-paypal.png';
import { Colors } from '../styles/theme';
import { useTranslation } from 'next-i18next';
import { Instagram, WhatsApp } from '@mui/icons-material';

const navLinks = [
  { href: '/', label: 'navbar.home' },
  { href: '/services', label: 'navbar.services' },
  { href: '/destiny', label: 'navbar.destinations' },
  { href: '/contact_us', label: 'navbar.contact' },
];

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/yachtpuntacana' },
  { Icon: WhatsApp, href: 'https://wa.me/18292963529' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: Colors.navy,
        borderTop: `1px solid rgba(12, 113, 224, 0.12)`,
        pt: 8,
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top accent line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${Colors.first_blue}, ${Colors.soft_blue}, transparent)`,
        }}
      />

      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 6,
            mb: 7,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant='overline'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              Yacht Punta Cana
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: Colors.text_muted, lineHeight: 1.85, mb: 3 }}
            >
              {t('footer.description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.div key={index} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <IconButton
                    component='a'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    size='small'
                    sx={{
                      color: Colors.soft_blue,
                      bgcolor: 'rgba(16, 165, 245, 0.08)',
                      border: '1px solid rgba(16, 165, 245, 0.18)',
                      '&:hover': {
                        bgcolor: Colors.first_blue,
                        borderColor: Colors.first_blue,
                        color: '#fff',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Icon fontSize='small' />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant='overline'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              {t('footer.quicklinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.18 }}>
                    <Typography
                      component='span'
                      sx={{
                        color: Colors.text_muted,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': { color: Colors.soft_blue },
                        transition: 'color 0.2s ease',
                        '&::before': {
                          content: '"—"',
                          color: `rgba(12, 113, 224, 0.35)`,
                          fontSize: '0.7rem',
                        },
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
              variant='overline'
              sx={{
                color: Colors.soft_blue,
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              {t('footer.payment-methods')}
            </Typography>
            <Box
              sx={{
                p: 2,
                borderRadius: '10px',
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                width: 'fit-content',
              }}
            >
              <Image
                alt='payment methods'
                src={pay_image}
                width={220}
                height={85}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(12, 113, 224, 0.1)' }} />

        <Box sx={{ mt: 3, pt: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Image
            alt='website logo'
            src={logo}
            width={160}
            height={40}
            style={{ objectFit: 'contain' }}
          />
          <Typography variant='body2' sx={{ color: Colors.text_muted, fontSize: '0.8rem' }}>
            © {currentYear} Yacht Punta Cana. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
