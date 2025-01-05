import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  ImageList,
  ImageListItem,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import WavesIcon from '@mui/icons-material/Waves';
import AnchorIcon from '@mui/icons-material/Anchor';

export const ExperienceGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a',
      alt: 'Luxury yacht sailing',
      cols: 2,
      rows: 2,
    },
    {
      src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166',
      alt: 'Sunset cruise',
      cols: 2,
      rows: 1,
    },
    {
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
      alt: 'Caribbean waters',
      cols: 2,
      rows: 2,
    },
    {
      src: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
      alt: 'Yacht experience',
      cols: 2,
      rows: 1,
    },
  ];

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Elementos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background:
            'linear-gradient(45deg, rgba(0, 176, 255, 0.1), rgba(0, 129, 203, 0.1))',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background:
            'linear-gradient(45deg, rgba(0, 176, 255, 0.1), rgba(0, 129, 203, 0.1))',
          zIndex: 0,
        }}
      />
      {/* Iconos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          transform: 'rotate(-15deg)',
          color: 'rgba(0, 176, 255, 0.1)',
        }}
      >
        <AnchorIcon sx={{ fontSize: 60 }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          transform: 'rotate(15deg)',
          color: 'rgba(0, 176, 255, 0.1)',
        }}
      >
        <DirectionsBoatIcon sx={{ fontSize: 60 }} />
      </Box>

      <Container maxWidth='xl' sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <WavesIcon
                sx={{
                  color: '#00b0ff',
                  fontSize: 40,
                  transform: 'rotate(-15deg)',
                }}
              />
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  fontSize: 'clamp(2em, 4vw, 3.5em)',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #00b0ff, #0081cb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Experience the Luxury
              </Typography>
              <WavesIcon
                sx={{
                  color: '#00b0ff',
                  fontSize: 40,
                  transform: 'rotate(15deg)',
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant='h6'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.8,
                px: 2,
              }}
            >
              Whether you're planning a romantic sunset cruise, a family
              adventure, or a corporate event, our fleet offers the perfect
              vessel for your journey.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              height: 40,
              background: 'linear-gradient(to bottom, transparent, #00b0ff)',
            },
          }}
        >
          <ImageList
            variant='quilted'
            cols={4}
            rowHeight={isMobile ? 160 : 200}
            gap={24}
            sx={{
              mb: 8,
              '& .MuiImageListItem-root': {
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              },
            }}
          >
            {galleryImages.map((image, index) => (
              <ImageListItem
                key={index}
                cols={isMobile ? 2 : image.cols}
                rows={image.rows}
                sx={{
                  cursor: 'pointer',
                  '&:hover img': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover .image-overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleOpen(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading='lazy'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
                <Box
                  className='image-overlay'
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      p: 2,
                      fontWeight: 500,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {image.alt}
                  </Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='lg'
        fullScreen={isMobile}
      >
        {currentImage && (
          <Box sx={{ position: 'relative', bgcolor: 'black' }}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                zIndex: 1,
                bgcolor: 'rgba(0,0,0,0.5)',
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: '100%',
                height: '90vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};
