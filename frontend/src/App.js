import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { themeSettings } from 'theme';

import Dashboard from 'components/DashboardPage/Dashboard';
import Layout from 'components/LayoutPage/Layout';
import Products from 'components/ProductsPage/Products';
import Customers from 'components/CustomersPage/Customers';
import Transactions from 'components/TransactionsPage/Transactions';
import Geography from 'components/GeographyPage/Geography';
import Overview from 'components/OverviewPage/Overview';
import Daily from 'components/DailyPage/Daily';
import Monthly from 'components/MonthlyPage/Monthly';
import Breakdown from 'components/BreakdownPage/Breakdown';
import Admins from 'components/AdminsPage/Admins';
import Performance from 'components/PerformancePage/Performance';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admins />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
