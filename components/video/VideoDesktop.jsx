import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import ReactPlayer from 'react-player';
import { useTranslation } from 'next-i18next';
import { Colors } from '../../styles/theme/index';
import PlayCircleIcon from '@mui/icons-material/PlayCircle'; // Cambiamos el ícono a uno que está seguro disponible
import dynamic from 'next/dynamic';

export const VideoDesktop = () => {
  // Importar ReactPlayer dinámicamente sin SSR
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { t } = useTranslation();
  const urlVideo =
    'https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1671285248/video-tour_sxqsw8.mp4';

  const handleReady = () => {
    console.log('Video is ready to play');
    setReady(true);
  };

  const handleError = (err) => {
    console.error('Video player error:', err);
    setError(true);
  };
  return (
    <Container maxWidth='xl' sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 6 }}>
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='center'
          sx={{ mb: 3 }}
        >
          <PlayCircleIcon
            sx={{
              fontSize: { xs: '2.3rem', md: '3.5rem' },
              color: Colors.first_blue,
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 1,
                },
                '50%': {
                  transform: 'scale(1.1)',
                  opacity: 0.8,
                },
                '100%': {
                  transform: 'scale(1)',
                  opacity: 1,
                },
              },
            }}
          />
          <Typography
            variant='h2'
            sx={{
              fontWeight: 600,
              fontSize: { xs: '2.3rem', md: '3.5rem' },
              background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Video Tour
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.8,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {t('video-tour.slogan')}
        </Typography>
      </Box>

      <Paper
        sx={{
          position: 'relative',
          paddingTop: '56.25%',
          width: { xs: '100%', md: '80%' },
          mx: 'auto',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: 'black',
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
            <Typography variant='h6'>Unable to load the video</Typography>
          </Box>
        ) : (
          <ReactPlayer
            url={urlVideo}
            width='100%'
            height='100%'
            controls
            playing={false}
            onReady={handleReady}
            onError={handleError}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        )}

        {!ready && !error && (
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
            <Typography variant='body1'>Loading video...</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};
