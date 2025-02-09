import { Genre } from "../entities/Genre";
import getCroppedImageURL from "../services/getCrippedImageURL";
import useGameQueryStore from "../store";
interface Props {
  genre: Genre;
  isDarkMode: boolean;
}
const GenreCard = ({ isDarkMode, genre }: Props) => {
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((state) => state.setGenreId);

  return (
    <div className="d-flex my-2 align-items-center">
      <img
        src={getCroppedImageURL(genre?.image_background || "")}
        className="genre-img"
      ></img>
      <div className="d-flex align-items-center justify-content-center">
        <button
          onClick={() => setSelectedGenreId(genre?.id)}
          type="button"
          className={`text-start btn btn-link ${
            selectedGenreId === genre?.id ? "fw-bold underline" : ""
          } ${isDarkMode ? "text-light" : "text-dark"}  m-0`}
        >
          {genre?.name}
        </button>
      </div>
    </div>
  );
};

export default GenreCard;
