
import { GameQuery } from "../App";
interface Props {
  gameQery: GameQuery;
}
const GameGridHeader = ({ gameQery }: Props) => {
  const heading = `
        ${gameQery.platform ? gameQery.platform.name : ""}
        ${gameQery.genre ? gameQery.genre.name : ""} Games`;
  return (
    <div className="d-flex align-item-start w-100 ms-5 my-3 fs-1 fw-bold">
      <div>{heading}</div>
    </div>
  );
};

export default GameGridHeader;
