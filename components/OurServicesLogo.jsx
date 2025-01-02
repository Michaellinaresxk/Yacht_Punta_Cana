import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo-colorfull-1.png';

export const OurServicesLogo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '85px',
        marginBottom: '100px',
        marginLeft: { xs: '15px' },
        marginRight: { xs: '15px' },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          sx={{
            fontSize: 'clamp(2em, 5vw, 4em)',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #00b0ff, #0081cb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          Our Services:
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: 'spring',
          stiffness: 150,
        }}
      >
        <Image
          src={logo}
          width={300}
          height={100}
          alt='puntacana yacht logo'
          style={{
            marginTop: '20px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </motion.div>
    </Box>
  );
};
