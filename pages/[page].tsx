import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Character, GetCharactersResults } from '@/types/characters';
import CharactersList from '@/components/CharactersList';

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
      <CharactersList characters={characters} title={`Star Wars Characters Page: ${page}`} />

      <div className="container-sm text-center mt-5">
        <button className="btn btn-primary me-5" disabled={previous ? false : true} type="button">
          <Link href={`/${page - 1}`}>Previous Page</Link>
        </button>
        <button className="btn btn-primary" disabled={next ? false : true} type="button">
          <Link href={`/${page ? page + 1 : 2}`}>Next Page</Link>
        </button>
      </div>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const page = context.query.page;
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const { previous, next, results }: GetCharactersResults = await response.json();

    if (!response.ok) {
      return { notFound: true };
    }

    return {
      props: {
        characters: results,
        previous,
        next,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};
