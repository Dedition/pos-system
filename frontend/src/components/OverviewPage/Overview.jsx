import { useState } from 'react';
import { Box, FormControl, MenuItem, Box, Select } from '@mui/material';

import Header from 'components/HeaderPage/Header';
import OverviewChart from './OverviewChart';

const Overview = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Overview" subtitle="Overview of revenue + profit" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            label="View"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  )
};

export default Overview;
