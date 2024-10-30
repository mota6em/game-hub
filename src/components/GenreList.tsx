import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../sevices/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre  | null
}

const GenreList = ({selectedGenre,onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((g) => (
        <ListItem paddingY={"5px"} key={g.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Button
            fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(g)}
              variant={"link"}
              fontSize="lg"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
