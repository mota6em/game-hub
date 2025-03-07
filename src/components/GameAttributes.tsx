import Game from "../entities/Game";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="container-fluid px-md-0 col-md-4">
      <div className="row d-flex align-items-start justify-content-between">
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <p key={platform.id} className="my-1 ">
              {platform.name}
            </p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map(({ name }) => (
            <p key={name} className="my-1 ">
              {name}
            </p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <p key={publisher.id} className="my-1 ">
              {publisher.name}
            </p>
          ))}
        </DefinitionItem>
      </div>
    </div>
  );
};

export default GameAttributes;
