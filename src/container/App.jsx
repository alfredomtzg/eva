
// Routes
import Routes from '../Route';
// Material global style
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ee8d8c',
    },
    secondary: {
      main: '#726361',
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
