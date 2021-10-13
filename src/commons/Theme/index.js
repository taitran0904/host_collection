import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

const theme = createTheme({
  color: {
    primary: "#666687",
    color2: "#b2b2be",
    color3: "#cbcbe0",
    color4: "#666666",
    color5: "#f0f0f0",
    color6: "#4d4d4d",
    color7: "#ff7bab",
    color8: "#b2b2b2",
    gray: "#555",
    gray2: "#999",
    gray3: "#f5f6f8",
    error: red[500],
  },
  colors: {
    primary: "#666687",
    color2: "#b2b2be",
    color3: "#cbcbe0",
    color4: "#666666",
    color5: "#f0f0f0",
    color6: "#4d4d4d",
    color7: "#ff7bab",
    color8: "#b2b2b2",
    gray: "#555",
    gray2: "#999",
    gray3: "#f5f6f8",
    error: red[500],
  },
  breakpoints: {
    values: {
      xs: 575,
      sm: 767,
      md: 992,
      lg: 1200,
      xl: 1366,
    },
  },
});

export const keys = ["xs", "sm", "md", "lg", "xl"];
export default theme;
