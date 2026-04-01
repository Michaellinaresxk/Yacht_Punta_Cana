import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, Skeleton } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

// Dynamic import with ssr: false — fixes the ESM/CJS conflict with react-responsive-masonry
const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  {
    ssr: false,
    loading: () => (
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} variant='rectangular' height={180} sx={{ borderRadius: 2 }} />
        ))}
      </Box>
    ),
  }
);

const Masonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.default),
  { ssr: false }
);

export const ImageBoatsGallery = ({ image_array }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        mt: 4,
        px: { xs: 2, sm: 4 },
        width: { xs: '100%', md: '90%' },
        mx: 'auto',
      }}
    >
      <Typography
        variant='h4'
        mb={3}
        sx={{ fontWeight: 600, color: 'text.primary' }}
      >
        {t('cranchi.yacht-gallery')}
      </Typography>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}>
        <Masonry gutter='10px'>
          {image_array.map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ cursor: 'pointer' }}
              onClick={() => handleOpen(i)}
            >
              <Image
                src={image.src}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
                alt={`yacht image ${i + 1}`}
              />
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={image_array}
      />
    </Box>
  );
};
