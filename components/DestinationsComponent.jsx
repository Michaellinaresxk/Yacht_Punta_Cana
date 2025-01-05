import destinos from '../database/destinos.js';
import Link from 'next/link';
import Image from 'next/image.js';
import { motion } from 'framer-motion';
import {
  Stack,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
} from '@mui/material';

export const DestinationsComponent = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {destinos.map((destino, index) => (
          <motion.div
            key={destino.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href='/destiny' style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  sx={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'transparent',
                    height: '100%',
                    position: 'relative',
                    '&:hover': {
                      '& .overlay': {
                        opacity: 1,
                      },
                      '& img': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                      alt={destino.place}
                      src={destino.img}
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                    <Box
                      // className='overlay'
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                        opacity: 0.8,
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      background: 'transparent',
                      p: 3,
                    }}
                  >
                    <Typography
                      variant='h5'
                      component='h3'
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        // textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      }}
                    >
                      {destino.place}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};
