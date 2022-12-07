import { Cssbaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.global.mode);
  return (
    <div className="app">

    </div>
  );
}

export default App;
