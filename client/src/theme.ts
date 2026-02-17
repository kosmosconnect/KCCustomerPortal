import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A1128', // Deep space blue
      light: '#1A2980',
      dark: '#060818',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00B4D8', // Bright blue
      light: '#48CAE4',
      dark: '#0096C7',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.7)',
    },
    error: {
      main: '#FF5C8D',
    },
    warning: {
      main: '#FFD60A',
    },
    success: {
      main: '#00F5D4',
    },
    info: {
      main: '#48CAE4',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 25px',
          fontSize: '1rem',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #1A2980 30%, #26D0CE 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1A2980 10%, #26D0CE 70%)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00B4D8 30%, #0096C7 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #0096C7 30%, #00B4D8 90%)',
          },
        },
        outlined: {
          borderColor: '#00B4D8',
          '&:hover': {
            borderColor: '#0096C7',
            background: 'rgba(0, 180, 216, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          background: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          color: '#000000',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: '#00B4D8',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0096C7',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#ffffff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
        head: {
          fontWeight: 600,
          background: 'rgba(0, 180, 216, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
        filled: {
          background: 'rgba(0, 180, 216, 0.2)',
          '&:hover': {
            background: 'rgba(0, 180, 216, 0.3)',
          },
        },
      },
    },
  },
});

export default theme;
