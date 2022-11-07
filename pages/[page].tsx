import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Character, GetCharactersResults } from '@/types/characters';

type Props = {
  characters: Character[];
  previous: string | null;
  next: string | null;
};

const Page: NextPage<Props> = ({ characters, previous, next }) => {
  const route = useRouter();

  const page = Number(route.query.page);

  return (
    <>
      <main>
        <header className="mt-3">
          <h1>Star Wars Characters</h1>
          <hr />
        </header>
      </main>

      <ul className="list-group">
        {characters.map((character: Character) => (
          <li key={character.name} className="list-group-item">
            {character.name}
          </li>
        ))}
      </ul>

      <div className="container-sm text-center mt-5">
        <button className="btn btn-primary me-5" disabled={previous ? false : true} type="button">
          <Link href={`/${page - 1}`}>Previous Page</Link>
        </button>
        <button className="btn btn-primary" disabled={next ? false : true} type="button">
          <Link href={`/${page + 1}`}>Next Page</Link>
        </button>
      </div>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page;

  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const { previous, next, results }: GetCharactersResults = await response.json();

  return {
    props: {
      characters: results,
      previous,
      next,
    },
  };
};
