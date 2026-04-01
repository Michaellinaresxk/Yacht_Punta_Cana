import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import { boats } from '../constants/boats';
import { Colors } from '../styles/theme';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const BoatCard = ({ boat, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={cardVariants} style={{ height: '100%' }}>
      <Link href={boat.link} style={{ display: 'block', height: '100%' }}>
        <Box
          component={motion.div}
          whileHover="hover"
          initial="rest"
          animate="rest"
          sx={{
            position: 'relative',
            height: { xs: '380px', sm: '420px', md: '460px' },
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            // Border that glows on hover
            border: '1px solid rgba(12, 113, 224, 0.12)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            '&:hover': {
              borderColor: 'rgba(12, 113, 224, 0.55)',
              boxShadow:
                '0 0 0 1px rgba(12, 113, 224, 0.2), 0 24px 64px rgba(0,0,0,0.6)',
            },
          }}
        >
          {/* ── Background image ── */}
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.07 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${boat.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* ── Permanent gradient overlay ── */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(6,16,30,0.95) 0%, rgba(6,16,30,0.5) 50%, rgba(6,16,30,0.15) 100%)',
              zIndex: 1,
            }}
          />

          {/* ── Blue tint on hover ── */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(8,89,198,0.35) 0%, transparent 60%)',
              zIndex: 2,
            }}
          />

          {/* ── Top badge ── */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              px: 1.5,
              py: 0.6,
              borderRadius: '20px',
              backgroundColor: 'rgba(6, 16, 30, 0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(16, 165, 245, 0.25)',
            }}
          >
            <DirectionsBoatIcon
              sx={{ fontSize: 13, color: Colors.soft_blue }}
            />
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: Colors.soft_blue,
              }}
            >
              Yacht
            </Typography>
          </Box>

          {/* ── Card number ── */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 3,
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: 'rgba(6, 16, 30, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>
          </Box>

          {/* ── Content that slides up on hover ── */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 4,
              p: { xs: 2.5, md: 3 },
            }}
          >
            {/* Title — always visible */}
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                color: '#fff',
                mb: 0.75,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                letterSpacing: '-0.01em',
              }}
            >
              {boat.title}
            </Typography>

            {/* Description — slides in on hover */}
            <motion.div
              variants={{
                rest: { opacity: 0, y: 12, height: 0 },
                hover: { opacity: 1, y: 0, height: 'auto' },
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <Typography
                variant='body2'
                sx={{
                  color: 'rgba(220, 232, 248, 0.75)',
                  lineHeight: 1.65,
                  mb: 2,
                  fontSize: '0.875rem',
                }}
              >
                {t(boat.description)}
              </Typography>
            </motion.div>

            {/* Divider line */}
            <Box
              sx={{
                height: '1px',
                background:
                  'linear-gradient(90deg, rgba(12,113,224,0.6), transparent)',
                mb: 2,
              }}
            />

            {/* CTA row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(220, 232, 248, 0.45)',
                }}
              >
                Punta Cana
              </Typography>

              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                }}
                transition={{ duration: 0.25 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 2,
                    py: 0.85,
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg, #0c71e0 0%, #0859c6 100%)',
                    boxShadow: '0 4px 16px rgba(12, 113, 224, 0.4)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: '#fff',
                    }}
                  >
                    {t('button.more')}
                  </Typography>
                  <ArrowForwardIcon sx={{ fontSize: 13, color: '#fff' }} />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Link>
    </motion.div>
  );
};

export const BoatsComponent = () => {
  return (
    <Container sx={{ mt: 4, mb: 10, maxWidth: 'lg' }}>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-80px' }}
      >
        <Grid container spacing={3}>
          {boats.map((boat, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <BoatCard boat={boat} index={index} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};
