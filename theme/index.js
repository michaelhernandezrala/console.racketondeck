"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#14B8A6",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#1F2937",
      default: "#111827",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          background: "linear-gradient(to right, #3B82F6, #14B8A6)",
          color: "#ffffff",
          border: "0",
          borderRadius: "0",
          "&:hover": {
            background: "linear-gradient(to right, #2563EB, #0D9488)",
          },
        },
      },
    },
  },
});

export default theme;
