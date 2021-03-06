export const schemaTypes = `

  ## Queries
  ## =========================================

  type Query {
    characters: [Character]
    getCharacterById(id: ID!): Character
  }

  ## Mutations
  ## =========================================

  type Mutation {
    addNewCharacter(input: CharacterInput): MutationResult!
    deleteCharacter(characterId: ID): MutationResult!
  }

  ## Objects Types!
  ## =========================================

  type Character {
    id: ID
    name: String
    age: Int
    superPowers: [String]
    comicGroup: ComicGroup
    characterType: CharacterType
    biggestRival: Character
  }

  enum ComicGroup {
    DC
    MARVEL
  }

  enum CharacterType {
    HERO
    VILLAIN
  }

  ## Mutations Inputs!
  ## =========================================

  input CharacterInput {
    id: ID
    name: String
    characterType: CharacterType
    features: [String]
    comicGroup: ComicGroup
    peopleKilled: Int
    peopleSaved: Int
  }

  type MutationResult {
    successful: Boolean
  }
`;
