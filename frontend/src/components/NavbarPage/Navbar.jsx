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
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";

const Navbar = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();


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
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar;
