const COLORS = {
  /* Light Theme */
  primary: "#FAC710",
  accentYellow: "#FEF88F",
  accentBlue: "#414BB2",

  grayText: "#121212",

  white: "#F3F4F8",
  lightWhite: "#FBFBFF",
  offWhite: "#F8F8FF",

  /* Dark Theme */
  primaryDark: "#FFD740",
  accentYellowDark: "#FFE57F",
  accentBlueDark: "#A4B7FF",

  gray: "#222222",

  whiteText: "#FAFAFA",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
