import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useTheme, Box } from '@mui/material'


import Header from 'components/HeaderPage/Header'
import { useGetTransactionsQuery } from '../../state/api'


const Transactions = () => {
    const theme = useTheme();

    const [sort, setSort] = useState({});
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(20);

    const { data, isLoading } = useGetTransactionsQuery({ page, pageSize, sort: JSON.stringify(sort), search });


    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'userId', headerName: 'User ID', flex: 1 },
        { field: 'createdAt', headerName: 'Created At', flex: 1 },
        {
            field: 'products', headerName: 'Products', flex: 0.5, sortable: false,
            renderCell: (params) => params.value.length
        },
        {
            field: 'cost', headerName: 'Cost', flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        },
    ];


    return (
        <Box m="1.5rem 2.5rem">
            <Header title="TRANSACTIONS" subtitle="Complete List of Transactions" />
            <Box height="80vh">
                <DataGrid />
            </Box>
        </Box >
    )
}

export default Transactions