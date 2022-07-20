import { createTheme } from '@mui/material/styles'

const elevationHover = '-2px 2px 0px'
const elevationMain = '-4px 4px 0px'

const defaultTheme = createTheme();
let theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
        main: '#242424',
        light: '#242424',
        dark: '#242424',
        contrastText: '#FFFFFF'
      },
    yellow: defaultTheme.palette.augmentColor({
      name: 'yellow',
      color: {
        main: '#F2DA3A',
        light: '#FAF3C4',
        dark: '#F2DA3A',
        contrastText: '#242424'
      }
    }),
    violet: defaultTheme.palette.augmentColor({
      name: 'violet',
      color: {
        main: '#7563E7',
        light: '#E3DFFA',
        dark: '#7563E7',
        contrastText: '#FFFFFF'
      },
    }),
    blue: defaultTheme.palette.augmentColor({
      name: 'blue',
      color: {
        main: '#B2CBDE',
        light: '#E8EFF4',
        contrastText: '#242424'
      },
    }),
    red: defaultTheme.palette.augmentColor({
      name: 'red',
      color: {
        main: '#F68282',
        light: '#FDDADA',
        contrastText: '#242424'
      }
    }),
    green: defaultTheme.palette.augmentColor({
      name: 'green',
      color: {
        main: '#5ACBBC',
        light: '#CDEFEB',
        contrastText: '#242424'
      }
    }),
    white: defaultTheme.palette.augmentColor({
      name: 'white',
      color: {
        main: '#FFFFFF',
        light: '#FFFFFF',
        dark: '#FFFFFF',
        contrastText: '#242424'
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
    }
  },
});

theme = createTheme(theme, {
  elevation: {
    primary: {
      main: `${elevationMain} ${theme.palette.primary.main}`,
      hover: `${elevationHover} ${theme.palette.primary.main}`
    },
    violet: {
      main: `${elevationMain} ${theme.palette.violet.main}`,
      hover: `${elevationHover} ${theme.palette.violet.main}`
    },
    blue: {
      main: `${elevationMain} ${theme.palette.blue.main}`,
      hover: `${elevationHover} ${theme.palette.blue.main}`
    },
    red: {
      main: `${elevationMain} ${theme.palette.red.main}`,
      hover: `${elevationHover} ${theme.palette.red.main}`
    },
    green: {
      main: `${elevationMain} ${theme.palette.green.main}`,
      hover: `${elevationHover} ${theme.palette.green.main}`
    },
    white: {
      main: `${elevationMain} ${theme.palette.white.main}`,
      hover: `${elevationHover} ${theme.palette.white.main}`
    },
    yellow: {
      main: `${elevationMain} ${theme.palette.yellow.main}`,
      hover: `${elevationHover} ${theme.palette.yellow.main}`
    },
    disabled: {
      main: `${elevationMain} ${theme.palette.action.disabled}`
    }
  },
})

export default theme;