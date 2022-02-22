export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 742,
  tablet: 1063,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `screen and (max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `screen and (max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `screen and (max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
