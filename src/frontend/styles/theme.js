import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  cyan: {
    700: "#0369a1",
    600: "#2563eb",
    500: "#0ea5e9",
    400: "#38bdf8",
    300: "#7dd3fc",
    200: "#bae6fd",
  },
  gray: {
    900: "#121212",
    800: "#2d2d3a",
    700: "#535353",
    600: "#8b8b8b",
    500: "#718096",
    300: "#b9b9b9",
    100: "#fffffa5d",
  },
  white: {
    900: "#ffffff",
    800: "#fafafa",
  },
  black: {
    900: "000",
    800: "#1a1a1a",
    700: "#16181c",
    600: "#4d4d4d",
  },
};

const fonts = {
  body: "Nunito Sans , serif",
  dancing: "Dancing Script , cursive",
};

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "gray.900" : "white.800",
      outline: "none",
    },
    Button: {
      color: props.colorMode === "light" ? "whiteAlpha.900" : "black.800",
      outline: "none",
      bg: "cyan.400",
      fontSize: "xl",
      fontWeight: "semibold",
      _hover: {
        bg: "cyan.500",
      },
      _disabled_hover: {
        bg: "unset",
      },
      borderColor: props.colorMode === "light" ? "cyan.200" : "cyan.200",
    },
    "*::placeholder": {
      color: props.colorMode === "light" ? "gray.400" : "whiteAlpha.700",
    },
    img: {
      _hover: {
        cursor: "pointer",
      },
    },
  }),
};

export const components = {
  Button: {
    baseStyle: {
      py: "2",
      minW: 10,
      borderRadius: "md",
      _focus: {
        boxShadow: "xs",
        outline: "none",
      },
    },
    variants: {
      solidPrimary: {
        height: "auto",
        px: "1.5rem",
      },
      iconButton: {
        as: "span",
        color: "gray.800",
        fontSize: "1.6rem",
        background: "transparent",
        borderColor: "transparent",
        py: "1.2",
        px: "1.2",
        _hover: {
          background: "transparent",
        },
      },
      outline: {
        background: "none",
        borderColor: "cyan.400",
        _hover: {
          background: "cyan.400",
          color: "whiteAlpha.900",
        },
      },
      link: {
        color: "cyan.400",
        background: "transparent",
        _hover: {
          background: "transparent",
          textDecoration: "none",
        },
        _active: {
          background: "transparent",
          textDecoration: "none",
        },
      },
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
  styles,
  components,
});
