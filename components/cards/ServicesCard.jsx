import { Paper, Box, Typography, Button, Container, Grid } from '@mui/material';
import { Colors } from '../../styles/theme';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1624139571/servicios/yates1_2_wbiap8.jpg',
    titleKey: 'services-card.boat',
    descriptionKey: 'services-card.p1',
    actionKey: 'services-card.book',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758964/9-2_qqkusx.jpg',
    titleKey: 'services-card.catering',
    descriptionKey: 'services-card.p2',
    actionKey: 'services-card.more-info',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758977/transporte_zrihn3.webp',
    titleKey: 'services-card.transport',
    descriptionKey: 'services-card.p3',
    actionKey: 'services-card.more-info',
  },
];

const ServiceCard = ({ image, titleKey, descriptionKey, actionKey, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: 'white',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid rgba(0,0,0,0.08)',
          maxWidth: '900px',
          margin: '0 auto',
          '&:hover': {
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '280px', md: '340px' },
                overflow: 'hidden',
              }}
            >
              <Box
                component='img'
                src={image}
                alt={t(titleKey)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                  display: { xs: 'block', md: 'none' },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  color: Colors.first_blue,
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.4rem', md: '1.7rem' },
                }}
              >
                {t(titleKey)}
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: 3,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  opacity: 0.85,
                }}
              >
                {t(descriptionKey)}
              </Typography>

              <Button
                variant='contained'
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '.MuiButton-root:hover &': {
                        transform: 'translateX(4px)',
                      },
                    }}
                  />
                }
                sx={{
                  bgcolor: Colors.first_blue,
                  py: 1.2,
                  px: 3,
                  borderRadius: '10px',
                  alignSelf: 'flex-start',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: Colors.second_blue,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 20px ${Colors.first_blue}30`,
                  },
                }}
              >
                {t(actionKey)}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export const ServicesCard = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            titleKey={service.titleKey}
            descriptionKey={service.descriptionKey}
            actionKey={service.actionKey}
            index={index}
          />
        ))}
      </Box>
    </Container>
  );
};
