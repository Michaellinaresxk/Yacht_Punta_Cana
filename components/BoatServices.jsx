import { Box, Typography, Container, Paper } from '@mui/material';
import {
  LocalGasStation,
  SportsBar,
  Support,
  Anchor,
  Restaurant,
  DirectionsCar,
  BeachAccess,
  HomeRepairService,
  LocalDrink,
  Liquor,
} from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Colors } from '../styles/theme';

const services = [
  { icon: LocalGasStation, key: 'included-serv.fuel' },
  { icon: Support, key: 'included-serv.lifeSavin' },
  { icon: SportsBar, key: 'included-serv.beer' },
  { icon: Anchor, key: 'included-serv.captain' },
  { icon: Restaurant, key: 'included-serv.menu' },
  { icon: DirectionsCar, key: 'included-serv.transport' },
  { icon: Liquor, key: 'included-serv.water' },
  { icon: BeachAccess, key: 'included-serv.access' },
  { icon: HomeRepairService, key: 'included-serv.snorkeling' },
  { icon: LocalDrink, key: 'included-serv.softDrinl' },
];

const ServiceItem = ({ Icon, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(0,0,0,0.08)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.95)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        <Icon
          sx={{
            width: 35,
            height: 35,
            color: Colors.second_blue,
            p: 0.5,
            borderRadius: '12px',
            backgroundColor: `${Colors.second_blue}15`,
          }}
        />
        <Typography
          variant='body1'
          sx={{
            ml: 2,
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          {text}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export const BoatServices = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant='h4'
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: { xs: 'center', md: 'left' },
            background: `linear-gradient(45deg, ${Colors.second_blue}, ${Colors.first_blue})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('included-serv.included')}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
            position: 'relative',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceItem Icon={service.icon} text={t(service.key)} />
            </motion.div>
          ))}

          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${Colors.second_blue}15 0%, transparent 70%)`,
              borderRadius: '50%',
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${Colors.first_blue}15 0%, transparent 70%)`,
              borderRadius: '50%',
              zIndex: -1,
            }}
          />
        </Box>
      </motion.div>
    </Container>
  );
};
