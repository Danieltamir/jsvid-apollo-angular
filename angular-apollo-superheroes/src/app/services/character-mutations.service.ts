import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {addCharacterMutation, deleteCharacterMutation} from "../constants/mutations";
import {CharacterModel, CharacterType} from "../models/character.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterMutationsService {

  public updateCharacter$ = new Subject<CharacterModel>();

  constructor(private apollo: Apollo) {
  }


  /**Below you will find the characters mutations**/
  /**==========================================**/

  addNewCharacter(character: any) {
    return this.apollo.mutate({
      mutation: addCharacterMutation,
      variables: {
        character: this.arrangeCharacter(character)
      }
    });
  }

  deleteCharacter(characterId: string) {
    return this.apollo.mutate({
      mutation: deleteCharacterMutation,
      variables: {
        characterId: characterId
      }
    })
  }

  private arrangeCharacter(character: CharacterModel) {
    return {
      name: character.name,
      characterType: character.characterType,
      features: character.features ? character.features.toString().split(',') : null,
      comicGroup: character.comicGroup,
      biggestRival: character.biggestRival? this.arrangeCharacter(character.biggestRival) : null,
      peopleKilled: character.charHistory.peopleKilled && character.characterType === CharacterType.VILLAIN? character.charHistory.peopleKilled : null,
      peopleSaved: character.charHistory.peopleSaved && character.characterType === CharacterType.HERO? character.charHistory.peopleSaved : null,
    }
  }
}