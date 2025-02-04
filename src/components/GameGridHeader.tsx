import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
interface Props {
  gameQery: GameQuery;
}
const GameGridHeader = ({ gameQery }: Props) => {
  const genre = useGenre(gameQery.genreId);
  const platform = usePlatform(gameQery.platformId);
  const heading = `
        ${gameQery.platformId ? platform?.name : ""}
        ${gameQery.genreId ? genre?.name : ""} Games`;
  return (
    <div className="d-flex align-item-start w-100 ms-5 my-3 fs-1 fw-bold">
      <div>{heading}</div>
    </div>
  );
};

export default GameGridHeader;
