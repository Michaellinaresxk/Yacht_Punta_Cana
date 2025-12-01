import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from 'yet-another-react-lightbox';
import FullScreen from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const ImageBoatsGallery = ({ image_array }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          marginTop: '15px',
          padding: '20px',
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Typography variant='h4' mb={3}>
          {t('cranchi.yacht-gallery')}
        </Typography>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}>
          <Masonry gutter='10px'>
            {image_array.map((image, i) => (
              <motion.div
                whileHover={{ translateY: -10 }}
                transition={{ duration: 1 }}
                key={i}
              >
                <Image
                  src={image.src}
                  width={100}
                  height={100}
                  style={{
                    width: '100%',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                  alt='boats images'
                  onClick={() => setOpen(true)}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={image_array}
          plugins={[FullScreen]}
        />
      </Box>
    </>
  );
};
