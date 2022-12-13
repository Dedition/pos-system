import { useTheme, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetCustomersQuery } from 'state/api';
import Header from 'components/HeaderPage/Header';
import columns from './Columns';


const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Customers" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"

      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Customers;
