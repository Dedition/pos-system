import { useState } from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    ArrowDropDownOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined
} from "@mui/icons-material";
import FlexBetween from "../Styles/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profilepic from "../../assets/profilepic.jpeg";
import { AppBar, Button, Box, Typography, IconButton, InputBase, Toolbar, MenuItem, Menu, useTheme } from "@mui/material";

const Navbar = ({ user, isSideBarOpen, setIsSideBarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* RIGHT */}
                <FlexBetween gap={"1.5rem"}>
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "Dark" ? <DarkModeOutlined
                            sx={{ fontSize: "25px" }}
                        /> : <LightModeOutlined
                            sx={{ fontSize: "25px" }}
                        />}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined
                            sx={{ fontSize: "25px" }}
                        />
                    </IconButton>


                    <FlexBetween>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem"
                            }}
                        >
                            <Box component="img" alt={"profile image"} src={profilepic} height="32px" width="32px" borderRadius={"50%"}
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    variant="body1" fontWeight="bold" fontSize="0.85rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user?.name}
                                </Typography>
                                <Typography
                                    variant="body1" fontWeight="bold" fontSize="0.75rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user?.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{ fontSize: "25px", color: theme.palette.secondary[300] }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                        >
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar;
