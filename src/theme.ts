import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#114c90',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 720,
      lg: 1280,
      xl: 1920,
    },
  },
})

export default theme
