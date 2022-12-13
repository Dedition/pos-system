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




    return (
        <div>Transactions</div>
    )
}

export default Transactions
