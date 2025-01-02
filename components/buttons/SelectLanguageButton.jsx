import { useEffect, useState } from 'react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import { Language as LanguageIcon } from '@mui/icons-material';
import { Colors } from '../../styles/theme/index';

const languageNames = {
  es: 'Español',
  en: 'English',
};

const languageFlags = {
  es: '🇪🇸',
  en: '🇬🇧',
};

export const SelectLanguageButton = ({ isMobile = false }) => {
  const router = useRouter();
  const { pathname, locale } = router;
  const [language, setLanguage] = useState(locale || '');

  const handleClick = (l) => () => {
    setLanguage(l);
    router.push(pathname, undefined, { locale: l });
  };

  useEffect(() => {
    if (locale) {
      setLanguage(locale);
    }
  }, [locale]);

  return (
    <FormControl
      variant='outlined'
      size={isMobile ? 'medium' : 'small'}
      fullWidth={isMobile}
      sx={{
        minWidth: isMobile ? '100%' : 120,
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          transition: 'all 0.3s ease',
          '& fieldset': {
            borderColor: isMobile ? Colors.first_blue : 'rgba(0,0,0,0.08)',
          },
          '&:hover fieldset': {
            borderColor: Colors.first_blue,
          },
          '&.Mui-focused fieldset': {
            borderColor: Colors.first_blue,
          },
        },
      }}
    >
      <Select
        value={language}
        displayEmpty
        renderValue={(value) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              pl: isMobile ? 1 : 0,
            }}
          >
            {value ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span>{languageFlags[value]}</span>
                <span
                  style={{
                    fontSize: isMobile ? '1rem' : '0.9rem',
                    color: Colors.title,
                  }}
                >
                  {languageNames[value]}
                </span>
              </Box>
            ) : (
              'Select'
            )}
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              '& .MuiMenuItem-root': {
                padding: 2,
                '&:hover': {
                  backgroundColor: `${Colors.first_blue}15`,
                },
              },
            },
          },
        }}
      >
        {router.locales.map((l) => (
          <MenuItem
            key={l}
            value={l}
            onClick={handleClick(l)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderRadius: '8px',
              mx: 1,
              my: 0.5,
            }}
          >
            <span>{languageFlags[l]}</span>
            <span
              style={{
                fontSize: isMobile ? '1rem' : '0.9rem',
                color: Colors.title,
              }}
            >
              {languageNames[l]}
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
