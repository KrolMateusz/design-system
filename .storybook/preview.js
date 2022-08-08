import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/themes/theme';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF'
      },
      {
        name: 'grey',
        value: '#E3E3E3',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ]
  }
}

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    )
  }
]