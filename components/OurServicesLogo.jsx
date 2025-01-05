import { Typography, Box, Grid, Container } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SailingIcon from '@mui/icons-material/Sailing';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GroupsIcon from '@mui/icons-material/Groups';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import logo from '../assets/icons/logo-colorfull-1.png';

export const OurServicesLogo = () => {
  const featureItems = [
    {
      icon: <WbSunnyIcon sx={{ fontSize: 48 }} />,
      text: 'Sunset Cruises',
      description: 'Experience breathtaking Caribbean sunsets',
    },
    {
      icon: <SailingIcon sx={{ fontSize: 48 }} />,
      text: 'Luxury Yachts',
      description: 'Premium fleet for unforgettable journeys',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      text: 'Expert Crew',
      description: 'Professional and experienced sailors',
    },
    {
      icon: <BeachAccessIcon sx={{ fontSize: 48 }} />,
      text: 'Perfect Weather',
      description: 'Ideal sailing conditions year-round',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        overflow: 'hidden',
        backgroundColor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1400px',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(0, 176, 255, 0.2), transparent)',
        },
      }}
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00b0ff, #0081cb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              mb: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #00b0ff, #0081cb)',
              borderRadius: '2px',
              mx: 'auto',
              mb: 6,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              p: 3,
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: '-10px',
                border: '2px solid rgba(0, 176, 255, 0.1)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease',
              },
              '&:hover::before': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Image
              src={logo}
              width={350}
              height={120}
              alt='Punta Cana Yacht Charter logo'
              style={{
                objectFit: 'contain',
                transition: 'transform 0.4s ease',
              }}
              quality={100}
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            sx={{
              maxWidth: '800px',
              textAlign: 'center',
              mt: 6,
              mb: 10,
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              letterSpacing: '0.01em',
            }}
          >
            Experience the ultimate Caribbean luxury with our premium yacht
            charter services in Punta Cana. From intimate sunset cruises to
            full-day excursions, our fleet of meticulously maintained yachts
            offers the perfect blend of comfort, style, and adventure.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
            {featureItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      borderRadius: '16px',
                      backgroundColor: 'background.paper',
                      boxShadow: '0 4px 24px rgba(0, 176, 255, 0.08)',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #00b0ff, #0081cb)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0, 176, 255, 0.12)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: '#00b0ff',
                        mb: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                        fontSize: '1.25rem',
                      }}
                    >
                      {item.text}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
