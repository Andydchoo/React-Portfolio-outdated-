import { styled } from "@mui/material/styles";
import { ContactDesktop, ContactMobile } from "./ContactSizes";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery } from "@mui/material";

export default function Contact() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <div>
            {!matches && <ContactDesktop />}
            {matches && <ContactMobile />}
        </div>
    );
}
