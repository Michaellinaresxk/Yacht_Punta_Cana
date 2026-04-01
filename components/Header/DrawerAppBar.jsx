import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Container,
} from '@mui/material';
import {
  House,
  RoomService,
  Navigation,
  PhoneCallback,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Colors } from '../../styles/theme';
import { SelectLanguageButton } from '../buttons/SelectLanguageButton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import yatch_logo from '../../assets/icons/logo-colorfull-1.png';

const DrawerAppBar = ({ window }) => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'navbar.home', href: '/', icon: House },
    { label: 'navbar.services', href: '/services', icon: RoomService },
    { label: 'navbar.destinations', href: '/destiny', icon: Navigation },
    { label: 'navbar.contact', href: '/contact_us', icon: PhoneCallback },
  ];

  const DrawerContent = (
    <Box sx={{ bgcolor: Colors.navy, height: '100%' }}>
      <Box sx={{ p: 2.5, textAlign: 'center' }}>
        <Link href='/'>
          <Image
            src={yatch_logo}
            alt='logo'
            width={160}
            height={46}
            style={{ margin: '8px' }}
          />
        </Link>
      </Box>

      <Divider sx={{ borderColor: 'rgba(12, 113, 224, 0.18)' }} />

      <Box sx={{ px: 2, pt: 2 }}>
        <SelectLanguageButton isMobile={true} />
      </Box>

      <List sx={{ px: 1, pt: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <Link href={item.href} style={{ width: '100%' }} onClick={handleDrawerToggle}>
              <ListItemButton
                sx={{
                  py: 1.4,
                  px: 2,
                  borderRadius: '10px',
                  mb: 0.5,
                  '&:hover': {
                    bgcolor: 'rgba(12, 113, 224, 0.1)',
                  },
                }}
              >
                <item.icon sx={{ color: Colors.soft_blue, mr: 2, fontSize: 20 }} />
                <ListItemText
                  primary={t(item.label)}
                  primaryTypographyProps={{
                    color: Colors.off_white,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          backgroundColor: 'rgba(6, 16, 30, 0.82)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(12, 113, 224, 0.1)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
            {/* Left: hamburger (mobile) + logo (desktop) */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  mr: 1,
                  display: { sm: 'none' },
                  color: Colors.soft_blue,
                }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link href='/'>
                  <Image
                    src={yatch_logo}
                    alt='Yacht Punta Cana'
                    width={180}
                    height={46}
                  />
                </Link>
              </Box>
            </Box>

            {/* Right: nav links + language */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                      <Button
                        sx={{
                          color: 'rgba(220, 232, 248, 0.75)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          px: 1.8,
                          py: 0.8,
                          borderRadius: '8px',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: Colors.soft_blue,
                            bgcolor: 'rgba(12, 113, 224, 0.08)',
                          },
                        }}
                      >
                        {t(item.label)}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SelectLanguageButton isMobile={false} />
              </Box>

              {/* Mobile logo */}
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Link href='/'>
                  <Image src={yatch_logo} alt='logo' width={110} height={28} />
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component='nav'>
        <Drawer
          container={window !== undefined ? () => window().document.body : undefined}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 270,
              bgcolor: Colors.navy,
            },
          }}
        >
          {DrawerContent}
        </Drawer>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = { window: PropTypes.func };

export default DrawerAppBar;
