import { GetServerSideProps } from 'next';

import { Character, GetCharactersResults } from '@/types/characters';
import CharactersList from '@/components/CharactersList';

type Props = {
  characters: Character[];
};

const Search: React.FC<Props> = ({ characters }) => {
  return (
    <>
      <CharactersList characters={characters} title={`Search Results:`} />
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchQuery = context.query.q;

  const response = await fetch(`https://swapi.dev/api/people/?search=${searchQuery}`);
  const { previous, next, results }: GetCharactersResults = await response.json();

  return {
    props: {
      characters: results,
      previous,
      next,
    },
  };
};
