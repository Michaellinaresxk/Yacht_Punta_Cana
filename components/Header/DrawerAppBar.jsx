// DrawerAppBar.jsx
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
  Language,
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'navbar.home', href: '/', icon: House },
    { label: 'navbar.services', href: '/services', icon: RoomService },
    { label: 'navbar.destinations', href: '/destiny', icon: Navigation },
    { label: 'navbar.contact', href: '/contact_us', icon: PhoneCallback },
  ];

  const DrawerContent = (
    <Box>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Link href='/'>
          <Image
            src={yatch_logo}
            alt='logo image'
            width={170}
            height={50}
            style={{ margin: '10px' }}
          />
        </Link>
      </Box>
      <Divider sx={{ backgroundColor: Colors.first_blue }} />

      {/* Language Selector en el Drawer */}
      <Box sx={{ p: 2 }}>
        <SelectLanguageButton isMobile={true} />
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <Link href={item.href} style={{ width: '100%' }}>
              <ListItemButton
                sx={{
                  py: 1.5,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: `${Colors.first_blue}15`,
                  },
                }}
              >
                <item.icon sx={{ color: Colors.first_blue, mr: 2 }} />
                <ListItemText primary={t(item.label)} />
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
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: 'none' },
                  color: Colors.first_blue,
                }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link href='/'>
                  <Image
                    src={yatch_logo}
                    alt='yatch logo company'
                    width={200}
                    height={50}
                  />
                </Link>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      sx={{
                        color: Colors.title,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {t(item.label)}
                    </Button>
                  </Link>
                ))}
              </Box>

              {/* Desktop Language Selector */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SelectLanguageButton isMobile={false} />
              </Box>

              {/* Mobile Logo */}
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Link href='/'>
                  <Image src={yatch_logo} alt='logo' width={120} height={30} />
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component='nav'>
        <Drawer
          container={
            window !== undefined ? () => window().document.body : undefined
          }
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
            },
          }}
        >
          {DrawerContent}
        </Drawer>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
