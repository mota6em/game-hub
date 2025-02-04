import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQery: GameQuery;
}
const GameGridHeader = ({ gameQery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQery.platformId);
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
