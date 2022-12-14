import { Box } from "@mui/material";
import Header from "components/HeaderPage/Header";
import BreakdownChart from "components/BreakdownPage/BreakdownChart";

const Breakdown = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Breakdown" subtitle="Categorical breakdown of sales" />
            <Box mt="40px" height="75vh">
                <BreakdownChart />
            </Box>
        </Box>
    )
};

export default Breakdown;
