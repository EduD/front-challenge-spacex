//to make read-only requests hook provided by apollo client
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CardCharacter,
  CharacterSelected,
  ErrorMessage,
  Loading,
} from "../components";
import { GET_CHARACTERS } from "../graphql/query/characters.graphql";
import { Characters } from "../types";

export const Grid = () => {
  const [selected, setSelected] = useState <string | null>(null);

  const { loading, error, data } = useQuery <Characters> (GET_CHARACTERS);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error.message} />;

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-2 my-10 lg:gap-10 gap-5 px-5 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 my-10 lg:gap-10 gap-5 px-5 sm:px-8 lg:px-12">
        {data?.characters.results.map((character, index) => (
          <CardCharacter
            key={character.id}
            {...character}
            index={index}
            onSelected={(characterId: string) => setSelected(characterId)}
          />
        ))}
      </div>
      <CharacterSelected
        onClearSelected={() => setSelected(null)}
        characterId={selected}
      />
    </section>
  );
};
