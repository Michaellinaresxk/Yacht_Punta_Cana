import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        backgroundImage:
          'url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)',
        width: '100%',
        height: { xs: '500px', sm: '600px', md: '750px', lg: '900px' },
        backgroundPosition: {
          xs: '50% 50%',
          md: '70% 50%',
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
      elevation={0}
    >
      {/* Contenedor de texto */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          mx: { xs: '20px', sm: '40px', md: '60px', lg: '70px' },
          marginTop: { xs: '-100px', sm: '-100px', md: '-150px' }, // Subido más arriba
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Título principal con efecto de tipografía moderno */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Tamaño de fuente responsive
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.05em', // Ajuste de tracking
              lineHeight: 1.2,
              // textShadow: '0 4px 6px rgba(0,0,0,0.5)', // Sombra más pronunciada
              background: 'linear-gradient(45deg, #000, #00b0ff)', // Gradiente de color
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              mb: 2, // Margen inferior
            }}
          >
            {t('mainBanner.title')}
          </Typography>
        </motion.div>

        {/* Contenedor de subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 500,
                color: 'white',
                // textShadow: '0 3px 5px rgba(0,0,0,0.4)',
                lineHeight: 1.3,
              }}
            >
              {t('mainBanner.subtitle')}
            </Typography>
            <Typography
              sx={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#fff', // Color destacado
                // textShadow: '0 3px 5px rgba(0,0,0,0.4)',
                background: 'linear-gradient(45deg, #00b0ff, #0081cb)', // Gradiente azul
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                lineHeight: 1.3,
              }}
            >
              {t('mainBanner.span')}
            </Typography>
          </Box>
        </motion.div>

        {/* Botón animado */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant='contained'
            sx={{
              mt: { xs: 3, md: 4 },
              px: { xs: 3, md: 4 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 600,
              borderRadius: 3,
              background: 'linear-gradient(45deg, #00b0ff, #0081cb)', // Gradiente azul
              color: 'white',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
              },
            }}
          >
            {t('button.luxuryyacht')}
          </Button>
        </motion.div>
      </Box>
    </Paper>
  );
};
