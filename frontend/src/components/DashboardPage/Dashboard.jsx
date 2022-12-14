import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "components/HeaderPage/Header";
import FlexBetween from "components/Styles/FlexBetween";
import BreakdownChart from "components/BreakdownPage/BreakdownChart";
import OverviewChart from "components/OverviewPage/OverviewChart";
import StatBox from "components/StatPage/StatBox";

import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery(theme.breakpoints.down("md"));

    const { data, isLoading } = useGetDashboardQuery();
    console.log("Dashboard ~ data", data)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
