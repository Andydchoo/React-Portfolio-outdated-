import { styled } from "@mui/material/styles";
import { ResumeDesktop, ResumeMobile } from "./ResumeSizes";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery } from "@mui/material";

export default function Resume() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <div>
            {!matches && <ResumeDesktop />}
            {matches && <ResumeMobile />}
        </div>
    );
}
