export const getDarkModeClasses = (
  isDarkMode: boolean,
  baseClasses: string
): string => {
  return `${baseClasses} ${
    isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
  }`;
};

export const getNavDarkModeClasses = (
  isDarkMode: boolean,
  baseClasses: string
): string => {
  return `
    ${baseClasses} ${
    isDarkMode ? "bg-black text-white" : "bg-dark text-white"
  }`;
};
export const getGameCardDarkModeClasses = (
  isDarkMode: boolean,
  baseClasses: string
): string => {
  return `
    ${baseClasses} ${
    isDarkMode ? "bg-black text-white" : "bg-dark text-white"
  }`;
};
