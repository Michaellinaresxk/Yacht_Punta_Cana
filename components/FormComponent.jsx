import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next';
import {
  Grid,
  Container,
  Paper,
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Person, Email, Message } from '@mui/icons-material';
import { Colors } from '../styles/theme';

export const FormComponent = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'puntacana_1234',
        'template_9015',
        form.current,
        's1YNkQ9lwTZJcq9AQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputProps = {
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.95)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255,255,255,0.95)',
        },
      },
    },
  };

  return (
    <Container maxWidth='sm' sx={{ my: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '24px',
            background: `linear-gradient(135deg, ${Colors.first_blue}11 0%, ${Colors.first_blue}22 100%)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 600,
              background: `linear-gradient(45deg, ${Colors.first_blue}, ${Colors.second_blue})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('contact-page.keepinTouch')}
          </Typography>

          <Box
            component='form'
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <TextField
                name='user_name'
                fullWidth
                label={t('contactForm.name')}
                required
                {...inputProps}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Person sx={{ color: Colors.first_blue }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <TextField
                name='user_email'
                fullWidth
                label={t('contactForm.email')}
                type='email'
                required
                {...inputProps}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Email sx={{ color: Colors.first_blue }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <TextField
                name='user_message'
                fullWidth
                label={t('contactForm.message')}
                required
                multiline
                rows={5}
                {...inputProps}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Message sx={{ color: Colors.first_blue }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='contained'
                type='submit'
                fullWidth
                sx={{
                  py: 2,
                  px: 4,
                  mt: 2,
                  backgroundColor: Colors.first_blue,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
                  '&:hover': {
                    backgroundColor: Colors.second_blue,
                    boxShadow: '0 6px 20px 0 rgba(0,118,255,0.39)',
                  },
                }}
              >
                {t('button.sendMessage')}
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};
