import {
  Box,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  Container,
  Divider,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export const BoatsTechnicalData = ({ features }) => {
  const { t } = useTranslation();
  const entries = Object.entries(features);

  return (
    <Container maxWidth='lg'>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          my: 8,
        }}
      >
        <Typography
          variant='h4'
          component={motion.h4}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          sx={{
            mb: 6,
            fontWeight: 600,
            textAlign: { xs: 'center', md: 'left' },
            background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('technical.technical')}
        </Typography>

        <Paper
          elevation={0}
          sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <TableContainer>
            <Table>
              <TableBody>
                {entries.map(([key, value], index) => (
                  <TableRow
                    key={index}
                    component={motion.tr}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    sx={{
                      '&:nth-of-type(odd)': {
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <TableCell
                      sx={{
                        py: 3,
                        px: 4,
                        border: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      <Typography
                        variant='subtitle1'
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {key}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align='right'
                      sx={{
                        py: 3,
                        px: 4,
                        border: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                        }}
                      >
                        {value}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};
