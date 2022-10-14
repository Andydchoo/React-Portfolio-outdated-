import { styled } from "@mui/material/styles";
import { PortfolioDesktop, PortfolioMobile } from "./PortfolioSizes";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery } from "@mui/material";

export default function Portfolio() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <div>
            {!matches && <PortfolioDesktop />}
            {matches && <PortfolioMobile />}
        </div>
    );
}
