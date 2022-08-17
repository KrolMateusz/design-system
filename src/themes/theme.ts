import { createTheme, PaletteColor } from '@mui/material/styles'

const ELEVATIOON_HOVER = '-2px 2px 0px'
const ELEVATION_MAIN = '-4px 4px 0px'

interface ElevationOption {
  main: string
  hover: string
}

declare module '@mui/material/styles' {
  interface Theme {
    elevation: Record<keyof Palette | 'disabled', ElevationOption>
  }
  interface Palette {
    yellow: PaletteColor
    blue: PaletteColor
    violet: PaletteColor
    red: PaletteColor
    green: PaletteColor
    white: PaletteColor
  }
  interface PaletteOptions {
    yellow: PaletteColor
    blue: PaletteColor
    violet: PaletteColor
    red: PaletteColor
    green: PaletteColor
    white: PaletteColor
  }
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobileSmall: true
    mobile: true
    mobileBig: true
    tablet: true
    tabletBig: true
    desktopSmall: true
    desktop: true
    desktopMedium: true
    desktopBig: true
    desktopFull: true
  }
}

const defaultTheme = createTheme()
let theme = createTheme({
  typography: {
    fontFamily: 'TT Commons',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'TT Commons';
          src: url('../../public/fonts/TT-Commons-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
      },
      styleOverrides: {
        circle: {
          strokeDasharray: '30px, 200px',
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        columnSpacing: defaultTheme.spacing(2),
        columns: {
          mobileSmall: 4,
          desktopSmall: 8,
          desktop: 16,
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobileSmall: 0,
      mobile: 320,
      mobileBig: 480,
      tablet: 768,
      tabletBig: 992,
      desktopSmall: 1024,
      desktop: 1200,
      desktopMedium: 1440,
      desktopBig: 1580,
      desktopFull: 1920,
    },
  },
  palette: {
    primary: {
      main: '#242424',
      light: '#242424',
      dark: '#242424',
      contrastText: '#FFFFFF',
    },
    yellow: defaultTheme.palette.augmentColor({
      name: 'yellow',
      color: {
        main: '#F2DA3A',
        light: '#FAF3C4',
        dark: '#F2DA3A',
        contrastText: '#242424',
      },
    }),
    violet: defaultTheme.palette.augmentColor({
      name: 'violet',
      color: {
        main: '#7563E7',
        light: '#E3DFFA',
        dark: '#7563E7',
        contrastText: '#FFFFFF',
      },
    }),
    blue: defaultTheme.palette.augmentColor({
      name: 'blue',
      color: {
        main: '#B2CBDE',
        light: '#E8EFF4',
        contrastText: '#242424',
      },
    }),
    red: defaultTheme.palette.augmentColor({
      name: 'red',
      color: {
        main: '#F68282',
        light: '#FDDADA',
        contrastText: '#242424',
      },
    }),
    green: defaultTheme.palette.augmentColor({
      name: 'green',
      color: {
        main: '#5ACBBC',
        light: '#CDEFEB',
        contrastText: '#242424',
      },
    }),
    white: defaultTheme.palette.augmentColor({
      name: 'white',
      color: {
        main: '#FFFFFF',
        light: '#FFFFFF',
        dark: '#FFFFFF',
        contrastText: '#242424',
      },
    }),
    action: {
      active: '#242424',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: '#9E9E9E',
      disabledBackground: '#E0E0E0',
      focus: '#DDDDDD',
    },
    error: {
      main: '#F44336',
      dark: '#E31B0C',
      light: '#F88078',
      contrastText: '#FFFFFF',
    },
  },
})

theme = createTheme(theme, {
  elevation: {
    primary: {
      main: `${ELEVATION_MAIN} ${theme.palette.primary.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.primary.main}`,
    },
    violet: {
      main: `${ELEVATION_MAIN} ${theme.palette.violet.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.violet.main}`,
    },
    blue: {
      main: `${ELEVATION_MAIN} ${theme.palette.blue.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.blue.main}`,
    },
    red: {
      main: `${ELEVATION_MAIN} ${theme.palette.red.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.red.main}`,
    },
    green: {
      main: `${ELEVATION_MAIN} ${theme.palette.green.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.green.main}`,
    },
    white: {
      main: `${ELEVATION_MAIN} ${theme.palette.white.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.white.main}`,
    },
    yellow: {
      main: `${ELEVATION_MAIN} ${theme.palette.yellow.main}`,
      hover: `${ELEVATIOON_HOVER} ${theme.palette.yellow.main}`,
    },
    disabled: {
      main: `${ELEVATION_MAIN} ${theme.palette.action.disabled}`,
    },
  },
})

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: '35px',
      fontWeight: 700,
      lineHeight: '34px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '72px',
        lineHeight: '64px',
      },
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '60px',
        lineHeight: '60px',
      },
    },
    h3: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: '30px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '45px',
        lineHeight: '46px',
      },
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '26px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '38px',
        lineHeight: '42px',
      },
    },
    h5: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '22px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '30px',
        lineHeight: '28px',
      },
    },
    h6: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '-0.03em',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    body1: {
      fontSize: '20px',
      lineHeight: '24px',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '26px',
        lineHeight: '30px',
      },
    },
    body2: {
      fontSize: '16px',
      lineHeight: '20px',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '20px',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '18px',
    },
    button: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '166%',
    },
    overline: {
      fontSize: '12px',
      lineHeight: '266%',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        container: ({ theme }) => ({
          [theme.breakpoints.up('mobileSmall')]: {
            margin: `${theme.spacing(0)} ${theme.spacing(2.5)}`,
          },
          [theme.breakpoints.up('tablet')]: {
            margin: `${theme.spacing(0)} ${theme.spacing(5)}`,
          },
          [theme.breakpoints.up('desktopSmall')]: {
            margin: `${theme.spacing(0)} ${theme.spacing(6)}`,
          },
          [theme.breakpoints.up('desktop')]: {
            margin: `${theme.spacing(0)} ${theme.spacing(5)}`,
          },
          [theme.breakpoints.up('desktopMedium')]: {
            margin: `auto ${theme.spacing(0)}`,
          },
        }),
      },
    },
  },
})

export default theme
