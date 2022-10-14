import { styled } from "@mui/material/styles";
import { NavbarDesktop, NavbarMobile } from "./NavbarSizes";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery } from "@mui/material";

export default function Navbar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <div>
            {!matches && <NavbarDesktop />}
            {matches && <NavbarMobile />}
        </div>
    );
}
