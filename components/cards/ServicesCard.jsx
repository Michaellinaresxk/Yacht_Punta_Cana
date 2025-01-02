import { Paper, Box, Typography, Button, Container } from '@mui/material';
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: 'white',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            transform: 'translateY(-8px)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '450px' },
              height: { xs: '300px', md: '400px' },
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
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h4'
              sx={{
                color: Colors.first_blue,
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {t(titleKey)}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 4,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              {t(descriptionKey)}
            </Typography>

            <Button
              variant='contained'
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: Colors.first_blue,
                py: 1.5,
                px: 4,
                borderRadius: '12px',
                alignSelf: 'flex-start',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                boxShadow: `0 8px 20px ${Colors.first_blue}40`,
                '&:hover': {
                  bgcolor: Colors.second_blue,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 24px ${Colors.first_blue}60`,
                },
              }}
            >
              {t(actionKey)}
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export const ServicesCard = () => {
  return (
    <Container maxWidth='xl' sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
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
