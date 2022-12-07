import { Cssbaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Cssbaseline />
        <h1>hello world</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
