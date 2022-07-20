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