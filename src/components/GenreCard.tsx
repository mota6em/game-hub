import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  isDarkMode: boolean;
  onClickGenre: () => void;
  selectedGenre: Genre | null;
}
const GenreCard = ({
  genre,
  isDarkMode,
  onClickGenre,
  selectedGenre,
}: Props) => {
  return (
    <div className="d-flex my-2 align-items-center">
      <img src={genre.image_background} className="genre-img"></img>
      <div className="d-flex align-items-center justify-content-center">
        <button
          onClick={() => onClickGenre()}
          type="button"
          className={`text-start btn btn-link ${
            selectedGenre?.id === genre.id ? "fw-bold underline" : ""
          } ${isDarkMode ? "text-light" : "text-dark"}  m-0`}
        >
          {genre.name}
        </button>
      </div>
    </div>
  );
};

export default GenreCard;
