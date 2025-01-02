import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const image1 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1653911999/PC-YACHTS/yachts/cranchi-50/bg_dxwftv.jpg';
const image2 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/bg1_gvvwgv.jpg';
const image3 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1624143983/nuestra%20flota/aicon-fly-56/Aicon%20fly%2056.jpg';
const image4 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1654298934/PC-YACHTS/yachts/tiara-39-open/3_mnzxmo.jpg';
const image5 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1624144245/nuestra%20flota/meridian-42/Yate-5_wzfnuv.jpg';
const image6 =
  'https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/1_gvy77c.jpg';

const boats = [
  {
    image: image1,
    title: 'Cranchi 50',
    description: 'yacht-card.cranchi',
    link: '/boats/cranchi_boat',
  },
  {
    image: image2,
    title: 'Fairline 48 Targa',
    description: 'yacht-card.fairline',
    link: '/boats/fairline_boat',
  },
  {
    image: image3,
    title: 'Icon Fly 60',
    description: 'yacht-card.aiconfly-60',
    link: '/boats/aiconfly_boat',
  },
  {
    image: image4,
    title: 'Tiara 39 Open',
    description: 'yacht-card.tiara39',
    link: '/boats/tiara39_boat',
  },
  {
    image: image5,
    title: 'Meridian',
    description: 'yacht-card.meridian',
    link: '/boats/meridian_boat',
  },
  {
    image: image6,
    title: 'Tiara 43 Sovran',
    description: 'yacht-card.tiara43',
    link: '/boats/tiara43_boat',
  },
];

export const BoatsComponent = () => {
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 8, mb: 8, maxWidth: 'lg' }}>
      <Grid container spacing={4}>
        {boats.map((boat, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                sx={{
                  height: 530,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px 0 rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.20)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component='img'
                    height='250'
                    image={boat.image}
                    alt={boat.title}
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {boat.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {t(boat.description)}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    p: 3,
                    pt: 0,
                    justifyContent: 'center',
                  }}
                >
                  <Link
                    href={boat.link}
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <Button
                        variant='contained'
                        size='large'
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          background:
                            'linear-gradient(45deg, #00b0ff, #0081cb)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                            transform: 'translateY(-3px)',
                            background:
                              'linear-gradient(45deg, #0081cb, #00b0ff)', // Ligero cambio en gradiente al hover
                          },
                          '&:active': {
                            transform: 'translateY(1px)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        {t('button.more')}
                      </Button>
                    </motion.div>
                  </Link>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
