// components/FormComponent.jsx
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next';
import {
  Paper,
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Person, Email, Message, LocationOn, Phone } from '@mui/icons-material';
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
        backgroundColor: 'rgba(255,255,255,0.9)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,1)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255,255,255,1)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        borderRadius: '24px',
        background: `linear-gradient(135deg, ${Colors.first_blue}08 0%, ${Colors.first_blue}15 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Contact Info */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOn sx={{ color: Colors.first_blue, mr: 2 }} />
          <Typography variant='body1' color='text.secondary'>
            Punta Cana, Dominican Republic
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Phone sx={{ color: Colors.first_blue, mr: 2 }} />
          <Typography variant='body1' color='text.secondary'>
            +1 (809) 555-0123
          </Typography>
        </Box>
      </Box>

      {/* Form */}
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
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
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

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
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

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <TextField
            name='user_message'
            fullWidth
            label={t('contactForm.message')}
            required
            multiline
            rows={4}
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

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
              '&:hover': {
                backgroundColor: Colors.second_blue,
                boxShadow: '0 6px 20px 0 rgba(0,118,255,0.39)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            {t('button.sendMessage')}
          </Button>
        </motion.div>
      </Box>
    </Paper>
  );
};
