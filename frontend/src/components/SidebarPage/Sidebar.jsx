import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../Styles/FlexBetween";
import profilepic from "../../assets/profilepic.jpeg";
import {
    Box, Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme,
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";

const Sidebar = ({
    isNonMobile, drawerWidth, isSideBarOpen, setIsSideBarOpen,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => { setActive(pathname.split("/")[1]); }, [pathname]);

    return (
        <Box component="nav">
            [isSideBarOpen && (
            <Drawer
                open={isSideBarOpen}
                onClose={() => setIsSideBarOpen(false)}
                variant={isNonMobile ? "persistent" : "temporary"}
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth
                    }
                }}
            >

            </Drawer>
            )]
        </Box >
    )
}

export default Sidebar;
