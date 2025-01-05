import { Typography, Paper, Box, Container } from '@mui/material';
import { Check } from '@mui/icons-material';
import { Colors } from '../styles/theme';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export const BannerImageClip = () => {
  const { t } = useTranslation();

  const listItems = [
    'owners.list1',
    'owners.list2',
    'owners.list3',
    'owners.list4',
    'owners.list5',
  ];

  return (
    <Container maxWidth={false} disableGutters>
      <Paper
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%)',
          overflow: 'hidden',
          py: { xs: 6, md: 8 },
          mt: 12,
        }}
        elevation={0}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${Colors.first_blue}22, ${Colors.first_blue}11)`,
            filter: 'blur(40px)',
          }}
        />

        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Content Section */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              sx={{
                flex: { xs: '1', md: '1.2' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {t('owners.subtitle')}
              </Typography>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                {listItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      <Check
                        sx={{
                          color: Colors.first_blue,
                          fontSize: 24,
                          p: 0.5,
                          borderRadius: '50%',
                          backgroundColor: `${Colors.first_blue}22`,
                        }}
                      />
                      <Typography
                        variant='body1'
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      >
                        {t(item)}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
            {/* Title Section */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              sx={{
                flex: { xs: '1', md: '0.8' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 600,
                  background: `linear-gradient(135deg, ${Colors.first_blue} 0%, ${Colors.second_blue} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                }}
              >
                {t('owners.title')}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};
