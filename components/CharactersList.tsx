import Link from 'next/link';
import { getCharacterId } from 'helpers/getCharacterId';

import { Character } from '@/types/characters';

type Props = {
  characters: Character[];
  title: string;
};

/**
 * This component renders inside every page that has a list of characters
 * It needs an array of characters and a title to show the information.
 */

const CharactersList: React.FC<Props> = ({ characters, title }) => {
  return (
    <>
      <main>
        <header className="mt-3">
          <h1>{title}</h1>
          <hr />
        </header>
      </main>

      <ul className="list-group">
        {/* Maps to the array of characters and adds a title and a link to the route with Character
        Id */}
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
