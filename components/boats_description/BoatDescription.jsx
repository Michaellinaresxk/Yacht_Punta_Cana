import { Typography, Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Colors } from '../../styles/theme';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const BoatDescription = ({ boat }) => {
  const hasSplit = boat.split && (boat['split-img1'] || boat['split-img2']);

  return (
    <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 } }}>
      {/* ── Main descriptions ── */}
      <Box
        component={motion.div}
        custom={0}
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
        sx={{ mb: hasSplit ? 8 : 0 }}
      >
        {/* Accent line */}
        <Box
          sx={{
            width: 40,
            height: '2px',
            background: `linear-gradient(90deg, ${Colors.first_blue}, ${Colors.soft_blue})`,
            mb: 3,
          }}
        />

        <Typography
          variant='h5'
          sx={{
            color: Colors.off_white,
            fontWeight: 600,
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            letterSpacing: '-0.01em',
          }}
        >
          {boat.shortDesc}
        </Typography>

        <Grid container spacing={4}>
          {[boat.p1, boat.p2, boat.p3].filter(Boolean).map((text, i) => (
            <Grid item xs={12} md={boat.p3 ? 4 : 6} key={i}>
              <motion.div
                custom={0.1 + i * 0.1}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: Colors.text_muted,
                    lineHeight: 1.85,
                    fontSize: '0.97rem',
                  }}
                >
                  {text}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Split section: image + text ── */}
      {hasSplit && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Image 1 + desc1 */}
          {boat['split-img1'] && (
            <motion.div
              custom={0}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-40px' }}
            >
              <Box
                sx={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: { xs: 240, md: 300 },
                  mb: 2,
                }}
              >
                <Image
                  src={boat['split-img1']}
                  alt={`${boat.name} interior`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              {boat.split?.desc1 && (
                <Typography
                  variant='body2'
                  sx={{ color: Colors.text_muted, lineHeight: 1.8 }}
                >
                  {boat.split.desc1}
                </Typography>
              )}
            </motion.div>
          )}

          {/* Image 2 + desc2 */}
          {boat['split-img2'] && (
            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-40px' }}
            >
              <Box
                sx={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: { xs: 240, md: 300 },
                  mb: 2,
                }}
              >
                <Image
                  src={boat['split-img2']}
                  alt={`${boat.name} detail`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              {boat.split?.desc2 && (
                <Typography
                  variant='body2'
                  sx={{ color: Colors.text_muted, lineHeight: 1.8 }}
                >
                  {boat.split.desc2}
                </Typography>
              )}
            </motion.div>
          )}
        </Box>
      )}
    </Container>
  );
};
