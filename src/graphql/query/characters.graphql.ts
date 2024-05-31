import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;


//Filtering character by ID
export const GET_CHARACTER_BY_ID = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      created
      
    }
  }
`;
