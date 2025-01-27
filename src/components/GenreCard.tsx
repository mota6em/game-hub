
import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
}
const GenreCard = ({ genre }: Props) => {
  return (
    <div className="d-flex my-2">
      <img src={genre.image_background} className="genre-img"></img>
      <div className="d-flex align-items-center justify-content-center">
        <p className="mx-2 m-0">{genre.name}</p>
      </div>
    </div>
  );
};

export default GenreCard;
