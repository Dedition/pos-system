import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/NavbarPage/Navbar";
import Sidebar from "components/SidebarPage/Sidebar";
import { useGetUserQuery } from "state/api";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);
    console.log("Layout ~ data", data)



    return (
        <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
            <Sidebar
                user={data || {}}
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Navbar
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Outlet />
        </Box>
    )
}

export default Layout;
