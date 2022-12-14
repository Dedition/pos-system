import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../Styles/FlexBetween";
import profilepic from "../../assets/profilepic.jpeg";
import {
    Box, Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme, ListItemButton,
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRightOutlined,
    SettingsOutlined,
} from "@mui/icons-material";
import { navItems } from "./NavItems";


const Sidebar = ({
    user, isNonMobile, drawerWidth, isSideBarOpen, setIsSideBarOpen,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => { setActive(pathname.split("/")[1]); }, [pathname]);

    return (
        <Box component="nav">
            {isSideBarOpen && (
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
                            boxSixing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        POSystem
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    );
                                }
                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? theme.palette.secondary[300]
                                                        : "transparent",
                                                color:
                                                    active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[100],
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color:
                                                        active === lcText
                                                            ? theme.palette.primary[600]
                                                            : theme.palette.secondary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                    <Box position="absolute" bottom="2rem">
                        <Divider />
                        <FlexBetween textTransform={"none"} gap="1rem" m="1.5rem 2rem 0 3rem">
                            <Box component="img" alt={"profile image"} src={profilepic} height="40px" width="40px" borderRadius={"50%"}
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography variant="body1" fontWeight="bold" fontSize="0.9rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user?.name}
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" fontSize="0.8rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user?.occupation}
                                </Typography>
                            </Box>
                            <SettingsOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px" }} />
                        </FlexBetween>
                    </Box>
                </Drawer >
            )}
        </Box >

    )
}


export default Sidebar;
