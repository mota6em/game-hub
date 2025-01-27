import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  isDarkMode: boolean;
  onClickGenre: () => void
}
const GenreCard = ({ genre, isDarkMode,onClickGenre }: Props) => {
  return (
    <div className="d-flex my-2 align-items-center">
      <img src={genre.image_background} className="genre-img"></img>
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={()=>onClickGenre()} type="button" className={`text-start btn btn-link ${isDarkMode ? 'text-light' : 'text-dark'}  m-0`}>
          {genre.name}
        </button>
      </div>
    </div>
  );
};

export default GenreCard;
