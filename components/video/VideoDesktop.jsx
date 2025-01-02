import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import ReactPlayer from 'react-player';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { PlayCircleOutline } from '@mui/icons-material';
import { Colors } from '../../styles/theme/index';

export const VideoDesktop = () => {
  const { t } = useTranslation();
  const urlVideo =
    'https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1671285248/video-tour_sxqsw8.mp4';

  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  const [playerConfig, setPlayerConfig] = useState({});

  const handleReady = useCallback(() => {
    console.log('Video is ready to play');
    setReady(true);
  }, []);

  const handleError = useCallback((error) => {
    console.error('Video player error:', error);
    setError(true);
  }, []);

  // Diagnóstico de URL
  useEffect(() => {
    console.log('Video URL:', urlVideo);

    // Verificar si el video es accesible
    fetch(urlVideo, { method: 'HEAD' })
      .then((response) => {
        console.log('Video URL Accessibility:', response.status);
        if (response.ok) {
          setPlayerConfig({
            file: {
              attributes: {
                crossOrigin: 'anonymous',
              },
            },
          });
        }
      })
      .catch((error) => {
        console.error('URL Accessibility Error:', error);
        setError(true);
      });
  }, [urlVideo]);

  return (
    <Container maxWidth='xl' sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
          }}
        >
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            variant='h2'
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '2.3rem', md: '3.5rem' },
              background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Video Tour
            <Box
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              sx={{
                position: 'absolute',
                top: -10,
                right: -40,
                transform: 'rotate(15deg)',
              }}
            >
              <PlayCircleOutline
                sx={{
                  color: Colors.first_blue,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              />
            </Box>
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 2, md: 0 },
            }}
          >
            {t('video-tour.slogan')}
          </Typography>
        </Box>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'black',
              position: 'relative',
              paddingTop: '56.25%', // 16:9 Aspect Ratio
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {error ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography variant='h6'>No se pudo cargar el video</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <ReactPlayer
                  url={urlVideo}
                  width='100%'
                  height='100%'
                  controls
                  playing={false}
                  onReady={handleReady}
                  onError={handleError}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        },
                        crossOrigin: 'anonymous',
                      },
                      forceVideo: true, // Force HTML5 video
                    },
                    ...playerConfig,
                  }}
                  fallback={
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                      }}
                    >
                      <Typography variant='body1'>
                        Video no disponible
                      </Typography>
                    </Box>
                  }
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />

                {!ready && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                    }}
                  >
                    <Typography variant='body1'>Cargando video...</Typography>
                  </Box>
                )}
              </Box>
            )}
          </Paper>
        </motion.div>
      </motion.div>
    </Container>
  );
};
