import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 613,
            laptop: 1024,
            desktop: 1200
        }
    },
    typography: {
      fontFamily: [
        'Montserrat'
      ]
    },
});