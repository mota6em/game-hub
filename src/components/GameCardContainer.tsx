import React from "react";
import { getGameCardDarkModeClasses } from "../assets/ts/classUtils";
import { ReactNode } from "react";
interface Props {
  isDarkMode: boolean;
  children: ReactNode;
}
const GameCardContainer = ({ children,isDarkMode }: Props) => {
  return (
    <div
      className={getGameCardDarkModeClasses(
        isDarkMode,
        "card col-12 col-md-2 col-lg-3 m-2 p-0 game-card h-fit-content"
      )}
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
