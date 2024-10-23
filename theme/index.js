"use client";

import { autocompleteClasses } from "@mui/material";
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
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          background: "#374151",
          border: "1px solid #4B5563",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          "&::after": {
            border: "1px solid #14B8A6",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9CA3AF",
          [`&.${autocompleteClasses.focused}`]: {
            color: "#9CA3AF",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          color: "#D1D5DB",
        },
      },
    },
  },
});

export default theme;
