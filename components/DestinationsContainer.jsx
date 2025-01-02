import { Paper, Typography, Box, Container } from '@mui/material';
import { DestinationsComponent } from './DestinationsComponent';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { ExploreOutlined } from '@mui/icons-material';
import { Colors } from '../styles/theme';

export const DestinationsContainer = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl'>
      <Paper
        elevation={0}
        sx={{
          py: 8,
          background: 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 200,
            height: 200,
            background: `linear-gradient(135deg, ${Colors.first_blue}10, ${Colors.first_blue}05)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            right: -50,
            width: 150,
            height: 150,
            background: `linear-gradient(135deg, ${Colors.soft_blue}10, ${Colors.soft_blue}05)`,
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
        />

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 8,
              px: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <ExploreOutlined
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    color: Colors.first_blue,
                  }}
                />
              </motion.div>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: `linear-gradient(135deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                }}
              >
                {t('destinations.title')}
              </Typography>
            </Box>

            <Typography
              variant='h5'
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                maxWidth: '600px',
                mx: 'auto',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 3,
                  borderRadius: '2px',
                  background: `linear-gradient(90deg, ${Colors.first_blue}00, ${Colors.first_blue}, ${Colors.first_blue}00)`,
                },
              }}
            >
              {t('destinations.slogan')}
            </Typography>
          </Box>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <DestinationsComponent />
        </motion.div>
      </Paper>
    </Container>
  );
};
