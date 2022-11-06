import { styled } from "@mui/material/styles";
import { IntroDesktop, IntroMobile } from "./Introsizes";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery } from "@mui/material";

export default function Intro() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <div>
            {!matches && <IntroDesktop />}
            {matches && <IntroMobile />}
        </div>
    );
}
