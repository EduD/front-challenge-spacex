//to make read-only requests hook provided by apollo client
import { useQuery } from '@apollo/client';

import { useState } from 'react';
import {
  CardCharacter,
  CharacterSelected,
  ErrorMessage,
  Loading,
} from '../components';
import { GET_CHARACTERS } from '../graphql/query';
import { Characters } from '../types';

export const Grid = () => { 
  const [selected, setSelected] = useState<string | null>(null);

  const { loading, error, data } = useQuery<Characters>(GET_CHARACTERS);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error.message} />;

  return (
    <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 my-10 lg:gap-10 gap-5  px-5 sm:px-8 lg:px-12'>
      {data?.characters.results.map((character, index) => (
        <CardCharacter //Store select card
          key={character.id}
          {...character}
          index={index}
          onSelected={(characterId: string) => setSelected(characterId)}
        />
      ))}
    </section>
  );
};
