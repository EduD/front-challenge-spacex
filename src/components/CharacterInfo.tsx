import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../graphql/query/characters.graphql";
import { CharacterByID } from "../types";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";

export const CharacterInfo = ({ characterId }: { characterId: string }) => {
  const { data, loading, error } = useQuery <CharacterByID> (
    GET_CHARACTER_BY_ID,
    { variables: { id: characterId } }
  );

  if (loading) return <Loading />;

  if (error || !data) return <ErrorMessage error={error!.message} />;

  const { created, gender, image, name, species, status } = data.character;

  return (
    <div className=" mt-16 flex flex-col justify-center items-center sm:gap-8 gap-3 sm:px-0 px-8">
      <span className="text-3xl lg:text-4xl font-semibold">{name}</span>

      <img src={image} className=" rounded-md shadow-2xl shadow-black" />

      <div className=" sm:w-fit flex flex-col gap-2">
        <p className="rounded-lg bg-gray-800 p-4 text-start sm:text-xl text-lg relative">
          Status: {status}
        </p>
        <p className="rounded-lg bg-gray-800 p-4 text-start sm:text-xl text-lg relative">
          Specie: {species}
        </p>
        <p className="rounded-lg bg-gray-800 p-4 text-start sm:text-xl text-lg relative">
          Gender: {gender}
        </p>

        <p className="mt-2 text-lg">
          Created at: <span>{created}</span>
        </p>
      </div>
    </div>
  );
};
