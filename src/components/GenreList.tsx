import useGenres, { Genre } from "../hooks/useGenres";
import GenreCard from "./GenreCard";
import GenreCardSkeleton from "./GenreCardSkeleton";

interface Props {
  isDarkMode: boolean;
  onClickGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ isDarkMode, onClickGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  if (error) return null;
  if (isLoading)
    return (
      <>
        {skeletons.map((s) => (
          <GenreCardSkeleton key={s} />
        ))}
        <GenreCardSkeleton />
      </>
    );
  return (
    <div>
      {data?.results.map((genre) => (
        <GenreCard
          selectedGenreId={selectedGenreId}
          onClickGenre={() => onClickGenre(genre)}
          isDarkMode={isDarkMode}
          key={genre.id}
          genre={genre}
        />
      ))}
    </div>
  );
};

export default GenreList;
