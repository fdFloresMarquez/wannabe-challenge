import Link from 'next/link';
import { getCharacterId } from 'helpers/getCharacterId';

import { Character } from '@/types/characters';

type Props = {
  characters: Character[];
  title: string;
};

// This component renders inside every page that has a list of characters

const CharactersList: React.FC<Props> = ({ characters, title }) => {
  return (
    <>
      <main>
        <header className="mt-3">
          <h1 className="text-light">{title}</h1>
          <hr />
        </header>
      </main>

      <ul className="list-group">
        {characters.map((character: Character) => (
          <li
            key={character.name}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>{character.name}</div>

            <button className="btn btn-primary">
              <Link href={`/character/${getCharacterId(character.url)}`}>
                See character details
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharactersList;
