import { Box, Container, Typography, Paper } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Colors } from '../styles/theme/index';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { LocationOn } from '@mui/icons-material';

const puntacana = [
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1649090188/cygnus%20yachts/pictures/destinations/pages/puntacana/PCYRC_dfgmbs.jpg',
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1638769266/cygnus%20yachts/pictures/destinations/pages/puntacana/3_xkulz2.jpg',
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1624145269/cygnus%20yachts/pictures/destinations/pages/puntacana/Punta_Cana1_twuyxv.jpg',
];

export const ServicesSliderPuntaCana = () => {
  const { t } = useTranslation();

  const sliderProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    scale: 0.4,
    indicators: (i) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          margin: '0 8px',
          background: i ? 'rgba(255,255,255,0.5)' : Colors.first_blue,
          borderRadius: '50%',
          display: 'inline-block',
          transition: 'all 0.3s ease',
        }}
      />
    ),
  };

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row-reverse' },
              minHeight: '600px',
            }}
          >
            {/* Slider Section */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                '& .react-slideshow-container': {
                  height: '100%',
                },
                '& .each-slide-effect > div': {
                  height: { xs: '400px', md: '600px' },
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                },
                '& .react-slideshow-container .nav': {
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: Colors.first_blue,
                  margin: '0 20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: Colors.first_blue,
                    color: 'white',
                  },
                },
              }}
            >
              <Slide {...sliderProperties}>
                {puntacana.map((url, index) => (
                  <Box key={index} className='each-slide-effect'>
                    <Box
                      sx={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%), url(${url})`,
                      }}
                    />
                  </Box>
                ))}
              </Slide>
            </Box>

            {/* Content Section */}
            <Box
              sx={{
                flex: 1,
                p: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 3,
                }}
              >
                <LocationOn sx={{ color: Colors.first_blue, fontSize: 28 }} />
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 600,
                    background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Punta Cana
                </Typography>
              </Box>

              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  textAlign: 'justify',
                }}
              >
                {t('destinations.puntacana-description')}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  mt: 'auto',
                }}
              >
                {['Beach', 'Yacht', 'Sailing'].map((tag, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      backgroundColor: `${Colors.first_blue}15`,
                      color: Colors.first_blue,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};
