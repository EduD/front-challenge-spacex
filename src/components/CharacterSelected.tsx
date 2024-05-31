import { CharacterInfo } from './CharacterInfo';
import { ModalCharacter } from './Modal';

interface Props {
  characterId: string | null; // the id of the selected character.
  onClearSelected: () => void; //function to hide the modal and remove the selected character.
}


//It will evaluate if the characterId exists then we show the content of the modal.
export const CharacterSelected = ({ characterId, onClearSelected }: Props) => {
  return (
    <ModalCharacter
      isOpen={!!characterId}
      onClearSelected={onClearSelected}
    >
      <>{characterId && <CharacterInfo characterId={characterId} />}</>
    </ModalCharacter>
  );
};

