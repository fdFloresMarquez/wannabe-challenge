import { GetServerSideProps } from 'next';

import { Character } from '@/types/characters';

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="card mt-5">
      <h5 className="card-header card-title">{character.name}</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Gender: {character.gender}</li>
        <li className="list-group-item">Mass: {character.mass}</li>
        <li className="list-group-item">Height: {character.height}</li>
        <li className="list-group-item">Eye Color: {character.eye_color}</li>
        <li className="list-group-item">Birth Year: {character.birth_year}</li>
      </ul>
    </div>
  );
};

export default CharacterCard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data: Character = await response.json();

  return {
    props: {
      character: data,
    },
  };
};
